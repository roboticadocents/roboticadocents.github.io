---
title: "¿Qué hará el robot?"
description: "Predecir recorridos y orientaciones a partir de un código escrito. Ficha A4 de Coding Set, resuelta a mano y sin robot."
robot: coding-set
topic: "Algoritmos"
cycle_label: "Segundo ciclo"
duration: "25 min"
order: 1
---
## 🎯 ¿Qué vamos a aprender?

Predecir recorridos y orientaciones a partir de un código escrito. Actividad individual para 8 años, neutra y descontextualizada: solo hay códigos, casillas y orientaciones. No requiere robot, ordenador, tableta ni piezas físicas.

**Convenciones del papel:** las órdenes se representan con dibujos de las teclas del Tale-Bot o de las piezas del Coding Set, sin abreviaturas con letras. La cuadrícula indica la posición y la dirección iniciales con una flecha llena. El camino de puntos y la flecha vacía indican el recorrido y la orientación que hay que conseguir. Avanzar o retroceder mueve una casilla; girar cambia la dirección sin moverse de casilla. Cada ejercicio empieza de nuevo.

Los números se dibujan en una pieza pequeña debajo del movimiento o del inicio del bucle. Los giros no llevan números. Las piezas de inicio y fin delimitan las órdenes repetidas.

Leed las órdenes de izquierda a derecha y marcad cada cambio de posición u orientación. No hace falta escribir Play: la simulación empieza en la primera orden.

## 🧰 Materiales y preparación

- [Ficha del alumnado: ¿Qué hará el robot? (PDF, 1 página A4)](_assets/activitats/kits/cs-prediu-el-resultat.pdf).
- [Las ocho fichas de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionario del profesorado de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Una copia de la ficha por alumno, lápiz y goma. Imprimid en A4 vertical, al 100 %, en blanco y negro. No repartáis el solucionario.
- La leyenda y todos los datos necesarios aparecen en cada hoja. Dibujad los símbolos en las casillas de respuesta y escribid solo las explicaciones; trazad los movimientos en la cuadrícula.

## 👣 Desarrollo paso a paso

### 1. Movimientos con números

<!-- Inici: B2 N -->
<!-- Codi: A3 D A2 -->
<!-- Objectiu: - -->
<!-- Resposta de control: A3 D A2 -->

**Consigna:** Sigue las piezas. Dibuja el camino y cómo termina mirando.

![Cuadrícula con inicio y, cuando corresponde, camino de puntos y orientación final.](_assets/activitats/kits/cs-prediu-el-resultat-ex1-graella.svg)

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/cs-prediu-el-resultat-ex1-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los mandos.](_assets/activitats/kits/cs-prediu-el-resultat-ex1-resposta.svg)

**Solución docente:** Termina en D5, mirando al este. Hace cinco pasos y un giro: B3, B4, B5, C5 y D5.

### 2. Dos pasos de un bucle

<!-- Inici: B2 N -->
<!-- Codi: REP2[A D] -->
<!-- Objectiu: - -->
<!-- Resposta de control: REP2[A D] -->

**Consigna:** Haz las dos vueltas. Dibuja el camino y la flecha final.

![Cuadrícula con inicio y, cuando corresponde, camino de puntos y orientación final.](_assets/activitats/kits/cs-prediu-el-resultat-ex2-graella.svg)

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/cs-prediu-el-resultat-ex2-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los mandos.](_assets/activitats/kits/cs-prediu-el-resultat-ex2-resposta.svg)

**Solución docente:** Hace dos veces avanzar y girar a la derecha. Visita B3 y C3; termina en C3, mirando al sur.

### 3. Retroceso con parámetro

<!-- Inici: D2 N -->
<!-- Codi: A2 E R2 -->
<!-- Objectiu: - -->
<!-- Resposta de control: A2 E R2 -->

**Consigna:** Dibuja el camino. Fíjate bien en el movimiento hacia atrás.

![Cuadrícula con inicio y, cuando corresponde, camino de puntos y orientación final.](_assets/activitats/kits/cs-prediu-el-resultat-ex3-graella.svg)

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/cs-prediu-el-resultat-ex3-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los mandos.](_assets/activitats/kits/cs-prediu-el-resultat-ex3-resposta.svg)

**Solución docente:** Termina en F4, mirando al oeste. Visita D3, D4, E4 y F4. Los dos pasos hacia atrás lo mueven hacia el este sin cambiar hacia dónde mira.

## ✅ Evidencias de aprendizaje

- Interpreta avance, retroceso y giro sin confundir desplazamiento con orientación.
- Deja una respuesta gráfica y un recorrido verificable para cada ejercicio.
- Justifica el resultado siguiendo las órdenes una a una.

Valorad cada ejercicio de 0 a 2 puntos: 1 por la respuesta correcta y 1 por el trazo o la justificación coherente. Total: 6 puntos. En escritura de código, aceptad alternativas que respeten la ruta ordenada, la orientación final y las restricciones de la consigna; el solucionario da una respuesta posible.

### Preguntas para pensar

- ¿Qué diferencia hay entre girar y desplazarse?
- ¿Por qué necesitamos conocer la orientación inicial?
- ¿Cómo puedes comprobar la respuesta sin disponer del robot?

## ♿ Variantes e inclusión

Leed las consignas en voz alta si hace falta; las respuestas se continúan escribiendo en la ficha. Se puede usar el dedo o un lápiz para seguir el código. Los símbolos son grandes, en blanco y negro; la respuesta se puede dibujar con flechas sencillas. La mascota de contorno se puede colorear al terminar. Para apoyar, resolved oralmente un primer movimiento; para ampliar, cambiad la orientación inicial y volved a calcular el resultado en una hoja auxiliar.

## 🔗 Referente consultado

[Movimientos y números del Coding Set](https://matatalab.com/en/node/61) y [bucles](https://matatalab.com/en/node/62). Las teclas y las piezas se representan con dibujos de contorno simplificados. Los símbolos conservan el sentido de los mandos. Los datos internos de generación quedan en comentarios y no se muestran al alumnado.
