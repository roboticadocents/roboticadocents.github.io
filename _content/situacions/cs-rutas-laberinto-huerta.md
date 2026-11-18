---
active: true
title: "Rutas y laberintos de la huerta"
description: "Descubrimos cómo la torre envía un programa a MatataBot y usamos órdenes, parámetros, bucles y funciones para recorrer mapas propios de la huerta."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "pensament-computacional"
subject_label: "Pensamiento computacional, Matemáticas y Medio"
theme: "entorn-local"
theme_label: "Rutas de la huerta"
duration: "2 sesiones · 120 min"
challenge: "¿Cómo podemos planificar y probar una ruta tangible, primero con órdenes simples y después con parámetros, bucles y funciones?"
official_source: "https://www.matatastudio.com/teaching-materials.html"
---

![El Coding Set real de MatataStudio junto a un mapa propio en cuadrícula que conecta una plantación de la huerta con la biblioteca de la escuela.](../../_assets/situacions/cs-rutes-laberint-horta.webp)

_Ilustración IA basada en el Coding Set de la dotación. El mapa es una maqueta propia: hay que dibujarlo a escala de 10 cm por casilla si se quiere probar el movimiento físico._

## 🌱 Situación, reto e intención

La clase prepara una ruta de orientación entre una plantación, el mercado y la biblioteca del centro. Antes de mover MatataBot, el alumnado deberá explicar cómo la torre lee los bloques, qué significa enviar y recibir instrucciones y cómo se puede representar una ruta con órdenes físicas. En una segunda sesión, resolverá un laberinto de papel y comprobará cómo los parámetros, los bucles y las funciones permiten expresar recorridos más largos con menos piezas.

La propuesta adapta dos lecciones del manual extracurricular de Coding Set: la primera introduce los componentes, la comunicación Bluetooth y las órdenes direccionales; la segunda trabaja laberintos, parámetros, bucles y funciones con mapas y retos del *Challenge Booklet*. El contexto valenciano, los mapas y los casos de prueba son originales. No se reproducen las páginas del cuaderno de retos.

**Pregunta guía:** ¿qué debe saber quien programa y quien ejecuta una ruta para que el robot llegue al lugar previsto, y cómo podemos acortar el programa sin cambiar el recorrido?

## 🎯 Aprendizajes y vocabulario

- Reconocer la torre de control, el tablero de control, los bloques y MatataBot y explicar qué papel tiene cada uno.
- Distinguir quién envía una instrucción de quién la recibe y describir la comunicación entre torre y robot.
- Planificar, ejecutar y depurar secuencias con avanzar, retroceder y girar.
- Usar el bloque numérico para repetir una instrucción y los bloques de bucle para repetir una secuencia.
- Definir una secuencia con el bloque de función e invocarla desde la segunda línea, según el funcionamiento descrito en el manual.
- Registrar la posición inicial y final, comparar la predicción con el resultado y corregir una instrucción cada vez.

**Vocabulario clave:** torre, tablero, bloque, enviar, recibir, Bluetooth, secuencia, orientación, laberinto, obstáculo, bandera, parámetro, bucle, función, coordenada y depuración.

## 🧰 Materiales y preparación

- Un Coding Set por equipo: torre, tablero, MatataBot y bloques de movimiento; para la segunda sesión, también bloques numéricos, de bucle y de función, obstáculos y banderas, si forman parte del kit disponible.
- Hojas con tarjetas de flechas, papel cuadriculado, lápices, cuaderno de equipo y una cuadrícula propia con casillas de **10 × 10 cm** para las pruebas físicas.
- Mapas propios con inicio, destino y obstáculos de papel; marcadores de biblioteca, plantación, acequia y mercado. Estos elementos son representaciones manuales, no son detectados por el robot.

Antes de empezar, cargad y emparejad la torre y MatataBot según el manual del kit. Probad la orientación de los bloques, el tablero, el botón de inicio y una ruta corta sobre una superficie plana. Comprobad que la torre lee la disposición real de los bloques y que no haya objetos ni manos en el recorrido. Si no disponéis de algún bloque avanzado o de la bandera, representadlo con tarjetas y explicad el programa sobre papel; no presentéis la simulación como una ejecución física.

Organizad equipos de tres o cuatro con roles rotativos: lector/a del mapa, constructor/a del programa, operador/a del robot y observador/a que anota la predicción y el resultado. Ajustad la ruta y el número de bloques a las posibilidades del grupo.

## 📅 Secuencia didáctica · dos sesiones de 60 minutos

### **Sesión 1 · La torre envía, MatataBot recibe (60 min · lección extracurricular 1).**

#### Fase 1 · Activamos y predecimos

