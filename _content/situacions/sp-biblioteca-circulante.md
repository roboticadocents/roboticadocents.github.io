---
active: true
title: "El centro logístico de la biblioteca"
description: "¿Cómo podemos preparar, trazar, proteger y verificar un paquete de libros en una maqueta sin exponer datos personales?"
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "matematiques"
subject_label: "Matemáticas, Tecnología y Ciudadanía Digital"
theme: "societat"
theme_label: "Biblioteca y comunidad"
duration: "7 sesiones"
challenge: "¿Cómo podemos preparar, trazar, proteger y verificar un paquete de libros en una maqueta sin exponer datos personales?"
---

![Un prototipo LEGO SPIKE Prime mueve fichas de libros por una ruta de cartón con varios destinos.](../../_assets/situacions/sp-biblioteca-circulant.webp)

_Una biblioteca escolar permite explorar rutas, verificación y privacidad con paquetes ficticios._

## 🌱 Situación y intención

Adaptación de la unidad *Kickstart a Business* para el contexto de un centro educativo valenciano. Cada sesión conserva el objetivo oficial y lo traduce en un reto, unos materiales y unos criterios propios; cuando una actividad del plan es híbrida o no requiere el hub, se indica expresamente en la sesión.

## 🎯 Aprendizajes y vocabulario

- Aplicar criterios de calidad para preparar y verificar un paquete ficticio de libros.
- Planificar y depurar una ruta de entrega con distancias y puntos de control observables.
- Registrar cada transferencia de la maqueta sin incorporar nombres, préstamos ni datos de lectores reales.
- Explicar qué partes del proceso puede ejecutar el robot y qué decisiones continúan siendo humanas.

## 📅 Secuencia didáctica · 7 sesiones

Duración orientativa: una sesión para las actividades de inicio y depuración; dos para el trazador X-Y, la caja lógica y el reto final de automatización. Antes de cada reto, el equipo formula una predicción; después prueba, registra el resultado y explica un cambio. Las fichas de pedido, claves y paquetes son inventadas: el robot solo trabaja en una maqueta y no se utiliza para controlar servicios reales.

### **S1 · El control de calidad de la mediateca ([Place Your Order](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/place-your-order/), 45–60 min).**

#### Fase 1 · Activamos y predecimos

Repartid un pedido ficticio de libros y descomponed «comprobar que el paquete está preparado» en acciones observables: poner el sistema en marcha, leer una ficha de color, responder con movimiento y dar una señal final. Preguntad qué orden de acciones esperan ver en el vídeo y qué tendría que pasar si la ficha cambia.

#### Fase 2 · Exploramos y construimos

En parejas, haced una construcción en tándem: una persona prepara las piezas y reconoce las acciones del vídeo de guía; la otra monta el cabezal. Después cambiad o compartid tareas para que las dos puedan explicar el modelo. Alinead los motores antes de ejecutarlo y comprobad que el sensor de color ve la ficha sin que los dedos queden detrás: los puede detectar como un color violeta.

#### Fase 3 · Explicamos y registramos

Mirad el primer vídeo tantas veces como haga falta, anotad solo las acciones observadas en pseudocódigo y convertidlas en la primera pila de bloques. Mirad el segundo vídeo, distinguid las acciones nuevas y escribid pseudocódigo y pilas adicionales. Registrad qué se ha añadido y qué se ha mantenido igual entre versiones.

#### Fase 4 · Aplicamos y mejoramos

Pedid a otra pareja que ejecute las instrucciones sin que las completéis oralmente. Comparad la precisión del pseudocódigo y el funcionamiento del modelo, localizad una ambigüedad y revisadla. Si queda tiempo, grabad un tutorial breve propio o haced una guía ilustrada para montar y programar el control de calidad.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** dos versiones de pseudocódigo, las pilas correspondientes y la comprobación de lectura del color. Autoevaluación con tres peldaños propios (reproduzco una acción / varias / creo otras originales) y retorno entre parejas con una mejora concreta. El reto conserva la descomposición y la traducción de observación a programa, con un pedido de biblioteca propio.

