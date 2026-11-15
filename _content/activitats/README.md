# Criteri editorial de les activitats

## Noms de fitxer i ubicació al web

Totes les activitats es guarden en aquesta carpeta. El prefix determina on es mostren:

| Nom del fitxer | Llista | URL de detall |
| --- | --- | --- |
| `pc-[slug].md` | `/pensament-computacional/` | `/activitat/pc-[slug]/` |
| `tb-[slug].md` | Secció «Activitats» de Tale-Bot, després dels tutorials | `/activitat/tb-[slug]/` |
| `cs-[slug].md` | Secció «Activitats» de Coding Set, després dels tutorials | `/activitat/cs-[slug]/` |

Copieu `TEMPLATE-ACTIVITAT.md`, poseu un nom amb el prefix corresponent i canvieu
`active` a `true` quan estiga preparada. Les activitats es mostren segons `order`.
El robot es dedueix del prefix: no cal declarar `robot`; si es declara, ha de ser
`tale-bot` per a `tb-` o `coding-set` per a `cs-`. Les activitats `pc-` no tenen robot.
Les fitxes dels robots mostren un avís mentre no tinguen activitats publicades.
Totes comparteixen les metadades i els temes de la plantilla; adapteu els materials,
la seqüència i les evidències a l’ús del robot quan corresponga.

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

## Fitxes de robots per a resoldre en paper

Les quatre activitats `tb-` i les quatre `cs-` treballen predicció, escriptura,
depuració i refactorització de codi. Cada fitxa és un A4 amb tres exercicis
individuals, sense context narratiu i sense necessitat de robot.

Els enunciats i les solucions viuen en els tres passos de cada Markdown.
El generador llig els camps **Inici**, **Codi**, **Objectiu**, **Consigna**,
**Resposta de control** i **Solució docent**; no manté una còpia del contingut.
Inici, Codi, Objectiu, Resposta de control i Proposta es guarden en comentaris
HTML no visibles. El codi s’hi serialitza amb lletres només per a validar-lo:
als PDF i al web es mostra amb tecles arrodonides o peces amb encaix.
Els nombres van davall de les peces; l’alumnat dibuixa els símbols en caselles
grans. La mascota de contorn és decorativa i es pot colorejar.
Un guió en Codi o Objectiu indica que no hi ha un valor donat.

Per regenerar els huit PDF individuals, els dos reculls de l’alumnat i els dos
solucionaris i els esquemes SVG per al web, cal Python 3 i pycairo (`python3-cairo`):

```sh
python3 _scripts/generate-robot-paper-kits.py
node _scripts/build.js
```

Els PDF es guarden en `_assets/activitats/kits/`, es versionen i es copien al web
en qualsevol build, també sense `--pdf`. Són diferents de les versions imprimibles
generals de les guies docents: els fulls de l’alumnat no inclouen les respostes.
El generador comprova els límits de la quadrícula i l’equivalència de les solucions
amb l’objectiu; en refactorització exigeix la mateixa seqüència d’ordres.
