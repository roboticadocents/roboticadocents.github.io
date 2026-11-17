---
title: "Primeras pasos: MakeCode, matriz de 25 LED y pulsadores"
description: "Cómo programar la placa desde el navegador web MakeCode sin instalar ningún programa y descargar el archivo."
  .hex.
robot: microbit
level: "Iniciación"
duration: 30 min
order: 1
image: _assets/tutorials/mb-primeres-passes-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Construid un dado electrónico que reaccione a una sacudida y mostradlo tanto en el simulador como en la placa. La secuencia presenta MakeCode, el acelerómetro (el sensor que detecta cambios de movimiento), la matriz de 5 × 5 luces y la transferencia del programa.

- Abrir un proyecto MakeCode y probarlo en el simulador.
- Mostrar un número del 1 al 6 cuando se sacude la placa.
- Transferir el programa a una micro:bit con el método que ofrece el ordenador.

![](../../_assets/tutorials/mb-primeres-passes-flat.webp)

## 🧰 Materiales y preparación

- micro:bit V1 o V2 y cable USB de datos.
- Ordenador con navegador y acceso a MakeCode.

## 🧩 Funciones y controles

- MakeCode y matriz de 5 × 5 luces LED.
- Sacudida detectada por el acelerómetro en las versiones V1 y V2.

## 👣 Paso a paso

### 1. Cread el proyecto y el dado

Abrid MakeCode, elegid **Nuevo proyecto** y ponedle el nombre «Mi dado». Antes de conectar la placa, comprobad que el simulador muestra la micro:bit.

En **Entrada**, añadid «si se sacude» y, dentro, «mostrar el número» con «elegir al azar del 1 al 6». Este ejemplo muestra el orden de los bloques:

```makecode
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
```

Los nombres de las piezas pueden aparecer en otro idioma según la configuración de MakeCode. La primera detecta la sacudida y la segunda muestra un número entre 1 y 6.

### 2. Probad y transferid el programa

Sacudid la micro:bit del simulador y comprobad que muestra un número del 1 al 6. Para probarlo con la placa, conectadla por USB y pulsad **Descargar**. Si MakeCode guarda un archivo `.hex`, copiadlo a la unidad **MICROBIT** y esperad a que la transferencia acabe antes de desconectar el cable. Sacudid la placa y comprobad el resultado.

> **💡 Consejo de uso:** Mostrad el simulador de MakeCode: permite probar el programa antes de conectar la placa.

## 🧪 Comprobación y resolución de problemas

Sacudid la placa suavemente y comprobad que muestra un número del 1 al 6. Si el simulador funciona y la placa no, revisad que la transferencia haya acabado y que habéis cargado el programa en la micro:bit correcta.

## 🛡️ Uso y seguridad

Sujetad la placa por los bordes y sacudidla suavemente. Si preferís probar el programa sin moverla, usad el simulador de MakeCode. No estiréis el cable USB ni dobléis el conector.

## 🔗 Fuentes y límites

La [vista general oficial de micro:bit](https://microbit.org/get-started/features/overview/) describe los botones, la matriz y los sensores integrados. La sacudida de esta práctica se detecta con el acelerómetro de la placa.
