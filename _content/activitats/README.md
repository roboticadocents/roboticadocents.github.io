# Criteri editorial de les activitats

## Temes compartits

Cada activitat té un únic `topic` principal: la característica del pensament
computacional que més destaca en el repte i en les evidències d'aprenentatge.
Una activitat pot treballar les quatre característiques; l'etiqueta indica
l'èmfasi principal, no una exclusió de les altres. No cal repartir les activitats
per igual. Els conceptes específics (depuració, binari, protocols, comparadors,
etc.) s'expliquen en el text, sense crear etiquetes noves.

| `topic` | Criteri | Activitats |
| --- | --- | --- |
| Descomposició | Dividir una tasca o un missatge en parts i organitzar-ne les relacions | Receptes, xarxa de missatgers |
| Abstracció | Seleccionar atributs rellevants i representar informació deixant fora altres detalls | Maleta, museu, píxels binaris |
| Patrons | Reconéixer repeticions i aprofitar-les per descriure o executar una seqüència | Detectius de patrons, coreografia, correu de píxels |
| Algorismes | Formular, seguir, comprovar o corregir un procediment | Robot humà, laberint, monstres, màquina de decisions, xarxa d'ordenació, Cèsar |

La llista es defineix a `_scripts/lib/activity-topics.js` i el build rebutja
etiquetes diferents, per evitar tornar a tenir un tema per activitat.

## Portada i suports visuals

`image` apunta a la portada WebP de `_assets/activitats/portades/` i `image_alt`
n'explica el contingut. La mateixa imatge apareix a la targeta del catàleg i
al començament de la fitxa. No conté text ni instruccions que calga llegir.

La portada simbolitza la proposta amb l'estil il·lustrat de la web. Els esquemes
del kit són les representacions exactes de les regles, les peces i els exemples:
es conserven en materials, seqüència i comprovació, després de la portada.

Les portades generades i els prompts es documenten a
`_scripts/activity-cover-prompts.json`.
