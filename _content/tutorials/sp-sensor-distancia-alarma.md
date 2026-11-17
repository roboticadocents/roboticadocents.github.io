---
title: "SPIKE Prime: sensor de distancia y aviso de proximidad"
description: "Crear un aviso visual y sonoro acercando una caja a un sensor quieto, y observar el giro manual del Hub."
robot: spike
level: "Intermedio"
duration: 45 min
order: 5
image: _assets/tutorials/sp-sensor-distancia-alarma-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Cread un aviso de proximidad con el sensor quieto sobre la mesa. Movad una caja a mano para activarlo y explorad después el giro del Hub, también a mano. No hace falta construir ninguna base ni encajar piezas LEGO; este ejemplo no utiliza motores.

- Comparar lecturas con tres distancias conocidas.
- Programar un aviso condicionado por la distancia.
- Observar un ángulo de giro con el sensor de movimiento del Hub.

![](../../_assets/tutorials/sp-sensor-distancia-alarma-flat.webp)

## 🧰 Materiales y preparación

- Hub SPIKE Prime cargado y sensor de distancia Technic.
- Caja de cartón con una cara plana, regla y papel con un ángulo recto dibujado.
- Ordenador o tableta con SPIKE App y conexión USB o Bluetooth.

Dejad el sensor apoyado sobre la mesa, con las ventanas orientadas hacia la caja y sin obstrucciones. Solo hace falta conectar su cable al Hub. Comprobad la unidad de lectura que muestra la app.

## 🧩 Funciones y controles

- Sensor ultrasónico para estimar distancia.
- Giroscopio del Hub para observar un giro manual.
- Altavoz integrado y matriz LED como avisos complementarios.

## 👣 Paso a paso

### 1. Comprobad tres distancias

Conectad el sensor de distancia ultrasónico al puerto C y abrid la información del Hub en SPIKE App. Mantened el sensor quieto y poned la cara plana de la caja a 10, 20 y 30 cm de las ventanas, midiendo con la regla. Anotad la lectura en cada posición. Si varía mucho, revisad la orientación y dejad libre el espacio entre caja y sensor.

### 2. Programad un aviso de proximidad

Poned la caja a 30 cm y preparad los bloques equivalentes de vuestra versión de SPIKE App:

```spikeapp
quan comença el programa
esborra la pantalla
espera fins que la distància del sensor [C v] siga menor de (12) cm
mostra un signe d’exclamació
emet un to curt amb el Hub
```

Comprobad las unidades: 12 cm equivalen a 120 mm. Ejecutad el programa y acercad lentamente la caja a mano, sin mover el sensor. Observad cuándo aparece el icono y suena el tono del altavoz del Hub. El programa avisa una vez; para repetir, alejad la caja y volved a ejecutarlo.

### 3. Observad un giro manual con el giroscopio

Haced esta prueba en un proyecto separado. Dejad el Hub plano y quieto, y poned a cero el ángulo de giro con el bloque correspondiente de la app. Girad el Hub a mano un cuarto de vuelta sobre la mesa, siguiendo el ángulo recto del papel. Observad si la lectura se acerca a 90° o −90°: el signo depende del sentido. Dejad margen al cable del sensor, sin estirarlo. Volved a la posición inicial, poned a cero y repetid tres veces.

### 4. Comparad los avisos

Repetid la prueba de proximidad con otro umbral, por ejemplo 20 cm. Mantened el icono como alternativa al sonido y comparad a qué distancia se activa. Ajustad el volumen a un nivel cómodo con las opciones disponibles en la app.

## 🧪 Comprobación y resolución de problemas

Comprobad que el aviso se activa cuando la caja cruza el umbral programado. Si no lo hace, revisad el puerto, las unidades, la orientación y la lectura del sensor. En la prueba manual del Hub, poned a cero el ángulo antes de girarlo.

## 🛡️ Uso y seguridad

Manipulad el Hub sin estirar los cables y dejad espacio para mover la caja. Usad un aviso breve a volumen moderado. El ejemplo no es una alarma real de seguridad.

## 🔗 Fuentes y límites

La ficha técnica LEGO del [sensor de distancia Technic](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt64c2b9534cf10f68/5f8801b8bc43790f5c4389ea/techspecs_technicdistancesensor.pdf?locale=en-us) describe la tecnología ultrasónica y los rangos; las [especificaciones del Hub Prime](https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltf512a371e82f6420/5f8801baf4f4cf0fa39d2feb/techspecs_techniclargehub.pdf?locale=en-us) documentan altavoz y sensor de movimiento. Las lecturas son aproximadas; este ejemplo no es un sistema de seguridad.
