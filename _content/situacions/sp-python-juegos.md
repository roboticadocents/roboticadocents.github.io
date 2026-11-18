---
active: true
title: "Feria de juegos con reglas claras"
description: "Ocho lecciones de Python SPIKE Prime sobre condiciones simples, sensor de inclinación, juegos, puntuación, bucles y depuración."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Programación"
theme: "python"
theme_label: "Python: condiciones simples y juegos"
duration: "8 lecciones · 8–12 sesiones"
challenge: "¿Cómo podemos crear un juego de feria con reglas transparentes en el que una condición Python cambie una respuesta del modelo, el marcador sea fiable y todo el mundo pueda participar?"
---

![Mecanismo de juego hecho con LEGO SPIKE Prime, hub, motor y garra ligera que juega con fichas grandes y símbolos en un tablero de mesa.](../../_assets/situacions/sp-python-jocs.webp)

_Una regla de juego es un contrato: hay que poder anticipar la respuesta, probarla y entender la puntuación._

## 🌱 Reto y sentido

Una escuela prepara una feria de juegos cooperativos inspirada en las fiestas y ferias locales.

Un grupo crea una estación interactiva con SPIKE Prime: la inclinación del hub puede seleccionar una dirección, un mecanismo ligero puede recoger una ficha de papel, el sensor de color puede leer una pieza de prueba y un marcador de luz o movimiento comunica el resultado. Las reglas deben ser públicas, probarse con casos previstos e inesperados y permitir una partida sin rapidez física, sonido obligatorio ni información personal.

Esta propuesta adapta la unidad 5 *Playing Games with Simple Conditions* de LEGO Education *Introduction to Python Programming · Course 1*: *Controlling Motion with Tilt*, *Claw Machine*, *Charting Game Decisions*, *Guess Which Color*, *Guessing Game*, *Score!*, *Game Time* e *Ideas to Help with Game Time*. Progresa desde la entrada de inclinación y la condición simple hacia un mecanismo con bucle, diagrama de decisiones, sensor de color, condiciones `if/elif/else` y depuración, puntuación con matriz/movimiento, diseño de juego y revisión entre equipos. Todas las reglas, tableros y ejemplos de esta ficha son propios.

## 🎯 Aprendizajes y vocabulario

- Explicar que una condición Python evalúa una expresión y decide si ejecuta una rama.

- Leer valores de inclinación u orientación del sensor de movimiento del hub en la forma que exponga la API local; mapearlos a acciones limitadas y reversibles.

- Relacionar un bucle de juego con la ronda de una partida y definir explícitamente cuándo empieza, continúa y termina.

- Descomponer las reglas en un diagrama de flujo antes de implementarlas, incluyendo respuesta para entrada desconocida y caso de partida terminada.

- Programar una decisión basada en color con valores medidos en la luz real del aula; distinguir el color leído de la interpretación o regla que el equipo le asigna.

- Usar `if`, `elif`, `else` y comparaciones para seleccionar una respuesta; depurar sintaxis, indentación, rama inaccesible o condición invertida.

- Gestionar la puntuación con una variable y una señal de matriz o movimiento sencillo, comprobando que la puntuación se actualiza una vez por evento.

- Probar el juego con diferentes personas, pedir consentimiento, ofrecer modos de acceso alternativos y aplicar retroalimentación específica.

**Condición:** expresión booleana que es verdadera o falsa. **Rama:** camino que se ejecuta según la condición. **Sensor de movimiento del hub:** componente integrado que informa orientación/inclinación dentro de los límites de su API. **Estado:** situación actual del juego (espera, ronda, puntuación, terminado). **Puntuación:** contador acordado por el diseño, no medida de valor personal. **Caso límite:** entrada que pone a prueba una frontera o situación no ordinaria.

```python
# Python general: tres respostes explícites per a una entrada ja triada
if direccio == "nord":
    resposta = "avança una casella"
elif direccio == "sud":
    resposta = "torna a la zona inicial"
else:
    resposta = "espera i demana una nova selecció"
```

Este ejemplo usa datos ficticios y no lee inclinación ni controla el robot. Los nombres y métodos de lectura de sensor, motores, luces, matriz y bucle asíncrono varían según la versión de la app SPIKE. Adaptad el código a la documentación local y empezad las pruebas con los motores detenidos.

