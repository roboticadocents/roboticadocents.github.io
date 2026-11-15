---
title: 'micro:bit: llegir un sensor extern'
description: Llegir amb MakeCode un sensor d’humitat compatible i comparar dues lectures.
robot: microbit
level: Intermedi
duration: 50 min
order: 2
image: _assets/tutorials/mb-motors-sensors-flat.webp
---

## 🎯 Què aprendrem?

Connecta un sensor d’humitat compatible a P0 i observa com canvia la lectura quan el sensor està sec o humit. El servo és una ampliació opcional i es prova en una prova diferent.

- Connectar el sensor segons l’esquema del fabricant.
- Mostrar i comparar lectures en dues condicions conegudes.

![](../../_assets/tutorials/mb-motors-sensors-flat.webp)

## 🧰 Materials i preparació

- micro:bit amb portapiles
- Ordinador amb MakeCode i cable USB de dades per transferir el programa.
- Sensor d'humitat compatible amb micro:bit i instruccions de connexió del fabricant.
- Cables indicats per les instruccions dels components.

## 🧩 Funcions i controls

- Pin P0 per llegir el senyal analògic d’un sensor extern.
- El sensor no forma part de la micro:bit. La placa no pot alimentar ni llegir qualsevol sensor sense comprovar-ne abans la compatibilitat i l’esquema.

## 👣 Pas a pas

### 1. Comproveu el sensor i els cables

Abans de connectar res, identifiqueu el model exacte del sensor i llegiu-ne l’esquema. Amb la placa desconnectada, connecteu el senyal a P0 i els altres cables als pins que indique el fabricant. No feu la connexió si no teniu l’esquema o si falta una placa auxiliar necessària.

### 2. Llegir el valor analògic

En MakeCode, poseu «mostra el número» dins de «per sempre». En l’espai del nombre, col·loqueu la peça de **lectura analògica del pin P0**, disponible a Pins. Així veureu la lectura del sensor a la pantalla.

```makecode
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
```

La [referència oficial de lectura d'un pin](https://makecode.microbit.org/reference/pins/analog-read-pin) mostra la peça i un exemple de lectura en pantalla.

### 3. Compareu sec i humit

Anoteu tres lectures amb el sensor sec i tres amb el sensor humit, seguint les instruccions del fabricant. Compareu els valors: el nombre és una lectura del pin, no un percentatge universal d’humitat. No submergiu la placa ni els cables. Sense sensor, proveu el programa al simulador i marqueu el resultat com a simulat.

## 🧪 Comprovació i resolució de problemes

Compareu les tres lectures de cada condició. Si no canvien, confirmeu al manual quin pin proporciona el senyal i reviseu els cables amb la placa desconnectada. Si el sensor requereix una placa auxiliar, no el connecteu directament a P0. Sense sensor, feu la prova al simulador i marqueu les lectures com a simulades.

## 🛡️ Ús i seguretat

Manteniu l’aigua allunyada de la micro:bit, els cables i la placa auxiliar. Mulleu només la part del sensor indicada pel fabricant i desconnecteu l’alimentació abans de canviar cables. El servo no és necessari per a aquesta prova.

## 🔗 Fonts i límits

La [referència oficial de MakeCode per a la lectura analògica](https://makecode.microbit.org/reference/pins/analog-read-pin) descriu el bloc utilitzat. La connexió i la interpretació dels valors depenen del model concret del sensor; seguiu-ne el manual.
