---
title: "SPIKE Prime: programar y comprobar el giro del motor"
description: "Comparar cuartos, medias vueltas y vueltas completas con un motor sin ruedas ni piezas añadidas."
robot: spike
level: "Intermedio"
duration: 40 min
order: 4
image: _assets/tutorials/sp-distancia-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Programad y comprobad el giro de un motor angular suelto. No hace falta montar ningún vehículo ni encajar piezas LEGO: trabajaréis con el motor tal como viene en el kit.

- Relacionar 90°, 180° y 360° con un cuarto, media vuelta y una vuelta completa.
- Comprobar que el giro corresponde al ángulo programado.
- Distinguir el ángulo de giro del motor de la distancia recorrida por un vehículo.

![](../../_assets/tutorials/sp-distancia-flat.webp)

## 🧰 Materiales y preparación

- Hub SPIKE Prime cargado y un motor angular.
- Papel con un círculo dividido en cuatro partes para comprobar el giro.
- Ordenador o tableta con SPIKE App y conexión USB o Bluetooth.

Apoyad el motor de forma estable sobre la mesa con la marca de la parte giratoria visible. No le añadáis ruedas, brazos ni ejes. El papel sirve de referencia visual junto al motor, sin tocarlo.

## 🧩 Funciones y controles

- Motor angular: giro programado en grados, sentido y velocidad.
- Observación de la posición angular; sin ruedas no se calcula una distancia lineal.

## 👣 Paso a paso

### 1. Conectad e identificad la posición inicial

Conectad el motor al puerto A y comprobad que SPIKE App lo reconoce. Observad la marca de la parte giratoria y dibujad su posición inicial en el papel. Usad las marcas del papel para comprobar después un cuarto de vuelta.

### 2. Programad un giro corto

Seleccionad los bloques equivalentes de vuestra versión de la app y una velocidad baja:

```spikeapp
quan comença el programa
fixa la velocitat del motor [A v] a (20) %
motor [A v] gira (90) graus
```

Ejecutad una vez y comprobad que la marca ha girado un cuarto de vuelta. No toquéis ni frenéis la parte giratoria. Si el motor se desplaza sobre la mesa, detenedlo y buscad una posición de apoyo estable antes de continuar.

### 3. Comparad tres ángulos

Probad 90°, 180° y 360°, manteniendo la misma velocidad. Antes de cada ejecución, anotad la posición de partida y dibujad el resultado esperado: el giro es relativo a esa posición, no a un cero fijo. En una vuelta completa, la marca vuelve aproximadamente al punto inicial; observad también el movimiento para distinguirla de una ausencia de giro.

### 4. Cambiad solo la velocidad

Repetid el giro de 180° con dos velocidades bajas diferentes. Comparad el ángulo final y el tiempo que tarda. Mantened el mismo puerto, sentido y ángulo en las dos pruebas.

## 🧪 Comprobación y resolución de problemas

Comprobad la posición final de la marca del motor para 90°, 180° y 360°. Si el giro no corresponde al valor indicado, revisad la unidad del bloque, el puerto y la posición inicial antes de repetir.

## 🛡️ Uso y seguridad

Mantened manos, ropa, pelo y cables lejos del motor en marcha. Apoyadlo de forma estable y detened el programa antes de recolocarlo. No frenéis el eje con los dedos.

## 🔗 Fuentes y límites

Las [especificaciones de SPIKE Prime](https://education.lego.com/it-it/product-resources/spike-prime/downloads/technical-specifications/) describen los motores angulares. Esta prueba observa el giro del motor sin carga; no mide un desplazamiento lineal.