## 🧰 Materiales y preparación docente

Un set SPIKE Prime 45678 por equipo, hub cargado, sensor de color, motor mediano, piezas para una garra o puerta ligera con recorrido limitado, tableta/ordenador con SPIKE Python, fichas grandes mate con colores y formas coincidentes, cartón, cinta, papel, rotulador y diario de programación. El sensor de movimiento está integrado en el hub. Ningún material exige el set de expansión. Si el modelo de garra resulta difícil, sustituidlo por un indicador articulado o un juego en pantalla/tablero: el objetivo curricular es la decisión programada, no la destreza mecánica.

Probad previamente los colores y evitad fondos brillantes o luz directa. Definid una garra que solo se acerque a fichas planas de cartón, con topes, baja potencia y anchura suficiente para que no pueda atrapar dedos. Elegid un tablero que pueda jugarse sentado; cread reglas impresas con icono, palabra y color. Preparad tres variantes de juego: selección por inclinación, selección manual en tarjeta y simulación de lecturas. Acordad que las puntuaciones son del juego/equipo, no del alumnado.

Roles rotatorios de programación, lectura de reglas, prueba, accesibilidad/observación y cuidado del modelo. El juego se prueba en una mesa cerrada y estable; ningún robot se mueve hacia una persona ni se deja ejecutar sin supervisión.

## 📅 Secuencia didáctica · ocho lecciones

### **Lección 1 · Inclina y elige una acción (45 min).**

#### Fase 1 · Activamos y predecimos

Con una tarjeta grande de brújula, definid cómo una inclinación podría representar «derecha», «izquierda» o «espera». Predecid qué acción corresponde a cada orientación y ofreced una opción manual equivalente.

#### Fase 2 · Exploramos y construimos

Consultad el sensor de movimiento del hub y anotad cómo cambian las lecturas en cuatro orientaciones seguras, sin sacudir ni dejar caer el hub.

#### Fase 3 · Explicamos y registramos

Escribid pseudocódigo para una sola regla y registrad lectura, orientación y respuesta esperada. Identificad qué umbral utilizaréis.

#### Fase 4 · Aplicamos y mejoramos

Programad una indicación luminosa o una rotación corta, con motores elevados/apagados de forma segura. Si las lecturas pequeñas alternan las órdenes, añadid una zona neutra y repetid la prueba.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** prueba con inclinación clara hacia cada lado, hub plano y valor intermedio. Explicad qué umbral es convencional y por qué no es universal entre hubs.

### **Lección 2 · Garra de mesa con reglas de captura (45 min).**

#### Fase 1 · Activamos y predecimos

Definid una ronda: el jugador selecciona una de tres zonas y el mecanismo intenta coger una ficha grande. Acordad quién inicia, cuántos intentos hay y qué significa «capturar».

#### Fase 2 · Exploramos y construimos

Diseñad una palanca o garra de cartón o piezas Technic con límite de recorrido. Poned la ficha dentro de una bandeja plana y comprobad que no hay riesgo de atrapar dedos.

#### Fase 3 · Explicamos y registramos

Cread un bucle finito de intentos, una acción de abrir/cerrar y una condición para el resultado elegido manualmente. Identificad la entrada, la acción y el resultado que una persona debe confirmar.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad primero sin pieza y después con una ficha ligera. Detened los motores antes de ajustar el mecanismo; no afirméis que detecta una captura si no hay un sensor verificado.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** regla de ronda, código y registro de dos pruebas. Explicad qué parte del resultado confirma el operador en este prototipo inicial.

### **Lección 3 · Dibujar todas las decisiones antes de jugar (45–90 min).**

#### Fase 1 · Activamos y predecimos

Proponed un minijuego de feria que use una elección y hasta tres resultados. Predecid qué entradas y respuestas necesita para ser comprensible.

#### Fase 2 · Exploramos y construimos

Cread un diagrama con estado inicial, entrada, condiciones en orden, salida de cada caso, puntuación y finalización. Añadid respuesta para entrada desconocida y cancelación.

#### Fase 3 · Explicamos y registramos

Otra pareja sigue el diagrama con tarjetas. Marcad si siempre llega a una respuesta, si hay una rama inalcanzable y qué salida corresponde a cada caso.

