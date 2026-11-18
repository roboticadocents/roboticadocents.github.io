---
active: true
title: "Misión de robótica cooperativa"
description: "Diseñamos y probamos robots cooperativos para resolver misiones de movilidad y cuidado del entorno de la Albufera."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Ciencias"
theme: "entorn"
theme_label: "La Albufera y el cuidado del entorno"
duration: "12–15 sesiones"
challenge: "¿Cómo podemos diseñar un robot fiable que complete misiones de cuidado del entorno y explique con pruebas las decisiones del equipo?"
---

![Robot LEGO SPIKE Prime en un campo de pruebas con una ruta marcada y objetos ligeros para una misión del entorno.](../../_assets/situacions/sp-laberint-mart.webp)

_El campo, las piezas de misión y la puntuación son originales. La propuesta trabaja con una maqueta escolar inspirada en el cuidado de la Albufera._

## 🌱 Reto e intención

La unidad oficial *Competition Ready* de LEGO Education introduce la conducción autónoma, el uso de sensores, la construcción en equipo, los bloques reutilizables y la resolución iterativa de misiones. Esta adaptación conserva esa progresión en un proyecto de centro: una maqueta de la Albufera donde el robot transporta muestras ficticias, retira residuos de la maqueta y activa puntos de observación. No se interviene en el humedal ni se prueban robots en él.

La secuencia oficial incluye en 2026–27 una misión guiada vinculada a FIRST LEGO League. La sesión 4 conserva la estructura didáctica de preparar una ruta, alinear el robot, activar un modelo y valorar fiabilidad y estrategia, pero usa un reto, un campo y modelos propios. No reproduce ni representa la misión, el tapete o los materiales oficiales de la temporada.

## 🎯 Aprendizajes y vocabulario

- Construir y calibrar una base móvil, y registrar cómo cambian la ruta y la precisión cuando se ajusta una variable.
- Integrar movimiento, sensores de línea y mecanismos para resolver misiones de campo con roles cooperativos.
- Comparar intentos, localizar un fallo y justificar la revisión con datos de pruebas repetidas.
- Comunicar qué ha resuelto el robot, qué decisión ha tomado el equipo y qué límites conserva la maqueta ambiental.

## 📅 Secuencia didáctica · 12–15 sesiones

### **S1 · Base y conducción precisa · [Training Camp 1: Driving Around](https://education.lego.com/en-us/lessons/prime-competition-ready/training-camp-1-driving-around/) (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cómo hacemos una base simple que avance, gire y se detenga de manera controlada? Predecid qué tendrá que cambiar para dibujar un cuadrado con cuatro giros.

#### Fase 2 · Exploramos y construimos

En parejas, montad una base de dos motores sin sensores y probad los programas de muestra. Variad la distancia, el giro o la velocidad de una cosa cada vez.

#### Fase 3 · Explicamos y registramos

Escribid pseudocódigo para el cuadrado, medid la circunferencia de la rueda (π × diámetro) y relacionadla con la distancia avanzada. Registrad el recorrido en segundos, grados y rotaciones; el giroscopio es una ampliación opcional.

#### Fase 4 · Aplicamos y mejoramos

Añadid un recorrido entre obstáculos grandes. Haced tres pasadas con parámetros iguales y después cambiad un control; como ampliación, recorred dos metros y comparad también el sensor disponible.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** diagrama, programa de movimiento y tabla de error. Explicad cuándo conviene cada control; el giroscopio y la base avanzada no son requisitos de esta sesión.

### **S2 · Acercarse, agarrar y volver · [Training Camp 2: Playing with Objects](https://education.lego.com/en-us/lessons/prime-competition-ready/training-camp-2-playing-with-objects/) (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cómo decide el robot cuándo está lo bastante cerca de un objeto? Predecid qué lectura podría activar la parada y cómo sabréis que el cubo ha sido recogido.

#### Fase 2 · Exploramos y construimos

Añadid un sensor de distancia, un brazo ligero, un marcador y un cubo blando a la base. Comparad dos programas para parar delante del marcador; después programad el brazo para que baje, recoja el cubo a al menos 30 cm y lo devuelva.

#### Fase 3 · Explicamos y registramos

Ajustad la altura del brazo para que pase por encima del cubo sin interferir con el sensor. Registrad tres intentos y observad cómo cambia la lectura al modificar el umbral.

