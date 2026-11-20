# Criterio editorial de las actividades

## Nombres de archivo y ubicación en el sitio

Todas las actividades se guardan en esta carpeta. El prefijo determina dónde se muestran:

| Nombre del archivo | Lista | URL de detalle |
| --- | --- | --- |
| `pc-[slug].md` | `/pensamiento-computacional/` | `/actividad/pc-[slug]/` |
| `tb-[slug].md` | Sección «Actividades» de Tale-Bot, después de los tutoriales | `/actividad/tb-[slug]/` |
| `cr-[slug].md` | Sección «Actividades» de Codey Rocky | `/actividad/cr-[slug]/` |
| `cs-[slug].md` | Sección «Actividades» de Coding Set, después de los tutoriales | `/actividad/cs-[slug]/` |

Copiad `TEMPLATE-ACTIVITAT.md`, poned un nombre con el prefijo correspondiente y cambiad
`active` a `true` cuando esté preparada. Las actividades se muestran según `order`.
El robot se deduce del prefijo: no hace falta declarar `robot`; si se declara, debe ser
`tale-bot` para `tb-` o `coding-set` para `cs-` y `codey-rocky` para `cr-`. Las actividades `pc-` no tienen robot.
Las fichas de los robots muestran un aviso mientras no tengan actividades publicadas.
Todas comparten los metadatos y los temas de la plantilla; adaptad los materiales,
la secuencia y las evidencias al uso del robot cuando corresponda.

## Temas compartidos

Cada actividad tiene un único `topic` principal: la característica del pensamiento
computacional que más destaca en el reto y en las evidencias de aprendizaje.
Una actividad puede trabajar las cuatro características; la etiqueta indica
el énfasis principal, no una exclusión de las otras. No hace falta repartir las actividades
por igual. Los conceptos específicos (depuración, binario, protocolos, comparadores,
etc.) se explican en el texto, sin crear etiquetas nuevas.

| `topic` | Criterio | Actividades |
| --- | --- | --- |
| Descomposición | Dividir una tarea o un mensaje en partes y organizar sus relaciones | Recetas, red de mensajeros |
| Abstracción | Seleccionar atributos relevantes y representar información dejando fuera otros detalles | Maleta, museo, píxeles binarios |
| Patrones | Reconocer repeticiones y aprovecharlas para describir o ejecutar una secuencia | Detectives de patrones, coreografía, correo de píxeles |
| Algoritmos | Formular, seguir, comprobar o corregir un procedimiento | Robot humano, laberinto, monstruos, máquina de decisiones, red de ordenación, César |

La lista se define en `_scripts/lib/activity-topics.js` y el build rechaza
etiquetas distintas, para evitar volver a tener un tema por actividad.

## Portada y soportes visuales

`image` apunta a la portada WebP de `_assets/activitats/portades/` y `image_alt`
explica su contenido. La misma imagen aparece en la tarjeta del catálogo y
al principio de la ficha. No contiene texto ni instrucciones que haya que leer.

La portada simboliza la propuesta con el estilo ilustrado del sitio. Los esquemas
del kit son las representaciones exactas de las reglas, las piezas y los ejemplos:
se conservan en materiales, secuencia y comprobación, después de la portada.

Las portadas generadas y los prompts se documentan en
`_scripts/activity-cover-prompts.json`.

## Fichas de robots para resolver en papel

Las ocho actividades `tb-` y las ocho `cs-` trabajan predicción, escritura,
depuración y refactorización de código. Tale-Bot incorpora también dibujo continuo,
descomposición, abstracción y empuje de cajas con repetición de toda la base. Cada ficha es un A4 con tres ejercicios
individuales, sin contexto narrativo y sin necesidad de robot.

