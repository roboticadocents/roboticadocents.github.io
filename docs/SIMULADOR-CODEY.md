# Simulador de Codey Rocky

Accés: `/sim/?robot=codey-rocky`, des de la pestanya del simulador o des de la fitxa del robot.

## Editor de peces natives

Codey usa **Scratch Blocks 1.1.202**, distribuït localment amb la llicència Apache-2.0. La biblioteca dibuixa les peces, els encaixos, els bucles en C, els barrets, els camps, els menús i l’arrossegament. S’han llevat les targetes HTML que imitaven peces. Les definicions específiques de Codey segueixen els tipus d’ordres de mBlock amb text traduït al català.

Referències de Makeblock: [peces d’Aspecte i imatges LED](https://support.makeblock.com/hc/en-us/articles/7462619391895-Case-2-DIY-facial-expressions), [Acció, Control i Detecció](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles) i [exemple de moviment i il·luminació](https://support.makeblock.com/hc/en-us/articles/7484587495831-Case-20-Codey-Rocky-dances). No s’incorporen el firmware, la connexió ni el motor d’execució de mBlock; el model físic continua sent propi.

### Crear i editar

Les categories natives són Aspecte, Il·luminació, Acció, Detecció, Control i Operadors. Clica una categoria, arrossega una peça i encaixa-la. La paleta es plega en començar a treballar al llenç per deixar espai a la pila. El menú contextual natiu (botó dret o pulsació llarga) permet duplicar i eliminar; es poden desencaixar i moure piles senceres. «Amplia» obri l’editor a pantalla completa; Esc en permet eixir. El zoom i el desplaçament són natius.

Les pestanyes d’inici, A, B i C seleccionen el programa que s’edita. El barret corresponent es manté fix quant a tipus d’esdeveniment: el botó es tria amb les pestanyes. Les peces soltes es conserven, però només s’executa la pila connectada al barret. Les ordres antigues situades després d’un «per sempre» es mantenen com a peces soltes, ja que aquesta peça nativa no admet connexió posterior.

El repertori inclou imatge LED de 16 × 8, text/valors, RGB, moviments amb temps, potència independent dels motors, esperes, repeticions, «repeteix fins que», «espera fins que» i les dues peces originals «si» i «si / si no». La imatge es canvia clicant la seua miniatura. Les lectures són peces ovalades; es poden encaixar en comparacions o paràmetres numèrics. Les comparacions `<`, `>` i `=` i els operadors `i`, `o` i `no` són peces natives. Les comparacions antigues `≤`, `≥` i `≠` es representen amb la peça `no` corresponent. L’antiga lectura directa de nom de color només apareix com a peça de compatibilitat en projectes que ja la tenien; no s’ofereix com a peça nova.

### Execució

«Executa» torna a la posició inicial. «Pas a pas» executa una instrucció lògica i completa la durada d’un moviment o una espera temporal. Una ordre contínua manté els motors actius fins a una altra ordre. «Repeteix fins que» comprova abans de cada volta i només repeteix mentre la condició siga falsa; les lectures es tornen a consultar en cada volta. «Espera fins que» comprova repetidament sense bloquejar la interfície. Una condició buida és falsa, «repeteix 0» no entra al cos i un moviment amb durada zero o negativa no modifica els motors, com el handler original de Codey.

Els projectes antics amb «mentre» es dibuixen com «repeteix fins que no …» conservant la semàntica d’execució antiga. La lectura i el resultat de les condicions i el bloc actiu continuen visibles. Canviar de robot, ocultar la pàgina o editar el programa atura l’execució. El ritme de reproducció canvia el temps de tota la simulació.

El model manté límits de 150 ordres i 8 nivells en cada programa editat, 12 nivells d’expressions, 10.000 instruccions per execució i una durada màxima d’una hora per ordre. El pressupost d’instruccions permet interrompre bucles. Són límits del simulador, no especificacions del robot.

En pantalla ampla, l’escenari i els controls tenen espai fix; el llenç natiu es desplaça. En mòbil els panells s’apilen. L’edició de l’escena i el calibratge continuen sota les lectures.

## Criteri de fidelitat del subconjunt

El subconjunt ha de ser el mateix que el de mBlock: cada peça oferida conserva la funció, els camps, els tipus d’entrada, els desplegables, els valors inicials i la semàntica de la peça original. La biblioteca Scratch Blocks és el dibuixant, però **la referència funcional és mBlock**, no una variant didàctica dels seus blocs. El model físic aporta lectures i moviment; no ha de canviar les regles de control del programa.

Referències directes fixades el 19 de novembre de 2026:

- [Catàleg públic de mBlock web](https://extservice.mblock.cc/api/publish/ext/list?ap=mblockweb&v=beta&t=device&s=codey&pageNumber=1&pageSize=100): dispositiu oficial `codey`, versió `0.4.4`.
- [Extensió oficial Codey 0.4.4](https://storage-eu.mblock.cc/ext-eu/cn/extlist-prod/extract/1564792710907433000/0cc08863-931a-468b-88cb-0d6110e83cda/codey/index.js): definicions, traducció catalana, menús, valors inicials i handlers.
- [Motor de mBlock web 5.6.1](https://ide.mblock.cc/js/chunk/5179.1651a8ac.js): implementació real d’Operadors i Control. [Definicions del nucli](https://ide.mblock.cc/js/chunk/4465.a3e9b79f.js): tipus i camps dels blocs estàndard.

| Peces del simulador | Peça o opcode original |
| --- | --- |
| Moviments amb potència i temps | `meos_move_forward_with_time`, `meos_move_backward_with_time`, `meos_move_left_with_time`, `meos_move_right_with_time` |
| Moviment continu, amb quatre direccions | `meos_move` |
| Potència de cada roda i aturada | `meos_move_with_motors`, `meos_move_stop` |
| Imatge 16 × 8 i text/valor | `meos_show_led_matrix_face`, `meos_show_led_matrix` |
| LED RGB | `meos_show_led` |
| Apaga el LED RGB i imatge temporitzada | `meos_turn_off_led`, `meos_show_led_matrix_face_with_time` |
| Llum, so, IR i grisos | `meos_detect_lightness`, `meos_detect_volume`, `meos_rocky_detect_ir_reflection`, `meos_rocky_detect_grey` |
| Obstacle al davant, booleà | `meos_rocky_event_obstacles_ahead` |
| Condició de color, amb huit opcions | `meos_event_is_color` |
| Inici i botons A/B/C | `meos_when_board_launch`, `meos_when_button_press` |
| Espera, repeticions i condicionals | `control_wait`, `control_repeat`, `control_forever`, `control_if`, `control_if_else`, `control_wait_until`, `control_repeat_until` |
| Comparacions i booleans | `operator_lt`, `operator_gt`, `operator_equals`, `operator_and`, `operator_or`, `operator_not` |

S’han ajustat els colors de categoria i els textos al català oficial de l’extensió. Els valors inicials de les peces noves són 50% per a moviment i rodes, 1 s, text `hello`, RGB `#ff0000`, color vermell i la imatge inicial original. Els exemples i projectes existents conserven els seus valors. Els botons A/B/C i les pestanyes són controls del simulador; el llenç encara edita una pila per esdeveniment. Això no equival a haver validat totes les possibles piles concurrents de mBlock.

### Auditoria directa de mBlock

Els 5.160 casos de comparacions, booleans i repeticions s’han tornat a executar **contra les classes reals d’Operadors i Control de mBlock web 5.6.1**, no només contra Scratch VM. A més, 16 casos de moviment es contrasten executant els handlers originals de Codey 0.4.4 amb un dispositiu de prova que registra les ordres: inclouen les quatre direccions contínues i moviments de -1, 0 i 1 segons. Amb temps no positiu el handler no envia cap ordre: un moviment previ continua actiu.

Les auditories opcionals no necessiten xarxa durant l’execució. En un directori de referència, desa l’extensió com `codey.js`, el [runtime estàndard regenerator-runtime 0.14.1](https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz) com `runtime.js`, [common.cd4114e2.js](https://ide.mblock.cc/js/common.cd4114e2.js) com `common.js` i el chunk de motor indicat abans com `vm.js`. Executa:

```sh
node _scripts/tests/check-codey-mblock-reference.js /directori/referencia
node _scripts/tests/check-codey-mblock-vm-reference.js /directori/referencia
```

SHA-256 dels originals contrastats:

- `codey.js`: `0cdb9f08dde7833fd0b627d8d72c720fe981fec0149916ce36fb76c3e4ca38e7`
- `common.js`: `7eb82cf0fc55aa0db5764d0e9c8ecb712dfb2e6967b44510623ff7f7d921f083`
- `vm.js`: `307d831512c6e3cbbea3b446a37aa137ec83e1e1c15d81fcbd293b1874aceff6`

Aquests resultats delimiten allò comprovat; una peça nova o un comportament que encara no s’ha contrastat no s’ha de donar per compatible només perquè s’assemble a Scratch.

## Compatibilitat comprovada i límits

La referència de les condicions és la [documentació d’operadors de Makeblock](https://support.makeblock.com/hc/en-us/articles/20074793036567-Operators). Per als casos de text, conversions i control usem com a referència explícita el codi de Scratch VM: [Cast](https://github.com/scratchfoundation/scratch-vm/blob/develop/src/util/cast.js), [operadors](https://github.com/scratchfoundation/scratch-vm/blob/develop/src/blocks/scratch3_operators.js) i [control](https://github.com/scratchfoundation/scratch-vm/blob/develop/src/blocks/scratch3_control.js). És una comprovació del subconjunt implementat; no una certificació d’identitat amb totes les versions o modes de mBlock.

- `<`, `>` i `=` comparen numèricament quan els dos operands són nombres o text numèric: `50 = "50"` és cert i `"10" < "2"` és fals. Si algun operand és text no numèric, comparen text sense distingir majúscules. El text buit o només d’espais no equival al nombre zero.
- `i`, `o` i `no` segueixen la conversió booleana de Scratch: `""`, `"0"` i `"false"` (sense distingir majúscules) són falsos. Una entrada hexagonal buida és falsa; un operand de comparació buit és text buit. La paleta segueix els tipus declarats pel nucli de mBlock: camps numèrics per a `<` i `>`, i camps de text per a `=`.
- `si / si no` tria una branca. `repeteix fins que` comprova abans del cos, de manera que pot executar-lo zero vegades; `espera fins que` continua quan la condició és certa. Les lectures es tornen a consultar en cada comprovació.
- `repeteix` arredoneix a l’enter més pròxim i no executa el cos amb zero o nombres negatius. Una espera negativa es tracta com zero. Un `per sempre` buit continua actiu fins que l’aturem, amb el límit d’instruccions del simulador.

Abast del model i de la comprovació:

- La interfície continua avisant quan una lectura no es pot calcular per l’orientació. A l’expressió entra un nombre `0` o un booleà `false`, com els valors de reserva dels handlers de Codey quan no obtenen lectura. No s’introdueix una tercera mena de condició ni una aturada especial de «repeteix fins que». Aquest valor de reserva no pretén reproduir una mesura física en aquella orientació.
- Temps, velocitat, girs, col·lisions, intensitat IR i grisos són un model didàctic. Els límits d’ordres, profunditat, temps i potència són locals. El ritme i «Pas a pas» no reprodueixen la planificació exacta de Scratch VM ni el firmware.
- Cada pestanya té una sola pila d’inici/A/B/C. No s’admeten múltiples barrets per esdeveniment; prémer un botó amb la seua tasca activa no en crea una altra. La matriu, el text i RGB mostren un resultat simulat.
- Només s’ofereixen les peces implementades. Els projectes JSON del simulador no són projectes `.mblock`; no s’ha verificat la generació de Python ni el mode de càrrega al robot.

Les proves de regressió cobreixen les regles anteriors, incloent els casos frontera de comparacions, booleans, repeticions i bucles buits. Cal distingir aquests resultats de les mesures físiques i del comportament del programa carregat al dispositiu.

### Repetir l’auditoria

El 19 de novembre de 2026, l’auditoria diferencial ha contrastat 5.160 casos amb els fitxers originals de Scratch VM: comparacions i combinacions booleanes de nombres, text i booleans, i comptes de repetició. Aquesta prova és independent del motor propi. No executa mBlock ni el firmware de Codey.

Descarrega `src/util/cast.js` i `src/blocks/scratch3_control.js` del repositori oficial de Scratch VM, desa’ls en un directori i executa:

```sh
node _scripts/tests/check-codey-scratch-reference.js /directori/amb/referencies
```

Hashes SHA-256 dels fitxers contrastats:

- `cast.js`: `699054fad3522fc3f7181148985d2727fec882620bd8a88be399cd50825c146d`
- `scratch3_control.js`: `b6806a366ed5c08b0f3e9b3ec083e2a1c861e9e8902c3cc79240d0e4cd83f19c`

La suite habitual conserva casos de regressió sense necessitat de connexió ni d’aquests fitxers externs.

## Sensors i calibratge

- **Cap endavant:** IR reflectit en escala 0–100. La intensitat augmenta quan s’apropa una superfície; no són centímetres ni un percentatge de distància. El model inclou les vores de l’escenari.
- **Cap al terra:** una única petjada situada davant de Rocky llig grisos i colors. Les lectures corresponents a l’altra orientació es mostren com a no disponibles. Per executar peces, una lectura numèrica no disponible usa `0` i la detecció de color usa `false`; la interfície manté l’avís d’orientació.
- **Grisos:** el model usa valors foscos baixos i clars alts (negre 5, blanc 95); la petjada mitjana dona una lectura intermèdia en creuar una vora. Aquest sentit i aquests valors són una convenció del simulador, no un calibratge garantit del robot real.
- **Llum i so:** entrades manuals 0–100; no s’usa càmera ni micròfon.

Per calibrar, situeu el punt blau sobre el fons i premeu «Mesura el fons». Repetiu al centre de la línia. «Aplica el llindar mitjà» actualitza totes les condicions de grisos del programa. Cal una diferència mínima de 10; si la línia és més clara que el fons, cal revisar el sentit de les comparacions.

Fonts de les escales: [API del sensor infraroig/color de Rocky](https://makeblock-micropython-api.readthedocs.io/en/latest/codey%26rocky/rocky/color%26ir%20sensor.html). El fabricant també explica que la intensitat reflectida creix en apropar l’objecte al [llibre d’activitats](https://qiniu.makeblock.com/education-makeblock-com/studentbook.pdf). La resposta geomètrica i les equivalències gràfiques d’aquest simulador són aproximacions pròpies; no reprodueixen els efectes reals dels materials, la llum ni la bateria.

## Pistes, superfícies i exemples

La secció «Pista i sensor» permet carregar recta, corbes o circuit tancat i ajustar l’amplària. L’eina de línia dibuixa traços amb arrossegament; l’eina de superfície pinta una zona de color. Les línies es dibuixen sobre les superfícies. «Lleva element» elimina l’obstacle, la zona o el traç que es toca. La posició inicial i la seua orientació es poden canviar. Amb el teclat: fletxes per moure el cursor i Espai o Retorn per aplicar l’eina.

L’exemple «Segueix la vora de la línia» carrega un circuit i situa el sensor sobre la vora interior. Un «per sempre» consulta el gris: quan és fosc accelera més l’eruga esquerra; quan és clar, la dreta. La ruta no es reprodueix automàticament ni es coneix per endavant: el moviment resulta del programa i de les lectures. Si canviem el llindar, les potències, la pista o el punt inicial pot perdre la línia.

«Atura’t sobre el roig» practica una condició de color. «Atura’t davant d’un obstacle» usa el booleà oficial «hi ha obstacles al davant?» dins d’«espera fins que». Makeblock delega la detecció a `rocky.color_ir_sensor.is_obstacle_ahead()`. El simulador considera cert un IR frontal superior a 60. És un llindar del model. «Obstacles amb llindar IR» conserva el comparador numèric per practicar el calibratge. Els blocs de gir per angle consten a l’extensió però tenen la llista de plataformes buida en la versió 0.4.4. Els exemples de gir usen els blocs temporitzats disponibles. Els projectes antics amb obstacle sí/no es migren a condicions IR de llindar 60, que és una convenció de compatibilitat, no un llindar físic oficial.

## Guardar i compartir

Es desen automàticament al navegador el programa, la pista, les superfícies, els obstacles, l’orientació del sensor, la posició inicial, les entrades de llum/so i les mesures de calibratge. El camp opcional `workspaceXml` conserva la posició i les peces soltes dels programes d’inici/A/B/C. Les expressions i els paràmetres connectats es desen també al programa executable; en obrir un projecte antic es construeixen les peces equivalents. «Descarrega el projecte» exporta un JSON que «Obri un projecte» restaura. No és un fitxer de mBlock ni es carrega directament al robot. S’admeten fitxers de fins a 1,5 MB; les estructures, coordenades i mides es validen en obrir-los.

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

## Activitats compartides amb paper i robot

La secció Activitats permet triar nou fitxes de tres exercicis. Els enllaços
`?robot=codey-rocky&activity=cr-…&exercise=1` obrin les peces inicials i l’escenari
corresponents. La consigna, el PDF i la preparació amb el robot provenen de
`sim/codey-activities.json`. No són tres activitats independents.

Carregar un exercici substitueix el programa i l’escenari, com carregar un
exemple. Les edicions es desen; recarregar el mateix enllaç no torna a posar el
programa inicial. Les solucions són per al solucionari docent i les proves;
Carrega exercici només usa `starter`. Els projectes continuen sent JSON del
simulador, no fitxers de càrrega a mBlock.
