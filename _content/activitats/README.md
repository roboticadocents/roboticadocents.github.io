# Criteri editorial de les activitats

## Noms de fitxer i ubicació al web

Totes les activitats es guarden en aquesta carpeta. El prefix determina on es mostren:

| Nom del fitxer | Llista | URL de detall |
| --- | --- | --- |
| `pc-[slug].md` | `/pensament-computacional/` | `/activitat/pc-[slug]/` |
| `tb-[slug].md` | Secció «Activitats» de Tale-Bot, després dels tutorials | `/activitat/tb-[slug]/` |
| `cr-[slug].md` | Secció «Activitats» de Codey Rocky | `/activitat/cr-[slug]/` |
| `cs-[slug].md` | Secció «Activitats» de Coding Set, després dels tutorials | `/activitat/cs-[slug]/` |

Copieu `TEMPLATE-ACTIVITAT.md`, poseu un nom amb el prefix corresponent i canvieu
`active` a `true` quan estiga preparada. Les activitats es mostren segons `order`.
El robot es dedueix del prefix: no cal declarar `robot`; si es declara, ha de ser
`tale-bot` per a `tb-` o `coding-set` per a `cs-` i `codey-rocky` per a `cr-`. Les activitats `pc-` no tenen robot.
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

Les huit activitats `tb-` i les huit `cs-` treballen predicció, escriptura,
depuració i refactorització de codi. Tale-Bot incorpora també dibuix continu,
descomposició, abstracció i espenta de capses amb repetició de tota la base. Cada fitxa és un A4 amb tres exercicis
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

Per regenerar els setze PDF individuals, els dos reculls de l’alumnat i els dos
solucionaris i els esquemes SVG per al web, cal Python 3, pycairo i PyGObject amb librsvg
(`python3-cairo python3-gi python3-gi-cairo gir1.2-rsvg-2.0`):

```sh
python3 _scripts/generate-robot-paper-kits.py
node _scripts/build.js
```

Els PDF es guarden en `_assets/activitats/kits/`, es versionen i es copien al web
en qualsevol build, també sense `--pdf`. Són diferents de les versions imprimibles
generals de les guies docents: els fulls de l’alumnat no inclouen les respostes.
El generador comprova els límits de la quadrícula i l’equivalència de les solucions
amb l’objectiu; en refactorització exigeix la mateixa seqüència d’ordres.

En Tale-Bot, els camps interns `Mode`, `Capses`, `Metes` i `Comparacio`
permeten dibuixar els nous taulers. El simulador del generador comprova també
les espentes, les col·lisions i les posicions finals de totes les capses.

Coding Set incorpora funcions i bucles parcials. El camp intern `Funcio`
conté la definició i `Principal` conté el programa de referència. `F` és una
crida interna, que el generador representa amb la icona de crida. La simulació
expandeix les crides dins dels bucles i compara totes les posicions i orientacions
amb la ruta objectiu; no només la casella final.

Les icones font editables estan en `_assets/activitats/icones/`. El generador
les llig amb librsvg per mantindre el dibuix vectorial en els PDF i SVG generats.
No les sobreescriu. Consulteu el README d’eixa carpeta abans de modificar-les.

## Codey Rocky: una activitat, tres entorns

Les nou fitxes `cr-` comparteixen tres exercicis per a paper, simulador i robot.
La font única de textos, peces inicials, solucions i escenaris és
`sim/codey-activities.json`. Els Markdown `cr-`, els projectes JSON i els PDF són
generats: editeu la font compartida i regenereu-los, sense copiar els exercicis.

```sh
node _scripts/generate-codey-activities.js
node _scripts/build.js
# Amb el servidor local actiu i Playwright disponible:
node _scripts/render-codey-activity-blocks.js
python3 _scripts/generate-codey-pdfs.py
node _scripts/build.js
node _scripts/test.js
```

El renderitzador accepta `--playwright-module /ruta/al/modul`, `CODEY_CHROMIUM`
i `CODEY_SIM_URL` si cal indicar el navegador o el servidor. El generador de PDF
necessita reportlab, pypdf i cairosvg. Usa les fonts corporatives locals i les
peces del mateix editor natiu.

Cada fitxa té dues pàgines A4. El recull conté 18 pàgines i el solucionari docent
separat, nou. Els originals es guarden a `output/pdf/` i les còpies web a
`_assets/activitats/kits/`. Hi ha espai per predir, registrar el resultat i
anotar la dificultat, el canvi provat i el dubte. Les fitxes de construcció
incorporen un espai per dibuixar el programa.

Els enllaços al simulador carreguen el programa inicial i l’escenari del mateix
exercici; no carreguen la solució. Recarregar el mateix enllaç conserva el treball
desat. Al robot les peces es reconstrueixen a mBlock: els JSON del simulador no
es carreguen al dispositiu. Els valors físics es mesuren i es calibren.
