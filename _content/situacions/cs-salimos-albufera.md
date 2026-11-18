---
active: true
title: "Salimos de excursión: una ruta con encargos"
description: "Planificamos y depuramos con MatataBot el recorrido para completar los preparativos de una salida escolar a la Albufera."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "pensament-computacional"
subject_label: "Pensamiento computacional y medio"
theme: "entorn-local"
theme_label: "Preparar una excursión a la Albufera"
duration: "4 sesiones de 45 minutos"
challenge: "¿Cómo podemos completar todos los encargos antes de salir, respetar el orden necesario entre preparar y comer el almuerzo, y encontrar una ruta corta que otra pareja pueda comprobar?"
official_source: "https://matatalab.com/en/node/93"
---

![MatataBot y la torre de control reales del Coding Set junto a un mapa de preparativos con pictogramas para la excursión a la Albufera.](../../_assets/situacions/cs-eixim-albufera.webp)

_El mapa, las paradas y la lista son materiales propios. MatataBot solo ejecuta las órdenes de movimiento: no identifica los pictogramas ni sabe si se ha completado un encargo._

## Situación, reto e intención

La clase prepara una salida escolar a la Albufera. Antes de llegar a la puerta, el grupo debe completar tres encargos en una casa representada como una cuadrícula: pasar por el baño, vestirse y preparar y comer el almuerzo. La cocina se debe visitar en dos momentos distintos: primero para preparar el almuerzo y, después de haber salido de esa estancia para completar al menos otro encargo, para comerlo. El baño y el vestidor se pueden visitar en cualquier orden.

La situación adapta el reto oficial *Hurry up!* de planificar una ruta que completa tres tareas, respeta la única dependencia indicada —preparar el almuerzo antes de comerlo—, probar el programa, depurarlo e intentar simplificarlo. Cambia la historia de partida por una preparación colectiva de una excursión local y transforma la tarea en programación tangible con Coding Set. MatataBot sigue órdenes; las tarjetas representan las acciones y no son sensores ni accesorios del robot.

**Pregunta guía:** ¿qué condiciones debe cumplir una ruta para que sea válida, y cómo podemos comparar dos sin confundir «más corta» con «más rápida»?

## Aprendizajes y vocabulario

- Descomponer un reto en encargos, lugares y condiciones que deben cumplirse.
- Representar en una cuadrícula una ruta con un inicio, un destino y paradas que pueden repetirse.
- Escribir una secuencia con movimientos y giros del Coding Set, predecirla y ejecutarla con seguridad.
- Detectar la primera diferencia entre una ruta prevista y el recorrido observado, corregirla y volver a probar.
- Comparar la longitud de dos soluciones válidas contando órdenes de movimiento; explicar que el recuento de bloques no equivale necesariamente al tiempo real de ejecución.

**Vocabulario clave:** encargo, secuencia, condición, antes/después, visita, casilla, orientación, giro, depurar, simplificar, evidencia.

## Materiales y preparación

- Coding Set de la dotación: MatataBot, torre de control, tablero y bloques de movimiento disponibles. Cargad los dispositivos y comprobad que la torre lee y envía una secuencia corta.
- Cuadrícula propia de 5 × 5 casillas de 10 × 10 cm, con inicio, cocina, baño, vestidor y puerta de salida. Marcad la orientación inicial del robot y dejad libres las intersecciones.
- Tarjetas grandes propias con pictogramas para cada estancia y para los encargos «preparar el almuerzo» y «comer el almuerzo»; no hace falta que el robot las lea.
- Hoja de registro con las columnas **orden**, **casilla**, **encargo**, **orientación prevista**, **resultado** y **revisión**; tarjetas de flechas para planificar sin robot.
- Cinta de papel para fijar la cuadrícula, lápices y una copia del mapa para cada pareja. No se necesitan accesorios Artist, Musician, sensores ni una aplicación.

Preparad un mapa donde las paradas sean alcanzables por más de una ruta y donde se pueda volver a la cocina. Antes de la sesión, comprobad el tamaño físico de las casillas y haced una prueba de movimiento en la misma superficie. En esta adaptación, «ruta más corta» significa menos órdenes de movimiento adelante/atrás; los giros se cuentan aparte. No cronometréis los equipos: la velocidad no es el criterio de éxito.

## Secuencia didáctica

### Los encargos y sus condiciones (45 min)

#### Fase 1 · Activamos y predecimos

Presentad la invitación a la excursión y las cinco paradas del mapa. Por parejas, el alumnado separa los encargos de los lugares: el baño y vestirse son tareas independientes; preparar y comer el almuerzo tienen una relación de orden. Pedid que cada cual prediga qué información necesitaría para dar instrucciones a otra persona.

