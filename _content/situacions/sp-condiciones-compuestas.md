---
active: true
title: "El reto de las tres pistas"
description: "Cinco lecciones SPIKE Prime sobre variables, condiciones compuestas, prototipos de juego, restricciones y profesiones de arquitectura y STEM."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas, Diseño y Orientación"
theme: "reptes"
theme_label: "Juegos lógicos y arquitectura escolar"
duration: "5 lecciones · 7–9 sesiones"
challenge: "¿Cómo podemos crear un juego de pistas que responda a una secuencia de condiciones sin confundir una simulación con una protección real?"
---

![Base móvil LEGO SPIKE Prime junto a un juego de pistas de mesa con estaciones de colores, tarjetas y una caja de papel abierta.](../../_assets/situacions/sp-condicions-compostes.webp)

_Las condiciones compuestas coordinan varias reglas; una maqueta permite probarlas sin bloquear ni proteger nada real._

## 🌱 Reto y contexto

La clase diseña una actividad de descubrimiento para una muestra de tecnología. Los visitantes, siempre libres de continuar o detenerse, resuelven una secuencia de pistas sobre una mesa; el programa muestra si cada respuesta cumple las reglas y actualiza una puntuación compartida. Las variables conservan el resultado de una partida, los operadores combinan requisitos, y el SPIKE Prime da respuestas de luz, sonido o movimiento corto. En las sesiones centrales, la clase investiga cómo una condición compuesta puede simular una contraseña y compara usabilidad, número de combinaciones y accesibilidad. Esta situación adapta las cinco lecciones de la unidad 8 *Compound Conditionals* de LEGO Education *Foundations of Physical Computing*. «Abrir una caja» y «salir de una sala» se interpretan como metáforas de juego en una maqueta: el alumnado nunca queda encerrado, ningún objeto valioso depende del prototipo y no se introducen datos ni credenciales reales.

## 🎯 Objetivos de aprendizaje

- Diseñar una actividad de dos participantes con turnos y puntuación mantenida por variables, y comunicar unas reglas lo bastante claras para que otro grupo pueda jugar sin explicación oral adicional.

- Expresar una condición simple y compuesta con lenguaje cotidiano, diagrama, pseudocódigo y bloques; distinguir qué implican `y`, `o` y `no`.

- Programar una secuencia de comprobaciones en el orden acordado, incluyendo casos correctos, incorrectos, incompletos, reinicio y límites de repetición.

- Construir un modelo seguro que combine entradas reales del kit —botones del hub, color o distancia según la disponibilidad— con una respuesta comprensible, sin afirmar que es un sistema de autenticación fiable.

- Planificar un reto tipo breakout que se resuelva desde fuera o alrededor de una mesa abierta, identificar restricciones e iterar el juego a partir de pruebas de otros equipos.

- Relacionar los contenidos con tareas de arquitectura, construcción, ingeniería, ciencia y matemáticas, incluyendo formación, habilidades y colaboración entre perfiles.

## 🧠 Contenidos y lenguaje

**Variable de puntuación:** valor con nombre que se inicializa antes de la partida y se actualiza según una regla publicada. **Condición simple:** una expresión que es verdadera o falsa. **Condición compuesta:** dos o más condiciones relacionadas con un operador lógico. Por ejemplo, «el color es azul *y* el botón se ha pulsado» exige ambas cosas; «el color es amarillo *o* verde» permite cualquiera de los casos, y en esta unidad el OR es inclusivo. **Secuencia:** orden de comprobaciones que forma parte de la regla. **Restricción:** requisito que limita diseño y comportamiento, como poder reiniciar o no usar contraseñas personales.

La seguridad digital real depende de muchos factores que no se modelan en el kit. Una secuencia de colores vista o registrada no es un secreto seguro; el objetivo matemático es comprender las reglas y los compromisos entre facilidad de uso y complejidad, no enseñar a proteger cuentas mediante un robot escolar.

## 🧰 Preparación y materiales

