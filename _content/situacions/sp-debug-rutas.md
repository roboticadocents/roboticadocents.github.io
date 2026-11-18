---
active: true
title: "Depurar para llegar"
description: "Seis lecciones de depuración con SPIKE Prime: diagnosticar hardware, corregir código y programar una ruta autónoma probada."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Pensamiento Computacional"
theme: "depuracio"
theme_label: "Depuración y movilidad"
duration: "6 lecciones · 7–10 sesiones"
challenge: "¿Cómo distinguimos un error de montaje de un error de programa y cómo demostramos que una ruta autónoma funciona de manera fiable?"
---

![Base móvil SPIKE Prime con sensor de color delante de una ruta de cuadrícula diseñada con papel y una barrera baja.](../../_assets/situacions/sp-debug-rutes.webp)

_Una buena depuración reduce el problema, prueba hipótesis y documenta los cambios._

## 🌱 Reto e intención

El servicio ficticio de préstamo de la biblioteca necesita trasladar una caja ligera entre dos zonas sin salir de un recorrido marcado. Antes de confiar en él, la clase aprende a aislar errores físicos, detectar problemas del programa y probar rutas por partes. La secuencia adapta las seis lecciones de la unidad 3 *Troubleshooting and Debugging* de LEGO Education *Foundations of Physical Computing*. Los modelos y códigos concretos de la app se consultan en el recurso oficial; aquí se crean recorridos, casos de prueba y registros propios. No se transportan libros reales ni se utiliza el robot con personas en movimiento.

## 🎯 Aprendizajes y vocabulario

- Diferenciar una avería de montaje de un error en la secuencia de programa.
- Formular una hipótesis de fallo y cambiar una sola variable en cada prueba.
- Construir y depurar una ruta con sensores, casos límite y registro de resultados repetidos.
- Justificar que un cambio resuelve el problema sin ocultar los casos que todavía fallan.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Depuración del modelo: el plóter de la mediateca ([Broken](https://education.lego.com/en-us/lessons/prime-invention-squad/broken/), 90–135 min).**

#### Fase 1 · Activamos y predecimos

**Engage desconectado:** cada equipo recibe un lápiz sin punta, tijeras y una ficha con cuatro óvalos pálidos que hay que trazar y recortar. Antes de empezar, preguntad qué falla, qué parte del sistema está implicada y qué hay que preparar; al sacar punta al lápiz, hablad de hardware preparado para hacer la tarea. Juntad las formas y comparad su regularidad. Conectad la idea con máquinas CNC que repiten movimientos con precisión.

#### Fase 2 · Exploramos y construimos

**Explore con SPIKE:** usad el plóter X–Y del catálogo SPIKE o una versión esquemática en papel. Ejecutad el programa base sin tocarlo, describid qué esperabais y qué ha ocurrido, e identificad las partes que sí funcionan. Clave docente del modelo de referencia: falta la rueda de alimentación del eje Y, el bastidor superior no está fijado, los engranajes de alimentación están invertidos (el papel avanza demasiado deprisa) y el carro que sujeta el lápiz está suelto. Presentad solo los síntomas; el equipo decide qué defecto comprobar primero y prueba cada reparación por separado. Si se construye un plóter propio, preparad cuatro averías equivalentes sin añadir carga al motor ni forzar engranajes.

#### Fase 3 · Explicamos y registramos

**Rutina de diagnóstico:** «¿qué veo? / ¿qué debía pasar? / ¿qué pieza o conexión podría explicarlo? / ¿qué prueba aislada lo confirmaría?». Cambiad una sola variable, repetid la prueba y anotad resultado y próximo paso; no reprogramemos un modelo que todavía tiene una avería mecánica.

#### Fase 4 · Aplicamos y mejoramos

**Explain y cierre:** distinguid síntoma, causa y solución; dibujad el sistema por módulos (estructura, alimentación del papel, ejes, lápiz, cableado y código), marcad el fallo y explicad cómo interactúan hardware y programa.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias y apoyo:** hoja de óvalos, mapa de averías, tabla hipótesis-prueba-resultado, reparación y reflexión sobre la ayuda pedida a otros equipos, tiempo y piezas. Para empezar, el docente facilita dos posibles módulos; ampliación: redactar instrucciones que permitan a otro equipo reproducir el diagnóstico sin darle la respuesta. Conservad el modelo para S2. Duración ajustable: 90 min si se trabaja un montaje preparado; hasta 135 min si hay que montarlo y verificarlo.

### **Lección 2 · Depuración del software: encontrar el tramo que falla ([Track Your Packages](https://education.lego.com/en-us/lessons/prime-kickstart-a-business/track-your-packages/), 90 min).**

#### Fase 1 · Activamos y predecimos

**Engage · 5 min:** en una cuadrícula, encontrad durante 3–5 minutos caminos diferentes de A a B en diagonal, avanzando solo una casilla arriba/abajo/izquierda/derecha y evitando las casillas ocupadas; escribid pseudocódigo para una ruta.

#### Fase 2 · Exploramos y construimos

**Explore · 20 min:** reutilizad el plóter X–Y de S1 o montad su base de trazado; cambiad solo la ficha indicadora para representar otro mapa de biblioteca. Ejecutad el programa inicial y observad que el modelo parece correcto pero el recorrido falla: sospechad primero del software y comparad el trazado con la ruta esperada.

#### Fase 3 · Explicamos y registramos

**Explain · 20 min:** leed el pseudocódigo en pareja y aplicad un protocolo común: 1) describir el síntoma; 2) decir qué se esperaba; 3) comprobar fijaciones y cableado; 4) repetir la prueba; 5) verificar puertos; 6) revisar el último cambio; 7) dividir el programa en bloques pequeños; 8) explicar el código a la pareja; 9) cambiar una sola cosa; 10) volver a probar y documentar la solución. Si el hardware está correcto, continuad la inspección del código; no cambiéis varias distancias a la vez.

