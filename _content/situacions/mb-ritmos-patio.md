---
active: true
title: "Ritmos del patio en código"
description: "¿Cómo podemos escribir, programar y evaluar una pieza musical original con micro:bit?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "artistica"
subject_label: "Música y Tecnología"
theme: "art"
theme_label: "Música y expresión"
duration: "5 sesiones"
challenge: "¿Cómo podemos convertir una idea rítmica en instrucciones que otras personas y la micro:bit puedan interpretar?"
---

![Una placa micro:bit acompaña una partitura simbólica de ritmos inventados por el alumnado.](../../_assets/situacions/mb-ritmes-pati.webp)

_La pieza es original y puede escucharse con la placa, instrumentos de aula, luz o notación visual._

## 🌱 Situación, reto e intención

El patio de la escuela acogerá una muestra sonora breve. Cada equipo crea una pieza original, escribe instrucciones para un público concreto e investiga cómo la micro:bit puede interpretar notas, pausas y gestos. La situación recorre las cinco lecciones oficiales de *Musical micro:bit*, combinando algoritmos desconectados, composición, selección, acelerómetro, programación y evaluación.

## 🎯 Aprendizajes y vocabulario

- Transformar una idea musical en símbolos, duraciones e instrucciones interpretables.
- Programar una pieza con las salidas sonoras disponibles y depurar su ritmo y sus pausas.
- Comparar una interpretación de la placa con una interpretación humana y revisar la partitura para que se pueda seguir.
- Comunicar decisiones de composición y ofrecer una participación visual o silenciosa equivalente.

## 📅 Secuencia didáctica · 5 sesiones

### **Sesión 1 · Algoritmos musicales (Musical algorithms).**

#### Fase 1 · Activamos y predecimos

Escuchad patrones breves creados por el grupo y representad notas y pausas con símbolos acordados. Antes de interpretar uno, predecid el orden de los sonidos y el lugar del silencio.

#### Fase 2 · Exploramos y construimos

Acordad símbolos para sonido corto, sonido largo, silencio y repetición, además de inicio y final. Cada equipo escribe una pieza original de 20–40 segundos con tres o cuatro sonidos y una leyenda clara.

#### Fase 3 · Explicamos y registramos

Una persona interpreta la partitura con percusión corporal o instrumentos suaves y otra la sigue con el dedo; después intercambiad los roles. Anotad las interpretaciones diferentes y las instrucciones que han resultado ambiguas.

#### Fase 4 · Aplicamos y mejoramos

Revisad la notación para que indique mejor duraciones, pausas o repeticiones. No corrijáis a la persona que interpreta: haced que la partitura comunique con más precisión. Probadla de nuevo con otra pareja.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué ha hecho que el algoritmo sea interpretable para un público que no lo ha escrito. **Evidencia:** partitura con leyenda, prueba entre parejas y versión revisada.

### **Sesión 2 · Programar y depurar música (Programming & debugging music).**

#### Fase 1 · Activamos y predecimos

Leed una secuencia de MakeCode con notas, duraciones y una repetición. Predecid el orden y la duración antes de escucharla; comparadla con la partitura de la sesión anterior.

#### Fase 2 · Exploramos y construimos

Elegid una frase corta y programadla con bloques de notas, duraciones y repeticiones. Haced primero funcionar una frase de dos sonidos, añadid una pausa explícita y después repetid una sección. Usad el altavoz integrado en micro:bit V2; con V1, usad solo una salida de audio autorizada por el centro o interpretadla con instrumentos de aula.

#### Fase 3 · Explicamos y registramos

Ejecutad la pieza y anotad el orden de los bloques, el resultado esperado y lo que se ha oído o representado. Registrad cualquier diferencia entre la predicción y la salida.

#### Fase 4 · Aplicamos y mejoramos

Cuando el resultado no corresponda a la predicción, revisad la selección de notas, las duraciones, el orden de los bloques y las repeticiones, en ese orden. Cambiad un elemento y volved a probar; anotad el error inicial, la hipótesis y el resultado posterior.

#### Fase 5 · Comprobamos y reflexionamos

