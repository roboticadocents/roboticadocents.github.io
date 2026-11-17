---
title: "Codey Rocky: luz, sonido, RGB y seguimiento de línea"
description: "Explorar los sensores de luz, sonido e infrarrojo/color y combinarlos con el indicador RGB y los motores de Rocky."
robot: codey-rocky
level: "Intermedio"
duration: 55 min
order: 4
image: _assets/tutorials/cr-sensors-llum-so-linia.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced que Codey responda a una palmada suave e investigad cómo detecta la luz. Después probad Rocky sobre una línea negra. Observad qué detecta el robot y qué le habéis indicado que haga.

- Comparar lecturas de luz y sonido en condiciones repetibles.
- Relacionar la lectura del sensor infrarrojo/color con una línea y los motores.
- Explicar por qué los umbrales dependen de la superficie y de la luz ambiental.

![](../../_assets/tutorials/cr-sensors-llum-so-linia.webp)

## 🧰 Materiales y preparación

- Codey Rocky de la dotación, cargado y montado correctamente.
- Ordenador con una versión compatible de mBlock 5 y la extensión/dispositivo Codey.
- Cartulinas clara, oscura y de colores; una tira negra ancha sobre fondo blanco.
- Una luz regulable o una caja de cartón abierta para variar la iluminación.
- Tarjetas de prueba con condiciones de luz, sonido y color; los datos pueden ser simulados.

Antes de empezar, comprobad que el robot se conecta, que las orugas se mueven libremente y que el sensor infrarrojo/color no está tapado. Los nombres de los bloques pueden variar con la versión de mBlock y del firmware; no sustituyáis la lectura del sensor por una afirmación de distancia o color exacto si la aplicación no la proporciona.

## 🧩 Funciones y controles

- Sensor de luz ambiental e indicador RGB programable del módulo Codey.
- Sensor de sonido ambiental: detecta intensidad/umbral de sonido, no palabras ni identidad de quien habla.
- Sensor infrarrojo/color de Rocky y motores de las orugas para probar una ruta con línea y tarjetas.
- Condicionales y ajuste de umbrales en mBlock 5; el sensor reflejado depende del material, la distancia y el ángulo.

## 👣 Paso a paso

### 1. Comprobamos las entradas y salidas

Abrid mBlock 5, seleccionad Codey Rocky y ejecutad una secuencia corta que muestre un color en el indicador RGB y haga avanzar Rocky a baja velocidad durante un intervalo breve. Detened el programa y verificad que el botón de parada del proyecto responde. Anotad qué elementos son entradas (luz, sonido y reflexión infrarroja) y cuáles son salidas (RGB y motores).

Podéis empezar con esta prueba corta:

```mblock
quan es prem el botó [A v]
encén el llum RGB de color [blau v]
avança a velocitat (20) durant (1) segons
atura el moviment
```

Buscad los bloques equivalentes en vuestra versión. Al pulsar A, observad la luz y comprobad que Rocky se detiene; si no lo hace, detened el programa antes de continuar.

### 2. Calibramos luz y color

Mantened Codey en la misma orientación. En mBlock, combinad un bloque de pantalla con el valor del sensor de luz. Esta es la idea que debéis construir con las piezas de vuestra versión:

```mblock
quan es prem el botó [A v]
mostra el valor de llum ambiental
```

Pulsad A y anotad tres lecturas con luz habitual y tres haciendo sombra al sensor. Si necesitáis ayuda para encontrar el sensor, consultad el [ejemplo de luz del fabricante](https://support.makeblock.com/hc/en-us/articles/7463194482839-Case-12-Energy-conserving-RGB-LED-indicator).

Después, con Rocky detenido y el sensor orientado hacia abajo, comparad una tarjeta clara y una oscura a la misma distancia. Anotad qué detecta el bloque de color de vuestra versión. No supongáis que distinguirá todos los colores con la misma fiabilidad.

### 3. Probad el sensor de sonido con una entrada controlada

En un proyecto de prueba, mostrad el nivel de sonido continuamente en la pantalla de Codey con el bloque de lectura del sensor dentro de «para siempre». Anotad el valor en silencio y después durante tres palmadas suaves, siempre a la misma distancia. Elegid un valor entre las lecturas de silencio y de palmada: será el **valor de corte**. Por ejemplo, si obtenéis aproximadamente 10 y 40, probad con 25.

En un proyecto nuevo, construid esta idea con los bloques equivalentes de mBlock. El número 25 es solo un ejemplo: poned vuestro valor de corte.

```mblock
quan comença el programa
per sempre
si <nivell de so > (25)> aleshores
encén el llum RGB de color [blau v]
si no
apaga el llum RGB
fi
espera (0.5) segons
fi
```

Este dibujo resume las acciones; los nombres de los bloques pueden variar. Probad el programa en silencio y con una palmada. Si la luz no cambia, revisad las lecturas y ajustad el valor de corte. El sensor no reconoce palabras.

### 4. Probad el seguimiento de línea y depurad la ruta

Detened el programa y orientad el sensor infrarrojo/color de Rocky hacia el suelo. Ponedlo primero sobre el fondo blanco y después sobre la línea negra; anotad qué muestra mBlock en cada caso. El sensor identifica la superficie que tiene debajo, pero no sabe a qué lado queda el centro de la línea.

Para probar una corrección propia, empezad con el sensor sobre el **borde derecho** de la línea, mirando en el sentido del recorrido. Programad un giro corto a la derecha cuando vea negro y a la izquierda cuando vea blanco; después de cada giro, avanzad un intervalo corto a baja velocidad y volved a leer el sensor. Ajustad la duración de los giros y de los avances en un tramo recto y detenedlo si pierde la pista. Si empezáis por el otro borde, intercambiad los giros. Si vuestra versión ofrece un ejemplo de seguimiento, también podéis probarlo y comparar el resultado. Si la lectura no distingue las superficies, anotad que el seguimiento queda pendiente.

## 🧪 Comprobación y resolución de problemas

Comprobad que las lecturas cambian entre luz y sombra, y entre silencio y una palmada suave. Si Rocky pierde la línea, revisad que el sensor mire al suelo y que empiece en el borde correcto. Ajustad un solo umbral cada vez.

## 🛡️ Uso y seguridad

Mantened el robot a velocidad baja dentro de un recorrido delimitado, lejos de bordes y dedos. Usad sonidos breves a volumen moderado. Detenedlo antes de cambiar el sensor de posición.

## 🔗 Fuentes y límites

[Makeblock · About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) describe los elementos de Codey y Rocky. [Makeblock · Programming Codey Rocky with mBlock 5](https://support.makeblock.com/hc/en-us/articles/1500008637961-Program-Codey-Rocky-with-mBlock-5) es el punto de partida para la conexión; comprobad la compatibilidad del sistema y la extensión instalada. La detección de sonido no es reconocimiento de habla, y el sensor infrarrojo/color no es una cámara ni un dispositivo de medida universal.