#### Fase 4 · Aplicamos y mejoramos

**Elaborate · 35 min:** diseñad un nuevo recorrido de un paquete ficticio en una cuadrícula, añadid una diagonal o un obstáculo, escribid el plan, programadlo tramo a tramo y comparad cada sección con el pseudocódigo. Volved al último tramo fiable cuando aparezca una desviación.

#### Fase 5 · Comprobamos y reflexionamos

**Evaluate · 10 min:** otro equipo sigue el código y el protocolo sin que le expliquéis la respuesta. **Evidencia:** ruta dibujada, pseudocódigo, programa comentado, registro «síntoma/expectativa/prueba/cambio/resultado» y consejo de depuración. Adaptación: ofreced una ruta ortogonal más corta; ampliación: calibrar los movimientos diagonales con dos medidas y explicar su error.

### **Lección 3 · Desmontar los pasos del error ( *Dancer Break Down*, 45 min).**

#### Fase 1 · Activamos y predecimos

**Engage · 5 min:** mirad un modelo bailarín SPIKE en funcionamiento y preved qué puede fallar en la construcción y qué puede fallar en el programa.

#### Fase 2 · Exploramos y construimos

**Explore · 20 min:** construid el bailarín de la colección SPIKE o usad el modelo preparado. Antes de programar, moved los ejes a mano dentro del rango seguro y confirmad qué partes (piernas/brazos) pueden moverse sin atascarse. Leed la pila de bloques inicial, redactad su pseudocódigo y ejecutadla; el programa pide un motor en el puerto B mientras el motor de las piernas está conectado al puerto F, por eso uno de los motores no responde. Comprobad el puerto y decidid qué corrección preserva mejor el diseño validado; normalmente corregís la dirección del programa, no desmontáis un mecanismo bien construido.

#### Fase 3 · Explicamos y registramos

**Explain · 8 min:** contrastad hipótesis con observación y explicad por qué la prueba manual del modelo precedía a la prueba del código.

#### Fase 4 · Aplicamos y mejoramos

**Elaborate · 7 min:** depurad dos casos breves: sincronizar diez movimientos de piernas con una señal de luz revisando los tiempos; y sustituir un bloque de inicio «cuando se pulsa el sensor de fuerza» por inicio de programa cuando no hay sensor conectado.

#### Fase 5 · Comprobamos y reflexionamos

**Evaluate · 5 min:** clasificad cada caso como modelo, programa o interfaz entre los dos y escribid qué probabais antes de corregir. Evidencia: pseudocódigo extraído de los bloques, puerto real/programado, defecto, cambio y resultado. Si el modelo no está disponible, simulad las conexiones con un mapa de puertos, pero validad después la compatibilidad con el kit del centro.

### **Lección 4 · Bailar con colores ( *Dance to the Color*, 45 min).**

#### Fase 1 · Activamos y predecimos

