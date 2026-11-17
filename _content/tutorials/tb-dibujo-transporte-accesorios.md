---
title: "Tale-Bot Pro: dibujo y transporte con accesorios"
description: "Programar formas con el soporte de rotuladores y probar los brazos para transportar un objeto ligero."
robot: tale-bot
level: "Intermedio"
duration: 45 min
order: 3
image: _assets/tutorials/tb-motors-sensors.webp
---

## 🎯 ¿Qué vamos a aprender?

Instalad el soporte de rotulador y programad un cuadrado y un rectángulo con Tale-Bot. Comprobad el trazo y ajustad el contacto del rotulador con el papel.

- Relacionar la geometría espacial con secuencias de órdenes repetitivas.
- Dibujar y comparar un cuadrado y un rectángulo.
- Observar cómo la superficie y el soporte afectan al resultado del dibujo.

![](../../_assets/tutorials/tb-motors-sensors.webp)

## 🧰 Materiales y preparación

- Tale-Bot Pro y accesorios de dibujo; brazos de transporte si forman parte de la caja disponible.
- Un rotulador lavable y una hoja grande de papel fijada sobre una superficie plana.
- Un objeto ligero, grande y seguro que quepa entre los brazos; no uséis piezas pequeñas ni frágiles.

## 🧩 Funciones y controles

- Movimiento programado y soporte oficial de dibujo con rotuladores cuando está incluido en la dotación.
- Brazos opcionales para sujetar y desplazar objetos ligeros; no son una pinza motorizada ni miden la carga.
- La precisión del trazo depende de la posición del soporte, el contacto con el papel y la superficie; no es un sensor.

## 👣 Paso a paso

### 1. Preparad el soporte y dibujad un cuadrado

Fijad una hoja grande sobre una superficie plana y poned una cartulina debajo. Con el robot detenido, colocad el soporte de dibujo y el rotulador lavable siguiendo la guía del fabricante; ajustadlo suavemente para que la punta toque el papel sin levantar las ruedas. Hace falta el soporte compatible para hacer esta prueba de dibujo.

Marcad un punto inicial y orientad el robot paralelo a un borde del papel. Borrad el programa anterior manteniendo X más de un segundo. Pulsad **Adelante → Derecha** cuatro veces y después **Play**. Cada avance dibuja un lado y cada giro cambia la orientación; el giro no dibuja un lado. Observad si el trazo se parece a un cuadrado y acaba cerca del punto inicial.

```talebot
avançar -> girar dreta -> avançar -> girar dreta -> avançar -> girar dreta -> avançar -> girar dreta -> executa
```

### 2. Cread un patrón rectangular

Borrad la secuencia. Planificad lados de dos pasos, un paso, dos pasos y un paso, con un giro a la derecha después de cada lado. Introducid **Adelante → Adelante → Derecha → Adelante → Derecha → Adelante → Adelante → Derecha → Adelante → Derecha** y pulsad **Play**. Los lados opuestos tienen la misma longitud. Antes de ejecutar, dibujad la forma prevista; usad una hoja nueva para distinguir los intentos. Si el robot no acepta toda la secuencia, ejecutad dos lados, borrad las órdenes e introducid los otros dos sin cambiar la posición ni la orientación.

```talebot
avançar -> avançar -> girar dreta -> avançar -> girar dreta
avançar -> avançar -> girar dreta -> avançar -> girar dreta -> executa
```

### 3. Ampliación opcional: probad el transporte con los brazos

Si el kit incluye los dos brazos, instaladlos en los puntos indicados por el fabricante y comprobad manualmente que quedan sujetos. Elegid un objeto ligero y ancho, colocadlo entre los brazos y programad un recorrido corto hasta una zona de entrega. Observad si el objeto se mantiene estable; reducid el número de giros antes de aumentar la distancia. Si el kit no incluye los brazos compatibles, omitid la prueba de transporte.

> **💡 Consejo de uso:** Poned una cartulina gruesa debajo para evitar que los rotuladores traspasen a la mesa.

## 🧪 Comprobación y resolución de problemas

Fijad el papel a una mesa plana. Probad un avance y un giro para comprobar el contacto del rotulador. Después ejecutad el cuadrado y anotad si vuelve cerca de la marca inicial. Para el transporte, haced una prueba corta con un objeto ancho y ligero. No forcéis los brazos si el objeto cae o el robot no puede moverlo.

## 🛡️ Uso y seguridad

Fijad el papel sobre una superficie plana y proteged la mesa con cartulina. Ajustad el rotulador sin levantar las ruedas y mantenedlo lejos del mecanismo. Detened el robot antes de cambiar el soporte o los brazos.

## 🔗 Fuentes y límites

Matatalab · [guía oficial de Tale-Bot Pro](https://matatalab.com/en/node/774). El fabricante describe el soporte de dibujo y los brazos para sujetar y mover objetos; confirmad que estos accesorios están en la caja disponible. La precisión del trazo y el transporte dependen del montaje, la superficie y la carga.
