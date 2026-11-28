# Simulador de SPIKE Prime

Accés a `/sim/?robot=spike`. El banc de proves s’obri amb el bloc d’inici. El selector ofereix cinc projectes amb programa inicial i guies de muntatge: indicador de torns, pinça, sínia, carretó i classificador.

## Banc de proves

Les vistes 2D i 3D comparteixen l’estat del programa. Les escenes són esquemàtiques: el carretó es mou per un corredor recte i la manipulació de peces és aproximada. Tots els projectes i el banc de proves comparteixen el visor Three.js amb OrbitControls. El visor requereix WebGL 2 i permet girar, desplaçar i apropar la càmera. El lliscador de distància funciona en ambdues vistes. En 2D, també es pot arrossegar l’objecte.

El motor es connecta al port A per defecte i admet qualsevol port de l’A a l’F. El sensor de color es pot connectar als ports C o B. El sensor de força és al B i el de distància al D. Els controls del hub permeten provar la matriu, el so i els botons.

La velocitat del motor és aproximada. El model converteix el 100% en 180°/s i simula el gir de l’eix sense càrrega, inèrcia ni engranatges. La distància de l’objecte es pot ajustar entre 5 i 200 cm. Amb el sensor lliure, la simulació mostra «Sense objecte» i usa el màxim del rang per a les comparacions de distància.

## Edició i execució

Afig blocs al programa amb l’editor. «Executa» reinicia el motor a 0° i comença el programa. «Atura» manté la posició actual. «Pas a pas» completa el bloc actiu i permet seguir les lectures. Una espera de sensor fa una comprovació a cada pas. El selector global de ritme ajusta la velocitat de la simulació.

El programa i les entrades de cada projecte es desen al navegador. Pots exportar-los des de «Guarda o obri un projecte» com a JSON del simulador i reobrir-los des del mateix menú. La posició del motor torna a 0° en obrir un projecte. El simulador admet els fitxers JSON de la versió anterior i els obri sobre el banc de proves. Si el navegador tenia un programa anterior, el menú ofereix una còpia per descarregar.

Les guies de muntatge continuen disponibles a `/sim/muntatges-spike/` i la guia de la barrera a `/sim/muntatge-barrera/`.

## Implementació i comprovacions

- `sim/spike-engine.js` calcula el moviment, les condicions i els bucles, i valida els blocs importats.
- `sim/spike.js` gestiona l’editor, la vista 2D i els projectes.
- `sim/spike-view.js` gestiona el visor Three.js i la càmera.
- `sim/spike-models.js` defineix els mecanismes esquemàtics. La sínia carrega el seu model LDraw des de `sim/wheel-view.js`.
- `_templates/components/spike-workspace.js` defineix el banc de proves i els controls.

Regenera el lloc amb `node _scripts/build.js` i executa les comprovacions amb `node _scripts/test.js`.
