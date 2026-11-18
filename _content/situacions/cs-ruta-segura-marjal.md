---
active: true
title: "Una ruta segura por la marjal"
description: "Planificamos, programamos y depuramos recorridos con obstáculos en una cuadrícula de la marjal, con el Coding Set y roles cooperativos."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "pensament-computacional"
subject_label: "Pensamiento computacional, Matemáticas y Medio"
theme: "entorn-local"
theme_label: "Marjal y cuidado de los hábitats"
duration: "3 sesiones de 45 minutos"
challenge: "¿Cómo podemos guiar MatataBot hasta dos puntos de la marjal sin cruzar una zona protegida y explicar a otro equipo cómo lo hemos conseguido?"
official_source: "https://matatalab.com/cdn/ff/3ihe_ldu0qGpw6-JNLtdn8UaZVTFje4pO0eRFPIgtcY/1600223266/public/2020-09/%E7%AC%AC3%E8%AF%BE%20%20%E7%8B%BC%E6%9D%A5%E4%BA%86%EF%BC%81.pdf"
---

![El Coding Set real de la dotación junto a una cuadrícula de la marjal: MatataBot tiene una ruta marcada que evita una zona representada con una tarjeta.](../../_assets/situacions/cs-ruta-segura-marjal.webp)

_Ilustración IA basada en la fotografía del Coding Set del centro. La cuadrícula, la ruta y la tarjeta de obstáculo son materiales didácticos; MatataBot no detecta ni esquiva obstáculos por sí mismo._

## 🌱 Situación, reto e intención

La clase prepara un mapa para que otra pareja pueda llevar una rana de papel desde un punto de agua hasta una zona de vegetación sin atravesar un espacio marcado como protegido. El reto no consiste en hacer que el robot «vea» el obstáculo: el alumnado lo representa en el mapa, calcula un itinerario seguro y programa MatataBot para que lo recorra.

Esta propuesta adapta la lección oficial de Matatalab **«The Wolf is Coming!»** (lección 3), que introduce el concepto de obstáculo, la planificación de una ruta previa, la codificación de un camino con bloques direccionales, el trabajo en dos equipos que intercambian tareas y un reto final de permutaciones. El contexto de la marjal, los personajes, los mapas y los casos de prueba son propios. La lección oficial propone una exploración de 40 minutos; aquí se distribuye en tres sesiones de 45 minutos para permitir la predicción, la rotación de roles, la depuración y la comunicación a otra pareja. No se reproducen las páginas ni las ilustraciones del material oficial.

**Pregunta guía:** ¿qué información necesitamos para elegir una ruta que evite una zona protegida, y cómo comprobamos que las órdenes llevan el robot al punto correcto?

## 🎯 Aprendizajes y vocabulario

- Identificar inicio, destino, orientación, obstáculo representado y ruta posible en una cuadrícula.
- Planificar el recorrido antes de colocar bloques, anticipando la posición y la orientación después de cada orden.
- Traducir una ruta a bloques direccionales del Coding Set, ejecutarla y comparar el resultado con la predicción.
- Depurar una secuencia cambiando una instrucción cada vez y registrar qué ha cambiado.
- Repartir e intercambiar los roles de diseño del mapa, programación, comprobación y portavoz.
- Explicar por qué una ruta es segura dentro del mapa y distinguir esta decisión humana de las capacidades del robot.

**Vocabulario clave:** casilla, fila, columna, inicio, destino, orientación, obstáculo, ruta, instrucción, secuencia, predicción, prueba y depuración.

## 🧰 Materiales y preparación

- Coding Set del centro: MatataBot, torre de control, tablero de programación y bloques direccionales disponibles. Cargad los dispositivos, comprobad la conexión y ejecutad una instrucción sencilla antes de la sesión.
- Dos cuadrículas propias de 5 × 5 casillas. Para mover físicamente el robot, marcad casillas de **10 × 10 cm** y confirmad el desplazamiento con una prueba de vuestro modelo; una cuadrícula de papel más pequeña solo sirve para planificar o simular.
- Tarjetas de papel con una rana, dos puntos de agua, dos zonas de vegetación y una zona protegida. El obstáculo es una marca del mapa: el robot no lo reconoce ni lo evita automáticamente. Mantened libre el recorrido físico y no coloquéis barreras que puedan hacer caer o bloquear el robot.
- Hoja de registro con cuatro columnas: **paso**, **posición y orientación previstas**, **resultado observado**, **cambio probado**. Añadid tarjetas con las órdenes que tenga realmente el kit.

