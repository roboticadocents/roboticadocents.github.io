---
title: "Una función, distintos lugares"
description: "Reconocer qué conserva una función cuando cambia la posición o la orientación inicial. Ficha A4 sin robot."
robot: coding-set
topic: "Abstracción"
cycle_label: "Segundo ciclo"
duration: "30 min"
order: 7
---
## 🎯 ¿Qué vamos a aprender?

Reconocer qué conserva una función cuando cambia la posición o la orientación inicial. Actividad individual para alumnado de 8 años, neutra, sobre papel y sin robot.

Un avance o retroceso mueve una casilla; un giro cambia la orientación sin desplazarse. La flecha llena indica el inicio. Los puntos indican el recorrido y la flecha vacía, la orientación final deseada. Cada ejercicio empieza de nuevo.

La **definición** va en una fila inferior y no se ejecuta por sí misma. La fila principal contiene las **llamadas**. Cada llamada ejecuta todas las órdenes de la función y después continúa la principal. No pongáis números debajo de definir ni de llamar: las funciones no admiten piezas de número. Solo usamos una función, sin recursividad.

El **bucle** repite solo las piezas entre el inicio y el fin. El número va debajo del inicio del bucle. Una llamada puede estar dentro del bucle. «3 vueltas» significa tres ejecuciones totales. Los iconos son representaciones de contorno simplificadas; la leyenda diferencia cada pieza.

## 🧰 Materiales y preparación

- [Ficha del alumnado (PDF, 1 página A4)](_assets/activitats/kits/cs-una-funcio-diferents-llocs.pdf).
- [Las ocho fichas de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionario de Coding Set (PDF, 8 páginas A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Lápiz y goma. Imprimid en A4 vertical al 100 %, en blanco y negro. Reservad el solucionario al profesorado.

## 👣 Desarrollo paso a paso

### 1. Desde otro lugar

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: F -->
<!-- Objectiu: A D A -->
<!-- Funcio: A D A -->
<!-- Principal: F -->
<!-- Resposta de control: F -->
<!-- Comparacio: D2 N -->

**Consigna:** Ejecuta la misma función desde los dos inicios. ¿Qué se conserva?

![Recorrido e inicio del ejercicio.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex1-graella.svg)

**Definición de referencia:**

![Fila inferior: definición de la función.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex1-funcio.svg)

**Respuesta gráfica de control:**

![Fila principal con llamadas y bucles.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex1-resposta.svg)

**Solución docente:** Desde B2 termina en C3 mirando al este; desde D2 termina en E3 mirando al este. Se conservan la forma y la orientación del recorrido.

### 2. La figura también gira

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: F -->
<!-- Objectiu: A D A -->
<!-- Funcio: A D A -->
<!-- Principal: F -->
<!-- Resposta de control: F -->
<!-- Comparacio: E3 O -->

**Consigna:** Ejecuta la función desde los dos inicios. ¿Cambia el código si el robot empieza mirando al oeste?

![Recorrido e inicio del ejercicio.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex2-graella.svg)

**Definición de referencia:**

![Fila inferior: definición de la función.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex2-funcio.svg)

**Respuesta gráfica de control:**

![Fila principal con llamadas y bucles.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex2-resposta.svg)

**Solución docente:** Desde B2 N termina en C3 E. Desde E3 O termina en D4 N. No cambia el código: se conserva la forma, pero el recorrido gira.

### 3. Elige qué se conserva

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: F -->
<!-- Objectiu: A2 D A -->
<!-- Funcio: A2 D A -->
<!-- Principal: F -->
<!-- Resposta de control: F -->
<!-- Comparacio: E2 O -->

**Consigna:** Compara los dos recorridos. Rodea qué se conserva: forma / casilla final / longitudes.

![Recorrido e inicio del ejercicio.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex3-graella.svg)

**Definición de referencia:**

![Fila inferior: definición de la función.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex3-funcio.svg)

**Respuesta gráfica de control:**

![Fila principal con llamadas y bucles.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex3-resposta.svg)

**Solución docente:** Desde B2 N termina en C4 E. Desde E2 O termina en C3 N. Se conservan la forma y las longitudes; la casilla final y la orientación cambian.

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
