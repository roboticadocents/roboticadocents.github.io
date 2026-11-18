---
title: "Tale-Bot Pro: repetición, danza y mapas interactivos"
description: "Probar los mandos de repetición y danza, escuchar la guía OID del mapa y depurar una secuencia sin confundir grabación con reconocimiento de habla."
robot: tale-bot
level: "Intermedio"
duration: 50 min
order: 4
image: _assets/tutorials/tb-repeticio-mapes-dansa.webp
---

## 🎯 ¿Qué vamos a aprender?

Preparad una ruta corta, probad la repetición y descubrid qué pasa sobre un mapa interactivo compatible. Las marcas especiales del mapa permiten que el robot reproduzca instrucciones; un mapa impreso normal no tiene esta función.

- Comparar un programa repetido con un programa que incluye órdenes adicionales.
- Diferenciar una danza predefinida de una secuencia programada con los botones.
- Explorar la lectura OID y la grabación solo con accesorios compatibles.

![](../../_assets/tutorials/tb-repeticio-mapes-dansa.webp)

## 🧰 Materiales y preparación

- Tale-Bot Pro cargado, en una superficie plana.
- Un mapa interactivo OID compatible o, como alternativa, un mapa impreso sin funciones interactivas.
- Tarjetas de mando y una ruta corta con inicio y destino marcados.
- Dos rotuladores lavables y el soporte de dibujo solo si forman parte del kit disponible.

Antes de empezar, comprobad las teclas físicas de movimiento, Play, borrado, repetición, danza y grabación. El fabricante documenta una grabación de voz de hasta 30 segundos y seis danzas predefinidas; las funciones interactivas del mapa dependen del mapa concreto.

## 🧩 Funciones y controles

- Botón de repetición para repetir unidades de órdenes del programa completo; no permite repetir solo un fragmento de un programa más largo.
- Indicadores de color para seguir las órdenes registradas.
- Botón de danza aleatoria con movimientos predefinidos.
- Lectura OID del mapa compatible e instrucciones de voz contextuales.
- Grabación y reproducción de audio, diferenciadas de la interpretación de habla.
- Dibujo mediante accesorio compatible, como extensión opcional.

## 👣 Paso a paso

### 1. Programad y repetid una secuencia

Mantened X más de un segundo para empezar sin órdenes anteriores. Preparad con tarjetas **Adelante → Derecha**, introducid esas dos órdenes y pulsad Play sin activar la repetición. Contad los movimientos y devolved el robot a la posición y orientación iniciales. Introducid de nuevo la secuencia si hace falta, pulsad el botón de repetición, observad las luces y pulsad Play. Contad cuántas veces se hace la secuencia. Cambiad el número de repeticiones con el botón y volved a probar desde el inicio. La repetición se aplica al programa completo: no permite seleccionar solo un fragmento si después hay otras órdenes. Si no sabéis qué opción de repetición está activa, empezad con una prueba corta en un espacio amplio y detened el robot si continúa más de lo previsto.

Secuencia base; el botón de repetición se configura después, tal como se explica en el paso:

```talebot
avanzar -> girar derecha
```

### 2. Comparad la danza predefinida

Borrad las órdenes anteriores, pulsad una vez el botón de danza y después **Play**. Repetid la prueba tres veces y anotad si el movimiento cambia. Comparadlo con una secuencia direccional propia: la danza selecciona un patrón incorporado, mientras que la ruta depende de las órdenes introducidas.

```talebot
baile -> ejecutar
```

### 3. Explorad la guía de un mapa OID

Con un mapa interactivo compatible, colocad el robot en la entrada principal y escuchad la instrucción. Después probad una entrada secundaria y comparad el mensaje. Programad una ruta y pulsad Play. Para volver a utilizarlo fuera del mapa, apagad el robot y volved a encenderlo. Un mapa impreso normal no activa la lectura OID; sin un mapa compatible, omitid esta prueba.

### 4. Añadid una voz grabada o un trazo opcional

Mantened pulsado el botón de grabación mientras decís una frase ficticia corta y soltadlo. El robot la reproducirá para que podáis comprobarla. Borrad las órdenes anteriores e introducid **Adelante → grabación** con una pulsación breve del botón de grabación; pulsad Play y escuchad el mensaje después del movimiento.

```talebot
avanzar -> grabación -> ejecutar
```

Usad una frase ficticia sin nombres ni datos personales.

## 🧪 Comprobación y resolución de problemas

Comparad la ejecución de la ruta con repetición y sin ella. Si continúa más de lo previsto, detened el robot y revisad la opción de repetición. Probad la danza y la grabación por separado. La guía OID solo se puede comprobar con un mapa compatible.

## 🛡️ Uso y seguridad

Dejad espacio libre para las repeticiones y danzas. Mantened manos y rotuladores lejos de las ruedas. Detened el robot antes de moverlo y usad mensajes ficticios sin datos personales.

## 🔗 Fuentes y límites

El [curso oficial de Tale-Bot Pro de Matatalab](https://matatalab.com/en/lesson4.2) describe botones, indicadores, grabación/reproducción, danza y repetición. Las [instrucciones oficiales de la Activity Box](https://matatalab.com/en/lesson4.3) documentan el uso de los mapas interactivos y las entradas OID. La grabación no es reconocimiento de habla; la danza no es una secuencia creada por el usuario; la repetición no permite seleccionar una subsecuencia dentro de un programa más largo; y la lectura de mapa requiere material OID compatible.
