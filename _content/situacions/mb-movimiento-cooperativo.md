---
active: true
title: "Movimiento cooperativo y datos"
description: "¿Cómo pueden las variables y los algoritmos ayudarnos a crear un selector cooperativo de juegos accesibles con micro:bit?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "educacio-fisica"
subject_label: "Educación Física, Matemáticas y Tecnología"
theme: "salut"
theme_label: "Juego, datos y bienestar"
duration: "5 sesiones"
challenge: "¿Cómo podemos crear un selector de juegos de movimiento con variables y azar sin convertir los datos en puntuaciones personales?"
---

![Una placa micro:bit muestra un reto de movimiento cooperativo representado con iconos, no con datos personales.](../../_assets/situacions/mb-moviment-cooperatiu.webp)

_Los programas son prototipos didácticos: no miden salud, rendimiento ni calorías._

## 🌱 Situación y intención

El grupo quiere preparar un menú de juegos breves para el patio, con opciones para moverse, observar, marcar el ritmo o dirigir. A través de variables, contadores y números aleatorios, el alumnado aprende a diseñar programas que informan y proponen opciones sin clasificar a las personas. La situación adapta las cinco lecciones oficiales de *Getting active*; los ejemplos, las pruebas y las reglas de participación son propios.

## 🎯 Aprendizajes y vocabulario

- Describir una actividad con variables observables sin convertirlas en puntuaciones sobre personas.
- Programar un contador o selector con entradas, variables, condiciones y valores de prueba.
- Comprobar que el azar y las reglas ofrecen opciones diversas y no excluyen una forma de participar.
- Proponer alternativas de movimiento voluntario, pausa o participación sin movimiento.

## 📅 Secuencia didáctica · 5 sesiones

### **Sesión 1 · Describir con variables (Describing with variables).**

#### Fase 1 · Activamos y predecimos

Presentad tarjetas de un personaje ficticio del patio y predecid qué valores pueden cambiar durante un juego: opción elegida, turno o número de pasos de una ficha. No uséis nombres ni datos de compañeros.

#### Fase 2 · Exploramos y construimos

Representad una variable con una caja que guarda un valor. Cambiad el valor del juego elegido o del turno con tarjetas y observad cómo el cambio modifica las instrucciones que hay que seguir.

#### Fase 3 · Explicamos y registramos

Escribid instrucciones para actualizar la variable y anotad qué valor había antes y cuál queda después. Explicad qué guarda cada variable y qué evento la modifica.

#### Fase 4 · Aplicamos y mejoramos

Cambiad el orden de una instrucción o el valor inicial y comparad el resultado. Revisad el algoritmo si no queda claro quién lo actualiza o en qué momento.

#### Fase 5 · Comprobamos y reflexionamos

Otra pareja sigue el algoritmo con tarjetas y comprueba el valor resultante. **Evidencia:** ejemplos de variables, instrucciones y tabla de valores antes/después.

### **Sesión 2 · Contar una actividad (Using variables in programs).**

#### Fase 1 · Activamos y predecimos

Diseñad un contador de saltos de una ficha o, si la clase lo elige voluntariamente, de movimientos suaves. Predecid cómo se mostrará el valor y qué debe pasar cuando se inicia o se reinicia.

#### Fase 2 · Exploramos y construimos

Usad el acelerómetro o el botón como entrada y comparad las lecturas con un recuento manual. Identificad cuándo se inicializa la variable, qué evento la modifica y cómo se muestra el resultado.

#### Fase 3 · Explicamos y registramos

Registrad entrada prevista, resultado del programa, diferencia observada y explicación posible. Preparad una versión con un error intencionado de reinicio o incremento y predecid qué resultado producirá.

#### Fase 4 · Aplicamos y mejoramos

Localizad el bloque responsable, cambiad una sola cosa y repetid la misma prueba. El botón A puede sustituir el movimiento; no se exige ninguna actividad física ni se evalúa el número obtenido.

#### Fase 5 · Comprobamos y reflexionamos