#### Fase 4 · Aplicamos y mejoramos

Haced un relevo: el robot lleva un testigo, una persona lo retira y la base continúa. Priorizad la detección fiable por encima del tiempo; probad comparaciones > / < con distancia, luz reflejada o giroscopio solo si están disponibles.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** esquema sensor–condición–motor y ajuste justificado. Como extensión, inventad reglas para el relevo, ilustradlas e invitad a otra pareja.

### **S3 · Detectar y seguir líneas del campo · [Training Camp 3: Reacting to Lines](https://education.lego.com/en-us/lessons/prime-competition-ready/training-camp-3-react-to-lines/) (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cómo puede el sensor hacer autónoma una parte del recorrido? Predecid qué pasará cuando la base encuentre una línea negra perpendicular.

#### Fase 2 · Exploramos y construimos

Montad el sensor de color y probad una línea negra ancha sobre una superficie clara. Programad la base para que avance y pare al detectarla; después probad una segunda pila y describid la diferencia.

#### Fase 3 · Explicamos y registramos

Observad lecturas en modo de color y de intensidad reflejada sobre blanco y negro. Anotad qué lee el sensor y no confundáis el nombre del color con el valor reflejado.

#### Fase 4 · Aplicamos y mejoramos

Para el seguimiento continuo, alternad la detección de oscuro y claro con movimientos rápidos. Probad líneas finas, ángulos rectos, cruces en T, interrupciones y líneas de color; cambiad el umbral o la velocidad de uno en uno.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** lecturas, ruta anotada y explicación de la mejora. La extensión de S4 es comparar los modos de sensor; el color y la luz reflejada son lecturas diferentes.

### **S4 · Misión guiada: elevar el puente de muestreo · [The Guided Mission 2026–27](https://education.lego.com/en-us/lessons/prime-competition-ready/spike-prime-guided-mission-2627/) (90 min; versión breve 45 min).**

#### Fase 1 · Activamos y predecimos (10 min)

**Pregunta:** ¿cómo equilibramos velocidad y precisión para seguir una línea, accionar un mecanismo y acabar en una zona concreta? En un campo propio del marjal, la base sale del área izquierda, pasa junto a dos estaciones de cartón inactivas, llega al puente de muestreo y acaba en la zona derecha. Antes de construir, dibujad el recorrido, señalad dónde habrá que alinear la base y definid qué significa «misión completada»: el puente articulado se eleva, la ruta no desplaza ninguna estación y el robot se detiene dentro de la zona final.

#### Fase 2 · Exploramos y construimos (25 min)

Montad la base de conducción con el sensor de color SPIKE Prime y revisad su orientación y su altura respecto al campo. Haced una línea negra ancha sobre una pista clara y un modelo original con una palanca de cartón articulada: una pieza ligera en la parte frontal empuja la palanca para que eleve el puente; no uséis el modelo ni el tapete LEGO de la temporada. Probad la palanca a mano y después con el robot a potencia baja. Añadid una zona de salida a cada lado y marcad dos puntos de alineación cercanos al mecanismo. El puente debe ser ligero, estable y sin bordes cortantes.

![Robot SPIKE Prime de la dotación sigue una línea hasta una palanca de cartón que eleva un puente de muestreo entre dos zonas de prueba.](../../_assets/situacions/sa-sp-missio-pont.webp)

_Ilustración generada con IA del prototipo local; el montaje es conceptual y no reproduce ningún modelo oficial de FIRST LEGO League._

#### Fase 3 · Explicamos y registramos (15 min)

Calibrad el sensor sobre la línea y el fondo en el modo elegido —color o intensidad de luz reflejada— y anotad lecturas repetidas. Escribid un programa propio: iniciar en la zona izquierda; seguir la línea con giros cortos a baja potencia; llegar al punto de contacto; empujar la palanca hasta que el puente se eleve; continuar hacia la zona derecha y parar. Registrad la posición de partida, el umbral o color seleccionado, la velocidad, el estado del puente y el lugar de parada. Si el sensor no discrimina con estabilidad, usad una línea más ancha y volved a medir antes de cambiar el programa.

#### Fase 4 · Aplicamos y mejoramos (30 min)

