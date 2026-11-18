---
active: true
title: "El laboratorio de sensores de Codey Rocky"
description: "Doce retos para explorar los botones, la matriz LED, el infrarrojo, el potenciómetro, el sensor de color y el giroscopio de Codey Rocky."
robot: "codey-rocky"
robot_label: "Codey Rocky"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Ciencias"
theme: "tecnologia"
theme_label: "Sensores y interacción"
duration: "12 sesiones"
challenge: "¿Cómo puede Codey Rocky percibir señales de su entorno y convertirlas en respuestas que sean útiles, claras y comprobables?"
---

![Codey Rocky observa tarjetas de colores y una rueda de selección mientras muestra una expresión en la pantalla LED.](../../_assets/situacions/cr-entrades-sensors.webp)

_El laboratorio combina los componentes integrados de Codey con materiales de prueba del aula._

## 🧩 Reto y contexto

La clase abre un laboratorio de interacción para una exposición tecnológica del centro. En cada reto, un equipo elige una entrada, anticipa qué leerá Codey Rocky, programa una respuesta y la comprueba con casos distintos. Las doce sesiones adaptan lecciones públicas de *Codey Rocky & Neuron Discovery* que utilizan botones, matriz LED, infrarrojo, potenciómetro, sensor de color o giroscopio integrados. El curso original también contiene retos que necesitan módulos Neuron; se identifican al final y no se presuponen aquí.

## 🧪 Secuencia de retos

### **Sesión 1 · *Find the Blue Dot*.**

#### Fase 1 · Activamos y predecimos

Preparad una cuadrícula de papel con filas y columnas. Predecid cómo se podría indicar una casilla sin escribir su nombre: un punto, una flecha o una coordenada por turno.

#### Fase 2 · Exploramos y construimos

Programad el botón de Codey para que inicie el reto y la matriz LED para que muestre un punto o una flecha. Asociad cada símbolo con una casilla del tablero.

#### Fase 3 · Explicamos y registramos

Anotad la casilla indicada y la entrada que ha activado el programa. Distinguid el momento de leer el botón del momento de actualizar la pantalla.

#### Fase 4 · Aplicamos y mejoramos

Probad una pulsación corta, una larga y ninguna entrada. Si dos pulsaciones generan respuestas difíciles de distinguir, ajustad la regla o el símbolo LED.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de entradas y casillas con una regla que otra pareja pueda seguir. Explicad qué hace el programa cuando no recibe ninguna señal.

### **Sesión 2 · *Lucky Wheel*.**

#### Fase 1 · Activamos y predecimos

Elegid opciones neutras, como qué reto cooperativo probar, y representadlas en una rueda de papel. Predecid si cada opción saldrá con la misma frecuencia.

#### Fase 2 · Exploramos y construimos

Usad el botón para iniciar y detener una secuencia de selección en la matriz LED. Diferenciad una animación que solo parece una rueda de una selección que depende de un valor variable.

#### Fase 3 · Explicamos y registramos

Haced una serie de rondas y anotad cada resultado con marcas de recuento. Mantened el mismo número de opciones y el mismo número de intentos por tanda.

#### Fase 4 · Aplicamos y mejoramos

Comparad dos tandas y revisad que el programa no favorezca una posición por el orden de la secuencia o por el tiempo de pulsación. Si no hay un bloque aleatorio, describid el resultado como una animación cíclica, no como una elección aleatoria.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** recuento de resultados y explicación de por qué las frecuencias observadas pueden variar. La rueda es una dinámica de juego, no un mecanismo para tomar decisiones importantes.

### **Sesión 3 · *Codey Rocky Can Do Addition*.**

#### Fase 1 · Activamos y predecimos

Repartid objetos de prueba en dos categorías y haced un recuento manual inicial. Predecid cómo cambiará la suma cuando se añada una detección a cada categoría.

#### Fase 2 · Exploramos y construimos

