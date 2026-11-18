#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const renderer = require("../lib/markdown.js");

const root = path.resolve(__dirname, "../..");
const dist = path.join(root, "dist");
const pilotPath = path.join(root, "_content/situacions/sp-listas-condiciones.md");
const pilot = renderer.parse(fs.readFileSync(pilotPath, "utf8"), "https://example.test/_content/situacions/sp-listas-condiciones.md");
assert.equal(pilot.data.title, "Lógica para una escuela abierta");
assert.equal(pilot.data.robot, "spike");
assert.equal(pilot.steps.length, 6, "cada lliçó ha de ser una targeta navegable");
assert.match(pilot.html, /data-learning-wizard/, "els controls del wizard es pre-renderitzen en HTML estàtic");
assert.match(pilot.html, /learning-wizard-step-separator/, "el número i el nom del pas tenen un separador visible consistent");
assert.match(pilot.html, /data-step="1"[\s\S]*?data-step="2" hidden/, "el pas actiu es mostra i la resta queden ocults amb l'atribut natiu hidden");
assert.equal((pilot.html.match(/class="learning-phase"/g) || []).length, 30, "cada lliçó mostra les cinc fases comunes");
assert.equal((pilot.html.match(/class="code-panel"/g) || []).length, 2, "els exemples pseudocodi i Python es renderitzen com a blocs");
assert.equal((pilot.html.match(/class="sa-illustration"/g) || []).length, 2, "la situació renderitza la portada i la il·lustració intercalada com a figures");
assert.match(pilot.html, /<figcaption>Una lista guarda/, "els peus d'imatge separats per una línia en blanc es mantenen dins de la figura");
assert.match(pilot.html, /<figcaption>Las tarjetas modelan dos listas ordenadas/, "la il·lustració de la seqüència té una llegenda pròpia");
assert.doesNotMatch(pilot.html, /<p>_[^<]+_<\/p>/, "el peu d'imatge no apareix amb els guions baixos literals");
assert.match(pilot.html, /syntax-keyword/, "el codi Python rep ressaltat sintàctic");