Comparad la versión inicial y la depurada y explicad qué cambio ha resuelto la diferencia. **Evidencia:** partitura, código con pausa o repetición y tabla de errores corregidos.

### **Sesión 3 · Gestos musicales (Musical gestures).**

#### Fase 1 · Activamos y predecimos

Una persona dirige con gestos acordados y el equipo predice qué instrucción corresponde a cada gesto: repetir, elegir una de dos notas o hacer una pausa.

#### Fase 2 · Exploramos y construimos

Traducid los gestos en instrucciones e incorporadlos a la partitura. Elegid un público concreto y preparad una notación visual que pueda seguir la pieza sin depender de la lectura musical convencional.

#### Fase 3 · Explicamos y registramos

Intercambiad la partitura con otro grupo y registrad qué gestos se han interpretado de más de una manera y qué parte de la notación ha causado la duda.

#### Fase 4 · Aplicamos y mejoramos

Añadid un símbolo, una leyenda o un ejemplo breve para resolver la ambigüedad. Volved a dirigir la secuencia y comprobad que los gestos y la partitura concuerdan.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué instrucción se ha aclarado y cómo lo habéis comprobado con el público elegido. **Evidencia:** partitura visual, leyenda de gestos y comentarios de la prueba.

### **Sesión 4 · Controlamos la música con entradas (Controlling music with inputs).**

#### Fase 1 · Activamos y predecimos

Elegid un evento sencillo —por ejemplo, el botón A inicia o cambia de motivo— y representadlo en una tarjeta. Predecid qué variación activará y qué debe pasar si no llega ninguna entrada.

#### Fase 2 · Exploramos y construimos

Programad un botón o movimiento de la placa para que active una variación sonora con condiciones. Comparad la activación por botón y por acelerómetro con movimientos suaves y voluntarios. Ensayad el movimiento de la placa sobre una mesa y comprobad que el umbral no activa la música accidentalmente.

#### Fase 3 · Explicamos y registramos

Una persona ejecuta las entradas y otra registra la respuesta prevista y observada, incluidas las activaciones no deseadas. Explicad qué condición del programa decide la variación.

#### Fase 4 · Aplicamos y mejoramos

Ajustad el umbral si hace falta y repetid las pruebas. Mantened un botón o control de dirección como alternativa equivalente; nadie debe sacudir la placa ni hacer un movimiento que no le resulte accesible o cómodo.

#### Fase 5 · Comprobamos y reflexionamos

Comprobad si la entrada activa el motivo previsto y si hay una alternativa para cada participante. **Evidencia:** tarjeta de evento, código con condición y registro de pruebas de entrada.

### **Sesión 5 · Evaluamos la música de micro:bit (Evaluating micro:bit music).**

#### Fase 1 · Activamos y predecimos

Retomad la pieza e identificad el ritmo acordado, la repetición y una condición que se podría modificar sin perder el patrón.

#### Fase 2 · Exploramos y construimos

Haced el reto de modificación: cambiad una condición o una repetición. Preparad el código o la partitura para que una persona que no ha programado pueda seguir la demostración.

#### Fase 3 · Explicamos y registramos

Presentad la partitura o el código antes de interpretarlo. La audiencia responde: ¿qué patrón ha reconocido?, ¿en qué momento ha sentido el silencio?, ¿qué parte se podría representar con luz o con un gesto? El retorno describe la experiencia, no califica el gusto musical ni la capacidad de nadie.

#### Fase 4 · Aplicamos y mejoramos

Revisad una parte de la pieza a partir del retorno. Si no conviene usar sonido, mostrad una animación LED estática con el ritmo representado en secuencia o dirigid una interpretación silenciosa con tarjetas.

#### Fase 5 · Comprobamos y reflexionamos

Valorad cuándo la placa ayuda a hacer música y cuándo conviene una alternativa acústica, visual o corporal. **Evidencia:** pieza revisada, retorno de la audiencia y autoevaluación del medio elegido.

## 🧰 Materiales y compatibilidad

