---
active: true
title: "Una decisión, dos comprobaciones"
description: "Seis lecciones de Python y SPIKE Prime para combinar condiciones, entender AND, OR y NOT, y diseñar una maqueta accesible de préstamo seguro."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Programación"
theme: "python"
theme_label: "Python: condiciones y seguridad digital"
duration: "6 lecciones · 6–8 sesiones"
challenge: "¿Cómo podemos combinar comprobaciones en Python para decidir cuándo una maqueta de préstamo de material puede mostrar una respuesta, y cómo probamos que no confunde casos?"
---

![Robot LEGO SPIKE Prime real junto a una maqueta de cartón con un pasillo de fichas geométricas y dos controles de prueba.](../../_assets/situacions/sp-python-condicions.webp)

_Una decisión compuesta es más fácil de explicar si hacemos visibles las condiciones y probamos cada combinación._

## 🌱 Reto y contexto

La biblioteca del aula quiere probar una estación didáctica que indica si una caja de material compartido está preparada para una actividad. En una maqueta de cartón, las fichas de color representan un código de actividad inventado por la clase, un sensor de fuerza representa una confirmación física y la matriz de luces del SPIKE hub comunica el estado. El alumnado define qué condiciones deben cumplirse para que aparezca una respuesta, construye una maqueta sin ninguna cerradura funcional y programa una simulación en Python.

La situación adapta la unidad 8 *Compound Conditionals and Logic Operators* de LEGO Education *Introduction to Python Programming · Course 2*. Parte de una conversación segura sobre privacidad y controles digitales, practica condiciones anidadas y operadores lógicos con tablas de verdad, investiga una secuencia de dos comprobaciones con sensores y culmina en un juego cooperativo de pistas diseñado y probado por otro equipo. No es un sistema de seguridad ni valida contraseñas reales; no se recopila ni se comparte ninguna credencial personal.

## 🎯 Aprendizajes y vocabulario

- Representar una decisión como condiciones observables, resultados posibles y casos que deben seguir bloqueados.

- Escribir y explicar `if`, `elif`, `else`, condiciones anidadas y expresiones booleanas en Python.

- Combinar expresiones con `and`, `or` y `not`; distinguir «todas», «al menos una» y «ninguna/esta no».

- Construir tablas de verdad y tablas de pruebas para cubrir cada combinación pertinente, incluidas entradas ausentes o desconocidas.

- Separar comprobación digital, acción del mecanismo y señal de retroalimentación para poder probar y revisar cada parte.

- Describir con ejemplos cómo los controles físicos y digitales pueden proteger información, y explicar qué no garantiza una maqueta.

- Dar e incorporar retroalimentación sin revelar datos reales, ni presentar el prototipo como un dispositivo apto para proteger bienes o personas.

**Booleano:** valor de verdad `True` o `False`. **Condición compuesta:** expresión que combina condiciones más simples. **Anidada:** condición dentro de otra rama. **Caso de prueba:** conjunto de entradas y resultado esperado. **Autenticación:** comprobación de identidad en un sistema; en esta actividad no se autentica a ninguna persona, solo se simulan entradas ficticias.

```python
codi_valid = (fitxa == "blava")
confirmacio = boto_premut

if codi_valid and confirmacio:
    print("Mostra de prova autoritzada")
else:
    print("Revisa les entrades")
```

El fragmento es Python general ilustrativo; `boto_premut` y `fitxa` son valores de simulación. El acceso a puertos y sensores SPIKE debe escribirse según la Knowledge Base de la versión de la app instalada.

## 🧰 Materiales y preparación

Un set SPIKE Prime por equipo, hub cargado, dispositivo con app SPIKE y Python disponibles, sensor de fuerza y sensor de color, cables, piezas Technic para un indicador móvil opcional, cartón reutilizado para una estación abierta de mesa, fichas grandes con símbolos y colores, hojas para tablas de verdad, diario de equipo y temporizador de clase. Todo el sistema es visible y accesible: no construyáis cerraduras, cajas cerradas ni mecanismos que retengan objetos. También se puede hacer toda la secuencia sin motor, solo con sensores, LED o simulación en papel.

