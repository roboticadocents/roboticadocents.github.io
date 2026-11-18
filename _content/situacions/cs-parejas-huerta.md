---
active: true
title: "Parejas de fruta en el mapa del mercado"
description: "MatataBot recorre una cuadrícula de frutas para encontrar parejas iguales; el alumnado planifica, mide y compara rutas en un mercado escolar."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "matematiques"
subject_label: "Matemáticas y tecnología"
theme: "horta-valenciana"
theme_label: "Mercado y fruta de temporada"
duration: "4 sesiones de 50 minutos"
challenge: "¿Cómo podemos programar una ruta que conecte dos frutas iguales y justificar cuál de las rutas válidas es más corta?"
official_source: "https://matatalab.com/en/node/91"
---

![MatataBot y la torre reales del Coding Set junto a una cuadrícula 4 × 4 con dieciséis pictogramas de fruta en ocho parejas iguales.](../../_assets/situacions/cs-parelles-horta.webp)

_Las parejas se ven en las tarjetas y las interpreta el alumnado. MatataBot solo recorre la secuencia programada: no reconoce ni elige frutas._

## Situación, reto e intención

La clase prepara un juego de rutas para una parada de mercado escolar. En un mapa de 4 × 4 hay dieciséis tarjetas de fruta, organizadas en ocho parejas iguales. Cada equipo elige dos tarjetas idénticas, sitúa MatataBot sobre una y programa el camino hasta la otra. Después compara recorridos posibles y explica con qué prueba sabe que el destino coincide con el origen.

La situación adapta *Matatalab Fruit Match-up Game*, una actividad oficial para Matatalab Lite. Conserva las dieciséis casillas, las ocho parejas, la búsqueda de una fruta igual y el cálculo de una ruta corta; traslada el reto de programación al Coding Set de la dotación. La fuente propone una competición por tiempo; esta versión la sustituye por una comparación cooperativa de longitudes y estrategias, para que la evidencia de aprendizaje sea la ruta verificable y no la rapidez.

**Pregunta guía:** ¿cómo podemos llegar a una tarjeta igual con el menor número de órdenes de movimiento sin confundir lo que ve el equipo con lo que hace el robot?

## Aprendizajes y vocabulario

- Reconocer parejas idénticas y describir el criterio de correspondencia sin depender solo del color.
- Leer una cuadrícula de 4 × 4, identificar posiciones y orientación inicial y planificar un camino.
- Traducir una ruta a una secuencia de bloques de movimiento y giro, y ejecutarla con el MatataBot.
- Comparar dos rutas válidas contando casillas recorridas y órdenes; explicar qué significa «más corta» dentro del mapa utilizado.
- Depurar una secuencia identificando la primera instrucción que separa el resultado de la predicción.

**Vocabulario clave:** pareja, igual, diferente, fila, columna, casilla, inicio, destino, ruta, orientación, avance, giro, programa, depuración.

## Materiales y preparación

