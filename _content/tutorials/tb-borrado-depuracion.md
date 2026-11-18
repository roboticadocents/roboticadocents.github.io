---
title: "Tale-Bot Pro: borrar una orden y depurar el recorrido"
description: "Comparar la pulsación corta y larga de Clear para retirar la última orden o vaciar todo el programa antes de volver a probarlo."
robot: tale-bot
level: "Iniciación"
duration: 35 min
order: 5
image: _assets/tutorials/tb-esborrat-depuracio.webp
---

## 🎯 ¿Qué vamos a aprender?

Usad Clear para corregir la última orden o vaciar todo el programa de Tale-Bot Pro. Una pulsación corta elimina la última orden introducida; una pulsación larga elimina todas las órdenes. Comprobad el resultado en los indicadores antes de ejecutar.

- Leer la secuencia acumulada en los indicadores de color.
- Distinguir una pulsación de menos de un segundo de una pulsación de más de un segundo.
- Corregir la última orden sin perder el resto de la ruta, o borrar todo el programa cuando haga falta empezar de nuevo.
- Ejecutar solo después de revisar el código que se ha vuelto a introducir.

![](../../_assets/tutorials/tb-esborrat-depuracio.webp)

## 🧰 Materiales y preparación

- Tale-Bot Pro cargado y con una superficie plana para la prueba.
- Tarjetas de flechas o una tira de programación en papel.
- Cuadrícula o mapa simple con inicio y destino.

Elegid una ruta segura de cuatro órdenes. El ejemplo siguiente introduce una cuarta orden incorrecta para probar el borrado parcial. Identificad el botón Clear/X en el modelo físico. El tiempo de pulsación es importante: haced una pulsación claramente corta o larga y comprobad los indicadores.

## 🧩 Funciones y controles

- Botón Clear con borrado de la última orden con pulsación corta (<1 s).
- Borrado de todas las órdenes introducidas con pulsación larga (>1 s).
- Indicadores de programación que reproducen el color de las órdenes y se apagan cuando se ha vaciado la secuencia.
- Depuración de un programa físico antes de ejecutarlo con Play.

## 👣 Paso a paso

### 1. Introducid una ruta y leed sus indicadores

Planificad cuatro órdenes sencillas que hagan llegar Tale-Bot a un destino. Borrad el programa anterior manteniendo X más de un segundo. Introducid las tres primeras órdenes, señalad cada indicador y añadid una flecha a la tira de papel. Después, introducid a propósito una cuarta orden incorrecta y anotadla. Comparad la ruta prevista con los indicadores y decidid qué conviene conservar antes de pulsar Play.

Ejemplo de ruta prevista: dos avances, un giro a la derecha y un avance. Introducid por error un giro a la izquierda como cuarta orden, sin ejecutar todavía:

```talebot
avanzar -> avanzar -> girar derecha -> girar izquierda
```

### 2. Corregid la última orden

Pulsad Clear brevemente, menos de un segundo. Comprobad que desaparece el último indicador y que los tres anteriores continúan visibles. Introducid la orden correcta y confirmad que la secuencia vuelve a tener cuatro pasos. Si el resultado no es claro, parad y revisad los indicadores antes de continuar.

En el ejemplo, haced una pulsación corta de Clear y añadid el avance que faltaba. La ruta corregida queda así:

```talebot
avanzar -> avanzar -> girar derecha -> avanzar
```

### 3. Ejecutad la secuencia y probad el borrado completo

Pulsad Play una sola vez y observad si el recorrido llega al destino. Comparadlo con la tira de papel. Si el error está en una orden anterior, retirad con pulsaciones cortas las órdenes desde el final hasta llegar a ella y volved a introducirlas en orden. Después, mantened Clear pulsado más de un segundo y comprobad que se apagan todos los indicadores. Introducid tres órdenes nuevas, ejecutadlas y comparad cuándo conviene corregir una orden y cuándo es mejor empezar de nuevo.

## 🧪 Comprobación y resolución de problemas

Haced tres comprobaciones: una pulsación corta después de introducir al menos tres órdenes; una pulsación larga con una secuencia visible; y una reprogramación que se ejecuta con Play. Anotad qué indicadores se han apagado en cada caso y si las órdenes conservadas coinciden con el plan. Si la pulsación dura aproximadamente un segundo, repetid la prueba con una duración claramente corta o larga, sin añadir más órdenes al mismo tiempo.

## 🛡️ Uso y seguridad

Mantened el robot quieto durante la corrección y no pulséis varias teclas a la vez. Haced pulsaciones claramente inferiores o superiores a un segundo y comprobad los indicadores antes de pulsar Play.

## 🔗 Fuentes y límites

El [curso oficial de Tale-Bot Pro de Matatalab](https://matatalab.com/en/lesson4.2) especifica que Clear pulsado menos de un segundo elimina la última orden y mantenido más de un segundo borra todas las órdenes; también indica que los indicadores de programación se apagan cuando la secuencia está vacía. Los umbrales son los publicados por el fabricante: en la práctica, haced una pulsación claramente inferior o superior a un segundo y comprobad el resultado en vuestro robot.
