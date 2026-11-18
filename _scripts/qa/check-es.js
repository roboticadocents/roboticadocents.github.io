#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '../..');
const args = process.argv.slice(2);
const hasFlag = name => args.includes(name);
const readOpt = (name, fallback = '') => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] && !args[index + 1].startsWith('--') ? args[index + 1] : fallback;
};

const options = {
  scope: readOpt('--scope', 'content'),
  ref: readOpt('--ref', 'main'),
  files: readOpt('--files', ''),
  changed: hasFlag('--changed'),
  all: hasFlag('--all'),
  spell: hasFlag('--spell'),
  strict: hasFlag('--strict'),
  json: hasFlag('--json')
};

const CA_CHARS = /[àèìòùçï]/giu;
const CA_LDOT = /\p{L}·\p{L}/giu;
const CA_APOS = /(?<![\p{L}\p{N}])[ldsnmt]'[\p{L}]|\bqu'[\p{L}]/giu;
const CA_WORDS = new RegExp(`(?<![\\p{L}\\p{N}])(?:${[
  'amb', 'per a', 'dels', 'deles', 'als', 'ales', 'això', 'així', 'aquest', 'aquesta', 'aquests', 'aquestes',
  'aquell', 'aquella', 'aquells', 'aquelles', 'seu', 'seua', 'seus', 'seues', 'meu', 'meua', 'meus', 'meues',
  'teu', 'teua', 'teus', 'teues', 'nostre', 'nostra', 'nostres', 'vostre', 'vostra', 'vostres', 'vosaltres',
  'nosaltres', 'ell', 'ells', 'elles', 'puc', 'pots', 'podem', 'podeu', 'poden', 'vull', 'vols', 'volem',
  'voleu', 'volen', 'faig', 'fas', 'fem', 'feu', 'fan', 'tinc', 'tens', 'tenim', 'teniu', 'tenen', 'vaig',
  'anem', 'aneu', 'veig', 'veus', 'veiem', 'veieu', 'veuen', 'dic', 'dius', 'diem', 'dieu', 'diuen', 'saps',
  'sabem', 'sabeu', 'saben', 'cal', 'calen', 'hi', 'ho', 'li', 'els', 'ens', 'em', 'et', 'però', 'també',
  'només', 'què', 'perquè', 'doncs', 'aleshores', 'després', 'abans', 'sense', 'fins i tot', 'molt', 'molta',
  'molts', 'moltes', 'poc', 'poca', 'pocs', 'poques', 'gaire', 'gens', 'força', 'massa', 'menys', 'més',
  'hui', 'huit', 'dènou', 'huitanta', 'noranta', 'puga', 'puguen', 'siga', 'siguen', 'xiquet', 'xiqueta',
  'xiquets', 'xiquetes', 'oratge', 'séquia', 'llaurador', 'llauradora', 'a poc a poc', 'tots', 'totes',
  'tota', 'tot el', 'tot i que', 'malgrat', 'encara', 'tampoc', 'sinó', 'ningú', 'algú', 'tothom',
  'quelcom', 'gairebé', 'quasi', 'aviat', 'prompte', 'a vegades', 'de vegades', 'sovint', 'fins', 'des de',
  'cap a', 'per tal de', 'per tal que', 'mentre', 'quan', 'de seguida', 'en canvi', 'és a dir', 'o siga',
  'si més no', 'trenta', 'quaranta', 'cinquanta', 'seixanta', 'setanta', 'vuitanta', 'vint', 'divuit',
  'disset', 'setze', 'quinze', 'catorze', 'tretze', 'dotze', 'onze', 'nou', 'vuit', 'cinc', 'quatre', 'sis',
  'segon', 'cinquè', 'sisè', 'setè', 'vuitè', 'novè', 'desè', 'amunt', 'avall', 'endavant', 'endarrere',
  'esquerra', 'dreta', 'davant', 'darrere', 'dins', 'fora', 'sota', 'mentre que', 'abans que', 'després que',
  'és', 'són', 'està', 'estan', 'esteu', 'estem', 'havia', 'havien', 'serà', 'fou', 'foren', 'fos', 'eren',
  'haja', 'hagi', 'hagen', 'hagin', 'tinga', 'tinguen', 'tingui', 'tinguin', 'faça', 'facen', 'diga', 'diguen',
  'vulga', 'vulguen', 'vulgui', 'vulguin', 'vaja', 'vagen', 'vagi', 'vagin', 'sóc', 'ets', 'som', 'hem', 'heu',
  'vam', 'vau', 'obre', 'tanca', 'puja', 'baixa', 'deixa', 'deixeu', 'agafa', 'agafeu', 'tria', 'trieu', 'prova',
  'proveu', 'comprova', 'comproveu', 'mireu', 'escolteu', 'llegeix', 'llegiu', 'escriu', 'escriviu', 'dibuixa',
  'dibuixeu', 'pinteu', 'retalla', 'retalleu', 'enganxa', 'enganxeu', 'doblega', 'doblegueu', 'mesura', 'mesureu',
  'compareu', 'registreu', 'anoteu', 'prediu', 'predigueu', 'decidiu', 'reviseu', 'milloreu', 'corregiu', 'executeu',
  'programeu', 'engegueu', 'apagueu', 'connecteu', 'desconnecteu', 'carregueu', 'atureu', 'espereu', 'torneu',
  'aneu', 'veniu', 'sortiu', 'entreu', 'pugeu', 'baixeu', 'poseu', 'traieu', 'manteniu', 'seguiu', 'acabeu',
  'comenceu', 'prepareu', 'adapteu', 'afegiu', 'ompliu', 'talleu', 'món', 'dóna', 'senyora', 'nen', 'nins', 'xaval', 'xic'
].map(escapeRegExp).join('|')})(?![\\p{L}\\p{N}])`, 'giu');