Por equipo: set SPIKE Prime 45678, dispositivo con la app SPIKE y hub cargado; base móvil o modelo sencillo con sensor de color y sensor de distancia si están disponibles; tarjetas gruesas de respuesta; cartulina, cinta de papel, piezas para una caja de maqueta que no cierre ni pueda bloquearse, hojas de reglas y diario de ingeniería. Preparad una pista de mesa con códigos ficticios y un sistema de puntuación que no premie la rapidez física ni penalice errores de acceso. Verificad antes qué lecturas y botones admite la versión de app del centro. Si faltan sensores o las lecturas varían, usad tarjetas/observador como entrada simulada y señaladlo explícitamente. Ninguna luz o sonido debe parecer una alarma de emergencia.

Haced un análisis previo de riesgos con el alumnado: la maqueta queda abierta, la partida no tiene límite que obligue a correr y todo el mundo puede salir de la actividad en cualquier momento. En lugar de un cuestionario personal, recoged comentarios anónimos sobre legibilidad y opciones de pista. Roles rotativos: responsable de reglas, programación, montaje/seguridad y observación de usabilidad.

## 📅 Secuencia didáctica · cinco lecciones

### **Lección 1 · Juego con variables: puntos que se pueden explicar (60–90 min).**

#### Fase 1 · Activamos y predecimos

Comparad juegos de mesa, cartas, deportes y videojuegos. Cada persona puede hablar de un juego conocido o analizar uno neutro preparado por la docente. Predecid cómo se sabe que se ha ganado y cómo se registra la puntuación.

#### Fase 2 · Exploramos y construimos

Inventad un juego de mesa para dos personas con una ficha que recorre una pista y tarjetas de situación. Definid cómo se ganan o pierden puntos, cuántos turnos hay y cuándo acaba. Escribid las reglas en pasos numerados y haced una ronda manual.

#### Fase 3 · Explicamos y registramos

Cread las variables `punts_jugador_a` y `punts_jugador_b`, inicializadlas a cero al inicio de cada partida, cambiad de turno explícitamente y añadid una respuesta de luz o sonido cuando cambia la puntuación. Registrad al menos cuatro turnos en una tabla de traza.

#### Fase 4 · Aplicamos y mejoramos

Un segundo equipo juega solo con las reglas escritas y anota cada desacuerdo. Comparad la puntuación en papel y en el programa después de cada ronda y revisad una regla a partir del retorno.

#### Fase 5 · Comprobamos y reflexionamos

Explicad cómo sumar, cambiar de turno y empezar de nuevo. **Evidencia:** reglas finales, tabla de cuatro turnos, esquema del programa y nota sobre inicialización de variables.

### **Lección 2 · Dos comprobaciones para una acción (90 min).**

#### Fase 1 · Activamos y predecimos

Cada pareja crea un código ficticio de tres cifras y trata de adivinar los números elegidos por la otra. No anotéis contraseñas habituales, PIN personales ni datos privados. Calculad cuántas combinaciones hay para uno, dos y tres dígitos si cada posición vale 0–9; hablad del equilibrio entre opciones y facilidad de recuerdo.

#### Fase 2 · Exploramos y construimos

En una hoja de decisiones, asignad una regla a una caja de papel abierta: la pieza de juego recibe una señal solo cuando la tarjeta de color es la correcta **y** se ha pulsado el botón de inicio. Completad las cuatro filas de la tabla de verdad: color correcto/incorrecto × botón pulsado/no pulsado.

#### Fase 3 · Explicamos y registramos

Usad una entrada de color y un botón del hub o dos entradas simuladas. Haced que el programa responda de manera diferente a aceptación y rechazo y que permita empezar de nuevo. Guardad tabla de verdad, pseudocódigo y registro de pruebas.

#### Fase 4 · Aplicamos y mejoramos

