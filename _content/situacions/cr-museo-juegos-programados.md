---
active: true
title: "Museo de juegos programados"
description: "Secuencia propia de 24 sesiones con Codey Rocky vinculada a los títulos públicos del curso CSTA de Makeblock y contextualizada en un museo de juegos."
robot: "codey-rocky"
robot_label: "Codey Rocky"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas, Arte y Pensamiento Computacional"
theme: "programacio"
theme_label: "Proyectos interactivos y robótica"
duration: "24 sesiones de 40 minutos"
challenge: "¿Cómo diseñamos una exposición de juegos que se pueda entender, probar, depurar y recorrer con Codey Rocky?"
---

![Codey Rocky real de la dotación junto a una ruta de juego de papel y tarjetas de colores en un aula-museo.](../../_assets/situacions/cr-museu-jocs-programats.webp)

_El museo es una propuesta propia; cada módulo construye un juego pequeño con código visible y pruebas repetibles._

## 🌱 Situación y producto final

El alumnado prepara una exposición interactiva para la comunidad educativa. En parejas, diseña juegos y retos que combinan pantalla LED, botones, variables, sensores reales y movimiento. Cada sesión deja un artefacto que se puede probar y un registro breve de decisiones. La progresión propone una interpretación local para cada uno de los 24 títulos CSTA publicados por Makeblock. Los planes docentes se han contrastado directamente para las lecciones 1, 3, 4, 13, 14, 15, 17 y 18. Para las lecciones 1–16, los objetivos públicos del curso diferente *Codey Rocky & Neuron Discovery* permiten una comprobación adicional, pero no sustituyen las fichas CSTA. El resto de sesiones se identifica como adaptación propia del título y el objetivo público. No incorpora Neuron ni ningún accesorio externo como requisito.

Cuando un reto oficial se basa en una historia o juego concreto, aquí se transforma en un contexto de barrio o centro. Ninguna actividad utiliza datos personales, velocidad corporal ni sonidos grabados. Las pruebas de movimiento se hacen en una zona vacía y con una persona observadora.

## 🎯 Aprendizajes y vocabulario

- Reconocer los componentes de Codey Rocky que se prueban y relacionar botones, sensores y pantalla con las respuestas programadas.
- Construir programas con secuencias, repeticiones, condiciones, variables y funciones según el reto de cada lección.
- Crear animaciones y mecánicas de juego, y probarlas con casos previstos y casos que pueden hacer fallar el programa.
- Depurar una instrucción concreta y explicar los límites de cada juego o movimiento antes de compartirlo con otra persona.

## 📅 Secuencia didáctica · 24 sesiones

### **L1 · El secreto de Codey Rocky · del problema al primer programa (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Mostrad Codey Rocky apagado y un conjunto de tarjetas con robots de contextos diferentes. En parejas, relacionad cada robot con una tarea posible y explicad qué observación os ha hecho elegirla. Diferenciad una función comprobada de una suposición: esta actividad no pide activar reconocimiento facial ni ningún servicio de inteligencia artificial.

#### Fase 2 · Exploramos y construimos (10 min)

Observad las dos partes del robot de la dotación. Codey contiene el controlador, pantalla LED, botones, luces, altavoz y sensores integrados; Rocky es su base móvil, con motores y sensor frontal inferior. Haced un inventario dibujado de las piezas que realmente veis y señalad una capacidad que queráis comprobar. No añadáis accesorios externos al mapa del kit.

#### Fase 3 · Explicamos y registramos (10 min)

Construid un esquema propio **idea → programa → carga → acción**. Explicad que un programa es una secuencia de instrucciones que se traduce a bloques; el robot solo ejecuta aquello que se ha programado y cargado. En mBlock 5, localizad escenario, categorías de bloques y área de código. Haced una predicción antes de conectar ningún dispositivo.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Conectad Codey con el cable USB, encendedlo y seleccionad el puerto serie correcto en mBlock 5. Cread una acción mínima con el evento de pulsar A y un icono de pantalla; cargad el programa, desconectad el cable de datos y poned el robot sobre una superficie estable antes de probarlo. Si no responde, revisad alimentación, puerto, modo de carga y evento, de uno en uno.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** inventario de Codey/Rocky, diagrama idea-programa-acción, captura o dibujo de los bloques, resultado de la prueba y una dificultad resuelta. Cerrad con las frases «hoy he aprendido…», «el problema era…» y «lo he resuelto…»; se puede responder con texto, dibujo o explicación oral.

![Codey Rocky real de la dotación junto a un portátil con bloques de programación sin texto y cuatro tarjetas de secuencia en blanco.](../../_assets/situacions/sa-cr-primeres-lliçons-v2.webp)

_La interfaz de bloques y las tarjetas son materiales propios; el robot representa el modelo Codey Rocky de la dotación._

### **L2 · Botones y expresiones programadas (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recordad una entrada y una salida de la lección anterior. Presentad una situación neutra: “cuando entramos en un aula oscura, pulsamos el interruptor y se enciende la luz”. Identificad la acción que inicia la respuesta y predecid qué pasaría si no se produjera. En esta SDA, los iconos de pantalla son símbolos elegidos por el equipo: no miden ni representan el estado emocional de ninguna persona.

#### Fase 2 · Exploramos y construimos (10 min)

Haced una versión propia del juego desconectado «Sigue las instrucciones»: asignad tres o cuatro señales geométricas a acciones simples de papel, como levantar una tarjeta, dibujar una forma o girar una ficha. Una persona muestra la señal y el grupo ejecuta la acción acordada; probad una ronda lenta y una con las señales en otro orden. Quien prefiera no hacer movimientos puede ser quien muestra las tarjetas, marca la secuencia o comprueba si la respuesta corresponde a la señal.

![Una mano pulsa uno de los botones frontales del Codey Rocky real de la dotación, que muestra un icono abstracto en la matriz LED.](../../_assets/situacions/sa-cr-botons-expressions-v2.webp)

_La imagen muestra una entrada física y una respuesta visual programada; el icono es una salida del código, no una lectura de las emociones de nadie._

#### Fase 3 · Explicamos y registramos (10 min)

En mBlock, localizad un evento de inicio y los bloques «cuando se pulsa A», «B» y «C». Seguid con el dedo el programa modelo y explicad la relación entrada–respuesta. Diferenciad el evento (inicio o botón pulsado) de la acción programada (mostrar un icono, reproducir un sonido o combinar las dos). Antes de cargar nada, dibujad una tabla con las tres entradas, la respuesta esperada y una comprobación; si la versión de la app o el dispositivo no muestra algún bloque, anotad la diferencia y continuad con las entradas disponibles.

#### Fase 4 · Aplicamos y mejoramos (10 min)

En parejas, programad una respuesta diferente para cada botón con símbolos y sonidos propios o de uso libre. Haced una primera prueba guiada y después cambiad los roles: una persona programa y la otra comprueba, sin tocar el proyecto. Probad cada entrada al menos dos veces y una vez el inicio; registrad si la respuesta coincide con la tabla. Ajustad un bloque cada vez. El sonido es opcional: ofreced siempre una versión silenciosa y no uséis etiquetas como “contento”, “triste” o “enfadado” para inferir cómo se siente quien participa.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

Cada pareja presenta una respuesta de su programa y explica qué evento la desencadena. Otra pareja elige una entrada y comprueba si el resultado coincide con la predicción; si no, el equipo señala el primer bloque que hay que revisar y propone una prueba nueva. **Evidencia:** juego desconectado, tabla de entradas y salidas, programa con eventos, registro de pruebas y una explicación breve de un cambio. La valoración se centra en la relación causa–respuesta y en la claridad del código.

### **L3 · Diseñamos una animación con secuencias (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Presentad una escena de biblioteca: una persona llega, deja un libro y cierra el estante. Ordenad tres viñetas y comparad qué deja de tener sentido si se intercambian dos. Llamad *secuencia* al conjunto de acciones ordenadas que completa una tarea.

#### Fase 2 · Exploramos y construimos (10 min)

Una persona hace de robot y otra le da instrucciones para llegar a una marca y dibujar un icono. La persona-robot ejecuta literalmente las órdenes, sin completar pasos que no se han dicho. Anotad una ambigüedad y reescribidla antes de repetir.

#### Fase 3 · Explicamos y registramos (10 min)

Abrid un programa con el evento «cuando se pulsa A» y encadenad cuatro fotogramas propios de pantalla con una duración corta para cada uno: icono inicial, cambio, gesto visual e icono final. Explicad cómo el orden de los bloques determina la animación; no hace falta representar caras o emociones.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Dibujad un fotograma en una cuadrícula LED de cinco por cinco. Duplicad el bloque, cambiad unos pocos píxeles y repetid la secuencia hasta que otra pareja pueda reconocer el movimiento o el mensaje. Cargadla y ajustad el orden o la duración a partir de una observación concreta.

![Codey Rocky real de la dotación junto a cuatro tarjetas de cuadrícula 5×5 con un patrón de píxeles que cambia en secuencia.](../../_assets/situacions/sa-cr-sequencia-animacio-v2.webp)

_La cuadrícula y las tarjetas son materiales didácticos propios; la animación se ejecuta en la matriz LED del robot._

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** viñetas ordenadas, programa de cuatro fotogramas, predicción, comentario de la audiencia y una revisión. Otro equipo explica qué ha entendido antes de recibir el título de la pieza.

### **L4 · Detectamos y corregimos un error (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad qué es una secuencia: una serie de instrucciones que se ejecutan en un orden determinado. Explicad que un *bug* es un error del programa que impide obtener el resultado previsto; no es un insecto, una avería del robot ni un sensor con un límite propio. Anunciad que vais a revisar tres programas de una exposición escolar línea por línea, de arriba abajo, y que antes de tocarlos hay que describir qué esperabais que pasara.

#### Fase 2 · Exploramos y construimos (15 min)

Preparad tres programas de pantalla con un error cada uno, inspirados en los ejercicios oficiales y recontextualizados para la exposición del centro: (1) una secuencia de iconos de un coche de servicio que no arranca porque le falta el evento de inicio; (2) una cuenta atrás para abrir la exposición con los valores 5, 3, 4, 1, 2, 0, fuera de orden; (3) una animación de una oruga dibujada que queda interrumpida por un fotograma ajeno a la historia. El segundo programa es solo un conteo de preparación. Antes de ejecutar, cada pareja anota el resultado esperado y marca en qué bloque sospecha que se rompe la secuencia.

![Codey Rocky real de la dotación junto a tres secuencias de papel: una sin inicio, una cuenta atrás desordenada y un fotograma ajeno apartado.](../../_assets/situacions/sa-cr-depuracio-v2.webp)

_Las tarjetas y los ejemplos son materiales didácticos propios; Codey Rocky muestra el programa, pero no detecta ni corrige los errores automáticamente._

#### Fase 3 · Explicamos y registramos (5 min)

