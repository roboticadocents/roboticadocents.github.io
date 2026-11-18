---
title: "Motores y sensores: parada con una tarjeta de color"
description: "Programar un motor sin accesorios para que se detenga cuando el sensor detecte una tarjeta roja."
robot: spike
level: "Intermedio"
duration: 40 min
order: 2
image: _assets/tutorials/sp-motors-sensors-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced girar un motor suelto y detenedlo cuando acerquéis una tarjeta roja al sensor de color. No hace falta construir ningún modelo ni encajar piezas LEGO: solo conectar los cables al Hub.

- Controlar un motor angular y programar una condición de parada.
- Comparar lecturas del sensor de color.
- Comprobar cómo influyen la luz y la distancia de la tarjeta.

![](../../_assets/tutorials/sp-motors-sensors-flat.webp)

## 🧰 Materiales y preparación

- Hub SPIKE Prime cargado, un motor angular y un sensor de color.
- Tarjetas blanca y roja de papel o cartulina.
- Ordenador o tableta con SPIKE App y conexión USB o Bluetooth.

Dejad el motor apoyado de forma estable sobre la mesa, con el eje libre y sin ruedas, ejes añadidos ni engranajes.

## 🧩 Funciones y controles

- Motor angular y sensor de color SPIKE Prime.
- Lectura de color y espera condicional para detener el motor.

## 👣 Paso a paso

### 1. Conectad y comprobad el sensor

Con el programa detenido, conectad el motor al puerto A y el sensor de color al C. Dejad el sensor sobre la mesa con la ventana de lectura descubierta. Abrid la información del Hub en SPIKE App y acercad sucesivamente las tarjetas blanca y roja a la ventana, sin tocarla. Buscad una posición que dé lecturas estables y mantenedla durante las pruebas.

### 2. Programad la condición de parada

Preparad esta secuencia con los bloques equivalentes de vuestra versión de SPIKE App:

```spikeapp
cuando comience el programa
activar el motor [A v] a velocidad baja
espera hasta que el sensor de color [C v] detecte [rojo v]
detener el motor [A v]
```

Empezad con la tarjeta blanca delante del sensor. Ejecutad el programa y sustituidla por la roja sin acercar las manos al motor. Observad si el eje deja de girar. Mantened accesible el botón de parada y parad manualmente si no se detecta el color.

### 3. Cambiad una condición

Repetid tres veces a la misma distancia. Después cambiad solo la distancia de la tarjeta o la iluminación y comparad las lecturas. Detened el programa antes de recolocar el motor o el sensor.

## 🧪 Comprobación y resolución de problemas

Anotad el color mostrado por la app y si el motor se ha detenido en cada intento. Si falla, revisad los puertos, la luz y la posición de la tarjeta, una cosa cada vez.

## 🛡️ Uso y seguridad

Mantened manos, pelo, ropa y cables lejos del eje del motor. No lo frenéis con los dedos. Detened el programa antes de mover el motor o cambiar los cables de puerto.

## 🔗 Fuentes y límites

Las [especificaciones oficiales de SPIKE Prime](https://education.lego.com/it-it/product-resources/spike-prime/downloads/technical-specifications/) describen el motor angular y el sensor de color. La parada depende de la posición, la altura y la luz ambiental; probad primero con una tarjeta ancha y una velocidad baja.