#### Fase 2 · Exploramos y construimos

Colocad las tarjetas de encargo en su estancia. Cada pareja ordena físicamente las tarjetas y explica por qué no puede comer el almuerzo antes de prepararlo. Añadid la regla propia de esta versión: para contar dos visitas a la cocina, MatataBot debe salir de ella y llegar a completar como mínimo otro encargo antes de volver. Marcad esta interpretación como regla del reto local.

#### Fase 3 · Explicamos y registramos

Construid una lista de verificación común: empezar en el punto indicado, completar baño y vestidor, preparar el almuerzo, salir de la cocina, completar al menos otro encargo, volver a la cocina para comer y acabar en la puerta. El alumnado puede cambiar el orden del baño y del vestidor siempre que se cumplan todas las condiciones.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una tarjeta de lugar en la maqueta y preguntad si cambia la validez de la ruta o solo la distancia. Las parejas identifican qué condiciones son obligatorias y qué decisiones todavía pueden tomar libremente.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** lista de verificación con las dependencias y una ruta de tarjetas todavía sin bloques. **Pregunta docente:** ¿qué parte de la ruta puede cambiar sin incumplir el encargo?

### Del mapa a la secuencia tangible (45 min)

#### Fase 1 · Activamos y predecimos

Recordad que el robot parte orientado hacia una dirección concreta. Cada pareja recorre con el dedo un camino desde el punto inicial hasta la puerta y marca en papel cada giro, cada encargo y la vuelta a la cocina. Antes de poner bloques, predecid si el itinerario cumple la lista de la sesión anterior.

#### Fase 2 · Exploramos y construimos

Traducid el recorrido a bloques físicos del Coding Set: un bloque de giro hace girar el robot sobre el sitio; no lo desplaza lateralmente. Leed la secuencia en el tablero de control de izquierda a derecha y comprobad que cada movimiento corresponde a una casilla de la cuadrícula. Ensayad primero los giros con una ficha de robot de papel.

#### Fase 3 · Explicamos y registramos

Una persona lee la secuencia en voz alta y la otra señala la ruta en el mapa. Anotad el número de órdenes de movimiento y de giro por separado. Antes de ejecutarla, un equipo visitante comprueba que la preparación precede a la comida y que hay una salida de la cocina entre las dos visitas.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad una primera parte corta desde el punto de inicio. Si la orientación o la posición no coincide con la predicción, paraos, identificad la primera orden diferente y revisad solo ese tramo. Borrad la secuencia anterior según el procedimiento del kit antes de empezar una nueva prueba.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** secuencia tangible fotografiada o dibujada, ruta marcada y recuento separado de movimientos/giros. **Criterio:** otra pareja puede leer las órdenes y seguir el mapa sin que la autoría le dé instrucciones adicionales.

### Prueba, depuración y comparación de rutas (45 min)

#### Fase 1 · Activamos y predecimos

Antes de pulsar inicio, cada equipo señala dónde espera que esté MatataBot después de tres órdenes concretas. Identificad el punto en el que tendrá que dejar la cocina y el punto en el que volverá para comer el almuerzo.

#### Fase 2 · Exploramos y construimos

Ejecutad la ruta completa en una superficie plana y con el espacio libre. Una persona controla el tablero y la otra registra las posiciones después de cada encargo; después intercambiad los roles. Si el robot se sale de la cuadrícula, anotad la primera casilla divergente, revisad el recuento de movimientos y la orientación, y volved a probar desde el punto inicial.

![MatataBot, torre de control y bloques reales del Coding Set durante una prueba de ruta junto a una tarjeta de cocina.](../../_assets/situacions/sa-cs-excursio-prova-ruta-v1.webp)

_La imagen acompaña el registro de una prueba: la ruta y las casillas son una maqueta del aula, no un mapa oficial ni una lectura automática del robot._

#### Fase 3 · Explicamos y registramos

Otra pareja valida la ruta con la lista de verificación, no con la rapidez del equipo. Registrad tareas completadas, orden entre preparar y comer, salida y retorno a la cocina, punto final y número de bloques de movimiento. Distinguid el error de programación de un desplazamiento físico causado por una cuadrícula mal fijada.

#### Fase 4 · Aplicamos y mejoramos