Probad deliberadamente los cuatro casos, leed cada fila antes de ejecutar y comparad resultado esperado y real. Añadid el caso de una lectura que el sensor no reconoce y decidid si se repite, se pide ayuda o se cancela.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué significa «más seguro» en este modelo y qué no puede demostrar una maqueta. **Evidencia:** tabla de verdad, pseudocódigo, registro de errores y límite de uso explícito.

### **Lección 3 · Componer reglas y pensar en más de un factor (90 min).**

#### Fase 1 · Activamos y predecimos

Hablad de por qué alguien querría proteger información o materiales y quién podría quedar excluido por una regla mal diseñada. Con tarjetas ficticias, comparad una comprobación con dos de tipo diferente, como tarjeta de color y acción deliberada del botón.

#### Fase 2 · Exploramos y construimos

Representad las reglas como puertas lógicas. Diseñad un prototipo de mesa que autoriza el avance de una ficha solo si coinciden dos señales; puede dar un punto de luz o mover una barrera de cartón muy ligera que no cierre nada. Antes de construir, redactad requisitos, diagrama de flujo y condiciones.

#### Fase 3 · Explicamos y registramos

Definid casos de prueba: correcto, entrada tardía, incorrecta, repetida o ausente. Combinad operadores booleanos en el programa y etiquetad cada comentario con el requisito correspondiente; incluid una respuesta de recuperación, no un bloqueo permanente.

#### Fase 4 · Aplicamos y mejoramos

Otro equipo prueba el prototipo con una guía accesible y comenta si entiende qué debe hacer y cómo rectificar. Revisad el diseño: demasiados factores pueden dificultar el uso legítimo, y más combinaciones por sí solas no hacen un sistema seguro. Documentad qué respaldan las pruebas y qué comprobaciones profesionales faltarían.

#### Fase 5 · Comprobamos y reflexionamos

Explicad los compromisos entre usabilidad, número de combinaciones y accesibilidad, sin presentar el dispositivo como autenticación fiable. **Evidencia:** requisitos, diagrama, código comentado, matriz de pruebas y revisión de usabilidad.

### **Lección 4 · Mini-reto: breakout de pistas abiertas (90–135 min).**

#### Fase 1 · Activamos y predecimos

Presentad el reto como un juego de mesa abierto: nadie entra en una sala cerrada y ninguna salida física depende del programa. Elegid un problema ficticio, como ordenar piezas de una exposición antes de abrir una caja de cartón. Recoged comentarios anónimos sobre formatos de pista agradables —visual, táctil, texto o sonido opcional— y alternativas para quien no distingue colores o prefiere no usar sonido.

#### Fase 2 · Exploramos y construimos

Definid tres restricciones medibles: una acción segura, dos condiciones que se deben cumplir y un orden de pistas; añadid reinicio y pista de ayuda. Escribid pseudocódigo y esquema de conexiones. Cread una matriz con camino correcto, un error por cada condición, orden erróneo, entrada no detectada y reinicio.

#### Fase 3 · Explicamos y registramos

Construid un mecanismo de indicación con piezas de baja energía o solo luces/sonidos del hub y programad la secuencia con variables de progreso. Probad cada subcomponente aislado antes del código completo y registrad cada resultado.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una cosa por iteración y volved a ejecutar toda la matriz. Intercambiad el juego con al menos tres equipos si el tiempo lo permite; si no, haced una prueba cruzada y completad el resto con casos en papel. Los participantes pueden detenerse sin perder puntuación ni justificarse. Revisad instrucciones, dificultad, tiempo sin cuenta atrás que presione y accesibilidad.

#### Fase 5 · Comprobamos y reflexionamos

Entregad la versión revisada y anotad qué ha cambiado a partir de pruebas reales. **Evidencia:** juego, matriz de pruebas completa, retorno de usabilidad y registro de iteraciones.

### **Lección 5 · Arquitectura, construcción y STEM (60–90 min).**

#### Fase 1 · Activamos y predecimos

Repasad los juegos y localizad conocimientos de arquitectura y construcción, ingeniería, ciencias y matemáticas: medida, estructura, fuerzas, programación, datos, planificación y trabajo en equipo. Predecid qué perfiles profesionales podrían colaborar en un proyecto.

