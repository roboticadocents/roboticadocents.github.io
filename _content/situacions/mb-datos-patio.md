---
active: true
title: "Datos que hablan del patio"
description: "¿Cómo podemos recoger datos del patio y convertir una lectura de sensor en una ayuda con límites claros?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "medi"
subject_label: "Ciencias, Matemáticas y Tecnología"
theme: "dades"
theme_label: "Observación y datos responsables"
duration: "5 sesiones"
challenge: "¿Cómo podemos recoger datos del entorno del patio y transformarlos en un prototipo útil sin exponer información personal?"
---

![Una placa micro:bit, tarjetas de datos y un gráfico en blanco representan una investigación escolar del patio.](../../_assets/situacions/mb-dades-pati.webp)

_Los datos describen el entorno y la prueba; no se hacen perfiles de las personas que lo utilizan._

## 🌱 Situación e intención

El consejo escolar pide una observación sencilla del patio: ¿qué lugares tienen más luz, qué zonas son más frescas o cómo se pueden mostrar avisos útiles? Los equipos aprenden a clasificar datos, explorar sensores, diseñar un gadget y programar una condición. La placa muestra un prototipo de aula, no es un termómetro calibrado ni un asistente que escucha conversaciones.

## 📅 Secuencia didáctica · 5 sesiones

### **Sesión 1 · ¿Qué es un dato? (What is data?).**

#### Fase 1 · Activamos y predecimos

Presentad la petición del consejo escolar y mostrad tres ejemplos breves: una lectura de luz, el recuento agregado de tarjetas y la opinión «me gusta esta zona». Antes de clasificarlos, el alumnado predice cuáles se pueden comprobar y cuáles necesitan una explicación personal.

#### Fase 2 · Exploramos y construimos

Clasificad tarjetas ficticias de observaciones ambientales, registros y opiniones. Añadid ejemplos de datos personales, datos agregados y datos del entorno; usad personas inventadas y no pidáis al alumnado que exponga información propia. Cada equipo escribe el criterio que ha utilizado.

#### Fase 3 · Explicamos y registramos

Comparad las clasificaciones y analizad un caso ficticio de uso inadecuado de datos que podría perjudicar a alguien. Distinguid la observación «la placa muestra 120», la interpretación «aquí hay menos luz» y la opinión «prefiero esta zona»; anotad qué prueba podría revisar cada afirmación.

#### Fase 4 · Aplicamos y mejoramos

Revisad qué necesita saber el prototipo para ayudar con una pregunta ambiental y eliminad los datos superfluos. Acordad una norma de clase: no se recogen nombres, imágenes, voces, rutas individuales ni datos de salud; las pruebas se centran en el entorno y se hacen en lugares autorizados.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** clasificación argumentada, tres columnas de observación/interpretación/opinión y norma de recogida. Comprobad si el equipo identifica un dato que no necesita y explica por qué. Pregunta de cierre: «¿Cómo puede cambiar el significado de un dato según quién lo use y con qué propósito?».

### **Sesión 2 · Caza de datos (Data treasure hunt).**

#### Fase 1 · Activamos y predecimos

Elegid una pregunta ambiental que se pueda responder en dos o tres puntos autorizados del patio, como por ejemplo si las lecturas de luz cambian entre sombra y sol. Predecid qué debería mantenerse igual para comparar los puntos y qué variación podría alterar la lectura.

#### Fase 2 · Exploramos y construimos

Haced una caza de datos con un mapa sencillo y códigos de lugar genéricos. Con micro:bit, programad lecturas en MakeCode o usad el simulador identificándolo como tal. Si medís temperatura, recordad que la placa refleja aproximadamente la temperatura del procesador y puede diferir de la del aire; no es un termómetro para salud o seguridad.

#### Fase 3 · Explicamos y registramos

En cada punto comparad lecturas repetidas, manteniendo orientación y altura similares. Registrad hora aproximada, ubicación genérica, unidad y condiciones (sombra, nube, luz próxima); no anotéis quién estaba allí. Separad la lectura observada de la inferencia que hacéis.

#### Fase 4 · Aplicamos y mejoramos

Si los datos varían mucho, repetid la lectura y revisad si se ha movido la placa o ha cambiado la luz natural. Si no disponéis del sensor o del bloque necesario en la versión del kit, usad un conjunto ficticio y marcadlo claramente como simulado, no como una medida real.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa de puntos, programa o simulación etiquetada, y tabla con repeticiones, unidades y condiciones. Preguntad: «¿Qué patrón podemos describir? ¿Qué no podemos afirmar con estos pocos puntos?».

