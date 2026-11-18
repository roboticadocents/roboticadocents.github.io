---
active: true
title: "Un mosaico de movimientos repetidos"
description: "Siete lecciones de Python SPIKE Prime para aprender bucles, contadores, repeticiones, condiciones, bucles infinitos y diseño iterativo."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas, Arte y Programación"
theme: "python"
theme_label: "Python: bucles y repetición"
duration: "7 lecciones · 7–10 sesiones"
challenge: "¿Cómo podemos programar una máquina de mosaico de mesa con patrones repetibles, controlar cuántas veces actúa y evitar que un bucle continúe cuando ya ha terminado la tarea?"
---

![Mecanismo real construido con LEGO SPIKE Prime, hub y motor, que coloca piezas planas para crear un mosaico geométrico inspirado en la huerta valenciana.](../../_assets/situacions/sp-python-bucles.webp)

_Un bucle hace que una misma acción se repita; el contador y la condición determinan cuándo toca parar._

## 🌱 Reto y sentido

Una asociación cultural de la comarca quiere preparar para la feria escolar un mosaico modular inspirado en acequias, bancales y formas vegetales de la huerta. Cada equipo diseña una pequeña máquina de mesa que repite un movimiento con un motor SPIKE Prime: puede desplazar un indicador, hacer avanzar una ficha grande o señalar una casilla cada vez. El código debe producir un patrón reconocible, contar las repeticiones y terminar en el momento previsto. No se trata de reproducir una técnica artesanal ni de automatizar trabajo manual real; es una maqueta computacional y artística.

Esta situación adapta la unidad 4 de Course 1, *Doing Reps with Loops*, de LEGO Education *Introduction to Python Programming*. La progresión trata los bucles contados en *Warm Up Loop with Leo*, el registro de repeticiones y la cuenta atrás en *Counting Reps with Leo*, el ritmo en *Dance Loop with Coach*, la selección condicional de movimientos en *Setting Conditions for Yoga*, el comportamiento persistente en *Infinite Moves*, la creación de un modelo o algoritmo repetitivo en *Leading the Team with Loops* y la mejora con feedback en *Ideas for Leading Your Team with Loops*. Se cambia el ejercicio corporal por un proceso de composición de mosaico, conservando los conceptos de control y secuencia.

## 🎯 Aprendizajes y vocabulario

- Identificar un patrón de instrucciones repetidas y sustituir copias literales por un bucle `for` cuando el número de repeticiones es conocido.

- Interpretar `range(n)` como un conjunto de n iteraciones y predecir cuántas veces se ejecuta el cuerpo del bucle.

- Usar una variable contadora para registrar repeticiones, mostrar un recuento y construir una secuencia de cuenta atrás sin confundir el valor mostrado con el índice del programa.

- Comparar un movimiento repetido con pausa fija y un patrón rítmico; documentar tiempos y diferencias entre la orden y el movimiento físico real.

- Seleccionar una secuencia según una condición explícita de diseño (p. ej., tipo de ficha o patrón acordado) y probar los dos caminos de salida.

- Explicar por qué un bucle infinito no tiene finalización propia, definirle una condición de salida o un mecanismo de parada manual y no ejecutarlo sin supervisión.

- Descomponer una composición repetitiva en estructura, número de módulos, orden, pausa y reinicio; usar un ciclo de diseño propio.

- Ofrecer feedback sobre el comportamiento y el código con criterios observables y registrar cómo una modificación afecta la repetición.

**Iteración:** una vuelta del cuerpo del bucle. **Contador:** variable que registra cuántas vueltas o elementos se han procesado. **Bucle con contador:** repetición con una cantidad conocida de iteraciones. **Condición:** expresión que puede resultar verdadera o falsa. **Bucle infinito:** repetición que no acaba mientras no se interrumpa. **Patrón:** orden que se reconoce porque algunos elementos se repiten.

```python
# Exemple de Python general: genera una llista de passos previsibles
for index in range(4):
    print("col·loca la fitxa", index + 1)
```

El código solo imprime texto y no controla SPIKE Prime. Para movimiento, pausa, matriz del hub y parada, adaptad la sintaxis a la API Python de la app instalada; las versiones de SPIKE pueden diferir. Confirmad puertos y velocidades con el modelo inmovilizado antes de ejecutarlo en la pista.

## 🧰 Materiales y preparación docente