Comprobad qué evento infrarrojo puede generar realmente el modelo y el equipamiento disponible. Programad dos contadores: cada detección válida dentro de la ventana acordada aporta una unidad al registro correspondiente.

#### Fase 3 · Explicamos y registramos

Mostrad los dos recuentos y la suma. Registrad los valores antes y después de cada entrada para poder reconstruir el cálculo.

#### Fase 4 · Aplicamos y mejoramos

Comparad el resultado programado con el recuento manual en una tanda nueva. Revisad dobles detecciones o señales que no se hayan contado y ajustad la ventana de prueba.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de recuento manual y del programa con una suma explicada. No interpretéis lecturas IR no documentadas como distancias calibradas.

### **Sesión 4 · *Jump! Codey!*.**

#### Fase 1 · Activamos y predecimos

Dibujad una pista corta de papel y elegid un icono para representar la activación. Predecid qué debe pasar cuando llega la entrada IR y qué debe pasar cuando no llega.

#### Fase 2 · Exploramos y construimos

Programad la entrada IR acordada para que Codey cambie el icono de la pantalla y Rocky haga un movimiento breve. Mantened la pista libre de obstáculos rígidos y el robot sobre una superficie estable.

#### Fase 3 · Explicamos y registramos

Registrad las entradas detectadas, el icono mostrado y si se ha producido el movimiento. Separad la lectura real del sensor de la regla de juego que habéis elegido.

#### Fase 4 · Aplicamos y mejoramos

Comparad una versión con pausa y una sin ella. Revisad si las señales consecutivas se distinguen y si el movimiento se mantiene dentro de la pista.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** programa y tabla de pruebas con activación presente/ausente. Explicad qué detecta el infrarrojo y qué parte es solo una convención del juego.

### **Sesión 5 · *RC Car*.**

#### Fase 1 · Activamos y predecimos

Dibujad una ruta de reparto en una cuadrícula y acordad un vocabulario corto de órdenes. Predecid qué instrucciones podrían perderse o repetirse durante una transmisión.

#### Fase 2 · Exploramos y construimos

Con dos Codey Rocky y dos dispositivos IR compatibles, configurad un emisor y un receptor. El emisor envía órdenes de ruta y el receptor las convierte en movimientos o indicaciones del modelo.

#### Fase 3 · Explicamos y registramos

Registrad la orden enviada, la recibida y la respuesta. Intercambiad los roles para que cada equipo pruebe tanto la transmisión como la recepción.

#### Fase 4 · Aplicamos y mejoramos

Repetid una ruta y marcad órdenes perdidas o repetidas. Si solo hay un robot, alternad el control con un mando IR compatible disponible; si no hay ninguno, ensayad el protocolo con tarjetas e indicad que la transmisión física no se ha probado.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** registro emisor/receptor y una mejora propuesta para hacer las órdenes más fiables. Se necesitan dos dispositivos IR compatibles para validar la comunicación entre robots.

### **Sesión 6 · Un mensaje entre dos Codey.**

#### Fase 1 · Activamos y predecimos

Recordad la sesión anterior: localizad en cada Codey Rocky el emisor y el receptor IR según el manual del modelo, y explicad qué papel desempeña cada uno. En parejas, inventad una historia breve situada en un espacio próximo —por ejemplo, dos mensajes para orientar una visita al huerto escolar— y definid tres códigos numéricos con significado acordado. Predecid qué debería mostrar el receptor si recibe un código válido, uno desconocido o ningún mensaje. No empleéis nombres, ubicaciones particulares ni mensajes personales.

#### Fase 2 · Exploramos y construimos

Preparad dos Codey Rocky y dos ordenadores con mBlock compatible; si hace falta, conectadlos por USB o con los dispositivos Bluetooth disponibles. Un equipo programa el emisor con los bloques IR y el otro configura el receptor para que lea el valor recibido, lo guarde en una variable y elija una respuesta visual. Antes de probar, haced que otra pareja pueda leer la tabla de códigos. Si la dotación solo tiene un robot o no se puede verificar el enlace IR, completad el diseño con tarjetas y marcad la prueba física como pendiente.

