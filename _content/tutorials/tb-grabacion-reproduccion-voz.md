---
title: "Grabación y reproducción de voz"
description: "Grabar un mensaje corto y hacer que Tale-Bot lo reproduzca durante un recorrido."
robot: tale-bot
level: "Iniciación"
duration: 40 min
order: 2
image: _assets/tutorials/tb-reconeixement-veu.webp
---

## 🎯 ¿Qué vamos a aprender?

Grabad un mensaje breve para que Tale-Bot lo reproduzca durante una ruta. La práctica diferencia la grabación de audio del reconocimiento de habla: el robot no interpreta órdenes habladas.

- Preparar y grabar una frase breve, sin datos personales.
- Añadir el mensaje grabado a una secuencia de botones.
- Crear secuencias de movimiento con reproducción de voz.

![](../../_assets/tutorials/tb-reconeixement-veu.webp)

## 🧰 Materiales y preparación

- Tale-Bot Pro cargado.
- Tarjetas de personajes y una ruta corta sobre una superficie plana.
- Un mensaje de prueba inventado, sin nombres ni datos personales.

## 🧩 Funciones y controles

- Grabación y reproducción de un mensaje de voz con el botón Record (máximo oficial de 30 segundos por grabación).
- No reconoce ni interpreta el habla como una orden de navegación.

## 👣 Paso a paso

### 1. Grabad y comprobad el mensaje

Elegid una frase corta, por ejemplo «¡Hola, soy el conejo!». Mantened pulsado el botón de grabación mientras habláis y soltadlo al terminar. Cada grabación puede durar hasta 30 segundos; al soltar el botón, escuchad la reproducción. Si no se oye o no se entiende, volved a grabarla en un lugar más tranquilo. Usad una frase ficticia sin datos personales.

### 2. Añadid el mensaje a una ruta

Mantened X más de un segundo para borrar las órdenes anteriores y comprobad que los indicadores se apagan. Después pulsad **Adelante → grabación brevemente → Derecha → Adelante → Play**. La pulsación breve del botón de grabación añade el mensaje a la secuencia; mantenerlo pulsado inicia una grabación nueva.

```talebot
avançar -> gravació -> girar dreta -> avançar -> executa
```

> **💡 Consejo de uso:** Comprobad la grabación antes de añadirla al programa; una pulsación larga del botón sustituye el mensaje anterior.

## 🧪 Comprobación y resolución de problemas

Ejecutad la ruta y comprobad que el mensaje suena después del primer avance. Si no suena, revisad que habéis grabado una frase y que habéis añadido la orden con una pulsación breve. Repetid la prueba desde la misma posición inicial.

## 🛡️ Uso y seguridad

Grabad un mensaje ficticio sin datos personales. La pulsación larga graba un mensaje nuevo; la breve lo añade al programa. Mantened libre la ruta antes de pulsar Play.

## 🔗 Fuentes y límites

La [guía oficial de Tale-Bot Pro](https://matatalab.com/en/lesson4.2) indica que la grabación dura hasta 30 segundos y que una pulsación breve del botón añade la grabación a la secuencia. Tale-Bot reproduce el audio; no interpreta la frase como una orden.
