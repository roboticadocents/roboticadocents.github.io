---
active: true
title: "Sensores al servicio de la biblioteca"
description: "Ocho lecciones SPIKE Prime sobre sensores, condiciones, precisión, laberintos, clasificación de paquetes, aparcamiento cooperativo y logística."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Ciencias Sociales"
theme: "logistica"
theme_label: "Sensores y logística escolar"
duration: "8 lecciones · 10–14 sesiones"
challenge: "¿Cómo puede un robot detectar condiciones, actuar con seguridad y coordinarse con otros equipos sin confundir la simulación con un servicio real?"
---

![Base móvil real SPIKE Prime con sensor de color orientado hacia una ruta de papel que pasa por paquetes de maqueta.](../../_assets/situacions/sp-sensors-logistica.webp)

_Los sensores proporcionan entradas concretas; las reglas y decisiones del programa las define el equipo._

## 🌱 Reto e intención

La biblioteca escolar organiza una circulación simulada de cajas ligeras entre estanterías, puntos de recepción y plazas de carga. En ocho lecciones, el alumnado combina sensores, motores y condiciones; registra cómo la potencia afecta a una parada; depura un movimiento rítmico activado por color; diseña un laberinto; clasifica paquetes de papel; y coordina bases móviles en una maqueta de aparcamiento con y sin sensor. La secuencia adapta la unidad 5 *Sensors* del curso LEGO Education *Foundations of Physical Computing*. La biblioteca es un escenario didáctico: no se desplazan libros reales ni se hace ninguna afirmación de que este prototipo sea seguro o apto para un servicio autónomo.

## 🎯 Aprendizajes y vocabulario

- Relacionar una lectura de sensor con una regla y una respuesta segura del robot.
- Calibrar sensores con casos conocidos y comparar datos antes de clasificar o seguir una ruta.
- Integrar movimiento, detección y coordinación entre equipos en una maqueta de logística escolar.
- Probar casos adversos y explicar las condiciones en las que el sistema se detiene o pide revisión humana.

## 📅 Secuencia didáctica · ocho lecciones

### **Lección 1 · Los sensores activan respuestas (90 min).**

#### Fase 1 · Activamos y predecimos

Predecid cuándo debe detenerse una base: al acercarse a una pared más que el umbral acordado o al detectar una tarjeta de color determinada.

#### Fase 2 · Exploramos y construimos

Escribid pseudocódigo y programad una condición con sensor de distancia o de color y un motor. Añadid comentarios que expliquen la regla y la parada.

#### Fase 3 · Explicamos y registramos

Probad una entrada esperada y una inesperada y anotad predicción, lectura y respuesta observada.

#### Fase 4 · Aplicamos y mejoramos

Revisad el umbral o la regla si la respuesta no coincide con la predicción. Si el sensor o la app no permiten el ejemplo, usad una tarjeta manual e identificadla como simulación.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** pseudocódigo, código comentado y registro de los dos casos. Probad la parada a baja velocidad con un obstáculo blando de mesa; nunca coloquéis personas en el recorrido.

### **Lección 2 · Sensores y datos (90 min).**

#### Fase 1 · Activamos y predecimos

Predecid a qué distancia se detendrá la base cuando se acerque a un muro de cartón y cómo puede cambiar el resultado con la potencia del motor.

#### Fase 2 · Exploramos y construimos

Escribid pseudocódigo y programad la aproximación hasta que el sensor de distancia indique la separación objetivo.

#### Fase 3 · Explicamos y registramos

Probad varios niveles de potencia manteniendo constantes inicio, distancia objetivo, orientación y superficie; haced al menos tres intentos por nivel. Anotad distancia final, error y tiempo.

#### Fase 4 · Aplicamos y mejoramos

Calculad medias, representadlas en una gráfica y revisad el control si la base sobrepasa el punto antes de frenar.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** pseudocódigo, gráfica y explicación de la variación. El sensor usa retorno acústico y la lectura depende de la superficie, el ángulo y la respuesta del programa.

### **Lección 3 · Baile y depuración por color (45 min).**

#### Fase 1 · Activamos y predecimos

Planificad una rutina rítmica con señal visual y predecid cómo responderá el robot a un color o secuencia de tarjetas.

#### Fase 2 · Exploramos y construimos

Escribid pseudocódigo, divididlo en partes y añadid comentarios. Probad primero un color, después un segundo estado de movimiento y finalmente la secuencia completa.

#### Fase 3 · Explicamos y registramos

