---
title: SPIKE Prime: del programa de blocs a Python
description: Canviar a l’editor Python de MicroPython, controlar un motor angular i depurar una instrucció modificant un valor cada vegada.
robot: spike
level: Avançat
duration: 50 min
order: 6
image: _assets/tutorials/sp-python-motor-flat.webp
---

## 🎯 Què aprendrem?

Feu girar un motor de SPIKE Prime amb un programa curt de Python. Després canvieu un número i compareu el moviment amb una versió feta amb blocs. No cal saber Python abans de començar: copieu l’exemple i seguiu les proves.

- obrir un projecte de Python a SPIKE App i connectar el Hub Prime;
- associar el motor físic al port declarat al codi;
- reconéixer les parts del programa que indiquen el port, el gir i la velocitat;
- modificar els graus o la velocitat i comprovar el resultat;
- llegir un error de sintaxi o de connexió i corregir-lo amb una prova controlada.

![](../../_assets/tutorials/sp-python-motor-flat.webp)

## 🧰 Materials i preparació

- Hub gran LEGO Education SPIKE Prime i SPIKE App en ordinador o tauleta compatible.
- Un motor angular connectat al port A; si useu un altre port, canvieu també la constant al codi.
- Cable USB o Bluetooth BLE i bateria carregada.
- Superfície plana on recolzar el motor de manera estable, amb la part giratòria visible i lliure. No cal encaixar peces LEGO ni afegir-hi accessoris.
- Targeta de paper amb les equivalències «port», «angle en graus» i «velocitat».

Obriu un projecte de Python a SPIKE App i connecteu el Hub. Si la interfície no ofereix l’editor Python en el dispositiu o la versió instal·lada, proveu el moviment amb blocs de paraules; no instal·leu programari alié al flux oficial del fabricant. Manteniu lliure la zona de gir del motor i no subjecteu l’eix amb els dits mentre s’executa.

## 🧩 Funcions i controls

- Editor de Python de SPIKE App, basat en MicroPython, a més dels blocs d’icones i de paraules.
- Control del motor angular connectat a un port del Hub mitjançant `motor.run_for_degrees`.
- Ordres de Python que inicien el programa i esperen que el motor acabe el moviment.
- Connexió amb el Hub Prime i observació de l’execució o dels missatges d’error de l’app.

## 👣 Pas a pas

### 1. Prepareu el motor i llegiu el codi

Connecteu un motor angular al port A i recolzeu-lo de manera estable sobre la taula, sense rodes, braços ni eixos afegits. Observeu la marca de la part giratòria per identificar la posició inicial. Obriu el projecte Python i comproveu que l’app reconeix el Hub i que el port A apareix disponible.

Copieu el programa següent. Si el motor està en un altre port, substituïu `port.A` pel port real.

```python
from hub import port
import motor
import runloop

async def main():
    await motor.run_for_degrees(port.A, 360, 400)

runloop.run(main())
```

`port.A` indica on està connectat el motor; `360` demana una volta completa i `400` indica la velocitat. Copieu també les altres línies i els espais de davant de la instrucció: permeten que el programa s’inicie i espere que el motor acabe.

### 2. Programeu i executeu una volta

Abans de prémer Run, dibuixeu la posició final esperada. Executeu el programa una sola vegada i compareu-la amb la marca inicial. Si l’eix gira en sentit diferent del que volíeu, atureu la prova i reviseu el sentit, la posició del motor i la configuració de la versió de l’API que mostra l’editor.

### 3. Canvieu un paràmetre cada vegada

Canvieu els graus de `360` a `180`, executeu i comproveu que fa mitja volta. Després restaureu `360` i canvieu només la velocitat de `400` a `200`. Registreu si canvia la distància angular, el temps de moviment o tots dos. No canvieu el port i els paràmetres en una mateixa prova.

### 4. Relacioneu Python amb blocs

En un projecte de blocs, representeu la mateixa acció: quan comence el programa, feu girar el motor del port triat una volta completa. Compareu les dades de cada format: el port i el gir apareixen al bloc i al text. En el text també cal respectar els noms i els espais inicials.

```spikeapp
quan comença el programa
motor [A v] gira (360) graus
```

El dibuix mostra l’acció equivalent; seleccioneu els blocs i les unitats que oferisca la vostra versió de l’app. Si la velocitat s’indica en una escala diferent, ajusteu-la i compareu el moviment, sense assumir que els nombres són equivalents.

## 🧪 Comprovació i resolució de problemes

Proveu els valors 360° a velocitat 400, 180° a velocitat 400 i 360° a velocitat 200. Si el motor no respon, comproveu la connexió del Hub, el port A, totes les línies del codi i la indentació. Corregiu una cosa cada vegada.

## 🛡️ Ús i seguretat

Comproveu que el motor queda estable i manteniu mans, cabells, roba i cables fora de la part giratòria. Atureu l’execució abans de recol·locar-lo, modificar el programa o desconnectar el cable.

## 🔗 Fonts i límits

La [guia tècnica i FAQ oficial de SPIKE Prime](https://education.lego.com/en-us/teacher-resources/lego-education-spike-prime/support-technical-info/lego-education-spike-prime-support-technical-info-product-info/) confirma sis ports al Hub Prime i que SPIKE App inclou blocs d’icones, blocs de paraules i editor de Python. La lliçó oficial [Get Moving with Motors](https://education.lego.com/en-us/lessons/get-moving-with-motors/) treballa motors amb Python, i l’exemple de [Score!](https://education.lego.com/en-us/lessons/spike-python-u5-playing-games-with-simple-conditions/spike-python-u5l6-score-/) documenta `motor.run_for_degrees`. La sintaxi i les funcions poden variar entre versions: seguiu les indicacions de l’editor instal·lat i no useu biblioteques externes en aquest exemple.