### **S2 · La carretilla que hacía una ruta inesperada ([Out of Order](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/out-of-order/), 45 min).**

#### Fase 1 · Activamos y predecimos

Presentad la carretilla de reparto de la maqueta —dos motores medianos delante para avanzar o retroceder y un motor grande detrás para dirigirla— y un programa intencionadamente defectuoso. Antes de ejecutarlo, cada pareja dibuja la ruta que espera y predice qué tramo puede resultar incorrecto.

#### Fase 2 · Exploramos y construimos

Ejecutad el código sin modificarlo y describid el síntoma; marcad cada acción real sobre el mapa de ruta propio. El movimiento puede ser algo imprevisible: es una propiedad del modelo y no un fallo que el alumnado tenga que «corregir» mecánicamente.

#### Fase 3 · Explicamos y registramos

En parejas, haced una lista de errores posibles y proponed una causa para cada uno. Anotad el síntoma observado, la hipótesis y qué bloque o valor podría explicarlo; contrastad las hipótesis antes de tocar el programa.

#### Fase 4 · Aplicamos y mejoramos

Cambiad un único bloque o valor cada vez y volved a probar. Comparad las estrategias y programad la carretilla para que recorra un segundo trayecto nuevo. Anotad los cambios con comentarios claros para que otra pareja pueda continuar el trabajo.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla «síntoma / hipótesis / cambio / resultado», código antes y después, y lista de comprobación. El docente puede dar pistas graduadas o una tarjeta con varios errores ordenados por complejidad. El reto adapta la búsqueda, corrección y documentación de errores, no una ruta literal del fabricante.

### **S3 · Trazador de rutas entre estanterías ([Track Your Packages](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/track-your-packages/), 2 sesiones de 45–60 min).**

#### Fase 1 · Activamos y predecimos

Presentad el reto de trazar el mapa de pasillos de la mediateca y predecid cómo se puede traducir cada tramo a movimiento de los motores. Dibujad una ruta corta con ángulos rectos y marcad qué tramos serán verticales y cuáles horizontales.

#### Fase 2 · Exploramos y construimos

Montad un trazador X-Y con una aguja ancha que deslice sobre papel. En tándem, una persona construye la parte superior del trazador y la otra la base y la aguja; después inspeccionan juntas que el conjunto se mueva libremente. Practicad cómo cargar la hoja sin arrugarla y comprobad primero cada pila de código por separado. Empezad con líneas verticales y horizontales; reservad las diagonales para una segunda prueba. Registrad las rotaciones del motor y la longitud que ha trazado cada intento.

![Modelo SPIKE Prime de la dotación junto a un trazador X-Y construido con vigas y motores, con una ruta de prueba dibujada sobre papel.](../../_assets/situacions/sa-sp-tracador-xy.webp)

_Ilustración conceptual para entender los ejes y el trazado; no es una instrucción de montaje. Comprobad el modelo y las piezas disponibles antes de construir._

#### Fase 3 · Explicamos y registramos

Combinad las pilas en un solo programa reutilizando bloques y ajustando parámetros. Trazad el mapa propio de pasillos y una diagonal hacia una estantería ficticia. Comparad la longitud prevista con la trazada y representad en una gráfica al menos dos pares (rotaciones, centímetros).

#### Fase 4 · Aplicamos y mejoramos

En la segunda sesión, haced un segundo mapa y comentad el código reutilizado. A partir de los dos pares registrados, proponed una regla aproximada del tipo *distancia = p × rotaciones + q* y medid una tercera ruta para comprobar la predicción o recalibrar. Si las diagonales dificultan la entrada, empezad con verticales y horizontales; como ampliación, convertid el trazador en plóter, dibujad un símbolo original y resolved una forma más compleja.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa anotado, pilas de código combinadas, tabla de rotaciones/longitudes y comentarios que atribuyen cualquier programa reutilizado. Comprobad tres criterios: reconocer tramos horizontales, verticales y diagonales; reutilizar y ajustar bloques para una ruta nueva; e identificar la procedencia de los bloques adaptados. Cada alumno se autoevalúa con tres niveles (todavía lo pruebo con ayuda / lo hago con bloques existentes / reutilizo y adapto el código explicando su fuente) y recibe una observación de otra pareja para la prueba siguiente.

