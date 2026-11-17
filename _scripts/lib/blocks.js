#!/usr/bin/env node
// check-es:skip
/**
 * _scripts/lib/blocks.js
 *
 * Renderitzador en build-step per a blocs de programació visual (ScratchBlocks / mBlock 5 / LEGO SPIKE Prime / MakeCode).
 * Genera fitxers SVG purs i autònoms (amb xmlns complet, mètriques tipogràfiques reals a 12pt/16px
 * i contrast automàtic per a desplegables i blocs grocs) sense dependències externes de npm.
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const {
  renderOrGetMakeCodeSVG,
  setCachedMakeCodeSVG,
  getCachedMakeCodeSVG,
  getMakeCodeHash
} = require('./makecode-cache');

// 1. Taula exacta d'amplades de glifs per a 12pt (16px) Sans-Serif Medium (Noto Sans / Helvetica Neue 500)
const GLYPH_WIDTHS_16PX = {
  ' ': 4.5, '!': 4.4, '"': 6.8, '#': 10.3, '$': 9.2, '%': 13.6, '&': 11.8, "'": 3.8,
  '(': 5.0, ')': 5.0, '*': 8.8, '+': 9.2, ',': 4.4, '-': 5.5, '.': 4.4, '/': 6.1,
  '0': 9.2, '1': 9.2, '2': 9.2, '3': 9.2, '4': 9.2, '5': 9.2, '6': 9.2, '7': 9.2, '8': 9.2, '9': 9.2,
  ':': 4.4, ';': 4.4, '<': 9.2, '=': 9.2, '>': 9.2, '?': 7.5, '@': 14.4,
  'A': 10.5, 'B': 10.5, 'C': 10.1, 'D': 11.7, 'E': 8.9, 'F': 8.5, 'G': 11.6, 'H': 12.0,
  'I': 5.7, 'J': 4.8, 'K': 10.1, 'L': 8.6, 'M': 14.7, 'N': 12.4, 'O': 12.6, 'P': 9.8,
  'Q': 12.6, 'R': 10.1, 'S': 8.8, 'T': 9.0, 'U': 11.8, 'V': 9.8, 'W': 15.1, 'X': 9.8,
  'Y': 9.3, 'Z': 9.2, '[': 5.3, '\\': 6.1, ']': 5.3, '^': 9.2, '_': 6.9, '`': 4.9,
  'a': 9.2, 'b': 9.9, 'c': 7.9, 'd': 9.9, 'e': 9.2, 'f': 5.8, 'g': 9.9, 'h': 10.1,
  'i': 4.4, 'j': 4.4, 'k': 8.9, 'l': 4.4, 'm': 15.2, 'n': 10.1, 'o': 9.8, 'p': 9.9,
  'q': 9.9, 'r': 6.8, 's': 7.8, 't': 6.2, 'u': 10.1, 'v': 8.5, 'w': 12.9, 'x': 8.7,
  'y': 8.5, 'z': 7.6, '{': 6.1, '|': 8.8, '}': 6.1, '~': 9.2,
  'à': 9.2, 'è': 9.2, 'é': 9.2, 'í': 4.4, 'ï': 4.4, 'ò': 9.8, 'ó': 9.8, 'ú': 10.1, 'ü': 10.1, 'ç': 7.9,
  'À': 10.5, 'È': 8.9, 'É': 8.9, 'Í': 5.7, 'Ï': 5.7, 'Ò': 12.6, 'Ó': 12.6, 'Ú': 11.8, 'Ü': 11.8, 'Ç': 10.1,
  '·': 4.4, '°': 6.8, '♥': 14.0, '☺': 14.0
};

function measureStringWidth(text, fontSpec = '') {
  // Factor d'escala segons la mida de la font (ajustat al kerning real de 12pt en SVG)
  let scale = 0.88;
  if (/9px/.test(fontSpec)) scale = 9 / 16;
  else if (/10px/.test(fontSpec)) scale = 10 / 16;
  else if (/12px/.test(fontSpec)) scale = 12 / 16;

  let width = 0;
  for (const ch of String(text)) {
    width += (GLYPH_WIDTHS_16PX[ch] ?? 9.5) * scale;
  }
  return width;
}

// 2. DOM Shim lleuger en memòria per a scratchblocks
class FakeNode {
  constructor(tag, ns) {
    this.tagName = tag;
    this.namespaceURI = ns || null;
    this.attributes = {};
    this.childNodes = [];
    this._textContent = '';
    this.classList = {
      add: (c) => {
        const cur = this.attributes['class'] || '';
        this.attributes['class'] = cur ? `${cur} ${c}` : c;
      }
    };
    this.style = {};
  }
  get textContent() { return this._textContent; }
  set textContent(v) { this._textContent = v; }
  setAttribute(k, v) { this.attributes[k] = String(v); }
  setAttributeNS(ns, k, v) { this.setAttribute(k, v); }
  getAttribute(k) { return this.attributes[k]; }
  appendChild(child) {
    if (child) this.childNodes.push(child);
    return child;
  }
  insertBefore(newNode, refNode) {
    const idx = this.childNodes.indexOf(refNode);
    if (idx === -1) this.childNodes.push(newNode);
    else this.childNodes.splice(idx, 0, newNode);
    return newNode;
  }
  removeChild(child) {
    const idx = this.childNodes.indexOf(child);
    if (idx !== -1) this.childNodes.splice(idx, 1);
    return child;
  }
}

class FakeDoc {
  constructor() {
    this.head = new FakeNode('head');
    this.body = new FakeNode('body');
  }
  createElement(tag) { return new FakeNode(tag); }
  createElementNS(ns, tag) { return new FakeNode(tag, ns); }
  createTextNode(text) {
    const n = new FakeNode('#text');
    n.textContent = text;
    return n;
  }
  createCDATASection(data) {
    return { data, nodeType: 4 };
  }
}

const canvasContext = {
  font: '500 12pt Helvetica Neue, Helvetica, sans-serif',
  measureText(text) {
    return { width: measureStringWidth(text, this.font) };
  }
};

const fakeCanvas = {
  getContext() {
    return canvasContext;
  }
};

const fakeDoc = new FakeDoc();
const origCreateElement = fakeDoc.createElement.bind(fakeDoc);
fakeDoc.createElement = (tag) => (tag === 'canvas' ? fakeCanvas : origCreateElement(tag));

global.window = {
  document: fakeDoc,
  DOMParser: class {
    parseFromString() {
      return {
        createCDATASection(d) { return { data: d, nodeType: 4 }; }
      };
    }
  },
  XMLSerializer: class {
    serializeToString(node) {
      function serialize(n, isRoot = false) {
        if (!n) return '';
        if (n.nodeType === 4) return `<![CDATA[${n.data}]]>`;
        if (n.tagName === '#text') {
          return String(n.textContent)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }
        const attrsObj = { ...n.attributes };
        if (isRoot && n.tagName === 'svg') {
          if (!attrsObj.xmlns) attrsObj.xmlns = 'http://www.w3.org/2000/svg';
          if (!attrsObj['xmlns:xlink']) attrsObj['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
        }
        let attrs = '';
        for (const [k, v] of Object.entries(attrsObj)) {
          attrs += ` ${k}="${String(v).replace(/"/g, '&quot;')}"`;
        }
        if (n.childNodes.length === 0 && !n.textContent) {
          return `<${n.tagName}${attrs}/>`;
        }
        let inner = n.childNodes.map((child) => serialize(child, false)).join('');
        if (n.textContent && n.childNodes.length === 0) {
          inner = String(n.textContent)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }
        return `<${n.tagName}${attrs}>${inner}</${n.tagName}>`;
      }
      return serialize(node, true);
    }
  }
};

// 3. Carregar motor scratchblocks
const scratchblocksPath = path.resolve(__dirname, '../vendor/scratchblocks.js');
if (!fs.existsSync(scratchblocksPath)) {
  throw new Error(`scratchblocks.js no trobat a ${scratchblocksPath}`);
}
require(scratchblocksPath);
const scratchblocks = global.window.scratchblocks;

/**
 * Normalitza la sintaxi de blocs abans de passar-la a scratchblocks:
 * - Converteix ":: cstart #color" ... "fi :: cend" en blocs C "{ ... } :: #color"
 *   (i afegeix "@loopArrow :: cap #color" si el bloc és "per sempre").
 * - Escapa operadors "<" i ">" interns dins de condicions booleanes "< ... >".
 */