BBC micro:bit, MakeCode, instrumentos de aula opcionales, tarjetas de símbolos y un altavoz de bajo volumen si hace falta. El sonido integrado está disponible en micro:bit V2; confirmad las salidas de audio de la placa concreta antes de preparar la actividad. No es necesario grabar ni reproducir voces.

## 🧪 Evidencias y evaluación

Recoged partitura simbólica, algoritmo para un público, código con una iteración, tabla de errores corregidos y una valoración del medio elegido. Valorad si las instrucciones son interpretables, si el programa responde a los eventos previstos y si la propuesta admite diversas formas de participación.

## Partitura común y proceso de composición

Antes de programar, acordad cuatro símbolos: sonido corto, sonido largo, silencio y repetición. Añadid un símbolo de inicio y otro de final para que la otra clase sepa cuándo escuchar. La pieza puede durar entre 20 y 40 segundos y usar solo tres o cuatro sonidos, lo que facilita probar su orden sin tener que leer notación convencional. Cada equipo escribe una leyenda que explica qué significa cada marca y deja una casilla para anotar una variación.

En la primera prueba, una persona interpreta la partitura con percusión corporal o instrumentos suaves y otra la sigue con el dedo. Después intercambian roles. Si las dos interpretaciones son diferentes, no corrijáis a la persona: revisad la notación para que indique mejor la duración o el silencio. El docente puede mostrar una secuencia de MakeCode con notas, duraciones y una repetición y pedir que el grupo prediga el orden antes de escucharla.

## Programación, entradas y depuración

Haced primero funcionar una frase de dos sonidos. Añadid después una pausa explícita y, finalmente, repetid una sección. Para controlarla, definid un evento sencillo —el botón A inicia o cambia de motivo— y representadlo en una tarjeta. Si se usa el acelerómetro, ensayad un movimiento suave de la placa sobre una mesa y comprobad que el umbral no activa la música accidentalmente. Mantened el botón o la dirección como alternativa equivalente; no hace falta que nadie sacuda la placa.

Cuando el resultado no corresponde a la predicción, revisad en este orden: selección de notas, duraciones, orden de los bloques, repeticiones y evento de entrada. Cambiad un elemento y volved a escuchar. Anotad el error inicial, la hipótesis y el resultado posterior; así el alumnado muestra una estrategia de depuración, no solo un producto final logrado.

## Muestra y retorno de la audiencia

Preparad una muestra en la que cada equipo presente el código o la partitura antes de interpretarla. La audiencia puede responder con tres preguntas: ¿qué patrón ha reconocido?, ¿en qué momento ha sentido el silencio? y ¿qué parte se podría representar con luz o con un gesto? El retorno describe la experiencia, no califica el gusto musical ni la capacidad de nadie. Si no conviene usar sonido, el equipo muestra una animación LED estática con el ritmo representado en secuencia o dirige una interpretación silenciosa con tarjetas.

## Criterios observables y ajustes

Usad una escala de tres niveles para observar si la partitura tiene leyenda, si el orden se puede seguir, si el programa integra una pausa o repetición, si una entrada activa la acción prevista y si el equipo puede explicar una revisión. Aceptad evidencias en formato oral, escrito, visual o de demostración. Mantened el volumen bajo y las pruebas breves; ofreced auriculares solo si la política del centro y las necesidades individuales lo recomiendan, y permitid siempre una opción sin sonido.

## ♿ Participación y cuidado auditivo

Ofreced notación, luz, percusión suave, instrumentos o dirección como alternativas equivalentes. Mantened el volumen moderado y permitid trabajar sin estímulos sonoros. La interpretación con movimiento es opcional y no se puntúa la precisión física.

## 🔗 Unidad oficial adaptada

Esta situación adapta las cinco lecciones de micro:bit [Musical micro:bit](https://microbit.org/teach/lessons/musical-microbit-unit-overview/): *Musical algorithms*, *Programming & debugging music*, *Musical gestures*, *Controlling music with inputs* y *Evaluating micro:bit music*. Las piezas, los ritmos, las tarjetas y la evaluación son originales y cubren algoritmos, repetición, selección, entradas y salidas.