### **S4 · Una condición para controlar el acceso a la caja de préstamo ([Keep It Safe](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/keep-it-safe/), 90–120 min).**

#### Fase 1 · Activamos y predecimos

**Tiempo orientativo · 10 min.** Activad la conversación con tres preguntas: «¿Qué dispositivo de seguridad conoces?», «¿Qué hace que una contraseña sea fácil o difícil de adivinar?» y «¿Qué es una condición?». Mirad el vídeo de la lección oficial y formulad el reto propio: ¿cómo podemos hacer que una caja de maqueta responda a una regla clara? Cada equipo dibuja una predicción con dos estados —puerta cerrada y puerta abierta— y escribe qué espera que haga la caja cuando recibe la orden elegida.

#### Fase 2 · Exploramos y construimos

**Tiempo orientativo · 35 min.** En tándem, una persona monta la puerta y la otra el cuerpo de la caja; después revisan juntas las uniones y conectan el motor según las instrucciones de construcción disponibles en el centro. Ejecutad el programa inicial para observar el mecanismo antes de modificarlo. Localizad la llave manual para recuperar la puerta si el motor queda bloqueado y dejad preparado el motor adicional para la lección siguiente, con el cable fijado detrás del modelo. Registrad en un dibujo qué movimiento abre y qué movimiento cierra, sin introducir objetos de valor ni códigos reales.

#### Fase 3 · Explicamos y registramos

**Tiempo orientativo · 15 min.** Representad la regla inicial como un diagrama de flujo con una condición y dos salidas: «si se pulsa A, abre; si no, se queda cerrada». Identificad la entrada, la condición verdadera o falsa y la acción del motor. Antes de programar, completad una tabla con tres casos: A pulsado, A no pulsado y una segunda pulsación después de abrir. Comparad la predicción con el comportamiento observado y anotad cualquier diferencia.

#### Fase 4 · Aplicamos y mejoramos

**Tiempo orientativo · 35–45 min.** Programad la regla y ejecutad los tres casos de la tabla, reiniciando el mecanismo entre intentos cuando haga falta. Añadid una segunda condición sencilla —por ejemplo, pulsar A y después B en el orden acordado— y comparadla con la versión inicial. Haced una prueba cruzada: otro equipo recibe la caja sin conocer la regla, propone qué entradas va a probar y registra si ha podido deducir el patrón. Si el movimiento no es repetible, revisad la posición inicial y el giro del motor antes de atribuir el resultado al programa. Personalizad, si hay tiempo, la matriz de luz o el sonido para que el feedback indique «prueba aceptada» o «vuelve a probarlo» sin revelar ningún dato.

#### Fase 5 · Comprobamos y reflexionamos

**Tiempo orientativo · 10–15 min.** Recoged el diagrama, la tabla de casos y el programa revisado. Observad si cada alumno puede explicar qué es una condición, utilizarla en el programa y hablar con precisión de los límites de la maqueta. Autoevaluación con tres niveles: «he probado una condición», «he probado dos» o «he probado más de dos»; una pareja deja un retorno concreto para S5. Como extensión lingüística, haced un glosario breve de *booleano, condición, cifrado* y *distingue mayúsculas*; son conceptos de seguridad digital, no propiedades que implemente esta maqueta. Reservad cinco minutos para desconectar y ordenar las piezas.

La fuente oficial pauta Engage (5 min), Explore (20 min), Explain (5 min), Elaborate (15 min) y evaluación; la planificación local amplía la construcción, las pruebas y la evaluación hasta 90–120 minutos. La caja solo usa autorizaciones inventadas: no es un candado seguro ni guarda objetos de valor, contraseñas reales o datos personales.

