---
title: 'Coding Set: blocs numèrics i paràmetres de moviment'
description: Comparar les ordres d’avanç amb i sense paràmetre numèric i comprovar quins moviments accepten aquest bloc.
robot: coding-set
level: Intermedi
duration: 40 min
order: 2
image: _assets/tutorials/cs-motors-sensors.webp
---

## 🎯 Què aprendrem?

Feu avançar el MatataBot tres caselles amb tres peces de moviment i després amb una sola peça i el nombre 3. Els nombres modifiquen l’avanç i el retrocés, però no els girs. El robot base no mesura caselles ni detecta la graella.

- Relacionar els blocs numèrics amb les ordres de moviment que poden modificar.
- Comparar una seqüència d’avanç amb diverses ordres i una ordre amb paràmetre.
- Explicar el límit dels blocs numèrics: s’apliquen a avançar o retrocedir, no als girs.

![](../../_assets/tutorials/cs-motors-sensors.webp)

## 🧰 Materials i preparació

- Coding Set de la dotació: MatataBot, Control Tower, tauler i blocs de moviment i números.
- Mapa o quadrícula plana amb caselles de 10 cm, si el model disponible usa aquesta escala.
- Una marca per identificar el punt i l’orientació inicials.

Carregueu el robot i la torre. Poseu el MatataBot a la casella d’inici, alineat amb la quadrícula; emparelleu-lo amb la torre i confirmeu el senyal de connexió. Abans de començar, identifiqueu les peces de moviment i comproveu com es disposa el nombre al tauler segons la guia del vostre model.

## 🧩 Funcions i controls

- Torre de control que llig visualment les peces del tauler i envia el programa al MatataBot per Bluetooth.
- Ordres de moviment tangible: avançar, retrocedir i girar 90° a esquerra o dreta.
- Blocs numèrics com a paràmetre per repetir un nombre de vegades una ordre d’avanç o retrocés.
- Execució ordenada del programa després de llegir el tauler i prémer el botó d’inici.

## 👣 Pas a pas

### 1. Compareu dues disposicions de peces

Dibuixeu una ruta recta de tres caselles i marqueu l’orientació inicial del robot. Representeu-la primer amb tres blocs d’avanç, sense posar les peces al tauler. Comproveu l’ordre de lectura de les peces abans de prémer el botó d’inici.

Prepareu **Endavant → Endavant → Endavant** i premeu el botó gran. Torneu el robot a l'inici, retireu les tres peces del tauler i col·loqueu **Endavant** amb el nombre **3** a sota, tal com mostra la guia del kit. Premeu el botó i compareu on s'atura. 

Compareu les dues disposicions del tauler:

```coding-set
avançar -> avançar -> avançar
```

```coding-set
avançar -> 3
```

Repetiu amb Enrere si hi ha espai lliure darrere. El nombre indica quantes vegades es fa el moviment d'avançar o retrocedir, no centímetres ni velocitat.

### 2. Comproveu el límit dels girs

Afegiu un gir de 90° al final de la ruta i observeu que el robot gira sense avançar de casella. Segons la guia del fabricant, els blocs numèrics no s’apliquen als girs esquerre/dret: per fer dos girs, col·loqueu dues peces de gir o utilitzeu les peces de bucle.

```coding-set
avançar -> 3 -> girar dreta
```

### 3. Corregiu el programa

Canvieu només el valor del nombre i comproveu el desplaçament després de cada execució. Si el resultat no coincideix, reviseu l’orientació de la peça, la posició del nombre al tauler, l’ordre de lectura i l’alineació inicial del robot. Anoteu si l’error provenia del programa, de la lectura o de la col·locació sobre la graella.

## 🧪 Comprovació i resolució de problemes

Comproveu que tres peces Endavant i una peça Endavant amb el nombre 3 produeixen el mateix desplaçament. Si difereixen, reviseu la posició del nombre, l’ordre de lectura i l’alineació inicial del robot. No canvieu alhora el programa i la superfície.

## 🛡️ Ús i seguretat

Manteniu les mans fora del recorregut quan el MatataBot estiga en marxa. Atureu-lo abans de reposicionar-lo o canviar el tauler i deixeu espai lliure darrere abans de provar Enrere.

## 🔗 Fonts i límits

La lliçó oficial Matatalab [Sequence](https://matatalab.com/en/node/61) indica que els blocs numèrics s’utilitzen amb ordres d’avanç i retrocés i que no es poden combinar amb els girs esquerre/dret. [Get to Know Matatalab Coding Set](https://matatalab.com/en/node/60) descriu la torre, el tauler, la connexió Bluetooth i les peces de moviment del conjunt. La quadrícula és una guia externa; el conjunt base no conté un sensor que mesure caselles o distàncies.
