---
title: 'Primeres passes: Botons direccionals i la tecla Delete'
description: Descobrir els botons de Tale-Bot Pro, provar un recorregut curt i aprendre a esborrar-lo.
robot: tale-bot
level: Iniciació
duration: 30 min
order: 1
image: _assets/tutorials/tb-primeres-passes.webp
---

## 🎯 Què aprendrem?

Programeu dos avanços amb els botons físics. Comproveu com el robot guarda les ordres i com esborra l’última abans d’iniciar el recorregut.

- Distingir les tecles Endavant, Enrere, Gir Dreta i Gir Esquerra.
- Aprendre la rutina del botó Delete (X) per evitar acumular ordres velles.
- Comparar el desplaçament real amb les caselles de la graella.

![](../../_assets/tutorials/tb-primeres-passes.webp)

## 🧰 Materials i preparació

- Tale-Bot Pro carregat.
- Graella o mapa pla, amb la distància entre caselles anotada.
- Cinta per marcar el punt de partida.
- Regle o cinta mètrica per mesurar el recorregut.

## 🧩 Funcions i controls

- Botons direccionals, Play, esborrat d’ordres i indicadors de programació.
- La distància nominal de cada ordre s’ha de provar amb el Tale-Bot concret i el mapa utilitzat.

## 👣 Pas a pas

### 1. Engegueu i netegeu la seqüència

Enceneu el Tale-Bot amb el control posterior i espereu la salutació. Si no respon, poseu-lo a carregar i torneu a provar-lo.

Abans d’un camí nou, manteniu premut el botó X més d’un segon i comproveu que els indicadors s’apaguen. Una pulsació breu, de menys d’un segon, elimina només l’última ordre; reserveu-la per corregir una seqüència que vulgueu conservar.

### 2. Programeu i proveu una recta

Marqueu l’inici i orienteu el robot cap endavant. Premeu:

```talebot
avançar -> avançar -> executa
```

Observeu on s’atura i mesureu la distància recorreguda. Comproveu la mida del pas del vostre robot; no suposeu que cada ordre equival a una casella de la graella. El moviment també pot variar segons el terra.

```talebot
avançar -> girar dreta -> esborra -> avançar -> executa
```

Per comprovar l’esborrat parcial, manteniu X més d’un segon, introduïu **Endavant → Dreta**, premeu X breument i afegiu **Endavant**. Reviseu les ordres amb les targetes o els indicadors i premeu Play: el robot hauria de fer dos avanços. Si gira, buideu la seqüència i repetiu amb una pulsació breu més clara.

> **💡 Consell d’ús:** Mostreu que Tale-Bot gira sobre si mateix: el gir canvia la direcció, però no l’avança cap a una altra casella.

## 🧪 Comprovació i resolució de problemes

Comproveu que el robot fa dos avanços sense girar. Si gira, buideu la seqüència i torneu a introduir les ordres. Reviseu l’orientació inicial i mesureu la distància real abans d’adaptar-la a una graella.

## 🛡️ Ús i seguretat

Manteniu el robot lluny de vores i deixeu lliure el recorregut. Atureu-lo abans de corregir les ordres o canviar-ne la posició inicial.

## 🔗 Fonts i límits

La [guia oficial de Tale-Bot Pro](https://matatalab.com/en/lesson4.2) mostra els botons direccionals, Play i Clear. El desplaçament de cada ordre pot variar segons la configuració del robot i la superfície; mesureu-lo abans de preparar la quadrícula.