Diseñad una segunda ruta válida cambiando el orden del baño y el vestidor o eligiendo otro camino. Comparad los movimientos de las dos versiones. Si el grupo propone un programa más corto, lo debe probar desde el mismo inicio y demostrar que mantiene todos los encargos y la dependencia del almuerzo.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** dos registros de prueba con número de movimientos, número de giros y comprobación de las condiciones. **Pregunta docente:** ¿una ruta con menos movimientos es siempre válida? ¿Qué evidencia lo demuestra?

### Creamos un reto que se pueda verificar (45 min)

#### Fase 1 · Activamos y predecimos

Cada pareja recibe una nueva tarjeta de destinatario —por ejemplo, preparar el material de campo antes de salir hacia una observación de la Albufera— y propone tres encargos, una condición de orden y un destino. No añadid ninguna función automática al robot: todas las tareas son paradas representadas en el mapa.

#### Fase 2 · Exploramos y construimos

Dibujad el mapa y escribid las reglas en frases cortas que se puedan comprobar. Intercambiad el reto con otra pareja, que primero lo simula con una ficha de papel y después prepara bloques de movimiento. El grupo autor responde solo preguntas de claridad; no revela la ruta.

#### Fase 3 · Explicamos y registramos

La pareja visitante presenta la ruta, el recuento y una prueba de cada condición. Quien ha creado el reto comprueba si las reglas permiten más de una solución válida y marca cualquier instrucción ambigua.

#### Fase 4 · Aplicamos y mejoramos

Revisad una regla o una casilla del mapa y volved a pasar el reto a un tercer equipo. Si ningún programa puede completarlo, localizad si el problema es una ruta bloqueada, una condición incompatible o una instrucción que no especifica la orientación inicial.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa propio, reglas verificables, programa probado por otra pareja y una revisión justificada. **Cierre:** «La regla que ha hecho más fácil comprobar el reto es… porque…».

## Evidencias y evaluación

Recoged la lista de condiciones, el mapa, las dos secuencias, el registro de ejecución, la comprobación entre parejas y el reto final revisado. Valorad si el alumnado (1) distingue tareas de lugares; (2) identifica la única dependencia entre preparar y comer; (3) traduce el recorrido a órdenes físicas de acuerdo con la orientación; (4) localiza y corrige la primera divergencia; y (5) compara soluciones válidas con un recuento reproducible. La rapidez, el acierto al primer intento y el número total de bloques sin explicar no son criterios de éxito.

Autoevaluación: «He comprobado todas las condiciones», «sé explicar qué significa girar y qué significa avanzar» y «he revisado la ruta con una prueba». Coevaluación: la pareja visitante marca las condiciones que ha podido verificar y señala una instrucción que se podría aclarar.

## Participación, accesibilidad y seguridad

Ofreced el mapa en gran formato y alto contraste, pictogramas con formas además de colores, una ficha grande de MatataBot y una tira impresa con las órdenes. Se puede participar planificando, colocando tarjetas, leyendo el programa, comprobando condiciones o registrando resultados. Permitid señalar o dictar la secuencia en lugar de escribirla; el reto no depende de leer palabras pequeñas. Haced pruebas en mesa o en el suelo solo con espacio libre, mantened las manos fuera del recorrido y no pongáis a ninguna persona ni ningún objeto delicado como obstáculo. Todos los encargos son ficticios: no se registran rutinas personales, alimentos, nombres ni necesidades del alumnado.

## Referentes y adaptación

- Matatalab, [*Hurry up!*](https://matatalab.com/en/node/93): presenta un problema de ruta con tres tareas, la única condición de que preparar el almuerzo preceda a comerlo y una visita repetida a la cocina. El plan oficial pide planificar, crear y probar el programa, depurar si hace falta, simplificar y compartir una solución; también aporta preguntas de cierre y materiales como plastilina, papel y lápices. Esta propuesta conserva esa estructura y la dependencia, y crea un contexto, mapa, tarjetas, criterios y secuencia didáctica propios.
- Matatalab, [*Hello Matatalab Robots!*](https://matatalab.com/en/node/88): documenta para el Coding Set la conexión entre MatataBot, torre y tablero, las órdenes de avance/retroceso y giro de 90°, el recorrido hasta una bandera y la posibilidad de probar rutas distintas para llegar. Se utiliza para verificar el hardware y la programación tangible de la versión local; no se atribuyen a MatataBot detección de tarjetas ni comprobación de los encargos.

La propuesta amplía una actividad oficial breve a cuatro sesiones para hacer visibles las condiciones, el registro, la depuración, la comparación de rutas y la transferencia entre equipos. La Albufera es el contexto de la excursión; el mapa de casa y sus estancias son una maqueta ficticia, no una representación geográfica ni una instrucción sobre rutinas reales.
