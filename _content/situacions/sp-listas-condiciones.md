---
active: true
title: "Lógica para una escuela abierta"
description: "Seis lecciones SPIKE Prime para crear listas, comparar secuencias, combinar condiciones, seguir líneas y prototipar una alerta escolar segura."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Educación en Valores"
theme: "logica"
theme_label: "Listas, condiciones y servicios escolares"
duration: "6 lecciones · 8–10 sesiones"
challenge: "¿Cómo puede una maqueta leer una secuencia, aplicar reglas explícitas y responder a una ruta sin tratarla como un sistema de seguridad real?"
---

![Base móvil LEGO SPIKE Prime sigue una pista de colores hacia una estación de clasificación escolar de papel.](../../_assets/situacions/sp-llistes-condicions.webp)

_Una lista guarda una secuencia; las condiciones deciden qué acción corresponde a cada lectura._

## 🌱 Reto y contexto

La escuela prepara una jornada de puertas abiertas y necesita ensayar, solo en maqueta, cómo dar indicaciones a visitantes, ordenar tarjetas de ruta y avisar cuando una secuencia no coincide con el plan. Los equipos programarán listas de lecturas de color, compararán dos secuencias posición por posición, harán que una base recorra una línea y cree bloques propios para reutilizar procedimientos. En el mini-reto final construirán un señalizador de mesa que reacciona a un movimiento de maqueta y a una tarjeta de color acordada. La situación adapta las seis lecciones de la unidad 7 *Arrays, Boolean Expressions, and Conditionals* de *Foundations of Physical Computing*. Las tarjetas y rutas representan información inventada: ningún montaje identifica personas, controla puertas ni protege ningún espacio.

## 🎯 Aprendizajes y contenidos

- Crear y leer una **lista** como una secuencia ordenada, distinguiendo sus elementos y sus posiciones; comprender que el orden y la repetición tienen significado.

- Usar sensores para añadir valores a una lista, interpretar las lecturas que genera el sensor de color y verificarlas con una muestra de referencia, sin dar por hecho que cualquier papel se detecta igual.

- Comparar dos listas elemento a elemento, detectar la primera diferencia y emplear condiciones con `y`, `o`, `no`, igualdad y desigualdad.

- Construir una condición compuesta a partir de predicados simples; predecir su resultado con una tabla de casos antes de ejecutarla.

- Descomponer el programa en subprocedimientos reutilizables («mis bloques»), documentar su función y depurar por componentes.

- Modelar el seguimiento de una línea con sensor de color, ajustarlo mediante pruebas y comunicar los límites del prototipo.

- Relacionar el diseño de servicios escolares con profesiones de turismo, acogida y administración pública.

## 🗺️ Preparación del reto

Antes de empezar, montad una base móvil estable con el sensor de color orientado hacia abajo y comprobad que los puertos coinciden con el programa. Preparad una pista corta sobre cartulina mate, con tramos blancos y negros y una zona de parada en un color que el sensor pueda leer de forma consistente; añadid al lado una tira de colores que sirva de control. Haced una prueba con la luz real del aula, la distancia al papel y el umbral de detección. Marcad un área de circulación libre y limitad la velocidad. Si no hay sensor o la lectura no es estable, el alumnado puede introducir las lecturas en una tabla manual y probar la misma lógica sin robot; anotad que es simulación.

