---
active: true
title: "Palabras en tarjetas digitales"
description: "¿Cómo podemos crear flashcards digitales con micro:bit para practicar vocabulario y secuencias en lenguas?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "llengua"
subject_label: "Lenguas, Arte y Tecnología"
theme: "llengua"
theme_label: "Vocabulario y representación"
duration: "5 sesiones"
challenge: "¿Cómo podemos diseñar una tarjeta digital que ayude a recordar vocabulario con iconos, secuencias y tiempos de espera?"
---

![Una placa micro:bit junto a tarjetas en blanco con iconos sencillos para practicar vocabulario.](../../_assets/situacions/mb-targetes-paraules.webp)

_Las palabras y los iconos se eligen con la clase de lenguas y se representan mediante secuencias LED._

## 🌱 Situación y intención

La clase prepara un juego de tarjetas para repasar vocabulario de inglés, valenciano u otra lengua que estén aprendiendo. Primero crea algoritmos claros para que una persona presente una pista y la otra responda; después programa una selección de palabras como imágenes LED. La matriz 5×5 obliga a abstraer, no a escribir palabras largas: las tarjetas físicas conservan la ortografía, el sonido y el significado.

## 🎯 Aprendizajes y vocabulario

- Seleccionar vocabulario adecuado al grupo y representarlo con texto breve o iconos propios.
- Programar una tarjeta con secuencia, patrón, pausa y una entrada de control.
- Probar si la tarjeta ayuda a otra pareja a recordar o reconocer una palabra sin prisa.
- Crear alternativas legibles que no dependan solo del color, la velocidad de lectura o la respuesta oral.

## 📅 Secuencia didáctica · 5 sesiones de 45 minutos

### **Sesión 1 · Algoritmos de flashcards (Flashcard algorithms).**

#### Fase 1 · Activamos y predecimos

Elegid ocho palabras de una unidad ya trabajada, como animales u objetos de clase. En parejas, repartid los roles de quien muestra la pista y quien responde. Predecid qué instrucciones necesita la otra persona desde que aparece el icono hasta que llega el turno de respuesta.

#### Fase 2 · Exploramos y construimos

Escribid una secuencia de instrucciones con inicio, pista, tiempo para pensar, respuesta y cambio de turno. Intercambiad roles y probad las instrucciones con una pareja nueva, sin explicarlas oralmente.

#### Fase 3 · Explicamos y registramos

Anotad en qué paso se ha detenido la pareja o ha interpretado una instrucción de otra manera. Si «espera un poco» es ambiguo, identificad qué no queda definido: duración, señal para continuar o momento de respuesta.

#### Fase 4 · Aplicamos y mejoramos

Sustituid instrucciones ambiguas por una pausa acordada y una señal clara para continuar. Volved a probar la tarjeta con una pareja que no la haya creado.

#### Fase 5 · Comprobamos y reflexionamos

Comprobad si cualquier pareja puede usar la tarjeta sin ayuda de los autores. **Evidencia:** algoritmo inicial, prueba externa, instrucciones revisadas y tarjeta en papel.

### **Sesión 2 · Abstracción y programación (Abstraction & programming).**

#### Fase 1 · Activamos y predecimos

Seleccionad cuatro palabras conocidas y determinad qué característica visual sería imprescindible para reconocer cada una. Predecid qué se perderá al reducir una imagen a 25 píxeles.

#### Fase 2 · Exploramos y construimos

Dibujad un icono 5×5 para cada palabra y pasad la secuencia a MakeCode. Mantened la palabra completa en la tarjeta física: la matriz LED es una pista visual, no una representación ortográfica exhaustiva.

#### Fase 3 · Explicamos y registramos

Comparad dos versiones de cada icono y anotad qué característica han conservado y qué han simplificado. Guardad la cuadrícula, el programa y la justificación.

#### Fase 4 · Aplicamos y mejoramos

Pasad las tarjetas a un grupo que no haya participado en el diseño. Pedid que explique qué interpreta antes de revelar la respuesta y revisad el icono si las pistas no resultan claras.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué aporta la imagen digital y qué continúan aportando la ortografía, el sonido y el significado de la tarjeta física. **Evidencia:** vocabulario seleccionado, cuatro cuadrículas, programa y retorno de la prueba externa.

### **Sesión 3 · Patrones y pausas (Patterns & delays).**

#### Fase 1 · Activamos y predecimos

Elegid tres flashcards y ordenadlas en un patrón repetido. Predecid en qué momento aparecerá cada pista y cuánto tiempo necesita el jugador antes de responder.

#### Fase 2 · Exploramos y construimos

Representad el patrón con iconos de papel y después programadlo en MakeCode con una pausa entre pista y respuesta. La transición será una pausa seguida de una imagen estable; no uséis parpadeos rápidos.

#### Fase 3 · Explicamos y registramos

Probad dos duraciones de espera y registrad qué ha podido hacer la audiencia en cada caso. Dejad que las personas participantes indiquen qué duración les facilita el turno.

#### Fase 4 · Aplicamos y mejoramos

