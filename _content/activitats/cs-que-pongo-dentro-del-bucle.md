---
title: "¿Qué pongo dentro del bucle?"
description: "Identificar la unidad repetida y delimitarla con las piezas de inicio y fin de bucle. Ficha A4 sin robot."
robot: coding-set
topic: "Patrones"
cycle_label: "Segundo ciclo"
duration: "30 min"
order: 6
---
## 🎯 ¿Qué vamos a aprender?

Identificar la unidad repetida y delimitarla con las piezas de inicio y fin de bucle. Actividad individual para alumnado de 8 años, neutra, sobre papel y sin robot.

Un avance o retroceso mueve una casilla; un giro cambia la orientación sin desplazarse. La flecha llena indica el inicio. Los puntos indican el recorrido y la flecha vacía, la orientación final deseada. Cada ejercicio empieza de nuevo.

La **definición** va en una fila inferior y no se ejecuta por sí misma. La fila principal contiene las **llamadas**. Cada llamada ejecuta todas las órdenes de la función y después continúa la principal. No pongáis números debajo de definir ni de llamar: las funciones no admiten piezas de número. Solo usamos una función, sin recursividad.

El **bucle** repite solo las piezas entre el inicio y el fin. El número va debajo del inicio del bucle. Una llamada puede estar dentro del bucle. «3 vueltas» significa tres ejecuciones totales. Los iconos son representaciones de contorno simplificadas; la leyenda diferencia cada pieza.

## 🧰 Materiales y preparación

- [Ficha del alumnado (PDF, 1 página A4)](_assets/activitats/kits/cs-que-pose-dins-del-bucle.pdf).
- [Las ocho fichas de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionario de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Lápiz y goma. Imprimid en A4 vertical al 100 %, en blanco y negro. Reservad el solucionario al profesorado.

## 👣 Desarrollo paso a paso

### 1. Repite solo el escalón

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: REP3[A D A E] -->
<!-- Funcio: - -->
<!-- Principal: REP3[A D A E] -->
<!-- Resposta de control: REP3[A D A E] -->

**Consigna:** Dibuja un bucle de tres vueltas para seguir los tres escalones.

![Recorrido e inicio del ejercicio.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex1-graella.svg)

**Respuesta gráfica de control:**

![Fila principal con llamadas y bucles.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex1-resposta.svg)

**Solución docente:** Entre inicio y fin van avanzar, derecha, avanzar e izquierda. El número 3 va debajo del inicio. Termina en E5 mirando al norte.

### 2. La aproximación queda fuera

<!-- Mode: coding -->
<!-- Inici: B1 N -->
<!-- Codi: - -->
<!-- Objectiu: A REP2[A D A E] -->
<!-- Funcio: - -->
<!-- Principal: A REP2[A D A E] -->
<!-- Resposta de control: A REP2[A D A E] -->

**Consigna:** Haz un avance inicial y después dos escalones. Repite solo los escalones.

![Recorrido e inicio del ejercicio.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex2-graella.svg)

**Respuesta gráfica de control:**

![Fila principal con llamadas y bucles.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex2-resposta.svg)

**Solución docente:** El avance inicial se hace una vez. El bucle repite dos veces el escalón. Termina en D4 mirando al norte.

### 3. También hay un tramo final

<!-- Mode: coding -->
<!-- Inici: B1 N -->
<!-- Codi: - -->
<!-- Objectiu: A REP2[A D A E] D A -->
<!-- Funcio: - -->
<!-- Principal: A REP2[A D A E] D A -->
<!-- Resposta de control: A REP2[A D A E] D A -->

**Consigna:** Dibuja el inicio y el fin del bucle. Deja fuera el avance inicial y el giro y avance finales.

![Recorrido e inicio del ejercicio.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex3-graella.svg)

**Respuesta gráfica de control:**

![Fila principal con llamadas y bucles.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex3-resposta.svg)

**Solución docente:** El bucle de dos vueltas contiene solo el escalón. Después del fin hay derecha y avanzar. Termina en E4 mirando al este.

## ✅ Evidencias de aprendizaje

- Distingue la definición de la función y las llamadas de la fila principal.
- Delimita correctamente qué se repite y qué se ejecuta una sola vez.
- Comprueba posiciones, orientaciones y recorrido; no solo la casilla final.

Valorad cada ejercicio de 0 a 2 puntos: 1 por el resultado y 1 por la comprobación o justificación. Aceptad otras soluciones que respeten la ruta y todas las restricciones de la consigna.

### Preguntas para pensar

- ¿Definir una función hace que el robot empiece a ejecutarla?
- ¿Dónde continúa el programa cuando termina una llamada?
- ¿Qué cambia si una pieza queda fuera del bucle?
## ♿ Variantes e inclusión

Leed las consignas en voz alta si hace falta. Seguid la simulación con el dedo y marcad las órdenes ya ejecutadas. Las respuestas se dibujan con piezas de contorno en blanco y negro. Para apoyar, proporcionad la función resuelta; para ampliar, cambiad el número de repeticiones y comprobad la ruta hacia el tablero.
## 🔗 Referente consultado

[Funciones de Coding Set](https://matatalab.com/en/node/63) y [bucles de Coding Set](https://matatalab.com/en/node/62). La definición va en una fila inferior; los números no se combinan con piezas de función y sí con el inicio del bucle. Los iconos editables son esquemas didácticos, no reproducciones exactas de las piezas.
