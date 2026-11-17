---
title: "micro:bit: enviar un número por radio"
description: "Hacer que dos placas intercambien un número de prueba sin utilizar wifi."
robot: microbit
level: "Intermedio"
duration: 45 min
order: 3
image: _assets/tutorials/mb-radio-mesh-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced que una placa envíe el número 7 y que otra lo muestre. Después cambiad el grupo de una placa y observad qué pasa. Es una comunicación local: no hace falta Wi-Fi y no transmite voz.

- Poner dos placas en el mismo grupo de radio.
- Enviar un número de prueba y mostrarlo en la otra placa.
- Comprobar qué pasa cuando cambia el grupo.

![](../../_assets/tutorials/mb-radio-mesh-flat.webp)

## 🧰 Materiales y preparación

- 2 o más placas micro:bit con portapilas
- Ordenador con MakeCode para preparar y transferir un programa a cada placa.
- Hoja de registro para anotar grupo, mensaje enviado y mensaje recibido.

Preparad un programa emisor y uno receptor. Si hay otras placas cerca, elegid un grupo de radio que no utilicen para evitar interferencias.

## 🧩 Funciones y controles

- Radio integrada para enviar y recibir mensajes dentro de un grupo configurado.
- Comunicación por radio entre placas sin Wi-Fi; es difusión local, no un canal privado ni un servicio meteorológico.

## 👣 Paso a paso

### 1. Preparad y enviad el mensaje

En la placa emisora, poned «radio: fijar grupo a 7» en **al iniciar**. Dentro de «al pulsar el botón A», añadid «radio: enviar número 7». Descargad el programa. Las placas emisora y receptora deben usar el mismo grupo de radio.

```makecode
radio.setGroup(7)
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
})
```

### 2. Preparad el receptor y haced la prueba

En la segunda placa, poned también el grupo 7 en **al iniciar**. Añadid «al recibir número por radio» y, dentro, «mostrar el número» recibido. Descargad este otro programa a la placa receptora antes de pulsar A en la emisora:

```makecode
radio.setGroup(7)
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
```

La [referencia oficial de recepción por radio](https://makecode.microbit.org/reference/radio/on-received-number) muestra la pieza de recepción y enlaza las piezas de envío y de grupo.

> **💡 Consejo de uso:** Usad el mismo grupo de radio en las dos placas de prueba y un grupo diferente del de otros dispositivos próximos.

## 🧪 Comprobación y resolución de problemas

Pulsad A cinco veces en la emisora y contad cuántas veces aparece el 7 en la receptora. Dejad que el número acabe de mostrarse antes de volver a pulsar. Después cambiad solo el grupo de la receptora, descargadle el programa y repetid la prueba. Volved al grupo 7 al terminar.

## 🛡️ Uso y seguridad

No enviéis datos personales: cualquier placa del mismo grupo de radio puede recibir el mensaje. Usad números de prueba y comprobad el grupo configurado en cada dispositivo antes de transmitir.

## 🔗 Fuentes y límites

La [guía oficial de funciones de micro:bit](https://microbit.org/get-started/features/overview/) describe la radio integrada y la diferencia con Bluetooth. La radio de este ejemplo envía un número al grupo configurado; no es privada y no necesita conexión a Internet.