#### Fase 2 · Exploramos y construimos

Clasificad tarjetas de profesiones: arquitecta, electricista, fontanero/a, carpintero/a, ingeniera biomédica, técnica de mantenimiento, estadístico/a, química/ingeniero químico y personal de construcción. Evitad asociar oficios a un género o a un nivel de estudios único. Consultad fuentes públicas actuales elegidas por la docente y describid tareas, entornos, habilidades, formación y colaboraciones.

#### Fase 3 · Explicamos y registramos

Elegid dos perfiles complementarios y haced una ficha que relacione sus tareas con una evidencia o fuente por afirmación. Construid con piezas una estructura o muestra interactiva, definid un requisito y añadid una regla booleana solo si aporta valor.

#### Fase 4 · Aplicamos y mejoramos

Revisad la ficha para que las fuentes sostengan las afirmaciones y el prototipo responda al requisito. No hace falta automatizar la construcción para hablar de tecnología.

#### Fase 5 · Comprobamos y reflexionamos

Haced una presentación de un minuto con el problema, dos roles profesionales, la decisión lógica y lo que una maqueta no puede certificar. La reflexión individual sobre intereses es privada y voluntaria; se puede responder sobre una profesión investigada. **Evidencia:** ficha profesional con fuentes, prototipo y presentación.

## 🧪 Evidencias y evaluación

Portafolio de equipo: reglas del juego y nombre elegido, tabla de puntuaciones a mano/código, tablas de verdad, pseudocódigo y diagrama, código comentado, matriz de pruebas con resultado esperado y real, fotografías solo de modelos (nunca de alumnado sin autorización), registro de iteraciones, retroalimentación anonimizada de usabilidad y ficha profesional con fuentes. Evaluad cuatro dimensiones con descriptores: (1) condiciones formalizadas sin ambigüedad; (2) variable inicializada y actualizada en el turno correcto; (3) pruebas que cubren éxito, error, entrada ausente y reinicio; (4) explicación de limitaciones y accesibilidad. En autoevaluación privada, puntuad del 1 al 3 el cuidado de materiales, la gestión del tiempo y la contribución; añadid un ejemplo concreto de colaboración y una decisión cambiada por los datos. La partida no determina la nota ni se hace clasificación entre personas.

## ♿ Inclusión, privacidad y seguridad

Las pistas tienen alternativa no cromática (palabra, forma o relieve), las instrucciones se ofrecen en texto breve y esquema, y los efectos sonoros son opcionales con equivalente visual. Evitad códigos personales, recogida de credenciales, datos de identidad y encuestas sobre intereses que obliguen a revelar preferencias. Los juegos se sitúan sobre una superficie, no bloquean pasillos y no implican puertas, cerraduras, rutas de evacuación ni espacios reales. Poned a prueba el límite entre una regla pedagógica y una afirmación de seguridad: el SPIKE de la actividad no autentica usuarios ni detecta intrusiones. Detened los motores al hacer cambios y mantened las piezas pequeñas organizadas.

## 🔗 Referente oficial y adaptación

Adapta las cinco lecciones de la unidad 8 *Compound Conditionals* de LEGO Education [*Foundations of Physical Computing*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt1b4345f429fde833/64d3828c455bf62b71f9b840/Foundation_of_Physical_Computing_Course_SPIKE_3_2022.pdf?locale=en-gb): *Game with Variables*, *Compound Conditionals*, *Compounding Conditionals*, *Mini-Challenge: Break Out Room* y *Connecting to Careers: Architecture & Construction and Science, Technology, Engineering & Mathematics*. Mantiene el juego de dos participantes con marcador, la exploración de códigos y combinaciones, el diseño de un dispositivo que interpreta más de un factor, el reto de secuencia tipo breakout, la prueba entre equipos y la búsqueda de profesiones; cambia los modelos, códigos, contexto y reglas por una muestra escolar segura, abierta y accesible.