Ajustad la pausa según el retorno y volved a probar el mismo patrón. Mantened constantes las demás instrucciones para poder comparar el efecto del cambio.

#### Fase 5 · Comprobamos y reflexionamos

Comprobad que el orden se conserva y que hay tiempo suficiente para pensar o pasar el turno. **Evidencia:** secuencia en papel y código, comparación de duraciones y decisión justificada.

### **Sesión 4 · Predecir y experimentar (Predicting & experimenting).**

#### Fase 1 · Activamos y predecimos

Antes de ejecutar el programa, dibujad los LED que esperáis ver y describid cuándo aparecerá cada imagen. Planificad una tarjeta numérica con los criterios acordados por el grupo.

#### Fase 2 · Exploramos y construimos

Probad el boceto en el simulador o en la placa. Comparad distintas maneras de controlar los LED e incorporad la tarjeta numérica siguiendo la misma convención que los iconos de vocabulario.

#### Fase 3 · Explicamos y registramos

Comparad la predicción con el resultado y registrad qué instrucción o evento ha producido una diferencia. Si el icono no aparece como se esperaba, revisad cuadrícula, orden de los bloques y entradas.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una sola instrucción cada vez y volved a ejecutar la prueba. Comprobad si la tarjeta numérica respeta el orden y la leyenda compartidos.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué prueba ha confirmado o refutado la predicción y qué parte del programa se ha revisado. **Evidencia:** dibujo previo, tarjeta numérica, programa y registro de pruebas.

### **Sesión 5 · Depurar y evaluar (Debugging & evaluating).**

#### Fase 1 · Activamos y predecimos

Intercambiad la flashcard con otra pareja, que la probará sin instrucciones orales de los autores. Antes de empezar, acordad los criterios: icono visible, pausa suficiente, secuencia correcta, respuesta en el momento esperado y opción de pasar.

#### Fase 2 · Exploramos y construimos

La pareja probadora recorre el juego y registra qué entiende, cuándo recibe la pista y si puede pasar o pedir que se repita. No evaluéis la rapidez ni la pronunciación en una lengua que el alumnado está aprendiendo.

#### Fase 3 · Explicamos y registramos

Comparad los resultados con la lista de criterios y describid un punto concreto que haya dificultado el juego. Aceptad respuestas orales, escritas, señaladas o con comunicación aumentativa.

#### Fase 4 · Aplicamos y mejoramos

Depurad un elemento y documentad qué ha cambiado. Volved a probar la tarjeta y comparad la claridad y el tiempo de espera.

#### Fase 5 · Comprobamos y reflexionamos

Valorad qué ayuda a practicar la micro:bit y qué requiere voz, escritura o una tarjeta grande. **Evidencia:** pruebas entre parejas, criterios observados, cambio depurado y valoración final.

## 🧰 Materiales y preparación

BBC micro:bit física o simulador, MakeCode, tarjetas de vocabulario, hojas 5×5 para esbozar píxeles y una ficha para cada tarjeta con cinco campos: palabra y significado, pista visual, secuencia, prueba externa y revisión. Seleccionad palabras que el alumnado ya haya trabajado y acordad la lengua con el docente del área. No hace falta conexión externa ni ninguna cuenta de usuario.

## 🧪 Evidencias y evaluación

Recoged el algoritmo inicial, el vocabulario seleccionado, las cuadrículas de iconos, las predicciones, el programa, las pruebas entre parejas y la revisión de los criterios. La ficha de cada palabra documenta significado, simplificación visual, secuencia, interpretación externa y cambio aplicado. Valorad si las instrucciones se entienden, si el código respeta la secuencia y si la representación digital complementa el vocabulario sin sustituir su forma escrita u oral.

## ♿ Participación, accesibilidad y seguridad

Rotad los roles de creador/a de vocabulario, dibujante de píxeles, programador/a y probador/a; con pocas placas, haced primero la secuencia entera en papel. Ofreced contraste alto, imágenes estáticas, tarjetas impresas con letra grande y lectura en voz alta. La persona puede trabajar con el simulador u observar una demostración; aceptad respuestas orales, escritas, señaladas o con comunicación aumentativa. Dad tiempo para pensar, repetid la pista cuando se pida y permitid pasar el turno. No evaluéis la rapidez ni la pronunciación en una lengua que el alumnado está aprendiendo. No mostréis secuencias LED intermitentes rápidas ni uséis la placa como único canal de información.

## 🔗 Referentes y adaptación

- Micro:bit Educational Foundation, [Digital flashcards](https://microbit.org/teach/lessons/digital-flashcards-unit-of-work/): unidad de cinco lecciones para alumnado de 7–8 años; la página publica los objetivos de cada lección y la secuencia de vocabulario, algoritmos, iconos, patrones, pausas, experimentación y depuración. El material oficial está bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Esta adaptación cambia el contexto, el vocabulario, los iconos, los criterios de prueba y las fichas de trabajo. No reutiliza las imágenes ni los materiales imprimibles de la unidad original. Se comparte bajo la misma licencia CC BY-SA 4.0.
