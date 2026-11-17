---
title: "micro:bit: un farolillo que responde a la luz"
description: "Leer la luz ambiental con la matriz LED y encender un icono cuando el entorno se oscurece."
robot: microbit
level: "Iniciación"
duration: 35 min
order: 5
image: _assets/tutorials/mb-fanalet-llum-flat.webp
---
## 🎯 ¿Qué vamos a aprender?

Construid un farolillo que responda a la luz ambiental y ajustad el umbral con pruebas en espacios diferentes. La matriz LED de micro:bit puede funcionar a la vez como salida visual y como sensor de luz.

- Entender que la matriz LED también puede leer la luz ambiental.
- Utilizar una lectura de sensor dentro de una condición y un bucle.
- Ajustar un umbral a partir de pruebas en distintos espacios.

![](../../_assets/tutorials/mb-fanalet-llum-flat.webp)

## 🧰 Materiales y preparación

- Placa BBC micro:bit (V1 o V2) o simulador MakeCode.
- Ordenador con navegador y MakeCode.
- Portapilas opcional para las pruebas fuera del ordenador.

## 🧩 Funciones y controles

- Matriz 5 × 5 como salida LED y sensor de luz ambiental.
- Lectura del nivel de luz y condicional con umbral calibrado.

## 👣 Paso a paso

### 1. Cread el proyecto y programad el farolillo

Abrid MakeCode, cread un proyecto nuevo y comprobad el simulador. En la categoría **Entrada**, buscad la lectura del nivel de luz. El nombre puede aparecer en inglés («light level») si el editor no está traducido.

Dentro de «para siempre», poned una pieza «si… entonces… si no». En la condición, comparad **nivel de luz < 100**. Dentro de «entonces», añadid un icono; dentro de «si no», poned «limpiar la pantalla». La lectura de luz está en **Entrada** y la comparación en **Lógica**. El valor 100 es solo un punto de partida.

```makecode
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.clearScreen()
    }
})
```

### 2. Calibrad y personalizad la respuesta

Para elegir un valor adecuado, guardad el farolillo y cread **otro proyecto de prueba**. En «al pulsar el botón A», poned «mostrar el número» con «nivel de luz» dentro:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
```

Descargad este proyecto a la placa. Pulsad A y anotad el número en un lugar claro; repetid haciendo sombra suavemente a la matriz. La primera lectura puede ser cero mientras se activa el sensor: volved a pulsar A para comprobarla.

Volved a abrir el proyecto del farolillo y poned un valor entre las dos lecturas. Por ejemplo, si habéis anotado 30 con sombra y 150 con luz, probad con 90. Descargadlo y comprobad que el icono aparece cuando hacéis sombra.

> **💡 Consejo de uso:** los LED que muestran el icono también se utilizan para estimar la luz. Comprobad el comportamiento con la placa disponible y dejad un breve intervalo entre lecturas si la pantalla parpadea.

Cambiad el diamante por una estrella, una casa o un símbolo propio. Si la placa queda conectada a un portapilas, colocadla estable y no la tapéis con materiales que puedan acumular calor.

## 🧪 Comprobación y resolución de problemas

Probad la placa en un lugar claro y después hacedle sombra suavemente. Anotad cuándo aparece el dibujo. La lectura va de 0 (muy oscuro) a 255 (muy claro): si el cambio no se ve, ajustad el valor 100 y volved a probar sin cambiar la orientación de la placa.

## 🛡️ Uso y seguridad

Mantened libres los componentes de la placa; no los cubráis con materiales que acumulen calor. Desconectad la alimentación antes de cambiar el montaje y evitad que el soporte toque los contactos eléctricos.

## 🔗 Fuentes y límites

Adaptación propia del proyecto oficial [Nightlight de micro:bit](https://www.microbit.org/projects/make-it-code-it/nightlight/), que usa el bloque [nivel de luz de MakeCode](https://makecode.microbit.org/reference/input/light-level). La lectura va de 0 a 255 y puede variar según la luz y la posición de la placa; por eso hay que ajustar el umbral en esta prueba.