const IDENTIFIER_FIELDS = ['active', 'robot', 'cycle', 'subject', 'theme', 'order', 'official_source', 'image', 'icon', 'layout'];

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function blank(value) {
  return value.replace(/[^\n]/g, ' ');
}

function git(gitArgs) {
  return execFileSync('git', gitArgs, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

function changedFiles() {
  const sources = [
    git(['diff', '--name-only', options.ref]),
    git(['diff', '--name-only', '--cached']),
    git(['ls-files', '--others', '--exclude-standard'])
  ];
  return [...new Set(sources.flatMap(source => source ? source.split('\n') : []))].filter(Boolean);
}

function isContent(file) {
  return file.startsWith('_content/') && file.endsWith('.md');
}

function isUi(file) {
  if (file.startsWith('_templates/') && file.endsWith('.js')) return true;
  if (file.startsWith('_js/') && file.endsWith('.js')) return true;
  if (file.startsWith('sim/') && /\.(?:js|html|css)$/.test(file)) return true;
  if (['_scripts/build.js', '_scripts/dev.js'].includes(file)) return true;
  if (file.startsWith('_scripts/lib/') && file.endsWith('.js')) return true;
  if (file === '_scripts/md_to_typst.py') return true;
  return /^_scripts\/generate-[^/]+\.py$/.test(file);
}

function isDocs(file) {
  if (['README.md', 'AGENTS.md', 'TODO.md'].includes(file)) return true;
  if (/^[A-Z0-9-]+-ES\.md$/.test(file)) return true;
  if (file.startsWith('docs/') && file.endsWith('.md')) return true;
  return file.startsWith('.gemini/') && file.endsWith('.md');
}

function inScope(file) {
  if (options.all || options.scope === 'all') return isContent(file) || isUi(file) || isDocs(file);
  if (options.scope === 'content') return isContent(file);
  if (options.scope === 'ui') return isUi(file);
  if (options.scope === 'docs') return isDocs(file);
  throw new Error(`Ámbito no válido: ${options.scope}`);
}

function listFiles() {
  if (options.files) {
    return options.files.split(/[,\s]+/).filter(Boolean);
  }
  let files = git(['ls-files']).split('\n').filter(Boolean);
  if (options.changed) {
    const changed = new Set(changedFiles());
    files = [...new Set([...files, ...changed])].filter(file => changed.has(file));
  }
  return files.filter(inScope);
}

function langOf(file) {
  if (file.endsWith('.md')) return 'md';
  if (file.endsWith('.js')) return 'js';
  if (file.endsWith('.py')) return 'py';
  if (file.endsWith('.html')) return 'html';
  if (file.endsWith('.css')) return 'css';
  return 'text';
}

function maskMarkdown(text) {
  let result = text;
  result = result.replace(/^```[^\n]*\n[\s\S]*?^```[ \t]*$/gm, blank);
  result = result.replace(/`[^`\n]*`/g, blank);
  result = result.replace(/!\[([^\]]*)\]\([^)]*\)/g, (_, alt) => ` ${alt} `);
  result = result.replace(/\[([^\]]*)\]\([^)]*\)/g, (_, label) => ` ${label} `);
  result = result.replace(/<[^>]*>/g, tag => {
    const kept = [];
    const attribute = /\b(?:alt|title)\s*=\s*"([^"]*)"/gi;
    let match;
    while ((match = attribute.exec(tag))) kept.push(match[1]);
    return ` ${kept.join(' ')} `;
  });
  result = result.replace(/https?:\/\/[^\s)>\]]+/g, ' ');
  result = result.replace(/(?:\.\.?\/|_assets\/)[^\s)"'<>]+/g, ' ');
  result = result.replace(/<!--[\s\S]*?-->/g, blank);
  result = result.replace(/^---\n([\s\S]*?)\n---/m, (_, body) => {
    const masked = body.split('\n').map(line => {
      const pair = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
      if (!pair) return line;
      if (IDENTIFIER_FIELDS.includes(pair[1])) return blank(line);
      return blank(pair[1]) + line.slice(pair[1].length);
    }).join('\n');
    return `---\n${masked}\n---`;
  });
  return result;
}

function maskComments(text, lang) {
  if (lang === 'js') {
    return text
      .replace(/\/\*[\s\S]*?\*\//g, blank)
      .replace(/<!--[\s\S]*?-->/g, blank)
      .replace(/<\/?[A-Za-z][^>]*>/g, blank)
      .replace(/(^|[^:])\/\/[^\n]*/g, (match, prefix) => prefix + ' '.repeat(match.length - prefix.length));
  }
  if (lang === 'py') {
    return text.split('\n').map(line => {
      if (/^\s*#/.test(line)) return blank(line);
      const index = line.search(/\s#/);
      if (index >= 0) return line.slice(0, index) + blank(line.slice(index));
      return line;
    }).join('\n');
  }
  if (lang === 'html') return text.replace(/<!--[\s\S]*?-->/g, blank).replace(/<\/?[A-Za-z][^>]*>/g, blank);
  if (lang === 'css') return text.replace(/\/\*[\s\S]*?\*\//g, blank);
  return text;
}

function loadWhitelist() {
  const file = path.join(__dirname, 'whitelist-es.txt');
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));
}

const whitelist = loadWhitelist();
const whitelistPattern = whitelist.length
  ? new RegExp(whitelist.map(escapeRegExp).join('|'), 'giu')
  : null;

function maskWhitelist(text) {
  return whitelistPattern ? text.replace(whitelistPattern, blank) : text;
}

function lineCol(text, index) {
  const before = text.slice(0, index);
  const line = before.split('\n').length;
  const column = index - before.lastIndexOf('\n');
  return { line, column };
}

function snippetAt(text, line) {
  const value = text.split('\n')[line - 1] || '';
  return value.trim().slice(0, 140);
}

function frontMatter(text) {
  const match = /^---\n([\s\S]*?)\n---/.exec(text);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split('\n')) {
    const pair = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (pair) result[pair[1]] = pair[2].replace(/^["']|["']$/g, '');
  }
  return result;
}

function mdStats(text) {
  const body = text.replace(/^---\n[\s\S]*?\n---/, '');
  const fences = [];
  const fencePattern = /^```([^\n]*)\n([\s\S]*?)^```[ \t]*$/gm;
  let rest = '';
  let last = 0;
  let match;
  while ((match = fencePattern.exec(body))) {
    rest += body.slice(last, match.index);
    fences.push({ lang: match[1].trim(), code: match[2].replace(/\s+$/, '') });
    last = fencePattern.lastIndex;
  }
  rest += body.slice(last);
  const headings = [0, 0, 0, 0, 0, 0];
  for (const line of rest.split('\n')) {
    const heading = /^(#{1,6})\s/.exec(line);
    if (heading) headings[heading[1].length - 1] += 1;
  }
  const images = [...rest.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(item => item[1].trim());
  const links = [...rest.matchAll(/(?<!!)\[[^\]]*\]\(([^)]+)\)/g)].map(item => item[1].trim());
  const tableRows = rest.split('\n').filter(line => /^\s*\|/.test(line)).length;
  const listItems = rest.split('\n').filter(line => /^\s*(?:[-*+]|\d+\.)\s+/.test(line)).length;
  const numericText = rest
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\b(?:src|href|class|id|style|data-[\w-]+)="[^"]*"/g, ' ');
  const numbers = [...numericText.matchAll(/\b\d+(?:[.,]\d+)?\b/g)].map(item => item[0]);
  const words = rest.replace(/[#>*_`|\-\[\]()!]/g, ' ').split(/\s+/).filter(Boolean).length;
  return { body, fences, headings, images, links, tableRows, listItems, numbers, words, frontMatter: frontMatter(text) };
}

