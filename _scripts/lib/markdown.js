'use strict';

/**
 * _scripts/lib/markdown.js
 *
 * Orquestador del pipeline de compilació de continguts en 2 fases:
 * - Fase 1: Extracció de Front Matter YAML + Traducció de Markdown a HTML estàndard
 *   mitjançant markdown-it ({ html: true }), permetent l'ús d'etiquetes i blocs HTML
 *   dins dels fitxers .md.
 * - Fase 2: Transformació semàntica sobre l'arbre HTML (_scripts/lib/semantic-html.js)
 *   per construir les seccions canòniques, passos navegables (learning-step + wizard),
 *   notes pedagògiques, figures i blocs de codi visuals (MakeCode, mBlock, SPIKE App).
 */

const MarkdownIt = require('../vendor/markdown-it.min.js');
const { transformSemanticHTML } = require('./semantic-html');

// Inicialitzem markdown-it amb suport d'HTML natiu activat
const md = new MarkdownIt({
  html: true,
  linkify: false,
  typographer: false
});

// Permetem que tots els enllaços es generin com a <a> i deixem que Fase 2 (safeURL)
// filtri i neutralitzi esquemes no permesos (com javascript:) convertint-los en href="#".
md.validateLink = () => true;

function parseScalar(raw) {
  const value = raw.trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    try { return JSON.parse(value); } catch (_) { return value.slice(1, -1); }
  }
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replace(/''/g, "'");
  if (/^(true|false)$/i.test(value)) return value.toLowerCase() === 'true';
  return value;
}

function splitFrontMatter(source) {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) return { data: {}, body: source };
  const data = {};
  const lines = match[1].split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const field = lines[i].match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    const key = field[1], raw = field[2];
    if (raw === '>' || raw === '|') {
      const parts = [];
      while (i + 1 < lines.length && /^\s{2,}\S/.test(lines[i + 1])) parts.push(lines[++i].trim());
      data[key] = parts.join(raw === '>' ? ' ' : '\n');
    } else if (!raw && i + 1 < lines.length && /^\s*-\s+/.test(lines[i + 1])) {
      const items = [];
      while (i + 1 < lines.length && /^\s*-\s+/.test(lines[i + 1])) {
        const itemLine = lines[++i].replace(/^\s*-\s+/, '');
        const itemField = itemLine.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
        if (!itemField) { items.push(parseScalar(itemLine)); continue; }
        const item = { [itemField[1]]: parseScalar(itemField[2]) };
        while (i + 1 < lines.length && /^\s{2,}[A-Za-z0-9_-]+:\s*/.test(lines[i + 1])) {
          const nested = lines[++i].trim().match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
          if (nested) item[nested[1]] = parseScalar(nested[2]);
        }
        items.push(item);
      }
      data[key] = items;
    } else if (!raw) data[key] = '';
    else data[key] = parseScalar(raw);
  }
  return { data, body: source.slice(match[0].length) };
}

function renderMarkdown(source, sourceURL) {
  const { data, body } = splitFrontMatter(source);
  // Fase 1: Traducció de Markdown (+ HTML natiu) a HTML estàndard
  // Les dades de generació de les fitxes no són contingut visible.
  const publicBody = body.replace(/^<!-- (?:Inici|Codi|Objectiu|Resposta de control|Proposta|Mode|Capses|Metes|Comparacio): .+ -->[ \t]*$/gm, '');
  const standardHTML = md.render(publicBody);
  // Fase 2: Transformació semàntica de l'arbre HTML
  return transformSemanticHTML(standardHTML, { data, sourceURL });
}

module.exports = {
  parse: renderMarkdown,
  splitFrontMatter
};