- Coding Set: MatataBot, torre, tablero y bloques físicos de movimiento disponibles en el centro.
- Cuadrícula de 4 × 4 casillas de **10 × 10 cm** para cada prueba física, con dieciséis tarjetas planas: ocho frutas diferentes, dos copias de cada pictograma.
- Mapa de planificación en papel, flechas de dirección y tarjetas de fruta con nombre escrito para la ampliación de lectura.
- Hoja de registro con las columnas **fruta elegida**, **inicio**, **destino**, **ruta prevista**, **número de casillas**, **órdenes**, **resultado** y **revisión**.
- [Actividad oficial *Matatalab Fruit Match-up Game*](https://matatalab.com/en/node/91) para preparar el reto y [soporte de Matatalab](https://matatalab.com/en/product-support) para comprobar las dimensiones recomendadas del mapa.

Preparad pictogramas de alto contraste que se distingan también por forma, textura impresa o nombre; no hagáis que la clasificación dependa solo del color. Podéis elegir frutas presentes en el mercado local en la época de la actividad, sin afirmar que todas las frutas del juego sean de producción valenciana. Situad las dos copias de cada fruta en casillas diferentes y haced una comprobación visual de las ocho parejas antes de empezar.

Comprobad la carga, la conexión, el sentido inicial y la alineación del robot con una orden breve. En una prueba física, usad la medida de casilla recomendada de 10 × 10 cm y registrad cualquier desviación; en mapas reducidos, declarad que son simulaciones de papel. Las tarjetas son marcadores humanos, no objetos que MatataBot detecte o recoja.

## Secuencia didáctica

### 1. Preparamos la parada de parejas (50 min)

#### Fase 1 · Activamos y predecimos

Mostrad un mapa parcial del mercado y tarjetas de fruta sin explicar todavía la regla. Cada pareja dice cómo decidiría si dos tarjetas forman pareja y marca una posible ruta entre dos tarjetas iguales. Pedid que justifiquen la elección con una característica observable —silueta, número de semillas dibujadas o nombre— y no con una impresión subjetiva.

#### Fase 2 · Exploramos y construimos

Presentad el juego: en la cuadrícula hay dieciséis tarjetas, una por casilla, con ocho parejas; quien juega elige una fruta y localiza las dos copias. Situad MatataBot en una de ellas y planificad el camino hasta la misma fruta. El docente modela una ruta breve y muestra cómo los giros cambian la orientación sin desplazar el robot.

#### Fase 3 · Explicamos y registramos

Cada pareja crea una leyenda para el mapa y escribe una regla de validación: «el pictograma de inicio y el pictograma de destino deben representar la misma fruta». Añadid una notación simple de fila/columna para localizar casillas; esta notación ayuda a las personas, pero no es una entrada que el robot pueda leer.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad los mapas con otra pareja y pedid que encuentre una pareja de iguales y señale dos caminos posibles. Si un icono es ambiguo, sustituidlo o añadid una leyenda antes de programar. La meta es que todas las personas interpreten las tarjetas con el mismo criterio.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa con ocho parejas verificadas, leyenda y una ruta prevista. **Pregunta de cierre:** ¿qué información hace falta para saber que las dos tarjetas son iguales?

### 2. Programamos una ruta entre iguales (50 min)

#### Fase 1 · Activamos y predecimos

Elegid una de las ocho parejas del mapa y marcad la casilla de inicio, la casilla de destino y la orientación de MatataBot. Antes de colocar bloques, señalad el trayecto con el dedo y anotad cada avance y cada giro. Otra persona comprueba que las dos tarjetas sean iguales.

#### Fase 2 · Exploramos y construimos

Convertid el camino en bloques del Coding Set. Contad por separado los avances en casillas y los giros; no uséis números en giros si el conjunto del centro no lo permite. Si la secuencia pasa por encima de otras tarjetas, continuad la ruta: el robot no las lee ni las activa, y el reto termina solo cuando una persona comprueba el pictograma de destino.

#### Fase 3 · Explicamos y registramos

Antes de pulsar ejecutar, una persona lee el programa y otra sigue cada orden con una ficha sobre el mapa. Registrad el número de casillas, los giros y la posición final prevista. Si las dos personas obtienen posiciones diferentes en la simulación, aclarad la leyenda o el sentido inicial antes de usar el robot.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad el programa y comparad la posición final con la predicción. Si hay diferencia, anotad la primera orden en la que divergen. Corregid solo esa orden, volved a probar desde el mismo inicio y mantened el primer resultado en el registro; no borréis los datos de una prueba que no ha funcionado.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** secuencia de bloques y registro de la prueba real con las dos casillas iguales señaladas. **Pregunta de cierre:** ¿la diferencia provenía del mapa, de la orientación inicial o de una orden?

### 3. Comparamos caminos, no velocidades (50 min)

#### Fase 1 · Activamos y predecimos

Recuperad una pareja del mapa y buscad dos caminos posibles entre las frutas. Predecid cuál necesita menos avances. Acordad que una ruta «más corta» en esta sesión significa menos casillas recorridas; el número de giros y la cantidad total de bloques se registran como medidas separadas.

#### Fase 2 · Exploramos y construimos

En equipos de cuatro, repartid los roles de planificador/a, constructor/a de bloques, observador/a y registrador/a. El primer equipo prepara un camino y el segundo intenta encontrar uno al menos igual de corto, sin mover las tarjetas. Si ambos recorridos tienen la misma longitud, comparad si uno necesita menos giros o menos piezas, sin declarar una única ruta «mejor» sin criterio acordado.

#### Fase 3 · Explicamos y registramos

Completad una tabla con la longitud en casillas, los giros y los bloques de cada solución. Explicad qué habéis mantenido igual para hacer una comparación justa: mismo inicio, mismo destino, misma orientación y misma escala del mapa. Un plan calculado en papel se marca como simulado hasta que se prueba en el robot.

![MatataBot y la torre del Coding Set junto a un mapa con ocho parejas de fruta y dos rutas de diferente longitud entre dos naranjas iguales.](../../_assets/situacions/sa-cs-parelles-rutes-v1.webp)

_Las rutas en papel sirven para comparar distancias; ninguna fruta está detectada por el robot._

#### Fase 4 · Aplicamos y mejoramos

Probad las dos rutas y revisad si el resultado observado concuerda con la longitud calculada. Si hay desviación física, separadla de la comparación matemática: registrad la ruta de cuadrícula que se había previsto y anotad que la alineación del robot ha afectado la ejecución. No repitáis una ruta rápidamente para obtener una puntuación; repetidla para comprobar una predicción.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de dos rutas con criterio de comparación declarado y una prueba observada. **Pregunta de cierre:** ¿qué criterio hace que una ruta sea mejor para este reto: menos casillas, menos giros o menos bloques?

### 4. Creamos e intercambiamos una ronda (50 min)

#### Fase 1 · Activamos y predecimos

Cada equipo elige cuatro parejas de fruta de su mapa y crea una nueva ronda con inicio y destino claros. Comprobad que cada pictograma tenga una única interpretación y que haya una ruta posible sobre la cuadrícula antes de entregar el reto a otro equipo.

#### Fase 2 · Exploramos y construimos

Intercambiad mapas y probad una partida completa, una pareja cada vez. Como ampliación, sustituid algunas tarjetas por nombres escritos de fruta: la persona lee el nombre y lo relaciona con el pictograma; MatataBot continúa sin leer palabras. Otra ampliación es variar la cantidad de frutas, pero anotad siempre el nuevo número de tarjetas y parejas.

#### Fase 3 · Explicamos y registramos

El equipo que resuelve el reto justifica la pareja elegida, describe la ruta y muestra el recuento de casillas. El equipo autor solo puede responder preguntas sobre leyenda e inicio; no puede indicar la secuencia de bloques. Registrad si el mapa se podía interpretar sin explicación oral adicional.

#### Fase 4 · Aplicamos y mejoramos

Revisad una única parte del mapa a partir de la observación del equipo visitante: símbolo ambiguo, inicio poco visible, orientación ausente o ruta imposible. Volved a probar la versión mejorada y comparad qué información habéis añadido para que otra pareja pueda resolver el reto de forma autónoma.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia final:** mapa revisado, cuatro parejas resueltas, al menos una secuencia ejecutada y registro de longitudes. **Pregunta de cierre:** ¿qué parte del juego hace el equipo y qué parte hace MatataBot?

## Evidencias y evaluación

Recoged el mapa con dieciséis tarjetas y ocho parejas, los programas, los registros de predicción/ejecución y la comparación de rutas. Observad si el alumnado: identifica parejas con un criterio explícito; marca inicio, destino y orientación; descompone la ruta en avances y giros; calcula y compara longitudes con el criterio acordado; identifica una diferencia entre predicción y ejecución; y puede explicar que el robot no reconoce ni selecciona fruta. La rapidez y el número de parejas encontradas no son criterios de evaluación.

## Participación, accesibilidad y seguridad

Ofreced pictogramas con contraste, textura y palabra impresa; marcad inicio y destino con formas diferentes además del color. Preparad una ruta corta con menos giros, una cuadrícula táctil o una versión de papel que se pueda recorrer con una ficha. Se puede participar como lector/a de pictogramas, predictor/a, programador/a, observador/a o registrador/a. Permitid que el alumnado elija el rol y que demuestre el razonamiento señalando o explicando oralmente. No hace falta traer ni consumir alimentos reales; mantened las manos fuera del recorrido del robot y no uséis tarjetas con datos personales.

## Referentes y adaptación

- Matatalab, [Matatalab Fruit Match-up Game](https://matatalab.com/en/node/91): actividad oficial de Matatalab Lite con modo de codificación, mapa 4 × 4, dieciséis tarjetas de fruta (ocho parejas), programación entre dos pictogramas iguales, práctica por turnos y ampliación con tarjetas de palabra. El documento propone también una competición por tiempo, que esta adaptación reemplaza por comparación de longitud de ruta y justificación.
- Matatalab, [soporte oficial](https://matatalab.com/en/product-support): referencia para la medida de las casillas cuando se hace una prueba física con el robot.

El mapa, las tarjetas, las preguntas y la ilustración son propios. Esta propuesta traslada el objetivo de la actividad Lite al Coding Set disponible e identifica el límite entre el reconocimiento visual de las personas y la ejecución de movimientos del robot.