Leed cada programa de arriba abajo y comparad el resultado con la predicción. En el primero, localizad que falta un bloque de evento; en el segundo, comparad la posición de los números y reconstruid 5–4–3–2–1–0; en el tercero, identificad el fotograma que no pertenece a la animación. Diferenciad estos errores de programación de una pantalla apagada o de un problema de conexión. No cambiéis varios bloques a la vez.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Reparad cada programa con el cambio mínimo: añadid un evento de inicio al primero; ordenad los valores de la cuenta atrás en el segundo; retirad el fotograma ajeno del tercero. Ejecutad de nuevo el mismo ejemplo después de cada reparación y registrad si ahora coinciden resultado y predicción. Una pareja revisora recibe el programa sin la explicación de la autoría, lo prueba y comprueba si puede justificar el cambio.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** para los tres programas, registrad predicción, síntoma, bloque u orden que hay que revisar, cambio mínimo, resultado de la nueva prueba y conclusión. El error solo se considera corregido cuando la pareja revisora reproduce el comportamiento previsto.

### **L5 · Bucle con contador (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad la secuencia de animación de L3. En una tira de cuatro viñetas, representad una rana dibujada que se prepara, salta, aterriza y se prepara de nuevo mientras cruza cuatro islotes de la marjal. Marcad qué fragmento se repite cuatro veces y qué acciones pasan solo antes o después del bucle. Haced explícita la correspondencia con el ejemplo oficial: una ruta de 20 m con cuatro plantaciones repite cuatro veces la misma secuencia de acciones. Aquí se mantiene el recuento y se transforma la escena en un relato animado de los islotes, sin calcular distancias ni representar una ruta real. Aclaramos que es una historia mostrada en la matriz LED: Codey Rocky no se desplaza por los islotes.

#### Fase 2 · Exploramos y construimos (10 min)

Ordenad tres tarjetas de papel —preparar la rana, saltar y aterrizar— y añadid una pausa para que se pueda leer cada fotograma. Haced que otra pareja ejecute el fragmento cuatro veces. Después, comparad la tira de tres instrucciones dentro de un único bucle con contador con la misma tira copiada cuatro veces; marcad qué queda dentro de `repetir` y qué se ejecuta solo una vez antes o después.

![Codey Rocky real junto a un mapa de papel de la marjal con cuatro paradas de cañizo conectadas por flechas y cuatro fichas de recuento.](../../_assets/situacions/sa-cr-bucle-comptat-v2.webp)

_Las cuatro marcas modelan el número de iteraciones; el robot no identifica hábitats ni cuenta las paradas por sí mismo._

#### Fase 3 · Explicamos y registramos (10 min)

En mBlock, programad con el botón A una animación original en la pantalla de Codey: mostrad dos dibujos propios (rana preparada y salto), añadid una pausa breve para leerlos y repetid la secuencia con `repetir (4)`. Después del bucle, mostrad un icono final diferente. Seguid las cuatro iteraciones con una tabla de traza: número de vuelta y fotograma observado. Cambiad el recuento a 3, volved a ejecutarlo y comprobad que la secuencia final se muestra solo cuando el bucle acaba. Explicad qué evento inicia el programa y cómo el número de repeticiones determina el final.

#### Fase 4 · Aplicamos y mejoramos (10 min)

En parejas, cread una segunda versión cambiando solo una decisión cada vez: el evento de inicio, el número de saltos, los dibujos o el sonido opcional. Añadid una historia de la marjal e intercambiad los programas: el equipo visitante predice cuántas iteraciones hará e identifica cuándo aparece el fotograma final. Si la versión no coincide con la predicción, localizad el bloque que determina el recuento antes de modificarlo. El sonido se puede sustituir por una pausa visual; los dibujos representan una historia inventada, no una observación de fauna.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

Cada pareja presenta la animación y responde: ¿qué representa una iteración, cuántas hay y cómo sabe el programa que tiene que acabar? Autoevaluación: **azul**, identifico la secuencia repetida; **amarillo**, uso el bucle para hacer cuatro iteraciones observables; **violeta**, cambio el recuento o el evento y explico cómo afecta al resultado. Registrad un problema encontrado y cómo lo habéis resuelto. **Evidencia:** storyboard, animación activada por un evento, cuatro fotogramas/ciclos trazados, prueba del recuento alternativo y comentarios de otra pareja.

**Pregunta docente:** ¿qué determina que el bucle acabe después del número de vueltas acordado?

### **L6 · Bucle continuo (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad el programa de L5 y comparad `repetir (4)` con una secuencia que no tiene un número fijo de vueltas. Usad el ciclo de luz y oscuridad como ejemplo natural que se repite, y dibujad tres fotogramas para representar un amanecer y una puesta de sol sobre la marjal. Predecid qué programa acabará después de un número establecido y cuál continuará hasta que alguien lo detenga.

#### Fase 2 · Exploramos y construimos (10 min)

En mBlock, haced una animación finita con un evento de botón y un `repetir`; después, cread una segunda con otro botón y poned la secuencia dentro de `para siempre`. Alternad tres fotogramas propios con pausas suficientemente largas para que se puedan leer. Antes de probar el bucle infinito, identificad el control de parada del entorno. Si la versión de mBlock ofrece un evento del botón C y un bloque para detener todos los scripts, asignadles esa función y comprobadla con el robot quieto. Si no están, usad el control de detención de mBlock. En MicroPython, la documentación oficial muestra el botón C llamando a `codey.stop_all_scripts()`; esta API no implica que el mismo bloque esté disponible en mBlock.

#### Fase 3 · Explicamos y registramos (10 min)

Comparad los programas bloque a bloque: ¿cuál tiene un número de vueltas definido y cuál no incorpora ninguna salida natural? Ejecutadlos y registrad inicio, dos ciclos observados, orden de detención y respuesta final. Verificad la vía de parada que habéis elegido: el botón C solo si habéis podido programarlo en el entorno disponible; si no, el control de mBlock. Anotad qué método ha funcionado y explicad por qué un bucle infinito necesita un control de parada accesible.

![Codey Rocky real de la dotación junto a una maqueta de papel de día y noche, una tarjeta de ciclo y una tarjeta independiente de pausa.](../../_assets/situacions/sa-cr-bucle-continu-v2.webp)

_El paisaje de día y noche es una metáfora de papel; la placa no mide el ciclo natural en esta actividad._

#### Fase 4 · Aplicamos y mejoramos (10 min)

En parejas, cambiad las imágenes, el orden, una pausa, el sonido opcional o añadid una luz RGB estable y suave; probad si la historia sigue siendo comprensible en los dos programas. El equipo revisor comprueba que la versión con contador acaba sola y que la versión continua responde a la detención. No hagáis parpadeos rápidos ni sonidos repentinos; quien lo prefiera puede analizar las tarjetas de fotogramas en papel, con la misma predicción de bucle.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

Cada equipo presenta las dos animaciones y responde cuál utiliza `repetir`, cuál `para siempre` y cómo ha comprobado su finalización. Completad una autoevaluación: un bucle con contador de la vida cotidiana, un proceso cíclico que no tiene un final fijo y una precaución necesaria cuando un programa sigue activo. **Evidencia:** storyboard de tres fotogramas, dos programas con eventos diferentes, registro de ciclos/detención, comentarios de otra pareja y autoevaluación.

**Pregunta docente:** ¿cómo sabe el usuario que el bucle está activo y cómo puede terminarlo?

### **L7 · Carrera I: colores y obstáculos (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad el trabajo anterior: recordad qué es un error de programa y distinguid `repetir` de `para siempre` con un ejemplo oral breve. Después, contrastadlo con la condición: una decisión `si` comprueba un valor y solo entonces ejecuta una instrucción. Haced una «caja de condiciones» con tarjetas de prueba fáciles de identificar y no personales (por ejemplo, «la ficha es verde»): quien saca una tarjeta decide si se cumple y sigue la instrucción asociada. En parejas, cread una tarjeta propia de reto con una respuesta para el caso verdadero y otra para el falso. Predecid cómo podría responder Codey ante una bandera verde o un obstáculo en una pista de maqueta. No es una carrera de velocidad.

#### Fase 2 · Exploramos y construimos (10 min)

Identificad el módulo IR de Rocky y comprobad su selector de orientación: hacia abajo para leer color/superficie, hacia delante para detectar un obstáculo. Son dos configuraciones de prueba, no dos lecturas simultáneas. Preparad una puerta con tarjeta verde y otra de color diferente; en una segunda mesa, poned un obstáculo blando y ancho. Mantened la base detenida mientras cambiáis la orientación y comprobad en el bloque de sensor qué lee cada posición.

![Codey Rocky real de la dotación, una tarjeta verde y un obstáculo blando separados para preparar dos pruebas independientes del sensor.](../../_assets/situacions/sa-cr-carrera-obstacles-v2.webp)

_Los objetos son estáticos; la lectura de color y la detección de obstáculos se prueban en orientaciones diferentes, no a la vez._

#### Fase 3 · Explicamos y registramos (10 min)

En la configuración hacia abajo, programad el botón A y una condición `si color = verde`: avanzad solo un tramo corto a velocidad baja si la lectura coincide; de lo contrario, quedaos detenidos. En la configuración hacia delante, haced una prueba independiente `si se detecta un obstáculo`: deteneos, girad a la izquierda una cantidad limitada y avanzad solo una casilla de maqueta antes de deteneros. El bloque de proximidad se trata como una detección, no como una medida exacta de distancia. Registrad por separado orientación, entrada, valor/estado, condición verdadera o falsa y respuesta.

```blocks
cuando se pulse A
  si el color leído es verde
    avanzar a velocidad baja un tramo corto
  si no
    detener los motores

cuando se pulse A  // en la prueba con el sensor orientado hacia delante
  si se detecta un obstáculo
    detener los motores
    girar a la izquierda una vez
    avanzar una casilla y detenerse
```

#### Fase 4 · Aplicamos y mejoramos (10 min)

Completad una batería de casos en dos tandas: con el sensor hacia abajo, tarjeta verde y no verde; hacia delante, obstáculo presente y ausente. Haced tres intentos por caso sin mover la luz ni el material entre lecturas. Si el color no se reconoce de manera estable, aumentad la superficie de la tarjeta o usad una tarjeta de entrada simulada. Si el obstáculo no se detecta, revisad la orientación y el bloque utilizado. No combinéis los resultados como si el robot hubiera leído ambas entradas en un mismo instante.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** dibujo de las dos orientaciones del sensor, tablas independientes de casos verdaderos/falsos, programas o simulaciones identificadas y una revisión justificada. Explicad qué bloque representa una decisión booleana y por qué la lectura de color y la de obstáculo se han probado en momentos diferentes.

**Pregunta docente:** ¿qué observación ha hecho cierta cada condición y qué cambia cuando giramos el sensor?
### **L8 · La estación de servicio y el túnel de la marjal (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad las condiciones verdadera/falsa de L7 y comparad varias instrucciones `si` con un `repetir` que contiene una condición. El reto principal adapta la reentrada al circuito de *The Racing Game II*: Codey Rocky llega a una estación de servicio en tres orientaciones posibles —hacia la izquierda, hacia la derecha o hacia delante— y tiene que encontrar la única salida. Predecid qué indica el obstáculo delante del sensor y por qué hay que volver a comprobarlo después de cada giro. Como segunda prueba independiente, cruzaréis un túnel oscuro y compararéis lecturas de luz con un operador. No se leerán color, obstáculo y luz a la vez.

#### Fase 2 · Exploramos y construimos (10 min)

