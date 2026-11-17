---
title: "Codey Rocky: la rueda, la inclinación y los mensajes"
description: "Probar la rueda y la inclinación de Codey y enviar un mensaje entre dos robots, si están disponibles."
robot: codey-rocky
level: "Avanzado"
duration: 60 min
order: 5
image: _assets/tutorials/cr-giroscopi-ir-control.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced que Codey muestre el valor de la ruedecilla y responda con un icono cuando lo inclinéis. Si disponéis de dos robots, al final podéis probar a enviar un mensaje por infrarrojos.

- Leer la ruedecilla en tres posiciones y comparar los valores.
- Hacer que una inclinación active un icono.
- Como ampliación opcional, enviar y recibir un mensaje IR con dos robots.

![](../../_assets/tutorials/cr-giroscopi-ir-control.webp)

## 🧰 Materiales y preparación

- Dos Codey Rocky de la dotación, si se quiere probar la transmisión entre robots; con un solo kit, la comunicación IR se puede simular con tarjetas.
- mBlock 5 y conexión USB o Bluetooth admitida por el dispositivo.
- Una superficie plana y una marca para definir la orientación inicial.
- Tarjetas con las órdenes ficticias «adelante», «detener» y «girar».

Comprobad en el mBlock instalado que los bloques de potenciómetro, orientación/gesto e infrarrojos aparecen para el dispositivo Codey. Las extensiones y nombres de bloques pueden variar. Si un bloque no aparece, documentad la función como no disponible en esa versión; no lo sustituyáis por una función de Neuron o de otro robot.

## 🧩 Funciones y controles

- Potenciómetro/gear knob para leer una entrada variable física.
- Conexión Bluetooth a la app Makeblock para el control Drive y el trazado Draw & Run, cuando la app es compatible y está disponible.
- Giroscopio y acelerómetro de seis ejes para detectar inclinación, giro o sacudida.
- Altavoz y matriz LED de Codey como salidas.
- Emisor y receptor de infrarrojos para enviar/recoger un código entre Codey Rocky compatibles.

## 👣 Paso a paso

### 1. Probad el control manual de la app

Si la app Makeblock está disponible en vuestro dispositivo, activad Bluetooth, encended Codey y seleccionad el modelo Codey Rocky. Acercad el dispositivo y esperad la confirmación sonora de conexión descrita por el fabricante. Comprobad las tres opciones de la app, sin dar por hecho que todas las versiones continúan disponibles:

- **Drive:** haced una orden corta en una zona delimitada y observad tanto el movimiento como el cambio de imagen de la matriz LED. Detened Codey antes de cambiar de modo.
- **Draw and Run:** dibujad un trayecto sencillo o poned una señal disponible; comprobad que el robot sigue el trayecto indicado.
- **Code:** abrid la opción y comprobad que deriva a mBlock para programar. Distinguid este entorno de la conducción manual y de la ruta dibujada.

Registrad qué opción habéis podido abrir y con qué dispositivo. Si la conexión, una función o la app no está disponible, planificad la misma ruta con tarjetas y marcadla como simulación; no presentéis esta alternativa como una prueba del robot.

### 2. Leed el potenciómetro

Mostrad en la pantalla el valor de la ruedecilla de Codey y giradla lentamente de un extremo al otro. Buscad los bloques equivalentes en vuestra versión:

```mblock
quan comença el programa
per sempre
mostra el valor de la rodeta
fi
```

Anotad el valor con la ruedecilla en tres posiciones: un extremo, el centro y el otro extremo. Volved a cada una y comprobad si las lecturas se parecen. Como ampliación, haced que los valores activen iconos diferentes.

### 3. Calibrad la inclinación y añadid una respuesta

Buscad en mBlock el evento que detecta la inclinación hacia la izquierda. Haced que muestre una flecha hacia la izquierda:

```mblock
quan Codey s'inclina cap a l'esquerra
mostra una fletxa cap a l'esquerra
```

