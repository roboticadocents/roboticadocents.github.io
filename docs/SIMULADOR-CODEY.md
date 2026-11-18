# Simulador de Codey Rocky

Accés: `/sim/?robot=codey-rocky`, des de la pestanya del simulador o des de la fitxa del robot.

## Editor de peces natives

Codey usa **Scratch Blocks 1.1.202**, distribuït localment amb la llicència Apache-2.0. La biblioteca dibuixa les peces, els encaixos, els bucles en C, els barrets, els camps, els menús i l’arrossegament. S’han llevat les targetes HTML que imitaven peces. Les definicions específiques de Codey segueixen els tipus d’ordres de mBlock amb text traduït al català.

Referències de Makeblock: [peces d’Aspecte i imatges LED](https://support.makeblock.com/hc/en-us/articles/7462619391895-Case-2-DIY-facial-expressions), [Acció, Control i Detecció](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles) i [exemple de moviment i il·luminació](https://support.makeblock.com/hc/en-us/articles/7484587495831-Case-20-Codey-Rocky-dances). No s’incorporen el firmware, la connexió ni el motor d’execució de mBlock; el model físic continua sent propi.

### Crear i editar

Les categories natives són Aspecte, Il·luminació, Acció, Detecció, Control i Operadors. Clica una categoria, arrossega una peça i encaixa-la. La paleta es plega en començar a treballar al llenç per deixar espai a la pila. El menú contextual natiu (botó dret o pulsació llarga) permet duplicar i eliminar; es poden desencaixar i moure piles senceres. «Amplia» obri l’editor a pantalla completa; Esc en permet eixir. El zoom i el desplaçament són natius.

Les pestanyes d’inici, A i B seleccionen el programa que s’edita. El barret corresponent es manté fix quant a tipus d’esdeveniment: el botó es tria amb les pestanyes. Les peces soltes es conserven, però només s’executa la pila connectada al barret. Les ordres antigues situades després d’un «per sempre» es mantenen com a peces soltes, ja que aquesta peça nativa no admet connexió posterior.

El repertori inclou imatge LED de 16 × 8, text/valors, RGB, moviments amb temps, potència independent dels motors, esperes, repeticions, «repeteix fins que», «espera fins que» i «si / si no». La imatge es canvia clicant la seua miniatura. Les lectures són peces ovalades; es poden encaixar en comparacions o paràmetres numèrics. Les comparacions `<`, `>` i `=` i els operadors `i`, `o` i `no` són peces natives. Les comparacions antigues `≤`, `≥` i `≠` es representen amb la peça `no` corresponent. L’antiga lectura directa de nom de color només apareix com a peça de compatibilitat en projectes que ja la tenien; no s’ofereix com a peça nova.

### Execució

«Executa» torna a la posició inicial. «Pas a pas» executa una instrucció lògica i completa la durada d’un moviment o una espera temporal. Una ordre contínua manté els motors actius fins a una altra ordre. «Repeteix fins que» comprova abans de cada volta i només repeteix mentre la condició siga falsa; si la lectura no està disponible, atura el programa amb un missatge. «Espera fins que» comprova repetidament sense bloquejar la interfície. Una condició buida és falsa, «repeteix 0» no entra al cos i un moviment de zero segons no deixa motors actius.

Els projectes antics amb «mentre» es dibuixen com «repeteix fins que no …» conservant la semàntica d’execució antiga. La lectura i el resultat de les condicions i el bloc actiu continuen visibles. Canviar de robot, ocultar la pàgina o editar el programa atura l’execució. El ritme de reproducció canvia el temps de tota la simulació.

El model manté límits de 150 ordres i 8 nivells en cada programa editat, 12 nivells d’expressions, 10.000 instruccions per execució i una durada màxima d’una hora per ordre. El pressupost d’instruccions permet interrompre bucles. Són límits del simulador, no especificacions del robot.

En pantalla ampla, l’escenari i els controls tenen espai fix; el llenç natiu es desplaça. En mòbil els panells s’apilen. L’edició de l’escena i el calibratge continuen sota les lectures.

## Sensors i calibratge

- **Cap endavant:** IR reflectit en escala 0–100. La intensitat augmenta quan s’apropa una superfície; no són centímetres ni un percentatge de distància. El model inclou les vores de l’escenari.
- **Cap al terra:** una única petjada situada davant de Rocky llig grisos i colors. Les lectures corresponents a l’altra orientació es mostren com a no disponibles. Una condició amb una lectura no disponible no és certa.
- **Grisos:** el model usa valors foscos baixos i clars alts (negre 5, blanc 95); la petjada mitjana dona una lectura intermèdia en creuar una vora. Aquest sentit i aquests valors són una convenció del simulador, no un calibratge garantit del robot real.
- **Llum i so:** entrades manuals 0–100; no s’usa càmera ni micròfon.

Per calibrar, situeu el punt blau sobre el fons i premeu «Mesura el fons». Repetiu al centre de la línia. «Aplica el llindar mitjà» actualitza totes les condicions de grisos del programa. Cal una diferència mínima de 10; si la línia és més clara que el fons, cal revisar el sentit de les comparacions.

Fonts de les escales: [API del sensor infraroig/color de Rocky](https://makeblock-micropython-api.readthedocs.io/en/latest/codey%26rocky/rocky/color%26ir%20sensor.html). El fabricant també explica que la intensitat reflectida creix en apropar l’objecte al [llibre d’activitats](https://qiniu.makeblock.com/education-makeblock-com/studentbook.pdf). La resposta geomètrica i les equivalències gràfiques d’aquest simulador són aproximacions pròpies; no reprodueixen els efectes reals dels materials, la llum ni la bateria.

## Pistes, superfícies i exemples

La secció «Pista i sensor» permet carregar recta, corbes o circuit tancat i ajustar l’amplària. L’eina de línia dibuixa traços amb arrossegament; l’eina de superfície pinta una zona de color. Les línies es dibuixen sobre les superfícies. «Lleva element» elimina l’obstacle, la zona o el traç que es toca. La posició inicial i la seua orientació es poden canviar. Amb el teclat: fletxes per moure el cursor i Espai o Retorn per aplicar l’eina.

L’exemple «Segueix la vora de la línia» carrega un circuit i situa el sensor sobre la vora interior. Un «per sempre» consulta el gris: quan és fosc accelera més l’eruga esquerra; quan és clar, la dreta. La ruta no es reprodueix automàticament ni es coneix per endavant: el moviment resulta del programa i de les lectures. Si canviem el llindar, les potències, la pista o el punt inicial pot perdre la línia.

«Atura’t sobre el roig» practica una condició de color. Els exemples d’obstacles usen comparadors i llindars IR numèrics. Els projectes antics amb obstacle sí/no es migren a condicions IR de llindar 60, que és una convenció de compatibilitat, no un llindar físic oficial.

## Guardar i compartir

Es desen automàticament al navegador el programa, la pista, les superfícies, els obstacles, l’orientació del sensor, la posició inicial, les entrades de llum/so i les mesures de calibratge. El camp opcional `workspaceXml` conserva la posició i les peces soltes dels programes d’inici/A/B. Les expressions i els paràmetres connectats es desen també al programa executable; en obrir un projecte antic es construeixen les peces equivalents. «Descarrega el projecte» exporta un JSON que «Obri un projecte» restaura. No és un fitxer de mBlock ni es carrega directament al robot. S’admeten fitxers de fins a 1,5 MB; les estructures, coordenades i mides es validen en obrir-los.

«Reinicia l’escenari» torna el robot a l’inici i conserva la pista; «Neteja la pista» elimina les línies i les superfícies. Els exemples de línia, color i obstacles substitueixen l’escenari per la seua preparació.

## Fitxers i verificació

- `sim/codey-engine.js`: sensors, pistes, col·lisions i execució independent del navegador.
- `sim/codey-native-blocks.js`: definicions Codey, editor natiu, matriu LED i conversió entre peces/XML i el programa executable.
- `sim/vendor/scratch-blocks/`: biblioteca 1.1.202, missatges catalans, recursos i llicència.
- `sim/codey-blocks.js`: noms de tipus compatibles i icones compartides amb SPIKE.
- `sim/codey.js` i `sim/codey.css`: editor, visualització i projectes.
- `_templates/components/codey-workspace.js`: estructura de la nova opció.
- `_scripts/tests/test-codey-simulation.js`: sensors, bucles, erugues i seguiment de tres pistes, inclòs a `node _scripts/test.js`.

Regenera `sim/index.html` i `dist/` amb `node _scripts/build.js`.
