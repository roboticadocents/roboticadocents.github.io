# Kits de pensament computacional desendollat

Quatre activitats originals, una per nivell: maleta-personatges (Educació Infantil),
fabrica-monstres (Primer cicle), correu-pixels (Segon cicle) i xarxa-missatgers
(Tercer cicle). Cada PDF té quatre pàgines A4. Les instruccions de còpies,
preparació, durada i ús són a la fitxa Markdown corresponent de
`_content/activitats/`.

Els PDF són materials manipulatius, diferents de la versió imprimible de la
fitxa docent. Viuen a `_assets/` perquè es publiquen i es puguen descarregar
fins i tot en una compilació sense `--pdf`.

Per regenerar els quatre PDF, les huit vistes de pàgines i els quatre esquemes
panoràmics, executeu `python3 _scripts/generate-unplugged-kits.py` des de l'arrel.
Calen ReportLab, Pillow, `pdftoppm` i les fonts DejaVu Sans de
`/usr/share/fonts/truetype/dejavu/`. El generador incorpora les fonts als PDF i
no descarrega recursos externs. Les il·lustracions i els exemples es dibuixen
amb el mateix generador per mantindre la coherència amb les peces imprimibles.

## Primera activitat renovada: El robot humà

`robot-huma.pdf` conté cinc pàgines: tauler 3 × 3, dotze ordres, fitxes i tres
missions, registre de programa i guia amb solucions. El nivell principal és
Primer cicle; la fitxa docent inclou una adaptació per a Educació Infantil.

Per regenerar només aquest kit i els seus tres esquemes panoràmics:
`python3 _scripts/generate-robot-huma-kit.py`. Té els mateixos requisits que el
generador dels quatre kits anteriors i no els modifica.

## Nou activitats renovades

`python3 _scripts/generate-renewed-activity-kits.py` regenera nou PDF de quatre
pàgines i tres esquemes WebP per activitat. Requereix els mateixos paquets i
fonts que els generadors anteriors. No modifica els altres cinc kits.

| Identificador | Nivell principal | Material del kit |
| --- | --- | --- |
| pixels-binaris | Primer cicle | Codis, graelles, reparació i solucions |
| xarxa-ordenacio | Tercer cicle | Xarxa de quatre canals, nombres, registre i solucions |
| laberint-debugging | Primer cicle | Tauler, vint fletxes, registre i solucions |
| condicionals-moviment | Primer cicle | Sis entrades, zones, registre i solucions |
| criptografia-cesar | Tercer cicle | Roda, taula alternativa, missatges i solucions |
| bucles-coreografia | Primer cicle | Accions, marc de bucle, registre i solucions |
| patrons-simetries | Educació Infantil | Peces, tires, traducció i guia docent |
| descomposicio-receptes | Segon cicle | Accions, sobre, registre i dependències |
| dades-classificacio | Segon cicle | Objectes, cartells, registre i dades resoltes |

Els exemples resolts es comproven en regenerar: xarxa d'ordenació (24
permutacions i 81 casos amb empats), substitucions Cèsar i dependències de
l'enviament. Els nivells i els temps de cada sessió es defineixen a les fitxes
Markdown, amb adaptacions de suport i aprofundiment.