const legacyNumberedStep = renderer.parse(`---\ntitle: Pas numerat\n---\n## Seqüència didàctica\n### 1Auditem el problema\nText de prova.`, "https://example.test/legacy.md");
assert.equal(legacyNumberedStep.steps[0].title, "Auditem el problema", "el wizard elimina el número antic enganxat al títol i evita duplicar-lo");
assert.match(pilot.html, /href="https:\/\/assets\.education\.lego\.com\//, "els enllaços externs es conserven");
const wind = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-viento-modelo.md"), "utf8"), "https://example.test/_content/situacions/sp-viento-modelo.md");
assert.match(wind.html, /markdown-note-question/, "la pregunta guia es mostra com una nota visual");
assert.match(wind.html, /markdown-note-limit/, "els límits del model es ressalten com a informació contextual");
assert.match(wind.html, /<ol><li>Escribid una tabla/, "les instruccions numerades es renderitzen com una seqüència clara");
assert.match(wind.html, /calma · fuerza 0:<\/strong> 0–&lt;0,5 m\/s/i, "Wind Speed classifica la calma abans de les quatre bandes de colors");
assert.match(wind.html, /rojo · fuerzas 10–12:<\/strong> ≥24,4 m\/s/i, "Wind Speed deixa oberta la banda de força 12");
assert.match(wind.html, /0,49; 0,5; 5,49; 5,5; 13,79; 13,8; 24,39; 24,4; 32,7 y 32,71 m\/s/i, "Wind Speed prova les fronteres exactes i valors per damunt de 32,7 m/s");
assert.match(wind.html, /negativo o no numérico/i, "Wind Speed diferencia una entrada invàlida de la calma");
const lifeHacks = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-datos-patio.md"), "utf8"), "https://example.test/_content/situacions/sp-datos-patio.md");
assert.match(lifeHacks.html, /La primera persona pasa una tira de cinco piezas[\s\S]*la segunda pasa su tira/i, "Brain Game practica dues entrades independents del sensor de color");
assert.match(lifeHacks.html, /lista_1[\s\S]*lista_2[\s\S]*mismo índice/i, "Brain Game guarda i compara dues llistes per posició");
assert.match(lifeHacks.html, /segunda persona puede reordenar las piezas/i, "Brain Game conserva la ronda de reordenació del joc oficial");
assert.match(lifeHacks.html, /sa-sp-joc-memoria-llistes\.webp/, "Brain Game intercala una il·lustració pròpia del model SPIKE real");
assert.match(lifeHacks.html, /cinco intentos/i, "Brain Game inclou el límit d'intents oficial com a extensió");
const veggieLove = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-riego-huerto.md"), "utf8"), "https://example.test/_content/situacions/sp-riego-huerto.md");
assert.match(veggieLove.html, /0–60 mm[\s\S]*0–180°/, "Veggie Love defineix una escala didàctica amb rang i unitat");
assert.match(veggieLove.html, /0, 15, 30, 45 y 60 mm[\s\S]*0°, 45°, 90°, 135° y 180°/, "Veggie Love verifica la conversió proporcional amb cinc valors");
assert.match(veggieLove.html, /fuera de escala/i, "Veggie Love no retalla silenciosament dades fora del rang calibrat");
assert.match(veggieLove.html, /t − t_min[\s\S]*t_max − t_min/, "Veggie Love recalibra la temperatura amb una conversió independent");
assert.match(veggieLove.html, /−5, 15 y 35 °C[\s\S]*0°, 90° y 180°/, "Veggie Love comprova una temperatura negativa i els dos extrems");
assert.match(veggieLove.html, /sa-sp-reg-hort-dades\.webp/, "Veggie Love il·lustra la diferència entre previsió, observació i humitat del sòl");
assert.match(veggieLove.html, /sa-sp-reg-hort-calibratge\.webp/, "Veggie Love il·lustra la prova de calibratge de l’agulla");
assert.match(veggieLove.html, /sa-sp-reg-hort-recalibratge-v2\.webp/, "Veggie Love mostra la recalibració i separa visualment precipitació i temperatura");
assert.match(wind.html, /markdown-note-materials/, "els materials es presenten en un bloc identificable");
assert.doesNotMatch(wind.html, /markdown-note-evidence/, "les evidències de la fase 5 es presenten com a text normal");
assert.match(wind.html, /<p>[^<]*<strong>Evidencia:<\/strong>/, "la fase 5 conserva l’etiqueta i el text de l’evidència");
const trainingTrackers = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-rampa-datos.md"), "utf8"), "https://example.test/_content/situacions/sp-rampa-datos.md");
assert.equal(trainingTrackers.steps.length, 6, "Training Trackers conserva les sis lliçons oficials");
assert.equal((trainingTrackers.html.match(/class="learning-phase"/g) || []).length, 30, "les sis lliçons de Training Trackers es desglossen en cinc fases llegibles cadascuna");
assert.equal((trainingTrackers.html.match(/class="sa-illustration"/g) || []).length, 2, "Training Trackers intercala una figura per a la portada i una per a la prova de distància");
assert.match(trainingTrackers.html, /configuración conceptual del sensor y del marcador/i, "la figura de la prova de distància avisa que el muntatge s'ha de verificar");
assert.equal(trainingTrackers.steps.filter(item => /Watch Your Steps|Stretch with Data|This Is Uphill|Time for Squat Jumps|Aim for It|The Obstacle Course/.test(item.title)).length, 6, "cada pas manté visible la lliçó oficial de Training Trackers que adapta");
assert.match(trainingTrackers.html, /dibuja dos o tres ideas/i, "The Obstacle Course conserva la ideació de dos o tres prototips per parelles");
assert.match(trainingTrackers.html, /datos y el vídeo sostienen la hipótesis/i, "The Obstacle Course contrasta el model amb dades i una demostració enregistrada");
assert.match(trainingTrackers.html, /identificar los elementos clave del problema/i, "The Obstacle Course inclou criteris d'avaluació alineats amb el pla oficial");
assert.match(trainingTrackers.html, /entrada de portafolio o un vídeo/i, "The Obstacle Course conserva una comunicació multimèdia accessible i sense dades personals");
assert.match(trainingTrackers.html, /Adaptad el programa de la app para que transmita en directo las lecturas del giroscopio al gráfico de líneas/i, "Stretch with Data conserva el registre del sensor en temps real");
assert.match(trainingTrackers.html, /Adaptad el programa para representar dos valores a la vez/i, "Stretch with Data manté la comparació de gràfiques amb valors combinats");
assert.match(trainingTrackers.html, /no se recogen datos corporales/i, "l'adaptació elimina la recollida de dades corporals sense perdre les proves de moviment del sensor");
assert.match(trainingTrackers.html, /variable de consumo del motor/i, "This Is Uphill registra el mateix indicador del motor que la lliçó oficial");
assert.match(trainingTrackers.html, /no una medida directa de energía en julios/i, "This Is Uphill no presenta la lectura del motor com una mesura directa d'energia física");
assert.match(trainingTrackers.html, /sin presuponer que sea lineal/i, "l'extensió de proporcionalitat de This Is Uphill es contrasta amb dades i no es dona per feta");
assert.match(trainingTrackers.html, /lectura mínima mientras sube/i, "Time for Squat Jumps calcula l'altura a partir del canvi mesurat pel sensor de distància");
assert.match(trainingTrackers.html, /tabla de nueve pruebas de distancia\/regla/i, "Time for Squat Jumps conserva tres repeticions per a cadascuna de tres altures");
assert.match(trainingTrackers.html, /da directamente una altura exacta/i, "les estimacions alternatives d'altura indiquen el seu marge d'incertesa");
assert.match(trainingTrackers.html, /recuento automático/i, "Watch Your Steps contrasta el recompte amb una observació independent");
assert.match(trainingTrackers.html, /tres recorridos de tres, cinco y siete ciclos/i, "Watch Your Steps calibra el recompte amb recorreguts repetits");
assert.match(trainingTrackers.html, /falso recuento/i, "Watch Your Steps prova l'efecte d'una variable i fa visible el falso recuento");
assert.match(trainingTrackers.html, /dos cambios de sentido de un ciclo/i, "Watch Your Steps defineix un cicle observable del model");
assert.match(trainingTrackers.html, /ciclos detectados × 60 cm/i, "Watch Your Steps converteix el recompte en una distància coneguda del model");
assert.match(trainingTrackers.html, /error relativo del programa como \|automático − manual\| \/ manual × 100/i, "Watch Your Steps quantifica l'error del recuento automático");

const habitatJourney = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-habitats-albufera.md"), "utf8"), "https://example.test/_content/situacions/ce-habitats-albufera.md");
assert.equal((habitatJourney.html.match(/class="sa-illustration"/g) || []).length, 2, "la situació dels hàbitats intercala una figura de les parades de recerca");
assert.match(habitatJourney.html, /ce-habitats-albufera\.webp/, "la portada d'hàbitats usa el tren real en una maqueta 3D de paper");
assert.match(habitatJourney.html, /no identifica necesidades[\s\S]*se acerca a fauna real/i, "la maqueta d'hàbitat no atribueix detecció ni interacció amb fauna al tren");
assert.match(habitatJourney.html, /escenarios de exposición separados/i, "la llegenda evita presentar les dues maquetes com un hàbitat compartit observat");
const playgroundWeather = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-clima-patio.md"), "utf8"), "https://example.test/_content/situacions/ce-clima-patio.md");
assert.equal((playgroundWeather.html.match(/class="sa-illustration"/g) || []).length, 2, "Weather intercala una figura pròpia en l'activitat de sol i ombra");
assert.match(playgroundWeather.html, /ce-oratge-pati\.webp/, "la portada d'oratge usa una escena 3D del tren i del pati");
assert.match(playgroundWeather.html, /no mide ni predice el tiempo atmosférico/i, "la portada d'oratge no atribueix sensors meteorològics al tren");
assert.match(playgroundWeather.html, /no mide la temperatura ni predice el tiempo atmosférico/i, "la il·lustració manté explícits els límits de Coding Express");
const libraryRoute = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/cs-ruta-biblioteca.md"), "utf8"), "https://example.test/_content/situacions/cs-ruta-biblioteca.md");
assert.equal((libraryRoute.html.match(/class="sa-illustration"/g) || []).length, 4, "MatataBot's Guide intercala portada, mapa, codificació de ruta i presentació final");
assert.match(libraryRoute.html, /el robot no recibe coordenadas ni transporta libros/i, "la llegenda diferencia el mapa de les instruccions tangibles i del transport físic");
assert.equal(libraryRoute.data.official_source, "https://matatalab.com/en/node/95", "la ruta de biblioteca enllaça la font oficial MatataBot's Guide");
assert.match(libraryRoute.html, /cuatro espacios públicos del centro/i, "els aprenentatges mantenen les quatre parades de la proposta");
assert.match(libraryRoute.html, /modo de programación de Matatalab Lite[\s\S]*Coding Set/i, "la fitxa explica el canvi del mode Lite al Coding Set tangible");
for (const image of ["sa-cs-biblioteca-codi-mapa-v1.webp", "sa-cs-biblioteca-visita-v1.webp"]) {
  assert.match(libraryRoute.html, new RegExp(image.replaceAll(".", "\\.")), `la ruta de biblioteca intercala la imatge ${image}`);
  assert.ok(fs.existsSync(path.join(root, "_assets/situacions", image)), `la imatge ${image} existeix al repositori`);
}
const tangibleMarket = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/cs-mercado-tangible.md"), "utf8"), "https://example.test/_content/situacions/cs-mercado-tangible.md");
assert.match(tangibleMarket.html, /cs-mercat-tangible\.webp/, "el mercat Coding Set mostra el MatataBot i la torre reals revisats");
const trainConcert = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-concierto-patio.md"), "utf8"), "https://example.test/_content/situacions/ce-concierto-patio.md");
assert.equal(trainConcert.steps.length, 3, "Music – Animal Concert conserva les tres sessions adaptades");
assert.match(trainConcert.html, /sa-ce-concert-maons-app\.webp/, "la prova de maons incorpora una il·lustració pròpia del Coding Express i l'app");
assert.match(trainConcert.html, /respuesta sonora y la configuración de cada ladrillo se deben comprobar/i, "la llegenda no atribueix efectes fixos no verificats als colors");
const trainSound = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-mensajes-estacion.md"), "utf8"), "https://example.test/_content/situacions/ce-mensajes-estacion.md");
assert.equal(trainSound.steps.length, 3, "Train Sound conserva les tres sessions adaptades");
assert.match(trainSound.html, /sa-ce-missatges-tunel-llum\.webp/, "la prova del túnel intercala una il·lustració pròpia amb el tren real");
assert.match(trainSound.html, /cuándo se enciende y se apaga la luz/i, "la imatge del túnel remet a la comprovació del comportament físic");
const firstTrip = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-primer-viaje.md"), "utf8"), "https://example.test/_content/situacions/ce-primer-viaje.md");
assert.equal(firstTrip.steps.length, 3, "First Trip conserva les tres sessions adaptades");
assert.match(firstTrip.html, /sa-ce-primer-viatge-aturades\.webp/, "la comparació d'aturades incorpora una il·lustració pròpia del tren real");
assert.match(firstTrip.html, /tres modalidades descritas por LEGO/i, "la llegenda limita la imatge als mètodes indicats per la font oficial");
const trainDistance = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-distancias-estaciones.md"), "utf8"), "https://example.test/_content/situacions/ce-distancias-estaciones.md");
assert.equal(trainDistance.steps.length, 3, "Math – Distance conserva les tres sessions adaptades");
assert.match(trainDistance.html, /sa-ce-distancies-unitats-app\.webp/, "la investigació dels nombres incorpora una il·lustració pròpia del tren i la maqueta");
assert.match(trainDistance.html, /no equivalen a metros/i, "la llegenda diferencia les unitats de maqueta de les opcions de l'app");
const trainRoutes = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-retos-rutas.md"), "utf8"), "https://example.test/_content/situacions/ce-retos-rutas.md");
assert.equal(trainRoutes.steps.length, 4, "Advancing with Coding Express conserva les quatre lliçons oficials adaptades");
assert.match(trainRoutes.html, /sa-ce-reptes-rutes-senyals-app\.webp/, "la sessió d'incidències intercala una il·lustració pròpia amb el tren real");
assert.match(trainRoutes.html, /no las tarjetas/i, "la llegenda diferencia els senyals de paper dels maons detectats pel tren");
assert.match(trainRoutes.html, /mercado municipal/i, "la bifurcació situa la ruta en un context local" );
assert.match(trainRoutes.html, /plan docente oficial en PDF/i, "la situació enllaça la font docent oficial usada per a la verificació");
const trainLoops = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-bucles-relatos.md"), "utf8"), "https://example.test/_content/situacions/ce-bucles-relatos.md");
assert.equal(trainLoops.steps.length, 4, "Introduction to Looping conserva les quatre lliçons oficials adaptades");
assert.match(trainLoops.html, /ce-bucles-relats\.webp/, "la portada del bucle usa una escena 3D amb la via física tancada");
assert.match(trainLoops.html, /no elige la ruta ni detecta los elementos del jardín/i, "el bucle no atribueix detecció ambiental al tren");
assert.match(trainLoops.html, /sa-ce-bucles-relats-conte-circular\.webp/, "el relat circular intercala una il·lustració pròpia amb el tren real");
assert.match(trainLoops.html, /no las lee ni decide cuándo acaba/i, "la llegenda no atribueix lectura de targetes ni control de bucle al tren");
assert.match(trainLoops.html, /lugares cercanos que el grupo conozca/i, "el relat circular parteix de referents locals triats pel grup");
const codingExpressLoop = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-bucle-huerta.md"), "utf8"), "https://example.test/_content/situacions/ce-bucle-huerta.md");
assert.match(codingExpressLoop.html, /ce-bucle-horta\.webp/, "la ruta de l'horta mostra el tren real en una via tancada amb la línia visual comuna");
const codingExpressRoad = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-camino-seguro.md"), "utf8"), "https://example.test/_content/situacions/ce-camino-seguro.md");
assert.match(codingExpressRoad.html, /ce-cami-segur\.webp/, "la situació de ruta segura usa una maqueta de classe amb el tren real");
assert.match(codingExpressRoad.html, /no detecta peatones ni controla la barrera/i, "la il·lustració de ruta segura no atribueix detecció al tren");
const codingExpressConcert = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-concierto-patio.md"), "utf8"), "https://example.test/_content/situacions/ce-concierto-patio.md");
assert.match(codingExpressConcert.html, /ce-concert-pati\.webp/, "la seqüència musical mostra maons d'acció reals i un escenari narratiu");
const codingExpressHabitats = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-habitats-albufera.md"), "utf8"), "https://example.test/_content/situacions/ce-habitats-albufera.md");
assert.match(codingExpressHabitats.html, /sa-ce-habitats-parades-v2\.webp/, "les parades d'hàbitat apareixen com a models separats amb el tren real");
const microbitWaste = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-contador-residuos.md"), "utf8"), "https://example.test/_content/situacions/mb-contador-residuos.md");
assert.equal(microbitWaste.steps.length, 3, "Litter hunt conserva les dues lliçons oficials i la sessió local de verificació");
assert.match(microbitWaste.html, /sa-mb-comptador-residus-prova\.webp/, "el disseny del comptador intercala una il·lustració pròpia de micro:bit");
assert.match(microbitWaste.html, /no identifica ni clasifica los residuos automáticamente/i, "la llegenda no atribueix visió artificial a micro:bit");
assert.match(microbitWaste.html, /guía local de separación/i, "la pràctica adapta la classificació a les normes de residus locals");
assert.match(microbitWaste.html, /7–11 años con MakeCode/i, "la fitxa registra l'edat i l'entorn oficials de Litter hunt");
assert.match(microbitWaste.html, /no afirma una adaptación paso a paso de los documentos docentes/i, "la fitxa delimita la traçabilitat quan el DOCX oficial no s'ha recuperat");

assert.match(trainingTrackers.html, /rotaciones × circunferencia/i, "Aim for It converteix les rotacions en distància abans de trobar la velocitat");
assert.match(trainingTrackers.html, /velocidad máxima inicial/i, "Aim for It calcula l'energia a partir de la velocitat màxima observada");
assert.match(trainingTrackers.html, /tres intentos para acercar el vehículo/i, "Aim for It conserva els tres intents del repte de precisió");
assert.match(trainingTrackers.html, /sumad las tres distancias/i, "Aim for It puntua la distància acumulada dels tres intents");
for (const file of ["mb-invernadero.md", "sp-prime-combinado.md"]) {
  const record = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions", file), "utf8"), `https://example.test/_content/situacions/${file}`);
  assert.equal((record.html.match(/data-section-group="sequence"/g) || []).length, 1, `${file} té una sola secció de seqüència`);
  assert.equal((record.html.match(/data-section-group="official"/g) || []).length, 1, `${file} classifica els reptes oficials com a referents, no com a passos`);
}
const plantPrototypes = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-invernadero.md"), "utf8"), "https://example.test/_content/situacions/mb-invernadero.md");
assert.equal(plantPrototypes.steps.length, 4, "Helping plants grow manté les quatre sessions locals amb wizard comú");
assert.match(plantPrototypes.html, /lectura_luz &lt; umbral_luz_de_prueba/, "Auto-farmer separa la regla de llum");
assert.match(plantPrototypes.html, /lectura_humedad &lt; umbral_humedad_de_prueba/, "Auto-farmer separa la regla d'humitat");
assert.match(plantPrototypes.html, /parada = verdadero/, "la maqueta implementa una aturada manual persistent");
assert.match(plantPrototypes.html, /HORT-01/, "Tree protector substitueix les coordenades per un identificador fictici");
assert.match(plantPrototypes.html, /sa-hivernacle-nodes-relle\.webp/, "la situació intercala la il·lustració pròpia dels dos prototips");
assert.match(plantPrototypes.html, /Helping plants grow|Auto-farmer/, "la fitxa conserva els noms de les activitats oficials adaptades");
const computingFoundations = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-fundamentos-computacion.md"), "utf8"), "https://example.test/_content/situacions/mb-fundamentos-computacion.md");
assert.equal(computingFoundations.steps.length, 6, "Computing fundamentals conserva les sis lliçons oficials");
assert.equal((computingFoundations.html.match(/class="learning-phase"/g) || []).length, 30, "les sis lliçons de Computing fundamentals comparteixen cinc fases cadascuna dins del wizard");
assert.doesNotMatch(computingFoundations.html, /Detall de les sis experiències/, "la seqüència no duplica les sessions en una secció posterior");
const createAiUnit = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-modelos-movimiento.md"), "utf8"), "https://example.test/_content/situacions/mb-modelos-movimiento.md");
assert.equal(createAiUnit.steps.length, 7, "First lessons with CreateAI conserva les set lliçons oficials");
assert.equal((createAiUnit.html.match(/class="learning-phase"/g) || []).length, 35, "les set lliçons de CreateAI comparteixen cinc fases cadascuna");
for (const step of createAiUnit.steps) {
  const start = createAiUnit.html.indexOf(`id="${step.id}"`);
  const end = createAiUnit.html.indexOf('<section class="learning-step"', start + 10);
  const markup = createAiUnit.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta les cinc fases comunes`);
}
assert.match(createAiUnit.html, /salida neutra para «unknown»/i, "la seqüència conserva una eixida segura per a les classificacions desconegudes");
assert.match(createAiUnit.html, /conjunto reservado/i, "el model es prova amb dades separades de les dades d'entrenament");
assert.match(createAiUnit.html, /códigos anónimos/i, "la recollida evita identificar les persones voluntàries");
const responsibleAi = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-ia-ejercicio-responsable.md"), "utf8"), "https://example.test/_content/situacions/mb-ia-ejercicio-responsable.md");
assert.equal(responsibleAi.steps.length, 8, "Developing AI literacy conserva les huit lliçons oficials");
assert.equal((responsibleAi.html.match(/class="learning-phase"/g) || []).length, 40, "les huit lliçons d'IA responsable comparteixen cinc fases cadascuna");
for (const step of responsibleAi.steps) {
  const start = responsibleAi.html.indexOf(`id="${step.id}"`);
  const end = responsibleAi.html.indexOf('<section class="learning-step"', start + 10);
  const markup = responsibleAi.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta les cinc fases comunes`);
}
assert.match(responsibleAi.html, /sin clasificar/i, "la seqüència preveu una resposta per a prediccions desconegudes");
assert.match(responsibleAi.html, /No enviéis alertas/i, "el temporitzador no genera alertes de salut ni puntuacions");
assert.match(responsibleAi.html, /conjunto de prueba separado/i, "les dades de prova es mantenen separades de les dades d'entrenament");
const energyAwareness = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-energia-aula.md"), "utf8"), "https://example.test/_content/situacions/mb-energia-aula.md");
assert.equal(energyAwareness.steps.length, 6, "Energy awareness conserva les sis lliçons oficials");
assert.equal((energyAwareness.html.match(/class="learning-phase"/g) || []).length, 30, "les sis lliçons d'Energy awareness comparteixen cinc fases cadascuna");
for (const step of energyAwareness.steps) {
  const start = energyAwareness.html.indexOf(`id="${step.id}"`);
  const end = energyAwareness.html.indexOf('<section class="learning-step"', start + 10);
  const markup = energyAwareness.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta les cinc fases comunes`);
}
assert.match(energyAwareness.html, /El sensor de luz registra lecturas ambientales; hay que separarlas del consumo eléctrico real/i, "el model de llum no es confon amb un comptador elèctric");
assert.match(energyAwareness.html, /40 W = 0,04 kW/i, "el càlcul d'energia conserva un exemple explícit amb unitats");
assert.match(energyAwareness.html, /nadie multiplica directamente la lectura ambiental por un factor de consumo/i, "la lectura de llum no s'usa com si fora una mesura de consum");
const dataHandling = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-datos-patio.md"), "utf8"), "https://example.test/_content/situacions/mb-datos-patio.md");
assert.equal(dataHandling.steps.length, 5, "Data handling conserva les cinc lliçons oficials");
assert.equal((dataHandling.html.match(/class="learning-phase"/g) || []).length, 25, "les cinc lliçons de Data handling comparteixen cinc fases cadascuna");
for (const step of dataHandling.steps) {
  const start = dataHandling.html.indexOf(`id="${step.id}"`);
  const end = dataHandling.html.indexOf('<section class="learning-step"', start + 10);
  const markup = dataHandling.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta les cinc fases comunes`);
}
assert.match(dataHandling.html, /no anotéis quién estaba allí/i, "la caça de dades preserva la privacitat de les persones al pati");
assert.match(dataHandling.html, /repeteix|repetició/i, "el gadget d'exemple integra una lectura repetida de sensor");
assert.match(dataHandling.html, /mapa de estados/i, "l'assistent digital es prova amb un mapa d'estats i botons A/B");
const codeyCourseSource = fs.readFileSync(path.join(root, "_content/situacions/cr-museo-juegos-programados.md"), "utf8");
const codeyCourse = renderer.parse(codeyCourseSource, "https://example.test/_content/situacions/cr-museo-juegos-programados.md");
const codeySensorsSource = fs.readFileSync(path.join(root, "_content/situacions/cr-entradas-sensores.md"), "utf8");
const codeySensors = renderer.parse(codeySensorsSource, "https://example.test/_content/situacions/cr-entradas-sensores.md");
const codeyIRStory = codeySensorsSource.slice(codeySensorsSource.indexOf("### **Sesión 6"), codeySensorsSource.indexOf("### **Sesión 7"));
assert.match(codeySensorsSource, /CodeyRockyNeuronTeachersBook\.pdf/, "la fitxa enllaça el pla docent oficial recuperat");
assert.match(codeyIRStory, /bloques IR[\s\S]*variable[\s\S]*historia/i, "la lliçó IR conserva transmissió, variables i creació narrativa del pla oficial");
assert.match(codeyIRStory, /al menos cinco casos/i, "la pràctica IR verifica missatges vàlids, absència i valors desconeguts");
assert.match(codeyIRStory, /sa-cr-when-codey-meets-codey-v1\.webp/, "la lliçó IR té una il·lustració IA pròpia amb els dos robots de la dotació");
const codeyColorLesson = codeySensorsSource.slice(codeySensorsSource.indexOf("### **Sesión 9"), codeySensorsSource.indexOf("### **Sesión 10"));
assert.match(codeyColorLesson, /sa-cr-sensor-color-proves\.webp/, "la lliçó de sensor de color intercala una il·lustració específica de la prova");
assert.match(codeyColorLesson, /sensor no identifica qué es el objeto/i, "la il·lustració de color no atribueix reconeixement semàntic al sensor");
assert.match(codeySensors.html, /About Codey Rocky[\s\S]*sensor de color\/proximidad/i, "la fitxa enllaça la verificació del sensor amb la guia del fabricant");
assert.equal(codeyCourse.steps.length, 24, "la situació de Codey Rocky conserva les 24 lliçons oficials com a passos identificables");
const codeyLessonRanges = [...codeyCourseSource.matchAll(/^### \*\*L(\d+) ·/gm)].map((heading, index, all) => ({
  number: Number(heading[1]),
  source: codeyCourseSource.slice(heading.index, all[index + 1]?.index ?? codeyCourseSource.indexOf("\n## ", heading.index)),
}));
assert.equal(codeyLessonRanges.length, 24, "el corpus conserva una secció per cada lliçó CSTA de Codey Rocky");
for (const lesson of codeyLessonRanges) {
  assert.match(lesson.source, /!\[[^\]]+\]\(\.\.\/\.\.\/_assets\/situacions\/sa-cr-[^)]+\.webp\)/,
    `la lliçó ${lesson.number} intercala una il·lustració pròpia del repte`);
}
assert.equal(codeyCourse.steps[0].title, "El secreto de Codey Rocky · del problema al primer programa (40 min)", "el wizard mostra el títol de la lliçó sense duplicar-ne el codi numèric");
assert.match(codeyCourseSource, /cr-museu-jocs-programats\.webp[\s\S]*sa-cr-primeres-lliçons-v2\.webp/i, "la portada i la lliçó inicial usen il·lustracions noves basades en el Codey Rocky de la dotació");
assert.equal(codeyCourse.steps[23].title, "Sigue la línea (40 min)", "l'última lliçó manté el títol i la durada en el selector comú");
assert.equal((codeyCourse.html.match(/class="learning-phase"/g) || []).length, 120, "les 24 lliçons de Codey Rocky comparteixen cinc fases navegables cadascuna");
assert.match(codeyCourse.html, /Sigue las instrucciones/, "la lliçó 2 conserva el joc desconnectat oficial dels esdeveniments");
assert.match(codeyCourse.html, /cuando se pulsa A.{0,100}B.{0,100}C/s, "la lliçó 2 prova entrades de botó diferents");
assert.match(codeyCourse.html, /evento de inicio/, "la lliçó 2 diferencia inici i botó com a esdeveniments");
assert.match(codeyCourse.html, /Cada pareja presenta una respuesta/, "la lliçó 2 acaba amb presentació i comprovació entre equips");
assert.match(codeyLessonRanges[3].source, /tres programas[\s\S]*evento de inicio[\s\S]*valores 5, 3, 4, 1, 2, 0[\s\S]*fotograma ajeno/i, "la lliçó 4 adapta els tres tipus d'error dels exemples oficials");
assert.doesNotMatch(codeyLessonRanges[3].source, /obstacle tou|bomba|explosiu/i, "la depuració usa programes segurs sense atribuir detecció d'obstacles ni recrear l'escenari d'explosiu");
assert.match(codeyCourse.html, /cuatro islotes de la marjal/, "la lliçó 5 contextualitza la repetició comptada en un itinerari local");
assert.match(codeyCourse.html, /ruta de 20 m con cuatro plantaciones.{0,180}cuatro veces la misma secuencia/i, "la lliçó 5 conserva el model oficial de quatre iteracions i el transforma en una història local");
assert.match(codeyCourse.html, /repetir \(4\)/, "la lliçó 5 fa visible el recompte del bucle en el repte propi");
assert.match(codeyCourse.html, /Codey Rocky no se desplaza por los islotes/i, "la lliçó 5 delimita l'animació de pantalla del moviment físic del robot");
assert.match(codeyCourse.html, /icono final[\s\S]*Cambiad el recuento a 3/i, "la lliçó 5 comprova dos recomptes i l'acció posterior al bucle");
assert.match(codeyCourse.html, /equipo visitante predice cuántas iteraciones hará/i, "la lliçó 5 inclou la prova i revisió entre parelles");
assert.match(codeyCourse.html, /ciclo de luz y oscuridad/, "la lliçó 6 adapta el patró cíclic infinit a un context de marjal");
assert.match(codeyCourse.html, /repetir/, "la lliçó 6 manté una animació comptada per comparar");
assert.match(codeyCourse.html, /para siempre/, "la lliçó 6 construeix l'animació amb bucle infinit");
assert.match(codeyCourse.html, /sonido opcional o añadid una luz RGB estable/i, "la lliçó 6 incorpora l'efecte opcional de llum de la guia docent complementària");
assert.match(codeyCourse.html, /sonido opcional o añadid una luz RGB estable/i, "la lliçó 6 manté com a ampliació les llums/sons opcionals de la guia docent oficial");
assert.match(codeyCourse.html, /Si la versión de mBlock ofrece.{0,240}Si no están, usad el control de detención de mBlock/s, "la lliçó 6 diferencia la disponibilitat de l'aturada per C de l'aturada des de l'aplicació");
assert.match(codeyCourse.html, /MicroPython.{0,220}esta API no implica que el mismo bloque esté disponible en mBlock/s, "la lliçó 6 no confon la API MicroPython amb els blocs de mBlock");
assert.match(codeyCourse.html, /botón C solo si.{0,180}control de mBlock/s, "la lliçó 6 demana registrar la via de parada realment provada");
const codeyIllustratedLessons = [
  [2, "sa-cr-botons-expressions-v2.webp", /entrada física y una respuesta visual programada/i],
  [3, "sa-cr-sequencia-animacio-v2.webp", /animación se ejecuta en la matriz LED/i],
  [4, "sa-cr-depuracio-v2.webp", /no detecta ni corrige los errores automáticamente/i],
  [5, "sa-cr-bucle-comptat-v2.webp", /no identifica hábitats ni cuenta las paradas/i],
  [6, "sa-cr-bucle-continu-v2.webp", /placa no mide el ciclo natural/i],
  [9, "sa-cr-barra-sonora-v2.webp", /no un valor de decibelios ni una grabación/i],
  [10, "sa-cr-funcions-entrada-v2.webp", /no son bloques ni accesorios oficiales del kit/i],
  [11, "sa-cr-patrulla-quadrats-v2.webp", /patrulla en superficie plana/i],
  [13, "sa-cr-variable-llavors-v2.webp", /no pesa ni detecta las semillas/i],
  [14, "sa-cr-operacions-marcador-v2.webp", /operaciones las calcula el programa/i],
  [16, "sa-cr-pedra-paper-tisora-v2.webp", /la matriz del robot muestra el gesto generado/i],
  [22, "sa-cr-fem-un-gir-v2.webp", /trayectorias son una representación propia del reto de curvas/i],
  [23, "sa-cr-gir-obstacles-v2.webp", /maqueta propia para probar la respuesta del sensor IR/i],
  [24, "sa-cr-segueix-linia-v2.webp", /punto de lectura que se compara con las superficies claras y oscuras/i],
];
for (const [lessonNumber, imageName, caption] of codeyIllustratedLessons) {
  const nextHeading = `### **L${lessonNumber + 1} ·`;
  const lesson = codeyCourseSource.slice(
    codeyCourseSource.indexOf(`### **L${lessonNumber} ·`),
    codeyCourseSource.indexOf(nextHeading)
  );
  assert.ok(lesson.includes(imageName), `la lliçó ${lessonNumber} intercala una imatge IA pròpia`);
  assert.match(lesson, caption, `la lliçó ${lessonNumber} explica què representa la imatge`);
  assert.match(codeyCourse.html, new RegExp(imageName), `la imatge de L${lessonNumber} es renderitza en la SDA`);
}
assert.match(codeyCourse.html, /hacia abajo para leer color.{0,80}hacia delante para detectar un obstáculo/, "la lliçó 7 separa les orientacions físiques del sensor IR");
assert.match(codeyCourse.html, /no dos lecturas simultáneas/, "la lliçó 7 no atribueix dos sensors simultanis a un únic mòdul orientable");
const codeyLesson7 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L7 ·"), codeyCourseSource.indexOf("### **L8 ·"));
assert.match(codeyLesson7, /distinguid `repetir` de `para siempre`/, "la lliçó 7 recupera el coneixement previ de bucles indicat a la guia docent");
assert.match(codeyLesson7, /tarjeta propia de reto con una respuesta para el caso verdadero y otra para el falso/, "la lliçó 7 crea una targeta pròpia per a practicar condicions vertaderes i falses");
assert.match(codeyCourse.html, /repetir 3/, "la lliçó 8 inclou la missió amb repetició comptada");
const codeyLesson8 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L8 ·"), codeyCourseSource.indexOf("### **L9 ·"));
assert.match(codeyLesson8, /tres orientaciones posibles[\s\S]*hacia la izquierda[\s\S]*hacia la derecha[\s\S]*hacia delante/i, "la lliçó 8 enumera les tres orientacions de la missió oficial");
assert.match(codeyLesson8, /pared delante[\s\S]*girad a la derecha 90°[\s\S]*repetid la comprobación tres veces como máximo/i, "la lliçó 8 repeteix les condicions d'obstacle fins a trobar l'eixida");
assert.match(codeyLesson8, /girad a la izquierda 90° para incorporaros a la recta/i, "la lliçó 8 conserva el gir d'incorporació del repte oficial");
assert.match(codeyLesson8, /velocidad más alta que hayáis comprobado/i, "la lliçó 8 adapta la velocitat alta a una comprovació segura del recorregut");
assert.match(codeyLesson8, /estación en forma de U/i, "la lliçó 8 conserva la geometria d'estació amb tres costats i una eixida");
assert.match(codeyLesson8, /expresión inventada y un indicador luminoso.{0,120}sonido breve y bajo/i, "la lliçó 8 adapta l'extensió oficial de pantalla, so i llum amb criteris d'accessibilitat");
assert.match(codeyLesson8, /sa-cr-estacio-servei-v2\.webp/i, "la lliçó 8 usa una il·lustració nova amb el Codey Rocky de la dotació");
assert.match(codeyLesson8, /operador `<`[\s\S]*umbral/i, "la lliçó 8 practica un comparador amb el sensor de llum");
assert.match(codeyLesson8, /prueba de luz, separada de la ruta[\s\S]*sensor de luz integrado solo en la prueba del túnel/i, "la lliçó 8 separa el sensor de llum del mòdul IR orientable");
assert.match(codeyLesson8, /valores relativos del sensor, no lux calibrados/, "la lliçó 8 no presenta la lectura ambiental com a lux calibrats");
const codeyLesson9 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L9 ·"), codeyCourseSource.indexOf("### **L10 ·"));
const codeyLesson9Blocks = [...codeyLesson9.matchAll(/```blocks\n([\s\S]*?)```/g)].map(match => match[1]);
assert.equal(codeyLesson9Blocks.length, 1, "la lliçó 9 presenta un sol exemple del programa de la barra sonora");
assert.equal((codeyLesson9Blocks[0].match(/^  para siempre$/gm) || []).length, 0, "la lliçó 9 no introdueix un bucle infinit niat absent del repte oficial");
assert.equal((codeyLesson9Blocks[0].match(/^para siempre$/gm) || []).length, 1, "la lliçó 9 posa la lectura i les condicions dins d'un únic bucle continu");
assert.match(codeyLesson9Blocks[0], /nivel > 20[\s\S]*nivel >= 10 y nivel <= 20[\s\S]*nivel < 10/i, "la lliçó 9 representa els tres rangs oficials i l'operador lògic i");
assert.match(codeyLesson9, /Trazad 9, 10, 15, 20 y 21/i, "la lliçó 9 verifica els dos llindars i els valors interiors");
assert.match(codeyLesson9Blocks[0], /si nivel > 20[\s\S]*mostrar barra alta\n\s*si nivel >= 10 y nivel <= 20[\s\S]*mostrar barra media\n\s*si nivel < 10[\s\S]*mostrar barra baja/i, "la lliçó 9 usa tres condicions independents perquè les lectures tinguen una resposta");
assert.match(codeyLesson9, /convención propia: 10 y 20 también muestran la barra media/i, "la lliçó 9 separa els extrems estrictes de la font de la convenció local inclusiva");
assert.match(codeyLesson9, /\| 10 \| Barra media[\s\S]*\| 20 \| Barra media/i, "la lliçó 9 presenta l'eixida esperada de les lectures de frontera");
assert.match(codeyLesson9, /no grabéis audio/i, "la proposta sonora evita gravar converses o veus");
assert.match(codeyLesson9, /sa-cr-barra-sonora-v2\.webp/i, "la lliçó 9 intercala una il·lustració pròpia de la barra LED de Codey Rocky");
const codeyLesson10 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L10 ·"), codeyCourseSource.indexOf("### **L11 ·"));
assert.match(codeyLesson10, /tarjetas con funciones ficticias de apertura[\s\S]*si alguna sobra[\s\S]*si una se ha llamado dos veces/i, "la lliçó 10 adapta el joc desconnectat oficial de funciones i targetes");
assert.match(codeyLesson10, /definir bienvenida_marjal[\s\S]*cuando Codey se inicie[\s\S]*llamar bienvenida_marjal/i, "la lliçó 10 defineix una funció pròpia i la crida des de l'esdeveniment d'inici");
assert.match(codeyLesson10, /Recuperad una condición de L9[\s\S]*borrar la matriz/i, "la lliçó 10 recupera el concepte condicional i construeix una animació que acaba netejant la pantalla");
assert.match(codeyLesson10, /botón A que llame de nuevo a `bienvenida_marjal`/, "la lliçó 10 comprova la reutilització de la funció en un segon esdeveniment");
assert.match(codeyLesson10, /sin representarla corporalmente/i, "la lliçó 10 permet participar sense actuació corporal obligatòria");
const codeyLesson11 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L11 ·"), codeyCourseSource.indexOf("### **L12 ·"));
assert.match(codeyLesson11, /dos recintos cuadrados conectados/i, "la lliçó 11 conserva el mapa oficial de dos quadrats i una connexió");
assert.match(codeyLesson11, /distancia que recorre Codey Rocky durante un segundo[\s\S]*repetid tres veces/i, "la lliçó 11 calibra empíricament distància i velocitat");
assert.match(codeyLesson11, /Recuperad la función `bienvenida_marjal`[\s\S]*relación entre distancia, velocidad y tiempo/i, "la lliçó 11 recupera els coneixements previs de funciones i matemàtiques indicats a la guia docent");
assert.match(codeyLesson11, /velocidad = distancia ÷ tiempo[\s\S]*media de las tres lecturas/i, "la lliçó 11 explicita el càlcul a partir de les tres mesures de calibratge");
assert.match(codeyLesson11, /definir cuadrado[\s\S]*repetir 4[\s\S]*llamar cuadrado[\s\S]*llamar cuadrado/i, "la lliçó 11 encapsula el quadrat en una funció i la crida dues vegades");
assert.match(codeyLesson11, /14 cm por lado y 7 cm\/s/i, "la lliçó 11 contextualitza l'exemple numèric oficial com a dada a verificar");
assert.match(codeyLesson11, /manual complementario de Codey Rocky & Neuron[\s\S]*un caso por debajo, uno igual y uno por encima/i, "la lliçó 11 identifica l'extensió de so del manual complementari i la prova del llindar");
assert.match(codeyLesson11, /icono LED estacionario/i, "la lliçó 11 substitueix el moviment sobtat per una resposta LED estacionària");
assert.match(codeyLesson11, /máxima potencia/i, "la lliçó 11 conserva la referència del manual complementari al moviment a máxima potencia");
assert.match(codeyCourse.html, /2 × \(4 × lado\) \+ conexión/, "la lliçó 11 calcula la distància total dels dos quadrats i el tram connector");
const codeyLesson12 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L12 ·"), codeyCourseSource.indexOf("### **L13 ·"));
assert.match(codeyLesson12, /patrullamos la segunda planta/i, "la lliçó 12 conserva el repte oficial de patrullar la segona planta");
assert.match(codeyLesson12, /el robot no sube escaleras: cada planta es un plano plano diferente/i, "la lliçó 12 deixa clar que les dues plantes es representen en mapes plans, no com a moviment físic d'escales");
assert.match(codeyLesson12, /definir cuadrado_inferior[\s\S]*girar a la derecha 90 grados[\s\S]*definir cuadrado_superior[\s\S]*girar a la izquierda 90 grados/i, "la lliçó 12 crea les dues funciones amb els sentits de gir indicats en el repte oficial");
assert.equal((codeyLesson12.match(/repetir 4/g) || []).length, 2, "la lliçó 12 construeix cada funció de sala amb quatre costats");
assert.match(codeyLesson12, /definir planta_2_marjal[\s\S]*llamar cuadrado_inferior[\s\S]*repetir 2[\s\S]*llamar cuadrado_superior/i, "la lliçó 12 organitza les funciones de sala amb la repetició de dues iteracions del repte oficial");
assert.match(codeyLesson12, /cuando se pulse A[\s\S]*llamar planta_2_marjal/i, "la lliçó 12 inicia la seqüència principal amb el botó A, com l'original");
assert.match(codeyLesson12, /3 × \(4 × lado\) \+ 3 × pasillo/i, "la lliçó 12 calcula la distància de les tres sales i connexions del seu mapa propi");
assert.match(codeyLesson12, /tiempo recto dividiendo esa distancia por la velocidad medida[\s\S]*12 giros calibrados/i, "la lliçó 12 separa el càlcul dels trams rectes i dels girs calibrats");
assert.match(codeyLesson12, /extensión oficial[\s\S]*icono en la pantalla y un indicador de luz/i, "la lliçó 12 adapta l'extensió oficial de pantalla i llums");
assert.match(codeyLesson12, /Cada pareja presenta su solución[\s\S]*autoevaluación/i, "la lliçó 12 incorpora presentació, retorn i autoavaluació de l'aprenentatge");
assert.match(codeyLesson12, /sa-cr-tiny-patroller-v2\.webp/, "la lliçó 12 intercala una il·lustració de Codey Rocky amb dos mapes plans de patrulla");
const codeyLesson13 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L13 ·"), codeyCourseSource.indexOf("### **L14 ·"));
assert.match(codeyLesson13, /Si una tarjeta de temperatura simulada indica más de 5 °C[\s\S]*\+10 si se cumple/i, "la lliçó 13 adapta l'esdeveniment condicional de temperatura sense atribuir-lo al sensor del robot");
assert.match(codeyLesson13, /Jugamos 3 rondas de piedra-papel-tijera: ganar \+1, perder −1, empatar 0/i, "la lliçó 13 conserva les tres rondes i els increments oficials de pedra-paper-tisora");
assert.match(codeyLesson13, /10 → 8 → 18 → 15 → 20 → 17 → 13 → 13 → 12 → 5/i, "la lliçó 13 mostra una traça numèrica completa de les targetes oficials");
assert.match(codeyLesson13, /4 < 5[\s\S]*5 < 5[\s\S]*13 > 12[\s\S]*12 > 12/i, "la lliçó 13 prova els valors sota, igual i sobre els dos llindars estrictes");
assert.match(codeyLesson13, /Si `reserva < 5`, aumentadla en 10/i, "la lliçó 13 implementa la reposició condicional i actualitza la variable");
assert.match(codeyLesson13, /si `reserva > 12`, mostrad un icono/i, "la lliçó 13 implementa la resposta visual del llindar superior");
assert.match(codeyLesson13, /Codey Rocky no la mide en esta actividad/i, "la lliçó 13 marca la temperatura com a entrada simulada, no com una funció integrada");
assert.match(codeyLesson13, /velocidad = 30[\s\S]*angle = 70[\s\S]*140/i, "la lliçó 13 conserva la prova oficial de variables de moviment i exigeix comparar valors");
assert.match(codeyLesson13, /sa-cr-variable-llavors-v2\.webp/i, "la lliçó 13 intercala una imatge contextual del repte de variables");
const codeyLesson14 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L14 ·"), codeyCourseSource.indexOf("### **L15 ·"));
assert.match(codeyLesson14, /dos tareas separadas[\s\S]*No añadáis los dos programas a los mismos botones a la vez/i, "la lliçó 14 no crea col·lisions d'esdeveniments entre els reptes oficials independents");
assert.match(codeyLesson14, /cuando se pulse A[\s\S]*marcador × 2[\s\S]*cuando se pulse B[\s\S]*marcador ÷ 2/i, "la lliçó 14 mostra els blocs oficials d'assignació per multiplicar i dividir");
assert.match(codeyLesson14, /mantened la misma variable en el inicio, A y B/i, "la lliçó 14 manté la mateixa variable en els tres esdeveniments");
assert.match(codeyLesson14, /marcador = 3[\s\S]*número impar entre 2/i, "la lliçó 14 contempla la divisió d'un imparell i comprova l'eixida real");
assert.match(codeyLesson14, /−999 y 9999/i, "la lliçó 14 respecta el rang de visualització documentat per a la matriu LED");
const codeyLesson15 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L15 ·"), codeyCourseSource.indexOf("### **L16 ·"));
assert.match(codeyLesson15, /esperad un segundo, restad 1, mostrad el valor y repetid 30 veces/i, "la lliçó 15 conserva la seqüència temporitzada i les trenta iteracions oficials");
assert.match(codeyLesson15, /asignad 30 a `tiempo` y mostradlo en la matriz/i, "la lliçó 15 mostra el valor inicial del compte arrere abans de començar");
assert.match(codeyLesson15, /dos ampliaciones como proyectos separados/i, "la lliçó 15 separa el compte arrere de la seua ampliació i del joc aleatori");
assert.match(codeyLesson15, /fijar objetivo a 0[\s\S]*fijar contador a 0[\s\S]*fijar objetivo a número aleatorio entre 1 y 20/i, "la tasca aleatòria inicialitza les dues variables i assigna l'objectiu en prémer A");
assert.match(codeyLesson15, /cuando se pulse B[\s\S]*cambiar contador en 1[\s\S]*si contador = objetivo/i, "la tasca aleatòria incrementa el comptador amb B i comprova la igualtat");
assert.match(codeyLesson15, /objetivos fijos 1 y 20[\s\S]*objetivo − 1[\s\S]*objetivo \+ 1/i, "la tasca aleatòria prova els dos extrems i la frontera de la condició d'igualtat");
assert.match(codeyLesson15, /no puede dejar activo ningún script del temporizador/i, "la cancel·lació de l'ampliació atura el temporitzador en comptes de només canviar el missatge");
assert.match(codeyLesson15, /contador de la feria de la huerta/i, "la lliçó 15 utilitza una temàtica pròpia de l’entorn");
assert.match(codeyLesson15, /no las detecta ni hace inventario/i, "la lliçó 15 diferencia la maqueta de paper de les capacitats reals del robot");
assert.match(codeyLesson15, /sa-cr-comptador-fira-horta-v1\.webp/i, "la lliçó 15 intercala una il·lustració pròpia del repte local");
const codeyLesson16 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L16 ·"), codeyCourseSource.indexOf("### **L17 ·"));
assert.match(codeyLesson16, /las nueve combinaciones/i, "la lliçó 16 verifica la matriu completa del joc");
assert.match(codeyLesson16, /número aleatorio entre 0 y 2[\s\S]*0 = piedra, 1 = tijera, 2 = papel/i, "la lliçó 16 conserva el gest aleatori i el mapa numèric oficial");
assert.match(codeyLesson16, /otro resumen oficial de la unidad intercambia los valores de tijera y papel/i, "la lliçó 16 declara el conflicte entre les fonts sobre la codificació de gestos");
assert.match(codeyLesson16, /A suma 1 a `victorias`, B suma 1 a `derrotas` y C suma 1 a `empates`/i, "la lliçó 16 actualitza els tres comptadors amb els botons oficials");
assert.match(codeyLesson16, /expresión propia diferente[\s\S]*sonido breve y bajo es opcional/i, "la lliçó 16 adapta les respostes visuals i sonores amb alternativa accessible");
assert.match(codeyLesson16, /máximo de seis eventos/i, "la lliçó 16 manté el límit docent de sis esdeveniments");
assert.match(codeyLesson16, /el texto dice «superior a 2», pero el bloque de ejemplo muestra la condición `< 2`/i, "la lliçó 16 identifica la contradicció oficial del llindar de llum");
assert.match(codeyLesson16, /Probad lecturas 1, 2 y 3: solo 3 tiene que mostrar la proporción/i, "la lliçó 16 comprova els dos costats i la igualtat del llindar local");
assert.match(codeyLesson16, /si victorias \+ derrotas \+ empates > 0[\s\S]*mostrar victorias \/ \(victorias \+ derrotas \+ empates\)[\s\S]*mostrar «sin rondas»/i, "la lliçó 16 protegeix el càlcul de proporció amb una condició de denominador positiu");
assert.match(codeyLesson16, /sin guardar nombres ni puntuaciones individuales/i, "la lliçó 16 limita el registre a comptadors agregats del joc");
assert.match(codeyLesson16, /sa-cr-pedra-paper-tisora-v2\.webp/i, "la lliçó 16 té una il·lustració original amb el robot i les tres opcions del joc");
const codeyLesson17 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L17 ·"), codeyCourseSource.indexOf("### **L18 ·"));
assert.match(codeyLesson17, /cuatro flechas/i, "la lliçó 17 programa els quatre controls direccionals del repte oficial");
assert.match(codeyLesson17, /línea roja de meta[\s\S]*zona fuera de pista de un color uniforme/i, "la lliçó 17 dissenya zones de pista i arribada amb colors explícits");
assert.match(codeyLesson17, /meta roja se tiene que comprobar antes que el retorno/i, "la lliçó 17 evita que el color de meta es confonga amb fora de pista");
assert.match(codeyLesson17, /si estado = «activo» y toca la línea roja[\s\S]*fijar estado a «ganado»[\s\S]*mostrar «win!» durante 2 segundos/i, "la lliçó 17 implementa l'estat final i el missatge de victòria oficials");
assert.match(codeyLesson17, /si estado = «activo» y toca el color de fuera de pista[\s\S]*ir a la posición inicial/i, "la lliçó 17 retorna el personatge a l'inici si ix del circuit");
assert.match(codeyLesson17, /árboles del fondo se desplazan hacia atrás/i, "la lliçó 17 inclou l'ampliació de paral·laxi publicada");
assert.match(codeyLesson17, /comentarios entre parejas y autoevaluación/i, "la lliçó 17 manté prova d'ús, iteració i autorevisió");
assert.match(codeyLesson17, /sa-cr-my-speedway-v3\.webp/i, "la lliçó 17 mostra el Codey Rocky quiet i el joc digital a la pantalla");
const codeyLesson18 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L18 ·"), codeyCourseSource.indexOf("### **L19 ·"));
assert.match(codeyLesson18, /eventos \*\*Codey inclinado a la izquierda\*\* y \*\*Codey inclinado a la derecha\*\*/i, "la lliçó 18 detecta les dues inclinacions amb els esdeveniments documentats");
assert.match(codeyLesson18, /cuando el personaje reciba «girar_izquierda»[\s\S]*detener los otros scripts de este personaje[\s\S]*para siempre[\s\S]*girar 1 grado[\s\S]*avanzar 1 paso/i, "el receptor esquerre atura altres scripts abans del moviment continu");
assert.match(codeyLesson18, /cuando el personaje reciba «girar_derecha»[\s\S]*detener los otros scripts de este personaje[\s\S]*para siempre[\s\S]*girar 1 grado[\s\S]*avanzar 1 paso/i, "el receptor dret atura altres scripts abans del moviment continu");
assert.match(codeyLesson18, /quitad temporalmente el bloque de detención[\s\S]*los dos bucles pueden quedar activos/i, "la lliçó 18 reprodueix i diagnostica el conflicte oficial entre scripts");
assert.match(codeyLesson18, /\| Inclinación de Codey \|[\s\S]*\| Teclado \|[\s\S]*\| Tarjetas de dirección \|/i, "la lliçó 18 compara el sensor amb controls alternatius accessibles");
assert.match(codeyLesson18, /sa-cr-controls-giroscopi-v2\.webp/i, "la lliçó 18 separa el Codey Rocky físic del laberint virtual en pantalla");
const codeyLesson19 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L19 ·"), codeyCourseSource.indexOf("### **L20 ·"));
assert.match(codeyLesson19, /qué representan los elementos de juego[\s\S]*qué acciones[\s\S]*qué resultado/i, "la lliçó 19 defineix conceptes, comportaments i resultats com en el pla oficial");
assert.match(codeyLesson19, /envíen mensajes de control[\s\S]*flechas del teclado/i, "la lliçó 19 conserva el control amb broadcast i vies alternatives");
assert.match(codeyLesson19, /colores diferentes para el canal, el exterior y la meta/i, "la lliçó 19 diferencia les tres zones de col·lisió");
assert.match(codeyLesson19, /si toca la meta[\s\S]*si no, si toca la zona exterior[\s\S]*si no[\s\S]*continuar la ruta/i, "la lliçó 19 prioritza la meta i separa les branques d'arribada, reinici i continuïtat");
assert.match(codeyLesson19, /meta y exterior comparten color[\s\S]*detectad el conflicto, separad las zonas/i, "la lliçó 19 incorpora una prova negativa de col·lisió de zones");
assert.match(codeyLesson19, /ampliad el canal y retirad los giros[\s\S]*reducid la anchura/i, "la lliçó 19 gradua el repte amb suport i extensió del pla docent");
assert.match(codeyLesson19, /prueba de uso[\s\S]*cambiad una sola condición/i, "la lliçó 19 inclou playtesting i iteració a partir del retorn");
assert.match(codeyLesson19, /sa-cr-mecanica-joc-v2\.webp/i, "la lliçó 19 mostra el Codey Rocky quiet i la barqueta a la pantalla");
const codeyLesson20 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L20 ·"), codeyCourseSource.indexOf("### **L21 ·"));
assert.match(codeyLesson20, /obstáculo fijo o móvil, un oponente[\s\S]*un dilema/i, "la lliçó 20 presenta les tres classes de conflicte oficials");
assert.match(codeyLesson20, /rama a la deriva[\s\S]*vuelve al inicio[\s\S]*la rama reaparece/i, "la lliçó 20 adapta el conflicte mòbil, el reinici i la reaparició de l'obstacle");
assert.match(codeyLesson20, /antes de que llegue al suelo[\s\S]*`mensajes` aumenta en 1[\s\S]*sin sumar/i, "la lliçó 20 implementa la fitxa col·leccionable i prova tant èxit com pèrdua");
assert.match(codeyLesson20, /rama tenga prioridad[\s\S]*si los dos objetos quedan superpuestos/i, "la lliçó 20 resol explícitament la col·lisió simultània d'obstacle i fitxa");
assert.match(codeyLesson20, /atajo más corto pero estrecho[\s\S]*camino más largo pero ancho/i, "la lliçó 20 conserva el dilema de drecera i compara els seus pros i contres");
assert.match(codeyLesson20, /longitud en casillas, número de giros y mensajes recogidos/i, "la lliçó 20 registra mesures comparables de les decisions de ruta");
assert.match(codeyLesson20, /sa-cr-obstacles-joc-v2\.webp/i, "la lliçó 20 mostra obstacle, missatge i rutes dins del joc en pantalla");
const codeyLesson21 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L21 ·"), codeyCourseSource.indexOf("### **L22 ·"));
assert.match(codeyLesson21, /personaje digital[\s\S]*robot físico se queda quieto/i, "la lliçó 21 adapta la cursa com a joc virtual i no com a desplaçament del robot");
assert.match(codeyLesson21, /línea azul de meta[\s\S]*inicio justo después de la línea azul/i, "la lliçó 21 situa la detecció de volta per evitar una victòria en iniciar");
assert.match(codeyLesson21, /si el personaje sale de la pista o toca el murciélago[\s\S]*vuelve al inicio y reinicia `ha_salido_meta` a falso/i, "la lliçó 21 tracta eixida i obstacle com a pèrdua i reinicialitza l'estat de meta");
assert.match(codeyLesson21, /si el coche no toca la línea azul[\s\S]*establecer ha_salido_meta a verdadero[\s\S]*si ha_salido_meta y el coche toca la línea azul/i, "la lliçó 21 evita declarar victòria fins que el cotxe ix i torna a creuar la meta");
assert.match(codeyLesson21, /respuesta sonora opcional[\s\S]*alternativa visual silenciosa/i, "la lliçó 21 adapta el feedback sonor oficial amb alternativa visual accessible");
assert.match(codeyLesson21, /tiempo personal[\s\S]*ningún tiempo se publica ni se compara/i, "la lliçó 21 conserva el repte temporitzat sin clasificar persones");
assert.match(codeyLesson21, /varias vueltas o una segunda meta roja/i, "la lliçó 21 incorpora les extensions de voltes i segona meta");
assert.match(codeyLesson21, /sa-cr-fast-and-furious-v2\.webp/i, "la lliçó 21 mostra Codey Rocky quiet al costat del joc digital");
const codeyLesson22 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L22 ·"), codeyCourseSource.indexOf("### **L23 ·"));
assert.match(codeyLesson22, /dos ruedas motrices/i, "la lliçó 22 explica el model diferencial de dues rodes");
assert.match(codeyLesson22, /potencia de las ruedas de Rocky \(0–100\)/i, "la lliçó 22 conserva el control de potència del quadern oficial");
assert.match(codeyLesson22, /vuelta circular y una semicircular/i, "la lliçó 22 programa les rutes circular i semicircular oficials");
assert.match(codeyLesson22, /curva en S/i, "la lliçó 22 manté la tasca oficial de la curva en S");
assert.match(codeyLesson22, /curvas consecutivas o un ocho/i, "la lliçó 22 inclou el repte ampliat oficial");
assert.match(codeyLesson22, /intercambiad el mapa/i, "la lliçó 22 adapta l'intercanvi de mapes entre equips");
assert.match(codeyLesson22, /sa-cr-fem-un-gir-v2\.webp/i, "la lliçó 22 intercala una il·lustració específica de les trajectòries corbes");
const codeyLesson23 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L23 ·"), codeyCourseSource.indexOf("### **L24 ·"));
assert.match(codeyLesson23, /módulo de color de Rocky[\s\S]*sensor de proximidad IR[\s\S]*mira hacia delante/i, "la lliçó 23 comprova l'orientació del sensor IR integrat en el mòdul de color");
assert.match(codeyLesson23, /si se detecta un obstáculo[\s\S]*girar a la derecha[\s\S]*potencia baja[\s\S]*girar a la izquierda[\s\S]*si no[\s\S]*avanzar/i, "la lliçó 23 manté separades les branques amb i sense obstacle");
assert.match(codeyLesson23, /intentos seguidos < 3[\s\S]*detener los motores[\s\S]*fijar intentos seguidos a 0/i, "la lliçó 23 limita les esquives i reinicia el comptador quan queda lliure");
assert.match(codeyLesson23, /«Mis bloques»[\s\S]*esquivar_obstaculo/i, "la lliçó 23 encapsula la maniobra com a funció local opcional");
assert.match(codeyLesson23, /expresión en la matriz LED y un sonido breve y suave[\s\S]*señal visual equivalente/i, "la lliçó 23 conserva el feedback expressiu i sonor opcional amb alternativa visual");
assert.match(codeyLesson23, /sa-cr-gir-obstacles-v2\.webp/i, "la lliçó 23 té una il·lustració pròpia de l'esquiva física");
const codeyLesson24 = codeyCourseSource.slice(codeyCourseSource.indexOf("### **L24 ·"), codeyCourseSource.indexOf("## 🧰 Hardware"));
assert.match(codeyLesson24, /punto RGB situado en el borde de la línea/i, "la lliçó 24 mesura la lectura RGB sobre la vora de la línia");
assert.match(codeyLesson24, /Mostrad el valor en la matriz LED[\s\S]*tiempo real/i, "la lliçó 24 visualitza en directe la intensitat reflectida");
assert.match(codeyLesson24, /maqueta de ruta entre un centro de interpretación de la Albufera y un observatorio de aves/i, "la lliçó 24 contextualitza la ruta en un entorn local sense proposar circulació real");
assert.match(codeyLesson24, /tres lecturas por superficie[\s\S]*umbral inicial/i, "la lliçó 24 calibra el llindar a partir de mesures repetides");
assert.match(codeyLesson24, /Simulad la regla con una ficha[\s\S]*corrección de 45°[\s\S]*corrección opuesta/i, "la lliçó 24 adapta el joc de seguiment i girs de 45° com a simulació accessible");
assert.match(codeyLesson24, /```blocks[\s\S]*establecer umbral entre las dos lecturas[\s\S]*corregir ligeramente hacia un lado[\s\S]*corregir ligeramente hacia el otro lado/i, "la lliçó 24 explicita el cicle de seguiment amb llindar local calibrat");
assert.match(codeyLesson24, /cuántas de tres pruebas llega a la meta/i, "la lliçó 24 compara la fiabilitat abans i després d'un canvi únic");
assert.match(codeyLesson24, /sa-cr-segueix-linia-v2\.webp/i, "la lliçó 24 té una il·lustració específica del sensor i la línia");
assert.match(codeyCourse.html, /Codey inclinado a la izquierda[\s\S]*Codey inclinado a la derecha/, "la lliçó 18 implementa el control de joc oficial amb els dos esdeveniments del giroscopi");
assert.match(codeyCourse.html, /variable de estado/, "la lliçó 18 incorpora l'extensió oficial que substitueix broadcast per variable");
const adaptationAudit = fs.readFileSync(path.join(root, "docs/ADAPTACIO-SITUACIONS.md"), "utf8");
const codeyAuditStart = adaptationAudit.indexOf("## Auditoria lliçó per lliçó · Codey Rocky");
const codeyAuditEnd = adaptationAudit.indexOf("\n## ", codeyAuditStart + 3);
const codeyAudit = adaptationAudit.slice(codeyAuditStart, codeyAuditEnd < 0 ? undefined : codeyAuditEnd);
assert.match(codeyAudit, /\[L18 · Game Control Schemes\]\(https:\/\/res-us\.makeblock\.com\/doc\/course\/Codey%20Rocky\/Lesson%2018%20Game%20Control%20Schemes_Sheet\.pdf\)/, "l'auditoria enllaça el pla docent recuperat de L18");
assert.match(codeyAudit, /El quadern oficial d’alumnat s’ha contrastat per als objectius i reptes de L2, L5–L12 i L22–L24[\s\S]*L9–L12[\s\S]*no els plans CSTA/i, "l'auditoria separa el contrast del quadern d'alumnat de la disponibilitat dels plans docents de L9–L12");
assert.match(codeyAudit, /L23[^\n]*quadern complementari no es presenta com el pla docent/i, "l'auditoria no confon el material complementari de L23 amb el pla CSTA");
for (const line of codeyAudit.split("\n").filter(line => line.startsWith("|") && !/^\|[-| ]+\|$/.test(line))) {
  assert.equal(line.split("|").length - 2, 2, "la taula de cobertura Codey Rocky conserva les dues columnes declarades");
}
const unpluggedExpress = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-retos-desconectados.md"), "utf8"), "https://example.test/_content/situacions/ce-retos-desconectados.md");
assert.equal(unpluggedExpress.steps.length, 4, "les quatre activitats desconnectades s'organitzen en quatre passos, sense duplicar-les al final");
assert.equal((unpluggedExpress.html.match(/class="learning-phase"/g) || []).length, 20, "cada activitat desconnectada segueix les mateixes cinc fases de la plantilla");
assert.equal((unpluggedExpress.html.match(/data-section-group="sequence"/g) || []).length, 1, "les quatre sessions comparteixen un únic apartat de seqüència");
const codingExpressFirstTrip = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-primer-viaje.md"), "utf8"), "https://example.test/_content/situacions/ce-primer-viaje.md");
assert.equal(codingExpressFirstTrip.steps.length, 3, "First Trip conserva les tres sessions de l'adaptació");
assert.equal((codingExpressFirstTrip.html.match(/class="learning-phase"/g) || []).length, 15, "les tres sessions de First Trip comparteixen cinc fases");
for (const step of codingExpressFirstTrip.steps) {
  const start = codingExpressFirstTrip.html.indexOf(`id="${step.id}"`);
  const end = codingExpressFirstTrip.html.indexOf('<section class="learning-step"', start + 10);
  const markup = codingExpressFirstTrip.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta les cinc fases comunes`);
}
const codingExpressFork = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-bifurcacion-parque.md"), "utf8"), "https://example.test/_content/situacions/ce-bifurcacion-parque.md");
assert.match(codingExpressFork.html, /sa-ce-bifurcacio-agulla\.webp/, "la bifurcació intercala una imatge del tren Coding Express de la dotació i l’agulla manual");
assert.match(codingExpressFork.html, /el tren no lee el billete ni elige el ramal por sí mismo/i, "la imatge de la bifurcació s’acompanya del límit funcional del tren");
const codingExpressSafeRoute = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-camino-seguro.md"), "utf8"), "https://example.test/_content/situacions/ce-camino-seguro.md");
assert.match(codingExpressSafeRoute.html, /sa-ce-cami-segur-senyals\.webp/, "la ruta segura intercala una imatge pròpia de la maqueta Coding Express");
assert.match(codingExpressSafeRoute.html, /no sustituyen ni reproducen la señalización vial oficial/i, "la imatge identifica explícitament els pictogrames com a material de joc");
const codingExpressLine = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/ce-tren-transporte.md"), "utf8"), "https://example.test/_content/situacions/ce-tren-transporte.md");
assert.equal(codingExpressLine.steps.length, 4, "La línia verda conserva les quatre sessions de la seqüència");
assert.equal((codingExpressLine.html.match(/class="learning-phase"/g) || []).length, 20, "les quatre sessions de La línia verda comparteixen cinc fases");
for (const step of codingExpressLine.steps) {
  const start = codingExpressLine.html.indexOf(`id="${step.id}"`);
  const end = codingExpressLine.html.indexOf('<section class="learning-step"', start + 10);
  const markup = codingExpressLine.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta les cinc fases comunes`);
}
const codingSetStation = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/cs-estaciones-codigo.md"), "utf8"), "https://example.test/_content/situacions/cs-estaciones-codigo.md");
assert.equal(codingSetStation.steps.length, 12, "Learning Station conserva les dotze lliçons en una seqüència navegable");
assert.equal((codingSetStation.html.match(/class="learning-phase"/g) || []).length, 60, "les dotze lliçons de Learning Station comparteixen cinc fases cadascuna");
const codingSetStationSource = fs.readFileSync(path.join(root, "_content/situacions/cs-estaciones-codigo.md"), "utf8");
assert.match(codingSetStationSource, /https:\/\/www\.matatastudio\.com\/Self-Guided\.html/, "Learning Station enllaça el curs autoguiat oficial en anglès com a font verificable");
assert.match(codingSetStationSource, /grupos cooperativos de cuatro[\s\S]*programador\/a e inspector\/a/i, "la preparació de Learning Station reflecteix els rols cooperatius recomanats pel fabricant");
assert.match(codingSetStationSource, /Reservad tiempo para que el grupo explore y usad preguntas para orientarlo/i, "Learning Station aplica la recomanació oficial de donar espai a l’exploració i guiar amb preguntes");
const codingSetMazeLessons = codingSetStationSource.split("### Sesión 7 ·", 2)[1].split("### Sesión 8 ·", 1)[0];
assert.match(codingSetMazeLessons, /relato o poema breve[\s\S]*tres paradas[\s\S]*narra el texto/i, "les lliçons de laberint converteixen el propòsit oficial de crear històries/poemes en una evidència local executable");
assert.match(codingSetMazeLessons, /adapta el propósito general publicado[\s\S]*las tres paradas y el formato breve son decisiones propias/i, "la proposta diferencia l’objectiu oficial general dels seus detalls creats localment");
assert.match(codingSetStationSource, /valor rítmico predeterminado de 1\/4[\s\S]*bloque numérico 2, pasa a 2\/4/i, "Learning Station descriu els valors rítmics de Musician segons la guia oficial");
assert.doesNotMatch(codingSetStationSource, /nota té un compàs predeterminat|compàs escoltat/i, "Learning Station no confon els valors rítmics de Musician amb compassos");
assert.match(codingSetStationSource, /superficie nivelada[\s\S]*robot y torre cargados/i, "la preparació incorpora les condicions d'ús del material que indica la guia oficial");
for (const label of ["Objetivos de aprendizaje", "Preparación docente", "Vocabulario clave", "Tiempo orientativo local"]) {
  assert.equal(codingSetStationSource.split(`**${label}:**`).length - 1, 12,
    `cada lliçó de Learning Station declara ${label.toLowerCase()}`);
}
assert.match(codingSetStation.html, /sa-cs-learning-station-laberint\.webp/, "la sessió d'obstacles intercala una il·lustració pròpia amb MatataBot real");
assert.match(codingSetStation.html, /sa-cs-laberint-amb-matata\.webp/, "la creació de laberint intercala una imatge IA pròpia amb el MatataBot de la dotació");
assert.match(codingSetStation.html, /sa-cs-graella-matata\.webp/, "la sessió de graella intercala una il·lustració IA de Coding Set en un mapa didàctic");
assert.match(codingSetStation.html, /sa-cs-creacio-oberta\.webp/, "la sessió final intercala una il·lustració IA per a la creació oberta amb el kit real");
const codingSetLessons = codingSetStationSource.split(/^### Sesión /m).slice(1);
assert.equal(codingSetLessons.length, 12, "la verificació visual cobreix les dotze lliçons de Learning Station");
for (const lesson of codingSetLessons) {
  assert.match(lesson, /!\[[^\]]+\]\(\.\.\/\.\.\/_assets\/situacions\//,
    `la lliçó ${lesson.match(/^\d+/)?.[0] || "sense número"} intercala almenys una imatge local pertinent`);
}
assert.match(codingSetStation.html, /sa-cs-aprenentatge-bandera-v2\.webp/, "la sessió de reptes il·lustra amb el Coding Set de la dotació la bandera i la ruta entre obstacles");
assert.match(codingSetStation.html, /destinos ficticios inspirados en espacios próximos[\s\S]*una pareja visite el reto[\s\S]*versión revisada/i, "la sessió 4 integra context local, intercanvi del repte i tancament reflexiu");
assert.match(codingSetStation.html, /sa-cs-angulos-estrella\.webp/, "la sessió geomètrica intercala una il·lustració pròpia de l'alternativa amb paper");
for (const step of codingSetStation.steps) {
  const start = codingSetStation.html.indexOf(`id="${step.id}"`);
  const end = codingSetStation.html.indexOf('<section class="learning-step"', start + 10);
  const markup = codingSetStation.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta exactament les cinc fases comunes`);
  assert.equal((markup.match(/class="markdown-note markdown-note-evidence"/g) || []).length, 0, `${step.title} presenta l’evidència com a text normal`);
}
assert.match(codingSetStation.html, /pentagrama[\s\S]*estrella de cinco puntas/i, "la creació d'angles adapta explícitament el contingut oficial de pentagrames o estrelles");
assert.match(codingSetStation.html, /Introduïm|Introducing Maps/i, "la sessió 8 aborda la introducció de mapes abans de les graelles");
assert.match(codingSetStation.html, /Introducing More Advanced Coding Blocks/i, "la sessió 10 explicita el contingut oficial de blocs avançats");
assert.match(codingSetStation.html, /definición se sitúa en la fila inferior a la llamada/i, "la sessió de blocs avançats conserva la regla oficial de disposició de funciones");
const wasteSource = fs.readFileSync(path.join(root, "_content/situacions/sp-residuos-lego.md"), "utf8");
const waste = renderer.parse(wasteSource, "https://example.test/_content/situacions/sp-residuos-lego.md");
assert.equal(waste.steps.length, 5, "la situació de residus conserva les cinc sessions");
assert.equal(waste.steps[0].title, "Auditamos un problema sin tocar residuos (50 min)", "els noms dels passos no acaben amb puntuació sobrant");
assert.match(waste.html, /class="learning-wizard-step-number" aria-hidden="true">1<\/span><span class="learning-wizard-step-title"><span class="learning-wizard-step-separator" aria-hidden="true">&#160;·&#160;<\/span><span>/, "el número i el títol dels botons tenen espais no separables al voltant del punt");
assert.equal((waste.html.match(/class="learning-phase"/g) || []).length, 25, "les cinc sessions comparteixen exactament les cinc fases comunes");
assert.equal((waste.html.match(/class="markdown-note markdown-note-evidence"/g) || []).length, 0, "cada sessió presenta l’evidència com a text normal");
assert.equal((waste.html.match(/class="markdown-note markdown-note-question"/g) || []).length, 5, "cada sessió té la seua pregunta docent destacada");
const accessibleMuseum = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-museo-accesible.md"), "utf8"), "https://example.test/_content/situacions/sp-museo-accesible.md");
assert.match(accessibleMuseum.html, /sp-museu-accessible\.webp/, "la portada del laboratori accessible usa la nova il·lustració IA pròpia");
assert.match(accessibleMuseum.html, /basada en el modelo SPIKE Prime de la dotación[\s\S]*no están conectados al robot ni validan[\s\S]*accesibilidad/i, "la portada separa el robot real del prototip manual i no afirma que estiga validat");
const farmTrail = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/tb-rastro-corral.md"), "utf8"), "https://example.test/_content/situacions/tb-rastro-corral.md");
assert.equal(farmTrail.data.official_source, "https://matatalab.com/zh-hans/node/829", "la ruta de la granja apunta directament a la lliçó pública adaptada");
assert.match(farmTrail.html, /markdown-note-situation/, "la introducció contextual de l'SDA rep un format propi");
assert.match(farmTrail.html, /markdown-note-question/, "la pregunta guia es destaca també en l'SDA de Tale-Bot");
assert.equal((farmTrail.html.match(/class="sa-illustration"/g) || []).length, 3, "la SDA de la granja intercala portada, preparació del mapa i prova de la ruta");
assert.match(farmTrail.html, /sa-tb-rastre-corral-mapa-aula-v1\.webp/, "la preparació mostra el mapa en blanc i els materials propis amb el Tale-Bot real");
assert.match(farmTrail.html, /sa-tb-rastre-corral-mapa-v1\.webp/, "la prova de la ruta mostra cinc destinacions i ordres cap avant");
assert.equal((farmTrail.html.match(/class="learning-phase"/g) || []).length, 15, "les tres sessions de la granja comparteixen cinc fases comunes");
assert.match(farmTrail.html, /su contenido no se ha podido leer en esta auditoría/i, "la temporalització pròpia no es presenta com a dada del PDF inaccesible");
assert.match(farmTrail.html, /Son decisiones de diseño local[\s\S]*no detalles que atribuimos al PDF/i, "les ampliacions no verificables es distingeixen del contingut oficial accessible");
const taleBotDiscoveries = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/tb-escuela-descubrimientos.md"), "utf8"), "https://example.test/_content/situacions/tb-escuela-descubrimientos.md");
assert.equal(taleBotDiscoveries.steps.length, 8, "la fira de Tale-Bot té una sessió inicial i set sessions temàtiques, sense encapçalaments de pas duplicats");
assert.equal((taleBotDiscoveries.html.match(/class="learning-phase"/g) || []).length, 40, "les huit sessions de la fira comparteixen exactament les cinc fases comunes");
assert.equal((taleBotDiscoveries.html.match(/class="sa-illustration"/g) || []).length, 10, "la fira intercala visuals pertinents en les sessions amb materials o proves destacables");
assert.equal(taleBotDiscoveries.steps[0].title, "Hola, Tale-Bot: lo conocemos y lo cuidamos (40 min)", "la sessió d'iniciació de Tale-Bot té un títol únic i accessible al wizard");
assert.match(taleBotDiscoveries.html, /sa-tb-coneguem-tale-bot-v2\.webp/, "la sessió d'iniciació usa la il·lustració revisada amb el model real de Tale-Bot");
assert.match(taleBotDiscoveries.html, /guia\/feria-descubrimientos\/index\.html/, "la situació principal enllaça els recursos docents en una pàgina separada");
assert.doesNotMatch(taleBotDiscoveries.html, /Intencions d'aprenentatge i criteris d'èxit|Diari de proves i mostra final/, "els recursos extensos no tornen a carregar-se al final de la situació principal");
const taleBotFairGuide = renderer.parse(fs.readFileSync(path.join(root, "_content/guies/guia-feria-descubrimientos.md"), "utf8"), "https://example.test/_content/guies/guia-feria-descubrimientos.md");
assert.match(taleBotFairGuide.html, /esta página reúne los recursos docentes ampliados/i, "la guia docent complementària té un context propi");
assert.match(taleBotFairGuide.html, /Challenge Booklet[\s\S]*tampoco se considera adaptado hasta que pueda verificarse/i, "la guia manté explícit el límit de verificació del quadern oficial");
assert.match(taleBotFairGuide.html, /reducid la ruta a dos destinos[\s\S]*cambiad solo una orden/i, "la guia ofereix una bastida clara quan l'equip encara no arriba a la fita");
assert.match(taleBotFairGuide.html, /apague Tale-Bot[\s\S]*devuelva las tarjetas y los accesorios/i, "la guia converteix la cura del robot i els materials en una rutina observable");
assert.match(taleBotFairGuide.html, /curso docente oficial de Tale-Bot Pro/i, "la guia atribueix els consells de suport docent a una font del fabricant");
assert.match(fs.readFileSync(path.join(dist, "guia/feria-descubrimientos/index.html"), "utf8"), /href="\.\.\/\.\.\/situaciones-aprendizaje\/index\.html"/, "la pàgina docent ofereix una tornada accessible al catàleg de situacions");
assert.match(taleBotDiscoveries.html, /no tiene intenciones humanas/i, "la sessió d'iniciació diferencia el comportament programat de la intencionalitat humana");
assert.match(taleBotDiscoveries.html, /diez vasos de papel ligeros/i, "la sessió d'iniciació adapta el material públic dels deu gots com a fites segures");
assert.match(taleBotDiscoveries.html, /sa-tb-benvigut-gots-v1\.webp/, "la sessió inicial intercala un visual propi dels deu gots i el Tale-Bot real");
for (const image of ["sa-tb-fira-mapa-escola-v1.webp", "sa-tb-fira-respostes-v1.webp", "sa-tb-fira-botiga-v1.webp", "sa-tb-fira-maduixes-v1.webp"]) {
  assert.match(taleBotDiscoveries.html, new RegExp(image.replaceAll(".", "\\.")), `la fira intercala la il·lustració ${image}`);
  assert.ok(fs.existsSync(path.join(root, "_assets/situacions", image)), `la il·lustració ${image} existeix localment`);
}
assert.match(taleBotDiscoveries.html, /no identifica los espacios/i, "la imatge de l'escola no atribueix reconeixement visual al Tale-Bot");
assert.match(taleBotDiscoveries.html, /el robot solo recorre la secuencia programada/i, "la imatge de recompte delimita la funció real del Tale-Bot");
assert.match(taleBotDiscoveries.html, /maqueta de papel anotada[\s\S]*demostración de encendido\/apagado/i, "la sessió d'iniciació avalua les parts del robot i l'ús correcte dels controls d'alimentació");
assert.match(taleBotFairGuide.html, /partes y funciones[\s\S]*distinguir el robot de las personas[\s\S]*diez vasos/i, "la guia docent documenta la correspondència amb els objectius i materials públics de L1");
assert.match(taleBotDiscoveries.html, /Predecid el total antes de contar[\s\S]*casilla, cantidad observada y subtotal acumulado/i, "la sessió de recompte inclou predicció, registre i control de dobles recomptes");
assert.match(taleBotDiscoveries.html, /seis danzas predefinidas al azar/i, "la sessió de funciones registra que la dansa no és seleccionable");
assert.match(taleBotDiscoveries.html, /limita cada grabación a 30 segundos/i, "la sessió d'àudio conserva el límit temporal de la guia oficial");
assert.match(taleBotDiscoveries.html, /pulsación breve \(menos de un segundo\) para reutilizar el audio/i, "la sessió diferencia reproduir i reutilitzar una gravació");
assert.match(taleBotDiscoveries.html, /modo infinito solo se representa con tarjetas/i, "la sessió evita executar físicament una ordre repetida infinita");
assert.match(taleBotDiscoveries.html, /no atribuye esta secuencia propia al plan docente no consultable de L4/i, "la fira separa les funciones verificades del guió oficial no accessible");
assert.match(taleBotDiscoveries.html, /unidad del patrón[\s\S]*corrección justificada/i, "la sessió artística avalua la regla del patró i una revisió explicada");
assert.match(taleBotDiscoveries.html, /sa-tb-formes-monstre\.webp/, "la sessió de formes incorpora una il·lustració pròpia i pertinent");
assert.doesNotMatch(taleBotDiscoveries.html, /Llegiu el repte de la sessió|Feu explícit el procediment: registreu la seqüència|Trieu una sola decisió o instrucció per revisar|Compareu el resultat amb la predicció i expliqueu què heu aprés/, "les sessions temàtiques de la fira no conserven fases genèriques de plantilla");
const taleBotCommandsSource = fs.readFileSync(path.join(root, "_content/situacions/tb-ordenes-en-accion.md"), "utf8");
const taleBotCommands = renderer.parse(taleBotCommandsSource, "https://example.test/_content/situacions/tb-ordenes-en-accion.md");
const taleBotMissionsSource = fs.readFileSync(path.join(root, "_content/situacions/tb-misiones-comunidad.md"), "utf8");
const taleBotMissions = renderer.parse(taleBotMissionsSource, "https://example.test/_content/situacions/tb-misiones-comunidad.md");
const taleBotCardCategories = [
  [taleBotCommands, 10, "A"],
  [renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/tb-explora-el-barrio.md"), "utf8"), "https://example.test/_content/situacions/tb-explora-el-barrio.md"), 15, "B"],
  [renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/tb-patrones-en-ruta.md"), "utf8"), "https://example.test/_content/situacions/tb-patrones-en-ruta.md"), 7, "C"],
  [taleBotMissions, 10, "D"]
];
assert.equal((taleBotCommands.html.match(/class="sa-illustration"/g) || []).length, 11, "els deu reptes A tenen cadascun un visual intercalat a més de la portada");
const taleBotPatterns = taleBotCardCategories[2][0];
assert.equal((taleBotPatterns.html.match(/class="sa-illustration"/g) || []).length, 8, "els set reptes de patrons tenen cadascun un visual intercalat a més de la portada");
for (let index = 1; index <= 7; index += 1) {
  const image = `sa-tb-patrons-c${index}-v1.webp`;
  assert.match(taleBotPatterns.html, new RegExp(image.replaceAll(".", "\\.")), `el repte C-${index} intercala el visual ${image}`);
  assert.ok(fs.existsSync(path.join(root, "_assets/situacions", image)), `el visual ${image} existeix localment`);
}
assert.match(taleBotPatterns.html, /el grupo identifica la unidad repetida; Tale-Bot no reconoce los símbolos/i, "el visual de patrons no atribueix lectura de símbols al robot");
assert.match(taleBotPatterns.html, /Tale-Bot no detecta la isla ni evita obstáculos/i, "el visual de la ruta al voltant de l'illa explicita el rol de planificació humana");
assert.match(taleBotPatterns.html, /Tale-Bot no las identifica ni las recoge/i, "el visual de les carabasses no atribueix detecció o recollida al robot");
for (const [record, expectedActivities, category] of taleBotCardCategories) {
  assert.equal(record.steps.length, expectedActivities, `la categoria ${category} adapta totes les activitats oficials esperades`);
  assert.equal((record.html.match(/class="learning-phase"/g) || []).length, expectedActivities * 5, `cada activitat de la categoria ${category} segueix les cinc fases comunes`);
  assert.match(record.html, /3–5 años[\s\S]*parejas[\s\S]*20–30 minutos/i, `la categoria ${category} conserva edat, durada i treball en parelles de les Activity Cards`);
  assert.match(record.html, /cargad Tale-Bot[\s\S]*versión del robot[\s\S]*limpios y planos/i, `la categoria ${category} inclou preparació oficial del robot i espai`);
  assert.match(record.html, /Activity Box[\s\S]*verificado/i, `la categoria ${category} identifica l'Activity Box com a dependència que cal comprovar`);
}
assert.match(taleBotCommands.html, /exactamente ese número de órdenes/, "A-1 adapta el recompte d'instruccions de l'Activity Card original");
assert.match(taleBotCommands.html, /colores de los indicadores de codificación/, "A-1 conserva la comprovació visual dels indicadors del robot");
assert.match(taleBotCommands.html, /tb-ordres-en-accio\.webp/, "A-1 usa la il·lustració revisada dels botons físics del Tale-Bot");
assert.match(taleBotCommands.html, /La torre de vasos pertenece a A-2/, "A-1 i A-2 tenen continguts oficials diferenciats");
const taleBotAVisuals = [
  [1, "sa-tb-targetes-a1-v1.webp", /el robot no los lee/i],
  [2, "sa-tb-gots-a2-v1.webp", /La imagen no implica que el robot detecte los vasos/i],
  [3, "sa-tb-avanços-a3-v1.webp", /el robot solo ejecuta las órdenes programadas/i],
  [4, "sa-tb-programes-a4-v1.webp", /no tarjetas oficiales ni una lectura automática/i],
  [7, "sa-tb-girs-a7-v1.webp", /el equipo determina el giro/i],
  [8, "sa-tb-programes-a8-v1.webp", /el robot no reconoce los lugares ni los mensajes/i]
];
for (const [activity, filename, boundary] of taleBotAVisuals) {
  const activitySource = taleBotCommandsSource.split(`### **A-${activity}`, 2)[1].split("\n### **", 1)[0];
  assert.match(activitySource, new RegExp(filename.replaceAll(".", "\\.")), `A-${activity} intercala la il·lustració pròpia de la seua activitat`);
  assert.ok(fs.existsSync(path.join(root, "_assets/situacions", filename)), `la il·lustració de A-${activity} existeix localment`);
  assert.match(activitySource, boundary, `A-${activity} explica els límits de la representació visual`);
}
const taleBotA5 = taleBotCommandsSource.split("### **A-5", 2)[1].split("### **A-6", 1)[0];
assert.match(taleBotA5, /mantened pulsado el botón de grabación mientras habláis[\s\S]*soltadlo al terminar[\s\S]*como máximo 30 segundos/i, "A-5 aplica el protocol oficial de gravació i el límit de durada");
assert.match(taleBotA5, /Para reutilizar el último mensaje[\s\S]*pulsación de menos de un segundo/i, "A-5 reutilitza la gravació amb una pulsació curta del botó Record");
assert.match(taleBotA5, /No confundáis este gesto con el botón \*Clear\*[\s\S]*más de un segundo corresponde a borrar/i, "A-5 diferencia la gravació de l'esborrat llarg");
assert.match(taleBotA5, /sin volver a grabar[\s\S]*dos paradas de zanahoria[\s\S]*tres órdenes de reproducción/i, "A-5 reprodueix un únic enregistrament en la salutació i les dues destinacions de la tasca oficial");
assert.match(taleBotA5, /personaje[\s\S]*dos paradas de zanahoria[\s\S]*cada parada/i, "A-5 adapta la salutació i la reproducció en dues parades en una ruta local");
assert.match(taleBotA5, /una grabación, tres reproducciones programadas/i, "A-5 comprova el mateix àudio en la salutació i les dues parades");
assert.match(taleBotA5, /sa-tb-missatge-carlotes\.webp/, "A-5 intercala una imatge IA pròpia del Tale-Bot de la dotació i la ruta d’àudio");
assert.match(taleBotA5, /no recoge ni reconoce alimentos/i, "A-5 no atribueix al Tale-Bot reconeixement ni recollida d’aliments");
const taleBotA6 = taleBotCommandsSource.split("### **A-6", 2)[1].split("### **A-7", 1)[0];
assert.match(taleBotA6, /seis danzas predefinidas[\s\S]*al azar/i, "A-6 identifica les sis danses aleatòries oficials");
assert.match(taleBotA6, /no permite elegir ni editar la coreografía/i, "A-6 no atribueix coreografies programables a Tale-Bot");
assert.match(taleBotA6, /no exijáis que las danzas sean diferentes/i, "A-6 no tracta la selecció aleatòria com una seqüència determinista");
assert.match(taleBotA6, /sa-tb-dansa-aleatoria-v2\.webp/, "A-6 intercala una imatge IA amb el Tale-Bot real i una representació de registre creada per a l’activitat");
assert.match(taleBotA6, /no son accesorios ni coreografías programables/i, "A-6 identifica les targetes de moviment com a registre local, no com a peces oficials");
const taleBotA9 = taleBotCommandsSource.split("### **A-9", 2)[1].split("### **A-10", 1)[0];
assert.match(taleBotA9, /botón de danza aleatoria[\s\S]*seis opciones predefinidas/i, "A-9 descriu el botó de dansa sense prometre selecció pròpia");
assert.match(taleBotA9, /la danza pueda variar aleatoriamente/i, "A-9 comunica la variabilitat de l'eixida en la prova");
assert.match(taleBotA9, /sa-tb-collim-fruita-v2\.webp/, "A-9 intercala una imatge IA pròpia i local de Tale-Bot amb fruites de paper");
assert.match(taleBotA9, /no las recoge ni las identifica/i, "A-9 no atribueix al robot detecció o recollida de fruita");
const taleBotA10 = taleBotCommandsSource.split("### **A-10", 2)[1].split("\n### **", 1)[0];
assert.match(taleBotA10, /sa-tb-guardes-parc-v2\.webp/, "A-10 intercala una imatge IA pròpia i pertinent a la ruta del parc");
assert.match(taleBotA10, /el robot no los detecta/i, "A-10 explica que el recorregut al voltant d'objectes depén de la planificació humana");
const taleBotExplorationSource = fs.readFileSync(path.join(root, "_content/situacions/tb-explora-el-barrio.md"), "utf8");
const taleBotExploration = renderer.parse(taleBotExplorationSource, "https://example.test/_content/situacions/tb-explora-el-barrio.md");
assert.equal((taleBotExploration.html.match(/class="sa-illustration"/g) || []).length, 16, "les quinze activitats B tenen cadascuna un visual intercalat a més de la portada");
const taleBotBVisuals = [
  [1, "sa-tb-sentits-b1-v1.webp", /Tale-Bot no percibe olores, gustos, sonidos ni texturas/i],
  [2, "sa-tb-mercat-b2-v1.webp", /el recuento y la elección los hace el alumnado/i],
  [3, "sa-tb-formes-b3-v1.webp", /no reconoce figuras/i],
  [4, "sa-tb-colors-b4-v1.webp", /Tale-Bot no identifica alimentos ni colores/i],
  [5, "sa-tb-granota-b5-v1.webp", /el robot solo recorre las órdenes programadas/i],
  [6, "sa-tb-girasol-b6-v1.webp", /Tale-Bot no detecta el desarrollo de la planta/i],
  [7, "sa-tb-musica-b7-v1.webp", /el robot solo se desplaza/i],
  [8, "sa-tb-estels-b8-v1.webp", /Tale-Bot no lee partituras ni reproduce la canción/i],
  [9, "sa-tb-sistema-solar-b9-v1.webp", /el robot no identifica planetas/i],
  [10, "sa-tb-magnetisme-b10-v1.webp", /Tale-Bot no lleva imán ni detecta materiales/i],
  [11, "sa-tb-tresor-b11-v1.webp", /el robot no detecta obstáculos ni recoge el tesoro/i],
  [12, "sa-tb-serveis-b12-v1.webp", /Tale-Bot no los reconoce/i]
];
for (const [activity, filename, boundary] of taleBotBVisuals) {
  const activitySource = taleBotExplorationSource.split(`### **B-${activity}`, 2)[1].split("\n### **", 1)[0];
  assert.match(activitySource, new RegExp(filename.replaceAll(".", "\\.")), `B-${activity} intercala la il·lustració pròpia de la seua activitat`);
  assert.ok(fs.existsSync(path.join(root, "_assets/situacions", filename)), `la il·lustració de B-${activity} existeix localment`);
  assert.match(activitySource, boundary, `B-${activity} explica els límits de la representació visual`);
}
const taleBotDVisuals = [
  [1, "sa-tb-poble-d1-v1.webp", /el robot no reconoce edificios/i],
  [2, "sa-tb-zoo-d2-v1.webp", /el robot no identifica animales ni sus hábitats/i],
  [3, "sa-tb-missatger-d3-v1.webp", /no una red/i],
  [4, "sa-tb-granja-d4-v1.webp", /Tale-Bot no los identifica ni interactúa con animales/i],
  [5, "sa-tb-missions-mercat.webp", /no una representación de un comercio concreto/i],
  [6, "sa-tb-conte-patrulla-d6-v1.webp", /sin vigilancia, detenciones ni emergencias reales/i],
  [7, "sa-tb-canço-granja-d7-v1.webp", /el robot solo ejecuta las órdenes de movimiento/i],
  [8, "sa-tb-castell-cooperatiu-d8-v1.webp", /el robot no manipula los personajes ni reconoce las escenas/i],
  [9, "sa-tb-tresor-d9-v1.webp", /Tale-Bot no las encuentra ni recoge el tesoro/i],
  [10, "sa-tb-contes-d10-v1.webp", /el robot no lee el cuento ni lo narra/i]
];
assert.equal((taleBotMissions.html.match(/class="sa-illustration"/g) || []).length, 11, "els deu reptes D tenen cadascun un visual intercalat a més de la portada");
for (const [activity, filename, boundary] of taleBotDVisuals) {
  const activitySource = taleBotMissionsSource.split(`### **D-${activity}`, 2)[1].split("\n### **", 1)[0];
  assert.match(activitySource, new RegExp(filename.replaceAll(".", "\\.")), `D-${activity} intercala la il·lustració pròpia de la seua activitat`);
  assert.ok(fs.existsSync(path.join(root, "_assets/situacions", filename)), `la il·lustració de D-${activity} existeix localment`);
  assert.match(activitySource, boundary, `D-${activity} explica els límits de la representació visual`);
}
assert.match(taleBotExploration.html, /programad Tale-Bot y comparad el recorrido con la predicción/i, "B-12 prova el trajecte entre la persona i l’eina del servei");
assert.match(taleBotExploration.html, /evitando las casillas cerradas/i, "B-12 manté les zones tancades amb una adaptació local segura");
const taleBotArtistI = taleBotExplorationSource.slice(taleBotExplorationSource.indexOf("### **B-14"), taleBotExplorationSource.indexOf("### **B-15"));
const taleBotArtistII = taleBotExplorationSource.slice(taleBotExplorationSource.indexOf("### **B-15"), taleBotExplorationSource.indexOf("## 🎯 Aprenentatges"));
assert.match(taleBotArtistI, /soporte multifunción[\s\S]*un solo rotulador/i, "B-14 adapta l'exploració del suport i el primer traç d'un sol retolador");
assert.match(taleBotArtistI, /sa-tb-artista-un-retolador\.webp/, "B-14 té una il·lustració pròpia pertinent de Tale-Bot dibuixant");
assert.match(taleBotArtistII, /dos rotuladores[\s\S]*coloread/i, "B-15 conserva el contrast d'un/dos retoladors i l'ampliació artística col·lectiva");
assert.match(taleBotArtistII, /sa-tb-artista-dos-retoladors\.webp/, "B-15 té una il·lustració pròpia de la prova amb dos retoladors");
assert.match(taleBotArtistII, /soporte no admite dos rotuladores[\s\S]*dos pasadas/i, "B-15 declara una variant segura si el suport del centre no és compatible");
const taleBotSpeedModel = taleBotExplorationSource.slice(taleBotExplorationSource.indexOf("### **B-13"), taleBotExplorationSource.indexOf("### **B-14"));
assert.match(taleBotSpeedModel, /tractor avanza una casilla, el camión dos y el tren tres[\s\S]*datos ficticios del juego/i, "B-13 fa comparable la distància en un mateix interval sense atribuir dades reals als vehicles");
assert.match(taleBotSpeedModel, /situad las fichas de los tres vehículos y una destinación[\s\S]*trazad con lápiz/i, "B-13 conserva la preparació oficial de fitxes i ruta pròpia");
assert.match(taleBotSpeedModel, /ejecutadla \*\*una vez\*\*/i, "B-13 manté una única execució com demana la targeta oficial");
assert.match(taleBotSpeedModel, /sa-tb-velocitats-relatives\.webp/, "B-13 intercala una il·lustració pròpia amb Tale-Bot i un mapa local");
assert.match(taleBotSpeedModel, /no ha ido más rápido cuando ha pasado por el tren[\s\S]*no mide ni reproduce la velocidad real/i, "B-13 distingeix la velocitat del model de les capacitats del robot");
const taleBotCommunity = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/tb-misiones-comunidad.md"), "utf8"), "https://example.test/_content/situacions/tb-misiones-comunidad.md");
const marketMission = taleBotCommunity.steps.find(step => step.title === "La tienda de comestibles");
const zooMission = taleBotCommunity.steps.find(step => step.title === "Visitamos un parque zoológico");
const stepMarkup = (record, step) => {
  const start = record.html.indexOf(`id="${step.id}"`);
  const end = record.html.indexOf('<section class="learning-step', start + 10);
  return record.html.slice(start, end < 0 ? undefined : end);
};
assert.ok(marketMission && zooMission, "les missions de botiga i parc zoològic tenen passos identificables");
assert.match(stepMarkup(taleBotCommunity, marketMission), /sa-tb-missions-mercat\.webp/, "la imatge de mercat apareix dins de la missió de botiga D-5");
assert.match(stepMarkup(taleBotCommunity, marketMission), /maqueta narrativa creada para la actividad/i, "la missió D-5 diferencia el mercat fictici d’un comerç real");
assert.doesNotMatch(stepMarkup(taleBotCommunity, zooMission), /sa-tb-missions-mercat\.webp/, "la imatge de mercat no queda assignada al pas del parc zoològic D-2");
const taleBotActivityBoxSource = fs.readFileSync(path.join(root, "_content/situacions/tb-calles-amables.md"), "utf8");
assert.match(taleBotActivityBoxSource, /usad los mapas interactivos y los adhesivos interactivos por separado[\s\S]*reiniciad el robot antes de empezar el nuevo tema/i, "l'Activity Box evita barrejar els modes de mapes i adhesius i reinicia en canviar");
assert.match(taleBotActivityBoxSource, /Si el robot ya se desplaza[\s\S]*usad \*Play\*[\s\S]*el resto de botones no la cancelan/i, "la guia de mapa interactiu interromp la consigna amb el control oficial");
const pythonCommunicationSource = fs.readFileSync(path.join(root, "_content/situacions/sp-python-comunicacion.md"), "utf8");
const pythonCommunication = renderer.parse(pythonCommunicationSource, "https://example.test/_content/situacions/sp-python-comunicacion.md");
assert.equal(pythonCommunication.steps.length, 7, "la situació de comunicació manté sis lliçons de Python i la sessió professional prevista al seu itinerari");
assert.match(pythonCommunicationSource, /seis lecciones de la unidad 1[\s\S]*una séptima sesión propia[\s\S]*no contada como una lección/i, "l'extensió de professions no s'atribueix al repertori oficial de sis lliçons");
assert.match(pythonCommunicationSource, /Inventario del set[\s\S]*tres motores y los tres sensores/i, "la lliçó d'importació relaciona les biblioteques amb el maquinari físic del set");
assert.match(pythonCommunicationSource, /sa-sp-python-matriu-llum\.webp/, "la lliçó de la matriu de llum intercala una il·lustració pròpia i pertinent");
assert.match(pythonCommunication.html, /cuadrícula de 5 × 5/i, "la lliçó de llum modela la graella 5×5 de SPIKE Prime");
assert.match(pythonCommunication.html, /show_image[\s\S]*write[\s\S]*sleep_ms/i, "la lliçó diferencia icones, text desplaçat i temporització");
assert.match(pythonCommunicationSource, /mayúscula de una constante de imagen[\s\S]*abrid la consola/i, "la lliçó de llum adapta la depuració guiada amb un error de capitalització");
assert.doesNotMatch(pythonCommunication.html, /observeu el missatge de consola<\/p>[\s\S]*<h4>Fase 4/, "la lliçó d’importació no deixa frases tallades entre fases");
assert.match(pythonCommunication.html, /quién interpreta el mapa[\s\S]*programación/i, "la lliçó de parelles concreta els rols de pilot i navegant");
assert.match(pythonCommunication.html, /notas adhesivas[\s\S]*recuento de preferencias/i, "la lliçó de parelles adapta el registre de les icones triades");
assert.match(pythonCommunication.html, /Juego de depuración[\s\S]*Cambiad los papeles/i, "la lliçó de parelles practica la depuració alternant rols");
assert.match(pythonCommunication.html, /orden de tres tarjetas de colores[\s\S]*código sonoro/i, "la lliçó de so conserva el repte no verbal de seqüenciar elements");
assert.match(pythonCommunication.html, /frecuencia, duración en milisegundos y volumen/i, "la lliçó de so identifica els tres parámetros del beep");
assert.match(pythonCommunication.html, /inferior a 100[\s\S]*no asumáis que un resultado silencioso es un error de sintaxis/i, "la lliçó de so interpreta el cas de freqüència inaudible sense confondre'l amb un error de codi");
assert.match(pythonCommunication.html, /efecto pregrabado[\s\S]*altavoces del dispositivo/i, "la lliçó diferencia el beep del hub dels sons reproduïts per l'app");
assert.match(pythonCommunication.html, /algo que gusta[\s\S]*algo que ya funciona bien[\s\S]*una alternativa que se podría probar/i, "la revisió entre parelles dona feedback específic i amable");
assert.match(pythonCommunication.html, /no reconstruyáis el modelo ni escribáis dentro de su programa/i, "la revisió protegeix l'autoria de l'equip que rep feedback");
assert.match(pythonCommunication.html, /versión anterior, la sugerencia, el cambio, los resultados y la decisión final/i, "la lliçó de feedback documenta una iteració i els seus efectes");

const sensoryClassroomSource = fs.readFileSync(path.join(root, "_content/situacions/mb-aula-sensorial.md"), "utf8");
const sensoryClassroom = renderer.parse(sensoryClassroomSource, "https://example.test/_content/situacions/mb-aula-sensorial.md");
assert.equal(sensoryClassroom.steps.length, 4, "la situació sensorial manté la correspondència de quatre lliçons oficials");
assert.equal((sensoryClassroomSource.match(/^#### Fase [1-5] ·/gm) || []).length, 20, "les quatre sessions sensorials conserven cinc fases comunes cadascuna");
assert.match(sensoryClassroom.html, /sa-mb-aula-sensorial-opcions-v2\.webp/, "la construcció intercala una il·lustració pròpia de la micro:bit de la dotació");
assert.match(sensoryClassroom.html, /ninguna entrada[\s\S]*botón A[\s\S]*botón B[\s\S]*orden de parada[\s\S]*caso inesperado/i, "la situació prova estats d'entrada i aturada amb casos explícits");
assert.match(sensoryClassroom.html, /seis casos/i, "les proves i les evidències de la situació usen el mateix recompte");
assert.match(sensoryClassroom.html, /No pide a nadie compartir diagnóstico, preferencias personales ni experiencias de salud/i, "la situació protegeix la privacitat i no demana testimonis personals");

const caesarCipherSource = fs.readFileSync(path.join(root, "_content/situacions/mb-cifras-que-viajan.md"), "utf8");
const caesarCipher = renderer.parse(caesarCipherSource, "https://example.test/_content/situacions/mb-cifras-que-viajan.md");
assert.equal(caesarCipher.steps.length, 4, "la situació del xifrat adapta les tres lliçons i manté una sessió pròpia d'introducció");
assert.match(caesarCipher.html, /sa-mb-xifres-disc-caesar-v2\.webp/, "la sessió desconnectada intercala la nova il·lustració 3D del disc de paper");
assert.match(caesarCipher.html, /Las marcas de la ilustración son esquemáticas[\s\S]*las 26 posiciones A–Z/i, "la llegenda separa els marcadors esquemàtics del disc real de 26 lletres");
assert.match(caesarCipher.html, /PLAÇA[\s\S]*la <code>Ç<\/code> se mantiene/i, "la convenció local tracta explícitament la Ç sense falsejar l'alfabet A–Z");

const disconnectedCipherSource = fs.readFileSync(path.join(root, "_content/situacions/pc-cripto.md"), "utf8");
const disconnectedCipher = renderer.parse(disconnectedCipherSource, "https://example.test/_content/situacions/pc-cripto.md");
assert.match(disconnectedCipher.html, /pc-cripto\.webp/, "la situació desconnectada usa una il·lustració pròpia de materials de paper en estil 3D");
assert.match(disconnectedCipher.html, /no un producto oficial/i, "la llegenda identifica la roda com a material didàctic conceptual");

const wetlandAnimationSource = fs.readFileSync(path.join(root, "_content/situacions/mb-animaciones-humedal.md"), "utf8");
const wetlandAnimation = renderer.parse(wetlandAnimationSource, "https://example.test/_content/situacions/mb-animaciones-humedal.md");
assert.equal(wetlandAnimation.steps.length, 2, "la situació d'animacions conserva les dues lliçons oficials");
assert.match(wetlandAnimation.html, /sa-mb-animacions-taumatrop-v2\.webp/, "la fase d'animació intercala la nova il·lustració 3D amb micro:bit real, fotogrames i taumàtrop");
assert.match(wetlandAnimation.html, /manualidad de papel separada/i, "la llegenda diferencia el taumàtrop del dispositiu electrònic");

const codingSetStationsSource = fs.readFileSync(path.join(root, "_content/situacions/cs-estaciones-codigo.md"), "utf8");
const codingSetStations = renderer.parse(codingSetStationsSource, "https://example.test/_content/situacions/cs-estaciones-codigo.md");
assert.equal(codingSetStations.steps.length, 12, "Learning Station manté les dotze lliçons pròpies en la seqüència comuna");
assert.match(codingSetStationsSource, /Teacher Resource Guide · Learning Station Curriculum \(PDF completo publicado\)[\s\S]*las 5–12 continúan sin verificación paso a paso/i, "la font oficial completa i el límit de verificació de les lliçons 5–12 queden explícits");
assert.match(codingSetStations.html, /obstáculos y las banderas físicos del Coding Set/i, "la situació identifica els accessoris físics reals del kit");
assert.match(codingSetStations.html, /no detecta los obstáculos automáticamente/i, "la proposta no atribueix sensors inexistents al Coding Set");
assert.match(codingSetStations.html, /cs-estacions-codi\.webp/, "la portada representa el robot, la torre, els blocs i els mapes del currículum");
assert.match(codingSetStations.html, /sa-cs-learning-station-laberint\.webp/, "la sessió de laberint té un visual propi contextualitzat");
assert.match(codingSetStations.html, /sa-cs-laberint-amb-matata\.webp/, "la sessió de creació de laberint mostra el kit real en el context de la marjal");
assert.match(codingSetStations.html, /sa-cs-angulos-estrella\.webp/, "la sessió d’angles diferencia el treball en paper dels accessoris opcionals");
assert.match(codingSetStations.html, /dos o tres obstáculos reales del set[\s\S]*bandera de destino/i, "el repte de laberint usa obstacles i bandera com en el material oficial");
assert.match(codingSetStations.html, /casillas de <strong>10 × 10 cm<\/strong>/i, "la graella física del Coding Set conserva la mida oficial de 10 cm");
assert.match(codingSetStations.html, /mapa de casillas simbólicas con otra escala[\s\S]*planificar o simular/i, "les graelles fora d'escala no s'interpreten com a recorreguts físics");
assert.match(codingSetStations.html, /Mantened la medida oficial de la cuadrícula/i, "la calibració comprova alineació sense alterar l'escala oficial");
const codingSetRaceSource = fs.readFileSync(path.join(root, "_content/situacions/cs-circuito-carrera-huerta.md"), "utf8");
const codingSetRace = renderer.parse(codingSetRaceSource, "https://example.test/_content/situacions/cs-circuito-carrera-huerta.md");
assert.equal(codingSetRace.steps.length, 2, "Sequences of Coding conserva les dues lliçons oficials en dos sesiones de 60 minuts");
assert.equal((codingSetRace.html.match(/class="learning-phase"/g) || []).length, 10, "les dues sessions de cursa usen les cinc fases comunes");
assert.match(codingSetRace.html, /cs-circuit-cursa-horta\.webp/, "la il·lustració deixa el MatataBot real intacte i separa la carcassa de paper");
assert.match(codingSetRace.html, /carrocería ligera[\s\S]*no se pega al robot/i, "la sessió conserva la carcassa desmuntable sense fixar-la al MatataBot");
for (const capability of [/bloques de ángulo/i, /parámetros/i, /bucles/i, /funciones/i, /vuelta completa/i, /diari/i, /presenta el coche/i]) {
  assert.match(codingSetRace.html, capability, `Sequences of Coding manté el contingut oficial ${capability}`);
}
assert.match(codingSetRace.html, /Extracurricular%20Curriculum\.pdf/, "la fitxa enllaça el PDF oficial verificat de les lliçons 3 i 4");
const codingSetMathSource = fs.readFileSync(path.join(root, "_content/situacions/cs-feria-matematica.md"), "utf8");
const codingSetMath = renderer.parse(codingSetMathSource, "https://example.test/_content/situacions/cs-feria-matematica.md");
assert.match(codingSetMath.html, /las diez cifras \(0–9\)/i, "l'adaptació de Draw Arabic Numbers practica totes les xifres del 0 al 9");
assert.match(codingSetMath.html, /fecha ficticia[\s\S]*nunca una fecha de nacimiento/i, "el repte de codificar una data no demana informació personal de l'alumnat");
assert.match(codingSetMath.html, /no deja tinta sin el complemento de dibujo/i, "la il·lustració no atribueix al kit base una funció de traçat amb retolador");
assert.match(codingSetMath.html, /sa-cs-xifres-graella\.webp/, "la sessió de les deu xifres intercala una imatge pròpia amb el Coding Set de la dotació");
assert.match(codingSetMath.html, /Travel in universe[\s\S]*5 minutos[\s\S]*30 minutos[\s\S]*10 minutos/i, "la sessió artística conserva la seqüència oficial de 5 + 30 + 10 minuts");
assert.match(codingSetMath.html, /hoja blanca grande[\s\S]*ceras y rotuladores borrables al agua/i, "la sessió de l’univers prepara els materials que especifica Matatalab");
assert.match(codingSetMath.html, /Sin el complemento[\s\S]*dibujad las formas a mano/i, "la sessió distingeix el traçat opcional de l'alternativa amb el kit base");
assert.match(codingSetMath.html, /sa-cs-univers-mural-v1\.webp/, "la sessió de Travel in universe té una imatge IA pròpia i específica");
assert.match(codingSetMath.html, /Draw triangles[\s\S]*5 minutos[\s\S]*30 minutos[\s\S]*10 minutos/i, "la sessió de triangles manté la temporització oficial");
assert.match(codingSetMath.html, /180° − 120° = 60°[\s\S]*ángulo interior[\s\S]*triángulo equilátero/i, "l'adaptació explica la relació suplementària i la suma interior oficials");
assert.match(codingSetMath.html, /triángulo rectángulo, agudo u obtuso[\s\S]*Cambiad los roles/i, "la sessió practica els tres tipus de triangle i el repte entre parelles");
assert.match(codingSetMath.html, /sa-cs-triangles-girs-v1\.webp/, "la sessió de Draw triangles intercala una imatge IA pròpia");
const cozyHouseSource = fs.readFileSync(path.join(root, "_content/situacions/cs-casa-geometrica.md"), "utf8");
const cozyHouse = renderer.parse(cozyHouseSource, "https://example.test/_content/situacions/cs-casa-geometrica.md");
assert.equal(cozyHouse.data.official_source, "https://matatalab.com/en/node/85", "la situació Cozy House enllaça el pla oficial Matatalab");
assert.match(cozyHouse.html, /55 minutos \(10 guiados, 30 de actividad y 15 de retorno\)/i, "la situació distingeix la durada local del pla oficial");
assert.match(cozyHouse.html, /al menos cuatro casas[\s\S]*puerta cuadrada más pequeña/i, "la situació manté les quatre cases i les portes del repte oficial");
assert.match(cozyHouse.html, /bloques numéricos indican la longitud del movimiento recto[\s\S]*sin aplicarle un bloque numérico/i, "la situació separa els parámetros de moviment dels blocs d’angle");
assert.match(cozyHouse.html, /Artist Add-On[\s\S]*el alumnado completa el trazado en papel/i, "la situació separa el traçat amb accessori de l'alternativa base");
const codingSetIceCreamSource = fs.readFileSync(path.join(root, "_content/situacions/cs-helado-huerta.md"), "utf8");
const codingSetIceCream = renderer.parse(codingSetIceCreamSource, "https://example.test/_content/situacions/cs-helado-huerta.md");
assert.match(codingSetIceCream.html, /Matatalab Ice Cream Shop/i, "la situació del gelat identifica la targeta oficial Artist 2 separada del currículum");
assert.match(codingSetIceCream.html, /bloques? de bucle.{0,120}bloque de número/i, "la targeta oficial del gelat conserva la simplificació amb bucle i nombre");
assert.match(codingSetIceCream.html, /cs-gelat-horta\.webp/, "la situació del gelat conserva una il·lustració pròpia amb MatataBot");
const codingSetConstellationsSource = fs.readFileSync(path.join(root, "_content/situacions/cs-constelaciones-marjal.md"), "utf8");
const codingSetConstellations = renderer.parse(codingSetConstellationsSource, "https://example.test/_content/situacions/cs-constelaciones-marjal.md");
assert.equal(codingSetConstellations.steps.length, 3, "la proposta de constel·lacions concreta l'adaptació en tres sessions");
assert.equal((codingSetConstellations.html.match(/class=\"learning-phase\"/g) || []).length, 15, "les tres sessions de constel·lacions segueixen les cinc fases comunes");
assert.match(codingSetConstellations.html, /Zodiac Constellations/i, "la situació identifica la targeta oficial Artist que adapta");
assert.match(codingSetConstellations.html, /Artist Add-On/i, "la situació limita el traçat amb llapis a l'accessori compatible");
assert.match(codingSetConstellations.html, /no dibuja con tinta/i, "la via de kit base no atribueix traçat amb tinta al MatataBot");
assert.match(codingSetConstellations.html, /cs-constellacions-marjal\.webp/, "la situació intercala una imatge pròpia del Coding Set al context local");
const codingSetHarvestSource = fs.readFileSync(path.join(root, "_content/situacions/cs-cosecha-naranjas.md"), "utf8");
const codingSetHarvest = renderer.parse(codingSetHarvestSource, "https://example.test/_content/situacions/cs-cosecha-naranjas.md");
assert.equal(codingSetHarvest.steps.length, 4, "Fruit Picking i MatataBot Loves Candy es despleguen en quatre sessions locals");
assert.equal((codingSetHarvest.html.match(/class=\"learning-phase\"/g) || []).length, 20, "les sessions de collita comparteixen les cinc fases");
assert.match(codingSetHarvest.html, /Fruit Picking/i, "la situació identifica la targeta oficial A-2 que adapta");
assert.match(codingSetHarvest.html, /MatataBot Loves Candy/i, "la situació identifica l'ampliació oficial A-3 a diverses peces");
assert.match(codingSetHarvest.html, /dos piezas.{0,160}tres o más/i, "la sessió A-3 conserva el progrés de dues peces a tres o més");
assert.match(codingSetHarvest.html, /el robot no tiene pinza/i, "la fruita no es presenta com a arreplegada amb un mecanisme inexistent");
assert.match(codingSetHarvest.html, /una persona la pone manualmente/i, "la seqüència diferencia el moviment del robot de la recollida manual");
assert.match(codingSetHarvest.html, /cs-collita-taronges\.webp/, "Fruit Picking té una il·lustració IA pròpia amb el Coding Set real");
const codingSetVocabularySource = fs.readFileSync(path.join(root, "_content/situacions/cs-vocabulario-marjal.md"), "utf8");
const codingSetVocabulary = renderer.parse(codingSetVocabularySource, "https://example.test/_content/situacions/cs-vocabulario-marjal.md");
assert.equal(codingSetVocabulary.steps.length, 3, "MatataBot Learns Vocabulary es desplega en tres sessions pròpies");
assert.equal((codingSetVocabulary.html.match(/class=\"learning-phase\"/g) || []).length, 15, "les sessions de vocabulari comparteixen les cinc fases");
assert.match(codingSetVocabulary.html, /MatataBot Learns Vocabulary/i, "la situació identifica la targeta oficial A-5 que adapta");
assert.match(codingSetVocabulary.html, /seis tarjetas[^.]{0,150}aleatoriamente/i, "la situació conserva la col·locació aleatòria de les sis targetes");
assert.match(codingSetVocabulary.html, /no reconoce dibujos ni palabras/i, "la situació no atribueix reconeixement visual o lèxic al robot");
assert.match(codingSetVocabulary.html, /Si llega a otra casilla[\s\S]*volved a programar/i, "la situació conserva la reprogramació quan la destinació és incorrecta");
assert.match(codingSetVocabulary.html, /cs-vocabulari-marjal\.webp/, "la situació té una il·lustració IA pròpia contextualitzada");
const codingSetGuardSource = fs.readFileSync(path.join(root, "_content/situacions/cs-ronda-vivero-marjal.md"), "utf8");
const codingSetGuard = renderer.parse(codingSetGuardSource, "https://example.test/_content/situacions/cs-ronda-vivero-marjal.md");
assert.equal(codingSetGuard.steps.length, 3, "MatataBot Guard es desplega en tres sessions pròpies");
assert.equal((codingSetGuard.html.match(/class=\"learning-phase\"/g) || []).length, 15, "les sessions de ruta al voltant comparteixen les cinc fases");
assert.match(codingSetGuard.html, /MatataBot Guard/i, "la situació identifica la targeta oficial A-4 que adapta");
assert.match(codingSetGuard.html, /más de un juguete en un programa/i, "la ruta conserva l'ampliació oficial a diverses joguines en un sol programa");
assert.match(codingSetGuard.html, /no hay ningún sensor que los detecte/i, "la maqueta no atribueix detecció d'obstacles al MatataBot");
assert.match(codingSetGuard.html, /cs-ronda-viver-marjal\.webp/, "la ruta té una il·lustració IA pròpia del Coding Set al viver");
const codingSetMazeTreasureSource = fs.readFileSync(path.join(root, "_content/situacions/cs-tesoros-sequia.md"), "utf8");
const codingSetMazeTreasure = renderer.parse(codingSetMazeTreasureSource, "https://example.test/_content/situacions/cs-tesoros-sequia.md");
assert.equal(codingSetMazeTreasure.steps.length, 3, "Maze Adventure I es desplega en tres sessions pròpies");
assert.equal((codingSetMazeTreasure.html.match(/class=\"learning-phase\"/g) || []).length, 15, "les sessions del laberint comparteixen les cinc fases");
assert.match(codingSetMazeTreasure.html, /Maze Adventure I/i, "la situació identifica la targeta oficial B-1 que adapta");
assert.match(codingSetMazeTreasure.html, /rotuladores borrables/i, "la situació conserva el laberint esborrable de la targeta oficial");
assert.match(codingSetMazeTreasure.html, /dos tesoros.{0,180}un único programa/i, "la situació comprova dues destinacions en una sola seqüència");
assert.match(codingSetMazeTreasure.html, /no detecta, recoge ni identifica las piezas/i, "el robot no rep capacitats de detecció o recollida inventades");
assert.match(codingSetMazeTreasure.html, /cs-tresors-sequia\.webp/, "Maze Adventure I té una il·lustració IA pròpia contextualitzada");
const codingSetGreetingSource = fs.readFileSync(path.join(root, "_content/situacions/cs-bienvenida-barca.md"), "utf8");
const codingSetGreeting = renderer.parse(codingSetGreetingSource, "https://example.test/_content/situacions/cs-bienvenida-barca.md");
assert.equal(codingSetGreeting.steps.length, 3, "Nice to Meet You es desplega en tres sessions pròpies");
assert.equal((codingSetGreeting.html.match(/class=\"learning-phase\"/g) || []).length, 15, "les sessions de benvinguda comparteixen les cinc fases");
assert.match(codingSetGreeting.html, /Nice to Meet You/i, "la situació identifica la targeta oficial A-1 que adapta");
assert.match(codingSetGreeting.html, /comparten fila o columna/i, "la situació conserva la condició de mateixa línia de l'activitat oficial");
assert.match(codingSetGreeting.html, /música.{0,80}después de la secuencia de movimiento/i, "la música s'executa després de l'arribada");
assert.match(codingSetGreeting.html, /cs-benvinguda-barqueta\.webp/, "la benvinguda té una il·lustració IA pròpia amb el kit real");
const codingSetHeritageSource = fs.readFileSync(path.join(root, "_content/situacions/cs-patrimonio-rutas.md"), "utf8");
const codingSetHeritage = renderer.parse(codingSetHeritageSource, "https://example.test/_content/situacions/cs-patrimonio-rutas.md");
assert.equal(codingSetHeritage.steps.length, 3, "Culture Differences es desplega en tres sessions pròpies");
assert.equal((codingSetHeritage.html.match(/class=\"learning-phase\"/g) || []).length, 15, "les sessions de patrimoni comparteixen les cinc fases");
assert.match(codingSetHeritage.html, /Culture Differences/i, "la situació identifica la targeta oficial C-1 que adapta");
assert.match(codingSetHeritage.html, /nueve tarjetas[^.]{0,180}lugares/i, "la situació conserva les nou destinacions de la targeta oficial");
assert.match(codingSetHeritage.html, /dos lugares.{0,140}un único programa/i, "la situació conserva l'ampliació oficial a dues destinacions");
assert.match(codingSetHeritage.html, /no reconoce banderas ni monumentos/i, "el robot no rep reconeixement visual inventat");
assert.match(codingSetHeritage.html, /La Lonja de la Seda de Valencia/i, "el context local inclou patrimoni verificable");
assert.match(codingSetHeritage.html, /cs-patrimoni-rutes\.webp/, "Culture Differences té una il·lustració IA pròpia del kit real");
const spikeWindSource = fs.readFileSync(path.join(root, "_content/situacions/sp-viento-modelo.md"), "utf8");
const spikeWind = renderer.parse(spikeWindSource, "https://example.test/_content/situacions/sp-viento-modelo.md");
assert.match(spikeWind.html, /mensaje oral, escrito o pictográfico[\s\S]*nunca como una alerta meteorológica/i, "l'extensió de comunicació de Wind Speed no es confon amb un avís real");
assert.match(spikeWind.html, /profesión investigada y la fuente/i, "la fitxa adapta l'extensió professional amb una evidència verificable");
assert.match(spikeWind.html, /recalibración a 180°/i, "la fitxa manté l'extensió oficial de recalibratge de l'indicador");
assert.match(pythonCommunication.html, /actividad ficticia de la semana cultural[\s\S]*boceto de papel/i, "el cartell digital adapta l'encàrrec publicitari a una activitat cultural local");
assert.match(pythonCommunication.html, /icono de 5 × 5[\s\S]*frase corta[\s\S]*efecto de sonido/i, "el cartell combina llum i so en un missatge original");
assert.match(pythonCommunication.html, /no usa sensores para afirmar que la actividad ha empezado/i, "el cartell no atribueix al prototip dades d'estat que no pot detectar");
const neighborhoodRoutes = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/tb-calles-amables.md"), "utf8"), "https://example.test/_content/situacions/tb-calles-amables.md");
assert.equal(neighborhoodRoutes.steps.length, 4, "la situació de mobilitat manté quatre sessions, sense duplicar la seqüència de treball");
assert.equal((neighborhoodRoutes.html.match(/class="learning-phase"/g) || []).length, 20, "les quatre sessions de mobilitat comparteixen les cinc fases");
assert.match(neighborhoodRoutes.html, /no certifica la seguridad ni la accesibilidad de una calle real/i, "la maqueta no es presenta com una auditoria de carrer");
const planetChallenges = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/mb-retos-planeta.md"), "utf8"), "https://example.test/_content/situacions/mb-retos-planeta.md");
const planetChallengeSource = fs.readFileSync(path.join(root, "_content/situacions/mb-retos-planeta.md"), "utf8");
assert.match(planetChallenges.html, /mb-reptes-planeta\.webp/, "la portada de reptes micro:bit usa la il·lustració 3D revisada amb la placa real");
assert.match(planetChallengeSource, /no representan dispositivos instalados, pruebas en tránsito o protección de fauna/i, "la portada distingeix les maquetes dels sistemes reals");
const bycatchLesson = planetChallenges.steps.find(step => step.title.startsWith("Redes más selectivas"));
const turtleBeachLesson = planetChallenges.steps.find(step => step.title.startsWith("Playa segura para tortugas"));
const collarLesson = planetChallenges.steps.find(step => step.title.startsWith("Alerta de protección del bosque"));
const oceanMonitorLesson = planetChallenges.steps.find(step => step.title.startsWith("Red de sensores en maqueta"));
const oilRouteLesson = planetChallenges.steps.find(step => step.title.startsWith("Ruta eficiente para una mancha simulada"));
const fitnessFriendLesson = planetChallenges.steps.find(step => step.title.startsWith("Recordatorio elegido por el usuario"));
const heartRateLesson = planetChallenges.steps.find(step => step.title.startsWith("Medición crítica del pulso"));
const speciesCounterLesson = planetChallenges.steps.find(step => step.title.startsWith("Detectives de especies"));
const walkingForWaterLesson = planetChallenges.steps.find(step => step.title.startsWith("Contador de un trayecto"));
assert.ok(bycatchLesson, "el repte de xarxes és un pas identificable de la col·lecció micro:bit");
assert.ok(turtleBeachLesson, "el repte de tortugues és un pas identificable de la col·lecció micro:bit");
assert.ok(collarLesson, "el repte de protecció d'espècies és un pas identificable de la col·lecció micro:bit");
assert.ok(oceanMonitorLesson, "el monitor d'oceà és un pas identificable de la col·lecció micro:bit");
assert.ok(oilRouteLesson, "l'algorisme de neteja d'oceà és un pas identificable de la col·lecció micro:bit");
assert.ok(fitnessFriendLesson, "Fitness friend és un pas identificable de la col·lecció micro:bit");
assert.ok(heartRateLesson, "Heart rate monitor és un pas identificable de la col·lecció micro:bit");
assert.ok(speciesCounterLesson, "Spot the species és un pas identificable de la col·lecció micro:bit");
assert.ok(walkingForWaterLesson, "Walking for water és un pas identificable de la col·lecció micro:bit");
assert.match(planetChallengeSource, /let especie1 = 0[\s\S]*Button\.A[\s\S]*Button\.B[\s\S]*Gesture\.Shake/, "Spot the species adapta el comptador amb dues variables, entrades A/B i consulta separada");
assert.match(planetChallengeSource, /no reconoce ni identifica la especie[\s\S]*sa-mb-comptador-especies\.webp/i, "el comptador de biodiversitat intercala imatge pròpia i aclareix que la micro:bit no identifica fauna o flora");
assert.match(planetChallengeSource, /let polsosSimulats = 0[\s\S]*Button\.A[\s\S]*Button\.B[\s\S]*sa-mb-comptador-trajecte\.webp/, "Walking for water incorpora un comptador funcional de polsos simulats i una il·lustració pròpia");
assert.match(planetChallengeSource, /no lee el movimiento de la persona[\s\S]*no afirma que mida pasos reales/i, "Walking for water diferencia la simulació manual d’un mesurador de passos real");
assert.match(planetChallengeSource, /teach\/playground-survey\/investigating-biodiversity/, "la mecànica del comptador s’enllaça amb una referència tècnica oficial complementària");
assert.match(planetChallengeSource, /teach\/lessons\/walking-for-water/, "la fitxa enllaça l’activitat oficial Walking for water");
const bycatchStart = planetChallenges.html.indexOf(`id="${bycatchLesson.id}"`);
const bycatchEnd = planetChallenges.html.indexOf('<section class="learning-step', bycatchStart + 10);
const bycatchMarkup = planetChallenges.html.slice(bycatchStart, bycatchEnd < 0 ? undefined : bycatchEnd);
assert.match(bycatchMarkup, /input\.lightLevel\(\)[\s\S]*umbral oficial <code>50<\/code>/, "el repte de xarxes conserva el sensor de llum LED i el llindar inicial oficial");
assert.match(bycatchMarkup, /&lt; 50[\s\S]*= 50[\s\S]*&gt; 50/, "el repte prova els tres casos del llindar de llum");
assert.match(bycatchMarkup, /micro:bit V2[\s\S]*V1 sin altavoz/i, "el so opcional distingeix les versions de micro:bit i conserva l'alternativa LED");
assert.match(bycatchMarkup, /sa-mb-xarxes-llum-prototip\.webp/, "el repte intercala una il·lustració pròpia de la xarxa seca i la micro:bit de la dotació");
assert.match(bycatchMarkup, /no está validado para pesca ni acredita que una luz o un sonido protejan fauna/i, "la maqueta no promet eficàcia de conservació");
assert.match(planetChallengeSource, /projects\/make-it-code-it\/light-up-fishing-nets/, "la fitxa enllaça el projecte oficial detallat de Light-up fishing nets");
const turtleBeachStart = planetChallenges.html.indexOf(`id="${turtleBeachLesson.id}"`);
const turtleBeachEnd = planetChallenges.html.indexOf('<section class="learning-step', turtleBeachStart + 10);
const turtleBeachMarkup = planetChallenges.html.slice(turtleBeachStart, turtleBeachEnd < 0 ? undefined : turtleBeachEnd);
assert.match(turtleBeachMarkup, /input\.lightLevel\(\) &lt; 100[\s\S]*dos segundos/i, "la platja de tortugues conserva la condició oficial i el cicle de lectura");
assert.match(turtleBeachMarkup, /sa-mb-tortugues-platja-microbit\.webp/, "la platja de tortugues intercala una il·lustració pròpia de la micro:bit i la maqueta baixa");
assert.match(turtleBeachMarkup, /no una luz que proteja tortugas/i, "la maqueta no s'atribueix eficàcia de protecció real");
assert.match(planetChallengeSource, /projects\/make-it-code-it\/saving-sea-turtles/, "la fitxa enllaça el projecte oficial detallat de Saving sea turtles");
const collarStart = planetChallenges.html.indexOf(`id="${collarLesson.id}"`);
const collarEnd = planetChallenges.html.indexOf('<section class="learning-step', collarStart + 10);
const collarMarkup = planetChallenges.html.slice(collarStart, collarEnd < 0 ? undefined : collarEnd);
assert.match(collarMarkup, /radio\.setGroup\(42\)[\s\S]*radio\.sendString\([\s\S]*PROVA-ALERTA/, "el collar de maqueta usa dues plaques amb grup de ràdio compartit i missatge curt");
assert.match(collarMarkup, /radio\.onReceivedString[\s\S]*message == [\s\S]*PROVA-ALERTA/, "la receptora filtra el missatge esperat i preveu el desconegut");
assert.match(collarMarkup, /botón A será el único activador manual/i, "l'alarma no simula un sensor automàtic absent");
assert.match(collarMarkup, /sa-mb-radio-estacio-fauna-v2\.webp/, "el pas intercala dues micro:bit en una estació de prova sense cap dispositiu sobre fauna");
assert.match(collarMarkup, /grupo diferente[\s\S]*dos envíos seguidos[\s\S]*ninguna pulsación de botón/i, "les proves cobreixen missatge correcte, grup incorrecte, duplicat i silenci");
assert.match(collarMarkup, /no detecta caza, tala ni movimiento[\s\S]*No pongáis dispositivos en ningún animal/i, "la proposta declara explícitament els límits de detecció i desplegament");
assert.match(planetChallengeSource, /teach\/lessons\/protecting-animals-poaching/, "la fitxa enllaça la lliçó oficial Anti-poaching collar");
const oceanMonitorStart = planetChallenges.html.indexOf(`id="${oceanMonitorLesson.id}"`);
const oceanMonitorEnd = planetChallenges.html.indexOf('<section class="learning-step', oceanMonitorStart + 10);
const oceanMonitorMarkup = planetChallenges.html.slice(oceanMonitorStart, oceanMonitorEnd < 0 ? undefined : oceanMonitorEnd);
assert.match(oceanMonitorMarkup, /radio\.sendValue\([\s\S]*ONA[\s\S]*3/, "el node transmet un valor d'onatge fictici amb ràdio");
assert.match(oceanMonitorMarkup, /radio\.onReceivedValue[\s\S]*name[\s\S]*value/, "la passarel·la rep el nom i el valor de cada node");
assert.match(oceanMonitorMarkup, /sa-mb-ocean-health-network\.webp/, "el pas intercala un diagrama visual propi de nodes i passarel·la amb micro:bit de la dotació");
assert.match(oceanMonitorMarkup, /tres intentos por cada uno de los dos nodos[\s\S]*grupo diferente[\s\S]*ninguna pulsación de botón/i, "la xarxa prova missatges repetits, grup erroni i node inactiu");
assert.match(oceanMonitorMarkup, /no se ha conectado ningún sensor marino ni ningún servicio de Internet/i, "la il·lustració i la maqueta no es confonen amb monitoratge real");
assert.match(planetChallengeSource, /teach\/lessons\/healthy-oceans-monitor/, "la fitxa enllaça la pàgina oficial del projecte Ocean health monitor");
const oilRouteStart = planetChallenges.html.indexOf(`id="${oilRouteLesson.id}"`);
const oilRouteEnd = planetChallenges.html.indexOf('<section class="learning-step', oilRouteStart + 10);
const oilRouteMarkup = planetChallenges.html.slice(oilRouteStart, oilRouteEnd < 0 ? undefined : oilRouteEnd);
assert.match(oilRouteMarkup, /sin micro:bit ni hardware[\s\S]*vehículo autónomo/i, "l'algorisme desconnectat i l'extensió de vehicle reflecteixen les dues parts oficials");
assert.match(oilRouteMarkup, /tres veces[\s\S]*número de movimientos y los giros/i, "les dues rutes es comparen amb execucions repetides i mètriques explícites");
assert.match(oilRouteMarkup, /sa-mb-vessament-rutes-grid\.webp/, "el repte intercala una imatge pròpia d'algorismes de neteja en quadrícula seca");
assert.match(oilRouteMarkup, /No uséis aceite, agua, detergentes ni otros líquidos/i, "la maqueta evita qualsevol vessament o substància real");
assert.match(planetChallengeSource, /teach\/lessons\/healthy-oceans-oil-spill/, "la fitxa enllaça la pàgina oficial Oil spill cleaner-upper");
const fitnessFriendStart = planetChallenges.html.indexOf(`id="${fitnessFriendLesson.id}"`);
const fitnessFriendEnd = planetChallenges.html.indexOf('<section class="learning-step', fitnessFriendStart + 10);
const fitnessFriendMarkup = planetChallenges.html.slice(fitnessFriendStart, fitnessFriendEnd < 0 ? undefined : fitnessFriendEnd);
assert.match(fitnessFriendMarkup, /input\.onButtonPressed\(Button\.A[\s\S]*enabled = true[\s\S]*Button\.B[\s\S]*enabled = false/i, "Fitness friend permet iniciar i aturar voluntàriament el temporitzador");
assert.match(fitnessFriendMarkup, /interval = [\s\S]*10000[\s\S]*control\.millis\(\)/, "el temporitzador usa el rellotge del programa amb una durada de prova configurable");
assert.match(fitnessFriendMarkup, /sa-mb-fitness-friend-control\.webp/, "Fitness friend intercala una il·lustració pròpia del suport de taula i els controls accessibles");
assert.match(fitnessFriendMarkup, /seis casos/i, "Fitness friend cobreix els estats inactiu, iniciar, avisar, aturar i reiniciar");
assert.match(fitnessFriendMarkup, /Repetid cada caso tres veces/i, "Fitness friend repeteix els casos del temporitzador per comprovar-ne la consistència");
assert.match(fitnessFriendMarkup, /no mide pulso, movimiento ni rendimiento[\s\S]*no guarda datos personales/i, "Fitness friend no converteix l'ajuda opcional en monitoratge de salut");
assert.match(planetChallengeSource, /teach\/lessons\/being-active/, "la fitxa enllaça la unitat oficial Being active");
const heartRateStart = planetChallenges.html.indexOf(`id="${heartRateLesson.id}"`);
const heartRateEnd = planetChallenges.html.indexOf('<section class="learning-step', heartRateStart + 10);
const heartRateMarkup = planetChallenges.html.slice(heartRateStart, heartRateEnd < 0 ? undefined : heartRateEnd);
assert.match(heartRateMarkup, /input\.acceleration\(Dimension\.Strength\)/, "el banc de prova usa l'acceleròmetre real de la placa de la dotació");
assert.match(heartRateMarkup, /count \* <span class="syntax-number">6<\/span>/, "la finestra de deu segons calcula esdeveniments simulats per minut sense anomenar-los bpm");
assert.match(heartRateMarkup, /sa-mb-heart-rate-accelerometre\.webp/, "Heart rate monitor intercala una il·lustració pròpia del banc de prova amb micro:bit");
assert.match(heartRateMarkup, /cinco situaciones[\s\S]*tres repeticiones por caso/i, "el banc de prova avalua soroll, ritme ràpid/lent i falsos esdeveniments de manera repetible");
assert.match(heartRateMarkup, /no mide pulso real[\s\S]*no lo llevéis al cuerpo/i, "el prototip no es presenta com a dispositiu mèdic ni com a mesura biomètrica");
assert.match(planetChallengeSource, /teach\/lessons\/heart-rate-monitor/, "la fitxa enllaça l'activitat oficial Heart rate monitor");
assert.match(planetChallengeSource, /education\.theiet\.org\/secondary\/teaching-resources\/design-a-personal-heart-monitoring-system-microbit/, "la fitxa separa la referència tècnica complementària de l'activitat oficial micro:bit");
assert.equal(planetChallenges.steps.length, 12, "els cinc reptes micro:bit conserven les dotze activitats adaptades");
assert.equal((planetChallenges.html.match(/class="learning-phase"/g) || []).length, 60, "les dotze activitats micro:bit comparteixen les cinc fases");
assert.match(planetChallenges.html, /No pongáis dispositivos en ningún animal/i, "els prototips de biodiversitat no es despleguen en animals");
assert.match(planetChallenges.html, /No midáis el pulso de compañeros/i, "el repte de pulsacions evita dades biomètriques de l’alumnat");
const pythonTransportProject = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-python-proyecto-transporte.md"), "utf8"), "https://example.test/_content/situacions/sp-python-proyecto-transporte.md");
const pythonTransportSource = fs.readFileSync(path.join(root, "_content/situacions/sp-python-proyecto-transporte.md"), "utf8");
assert.equal(pythonTransportProject.steps.length, 10, "el projecte de transport en Python conserva les deu lliçons");
assert.equal((pythonTransportProject.html.match(/class="learning-phase"/g) || []).length, 50, "les deu lliçons del projecte de transport comparteixen les cinc fases");
assert.match(pythonTransportSource, /^duration: "10 lecciones · 10–12 sesiones"$/m, "la durada local del projecte respecta el rang oficial de 10–12 lliçons");
assert.match(pythonTransportProject.html, /tres intentos del mismo caso nominal/i, "el projecte conserva la calibració amb proves repetides");
assert.match(pythonTransportProject.html, /no autónomo ni apto para transportar materiales o personas en espacios reales/i, "la mostra declara els límits del prototip");
for (const [lesson, image] of [[3, "disseny"], [5, "mecanica"], [6, "python"], [10, "fira"]]) {
  const lessonSource = pythonTransportSource.split(`### **Lección ${lesson} ·`, 2)[1].split("\n### **Lección ", 1)[0].split("\n## ", 1)[0];
  assert.match(lessonSource, new RegExp(`sa-sp-python-projecte-transport-${image}\\.webp`), `la lliçó ${lesson} intercala el visual pertinent de l'etapa del projecte`);
  assert.match(pythonTransportProject.html, new RegExp(`sa-sp-python-projecte-transport-${image}\\.webp`), `el visual de la lliçó ${lesson} es renderitza`);
  assert.ok(fs.existsSync(path.join(root, `_assets/situacions/sa-sp-python-projecte-transport-${image}.webp`)), `el visual de la lliçó ${lesson} existeix localment`);
}
assert.match(pythonTransportProject.html, /tres prototipos de cartón separados[\s\S]*no presupone ningún accesorio oficial/i, "el visual de disseny distingeix les maquetes pròpies de les peces SPIKE");
assert.match(pythonTransportProject.html, /La pantalla representa código textual[\s\S]*API se deben comprobar/i, "el visual de Python identifica la pantalla com a representació i manté pendent la versió d'API");
const pythonGames = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-python-juegos.md"), "utf8"), "https://example.test/_content/situacions/sp-python-juegos.md");
assert.equal(pythonGames.steps.length, 8, "la unitat Python de jocs conserva les huit lliçons oficials");
assert.equal((pythonGames.html.match(/class="learning-phase"/g) || []).length, 40, "les huit lliçons de jocs comparteixen les cinc fases");
assert.match(pythonGames.html, /entrada desconocida/i, "les regles del joc defineixen una resposta per a entrades desconegudes");
assert.match(pythonGames.html, /marcador coherent/i, "la puntuació es comprova amb casos de prova i reinici");
const competitionReadySource = fs.readFileSync(path.join(root, "_content/situacions/sp-laberinto-marte.md"), "utf8");
const competitionReady = renderer.parse(competitionReadySource, "https://example.test/_content/situacions/sp-laberinto-marte.md");
assert.equal(competitionReady.steps.length, 9, "Competition Ready conserva les nou lliçons oficials");
assert.equal((competitionReady.html.match(/class="learning-phase"/g) || []).length, 45, "les nou lliçons de Competition Ready comparteixen les cinc fases");
assert.match(competitionReady.html, /zona segura, a 50 cm del modelo de nido/i, "la missió final conserva el lliurament segur de la mostra");
assert.match(competitionReadySource, /cuatro intentos comparables[\s\S]*dos a baja velocidad y dos a velocidad moderada/i, "The Guided Mission 2026–27 compara rapidesa i precisió amb intents controlats");
assert.match(competitionReadySource, /la base sale del área izquierda[\s\S]*acaba en la zona derecha/i, "The Guided Mission conserva els punts d'eixida i d'arribada de la lliçó oficial en un camp local");
assert.match(competitionReadySource, /empujar la palanca hasta que el puente se eleve[\s\S]*dos estaciones sin tocarlas/i, "la missió guiada adapta l'activació del connector i el pas prop d'altres missions");
assert.match(competitionReady.html, /sa-sp-missio-pont\.webp/, "la missió guiada intercala una il·lustració IA pròpia del sensor, la palanca i el pont locals");
assert.match(competitionReadySource, /hemos completado una misión[\s\S]*segunda parada[\s\S]*todas las personas hemos presentado programa y estrategia/i, "l'autoavaluació adapta els nivells oficials de missió, ampliació i presentació amb participació de tot l'equip");
assert.match(competitionReadySource, /retorno constructivo[\s\S]*propuesta comprobable/i, "la missió guiada incorpora coavaluació amb feedback accionable");
assert.match(competitionReadySource, /el tiempo solo compara las iteraciones del mismo equipo/i, "la missió usa el temps com a dada de millora sin clasificar grups");
assert.match(competitionReadySource, /equipo de cuatro[\s\S]*cuatro instrucciones de montaje/i, "la base avançada adapta el treball en equip de quatre parts de muntatge");
assert.match(competitionReadySource, /dos motores grandes para la propulsión[\s\S]*dos motores medianos[\s\S]*dos sensores de color/i, "la base avançada identifica els components i les funciones del model oficial");
assert.match(competitionReadySource, /instrucciones de un solo lado[\s\S]*complete el otro por simetría/i, "l'ampliació adapta la construcció d'un costat sense instruccions");
assert.match(competitionReadySource, /coevaluación con observación y sugerencia concreta[\s\S]*violeta/i, "la base avançada incorpora autoavaluació i feedback entre iguals");
assert.match(competitionReadySource, /dos marcadores[\s\S]*My Block.{0,3}de muestra[\s\S]*ruta cuadrada/i, "My Code, Our Program parteix de dos marcadors i un bloc d'exemple abans de crear-ne un");
assert.match(competitionReadySource, /bloques separados para un círculo aproximado y un triángulo/i, "la lliçó crea blocs reutilitzables per a les tres figures oficials");
assert.match(competitionReadySource, /he creado un.{0,8}My Block[\s\S]*he creado dos o más[\s\S]*he reordenado/i, "l'autoavaluació de My Blocks segueix els tres nivells oficials");
assert.match(competitionReadySource, /medid la distancia recorrida en una rotación[\s\S]*circunferencia de la rueda/i, "la lliçó inclou l'extensió matemàtica oficial per estimar distància");
assert.match(competitionReadySource, /fijadlos con los conectores rojos[\s\S]*cuatro cajas/i, "Time for an Upgrade adapta l'assemblatge oficial dels útils i les quatre caixes");
assert.match(competitionReadySource, /reinicializar la posición de los motores/i, "la seqüència de prova dels útils inclou el reinici de motors");
assert.match(competitionReadySource, /dos arrays[\s\S]*Comparad los elementos del mismo índice/i, "la lliçó treballa dos arrays alineats per índex");
assert.match(competitionReadySource, /he usado un array[\s\S]*he creado un segundo[\s\S]*más de una operación con arrays/i, "l'autoavaluació dels arrays segueix els tres nivells oficials");
assert.match(competitionReadySource, /comentario constructivo con una prueba siguiente/i, "Time for an Upgrade incorpora coavaluació i una prova de seguiment");
assert.match(competitionReadySource, /módulo de juego de cartón[\s\S]*camino propio y dos marcadores[\s\S]*cinco metas originales/i, "Mission Ready crea una pista local amb els elements de missió necessaris");
assert.match(competitionReadySource, /hasta seis fichas de incidencia[\s\S]*no restan puntos ni sirven para comparar equipos/i, "les incidències de la missió tenen un protocol explícit sense rànquing");
assert.match(competitionReadySource, /una marca adicional si recoge las cuatro muestras[\s\S]*entrega segura de 50 cm/i, "la missió conserva recollida de quatre i lliurament segur amb criteris locals clars");
assert.match(competitionReadySource, /azul[\s\S]*al menos una meta[\s\S]*amarillo[\s\S]*las cinco[\s\S]*violeta[\s\S]*todas las personas/i, "l'autoavaluació de Mission Ready cobreix assoliment parcial, complet i presentació d'equip");
assert.match(competitionReadySource, /retorno constructivo[\s\S]*mejora comprobable/i, "Mission Ready incorpora coavaluació amb una revisió concreta");
assert.match(competitionReadySource, /temporalización suma 45 minutos \(10 \+ 15 \+ 10 \+ 5 \+ 5\)/i, "Mission Training conserva la temporització oficial de 45 minuts");
assert.match(competitionReadySource, /llevar una muestra[\s\S]*activar un dispositivo[\s\S]*rescatar una semilla[\s\S]*voltear una ficha/i, "Mission Training adapta els quatre tipus de repte oficials");
assert.match(competitionReadySource, /Identificamos[\s\S]*Ideamos[\s\S]*Creamos[\s\S]*Iteramos[\s\S]*Comunicamos/i, "Mission Training explicita el cicle complet de disseny");
assert.match(competitionReadySource, /una mano[\s\S]*dos manos[\s\S]*manos en alto/i, "Mission Training manté els tres nivells d'autoavaluació individual");
assert.match(competitionReadySource, /sa-sp-mission-training-prototip\.webp/, "Mission Training intercala una il·lustració original del repte desconnectat");
assert.match(competitionReadySource, /No hacen falta el set SPIKE Prime, piezas LEGO ni software/i, "Mission Training declara que no requereix el kit ni programari");
assert.match(competitionReady.html, /sin reproducir el tapete, el modelo ni la misión de FIRST LEGO League/i, "la situació no reutilitza el camp ni el model oficial protegit");
assert.match(competitionReady.html, /No hacen falta el set SPIKE Prime, piezas LEGO ni software/i, "Mission Training continua sent una activitat desconnectada completa");
assert.match(taleBotExplorationSource, /B-9 · Viaje por el sistema solar[\s\S]*B-10 · Recogida magnética[\s\S]*B-11 · Trampas y tesoros/i, "les activitats B-9–B-11 segueixen els encapçalaments detallats del quadern");
assert.match(taleBotExplorationSource, /Tale-Bot no detecta magnetismo/i, "l'adaptació de Magnetic Collector no atribueix detecció magnètica al robot");
const testingSolutions = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-pruebas-evaluacion.md"), "utf8"), "https://example.test/_content/situacions/sp-pruebas-evaluacion.md");
assert.equal(testingSolutions.steps.length, 8, "Testing and Evaluating Solutions conserva les huit lliçons");
assert.equal((testingSolutions.html.match(/class="learning-phase"/g) || []).length, 40, "les huit lliçons d’avaluació comparteixen les cinc fases");
assert.match(testingSolutions.html, /tres intentos por objeto y método/i, "la comparació d’agafadors manté els intents repetits");
assert.match(testingSolutions.html, /no un producto médico ni una recomendación de uso/i, "el repte de disseny assistiu declara els límits del prototip");
const sensorLogistics = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-sensores-logistica.md"), "utf8"), "https://example.test/_content/situacions/sp-sensores-logistica.md");
assert.equal(sensorLogistics.steps.length, 8, "Sensors conserva les huit lliçons de la unitat");
assert.equal((sensorLogistics.html.match(/class="learning-phase"/g) || []).length, 40, "les huit lliçons de Sensors comparteixen les cinc fases");
assert.match(sensorLogistics.html, /dos ciclos completos/i, "la fàbrica prova dos cicles de classificació i retorn");
assert.match(sensorLogistics.html, /detenerse y avisar ante un código desconocido/i, "el triatge deté el programa quan no reconeix l’etiqueta");
const kickstartBusiness = renderer.parse(fs.readFileSync(path.join(root, "_content/situacions/sp-biblioteca-circulante.md"), "utf8"), "https://example.test/_content/situacions/sp-biblioteca-circulante.md");
assert.equal(kickstartBusiness.steps.length, 7, "Kickstart a Business conserva les set lliçons oficials");
assert.match(kickstartBusiness.html, /cuatro combinaciones previstas/i, "Keep It Really Safe verifica totes les combinacions de la condició composta");
assert.match(kickstartBusiness.html, /sensibilidad a mayúsculas/i, "Keep It Really Safe adapta el glossari oficial de seguretat digital");
assert.match(kickstartBusiness.html, /en dos sesiones/i, "Keep It Really Safe manté la durada de la fitxa oficial en la programació local");
assert.match(kickstartBusiness.steps[3].title, /^Una condición para controlar el acceso a la caja de préstamo .*90–120 min\)$/i, "Keep It Safe separa el nom propi del pas i conserva la durada oficial");
assert.match(kickstartBusiness.html, /sa-sp-tracador-xy\.webp/, "Track Your Packages intercala una imatge pròpia del model X-Y amb SPIKE Prime");
assert.match(kickstartBusiness.html, /sa-sp-classificador-retorns\.webp/, "Automate It intercala un visual de classificació amb fitxes fictícies i el robot de la dotació");
assert.match(kickstartBusiness.html, /persona construye la parte superior del trazador y la otra la base y la aguja/i, "Track Your Packages conserva el repartiment oficial del muntatge en tàndem");
assert.match(kickstartBusiness.html, /reconocer tramos horizontales, verticales y diagonales/i, "Track Your Packages manté els criteris oficials de reconeixement de patrons");
assert.match(kickstartBusiness.html, /una observación de otra pareja/i, "Track Your Packages integra coavaluació i retorn entre iguals");
assert.match(fs.readFileSync(path.join(root, "_content/situacions/sp-biblioteca-circulante.md"), "utf8"), /^### \*\*S4 · Una condición para controlar el acceso/m, "la lliçó Keep It Safe té un número de sessió explícit i coherent amb la seqüència");
assert.equal((kickstartBusiness.html.match(/class="learning-phase"/g) || []).length, 35, "les set lliçons de Kickstart a Business comparteixen les cinc fases");
for (const step of kickstartBusiness.steps) {
  const start = kickstartBusiness.html.indexOf(`id="${step.id}"`);
  const end = kickstartBusiness.html.indexOf('<section class="learning-step"', start + 10);
  const markup = kickstartBusiness.html.slice(start, end < 0 ? undefined : end);
  assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${step.title} presenta exactament les cinc fases comunes`);
}
assert.match(kickstartBusiness.html, /ejecutad el programa inicial/i, "Keep It Safe inclou l'exploració del programa inicial oficial");
assert.match(kickstartBusiness.html, /prueba cruzada/i, "Keep It Safe adapta el desafiament entre equips");
const longText = Array.from({ length: 34 }, (_, index) => `L'equip registra l'observació ${index + 1} i explica com comprova cada decisió amb una prova concreta.`).join(" ");
const consistentFormat = renderer.parse(`## Situació i intenció\n\n${longText}\n\n## Materials docents\n\n**Exploració · 10 min:** Prepareu el mapa i les targetes.`, "https://example.test/_content/situacions/prova.md");
assert.match(consistentFormat.html, /<h2 id="situacio-i-intencio"><img[^>]+class="section-icon"[^>]*><span>Situación, reto e intención<\/span><\/h2>/, "els títols equivalents es normalitzen sense canviar l'àncora original");
assert.match(consistentFormat.html, /markdown-note-situation/, "la primera explicació de la situació es destaca automàticament");
assert.match(consistentFormat.html, /markdown-note-phase/, "les fases amb duració comparteixen un format visual");
assert.equal((consistentFormat.html.match(/<p>/g) || []).length, 2, "els paràgrafs extensos respecten els límits del Markdown");
assert.match(consistentFormat.html, /prova concreta\. L&#39;equip registra l&#39;observació 2/, "el paràgraf conserva l'espai entre frases");
const structuredSteps = renderer.parse(`## Itinerari\n### Sessió 1 · Provar\n- Evidencia: registre de la prova.\n- **Pregunta docent:** Què canviaríeu?\n- Criteri d'èxit: el recorregut es pot repetir.\n- [ ] Compareu els dos resultats.`, "https://example.test/_content/situacions/prova.md");
assert.match(structuredSteps.html, /learning-step-kicker">Paso 1</, "cada pas té un marcador visual ordenat");
assert.match(structuredSteps.html, /markdown-list-label-evidence/, "les evidències de les llistes queden etiquetades");
assert.match(structuredSteps.html, /markdown-list-label-question/, "les preguntes docents de les llistes queden etiquetades");
assert.match(structuredSteps.html, /markdown-list-label-criterion/, "els criteris de les llistes queden etiquetats");
assert.match(structuredSteps.html, /markdown-task-mark/, "les tasques amb casella conserven una marca accessible");
const semanticContent = renderer.parse(`## Itinerari\n### Sessió 1 · Provar\n#### Llegim les dades · 10 min\n\nFeu una prova i anoteu el resultat.\n\n*Evidencia:* registre de la prova.\n\n*Preguntes docents:* Què ha canviat?`, "https://example.test/_content/situacions/prova.md");
assert.equal((semanticContent.html.match(/class="learning-phase"/g) || []).length, 1, "qualsevol subapartat H4 dins d'una sessió es representa com una fase");
assert.match(semanticContent.html, /markdown-note-evidence/, "les evidències en cursiva es transformen en blocs semàntics");
assert.match(semanticContent.html, /markdown-note-question/, "les preguntes docents en cursiva es transformen en blocs semàntics");
const orderedWizard = renderer.parse(`## Repte i intenció\n\nUna classe prepara una ruta per a la biblioteca.\n\n## Itinerari\n### Sessió 1 · Dissenyar\n\nPrepareu el mapa.`, "https://example.test/_content/situacions/prova.md");
assert.ok(orderedWizard.html.indexOf("Una classe prepara") < orderedWizard.html.indexOf('class="learning-step-index learning-wizard"'), "el navegador apareix després de la descripció del repte");
assert.ok(orderedWizard.html.indexOf('class="learning-step-index learning-wizard"') < orderedWizard.html.indexOf('class="learning-step"'), "el navegador apareix immediatament abans de les sessions");
const normalizedOrder = renderer.parse(`## Fonts consultades\n\nFont A.\n\n## Avaluació i evidències\n\nProves.\n\n## Itinerari didàctic\n### Sessió 1 · Provar\n\nAcció.\n\n## Abans de començar\n\nMaterials.\n\n## Repte i context\n\nContext local.\n\n## Aprenentatges i vocabulari\n\nObjectius.\n\n## Accessibilitat i seguretat\n\nAlternatives.`, "https://example.test/_content/situacions/prova.md");
const groups = ["intro", "learning", "materials", "sequence", "assessment", "access", "official"];
const positions = groups.map(group => normalizedOrder.html.indexOf(`data-section-group="${group}"`));
assert.ok(positions.every((position, index) => position >= 0 && (index === 0 || positions[index - 1] < position)), "les seccions de les SDAs s'ordenen amb una jerarquia comuna");
const navigationLink = renderer.parse('[Obri la situació](../../situacion/index.html?id=sp-exemple)', 'https://example.test/_content/situacions/exemple.md');
assert.doesNotMatch(navigationLink.html, /x-target/, "els enllaços Markdown interns usen navegació estàndard sense Alpine AJAX");
assert.doesNotMatch(navigationLink.html, /target="_blank"/, "els enllaços interns no s'obrin com si foren externs");

const contentDir = path.join(root, "_content/situacions");
const imageOwners = new Map();
const activeFiles = fs.readdirSync(contentDir)
  .filter(file => file.endsWith(".md") && file !== "TEMPLATE-SITUACIO.md")
  .map(file => ({ file, source: fs.readFileSync(path.join(contentDir, file), "utf8") }))
  .filter(item => /^active:\s*true\s*$/m.test(item.source));
const slugs = new Set();
const robotSituationCounts = new Map();
for (const item of activeFiles) {
  const slug = item.file.slice(0, -3);
  assert.ok(!slugs.has(slug), `${slug} està duplicat`);
  slugs.add(slug);
  const rendered = renderer.parse(item.source, `https://example.test/_content/situacions/${item.file}`);
  {
    assert.equal((rendered.html.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, rendered.steps.length * 5, `${slug} segueix les cinc fases comunes en cada sessió`);
    for (const step of rendered.html.matchAll(/<section class="learning-step"[\s\S]*?(?=<section class="learning-step"|$)/g)) {
      assert.deepEqual([...step[0].matchAll(/<h4>(.*?)<\/h4>/g)].map(match => match[1]).filter(title => title.startsWith("Fase ")), [
        "Fase 1 · Activamos y predecimos",
        "Fase 2 · Exploramos y construimos",
        "Fase 3 · Explicamos y registramos",
        "Fase 4 · Aplicamos y mejoramos",
        "Fase 5 · Comprobamos y reflexionamos"
      ], `${slug} manté els mateixos títols i ordre de fase`);
    }
  }
  for (const [, imageSource] of item.source.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    const assetPath = path.resolve(contentDir, imageSource);
    const previousOwner = imageOwners.get(assetPath);
    assert.ok(!previousOwner || previousOwner === slug, `${slug} no reutilitza la imatge de portada de ${previousOwner}`);
    imageOwners.set(assetPath, slug);
  }
  assert.ok(rendered.data.title && rendered.data.robot && rendered.data.description, `${slug} necessita metadades editorials`);
  robotSituationCounts.set(rendered.data.robot, (robotSituationCounts.get(rendered.data.robot) || 0) + 1);
  assert.ok(rendered.steps.length > 0, `${slug} necessita passos estructurats`);
  assert.ok(rendered.steps.every(step => step.title && !/[.!?]$/.test(step.title)), `${slug} té tots els noms de pas nets i sense puntuació final`);
  assert.ok(rendered.steps.every(step => !/^(?:(?:sess(?:ió|io)|lliç(?:ó|o)|lesson|session)\s+\d+|s\d+)\s*[·—:.-]/i.test(step.title)), `${slug} no duplica la numeració automàtica dins del títol visible`);
  assert.ok(rendered.steps.every(step => !/^[a-z]{1,3}-?\d+\s*[·—:.-]/i.test(step.title)), `${slug} no repeteix codis de sessió o lliçó al títol visible`);
  const sectionGroupsException = ["intro", "learning", "materials", "sequence", "assessment", "access", "official"];
  assert.deepEqual([...rendered.html.matchAll(/data-section-group="([^"]+)"/g)].map(match => match[1]), sectionGroupsException, `${slug} presenta les mateixes seccions i en el mateix ordre`);
  assert.equal((rendered.html.match(/class="learning-step-index learning-wizard"/g) || []).length, 1, `${slug} usa una única seqüència de navegació comuna`);
  assert.equal((rendered.html.match(/class="learning-wizard-step-number"/g) || []).length, rendered.steps.length, `${slug} defineix el marcador numèric per a cada pas del selector`);
  assert.equal((rendered.html.match(/class="learning-wizard-step-title"/g) || []).length, rendered.steps.length, `${slug} defineix el títol en un element separat del número per a cada pas`);
  assert.equal((rendered.html.match(/class="learning-step"/g) || []).length, rendered.steps.length, `${slug} representa cada pas amb la mateixa plantilla visual`);
  assert.equal((rendered.html.match(/class="learning-step-content"/g) || []).length, rendered.steps.length, `${slug} embolcalla cada pas amb el contenidor comú`);
  assert.ok((rendered.html.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length >= rendered.steps.length, `${slug} presenta cada pas dins d'una fase visual`);
  for (let phase = 1; phase <= 5; phase++) {
    assert.equal((rendered.html.match(new RegExp(`data-phase="${phase}"`, 'g')) || []).length, rendered.steps.length, `${slug}: la fase ${phase} té un punt a la línia de temps en cada pas`);
  }
  assert.equal((rendered.html.match(/class="phase-timeline-marker"/g) || []).length, rendered.steps.length * 5, `${slug}: cada fase té una icona del pack`);
  assert.ok(rendered.steps.every(step => !/^\d+\s*/.test(step.title)), `${slug} no duplica la numeració al nom dels passos`);
  assert.match(rendered.html, /class="sa-illustration"/, `${slug} necessita una imatge editorial`);
  assert.match(rendered.html, /markdown-note-situation/, `${slug} necessita una introducció destacada`);
  const sectionGroups = [...rendered.html.matchAll(/data-section-group="([a-z]+)"/g)].map(match => match[1]);
  const sectionPriority = { intro: 0, learning: 1, materials: 2, sequence: 3, other: 4, assessment: 5, access: 6, official: 7 };
  const priorities = sectionGroups.map(group => sectionPriority[group] ?? 4);
  assert.ok(priorities.every((priority, index) => index === 0 || priorities[index - 1] <= priority), `${slug} no respecta l’ordre comú de seccions: ${sectionGroups.join(", ")}`);
  const standardGroups = sectionGroupsException;
  assert.deepEqual(sectionGroups, standardGroups, `${slug} ha de tindre exactament els set apartats comuns i en el mateix ordre`);
  const standardHeadings = [
    "Situación, reto e intención",
    "Aprendizajes y vocabulario",
    "Materiales y preparación",
    "Secuencia didáctica",
    "Evidencias y evaluación",
    "Participación, accesibilidad y seguridad",
    "Referentes y adaptación"
  ];
  assert.deepEqual(
    [...rendered.html.matchAll(/<section class="detail-section(?: detail-section-intro)?" data-section-group="[a-z]+"[^>]*><h2[^>]*>(.*?)<\/h2>/g)].map(match => match[1].replace(/<[^>]*>/g, "")),
    standardHeadings,
    `${slug} usa els mateixos títols de secció, sense afegir durades variables al títol de la seqüència`
  );
  for (const group of standardGroups) {
    assert.equal(sectionGroups.filter(item => item === group).length, 1, `${slug} ha d’unificar tots els blocs ${group} en un únic apartat`);
  }
  assert.doesNotMatch(rendered.html, /data-section-group="other"/, `${slug} no deixa contingut fora de l’estructura editorial comuna`);

}
for (const robot of ["coding-express", "tale-bot", "coding-set", "codey-rocky", "spike", "microbit"]) {
  assert.ok((robotSituationCounts.get(robot) || 0) >= 5, `${robot} necessita almenys cinc situacions actives pròpies o adaptades`);
}
assert.equal(new Set([...imageOwners.values()]).size, activeFiles.length, "cada SDA activa té almenys una imatge pròpia i no compartida amb una altra fitxa");
const situationCatalogPage = fs.readFileSync(path.join(dist, "situaciones-aprendizaje/index.html"), "utf8");
for (const slug of slugs) {
  assert.ok(fs.existsSync(path.join(dist, "situacion", slug, "index.html")), `${slug} té la seua pàgina HTML pre-renderitzada`);
  assert.match(situationCatalogPage, new RegExp(`href="\\.\\./situacion/${slug}/index\\.html"`), `${slug} enllaça des del catàleg d'SDAs`);
}
const expectedDetailKinds = [
  ["actividad", "activitats", "", 10],
  ["tutorial", "tutorials", "", 36],
  ["robot", "robots", "robot-", 6],
  ["guia", "guies", "guia-", 4]
];
for (const [route, folder, prefix, minExpected] of expectedDetailKinds) {
  const redirectPage = fs.readFileSync(path.join(dist, route, "index.html"), "utf8");
  assert.match(redirectPage, /data-legacy-redirect=/, `${route}/index.html ofereix redirecció de compatibilitat per a ?id=slug`);
  assert.match(redirectPage, /_js\/ui\.js\?v=/, `${route} carrega el controlador lleuger d'interfície`);
  const docs = fs.readdirSync(path.join(root, "_content", folder)).filter(file => file.startsWith(prefix) && file.endsWith(".md") && !/^(README|TEMPLATE-)/.test(file));
  const activeDocs = docs.filter(file => {
    const source = fs.readFileSync(path.join(root, "_content", folder, file), "utf8");
    return !/^active:\s*false\s*$/m.test(source);
  });
  assert.ok(activeDocs.length >= minExpected, `${route} té almenys els ${minExpected} documents Markdown base`);
  for (const file of activeDocs) {
    const slug = file.slice(prefix.length, -3);
    assert.ok(fs.existsSync(path.join(dist, route, slug, "index.html")), `${route}/${slug}/index.html s'ha generat al build`);
  }
}
const activitiesDir = path.join(root, "_content/activitats");
assert.ok(fs.existsSync(path.join(activitiesDir, "TEMPLATE-ACTIVITAT.md")), "existeix la plantilla base TEMPLATE-ACTIVITAT.md");
const activityFiles = fs.readdirSync(activitiesDir)
  .filter(file => /^(pc|tb|cs)-.+\.md$/.test(file))
  .sort();
const requiredActivityHeadings = [
  "## 🎯 Què aprendrem?",
  "## 🧰 Materials i preparació",
  "## 👣 Desenvolupament pas a pas",
  "## ✅ Evidències d'aprenentatge",
  "## ♿ Variants i inclusió"
];
const requiredActivityHeadingsEs = [
  "## 🎯 ¿Qué vamos a aprender?",
  "## 🧰 Materiales y preparación",
  "## 👣 Desarrollo paso a paso",
  "## ✅ Evidencias de aprendizaje",
  "## ♿ Variantes e inclusión"
];
for (const file of activityFiles) {
  const source = fs.readFileSync(path.join(activitiesDir, file), "utf8");
  if (/^active:\s*false\s*$/m.test(source)) continue;
  const rendered = renderer.parse(source, `https://example.test/_content/activitats/${file}`);
  for (const field of ["title", "description", "topic", "cycle_label", "duration", "order"]) {
    assert.ok(rendered.data[field], `${file}: declara la propietat obligatòria ${field}`);
  }
  const h2Headings = source.split("\n").filter(line => line.startsWith("## "));
  const spanishActivity = h2Headings.includes("## 🎯 ¿Qué vamos a aprender?");
  const baseHeadings = spanishActivity ? requiredActivityHeadingsEs : requiredActivityHeadings;
  const referentHeading = spanishActivity ? "## 🔗 Referente consultado" : "## 🔗 Referent consultat";
  const expectedHeadings = h2Headings.includes(referentHeading)
    ? [...baseHeadings, referentHeading]
    : baseHeadings;
  assert.deepEqual(h2Headings, expectedHeadings, `${file}: manté exactament els encapçalaments canònics d'activitat`);
  assert.match(source, /^### (?:Preguntes per fer pensar|Preguntas para pensar)$/m, `${file}: inclou la subsecció de preguntes de reflexió`);
  assert.doesNotMatch(rendered.html, /Desenvolupament del pas|Desarrollo del paso|learning-phase-default/, `${file}: el pas no té cap fase automàtica`);
  assert.match(rendered.html, /<div class="learning-step-content">\s*<(?:p|aside|figure|ul|ol)/, `${file}: el contingut és directament dins del pas`);
  assert.ok(rendered.steps.length >= 3, `${file}: organitza l'activitat en almenys tres passos al wizard`);
  const expectedGroups = (h2Headings.includes("## 🔗 Referent consultat") || h2Headings.includes("## 🔗 Referente consultado"))
    ? ["learning", "materials", "sequence", "assessment", "access", "official"]
    : ["learning", "materials", "sequence", "assessment", "access"];
  assert.deepEqual(
    [...rendered.html.matchAll(/data-section-group="([a-z]+)"/g)].map(match => match[1]),
    expectedGroups,
    `${file}: renderitza totes les seccions visuals en el mateix ordre canònic`
  );
  assert.doesNotMatch(rendered.html, /class="detail-subsection-title"/, `${file}: no fusiona seccions principals com a subtítols`);
}
for (const pageName of ["pensamiento-computacional", "robotica-educativa", "situaciones-aprendizaje"]) {
  const page = fs.readFileSync(path.join(dist, pageName, "index.html"), "utf8");
  assert.doesNotMatch(page, /alpine-ajax@/, `${pageName} no depén d'Alpine AJAX`);
  assert.doesNotMatch(page, /alpinejs@/, `${pageName} no depén d'Alpine en el client`);
  assert.match(page, /_js\/ui\.js\?v=/, `${pageName} carrega el controlador lleuger d'interfície`);
  assert.match(page, /id="page-content"/, `${pageName} defineix el contenidor principal compartit`);
}
assert.match(situationCatalogPage, /data-situations-catalog/, "el catàleg d'SDAs declara el contenidor filtrable");
assert.match(situationCatalogPage, /data-filter="robot"[\s\S]*?data-filter="cicle"[\s\S]*?data-filter="tematica"[\s\S]*?data-filter="materia"/, "els quatre filtres es renderitzen amb atributs de dades semàntics");
assert.doesNotMatch(situationCatalogPage, /filters\.js/, "el catàleg no carrega un controlador de filtres separat");
const robotMarkdown = fs.readFileSync(path.join(root, "_content/robots/robot-spike.md"), "utf8");
const robotRecord = renderer.parse(robotMarkdown, "https://example.test/_content/robots/robot-spike.md");
assert.equal(robotRecord.data.specs.length, 5, "les especificacions de robot es llegeixen del front matter");
assert.equal(robotRecord.data.official_resources.length, 3, "els recursos oficials de robot es llegeixen del front matter");
const sharedPage = fs.readFileSync(path.join(dist, "situacion/index.html"), "utf8");
const uiSource = fs.readFileSync(path.join(root, "_js/ui.js"), "utf8");
const buildSource = fs.readFileSync(path.join(root, "_scripts/build.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "_css/styles.css"), "utf8");
assert.match(sharedPage, /data-legacy-redirect=/, "situacion/index.html redirigeix els enllaços antics ?id=slug");
const canonicalSituationSlugs = new Set(activeFiles.map(item => item.file.replace(/\.md$/, "")));
assert.equal(fs.readdirSync(path.join(dist, "situacion")).filter(name => canonicalSituationSlugs.has(name) && fs.statSync(path.join(dist, "situacion", name)).isDirectory()).length, activeFiles.length, "totes les SDAs actives tenen la seua pàgina pre-renderitzada");
assert.match(uiSource, /new URLSearchParams\(window\.location\.search\)/, "el controlador gestiona els parámetros de cerca de la URL");
assert.doesNotMatch(uiSource, /x-target\./, "la navegació no depén d'Alpine AJAX");
assert.match(styles, /@view-transition\s*\{\s*navigation:\s*auto;\s*\}/, "el full d'estils activa View Transitions entre pàgines");
assert.doesNotMatch(uiSource, /addEventListener\('popstate'/, "l'historial no es manté amb un router manual");
assert.match(uiSource, /data-learning-wizard/, "el controlador inicialitza el wizard de passos");
assert.match(uiSource, /focus\(\{ preventScroll: true \}\)/, "la navegació conserva la gestió accessible del focus");
assert.match(pilot.html, /aria-valuetext="Paso 1 de 6"/, "el progrés del wizard té una descripció accessible");
assert.match(pilot.html, /class="learning-wizard-step-title"><span class="learning-wizard-step-separator" aria-hidden="true">&#160;·&#160;<\/span><span>/, "el selector separa visualment número i títol amb espais no separables");
assert.match(styles, /\.learning-wizard-step\s*\{[^}]*column-gap:/, "el selector del wizard separa el número del títol amb espai explícit");
assert.match(styles, /\.learning-wizard-step\s*\{[^}]*grid-template-columns: 1\.8rem minmax\(0, 1fr\);[^}]*column-gap: \.8rem/s, "el selector reserva un espai fix i visible entre el número i el títol");
assert.match(styles, /\.learning-wizard-step-title\s*\{[^}]*grid-template-columns: auto minmax\(0, 1fr\)/s, "el separador del títol no pot quedar enganxat al número encara que el títol ocupe dues línies");
const commonPhaseHeadings = [
  "Fase 1 · Activamos y predecimos",
  "Fase 2 · Exploramos y construimos",
  "Fase 3 · Explicamos y registramos",
  "Fase 4 · Aplicamos y mejoramos",
  "Fase 5 · Comprobamos y reflexionamos"
];
const officialCycles = {
  infantil: ["Educació Infantil", "Educación Infantil"],
  "primer-cicle": ["Primer cicle", "Primer ciclo"],
  "segon-cicle": ["Segon cicle", "Segundo ciclo"],
  "tercer-cicle": ["Tercer cicle", "Tercer ciclo"]
};
const activeSituations = fs.readdirSync(path.join(root, "_content/situacions")).filter(file => file.endsWith(".md") && /^active:\s*true\s*$/m.test(fs.readFileSync(path.join(root, "_content/situacions", file), "utf8")));
const equippedRobots = ["coding-express", "tale-bot", "coding-set", "codey-rocky", "spike", "microbit"];
const situationCountByRobot = Object.fromEntries(equippedRobots.map(robot => [robot, 0]));
const imageOwnerByPath = new Map();
for (const file of activeSituations) {
  const situationPath = path.join(root, "_content/situacions", file);
  const situationSource = fs.readFileSync(situationPath, "utf8");
  const imageSources = [...situationSource.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(match => match[1]);
  assert.ok(imageSources.length > 0, `${file}: té almenys una imatge pròpia referenciada`);
  for (const imageSource of imageSources) {
    assert.doesNotMatch(imageSource, /^https?:\/\//i, `${file}: la imatge queda allotjada localment`);
    const imagePath = path.resolve(path.dirname(situationPath), imageSource);
    assert.ok(fs.existsSync(imagePath), `${file}: existeix la imatge ${imageSource}`);
    const previousOwner = imageOwnerByPath.get(imagePath);
    assert.ok(!previousOwner || previousOwner === file, `${file}: no reutilitza una imatge pròpia de ${previousOwner}`);
    imageOwnerByPath.set(imagePath, file);
  }
  const parsedSituation = renderer.parse(situationSource, `https://example.test/_content/situacions/${file}`);
  if (Object.hasOwn(situationCountByRobot, parsedSituation.data.robot)) situationCountByRobot[parsedSituation.data.robot] += 1;
  assert.ok(parsedSituation.steps.length > 0, `${file} té passos navegables`);
  assert.ok(Object.hasOwn(officialCycles, parsedSituation.data.cycle), `${file}: usa un dels quatre cicles oficials`);
  assert.ok(officialCycles[parsedSituation.data.cycle].includes(parsedSituation.data.cycle_label), `${file}: l'etiqueta del cicle coincideix amb la nomenclatura oficial`);
  assert.match(parsedSituation.html, /<nav class="learning-step-index learning-wizard"/, `${file} utilitza el mateix navegador de passos`);
  for (const step of parsedSituation.steps) {
    assert.doesNotMatch(step.title, /^\d+\s*/, `${file}: el títol no duplica el número del selector`);
    const start = parsedSituation.html.indexOf(`id="${step.id}"`);
    const end = parsedSituation.html.indexOf('<section class="learning-step"', start + 10);
    const markup = parsedSituation.html.slice(start, end < 0 ? undefined : end);
    assert.equal((markup.match(/class="learning-phase(?: learning-phase-default)?"/g) || []).length, 5, `${file}: ${step.title} usa les cinc fases comunes`);
    const renderedPhases = [...markup.matchAll(/<h4>(Fase [1-5] · .*?)<\/h4>/g)].map(match => match[1]);
    assert.deepEqual(renderedPhases, commonPhaseHeadings, `${file}: ${step.title} manté els mateixos noms i l'ordre de les cinc fases`);
  }
}
assert.equal(activeSituations.length, activeFiles.length, "el format comú es comprova en totes les SDAs actives");
for (const robot of equippedRobots) {
  assert.ok(situationCountByRobot[robot] >= 5, `${robot}: la dotació té almenys cinc SDAs pròpies actives`);
}
assert.ok(buildSource.includes('const contentHasChallenge = /data-section-group="intro"/.test(parsed.html);'), "el repte no es duplica quan la introducció ja té una secció, encara que el títol continga una icona");
assert.match(styles, /\.learning-step\[hidden\]/, "els passos no actius es retiren de la lectura visual");

const artistNet = fs.readFileSync(path.join(root, "_content/situacions/cs-artist-net-palabras.md"), "utf8");
const artistNetParsed = renderer.parse(artistNet, "https://example.test/_content/situacions/cs-artist-net-palabras.md");
assert.equal(artistNetParsed.steps.length, 4, "la proposta Artist té quatre sessions navegables");
assert.match(artistNet, /Artist Add-On Curriculum[\s\S]*no se han podido consultar/, "la fitxa delimita el resum oficial i el contingut no consultable");
assert.match(artistNet, /no dibuja ni dobla la cartulina/, "la fitxa no atribueix funciones del complement al Coding Set base");
assert.match(artistNet, /cs-artist-net-paraules\.webp[\s\S]*sa-cs-artist-net-ruta-v1\.webp/, "la fitxa té visuals de portada i procés");
assert.equal(artistNetParsed.data.official_source, "https://matatalab.com/cdn/ff/2HgegdEsgGGg2k9OhY4VH1UCq-RXiPAr0YQxIO0n3KQ/1596512886/public/2020-08/The%C2%A0Teacher%C2%A0Resource%C2%A0Guide.pdf", "la fitxa conserva la font oficial del currículum Artist");
const wetlandRoute = fs.readFileSync(path.join(root, "_content/situacions/cs-ruta-segura-marjal.md"), "utf8");
const wetlandRouteParsed = renderer.parse(wetlandRoute, "https://example.test/_content/situacions/cs-ruta-segura-marjal.md");
assert.equal(wetlandRouteParsed.steps.length, 3, "l’adaptació oficial d’obstacles té tres sessions navegables");
assert.match(wetlandRoute, /The Wolf is Coming[\s\S]*lección 3/i, "la SDA identifica la lliçó oficial que adapta");
assert.match(wetlandRoute, /intercambian tareas[\s\S]*permutaciones/i, "la proposta conserva el canvi de rols i el repte de permutacions de la font");
assert.match(wetlandRoute, /no lo reconoce ni lo evita automáticamente/i, "la proposta no atribueix detecció d’obstacles al robot base");
assert.ok(fs.existsSync(path.join(root, "_assets/situacions/cs-ruta-segura-marjal.webp")), "la SDA té la il·lustració IA generada per al Coding Set real");
assert.match(wetlandRoute, /cs-ruta-segura-marjal\.webp/, "la SDA referencia la seua il·lustració local");
const extracurricular = fs.readFileSync(path.join(root, "_content/situacions/cs-extracurricular-marjal.md"), "utf8");
const extracurricularParsed = renderer.parse(extracurricular, "https://example.test/_content/situacions/cs-extracurricular-marjal.md");
assert.equal(extracurricularParsed.steps.length, 12, "l’adaptació Extracurricular té dotze sessions navegables");
assert.match(extracurricular, /Matatalab Extracurricular[\s\S]*manual completo y los materiales anexos no se han podido contrastar/, "la fitxa marca el límit de verificació del currículum oficial");
assert.match(extracurricular, /El currículo oficial incluye Musician y Artist Add-On/, "la fitxa identifica els complements del currículum oficial");
assert.match(extracurricular, /sesiones 5–6 y 9–10 ofrecen una alternativa completa con papel/, "la fitxa ofereix alternatives completes de paper per als complements no confirmats");
const extracurricularSequence = extracurricular.split("## Secuencia didáctica", 2)[1].split("## Evidencias y evaluación", 1)[0];
assert.equal((extracurricularSequence.match(/\*\*Preparación docente:\*/g) || []).length, 12, "cada sessió descriu la preparació docent");
assert.equal((extracurricularSequence.match(/\*\*Vocabulario clave:\*/g) || []).length, 12, "cada sessió identifica el vocabulari específic");
assert.equal((extracurricularSequence.match(/\*\*Ampliación:\*/g) || []).length, 12, "cada sessió incorpora una extensió");
assert.equal((extracurricularSequence.match(/\*\*Conexión con el mundo real:\*/g) || []).length, 12, "cada sessió incorpora una connexió amb el món real");
for (const image of ["cs-extracurricular-marjal.webp", "sa-cs-extracurricular-musica-v1.webp", "sa-cs-extracurricular-arte-v1.webp"]) {
  assert.ok(fs.existsSync(path.join(root, "_assets/situacions", image)), `la situació Extracurricular té el visual ${image}`);
  assert.ok(extracurricular.includes(image), `la situació Extracurricular referencia ${image}`);
}
assert.equal(extracurricularParsed.data.official_source, "https://matatalab.com/zh-hans/node/67", "la fitxa apunta al resum oficial del currículum Extracurricular");

const unsafe = renderer.parse('## Prova\n\n<script>alert(1)</script>\n\n[x](javascript:alert(1))', "https://example.test/a.md");
assert.doesNotMatch(unsafe.html, /<script>/, "el pipeline neutralitza etiquetes <script>");
assert.doesNotMatch(unsafe.html, /href="javascript:/i, "els enllaços amb esquemes no permesos es rebutgen");
assert.match(unsafe.html, /&lt;script&gt;/, "les etiquetes <script> s'escapen com a text");

const htmlAndBlocksSample = renderer.parse(`---
title: Prova HTML i Blocs
---
## Seqüència didàctica

<div class="custom-html-banner">Contingut <strong>HTML</strong> directe</div>

### Sessió 1 · Blocs visuals i HTML

#### Fase 1 · Activem i prediem

Premeu <kbd>Botó A</kbd> per començar.

<details class="hint-box"><summary>Pista docent</summary><p>Text intern</p></details>

\`\`\`makecode
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
\`\`\`

\`\`\`mblock
quan s'iniciï Codey
mostra la imatge [cor v]
\`\`\`

\`\`\`spikeapp
quan comenci el programa
mou [endavant v] durant (20) cm
atura-ho tot
\`\`\`
`, "https://example.test/_content/situacions/html-blocks.md");

assert.equal(htmlAndBlocksSample.steps.length, 1, "la fase 2 detecta learning-step a partir de l'HTML de markdown-it");
assert.match(htmlAndBlocksSample.html, /<div class="custom-html-banner">Contingut <strong>HTML<\/strong> directe<\/div>/, "el pipeline conserva blocs HTML escrits al fitxer Markdown");
assert.match(htmlAndBlocksSample.html, /<kbd>Botó A<\/kbd>/, "el pipeline conserva etiquetes HTML inline");
assert.match(htmlAndBlocksSample.html, /<details class="hint-box"><summary>Pista docent<\/summary><p>Text intern<\/p><\/details>/, "el pipeline conserva elements HTML interactius com <details> dins dels passos");
assert.match(htmlAndBlocksSample.html, /data-block-engine="makecode"[\s\S]*?data-block-hash="[0-9a-f]{16}"[\s\S]*?<svg\b/, "els blocs makecode es compilen a SVG al servidor i s'associen al seu hash de memòria cau");
assert.match(htmlAndBlocksSample.html, /data-block-engine="mblock"[\s\S]*?<svg\b/, "els blocs mblock es compilen a SVG visual al build-step");
assert.match(htmlAndBlocksSample.html, /data-block-engine="spikeapp"[\s\S]*?fill="#fddc3e"/, "els blocs spikeapp es compilen a SVG visual amb la paleta oficial LEGO SPIKE");

const makecodeCache = require("../lib/makecode-cache");
const testCode = 'basic.showString("Test")';
const testHash = makecodeCache.getMakeCodeHash(testCode);
assert.equal(testHash.length, 16, "el hash del codi MakeCode té 16 caràcters hex");
const testResult = makecodeCache.renderOrGetMakeCodeSVG(testCode, {
  fallbackRenderer: () => '<svg id="test-cache"><text>Test</text></svg>'
});
assert.equal(testResult.hash, testHash, "renderOrGetMakeCodeSVG retorna el hash correcte");
assert.equal(makecodeCache.hasCachedMakeCode(testCode), true, "hasCachedMakeCode detecta el fitxer desat a _cache/makecode/");
assert.equal(makecodeCache.getCachedMakeCodeSVG(testCode), '<svg id="test-cache"><text>Test</text></svg>', "getCachedMakeCodeSVG recupera el contingut del fitxer en disc");
const secondResult = makecodeCache.renderOrGetMakeCodeSVG(testCode);
assert.equal(secondResult.fromCache, true, "la segona crida és un cache hit directe des de disc");



const taleMissions = fs.readFileSync(path.join(root, "_content/situacions/tb-misiones-comunidad.md"), "utf8");
assert.match(taleMissions, /tb-missions-comunitat\.webp/i, "les missions Tale-Bot tenen una il·lustració local amb el robot real");
assert.match(taleMissions, /no reconoce las escenas ni elige los destinos/i, "la llegenda no atribueix navegació autònoma al Tale-Bot");
const taleStreets = fs.readFileSync(path.join(root, "_content/situacions/tb-calles-amables.md"), "utf8");
assert.match(taleStreets, /tb-carrers-amables\.webp/i, "la SDA de carrers usa una il·lustració 3D pròpia amb el Tale-Bot real");
assert.match(taleStreets, /no controla vehículos ni detecta peatones u obstáculos/i, "la llegenda delimita els límits de la maqueta urbana");
const musicianCards = fs.readFileSync(path.join(root, "_content/situacions/cs-sonidos-marjal.md"), "utf8");
const musicianParsed = renderer.parse(musicianCards, "https://example.test/_content/situacions/cs-sonidos-marjal.md");
assert.equal(musicianParsed.steps.length, 4, "l'adaptació Musician manté les quatre sessions previstes");
assert.match(musicianCards, /Music Teacher[\s\S]*Music Player I/, "la SDA identifica les dues targetes Musician adaptades");
assert.match(musicianCards, /clave de alto y de sol[\s\S]*Do, Re, Mi, Fa, Sol, La y Ti[\s\S]*agruparse/, "Music Teacher conserva la classificació de claus, selectors i joc de crida");
assert.match(musicianCards, /hasta tres tramos de programa[\s\S]*dos grupos colaboren/, "Music Player I inclou fragmentació i execució en equip");
assert.match(musicianCards, /reproducir la canción protegida[\s\S]*crea una melodía propia/, "la cançó protegida es substitueix per una composició original");
assert.match(musicianCards, /cs-sons-marjal\.webp/, "la situació musical té una il·lustració específica");
assert.ok(musicianParsed.data.official_source.includes("Musician%20Add-on%20Activity%20Cards.pdf"), "la fitxa enllaça la font oficial de les targetes adaptades");
const animalCase = fs.readFileSync(path.join(root, "_content/situacions/cs-animales-visitas.md"), "utf8");
const animalParsed = renderer.parse(animalCase, "https://example.test/_content/situacions/cs-animales-visitas.md");
assert.equal(animalParsed.steps.length, 4, "l'adaptació del cas Coding Set té quatre sessions navegables");
assert.match(animalCase, /cuatro fichas de animales[\s\S]*cuatro lugares/, "el cas adapta els quatre lliuraments i les destinacions comunitàries");
assert.match(animalCase, /inventa una frase[\s\S]*bolsillos se cierran[\s\S]*recupera manualmente la ficha/, "la seqüència conserva la pista narrativa, l'ocultació i la recuperació");
assert.match(animalCase, /no ve, recuerda ni recoge las fichas/, "la fitxa no atribueix memòria ni recollida autònoma al MatataBot");
assert.match(animalCase, /cs-animals-visites\.webp/, "el cas té il·lustració local pròpia");
assert.equal(animalParsed.data.official_source, "https://matatalab.com/en/node/86", "l'adaptació enllaça el pla docent oficial Deliver Animals");
assert.match(animalCase, /10 minutos[\s\S]*30 minutos[\s\S]*5 minutos[\s\S]*obstáculos/i, "l'adaptació conserva l'estructura temporal, la preparació i el tancament de Deliver Animals");
assert.match(animalCase, /una única secuencia[\s\S]*bloque de música predefinida/i, "la sessió incorpora les dues ampliacions oficials com a opcions");
assert.match(animalCase, /Pick Me Up, Piggy!/, "el cas docent de recuperació de memòria queda com a font complementària");
const storyRoute = fs.readFileSync(path.join(root, "_content/situacions/cs-cuentos-marjal.md"), "utf8");
const storyParsed = renderer.parse(storyRoute, "https://example.test/_content/situacions/cs-cuentos-marjal.md");
assert.equal(storyParsed.steps.length, 4, "l'adaptació narrativa de MatataBot's Adventure té quatre sessions navegables");
assert.match(storyRoute, /MatataBot's Adventure[\s\S]*modo de control[\s\S]*secuencia tangible del Coding Set/, "la fitxa adapta el repte narratiu i diferencia els dos modes de control");
assert.match(storyRoute, /no es el mando de control de Matatalab Lite/, "la fitxa no presenta el tauler tangible com el comandament de Lite");
assert.match(storyRoute, /cs-contes-marjal\.webp/, "la situació narrativa té una il·lustració local pròpia");
assert.equal(storyParsed.data.official_source, "https://matatalab.com/en/node/89", "la situació narrativa enllaça la font primària Matatalab");
const badgeDesign = fs.readFileSync(path.join(root, "_content/situacions/cs-distintivo-marjal.md"), "utf8");
const badgeParsed = renderer.parse(badgeDesign, "https://example.test/_content/situacions/cs-distintivo-marjal.md");
assert.equal(badgeParsed.steps.length, 4, "l'adaptació Team Badge Design desenvolupa quatre sessions navegables");
assert.match(badgeDesign, /Team Badge Design[\s\S]*Artist Add-On[\s\S]*dibuja manualmente/, "la proposta conserva el repte oficial i explica la diferència del kit base");
assert.match(badgeDesign, /no traza líneas[\s\S]*no es una adaptación de la función de Artist\/Animation/i, "la fitxa no atribueix el traçat dels complements al Coding Set base");
assert.match(badgeDesign, /cs-distintiu-marjal\.webp/, "el distintiu té una il·lustració local basada en el Coding Set real");
assert.equal(badgeParsed.data.official_source, "https://matatalab.com/en/node/82", "la SDA del distintiu enllaça la font primària oficial");
const accessModel = fs.readFileSync(path.join(root, "_content/situacions/mb-ciudad-accesible.md"), "utf8");
assert.match(accessModel, /mb-ciutat-accessible\.webp/, "la maqueta micro:bit usa la nova il·lustració 3D de la placa real");
assert.match(accessModel, /no controla ni valida un paso real/, "la llegenda manté els límits del prototip de senyalització");
const microbitGarden = fs.readFileSync(path.join(root, "_content/situacions/mb-invernadero.md"), "utf8");
assert.match(microbitGarden, /mb-hivernacle\.webp/, "el projecte d'hort usa una il·lustració 3D amb plaques micro:bit reals");
assert.match(microbitGarden, /no hay ningún sensor de suelo integrado/, "la nova llegenda no atribueix sensor de sòl a micro:bit");

console.log(`Markdown renderer tests passed: ${activeFiles.length} active situations, ${activeFiles.reduce((total, item) => total + renderer.parse(item.source, "https://example.test/source.md").steps.length, 0)} navigable steps, template states, accessible wizard, code, images, links and escaping.`);

const coverInsideIntro = renderer.parse('![Portada](../../_assets/situacions/prova.webp)\n\n_Peu de la portada._\n\n## Repte i intenció\n\nText introductori.\n\nSegon paràgraf.\n\n## Aprenentatges\n\n- Objectiu.', 'https://example.test/_content/situacions/prova.md');
assert.match(coverInsideIntro.html, /data-section-group="intro"[\s\S]*?<figure class="sa-illustration">[\s\S]*?<figcaption>Peu de la portada\.<\/figcaption>[\s\S]*?<\/section>/, 'la portada i el peu es mostren dins de la introducció');
assert.equal((coverInsideIntro.html.match(/class="sa-illustration"/g) || []).length, 1, 'la portada no es duplica en moure-la a la introducció');
assert.doesNotMatch(coverInsideIntro.html.split('data-section-group="intro"')[0], /sa-illustration/, 'la portada no queda fora de la introducció');

assert.match(coverInsideIntro.html, /markdown-note-situation[\s\S]*?<\/aside>\s*<figure class="sa-illustration">[\s\S]*?<\/figure>\s*<p>Segon paràgraf\.<\/p>/, 'la portada queda immediatament després de la nota de situació i abans del segon paràgraf');

// Un punt i coma no és un límit de paràgraf, encara que el text siga llarg.
const semicolonParagraph = `${'paraula '.repeat(83).trim()}; ${'continuació '.repeat(20).trim()}`;
const semicolonRendered = renderer.parse(semicolonParagraph, 'https://example.test/_content/tutorials/tb-prova.md');
assert.equal((semicolonRendered.html.match(/<p>/g) || []).length, 1, 'el punt i coma conserva un únic paràgraf');
assert.match(semicolonRendered.html, /paraula; continuació/, 'es conserva el punt i coma amb el seu espai');

