const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const renderer = require('../lib/markdown.js');

const root = path.resolve(__dirname, '../..');
const tutorialsDir = path.join(root, '_content', 'tutorials');
const tutorials = fs.readdirSync(tutorialsDir)
  .filter(name => /^(ce|cr|cs|mb|sp|tb)-.+\.md$/.test(name))
  .sort();

const commonHeadings = [
  '## 🎯 Què aprendrem?',
  '## 🧰 Materials i preparació',
  '## 🧩 Funcions i controls',
  '## 👣 Pas a pas',
  '## 🧪 Comprovació i resolució de problemes',
  '## 🛡️ Ús i seguretat',
  '## 🔗 Fonts i límits',
];

// Inventari mínim de funcions que han d'aparéixer explicades en alguna fitxa de cada robot.
// Les expressions comproven cobertura del corpus; les fitxes conserven els límits de cada model.
const robotCapabilities = {
  'coding-express': [
    /sensor òptic inferior/i, /maons d’acció/i, /llum del tren/i, /sons? associats al tren/i,
    /Push & Go/i, /bucle/i, /bifurc/i, /distància/i, /motor/i,
  ],
  'tale-bot': [
    /botons direccionals/i, /OID/i, /gravació/i, /dibuix/i, /repetició/i, /esborrat/i,
    /altaveu|reproducció d’àudio/i, /micròfon|enregistrament de veu|gravació.*veu/i, /braços/i,
  ],
  'coding-set': [
    /Control Tower/i, /tauler de control/i, /blocs numèrics/i, /bucle/i, /funció/i,
    /Sensor Add-on/i, /bandera/i, /reconeixement visual|càmera|escaneig|lectura/i, /Bluetooth/i,
  ],
  'codey-rocky': [
    /matriu(?: LED)?(?: 16| 16 × 8)/i, /botons A i B/i, /giroscop/i, /sensor infraroig/i,
    /sensor de color|infraroig\/color/i, /sensor de llum/i, /sensor de so/i, /motors.*erugues/i, /Python/i,
    /altaveu/i, /Bluetooth/i, /bateria/i, /expressió pròpia|cara pròpia/i,
    /melodia|seqüència curta de tons/i, /dansa/i,
  ],
  microbit: [
    /matriu 5 × 5/i, /botons A\/B/i, /acceleròmetre/i, /brúixola/i, /temperatura/i,
    /sensor de llum/i, /micròfon/i, /altaveu/i, /ràdio/i, /Bluetooth/i, /pins/i,
    /logotip tàctil/i, /MicroPython/i, /registre de dades|datalogger/i,
  ],
  spike: [
    /Hub Prime/i, /matriu/i, /giroscop/i, /motors/i, /distància/i, /sensor de color/i,
    /sensor de força/i, /Python/i, /ports A.?F/i, /Bluetooth|BLE/i, /USB/i, /altaveu/i,
    /botons laterals|botons esquerre i dret/i, /bateria recarregable/i, /sensor de sis eixos/i,
  ],
};