Un SPIKE Prime 45678 por equipo, hub cargado, un motor mediano y piezas Technic para un mecanismo de baja fuerza y recorrido corto, plataforma estable, fichas grandes planas de cartón o papel, cuadrícula impresa, rotuladores, cinta de papel, regla, diario de ingeniería y dispositivo con SPIKE Python y consola. El motor solo mueve un indicador o empuja una ficha ligera por una canaleta abierta; no se usa herramienta de corte, pinza de fuerza ni material pequeño. El mural final se puede completar con piezas de papel sin mecanismo.

Definid límites de velocidad y ángulo, topes mecánicos y espacio seguro para que el accesorio no caiga de la mesa. Cada equipo elige un módulo gráfico sencillo (por ejemplo, alternancia de dos formas o secuencia de tres colores) y una forma de entrada manual. Preparad código de demostración con un `for` corto, un contador, una condición y un ejemplo de bucle infinito solo para lectura en papel. Explicad que cualquier código que continúa sin pausa puede congelar la app o repetir movimiento: la demostración de infinito se traza mentalmente o se ejecuta sin motores, y la profesora mantiene acceso a parar el programa.

Roles rotativos: lectura/escritura de Python, construcción segura, registro y revisión de patrones. Acordad cómo se representa el paso real del motor: una ficha movida, una luz o una anotación. Si no se dispone de motor, usad una tira de papel con marcadores para simular la misma lógica.

## 📅 Secuencia didáctica · siete lecciones

### **Lección 1 · Cuatro repeticiones, una instrucción (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (7 min):** presentad una tira con cuatro casillas y preguntad al alumnado cómo describiría el mismo gesto de colocar una ficha cuatro veces. Comparad cuatro líneas idénticas con «repite cuatro vueltas».

#### Fase 2 · Exploramos y construimos

**Modelo (10 min):** haced una traza en papel de un `for index in range(4)` con una orden de salida; contad las iteraciones empezando por cero y diferenciad el índice del número de ficha visible.

#### Fase 3 · Explicamos y registramos

**Programación (18 min):** escribid un programa SPIKE sencillo según la API local para que un indicador haga un movimiento corto, vuelva y pause cuatro veces. Empezad con el actuador inmovilizado o desconectado; después ejecutad con ángulo limitado y velocidad baja.

#### Fase 4 · Aplicamos y mejoramos

**Validación (7 min):** el equipo anota el número esperado y el número observado; si el motor se mueve continuamente, parad y comprobad la indentación, el rango y la llamada.

#### Fase 5 · Comprobamos y reflexionamos

**Salida (3 min):** dibujad el flujo de una iteración y explicad qué pasa al terminar la cuarta.

### **Lección 2 · Contar fichas y hacer la cuenta atrás (45 min).**

#### Fase 1 · Activamos y predecimos

**Problema (5 min):** ¿cómo sabe el operador cuántas casillas del mosaico quedan?

#### Fase 2 · Exploramos y construimos

**Variables y recuento (12 min):** representad una secuencia de cinco fichas con un contador que aumenta; predecid los valores antes de ejecutar.

#### Fase 3 · Explicamos y registramos

**Contador y salida (18 min):** modificad el programa para que cada iteración actualice el número colocado y lo muestre en la consola o en la matriz si la función local está disponible. Cread una segunda versión con cuenta atrás desde el número total hasta cero. Distinguid el recuento de ciclos del sensor: la secuencia no detecta por sí sola que una ficha se ha movido correctamente.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas de frontera (7 min):** probad 1, 0 y 5 iteraciones en simulación; revisad si cero repeticiones deja el programa en un estado claro y si el último mensaje es «acabado».

#### Fase 5 · Comprobamos y reflexionamos

**Cierre (3 min):** describid un error *off-by-one* y cómo la traza lo ha hecho visible.

### **Lección 3 · Ritmo de pasos y pausas (45 min).**

#### Fase 1 · Activamos y predecimos

**Escucha/observación (6 min):** haced una secuencia no sonora con la palma sobre la mesa o tarjetas, y una versión lenta y una rápida. La participación corporal es opcional; también se pueden ordenar tarjetas.

#### Fase 2 · Exploramos y construimos

**Planificación (8 min):** convertid un patrón A-B-A en instrucciones temporizadas. Preguntad qué se repite y qué cambia en cada vuelta.

