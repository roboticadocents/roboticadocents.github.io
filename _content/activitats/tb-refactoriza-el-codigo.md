---
title: "Refactoriza el código"
description: "Abreviar un programa sin alterar la secuencia de órdenes ejecutadas. Ficha A4 de Tale-Bot, resuelta a mano y sin robot."
robot: tale-bot
topic: "Patrones"
cycle_label: "Segundo ciclo"
duration: "25 min"
order: 4
---

## 🎯 ¿Qué vamos a aprender?

Abreviar un programa sin alterar la secuencia de órdenes ejecutadas. Actividad individual para 8 años, neutra y descontextualizada: solo hay códigos, casillas y orientaciones. No requiere robot, ordenador, tableta ni piezas físicas.

**Convenciones del papel:** las órdenes se representan con dibujos de las teclas del Tale-Bot o de las piezas del Coding Set, sin abreviaturas con letras. La cuadrícula indica la posición y la dirección iniciales con una flecha llena. El camino de puntos y la flecha vacía indican el recorrido y la orientación que hay que conseguir. Avanzar o retroceder mueve una casilla; girar cambia la dirección sin moverse de casilla. Cada ejercicio empieza de nuevo.

La repetición afecta a toda la base. «2 veces» significa dos ejecuciones totales, no una más dos. No se utilizan bucles parciales ni números de movimiento.

**Refactorizar** significa conservar todas las órdenes elementales en el mismo orden: llegar a la misma casilla no basta. No vale eliminar idas y vueltas o giros que se compensan.

## 🧰 Materiales y preparación

- [Ficha del alumnado: Refactoriza el código (PDF, 1 página A4)](_assets/activitats/kits/tb-refactoritza-el-codi.pdf).
- [Las ocho fichas de Tale-Bot (PDF, 8 páginas A4)](_assets/activitats/kits/tb-fitxes-paper.pdf).
- [Solucionario del profesorado de Tale-Bot (PDF, 8 páginas A4)](_assets/activitats/kits/tb-solucions-paper.pdf).
- Una copia de la ficha por alumno, lápiz y goma. Imprimid en A4 vertical, al 100 %, en blanco y negro. No repartáis el solucionario.
- La leyenda y todos los datos necesarios aparecen en cada hoja. Dibujad los símbolos en las casillas de respuesta y escribid solo las explicaciones; trazad los movimientos en la cuadrícula.

## 👣 Desarrollo paso a paso

### 1. Una unidad que se repite

<!-- Inici: B2 N -->
<!-- Codi: A D A D -->
<!-- Objectiu: A D A D -->
<!-- Resposta de control: REP2[A D] -->

**Consigna:** Dibuja el trozo que se repite. ¿Cuántas veces hay que hacerlo?

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/tb-refactoritza-el-codi-ex1-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los comandos.](_assets/activitats/kits/tb-refactoritza-el-codi-ex1-resposta.svg)

**Solución docente:** La base es avanzar y girar a la derecha. Se ejecuta dos veces en total. Se guardan dos teclas en lugar de cuatro; acaba en C3, mirando al sur.

### 2. Encuentra el patrón

<!-- Inici: D2 N -->
<!-- Codi: A A E A A E A A E -->
<!-- Objectiu: A A E A A E A A E -->
<!-- Resposta de control: REP3[A A E] -->

**Consigna:** Busca el trozo repetido. Dibújalo e indica cuántas veces se hace.

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/tb-refactoritza-el-codi-ex2-codi.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los comandos.](_assets/activitats/kits/tb-refactoritza-el-codi-ex2-resposta.svg)

**Solución docente:** La base son dos avances y un giro a la izquierda. Se ejecuta tres veces en total. Se guardan tres teclas en lugar de nueve; acaba en B2, mirando al este.

### 3. ¿Se puede abreviar así?

<!-- Inici: B2 N -->
<!-- Codi: A D A D A -->
<!-- Objectiu: A D A D A -->
<!-- Resposta de control: A D A D A -->
<!-- Proposta: REP3[A D] -->

**Consigna:** ¿La propuesta hace exactamente lo mismo? Rodea sí o no.

**Código dado:**

![Secuencia de teclas o piezas con símbolos de movimiento.](_assets/activitats/kits/tb-refactoritza-el-codi-ex3-codi.svg)

**Propuesta que hay que comprobar:**

![Dos teclas con repetición global de tres ejecuciones.](_assets/activitats/kits/tb-refactoritza-el-codi-ex3-proposta.svg)

**Respuesta gráfica de control:**

![Solución con dibujos de los comandos.](_assets/activitats/kits/tb-refactoritza-el-codi-ex3-resposta.svg)

**Solución docente:** No son equivalentes: la propuesta añade un giro a la derecha al final. El original acaba en C2, mirando al sur; la propuesta, en C2, mirando al oeste. Hay que conservar las cinco teclas originales porque no son una repetición exacta de una base más corta.

## ✅ Evidencias de aprendizaje

- Interpreta avance, retroceso y giro sin confundir desplazamiento con orientación.
- Deja una respuesta gráfica y un recorrido verificable para cada ejercicio.
- Comprueba la equivalencia desplegando las dos versiones del código.

Valorad cada ejercicio de 0 a 2 puntos: 1 por la respuesta correcta y 1 por la traza o justificación coherente. Total: 6 puntos. En escritura de código, aceptad alternativas que respeten la ruta ordenada, la orientación final y las restricciones de la consigna; el solucionario da una respuesta posible.

### Preguntas para pensar

- ¿Qué diferencia hay entre girar y desplazarse?
- ¿Por qué necesitamos conocer la orientación inicial?
- ¿Cómo demuestras que los dos códigos ejecutan exactamente las mismas órdenes?

## ♿ Variantes e inclusión

Leed las consignas en voz alta si hace falta; las respuestas se continúan escribiendo en la ficha. Se puede usar el dedo o un lápiz para seguir el código. Los símbolos son grandes, en blanco y negro; la respuesta se puede dibujar con flechas sencillas. La mascota de contorno se puede colorear al terminar. Para apoyar, resolved oralmente un primer movimiento; para ampliar, cambiad la orientación inicial y volved a calcular el resultado en una hoja auxiliar.

## 🔗 Referente consultado

[Comandos y repetición de Tale-Bot Pro](https://matatalab.com/en/lesson4.2). Las teclas y las piezas se representan con dibujos de contorno simplificados. Los símbolos conservan el sentido de los comandos. Los datos internos de generación quedan en comentarios y no se muestran al alumnado.