Comparad la versión inicial y la corregida y explicad qué guarda la variable. **Evidencia:** programa o pseudocódigo, tabla de pruebas y error depurado sin datos personales.

### **Sesión 3 · Un contador de pasos como modelo (Programming step-counters).**

#### Fase 1 · Activamos y predecimos

Predecid qué movimientos de la placa podría confundir el contador con pasos y qué pasos podrían pasar desapercibidos. Explicad que es una prueba de un modelo, no un podómetro validado.

#### Fase 2 · Exploramos y construimos

Programad un contador activado por el movimiento de la placa y probadlo en el simulador o con sacudidas suaves sobre una mesa. Si el alumnado lo elige, haced un recorrido corto en espacio libre, sin correr ni competir; el botón y las fichas son alternativas equivalentes.

#### Fase 3 · Explicamos y registramos

Comparad tres recorridos o secuencias con observación manual, manteniendo condiciones consistentes. Usad un registro anónimo y anotad falsos positivos, movimientos no contados y diferencias con la ficha manual.

#### Fase 4 · Aplicamos y mejoramos

Revisad un umbral o una condición y repetid la misma prueba controlada. El objetivo es identificar limitaciones del recuento, no ajustarlo a una medida corporal exacta.

#### Fase 5 · Comprobamos y reflexionamos

Explicad por qué el programa puede confundir otros movimientos con pasos y por qué no mide salud, intensidad ni capacidad física. **Evidencia:** dos versiones del contador, tabla comparativa y límite del modelo explicado.

### **Sesión 4 · Propuestas aleatorias (Random activities).**

#### Fase 1 · Activamos y predecimos

Examinad un programa de preguntas matemáticas con números aleatorios y variables. Predecid qué valores podrían salir y qué opciones quedarían fuera si los límites se escriben mal.

#### Fase 2 · Exploramos y construimos

Redactad con tarjetas el algoritmo de un selector de juegos: iniciar, elegir un número, mostrar la actividad asociada, preguntar si se acepta y ofrecer una alternativa. Incluid actividades equivalentes como caminar una ruta corta, marcar un ritmo, observar una forma o dirigir una secuencia.

#### Fase 3 · Explicamos y registramos

Revisad que todas las opciones sean visibles y que ninguna obligue a hacer ejercicio. Anotad si tienen duraciones o demandas distintas y por qué el azar no garantiza por sí solo la equidad.

#### Fase 4 · Aplicamos y mejoramos

Probad los valores mínimo y máximo y comprobad que cada actividad puede aparecer. Añadid una opción «elige otra» o «paso» con el mismo valor que cualquier otra; una elección manual equivalente siempre está disponible.

#### Fase 5 · Comprobamos y reflexionamos

Explicad quién controla la selección y cómo puede rechazar una propuesta. **Evidencia:** algoritmo con tarjetas, lista equilibrada y pruebas de límites.

### **Sesión 5 · Programar y evaluar el selector (Programming an activity picker).**

#### Fase 1 · Activamos y predecimos

Revisad el algoritmo y predecid qué actividad corresponde a los valores mínimo y máximo. Comprobad que una alternativa o pasar el turno aparece como opción.

#### Fase 2 · Exploramos y construimos

Implementad el selector con MakeCode, variables y números aleatorios. Asociad cada opción a una tarjeta y haced que la persona pueda aceptar, elegir otra o no participar.

#### Fase 3 · Explicamos y registramos

Probad sistemáticamente los límites e inspeccionad la lista para que ninguna opción quede excluida. Registrad valores y resultados sin nombres, perfiles ni identificadores.

#### Fase 4 · Aplicamos y mejoramos

Revisad una condición incorrecta y volved a probarla. Añadid o mejorad una alternativa sin movimiento y explicad si el selector sigue siendo fácil de modificar.

#### Fase 5 · Comprobamos y reflexionamos

Presentad el programa y valorad si es claro, inclusivo y controlado por quien lo usa. Borrad los datos de prueba al terminar. **Evidencia:** selector, tabla de pruebas, condición revisada y justificación de accesibilidad.

