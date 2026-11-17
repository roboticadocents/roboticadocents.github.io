---
title: "Coding Set: repetir una ruta con piezas de bucle"
description: "Repetir una secuencia corta con las piezas físicas de bucle y comparar el resultado."
robot: coding-set
level: "Intermedio"
duration: 45 min
order: 3
image: _assets/tutorials/cs-bucles.webp
---

## 🎯 ¿Qué vamos a aprender?

Reducid una secuencia larga de movimientos a una instrucción que se repite. Con las piezas de bucle del Coding Set, comparad la ruta completa con la versión compacta y comprobad si ambas llegan al mismo destino.

- Comprender el concepto de bucle (Loop).
- Distinguir el bloque de inicio de bucle y el de cierre.
- Comparar una ruta cuadrada con y sin repetición.

![](../../_assets/tutorials/cs-bucles.webp)

## 🧰 Materiales y preparación

- Bloques de bucle (verde oscuro)
- Bloques direccionales
- Ficha numérica x4
- MatataBot, torre de control, tablero y una superficie plana con espacio libre.
- Cinta o una hoja para marcar el punto de partida y la dirección inicial.

Encended el robot y la torre y esperad a que se conecten. Dejad libre una zona cuadrada de al menos una casilla por lado alrededor de la ruta.

## 🧩 Funciones y controles

- Bloques físicos de bucle para repetir una secuencia de movimientos del MatataBot.
- Ejecución secuencial a través de la torre de lectura.

## 👣 Paso a paso

### 1. Preparad el bucle y las instrucciones

Colocad el robot en la esquina de la ruta y marcad hacia dónde mira. En el tablero, poned la ficha verde oscuro de inicio de bucle con el número 4 debajo.

Al lado del inicio de bucle, poned **Adelante → Derecha**. Estas dos órdenes se repetirán; el giro cambia la orientación, pero no hace avanzar el robot.

### 2. Cerrad y ejecutad el bucle

Poned la ficha verde oscuro de final después de Derecha. Comprobad que el tablero queda así, con el número debajo del inicio:

```coding-set
repeteix 4
avançar -> girar dreta
fi
```

Pulsad el botón grande y observad los cuatro lados. El robot debería volver cerca del punto de partida, mirando en la dirección inicial; la posición puede variar según la superficie.

> **💡 Consejo de uso:** Comparad las ocho piezas de movimiento de la ruta larga con las dos piezas de movimiento de la ruta con bucle. Esta última necesita, además, las dos piezas de bucle y el número 4.

## 🧪 Comprobación y resolución de problemas

1. Representad la ruta larga: **Adelante → Derecha → Adelante → Derecha → Adelante → Derecha → Adelante → Derecha**. Si tenéis suficientes piezas, colocadlas en el tablero y ejecutadla; si no, seguidla con tarjetas y el dedo.
2. Devolved el robot al punto y a la orientación iniciales. Ejecutad la versión con bucle tres veces, reposicionándolo antes de cada intento.
3. Comparad las posiciones y orientaciones finales de las dos versiones. Si habéis podido ejecutar ambas, repetid también la ruta larga tres veces.

```coding-set
avançar -> girar dreta -> avançar -> girar dreta -> avançar -> girar dreta -> avançar -> girar dreta
```

Contad las piezas de movimiento de cada versión. Si el resultado no coincide, revisad el número, el orden de las piezas y la orientación inicial.

## 🛡️ Uso y seguridad

Mantened las manos fuera del trayecto mientras el robot se mueve. Detenedlo antes de reposicionarlo y retirad las piezas del tablero solo cuando la torre haya acabado de leerlas.

## 🔗 Fuentes y límites

La [guía oficial de bucles de Matatalab](https://matatalab.com/en/node/62) muestra dónde colocar las piezas de inicio y final y el número de repeticiones. El resultado físico puede variar según la superficie y la alineación inicial del robot.