Devolved Codey a la posición plana antes de cada intento y repetid tres veces. Si vuestra versión también ofrece el evento de inclinación hacia la derecha, añadid otro icono. La sacudida es una acción diferente de mantener Codey inclinado.

Como ampliación, haced que la inclinación muestre un icono y reproduzca un tono breve. Añadid una pausa para que la señal no se repita mientras Codey continúa inclinado. Si el sonido no es adecuado en esta prueba, usad solo el icono.

### 4. Ampliación opcional: enviad una señal infrarroja

Con dos Codey Rocky, buscad los bloques de infrarrojos que ofrezca la versión de mBlock instalada. Preparad el primero para que envíe un mensaje de prueba al pulsar A y el segundo para que muestre un icono cuando reciba ese mismo mensaje. Cargad el programa correspondiente en cada uno. Ponedlos encarados y próximos, pulsad A y observad la pantalla del receptor. Después interponed una cartulina y repetid. Si falta un bloque o solo hay un robot, representad el envío con tarjetas y marcadlo como simulación.

Para el **primer Codey**, buscad en «Infrarrojos» la pieza de enviar mensaje y escribid `HOLA`:

```mblock
quan es prem el botó [A v]
envia el missatge IR [HOLA]
```

Para el **segundo Codey**, combinad la pieza que comprueba el mensaje recibido con «si» y «para siempre». Haced que muestre una cara cuando reciba `HOLA`:

```mblock
quan comença el programa
per sempre
si <missatge IR [HOLA] rebut?> aleshores
mostra una cara feliç
fi
fi
```

Los dibujos resumen las acciones; los nombres y el aspecto de las piezas pueden variar. El [cuaderno oficial de Makeblock](https://qiniu.makeblock.com/education-makeblock-com/studentbook.pdf) muestra las piezas de envío y de comprobación en la prueba de comunicación entre Codeys. Si el bloque de recepción no aparece, usad las tarjetas e indicad que no se ha probado la comunicación real.

## 🧪 Comprobación y resolución de problemas

Completad una tabla con los tres valores de la ruedecilla y el resultado de tres inclinaciones hacia la izquierda. Si probáis la inclinación hacia la derecha, anotadla en una columna separada. Registrad qué opciones de la app habéis podido abrir.

Como ampliación, si tenéis dos robots, haced una prueba con los robots encarados y otra con una cartulina en medio. Antes de cada envío, comprobad que la pantalla del receptor está limpia y que una indicación anterior no se mantiene activa. Anotad si aparece una respuesta nueva. Si no podéis distinguir una recepción nueva de una indicación anterior, no contéis mensajes: anotad el límite y consultad el comportamiento de los bloques de la versión instalada. Si no tenéis dos robots o falta el bloque IR, marcad la prueba como simulación.

## 🛡️ Uso y seguridad

Mantened los robots quietos durante las pruebas de recepción IR. Inclinad Codey suavemente, sin estirar los cables. Usad un tono breve a volumen moderado y no enviéis mensajes personales.

## 🔗 Fuentes y límites

La página oficial [About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) identifica el potenciómetro, giroscopio, acelerómetro, emisor/receptor IR, altavoz, matriz e indicador RGB. La guía de [control con la app Makeblock](https://support.makeblock.com/hc/en-us/articles/1500008637181-Control-Codey-Rocky-with-the-Makeblock-app), el [catálogo de casos de Codey Rocky](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky) y la guía de [programación con mBlock 5](https://support.makeblock.com/hc/en-us/articles/1500008637961-Program-Codey-Rocky-with-mBlock-5) dependen de la versión de la app y del software. Makeblock aclara en las [FAQ](https://support.makeblock.com/hc/en-us/articles/1500004266501-FAQs-on-Codey-Rocky) que Codey Rocky no tiene reconocimiento de habla incorporado; las guías de esta colección que usan voz en línea o extensiones lo indican como dependencia externa.
