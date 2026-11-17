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
  '## 🎯 ¿Qué vamos a aprender?',
  '## 🧰 Materiales y preparación',
  '## 🧩 Funciones y controles',
  '## 👣 Paso a paso',
  '## 🧪 Comprobación y resolución de problemas',
  '## 🛡️ Uso y seguridad',
  '## 🔗 Fuentes y límites',
];

// Inventari mínim de funcions que han d'aparéixer explicades en alguna fitxa de cada robot.
// Les expressions comproven cobertura del corpus; les fitxes conserven els límits de cada model.
const robotCapabilities = {
  'coding-express': [
    /sensor óptico inferior/i, /ladrillos? de acción/i, /luz del tren/i, /sonidos? asociados al tren/i,
    /Push & Go/i, /bucle/i, /bifurc/i, /distancia/i, /motor/i,
  ],
  'tale-bot': [
    /botones direccionales/i, /OID/i, /grabación/i, /dibujo/i, /repetición/i, /borrado/i,
    /altavoz|reproducción de audio/i, /micrófono|grabación.*voz/i, /brazos/i,
  ],
  'coding-set': [
    /Control Tower/i, /tablero de control/i, /bloques numéricos/i, /bucle/i, /función/i,
    /Sensor Add-on/i, /bandera/i, /reconocimiento visual|cámara|escaneo|lectura/i, /Bluetooth/i,
  ],
  'codey-rocky': [
    /matriz(?: LED)?(?: 16| 16 × 8)/i, /botones A y B/i, /giroscopio/i, /sensor infrarrojo/i,
    /sensor de color|infrarrojo\/color/i, /sensor de luz/i, /sensor de sonido/i, /motores.*orugas/i, /Python/i,
    /altavoz/i, /Bluetooth/i, /batería/i, /expresión propia|cara propia/i,
    /melodía|secuencia corta de tonos/i, /danza/i,
  ],
  microbit: [
    /matriz 5 × 5/i, /botones A\/B/i, /acelerómetro/i, /brújula/i, /temperatura/i,
    /sensor de luz/i, /micrófono/i, /altavoz/i, /radio/i, /Bluetooth/i, /pines/i,
    /logotipo táctil/i, /MicroPython/i, /registro de datos|datalogger/i,
  ],
  spike: [
    /Hub Prime/i, /matriz/i, /giroscopio/i, /motores/i, /distancia/i, /sensor de color/i,
    /sensor de fuerza/i, /Python/i, /puertos A.?F/i, /Bluetooth|BLE/i, /USB/i, /altavoz/i,
    /botones laterales|botones izquierdo y derecho/i, /batería recargable/i, /sensor de seis ejes/i,
  ],
};

