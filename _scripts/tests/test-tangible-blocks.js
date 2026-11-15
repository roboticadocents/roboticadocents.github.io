'use strict';
const assert = require('node:assert/strict');
const { parseSequence, renderTangibleBlocks } = require('../lib/tangible-blocks');
const renderer = require('../lib/markdown');
assert.deepEqual(parseSequence('avanzar -> avançar → girar derecha', 'talebot').map(b => b.type), ['forward', 'forward', 'right']);
assert.deepEqual(parseSequence('repeteix 3\nendavant -> girar esquerra\nfi', 'coding-set'), [{ type: 'loop', number: '3' }, { type: 'forward' }, { type: 'left' }, { type: 'end' }]);
assert.equal(parseSequence('avanzar -> 5', 'coding-set')[0].number, '5');
for (const source of ['repeteix 3 -> avançar', 'fi', 'girar', '<script>alert(1)</script>', 'avançar -> 9']) {
  assert.throws(() => parseSequence(source, 'coding-set'));
}
assert.throws(() => parseSequence('repeteix 3 -> fi', 'talebot'));
for (const lang of ['talebot', 'tale-bot', 'coding-set', 'codingset']) {
  const result = renderer.parse(`\`\`\`${lang}\navanzar -> avanzar -> girar derecha\n\`\`\``);
  assert.match(result.html, /<svg[^>]+role="img"/);
  assert.match(result.html, /aria-label="Endavant → Endavant → Gir a la dreta"/);
  assert.match(result.html, /<div class="blocks-visual-frame"[^>]*><svg/);
  assert.doesNotMatch(result.html, /<figure|<figcaption/);
}
const bad = renderer.parse('```talebot\navanzar -> girar\n```');
assert.match(bad.html, /Instrucció no reconeguda/);
assert.match(bad.html, /avanzar -&gt; girar/);
assert.doesNotMatch(bad.html, /<svg/);
const tale = renderTangibleBlocks('avanzar -> retroceder -> girar derecha -> girar izquierda', 'talebot');
for (const color of ['#ff3b47', '#188c38', '#00a8f3', '#ffd400']) assert.ok(tale.includes(color));
console.log('Tangible blocks: OK');

assert.deepEqual(parseSequence('gravació -> dansa', 'talebot').map(b => b.type), ['record', 'dance']);
assert.deepEqual(parseSequence('defineix funció -> crida funció -> aleatori -> música -> dansa', 'coding-set').map(b => b.type), ['define', 'call', 'random', 'music', 'dance']);
assert.throws(() => parseSequence('crida funció', 'talebot'));
assert.throws(() => parseSequence('gravació', 'coding-set'));