**Preparación:** mantened el modelo de bailarín de S3, conectad el sensor de color y el hub cargado, y probad qué colores detecta de manera estable con la luz del aula y la distancia de lectura de vuestro montaje. **Engage · 5 min:** compartid una experiencia en la que un plan no haya funcionado y convertidla en una estrategia: pseudocódigo, comentarios por bloques, pruebas cortas, entradas esperadas e inesperadas, cambio aislado.

#### Fase 2 · Exploramos y construimos

**Explore · 20 min:** partid del programa funcional que mueve las piernas; añadid la condición «cuando se detecta rojo, mueve las piernas» y comparad pseudocódigo con la pila. Después añadid brazos a esa misma entrada. Comentad cada sección y registrad dónde aparece cualquier error. Si no responde, distinguid lectura incierta del color (sensor/luz/distancia) de una rama u orden mal programadas.

#### Fase 3 · Explicamos y registramos

**Explain · 8 min:** cada pareja describe un error, si pertenece al montaje, al programa o a la interacción, y cómo lo ha sabido.

#### Fase 4 · Aplicamos y mejoramos

**Elaborate · 7 min:** ampliad la coreografía: un color probado activa movimiento rápido y otro movimiento lento cuando arranca el programa. No seleccionéis una lectura inestable solo porque el color parezca correcto a ojo; registrad los valores observados.

#### Fase 5 · Comprobamos y reflexionamos

**Evaluate · 5 min:** autoevaluación sobre diagnóstico, comentarios y uso responsable de la prueba; compartid la coreografía solo si el grupo quiere, con alternativa silenciosa/visual. Evidencia: pseudocódigo inicial y final, comentarios, tabla de colores/distancia/resultado y registro de depuración. La muestra es opcional y no se registra a ningún alumno.

### **Lección 5 · Diseñar una ruta nueva (*Mini-Challenge: New Routes*, 90 min).**

#### Fase 1 · Activamos y predecimos

**Engage · 10 min:** en una cuadrícula local inventada (centro cívico, biblioteca o circuito de la Albufera), marcad origen, destino y casillas prohibidas; buscad en 1–2 minutos varios caminos en pasos ortogonales y comparad su pseudocódigo.

#### Fase 2 · Exploramos y construimos

**Explore · 20 min:** cada pareja modifica una ruta propia a lápiz, la revisa y la pasa a rotulador cuando el recorrido es ejecutable. Usad el trazador X–Y de S2 para marcar un paquete/destino o una base móvil SPIKE compatible con los puertos disponibles; si el sensor de línea no lee la superficie de forma consistente, programad tramos temporizados y declarad su precisión limitada.

#### Fase 3 · Explicamos y registramos

**Explain · 15 min:** intercambiad pseudocódigos y revisad si indican giro, distancia, orden y parada con suficiente detalle. Acordad un protocolo de depuración: expresar problema y resultado esperado; verificar modelo/conexiones y puertos; repetir; revisar el último código añadido; descomponer la secuencia; explicarla a la pareja; modificar una sola parte y documentar el consejo aprendido.

#### Fase 4 · Aplicamos y mejoramos

**Elaborate · 35 min:** programad la ruta entera pero probad por tramos; comparad código con el plan, registrad los fragmentos que funcionan y los que no, reparad el primer punto de divergencia y repetid. Añadid después una casilla bloqueada o un giro nuevo como prueba límite. Cambiad precisión y número de maniobras antes de optimizar la velocidad.

#### Fase 5 · Comprobamos y reflexionamos

**Evaluate · 10 min:** otro equipo ejecuta la ruta solo con el diagrama y el protocolo escrito. **Evidencia:** mapa antes/después, pseudocódigo, proyecto comentado, al menos dos iteraciones y tabla de tiempo/desviación. Valoración docente: el sistema físico y el código coinciden con la predicción; autoevaluación sobre ayuda recibida, iteración y gestión de piezas. Andamiaje: ruta corta sin obstáculos; ampliación: dos rutas equivalentes, una con menos giros y otra que evita una zona sensible.

### **Lección 6 · Profesiones digitales, justicia y seguridad (90 min).**

#### Fase 1 · Activamos y predecimos

**Preparación:** reunid imágenes o fichas propias de ocupaciones y fuentes valencianas fiables sobre formación y tareas; equipos de cuatro con roles rotativos y registro de fuente/fecha. **Engage · 10 min:** relacionad la unidad con tecnologías de la información y comunicación, servicios jurídicos y seguridad pública/protección civil. Preguntad quién mantiene un servicio digital, quién responde a una incidencia y cómo se protegen derechos y datos. Clasificad imágenes de trabajos en los dos ámbitos y explicad por qué; distinguid un trabajo de una familia profesional.

