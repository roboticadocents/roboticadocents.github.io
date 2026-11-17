---
title: "Coding Set: obstáculos, banderas y rutas alternativas"
description: "Planificar una ruta del MatataBot que evite obstáculos y llegue a una bandera, probarla y depurar los giros."
robot: coding-set
level: "Intermedio"
duration: 45 min
order: 5
image: _assets/tutorials/cs-obstacles-bandera.webp
---

## 🎯 ¿Qué vamos a aprender?

Programad una ruta que pase junto a un obstáculo y acabe en la bandera. Las piezas del tablero determinan el recorrido; el MatataBot base no detecta ni esquiva obstáculos automáticamente.

- describir inicio, destino y casillas prohibidas;
- construir una secuencia de movimientos que evite las piezas de obstáculo;
- comprobar si la ruta llega a la bandera y corregirla con una prueba cada vez;
- explicar por qué «girar a la izquierda» no significa «desplazarse hacia la izquierda».

![](../../_assets/tutorials/cs-obstacles-bandera.webp)

## 🧰 Materiales y preparación

- Coding Set de la dotación: MatataBot, Control Tower, tablero de control, mapa, fichas de movimiento y bandera.
- Obstáculos incluidos con el conjunto; confirmad que son las piezas del kit base de vuestro centro.
- Tarjetas o cuadrícula de papel para planificar una ruta antes de colocar las fichas.

Conectad la torre, el tablero y el robot. Poned una tarjeta de obstáculo delante del punto de inicio y una bandera dos casillas más allá. Dejad libre una columna a la derecha para pasar. El Sensor Add-on no es necesario para esta práctica.

## 🧩 Funciones y controles

- Lectura del programa físico por la Control Tower y transmisión al MatataBot.
- Órdenes direccionales: avanzar, retroceder y girar 90° a derecha o izquierda.
- Bandera como destino visible y obstáculos físicos como restricciones de la ruta.
- Ejecución secuencial y depuración de un programa tangible.

## 👣 Paso a paso

### 1. Leed el mapa y planificad la ruta

Poned MatataBot en el inicio, mirando hacia el obstáculo y la bandera. Dibujad las tres posiciones en una cuadrícula. Señalad la derecha del robot: los giros dependen de hacia dónde mira.

Seguid con el dedo esta ruta sobre la cuadrícula antes de colocar las piezas. Un giro cambia hacia dónde mira el robot, pero no lo avanza:

```coding-set
girar dreta -> avançar -> girar esquerra -> avançar -> avançar -> girar esquerra -> avançar
```

El recorrido pasa junto a la tarjeta y vuelve a la columna de la bandera. Antes de usar el robot, seguid las flechas con el dedo y comprobad que hay espacio suficiente en la cuadrícula.

### 2. Traducid el plan a fichas físicas

Colocad las fichas en el orden de lectura del tablero. Revisad cada movimiento señalando a la vez la ficha y el tramo dibujado. Comprobad que cada giro cambia la orientación y que la secuencia acaba cuando MatataBot llega a la bandera.

### 3. Ejecutad y observad el trayecto

Poned el robot en el inicio con la misma orientación que en el dibujo y ejecutad el programa. No mováis los obstáculos mientras se desplaza. Al llegar a la bandera, confirmad si ha seguido el camino previsto; si choca con una pieza o se pasa de largo, detened la prueba, localizad la primera diferencia y volved al tablero de control.

### 4. Depurad cambiando una sola instrucción

Si el resultado no es el previsto, revisad la primera ficha que no corresponde a la ruta, cambiadla y volved a probar desde el inicio. Si ya funciona, buscad otra ruta. El Sensor Add-on es un complemento diferente: las barreras del kit base no detectan nada.

## 🧪 Comprobación y resolución de problemas

Comprobad que el recorrido evita el obstáculo y acaba en la bandera. Si no lo hace, detened el robot y corregid la primera pieza que no corresponde a la ruta. Devolvedlo al mismo punto y orientación antes de repetir.

## 🛡️ Uso y seguridad

Mantened dedos y cables fuera del recorrido. Detened el robot antes de mover obstáculos o corregir las piezas del tablero. El kit base no detecta el obstáculo automáticamente: dejad espacio para detener la prueba si la ruta es incorrecta.

## 🔗 Fuentes y límites

La lección oficial [Get to Know Matatalab Coding Set](https://matatalab.com/en/node/60) incluye obstáculos y banderas en el inventario del conjunto; [Hello, Matatalab Robots!](https://matatalab.com/en/node/88) trabaja la bandera como destino y las órdenes de movimiento. Este manual muestra cómo programar una ruta con estos elementos. Las piezas físicas no detectan obstáculos: la detección con fichas «Obstacle/No Obstacle» pertenece al Sensor Add-on, que es un complemento diferente.