Construid con libros o cartón una estación en forma de U, con tres lados cerrados, una única salida y una recta de pista delante; preparad también un túnel corto de cartulina para la prueba de luz, separada de la ruta. Situad el robot en las tres orientaciones iniciales del reto, siempre dentro de la U y con espacio libre para girar. Girad el sensor IR hacia delante y comprobad que detecta las paredes; usad el sensor de luz integrado solo en la prueba del túnel. Antes de encender, retirad cualquier objeto suelto y validad la distancia de detención a potencia baja.

![Codey Rocky real de la dotación dentro de una estación de pruebas en U hecha de cartón, con una salida amplia y un túnel de papel separado.](../../_assets/situacions/sa-cr-estacio-servei-v2.webp)

_Ilustración propia de la maqueta de L8; el túnel y el trazado son materiales de aula, no un escenario oficial ni una construcción real de la Albufera._

#### Fase 3 · Explicamos y registramos (10 min)

Programad la salida con una condición dentro de un bucle con contador: si hay una pared delante, girad a la derecha 90°; repetid la comprobación tres veces como máximo. Cuando el sensor vea la salida libre, el robot se habrá orientado sin depender de la posición inicial. Al llegar a la abertura, girad a la izquierda 90° para incorporaros a la recta del circuito y avanzad a la velocidad más alta que hayáis comprobado antes de que ninguna rueda sobresalga del trazado. Anotad orientación inicial, número de giros, salida detectada y resultado de la incorporación.

```blocks
cuando se pulse A
  repetir 3 veces
    si hay un obstáculo delante
      girar a la derecha 90 grados
  si la salida está libre
    girar a la izquierda 90 grados
    avanzar por el circuito a velocidad validada
```

El bucle es finito y limita los giros a tres intentos; no lo envolváis con un `para siempre`. La consigna oficial de continuar a gran velocidad se adapta a una velocidad máxima local validada, porque una recta corta o una batería baja pueden hacer perder el control del modelo.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Probad la ruta desde las tres orientaciones, con tres intentos comparables por orientación. Registrad los giros y si llega a la pista; cambiad una sola parte del código si falla. Como extensión del reto oficial, al llegar a la estación el Codey puede mostrar una expresión inventada y un indicador luminoso; añadid un sonido breve y bajo solo si todo el grupo lo encuentra cómodo. No hagáis sonar el altavoz mientras el robot se mueve. En una tanda separada, usad el sensor de luz de Codey para comparar el pasillo claro con el túnel sombreado. Registrad primero las lecturas y elegid un umbral entre los valores observados: son valores relativos del sensor, no lux calibrados. Dentro de un segundo `repetir 3`, leed la luz, esperad un segundo y aplicad el operador `<`: si queda por debajo del umbral, encended el indicador RGB blanco y reducid la velocidad; si no, apagad el indicador y mantened la velocidad de prueba. Haced tres lecturas por condición y no presentéis el umbral como una medida de seguridad real.

```blocks
repetir 3 veces
  leer la luz ambiental
  esperar 1 segundo
  si la luz es menor que el umbral
    encender el indicador RGB blanco
    moverse a velocidad reducida
  si no
    apagar el indicador RGB
    mantener la velocidad de prueba
```

#### Fase 5 · Comprobamos y reflexionamos (5 min)

Comparad los giros observados en las tres orientaciones y la tabla de luz clara/sombra. Explicad por qué el bucle reduce código repetido, qué devuelve una comparación `<` y qué diferencia hay entre el módulo IR orientado hacia delante y el sensor de luz de Codey. **Evidencia:** diagrama de la estación con tres orientaciones iniciales, registro de nueve intentos de reentrada, dos programas con bucles finitos y condiciones, valores de luz y revisión de una prueba.

**Pregunta docente:** ¿qué partes del reto reutilizan un bucle y qué lectura del sensor justifica cada condición?

### **L9 · Una barra que responde al paisaje sonoro (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

En el museo escolar de la Albufera, una pantalla interpreta la actividad sonora del entorno como una barra de tres alturas. Sin grabar ni identificar ninguna fuente, predecid qué debería mostrar ante una lectura baja, media o alta. El sensor devuelve un valor de nivel relativo; no es una medida calibrada de decibelios ni permite saber quién o qué ha producido el sonido.

#### Fase 2 · Exploramos y construimos (10 min)

Localizad el sensor de sonido de Codey en la versión de mBlock disponible y observad cómo cambia la lectura ante tres estímulos suaves y acordados. No hagáis gritos ni ruidos repentinos: se puede trabajar con el ruido ambiental habitual o con una secuencia de valores simulados en papel si el sensor o el bloque no están disponibles. Anotad que la lectura depende del dispositivo, la distancia y el entorno; no grabéis audio.

#### Fase 3 · Explicamos y registramos (10 min)

Construid la barra de tres alturas con tres condiciones dentro de un único bucle `para siempre`. El plan docente define `nivel > 20`, `10–20` y `nivel < 10`, y pide el operador **y** para la franja central; el cuaderno del alumnado escribe esa franja como `10 < nivel < 20`, sin asignar explícitamente los valores exactos 10 y 20. Para que la propuesta local clasifique todas las lecturas, acordamos y anotamos una convención propia: 10 y 20 también muestran la barra media (`10 ≤ nivel ≤ 20`). Son umbrales didácticos del reto, no valores universales del sensor. Trazad 9, 10, 15, 20 y 21 antes de probarlos.

```blocks
para siempre
  leer el nivel de sonido
  si nivel > 20
    mostrar barra alta
  si nivel >= 10 y nivel <= 20
    mostrar barra media
  si nivel < 10
    mostrar barra baja
```

| Lectura de prueba | Salida local | Motivo |
|---:|---|---|
| 9 | Barra baja | Menor que 10 |
| 10 | Barra media | Límite asignado a la franja central por convención local |
| 15 | Barra media | Dentro de la franja central |
| 20 | Barra media | Límite asignado a la franja central por convención local |
| 21 | Barra alta | Mayor que 20 |

![Codey Rocky real muestra tres columnas de puntos en la matriz LED junto a barras de papel de tres alturas.](../../_assets/situacions/sa-cr-barra-sonora-v2.webp)

_Representación visual de tres niveles: la pantalla muestra una respuesta programada, no un valor de decibelios ni una grabación._

#### Fase 4 · Aplicamos y mejoramos (10 min)

Comprobad cada frontera (9, 10, 20 y 21) con la entrada real o con valores simulados, y contrastadla con la tabla. Después, haced la extensión oficial: añadid una respuesta de color con el indicador RGB o dividid una de las franjas en dos niveles. Mantened el bucle de lectura y volved a probar todas las fronteras que pueda afectar el cambio.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** tabla de valores y salidas para los cinco casos, programa con condición dentro del bucle continuo y una explicación de cómo el operador **y** delimita la franja intermedia.

**Pregunta docente:** ¿qué parte de la asignación de 10 y 20 viene de la fuente y cuál es la convención que hemos acordado para nuestro programa? ¿Cómo comprobamos que ninguna lectura queda sin una respuesta definida?
### **L10 · Funciones de buenos días (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad una condición de L9 y explicad qué hace el programa si es cierta o falsa. Recordad también cómo se inicia un proyecto cargado en Codey y cómo encontrasteis un error de código en L4. Presentad la apertura del museo de la marjal: antes de que entre el público, hay que preparar una animación de bienvenida. Preguntad cómo podemos dar un nombre corto a una secuencia de acciones para que sea fácil de volver a llamar. Una función agrupa instrucciones bajo un nombre; no es solo un evento ni una animación.

#### Fase 2 · Exploramos y construimos (10 min)

En equipos, repartid tarjetas con funciones ficticias de apertura (preparar la pantalla, mostrar el icono, hacer una pausa, reproducir un sonido opcional) y algunas que no corresponden al evento. Dad un nombre claro a cada grupo de acciones, elegid qué funciones hay que llamar cuando Codey se inicia y ordenadlas. Comparad si alguna sobra, si una se ha llamado dos veces o si el nombre no describe las acciones. Se puede leer la secuencia sin representarla corporalmente.

![Codey Rocky real junto a tarjetas de papel agrupadas como rutinas reutilizables y una ruta de maqueta hacia el observatorio de la marjal.](../../_assets/situacions/sa-cr-funcions-entrada-v2.webp)

_Las tarjetas modelan funciones creadas por el alumnado; no son bloques ni accesorios oficiales del kit._

#### Fase 3 · Explicamos y registramos (10 min)

En mBlock 5, abrid **Mis bloques / My Blocks**, cread una función propia `bienvenida_marjal` y definid en ella una animación de dos fotogramas en la matriz: icono de la marjal, pausa legible, icono de bienvenida y borrado. Después, llamadla desde el evento de inicio de Codey. Trazad el orden: evento → llamada → instrucciones de la función → final de la secuencia. Registrad la diferencia entre definir una función y llamarla.

```blocks
definir bienvenida_marjal
  mostrar icono de la marjal
  esperar 1 segundo
  mostrar icono de bienvenida
  esperar 1 segundo
  borrar la matriz

cuando Codey se inicie
  llamar bienvenida_marjal
```

#### Fase 4 · Aplicamos y mejoramos (10 min)

Personalizad los dos fotogramas y comparad la función con una versión que repita los mismos bloques sin función. Como extensión, añadid un evento del botón A que llame de nuevo a `bienvenida_marjal`: comprobad que una única definición sirve tanto al iniciar como al pulsar A. El sonido es opcional; mantened la alternativa visual silenciosa.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** tarjetas ordenadas, animación de dos fotogramas, función definida y llamada al iniciar, segunda llamada opcional desde A, traza de la ejecución y comparación con la versión sin función.

**Pregunta docente:** ¿qué pasa si definimos una función pero no la llamamos, y cómo sabemos que el nombre representa realmente las instrucciones que contiene?

### **L11 · Pequeño vigilante I: misiones y distancias (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad la función `bienvenida_marjal` de L10: ¿qué quiere decir definirla y qué hay que hacer para que se ejecute? Recordad un error que depurasteis en L4 y la relación entre distancia, velocidad y tiempo. El museo escolar quiere una maqueta de patrulla con dos recintos cuadrados conectados por un pasillo. En parejas, dibujad el inicio, los dos cuadrados y la conexión; medid un lado y el pasillo con la misma unidad. Predecid qué secuencia se puede encapsular en una función repetible y qué datos faltan antes de calcular el tiempo del trayecto.

#### Fase 2 · Exploramos y construimos (10 min)

Marcad la ruta sobre papel grande o con cinta de pintor en una zona de suelo libre y plano; mantened el robot alejado de mesas, escaleras y pasillos de circulación. Medid la distancia que recorre Codey Rocky durante un segundo a una potencia baja y repetible; repetid tres veces y calculad `velocidad = distancia ÷ tiempo` con la media de las tres lecturas. Anotad lado, conexión, potencia, duración y distancia observada. El valor de ejemplo del manual (14 cm por lado y 7 cm/s a potencia 50%) es solo un dato para practicar el cálculo: medid el robot real antes de usarlo.

![Codey Rocky real junto a un mapa de papel con dos rutas cuadradas conectadas, marcas de inicio y final y una regla.](../../_assets/situacions/sa-cr-patrulla-quadrats-v2.webp)

_El plano representa una patrulla en superficie plana; las distancias y el tiempo se tienen que medir con el robot disponible._

#### Fase 3 · Explicamos y registramos (10 min)

