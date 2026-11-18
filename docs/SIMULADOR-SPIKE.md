# Simulador de SPIKE Prime: barrera automàtica

Accés: `/sim/?robot=spike`, quarta pestanya del simulador i enllaç des de la fitxa de SPIKE.

## Muntatge de referència

Hub fix, motor angular al port A i sensor de distància al port D. El braç està unit directament a l’eix: sense engranatges, amb 0° com a referència tancada i 90° com a posició oberta. El hub no es desplaça. És un esquema didàctic, no unes instruccions oficials de construcció.

El motor va gradualment a un angle entre 0° i 90°, amb velocitat de l’1 al 100%. El model converteix el 100% en 180°/s: és una elecció de simulació, no la velocitat garantida del motor real. No es calculen càrrega, inèrcia, col·lisions ni parell.

La distància és una entrada manual entre 5 i 200 cm. Activar l’objecte o moure el lliscador simula una superfície davant del sensor. Desactivar-lo mostra «Sense objecte». En aquest model, no detectar l’objecte representa zona lliure i satisfà els comparadors `>` i `>=`; no satisfà els altres. No es presenta una distància numèrica inventada quan no hi ha objecte.

Les especificacions de LEGO indiquen un interval de mesura total de 50–2000 mm per al [sensor de distància](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt64c2b9534cf10f68/5f8801b8bc43790f5c4389ea/techspecs_technicdistancesensor.pdf?locale=en-us). El [motor angular mitjà](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt692436dd1e8fa71c/5f8801d5c8a27c1d9614c27e/techspecs_technicmediumangularmotor.pdf?locale=en-us) incorpora lectura de posició. En el muntatge físic cal comprovar el zero, el sentit de gir, la transmissió i les lectures. Els límits 0–90° corresponen a aquesta barrera, no a la capacitat general del motor.

## Exemples

- **Barrera amb detecció:** espera una distància menor de 30 cm, obri a 90°, espera una distància major de 40 cm (o zona lliure), espera un segon i tanca a 0°. Repeteix. Els llindars diferents permeten investigar què passa entre 30 i 40 cm sense encadenar obertures i tancaments.
- **Obri, espera i tanca:** seqüència de motor a 90°, espera de dos segons i motor a 0°.
- **Decideix amb «si / si no»:** en un bucle, obri si la lectura és menor de 30 cm i tanca en cas contrari. Permet comparar el comportament amb el primer exemple.
- **Programa nou:** editor buit.

Es poden crear moviments a un angle amb velocitat, esperes, esperes fins a una condició, condicionals, repeticions, «mentre» i «per sempre». Les condicions llegeixen el sensor en cada comprovació. L’espera condicional no bloqueja la interfície.

## Edició i execució

Les famílies de blocs són desplegables. «Afegir ací» selecciona el destí. El menú ⋯ permet inserir abans o després, pujar/baixar, duplicar, moure i llevar. La duplicació copia tot el contingut amb identificadors nous. En moure, es mostren els punts de destí i es desactiven els que són dins del mateix bloc. Esc cancel·la el moviment. Màxim 150 blocs i 8 nivells.

«Executa» reinicia la barrera a 0° i comença el programa. «Atura» congela el motor en l’angle actual. «Reinicia» retorna a 0° conservant el programa i les entrades. «Pas a pas» executa un bloc i completa els moviments o esperes temporals d’aquell pas; una espera de sensor només fa una comprovació i cal tornar a prémer per continuar. Canviar de robot, ocultar la pàgina o editar el programa atura l’execució. El selector global de ritme canvia el temps de tota la simulació.

La condició i el bloc actiu es mostren durant l’execució. En pantalla ampla, l’escena i els controls queden visibles mentre es desplaça el programa. En mòbil els panells s’apilen.

## Projectes

El navegador desa el programa i les entrades de l’escenari a `robotica-spike-prime-v1`. La posició momentània del motor no es desa: un projecte obert comença a 0°. La descàrrega genera `projecte-spike-barrera.json`; només s’importen projectes d’aquest model, fins a 1,5 MB, amb tipus de blocs i valors validats. No és un fitxer de l’app SPIKE ni es pot enviar al hub.

## Implementació i comprovacions

- `sim/spike-engine.js`: motor, condicions, bucles, exemples i validació; independent del navegador.
- `sim/spike.js`: editor, escena SVG i persistència.
- `sim/spike.css`: disposició i estil del mecanisme; comparteix la base visual de l’editor Codey.
- `_templates/components/spike-workspace.js`: escena, connexions i controls.
- `_scripts/tests/test-spike-simulation.js`: cicle amb llindars, moviment gradual, aturada, pas a pas, condicions, bucles i validació de projectes; inclòs a `node _scripts/test.js`.

Regenera el lloc amb `node _scripts/build.js`.
