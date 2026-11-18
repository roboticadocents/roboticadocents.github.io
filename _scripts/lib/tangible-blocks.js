// check-es:skip
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { escapeHTML } = require('../../_templates/layout/utils');

const DIALECTS = { talebot: 'talebot', 'tale-bot': 'talebot', 'coding-set': 'coding-set', codingset: 'coding-set' };
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, ' ');
const COMMANDS = {
  forward: ['avanzar', 'avancar', 'adelante', 'endavant', '↑'],
  back: ['retroceder', 'retrocedir', 'atras', 'enrere', '↓'],
  right: ['girar derecha', 'girar a la derecha', 'girar dreta', 'girar a la dreta', 'dreta', 'derecha', '↱'],
  left: ['girar izquierda', "girar a l’esquerra", "girar a l'esquerra", 'girar esquerra', 'esquerra', 'izquierda', '↰']
};
const EXTRA_COMMANDS = {
  talebot: { record: ['gravacio', 'grabacion'], dance: ['dansa', 'baile'], repeat: ['repeticio', 'repetir'] },
  'coding-set': { define: ['defineix funcio', 'definir funcion'], call: ['crida funcio', 'llamar funcion'], random: ['aleatori', 'aleatorio'], music: ['musica'], dance: ['dansa', 'baile'] }
};
const LABELS = {
  record: 'Reproducir la grabación (pulsación corta)',
  dance: 'Danza predefinida',
  repeat: 'Repetición',
  define: 'Definir función',
  call: 'Llamar función',
  random: 'Movimiento aleatorio',
  music: 'Música predefinida',
  forward: 'Adelante',
  back: 'Atrás',
  right: 'Girar a la derecha',
  left: 'Girar a la izquierda',
  loop: 'Inicio del bucle',
  end: 'Fin del bucle',
  play: 'Ejecutar',
  clear: 'Borrar'
};

const SVG_ROOT = path.resolve(__dirname, '../../sim/svg');

function cleanSvgInner(rawSvg) {
  return String(rawSvg)
    .replace(/<\?xml[\s\S]*?\?>/gi, '')
    .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
    .replace(/<defs\b[^>]*\/>/gi, '')
    .replace(/<defs\b[^>]*>[\s\S]*?<\/defs>/gi, '')
    .replace(/^[\s\S]*?<svg\b[^>]*>/i, '')
    .replace(/<\/svg>\s*$/i, '')
    .replace(/\s+id="[^"]*"/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function readSvgInfo(folder, name) {
  const filePath = path.join(SVG_ROOT, folder, `${name}.svg`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const vbMatch = raw.match(/viewBox="([^"]+)"/i);
  const viewBox = vbMatch ? vbMatch[1] : (folder === 'tale-bot' ? '0 0 80 80' : '0 0 64 64');
  const inner = cleanSvgInner(raw);
  return {
    viewBox,
    inner,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" aria-hidden="true">${inner}</svg>`
  };
}

let cachedSvgs = null;
function getSimSvgs() {
  if (cachedSvgs) return cachedSvgs;
  const codingSetNames = [
    'forward', 'back', 'right', 'left', 'loop', 'end',
    'define', 'call', 'random', 'music', 'dance',
    'num-2', 'num-3', 'num-4', 'num-5', 'num-random',
    'peg-top', 'peg-bottom'
  ];
  const taleBotNames = [
    'forward', 'back', 'right', 'left',
    'play', 'record', 'dance', 'clear', 'repeat'
  ];

  const codingSet = {};
  for (const name of codingSetNames) {
    codingSet[name] = readSvgInfo('coding-set', name);
  }
  const taleBot = {};
  for (const name of taleBotNames) {
    taleBot[name] = readSvgInfo('tale-bot', name);
  }
  cachedSvgs = { codingSet, taleBot };
  return cachedSvgs;
}

function parseSequence(source, dialect) {
  const tokens = String(source).split(/\r?\n|->|→/).map(s => s.trim()).filter(Boolean);
  if (!tokens.length) throw new Error('La secuencia está vacía.');
  const blocks = [];
  let depth = 0;
  for (const token of tokens) {
    const key = normalize(token);
    const command = Object.keys(COMMANDS).find(name => COMMANDS[name].includes(key));
    if (command) { blocks.push({ type: command }); continue; }
    const extra = Object.entries(EXTRA_COMMANDS[dialect] || {}).find(([, aliases]) => aliases.includes(key));
    if (extra) { blocks.push({ type: extra[0] }); continue; }
    const repeat = key.match(/^(?:repetir|repeteix) ([2-5]|aleatori|aleatorio|dau|dado)$/);
    if (dialect === 'coding-set' && repeat) {
      const numVal = /^[2-5]$/.test(repeat[1]) ? repeat[1] : 'random';
      blocks.push({ type: 'loop', number: numVal }); depth++; continue;
    }
    if (dialect === 'coding-set' && /^(fi|fin|end)$/.test(key) && depth) {
      blocks.push({ type: 'end' }); depth--; continue;
    }
    if (dialect === 'coding-set' && /^([2-5]|aleatori|aleatorio|dau|dado)$/.test(key) && blocks.length && ['forward', 'back'].includes(blocks.at(-1).type) && !blocks.at(-1).number) {
      blocks.at(-1).number = /^[2-5]$/.test(key) ? key : 'random'; continue;
    }
    if (dialect === 'talebot' && /^(executa|iniciar|ejecutar|play)$/.test(key)) { blocks.push({ type: 'play' }); continue; }
    if (dialect === 'talebot' && /^(esborra|borrar)$/.test(key)) { blocks.push({ type: 'clear' }); continue; }
    throw new Error(`Instrucción no reconocida en ${dialect}: «${token}».`);
  }
  if (depth) throw new Error('Falta «fin» para cerrar el bucle.');
  return blocks;
}

function renderTangibleBlocks(source, language) {
  const dialect = DIALECTS[language];
  if (!dialect) throw new Error('Robot desconocido.');
  const blocks = parseSequence(source, dialect);
  const tale = dialect === 'talebot';
  const svgs = getSimSvgs();
  const width = blocks.length * 88 + 16;
  const description = blocks.map(b => `${LABELS[b.type]}${b.number ? ` (${b.number === 'random' ? 'aleatorio' : b.number})` : ''}`).join(' → ');

  const pieces = blocks.map((block, i) => {
    const x = i * 88 + 12;
    if (tale) {
      const keySvg = svgs.taleBot[block.type] || svgs.taleBot.forward;
      const connector = i < blocks.length - 1
        ? '<path d="M71 32h10m-4-4 4 4-4 4" stroke="#64748b" stroke-width="2" fill="none"/>'
        : '';
      return `<g transform="translate(${x} 12)"><title>${escapeHTML(LABELS[block.type])}</title><g transform="scale(0.8)">${keySvg.inner}</g>${connector}</g>`;
    }

    const tileSvg = svgs.codingSet[block.type] || svgs.codingSet.forward;
    const numKey = block.number ? `num-${block.number}` : '';
    const numSvg = numKey && svgs.codingSet[numKey]
      ? `<g transform="translate(0 61)">${svgs.codingSet[numKey].inner}</g>`
      : '';
    return `<g transform="translate(${x} 12)"><title>${escapeHTML(LABELS[block.type])}</title>${tileSvg.inner}${numSvg}</g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" class="tangible-sequence" role="img" aria-label="${escapeHTML(description)}" width="${width}" height="118" viewBox="0 0 ${width} 118"><title>${escapeHTML(description)}</title>${pieces}</svg>`;
}

module.exports = { DIALECTS, parseSequence, renderTangibleBlocks, getSimSvgs };