Definid `cuadrado` como cuatro repeticiones de «avanza una longitud de lado y gira a la derecha». Calculad el tiempo aproximado de cada lado con `tiempo = distancia ÷ velocidad medida`, y calibrad por separado el tiempo de giro de 90° en una prueba corta. Si un lado mide 14 cm y el robot recorre 7 cm/s en la prueba, el cálculo inicial es 2 s; no presupongáis que esa relación se mantiene a cualquier potencia o superficie.

```blocks
definir cuadrado
  repetir 4
    avanzar durante tiempo_lado
    girar a la derecha durante tiempo_giro

cuando se pulse A
  llamar cuadrado
  avanzar durante tiempo_conexion
  llamar cuadrado
```

Trazad en el mapa la distancia total prevista: `2 × (4 × lado) + conexión`. Explicad por qué llamar la función dos veces repite el perímetro y por qué el tramo de conexión va entre las dos llamadas.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Ejecutad una vuelta a potencia baja con una persona al lado del robot y comparad la posición final con la línea. Ajustad un solo dato cada vez (tiempo de lado, potencia o giro), volved a probar y registrad el error. Después, completad el trayecto con las dos llamadas de `cuadrado`. Como extensión que aparece en el manual complementario de Codey Rocky & Neuron, probad una condición de sonido alto con una tarjeta o una lectura ambiental suave: registrad un caso por debajo, uno igual y uno por encima del umbral elegido, sin grabar ni pedir gritos. El manual propone que el robot avance o gire a máxima potencia; en esta adaptación, la condición activa solo un icono LED estacionario, porque un sonido repentino no debe iniciar un desplazamiento inesperado.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** mapa medido, tres lecturas de calibración y su media, cálculo de velocidad y tiempo, función `cuadrado` llamada dos veces y comparación entre posición prevista y observada.

**Pregunta docente:** ¿qué dato hemos medido en el robot y qué parte del cálculo sigue siendo una estimación que depende del suelo y de la batería?
### **L12 · Pequeño vigilante II: patrullamos la segunda planta (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad el plano de patrulla de la primera planta, construido en L11, y explicad cómo reutilizabais `cuadrado`. El reto oficial aumenta la dificultad con más salas y pasillos: hay que definir dos funciones, una para el cuadrado superior y otra para el inferior, con giros en sentidos opuestos, y repetir la secuencia de salas superiores. En nuestra maqueta, dibujaréis una ruta propia con una sala inferior, dos superiores y tres conexiones. Predecid por qué las dos funciones de sala no pueden compartir el mismo sentido de giro. El robot no sube escaleras: cada planta es un plano plano diferente.

#### Fase 2 · Exploramos y construimos (10 min)

Dibujad un plano propio plano con una sala inferior y dos superiores, unidas por tres pasillos rectos; marcad inicio, final y sentido del recorrido. Medid lados y conexiones con una unidad común. Reutilizad la velocidad y los giros calibrados en L11, pero repetid la calibración si han cambiado suelo, carga o potencia. Otra pareja sigue la ruta con el dedo y comprueba que las salas superior e inferior requieren sentidos de giro diferentes.

![Codey Rocky real de la dotación junto a un plano plano con una sala inferior, dos superiores y tres pasillos medibles.](../../_assets/situacions/sa-cr-tiny-patroller-v2.webp)

_Las dos plantas son mapas de papel independientes: Codey Rocky no sube escaleras ni patrulla un edificio real._

#### Fase 3 · Explicamos y registramos (10 min)

Definid `cuadrado_inferior` con cuatro avances y giros a la derecha, y `cuadrado_superior` con cuatro avances y giros a la izquierda. Cread `planta_2_marjal`: llamad primero la sala inferior, avanzad una conexión y, dos veces, llamad la sala superior y avanzad una conexión. Asignad el programa al botón A. Antes de probar, calculad `distancia recta = 3 × (4 × lado) + 3 × pasillo`; estimad el tiempo recto dividiendo esa distancia por la velocidad medida y sumad por separado los 12 giros calibrados. El plano y las medidas son propios, no una copia del mapa de la tarjeta oficial.

```blocks
definir cuadrado_inferior
  repetir 4
    avanzar durante tiempo_lado
    girar a la derecha 90 grados

definir cuadrado_superior
  repetir 4
    avanzar durante tiempo_lado
    girar a la izquierda 90 grados

definir planta_2_marjal
  llamar cuadrado_inferior
  avanzar durante tiempo_pasillo
  repetir 2
    llamar cuadrado_superior
    avanzar durante tiempo_pasillo

cuando se pulse A
  llamar planta_2_marjal
```

Comparad el cálculo con la traza del programa. Identificad las dos funciones de sala y `planta_2_marjal` como la función principal. Explicad cómo la repetición evita duplicar las dos salas superiores y por qué la sala inferior gira en sentido contrario.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Probad primero cada tipo de sala y después una conexión, siempre a potencia baja. Registrad distancia prevista y observada por tramo; cambiad una sola duración cada vez. Cuando la ruta funciona, añadid la extensión oficial: un icono en la pantalla y un indicador de luz al acabar cada sala; el sonido es opcional, breve y de volumen bajo, solo cuando el robot está detenido. Ejecutad la patrulla completa con una persona observadora al lado. Detenedla si sale del mapa o se acerca a una zona ocupada. Si no hay una zona segura, validad la composición de funciones con una ficha y código en papel.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** dos planos propios, funciones `cuadrado_inferior` y `cuadrado_superior`, función `planta_2_marjal` con repetición, cálculo de distancia/tiempo, registro de pruebas por tramo y extensión visual. Cada pareja presenta su solución, recibe una observación concreta de otra pareja y completa una autoevaluación sobre funciones, bucles y calibración.

**Pregunta docente:** ¿qué parte de la patrulla de la primera planta hemos reutilizado y qué valores hay que recalcular cuando cambian ruta, superficie, batería o giro?

### **L13 · La caja de semillas del huerto (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Presentad un registro ficticio del banco comunitario de semillas con 10 fichas. Explicad la variable como un contenedor con nombre y valor que se puede reemplazar. En parejas, proponed un nombre claro para la reserva y predecid qué pasa cuando añadimos, quitamos o comparamos el valor con un umbral.

#### Fase 2 · Exploramos y construimos (10 min)

Preparad el registro con `reserva = 10` y tarjetas que adaptan toda la partida oficial. En orden, leedlas y actualizad la variable; otra persona comprueba cada cálculo.

| Tarjeta propia del banco de semillas | Cambio de `reserva` |
|---|---:|
| Plantamos 2 fichas | −2 |
| Si una tarjeta de temperatura simulada indica más de 5 °C, recuperamos 10 fichas del almacén de clase | +10 si se cumple |
| Preparamos 3 fichas al mediodía | −3 |
| Llega una aportación de 5 fichas | +5 |
| Compartimos 3 fichas con otro banco | −3 |
| Una etiqueta se rompe y apartamos 4 fichas del recuento | −4 |
| Jugamos 3 rondas de piedra-papel-tijera: ganar +1, perder −1, empatar 0 | según cada ronda |
| Usamos una ficha más | −1 |
| Intercambiamos 7 fichas por material de semillero | −7 |
| Si `reserva < 5`, reposición desde el almacén de clase | +10 si se cumple |
| Si `reserva > 12`, Codey muestra un icono de celebración | salida visual |

La temperatura es una entrada simulada en una tarjeta: Codey Rocky no la mide en esta actividad. Las fichas son valores del juego, no semillas reales ni indicaciones para recogerlas del entorno. Con una tarjeta de temperatura simulada de 6 °C y las rondas ganar/perder/empatar, la traza es `10 → 8 → 18 → 15 → 20 → 17 → 13 → 13 → 12 → 5`. Registrad cada paso y comprobad los dos umbrales también por separado: `4 < 5` activa la reposición y `5 < 5` no; `13 > 12` activa la respuesta y `12 > 12` no.

![Codey Rocky real con un bote de fichas de semillas de papel, dos bandejas vacías y tarjetas de operación en una feria escolar de la huerta.](../../_assets/situacions/sa-cr-variable-llavors-v2.webp)

_Las fichas representan valores de programación; el robot no pesa ni detecta las semillas._

#### Fase 3 · Explicamos y registramos (10 min)

Traducid a los bloques una asignación inicial, un cambio positivo y uno negativo, la comparación de temperatura simulada y las dos condiciones de reserva. Si `reserva < 5`, aumentadla en 10 y mostrad el valor nuevo; si `reserva > 12`, mostrad un icono de celebración. Anotad valor anterior, operación, valor nuevo y respuesta de cada condición. Los umbrales son reglas del juego de aula, no recomendaciones agronómicas.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Comprobad también las variables de movimiento con Codey Rocky en una zona libre: asignad `velocidad = 30` y haced un avance de un segundo; detened y registrad el resultado. Después asignad `angle = 70` y probad el giro; cambiad el valor a 140 y comparadlo. Si la reserva supera 12, la respuesta del juego original es una vuelta completa de celebración: probadla solo a potencia baja, con el espacio vacío y una persona observadora; si no es seguro o el valor depende de la configuración, usad una animación LED e identificad el movimiento como simulado. Marcad siempre cuándo una prueba es física o simulada.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** traza completa de las tarjetas, pruebas de frontera 4/5 y 12/13, programa con cambios y comparaciones, prueba o simulación de velocidad/giro y una revisión. Explicad qué guarda `reserva`, cómo cambia y por qué el valor exactamente igual al umbral no activa una condición estricta.

**Pregunta docente:** ¿qué cambio del valor ha provocado la respuesta del programa?
### **L14 · Operaciones con el marcador del mercado (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Abrid un marcador ficticio que empieza en cero. Predecid qué mostrará después de añadir una unidad con A o quitar una con B; decidid cómo representaréis valores negativos sin convertir el juego en una puntuación de alumnos.

#### Fase 2 · Exploramos y construimos (10 min)

Cread una variable `marcador` y asignadle el valor 0 al iniciar el programa. Configurad A para que la incremente en 1 y B para que la decremente en 1. Mostrad el resultado en la matriz LED después de cada cambio. Comparad la operación manual con el bloque de cambio de variable y observad qué significa restar cuando el valor es cero.

![Codey Rocky real junto a bandejas con fichas agrupadas y pictogramas de operaciones para representar un marcador.](../../_assets/situacions/sa-cr-operacions-marcador-v2.webp)

_Los materiales son un modelo de clase; las operaciones las calcula el programa, no la imagen ni un sensor del robot._

#### Fase 3 · Explicamos y registramos (10 min)

El reto oficial presenta dos tareas separadas. Primero probad la versión de suma/resta; después guardadla o sustituidla por la versión de multiplicación/división. No añadáis los dos programas a los mismos botones a la vez: así, A no activará dos operaciones inesperadas. En la segunda versión, inicializad `marcador` a `4`; A multiplica el valor por 2 y B lo divide por 2. En cada caso, calculad el resultado con un bloque de operadores, asignadlo a la misma variable y mostradlo.

```blocks
cuando Codey se inicie
  fijar marcador a 4
  mostrar marcador

cuando se pulse A
  fijar marcador a (marcador × 2)
  mostrar marcador

cuando se pulse B
  fijar marcador a (marcador ÷ 2)
  mostrar marcador
```