Preparad entradas ficticias y comprobables: tres fichas de símbolos geométricos, un pulsador/sensor de confirmación, un caso sin ficha y un caso de valor desconocido. No uséis contraseñas reales, nombres, iniciales, fechas de nacimiento ni códigos de acceso del centro. Si queréis tratar buenos hábitos de contraseña, usad un ejemplo inventado en papel y hablad de longitud y unicidad sin pedir que nadie revele las suyas. Comprobad los sensores, puertos y forma de detener el programa con la app local; las API y funciones cambian entre versiones. No conectéis ni desconectéis sensores con la ejecución activa.

Roles rotativos: quién escribe la condición; quién lee los casos de prueba; quién cuida la maqueta y el hub; quién registra resultados. Antes de cada ejecución, todo el equipo predice la rama que se activará. No hay ningún movimiento motorizado obligatorio.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Protegemos la información sin compartir secretos (45 min).**

#### Fase 1 · Activamos y predecimos

**Conversación de entrada (8 min):** presentad tarjetas con situaciones ficticias: un dispositivo pide un código inventado; una persona comparte la clave con toda la clase; una pantalla muestra un nombre; un usuario crea una clave larga única. El alumnado clasifica qué podría proteger la información y qué habría que borrar o no compartir. No se pide que muestren ningún código real.

#### Fase 2 · Exploramos y construimos

**Descomposición (10 min):** identificad el problema del programa ficticio: la respuesta «correcto/incorrecto» no explica qué pasa si falta un dato o si la sesión termina. Escribid una especificación simple: una ficha de prueba concreta activa un mensaje neutro; cualquier otra entrada, incluido ningún valor, muestra «revisa la consigna».

#### Fase 3 · Explicamos y registramos

**Python en papel y editor (20 min):** trazad `if/elif/else` con tres valores simulados y representad cada paso con flechas.

#### Fase 4 · Aplicamos y mejoramos

En parejas, traducid una regla a pseudocódigo y a Python general sin guardar el dato introducido en ningún archivo ni consola. Si usáis editor real, todos los valores son de muestra.

#### Fase 5 · Comprobamos y reflexionamos

**Cierre (7 min):** clasificad las afirmaciones «el programa compara esta entrada» y «el programa sabe quién es la persona»; explicad por qué la primera no demuestra la segunda. Haced una lista de cosas que la maqueta nunca hará.

### **Lección 2 · Una condición dentro de otra, con límites visibles (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (5 min):** juego de decisiones desconectado: se avanza a la siguiente tarjeta solo si se cumple la condición externa; dentro del espacio habilitado, una segunda condición selecciona una de dos respuestas. El alumnado explica cuándo la segunda regla ni siquiera se consulta.

#### Fase 2 · Exploramos y construimos

**Diseño (10 min):** dibujad una maqueta de estación abierta para devolver material de juego a una bandeja. Regla de ejemplo: si hay sesión activa, entonces comprobad que el color sea uno de los dos aceptados; si no hay sesión, mostrad instrucciones de inicio. El color no representa una identidad.

#### Fase 3 · Explicamos y registramos

**Python (20 min):** escribid una condición anidada con valores introducidos manualmente y marcad con corchetes el alcance de cada bloque. Probad las rutas: sesión inactiva; activa con color A; activa con color B; activa con color no admitido. Comparadla con una cadena de `if/elif/else` y discutid qué forma hace más clara la regla en este caso.

#### Fase 4 · Aplicamos y mejoramos

**Prueba física opcional (5 min):** usad el sensor de color con tarjetas grandes; mantened el motor inactivo y comparad el valor leído con la entrada esperada.

#### Fase 5 · Comprobamos y reflexionamos

**Registro (5 min):** anotad qué condición se consulta primero, qué rama no se ha visitado y por qué una condición anidada puede ser difícil de leer si acumula demasiados niveles.

### **Lección 3 · AND, OR y NOT en una tabla de verdad (45 min).**

#### Fase 1 · Activamos y predecimos

**Modelado corporal (8 min):** representad con dos gestos la condición A «ficha de práctica azul» y B «pulsador físico activado». El grupo muestra `and` solo cuando A y B son ciertas, `or` cuando al menos una es cierta y `not` cuando una condición no se cumple. Hablad explícitamente de qué significa OR inclusivo: si las dos son ciertas, sigue siendo cierto.

#### Fase 2 · Exploramos y construimos

**Tabla en equipo (12 min):** completad las cuatro combinaciones de A/B y los resultados esperados para A and B y A or B; añadid una columna para not A. Comparad entre equipos y explicad cualquier fila discrepante.