function inferDialectAnnotation(trimmed, dialect) {
  const d = String(dialect || '').toLowerCase();
  if (!d || d === 'scratchblocks') return '';

  const isSpike = d === 'spike' || d === 'spikeapp' || d === 'spike-app';
  const isMblock = d === 'mblock' || d === 'mblocks' || d === 'codey-rocky';
  if (!isSpike && !isMblock) return '';

  if (/^(quan|when|en\s+iniciar|en\s+premer|en\s+prémer)\b/i.test(trimmed)) {
    return isSpike ? ' :: hat #fddc3e' : ' :: hat #0079dc';
  }
  if (/^(atura-ho\s+tot|atura\s+tot|stop\s+all)\b/i.test(trimmed)) {
    return ' :: cap #ff8c00';
  }
  if (/^(espera|wait|repeteix|si\b|mentre)\b/i.test(trimmed)) {
    return ' :: #ffab19';
  }
  if (/^(mostra|encén|encen|esborra|matriu|llum|led| salut|pantalla)\b/i.test(trimmed)) {
    return isSpike ? ' :: #00a8a8' : ' :: #0096ff';
  }
  if (/^(reprodueix|so\b|to\b|volum|melodia)\b/i.test(trimmed)) {
    return isSpike ? ' :: #785ef0' : ' :: #8a3ffc';
  }
  if (/^(sensor|obstacle|distància|distancia|color|força|inclinació|llig)\b/i.test(trimmed)) {
    return isSpike ? ' :: #047fdf' : ' :: #00bebe';
  }
  if (/^(activa\s+el\s+motor|motor\b)/i.test(trimmed) && isSpike) {
    return ' :: #d82098';
  }
  return isSpike ? ' :: #cf2478' : ' :: #0079dc';
}