**Nos movemos con instrucciones (10 min):** hablad de para qué sirven los intermitentes de un vehículo y qué movimientos indican. En una zona sin obstáculos, el alumnado forma una fila con distancia de seguridad y sigue una secuencia corporal: avanzar un paso, girar a la derecha, retroceder un paso y girar a la izquierda. Repetidla una vez y preguntad qué pasa cuando alguien cambia el orden. No se corre ni se imitan maniobras con vehículos reales.

#### Fase 2 · Exploramos y construimos

**Identificamos el sistema (15 min):** mostrad la torre, el tablero, los bloques y MatataBot. Con el kit del centro, enseñad cómo se encienden y se emparejan los dos dispositivos, cómo se colocan los bloques con la marca de orientación hacia abajo y cómo se inicia el programa. Explicad que la torre captura la disposición de los bloques y envía las instrucciones por Bluetooth; MatataBot las recibe y las ejecuta. La cámara de la torre lee los bloques: el mapa de papel no es un sensor ni una orden.

#### Fase 3 · Explicamos y registramos

**De la tarjeta al programa (10 min):** cada equipo ordena tarjetas con avanzar, retroceder y girar para llegar a un destino. Una persona lee la secuencia; el resto la representa con el cuerpo o sobre la cuadrícula, sin robot. Anotad qué pieza representa cada instrucción y quién envía y quién recibe el mensaje.

![La torre y el tablero del Coding Set junto a un laberinto de papel con hortalizas, obstáculos de cartón, una bandera y una secuencia repetida de bloques.](../../_assets/situacions/sa-cs-laberint-horta-v1.webp)

_Laberinto y marcas creados para esta propuesta. Los símbolos del mapa los interpreta el alumnado; MatataBot solo ejecuta los bloques que la torre ha leído._

#### Fase 4 · Aplicamos y mejoramos

**Probamos una ruta corta (20 min):** dibujad una cuadrícula de 10 cm por casilla. Con una primera prueba, poned MatataBot en una casilla inicial orientado hacia un destino adyacente y elegid un bloque de avance. Predecid el movimiento, ejecutadlo y registrad la posición final. Después añadid un giro y una segunda instrucción. Si el resultado no coincide, comprobad la orientación inicial, la colocación de los bloques y el orden antes de cambiar nada; cambiad una sola instrucción y repetid la prueba. Retirad los bloques antes de preparar un reto nuevo.

#### Fase 5 · Comprobamos y reflexionamos

**Cerramos con evidencias (5 min):** responded en el cuaderno: ¿para qué sirven las marcas de los bloques?, ¿qué envía la torre y qué recibe MatataBot?, ¿qué ha cambiado cuando hemos alterado el orden? Dibujad la secuencia utilizada y marcad inicio y final. **Evidencia:** mapa corto, predicción, programa con bloques y resultado observado. Como ampliación desconectada, cread un cartel ilustrado de los bloques direccionales o un juego de transmisión de mensajes entre equipos.

### **Sesión 2 · Resolvemos un laberinto con bloques avanzados (60 min · lección extracurricular 2).**

#### Fase 1 · Activamos y predecimos

**Leemos un laberinto (10 min):** cada alumno traza con lápiz una ruta propia desde el inicio hasta el final de un laberinto de papel, sin levantar el lápiz ni borrar los errores. Comparad las rutas: ¿dónde había que retroceder, girar o replantear una instrucción? El docente muestra una solución posible y recuerda que una ruta correcta puede tener más de un programa.

#### Fase 2 · Exploramos y construimos

**Conocemos parámetro, bucle y función (15 min):** presentad los bloques nuevos disponibles en el kit. El bloque numérico solo acompaña a avanzar o retroceder, no a los giros. Los bloques `Loop Begin` y `Loop End` se usan en pareja para repetir las instrucciones que quedan dentro; cuando se emplea un número, el manual técnico indica que va debajo de `Loop Begin`. Para una función, distinguid el bloque de definirla del bloque que la llama: la guía técnica oficial actual indica que la llamada va en una línea y la definición en la línea de abajo; la definición se puede llamar varias veces, pero una función no se combina con un bloque numérico. Esta disposición no coincide del todo con la manera en que la copia del manual de la lección explica el orden de definición y llamada; contrastad el diagrama del kit concreto antes de la clase y haced que el alumnado pruebe su lectura. No confundáis los bloques `Function` con los bloques `Fun`, que seleccionan movimientos, música o bailes predefinidos. El bloque musical aparece en la lista de materiales del manual, pero no es necesario para resolver este reto.

#### Fase 3 · Explicamos y registramos

**Planificamos la ruta de la huerta (10 min):** sobre una cuadrícula local con inicio, destino y obstáculos, cada equipo dibuja una ruta y escribe la secuencia de flechas. Marcad una sección repetida y comparad tres representaciones: movimientos desplegados, un parámetro numérico y un bucle. Si hay bloque de función, elegid una secuencia que se repita en dos puntos. Registrad también la casilla final como coordenada de fila y columna; no hace falta desarrollar todo el concepto de plano cartesiano.