#### Fase 3 · Explicamos y registramos

Escribid un guion de tres momentos —inicio, mensaje y respuesta— y ejecutadlo con los dos robots. Registrad para cada prueba el código enviado, el valor recibido, la variable y la respuesta LED; comparad el relato previsto con lo que realmente se ha mostrado. La historia y los símbolos son creación del equipo, no contenido incorporado al robot.

![Dos Codey Rocky de la dotación intercambian una señal IR representada de manera conceptual mientras el equipo prepara tarjetas de relato sobre un entorno próximo.](../../_assets/situacions/sa-cr-when-codey-meets-codey-v1.webp)

_La señal y las tarjetas son una representación didáctica; hay que comprobar la orientación y la recepción en el hardware disponible._

#### Fase 4 · Aplicamos y mejoramos

Añadid una respuesta segura para un valor no reconocido, como un icono neutral y ningún movimiento. Probad al menos cinco casos: cada código válido; un valor que no figure en la tabla; ninguna emisión; y una repetición del mensaje. Alternad emisor y receptor y comparad si la historia se entiende cuando cambia quién inicia el intercambio. No atribuyáis al robot confirmación de entrega, alcance garantizado ni comunicación a través de obstáculos: anotad solo el resultado observado en las condiciones del aula.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** guion original de tres momentos, tabla de códigos, captura o descripción del programa con la variable y el registro de los cinco casos. Explicad qué necesitan emisor y receptor para interpretar la señal de la misma manera y qué caso ha obligado a revisar la regla.

### **Sesión 7 · *Volume Control*.**

#### Fase 1 · Activamos y predecimos

Observad el potenciómetro e indicad qué respuesta esperáis en los extremos y en el punto intermedio. Acordad una escala de tres niveles para compararla.

#### Fase 2 · Exploramos y construimos

Leed el potenciómetro integrado y usad la posición para regular el volumen de una señal breve. Si el modelo o la configuración no permite sonido, usad la frecuencia de una animación LED como alternativa identificada.

#### Fase 3 · Explicamos y registramos

Anotad los valores mínimo, intermedio y máximo junto a la respuesta observada. Describid cómo habéis convertido la lectura en tres niveles comprensibles.

#### Fase 4 · Aplicamos y mejoramos

Probad posiciones intermedias y ajustad los límites si dos niveles producen respuestas demasiado parecidas. Repetid las lecturas sin mover el robot ni cambiar de programa.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de posición, lectura y respuesta. La lectura es un control del modelo, no una escala normalizada de volumen.

### **Sesión 8 · *Number Guessing*.**

#### Fase 1 · Activamos y predecimos

Elegid un rango pequeño y pensad cómo convertir el giro del potenciómetro en una conjetura. Predecid qué mostrará el programa si la conjetura es inferior, superior o igual al valor secreto.

#### Fase 2 · Exploramos y construimos

Programad el potenciómetro para seleccionar la conjetura, el botón para confirmarla y la matriz para mostrar «más», «menos» o «acierto».

#### Fase 3 · Explicamos y registramos

Anotad la lectura analógica, el entero que le corresponde, el valor secreto y la pista mostrada en cada intento. Haced visible cómo se calcula la conversión.

#### Fase 4 · Aplicamos y mejoramos

Probad los valores de los extremos, repeticiones y un rango distinto. Revisad qué pasa cuando dos lecturas próximas se convierten en el mismo entero.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** una traza del juego con tres resultados posibles y explicación de la relación entre lectura analógica, conversión a entero y condiciones.

### **Sesión 9 · *I'm a Good Guesser*.**

#### Fase 1 · Activamos y predecimos

Preparad tarjetas de colores para una galería del patio y predecid cuáles podrá distinguir el sensor. Acordad cómo presentaréis cada tarjeta.