### **Sesión 3 · Diseñar un gadget (Sensor gadget design).**

#### Fase 1 · Activamos y predecimos

Revisad el patrón de la caza de datos y elegid un público y una necesidad de maqueta: por ejemplo, un indicador de luz para un huerto escolar de cartón. Predecid qué debería hacer la ayuda con una lectura baja, intermedia y alta.

#### Fase 2 · Exploramos y construimos

En equipos, diseñad el gadget con una actividad desconectada: una tarjeta de lectura entra, una regla se aplica y un icono o mensaje sale. Escribid un algoritmo con repetición para volver a leer el sensor y una selección para elegir respuesta.

#### Fase 3 · Explicamos y registramos

Dibujad el diagrama de entrada–proceso–salida y elegid criterios verificables: respuesta legible, regla justificable, salida neutra y ningún dato personal. Indicad qué sensor integrado o accesorio externo se utilizaría y qué limitaciones tiene.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad los bocetos con otro equipo y pedidle que ejecute el algoritmo con tres tarjetas de lectura. Revisad una instrucción ambigua o una salida sin camino de vuelta. Si el sensor no forma parte de la dotación, mantened el prototipo como simulación, sin atribuirle una lectura real.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** esquema, algoritmo con repetición/selección y comprobación con tarjetas. Comprobad que el diseño responde a una necesidad concreta y que la respuesta se puede explicar. Preguntad: «¿Qué haría el sistema si la lectura quedara entre dos casos?».

### **Sesión 4 · Datos, condiciones y selección (Data conditions & selection).**

#### Fase 1 · Activamos y predecimos

Recuperad los criterios del gadget y elegid un umbral justificado por las lecturas locales, no un valor universal. Predecid qué debería pasar por debajo, exactamente en el umbral y por encima; decidid qué mensaje neutro aparecerá si la lectura es dudosa.

#### Fase 2 · Exploramos y construimos

Programad una repetición de lecturas y una condición que compare el dato con el umbral, por ejemplo mostrar un icono si la luz es baja. Representad el código con pseudocódigo o bloques y marcad dónde entra la lectura, dónde se toma la decisión y qué salida se muestra.

#### Fase 3 · Explicamos y registramos

Probad tres valores —bajo, igual al umbral y alto— y registrad lectura, condición activada e icono esperado. Comparad valores alrededor del umbral y explicad cómo cambia la salida cuando cambia el dato.

#### Fase 4 · Aplicamos y mejoramos

Probad el comportamiento en otro punto autorizado y revisad falsas alertas. Si una sombra o la orientación altera el resultado, ajustad el montaje o el umbral y volved a pasar los tres casos; no ocultéis las pruebas anteriores.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** programa, tabla de casos y cambio de depuración justificado. El resultado es un aviso informativo, nunca una alarma térmica o de seguridad. Preguntad: «¿Qué lecturas pueden hacer que la condición se comporte de una manera inesperada?».

### **Sesión 5 · Un asistente digital (Digital assistants).**

#### Fase 1 · Activamos y predecimos

Mirad ejemplos de asistentes digitales y preguntad qué entradas reciben y quién ha escrito las posibles respuestas. Predecid cómo se podría hacer una ayuda local sin micrófono ni conexión: un menú de dos opciones para el huerto o el juego de patio.

#### Fase 2 · Exploramos y construimos

Construid un asistente de menú que responde a A/B con una propuesta preprogramada: observar la sombra, revisar una planta o elegir una ruta de juego. Escribid primero las tarjetas de opción y asignad una respuesta concreta a cada botón.

#### Fase 3 · Explicamos y registramos

Dibujad el mapa de estados: inicio, opción A, opción B y retorno. Indicad qué datos usa el programa —botón pulsado y regla elegida— y cuáles no usa —voz, ubicación individual, identidad o datos de salud—. Explicad que las respuestas las ha escrito el equipo.

#### Fase 4 · Aplicamos y mejoramos

Otra pareja prueba cada botón sin recibir instrucciones de los autores y registra si llega a la opción prevista. Depurad una salida sin camino de vuelta o un botón sin respuesta, y repetid la prueba tras el cambio.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** programa, mapa de estados y registro de prueba cruzada con una mejora. No hay micrófono, conversación ni decisión inteligente: es una secuencia local con condiciones escritas por el equipo. Pregunta final: «¿Qué hace que esta ayuda sea digital y qué continúa dependiendo de las personas que la han diseñado?».