Trazad manualmente las dos versiones con `0`, `4` y `−4`. En la versión de operaciones, comparad también `marcador = 3`: dividir un número impar entre 2 puede producir un valor no entero según los bloques y el tipo de dato de la versión instalada. Anotad lo que el programa muestra en lugar de suponer que siempre redondea de la misma manera.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Cambiad el valor inicial y el factor (por ejemplo, de 2 a 3), y repetid las pruebas en una copia de la segunda versión. Verificad qué tipo de forma acepta el bloque de variable como operando y mantened la misma variable en el inicio, A y B. Recordad que la pantalla muestra valores entre −999 y 9999; si el cálculo sale de este intervalo, anotad el límite en lugar de interpretar la pantalla como un resultado completo.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** las dos versiones diferenciadas, inicialización de la variable, tabla de entradas/operaciones/resultados para casos positivos, negativos e impares, y comparación entre cálculo manual y pantalla.

**Pregunta docente:** ¿por qué hay que guardar el resultado nuevo en la misma variable para que el marcador continúe acumulando los cambios?

### **L15 · El contador de la feria de la huerta (40 min).**

El plan oficial trabaja variables, cuenta atrás y aleatoriedad con dos tareas: una cuenta atrás cooperativa y un juego de número objetivo. En esta adaptación, la clase prepara la apertura de una feria escolar de la huerta y cuenta fichas de cestas de papel. Se mantienen las treinta iteraciones de un segundo, el objetivo aleatorio entre 1 y 20, el contador y la comparación de igualdad; desaparecen el explosivo, la presión por acabar deprisa y el paso del robot entre personas. Las frutas y las fichas son una maqueta: Codey Rocky no las detecta ni hace inventario.

#### Fase 1 · Activamos y predecimos (5 min)

Mostrad una parada de feria de papel todavía cerrada y una variable `tiempo` que empieza en 30. Predecid cuántas actualizaciones habrá si cada segundo se resta una unidad y qué indicará Codey Rocky cuando la cuenta llegue a cero. Acordad que es una simulación de la apertura, no un cronómetro para presionar a ningún participante.

#### Fase 2 · Exploramos y construimos (10 min)

Al iniciar, asignad 30 a `tiempo` y mostradlo en la matriz. Al pulsar A, empezad la cuenta atrás: esperad un segundo, restad 1, mostrad el valor y repetid 30 veces. Cuando `tiempo` llega a 0, detened el bucle y mostrad un icono de hoja o parada abierta con una luz acordada; el sonido es opcional y tiene que tener una alternativa silenciosa. El robot permanece sobre una mesa estable: para repartir turnos, el equipo mueve una tarjeta de papel, no el dispositivo.

![Codey Rocky real de la dotación junto a una parada de feria escolar de la huerta, fichas de colores y tarjetas de fruta en papel.](../../_assets/situacions/sa-cr-comptador-fira-horta-v1.webp)

_Las frutas y las fichas son una maqueta para el juego de variables; el robot no identifica alimentos ni cuenta objetos reales._

#### Fase 3 · Explicamos y registramos (10 min)

Trazad los tres primeros segundos y el final. Comprobad que el valor inicial, la repetición y la condición de detención producen exactamente 30 actualizaciones, no 29 ni 31. Registrad qué pasa si se inicia el programa dos veces y probad la cancelación antes del final. La cancelación es una ampliación propia en un proyecto separado: no puede dejar activo ningún script del temporizador.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Haced dos ampliaciones como proyectos separados. En una copia de la cuenta atrás, asignad B a cancelar: tiene que detener los scripts de tiempo y mostrar un icono neutro de pausa; comprobad que el temporizador no continúa en segundo plano. En el segundo proyecto, adaptad *The Explosive Number* como un recuento cooperativo de cestas de papel: inicializad `objetivo` y `contador` a cero; al pulsar A, generad un objetivo aleatorio de 1 a 20 y reiniciad el contador; cada pulsación de B suma 1 y muestra el valor. Cuando `contador = objetivo`, mostrad el icono de parada abierta. Esta puntuación representa solo pulsaciones programadas, no existencias ni una clasificación real de la cosecha. No combinéis los dos proyectos en los mismos botones.

```blocks
cuando Codey se inicie
  fijar objetivo a 0
  fijar contador a 0

cuando se pulse A
  fijar contador a 0
  fijar objetivo a número aleatorio entre 1 y 20
  mostrar icono de preparación

cuando se pulse B
  cambiar contador en 1
  mostrar contador
  si contador = objetivo
    mostrar icono de parada abierta
    encender la luz neutra
```

Para probar la condición sin depender del azar, sustituid temporalmente la asignación por objetivos fijos 1 y 20; después probad `objetivo − 1`, `objetivo` y `objetivo + 1`. Solo la igualdad tiene que activar el mensaje. Restaurad el bloque aleatorio y comprobad que cada A reinicia `contador` antes de una ronda nueva. El azar sirve para el juego, no para seguridad, predicciones de cosecha o cifrado.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** diagrama de estados, traza de las 30 actualizaciones, cancelación probada en un proyecto separado y tabla de pruebas del contador con objetivos fijos, igualdad y valores adyacentes; cerrad con una comprobación de que una ronda nueva reinicia el contador.

**Pregunta docente:** ¿qué partes de la cuenta atrás y del número aleatorio continúan siendo las mismas cuando el juego pasa a representar la apertura de una feria escolar?

### **L16 · Piedra, papel y tijera (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Representad las tres opciones con símbolos neutros y acordad la regla: piedra gana a tijera, tijera a papel y papel a piedra; dos opciones iguales son empate. Antes de programar, completad una matriz con las nueve combinaciones y decidid cómo registraréis el resultado sin guardar nombres ni puntuaciones individuales.

#### Fase 2 · Exploramos y construimos (10 min)

Inicializad `gesto`, `victorias`, `derrotas` y `empates` a cero. Cuando Codey Rocky se agita, asignad a `gesto` un número aleatorio entre 0 y 2 y mostrad el símbolo correspondiente en la matriz LED. En el cuaderno del alumnado y el manual docente, la correspondencia es **0 = piedra, 1 = tijera, 2 = papel**; otro resumen oficial de la unidad intercambia los valores de tijera y papel. Aquí seguimos la correspondencia del reto docente y la mantendremos igual en todas las tarjetas y pruebas. Si mBlock no expone el giroscopio o el azar, usad A y tarjetas de números, e identificadlo como simulación.

![Codey Rocky real junto a tarjetas de papel con piedra, tijera y mano abierta; la pantalla muestra un símbolo abstracto.](../../_assets/situacions/sa-cr-pedra-paper-tisora-v2.webp)

_Las tarjetas hacen visibles las tres opciones del juego; la matriz del robot muestra el gesto generado por el programa._

#### Fase 3 · Explicamos y registramos (10 min)

Después de comparar el gesto de Codey con el de la pareja, registrad el resultado con los botones: A suma 1 a `victorias`, B suma 1 a `derrotas` y C suma 1 a `empates`. Cada botón muestra una expresión propia diferente; un sonido breve y bajo es opcional y siempre se puede sustituir por la respuesta visual. Trazad las nueve combinaciones y comprobad que solo cambia el contador elegido. El robot genera su gesto pero no clasifica automáticamente el resultado: el equipo aplica las reglas y pulsa el botón correspondiente. Mantened un máximo de seis eventos de programa (inicio, agitación, A/B/C y luz). El azar determina el gesto del juego; no es una predicción ni una medida sobre las personas.

```blocks
cuando se sacuda Codey
  establecer gesto a número aleatorio entre 0 y 2
  si gesto = 0
    mostrar símbolo piedra
  si no, si gesto = 1
    mostrar símbolo tijera
  si no
    mostrar símbolo papel

cuando se pulse A
  cambiar victorias en 1
  mostrar expresión de celebración
cuando se pulse B
  cambiar derrotas en 1
  mostrar expresión de revisión
cuando se pulse C
  cambiar empates en 1
  mostrar expresión tranquila

cuando la luz ambiental supere 2
  si victorias + derrotas + empates > 0
    mostrar victorias / (victorias + derrotas + empates)
  si no
    mostrar «sin rondas»
```

#### Fase 4 · Aplicamos y mejoramos (10 min)

Ejecutad la matriz completa de nueve combinaciones y revisad si cada resultado coincide con las reglas. Como extensión, mostrad en decimal la proporción `victorias ÷ (victorias + derrotas + empates)` cuando haya al menos una ronda y la lectura de luz ambiental sea superior a 2. Hay una discrepancia en el recurso oficial: el texto dice «superior a 2», pero el bloque de ejemplo muestra la condición `< 2`; esta propuesta sigue el texto y lo registra como una convención local. Probad lecturas 1, 2 y 3: solo 3 tiene que mostrar la proporción. El sensor da una lectura propia del dispositivo, no lux calibrados; si el bloque no está disponible, simulad las tres lecturas. Para expresar después el resultado como porcentaje, multiplicad la proporción por 100. Antes de dividir, comprobad que `victorias + derrotas + empates > 0`.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** tabla de interpretación `0/1/2`, matriz de las nueve combinaciones, programa de gesto aleatorio, traza de los tres contadores, comprobación del límite de seis eventos, pruebas de luz 1/2/3 y una prueba que evita dividir por cero antes de la primera ronda.

**Pregunta docente:** ¿qué variables cambian en cada resultado y qué nos dice —y qué no nos dice— la proporción de victorias de un juego?

### **L17 · Un circuito jugable para el museo (40 min).**

La guía docente oficial de *My Speedway* pide diseñar escena y personaje, controlar el coche con las cuatro flechas, volver al inicio cuando sale de la pista, mostrar «win!» al tocar la línea roja de meta y añadir como ampliación árboles que se mueven hacia atrás. Esta adaptación crea un juego digital original de un recorrido por el barrio: no usa vehículos reales, ránquines ni pruebas de conducción. Recupera de L16 variables y condiciones, y convierte la lección en un ciclo completo de diseño, prueba, comentarios y revisión.

#### Fase 1 · Activamos y predecimos (5 min)

Mostrad tres referencias de juegos (o dibujos propios) y comparad cómo el color, la forma y el fondo ayudan a entender un personaje y su recorrido. Elegid un lugar ficticio próximo —patio, plaza o camino de la huerta— y definid la idea del juego, el estilo visual, el punto de inicio, el color de la pista, la zona fuera de ruta y la línea roja de llegada. Esbozad un mapa con estos cinco elementos antes de abrir mBlock.

#### Fase 2 · Exploramos y construimos (10 min)

En mBlock, dibujad o montad un fondo original con pista ancha y distinguible, línea de inicio, línea roja de meta y una zona fuera de pista de un color uniforme. Cread un personaje digital original o adaptad uno de la biblioteca, asignadle un nombre y estableced una posición inicial. Programad las flechas arriba, abajo, izquierda y derecha con desplazamientos cortos; añadid una alternativa de teclas en pantalla o tarjetas de dirección para que no haga falta pulsar rápidamente.

![Codey Rocky real de la dotación, quieto junto a un ordenador que muestra el recorrido digital por el barrio, un vehículo virtual y la meta roja.](../../_assets/situacions/sa-cr-my-speedway-v3.webp)