function compareStats(file, original, translated, issues) {
  const before = mdStats(original);
  const after = mdStats(translated);
  const warn = (message) => issues.push({ file, line: 0, column: 0, severity: 'warning', type: 'paridad', message });
  const error = (message) => issues.push({ file, line: 0, column: 0, severity: 'error', type: 'paridad', message });

  if (before.headings.join(',') !== after.headings.join(',')) {
    error(`Encabezados distintos: original ${before.headings.join('/')}, traducción ${after.headings.join('/')}`);
  }
  if (before.fences.length !== after.fences.length) {
    error(`Bloques de código distintos: original ${before.fences.length}, traducción ${after.fences.length}`);
  } else {
    before.fences.forEach((fence, index) => {
      const other = after.fences[index];
      if (fence.lang !== other.lang) error(`Lenguaje del bloque ${index + 1}: ${fence.lang} → ${other.lang}`);
      if (fence.code !== other.code) {
        const visual = ['mblock', 'mblocks', 'spikeapp', 'spike-app', 'spike', 'scratchblocks', 'talebot', 'tale-bot', 'coding-set', 'codingset'].includes(fence.lang);
        if (visual && fence.lang === other.lang) {
          const numbers = code => (code.match(/\b\d+(?:[.,]\d+)?\b/g) || []).join(',');
          if (numbers(fence.code) !== numbers(other.code)) error(`Han cambiado los parámetros numéricos del diagrama ${index + 1}`);
          warn(`Etiquetas del diagrama ${index + 1} traducidas; comprobar formas, colores y agrupaciones con test-visual-blocks.js`);
        } else {
          error(`El contenido del bloque ${index + 1} ha cambiado; el código ejecutable no se traduce`);
        }
      }
    });
  }
  const originalImages = [...before.images].sort().join('\n');
  const translatedImages = [...after.images].sort().join('\n');
  if (originalImages !== translatedImages) warn('Las rutas de imagen han cambiado; revisa que sea intencionado');
  if (before.links.length !== after.links.length) {
    warn(`Número de enlaces distinto: ${before.links.length} → ${after.links.length}`);
  }
  if (before.tableRows !== after.tableRows) warn(`Filas de tabla distintas: ${before.tableRows} → ${after.tableRows}`);
  if (before.listItems !== after.listItems) warn(`Elementos de lista distintos: ${before.listItems} → ${after.listItems}`);
  const originalNumbers = [...before.numbers].sort().join(',');
  const translatedNumbers = [...after.numbers].sort().join(',');
  if (originalNumbers !== translatedNumbers) warn('Hay cifras distintas entre original y traducción');
  if (before.words > 0 && after.words > 0) {
    const ratio = after.words / before.words;
    if (ratio < 0.9 || ratio > 1.35) warn(`Ratio de longitud fuera de rango: ${ratio.toFixed(2)} (${before.words} → ${after.words} palabras)`);
  }
  const beforeKeys = Object.keys(before.frontMatter).sort().join(',');
  const afterKeys = Object.keys(after.frontMatter).sort().join(',');
  if (beforeKeys !== afterKeys) error(`Claves de front matter distintas: ${beforeKeys} → ${afterKeys}`);
  for (const field of IDENTIFIER_FIELDS) {
    if (field in before.frontMatter && field in after.frontMatter && before.frontMatter[field] !== after.frontMatter[field]) {
      error(`El campo «${field}» no debe cambiar: ${before.frontMatter[field]} → ${after.frontMatter[field]}`);
    }
  }
}