#### Fase 4 · Aplicamos y mejoramos

Implementad ramas con valores fijos antes de añadir sensores. Comparad el orden de las condiciones y las igualdades con el diagrama; probad todas las entradas previstas y una ausente.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** diagrama trazado e instrucción con lenguaje claro y pictogramas. Si hay 90 minutos, programad el prototipo; con 45, dejad el código para una sesión propia.

### **Lección 4 · Una ficha, un color, una respuesta (45 min).**

#### Fase 1 · Activamos y predecimos

Mostrad fichas planas y predecid cuáles distinguirá el sensor. Acordad que cada respuesta tendrá también una forma o símbolo, no solo un color.

#### Fase 2 · Exploramos y construimos

Colocad las fichas bajo el sensor a una distancia constante y registrad la lectura de cada color. Haced tres lecturas por pieza y, si es posible, repetid con otra luz.

#### Fase 3 · Explicamos y registramos

Asignad a cada color reconocido un movimiento o mensaje y cread una salida neutra para «ninguno/otro». Anotad lectura, rama y respuesta esperada.

#### Fase 4 · Aplicamos y mejoramos

Implementad la condición Python. Ejecutad primero con los motores quietos; después, si es seguro, activad una respuesta visual o una rotación corta. Revisad las categorías que se confunden.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** casos con colores reconocidos, desconocido, sin ficha y tarjeta girada. Explicad cómo la luz y la distancia afectan la decisión; no supongáis valores exactos ni una distinción universal de colores.

### **Lección 5 · Adivina la regla y depura el programa (45 min).**

#### Fase 1 · Activamos y predecimos

Elegid una tarjeta secreta que cumpla una propiedad pública, como «color primario» o «forma con tres lados». Predecid qué respuestas dará el juego sin almacenar datos personales.

#### Fase 2 · Exploramos y construimos

Escribid una secuencia `if/elif/else` y un bucle finito de turnos. Dibujad casos para cada rama y ejemplos que no pertenecen a ella.

#### Fase 3 · Explicamos y registramos

Analizad tres programas con errores: sintaxis/indentación, condición invertida y `else` prematuro. Predecid el resultado de cada uno antes de corregirlo.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una línea cada vez y probadla con los casos de la tabla. Implementad vuestra versión en Python general o con el hub quieto y comprobad el máximo de turnos.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** código corregido y prueba de cada rama. Explicad la diferencia entre un error de sintaxis y una regla lógica errónea.

### **Lección 6 · Marcador visible y puntuación justa (45 min).**

#### Fase 1 · Activamos y predecimos

Cread una regla sencilla, como un punto por acierto hasta un máximo de tres. Predecid cómo se mostrará una puntuación sin comparar capacidades personales.

#### Fase 2 · Exploramos y construimos

Añadid una variable `punts` y representadla con la matriz del hub o un indicador de movimiento. Actualizadla una vez después de un evento válido.

#### Fase 3 · Explicamos y registramos

Preparad casos de acierto, error, turno repetido, partida terminada, puntuación máxima y reinicio. Comparad el valor de la variable con la luz o el movimiento observado.

#### Fase 4 · Aplicamos y mejoramos

Comprobad si una entrada sostenida o una acción repetida suma puntos más de una vez. Probad por separado el incremento y el reinicio y corregid cualquier discrepancia.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** registro de los seis casos de prueba y marcador coherente. Proponed una manera de mostrar la participación sin clasificar a las personas.

### **Lección 7 · Construir un juego completo para la feria (90 min).**

#### Fase 1 · Activamos y predecimos

Definid objetivo, reglas en tres pasos, número de rondas, respuestas, marcador y alternativas de acceso. El juego usará condiciones Python y un componente SPIKE; el sensor es opcional si ya se ha calibrado.

#### Fase 2 · Exploramos y construimos

Haced un diagrama de estados y una matriz de casos para inicio, resultados, entrada ambigua/no reconocida, máximo de puntos, nueva ronda y cancelación/reinicio. Montad un soporte estable y delimitad la pieza móvil y la zona de manos.

#### Fase 3 · Explicamos y registramos