function normalizeScratchBlocksCode(rawCode, dialect = '') {
  const lines = String(rawCode).trim().split(/\r?\n/);
  const cblockStack = [];
  const normalizedLines = [];

  for (let rawLine of lines) {
    // Escapar < o > interns dins d'un bloc booleà < ... >
    rawLine = rawLine.replace(/<([^<>]*?)\s([<>])\s([^<>]*?)>/g, '<$1 \\$2 $3>');

    const cstartMatch = rawLine.match(/^(\s*)(.+?)\s*::\s*cstart\s*(#[0-9a-fA-F]{3,6}|[a-z-]+)?\s*$/i);
    if (cstartMatch) {
      const [, indent, label, colorOrCat = '#ffab19'] = cstartMatch;
      const isForever = /^per\s+sempre\b/i.test(label.trim());
      cblockStack.push({ colorOrCat, isForever });
      normalizedLines.push(`${indent}${label} {`);
      continue;
    }

    const cendMatch = rawLine.match(/^(\s*)(?:fi|end)\s*::\s*cend\s*$/i);
    if (cendMatch) {
      const [, indent] = cendMatch;
      const info = cblockStack.pop() || { colorOrCat: '#ffab19', isForever: false };
      if (info.isForever) {
        normalizedLines.push(`${indent}} @loopArrow :: cap ${info.colorOrCat}`);
      } else {
        normalizedLines.push(`${indent}} :: ${info.colorOrCat}`);
      }
      continue;
    }

    const trimmed = rawLine.trim();
    if (trimmed && dialect && !rawLine.includes('::') && !/[{}]$/.test(trimmed) && !/^}/.test(trimmed)) {
      if (/^(per\s+sempre|repeteix\b.*|si\b.*aleshores)$/i.test(trimmed)) {
        const isForever = /^per\s+sempre\b/i.test(trimmed);
        cblockStack.push({ colorOrCat: '#ffab19', isForever });
        normalizedLines.push(`${rawLine} {`);
        continue;
      }
      if (/^(fi|end)$/i.test(trimmed) && cblockStack.length > 0) {
        const indent = rawLine.match(/^(\s*)/)[1];
        const info = cblockStack.pop();
        if (info.isForever) {
          normalizedLines.push(`${indent}} @loopArrow :: cap ${info.colorOrCat}`);
        } else {
          normalizedLines.push(`${indent}} :: ${info.colorOrCat}`);
        }
        continue;
      }
      rawLine += inferDialectAnnotation(trimmed, dialect);
    }

    normalizedLines.push(rawLine);
  }

  return normalizedLines.join('\n');
}

function shadeHexColor(hex, factor = 0.82) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return hex;
  const r = Math.max(0, Math.min(255, Math.round(((num >> 16) & 255) * factor)));
  const g = Math.max(0, Math.min(255, Math.round(((num >> 8) & 255) * factor)));
  const b = Math.max(0, Math.min(255, Math.round((num & 255) * factor)));
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
}