function findResidue(file, text, lang, issues) {
  let masked = lang === 'md' ? maskMarkdown(text) : maskComments(text, lang);
  masked = maskWhitelist(masked);
  const seen = new Set();
  const add = (pattern, type, message, oncePerLine = false) => {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(masked))) {
      const position = lineCol(masked, match.index);
      const lineText = text.split('\n')[position.line - 1] || '';
      if (/check-es:ignore/.test(lineText)) continue;
      const key = `${type}:${position.line}:${oncePerLine ? '' : match[0].toLowerCase()}`;
      if (seen.has(key)) continue;
      seen.add(key);
      issues.push({
        file,
        line: position.line,
        column: position.column,
        severity: 'error',
        type,
        message: `${message}: «${match[0]}»`,
        snippet: snippetAt(text, position.line)
      });
    }
  };
  add(CA_CHARS, 'catalán', 'Carácter catalán', true);
  add(CA_LDOT, 'catalán', 'Ele geminada catalana');
  add(CA_APOS, 'catalán', 'Apóstrofo catalán');
  add(CA_WORDS, 'catalán', 'Palabra catalana');
  if (/\blang\s*=\s*["']ca["']|\blang:\s*["']ca["']/.test(text)) {
    issues.push({ file, line: 0, column: 0, severity: 'error', type: 'idioma', message: 'Queda lang="ca"; debe ser lang="es" o lang: "es"' });
  }
}