## 🎯 Aprendizajes y vocabulario

- Distinguir una observación, un dato y una interpretación, y registrar fuente y condiciones de medida.
- Comparar lecturas repetidas y describir variabilidad, casos dudosos y límites del sensor.
- Diseñar un prototipo con una regla explícita que transforma una entrada en una respuesta.
- Comunicar una propuesta útil sin recoger datos personales ni presentar una lectura como medida profesional.

## 🧰 Materiales y preparación

BBC micro:bit, MakeCode, ordenador, tarjetas, lápices y hoja de registro. Los sensores de luz, brújula, acelerómetro y temperatura varían según la versión y el entorno; confirmad los bloques y las limitaciones de la placa disponible. No hace falta conexión a internet ni cuenta de usuario.

## 🧪 Evidencias y evaluación

Recoged una clasificación de datos, plan de muestreo, tabla con unidades y condiciones, diagrama de entrada-proceso-salida, programa con condición y pruebas alrededor del umbral. Valorad si las conclusiones respetan los límites del sensor y si el gadget resuelve una necesidad concreta sin recoger datos personales.

## Ficha de investigación y secuencia de trabajo

Para cada lectura, el equipo completa: pregunta, lugar genérico, sensor o fuente, valor y unidad, condición observada, repetición y duda. En la sesión 1, comparad una observación («la placa muestra 120») con una interpretación («aquí hay menos luz») y una opinión («prefiero esta zona»). Separadlas en tres columnas y acordad cuál se puede comprobar con una prueba.

En la caza de datos, haced dos o tres puntos de medida comparables y repetid cada lectura manteniendo orientación y altura similares. No hace falta cubrir todo el patio: un muestreo pequeño y bien explicado es más útil que una colección de valores sin procedimiento. Anotad si una sombra, una nube o el calentamiento de la placa pueden haber cambiado el resultado. Si el sensor no está disponible o los bloques varían entre versiones, usad un conjunto ficticio marcado como simulado y no lo presentéis como medida real.

## Del patrón observado al prototipo

Después de representar las lecturas con una tabla o pictograma, cada equipo selecciona una necesidad concreta del proyecto escolar. Dibuja una cadena de entrada, proceso y salida: el sensor obtiene una lectura; una condición la compara con un umbral; la placa muestra un icono o un mensaje. El grupo justifica el umbral con sus propias pruebas y anota qué pasaría justo por encima o por debajo. Probad tres valores —bajo, igual al umbral y alto— y confirmad la salida esperada antes de probar el programa en otro lugar.

Para el menú del asistente digital, haced un mapa de estados sencillo: inicio, opción A, opción B y retorno. Un compañero prueba cada botón sin recibir instrucciones de los autores y registra si llega a la opción prevista. Este control de estados ayuda a detectar una salida sin camino de vuelta o un botón sin respuesta; no implica ningún procesamiento de voz ni inteligencia artificial.

## Rúbrica y retorno entre equipos

Revisad cinco criterios con «con apoyo / en proceso / de manera clara»: clasifica datos y opiniones; documenta condiciones de medida; representa el sistema con entrada, proceso y salida; prueba el umbral con casos próximos; y comunica una limitación concreta del sensor. Cada equipo muestra el prototipo a otra pareja, que intenta seguir las instrucciones y propone una pregunta, no una nota. La versión revisada incluye al menos un cambio justificado a partir de este retorno.

## 🔒 Privacidad y fiabilidad

Medid espacios con autorización y no anotéis quién estaba allí. Repetid lecturas y registrad variaciones de orientación, sombras o calentamiento de la placa. Las lecturas son aproximadas; un cambio o una correlación no demuestra por sí solo una causa ni permite generalizar a todo el centro.

## 🔗 Unidad oficial adaptada

Esta situación adapta las cinco lecciones de micro:bit [Data handling](https://microbit.org/teach/lessons/data-handling-unit-summary/): *What is data?*, *Data treasure hunt*, *Sensor gadget design*, *Data conditions & selection* y *Digital assistants*. Los puntos de recogida, el gadget, los datos de ejemplo y las preguntas son propios; se mantienen los objetivos de datos, sensores, algoritmos, condiciones, diseño y depuración.