#### Fase 2 · Exploramos y construimos

Haced lecturas de varias tarjetas, mantened la distancia, la orientación y la luz tan constantes como sea posible y cread una regla inicial de clasificación.

![Codey Rocky de la dotación apunta el sensor frontal hacia una tarjeta roja, con otras muestras de color y una tabla de registro.](../../_assets/situacions/sa-cr-sensor-color-proves.webp)

_La prueba clasifica lecturas de superficies en condiciones controladas; el sensor no identifica qué es el objeto ni garantiza el mismo resultado con cualquier luz o distancia._

#### Fase 3 · Explicamos y registramos

Anotad las lecturas repetidas por tarjeta, la clasificación prevista y el resultado. Separad las tarjetas utilizadas para ajustar la regla de las que reservaréis para comprobarla.

#### Fase 4 · Aplicamos y mejoramos

Probad la regla con tarjetas que no se han empleado para ajustarla. Si falla, cambiad una condición a la vez y repetid tanto la muestra inicial como las tarjetas de comprobación.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de lecturas y errores de clasificación con una regla revisada. El color detectado depende de la superficie y la iluminación; no es una etiqueta infalible.

### **Sesión 10 · *Stoplight*.**

#### Fase 1 · Activamos y predecimos

Diseñad una maqueta de paso escolar con tarjetas de color y predecid qué respuesta debe corresponder a cada señal. Añadid una tarjeta desconocida como caso de prueba.

#### Fase 2 · Exploramos y construimos

Programad Rocky para que, al detectar la tarjeta acordada, cambie el estado LED y muestre también una forma o patrón diferenciado. Mantened texto o símbolos equivalentes al color.

#### Fase 3 · Explicamos y registramos

Completad una tabla con señal presente, lectura del sensor y respuesta mostrada. Registrad los casos de color reconocido, ausente y no previsto.

#### Fase 4 · Aplicamos y mejoramos

Revisad los casos límite y haced que las respuestas sean distinguibles también sin depender solo del color. Probad de nuevo con tarjetas en una condición de luz diferente.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** maqueta y matriz de pruebas con una alternativa visual al color. Es un prototipo didáctico: no controla tráfico real ni sustituye señalización accesible homologada.

### **Sesión 11 · *Sensing Motions*.**

#### Fase 1 · Activamos y predecimos

Con Codey sobre una superficie estable, predecid qué eje cambiará en una inclinación suave hacia delante, atrás o hacia un lado. No hagáis girar ni dejéis caer el robot.

#### Fase 2 · Exploramos y construimos

Registrad una posición inicial de referencia e inclinad Codey suavemente en cada dirección. Leed los ejes y construid una visualización sencilla para una maqueta de edificio accesible.

#### Fase 3 · Explicamos y registramos

Anotad posición inicial, eje observado, sentido del cambio y respuesta representada. Repetid cada inclinación y mantened la misma posición de partida.

#### Fase 4 · Aplicamos y mejoramos

Comparad las repeticiones y ajustad la visualización para que diferencie los cambios observados. Si la lectura deriva o varía, registradlo en lugar de ocultarlo.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de ejes y representación del modelo. Explicad la diferencia entre orientación relativa, movimiento y posición absoluta.

### **Sesión 12 · *Jumping Game 2.0*.**

#### Fase 1 · Activamos y predecimos

Diseñad un juego corto en el que un personaje LED evita obstáculos y gana puntos. Predecid cómo una inclinación suave puede controlar el personaje y qué alternativas de entrada podrían funcionar.

#### Fase 2 · Exploramos y construimos

Programad el giroscopio para que detecte una inclinación y mueva el personaje. Mantened clara la regla de puntuación y ofreced una alternativa con botones desde el primer prototipo.

#### Fase 3 · Explicamos y registramos

Anotad inclinación detectada, respuesta del personaje y resultado de cada partida. Comparad la señal leída con la acción programada.

