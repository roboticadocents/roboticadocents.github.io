---
title: "Sensor de fuerza: un botón para detener el motor"
description: "Utilizar el sensor de fuerza como control manual de parada de un motor sin accesorios."
robot: spike
level: "Avanzado"
duration: 40 min
order: 3
image: _assets/tutorials/sp-brac-sensor-forca-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Programad un motor suelto para que se detenga al pulsar el sensor de fuerza con el dedo. No hace falta construir ningún brazo ni pinza, ni encajar piezas LEGO.

- Distinguir los estados pulsado y liberado.
- Relacionar una entrada del sensor con una orden al motor.
- Probar una condición y explicar el resultado.

![](../../_assets/tutorials/sp-brac-sensor-forca-flat.webp)

## 🧰 Materiales y preparación

- Hub SPIKE Prime, un motor angular y un sensor de fuerza.
- Ordenador o tableta con SPIKE App y conexión USB o Bluetooth.

Conectad solo los cables. Apoyad el motor de forma estable sobre la mesa, con el eje libre y sin ninguna pieza añadida. Dejad el sensor separado del motor y fácil de alcanzar.

## 🧩 Funciones y controles

- Lectura de contacto del sensor de fuerza y control de un motor angular.
- Espera condicional; el sensor no mide distancia.

## 👣 Paso a paso

### 1. Comprobad el sensor con el motor parado

Conectad el motor al puerto A y el sensor de fuerza al B. Abrid la información del Hub en SPIKE App. Pulsad suavemente la superficie del sensor con el dedo y soltadla: comprobad si el estado cambia entre pulsado y liberado. Si no cambia, revisad el cable y el puerto.

### 2. Programad la parada al pulsar

Buscad los bloques equivalentes de vuestra versión de SPIKE App:

```spikeapp
cuando comience el programa
activar el motor [A v] a velocidad baja
espera hasta que el sensor de fuerza [B v] esté pulsado
detener el motor [A v]
```

Iniciad el programa con el sensor liberado. Pulsadlo sin acercar la mano al motor y observad la parada. Soltar el sensor no reinicia este programa: hay que volver a ejecutarlo. Mantened también accesible la parada manual del Hub o de la app.

### 3. Comparad dos estados iniciales

Repetid tres veces empezando con el sensor liberado. Después iniciad el programa con el sensor ya pulsado y comprobad la respuesta. Si la app ofrece una lectura numérica de fuerza, observad cómo varía con una presión suave; no hace falta hacer fuerza elevada ni cambiar el programa.

## 🧪 Comprobación y resolución de problemas

Registrad el estado inicial, si habéis pulsado el sensor y si el motor se ha detenido. Si continúa girando, detenedlo manualmente y revisad los puertos y la condición.

## 🛡️ Uso y seguridad

Situad el sensor donde sea cómodo pulsarlo. No toquéis el eje del motor en movimiento. La condición programada no sustituye la parada manual ni es un sistema de protección.

## 🔗 Fuentes y límites

La [ficha técnica del sensor](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt23df304b05e587b2/5f8801ba721f8178f2e5e626/techspecs_technicforcesensor.pdf?locale=en-us) diferencia detección de contacto y medida de fuerza. LEGO también ofrece una [práctica de sensor y motor](https://education.lego.com/en-us/lessons/spike-python-u3-sensor-control/spike-python-u3l1-start-sensing/); esa lección usa Python, mientras que este tutorial utiliza bloques.
