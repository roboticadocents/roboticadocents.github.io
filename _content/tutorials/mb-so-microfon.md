---
title: 'Micròfon i so: Detector de soroll i aplaudiments (V2)'
description: Utilitzar el micròfon de micro:bit V2 per observar i comparar el nivell de so ambiental.
robot: microbit
level: Iniciació
duration: 35 min
order: 4
image: _assets/tutorials/mb-so-microfon-flat.webp
---

## 🎯 Què aprendrem?

Feu que una micro:bit V2 reaccione a un so i compareu les lectures en silenci i després d’una palmada suau. El micròfon i l’altaveu integrats necessaris per a aquesta pràctica són de la versió V2.

- Mostrar una icona quan la placa detecta un so fort.
- Comparar el nivell de so en dues situacions.
- Provar l’altaveu integrat amb un to breu.

![](../../_assets/tutorials/mb-so-microfon-flat.webp)

## 🧰 Materials i preparació

- micro:bit V2 (amb micròfon i altaveu integrats)
- Ordinador amb MakeCode i cable USB per transferir el programa.
- Espai on provar sons breus a volum moderat; una placa V1 necessita un perifèric extern compatible.

## 🧩 Funcions i controls

- Micròfon i LED indicador, lectura del nivell de so i altaveu integrat en micro:bit V2.
- No reconeix paraules ni mesura decibels calibrats; en V1 cal un perifèric extern per a aquestes entrades/eixides de so.

## 👣 Pas a pas

### 1. Esdeveniment d'aplaudiment

En MakeCode, creeu un projecte nou. En **Entrada**, busqueu «quan s’escolta un so fort» i poseu-hi dins «mostra una icona», una pausa d’un segon i «neteja la pantalla». Aquest exemple mostra l’ordre dels blocs:

```makecode
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
```

Descarregueu el programa a la V2 i feu una palmada suau: la icona hauria d’aparéixer i desaparèixer. Espereu que desaparega abans de repetir la prova. Si no respon, apropeu-vos un poc o reviseu el llindar de so de l’editor, sense fer sorolls forts. La [referència oficial](https://makecode.microbit.org/reference/input/on-sound) mostra aquesta peça i un exemple.

### 2. Mostra el nivell de so

Creeu un segon projecte perquè la barra no tape la icona del primer. Dins de «per sempre», afegiu el bloc de mostrar una barra de llums. En el valor de la barra poseu «nivell de so» i deixeu el màxim a 255. El nombre serveix per comparar lectures; no són decibels.

```makecode
basic.forever(function () {
    led.plotBarGraph(input.soundLevel(), 255)
})
```

La [referència oficial del nivell de so](https://makecode.microbit.org/reference/input/sound-level) mostra la peça del micròfon i recorda que necessita micro:bit V2.

### 3. Proveu l’altaveu

En un tercer projecte, poseu «reprodueix un to» dins de «quan es prem el botó B». Descarregueu-lo i premeu B per escoltar-lo a l’altaveu de la V2. Trieu un volum còmode; també podeu mostrar una icona en lloc de reproduir un so.

> **💡 Consell d’ús:** Deseu els projectes amb noms diferents per provar la icona, la barra i el to per separat.

## 🧪 Comprovació i resolució de problemes

Amb el primer projecte, comproveu que una palmada suau activa la icona. Amb el projecte de la barra, observeu si puja el nivell de so. Amb el projecte del to, premeu B. Si no hi ha resposta, reviseu el projecte carregat i que la placa siga V2.

## 🛡️ Ús i seguretat

Manteniu el volum moderat i feu servir una palmada suau; no calen crits ni sons forts. El programa llig el nivell de so i no necessita enregistrar veus.

## 🔗 Fonts i límits

La referència de MakeCode explica l’esdeveniment [so fort](https://makecode.microbit.org/reference/input/on-sound) i el bloc [nivell de so](https://makecode.microbit.org/reference/input/sound-level). El micròfon i l’altaveu integrats d’aquesta pràctica requereixen micro:bit V2; el número de la barra no són decibels.