#### Fase 4 · Aplicamos y mejoramos

Probad el umbral con gestos cómodos y ajustadlo para que el reto no exija movimientos bruscos. Haced una prueba de usabilidad con la entrada alternativa y registrad si permite completar las mismas acciones.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** juego probado por dos personas con opciones de entrada y una explicación de cómo el sensor transforma movimiento en datos. La participación no depende de hacer gestos físicos.

## 🎯 Aprendizajes y vocabulario

- Identificar las entradas disponibles de Codey Rocky y relacionarlas con una respuesta del programa.
- Construir una prueba repetible que compare la predicción con la lectura observada.
- Interpretar datos de botones, infrarrojo, color, luz o giroscopio sin atribuirles capacidades que no tienen.
- Documentar errores, límites del sensor y una decisión de diseño basada en evidencias.


## 🧰 Materiales, accesibilidad y límites

Se necesita Codey Rocky, mBlock en una versión compatible, papel, tarjetas de color, cuadrícula y material blando para la maqueta. Las sesiones 5 y 6 necesitan dos dispositivos con transmisión/recepción IR compatibles para completar la comunicación física; sin el segundo dispositivo se conserva el diseño de protocolo y se identifica el ensayo como no ejecutado. El resultado de cada sensor se debe verificar en el modelo y el software disponibles.

El catálogo oficial asocia también otras lecciones a interruptores táctiles externos, sensor de ultrasonidos y tira LED Neuron. Estos componentes no se consideran parte del Codey Rocky básico de esta propuesta. No sustituimos esos retos por una actividad que finja tener los módulos: quedan marcados para adaptarlos cuando se confirme el accesorio correspondiente.

## ♿ Participación, accesibilidad y seguridad

Ofrecemos instrucciones orales y visuales, turnos de control, opciones con botones y roles de programación, observación y registro. Evitamos gestos bruscos y mantenemos el robot sobre una superficie estable; las lecturas se comprueban en el modelo y el software disponibles.

## 🎯 Evidencias de aprendizaje

Cada equipo entrega seis registros de entrada y respuesta, diagramas o fragmentos de código, tablas de pruebas con casos límite y una explicación de una limitación del sensor. La muestra final puede ser una demostración presencial, un póster o una descripción accesible del prototipo. Valoramos la predicción, la prueba repetible, la depuración y la justificación de decisiones, no la velocidad ni la competición entre equipos.

## 🔗 Fuente oficial y alcance de la adaptación

La trazabilidad parte de las lecciones 17, 18 y 21–30 de [Codey Rocky & Neuron Discovery](https://support.makeblock.com/hc/en-us/articles/25494707612823-Codey-Rocky-Neuron-Discovery), según los títulos y objetivos publicados por Makeblock. Para la sesión 6, la [guía docente oficial, lección 24 “When Codey Meets Codey”](https://qiniu.makeblock.com/education-makeblock-com/CodeyRockyNeuronTeachersBook.pdf), concreta el uso de los emisores/receptores IR, los bloques infrarrojos, las variables y una tarea de escritura de historia; la propuesta conserva estos objetivos con una narración propia y casos de prueba. La guía oficial [About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) identifica el módulo IR del chasis Rocky como sensor de color/proximidad; las sesiones lo muestran leyendo tarjetas, sin atribuirle reconocimiento de objetos. Las lecciones 19–20 (interruptores táctiles), 31–32 (ultrasonidos) y 33–34 (tira LED) dependen de los módulos Neuron y quedan fuera mientras no se confirme que están en la dotación. El resto de materiales docentes del curso puede requerir acceso de cuenta; esta adaptación crea retos, secuencia y visuales propios a partir de la información consultable y no afirma reproducir instrucciones privadas. La lista general de las 24 lecciones CSTA de Codey Rocky se encuentra en la [página de Codey Rocky de Makeblock](https://www.makeblock.com/pages/codey-rocky-robot-toys-for-kids).