_El robot envía controles al juego de pantalla; no es un coche físico ni una prueba de conducción._

#### Fase 3 · Explicamos y registramos (10 min)

Escribid primero las reglas en una tabla de decisión. La meta roja se tiene que comprobar antes que el retorno por salida de pista, porque el color de meta no debe activar las dos respuestas a la vez. Cuando el juego está activo, las flechas actualizan la posición; si el personaje toca la meta roja, cambia al estado `ganado`, muestra «win!» durante dos segundos e ignora más controles; si toca la zona fuera de pista, vuelve a la posición inicial. Haced pseudocódigo y probad por separado: dentro de ruta, fuera de pista, tocar meta y pulsar después de haber ganado.

```blocks
cuando se inicie el juego
  fijar estado a «activo»
  ir a la posición inicial
  para siempre
    si estado = «activo» y toca la línea roja
      fijar estado a «ganado»
      mostrar «win!» durante 2 segundos
    si estado = «activo» y toca el color de fuera de pista
      ir a la posición inicial

cuando se pulse una flecha
  si estado = «activo»
    mover el personaje en la dirección indicada
```

#### Fase 4 · Aplicamos y mejoramos (10 min)

Añadid la ampliación oficial: árboles del fondo se desplazan hacia atrás mientras el coche digital avanza; el movimiento del fondo tiene que ser decorativo y no alterar las reglas de colisión. Probad la partida con otra pareja. Esta anota una instrucción confusa, un caso límite y algo que ya se entiende; revisad una sola decisión de diseño y repetid los casos afectados. No puntuéis velocidad ni comparéis personas.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** storyboard y fondo/personaje originales, pseudocódigo, controles de cuatro direcciones, tabla de decisión, pruebas reproducibles de pista/meta/fuera de pista/estado ganado, efecto opcional del fondo, comentarios entre parejas y autoevaluación sobre qué se ha diseñado, qué error se ha corregido y qué versión es más clara.

**Pregunta docente:** ¿qué regla hace que el juego continúe siendo comprensible cuando el personaje llega al límite o a la meta?
### **L18 · Un juego con el giroscopio de Codey (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Comparad cómo se controla un juego en ordenador, móvil o consola y elegid una idea propia de recorrido. Definid qué representa inclinar Codey hacia la izquierda y hacia la derecha, qué mensaje recibirá el personaje del juego y cómo se detendrá la partida. Inclinar el robot es una opción voluntaria; se puede seguir la misma predicción desde el diagrama o con teclas.

#### Fase 2 · Exploramos y construimos (10 min)

Diseñad una escena y un personaje originales en mBlock. Cread los eventos **Codey inclinado a la izquierda** y **Codey inclinado a la derecha**; cada uno muestra un icono y envía el mensaje correspondiente. Configurad el coche virtual para que, al recibir el mensaje, detenga primero cualquier otro script del mismo sprite y después empiece un giro continuo en el sentido indicado. Mantened Codey sobre la mesa e inclinadlo suavemente, sin levantarlo ni agitarlo. Si la calibración del giroscopio está disponible en la versión del entorno, calibradlo antes de probar.

![Codey Rocky real de la dotación, quieto junto a un ordenador con un laberinto virtual, un personaje digital y una meta; dos flechas indican la entrada de inclinación.](../../_assets/situacions/sa-cr-controls-giroscopi-v2.webp)

_El movimiento representado es del personaje virtual; el robot permanece quieto mientras envía las entradas._

#### Fase 3 · Explicamos y registramos (10 min)

Trazad la cadena entrada del giroscopio → mensaje → detención del script anterior → respuesta del sprite. Probad izquierda → derecha → izquierda, vuelta a posición neutra y ausencia de mensaje cuando Codey está plano. En una copia, quitad temporalmente el bloque de detención y haced el cambio izquierda/derecha: observad cómo los dos bucles pueden quedar activos y conflictuar. Restauradlo y comprobad que solo se mueve en la dirección del mensaje más reciente.

```blocks
cuando Codey se incline a la izquierda
  mostrar icono izquierda
  enviar «girar_izquierda»

cuando Codey se incline a la derecha
  mostrar icono derecha
  enviar «girar_derecha»

cuando el personaje reciba «girar_izquierda»
  detener los otros scripts de este personaje
  para siempre
    decir «izquierda»
    girar 1 grado
    avanzar 1 paso

cuando el personaje reciba «girar_derecha»
  detener los otros scripts de este personaje
  para siempre
    decir «derecha»
    girar 1 grado
    avanzar 1 paso
```

#### Fase 4 · Aplicamos y mejoramos (10 min)

Elegid una idea de juego nueva (por ejemplo, seguir un canal, esquivar una mancha o llegar a una meta), construid un prototipo corto, probadlo y corregid una incidencia cada vez. Comparad los controles disponibles y elegid uno según el juego y las necesidades del grupo:

| Control | Punto fuerte | Límite que hay que comprobar |
|---|---|---|
| Inclinación de Codey | Interacción directa con el giroscopio integrado | Hay que ajustar el gesto y mantener el robot estable sobre la mesa |
| Teclado | Dirección precisa y rápida | Requiere ordenador y pulsar teclas |
| Tarjetas de dirección | Permite predecir y acordar órdenes sin dispositivo de entrada | Una persona tiene que traducir cada tarjeta a la acción del juego |

Registrad para cada alternativa precisión percibida, facilidad de uso y equipamiento necesario; son observaciones de aula, no medidas universales. Añadid o retirad una opción a partir de los comentarios y repetid la prueba. Una variable de estado puede sustituir los mensajes como ampliación, pero comparad su legibilidad con el broadcast antes de elegir.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** escena/personaje, diagrama de entrada–mensaje–detención–sprite, código de los dos receptores, registro de la prueba izquierda/derecha/neutra y del conflicto reproducible sin detención, y comparación entre inclinación, teclado y tarjetas. Autoevaluación sobre el control elegido y la depuración de los scripts.

**Autoevaluación:** «he creado un control interactivo», «el conflicto que he encontrado era…», «lo he resuelto deteniendo…».

**Pregunta docente:** ¿qué pasa si no paramos el otro script antes de enviar el mensaje de giro contrario?

### **L19 · Mecánicas de juego I (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad el juego de recorrido de L17 y convertidlo en una ruta virtual para una barquita mensajera de la marjal. Antes de tocar el código, definid tres tipos de reglas: qué representan los elementos de juego, qué acciones puede hacer el personaje y qué resultado cierra la partida. Acordad también una regla común y transparente para que todas las personas jueguen en las mismas condiciones.

#### Fase 2 · Exploramos y construimos (10 min)

Dibujad una pista ancha con inicio, meta y una zona exterior bien diferenciada; usad colores diferentes para el canal, el exterior y la meta, y no los hagáis tocarse. En esta primera versión no añadáis obstáculos ni cronómetro. En mBlock, conectad Codey y haced que A y B envíen mensajes de control a la barquita; si la conexión no está disponible, usad las flechas del teclado o tarjetas equivalentes. Definid en una tarjeta de reglas qué quiere decir «dentro de la pista», qué pasa cuando se sale y cómo se reconoce la llegada.

![Codey Rocky real de la dotación, quieto junto a un ordenador con el juego digital de una barquita que recorre un canal y una meta.](../../_assets/situacions/sa-cr-mecanica-joc-v2.webp)

_El mapa ilustra la regla de límite del juego; la barquita es un personaje digital y no un robot físico._

#### Fase 3 · Explicamos y registramos (10 min)

Programad los casos previstos con ramas excluyentes: si la barquita toca la meta, muestra la señal final y deja de recibir órdenes; si no, pero toca el exterior, vuelve al inicio; de lo contrario, continúa por el canal. Así, una misma lectura no puede reiniciar y acabar la partida en el mismo ciclo. El personaje de juego puede ser una ilustración original: no se presenta como un robot físico ni como una representación exacta de fauna local.

```blocks
cuando se pulse A en Codey
  enviar el mensaje «avanzar»
cuando se pulse B en Codey
  enviar el mensaje «girar»

cuando el personaje reciba «avanzar» o «girar»
  mover el personaje según la orden
  si toca la meta
    mostrar «misión completada»
    detener los controles
  si no, si toca la zona exterior
    volver al inicio
    reiniciar la ruta
  si no
    continuar la ruta
```

Trazad una partida que sigue la ruta, una que sale del canal y una que llega a la meta. Probad también una configuración incorrecta en la que meta y exterior comparten color: detectad el conflicto, separad las zonas y repetid. En cada caso, comprobad que el resultado corresponde a la tarjeta de reglas.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Haced una prueba de uso con una pareja que no haya programado la ruta. Observad si puede explicar las reglas solo con la pantalla y las instrucciones disponibles. Recoged un comentario concreto y cambiad una sola condición o elemento del fondo antes de repetir la prueba. Para empezar, ampliad el canal y retirad los giros. Para aumentar el reto, reducid la anchura o añadid una vuelta con un tiempo acordado; cada equipo compara su propio prototipo antes/después, sin clasificación entre personas.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** tarjeta de reglas (elementos, acciones y resultados), escena con tres colores separados, controles con mensajes o vía alternativa, tabla de verdad de los casos interior/meta/exterior, prueba del solapamiento corregido, versión inicial y revisada, y una iteración basada en los comentarios.

**Pregunta docente:** ¿qué regla explica mejor qué tiene que hacer quien juega cuando sale del canal o llega a la meta?

### **L20 · Mecánicas de juego II (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad el prototipo de L19 y distinguid tres maneras de crear conflicto: un obstáculo fijo o móvil, un oponente (otro personaje u obstáculo que compite por el espacio) y un dilema con opciones que tienen ventajas diferentes. El obstáculo móvil hará el papel de conflicto principal; más adelante añadiréis un mensaje coleccionable y una elección de ruta. Predecid cómo cambia una sola regla cada vez.

#### Fase 2 · Exploramos y construimos (10 min)

Añadid una rama a la deriva que baja desde la parte superior de la pantalla. Si toca la barquita, esta vuelve al inicio; después de una pausa breve, la rama reaparece desde arriba. Si no hay contacto y la rama llega al margen inferior, desaparece y la ruta continúa. Hacedla grande y lenta en la primera prueba, y añadid controles visibles para pausar o reiniciar.

![Codey Rocky real de la dotación, quieto junto a un ordenador con el juego digital de la barquita, el obstáculo, el mensaje coleccionable y las dos rutas.](../../_assets/situacions/sa-cr-obstacles-joc-v2.webp)

_La escena representa un obstáculo, un objeto coleccionable y dos rutas; las reglas concretas se prueban en el prototipo de mBlock._

#### Fase 3 · Explicamos y registramos (10 min)

Representad las reglas con pseudocódigo y una tabla de estados. La rama y una ficha de mensaje caen a la vez: si la rama toca la barquita, se reinicia la posición y no se cuenta ninguna recogida de aquel ciclo; si no hay contacto con la rama, pero la barquita toca la ficha antes de que llegue al suelo, `mensajes` aumenta en 1 y la ficha desaparece; si la ficha llega al suelo, desaparece sin sumar. Al llegar al final del canal, el juego se detiene. Haced que la rama y la ficha reaparezcan después de una pausa, con posiciones separadas para que una ronda sea posible.