#### Fase 2 · Exploramos y construimos

**Explore · 35 min:** conectad las lecciones de depuración con funciones como soporte TIC, pruebas de software, ciberseguridad, accesibilidad digital, gestión de incidencias, asesoramiento jurídico, emergencias y protección de la comunidad. Cada grupo investiga trabajos concretos, tareas, entornos, habilidades y estudios/acreditaciones requeridos con fuentes locales fechadas; un dato salarial o una previsión solo se incluye si hay fuente adecuada y no se presenta como una promesa individual. Haced una lluvia de trabajos y una cuadrícula «tarea / habilidad / formación / fuente».

#### Fase 3 · Explicamos y registramos

**Modelo y presentación · 20 min:** representad uno de los dos ámbitos con piezas SPIKE o un mapa visual del ciclo de incidencia: detectar → describir sin culpar → verificar → proteger información → escalar a la persona responsable. Presentad el modelo en un minuto y explicad cómo cooperan dos profesiones; evitad equiparar la depuración de clase con un ciberataque real.

#### Fase 4 · Aplicamos y mejoramos

**Elaborate · 15 min:** cread una red de palabras de cinco minutos sobre una familia profesional e intercambiadla con otro equipo; ampliadla con ocupaciones nuevas y describid las habilidades compartidas.

#### Fase 5 · Comprobamos y reflexionamos

**Evaluate · 10 min:** reflexión individual privada sobre habilidades/intereses, más observación docente del uso de fuentes, clasificación argumentada y conexión con las lecciones; expresar preferencias es voluntario. Evidencias: fuentes fechadas, mapa/modelo, presentación, red y una norma de equipo para registrar incidentes sin datos personales ni culpar a nadie. La lección cubre estas dos vías dentro de un curso que trata múltiples familias profesionales, no todas en una sesión.

## 🧰 Materiales y preparación

Un set SPIKE Prime 45678 y dispositivo con la app por pareja; modelos oficiales Broken, Track Your Packages y Break Dancer disponibles dentro de la app cuando se usan; papel cuadriculado, rotuladores, regla, hojas de depuración y materiales para una ruta de mesa. El docente prepara los errores de montaje sin dañar ningún motor, sensor ni cable; si no es seguro alterar el kit, emplea fotografías o esquemas. Verificad que el sensor de color lee la superficie elegida y que el modelo puede hacer la ruta antes de la sesión. Ningún obstáculo debe poner en riesgo a personas ni a piezas.

## 🧪 Evidencias y criterios

Diagrama de diagnóstico, pseudocódigo, programa anotado, cuadrícula de casos de prueba, datos del sensor, diario de errores y reparaciones, ruta iterada y presentación profesional. Valorad que el equipo diferencie hardware y software, descomponga el problema, pruebe metódicamente, use casos esperados e inesperados, vuelva a una versión funcional y explique por qué el cambio resuelve el síntoma. Autoevaluación con colaboración, gestión del tiempo y cuidado de piezas, más retorno entre equipos centrado en la evidencia.

## ♿ Seguridad y participación

Dad alternativas en papel para las pruebas de trayecto, rutas accesibles desde la posición sentada y roles de pilotaje, observación, registro y revisión. Mantened el robot dentro de una superficie delimitada, con una carga ligera y sin acercarlo a peatones, escaleras o bordes. No uséis contraseñas ni datos reales en la actividad de seguridad; el tema profesional es una conversación sobre prácticas responsables, no una intrusión en sistemas.

## 🔗 Referente oficial y adaptación

Adapta las seis lecciones de la unidad 3 *Troubleshooting and Debugging* del plan oficial [*Foundations of Physical Computing*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt1b4345f429fde833/64d3828c455bf62b71f9b840/Foundation_of_Physical_Computing_Course_SPIKE_3_2022.pdf?locale=en-gb): *Model Debugging*, *Software Debugging*, *Dancer Break Down*, *Dance to the Color*, *Mini-Challenge: New Routes* y *Connecting to Careers: Information Technology and Law, Public Safety, Corrections & Security*. Conserva el diagnóstico de hardware y software, los modelos CNC y bailarín de la app, pseudocódigo, comentarios, condiciones de color, recorridos autónomos, iteración e investigación profesional; la temática, la ruta, las hojas de registro y la ilustración son propios. Los modelos y las hojas oficiales se consultan en LEGO Education, no se reproducen aquí.
