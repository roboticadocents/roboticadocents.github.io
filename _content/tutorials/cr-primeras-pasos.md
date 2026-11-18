---
title: "Primeros pasos: conexión a mBlock 5 y caras en la matriz LED"
description: "Conectar Codey al software del ordenador o tableta y programar animaciones faciales y mensajes deslizantes."
robot: codey-rocky
level: "Iniciación"
duration: 35 min
order: 1
image: _assets/tutorials/cr-primeres-passes.webp
---

## 🎯 ¿Qué vamos a aprender?

Dibujad una cara en la pantalla de Codey y haced que aparezca al pulsar A. Después, programad B para que muestre un saludo.

- Conectar Codey por cable USB a mBlock 5.
- Dibujar una cara en la pantalla LED.
- Asignar una respuesta a los botones A y B.

![](../../_assets/tutorials/cr-primeres-passes.webp)

## 🧰 Materiales y preparación

- Controlador Codey de la dotación (Rocky es opcional para esta práctica).
- Ordenador con mBlock 5 y cable micro-USB de datos.

## 🧩 Funciones y controles

- Conexión a mBlock 5, pantalla LED 16 × 8 y botones programables A/B.
- Ejecución en vivo y carga de código según la conexión elegida.

## 👣 Paso a paso

### 1. Conectad Codey y preparad la pantalla

En mBlock 5, añadid el dispositivo **Codey**, conectadlo con el cable y encendedlo. Comprobad que el estado indica que está conectado. Para esta primera prueba, no hace falta montarlo sobre Rocky.

Abrid la categoría de pantalla y añadid el bloque para mostrar una imagen. Dibujad dos ojos y una boca en la cuadrícula de 16 × 8 puntos. Guardad el proyecto antes de probarlo.

### 2. Haced que los botones muestren dos respuestas

Preparad dos pilas separadas: cuando se pulsa A, mostrad la cara; cuando se pulsa B, mostrad el texto «Hola».

```mblock
cuando se pulse el botón [A v]
mostrar una cara feliz

cuando se pulse el botón [B v]
mostrar el texto [Hola]
```

Buscad los bloques equivalentes en vuestra versión de mBlock: los nombres pueden variar. Ejecutad en modo **En vivo**, que envía las órdenes mientras Codey está conectado. Si queréis que el programa funcione sin el ordenador, usad el modo de carga y seguid la indicación de mBlock para transferirlo al dispositivo.

> **💡 Consejo de uso:** Empezad en modo «En vivo» para comprobar cada cambio. Probad la carga al dispositivo solo después de que las dos respuestas funcionen.

## 🧪 Comprobación y resolución de problemas

Con Codey conectado en modo **En vivo**, pulsad A: debe aparecer la cara que habéis dibujado. Pulsad B: debe aparecer «Hola». Si no pasa nada, comprobad la conexión y que cada bloque esté unido al botón correspondiente.

## 🛡️ Uso y seguridad

Mantened el robot quieto durante la conexión y las pruebas de los botones. Dejad el cable USB lejos de la zona de movimiento y desconectadlo agarrando el conector.

## 🔗 Fuentes y límites

Makeblock · Codey Rocky · [About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) y [Display the battery level](https://support.makeblock.com/hc/en-us/articles/7462863296535-Case-7-Display-the-battery-level). La lectura depende del bloque disponible en la versión de mBlock instalada.