| Estado/evento | Respuesta esperada | Evidencia |
|---|---|---|
| La rama toca la barquita | Vuelve al inicio y la rama reaparece después de una pausa | Posición antes/después |
| La rama pasa sin tocar | Continúa el juego | Ningún reinicio |
| La barquita toca ficha antes del suelo | Suma un mensaje y oculta la ficha | Contador +1 |
| La ficha llega al suelo | La ficha desaparece sin sumar | Contador sin cambio |
| La barquita llega a la meta | Muestra «misión completada» y detiene los controles | Estado final |

Probad cada transición con posiciones fijadas antes de activar las apariciones aleatorias. Comprobad también que la colisión con la rama tenga prioridad si los dos objetos quedan superpuestos en una misma lectura.

```blocks
cuando comience la partida
  fijar estado a «en curso»
  fijar mensajes a 0
  situar la barquita al inicio
  para siempre
    si estado = «en curso»
      mover rama y ficha hacia abajo
      si la barquita toca la meta
        fijar estado a «completado»
        mostrar «misión completada»
      si no, si la barquita toca la rama
        situar la barquita al inicio
        ocultar la rama
        esperar 1 segundo
        mostrar la rama arriba
      si no, si la barquita toca la ficha y la ficha no ha llegado al suelo
        cambiar mensajes en 1
        ocultar la ficha
      si la ficha llega al suelo
        ocultar la ficha
```

#### Fase 4 · Aplicamos y mejoramos (10 min)

Otra pareja prueba el juego sin instrucciones orales. Ajustad una sola variable —velocidad de caída, tamaño de la rama, pausa entre apariciones o anchura de la ruta— y repetid los casos afectados. Como dilema, ofreced un atajo más corto pero estrecho y un camino más largo pero ancho. Antes de elegir, cada pareja predice el coste y el beneficio; después registrad longitud en casillas, número de giros y mensajes recogidos, sin cronómetro ni comparación entre grupos. La versión guiada puede eliminar el obstáculo móvil; el reto avanzado combina rama, ficha y elección de ruta.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** prototipo de L19 con obstáculo que reaparece, ficha que se recoge antes de caer y atajo estrecho; tabla de estados, valores antes/después del contador, prueba de contacto/no contacto y llegada, predicción y registro de las dos rutas, comentarios entre parejas y una versión revisada.

**Pregunta docente:** ¿qué cambio ha hecho el reto más interesante y qué evidencia muestra que las reglas todavía son comprensibles y justas?

### **L21 · Rápido y seguro (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad la ruta virtual de L19–L20 y completad sus condiciones de victoria y de reinicio. En esta sesión, Codey es el mando de un personaje digital dentro de mBlock: el robot físico se queda quieto sobre la mesa, no participa en una carrera ni se mueve a gran velocidad. Predecid qué tiene que pasar cuando el coche virtual completa una vuelta, sale de la pista o toca un obstáculo.

#### Fase 2 · Exploramos y construimos (10 min)

Dibujad una pista cerrada y suficientemente ancha, una línea azul de meta, una zona fuera de pista y un obstáculo gráfico. Colocad el inicio justo después de la línea azul y marcadlo como «todavía no ha salido» hasta que el personaje pase por la meta una primera vez; así no gana al empezar. Usad A/B de Codey para enviar mensajes al personaje en mBlock; si no hay conexión, mantened el control con teclado o tarjetas. Preparad una señal visual de victoria y una respuesta sonora opcional, siempre con una alternativa visual silenciosa.

![Codey Rocky real de la dotación está quieto junto a un ordenador que muestra el circuito virtual, el coche digital, la meta azul y un obstáculo.](../../_assets/situacions/sa-cr-fast-and-furious-v2.webp)

_El coche es un personaje digital controlado por Codey; la unidad física no se mueve durante esta actividad._

#### Fase 3 · Explicamos y registramos (10 min)

Implementad estados excluyentes. Si el personaje sale de la pista o toca el murciélago, pierde la vuelta. Mostrad una señal visual de retorno y, si el grupo lo elige, reproducid un aviso neutro y breve (nunca una explosión); después, vuelve al inicio y reinicia `ha_salido_meta` a falso. Si no se ha producido una pérdida, marcad `ha_salido_meta` cuando el personaje ya no toque la línea azul; solo cuando esta variable es cierta y el coche vuelve a tocar la línea, completa una vuelta, muestra una señal de victoria y puede reproducir un sonido breve. Para una extensión de varias vueltas, aumentad `vueltas` en cada cruce válido, poned `ha_salido_meta` a falso mientras cruza la línea y continuad hasta el objetivo elegido; una línea roja puede definir una segunda meta con otro resultado. Registrad el estado antes y después de cada evento. Comprobad que la posición de inicio no activa la victoria y que solo el retorno a la línea después del recorrido cuenta como vuelta.

```blocks
cuando comience la partida
  situar el coche virtual al inicio
  establecer estado a «en curso»
  establecer ha_salido_meta a falso

mientras estado sea «en curso»
  si el coche sale de la pista o toca el obstáculo
    mostrar el aviso visual de retorno
    reproducir un aviso neutro (opcional)
    devolver el coche al inicio
    establecer ha_salido_meta a falso
    reiniciar la partida
  si no
    si el coche no toca la línea azul
      establecer ha_salido_meta a verdadero
    si ha_salido_meta y el coche toca la línea azul
      mostrar la señal de victoria
      reproducir un sonido breve (opcional)
      establecer estado a «vuelta completada»
```

#### Fase 4 · Aplicamos y mejoramos (10 min)

Invitad a una pareja a probar el juego y observar si entiende la meta, el reinicio y el obstáculo sin explicación oral. Cambiad una regla cada vez y repetid los casos. Como extensiones del material oficial, ofreced una vuelta dentro de un tiempo personal, varias vueltas o una segunda meta roja con un resultado diferente; ningún tiempo se publica ni se compara entre personas. La pista ancha, menos obstáculos, control por teclado y retroalimentación visual silenciosa son la opción guiada.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** pista digital con línea azul, obstáculo y mensajes de control; diagrama de estados; pruebas de inicio sin victoria, vuelta completada, salida de pista y contacto con obstáculo; y, si se activa, una ampliación de varias vueltas o meta roja. El registro confirma que el retorno por derrota tiene retroalimentación visual y sonora opcional, que sonido e imagen tienen alternativas equivalentes y que una revisión viene del playtesting.

**Pregunta docente:** ¿cómo sabe el programa que el coche ha completado una vuelta y no acaba de empezarla?

### **L22 · Curvas con Codey Rocky (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recordad que Rocky se mueve con dos ruedas motrices. Representadlas con dos fichas —o, si el grupo lo prefiere, con dos personas que muestran flechas sin tener que desplazarse— y probad tres casos: las dos ruedas avanzan igual, una rueda avanza más que la otra y una rueda queda quieta mientras la otra avanza. Predecid qué caso produce una recta, un círculo ancho o un giro más cerrado. Este modelo es una simplificación: no reproduce la fricción ni las diferencias entre motores reales.

#### Fase 2 · Exploramos y construimos (10 min)

En mBlock, localizad el bloque de movimiento que permite ajustar la potencia de las ruedas de Rocky (0–100) y preparad una pista ancha de papel, con inicio y parada bien visibles. Probad primero un tramo recto con potencias iguales; después, una vuelta circular y una semicircular modificando la diferencia entre las dos ruedas. Mantened una potencia baja, dejad espacio libre alrededor y detened el programa antes de recolocar el robot. No hace falta perseguir una forma geométrica perfecta: el propósito es relacionar la diferencia de velocidad de las ruedas con la curvatura observada.

![Codey Rocky real en el punto inicial de una pista de papel con una vuelta circular, una semicircunferencia, una curva en S y un ocho.](../../_assets/situacions/sa-cr-fem-un-gir-v2.webp)

_Las trayectorias son una representación propia del reto de curvas; las potencias indicadas en mBlock se tienen que probar con el robot disponible._

#### Fase 3 · Explicamos y registramos (10 min)

Diseñad en el mapa una ruta que combine una circunferencia y una semicircunferencia e intercambiadla con otra pareja. Antes de ejecutarla, anotad los valores elegidos para cada rueda y la forma esperada; después, marcad la traza real con un lápiz o con una tira de papel. Registrad si el robot completa la curva, dónde se abre o se cierra y qué diferencia de potencia lo puede explicar. Repetid la prueba sin cambiar los valores para distinguir una desviación puntual de un resultado consistente.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Dibujad una curva en S y acordad un tiempo amplio para completarla como prueba de planificación, no como competición entre personas. Divididla en tramos, indicad cuándo cambia el sentido de la curva y probad el recorrido con Codey Rocky en una zona delimitada. Cambiad una sola diferencia de potencia o la duración de un tramo, volved a probar y comparad las trazas. Como ampliación del reto oficial, diseñad curvas consecutivas o un ocho; intercambiad el mapa con otra pareja para que pueda predecir el orden antes de programarlo.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** mapa propio con círculo, semicírculo y curva en S; valores de las dos ruedas; trazas previstas y observadas; y una modificación justificada. Haced una autoevaluación breve: «En esta sesión he aprendido que…», «durante la prueba me ha costado…» y «lo he resuelto…».

**Pregunta docente:** ¿cómo cambia la trayectoria cuando una rueda gira más deprisa que la otra, y por qué el mismo programa puede dibujar una curva diferente en otra superficie?

### **L23 · Giro y obstáculos (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Recuperad las trazas curvas de L22 y presentad un tramo recto del camino escolar con un obstáculo blando en medio. Rocky tiene que continuar el recorrido cuando el camino está libre y hacer una desviación cuando el sensor IR frontal detecta el obstáculo. Predecid qué órdenes tiene que ejecutar en cada caso y dibujad una ruta lateral que le deje avanzar paralelamente al obstáculo. Aclarad que es una maqueta didáctica: no prueba que el robot pueda circular con seguridad por una calle real.

#### Fase 2 · Exploramos y construimos (10 min)

Comprobad que el módulo de color de Rocky, que incorpora el sensor de proximidad IR, mira hacia delante y que mBlock ofrece el bloque de detección de obstáculos. En una pista plana, ancha y sin bordes expuestos, programad el inicio con A y una condición: si el sensor detecta el obstáculo, girad a la derecha, avanzad un tramo corto a potencia reducida, girad a la izquierda y volved a leer el sensor; si no detecta ninguno, avanzad a baja potencia. Añadid un contador de desviaciones: después de tres intentos seguidos sin liberar el paso, detened los motores y mostrad un aviso, en lugar de continuar probando indefinidamente. Reiniciad el contador cuando el camino vuelva a estar libre. Si «Mis bloques» está disponible, agrupad la maniobra en `esquivar_obstaculo()`; de lo contrario, conservadla como una secuencia de bloques visible. Si el sensor o el firmware no son compatibles, simulad la entrada con tarjetas y etiquetad la prueba como simulación.

```blocks
cuando se pulse A
  fijar intentos seguidos a 0
para siempre
  si se detecta un obstáculo
    si intentos seguidos < 3
      girar a la derecha
      avanzar un tramo corto a potencia baja
      girar a la izquierda para recuperar la orientación
      sumar 1 a intentos seguidos
    si no
      detener los motores
      mostrar aviso de camino bloqueado
  si no
    fijar intentos seguidos a 0
    avanzar con potencia baja durante 1 s
```