### **S5 · Dos condiciones y una regla transparente ([Keep It Really Safe!](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/keep-it-really-safe/), 90–120 min en dos sesiones).**

#### Fase 1 · Activamos y predecimos

Recuperad la regla simple de S4 y preguntad qué puede pasar si alguien descubre una contraseña. El reto es ampliar la maqueta de caja fuerte con una condición compuesta: la puerta solo se abre si coinciden dos entradas. Escribid qué tendría que pasar cuando solo hay una, cuando no hay ninguna y cuando las dos son ciertas.

#### Fase 2 · Exploramos y construimos

En parejas y por tareas complementarias, una persona construye el cuerpo de la caja y la otra la puerta con el brazo motorizado. Antes de ejecutar el programa, alzad el brazo a la posición inicial correcta, probad el recorrido con cuidado y localizad la llave manual de desbloqueo. Ejecutad el programa inicial para observar el mecanismo; la maqueta solo utiliza autorizaciones ficticias y no es un candado real.

#### Fase 3 · Explicamos y registramos

Comparad *AND* y *OR* con tarjetas de entrada y predecid los cuatro casos de la regla «botón A **y** sensor de fuerza activado»:

- A no pulsado + sensor inactivo → la puerta queda cerrada.
- A no pulsado + sensor activo → la puerta queda cerrada.
- A pulsado + sensor inactivo → la puerta queda cerrada.
- A pulsado + sensor activo → el programa permite abrir la puerta.

Explicad por qué *AND* es más restrictivo que *OR* en esta regla y dibujad el flujo antes de programar.

#### Fase 4 · Aplicamos y mejoramos

Añadid la condición compuesta al programa y probad, una por una, las cuatro combinaciones previstas; anotad predicción, respuesta del motor y diferencia. Después desafiad a otra pareja a abrir la caja de maqueta explicando qué entradas ha probado. Si la primera regla funciona, cread una segunda con *OR* y otra con *NOT* para generar un aviso cuando falta una autorización. Como ampliación, conectad otro sensor del set SPIKE Prime —de distancia o fuerza— y explicad por qué lo habéis elegido. Reservad tiempo para guardar el material; el trabajo completo se distribuye en dos sesiones.

#### Fase 5 · Comprobamos y reflexionamos

**Criterios de éxito:** explicar qué es una condición compuesta; programar y probar una regla; interpretar los cuatro resultados; hablar de seguridad digital con precisión. Autoevaluaos según si habéis creado una, dos o más condiciones compuestas y recibid de otra pareja una observación concreta y una mejora aplicable. Completad un glosario propio con *booleano, condición, condición compuesta, AND, OR, NOR, NOT, cifrado* y *sensibilidad a mayúsculas*, con un ejemplo de la maqueta. **Evidencia:** tabla de verdad anotada, predicciones y resultados, programa, explicación del comportamiento y glosario. No uséis contraseñas reales ni guardéis información personal: la maqueta no protege objetos ni datos de valor.

### **S6 · Clasificación asistida de devoluciones ([Automate It!](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/automate-it/), 2–3 sesiones, 120+ min).**

#### Fase 1 · Activamos y predecimos

En los diez minutos iniciales, preguntad cómo trabajan los robots de fábrica: qué pueden detectar, cómo determinan dónde están y qué decisiones mejoran la precisión y la repetibilidad. Delimitad un área para guardar los prototipos entre clases y preparad un cuaderno de inventor con espacios para bocetos, pseudocódigo, predicciones, problemas y pruebas. Definid el reto propio: enviar fichas-paquete ficticias a tres destinos de la mediateca según su color. Acordad qué relación hay entre cada color y cada bandeja, y qué criterios indican una clasificación correcta.

#### Fase 2 · Exploramos y construimos

