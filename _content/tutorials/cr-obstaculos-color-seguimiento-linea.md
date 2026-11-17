---
title: "Codey Rocky: obstáculos, color y seguimiento de línea"
description: "Orientar el sensor infrarrojo/color, probar una respuesta a los obstáculos y compararla con el seguimiento de una línea."
robot: codey-rocky
level: "Intermedio"
duration: 50 min
order: 2
image: _assets/tutorials/cr-motors-sensors.webp
---

## 🎯 ¿Qué vamos a aprender?

Preparad una ruta corta para que Rocky avance, detecte un obstáculo y cambie de dirección antes de tocarlo. Después, reorientad el sensor inferior para probar una línea de contraste. La práctica separa las funciones del sensor infrarrojo/color de las decisiones del programa: el robot no comprende el mapa ni elige por sí mismo la ruta.

- Cambiar la orientación del sensor de Rocky para probar obstáculo o superficie.
- Leer una condición del sensor y relacionarla con los motores de las orugas.
- Comparar una prueba de obstáculo con una prueba de seguimiento de una línea.

![](../../_assets/tutorials/cr-motors-sensors.webp)

## 🧰 Materiales y preparación

- Codey Rocky de la dotación, acoplado y con carga suficiente.
- Ordenador con mBlock 5 y la versión de firmware disponible.
- Obstáculos anchos, blandos y no reflectantes, como cajas de cartón.
- Cinta oscura ancha y una base clara para hacer una pista de contraste.
- Cuadrícula de registro para anotar el estado del sensor, la condición y el resultado.

Comprobad que el módulo Rocky está conectado con Codey y que los bloques de sensor y motores aparecen en mBlock. Orientad el sensor infrarrojo/color hacia delante para la prueba de obstáculos; antes de probar la línea, reorientadlo hacia el suelo según el montaje del fabricante. Mantened el programa detenido mientras cambiáis la posición del sensor.

## 🧩 Funciones y controles

- Motores independientes de las dos orugas para avanzar y girar.
- Sensor infrarrojo/color orientable: detección de obstáculos cuando mira hacia delante y lectura de superficies/líneas cuando mira hacia abajo.
- Bloques condicionales de mBlock para transformar una lectura en una acción motora.
- Límite de la prueba: una detección infrarroja no es una medida universal en centímetros; superficie, ángulo y luz pueden cambiar la respuesta.

## 👣 Paso a paso

### 1. Conectad y comprobad los actuadores

Abrid mBlock 5, añadid Codey Rocky y conectad el robot por USB o por una conexión Bluetooth compatible. Ejecutad una prueba corta que mueva las dos orugas lentamente y después las detenga. Comprobad que el chasis está bien acoplado y que el sensor se puede orientar hacia delante o hacia abajo sin forzar el soporte.

Empezad con una orden corta, sobre una mesa sin bordes próximos:

```mblock
quan es prem el botó [A v]
avança a velocitat (20) durant (1) segons
atura el moviment
```

El dibujo muestra la idea del programa: buscad los bloques de movimiento equivalentes en vuestra versión y comprobad que Rocky se detiene después de un segundo.

### 2. Observad la detección de un obstáculo

Con el sensor orientado hacia delante, mostrad en la matriz de Codey el estado «libre» u «obstáculo» según el bloque disponible. Poned una caja de cartón a una distancia corta y después más lejos; repetid con una superficie clara y una oscura, manteniendo el ángulo. Registrad el resultado tal como lo expone mBlock (estado o valor de aproximación/distancia) y no lo convirtáis a centímetros si el bloque no da una medida calibrada.

### 3. Programad una maniobra de esquiva

Haced que Rocky avance a baja velocidad mientras el sensor indique espacio libre. Si detecta un obstáculo, detenedlo, haced una marcha atrás breve y girad a un lado antes de reanudar el avance. Buscad los bloques equivalentes en mBlock:

```mblock
quan es prem el botó [A v]
per sempre
si <el sensor detecta un obstacle> aleshores
atura el moviment
ves arrere durant (0.5) segons
gira a la dreta durant (0.5) segons
si no
avança a velocitat (20)
fi
fi
```

Empezad con una sola caja de cartón y una velocidad baja. Si el sensor no ofrece un bloque de obstáculo en vuestra versión, no inventéis el umbral: probad el caso oficial de Makeblock con el dispositivo y los bloques disponibles. Si el giro no deja espacio suficiente, cambiad solo la duración o la velocidad. El [caso oficial](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles) muestra un ejemplo con el sensor mirando hacia delante.

### 4. Comparad con el seguimiento de una línea

Detened el programa, girad el sensor para que mire hacia abajo y colocad Rocky sobre la pista de contraste. Seguid el [caso oficial de detección de colores](https://support.makeblock.com/hc/en-us/articles/7484512467223-Case-19-Codey-Rocky-identifies-colors) para mostrar la lectura en el indicador luminoso. Poned el sensor primero sobre el fondo claro y después sobre la cinta oscura, sin mover los motores, y anotad si las lecturas se diferencian. Si no se diferencian, revisad la orientación del sensor y probad otras superficies.

Para una primera prueba de seguimiento, situad el sensor sobre el borde derecho de la cinta, mirando en el sentido del recorrido. En un programa nuevo, repetid esta decisión: si detecta oscuro, haced un giro corto a la derecha; si detecta claro, un giro corto a la izquierda. Después de cada corrección, avanzad un intervalo corto a velocidad baja y volved a leer el sensor. Ajustad la duración de los giros y de los avances con pruebas breves. Invertid los giros si empezáis en el otro borde. Usad los bloques de condición, detección y movimiento disponibles en vuestra versión y detenedlo si pierde la pista. Si no podéis distinguir las superficies o el programa no mantiene el borde, conservad la prueba de lectura y anotad que el seguimiento queda pendiente.

## 🧪 Comprobación y resolución de problemas

Comprobad la detección de un obstáculo y el seguimiento de línea por separado. Si fallan, revisad la orientación y la altura del sensor, la reflexión de la superficie y las conexiones. Cambiad un único umbral o parámetro de movimiento cada vez.

## 🛡️ Uso y seguridad

Usad velocidades bajas, obstáculos blandos y un espacio delimitado. Mantened manos, cables y ropa lejos de las orugas. Detened el programa antes de reorientar el sensor.

## 🔗 Fuentes y límites

La página [About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) describe los motores de Rocky y el sensor infrarrojo/color. Los casos oficiales [Avoids Obstacles](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles) e [Identifies Colors](https://support.makeblock.com/hc/en-us/articles/7484512467223-Case-19-Codey-Rocky-identifies-colors) muestran la orientación del sensor hacia delante y hacia abajo. La respuesta depende de la superficie y del ángulo; no es un sensor ultrasónico de distancia calibrada.