Haced cuatro intentos comparables: dos a baja velocidad y dos a velocidad moderada, con la misma colocación inicial y el mismo campo. En cada prueba, anotad si sigue la línea, activa la palanca, pasa junto a las dos estaciones sin tocarlas y llega a la zona final; medid también la desviación lateral al terminar y, si es viable, el tiempo del mismo equipo. Después cambiad una sola variable —alineación, umbral o velocidad— y repetid dos veces. Comparad la fiabilidad con la rapidez y justificad qué ajuste es más útil; el tiempo solo compara las iteraciones del mismo equipo y no se publica ni se utiliza para ordenar grupos. Como extensión, añadid una segunda parada propia después del puente y comprobad si la base puede completar las dos tareas en una misma ruta; o empezad desde la zona derecha y rediseñad el seguimiento.

#### Fase 5 · Comprobamos y reflexionamos (10 min)

Cada miembro explica una parte de la misión mostrando el robot, el programa y los datos de prueba. La cuadrícula docente observa cuatro indicadores: seguir la línea con un criterio medido; activar el puente; completar la ruta evitando las estaciones; explicar una decisión de velocidad/alineación con evidencia. En la autoevaluación individual, marcad «hemos completado una misión», «hemos completado también una segunda parada» o «todas las personas hemos presentado programa y estrategia». Otra pareja da un retorno constructivo con una observación y una propuesta comprobable para el siguiente intento. Como extensión de lengua y orientación profesional, el equipo explica qué estrategia ha reducido el tiempo de su propio recorrido sin perder precisión y relaciona el trabajo con diseño de ingeniería o programación; no se comparan ni se publican tiempos entre equipos.

**Evidencia:** campo y palanca propios, programa anotado, tabla de los seis intentos (cuatro iniciales y dos después de revisar una variable), medida de desviación, cuadrícula de observación y explicación colaborativa. La página de LEGO indica que la lección oficial prepara la Driving Base con Color Sensor, configura un modelo de misión, activa el conector, practica la salida izquierda–llegada derecha, evita otras misiones y conversa sobre la compensación entre rapidez y precisión. Esta propuesta adapta ejes de aprendizaje similares en un campo y un mecanismo locales, sin reproducir el tapete, el modelo ni la misión de FIRST LEGO League.

### **S5 · Una base modular construida en equipo · [Assembling an Advanced Driving Base](https://education.lego.com/en-us/lessons/prime-competition-ready/assembling-an-advanced-driving-base/) (90–120 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cómo unimos módulos individuales en una base robusta y hacemos visible la contribución de cada cual? Mirad una base de práctica e identificad qué características pueden hacerla estable y fácil de modificar. En un equipo de cuatro, repartid las cuatro instrucciones de montaje y predecid qué habrá que comprobar al juntar las partes.

#### Fase 2 · Exploramos y construimos

Cada persona construye la parte asignada en su instrucción; después, el equipo une las cuatro partes, comprueba las conexiones de cables y las ordena para que no rocen las ruedas ni se enganchen. La base avanzada usa dos motores grandes para la propulsión, dos motores medianos para los útiles y dos sensores de color, y requiere el Expansion Set 45681 además del 45678. Antes de encender, comparad las ruedas con la base de práctica y revisad que cada módulo quede firme.

#### Fase 3 · Explicamos y registramos

Ejecutad primero el programa inicial y después los otros programas de ejemplo para observar cómo se mueve la base. Registrad quién ha montado cada parte, qué puerto o cable conecta y una característica estructural que aporta al conjunto. Separad los errores de montaje de los errores del programa: antes de reprogramar, inspeccionad la unión, el puerto y el recorrido del cable.

#### Fase 4 · Aplicamos y mejoramos

Si no hay Expansion Set, haced los roles modulares sobre la base de dos motores y marcadla como adaptación reducida; no afirméis que habéis montado la base avanzada. Para adaptar la dificultad, trabajad las partes de las instrucciones por parejas. Como extensión, dad al equipo las instrucciones de un solo lado del eje y pedid que complete el otro por simetría; después, programad una ruta entre obstáculos grandes sin golpearlos. Cada miembro debe explicar qué parte ha construido y cómo contribuye a la base.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** esquema de las cuatro partes, registro de puertos y gestión de los cables, prueba del programa inicial y de los ejemplos, presentación en la que cada cual explica su contribución y una coevaluación con observación y sugerencia concreta. Autoevaluación individual: **azul**, he trabajado con el equipo para construir y unir la base; **amarillo**, también la he probado; **violeta**, la he presentado explicando mi aportación. Conectad el diseño con ocupaciones de montaje mecánico, ingeniería o mantenimiento del transporte. No llaméis «base avanzada» a la versión reducida.