Durante 35–55 minutos, cada equipo identifica las partes clave del problema, genera ideas, esboza al menos dos soluciones y elige una con criterios explícitos: leer el color asignado, dirigir la ficha a la bandeja correspondiente, repetir el movimiento con precisión y facilitar la revisión. Escribid pseudocódigo antes de construir y programad solo la detección de color que permite el sensor. La forma, el texto o el símbolo de la ficha son pistas para las personas y no entran en la decisión automática: el sensor no lee palabras ni reconoce formas. Combinad roles y anotad los problemas en lugar de esconderlos. Si hace falta apoyo, empezad con un modelo base y mejoradlo.

![Modelo SPIKE Prime de la dotación comprueba tarjetas de devolución de colores y las deriva hacia tres bandejas de prueba.](../../_assets/situacions/sa-sp-classificador-retorns.webp)

_Prototipo conceptual con fichas y bandejas ficticias; el sensor y el mecanismo se tienen que ajustar y calibrar con las piezas reales del centro. No clasifica libros, personas ni datos reales._

#### Fase 3 · Explicamos y registramos

Reservad diez minutos para identificar y documentar los problemas que han aparecido durante el desarrollo. Describid qué tendría que haber pasado, qué ha pasado realmente y qué parte del mecanismo, la calibración o el programa podría explicar la diferencia. Elegid una hipótesis y modificad una variable por tanda; anotad la relación entre cambio y resultado en el cuaderno de inventor.

#### Fase 4 · Aplicamos y mejoramos

En una segunda o tercera sesión de unos 60 minutos, completad el programa y el mecanismo. Probad primero una ficha de cada color; después, repetid el test cambiando la forma o la palabra impresa pero manteniendo el mismo color para comprobar que el sistema sigue clasificando únicamente por color. Registrad aciertos, errores y calibración. Presentad la solución a la clase y, cuando los prototipos sean suficientemente estables, conectadlos en una línea de triaje o añadid una carretilla de entrega entre estaciones. La ampliación puede añadir funciones nuevas, pero cada una tiene que estar descrita en el pseudocódigo y comprobada con una prueba propia. Reservad tiempo para ordenar el material.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** cuaderno con ideas alternativas, pseudocódigo, tabla con color previsto/color leído/destino/resultado, decisión de rediseño y presentación con esquemas o fotografías propias y límites identificados. Observad si el alumnado identifica los elementos del problema, trabaja con autonomía para crear una solución funcional y creativa, y comunica claramente las ideas. Autoevaluación individual: **azul**, he creado un ayudante funcional; **amarillo**, resuelve el problema de una manera creativa; **violeta**, además, he presentado las ideas claramente. Otra pareja aporta feedback concreto y una propuesta de mejora. El sistema clasifica las fichas de juego por el color; las formas y palabras solo las interpretan las personas. No clasifica personas ni sustituye la catalogación real.

### **S7 · Instrucciones de espaldas ([Back to Back](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/back-to-back/), 45 min, híbrida y desconectada).**

#### Fase 1 · Activamos y predecimos

Dedicad diez minutos a recuperar las ideas previas con «¿qué es un código?» y a construir definiciones compartidas de algoritmo, error, descomposición y pseudocódigo. Comparad una instrucción cotidiana con una secuencia de bloques explicada con palabras: ¿qué hace que las instrucciones sean claras, ordenadas y ejecutables? Cada persona tendrá dos hojas para esbozar y escribir su pseudocódigo.

#### Fase 2 · Exploramos y construimos

En quince minutos, cada cual elige hasta cinco piezas y construye, sin instrucciones, un animal inventado inspirado en la fauna del marjal valenciano; el ejemplo docente puede inspirar, pero no hace falta copiarlo. Después escribe en una hoja los pasos necesarios para que otra persona pueda montarlo exactamente. Se puede hacer con piezas de SPIKE Prime u otras piezas de construcción. Si no hay piezas disponibles, el alumnado dibuja o recorta formas y las usa como componentes; el reto sigue siendo ordenar instrucciones para construir. No hace falta hub, sensor ni software.

#### Fase 3 · Explicamos y registramos