Implementad por partes la entrada, la condición, la respuesta, la puntuación y el final. Documentad cualquier ejemplo de código reutilizado y vinculad cada regla con un caso del diagrama.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad todos los casos y verificad que cada ronda termina y el reinicio limpia la puntuación. Preparad instrucciones claras, modo sin sonido/color y una respuesta para lectura inválida.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** juego funcional con plan de pruebas e instrucciones. Valorad la coherencia entre especificación y código, no quién consigue más puntos.

### **Lección 8 · Retroalimentación y mejora de la feria (30–45 min).**

#### Fase 1 · Activamos y predecimos

Otro equipo lee las instrucciones y prueba el minijuego. Los autores observan la primera ronda sin dar pistas; no recogáis nombres ni puntuaciones individuales.

#### Fase 2 · Exploramos y construimos

El revisor anota una cosa que ha entendido, una regla confusa y un caso límite que añadiría. El equipo autor elige una sugerencia relacionada con el objetivo.

#### Fase 3 · Explicamos y registramos

Registrad qué sugerencia se ha elegido y qué regla, entrada o mensaje afectará. Predecid qué resultado debería cambiar y qué caso debería seguir funcionando.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una condición, mensaje, entrada o regla. Ejecutad de nuevo el caso que motivó el cambio y un caso que ya funcionaba.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** demostración, diagrama y limitación identificada. Si no es posible una muestra pública, haced la revisión en papel o entre equipos.

## 🧪 Evidencias, evaluación y producto final

Recoged reglas iniciales, capturas/dibujos de lectura de sensor sin datos personales, diagramas de flujo, tabla de verdad/casos, pseudocódigo, versiones de `if/elif/else`, fragmentos depurados, registro de puntuación, prueba de matriz/actuador, instrucciones de juego, observación anónima entre parejas y comparación antes/después. Producto: juego de feria de una estación, jugable tanto en modo manual como en modo robot, con regla, puntuación e instrucción accesibles.

Valorad cuatro dimensiones: **lógica condicional** (prevé y codifica las ramas); **integración y estado** (sensor o entrada, respuesta, puntuación y reinicio concuerdan); **pruebas y depuración** (prueba casos no estándar y corrige con evidencia); **diseño inclusivo/colaboración** (reglas transparentes, alternativas, roles y retroalimentación específica). Niveles: necesita modelado, lo resuelve con apoyo, trabaja autónomamente, lo transfiere y justifica. Valorad que el juego responda según la especificación, no la destreza, rapidez o puntuación de quien juega.

## ♿ Inclusión, privacidad y seguridad

Cada regla combina símbolo y palabra con color; hay modo manual y modo sin sonido, y los turnos no dependen de la velocidad de reacción. Permitid leer, explicar, programar, registrar o construir con un valor equivalente. No uséis contraseñas, caras, nombres ni datos personales. Mantened el juego y el mecanismo en la mesa, la garra limitada a fichas de cartón, la velocidad baja y los motores detenidos en cualquier ajuste. El sensor y la inclinación no son dispositivos de seguridad ni garantizan una detección. Ninguna pieza se acerca a los cuerpos; supervisión continua.

## 🔗 Referente oficial y decisiones de adaptación

Adapta la unidad 5 *Playing Games with Simple Conditions* del curso LEGO Education [*Introduction to Python Programming · Course 1*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt834b554cdaa246f7/6584064fd082f7672425e7ea/File_1_Units12345_Intro_to_Python_Course_TG_Course.pdf?locale=en-us): *Controlling Motion with Tilt*, *Claw Machine*, *Charting Game Decisions*, *Guess Which Color*, *Guessing Game*, *Score!*, *Game Time* e *Ideas to Help with Game Time*. Se conserva la práctica de sensor de movimiento, bucle de interacción, representación de decisiones, sensor de color con condiciones, `if/elif/else` y depuración, movimiento/matriz como respuesta de juego, proyecto integrado con secuencia de eventos y revisión por compañeros. El juego de feria, el tablero, las reglas y la evaluación son propios; la instrucción de hardware y los nombres de API deben validarse en la app disponible. Las duraciones oficiales indexadas indican juegos de 45 minutos, proyecto de 90 minutos y revisión de 30–45 minutos; la planificación aquí permite dividir el proyecto en más de una sesión.