### **S6 · Mi bloque, nuestro programa · [My Code, Our Program](https://education.lego.com/en-us/lessons/prime-competition-ready/my-code-our-program/) (90–120 min en la secuencia oficial; adaptar la duración al kit disponible).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cómo hacemos que todas las personas entiendan y reorganicen el programa? Observad una misión de maqueta y discutid por qué conviene completar las tareas en un orden acordado y volver a una zona de inicio entre grupos de misiones. Predecid qué instrucciones se repetirán en una ruta cuadrada, cuáles cambian para el círculo y el triángulo, y cómo un bloque con nombre puede ayudar a otro miembro del equipo a entenderlas.

#### Fase 2 · Exploramos y construimos

Con la base avanzada o la base de práctica con limitación escrita, construid dos marcadores y probad el programa *My Block* de muestra. Cread un bloque propio para una ruta cuadrada y explicad qué queda dentro del bloque y qué continúa en el programa principal.

#### Fase 3 · Explicamos y registramos

Haced bloques separados para un círculo aproximado y un triángulo, decidid el tamaño con los marcadores y registrad qué órdenes quedan reutilizadas. Antes de programar cada figura, cada persona debe poder predecir qué bloque se ejecutará y describir qué hace; así se comprueba que el código compartido es comprensible para todo el equipo.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad programas con otra pareja para que los ejecute sin explicación oral. Reordenad los bloques para una misión diferente y comparad legibilidad y facilidad de modificación. Como ampliación matemática, medid la distancia recorrida en una rotación o un número de grados, calculad la circunferencia de la rueda con `π × diámetro` y usadla para estimar la distancia; el giroscopio y un recorrido complejo cronometrado son extensiones opcionales, sin clasificar equipos.

#### Fase 5 · Comprobamos y reflexionamos

Cada persona presenta un programa y explica cómo un *My Block* ordena, simplifica o permite reordenar las instrucciones. Autoevaluación individual: **azul**, he creado un *My Block*; **amarillo**, he creado dos o más; **violeta**, he preparado varios programas y los he reordenado para cambiar la acción de la base. Una pareja revisora da una puntuación formativa y un comentario constructivo para la próxima prueba. **Evidencia:** bloques para cuadrado/círculo/triángulo, registro de prueba, programa reordenado y presentación individual de la contribución.

### **S7 · Dos útiles y un programa con arrays · [Time for an Upgrade](https://education.lego.com/en-us/lessons/prime-competition-ready/time-for-an-upgrade/) (90–120 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿por qué un robot de misión cambia de útil y por qué hay que devolver los motores a una posición conocida? Comparad la pala y el brazo elevador según precisión, fuerza y diseño; predecid cuál conviene para cada una de cuatro cajas ligeras.

#### Fase 2 · Exploramos y construimos

En la versión completa, montad la pala y el brazo elevador, fijadlos con los conectores rojos y conectadlos a la base avanzada; construid cuatro cajas ligeras. Ejecutad el programa de prueba y observad que el brazo se eleva. Antes de cada tarea, estableced cómo reinicializar la posición de los motores y comprobad que el útil queda bloqueado y no interfiere con el sensor.

#### Fase 3 · Explicamos y registramos

Descomponed la tarea en acercarse, elevar/bajar, empujar o alzar, liberar y reiniciar; programad órdenes para que cada útil pueda subir y bajar y comparadlas con el comportamiento de muestra. Cread dos arrays paralelos: el primero guarda la operación prevista para cada una de las cuatro cajas y el segundo, el resultado observado. Comparad los elementos del mismo índice y explicad qué significa cada posición; si el entorno disponible no ofrece arrays en bloques, haced esta parte en Python o con dos listas de tarjetas y declarad la representación usada.

#### Fase 4 · Aplicamos y mejoramos

