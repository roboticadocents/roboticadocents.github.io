---
title: "SPIKE Prime: del programa de bloques a Python"
description: "Cambiar al editor Python de MicroPython, controlar un motor angular y depurar una instrucción modificando un valor cada vez."
robot: spike
level: "Avanzado"
duration: 50 min
order: 6
image: _assets/tutorials/sp-python-motor-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced girar un motor de SPIKE Prime con un programa corto de Python. Después cambiad un número y comparad el movimiento con una versión hecha con bloques. No hace falta saber Python antes de empezar: copiad el ejemplo y seguid las pruebas.

- abrir un proyecto de Python en SPIKE App y conectar el Hub Prime;
- asociar el motor físico al puerto declarado en el código;
- reconocer las partes del programa que indican el puerto, el giro y la velocidad;
- modificar los grados o la velocidad y comprobar el resultado;
- leer un error de sintaxis o de conexión y corregirlo con una prueba controlada.

![](../../_assets/tutorials/sp-python-motor-flat.webp)

## 🧰 Materiales y preparación

- Hub grande LEGO Education SPIKE Prime y SPIKE App en ordenador o tableta compatible.
- Un motor angular conectado al puerto A; si usáis otro puerto, cambiad también la constante en el código.
- Cable USB o Bluetooth BLE y batería cargada.
- Superficie plana donde apoyar el motor de forma estable, con la parte giratoria visible y libre. No hace falta encajar piezas LEGO ni añadir accesorios.
- Tarjeta de papel con las equivalencias «puerto», «ángulo en grados» y «velocidad».

Abrid un proyecto de Python en SPIKE App y conectad el Hub. Si la interfaz no ofrece el editor Python en el dispositivo o la versión instalada, probad el movimiento con bloques de palabras; no instaléis software ajeno al flujo oficial del fabricante. Mantened libre la zona de giro del motor y no sujetéis el eje con los dedos mientras se ejecuta.

## 🧩 Funciones y controles

- Editor de Python de SPIKE App, basado en MicroPython, además de los bloques de iconos y de palabras.
- Control del motor angular conectado a un puerto del Hub mediante `motor.run_for_degrees`.
- Órdenes de Python que inician el programa y esperan a que el motor acabe el movimiento.
- Conexión con el Hub Prime y observación de la ejecución o de los mensajes de error de la app.

## 👣 Paso a paso

### 1. Preparad el motor y leed el código

Conectad un motor angular al puerto A y apoyadlo de forma estable sobre la mesa, sin ruedas, brazos ni ejes añadidos. Observad la marca de la parte giratoria para identificar la posición inicial. Abrid el proyecto Python y comprobad que la app reconoce el Hub y que el puerto A aparece disponible.

Copiad el programa siguiente. Si el motor está en otro puerto, sustituid `port.A` por el puerto real.

```python
from hub import port
import motor
import runloop

async def main():
    await motor.run_for_degrees(port.A, 360, 400)

runloop.run(main())
```

`port.A` indica dónde está conectado el motor; `360` pide una vuelta completa y `400` indica la velocidad. Copiad también las otras líneas y los espacios delante de la instrucción: permiten que el programa se inicie y espere a que el motor acabe.

### 2. Programad y ejecutad una vuelta

Antes de pulsar Run, dibujad la posición final esperada. Ejecutad el programa una sola vez y comparadla con la marca inicial. Si el eje gira en un sentido diferente del que queríais, detened la prueba y revisad el sentido, la posición del motor y la configuración de la versión de la API que muestra el editor.

### 3. Cambiad un parámetro cada vez

Cambiad los grados de `360` a `180`, ejecutad y comprobad que hace media vuelta. Después restaurad `360` y cambiad solo la velocidad de `400` a `200`. Registrad si cambia la distancia angular, el tiempo de movimiento o ambos. No cambiéis el puerto y los parámetros en una misma prueba.

### 4. Relacionad Python con bloques

En un proyecto de bloques, representad la misma acción: cuando empiece el programa, haced girar el motor del puerto elegido una vuelta completa. Comparad los datos de cada formato: el puerto y el giro aparecen en el bloque y en el texto. En el texto también hay que respetar los nombres y los espacios iniciales.

```spikeapp
cuando comience el programa
motor [A v] gira (360) grados
```

El dibujo muestra la acción equivalente; seleccionad los bloques y las unidades que ofrezca vuestra versión de la app. Si la velocidad se indica en una escala diferente, ajustadla y comparad el movimiento, sin asumir que los números son equivalentes.

## 🧪 Comprobación y resolución de problemas

Probad los valores 360° a velocidad 400, 180° a velocidad 400 y 360° a velocidad 200. Si el motor no responde, comprobad la conexión del Hub, el puerto A, todas las líneas del código y la indentación. Corregid una cosa cada vez.

## 🛡️ Uso y seguridad

Comprobad que el motor queda estable y mantened manos, pelo, ropa y cables fuera de la parte giratoria. Detened la ejecución antes de recolocarlo, modificar el programa o desconectar el cable.

## 🔗 Fuentes y límites

La [guía técnica y FAQ oficial de SPIKE Prime](https://education.lego.com/en-us/teacher-resources/lego-education-spike-prime/support-technical-info/lego-education-spike-prime-support-technical-info-product-info/) confirma seis puertos en el Hub Prime y que SPIKE App incluye bloques de iconos, bloques de palabras y editor de Python. La lección oficial [Get Moving with Motors](https://education.lego.com/en-us/lessons/get-moving-with-motors/) trabaja motores con Python, y el ejemplo de [Score!](https://education.lego.com/en-us/lessons/spike-python-u5-playing-games-with-simple-conditions/spike-python-u5l6-score-/) documenta `motor.run_for_degrees`. La sintaxis y las funciones pueden variar entre versiones: seguid las indicaciones del editor instalado y no uséis bibliotecas externas en este ejemplo.
