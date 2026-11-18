---
title: "Coding Set: bloques numéricos y parámetros de movimiento"
description: "Comparar las órdenes de avance con y sin parámetro numérico y comprobar qué movimientos aceptan este bloque."
robot: coding-set
level: "Intermedio"
duration: 40 min
order: 2
image: _assets/tutorials/cs-motors-sensors.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced avanzar el MatataBot tres casillas con tres piezas de movimiento y después con una sola pieza y el número 3. Los números modifican el avance y el retroceso, pero no los giros. El robot base no mide casillas ni detecta la cuadrícula.

- Relacionar los bloques numéricos con las órdenes de movimiento que pueden modificar.
- Comparar una secuencia de avance con varias órdenes y una orden con parámetro.
- Explicar el límite de los bloques numéricos: se aplican a avanzar o retroceder, no a los giros.

![](../../_assets/tutorials/cs-motors-sensors.webp)

## 🧰 Materiales y preparación

- Coding Set de la dotación: MatataBot, Control Tower, tablero y bloques de movimiento y números.
- Mapa o cuadrícula plana con casillas de 10 cm, si el modelo disponible usa esta escala.
- Una marca para identificar el punto y la orientación iniciales.

Cargad el robot y la torre. Poned el MatataBot en la casilla de inicio, alineado con la cuadrícula; emparejadlo con la torre y confirmad la señal de conexión. Antes de empezar, identificad las piezas de movimiento y comprobad cómo se dispone el número en el tablero según la guía de vuestro modelo.

## 🧩 Funciones y controles

- Torre de control que lee visualmente las piezas del tablero y envía el programa al MatataBot por Bluetooth.
- Órdenes de movimiento tangible: avanzar, retroceder y girar 90° a izquierda o derecha.
- Bloques numéricos como parámetro para repetir un número de veces una orden de avance o retroceso.
- Ejecución ordenada del programa después de leer el tablero y pulsar el botón de inicio.

## 👣 Paso a paso

### 1. Comparad dos disposiciones de piezas

Dibujad una ruta recta de tres casillas y marcad la orientación inicial del robot. Representadla primero con tres bloques de avance, sin poner las piezas en el tablero. Comprobad el orden de lectura de las piezas antes de pulsar el botón de inicio.

Preparad **Adelante → Adelante → Adelante** y pulsad el botón grande. Devolved el robot al inicio, retirad las tres piezas del tablero y colocad **Adelante** con el número **3** debajo, tal como muestra la guía del kit. Pulsad el botón y comparad dónde se detiene.

Comparad las dos disposiciones del tablero:

```coding-set
avanzar -> avanzar -> avanzar
```

```coding-set
avanzar -> 3
```

Repetid con Atrás si hay espacio libre detrás. El número indica cuántas veces se hace el movimiento de avanzar o retroceder, no centímetros ni velocidad.

### 2. Comprobad el límite de los giros

Añadid un giro de 90° al final de la ruta y observad que el robot gira sin avanzar de casilla. Según la guía del fabricante, los bloques numéricos no se aplican a los giros izquierda/derecha: para hacer dos giros, colocad dos piezas de giro o utilizad las piezas de bucle.

```coding-set
avanzar -> 3 -> girar derecha
```

### 3. Corregid el programa

Cambiad solo el valor del número y comprobad el desplazamiento después de cada ejecución. Si el resultado no coincide, revisad la orientación de la pieza, la posición del número en el tablero, el orden de lectura y la alineación inicial del robot. Anotad si el error provenía del programa, de la lectura o de la colocación sobre la cuadrícula.

## 🧪 Comprobación y resolución de problemas

Comprobad que tres piezas Adelante y una pieza Adelante con el número 3 producen el mismo desplazamiento. Si difieren, revisad la posición del número, el orden de lectura y la alineación inicial del robot. No cambiéis a la vez el programa y la superficie.

## 🛡️ Uso y seguridad

Mantened las manos fuera del recorrido cuando el MatataBot esté en marcha. Detenedlo antes de reposicionarlo o cambiar el tablero y dejad espacio libre detrás antes de probar Atrás.

## 🔗 Fuentes y límites

La lección oficial Matatalab [Sequence](https://matatalab.com/en/node/61) indica que los bloques numéricos se utilizan con órdenes de avance y retroceso y que no se pueden combinar con los giros izquierda/derecha. [Get to Know Matatalab Coding Set](https://matatalab.com/en/node/60) describe la torre, el tablero, la conexión Bluetooth y las piezas de movimiento del conjunto. La cuadrícula es una guía externa; el conjunto base no contiene un sensor que mida casillas o distancias.