Formad equipos de cuatro. En cada pareja, una persona prepara el mapa y la otra programa; las dos personas revisan conjuntamente la ruta. Después de la primera misión, intercambian la función de diseño y programación con la otra pareja. Ajustad los bloques al inventario del centro: si el modelo no tiene algún movimiento, representadlo en papel y no lo presentéis como una prueba física.

## 📅 Secuencia didáctica · tres sesiones de 45 minutos

### **Sesión 1 · Leemos el mapa y planificamos sin atravesar la zona protegida (45 min).**

#### Fase 1 · Activamos y predecimos

Mostrad una cuadrícula con inicio, destino y una zona protegida marcada. Preguntad si hay más de un camino posible y pedid que señalen qué casillas no puede atravesar la ruta acordada. Recoged predicciones sin encender todavía el robot.

#### Fase 2 · Exploramos y construimos

En equipos de cuatro, asignad roles de cartógrafo/a, planificador/a, verificador/a y portavoz. La pareja planificadora traza con lápiz una ruta casilla a casilla; la pareja verificadora recorre el mapa con una ficha y comprueba que no pasa por la zona protegida ni sale de la cuadrícula. Si una ruta no es viable, marcad la primera casilla que causa el problema.

#### Fase 3 · Explicamos y registramos

Anotad cada cambio de dirección en una secuencia de flechas e indicad la dirección inicial de MatataBot. Contad los movimientos entre casillas y distinguidlos de los giros: un giro cambia la orientación, pero no traslada el robot a una casilla vecina.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad la ruta con otro equipo sin explicarla oralmente. El equipo receptor debe poder reconstruir el recorrido solo con la cuadrícula, el punto de inicio, la orientación y la secuencia. Añadid al mapa la información que falte.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa con leyenda, ruta continua y registro de posición después de cada orden. Explicad qué dato del mapa ha evitado confundir un giro con un desplazamiento.

### **Sesión 2 · Convertimos dos rutas en programas y cambiamos los roles (45 min).**

#### Fase 1 · Activamos y predecimos

Presentad dos retos con el mismo inicio pero destinos diferentes. Cada pareja elige una ruta segura y escribe la predicción antes de tocar los bloques. Repasad la colocación inicial y la orientación del robot.

#### Fase 2 · Exploramos y construimos

La primera pareja construye el programa en el tablero y lo lee en voz alta; la segunda comprueba bloque a bloque que corresponde a la ruta del mapa. Ejecutad el programa solo cuando las dos parejas lo hayan validado. Después, cambiad los roles y resolved el segundo destino con otro mapa.

#### Fase 3 · Explicamos y registramos

Después de cada prueba, anotad la última posición correcta y la primera discrepancia. Si el robot no llega, comparad la secuencia con el mapa y cambiad una sola instrucción antes de repetir. Devolved MatataBot a la misma casilla y orientación inicial antes de cada ejecución.

#### Fase 4 · Aplicamos y mejoramos

Haced que cada pareja reciba el programa de la otra sin ver la ruta dibujada. Debe anticipar el destino, probarlo y después comparar la predicción con el resultado. Si hay una diferencia, explicad si proviene del mapa, de la orientación inicial, de la lectura de los bloques o de la ejecución.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** dos programas con sus rutas anotadas, una comprobación entre parejas y, si ha hecho falta, un cambio justificado. El reto se considera resuelto cuando el recorrido observado llega al destino sin entrar en las casillas prohibidas.

### **Sesión 3 · Depuramos y resolvemos un reto de permutaciones (45 min).**

#### Fase 1 · Activamos y predecimos