function isHighLuminanceHex(hex) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return false;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.72;
}

/**
 * Post-processa l'SVG generat per millorar el contrast visual:
 * - Enfonsa un 18% el fons dels desplegables (.sb3-input-dropdown) amb color hex personalitzat.
 * - Enfonsa un 22% la vora (stroke) dels blocs amb color hex personalitzat.
 * - Aplica text fosc (#1e293b) als blocs grocs d'alta lluminositat (com el hat #fddc3e de SPIKE Prime).
 */
function enhanceRenderedSVG(svg) {
  let out = svg;

  // 1. Enfosquir desplegables amb fill hex personalitzat
  out = out.replace(
    /(<rect\b[^>]*class="[^"]*sb3-input-dropdown[^"]*"[^>]*fill=")(#[0-9a-fA-F]{3,6})("[^>]*stroke=")rgba\(0,\s*0,\s*0,\s*0\.2\)(")/g,
    (_, p1, hex, p2, p3) => `${p1}${shadeHexColor(hex, 0.80)}${p2}${shadeHexColor(hex, 0.65)}${p3}`
  );

  // 2. Enfosquir vores dels blocs amb fill hex personalitzat
  out = out.replace(
    /(<path\b[^>]*fill=")(#[0-9a-fA-F]{3,6})("[^>]*stroke=")rgba\(0,\s*0,\s*0,\s*0\.2\)(")/g,
    (_, p1, hex, p2, p3) => `${p1}${hex}${p2}${shadeHexColor(hex, 0.78)}${p3}`
  );

  // 3. Text fosc en blocs d'alta lluminositat (ex. groc #fddc3e de LEGO SPIKE)
  out = out.replace(
    /(<path\b[^>]*fill="(#[0-9a-fA-F]{3,6})"[^>]*\/>)((?:<text\b[^>]*>[^<]*<\/text>)+)/g,
    (full, pathTag, hex, textsChunk) => {
      if (!isHighLuminanceHex(hex)) return full;
      const darkTexts = textsChunk.replace(/<text\b([^>]*)>/g, '<text$1 style="fill: #1e293b">');
      return `${pathTag}${darkTexts}`;
    }
  );

  return out;
}