Probad los cuatro casos y comparad precisión, fuerza y encaje de cada útil. Cambiad una propiedad cada vez y repetid las pruebas. Como extensión, adaptad un útil para una carga diferente o acercaos a las cajas en ángulo con un giroscopio disponible y una prueba de posicionamiento. Sin Expansion Set, usad una base de dos motores y útiles de cartón, y declarad el cambio: no replica la base motorizada ni sus resultados.

#### Fase 5 · Comprobamos y reflexionamos

Cada persona presenta cómo la base usa los útiles y cómo su forma ayuda a completar la tarea. Autoevaluación individual: **azul**, he usado un array; **amarillo**, he creado un segundo; **violeta**, he hecho más de una operación con arrays. Una pareja revisa el resultado y da un comentario constructivo con una prueba siguiente. **Evidencia:** diagrama de los dos útiles, reinicio verificado, arrays comentados, tabla de los cuatro índices, resultados de las pruebas y presentación. El abordaje en ángulo con giroscopio es una ampliación opcional.

### **S8 · Reto de campo completo y cronometrado · [Mission Ready](https://education.lego.com/en-us/lessons/prime-competition-ready/mission-ready/) (120+ min, más de una sesión).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿podemos combinar conducción, sensores, útiles y bloques para completar una misión? Diseñad un campo escolar con estación, ruta y marcadores propios; definid metas y predecid cuáles pueden requerir más de un intento.

#### Fase 2 · Exploramos y construimos

Preparad un módulo de juego de cartón, un camino propio y dos marcadores de campo. Las cinco metas originales son: (1) empujar un actuador para liberar el paso; (2) presionar una palanca; (3) pasar entre los marcadores sin tocarlos; (4) seguir la ruta y recoger cuatro muestras ficticias de semilla; (5) dejar al menos una en una zona segura, a 50 cm del modelo de nido. Usad pala y brazo solo con el kit avanzado; con el set básico, simplificad las acciones y documentadlo.

#### Fase 3 · Explicamos y registramos

Escribid pseudocódigo antes de programar cada meta, reutilizad *My Blocks* y poned nombres claros a variables y bloques. El equipo gana una marca por cada meta completada, una marca adicional si recoge las cuatro muestras, y gana otra más por la entrega segura de 50 cm. Preparad hasta seis fichas de incidencia: cada contacto con un marcador o cada vez que una persona levanta/recoloca el robot consume una ficha y obliga a registrar la causa antes de reanudar. Las fichas no restan puntos ni sirven para comparar equipos; el criterio es revisar el programa y completar con seguridad. Las muestras son piezas ficticias y no implican animales.

#### Fase 4 · Aplicamos y mejoramos

Haced intentos sin cronómetro hasta que el programa sea estable; después, si el equipo quiere, medid su propio tiempo en una ejecución final. Registrad las metas completadas, las fichas de incidencia consumidas, el tiempo propio y los fallos; cambiad una sola cosa y repetid al menos la prueba que había fallado. El tiempo se usa para explicar la estrategia del equipo, nunca para hacer una clasificación.

#### Fase 5 · Comprobamos y reflexionamos

Cada miembro presenta una parte del robot, del programa o de la estrategia. Autoevaluación individual: **azul**, he completado al menos una meta; **amarillo**, el equipo ha completado las cinco; **violeta**, todas las personas han presentado robot, programa y estrategia. Otra pareja da retorno constructivo con una observación y una mejora comprobable. Como extensión de lengua y orientación profesional, preparad una presentación de la estrategia más eficiente y relacionad el diseño con ingeniería o emprendimiento. **Evidencia:** mapa y reglas originales, pseudocódigo, programa comentado, registro de las cinco metas, incidencias, repetición de un fallo y presentación con contribuciones individuales. La secuencia adapta los tipos de misión y el proceso de planificación de la lección, pero el campo, los objetos, las fichas y las reglas son propios; no copiéis los modelos ni el campo oficiales.

### **S9 · Taller desconectado de resolución creativa · [Mission Training: Creative Problem-Solving](https://education.lego.com/en-us/lessons/prime-competition-ready/mission-training-creative-problem-solving/) (45 min, híbrida).**