## 🧰 Materiales y preparación

BBC micro:bit, MakeCode, tarjetas de actividad y registro de pruebas sin nombres. Verificad que el acelerómetro y los bloques que utilizáis son compatibles con la versión disponible. El recuento puede hacerse con el botón si sacudir la placa no es accesible o adecuado.

## 🧪 Evidencias y evaluación

Guardad ejemplos de variables, algoritmos, dos versiones del contador, tabla de pruebas, programa aleatorio y revisión de accesibilidad. Valorad la explicación del modelo, la depuración sistemática y la calidad de las opciones; no puntuéis velocidad, número de pasos ni actividad física de ninguna persona.

## Guía de prueba para los contadores

Para las sesiones 2 y 3, usad una tabla con cuatro columnas: entrada prevista, resultado del programa, diferencia observada y explicación posible. Probad primero el programa con el simulador o con sacudidas suaves de la placa sobre una mesa. Después, si el alumnado lo elige, haced un recorrido corto en espacio libre, sin correr ni competir. Comparad el contador automático con una secuencia controlada de movimientos de la placa y el recuento manual de una ficha. El objetivo es encontrar falsos positivos y movimientos que no cuenta, no ajustar el programa para que coincida con una medida corporal exacta.

En el programa, identificad explícitamente cuándo se inicializa la variable, qué evento la modifica y cómo se muestra el valor. Preparad una versión con un error intencionado: el contador suma dos, no se pone a cero al inicio o muestra el valor antes de actualizarse. El equipo predice qué resultado producirá, localiza el bloque responsable y cambia una sola cosa. El registro es de pruebas del programa, sin nombre ni identificador de alumno, y se borra al terminar.

## Diseñar el selector con equidad

Antes de programar el azar, aseguraos de que todas las opciones son igual de visibles y de que ninguna respuesta obliga a hacer ejercicio. Una colección equilibrada puede incluir una ruta de pasos caminando, seguir un ritmo con las manos, observar y dibujar una forma o dirigir la ficha de una pareja. La opción «elige otra» o «paso» debe tener el mismo valor que cualquier otra. Si las actividades tienen duraciones o demandas distintas, no presentéis el azar como garantía de equidad: hablad de cómo se puede controlar la selección y ofreced una elección manual equivalente.

Representad el algoritmo con tarjetas: iniciar, elegir un número, mostrar la actividad asociada, preguntar si la persona quiere aceptarla y ofrecer una alternativa. Haced pruebas en las que aparezcan el número mínimo y máximo, y revisad si alguna opción queda excluida por un límite mal escrito. Cada equipo puede hacer una inspección sistemática de la lista en lugar de esperar que el azar muestre todas las opciones.

## Rúbrica breve y adaptaciones

Valorad cuatro aspectos con «todavía no / con apoyo / de manera autónoma»: identifica qué guarda la variable; explica la entrada que la cambia; localiza y corrige un error con pruebas; y justifica cómo el selector permite elegir o pasar. El alumnado puede demostrarlo con tarjetas, pseudocódigo, bloques o una explicación oral. Usad el botón A en lugar del movimiento cuando sea preferible, usad fichas como entrada simulada y permitid participar como diseñador/a u observador/a. No registréis información sobre salud, capacidad o hábitos individuales.

## ♿ Bienestar y privacidad

La participación física es voluntaria y tiene alternativas equivalentes. No se registran perfiles, nombres, condiciones de salud ni historial; el dispositivo no mide intensidad, capacidad física o calorías. Delimitad un espacio seguro y ofreced roles de diseño, programación, ritmo, observación y dirección.

## 🔗 Unidad oficial adaptada

Esta situación adapta las cinco lecciones de micro:bit [Getting active](https://microbit.org/teach/lessons/getting-active-unit-overview/): *Describing with variables*, *Using variables in programs*, *Programming step-counters*, *Random activities* y *Programming an activity picker*. La propuesta concreta los mismos objetivos de variables, algoritmos, contadores, aleatoriedad, selección y depuración en un menú de juegos cooperativos propio.