#### Fase 3 · Explicamos y registramos

**Implementación (18 min):** programad una serie de movimientos cortos con pausas explícitas; probad con el motor sin carga primero. Si la versión de app no permite la función de pausa prevista, haced una versión con observación manual entre órdenes e identificad la limitación.

#### Fase 4 · Aplicamos y mejoramos

**Comparación (8 min):** medid el tiempo total de dos secuencias con los mismos movimientos pero pausas distintas; comparad la duración prevista y la real.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión (5 min):** identificad qué parte de la coreografía depende del bucle y qué parte del valor de cada movimiento.

### **Lección 4 · Si la ficha es de un tipo, cambia el patrón (45 min).**

#### Fase 1 · Activamos y predecimos

**Regla desconectada (8 min):** definid una condición visible sin depender solo del color: forma circular → secuencia A; forma cuadrada → secuencia B. Los equipos clasifican tarjetas y describen la decisión «si… si no…».

#### Fase 2 · Exploramos y construimos

**Diagrama de flujo (8 min):** dibujad la entrada manual, la condición, dos ramas y el punto de reunión.

#### Fase 3 · Explicamos y registramos

**Programa y traza (17 min):** implementad las ramas en Python con una variable elegida en el código o confirmación manual; cada rama contiene un patrón corto de bucle. No añadáis ningún sensor: el objetivo es comprender el control, no aparentar que el robot identifica formas.

#### Fase 4 · Aplicamos y mejoramos

**Casos de prueba (8 min):** ejecutad cada condición y un valor no previsto; anotad qué rama se activa y qué respuesta ofrece el programa a la entrada desconocida.

#### Fase 5 · Comprobamos y reflexionamos

**Salida (4 min):** explicad por qué el código no debe depender de una regla visual no especificada.

### **Lección 5 · Repetir hasta que alguien detenga: bucle infinito (45 min).**

#### Fase 1 · Activamos y predecimos

**Comparación (7 min):** mirad un fragmento finito con `range(3)` y uno de infinito teórico como `while True`. Sin ejecutar el segundo, describid cuál tiene salida automática.

#### Fase 2 · Exploramos y construimos

**Usos y riesgos (10 min):** discutid casos en los que el código podría esperar una interacción constante y por qué hace falta una condición de parada, una pausa segura y un control manual.

#### Fase 3 · Explicamos y registramos

**Laboratorio en papel (15 min):** trazad el fragmento infinito en una cuadrícula, localizad si existe un cambio en la condición y añadid un criterio de parada (contador máximo, botón o estado explícito). Si se muestra en el editor, es solo salida textual sin motores ni conectividad; nunca se deja el bucle ejecutándose sin supervisión.

#### Fase 4 · Aplicamos y mejoramos

**Modelo de movimiento (8 min):** proponed cómo sería una «muestra continua» del mosaico con un indicador que alterna; explicad qué mecanismo podría romperse y cómo se comporta el programa en pausa.

#### Fase 5 · Comprobamos y reflexionamos

**Cierre (5 min):** cada alumno escribe una regla para evitar un movimiento persistente no intencionado.

### **Lección 6 · Liderar un equipo con un patrón propio (90–120 min).**

#### Fase 1 · Activamos y predecimos

**Encargo (10 min):** diseñad un módulo para el mosaico de la feria que use al menos una repetición y comunique con claridad cuándo ha terminado. Puede mover un indicador, alternar dos fichas o hacer avanzar un marcador; no debe emular posturas físicas ni obligar a nadie a hacer ejercicios.

#### Fase 2 · Exploramos y construimos

**Exploración de ideas (12 min):** cada miembro hace un boceto; el equipo elige una regla con criterios de legibilidad, número de piezas, repeticiones y estabilidad. Haced una línea de tiempo o diagrama de flujo con una iteración ampliada y una marca de parada.

#### Fase 3 · Explicamos y registramos

**Construcción (20 min):** cread soporte y topes con piezas de la dotación, de manera que el movimiento no arrastre el hub ni deje caer fichas. **Programa (20 min):** dividid en inicio, repetición de módulo, recuento/estado final y retorno a la posición inicial. Usad `for` si el total es conocido; justificad cualquier otra estructura. Los comentarios explican el patrón elegido y el mecanismo de parada.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas (18 min):** haced un intento con 1, 3 y el total acordado, primero sin ficha y después con carga ligera. Anotad ciclos previstos/observados, desalineación, caídas y tiempo; cambiad una única pieza o valor por iteración.