/**
 * Renderitza codi scratchblocks en una cadena SVG autònoma.
 * @param {string} code - Definició textual dels blocs.
 * @param {object} [options] - Opcions (style, scale, languages, dialect).
 * @returns {string} Cadena SVG completa.
 */
function renderScratchBlocks(code, options = {}) {
  const opts = {
    style: options.style || 'scratch3',
    scale: options.scale || 1,
    languages: options.languages || ['en'],
    dialect: options.dialect || ''
  };

  const normalized = normalizeScratchBlocksCode(code, opts.dialect);
  const doc = scratchblocks.parse(normalized, { languages: opts.languages });
  const view = scratchblocks.newView(doc, { style: opts.style, scale: opts.scale });
  view.render();
  const rawSvg = view.exportSVGString();
  return enhanceRenderedSVG(rawSvg);
}

// 4. Programes de mostra oficials per als 3 robots de blocs
const SAMPLES = {
  // Micro:bit (MakeCode): Blocs Basic (#0078d7) + Input (#d400d4)
  'microbit-sample': `
per sempre {
  mostra la icona [♥ cor v] :: #0078d7
  pausa \\(ms\\) (500) :: #0078d7
  esborra la pantalla :: #0078d7
  pausa \\(ms\\) (500) :: #0078d7
} @loopArrow :: cap #0078d7

en prémer el botó [A v] {
  mostra la cadena ["Hola!"] :: #0078d7
  mostra la icona [☺ feliç v] :: #0078d7
} :: cap #d400d4
`,

  // Codey Rocky (mBlock 5): Tracció, matriu LED, sensor d'obstacles, altaveu
  'codey-rocky-sample': `
quan s'iniciï Codey :: hat #0079dc
mostra la imatge [cor v] :: #0096ff
per sempre :: cstart #ffab19
  mou endavant a potència (50) % :: #0079dc
  si <obstacle detectat? :: #00bebe> aleshores :: cstart #ffab19
    reprodueix el so [alarma v] :: #8a3ffc
    atura el moviment :: #0079dc
    mostra la imatge [sorpresa v] :: #0096ff
    gira a la dreta (90) graus :: #0079dc
  fi :: cend
fi :: cend
`,

  // LEGO SPIKE Prime: Motors A/B/C, sensor de distància, matriu 5x5, brunzidor
  'spike-sample': `
quan comenci el programa :: hat #fddc3e
assigna els motors de moviment a [B + C v] :: #cf2478
defineix la velocitat de moviment al (50) % :: #cf2478
encén la matriu 5x5 amb [somriure v] durant (2) segons :: #00a8a8
mou [endavant v] durant (20) cm :: #cf2478
espera fins que <distància sensor < (15) cm :: #047fdf> :: #ffab19
reprodueix el to (60) durant (0.5) s :: #785ef0
activa el motor [A v] durant (1) rotacions :: #d82098
atura-ho tot :: cap #ff8c00
`
};

/**
 * Compila tots els exemples de blocs a _assets/blocks/ (o a la destinació indicada)
 */
function buildAllBlocks(customOutDir = null) {
  const outDir = customOutDir || path.resolve(__dirname, '../../_assets/blocks');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const TS_MICROBIT_SAMPLE = `basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Hola!")
    basic.showIcon(IconNames.Happy)
})`;

  const results = [];
  for (const [name, code] of Object.entries(SAMPLES)) {
    let svg = null;
    let fromCache = false;

    if (name === 'microbit-sample') {
      const cached = getCachedMakeCodeSVG(TS_MICROBIT_SAMPLE);
      if (cached) {
        svg = cached;
        fromCache = true;
      } else {
        svg = renderScratchBlocks(code, { style: 'scratch3', scale: 1 });
        setCachedMakeCodeSVG(TS_MICROBIT_SAMPLE, svg);
      }
    } else {
      svg = renderScratchBlocks(code, { style: 'scratch3', scale: 1 });
    }

    const targetFile = path.join(outDir, `${name}.svg`);
    const existing = fs.existsSync(targetFile) ? fs.readFileSync(targetFile, 'utf8') : null;
    if (existing !== svg) {
      fs.writeFileSync(targetFile, svg, 'utf8');
    }
    results.push({ name, file: targetFile, size: svg.length, fromCache });
    console.log(`[build-blocks] Generat: ${name}.svg (${(svg.length / 1024).toFixed(1)} KB)${fromCache ? ' [cache hit]' : ''}`);
  }
  return results;
}

