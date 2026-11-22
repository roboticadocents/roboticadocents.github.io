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

## Sessió 2 · Codey Rocky

La font editable és `it4-sessio-2.md`, amb 34 diapositives. La sessió tracta només Codey Rocky: retorn
del treball autònom, presentació de Codey i Rocky, botons i eixides, repeticions,
lectures i comparacions, consulta contínua, límits i operadors lògics, color, IR
i calibratge de línia. El tram final transfereix les proves a una situació
d’aprenentatge i al disseny docent.

Les consignes i comprovacions apareixen separades. El ritme és flexible: no hi
ha una durada total imposada ni una llista de fitxes obligatòries. El seguiment
de línia és una ampliació segons el nivell i el temps. La presentació manté la
mateixa manera de treballar en paper, simulador i robot; el guió del formador
explica la transferència a mBlock i els límits del model físic.

Els programes visuals provenen de `_assets/activitats/codey/`, renderitzats amb
el mateix editor natiu del simulador. `it4-sessio-2-materials/` conté còpies locals
dels programes usats, amb les icones auxiliars incorporades per evitar
dependències del servidor local. També inclou dos fragments ampliats del bucle
IR original, sense redibuixar-ne les peces; la fitxa conserva el programa complet. Les fonts locals i oficials estan
en les notes de cada diapositiva. No s’ha modificat la presentació de sessió 1.

Les referències de pàgina corresponen a `cr-fitxes-tres-entorns.pdf`, que té
18 pàgines: dues per activitat; l’exercici 1 és a la primera i els exercicis 2 i
3, a la segona. No remeten al quadern de la primera sessió ni al solucionari.
Si canvia aquesta estructura del recull, cal revisar les referències.

```sh
node _scripts/export-session-marp.js it4-sessio-2
node _scripts/build.js
```

Genera `it4-sessio-2.html` i `../presentacio-it4-sessio-2.pdf`. La pàgina no
enllaçada `/presencial/` ofereix la presentació, les fitxes i el solucionari
separat de la sessió 2, conservant els materials de la primera sessió.

La sessió 2 incorpora el pas de les ordres discretes al control de motors: peces temporitzades i contínues, espera, aturada i calibratge de distància i gir. La nova fitxa «Del pas al control dels motors» s’afegeix al final del recull (p. 17–18); les referències anteriors es mantenen.

La posada en marxa s’adapta del manual oficial «Code for Fun with Codey Rocky» (introducció i p. impreses 1–4), contrastat amb el suport de Makeblock per a connexió, Live/Upload i firmware. La guia ampliada és `_content/tutorials/cr-primeres-passes.md`, enllaçada des de la presentació i `/presencial/`. Tres captures reals del manual s’incorporen a la presentació i a la guia: interfície (p. 2), connexió (p. 3) i càrrega (p. 4). Estan atribuïdes i identificades com una edició anterior de mBlock; les pàgines corresponen a la numeració impresa.

## Fil de la sessió 2

La presentació segueix cinc etapes: preparar i carregar; activar respostes; controlar el moviment; respondre als sensors; aplicar-ho a l’aula. Un mapa inicial mostra què comprovem en cada etapa i el peu indica l’etapa actual. Els reptes del fil principal estan numerats de l’1 al 8, incloses les tres proves de moviment.

Després del tancament i els recursos hi ha tres ampliacions opcionals: A1 (negació i límits), A2 (i/o) i A3 (seguiment de línia). Les fitxes mantenen tots els exercicis i la mateixa paginació; l’ordre de projecció és una selecció didàctica i no obliga a completar el recull de manera lineal. La pausa s’ajusta a l’horari real en un canvi d’etapa.
