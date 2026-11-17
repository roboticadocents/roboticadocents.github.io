<!-- check-es:skip -->

# Inventario de traducción al castellano

Estado: Fase 0 · rama `traduccion-es` · 17 de noviembre de 2026.
Fuente de verdad: el contenido catalán de `main`.

## 1. Resumen

| Superficie | Archivos | Volumen | Prioridad |
|---|---:|---:|---|
| Situaciones de aprendizaje | 124 md | 292.000 palabras | P3 |
| Actividades | 30 md | 27.000 palabras | P2 |
| Tutoriales | 36 md | 25.000 palabras | P2 |
| Guías docentes | 4 md | 4.000 palabras | P1 |
| Fichas de robots | 6 md | 2.000 palabras | P1 |
| Documentación interna | 5 md | 31.500 palabras | P4 |
| Interfaz y plantillas | 25 js/html | ~180 cadenas | P0 |
| Simulador | 3 archivos | ~85 líneas visibles | P1 |
| Generadores de imprimibles | 4 py | 1.637 líneas | P2 |
| Tests | 7 archivos | expectativas en catalán | P0 |
| Markdown total | 216 md | ~385.000 palabras | — |

El build y los tests actuales están en verde. Cualquier cambio de texto que afecte al parser o a las expectativas debe ir acompañado de la actualización del código y de la suite.

## 2. Superficies y estrategia

| Superficie | Qué se hace | Cuándo |
|---|---|---|
| `_content/**/*.md` | Traducir cuerpo, front matter, alt, títulos y descripciones. Mantener estructura, código, rutas y cifras. | F2–F4 |
| `_templates/**/*.js` | Traducir cadenas visibles, `aria-label`, títulos y descripciones. | F1 |
| `_js/ui.js` | Traducir el estado del asistente (`Pas N de M`). | F1 |
| `sim/index.html`, `sim/sim.js`, `sim/sim.css` | Traducir interfaz, mensajes, errores y textos de estado. | F1 |
| `_scripts/build.js` | Traducir títulos, etiquetas de catálogo, botones y textos de la página de imprimibles. | F1 |
| `_scripts/lib/semantic-html.js` | Añadir patrones castellanos y traducir los títulos canónicos. | F1 |
| `_scripts/md_to_typst.py` | Añadir patrones castellanos, traducir categorías, grupos y textos de PDF; `lang: "es"`. | F1 |
| `_scripts/generate-*.py` | Traducir los textos de las fichas imprimibles y regenerar assets. | F2 |
| `_scripts/tests/*` | Actualizar expectativas y patrones de contenido a castellano. | F1–F4 |
| `README.md`, `AGENTS.md`, `TODO.md`, `docs/*` | Traducir documentación. | F4 |
| `_assets/activitats/kits/*` | Regenerar los imprimibles afectados. | F2 |
| Rutas y slugs | Traducir y añadir redirecciones. | F1 |
| Metadatos SEO | Traducir títulos, descripciones y `lang`. | F1 |

## 3. Dependencias del generador

### 3.1 `_scripts/lib/semantic-html.js`

- `canonicalSection()` clasifica los `<h2>` por expresiones regulares en catalán y devuelve títulos canónicos.
- `noteTypes` clasifica blockquotes con etiquetas como `situació:`, `materials:`, `evidència:`, `pregunta docent:`, `suport:`, `ampliació:`, `vocabulari:`, `aprenentatges:`.
- `listLabels` convierte etiquetas en negrita: `Evidència:`, `Pregunta docent:`, `Criteri:`, `Revisió:`, `Ampliació:`, `Temps:`.
- `tutorialSections` depende de títulos exactos: `Què aprendrem?`, `Materials i preparació`, `Funcions i controls`, `Pas a pas`, `Comprovació i resolució de problemes`, `Ús i seguretat`, `Fonts i límits`.
- La fase se detecta con `Fase 1..5 · Activem i prediem | Explorem i construïm | Expliquem i registrem | Apliquem i millorem | Comprovem i reflexionem`.
- El asistente genera `Pas N`, `Pas anterior`, `Pas següent`, `Tria un pas`, `Progrés de la seqüència`.

Acción: añadir los patrones castellanos junto a los catalanes durante la transición y traducir los títulos canónicos. No eliminar los patrones catalanes hasta que todo el contenido esté traducido.

### 3.2 `_scripts/md_to_typst.py`

- `CATEGORIES`: Activitats, Tutorials, Guies docents, Fitxes de robots, Situacions d’aprenentatge.
- `WEB_GROUPS`: Pensament computacional, Robòtica educativa, Situacions d’aprenentatge.
- `callout`: `**Evidència|Pregunta docent|Vocabulari:**`.
- Textos fijos: `ROBÒTICA PER A DOCENTS`, `MATERIALS PER A DOCENTS`, `Índex de recursos`, `ROBÒTICA²⁰⁰`.
- `lang: "ca"` en Typst.