/**
 * Converteix codi MakeCode TypeScript (o pseudocodi MakeCode) en una vista SVG
 * de fallback amb la paleta oficial de MakeCode micro:bit (#0078d7 Basic, #d400d4 Input).
 */
function renderMakeCodeFallbackSVG(tsCode) {
  const lines = String(tsCode || '').trim().split(/\r?\n/);
  const out = [];
  const blockStack = [];

  for (const raw of lines) {
    const t = raw.trim();
    if (!t) {
      out.push('');
      continue;
    }
    if (/^basic\.forever\s*\(/.test(t)) {
      blockStack.push({ color: '#0078d7', isLoop: true });
      out.push('per sempre {');
      continue;
    }
    const btnMatch = t.match(/^input\.onButtonPressed\s*\(\s*Button\.([A-Za-z0-9_+]+)\s*,/);
    if (btnMatch) {
      blockStack.push({ color: '#d400d4', isLoop: false });
      out.push(`en prémer el botó [${btnMatch[1]} v] {`);
      continue;
    }
    const gestureMatch = t.match(/^input\.onGesture\s*\(\s*Gesture\.([A-Za-z0-9_]+)\s*,/);
    if (gestureMatch) {
      blockStack.push({ color: '#d400d4', isLoop: false });
      out.push(`si [${gestureMatch[1]} v] {`);
      continue;
    }
    if (/^\}\s*\)\s*;?$/.test(t) && blockStack.length > 0) {
      const info = blockStack.pop();
      out.push(info.isLoop ? `} @loopArrow :: cap ${info.color}` : `} :: cap ${info.color}`);
      continue;
    }
    const iconMatch = t.match(/^basic\.showIcon\s*\(\s*IconNames\.([A-Za-z0-9_]+)\s*\)/);
    if (iconMatch) {
      const iconMap = { Heart: '♥ cor', Happy: '☺ feliç', Sad: '☹ trist', Yes: '✓ sí', No: '✗ no' };
      const label = iconMap[iconMatch[1]] || iconMatch[1];
      out.push(`  mostra la icona [${label} v] :: #0078d7`);
      continue;
    }
    const strMatch = t.match(/^basic\.showString\s*\(\s*(.+?)\s*\)$/);
    if (strMatch) {
      out.push(`  mostra la cadena [${strMatch[1]}] :: #0078d7`);
      continue;
    }
    const numMatch = t.match(/^basic\.showNumber\s*\(\s*(.+?)\s*\)$/);
    if (numMatch) {
      out.push(`  mostra el nombre (${numMatch[1]}) :: #0078d7`);
      continue;
    }
    const pauseMatch = t.match(/^basic\.pause\s*\(\s*(.+?)\s*\)$/);
    if (pauseMatch) {
      out.push(`  pausa \\(ms\\) (${pauseMatch[1]}) :: #0078d7`);
      continue;
    }
    if (/^basic\.clearScreen\s*\(\s*\)/.test(t)) {
      out.push('  esborra la pantalla :: #0078d7');
      continue;
    }
    out.push(raw.includes('::') ? raw : `${raw} :: #0078d7`);
  }

  return renderScratchBlocks(out.join('\n'), { style: 'scratch3', scale: 1 });
}

if (require.main === module) {
  buildAllBlocks();
}

module.exports = {
  renderScratchBlocks,
  renderMakeCodeFallbackSVG,
  buildAllBlocks,
  SAMPLES
};
