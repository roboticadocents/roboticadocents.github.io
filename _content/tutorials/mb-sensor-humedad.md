---
title: "micro:bit: leer un sensor externo"
description: "Leer con MakeCode un sensor de humedad compatible y comparar dos lecturas."
robot: microbit
level: "Intermedio"
duration: 50 min
order: 2
image: _assets/tutorials/mb-motors-sensors-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Conectad un sensor de humedad compatible a P0 y observad cómo cambia la lectura cuando el sensor está seco o húmedo. El servo es una ampliación opcional y se prueba en una prueba diferente.

- Conectar el sensor según el esquema del fabricante.
- Mostrar y comparar lecturas en dos condiciones conocidas.

![](../../_assets/tutorials/mb-motors-sensors-flat.webp)

## 🧰 Materiales y preparación

- micro:bit con portapilas
- Ordenador con MakeCode y cable USB de datos para transferir el programa.
- Sensor de humedad compatible con micro:bit e instrucciones de conexión del fabricante.
- Cables indicados por las instrucciones de los componentes.

## 🧩 Funciones y controles

- Pin P0 para leer la señal analógica de un sensor externo.
- El sensor no forma parte de la micro:bit. La placa no puede alimentar ni leer cualquier sensor sin comprobar antes la compatibilidad y el esquema.

## 👣 Paso a paso

### 1. Comprobad el sensor y los cables

Antes de conectar nada, identificad el modelo exacto del sensor y leed su esquema. Con la placa desconectada, conectad la señal a P0 y los demás cables a los pines que indique el fabricante. No hagáis la conexión si no tenéis el esquema o si falta una placa auxiliar necesaria.

### 2. Leed el valor analógico

En MakeCode, poned «mostrar el número» dentro de «para siempre». En el espacio del número, colocad la pieza de **lectura analógica del pin P0**, disponible en Pines. Así veréis la lectura del sensor en la pantalla.

```makecode
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
```

La [referencia oficial de lectura de un pin](https://makecode.microbit.org/reference/pins/analog-read-pin) muestra la pieza y un ejemplo de lectura en pantalla.

### 3. Comparad seco y húmedo

Anotad tres lecturas con el sensor seco y tres con el sensor húmedo, siguiendo las instrucciones del fabricante. Comparad los valores: el número es una lectura del pin, no un porcentaje universal de humedad. No sumerjáis la placa ni los cables. Sin sensor, probad el programa en el simulador y marcad el resultado como simulado.

## 🧪 Comprobación y resolución de problemas

Comparad las tres lecturas de cada condición. Si no cambian, confirmad en el manual qué pin proporciona la señal y revisad los cables con la placa desconectada. Si el sensor requiere una placa auxiliar, no lo conectéis directamente a P0. Sin sensor, haced la prueba en el simulador y marcad las lecturas como simuladas.

## 🛡️ Uso y seguridad

Mantened el agua lejos de la micro:bit, los cables y la placa auxiliar. Mojad solo la parte del sensor indicada por el fabricante y desconectad la alimentación antes de cambiar cables. El servo no es necesario para esta prueba.

## 🔗 Fuentes y límites

La [referencia oficial de MakeCode para la lectura analógica](https://makecode.microbit.org/reference/pins/analog-read-pin) describe el bloque utilizado. La conexión y la interpretación de los valores dependen del modelo concreto del sensor; seguid su manual.
