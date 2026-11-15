---
title: 'Motors i sensors: parada amb una targeta de color'
description: Programar un motor sense accessoris perquè s’ature quan el sensor detecte una targeta vermella.
robot: spike
level: Intermedi
duration: 40 min
order: 2
image: _assets/tutorials/sp-motors-sensors-flat.webp
---

## 🎯 Què aprendrem?

Feu girar un motor solt i atureu-lo quan acosteu una targeta vermella al sensor de color. No cal construir cap model ni encaixar peces LEGO: només connectar els cables al Hub.

- Controlar un motor angular i programar una condició de parada.
- Comparar lectures del sensor de color.
- Comprovar com influeixen la llum i la distància de la targeta.

![](../../_assets/tutorials/sp-motors-sensors-flat.webp)

## 🧰 Materials i preparació

- Hub SPIKE Prime carregat, un motor angular i un sensor de color.
- Targetes blanca i vermella de paper o cartolina.
- Ordinador o tauleta amb SPIKE App i connexió USB o Bluetooth.

Deixeu el motor recolzat de manera estable sobre la taula, amb l’eix lliure i sense rodes, eixos afegits ni engranatges.

## 🧩 Funcions i controls

- Motor angular i sensor de color SPIKE Prime.
- Lectura de color i espera condicional per aturar el motor.

## 👣 Pas a pas

### 1. Connecteu i comproveu el sensor

Amb el programa aturat, connecteu el motor al port A i el sensor de color al C. Deixeu el sensor sobre la taula amb la finestra de lectura descoberta. Obriu la informació del Hub en SPIKE App i acosteu successivament les targetes blanca i vermella a la finestra, sense tocar-la. Busqueu una posició que done lectures estables i manteniu-la durant les proves.

### 2. Programeu la condició de parada

Prepareu aquesta seqüència amb els blocs equivalents de la vostra versió de SPIKE App:

```spikeapp
quan comença el programa
activa el motor [A v] a velocitat baixa
espera fins que el sensor de color [C v] detecte [vermell v]
atura el motor [A v]
```

Comenceu amb la targeta blanca davant del sensor. Executeu el programa i substituïu-la per la vermella sense acostar les mans al motor. Observeu si l’eix deixa de girar. Manteniu accessible el botó d’aturada i pareu manualment si no es detecta el color.

### 3. Canvieu una condició

Repetiu tres vegades a la mateixa distància. Després canvieu només la distància de la targeta o la il·luminació i compareu les lectures. Atureu el programa abans de recol·locar el motor o el sensor.

## 🧪 Comprovació i resolució de problemes

Anoteu el color mostrat per l’app i si el motor s’ha aturat en cada intent. Si falla, reviseu els ports, la llum i la posició de la targeta, una cosa cada vegada.

## 🛡️ Ús i seguretat

Manteniu mans, cabells, roba i cables lluny de l’eix del motor. No el freneu amb els dits. Atureu el programa abans de moure el motor o canviar els cables de port.

## 🔗 Fonts i límits

Les [especificacions oficials de SPIKE Prime](https://education.lego.com/it-it/product-resources/spike-prime/downloads/technical-specifications/) descriuen el motor angular i el sensor de color. La parada depén de la posició, l’altura i la llum ambiental; proveu primer amb una targeta ampla i una velocitat baixa.
