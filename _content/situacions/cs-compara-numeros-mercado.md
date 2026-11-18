---
active: true
title: "Dos paradas, una ruta de números"
description: "En un mapa compartido del mercado, dos equipos eligen cantidades, programan un único MatataBot y comparan los valores con pruebas de ruta."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "matematiques"
subject_label: "Matemáticas y tecnología"
theme: "horta-valenciana"
theme_label: "Feria y mercado de la huerta"
duration: "4 sesiones de 50 minutos"
challenge: "¿Cómo podemos programar MatataBot hasta dos cantidades diferentes y justificar cuál es mayor, menor o igual?"
official_source: "https://matatalab.com/en/node/92"
---

![MatataBot y la torre reales del Coding Set junto a una cuadrícula de mercado con dos zonas de tarjetas de número todavía por completar.](../../_assets/situacions/cs-compara-nombres-mercat.webp)

_Las tarjetas de la imagen son espacios en blanco: el profesorado coloca en ellas los números exactos. MatataBot no lee ni elige las tarjetas._

## Situación, reto e intención

La clase organiza una feria de mercado con dos paradas. Cada parada tiene tarjetas con números del 1 al 10, y cada equipo elige una cantidad por ronda. Con un único MatataBot compartido, los grupos programan por turnos el trayecto hasta las tarjetas que han elegido. Cuando el robot llega, una persona registra el número y retira manualmente la tarjeta; al final de cada ronda, las dos cantidades se comparan y el equipo con el valor mayor obtiene un punto.

La propuesta traslada a la dotación Coding Set la actividad pública *Compare Numbers*, que está diseñada para Matatalab Lite y prevé dos robots, dos cuadrículas de 6 × 6 y movimientos simultáneos. Aquí se utiliza una sola cuadrícula de 6 × 6 dividida en dos zonas contiguas y un robot que continúa desde la última posición, como indica la fuente. Los movimientos son secuenciales; la pareja de equipos elige los números antes de empezar la ronda y se alterna qué equipo programa primero. La puntuación, los turnos secuenciales y las tarjetas son una adaptación local, no una función del robot.

**Pregunta guía:** ¿cómo podemos decidir qué número es mayor si, además de comparar las cantidades, tenemos que planificar y comprobar el recorrido?

## Aprendizajes y vocabulario

- Relacionar una cantidad de objetos con su numeral del 1 al 10.
- Comparar dos números con los signos o las expresiones **mayor que**, **menor que** e **igual a**.
- Leer una cuadrícula, identificar la posición actual del robot, la orientación y la tarjeta de destino.
- Descomponer un trayecto en avances y giros tangibles y ejecutarlo con el Coding Set.
- Registrar los números utilizados, predecir la ruta y revisar una instrucción a partir del resultado observado.

**Vocabulario clave:** cantidad, numeral, mayor, menor, igual, fila, columna, casilla, punto de partida, destino, ruta, orientación, avance, giro, secuencia y depuración.

## Materiales y preparación

