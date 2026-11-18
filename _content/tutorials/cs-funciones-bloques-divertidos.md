---
title: "Coding Set: funciones y bloques divertidos"
description: "Definir y llamar una función con bloques físicos y explorar movimiento aleatorio, música predefinida y danza del MatataBot."
robot: coding-set
level: "Intermedio"
duration: 45 min
order: 4
image: _assets/tutorials/cs-funcions-blocs-divertits.webp
---

## 🎯 ¿Qué vamos a aprender?

Preparad una ruta corta con dos movimientos que se repitan. Guardaréis esa pareja de movimientos en una función y la llamaréis dos veces. Después, si vuestro kit tiene los bloques divertidos, probaréis sus comportamientos predefinidos.

- Definir y llamar una función para reutilizar una secuencia de movimientos.
- Comparar la versión con función con la secuencia escrita completa.
- Si el kit los incluye, probar los tres bloques divertidos y distinguirlos de un programa propio.

![](../../_assets/tutorials/cs-funcions-blocs-divertits.webp)

## 🧰 Materiales y preparación

- Coding Set con torre de control, tablero, MatataBot y bloques de movimiento y función.
- Bloques divertidos del kit, si están disponibles; no hace falta el Musician Add-on para las pruebas incluidas.
- Mapa o cuadrícula plana con una ruta sencilla.
- Hoja para anotar la secuencia y contar los bloques utilizados.

Cargad torre y robot, colocad la torre estable delante del tablero y confirmad la conexión antes de pulsar Play. Separad cualquier bloque del Sensor Add-on o del Musician Add-on: no es necesario ni forma parte de las funciones base tratadas aquí.

## 🧩 Funciones y controles

- Bloques físicos Define Function y Call Function para definir y reutilizar una secuencia.
- Lectura del programa por el Control Tower y transmisión al MatataBot.
- Bloques divertidos predefinidos: movimiento aleatorio, música y danza.
- Bloques numéricos asociados a órdenes compatibles, incluidas las funciones de diversión documentadas por el fabricante.

## 👣 Paso a paso

### 1. Planificad, definid y llamad una función

Una función es un grupo de órdenes que podemos utilizar más de una vez. Dibujad una ruta con **Adelante → Derecha → Adelante → Derecha** y marcad el punto y la orientación iniciales. Poned estas cuatro piezas en la fila principal, ejecutadlas y anotad dónde acaba el robot y hacia dónde mira. Repetid desde la misma posición.

```coding-set
avanzar -> girar derecha -> avanzar -> girar derecha
```

Retirad las cuatro piezas del tablero. En la fila principal poned las dos piezas **Call Function → Call Function**; en la fila inferior poned **Define Function → Adelante → Derecha**, siguiendo la [guía del fabricante](https://matatalab.com/en/node/63). Cada llamada ejecuta las dos órdenes de la definición. Devolved el robot al inicio con la misma orientación, ejecutad y comparad su posición final con la del programa anterior. Si no coinciden, revisad las dos filas y la posición inicial antes de volver a probar.

Fila principal:

```coding-set
llamar función -> llamar función
```

Fila inferior (definición):

```coding-set
definir función -> avanzar -> girar derecha
```

Las piezas Define y Call van en filas diferentes. No añadáis un bloque número a la función: el fabricante indica que esta combinación no es compatible.

### 2. Comparad los bloques divertidos

Si el kit incluye estos bloques, probad por separado el movimiento aleatorio, la música y la danza. Ejecutad una sola pieza cada vez para identificar su respuesta. Son comportamientos incorporados al robot, no secuencias programadas con las piezas de movimiento. La música permite escuchar una respuesta predefinida; para componer una melodía con notas propias hace falta el Musician Add-on.

Cada pieza siguiente corresponde a una prueba independiente; no las coloquéis juntas en un único programa.

```coding-set
aleatorio
```

```coding-set
música
```

```coding-set
baile
```

### 3. Depurad la lectura del tablero

Cambiad una sola pieza de la función o de la ruta y volved a ejecutar. Si el MatataBot no hace la ruta esperada, comprobad orden de lectura, orientación de las piezas, posición de Define/Call y conexión de la torre. Registrad qué cambio ha resuelto el error; no mováis piezas mientras la torre está leyendo.

## 🧪 Comprobación y resolución de problemas

Comparad la posición final de la ruta completa y de la versión con función, empezando desde el mismo punto y orientación. Si difieren, revisad el orden de lectura, las filas de definición y llamada y la conexión de la torre.

## 🛡️ Uso y seguridad

Mantened la torre y el tablero en una superficie estable, sin piezas sueltas en la trayectoria del robot. Dejad espacio libre antes de probar movimientos aleatorios o danzas y ajustad el volumen para la música.

## 🔗 Fuentes y límites

Las páginas oficiales Matatalab describen los [bloques de función](https://matatalab.com/en/node/63), los [bloques de secuencia y parámetros](https://matatalab.com/en/node/61) y el [inventario de los bloques del Coding Set](https://matatalab.com/en/node/60). El [Musician Add-on](https://matatalab.com/en/node/65) es un complemento separado para trabajar notas y melodías; el Sensor Add-on también es opcional y no se utiliza en esta guía.