// Les funcions no es donen per cobertes només perquè apareguen a la fitxa:
// també han de tindre una pràctica explicada dins dels passos guiats.
const guidedCapabilities = {
  'coding-express': [
    /sensor òptic/i, /maó roig/i, /groc.*blau/i,
    /maó blanc/i, /maó verd/i, /Push & Go|empenta/i, /repet/i, /bifurcació|via en Y/i,
    /app/i, /distància/i, /melodia|seqüència sonora|sons/i,
  ],
  'tale-bot': [
    /botons direccionals|ordres senzilles|ordres? de moviment/i, /Play/i, /Delete|Clear|esborrat/i,
    /indicadors/i, /repetició|repeteix/i, /dansa/i, /OID/i, /gravació/i,
    /dibuix|retolador/i, /casella|graella/i, /braços/i, /objecte lleuger/i,
  ],
  'coding-set': [
    /Control Tower|torre de control/i, /Bluetooth|connecten|connexió/i, /tauler/i,
    /blocs numèrics/i, /avanç.*retroced/i, /girs?.{0,30}90°/i,
    /bucle/i, /Define Function|funció/i, /moviment aleatori/i, /música/i, /dansa/i,
    /bandera/i, /obstacle/i, /Sensor Add-on/i,
  ],
  'codey-rocky': [
    /matriu|pantalla|LED/i, /botons A i B|botó A.{0,100}botó B/i, /potenciòmetre|gear knob/i,
    /giroscop|inclinació/i, /llum/i, /sensor de so/i, /indicador RGB/i,
    /sensor de color|infraroig\/color/i, /seguir una línia|seguiment de línia|línia fosca/i, /obstacle/i,
    /infraroig/i, /distància/i, /bateria/i, /altaveu|blocs de so|sons?/i, /Bluetooth/i,
    /mode Live|en viu/i, /mode Upload/i, /Python/i, /bateria/i, /expressió pròpia/i,
    /dansa/i, /melodia|seqüència curta de tons/i,
    /llum ambiental alta/i, /sensor de so supera/i,
  ],
  microbit: [
    /matriu|LED/i, /botons? A\/B|botó A|botó B/i, /acceleròmetre|sacsej/i,
    /llum/i, /brúixola/i, /temperatura/i, /logotip tàctil|tocar el logotip|logotip sensible/i,
    /micròfon/i, /altaveu/i, /ràdio/i, /Bluetooth/i, /pins|GPIO/i, /MicroPython/i,
    /registre de dades|datalogger/i, /recuper.{0,40}dades|dades.{0,40}recuper/i,
  ],
  spike: [
    /Hub Prime/i, /port [A-F]/i, /Bluetooth|BLE/i, /matriu/i, /giroscop/i,
    /motor angular/i, /sensor de color/i, /sensor de força/i, /sensor de distància/i,
    /ultrasò/i, /altaveu/i, /Python/i, /botons esquerre i dret/i, /botó central/i,
    /sacsej|giroscopi|inclinació/i, /bateria|càrrega/i, /USB/i,
  ],
};

assert.ok(tutorials.length >= 36, 'el catàleg local conté almenys les 36 fitxes base de tutorials');
assert.ok(fs.existsSync(path.join(tutorialsDir, 'TEMPLATE-TUTORIAL.md')), 'existeix la plantilla base TEMPLATE-TUTORIAL.md');

const corpusByRobot = new Map();
for (const name of tutorials) {
  const source = fs.readFileSync(path.join(tutorialsDir, name), 'utf8');
  const robot = source.match(/^robot:\s*(.+)$/m)?.[1].trim();
  corpusByRobot.set(robot, `${corpusByRobot.get(robot) || ''}\n${source}`);
}
for (const [robot, capabilities] of Object.entries(robotCapabilities)) {
  const corpus = corpusByRobot.get(robot) || '';
  for (const capability of capabilities) {
    assert.match(corpus, capability, `${robot}: el conjunt de tutorials cobreix ${capability}`);
  }
}

for (const [robot, capabilities] of Object.entries(guidedCapabilities)) {
  const guidedCorpus = tutorials
    .map(name => fs.readFileSync(path.join(tutorialsDir, name), 'utf8'))
    .filter(source => source.match(/^robot:\s*(.+)$/m)?.[1].trim() === robot)
    .map(source => source.split('## 👣 Pas a pas', 2)[1].split('\n## ', 1)[0])
    .join('\n');
  for (const capability of capabilities) {
    assert.match(guidedCorpus, capability, `${robot}: hi ha una pràctica guiada per a ${capability}`);
  }
}

