# Simulador de Codey Rocky

Accés: `/sim/?robot=codey-rocky`, també des de la pestanya Codey Rocky del simulador i des de la fitxa del robot.

## Ús

- Tria un exemple o «Programa nou».
- Edita «Quan comença», «Quan prems A» o «Quan prems B».
- Tria «Afegir ací» a la principal, a una branca o dins d’un bucle i prem un bloc de la paleta. Les fletxes reordenen els blocs.
- «Executa» comença de nou des de la posició inicial; «Pas a pas» avança una instrucció lògica i aplica la durada d’una ordre de moviment o espera. Els botons virtuals A/B activen els seus programes.
- La cara «Dibuixa la teua» permet editar els 128 punts de la matriu LED.
- Canvia la llum i el so amb els controls. Els bucles tornen a llegir els sensors en cada volta. El bloc actiu i el resultat de les condicions es mostren durant l’execució.
- Afegeix o lleva obstacles tocant l’escenari. Amb el teclat: fletxes per moure el cursor, Espai o Retorn per aplicar l’eina. La posició inicial es pot canviar amb l’eina corresponent.

El programa es guarda al navegador si permet memòria local. El canvi de robot, una edició o l’ocultació de la pàgina aturen l’execució. La posició i els obstacles no es guarden entre recàrregues.

## Abast del model

És una selecció didàctica de blocs inspirada en mBlock, sense importació, exportació ni càrrega al robot físic. Inclou esdeveniments A/B, cares i text lliscant, RGB, moviments temporitzats i continus, espera, repeticions, bucles «mentre» i condicionals amb dues branques. «Mentre» comprova la condició abans de cada volta i continua pel bloc següent quan és falsa; si ja és falsa a l’entrada, no executa el cos. Per als obstacles es pot triar «hi ha obstacle» o «no hi ha obstacle».

L’escenari és continu i usa unitats gràfiques internes. La potència i la durada donen un moviment aproximat: no es converteixen a distàncies ni girs calibrats del robot real. La detecció frontal s’aproxima amb una zona curta davant de Rocky i inclou les vores de l’escenari; els obstacles es poden canviar durant una prova. Llum i so són entrades manuals normalitzades de 0 a 100: no s’usa el micròfon ni la càmera.

El seguiment de línia, la lectura de colors, els altres sensors i les comunicacions no formen part d’aquesta primera versió. La connexió i la càrrega de programes es practiquen amb mBlock i el robot real.

Fonts del comportament i la terminologia: [Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) i [exemple oficial d’obstacles](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles). Els coeficients físics són una simplificació pròpia, no especificacions de Makeblock.

## Fitxers

- `sim/codey-engine.js`: motor independent del navegador, amb temps, sensors, col·lisions i piles d’execució.
- `sim/codey.js` i `sim/codey.css`: editor i visualització.
- `_templates/components/codey-workspace.js`: estructura de la nova opció, inclosa a la pàgina del simulador.
- `_scripts/tests/test-codey-simulation.js`: proves del motor, incloses a `node _scripts/test.js`.

Regenera `sim/index.html` i `dist/` amb `node _scripts/build.js`.