#### Fase 4 · Aplicamos y mejoramos

**Programamos, probamos y depuramos (20 min):** primero ejecutad una ruta que evite un obstáculo; después, resolved un trayecto más largo con un bucle y probad una llamada de función en una línea separada. Si el código falla, localizad la primera instrucción en la que la ruta prevista y la real divergen y cambiad solo esa parte. Haced al menos dos pruebas, incluida una con un destino diferente, y explicad por qué el parámetro, el bucle o la función reducen piezas sin cambiar el resultado. La bandera es un marcador colocado por el equipo; no la detecta MatataBot. Si el centro no dispone de un bloque o el montaje no se comporta como se describe, completad esa comparación con tarjetas y dejad constancia de la limitación.

#### Fase 5 · Comprobamos y reflexionamos

**Compartimos y revisamos (5 min):** cada equipo presenta un mapa, la ruta y una comparación entre código desplegado y código abreviado. Responded: ¿en qué se parece el laberinto a un mapa?, ¿qué error hemos encontrado?, ¿qué evidencia muestra que la corrección ha funcionado? **Evidencia final:** mapa con coordenada, programa o tarjetas, tabla de dos pruebas y explicación de una depuración. Como ampliación, cread un laberinto original con inicio y final e intercambiadlo con otro equipo; el alumnado intenta resolverlo sin modificar el diseño de quien lo ha creado.

## 📊 Evidencias y evaluación

Recoged la secuencia corporal o con tarjetas, los mapas, la predicción, los programas y la tabla de pruebas. Observad si cada alumno:

- identifica la función de los componentes y diferencia enviar de recibir;
- representa la orientación y ordena instrucciones direccionales;
- explica qué cambia cuando incorpora un número, un bucle o una función;
- localiza el punto de divergencia entre ruta prevista y ruta observada;
- justifica una corrección con una prueba repetida.

Valorad la claridad del razonamiento, la colaboración y el uso de evidencias. No evaluéis la rapidez del robot ni una única solución al laberinto.

## ♿ Participación, accesibilidad y seguridad

Ofreced mapas de alto contraste, casillas grandes, flechas táctiles y la posibilidad de anticipar la ruta oralmente o con tarjetas. Los roles se rotan y la operación física puede quedar en manos de una pareja mientras otras personas hacen predicciones y comprobaciones. Mantened la mesa plana y el recorrido libre; no pongáis las manos delante del robot mientras se ejecuta. La persona adulta gestiona la carga, el emparejamiento y las incidencias de conexión.

## 🔗 Referentes y adaptación

- MatataStudio, [Lesson 2.8: Extracurricular Curriculum](https://matatalab.com/en/node/67): confirma que el currículo tiene 12 lecciones de 60 minutos, recomienda equipos de cuatro con roles de programación e inspección, y describe la estructura general de introducción, actividad, cierre, extensión y conexiones con el mundo real. La página no publica el procedimiento detallado de las lecciones 5–12.
- MatataStudio, [Teaching Materials](https://www.matatastudio.com/teaching-materials.html): la página oficial lista el recurso *MatataStudio Extracurricular Lesson TG-Sample* y ofrece su descarga. El PDF oficial consultable es una muestra de las lecciones 3 y 4, no el currículo completo.
- [Copia legible de muestra del manual extracurricular](https://infotastic.academy/wp-content/uploads/2024/12/MatataStudio-Extracurricular-Lesson-TG-Sample.pdf), consultada para contrastar las lecciones 1 y 2 (componentes, mensajes, movimientos, laberinto, bloques avanzados, preguntas de cierre y extensiones). La copia está titulada *Extracurricular Manual for Coding Set Pro* y alojada por un tercero, no en el servidor oficial; por eso se conserva el enlace de la editorial como referencia principal y se comprueban los bloques disponibles antes de transferir el procedimiento al kit del centro.
- MatataStudio, [soporte de Coding Set](https://matatalab.com/en/product-support): referencia técnica para las piezas, el tablero y la escala de la cuadrícula.
- MatataStudio, [curso autoguiado Coding Set](https://www.matatastudio.com/Self-Guided.html): confirma los usos y límites del bloque numérico, la estructura de los bucles y la disposición separada de definición y llamada de las funciones.

La situación adapta **las lecciones 1 y 2** del manual extracurricular. La propuesta local sustituye el mapa y los retos del cuaderno por una cuadrícula propia de la huerta y de la escuela; no afirma que los materiales del *Challenge Booklet* estén incluidos ni sean accesibles. Las lecciones 3 y 4 del mismo manual tienen una adaptación separada en [Un circuito de la huerta para un coche de papel](../../situacion/index.html?id=cs-circuito-carrera-huerta); no se declara cubierto el currículo extracurricular completo de doce lecciones.
