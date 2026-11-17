'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const dist = path.join(root, 'dist');
const readPage = route => fs.readFileSync(path.join(dist, route, 'index.html'), 'utf8');
const catalog = readPage('pensamiento-computacional');
const robotPrefixes = { 'tale-bot': 'tb', 'coding-set': 'cs' };
const robotPages = Object.fromEntries(Object.keys(robotPrefixes).map(robot => [robot, readPage(`robot/${robot}`)]));
const documents = folder => fs.readdirSync(path.join(root, '_content', folder))
  .filter(file => file.endsWith('.md') && !/^(README|TEMPLATE-)/.test(file));

for (const file of documents('tutorials')) {
  assert.match(file, /^(ce|cr|cs|mb|sp|tb)-.+\.md$/, `${file}: nom de tutorial sense prefix redundant`);
}

const counts = { tb: 0, cs: 0 };
for (const file of documents('activitats')) {
  assert.match(file, /^(pc|tb|cs)-.+\.md$/, `${file}: prefix d'activitat reconegut`);
  const source = fs.readFileSync(path.join(root, '_content/activitats', file), 'utf8');
  if (/^active:\s*false\s*$/m.test(source)) continue;
  const slug = file.slice(0, -3);
  const prefix = slug.split('-')[0];
  const link = `/actividad/${slug}/index.html`;
  assert.equal(catalog.includes(link), prefix === 'pc', `${slug}: només PC al catàleg de pensament`);
  const detail = readPage(`actividad/${slug}`);
  for (const [robot, expectedPrefix] of Object.entries(robotPrefixes)) {
    assert.equal(robotPages[robot].includes(link), prefix === expectedPrefix, `${slug}: només al seu robot`);
    if (prefix === expectedPrefix) {
      counts[prefix]++;
      assert.ok(detail.includes(`../../robot/${robot}/index.html#activitats`), `${slug}: retorn al robot`);
    }
  }
  if (prefix === 'pc') assert.ok(detail.includes('../../pensamiento-computacional/index.html'));
}

for (const [robot, page] of Object.entries(robotPages)) {
  const activitiesIndex = page.indexOf('data-robot-activities');
  assert.ok(activitiesIndex > page.indexOf('data-tutorial-grid'), `${robot}: activitats després dels tutorials`);
  assert.ok(activitiesIndex < page.indexOf('data-official-resources'), `${robot}: activitats abans dels recursos`);
  assert.match(page, /<h2 id="activities-heading">Actividades<\/h2>/);
  assert.equal(page.includes('Todavía no hay actividades publicadas'), counts[robotPrefixes[robot]] === 0);
}
for (const robot of ['coding-express', 'codey-rocky', 'microbit', 'spike']) {
  assert.ok(!readPage(`robot/${robot}`).includes('data-robot-activities'), `${robot}: no afegeix una secció no sol·licitada`);
}

const redirects = require('../content-redirects.json');
for (const [route, mapping] of Object.entries(redirects)) {
  for (const [oldSlug, slug] of Object.entries(mapping)) {
    if (!fs.existsSync(path.join(dist, route, slug, 'index.html'))) continue;
    assert.ok(readPage(`${route}/${oldSlug}`).includes(`data-redirect-target="../${slug}/index.html"`), `${oldSlug}: redirigeix al nou nom`);
  }
}
console.log('Classificació PC/Tale-Bot/Coding Set, navegació i redireccions correctes.');
