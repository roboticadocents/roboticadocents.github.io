# Criteri editorial de les activitats

## Temes compartits

Cada activitat té un únic `topic` principal, triat segons el seu objectiu
d'aprenentatge. Els conceptes més específics (depuració, binari, protocols,
comparadors, etc.) s'expliquen en el text, sense crear etiquetes noves.

| `topic` | Criteri | Activitats |
| --- | --- | --- |
| Algorismes | Descriure, ordenar, executar o reparar instruccions | Robot humà, laberint, monstres, receptes |
| Patrons i repeticions | Reconéixer unitats repetides o executar bucles | Detectius de patrons, coreografia |
| Lògica i decisions | Justificar una tria segons pistes o condicions | Maleta, màquina de decisions |
| Dades i representació | Descriure, classificar o transformar informació | Píxels binaris, correu de píxels, museu, Cèsar |
| Xarxes i processos | Coordinar comparacions o recorreguts entre nodes | Xarxa d'ordenació, xarxa de missatgers |

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