![Codey Rocky real detenido a distancia segura de un bloque blando, con flechas de papel que muestran una ruta alternativa.](../../_assets/situacions/sa-cr-gir-obstacles-v2.webp)

_El recorrido es una maqueta propia para probar la respuesta del sensor IR; no representa una instrucción para circular en un espacio público._

#### Fase 3 · Explicamos y registramos (10 min)

Ejecutad primero el programa con el camino libre y después con el obstáculo blando delante, siempre desde la misma marca. Registrad el estado esperado, la lectura o respuesta del sensor, las órdenes ejecutadas y si Rocky recupera el sentido inicial del recorrido. Repetid cada caso una vez sin cambiar el programa. En una prueba controlada, colocad el obstáculo de manera que no se pueda esquivar y comprobad que el tercer intento detiene los motores y muestra el aviso; retiradlo y verificad que el contador se reinicia. Si la lectura aparece como una distancia, anotadla como valor aproximado del sensor; no la convirtáis en una garantía sobre objetos, personas o distancias reales.

#### Fase 4 · Aplicamos y mejoramos (10 min)

Cambiad el sentido de la desviación para probar la extensión oficial de esquivar hacia el otro lado y comparad qué versión mantiene mejor la orientación de la ruta. Añadid, cuando sea adecuado, una expresión en la matriz LED y un sonido breve y suave al detectar el obstáculo; mantened siempre una señal visual equivalente y dejad el sonido desactivado si dificulta la escucha o la concentración. Una persona observadora puede mostrar «libre» u «obstáculo» con tarjetas para que el equipo contraste la condición antes de activar el robot. Intercambiad el diagrama con otra pareja, que tiene que predecir el resultado de los dos casos. Modificad una sola orden cada vez y mantened siempre una persona responsable de la parada; no pongáis los dedos delante de las ruedas ni del sensor.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** mapa de la desviación, programa o función visible, tabla con los casos libre/obstáculo y bloqueo persistente, ejecuciones repetidas, detención después del tercer intento y reinicio del contador cuando el camino queda libre. Añadid un cambio justificado y, si se activa la retroalimentación, registrad también la expresión LED y el sonido opcional con su alternativa visual.

**Pregunta docente:** ¿qué parte del recorrido depende de la lectura IR y qué situaciones reales no podemos dar por resueltas con esta prueba?

### **L24 · Sigue la línea (40 min).**

#### Fase 1 · Activamos y predecimos (5 min)

Diseñad una maqueta de ruta entre un centro de interpretación de la Albufera y un observatorio de aves: la cinta negra representa el camino y los espacios claros, el agua o los campos. Localizad el sensor de color inferior de Rocky y su punto de luz RGB. Predecid si la lectura de luz reflejada será más alta sobre la línea o sobre el fondo y explicad por qué el valor puede cambiar con la superficie o la luz del aula. Es un modelo de mesa, no una propuesta para circular en el entorno natural. La lectura es una unidad propia del sensor, no una medida en lux.

#### Fase 2 · Exploramos y construimos (10 min)

Comprobad que el sensor inferior y el bloque de lectura de luz reflejada funcionan. Mostrad el valor en la matriz LED de Codey en tiempo real y preparad tarjetas con superficies diferentes. Medid primero la superficie clara y después la cinta negra; repetid la lectura con el punto RGB situado en el borde de la línea, tal como propone el cuaderno. Haced tres lecturas por superficie, anotad los valores y calculad un umbral inicial entre los valores típicos de fondo y línea. Registrad cada valor sin llamarlo lux ni suponer que será igual en todos los robots.

![Codey Rocky real sobre una línea negra de papel; el sensor inferior queda orientado hacia la superficie de prueba.](../../_assets/situacions/sa-cr-segueix-linia-v2.webp)

_La ilustración señala el punto de lectura que se compara con las superficies claras y oscuras._

#### Fase 3 · Explicamos y registramos (10 min)

Simulad la regla con una ficha y flechas: cuando la lectura queda de un lado del umbral, representad una corrección de 45° hacia un lado; cuando queda al otro, representad la corrección opuesta. Es una versión de mesa del juego de simulación del cuaderno, sin exigir movimientos corporales. Después, programad Rocky para que avance a potencia baja y corrija alternativamente la dirección según la lectura; el umbral y el sentido de cada corrección se tienen que comprobar con los datos y la orientación del sensor de la unidad disponible. Empezad en un tramo recto ancho, añadid una curva solo cuando la respuesta sea repetible y dejad una zona de detención libre.

```blocks
cuando se pulse A
  leer las superficies clara y oscura
  establecer umbral entre las dos lecturas
  para siempre
    mostrar la lectura reflejada
    si la lectura queda en el lado de línea del umbral
      corregir ligeramente hacia un lado
    si no
      corregir ligeramente hacia el otro lado
    avanzar a potencia baja
```

_Esbozo de lógica, no una secuencia de bloques con nombres universales: calibrad el umbral, el sentido de giro y la potencia con el mBlock y el Rocky del centro._

#### Fase 4 · Aplicamos y mejoramos (10 min)

Probad el recorrido de maqueta entre el centro de interpretación y el observatorio, primero en recta y después con una curva ancha. Registrad dónde pierde o recupera la línea Rocky y cuántas de tres pruebas llega a la meta. Cambiad solo el umbral entre negro y claro o la potencia de movimiento, repetid las tres pruebas y comparad la traza. Si el sensor o la versión no son compatibles, completad la misma secuencia con lecturas simuladas y marcad claramente qué se ha medido y qué se ha representado.

#### Fase 5 · Comprobamos y reflexionamos (5 min)

**Evidencia:** tabla de tres lecturas sobre fondo, línea y borde; umbral elegido y justificación; algoritmo de corrección; traza del recorrido y recuento de tres pruebas antes/después de un único cambio. Adjuntad también la simulación en papel si el sensor no está disponible.

**Pregunta docente:** ¿cómo ayuda el umbral, calculado con las lecturas de vuestro Rocky, a corregir la dirección y por qué no podemos copiarlo sin probarlo en otra unidad o superficie?
## 🧰 Hardware, software y dependencias

Codey Rocky, ordenador con versión compatible de mBlock, cable USB o conexión probada y materiales planos de cartón. Usad exclusivamente módulos integrados comprobados en la unidad: botones, pantalla, indicador RGB, altavoz, sensor de sonido/luz, potenciómetro, giroscopio, emisor/receptor IR y sensor de color/distancia del chasis, según el modelo y firmware. Las actividades L21–L24 necesitan el Rocky y su sensor correspondiente; si no está disponible, haced el mismo algoritmo en simulación. Neuron queda fuera de esta adaptación.

## 🛡️ Seguridad, privacidad e inclusión

Limitad las pruebas móviles a una mesa estable o pista cerrada sin bordes, cableado ni obstáculos duros. El sensor de sonido no registra ni identifica voces. Ofreced botones o teclado como alternativas al giroscopio, código en papel cuando haya dificultades de conexión y funciones equivalentes para quien no manipule el robot.

## 🧪 Evidencias y evaluación

A lo largo de las 24 sesiones, cada pareja conserva un guion de diseño, pseudocódigo, programa, tabla de pruebas y cambio justificado. El museo final incorpora instrucciones accesibles, una demostración y una nota que explica qué mide cada sensor y qué no puede concluir. Se evalúan descomposición, secuencia, bucles, condiciones, variables, funciones, depuración, prueba y colaboración.

## 🔗 Repertorio oficial adaptado

Esta secuencia adapta las 24 lecciones CSTA publicadas por Makeblock: [The Secret of Codey Rocky](https://www.makeblock.com/pages/codey-rocky-robot-toys-for-kids), *Press Buttons to Change Emotions*, *To Be an Animation Designer*, *Identify the Bug*, *The Steamed Bread Can’t Jump*, *The Jumping Steamed Bread*, *The Racing Game I/II*, *Volume Bar*, *Good Morning! Functions*, *The Tiny Patroller I/II*, *The Squirrel’s Nuts Box*, *Mathematical Operations*, *The Bomb*, *Rock-Paper-Scissors*, *My Speedway*, *Game Control Schemes*, *Game Mechanics I/II*, *Fast and Furious*, *Make a Turn*, *Make a Turn Avoid Obstacles* y *Line-Following Car*. Cada reto se ha reinterpretado con materiales y contexto propios. Las fichas consultables directamente se enlazan a la [página oficial del curso CSTA](https://www.makeblock.com/pages/codey-rocky-robot-toys-for-kids): [L1](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2001%20The%20Secret%20of%20Codey%20Rocky_Sheet.pdf), [L3](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2003%20To%20Be%20an%20Animation%20Designer_Sheet.pdf), [L4](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2004%20Identify%20the%20Bug_Sheet.pdf), [L13](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2013%20The%20Squirrel%E2%80%99s%20Nuts%20Box_Sheet.pdf), [L14](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2014%20Mathematical%20Operations_Sheet.pdf), [L15](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2015%20The%20Bomb_Sheet.pdf), [L17](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2017%20My%20Speedway_Sheet.pdf) y [L18](https://res-us.makeblock.com/doc/course/Codey%20Rocky/Lesson%2018%20Game%20Control%20Schemes_Sheet.pdf). Para L2, el fabricante publica el [manual docente de *Basic Coding Courses*](https://qiniu.makeblock.com/education-makeblock-com/SampleofTeachersBook.pdf) y el [cuaderno del alumnado](https://qiniu.makeblock.com/education-makeblock-com/studentbook.pdf): en ellos se contrastan eventos, señales geométricas, bloques de inicio y de botón, práctica por parejas y presentación. La secuencia local adapta estos elementos con símbolos propios, sin atribuir estados emocionales reales. Para L5–L6, el cuaderno confirma las animaciones con bucle con contador e infinito, la progresión entre repeticiones finitas y continuas, la activación por evento, la creación de historias, la presentación y la autoevaluación; la detención de L6 usa la función oficial [`stop_all_scripts()`](https://github.com/Makeblock-official/micropython-api-doc/blob/master/docs/codey%26rocky/codey/script%20control.rst) como recurso de control local. El cuaderno del alumnado también permite contrastar los objetivos de *Make a Turn* (repaso de conceptos básicos de robótica y diseño de una ruta para Codey Rocky) y *Line-Following Car* (aplicaciones, intensidad reflejada y seguimiento), pero no equivale a los planes docentes completos. La misma fuente contiene una lección diferente, *Avoid Obstacles*, con funciones, matemáticas y obstáculos; la usamos como referencia complementaria y no como prueba del plan CSTA *Make a Turn Avoid Obstacles*. Los objetivos del curso separado [Codey Rocky & Neuron Discovery](https://support.makeblock.com/hc/en-us/articles/25494707612823-Codey-Rocky-Neuron-Discovery) solo se usan como comprobación complementaria para L1–L16; no se mezclan los dos repertorios.

Makeblock publica aparte el curso [Codey Rocky & Neuron Discovery](https://support.makeblock.com/hc/en-us/articles/25494707612823-Codey-Rocky-Neuron-Discovery), de 34 lecciones. Solo se podrán adaptar unidades compatibles con la dotación cuando se confirme qué componentes Neuron hay disponibles; esta ficha no los presupone.