#### Fase 5 · Comprobamos y reflexionamos

**Presentación (10–20 min):** cada equipo muestra cómo se lee el código y qué cambio ha hecho más fiable el patrón. Roles de portavoz rotativos para que quien no programa habitualmente también comunique.

### **Lección 7 · Feedback para mejorar el mosaico (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Preparar evidencias (7 min):** los autores exponen el diagrama, el programa, el patrón acabado, un resultado repetido y una pregunta.

#### Fase 2 · Exploramos y construimos

**Revisión (10 min):** una pareja externa sigue el pseudocódigo y observa un ciclo completo; no cambia el código ni reconstruye el modelo. La pauta pregunta: ¿se puede predecir el número de movimientos?, ¿la parada es visible?, ¿el ritmo y el recuento concuerdan?

#### Fase 3 · Explicamos y registramos

**Feedback (5 min):** formulad una observación, una pregunta y una sugerencia concreta. Los autores pueden pedir aclaraciones.

#### Fase 4 · Aplicamos y mejoramos

**Iteración (12 min):** elegid una mejora, registrad por qué y repetid el caso con las mismas condiciones.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión (3–11 min):** comparad los datos antes/después, indicad qué punto no se puede resolver con el tiempo disponible y valorad la colaboración sin comparar personas.

## 🧪 Evidencias, evaluación y producto

El portafolio contiene el patrón inicial, la descomposición, la traza de `range`, la tabla de contador y cuenta atrás, la cronología del ritmo, el diagrama de ramas, el análisis escrito de bucle infinito, los comentarios de Python, el diseño mecánico, los casos 0/1/n, los resultados repetidos, el feedback y el registro de una iteración. El producto final es un módulo de mosaico de mesa y una nota de programa que explica cuántas vueltas se ejecuta, qué varía, cuándo finaliza y cómo se detiene si hay una incidencia.

Cuatro criterios: **razonamiento de repetición** (predice la cantidad y traza un bucle); **contador/condición** (actualiza y muestra un recuento coherente, interpreta ambas ramas); **diseño seguro** (limita repeticiones y movimiento e incorpora la finalización); **prueba/reflexión** (contrasta el resultado, documenta el feedback y mejora una causa). Niveles: con modelado, con apoyo, autónomo y transferido con justificación. La calidad visual del mosaico no sustituye la evidencia de control del programa.

## ♿ Inclusión, seguridad y sostenibilidad

Ofreced bucles como tarjetas manipulables, traza en tabla, `for` en pseudocódigo y oportunidades iguales para construir, programar y documentar. El patrón se explica con forma, posición y texto, no solo con color o ritmo sonoro. Haced pausas entre ensayos; los sonidos son opcionales. El mecanismo usa baja potencia, recorrido limitado y fichas grandes; las manos fuera de las partes móviles y del cableado mientras funciona. No ejecutéis bucles infinitos con motores ni dejéis equipos funcionando solos. Reutilizad papel y cartón para las piezas decorativas y reciclad los materiales al final.

## 🔗 Referente oficial y decisiones de adaptación

Adapta la unidad 4 *Doing Reps with Loops* del curso LEGO Education [*Introduction to Python Programming · Course 1*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt834b554cdaa246f7/6584064fd082f7672425e7ea/File_1_Units12345_Intro_to_Python_Course_TG_Course.pdf?locale=en-us): *Warm Up Loop with Leo*, *Counting Reps with Leo*, *Dance Loop with Coach*, *Setting Conditions for Yoga*, *Infinite Moves*, *Leading the Team with Loops* y *Ideas for Leading Your Team with Loops*. Se conservan la secuencia de instrucciones con `for` y cantidad en `range`, la variable de recuento/cuenta atrás, el ritmo, el control condicional, la comprensión de un bucle infinito, el reto abierto de modelo repetitivo y el feedback. La guía oficial incluye un modelo de máquina de repeticiones y un reto avanzado de diseño/programación de 90–120 minutos; la adaptación usa mosaicos de cartón y movimiento limitado. El código de hardware se valida con la Knowledge Base de la app local; no se copia ninguna construcción LEGO ni material del alumnado.
