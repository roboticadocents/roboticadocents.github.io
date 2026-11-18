---
title: "Codey Rocky: expresiones, sonidos y energía"
description: "Personalizar la matriz LED, programar sonidos y danza y comprobar el nivel de batería del robot."
robot: codey-rocky
level: "Intermedio"
duration: 50 min
order: 7
image: _assets/tutorials/cr-expressions-so-bateria.webp
---

## 🎯 ¿Qué vamos a aprender?

Cread un saludo con una cara y una luz de Codey. Después podéis añadirle un sonido y probar una danza. Los nombres de las piezas pueden variar según la versión de mBlock.

- Dibujar y mostrar una expresión en la matriz LED de 16 × 8.
- Vincular una acción a los botones y al indicador RGB.
- Crear una secuencia corta de tonos o una melodía y activar una danza programada.
- Consultar el nivel de batería antes de hacer una prueba larga.

![](../../_assets/tutorials/cr-expressions-so-bateria.webp)

## 🧰 Materiales y preparación

- Un Codey Rocky de la dotación, con las orugas libres y espacio para girar sin golpear objetos.
- Ordenador con mBlock 5 y el dispositivo/firmware de Codey actualizados según las instrucciones del fabricante.
- Plantilla de 16 × 8 píxeles, cartulinas de colores y tarjetas con iconos de respuesta.
- Opcional: un espacio silencioso y un temporizador para comparar la duración de la secuencia.

Conectad Codey y confirmad que la vista de bloques ofrece pantalla, botones, RGB y sonido. Si el bloque de batería no aparece, anotad el estado indicado por el dispositivo o cargadlo antes de la prueba; no deduzcáis un porcentaje exacto a partir del tiempo de uso. Mantened el robot sobre una superficie plana y poned el volumen bajo.

## 🧩 Funciones y controles

- Matriz LED 16 × 8: dibujo de iconos o patrones propios.
- Botones programables de Codey e indicador RGB para activar y comunicar estados.
- Altavoz integrado: tonos, efectos o melodías disponibles en la extensión del dispositivo.
- Motores de oruga: movimiento o danza programada, ejecutada en una zona libre.
- Lectura de batería disponible en mBlock; es un indicador de estado, no una medida de duración garantizada.

## 👣 Paso a paso

### 1. Preparad una expresión de 16 × 8

Dibujad una expresión propia —una cara o un símbolo— que se pueda reconocer sin color. Reproducidla con el bloque de mostrar imagen y comparad la pantalla real con el dibujo. Haced una segunda versión con solo tres cambios de píxel y explicad qué sigue siendo legible.

### 2. Asociad una respuesta al botón y al RGB

Programad el botón A para que muestre la primera expresión y encienda el indicador RGB con un color elegido. Haced que el botón B muestre un icono diferente. Pulsad cada botón tres veces y observad la respuesta.

Para empezar, preparad solo la respuesta del botón A:

```mblock
cuando se pulse el botón [A v]
mostrar una cara feliz
encender la luz RGB de color [azul v]
```

El dibujo es una guía: elegid los bloques de pantalla y luz equivalentes en mBlock. Pulsad A tres veces y comprobad la cara y la luz antes de añadir el botón B o los sensores.

**Para ampliar:** en un proyecto separado, probad la idea de ahorro del fabricante. Con luz ambiental alta, el RGB queda apagado; con luz tenue, se enciende cuando el sensor de sonido supera el valor que habéis elegido y se apaga cuando el sonido baja. Comparad claro/silencio, sombra/silencio y sombra/palmada suave. Mantener los proyectos separados evita que dos órdenes diferentes controlen la misma luz a la vez.

### 3. Añadid un sonido o una melodía breve

Después de la respuesta visual, reproducid un tono o una secuencia corta con los bloques de sonido que ofrece el dispositivo. Si la versión permite elegir notas, alternad dos notas; si solo ofrece efectos, comparad dos sonidos disponibles. Añadid una pausa para que una pulsación no dispare una cadena de sonidos superpuestos. Mantened una alternativa solo visual.

### 4. Probad una danza controlada

Añadid una danza o una secuencia de movimientos predefinida a una activación separada. Poned Codey Rocky en el centro de un área libre, iniciad el programa con el robot quieto y detenedlo antes de cambiar el montaje. Si la versión instalada no incluye un bloque de danza, construid una secuencia propia con dos giros cortos y una pausa; identificadla como programa propio.

### 5. Registrad el estado de la batería

Antes de la prueba final, consultad el bloque o indicador de nivel de batería de mBlock y anotad qué muestra. Ejecutad el saludo tres veces y volved a consultar el estado. Comparad la lectura sin interpretar diferencias pequeñas como una predicción exacta de autonomía. Si el robot se desconecta o responde de forma irregular, cargadlo y repetid la misma prueba.

## 🧪 Comprobación y resolución de problemas

Pulsad A y B y comprobad la respuesta de cada botón. Probad el sonido y la danza por separado, con el robot en una zona libre. Si una acción falla, revisad el bloque correspondiente, la conexión y la carga de la batería.

## 🛡️ Uso y seguridad

Ajustad el volumen antes de reproducir tonos. Mantened el robot alejado de bordes, cables y personas durante la danza. No bloqueéis las orugas con las manos mientras los motores están activos.

## 🔗 Fuentes y límites

Makeblock enumera los casos de [pantalla emocional, RGB, sonidos, potenciómetro, luz ambiental, batería, sacudida, posturas, melodías y danza](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky), incluido el [indicador RGB de ahorro de energía](https://support.makeblock.com/hc/en-us/articles/7463194482839-Case-12-Energy-conserving-RGB-LED-indicator), y describe las funciones de [Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky). La lectura de batería y los bloques de sonido dependen del dispositivo, firmware y versión de mBlock; las melodías y danzas disponibles pueden variar. Las lecciones de tiempo meteorológico y los juegos en línea dependen de servicios de red externos; el reconocimiento de voz también requiere un servicio externo y no es una función autónoma del robot.
