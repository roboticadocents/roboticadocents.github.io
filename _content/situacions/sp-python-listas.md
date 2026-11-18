---
active: true
title: "Palabras en lista, historias en ruta"
description: "Seis lecciones de Python y SPIKE Prime para crear listas, consultar índices, comparar datos y construir un juego de palabras activado por colores."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Lenguas y Programación"
theme: "python"
theme_label: "Python: listas y juego de palabras"
duration: "6 lecciones · 8–12 sesiones"
challenge: "¿Cómo puede una lista Python organizar datos en orden, comparar colecciones y convertir señales de color en piezas de una historia colaborativa?"
---

![Robot LEGO SPIKE Prime con sensor de color frente a tarjetas geométricas ordenadas sobre una mesa de biblioteca escolar.](../../_assets/situacions/sp-python-llistes.webp)

_Las listas dan orden y estructura a los datos; las tarjetas y la lectura del sensor hacen visible la secuencia._

## 🌱 Reto y relato

La biblioteca prepara una actividad de microrrelatos del barrio: cada grupo crea una secuencia corta a partir de tarjetas de lugar, objeto y acción, y una maqueta SPIKE ayuda a elegir o revelar la próxima tarjeta. En Python, las tarjetas se organizan en listas; el programa consulta posiciones, compara una lista de elementos con otra y usa una lectura de color para dar una pista de índice. Cada historia es ficticia, acordada y sin datos personales. No usamos los textos del alumnado como datos de entrenamiento ni los publicamos sin permiso.

La situación adapta las seis lecciones de la unidad 10 *Lists* de LEGO Education *Introduction to Python Programming · Course 2*: crear y consultar listas de letras con condiciones; construir una rutina secuenciada con valores del sensor de movimiento; comparar dos listas en un juego de razonamiento; añadir a una lista datos de pruebas de un mecanismo; hacer un juego de palabras con más de una lista y el sensor de color; y dar/usar retroalimentación. Cambiamos yoga, saltos y juegos de marca por secuencias de movimiento de maqueta, medidas mecánicas no corporales y microrrelatos de lugares imaginarios o conocidos del municipio, manteniendo explícitos el orden, los datos y la comparación.

## 🎯 Aprendizajes y vocabulario

- Crear una lista en Python, acceder a valores por índice y explicar que la numeración empieza en cero.

- Usar una variable de índice y una condición compuesta para recorrer o validar elementos elegidos.

- Organizar dos listas relacionadas (por ejemplo, lugares y acciones), compararlas y detectar correspondencias, diferencias o posiciones sin pareja.

- Añadir datos medidos de pruebas a una colección y documentar sus unidades, condiciones e interpretación.

- Combinar una lectura de sensor con una selección de lista de manera que la entrada no reconocida tenga respuesta explícita.

- Descomponer el juego en lectura, selección, verificación, mensaje y movimiento; probar funciones y condiciones sin depender de que el mecanismo funcione perfectamente.

- Hacer retroalimentación específica sobre el orden, la regla y la accesibilidad del juego, y revisar el código sin reescribir el trabajo de otro equipo.

**Lista:** secuencia ordenada de valores que se guarda con un solo nombre. **Elemento:** un dato dentro de una lista. **Índice:** posición numérica de un elemento, habitualmente desde 0 en Python. **Correspondencia:** relación prevista entre elementos de dos listas. **Lectura del sensor:** valor que el dispositivo detecta en unas condiciones concretas; no es una etiqueta semántica que Python entienda automáticamente.

```python
llocs = ["plaça", "hort", "biblioteca"]
accions = ["saluda", "observa", "comparteix"]

posicio = 1
print(llocs[posicio], accions[posicio])
```

Este ejemplo general asocia valores que comparten índice; si las listas no tienen la misma longitud, hay que tratarlo antes de acceder a ellas. En SPIKE, la lectura del sensor, los puertos y las funciones de luz/sonido/motor deben consultarse en la Knowledge Base de la versión local.

## 🧰 Materiales y preparación

Un set SPIKE Prime por equipo, hub cargado, app SPIKE con Python disponible, sensor de color, sensor de fuerza opcional para una entrada de confirmación, sensor de movimiento del hub si se prueba una secuencia de giro del dispositivo, motor y piezas Technic para un indicador lento opcional, tarjetas grandes de formas/colores, cartón y cinta de papel, regla, diario de programación y ordenador o papel para código compartido. La construcción puede ser estática: ninguna actividad depende de un robot móvil ni de reproducir instrucciones LEGO.