Durante diez minutos, en parejas, una persona lee el pseudocódigo y la otra construye siguiéndolo exactamente, sin completar pasos de memoria ni pedir información que no aparezca escrita. Después cambiad los roles con el segundo modelo. Comparad original y reconstrucción y dad feedback respetuoso con un ejemplo: «esta instrucción era clara» o «aquí faltaba indicar…». Identificad una ambigüedad o un paso ausente y anotad cómo el resultado ayuda a depurar el pseudocódigo. Preguntaos qué pasos se pueden agrupar y qué detalles son necesarios para evitar interpretaciones distintas.

#### Fase 4 · Aplicamos y mejoramos

En cinco minutos, imaginad un segundo animal u otra figura y revisad cómo haríais las instrucciones más fáciles de seguir. Marcad una frase que habría que reescribir o dos pasos que se podrían agrupar; si no hay tiempo para una nueva construcción, guardad la propuesta para la próxima clase. Relacionad el ejercicio con la programación por parejas: una persona escribe y la otra ejecuta. En modalidad remota síncrona, se puede hacer la lectura en voz alta a una pareja o grupo reducido; en modalidad asíncrona, se comparte solo el pseudocódigo y una reflexión escrita o dibujada, sin exigir una videollamada ni fotografías de casa.

#### Fase 5 · Comprobamos y reflexionamos

En los cinco minutos finales, cada alumno comparte un ejemplo de instrucción que describe un algoritmo paso a paso y un problema que ha identificado y corregido. Autoevaluación privada con tres colores: **rojo**, con ayuda puedo escribir pseudocódigo y depurarlo; **amarillo**, puedo explicar cómo escribirlo y depurarlo; **verde**, puedo enseñarlo a otra persona. **Evidencia:** modelo original de cinco piezas como máximo, pseudocódigo inicial, reconstrucción del compañero, error detectado y versión revisada.

## 🧰 Materiales y preparación

Para S1–S6: SPIKE Prime, cuadrícula de papel, fichas ficticias, cartón y los sensores que cada reto requiera, comprobados con el hub y la app del centro. Para S7: dos hojas por alumno y lápiz; las piezas de construcción son opcionales y no se utiliza hub ni software. Esta situación es una maqueta didáctica: no gestiona préstamos, candados ni pedidos reales de la biblioteca.

## 🎯 Evidencias y evaluación

Incluimos protocolo de pedido, depuración antes/después, mapa X-Y, tabla de pruebas con condiciones simples y compuestas, cuaderno de inventor con varias iteraciones, resultados de clasificación y pseudocódigo revisado. En cada sesión, el grupo elige un indicador observable del progreso y recibe una observación útil de otra pareja; la valoración no depende de si el mecanismo «gana» ni de si la primera solución funciona. La muestra final explica una decisión que conserva privacidad o evita una automatización injusta.

## ♿ Participación e inclusión

Las etiquetas combinan color con forma y símbolo. Se puede seguir la ruta con un mapa táctil o una ficha desplazable, y participar como cartógrafo, programador, verificador o narrador. Todos los datos de personas y libros son inventados.

## 🔗 Unidad oficial y trazabilidad

La unidad contiene siete lecciones que se han contrastado individualmente en sus [fichas públicas de LEGO Education](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/): observación de vídeos y pseudocódigo para descomponer el control de calidad; depuración documentada de una carretilla de reparto; reutilización de pilas de código en un trazador X-Y; condiciones en una caja con llave manual; condiciones compuestas con AND/OR; un proyecto abierto de ayudante automatizado a lo largo de 2–3 sesiones; y pseudocódigo sin ordenador en una lección híbrida con piezas flexibles. También hemos incorporado la construcción en tándem, los objetivos de evaluación y las ampliaciones públicas compatibles con la dotación. Las instrucciones detalladas del alumnado y los modelos de LEGO remiten a la app y no se reproducen: la propuesta, la maqueta de biblioteca, los datos, los criterios, las tarjetas y la imagen son propios. Los montajes y sensores se comprueban con el set disponible en el centro.