La sesión traslada al contexto de la Albufera el proceso de diseño de ingeniería de la lección: definir criterios, idear, hacer y probar un prototipo, iterar y comunicar qué se ha descubierto. **No hacen falta el set SPIKE Prime, piezas LEGO ni software.** Se trabaja con materiales reutilizados y una solución manipulable de baja complejidad; ningún reto requiere construir un robot.

#### Fase 1 · Activamos y predecimos

Reservad 10 minutos. Mostrad la imagen del nudo que hay que deshacer y dad tiempo para que todo el mundo piense antes de hablar. Acordad una definición compartida de *resolver creativamente* y pedid que el grupo identifique el problema, proponga al menos dos maneras de abordarlo, elija qué probaría primero y anticipe qué cambiaría si no funciona. Cerrad con una definición breve de **iteración**: repetir un proceso para acercarse al resultado deseado, evaluando y revisando la solución cuando hace falta.

![Nudo de cuerda, boceto de solución y prototipo de cartón con materiales reutilizados para representar el proceso de idear, probar y mejorar.](../../_assets/situacions/sa-sp-mission-training-prototip.webp)

#### Fase 2 · Exploramos y construimos

Reservad 15 minutos. Cada alumno o equipo elige **un** reto y escribe primero qué tiene que pasar para que la solución sea válida. Las cuatro opciones inspiradas en la lección son: **A)** llevar una muestra ficticia hasta una persona o punto de recepción; **B)** activar un dispositivo de maqueta presionándolo; **C)** rescatar una semilla de papel de una zona delimitada, empujándola, estirándola o sujetándola; **D)** voltear una ficha plana, que representa una tarjeta de muestreo. Son tareas de manipulación sobre una mesa; no se usan líquidos, animales ni objetos frágiles.

Seguid en equipo estos cinco movimientos, dejando un rastro en el cuaderno:

1. **Identificamos:** elegimos el reto y formulamos el resultado observable.
2. **Ideamos:** dibujamos dos soluciones posibles con los materiales disponibles y elegimos una según los criterios acordados.
3. **Creamos:** hacemos un primer prototipo con cartón, papel, cordel u otros materiales reutilizados.
4. **Iteramos:** lo probamos, anotamos qué ha pasado y cambiamos una característica; volvemos a probarlo.
5. **Comunicamos:** explicamos qué ha funcionado, qué hemos descubierto y cómo la prueba ha guiado la mejora.

El prototipo no tiene que funcionar a la primera. Si el alumnado está en casa, puede trabajar sobre una superficie plana y limpia con el material que tenga; si no dispone de materiales, puede hacer el diseño y la iteración con dibujos secuenciados.

#### Fase 3 · Explicamos y registramos

Reservad 10 minutos. Haced una ronda breve de comunicación: cada equipo explica cómo planificó la solución y qué criterios definió, muestra la idea creativa, relata un descubrimiento hecho durante las pruebas e identifica una mejora concreta del prototipo. Pedid ejemplos observables —«la ficha cayó cuando…», «hemos cambiado el ángulo y ahora…»— en lugar de afirmaciones generales. El resto escucha y formula una pregunta respetuosa; el retorno debe ayudar a comprender el proceso, no a juzgar quién ha acabado antes.

#### Fase 4 · Aplicamos y mejoramos

Reservad 5 minutos. Cada equipo documenta el proceso con un póster, una página del cuaderno o un vídeo breve: problema y criterios, boceto inicial, prototipo, resultado de la prueba y cambio introducido. Haced una galería de trabajos. En modalidad presencial se pueden visitar las mesas; en línea, mostrar el prototipo en una reunión o compartir una fotografía; en modalidad asíncrona, publicar el dibujo, la explicación escrita o una grabación corta para que los compañeros puedan comentarla.

#### Fase 5 · Comprobamos y reflexionamos

Reservad 5 minutos. Cada alumno comparte una iteración o una solución creativa descubierta y se autoevalúa: **una mano** si todavía necesita ayuda para explicar estrategias e iteraciones; **dos manos** si ya puede describirlas; **manos en alto** si puede enseñar a otra persona cómo describirlas. Aceptad como respuesta una explicación oral, escrita, dibujada o grabada.

