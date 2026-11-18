# Presentacions MARP

La font editable de la sessió 1 és `it4-sessio-1.md`. Conté 33 diapositives i el guió del formador en comentaris HTML. El contingut és una adaptació del PDF del company `output/pdf/sessio-1-presentacio.pdf` (commit `2b4711f`), que es conserva íntegre.

S’han recuperat únicament el tema `robotica`, la variant `robotica-taller` i les fonts de la branca `copia-local-abans-sincronitzar`. No s’ha restaurat el generador antic ni les altres presentacions. Els exemples visuals provenen de les fitxes actuals de `_assets/activitats/kits/`; les fonts de contingut estan indicades al guió del formador.

## Editar i exportar

Editeu directament el Markdown. El tema conserva Sora per als títols, Plus Jakarta Sans per al text, el logotip oficial i els fons clars. No cal el fitxer privat de text de l’autor del PDF.

Amb Node.js, Marp CLI i Chrome/Chromium instal·lats:

```sh
node _scripts/export-session-marp.js it4-sessio-1
```

El script cerca Marp CLI a `node_modules/.bin/marp`, a la instal·lació temporal disponible en aquest entorn o al `PATH`. Es pot indicar una altra instal·lació amb `MARP_BIN` i el navegador amb `CHROME_PATH`.

Genera:

- `_assets/sessions/marp/it4-sessio-1.html`: presentació per al navegador.
- `_assets/sessions/presentacio-it4-sessio-1.pdf`: versió per projectar o distribuir.

L’exportació només llig el Markdown; no el sobreescriu. Cal conservar les carpetes d’imatges i fonts per visualitzar l’HTML. El PDF incorpora les fonts i les imatges. Els enllaços a recursos del portal necessiten connexió.

## Recorregut

Introducció i organització → Coding Express (presentació breu) → Tale-Bot (presentació, capacitats i activitats) → pausa → Coding Set (presentació, capacitats i activitats) → aplicació curricular → posada en comú i tancament. El grup treballa per parelles, sense estacions. Coding Express es presenta amb imatges; no hi ha pràctica amb aquest kit.

Les respostes es mostren després de les consignes. L’activitat de les capses i la combinació de funcions i bucles poden usar-se com a comprovacions guiades segons el ritme del grup. Les fitxes no s’han de completar totes.

## Quadern i referències de pàgina

El quadern complet és `output/pdf/sessio-1-handout-revisat.pdf`: 9 pàgines de guia i 16 fitxes originals, sense retirar cap exercici. L’índex, els números impresos i les referències del MARP comparteixen la mateixa paginació (25 pàgines en total).

La font de la guia és `_scripts/generate-session-handout.py`. Requereix Python amb `reportlab`, `pypdf` i `svglib`. Les fitxes es prenen dels PDF originals `tb-fitxes-paper.pdf` i `cs-fitxes-paper.pdf`; no s’hi inclouen els solucionaris.

Per actualitzar el conjunt, executeu en aquest ordre:

```sh
python _scripts/generate-session-handout.py
node _scripts/export-session-marp.js it4-sessio-1
```

El primer script genera el quadern i el mapa `_assets/sessions/handout/it4-sessio-1-pages.json`, i actualitza els textos de pàgina dels elements `data-handout` del Markdown. El segon exporta les diapositives. Per això, les referències de pàgina no s’han de corregir a mà: editeu la guia i regenereu els dos documents.

Els atributs `data-exercise` només identifiquen l’exemple projectat. No assignen exercicis obligatoris per al taller ni per al treball entre sessions.

El handout anterior `output/pdf/sessio-1-handout-activitats-completes.pdf` es conserva sense modificacions. El generador escriu exclusivament la nova versió `sessio-1-handout-revisat.pdf`.