Revisad instrucciones y conexiones, probad un tramo y añadid funcionalidad gradualmente. Anotad el fallo, la predicción y la respuesta observada.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una sola cosa y volved a probar entradas esperadas e inesperadas. Comprobad si el ritmo sigue siendo coherente.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** código comentado y registro de depuración. La exhibición es opcional; también se puede comunicar con un esquema de luces y flechas.

### **Lección 4 · El laberinto de la mediateca (90–135 min).**

#### Fase 1 · Activamos y predecimos

En grupos, diseñad una ruta de papel con un máximo de tres giros. Predecid qué puntos dependerán del sensor de color y qué punto activará el de distancia.

#### Fase 2 · Exploramos y construimos

Añadid una línea que el sensor pueda seguir o detectar y una pared de cartón. Una base Driving Base con el sensor de color hacia abajo ejecuta el pseudocódigo comentado.

#### Fase 3 · Explicamos y registramos

Otro equipo prueba el recorrido. Añadid un tramo cada vez y medid aciertos, paradas y desviaciones; comparad la reacción ante la pared con potencia baja y alta.

#### Fase 4 · Aplicamos y mejoramos

Ajustad la pista si la marca no se lee de forma consistente. Explicad qué parte del diseño era ambigua o demasiado exigente y cambiadla antes de repetir.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa, pseudocódigo y registros de prueba. No uséis obstáculos duros ni conduzcáis fuera de la alfombra.

### **Lección 5 · Fábrica de cajas (90–135 min).**

#### Fase 1 · Activamos y predecimos

Dibujad la fábrica con origen, preparación de paquete, destinos y turnos de retorno. Comparad maneras de identificar, mover y separar cajas; predecid qué debe hacer el robot con un código desconocido.

#### Fase 2 · Exploramos y construimos

Construid una base SPIKE con sensor de color y empujador bajo o bandeja simple de piezas y cartón. El sensor lee una ficha de código junto al paquete en el origen; las condiciones eligen itinerario y el mecanismo traslada una caja ligera.

#### Fase 3 · Explicamos y registramos

Escribid pseudocódigo para lectura, clasificación, transporte y retorno y comentad el código. Añadid señal de preparación y lectura. Haced una prueba inicial de empuje a baja velocidad en una zona delimitada.

#### Fase 4 · Aplicamos y mejoramos

Probad tres códigos válidos, uno desconocido y dos ciclos completos. El robot debe detenerse y avisar ante un código desconocido; revisad también el punto en el que el paquete sale de la bandeja.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** clasificaciones correctas, entregas, retornos y errores registrados. La maqueta no presupone cinta transportadora, pinza especial ni piezas fuera del set y materiales escolares.

### **Lección 6 · Aparcamiento cooperativo sin sensor (90–135 min).**

#### Fase 1 · Activamos y predecimos

Marcad plazas numeradas y dos calles de entrada. Asignad plaza y entrada a cada equipo y preved cómo pueden cruzarse las secuencias de dos bases.

#### Fase 2 · Exploramos y construimos

Resolved casos en cuadrícula de papel respetando las reglas: dos bases entran a la vez, no se detienen fuera de plaza y solo hacen marcha atrás para salir de una plaza.

#### Fase 3 · Explicamos y registramos

Escribid pseudocódigo, calibrad distancias, añadid comentarios y acordad señales de coordinación entre equipos. Programad sin sensor.

#### Fase 4 · Aplicamos y mejoramos

Cuando las plazas estén llenas, elegid y programad una regla de salida: orden de entrada, inverso, sincronizado o plazas impares/pares. Medid desviaciones antes de coordinar más robots.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** pseudocódigo, desviaciones y regla de salida probada. Usad alfombras separadas y ninguna persona en el recorrido de los robots.

### **Lección 7 · Aparcamiento por colores con sensor (90–135 min).**

#### Fase 1 · Activamos y predecimos

Asignad cada plaza a una tarjeta roja, verde o azul y cada vehículo a un destino. Predecid cuál será la primera plaza libre del color recibido.

#### Fase 2 · Exploramos y construimos

Añadid el sensor de color y una condición al programa. Mantened las tarjetas planas, con buen contraste, y calibrad la lectura según la luz del lugar.

#### Fase 3 · Explicamos y registramos

Escribid pseudocódigo, comentad cualquier código compartido y planificad entradas coordinadas desde dos lados. Anotad plaza asignada y lectura detectada.

#### Fase 4 · Aplicamos y mejoramos

Haced que las bases no crucen líneas y tomen la primera plaza libre del color recibido. Elegid una regla de salida —por colores, orden de plaza o inverso— y probadla; revisad los bloqueos.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** lectura calibrada, pseudocódigo y regla de entrada/salida probada. El aparcamiento es una maqueta educativa, no una aplicación para coches reales.

