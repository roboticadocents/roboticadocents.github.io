---
title: "Refactoriza el código"
description: "Abreviar un programa sin alterar la secuencia de órdenes ejecutadas. Ficha A4 de Coding Set, resuelta a mano y sin robot."
robot: coding-set
topic: "Patrones"
cycle_label: "Segundo ciclo"
duration: "25 min"
order: 4
---
## 🎯 ¿Qué vamos a aprender?

Abreviar un programa sin alterar la secuencia de órdenes ejecutadas. Actividad individual para 8 años, neutra y descontextualizada: solo hay códigos, casillas y orientaciones. No requiere robot, ordenador, tableta ni piezas físicas.

**Convenciones del papel:** las órdenes se representan con dibujos de las teclas del Tale-Bot o de las piezas del Coding Set, sin abreviaturas con letras. La cuadrícula indica la posición y la dirección iniciales con una flecha llena. El camino de puntos y la flecha vacía indican el recorrido y la orientación que hay que conseguir. Avanzar o retroceder mueve una casilla; girar cambia la dirección sin moverse de casilla. Cada ejercicio empieza de nuevo.

Los números se dibujan en una pieza pequeña debajo del movimiento o del inicio del bucle. Los giros no llevan números. Las piezas de inicio y fin delimitan las órdenes repetidas.

**Refactorizar** significa conservar todas las órdenes elementales en el mismo orden: llegar a la misma casilla no basta. No vale eliminar idas y venidas o giros que se compensan.

## 🧰 Materiales y preparación

- [Ficha del alumnado: Refactoriza el código (PDF, 1 página A4)](_assets/activitats/kits/cs-refactoritza-el-codi.pdf).
- [Las ocho fichas de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionario del profesorado de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Una copia de la ficha por alumno, lápiz y goma. Imprimid en A4 vertical, al 100 %, en blanco y negro. No repartáis el solucionario.
- La leyenda y todos los datos necesarios aparecen en cada hoja. Dibujad los símbolos en las casillas de respuesta y escribid solo las explicaciones; trazad los movimientos en la cuadrícula.

## 👣 Desarrollo paso a paso

### 1. Agrupa movimientos iguales

<!-- Inici: C2 N -->
<!-- Codi: A A A D R R -->
<!-- Objectiu: A A A D R R -->
<!-- Resposta de control: A3 D R2 -->

**Consigna:** Junta los movimientos iguales con piezas de número.

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/cs-refactoritza-el-codi-ex1-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los mandos.](_assets/activitats/kits/cs-refactoritza-el-codi-ex1-resposta.svg)

**Solución docente:** Avanzar con el número 3, girar a la derecha y retroceder con el número 2. Termina en A5, mirando al este. Las seis piezas originales pasan a cinco: tres de movimiento y dos números.

### 2. Sustituye la repetición

<!-- Inici: B2 N -->
<!-- Codi: A D A D A D A D -->
<!-- Objectiu: A D A D A D A D -->
<!-- Resposta de control: REP4[A D] -->

**Consigna:** Cambia las repeticiones por un bucle. Dibuja todas las piezas.

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/cs-refactoritza-el-codi-ex2-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los mandos.](_assets/activitats/kits/cs-refactoritza-el-codi-ex2-resposta.svg)

**Solución docente:** Un bucle de cuatro vueltas con avanzar y girar a la derecha. Termina en B2, mirando al norte. Ocho piezas pasan a cinco: inicio, número 4, avanzar, girar y fin de bucle.

### 3. Deja el último giro fuera

<!-- Inici: B2 N -->
<!-- Codi: A A D A A D A A D E -->
<!-- Objectiu: A A D A A D A A D E -->
<!-- Resposta de control: REP3[A2 D] E -->

**Consigna:** Usa un bucle y números. El último giro se hace solo una vez.

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/cs-refactoritza-el-codi-ex3-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los mandos.](_assets/activitats/kits/cs-refactoritza-el-codi-ex3-resposta.svg)

**Solución docente:** Un bucle de tres vueltas con avanzar con el número 2 y girar a la derecha. Después del bucle, un giro a la izquierda. Termina en D2, mirando al sur. Diez piezas pasan a siete, contando los números. El último giro queda fuera del bucle.

## ✅ Evidencias de aprendizaje

- Interpreta avance, retroceso y giro sin confundir desplazamiento con orientación.
- Deja una respuesta gráfica y un recorrido verificable para cada ejercicio.
- Comprueba la equivalencia desplegando las dos versiones del código.

Valorad cada ejercicio de 0 a 2 puntos: 1 por la respuesta correcta y 1 por el trazo o la justificación coherente. Total: 6 puntos. En escritura de código, aceptad alternativas que respeten la ruta ordenada, la orientación final y las restricciones de la consigna; el solucionario da una respuesta posible.

### Preguntas para pensar

- ¿Qué diferencia hay entre girar y desplazarse?
- ¿Por qué necesitamos conocer la orientación inicial?
- ¿Cómo demuestras que los dos códigos ejecutan exactamente las mismas órdenes?

## ♿ Variantes e inclusión

Leed las consignas en voz alta si hace falta; las respuestas se continúan escribiendo en la ficha. Se puede usar el dedo o un lápiz para seguir el código. Los símbolos son grandes, en blanco y negro; la respuesta se puede dibujar con flechas sencillas. La mascota de contorno se puede colorear al terminar. Para apoyar, resolved oralmente un primer movimiento; para ampliar, cambiad la orientación inicial y volved a calcular el resultado en una hoja auxiliar.
## 🔗 Referente consultado

[Movimientos y números del Coding Set](https://matatalab.com/en/node/61) y [bucles](https://matatalab.com/en/node/62). Las teclas y las piezas se representan con dibujos de contorno simplificados. Los símbolos conservan el sentido de los mandos. Los datos internos de generación quedan en comentarios y no se muestran al alumnado.