Preparad paquetes de tarjetas con símbolo, color y palabra impresos con contraste suficiente; un color no reconocido; ejemplos en los que las listas tienen longitudes diferentes; y listas vacías para hablar de límites. Comprobad qué colores reconoce el sensor bajo la luz del aula, con tarjetas planas y a una distancia fija. El sensor puede devolver valores inestables según el material, por eso preved un modo de selección manual. Para las pruebas del mecanismo, usad una ficha grande y ligera, recorrido corto y motor a baja potencia. Evitad registrar datos de movimiento o salud del alumnado; si se gira el hub para obtener valores de orientación, sujetadlo con un soporte y consideradlos datos del dispositivo.

Organizad roles rotatorios: quién redacta y explica la lista; quién prueba índices y casos vacíos; quién prepara tarjetas/sensor; quién registra resultados y acceso a la historia. Acordad previamente que cualquier relato inventado es voluntario, respetuoso y revisado por el grupo.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Letras, tarjetas e índices (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (7 min):** mostrad una palabra corta formada por tarjetas separadas y pedid cómo indicar «la tercera letra». Comparad contar desde uno o desde cero con una lista de índices dibujada.

#### Fase 2 · Exploramos y construimos

**Modelado (8 min):** en Python, cread una lista pequeña de letras y acceded a los primeros, últimos e intermedios valores con índice. Probad qué pasa con índice 0, índice igual a la longitud y lista vacía, primero en papel y después en una copia en el dispositivo. Explicad el error fuera de rango sin tratarlo como un fracaso personal.

#### Fase 3 · Explicamos y registramos

**Reto (20 min):** inventad un título de microrrelato con un repertorio de tarjetas de lugares u objetos. Escribid una lista de símbolos admisibles, una condición que determine si una entrada está presente y una alternativa si no lo está. Por ejemplo, una condición compuesta revisa que el índice sea mayor o igual que cero *y* menor que la longitud de la lista antes de acceder a ella. El alumnado no guarda nombres ni palabras atribuibles a compañeros.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas y documentación (7 min):** haced una tabla de índice → elemento esperado con un mínimo de cinco casos, incluidos los límites.

#### Fase 5 · Comprobamos y reflexionamos

**Salida (3 min):** explicad por qué el índice 2 selecciona el tercer elemento.

### **Lección 2 · Secuencias con movimiento y datos del hub (90 min).**

#### Fase 1 · Activamos y predecimos

**Entrada (10 min):** observad un patrón de movimientos de un personaje de papel o de una flecha articulada: inclinación, retorno, pausa; escribidlo como una secuencia ordenada.

#### Fase 2 · Exploramos y construimos

**Sensor y valores (15 min):** consultad la documentación del sensor de movimiento integrado en el hub, haced una lectura con el hub quieto sobre la mesa y otra después de una rotación controlada en un soporte. Registrad ejes, valores y convención de la biblioteca local; no confundáis un valor angular con una instrucción de orientación. Si la función no está disponible, usad valores sintéticos entregados por la docente.

#### Fase 3 · Explicamos y registramos

**Listas y programa (25 min):** cread una lista corta de estados/ángulos de muestra y asociadlos con una lista de mensajes o acciones para una secuencia de movimiento representada por una flecha/maqueta. Mostrad cómo un bucle y un índice pueden visitar cada elemento por orden; para quien ya lo domine, comparad un bucle con llamadas repetidas. No convirtáis los valores en posiciones de motor sin calibración.

#### Fase 4 · Aplicamos y mejoramos

**Diseño (15 min):** cada equipo propone una secuencia de tres gestos de la señal escolar, con una alternativa visual equivalente.

#### Fase 5 · Comprobamos y reflexionamos

**Pruebas (15 min):** probad la lista con valores repetidos, una lista más corta y una lectura inesperada; comprobad que no se solicita un índice inexistente. Si se activa un motor, mantenedlo en modo lento con tope. **Reflexión (10 min):** ¿qué datos se recogieron? ¿cuáles se inventaron? ¿qué acción del prototipo es simbólica y cuál está realmente conectada al movimiento medido?

### **Lección 3 · Comparar dos listas: juego de parejas (90 min).**

#### Fase 1 · Activamos y predecimos

**Reto (8 min):** una guía ficticia combina una lista de lugares con una lista de pistas, pero las correspondencias se han desordenado. El equipo debe detectar qué concuerda, qué falta y qué sobra.

#### Fase 2 · Exploramos y construimos

**Creación de listas (15 min):** definid `llocs` y `pistes` con valores de ficción y una tabla de parejas esperadas; incluid un valor que aparezca en una sola lista y un elemento duplicado deliberado.

#### Fase 3 · Explicamos y registramos

**Programa de comparación (25 min):** recorred las listas con índice y comparad elementos en cada posición; marcad pareja correcta, discrepancia y longitud desigual. Distinguid «las listas son iguales elemento a elemento» de «cada lista contiene los mismos valores en cualquier orden». Si el alumnado usa operadores de pertenencia o métodos no enseñados en este entorno, verificadlos en Python general; documentad claramente cualquier función usada.

#### Fase 4 · Aplicamos y mejoramos

**Juego por turnos (20 min):** una pareja crea una ronda de parejas con tarjetas, la otra ejecuta el código o hace la traza manualmente. Se permiten pistas accesibles en palabras y símbolos; no se cronometra la lectura.

#### Fase 5 · Comprobamos y reflexionamos

**Validación (15 min):** probad listas iguales, una discrepancia en primera/última posición, listas de longitud diferente, duplicados y lista vacía. **Cierre (7 min):** cada equipo dice qué caso detecta el código y qué caso todavía no cubre.

### **Lección 4 · Una colección de pruebas para un mecanismo (90 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta (8 min):** ¿cuántas pruebas hacen falta para saber si un indicador motorizado abre lo suficiente una portezuela de cartón sin salirse de su recorrido?

#### Fase 2 · Exploramos y construimos

**Modelado de datos (12 min):** diseñad una tabla de intentos con valor de comando (grados/velocidad), posición manual observada y resultado (llega a la marca: sí/no). Acordad unidades y escala; no midáis fuerza humana.

#### Fase 3 · Explicamos y registramos

**Experimento (15 min):** montad un brazo articulado seguro con las piezas disponibles, fijad el cuerpo del mecanismo y usad fichas ligeras. Registrad una línea base con tres órdenes y cinco repeticiones de un valor seleccionado.

#### Fase 4 · Aplicamos y mejoramos

**Listas Python (20 min):** guardad los resultados simulados o recogidos en una lista con valores uniformes (por ejemplo, todos enteros o todos booleanos por separado). Recorred la lista para contar cuántas pruebas han llegado y cuantificar la proporción de éxito; hablad de por qué mezclar palabras, valores vacíos y números en una sola lista complica los cálculos.

#### Fase 5 · Comprobamos y reflexionamos

**Análisis y mejora (20 min):** comparad valores y modificad una variable cada vez. Mostrad cómo cambia la lista cuando se repite el test y por qué hay que separar los datos iniciales de los posteriores. **Comunicación (15 min):** haced un gráfico sencillo, describid la variación y redactad una afirmación proporcional a los datos: «en esta muestra, el mecanismo va…», no «siempre funciona». Si no hay tiempo o materiales, usad un conjunto de datos ficticio identificado como simulado.

### **Lección 5 · Juego de palabras con sensor de color y listas (90 min).**

#### Fase 1 · Activamos y predecimos

**Idea y lenguaje (10 min):** cread microfrases en un lenguaje respetuoso a partir de tres conjuntos de palabras: lugares, acciones y objetos. El escenario puede ser la biblioteca, la plaza ficticia, un mercado o un lugar inventado por la clase; no se incluyen nombres de personas ni información privada.

#### Fase 2 · Exploramos y construimos

**Arquitectura de datos (15 min):** preparad varias listas con elementos ordenados y una tabla color → índice o categoría. Mantenedlas de longitud conocida, no vacías, y definid una salida neutra para color no reconocido. Explicad cómo el orden altera las posibles combinaciones.

#### Fase 3 · Explicamos y registramos

**Sensor y código (25 min):** fijad el sensor de color sobre un soporte y pasad una tarjeta cada vez. Python lee el color con una API comprobada en la app, lo transforma en un índice acordado y selecciona una palabra de la lista si el índice es válido. Conectad la lectura con una matriz de luz o una señal de un motor solo si añade información; el texto generado puede mostrarse en la consola y en una tarjeta física. No supongáis que una lectura de color equivale a una letra.

#### Fase 4 · Aplicamos y mejoramos

**Creación del juego (15 min):** cada equipo escribe reglas claras (número de tarjetas, orden de selección, repeticiones permitidas) y prueba con entrada manual y sensorial.

#### Fase 5 · Comprobamos y reflexionamos

**Partidas y cobertura (15 min):** otra pareja juega; el equipo registra si todas las combinaciones previstas se pueden ejecutar, si aparece un índice fuera de rango o si una palabra queda descontextualizada. **Revisión lingüística (10 min):** el equipo comprueba que el resultado es respetuoso y se entiende sin una pista cultural desconocida. Ofreced una alternativa de lectura, pictogramas o dictado si es necesario.

### **Lección 6 · Retroalimentación que mejora código y juego (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Muestra corta (5 min):** cada grupo prepara tarjetas, listas, comentarios del programa, una prueba que ha pasado, una que ha fallado y una pregunta.

#### Fase 2 · Exploramos y construimos

**Retroalimentación modelada (8 min):** practicad «he observado que la lista…», «esperaba que el color…», «quizá falta probar la lista vacía…». No reconstruyáis el modelo ni editéis el programa de otro equipo.

#### Fase 3 · Explicamos y registramos

**Intercambio (10–15 min):** parejas de equipos rotan por el juego, anotan qué es claro y qué casos no se resuelven; no copian ni fotografían textos de alumnos.

#### Fase 4 · Aplicamos y mejoramos

**Decisión e iteración (7–10 min):** el equipo autor decide qué idea incorpora, explica por qué y modifica una parte de la lista, condición o instrucción. Repetid el mismo caso que generó la retroalimentación y un caso nuevo.

#### Fase 5 · Comprobamos y reflexionamos

**Autoevaluación (5 min):** explicad con un ejemplo el papel del índice y cómo una entrada de sensor se ha convertido en elemento; señalad un límite del generador de microrrelatos y un siguiente paso de mejora.

## 🧪 Evidencias y evaluación

Portafolio de equipo: listas anotadas; tabla índice–elemento; código con comentarios y gestión de índice fuera de rango; diagrama que relaciona colores con índices; lecturas de sensor y condiciones de calibración; listas comparadas con casos iguales/diferentes y longitudes distintas; datos de pruebas mecánicas con unidades; resultado del juego de palabras; instrucciones de partida; retroalimentación recibida y cambio incorporado. Valorad cuatro dimensiones: **uso de lista e índice** (consulta valores y prevé límites); **comparación y condiciones** (distingue orden, correspondencia y casos ausentes); **integración de datos** (relaciona sensor, valor, regla y salida); **diseño colaborativo** (documenta, prueba, incorpora o justifica la retroalimentación y ofrece acceso alternativo). Una ejecución afortunada no sustituye la prueba de listas vacías, divergentes o no reconocidas.

## ♿ Accesibilidad, privacidad y seguridad

Las listas se pueden trabajar con tarjetas físicas grandes, texto ampliado, dictado, símbolos y secuencias de audio opcionales; no hace falta leer rápido ni distinguir colores sin alternativa. La salida del sensor también se puede seleccionar manualmente. Los microrrelatos son ficticios o de lugares públicos elegidos con cuidado; no se guardan en ellos nombres, domicilios, historias personales ni trayectos. Evitad compartir código o texto fuera del aula sin acuerdo. Mantened el robot sobre la mesa y frenadlo antes de manipularlo; si hay movimiento, estableced límites suaves y alejad las manos. La secuencia de movimientos es de una maqueta, no una rutina física obligatoria ni una evaluación corporal.

## 🔗 Referente oficial y adaptación

Adapta las seis lecciones de la unidad 10 *Lists* del curso LEGO Education [*Introduction to Python Programming · Course 2*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5436c2a0ac31fc17/65e9d0ef2a3929468f30be14/File_2_Units_678910_Intro_to_Python_Course_TG_Course_2.pdf?locale=en-us): *Listing Letters*, *Stretch Your Muscles and Lists*, *Mind Games*, *Jumping for Lists*, *Word Games with Lists* e *Ideas to Help with Word Games with Lists*. Mantiene la estructura de lista/índice y condiciones compuestas, valores de sensor y secuenciación, comparación de dos listas, registro de datos de pruebas, integración de listas y sensor de color en un juego, y retroalimentación entre equipos. Las referencias a yoga/saltos se transforman en estados de un mecanismo de mesa y medidas de prototipo, sin capturar información corporal del alumnado. El escenario de vocabulario, las fichas, los datos de ejemplo y la imagen son propios; el programa y la construcción se adaptan a la dotación real y no copian instrucciones oficiales. La app y la API deben verificarse en el dispositivo local.