**Evidencias:** criterios de diseño, dos ideas iniciales, boceto, prototipo, registro de prueba y mejora, explicación del descubrimiento y autoevaluación individual. La temporalización suma 45 minutos (10 + 15 + 10 + 5 + 5); la fase de construcción puede continuar en otra sesión sin cambiar los criterios. Adaptación propia de la lección híbrida: se mantienen el ciclo de diseño, los cuatro tipos de reto, la prueba iterativa, la comunicación, la documentación y la autoevaluación; el contexto, los objetos, las instrucciones y la imagen son originales.

## 🧰 Materiales y preparación

Para las sesiones con robot: set SPIKE Prime 45678, base de conducción, sensor de distancia y sensor de color, cinta negra, cartón, rotuladores, muestras grandes y ligeras y cinta para el campo. La base avanzada oficial consta de dos motores grandes para la propulsión, dos motores medianos para los útiles y dos sensores de color; necesita el Expansion Set 45681 además del set 45678. Las sesiones 5–8 indican esta dependencia y no afirman que la base de dos motores sea equivalente. Sin la expansión, se puede seguir el objetivo didáctico con un único motor mediano del set base y útiles alternos/pasivos; anotad esta reducción. La sesión 9 solo necesita papel, lápiz y cartón.

Preparad el campo sobre mesas o en el suelo, con carriles lo bastante anchos, objetos grandes y zonas de manos fuera del movimiento. La referencia a la Albufera es una contextualización educativa: usad datos y muestras ficticias y no hagáis pruebas ni recogidas en el medio natural.

## 🎯 Evidencias y evaluación

Recoged pseudocódigo, tablas de calibración, lecturas del sensor, mapa de misión, esquemas de construcción, bloques propios, comparación de accesorios, datos de fiabilidad y prototipo desconectado. Valorad si el equipo puede predecir y explicar el comportamiento, aislar una variable, justificar una revisión con datos, documentar el código y repartir las decisiones. Una misión fallida aporta evidencia útil cuando queda registrada y ayuda a formular la prueba siguiente; los puntos y el tiempo no son el único criterio.

## ♿ Participación e inclusión

Antes del robot se puede resolver cada ruta con una maqueta y tarjetas de movimiento. Ofreced roles rotativos de construcción, programación, pilotaje de pruebas y registro; facilitad instrucciones visuales, carriles de alto contraste, marcas táctiles fuera de la trayectoria y tiempo adicional para documentar. Las misiones no dependen de la velocidad manual: una persona puede dictar o validar el código mientras otra manipula el robot. El reto desconectado es una sesión completa, no un premio de consolación ni un requisito para acceder al resto.

## 🔗 Correspondencia con la unidad oficial

La secuencia adapta las nueve lecciones de [Competition Ready · SPIKE Prime](https://education.lego.com/en-us/lessons/prime-competition-ready/): [Driving Around](https://education.lego.com/en-us/lessons/prime-competition-ready/training-camp-1-driving-around/), [Playing with Objects](https://education.lego.com/en-us/lessons/prime-competition-ready/training-camp-2-playing-with-objects/), [Reacting to Lines](https://education.lego.com/en-us/lessons/prime-competition-ready/training-camp-3-react-to-lines/), [The Guided Mission 2026–27](https://education.lego.com/en-us/lessons/prime-competition-ready/spike-prime-guided-mission-2627/), [Assembling an Advanced Driving Base](https://education.lego.com/en-us/lessons/prime-competition-ready/assembling-an-advanced-driving-base/), [My Code, Our Program](https://education.lego.com/en-us/lessons/prime-competition-ready/my-code-our-program/), [Time for an Upgrade](https://education.lego.com/en-us/lessons/prime-competition-ready/time-for-an-upgrade/), [Mission Ready](https://education.lego.com/en-us/lessons/prime-competition-ready/mission-ready/) y la lección híbrida [Mission Training](https://education.lego.com/en-us/lessons/prime-competition-ready/mission-training-creative-problem-solving/). El catálogo indica duraciones de entre 30 y 120+ minutos; por eso las actividades de construcción, proyecto y misión se extienden en más de una clase. Los textos, el contexto, las misiones, el campo, las reglas y los materiales visuales son propios. Las especificaciones de componentes se basan en la página oficial de [hardware SPIKE Prime](https://education.lego.com/en-us/teacher-resources/lego-education-spike-prime/support-technical-info/lego-education-spike-prime-support-technical-info-product-info/); comprobad siempre la dotación física del centro.