- Coding Set: MatataBot, torre de control, tablero y bloques de movimiento reales disponibles en el centro.
- Cuadrícula de **6 × 6** casillas de 10 × 10 cm. Divididla en dos zonas contiguas de 3 × 6 y reservad una casilla compartida de inicio en el borde central.
- Veinte tarjetas planas: dos juegos de los numerales 1–10, una copia por parada. Cada valor se escribe una sola vez en cada zona; dejad las demás casillas libres.
- Fichas de cantidad con objetos dibujados o puntos para representar el numeral; las cantidades las comprueba el alumnado, no el robot.
- Hoja de registro con **ronda**, **equipo que empieza**, **número elegido**, **posición y orientación**, **secuencia prevista**, **resultado**, **comparación** y **punto**.
- [Actividad oficial *Compare Numbers*](https://matatalab.com/en/node/92), el [PDF oficial de tarjetas numéricas](https://fast.matatalab.com/cdn/ff/8lLszxkXCVu7f45VhjRXlhDQT9c_-vL28HkD7_JeU78/1595380448/public/2020-07/Number%20Cards.pdf) y [soporte de Matatalab](https://matatalab.com/en/product-support) para comprobar las casillas físicas.

Antes de la primera prueba, comprobad que cada zona contiene los numerales 1–10 una sola vez y que las fichas de puntos corresponden a cada numeral. Situad el robot en la casilla compartida y marcad la orientación. Haced una prueba corta para asegurar que cada casilla de la cuadrícula corresponde a un avance del MatataBot; registrad desviaciones en lugar de redimensionar el mapa.

## Secuencia didáctica

### 1. De la cantidad al numeral (50 min)

#### Fase 1 · Activamos y predecimos

Mostrad cinco piezas de juego y la tarjeta con el numeral 5, como hace la demostración oficial. Preguntad qué correspondencia hay entre las piezas y el número escrito. Después presentad dos grupos de objetos con cantidades diferentes y pedid predicciones: ¿qué grupo tiene más?, ¿qué grupo tiene menos?, y ¿qué habría que comprobar si parecen iguales?

#### Fase 2 · Exploramos y construimos

En parejas, repartid tarjetas del 1 al 10 y una colección de fichas. Construid las cantidades correspondientes y colocad cada numeral junto a su conjunto. A continuación, comparad dos valores: primero emparejando objetos uno a uno y después observando qué conjunto deja más sin pareja.

#### Fase 3 · Explicamos y registramos

Completad una línea de registro con numeral, cantidad y comparación. Introducid oralmente los tres casos: **mayor que**, **menor que** e **igual a**; asociadlos a los signos `>`, `<` y `=` solo después de haber explicado su sentido. Una persona dice la comparación con palabras y otra comprueba los objetos.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad dos tarjetas entre parejas y repetid la comparación sin mirar el registro del otro equipo. Si hay desacuerdo, contad de nuevo o emparejad las piezas una a una; no decidáis por el color, el tamaño de la ilustración o la posición de las tarjetas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tres ejemplos de correspondencia numeral-cantidad y una comparación razonada. **Pregunta de cierre:** ¿qué prueba te ha ayudado más a saber que un número era mayor?

### 2. Leemos el mapa y preparamos el trayecto (50 min)

#### Fase 1 · Activamos y predecimos

Mostrad la cuadrícula de 6 × 6 con dos paradas de mercado, una azul y una naranja. Identificad las filas, las columnas, la casilla común de inicio y la orientación del MatataBot. Elegid un numeral de cada parada y predecid cuántas casillas y giros harán falta para llegar.

#### Fase 2 · Exploramos y construimos

Situad dos juegos de los numerales 1–10, uno por zona, y mantened las demás casillas libres. El robot empieza en el borde entre las paradas. Cada equipo señala su tarjeta elegida y planifica el trayecto desde la posición real actual. Traducid los avances y giros a los bloques físicos; los números son destinos elegidos por el alumnado, no códigos que la torre o el robot lean.

#### Fase 3 · Explicamos y registramos

Antes de ejecutar, la persona programadora lee la secuencia y la observadora la recorre con el dedo. Anotad la posición y la orientación iniciales, el número de casillas y cada giro. Comprobad también si el programa continúa desde el último destino o si alguien ha devuelto el robot al inicio por error.

![El MatataBot y la torre del Coding Set junto a una ruta ortogonal entre la casilla actual y una tarjeta de destino en la cuadrícula compartida.](../../_assets/situacions/sa-cs-compara-nombres-ruta-v1.webp)

_La ruta de casillas es una representación para planificar las órdenes; una persona selecciona el destino y comprueba cuándo se llega._

#### Fase 4 · Aplicamos y mejoramos

Haced una prueba breve entre dos casillas antes de iniciar la partida. Si el movimiento real no coincide con la casilla prevista, comprobad alineación, punto de partida y giro, y cambiad una sola variable. No iniciéis la ronda hasta que el equipo pueda explicar la secuencia con el mapa.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa con las dos zonas, inicio/orientación y una secuencia prevista anotada. **Pregunta de cierre:** ¿por qué es importante planificar desde donde se ha quedado el robot?

### 3. Jugamos cinco rondas con un robot compartido (50 min)

#### Fase 1 · Activamos y predecimos

Organizad dos equipos cooperativos y elegid quién empieza primero en la ronda 1. Cada equipo selecciona en secreto un numeral todavía disponible de su zona. Antes de mover el robot, las dos personas registradoras anotan la predicción de mayor, menor o igual; así la ruta no revela la respuesta antes de compararla.

#### Fase 2 · Exploramos y construimos

El equipo que empieza programa MatataBot desde la posición actual hasta la tarjeta elegida. Al llegar, una persona comprueba el numeral y retira la tarjeta manualmente. El robot se queda en la casilla de destino. A continuación, el otro equipo programa desde esta nueva posición hasta su propio numeral; también se queda allí y retira la tarjeta solo después de verificar la llegada. En la ronda siguiente, empieza el otro equipo.

#### Fase 3 · Explicamos y registramos

Comparad los dos numerales con las tarjetas de cantidad y escribid `>`, `<` o `=` con la lectura verbal correspondiente. El equipo con el valor mayor obtiene un punto; si los valores son iguales, marcad el empate y ningún equipo suma. Esta regla de empate es propia de la versión local. Anotad también si las dos rutas han llegado al destino previsto.

#### Fase 4 · Aplicamos y mejoramos

Completad hasta cinco rondas o hasta que se acabe el tiempo. Si el robot no llega a un destino, conservad la tarjeta, registrad la primera diferencia y haced una única corrección guiada antes de cerrar el turno; el número no se compara hasta que la posición quede verificada. Si se corrige el programa, mantened tanto la primera predicción como la versión revisada.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** cinco comparaciones posibles con las tarjetas elegidas, puntos, empates y posiciones verificadas. **Pregunta de cierre:** ¿habéis cambiado alguna predicción matemática después de comprobar la cantidad, o el error estaba solo en la ruta?

### 4. Revisamos estrategias y ampliamos el reto (50 min)

#### Fase 1 · Activamos y predecimos

Revisad las hojas de las rondas e identificad en cuáles el cambio de posición del robot ha hecho más larga la ruta siguiente. Predecid si limitar el número de piezas de movimiento podría ayudar a planificar mejor, tal como sugiere la extensión oficial.

#### Fase 2 · Exploramos y construimos

Elegid una ruta nueva con un límite acordado de piezas, por ejemplo seis bloques de movimiento más los giros disponibles. El equipo puede cambiar el numeral elegido antes de codificar, pero no mover la tarjeta después de empezar. Si no existe una ruta dentro del límite, aumentadlo y registrad qué restricción impedía llegar.

#### Fase 3 · Explicamos y registramos

Comparad una secuencia inicial y otra con límite de piezas: número de avances, giros y bloques totales. Distanciad la decisión matemática de la de programación: el número mayor no depende de cuántos movimientos hacen falta para llegar a él.

#### Fase 4 · Aplicamos y mejoramos

Cada equipo propone un cambio en la disposición de tarjetas que mantenga los dos conjuntos del 1 al 10, pero ofrezca una ruta diferente desde la última posición. El otro equipo comprueba que todos los números continúan apareciendo una vez por zona y resuelve una ronda de prueba; corregid la leyenda o las casillas si el mapa no permite interpretar el reto.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia final:** mapa revisado, secuencia sometida a una restricción, comparación numérica y registro de depuración. **Pregunta de cierre:** ¿qué parte de la ronda depende de las matemáticas y qué parte de la programación?

## Evidencias y evaluación

Recoged la correspondencia de cantidades y numerales, los mapas, los programas, el registro de cinco rondas y la revisión de la ruta limitada. Observad si el alumnado: identifica números del 1 al 10; usa mayor/menor/igual con justificación; marca la posición inicial y la orientación actuales; ejecuta movimientos y giros disponibles; verifica manualmente la llegada antes de comparar; y separa un error de ruta de un error de comparación. El marcador solo estructura el juego; la rapidez no es un criterio de evaluación.

## Participación, accesibilidad y seguridad

Ofreced tarjetas con numerales grandes, contraste y cantidades dibujadas, además de una cuadrícula táctil o de papel para la simulación. Preparad una ruta más corta o un mapa sin giros adicionales, sin cambiar la pregunta matemática. El alumnado puede elegir roles de programador/a, verificador/a de tarjetas, predictor/a, lector/a de cantidades o registrador/a. Permitid respuesta oral, señalada o escrita. No hacen falta alimentos reales: las tarjetas son ficticias y no implican consumo; mantened las manos y las fichas fuera del recorrido del robot.

## Referentes y adaptación

- Matatalab, [Compare Numbers](https://matatalab.com/en/node/92): actividad oficial para Matatalab Lite con dos mapas de 6 × 6, dos robots en modo de codificación, números del 1 al 10, selección de un valor por grupo, una puntuación para el número mayor, retirada de tarjetas utilizadas y robots que permanecen en el destino entre turnos. La fuente describe 10 minutos de introducción, 25 de juego y 10 de retorno/extensión, y sugiere limitar las piezas de movimiento.
- Matatalab, [Number Cards](https://fast.matatalab.com/cdn/ff/8lLszxkXCVu7f45VhjRXlhDQT9c_-vL28HkD7_JeU78/1595380448/public/2020-07/Number%20Cards.pdf) y [soporte oficial](https://matatalab.com/en/product-support): recursos para las tarjetas y dimensiones del mapa.

La propuesta convierte los dos mapas en una cuadrícula compartida con dos zonas, alterna qué equipo programa primero, usa un solo robot y hace los movimientos secuenciales. Mantiene la selección única por zona, la comparación de números, la retirada manual después de verificar la llegada y el hecho de continuar desde la última posición; las reglas de empate, registro y corrección son propias. Las tarjetas de número, el mapa de mercado, las preguntas y las imágenes IA son originales.
