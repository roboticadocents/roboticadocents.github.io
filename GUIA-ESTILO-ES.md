<!-- check-es:skip -->

# Guía de estilo · Traducción al castellano

Documento de trabajo de la rama `traduccion-es`. Fuente de verdad: el contenido catalán de `main`.
Última revisión: 17 de noviembre de 2026.

## 1. Variedad y registro

- Castellano de España, registro docente claro y concreto.
- Destinatarios: profesorado de Educación Infantil y Primaria, sin experiencia previa en robótica.
- Se traduce el sentido, no la forma. La frase debe sonar escrita originalmente en castellano, no traducida.
- Se conserva el tono del original: directo, práctico, sin grandilocuencia y sin infantilizar al profesorado.
- No se añaden explicaciones, ejemplos ni advertencias que no estén en el original.
- No se suavizan ni se endurecen las consignas de seguridad.

## 2. Tratamiento: vosotros

El texto se dirige al equipo docente en segunda persona del plural.

| Catalán | Castellano |
|---|---|
| `Prepareu` | `Preparad` |
| `Comproveu` | `Comprobad` |
| `Afegiu` | `Añadid` |
| `Feu` | `Haced` |
| `Engegueu` | `Encended` |
| `Manteniu` | `Mantened` |
| `Reserveu-la` | `Reservadla` |
| `No poseu` | `No pongáis` |
| `No deduïu` | `No deduzcáis` |
| `us recomanem` | `os recomendamos` |
| `el vostre alumnat` | `vuestro alumnado` |

Reglas de pronombres:

- Con `os`, el imperativo pierde la `-d`: `assegureu-vos` → `aseguraos`, `centreu-vos` → `centraos`, `apropeu-vos` → `acercaos`.
- Con `lo`, `la`, `los`, `las`, la `-d` se mantiene: `poseu-lo` → `ponedlo`, `marqueu-la` → `marcadla`, `feu-ho` → `hacedlo`.
- Los imperativos negativos van en subjuntivo: `no toqueu` → `no toquéis`, `no deixeu` → `no dejéis`.
- `ne` suele desaparecer o resolverse según el contexto: `canvieu-ne una part` → `cambiad una parte`, `trieu-ne una` → `elegid una`.

Ejemplo real (`_content/situacions/ce-primer-viatge.md`):

> La lliçó LEGO està dissenyada per a grups de fins a sis. Prepareu vies suficients […] Afegiu la figura de passatger […] Feu una prova del tren i comproveu que la superfície siga plana […]

> La lección LEGO está diseñada para grupos de hasta seis personas. Preparad vías suficientes […] Añadid la figura del pasajero […] Haced una prueba del tren y comprobad que la superficie sea plana […]

### Cuándo no se usa vosotros

- Cuando el sujeto es el alumnado, una pareja, un equipo o «quien»: se mantiene la tercera persona o el impersonal.
  - `Cada parella tria un lloc` → `Cada pareja elige un lugar`.
  - `Qui no vulga compartir` → `Quien no quiera compartir`.
- En preguntas y consignas dirigidas al alumnado, no se añade un sujeto que el original no tiene.
- En la interfaz, se usa infinitivo o forma neutral (ver apartado 3).

## 3. Voz de la interfaz

La interfaz se dirige a una persona que navega, no al equipo docente. Para no mezclar `tú` y `vosotros`, se usa infinitivo o etiqueta neutral:

| Catalán | Castellano |
|---|---|
| `Pas 1 de 25` | `Paso 1 de 25` |
| `Pas anterior` | `Paso anterior` |
| `Pas següent` | `Paso siguiente` |
| `Tria un pas` | `Elegir un paso` |
| `Obrir pas 3` | `Abrir paso 3` |
| `Torna a les activitats` | `Volver a las actividades` |
| `Veure els 6 robots` | `Ver los 6 robots` |
| `Tots els robots` | `Todos los robots` |

- Los `aria-label`, `title`, `alt` y mensajes de estado se traducen con la misma voz.
- Los botones no llevan punto final; las frases completas sí.
- No se traducen claves, identificadores, clases CSS, rutas ni atributos `data-*`.

## 4. Léxico

