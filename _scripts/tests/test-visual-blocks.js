'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { renderScratchBlocks, normalizeScratchBlocksCode, renderMakeCodeFallbackSVG, SAMPLES } = require('../lib/blocks');
const { renderTangibleBlocks } = require('../lib/tangible-blocks');
const renderer = require('../lib/markdown');

const labels = svg => [...svg.matchAll(/<text\b[^>]*>([^<]*)<\/text>/g)].map(match => match[1]).join(' ');
const source = `cuando comience el programa
para siempre
si <el sensor detecta un obstáculo> entonces
detener el movimiento
si no
avanzar a velocidad (20)
fin
fin`;
const normalized = normalizeScratchBlocksCode(source, 'mblock');
assert.match(normalized, /cuando comience el programa :: hat #0079dc/);
assert.match(normalized, /para siempre \{/);
assert.match(normalized, /si <el sensor detecta un obstáculo> entonces \{/);
assert.match(normalized, /\} else \{/);
assert.match(normalized, /\} @loopArrow :: cap #ffab19/);
const svg = renderScratchBlocks(source, { dialect: 'mblock' });
assert.match(labels(svg), /entonces detener el movimiento si no avanzar a velocidad 20/);
assert.doesNotMatch(labels(svg), /\b(?:else|fin|hat|cstart|cend)\b/);
assert.match(svg, /fill="#0079dc"/);
assert.match(svg, /fill="#ffab19"/);

// Legacy Catalan pseudo-code still groups loops and conditions correctly.
const legacy = normalizeScratchBlocksCode('quan comença el programa\nper sempre\nsi <x> aleshores\nmostra [Hola]\nsi no\nmostra [Adéu]\nfi\nfi', 'mblock');
assert.match(legacy, /quan comença el programa :: hat #0079dc/);
assert.match(legacy, /\} else \{/);
assert.match(legacy, /\} @loopArrow :: cap #ffab19/);
const explicit = normalizeScratchBlocksCode('para siempre :: cstart #ffab19\nmostrar [Hola]\nfin :: cend', 'mblock');
assert.match(explicit, /\} @loopArrow :: cap #ffab19/);

const spike = renderScratchBlocks('cuando comience el programa\nmostrar una cara feliz\nemitir un tono corto con el Hub\nactivar el motor [A v] a velocidad baja\ndetener todo', { dialect: 'spikeapp' });
for (const color of ['#fddc3e', '#00a8a8', '#785ef0', '#d82098', '#ff8c00']) {
  assert.ok(spike.includes(`fill="${color}"`), `SPIKE retains its palette: ${color}`);
}
// A literal message is data, even if it happens to be the English separator.
assert.match(labels(renderScratchBlocks('mostrar [else]', { dialect: 'mblock' })), /mostrar else/);

const root = path.resolve(__dirname, '../..');
let diagrams = 0;
let tangibleDiagrams = 0;
for (const name of fs.readdirSync(path.join(root, '_content/tutorials'))) {
  if (!/^(cr|sp|tb|cs)-.*\.md$/.test(name)) continue;
  const source = fs.readFileSync(path.join(root, '_content/tutorials', name), 'utf8');
  for (const [, dialect, code] of source.matchAll(/^```(talebot|coding-set)\n([\s\S]*?)^```/gm)) {
    assert.doesNotMatch(code, /avançar|repeteix|girar dreta|girar esquerra|gravació|executa|esborra|defineix|crida|\bfi\b/, name);
    assert.match(renderTangibleBlocks(code, dialect), /role="img" aria-label="/);
    tangibleDiagrams++;
  }
  for (const [, dialect, code] of source.matchAll(/^```(mblock|spikeapp)\n([\s\S]*?)^```/gm)) {
    const rendered = renderer.parse(`\`\`\`${dialect}\n${code}\`\`\``).html;
    const text = labels(rendered);
    assert.match(rendered, /<svg\b/);
    assert.match(rendered, new RegExp(`data-block-engine="${dialect}"`));
    assert.doesNotMatch(text, /\b(?:quan|mostra|sempre|aleshores|graus|durant|segons|esborra|atura|amb|else|fin)\b/, name);
    diagrams++;
  }
}
assert.ok(diagrams >= 19);
assert.ok(tangibleDiagrams >= 23);
for (const code of Object.values(SAMPLES)) {
  assert.doesNotMatch(labels(renderScratchBlocks(code)), /\b(?:quan|mostra|sempre|aleshores|graus|durant|segons|amb|rotacions|detectat)\b/);
}
const fallback = renderMakeCodeFallbackSVG('basic.forever(function () {\n basic.showIcon(IconNames.Heart)\n basic.clearScreen()\n})');
assert.match(labels(fallback), /para siempre mostrar el icono ♥ corazón borrar la pantalla/);
const tangible = renderTangibleBlocks('repetir aleatorio -> avanzar -> fin', 'coding-set');
assert.match(tangible, /aria-label="Inicio del bucle \(aleatorio\) → Adelante → Fin del bucle"/);
console.log(`Visual blocks: OK (${diagrams} text diagrams, ${tangibleDiagrams} tangible sequences, samples, branches and palettes)`);