Los enunciados y las soluciones viven en los tres pasos de cada Markdown.
El generador lee los campos **Inicio**, **Código**, **Objetivo**, **Consigna**,
**Respuesta de control** y **Solución docente**; no mantiene una copia del contenido.
Inicio, Código, Objetivo, Respuesta de control y Propuesta se guardan en comentarios
HTML no visibles. El código se serializa allí con letras solo para validarlo:
en los PDF y en el sitio se muestra con teclas redondeadas o piezas con encaje.
Los números van debajo de las piezas; el alumnado dibuja los símbolos en casillas
grandes. La mascota de contorno es decorativa y se puede colorear.
Un guion en Código u Objetivo indica que no hay un valor dado.

Para regenerar las dieciséis PDF individuales, los dos recopilatorios del alumnado y los dos
solucionarios y los esquemas SVG para el sitio, hace falta Python 3, pycairo y PyGObject con librsvg
(`python3-cairo python3-gi python3-gi-cairo gir1.2-rsvg-2.0`):

```sh
python3 _scripts/generate-robot-paper-kits.py
node _scripts/build.js
```

Los PDF se guardan en `_assets/activitats/kits/`, se versionan y se copian al sitio
en cualquier build, también sin `--pdf`. Son distintos de las versiones imprimibles
generales de las guías docentes: las hojas del alumnado no incluyen las respuestas.
El generador comprueba los límites de la cuadrícula y la equivalencia de las soluciones
con el objetivo; en refactorización exige la misma secuencia de órdenes.

En Tale-Bot, los campos internos `Mode`, `Capses`, `Metes` y `Comparacio`
permiten dibujar los nuevos tableros. El simulador del generador comprueba también
los empujes, las colisiones y las posiciones finales de todas las cajas.

Coding Set incorpora funciones y bucles parciales. El campo interno `Funcio`
contiene la definición y `Principal` contiene el programa de referencia. `F` es una
llamada interna, que el generador representa con el icono de llamada. La simulación
expande las llamadas dentro de los bucles y compara todas las posiciones y orientaciones
con la ruta objetivo; no solo la casilla final.

Los iconos fuente editables están en `_assets/activitats/icones/`. El generador
los lee con librsvg para mantener el dibujo vectorial en los PDF y SVG generados.
No los sobrescribe. Consultad el README de esa carpeta antes de modificarlos.

## Codey Rocky: una actividad, tres entornos

Las ocho fichas `cr-` comparten tres ejercicios para papel, simulador y robot.
La fuente única de textos, piezas iniciales, soluciones y escenarios es
`sim/codey-activities.json`. Los Markdown `cr-`, los proyectos JSON y los PDF son
generados: editad la fuente compartida y regeneradlos, sin copiar los ejercicios.

```sh
node _scripts/generate-codey-activities.js
node _scripts/build.js
# Amb el servidor local actiu i Playwright disponible:
node _scripts/render-codey-activity-blocks.js
python3 _scripts/generate-codey-pdfs.py
node _scripts/build.js
node _scripts/test.js
```

El renderizador acepta `--playwright-module /ruta/al/modulo`, `CODEY_CHROMIUM`
y `CODEY_SIM_URL` si hace falta indicar el navegador o el servidor. El generador de PDF
necesita reportlab, pypdf y cairosvg. Usa las fuentes corporativas locales y las
piezas del mismo editor nativo.

Cada ficha tiene dos páginas A4. El recopilatorio contiene 16 páginas y el solucionario docente
separado, ocho. Los originales se guardan en `output/pdf/` y las copias web en
`_assets/activitats/kits/`. Hay espacio para predecir, registrar el resultado y
anotar la dificultad, el cambio probado y la duda. Las fichas de construcción
incorporan un espacio para dibujar el programa.

Los enlaces al simulador cargan el programa inicial y el escenario del mismo
ejercicio; no cargan la solución. Recargar el mismo enlace conserva el trabajo
guardado. En el robot las piezas se reconstruyen en mBlock: los JSON del simulador no
se cargan en el dispositivo. Los valores físicos se miden y se calibran.