- El glosario manda: no se inventan sinónimos para un término ya fijado.
- Los nombres de producto se mantienen: Coding Express, Tale-Bot Pro, Matatalab, MatataBot, Coding Set, Codey Rocky, SPIKE, micro:bit, MakeCode, mBlock, Python, LEGO.
- `maó` (pieza LEGO) es `ladrillo`; `bloc` (programación) es `bloque`. No se intercambian.
- `targeta` es `tarjeta`; `fitxa` es `ficha`; `graella` es `cuadrícula`; `casella` es `casilla`.
- `taula` física es `mesa`; una tabla de datos es `tabla`.
- `eixida` y `sortida` son `salida`; `entrada` es `entrada`.
- `suport` físico es `soporte`; el apoyo pedagógico es `apoyo`.
- `retorn` en evaluación es `retorno` o `comentarios`; `retroalimentació` es `retroalimentación`.
- `oratge` es `tiempo atmosférico` o `meteorología`, según el contexto.
- `desendollat` en pensamiento computacional es `desconectado`; en un dispositivo, `desenchufado` o `sin conexión`.

## 5. Tipografía y ortografía

- Se aplican las normas de la RAE y la ortografía del español de España.
- Acentos, tildes y `ñ` obligatorios. Nunca se dejan formas catalanas por comodidad.
- Comillas angulares para las citas: «texto». Dentro de una cita, comillas dobles: «dijo “esto”».
- Raya para incisos: —texto—. Guion para rangos: 20–30, y para palabras compuestas.
- Puntos suspensivos: tres, sin espacio antes.
- `solo`, `este`, `esta` sin tilde; `más`, `tú`, `sí`, `qué`, `cómo`, `dónde`, `cuándo`, `cuánto` con tilde cuando corresponda.
- Mayúsculas: asignaturas y áreas en minúscula (`matemáticas`, `ciencias`); instituciones y nombres propios en mayúscula.
- Marca: `Robótica²⁰⁰` y `Robótica para docentes`. El logotipo gráfico no cambia.
- Números: coma decimal (`3,5`), espacio fino para miles cuando haga falta, rangos con guion (`20–30`), horas `17:00`.
- Porcentajes: `50 %` (con espacio). Grados: `45°` o `45 grados`, según el contexto.
- Unidades: `30 min`, `2 m`, `5 kg`, `3 s`; no se traducen los símbolos.
- Se conservan los emojis y su posición.

## 6. Estructura y fidelidad

- Se conservan los encabezados, listas, tablas, bloques de código, enlaces, imágenes, emojis y claves del front matter.
- El código ejecutable (`makecode`, Python y JavaScript) no se traduce. En los diagramas textuales (`mblock`, `spikeapp`, `talebot`, `coding-set`) y el pseudocódigo didáctico (`blocks`, `pseudocode`, `text`) sí se traducen las instrucciones. Se mantienen las órdenes, parámetros, puertos, agrupaciones y correspondencias entre mensajes; los nombres didácticos de variables y funciones deben coincidir con sus referencias en la explicación. El generador debe reconocer la sintaxis castellana y conservar las formas y colores de los bloques.
- Las rutas de imágenes y archivos no se traducen, salvo que formen parte del cambio de slugs acordado.
- Los enlaces externos y las fuentes oficiales se mantienen.
- Se conservan cifras, tiempos, recuentos, edades y duraciones.
- Si una traducción obliga a condensar una diapositiva o una ficha, se documenta el cambio y se revisa visualmente.
- Las correcciones de contenido van en un commit separado, nunca mezcladas con la traducción.

## 7. Inclusividad

- Se prefiere `alumnado`, `profesorado`, `equipo`, `grupo`, `quien` y formas colectivas.
- No se abusa de `los y las` ni de barras: en prosa, `el alumnado`; para roles, `el pasajero o la pasajera` cuando sea necesario.
- En listas y tablas compactas se admite `pasajero/a` si ya se usa en el original.
- No se cambia el género de personajes, ejemplos ni roles del original sin necesidad.

## 8. Procedimiento de trabajo

1. `git pull` y comprobar la rama `traduccion-es`.
2. Traducir un lote pequeño y homogéneo; no mezclar contenido y código.
3. Ejecutar `node _scripts/qa/check-es.js --changed --scope all`.
4. Ejecutar `node _scripts/build.js` y `node _scripts/test.js`.
5. Revisar visualmente las páginas más densas y los imprimibles afectados.
6. Revisión humana del lote; correcciones.
7. Commit solo cuando se pida expresamente, con un mensaje que identifique el lote.

## 9. Decisiones pendientes de validar

- Topónimos: exónimo castellano (`Valencia`, `Alicante`, `Elche`, `Játiva`) o forma oficial valenciana (`València`, `Alacant`, `Elx`, `Xàtiva`).
- `títere` o `marioneta` para `titella`.
- `feedback`: `retroalimentación` en prosa; se mantiene `feedback` solo en títulos oficiales o citas.
- `array`/`matriz`/`lista` según el contexto de programación.
- Tratamiento de `criatura` y `xiquet/a` según la etapa.
