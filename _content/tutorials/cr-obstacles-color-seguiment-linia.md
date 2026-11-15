---
title: 'Codey Rocky: obstacles, color i seguiment de línia'
description: Orientar el sensor infraroig/color, provar una resposta als obstacles i comparar-la amb el seguiment d’una línia.
robot: codey-rocky
level: Intermedi
duration: 50 min
order: 2
image: _assets/tutorials/cr-motors-sensors.webp
---

## 🎯 Què aprendrem?

Prepareu una ruta curta perquè Rocky avance, detecte un obstacle i canvie de direcció abans de tocar-lo. Després, reorienteu el sensor inferior per provar una línia de contrast. La pràctica separa les funcions del sensor infraroig/color de les decisions del programa: el robot no comprén el mapa ni tria per si mateix la ruta.

- Canviar l’orientació del sensor de Rocky per provar obstacle o superfície.
- Llegir una condició del sensor i relacionar-la amb els motors de les erugues.
- Comparar una prova d’obstacle amb una prova de seguiment d’una línia.

![](../../_assets/tutorials/cr-motors-sensors.webp)

## 🧰 Materials i preparació

- Codey Rocky de la dotació, acoblat i amb càrrega suficient.
- Ordinador amb mBlock 5 i la versió de firmware disponible.
- Obstacles amples, tous i no reflectants, com caixes de cartó.
- Cinta fosca ampla i una base clara per fer una pista de contrast.
- Graella de registre per anotar l’estat del sensor, la condició i el resultat.

Comproveu que el mòdul Rocky està connectat amb Codey i que els blocs de sensor i motors apareixen a mBlock. Orienteu el sensor infraroig/color cap al davant per a la prova d’obstacles; abans de provar la línia, reorienteu-lo cap al terra segons el muntatge del fabricant. Manteniu el programa aturat mentre canvieu la posició del sensor.

## 🧩 Funcions i controls

- Motors independents de les dues erugues per avançar i girar.
- Sensor infraroig/color orientable: detecció d’obstacles quan mira cap endavant i lectura de superfícies/línies quan mira cap avall.
- Blocs condicionals de mBlock per transformar una lectura en una acció motora.
- Límit de la prova: una detecció infraroja no és una mesura universal en centímetres; superfície, angle i llum poden canviar la resposta.

## 👣 Pas a pas

### 1. Connecteu i comproveu els actuadors

Obriu mBlock 5, afegiu Codey Rocky i connecteu el robot per USB o per una connexió Bluetooth compatible. Executeu una prova curta que moga les dues erugues lentament i després les ature. Comproveu que el xassís està ben acoblat i que el sensor es pot orientar cap a davant o cap avall sense forçar el suport.

Comenceu amb una ordre curta, sobre una taula sense vores pròximes:

```mblock
quan es prem el botó [A v]
avança a velocitat (20) durant (1) segons
atura el moviment
```

El dibuix mostra la idea del programa: busqueu els blocs de moviment equivalents a la vostra versió i comproveu que Rocky s’atura després d’un segon.

### 2. Observeu la detecció d’un obstacle

Amb el sensor orientat cap al davant, mostreu a la matriu de Codey l’estat «lliure» o «obstacle» segons el bloc disponible. Poseu una caixa de cartó a una distància curta i després més lluny; repetiu amb una superfície clara i una fosca, mantenint l’angle. Registreu el resultat tal com l’exposa mBlock (estat o valor d’aproximació/distància) i no el convertiu a centímetres si el bloc no dona una mesura calibrada.

### 3. Programeu una maniobra d’esquiva

Feu que Rocky avance a baixa velocitat mentre el sensor indique espai lliure. Si detecta un obstacle, atureu-lo, feu una marxa enrere breu i gireu a un costat abans de reprendre l’avanç. Busqueu els blocs equivalents en mBlock:

```mblock
quan es prem el botó [A v]
per sempre
si <el sensor detecta un obstacle> aleshores
atura el moviment
ves arrere durant (0.5) segons
gira a la dreta durant (0.5) segons
si no
avança a velocitat (20)
fi
fi
```

Comenceu amb una sola caixa de cartó i una velocitat baixa. Si el sensor no ofereix un bloc d’obstacle en la vostra versió, no inventeu el llindar: proveu el cas oficial de Makeblock amb el dispositiu i els blocs disponibles. Si el gir no deixa espai suficient, canvieu només la durada o la velocitat. El [cas oficial](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles) mostra un exemple amb el sensor mirant endavant.

### 4. Compareu amb el seguiment d’una línia

Atureu el programa, gireu el sensor perquè mire cap avall i col·loqueu Rocky sobre la pista de contrast. Seguiu el [cas oficial de detecció de colors](https://support.makeblock.com/hc/en-us/articles/7484512467223-Case-19-Codey-Rocky-identifies-colors) per mostrar la lectura a l’indicador lluminós. Poseu el sensor primer sobre el fons clar i després sobre la cinta fosca, sense moure els motors, i anoteu si les lectures es diferencien. Si no es diferencien, reviseu l’orientació del sensor i proveu altres superfícies.

Per a una primera prova de seguiment, situeu el sensor sobre la vora dreta de la cinta, mirant en el sentit del recorregut. En un programa nou, repetiu aquesta decisió: si detecta fosc, feu un gir curt a la dreta; si detecta clar, un gir curt a l’esquerra. Després de cada correcció, avanceu un interval curt a velocitat baixa i torneu a llegir el sensor. Ajusteu la durada dels girs i dels avanços amb proves breus. Invertiu els girs si comenceu a l’altra vora. Useu els blocs de condició, detecció i moviment disponibles a la vostra versió i atureu-lo si perd la pista. Si no podeu distingir les superfícies o el programa no manté la vora, conserveu la prova de lectura i anoteu que el seguiment queda pendent.

## 🧪 Comprovació i resolució de problemes

Comproveu la detecció d’un obstacle i el seguiment de línia per separat. Si fallen, reviseu l’orientació i l’altura del sensor, la reflexió de la superfície i les connexions. Canvieu un únic llindar o paràmetre de moviment cada vegada.

## 🛡️ Ús i seguretat

Feu servir velocitats baixes, obstacles tous i un espai delimitat. Manteniu mans, cables i roba lluny de les erugues. Atureu el programa abans de reorientar el sensor.

## 🔗 Fonts i límits

La pàgina [About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) descriu els motors de Rocky i el sensor infraroig/color. Els casos oficials [Avoids Obstacles](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles) i [Identifies Colors](https://support.makeblock.com/hc/en-us/articles/7484512467223-Case-19-Codey-Rocky-identifies-colors) mostren l’orientació del sensor cap al davant i cap avall. La resposta depén de la superfície i de l’angle; no és un sensor ultrasònic de distància calibrada.