#### Fase 3 · Explicamos y registramos

**Programa de simulación (18 min):** haced que un indicador de luz/consola comunique los cuatro estados: ninguna comprobación; solo A; solo B; ambas.

#### Fase 4 · Aplicamos y mejoramos

Usad `and`, `or` y `not` en reglas con propósito distinto; no los añadáis todos a una única expresión sin necesidad. Si conectáis sensor y botón, mantened el motor desactivado.

#### Fase 5 · Comprobamos y reflexionamos

**Minirreto (7 min):** encontrad y corregid una regla con `or` donde la especificación pide `and`. Predecid qué caso incorrecto ocurría antes de cambiarla y cómo la tabla permite demostrar la corrección.

### **Lección 4 · Dos comprobaciones, una respuesta prudente (45–90 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta de diseño (10 min):** ¿cómo podemos combinar una ficha de color y la presión de un sensor de fuerza para dar una respuesta de prueba? Definid primero la regla en lenguaje natural, por ejemplo: el ensayo se acepta si la ficha es azul *y* el sensor se pulsa después de que aparezca la ficha; si la ficha no se reconoce, el sistema no interpreta el pulsador como aceptación.

#### Fase 2 · Exploramos y construimos

**Maqueta y pseudocódigo (10–15 min):** colocad el sensor de color de forma fija y reservad el sensor de fuerza como entrada manual; representad en papel qué significa «después» (estado/orden de pasos) en lugar de fingir simultaneidad si el código no la está comprobando. Un equipo puede prototipar con fichas mientras otro diseña el árbol de decisiones.

#### Fase 3 · Explicamos y registramos

**Implementación (15–30 min):** convertid la regla en funciones pequeñas, una para leer cada entrada y una para decidir/mostrar estado. Cread variables booleanas con nombres que describan la condición. Añadid rama para sensor sin lectura, presión antes de tiempo, presión ausente y una combinación no prevista. Solo la consola, la luz o una bandera mecánica de recorrido corto muestran la decisión; el dispositivo no controla ningún acceso real.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas (10–25 min):** ejecutad una tabla de casos, incluyendo ambas entradas falsas, solo A, solo B y ambas ciertas. Repetid una combinación tres veces para observar si el sensor da lecturas estables, e indicad si cada caso se debe al código o a la lectura del sensor.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión:** ¿qué dato recibe el programa? ¿qué regla ha definido el equipo? ¿qué afirmación no podemos hacer sobre la seguridad de un objeto real?

### **Lección 5 · Escape room del aula: abrir una ruta de pistas simulada (90 min).**

#### Fase 1 · Activamos y predecimos

**Encargo (10 min):** cada equipo creará una estación de reto de mesa con dos comprobaciones lógicas, una señal clara y una vía alternativa para que el juego se pueda completar sin sensor si hace falta. No se encierra a nadie dentro de un espacio ni se crean claves secretas. Las «pistas» son fichas públicas y ficticias; el resultado activa una tarjeta de próxima instrucción, no una cerradura. **Ideación (12 min):** cada miembro esboza una microprueba; el equipo elige una con tres criterios: comprensible sin ayuda, comprobable con cuatro o más casos y resoluble con los sensores presentes. Escribid instrucciones cortas y la respuesta correcta en un sobre docente separado.

#### Fase 2 · Exploramos y construimos

**Construcción (18 min):** haced un escenario o recorrido de cartón y colocad estaciones de entrada; si un motor mueve una flecha o señal, delimitad recorrido y velocidad. La estación siempre queda abierta y la parada es accesible.

#### Fase 3 · Explicamos y registramos

**Programa (20 min):** formulad al menos una regla con `and` y una con `or` o `not`, comentadlas con una frase de lenguaje natural y tratad explícitamente entrada inválida o desconocida. Dibujad el árbol de decisión y convertidlo a bloques Python indentados.

#### Fase 4 · Aplicamos y mejoramos

**Validación entre equipos (20 min):** otro equipo intenta resolver el reto sin que le expliquen la respuesta; prueba caso correcto, incompleto, ambiguo y no previsto. Registra si las instrucciones son claras, si el programa ofrece una respuesta sin revelar datos y si cada pista es accesible.

#### Fase 5 · Comprobamos y reflexionamos