Organizad equipos de tres o cuatro con roles rotativos: diseño de casos de prueba, programación, calibración/registro y comunicación. Cada equipo mantiene un diario breve por sesión con predicción, cambio efectuado, resultado y siguiente paso. Reservad piezas del set en bandejas, cargad los hubs y asegurad un dispositivo con la app SPIKE. La secuencia no depende de un modelo «Game Master» o «Quality Check» de las lecciones LEGO ni reproduce sus instrucciones de montaje.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Crear una lista legible por máquina (90 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cómo guardamos el orden de una ruta para que se pueda leer después? En parejas, poned cinco tarjetas de color en una bolsa opaca y sacadlas una a una, colocándolas de izquierda a derecha en una tira numerada. Registrad la secuencia dos veces: una con palabras y otra con códigos numéricos asignados por el grupo. Haced una segunda extracción devolviendo cada tarjeta a la bolsa antes de sacar otra; comparadla con una extracción sin reposición y explicad por qué en una pueden repetirse colores y en la otra no.

#### Fase 2 · Exploramos y construimos

Cread en la app una lista llamada `Lectures`, inicializadla vacía, leed una tarjeta con el sensor y añadid su valor en intervalos acordados. Si la lectura no es estable, introducid los valores manualmente y marcad la prueba como simulación.

#### Fase 3 · Explicamos y registramos

Antes de programar la secuencia completa, escribid pseudocódigo y trazadlo con cinco tarjetas. La versión Python es una representación textual de la lógica para analizar sobre papel; no se ejecuta en la app SPIKE.

```pseudocode
quan comença
  buida Lectures
  repeteix 5 vegades
    valor ← llig_color()
    afegeix valor a Lectures
    espera fins a la següent targeta
  mostra Lectures
```

```python
lectures = []
for _ in range(5):
    valor = input("Color llegit: ")
    lectures.append(valor)
print(lectures)
```

#### Fase 4 · Aplicamos y mejoramos

Probad cinco entradas en un orden conocido y comprobad que el orden registrado coincide. Repetid con una lectura inesperada y revisad qué guarda la lista en cada posición.

#### Fase 5 · Comprobamos y reflexionamos

**Discusión y evidencia:** ¿qué información desaparecería si solo contáramos cuántos colores de cada tipo hay? ¿Qué significa una lectura inesperada? Cerrad con una definición propia de lista, un ejemplo y un contraejemplo.

### **Lección 2 · Comparar dos itinerarios (90–135 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cuándo son iguales dos secuencias y cómo localizamos el primer desacuerdo? Cada equipo recibe dos rutas ficticias de cinco estaciones, representadas por piezas o tarjetas en fila. Predecid si son iguales y señalad dónde esperáis encontrar el primer desacuerdo.

#### Fase 2 · Exploramos y construimos

Escribid un algoritmo que compare el primer elemento de cada lista, continúe solo si coinciden e indique «coincidencia» cuando todas las posiciones son iguales; si una posición difiere, guardad la primera posición discrepante y detened la comparación.

#### Fase 3 · Explicamos y registramos

Trazad manualmente tres casos —listas iguales, diferencia inicial y diferencia final— y registrad las posiciones consultadas y el resultado. Anotad qué tiene que pasar cuando las longitudes no coinciden.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad el pseudocódigo con otro equipo para que lo pruebe con listas sorpresa, incluida una secuencia de longitud desigual; anotad si falla o produce un falso positivo. Si la app permite listas e índices, implementad la comparación con lecturas de color de dos tiras; si no, mantened las listas en papel y programad la condición con los bloques equivalentes disponibles.

#### Fase 5 · Comprobamos y reflexionamos

Completad una tabla de verdad para dos elementos y comparad la regla «todos iguales» (AND) con «al menos uno coincide» (OR). **Evidencia:** procedimiento probado y explicación de por qué el orden forma parte de los datos.

### **Lección 3 · Leer una línea y simplificar el programa (90 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿cómo transforma una lectura del sensor en correcciones repetidas? En una primera práctica desconectada, una persona hace de robot y otra da instrucciones «si lees oscuro, gira ligeramente hacia la línea; si lees claro, corrige hacia el otro lado». Predecid qué pasará si el robot llega a una marca no prevista.

#### Fase 2 · Exploramos y construimos

El grupo identifica los subproblemas que se repiten. Con la base móvil y el sensor de color, probad primero una regla sencilla de parada en una línea oscura; después seguid una pista ancha leyendo el valor reflejado/color, ajustando la dirección y repitiendo.

#### Fase 3 · Explicamos y registramos

Usad datos en directo para comprobar qué detecta el sensor, haced una primera vuelta a velocidad baja y marcad dónde se sale o oscila. Anotad la luz, la anchura de línea, el umbral, la velocidad y la orientación de la prueba.

#### Fase 4 · Aplicamos y mejoramos

Modificad una sola cosa por prueba. Añadid deliberadamente una línea de color no acordada y observad si la regla la confunde. Descomponed el programa en bloques propios con nombres funcionales —por ejemplo `SeguirPista` y `AturarEnMarca`— y volved a llamarlos desde el programa principal.

![SPIKE Prime de la dotación junto a dos secuencias de tarjetas de color; una tarjeta diferente se revisa con una lupa antes de probar la ruta.](../../_assets/situacions/sa-sp-llistes-condicions-sequencies.webp)

_Las tarjetas modelan dos listas ordenadas; la lupa señala la primera diferencia que hay que comprobar. No es una lectura automática del robot._

#### Fase 5 · Comprobamos y reflexionamos

Comparad la legibilidad del programa original y del reutilizable. **Evidencia:** pista probada, registro de una iteración y explicación de los límites: el seguimiento no es robusto en cualquier superficie o iluminación.

### **Lección 4 · Condiciones compuestas y bloques reutilizables (90 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿qué tiene que ser cierto para que la maqueta dé una indicación? Diseñad una estación ficticia que solo active «continúa» si el robot está dentro de la zona de prueba *y* ha leído el color acordado. Predecid qué ocurre cuando solo se cumple una de las dos condiciones.

#### Fase 2 · Exploramos y construimos

Representad la regla con frases simples y símbolos. Añadid *o* para que dos colores alternativos muestren «consulta el mapa», y *no* para indicar que una condición no se ha cumplido sin convertir la ausencia en una alarma.

#### Fase 3 · Explicamos y registramos

Completad tablas de verdad y casos de prueba, incluyendo valores justo por encima y por debajo de la distancia elegida. Especificad si *o* es inclusivo o exclusivo en cada regla.

#### Fase 4 · Aplicamos y mejoramos

Programad el comportamiento en bloques propios con comentarios; si la app admite parámetros, haced un bloque configurable, y si no, explicad la limitación y reutilizad valores fijos. Probad todos los casos y trazad uno inesperado. Introducid un error deliberado en un bloque secundario y usad la descomposición para encontrarlo.

#### Fase 5 · Comprobamos y reflexionamos

Comparad el programa original con la versión descompuesta. **Evidencia:** casos probados y explicación en lenguaje natural de «A y B», «A o B» y «no A», sin ambigüedad sobre el operador *o*.

### **Lección 5 · Mini-reto: indicador de acceso a una maqueta (90–135 min).**

#### Fase 1 · Activamos y predecimos

**Reto:** prototipar un indicador de mesa para una jornada de puertas abiertas que detecte la llegada de un objeto de prueba y pida una secuencia de colores ficticia para elegir una ruta dentro de la maqueta. No protege ninguna puerta ni controla el paso de personas. Predecid qué errores podrían aparecer en una secuencia leída.

#### Fase 2 · Exploramos y construimos

Definid requisitos medibles: aviso solo después del marcador de proximidad; secuencia de dos o tres colores correcta y en orden; «revisar ruta» y reinicio ante una diferencia; como máximo un aviso por intento. Escribid pseudocódigo y un diagrama de estados antes de conectar los sensores y las luces/sonidos del hub.

#### Fase 3 · Explicamos y registramos

Cread listas para la secuencia esperada y la leída, combinad operadores y descomponed aviso, lectura y reinicio en bloques propios. Preparad una matriz de pruebas: proximidad ausente/presente; secuencia correcta; primer o segundo color incorrecto; orden invertido; retirada durante la lectura; reinicio después de error.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad la matriz, registrad fallos y haced al menos una iteración. Si el kit o la app no ofrece una función necesaria, usad un botón del hub, una entrada manual o tarjetas, e identificadlo como alternativa.

#### Fase 5 · Comprobamos y reflexionamos

Demostrad el prototipo a otro equipo y revisad cada requisito. **Evidencia:** diagrama, código, matriz de pruebas y límites declarados; no afirméis autenticación ni seguridad real.

### **Lección 6 · Profesiones que organizan una visita (60–90 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta:** ¿qué conocimientos hacen que un servicio de acogida sea útil, inclusivo y comprensible? Predecid qué información necesita una persona que llega a una visita escolar y qué decisión debe seguir en manos de una persona.

#### Fase 2 · Exploramos y construimos

Explorad roles de recepción, guía, interpretación, accesibilidad, organización de eventos y administración municipal con fuentes públicas preparadas por la docente. Distinguid profesión, tarea diaria, competencias, formación y responsabilidades; comparad las necesidades de una visita escolar, de un museo y de una oficina de información turística.

#### Fase 3 · Explicamos y registramos

Cada equipo elige un perfil sin vincularlo con las preferencias personales de ningún alumno y representa con piezas o cartón un punto de información o parte de un itinerario accesible. Conectad una tarea con el uso de listas y condiciones y anotad una decisión que requeriría escuchar a las personas usuarias.

#### Fase 4 · Aplicamos y mejoramos

Revisad si la maqueta ofrece indicaciones comprensibles para más de una persona usuaria. Haced un cambio de diseño a partir de una pregunta o necesidad de accesibilidad identificada.

#### Fase 5 · Comprobamos y reflexionamos

Preparad una explicación de un minuto con una decisión humana que el prototipo no puede tomar, una pregunta para las personas usuarias y un límite de la maqueta. Haced una galería y una autoevaluación voluntaria y privada sobre habilidades practicadas y una pregunta por investigar.

## 🧩 Modelo de razonamiento

Antes de programar, representad verbalmente las condiciones y después comprobadlas con casos. Para una estación de maqueta, `prop_i_color_correcte` solo es cierta si las dos pruebas son ciertas; si falta cualquier lectura, la señal no se activa. Una regla inclusiva de ruta puede ser `color_blau_o_color_vermell`. Una tabla de verdad con todas las combinaciones impide confiar solo en el caso feliz y hace visible qué significa cada operador. Para listas, escribid las posiciones iniciales y comparad los elementos en el mismo orden. Esta notación es apoyo conceptual: los bloques exactos, la gestión de índices y los valores disponibles pueden variar según la versión de la app.

## 🧰 Materiales y organización

Set SPIKE Prime 45678, hub cargado, base móvil con sensor de color y, para el mini-reto, sensor de distancia; dispositivo con app SPIKE, cartulina clara/mate, cinta opaca para líneas, tarjetas de color de muestra, tiras de secuencias, piezas grandes de clasificación, obstáculos blandos, papel y cuaderno. No se requieren los modelos oficiales Game Master o Quality Check Robot. Preparad tarjetas accesibles con palabras/símbolos además del color, y una variante manual completa cuando la lectura del sensor no sea fiable. Reducid la velocidad, mantened la base dentro de la pista y detened el programa antes de reposicionarla.

## 🧪 Evaluación y evidencias

Guardad listas de ejemplo, pseudocódigo leído por otro equipo, registros de sensor, comparador probado con coincidencia/diferencia/desigualdad de longitud, tablas de verdad, programa segmentado en bloques propios, registro de iteraciones del seguidor de línea y matriz de pruebas del mini-reto. Usad una escala descriptiva de cuatro niveles para: (1) estructura y orden de las listas; (2) corrección de condiciones y operadores; (3) pruebas que incluyen casos límite y depuración documentada; (4) reutilización clara de bloques; (5) comunicación de límites y colaboración. No puntuéis solo que el robot «funcione»: el alumnado puede demostrar comprensión con simulación en papel o explicación trazada cuando hay limitaciones de hardware. Coevaluación: identifica una prueba que falta y propone cómo añadirla.

## ♿ Accesibilidad, privacidad y cuidado

Permitid trabajar con secuencias táctiles, tarjetas etiquetadas y pseudocódigo en lugar de discriminar colores visualmente. Ningún alumno debe actuar como «visitante» bajo una falsa alarma, compartir intereses profesionales personales ni describir situaciones de seguridad de su casa. Todos los datos son inventados y se refieren a tarjetas u objetos de maqueta. Evitad tonos de alarma intensos; ofreced señal visual, patrón suave o texto equivalente. Distribuid los roles y asegurad que todo el mundo puede contribuir a una parte técnica o de diseño sin tener que conducir el robot.

## 🔗 Referente oficial y adaptación

Adapta las seis lecciones de la unidad 7 *Arrays, Boolean Expressions, and Conditionals* del curso LEGO Education [*Foundations of Physical Computing*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt1b4345f429fde833/64d3828c455bf62b71f9b840/Foundation_of_Physical_Computing_Course_SPIKE_3_2022.pdf?locale=en-gb): *Intro to Arrays (Lists) & Compound Conditionals*, *Comparing Arrays (Lists)*, *Conditionals and Simplifying Code*, *Conditionals and Boolean Expressions*, *Mini-Challenge: Security Alarm Using Operators* y *Connecting to Careers: Hospitality & Tourism and Government & Public Administration*. Mantiene la creación y lectura de listas con sensor, la secuencia aleatoria/reposición como idea de reto, la comparación de secuencias, el seguimiento de línea y los bloques propios, la lógica compuesta, la prueba iterativa de un dispositivo y la búsqueda profesional; cambia los juegos, objetos y contextos por recursos originales de una jornada escolar. El prototipo de indicador es expresamente no seguro y no se usa para proteger personas o espacios.
