---
title: "Micrófono y sonido: detector de ruido y aplausos (V2)"
description: "Utilizar el micrófono de micro:bit V2 para observar y comparar el nivel de sonido ambiental."
robot: microbit
level: "Iniciación"
duration: 35 min
order: 4
image: _assets/tutorials/mb-so-microfon-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced que una micro:bit V2 reaccione a un sonido y comparad las lecturas en silencio y después de una palmada suave. El micrófono y el altavoz integrados necesarios para esta práctica son de la versión V2.

- Mostrar un icono cuando la placa detecta un sonido fuerte.
- Comparar el nivel de sonido en dos situaciones.
- Probar el altavoz integrado con un tono breve.

![](../../_assets/tutorials/mb-so-microfon-flat.webp)

## 🧰 Materiales y preparación

- micro:bit V2 (con micrófono y altavoz integrados)
- Ordenador con MakeCode y cable USB para transferir el programa.
- Espacio donde probar sonidos breves a volumen moderado; una placa V1 necesita un periférico externo compatible.

## 🧩 Funciones y controles

- Micrófono y LED indicador, lectura del nivel de sonido y altavoz integrado en micro:bit V2.
- No reconoce palabras ni mide decibelios calibrados; en V1 hace falta un periférico externo para estas entradas/salidas de sonido.

## 👣 Paso a paso

### 1. Evento de aplauso

En MakeCode, cread un proyecto nuevo. En **Entrada**, buscad «cuando se escucha un sonido fuerte» y poned dentro «mostrar un icono», una pausa de un segundo y «limpiar la pantalla». Este ejemplo muestra el orden de los bloques:

```makecode
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
```

Descargad el programa a la V2 y dad una palmada suave: el icono debería aparecer y desaparecer. Esperad a que desaparezca antes de repetir la prueba. Si no responde, acercaos un poco o revisad el umbral de sonido del editor, sin hacer ruidos fuertes. La [referencia oficial](https://makecode.microbit.org/reference/input/on-sound) muestra esta pieza y un ejemplo.

### 2. Mostrad el nivel de sonido

Cread un segundo proyecto para que la barra no tape el icono del primero. Dentro de «para siempre», añadid el bloque de mostrar una barra de luces. En el valor de la barra poned «nivel de sonido» y dejad el máximo en 255. El número sirve para comparar lecturas; no son decibelios.

```makecode
basic.forever(function () {
    led.plotBarGraph(input.soundLevel(), 255)
})
```

La [referencia oficial del nivel de sonido](https://makecode.microbit.org/reference/input/sound-level) muestra la pieza del micrófono y recuerda que necesita micro:bit V2.

### 3. Probad el altavoz

En un tercer proyecto, poned «reproduce un tono» dentro de «al pulsar el botón B». Descargadlo y pulsad B para escucharlo en el altavoz de la V2. Elegid un volumen cómodo; también podéis mostrar un icono en lugar de reproducir un sonido.

> **💡 Consejo de uso:** Guardad los proyectos con nombres diferentes para probar el icono, la barra y el tono por separado.

## 🧪 Comprobación y resolución de problemas

Con el primer proyecto, comprobad que una palmada suave activa el icono. Con el proyecto de la barra, observad si sube el nivel de sonido. Con el proyecto del tono, pulsad B. Si no hay respuesta, revisad el proyecto cargado y que la placa sea V2.

## 🛡️ Uso y seguridad

Mantened el volumen moderado y usad una palmada suave; no hacen falta gritos ni sonidos fuertes. El programa lee el nivel de sonido y no necesita grabar voces.

## 🔗 Fuentes y límites

La referencia de MakeCode explica el evento [sonido fuerte](https://makecode.microbit.org/reference/input/on-sound) y el bloque [nivel de sonido](https://makecode.microbit.org/reference/input/sound-level). El micrófono y el altavoz integrados de esta práctica requieren micro:bit V2; el número de la barra no son decibelios.