**Iteración y muestra (10 min):** el equipo creador mejora una instrucción o una condición y demuestra la versión revisada. Si no se puede probar con sensor, marcad claramente esa parte como simulada en papel.

### **Lección 6 · Retroalimentación, revisión y límites del prototipo (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Visita de prueba (10 min):** otra pareja usa la estación de pistas; el equipo autor observa sin dar indicaciones y anota los puntos donde hace falta ayuda o la lógica produce una salida sorprendente. No se registran voces, nombres ni respuestas personales.

#### Fase 2 · Exploramos y construimos

**Retroalimentación específica (8 min):** usad «he observado…», «la regla dice…», «este caso todavía no está probado…». La retroalimentación trata de una condición, una instrucción o una respuesta, no de la capacidad de los autores.

#### Fase 3 · Explicamos y registramos

**Decisión (5 min):** el equipo marca sugerencias adoptadas o rechazadas y la razón basada en especificación/prueba.

#### Fase 4 · Aplicamos y mejoramos

**Revisión (10 min):** cambiad una rama, una expresión o el texto de la indicación; repetid la misma fila de la tabla y una fila distinta.

#### Fase 5 · Comprobamos y reflexionamos

**Autoevaluación (5–12 min):** explicad la diferencia entre la condición del programa y una garantía de ciberseguridad; identificad una entrada que debería seguir sin respuesta. Puntuaos en privado trabajo colaborativo, documentación y gestión del tiempo, con una acción de mejora para el siguiente reto.

## 🧪 Evidencias y evaluación

Recoged la conversación inicial con ideas anónimas, diagrama de decisiones, tablas de verdad para `and/or/not`, pseudocódigo, código Python con comentarios, configuración del sensor, matriz de pruebas esperadas/no previstas, registro de falsos resultados o lecturas inestables, instrucciones de la estación y una nota sobre privacidad y límites. El reto final se valora en cuatro dimensiones: **razonamiento lógico** (interpreta cada operador y explica la precedencia/agrupación con paréntesis si hace falta); **programación y pruebas** (condiciones correctas, alternativas y entradas ausentes cubiertas); **diseño de interacción** (instrucción y retroalimentación comprensibles, recorrido o control inclusivo); **responsabilidad** (no pide datos reales y no atribuye garantías al prototipo). Usad descriptores «con apoyo / en progreso / autónomo / lo justifica y transfiere». La maqueta no se califica como dispositivo de seguridad real.

## ♿ Inclusión, privacidad y seguridad

Ningún alumno revela contraseñas, patrones de desbloqueo o cuentas; todos los códigos de la situación son públicos y temporales. No uséis datos identificables ni pantallas con información privada. Presentad condiciones con texto, símbolos, gesto y color a la vez; ofreced versiones de gran formato, lectura asistida, papel y entrada manual. Las pistas no requieren rapidez física, audición, distinción de colores ni movimiento por el aula. La estación está abierta, sin cerradura, atrapamiento ni obstáculo en las salidas; ninguna prueba bloquea el paso ni excluye a una persona de una actividad. Los motores, si se usan, mueven solo una flecha ligera dentro de un recorrido corto y delimitado. Detenedlos antes de tocar la maqueta.

## 🔗 Referente oficial y adaptación

Adapta las seis lecciones de la unidad 8 *Compound Conditionals and Logic Operators* del curso LEGO Education [*Introduction to Python Programming · Course 2*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5436c2a0ac31fc17/65e9d0ef2a3929468f30be14/File_2_Units_678910_Intro_to_Python_Course_TG_Course_2.pdf?locale=en-us): *Password Protection*, *Make it Physically Safe*, *Make a Safer Safe*, *Security Operating with Logic*, *Escape Room* e *Ideas to Help with Escape Room*. Mantiene la exploración de protección digital y física, condiciones anidadas, operadores lógicos, entradas de sensor en dos pasos, restricciones de diseño, pruebas, colaboración y retorno entre equipos. La adaptación transforma la caja fuerte y el escape en un juego de mesa abierto para la biblioteca/aula, evita representar cerraduras reales y sustituye cualquier contraseña por valores ficticios que no se almacenan. La guía marca lecciones de 45 minutos, dos de 45–90 minutos y el proyecto Escape Room de 90 minutos; aquí la duración flexible se dedica a construcción, combinaciones de prueba y revisión accesible.
