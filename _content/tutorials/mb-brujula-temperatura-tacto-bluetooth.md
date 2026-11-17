---
title: "micro:bit: brújula, temperatura, tacto y Bluetooth"
description: "Leer el rumbo y la temperatura aproximada, probar el logotipo táctil de la V2 y distinguir Bluetooth de radio."
robot: microbit
level: "Intermedio"
duration: 50 min
order: 6
image: _assets/tutorials/mb-brujola-temperatura-bluetooth-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced que la micro:bit muestre la dirección y una temperatura aproximada. Comparadlas con una brújula y un termómetro; después explorad el logotipo táctil de V2 y la conexión Bluetooth si tenéis los dispositivos necesarios.

- Calibrar la brújula y comparar rumbos con una referencia.
- Contrastar la temperatura interna aproximada con un termómetro.
- Distinguir la entrada táctil de V2 y la conexión Bluetooth de la radio.

![](../../_assets/tutorials/mb-brujola-temperatura-bluetooth-flat.webp)

## 🧰 Materiales y preparación

- Placa BBC micro:bit y ordenador con MakeCode o editor compatible.
- Brújula y termómetro de referencia; ambos pueden ser analógicos.
- Dispositivo compatible con Bluetooth y editor/app adecuado, si la conexión está disponible.
- Portapilas opcional para separar la placa del ordenador.

Comprobad la versión impresa en la placa. La brújula puede requerir calibración y puede verse afectada por imanes, altavoces, mesas metálicas o cables con corriente. El sensor térmico está dentro del procesador y solo da una aproximación de la temperatura de la placa/entorno.

## 🧩 Funciones y controles

- Magnetómetro/brújula integrada: rumbo y calibración, con interferencias identificadas.
- Sensor térmico interno: lectura aproximada, no termómetro ambiental calibrado.
- Logotipo táctil capacitivo y funciones de sonido solo en micro:bit V2; V1 no incorpora estas piezas.
- Bluetooth para conexión con dispositivos compatibles, diferenciado de la radio local entre placas.

## 👣 Paso a paso

### 1. Calibrad y comparad el rumbo

Abrid MakeCode y preparad dos botones:

1. En **Entrada**, añadid «al pulsar el botón A». Dentro, poned «mostrar el número» y, en su espacio, la lectura de brújula.
2. Añadid otro bloque de botón y cambiadlo a **B**. Dentro, poned «mostrar el número» con la lectura de temperatura.

El botón A mostrará la dirección y el B, la temperatura aproximada. Si preferís copiar el programa, abrid **JavaScript** en MakeCode, pegad este texto y volved a **Bloques** para ver las piezas:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
```

Descargadlo a la placa y pulsad A. Si pide calibrarla, seguid las indicaciones de la pantalla. Mantenedla plana, con el borde superior hacia la dirección que queréis medir. Probad cuatro direcciones lejos de imanes y objetos metálicos; comparad las lecturas con una brújula de referencia.

Podéis consultar el [bloque y el ejemplo oficial de brújula](https://makecode.microbit.org/reference/input/compass-heading) para identificar la pieza en MakeCode.

### 2. Comparad temperatura y tacto según la versión

Dejad la placa y un termómetro unos minutos en el mismo lugar, a la sombra. Pulsad B y comparad los números. Anotadlos sin tocar la placa durante la lectura: la micro:bit mide la temperatura del chip, que puede ser diferente de la del aire.

En una micro:bit V2, cread un proyecto separado. En **Entrada**, añadid el evento «al tocar el logotipo» y poned dentro «mostrar un icono». Transferidlo y tocad el logotipo metálico: debería aparecer el icono. Si no aparece, confirmad que la placa es V2 y que habéis transferido este proyecto. Como ampliación, probad los eventos de soltar y mantener el contacto si el editor los ofrece. En V1, sustituid la entrada por A/B; no presentéis la placa V1 como si tuviera logotipo sensible al tacto.

### 3. Distinguid Bluetooth de radio

Si tenéis una tableta compatible con la app oficial de micro:bit, seguid la [guía de la app](https://microbit.org/get-started/user-guide/mobile/) para emparejarla y enviar un programa a la placa por Bluetooth. Observad si la placa ejecuta el programa después de la transferencia. Si no tenéis la app, haced la prueba por cable y anotad que no habéis comprobado Bluetooth.

Comparadlo con la [guía de radio](../../tutorial/mb-enviar-numero-radio/index.html), que envía números entre dos placas. Para intercambiar datos con un dispositivo Bluetooth desde un programa hace falta una extensión y una aplicación compatibles; añadir la extensión Bluetooth elimina los bloques de radio del mismo proyecto. Guardad cada prueba en un proyecto separado.

## 🧪 Comprobación y resolución de problemas

Probad A en cuatro direcciones y B junto al termómetro; anotad los resultados. Si tenéis V2, comprobad también el logotipo táctil. Indicad si habéis transferido el programa por Bluetooth o por cable. Si la brújula da valores inestables, alejadla de objetos metálicos y repetid.

## 🛡️ Uso y seguridad

No uséis imanes fuertes cerca de la brújula durante las pruebas. Emparejad solo dispositivos identificados y eliminad la vinculación cuando ya no sea necesaria. La temperatura indicada es aproximada y corresponde al procesador.

## 🔗 Fuentes y límites

La [vista general oficial de micro:bit](https://microbit.org/get-started/features/overview/) describe botones, brújula, acelerómetro, radio/Bluetooth, pines y las diferencias de V2; la guía oficial de [sensores](https://microbit.org/get-started/features/sensors/) documenta la temperatura aproximada y el logotipo táctil. Consultad también la [referencia Bluetooth de MakeCode](https://makecode.microbit.org/reference/bluetooth). El Bluetooth depende del editor/dispositivo compatible; el sensor interno de temperatura no es un instrumento calibrado.