### **Lección 8 · Profesiones de fabricación y logística (90 min).**

#### Fase 1 · Activamos y predecimos

Observad oficios de fabricación, transporte, distribución y logística: conducción, almacén, inventario, mantenimiento, operación CNC, planificación de rutas o cadena de suministro. Predecid qué roles cooperan en la llegada de una caja.

#### Fase 2 · Exploramos y construimos

Con fuentes públicas preparadas por la docente, comparad tareas, habilidades, formación y colaboración entre roles.

#### Fase 3 · Explicamos y registramos

En grupo, representad cómo una caja pasa por las diferentes partes del sistema. Preparad una presentación de un minuto.

#### Fase 4 · Aplicamos y mejoramos

Relacionad clasificación, ruta y coordinación con el trabajo real. Haced visibles la toma de decisiones, la seguridad, la supervisión y la contribución humana; no reduzcáis el sector a los robots.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** representación del proceso y presentación. La ficha individual de intereses profesionales es voluntaria y privada.

![Robot móvil SPIKE Prime con el sensor de color sobre una tarjeta roja y una caja ligera junto a una bandeja de destino roja.](../../_assets/situacions/sa-sp-sensors-triatge.webp)

_La tarjeta de color identifica la carga; el reto es programar la base para que la clasifique, la traslade y vuelva al origen de forma autónoma._

## 🧰 Materiales y límites técnicos

Un set SPIKE Prime 45678 y dispositivo con app por pareja o equipo; base móvil, sensor de color, sensor de distancia, tarjetas de color mate, cinta de papel, cartón ligero, cajas de papel, regla y hojas de datos. El primer aparcamiento se resuelve sin sensor; el minirreto siguiente incorpora el sensor de color. Un sensor mide aquello para lo que está diseñado: el de color no reconoce etiquetas escritas ni determina identidades, y el de distancia no detecta plazas, personas ni obstáculos transparentes con fiabilidad garantizada. Revisad la lectura con la luz y la superficie del centro y preparad tarjetas o tablas de datos impresas como alternativa.

## 🧪 Evidencias y evaluación

Guardad diagramas de ruta y fábrica, pseudocódigo, código comentado, cuadrícula de lecturas y paradas, tabla/gráfica de potencia y error, registros de depuración, plan de entradas simultáneas y norma de salida. En la fábrica, anotad los tres códigos probados en dos ciclos, cuántos paquetes llegan al destino correcto, si la base vuelve al origen y qué hace ante una etiqueta desconocida; una prueba cuenta como autónoma solo si el robot completa clasificación, transporte y retorno sin que una persona lo guíe durante el recorrido. Valorad la coherencia entre entrada, condición y acción; la precisión en el uso de datos; las pruebas con casos esperados y no esperados; la atribución del código compartido; y la coordinación que evita colisiones en la maqueta. Autoevaluación de equipo: comunicación, turnos, inventario y gestión del tiempo, escala de 1 a 3 y un cambio concreto para la próxima sesión.

## ♿ Accesibilidad, privacidad y seguridad

Las tareas de conducción tienen alternativa de cuadrícula y pseudocódigo; ofreced roles de programación, diseño, calibración y observación. Usad fichas y cajas ligeras, frenad antes de ajustar el modelo y mantened una sola base en movimiento por carril cuando no se pueda controlar la sincronización. No uséis nombres, matrículas ni datos de movilidad de personas. El escenario es una simulación educativa de logística, no un sistema de aparcamiento, seguridad o transporte en servicio.

## 🔗 Referente oficial y adaptación

Adapta las ocho lecciones de la unidad 5 *Sensors* del curso LEGO Education [*Foundations of Physical Computing*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt1b4345f429fde833/64d3828c455bf62b71f9b840/Foundation_of_Physical_Computing_Course_SPIKE_3_2022.pdf?locale=en-gb): *Sensors Trigger Reactions*, *Sensors and Data*, *Dance to Debug*, *Maze*, *Factory Robot*, *Parking Lot*, *Mini-Challenge: Parking Lot* y *Connecting to Careers: Manufacturing and Transportation, Distribution & Logistics*. Mantiene las condiciones sensor–motor, parada por distancia y color, registro de potencia/precisión, depuración y ritmo, laberinto autónomo con dos sensores, clasificación, transporte autónomo de paquetes ligeros y retorno al origen con señal y pseudocódigo, primera tarea de aparcamiento sin sensor, el minirreto de aparcamiento con colores y la investigación profesional; el contexto, los trayectos, las cajas y los instrumentos son propios. Los modelos e instrucciones de la app LEGO no se reproducen aquí.