Colocad cuatro tarjetas de hábitat en cuatro casillas identificadas. Explicad que, en el reto final, dos tarjetas cambiarán de lugar y que habrá que decidir qué configuraciones son posibles sin repetir ninguna casilla. Distinguid este problema de clasificación del movimiento del robot.

#### Fase 2 · Exploramos y construimos

Cada equipo recibe una configuración inicial y dos tarjetas intercambiables. Proponed cuatro configuraciones candidatas; el alumnado las prueba físicamente con las tarjetas y descarta las que dejan una casilla duplicada o vacía cuando el reto exige una tarjeta por casilla. Después, elegid una configuración válida y planificad una ruta que visite los destinos en el orden acordado.

#### Fase 3 · Explicamos y registramos

Programad una ruta corta hacia los destinos elegidos. La persona observadora registra el orden de visita y el resultado. Si la secuencia falla, depuradla paso a paso; no cambiéis a la vez la disposición de tarjetas y el programa.

#### Fase 4 · Aplicamos y mejoramos

Presentad el mapa y una ruta a una pareja visitante. Esta debe explicar qué configuración ha elegido, reconstruir las instrucciones y verificar el destino. Incorporad una mejora solo si resuelve una confusión observada durante esta prueba.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia final:** mapa con leyenda, una configuración de tarjetas justificada, programa comprobado y explicación breve de una depuración. Cerrad con la pregunta: ¿qué parte de la decisión sobre la zona protegida ha hecho el alumnado y qué parte ha hecho el robot?

## ♿ Accesibilidad, seguridad y límites

- Ofreced cuadrículas con alto contraste, pictogramas, piezas más grandes y una versión de recorrido corporal o con ficha para quien no pueda manipular los bloques pequeños.
- Permitid anticipar la secuencia oralmente, con flechas, con una plantilla de posiciones o con el apoyo de una pareja; los roles se pueden adaptar sin perder la rotación de responsabilidades.
- Mantened manos y materiales fuera del trayecto durante la ejecución. No pongáis el robot sobre bordes, superficies inclinadas ni obstáculos físicos; detened la prueba si queda bloqueado.
- La zona protegida es una convención del mapa. El Coding Set base no dispone de detección automática de obstáculos en esta actividad; ningún movimiento del robot demuestra percepción del entorno.
- No uséis ubicaciones identificables del alumnado ni fotografías con datos personales. Los lugares y animales del mapa son representaciones educativas.

## ✅ Evaluación y evidencias

- **Planificación:** el mapa incluye inicio, orientación, destino, zona protegida y una ruta continua.
- **Programación:** la secuencia de bloques corresponde a la ruta que el equipo ha anunciado.
- **Depuración:** el alumnado localiza la primera discrepancia y prueba un cambio controlado.
- **Comunicación:** otra pareja puede reconstruir el recorrido sin instrucciones adicionales.
- **Comprensión del robot:** la explicación separa las decisiones humanas sobre el mapa de las órdenes que MatataBot ejecuta.

## 🔗 Fuentes oficiales y decisiones de adaptación

- [Matatalab, lección 3: «The Wolf is Coming!» (PDF oficial)](https://matatalab.com/cdn/ff/3ihe_ldu0qGpw6-JNLtdn8UaZVTFje4pO0eRFPIgtcY/1600223266/public/2020-09/%E7%AC%AC3%E8%AF%BE%20%20%E7%8B%BC%E6%9D%A5%E4%BA%86%EF%BC%81.pdf): trabaja obstáculos, planificación previa, secuencias direccionales, cooperación en parejas con intercambio de tareas y una actividad final de permutaciones. La propuesta conserva esta progresión didáctica, pero crea un contexto de marjal, mapas, consignas y pruebas propios.
- La fuente describe el uso de Matatalab Coding Set. Las dimensiones de 10 × 10 cm y la respuesta a los bloques se deben validar con el kit y la superficie concretos del centro antes de hacer la actividad física.
- La duración de tres sesiones de 45 minutos, los indicadores de evaluación y los materiales de papel son decisiones propias de esta adaptación, no datos atribuidos al fabricante.
