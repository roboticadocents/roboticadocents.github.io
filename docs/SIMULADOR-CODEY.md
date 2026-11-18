# Simulador de Codey Rocky

Accés: `/sim/?robot=codey-rocky`, des de la pestanya del simulador o des de la fitxa del robot.

## Programa i execució

La paleta permet crear programes per a l’inici i els botons A/B. «Afegir ací» apareix al final de cada branca o cos de bucle. El menú ⋯ de cada bloc permet inserir abans o després, pujar, baixar, duplicar, moure i llevar. Només es mostra un punt intermedi quan el seleccionem; en moure un bloc apareixen tots els destins. «Duplica» copia el bloc i tot el contingut amb identificadors nous. «Mou…» permet triar una posició de destí, també en un altre programa A/B, conservant els valors i el contingut. No es pot moure un bloc dins de si mateix; es pot cancel·lar amb el botó o amb Esc. Les operacions respecten el límit de 150 blocs i 8 nivells. Hi ha cares editables de 16 × 8, text lliscant, RGB, lectura de sensors, moviments amb temps, potència independent de les dues erugues, esperes, repeticions, «mentre» i «si / si no».

«Executa» comença de nou des de la posició inicial. «Pas a pas» executa una instrucció lògica i aplica tota la durada d’un moviment temporitzat o espera. Una ordre contínua de les erugues manté els motors actius fins a una altra ordre; es pot observar en execució o avançar el temps amb un bloc d’espera. «Mentre» torna a comprovar el sensor abans de cada volta i continua després del bucle quan la condició és falsa.

El ritme de reproducció controla la velocitat de tota la simulació, no altera els llindars ni les lectures de la pista. El bloc actiu, la lectura i el resultat de l’última condició són visibles. Canviar de robot, ocultar la pàgina o editar el programa atura l’execució.

La paleta i els blocs comparteixen icones i colors: blau per al moviment, violeta per a pantalla i llum, turquesa per als sensors i taronja per al control. Els esdeveniments es marquen en groc. El text continua identificant cada acció i el bloc en execució conserva el contorn blau.

En pantalla ampla, l’escenari i els controls d’execució es mantenen visibles mentre es desplaça el programa. Els blocs es despleguen per famílies; només se n’obri una alhora. L’edició de l’escenari i el calibratge es despleguen sota les lectures, i les opcions de projecte són a la capçalera de l’editor. En mòbil, els panells s’apilen i els controls d’execució queden fixats a la vora inferior mentre es recorre l’editor.

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

Es desen automàticament al navegador el programa, la pista, les superfícies, els obstacles, l’orientació del sensor, la posició inicial, les entrades de llum/so i les mesures de calibratge. «Descarrega el projecte» exporta un JSON que «Obri un projecte» restaura. No és un fitxer de mBlock ni es carrega directament al robot. S’admeten fitxers de fins a 1,5 MB; les estructures, coordenades i mides es validen en obrir-los.

«Reinicia l’escenari» torna el robot a l’inici i conserva la pista; «Neteja la pista» elimina les línies i les superfícies. Els exemples de línia, color i obstacles substitueixen l’escenari per la seua preparació.

## Fitxers i verificació

- `sim/codey-engine.js`: sensors, pistes, col·lisions i execució independent del navegador.
- `sim/codey-blocks.js`: definicions visuals compartides entre la paleta i el programa.
- `sim/codey.js` i `sim/codey.css`: editor, visualització i projectes.
- `_templates/components/codey-workspace.js`: estructura de la nova opció.
- `_scripts/tests/test-codey-simulation.js`: sensors, bucles, erugues i seguiment de tres pistes, inclòs a `node _scripts/test.js`.

Regenera `sim/index.html` i `dist/` amb `node _scripts/build.js`.