for (const name of tutorials) {
  const source = fs.readFileSync(path.join(tutorialsDir, name), 'utf8');
  const rendered = renderer.parse(source, `https://example.test/_content/tutorials/${name}`);
  assert.ok(rendered.data.title && rendered.html, `${name}: el Markdown es parsejable per la plantilla compartida`);
  assert.doesNotMatch(rendered.html, /Desenvolupament del pas|<section class="learning-phase/, `${name}: el contingut del pas no té cap embolcall de fase`);
  assert.match(rendered.html, /<div class="learning-step-content">\s*<(?:p|figure|aside|ul|ol)/, `${name}: el contingut és fill directe del pas`);
  const frontMatter = source.match(/^---\n([\s\S]*?)\n---\n/);
  assert.ok(frontMatter, `${name}: té metadades YAML`);
  const metadataKeys = frontMatter[1].match(/^[a-z][a-z0-9_-]*:/gm) || [];
  assert.deepEqual(metadataKeys, ['title:', 'description:', 'robot:', 'level:', 'duration:', 'order:', 'image:'],
    `${name}: utilitza les mateixes metadades i en el mateix ordre`);
  for (const field of ['title', 'description', 'robot', 'level', 'duration', 'order', 'image']) {
    assert.match(frontMatter[1], new RegExp(`^${field}:\\s*.+$`, 'm'), `${name}: declara ${field}`);
  }
  const image = frontMatter[1].match(/^image:\s*(.+)$/m)[1].trim();
  assert.ok(fs.existsSync(path.join(root, image)), `${name}: la portada local existe`);

  const introHTML = rendered.html.match(/<section[^>]*data-section-group="intro"[^>]*>([\s\S]*?)<\/section>/)[1];
  assert.equal((rendered.html.match(/<figure class="sa-illustration"><img[^>]*alt=""/g) || []).length, 1, `${name}: la portada decorativa només apareix una vegada`);
  assert.match(introHTML, /<img[^>]*alt=""/, `${name}: la portada decorativa pertany a la introducció`);
  assert.ok(introHTML.includes(image), `${name}: la introducció usa la portada de les metadades`);
  assert.doesNotMatch(rendered.html, /Instrucció no reconeguda|Falta «fi»/, `${name}: totes les instruccions físiques es renderitzen`);
  if (['tale-bot', 'coding-set'].includes(rendered.data.robot)) {
    assert.match(rendered.html, /class="tangible-sequence"/, `${name}: inclou instruccions físiques SVG`);
  }

  const headings = source.split('\n').filter(line => line.startsWith('## '));
  assert.deepEqual(headings, commonHeadings, `${name}: segueix exactament la plantilla i l'ordre comuns`);
  const steps = source.match(/^### \d+\. /gm) || [];
  assert.ok(steps.length >= 2, `${name}: organitza la guia en almenys dos passos numerats`);
  const stepNumbers = (source.match(/^### (\d+)\. /gm) || []).map(line => Number(line.match(/^### (\d+)/)[1]));
  assert.deepEqual(stepNumbers, stepNumbers.map((_, index) => index + 1), `${name}: numera els passos de manera contínua`);
  assert.equal(rendered.steps.length, steps.length, `${name}: cada pas Markdown es converteix en un pas del wizard compartit`);
  assert.equal((rendered.html.match(/class="learning-step"/g) || []).length, steps.length,
    `${name}: tots els tutorials comparteixen la mateixa presentació de passos`);
  assert.deepEqual(
    [...rendered.html.matchAll(/data-section-group="([a-z]+)"/g)].map(match => match[1]),
    ['intro', 'learning', 'materials', 'sequence', 'assessment', 'access', 'official'],
    `${name}: renderitza exactament els set apartats canònics en el mateix ordre`
  );
  const challengeSection = source.split(commonHeadings[0], 2)[1].split('\n## ', 1)[0].trim();
  assert.ok(challengeSection.split('\n\n').some(block => block && !block.startsWith('- ') && !block.startsWith('![')),
    `${name}: presenta una introducció al repte abans o entre els objectius`);
  assert.ok((challengeSection.match(/^- .+/gm) || []).length >= 2,
    `${name}: concreta almenys dos objectius en una llista`);
  const materialsSection = source.split(commonHeadings[1], 2)[1].split('\n## ', 1)[0];
  assert.ok((materialsSection.match(/^- .+/gm) || []).length >= 2, `${name}: presenta els materials com a llista`);
  const functionsSection = source.split(commonHeadings[2], 2)[1].split('\n## ', 1)[0];
  assert.ok((functionsSection.match(/^- .+/gm) || []).length >= 2, `${name}: presenta les funcions com a llista`);
  assert.doesNotMatch(source, /Evidències d’aprenentatge|Preguntes per comprovar|Consell docent|\b(?:alumnat|alumnes|parelles|rols)\b/, `${name}: és un manual d’ús sense consignes d’aula`);
  assert.match(introHTML, /Què aprendrem\?/, `${name}: la introducció té el títol propi dels tutorials`);
  const proofSection = source.split(commonHeadings[4], 2)[1].split('\n## ', 1)[0];
  const proofProtocol = proofSection.split('### Preguntes per comprovar', 1)[0].trim();
  assert.ok(proofProtocol.length >= 80, `${name}: descriu una prova observable abans de les preguntes`);
  assert.match(proofProtocol, /\b(prov|repet|registre|comprov|mesur|anot|execut|observ|compar|identific|verific)/i,
    `${name}: el protocol proposa una acció de verificació`);
  for (const heading of commonHeadings) {
    const section = source.split(heading, 2)[1].split('\n## ', 1)[0].trim();
    assert.ok(section.length > 0, `${name}: completa l'apartat ${heading}`);
  }
  assert.match(source, /https:\/\//, `${name}: inclou una font externa consultable`);
}

const voiceTutorial = fs.readFileSync(path.join(tutorialsDir, 'tb-gravacio-reproduccio-veu.md'), 'utf8');
assert.match(voiceTutorial, /^title: Gravació i reproducció de veu$/m, 'Tale-Bot separa la gravació d’àudio del reconeixement de parla');
assert.match(voiceTutorial, /No reconeix ni interpreta la parla com una ordre/, 'la fitxa no atribueix reconeixement de parla al Tale-Bot');
const codeyVoice = fs.readFileSync(path.join(tutorialsDir, 'cr-veu-ia.md'), 'utf8');
assert.match(codeyVoice, /no (?:inclou|incorpora) un mòdul que reconega paraules/i, 'Codey Rocky separa el sensor de so del reconeixement de parla');
assert.match(codeyVoice, /simulació|simule/i, 'la guia de veu ofereix una alternativa sense serveis externs');
assert.match(codeyVoice, /Neuron compatible/i, 'la guia només atribueix reconeixement de parla a un mòdul complementari');
assert.doesNotMatch(codeyVoice, /controlar el moviment del robot mitjançant ordres de veu en català/i, 'la guia no promet control de veu nadiu');

const codingSetRoute = fs.readFileSync(path.join(tutorialsDir, 'cs-obstacles-bandera.md'), 'utf8');
assert.match(codingSetRoute, /Obstacle Add-on|Sensor Add-on/, 'la guia diferencia els obstacles físics del complement de sensors');
assert.match(codingSetRoute, /MatataBot base no detecta ni esquiva obstacles automàticament/, 'la guia no atribueix detecció al Coding Set base');
assert.match(codingSetRoute, /bandera com a destinació/i, 'la guia treballa la bandera del conjunt base com a destinació');
const codingSetNumbers = fs.readFileSync(path.join(tutorialsDir, 'cs-blocs-numerics-moviment.md'), 'utf8');
assert.match(codingSetNumbers, /no s’apliquen als girs esquerre\/dret/i, 'Coding Set explica que els nombres no es combinen amb girs');
assert.match(codingSetNumbers, /blocs numèrics no s’apliquen als girs/i, 'la seqüència guiada prova el límit dels blocs numèrics');
assert.doesNotMatch(codingSetNumbers, /blocs de gir angular \(90º, 45º, 30º\)/i, 'Coding Set no atribueix girs angulars numèrics al kit base');

const taleBotClear = fs.readFileSync(path.join(tutorialsDir, 'tb-esborrat-depuracio.md'), 'utf8');
assert.match(taleBotClear, /menys d’un segon elimina l’última ordre/i, 'Tale-Bot documenta esborrat curt');
assert.match(taleBotClear, /més d’un segon esborra totes les ordres/i, 'Tale-Bot documenta esborrat llarg');
const taleBotRepeat = fs.readFileSync(path.join(tutorialsDir, 'tb-repeticio-mapes-dansa.md'), 'utf8');
assert.match(taleBotRepeat, /no permet seleccionar només un fragment/i, 'Tale-Bot documenta el límit de la repetició');
const spikePython = fs.readFileSync(path.join(tutorialsDir, 'sp-python-motor.md'), 'utf8');
assert.match(spikePython, /motor\.run_for_degrees\(port\.A, 360, 400\)/, 'SPIKE Prime inclou una prova executable en Python');
assert.match(spikePython, /MicroPython/, 'SPIKE Prime diferencia l’editor de MicroPython de Python complet');
const spikeIntro = fs.readFileSync(path.join(tutorialsDir, 'sp-primeres-passes.md'), 'utf8');
assert.doesNotMatch(spikeIntro, /Hub SPIKE Prime o Essential/, 'la guia SPIKE Prime no confon els dos hubs');
const microbitPython = fs.readFileSync(path.join(tutorialsDir, 'mb-micropython-simulador.md'), 'utf8');
assert.match(microbitPython, /from microbit import \*/, 'micro:bit inclou sintaxi MicroPython executable');
assert.match(microbitPython, /MakeCode Python.*MicroPython|MicroPython.*MakeCode Python/s, 'micro:bit diferencia els dos entorns Python');
const microbitDataLog = fs.readFileSync(path.join(tutorialsDir, 'mb-registre-dades.md'), 'utf8');
assert.match(microbitDataLog, /micro:bit V2/i, 'el registre persistent s’identifica com a funció de V2');
assert.match(microbitDataLog, /no.*V1|V1.*no/i, 'la guia no atribueix el registre persistent a V1');
assert.match(microbitDataLog, /esborrar|sobreescriure/i, 'la guia explica el risc d’esborrar o reemplaçar dades');
const codeyPython = fs.readFileSync(path.join(tutorialsDir, 'cr-python-upload.md'), 'utf8');
assert.match(codeyPython, /mode Upload/, 'Codey Rocky practica Python en el mode Upload oficial');
assert.match(codeyPython, /Live.*Upload|Upload.*Live/s, 'Codey Rocky diferencia Live i Upload');
const codeyExpressions = fs.readFileSync(path.join(tutorialsDir, 'cr-expressions-so-bateria.md'), 'utf8');
for (const capability of [/expressió pròpia/i, /botó A/i, /indicador RGB/i, /to|so/i, /dansa/i, /bateria/i,
  /llum ambiental alta/i, /sensor de so supera/i]) {
  assert.match(codeyExpressions, capability, `Codey Rocky inclou una pràctica de ${capability}`);
}
assert.match(codeyExpressions, /^(?:### )\d+\. /m, 'la guia de Codey Rocky conserva la seqüència de passos comuna');

console.log(`Format comú correcte: ${tutorials.length} tutorials, ${commonHeadings.length} apartats en el mateix ordre.`);

const tutorialWithHeading = renderer.parse('## Pas a pas\n### 1. Prepareu\nText inicial.\n#### Comprovació\nText de comprovació.', 'https://example.test/_content/tutorials/tb-prova.md');
assert.doesNotMatch(tutorialWithHeading.html, /learning-phase|Desenvolupament del pas/, 'els subtítols explícits tampoc creen fases en tutorials');
assert.match(tutorialWithHeading.html, /<h4>Comprovació<\/h4>\s*<p>Text de comprovació\.<\/p>/, 'es conserva el subtítol i el seu contingut directament dins del pas');