Acción: añadir alternativas castellanas, traducir textos fijos y cambiar `lang: "es"`.

### 3.3 Plantillas y páginas

| Archivo | Cadenas catalanas |
|---|---:|
| `_templates/pages/sim-page.js` | 42 |
| `_templates/pages/home-page.js` | 10 |
| `_templates/pages/situations-catalog-page.js` | 7 |
| `_templates/pages/robot-page.js` | 6 |
| `_templates/layout/footer-robots-3d.js` | 6 |
| `_templates/layout/site-header.js` | 5 |
| `_templates/pages/robots-catalog-page.js` | 4 |
| `_templates/pages/redirect-page.js` | 4 |
| `_templates/pages/situation-page.js` | 3 |
| `_templates/pages/detail-page.js` | 3 |
| `_templates/layout/site-footer.js` | 3 |
| `_templates/layout/document.js` | 3 |
| `_templates/components/learning-wizard.js` | 4 |
| `_templates/pages/activities-catalog-page.js` | 1 |
| `_templates/components/*` | 5 |
| `_js/ui.js` | 10 (una visible) |
| `_scripts/build.js` | 20 |

La cifra es el número de líneas con caracteres catalanes; incluye comentarios y textos visibles. En la traducción se revisan solo las cadenas que llegan al usuario.

### 3.4 Simulador

- `sim/index.html`: 42 líneas con catalán.
- `sim/sim.js`: 37 líneas, incluidas las instrucciones y los mensajes de error.
- `sim/sim.css`: 6 líneas, solo comentarios.
- `_templates/pages/sim-page.js`: 42 líneas, incluidas las pestañas, el teclado, el diálogo de emojis y los `aria-label`.

Acción: traducir la interfaz y actualizar `lang="ca"` y `Intl.Segmenter('ca', ...)`.

## 4. Contenido

### Campos del front matter

| Campo | ¿Se traduce? | Nota |
|---|---|---|
| `title` | Sí | |
| `description` | Sí | |
| `challenge` | Sí | |
| `robot` | No | Identificador. |
| `robot_label` | Sí | Nombre visible. |
| `cycle` | No | Clave. |
| `cycle_label` | Sí | Los 4 valores fijos. |
| `subject` | No | Clave. |
| `subject_label` | Sí | Texto libre compuesto. |
| `theme` | No | Clave. |
| `theme_label` | Sí | Texto libre. |
| `duration` | Sí | Traducir palabras, conservar cifras. |
| `level` | Sí | Iniciación, Intermedio, Avanzado. |
| `active` | No | |
| `order` | No | |
| `official_source` | No | URL. |
| `image` | No | Ruta. |
| `icon` | No | |
| `specs` | Sí | Lista visible. |
| `tech_info` | Sí | |
| `official_resources` | Sí | Títulos y descripciones; URLs no. |
| `layout` | No | |

### Situaciones por robot

| Prefijo | Archivos | Palabras | Orden |
|---|---:|---:|---|
| pc | 1 | 1.633 | 1 |
| ce | 15 | 23.945 | 2 |
| tb | 12 | 25.697 | 3 |
| cr | 8 | 27.623 | 4 |
| mb | 22 | 46.973 | 5 |
| cs | 29 | 67.975 | 6 |
| sp | 37 | 98.198 | 7 |

`cr-museo-juegos-programados` tiene 14.746 palabras y se revisa aparte.

### Secciones que el parser reconoce

Las secciones se clasifican por su título, no por una clave estable. Las variantes más frecuentes son:

- `❓ Repte i intenció`, `🌱 Situació i intenció`, `Situació, repte i intenció`
- `🎯 Aprenentatges i vocabulari`, `Aprenentatges i vocabulari`
- `🧰 Materials i preparació`, `Materials i preparació`, `Abans de començar`
- `🧪 Evidències i avaluació`, `Evidències i avaluació`, `📋 Avaluació i evidències`
- `♿ Participació, accessibilitat i seguretat`
- `🔗 Referents i adaptació`, `🔗 Unitat oficial adaptada`
- `📅 Seqüència didàctica`

Traducción propuesta: usar los títulos canónicos de `GLOSARIO-ES.md` y añadir los patrones castellanos al parser. Las variantes libres se traducirán de forma coherente con esas categorías.

## 5. Rutas y slugs

Mapa aplicado:

| Ruta anterior | Ruta actual |
|---|---|
| `/pensament-computacional/` | `/pensamiento-computacional/` |
| `/situacions-aprenentatge/` | `/situaciones-aprendizaje/` |
| `/activitat/<slug>/` | `/actividad/<slug>/` |
| `/situacio/<slug>/` | `/situacion/<slug>/` |
| `/tutorial/<slug>/` | `/tutorial/<slug>/` |
| `/robot/<slug>/` | `/robot/<slug>/` |
| `/guia/<slug>/` | `/guia/<slug>/` |
| `/imprimir/` | `/imprimir/` |
| `/sim/` | `/sim/` |

Se han renombrado 170 archivos de contenido (112 situaciones, 28 actividades, 27 tutoriales y 3 guías). Los slugs de robots no cambian.

El mapa completo está en `_scripts/legacy-content-map.json`. `_scripts/content-redirects.json` conserva los alias antiguos y el build genera:

- Redirecciones desde las rutas antiguas (`/activitat/…`, `/situacio/…`, `/pensament-computacional/…`, `/situacions-aprenentatge/…`).
- Redirecciones desde los slugs antiguos dentro de las rutas nuevas.
- Redirecciones desde los índices de las rutas antiguas.

Los nombres de los assets (`_assets/**`) no se han cambiado para no romper imágenes, PDF y fichas imprimibles.

## 6. Imprimibles

- 202 assets en `_assets/activitats/kits/`.
- 4 generadores:
  - `_scripts/generate-renewed-activity-kits.py` (575 líneas)
  - `_scripts/generate-robot-paper-kits.py` (610 líneas)
  - `_scripts/generate-unplugged-kits.py` (246 líneas)
  - `_scripts/generate-robot-huma-kit.py` (206 líneas)
- 40 WebP y 34 PDF con texto catalán incrustado.
- 124 SVG de fichas sin texto (solo formas).
- Dependencias: `reportlab`, `cairo`, `Pillow`, `pdftoppm`, fuentes DejaVu.
- Acción: traducir cadenas, revisar ajuste de líneas y posiciones, regenerar y comparar visualmente.

Los banners y las ilustraciones de robots y situaciones se han revisado por muestreo: no contienen texto legible. Aun así, se revisan las imágenes nuevas o dudosas antes de publicar.

## 7. Tests que dependen del texto

| Archivo | Dependencia |
|---|---|
| `_scripts/tests/test-markdown-renderer.js` | Títulos canónicos, etiquetas, HTML semántico, pasos y fases. |
| `_scripts/tests/test-tutorial-format.js` | Títulos exactos de las 7 secciones y expresiones de capacidades por robot. |
| `_scripts/tests/test-content-routing.js` | Prefijos, rutas, catálogos y redirecciones. |
| `_scripts/tests/check-static-site.py` | 238 páginas, enlaces y referencias locales. |
| `_scripts/tests/test-build-lock.js` | No depende del idioma. |
| `_scripts/tests/test-section-icons.js` | Iconos y secciones. |
| `_scripts/tests/test-tangible-blocks.js` | Bloques tangibles. |

Estrategia: añadir primero los patrones castellanos, mantener los catalanes durante la transición y actualizar las expectativas por lote. Los tests no deben quedar en rojo entre fases.

## 8. Comprobador `check-es`

Uso:

```sh
node _scripts/qa/check-es.js --changed --scope all
node _scripts/qa/check-es.js --files _content/situacions/ce-primer-viaje.md
node _scripts/qa/check-es.js --changed --scope all --spell
node _scripts/qa/check-es.js --all --scope content --json
```

Comprueba:

- Caracteres y palabras catalanas residuales, apóstrofos y ele geminada.
- `lang="ca"` pendiente.
- Paridad con `main`: encabezados, bloques de código, imágenes, enlaces, tablas, listas y cifras.
- Claves del front matter y campos que no deben cambiar.
- Ratio de longitud.
- Ortografía con `aspell` (opcional).

La lista de excepciones está en `_scripts/qa/whitelist-es.txt`. Solo se añaden nombres propios, topónimos oficiales y términos técnicos justificados.

## 9. Orden de ejecución

1. F0: glosario, guía, inventario, comprobador, línea base. **Hecho.**
2. F1: parser castellano, UI, simulador, SEO, tests, rutas y slugs. **Hecho.**
3. F2: núcleo (portada, catálogos, guías y robots).
4. F3: actividades, tutoriales e imprimibles.
5. F4: situaciones por robot.
6. F5: documentación interna.
7. F6: QA final, PDF y publicación.

## 10. Checklist antes de fusionar un lote

- [ ] `node _scripts/qa/check-es.js --changed --scope all` sin errores.
- [ ] `node _scripts/build.js` sin errores.
- [ ] `node _scripts/test.js` en verde.
- [ ] Capturas de las páginas más densas revisadas.
- [ ] Imprimibles regenerados y revisados si el lote los afecta.
- [ ] Glosario actualizado si aparece un término nuevo.
- [ ] Sin cambios de contenido mezclados con la traducción.