// Les funcions no es donen per cobertes només perquè apareguen a la fitxa:
// també han de tindre una pràctica explicada dins dels passos guiats.
const guidedCapabilities = {
  'coding-express': [
    /sensor óptico/i, /ladrillo rojo/i, /amarillo.*azul/i,
    /ladrillo blanco/i, /ladrillo verde/i, /Push & Go|empuj/i, /repet/i, /bifurcación|vía en Y/i,
    /app/i, /distancia/i, /melodía|secuencia sonora|sonidos/i,
  ],
  'tale-bot': [
    /botones direccionales|órdenes sencillas|órdenes? de movimiento/i, /Play/i, /Delete|Clear|borrado/i,
    /indicadores/i, /repetición|repite/i, /danza/i, /OID/i, /grabación/i,
    /dibujo|rotulador/i, /casilla|cuadrícula/i, /brazos/i, /objeto ligero/i,
  ],
  'coding-set': [
    /Control Tower|torre de control/i, /Bluetooth|conectan|conexión/i, /tablero/i,
    /bloques numéricos/i, /avanz.*retroced/i, /giros?.{0,30}90°/i,
    /bucle/i, /Define Function|función/i, /movimiento aleatorio/i, /música/i, /danza/i,
    /bandera/i, /obstáculo/i, /Sensor Add-on/i,
  ],
  'codey-rocky': [
    /matriz|pantalla|LED/i, /botones? A(?: y B|\/B)|botón A|botón B/i, /potenciómetro|gear knob/i,
    /giroscopio|inclinación/i, /luz/i, /sensor de sonido/i, /indicador RGB/i,
    /sensor de color|infrarrojo\/color/i, /seguimiento de línea|seguir una línea|línea oscura/i, /obstáculo/i,
    /infrarrojo/i, /distancia/i, /batería/i, /altavoz|bloques de sonido|sonidos?/i, /Bluetooth/i,
    /modo Live|en vivo/i, /modo Upload/i, /Python/i, /batería/i, /expresión propia/i,
    /danza/i, /melodía|secuencia corta de tonos/i,
    /luz ambiental alta/i, /sensor de sonido supera/i,
  ],
  microbit: [
    /matriz|LED/i, /botones? A\/B|botón A|botón B/i, /acelerómetro|sacud/i,
    /luz/i, /brújula/i, /temperatura/i, /logotipo táctil|tocar el logotipo|logotipo sensible/i,
    /micrófono/i, /altavoz/i, /radio/i, /Bluetooth/i, /pines|GPIO/i, /MicroPython/i,
    /registro de datos|datalogger/i, /recuper.{0,40}datos|datos.{0,40}recuper/i,
  ],
  spike: [
    /Hub Prime/i, /puerto [A-F]/i, /Bluetooth|BLE/i, /matriz/i, /giroscopio/i,
    /motor angular/i, /sensor de color/i, /sensor de fuerza/i, /sensor de distancia/i,
    /ultrasonido|ultrasónico/i, /altavoz/i, /Python/i, /botones izquierdo y derecho/i, /botón central/i,
    /sacud|giroscop|inclinación/i, /batería|carga/i, /USB/i,
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
    .map(source => source.split('## 👣 Paso a paso', 2)[1].split('\n## ', 1)[0])
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
  assert.equal((rendered.html.match(/<figure class="sa-illustration">/g) || []).length, 1, `${name}: la portada decorativa només apareix una vegada`);
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
  assert.doesNotMatch(source, /Evidencias de aprendizaje|Preguntas para comprobar|Consejo docente|\b(?:alumnado|alumnes|parejas|roles)\b/, `${name}: és un manual d’ús sense consignes d’aula`);
  assert.match(introHTML, /¿Qué vamos a aprender\?/, `${name}: la introducció té el títol propi dels tutorials`);
  const proofSection = source.split(commonHeadings[4], 2)[1].split('\n## ', 1)[0];
  const proofProtocol = proofSection.split('### Preguntas para comprobar', 1)[0].trim();
  assert.ok(proofProtocol.length >= 80, `${name}: descriu una prova observable abans de les preguntes`);
  assert.match(proofProtocol, /\b(prob|repet|regist|comprueb|comprob|medid|medir|anot|ejecut|observ|compar|identific|verific)/i,
    `${name}: el protocol proposa una acció de verificació`);
  for (const heading of commonHeadings) {
    const section = source.split(heading, 2)[1].split('\n## ', 1)[0].trim();
    assert.ok(section.length > 0, `${name}: completa l'apartat ${heading}`);
  }
  assert.match(source, /https:\/\//, `${name}: inclou una font externa consultable`);
}

const voiceTutorial = fs.readFileSync(path.join(tutorialsDir, 'tb-grabacion-reproduccion-voz.md'), 'utf8');
assert.match(voiceTutorial, /^title: "?Grabación y reproducción de voz"?$/m, 'Tale-Bot separa la gravació d’àudio del reconeixement de parla');
assert.match(voiceTutorial, /No reconoce ni interpreta el habla como una orden/, 'la fitxa no atribueix reconeixement de parla al Tale-Bot');
const codeyVoice = fs.readFileSync(path.join(tutorialsDir, 'cr-voz-ia.md'), 'utf8');
assert.match(codeyVoice, /no (?:incluye|incorpora) un módulo que reconozca palabras/i, 'Codey Rocky separa el sensor de so del reconeixement de parla');
assert.match(codeyVoice, /simulación|simule/i, 'la guia de veu ofereix una alternativa sense serveis externs');
assert.match(codeyVoice, /Neuron compatible/i, 'la guia només atribueix reconeixement de parla a un mòdul complementari');
assert.doesNotMatch(codeyVoice, /controlar el movimiento del robot mediante órdenes de voz en catalán/i, 'la guia no promet control de veu nadiu');

const codingSetRoute = fs.readFileSync(path.join(tutorialsDir, 'cs-obstaculos-bandera.md'), 'utf8');
assert.match(codingSetRoute, /Obstacle Add-on|Sensor Add-on/, 'la guia diferencia els obstacles físics del complement de sensors');
assert.match(codingSetRoute, /MatataBot base no detecta ni esquiva obstáculos automáticamente/, 'la guia no atribueix detecció al Coding Set base');
assert.match(codingSetRoute, /bandera como destino/i, 'la guia treballa la bandera del conjunt base com a destinació');
const codingSetNumbers = fs.readFileSync(path.join(tutorialsDir, 'cs-bloques-numericos-movimiento.md'), 'utf8');
assert.match(codingSetNumbers, /no se aplican a los giros izquierda\/derecha/i, 'Coding Set explica que els nombres no es combinen amb girs');
assert.match(codingSetNumbers, /bloques numéricos no se aplican a los giros/i, 'la seqüència guiada prova el límit dels blocs numèrics');
assert.doesNotMatch(codingSetNumbers, /bloques de giro angular \(90º, 45º, 30º\)/i, 'Coding Set no atribueix girs angulars numèrics al kit base');

const taleBotClear = fs.readFileSync(path.join(tutorialsDir, 'tb-borrado-depuracion.md'), 'utf8');
assert.match(taleBotClear, /menos de un segundo elimina la última orden/i, 'Tale-Bot documenta esborrat curt');
assert.match(taleBotClear, /más de un segundo borra todas las órdenes/i, 'Tale-Bot documenta esborrat llarg');
const taleBotRepeat = fs.readFileSync(path.join(tutorialsDir, 'tb-repeticion-mapas-danza.md'), 'utf8');
assert.match(taleBotRepeat, /no permite seleccionar solo un fragmento/i, 'Tale-Bot documenta el límit de la repetició');
const spikePython = fs.readFileSync(path.join(tutorialsDir, 'sp-python-motor.md'), 'utf8');
assert.match(spikePython, /motor\.run_for_degrees\(port\.A, 360, 400\)/, 'SPIKE Prime inclou una prova executable en Python');
assert.match(spikePython, /MicroPython/, 'SPIKE Prime diferencia l’editor de MicroPython de Python complet');
const spikeIntro = fs.readFileSync(path.join(tutorialsDir, 'sp-primeras-pasos.md'), 'utf8');
assert.doesNotMatch(spikeIntro, /Hub SPIKE Prime o Essential/, 'la guia SPIKE Prime no confon els dos hubs');
const microbitPython = fs.readFileSync(path.join(tutorialsDir, 'mb-micropython-simulador.md'), 'utf8');
assert.match(microbitPython, /from microbit import \*/, 'micro:bit inclou sintaxi MicroPython executable');
assert.match(microbitPython, /MakeCode Python.*MicroPython|MicroPython.*MakeCode Python/s, 'micro:bit diferencia els dos entorns Python');
const microbitDataLog = fs.readFileSync(path.join(tutorialsDir, 'mb-registro-datos.md'), 'utf8');
assert.match(microbitDataLog, /micro:bit V2/i, 'el registre persistent s’identifica com a funció de V2');
assert.match(microbitDataLog, /no.*V1|V1.*no/i, 'la guia no atribueix el registre persistent a V1');
assert.match(microbitDataLog, /borrar|sobrescribir/i, 'la guia explica el risc d’esborrar o reemplaçar dades');
const codeyPython = fs.readFileSync(path.join(tutorialsDir, 'cr-python-upload.md'), 'utf8');
assert.match(codeyPython, /modo Upload/, 'Codey Rocky practica Python en el mode Upload oficial');
assert.match(codeyPython, /Live.*Upload|Upload.*Live/s, 'Codey Rocky diferencia Live i Upload');
const codeyExpressions = fs.readFileSync(path.join(tutorialsDir, 'cr-expresiones-sonido-bateria.md'), 'utf8');
for (const capability of [/expresión propia/i, /botón A/i, /indicador RGB/i, /to|so/i, /danza/i, /batería/i,
  /luz ambiental alta/i, /sensor de sonido supera/i]) {
  assert.match(codeyExpressions, capability, `Codey Rocky inclou una pràctica de ${capability}`);
}
assert.match(codeyExpressions, /^(?:### )\d+\. /m, 'la guia de Codey Rocky conserva la seqüència de passos comuna');

console.log(`Format comú correcte: ${tutorials.length} tutorials, ${commonHeadings.length} apartats en el mateix ordre.`);

const tutorialWithHeading = renderer.parse('## Pas a pas\n### 1. Prepareu\nText inicial.\n#### Comprovació\nText de comprovació.', 'https://example.test/_content/tutorials/tb-prova.md');
assert.doesNotMatch(tutorialWithHeading.html, /learning-phase|Desenvolupament del pas/, 'els subtítols explícits tampoc creen fases en tutorials');
assert.match(tutorialWithHeading.html, /<h4>Comprovació<\/h4>\s*<p>Text de comprovació\.<\/p>/, 'es conserva el subtítol i el seu contingut directament dins del pas');