function spellIssues(file, text, lang, issues) {
  if (!options.spell) return;
  try {
    const masked = lang === 'md' ? maskMarkdown(text) : maskComments(text, lang);
    const plain = masked.replace(/[#>*_`|]/g, ' ');
    const words = [...new Set(plain.match(/[\p{L}]{4,}/gu) || [])];
    if (!words.length) return;
    const output = execFileSync('aspell', ['list', '--lang=es'], { input: words.join('\n'), encoding: 'utf8' });
    const unknown = [...new Set(output.split('\n').map(word => word.trim()).filter(Boolean))]
      .filter(word => !/^[\p{Lu}\d]/u.test(word))
      .filter(word => !whitelist.some(entry => entry.toLowerCase() === word.toLowerCase()));
    for (const word of unknown) {
      issues.push({ file, line: 0, column: 0, severity: 'warning', type: 'ortografía', message: `Posible error ortográfico: «${word}»` });
    }
  } catch {
    issues.push({ file, line: 0, column: 0, severity: 'warning', type: 'ortografía', message: 'No se pudo ejecutar aspell; revisa la instalación' });
  }
}

function readOriginal(file) {
  try {
    return execFileSync('git', ['show', `${options.ref}:${file}`], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    });
  } catch {
    return null;
  }
}

function main() {
  const files = listFiles();
  const issues = [];
  if (!files.length) {
    console.log('Nada que comprobar.');
    return;
  }
  for (const file of files) {
    const absolute = path.isAbsolute(file) ? file : path.join(ROOT, file);
    if (!fs.existsSync(absolute)) continue;
    const text = fs.readFileSync(absolute, 'utf8');
    if (/check-es:skip/.test(text.slice(0, 400))) continue;
    const lang = langOf(file);
    if (lang === 'md') {
      const original = readOriginal(file);
      if (original) compareStats(file, original, text, issues);
    }
    findResidue(file, text, lang, issues);
    if (lang === 'md' || lang === 'js' || lang === 'py') spellIssues(file, text, lang, issues);
  }
  const errors = issues.filter(issue => issue.severity === 'error');
  const warnings = issues.filter(issue => issue.severity === 'warning');
  if (options.json) {
    console.log(JSON.stringify({ summary: { files: files.length, errors: errors.length, warnings: warnings.length }, issues }, null, 2));
  } else {
    console.log(`check-es · ${files.length} archivo(s) · ${errors.length} error(es) · ${warnings.length} aviso(s)`);
    for (const issue of issues) {
      const position = issue.line ? `:${issue.line}:${issue.column}` : '';
      console.log(`[${issue.severity === 'error' ? 'ERROR' : 'AVISO'}] ${issue.file}${position} ${issue.message}`);
      if (issue.snippet) console.log(`        ${issue.snippet}`);
    }
  }
  if (errors.length || (options.strict && warnings.length)) process.exitCode = 1;
}

main();
