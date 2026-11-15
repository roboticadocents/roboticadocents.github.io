---
title: 'Primeres passes: La torre de lectura i el tauler físic'
description: Descobrir la connexió entre la torre d'escaneig i el MatataBot, i l'ordre seqüencial d'esquerra a dreta.
robot: coding-set
level: Iniciació
duration: 30 min
order: 1
image: _assets/tutorials/cs-primeres-passes.webp
---

## 🎯 Què aprendrem?

Prepareu una ruta de tres ordres i comproveu com la torre la llig i l’envia al MatataBot. Reviseu l’ordre de les peces abans de prémer Play.

- Entendre que les fitxes es llegeixen com un text: d'esquerra a dreta i de dalt a baix.
- Emparellar per Bluetooth la torre i el robot.
- Executar una seqüència de tres passos simples.

![](../../_assets/tutorials/cs-primeres-passes.webp)

## 🧰 Materials i preparació

- Torre i tauler del Coding Set, amb superfície clara i plana.
- MatataBot carregat, dues fitxes Endavant, una Dreta i una Enrere.
- Mapa de quadrícula per marcar el punt inicial i comprovar el desplaçament.

## 🧩 Funcions i controls

- Torre de control amb lectura visual dels blocs i transmissió sense fils al MatataBot.
- Ordres tangibles de moviment, ordre d’execució i botó Play.

## 👣 Pas a pas

### 1. Engegueu el sistema i prepareu la seqüència

Enceneu la torre de control i el MatataBot i espereu que es connecten. Comproveu els indicadors del vostre model o seguiu el manual del conjunt. Si no es connecten, apagueu-los i torneu a engegar-los abans de continuar.

Poseu tres fitxes a la primera fila, d’esquerra a dreta: **Endavant → Dreta → Endavant**. Col·loqueu el robot sobre el mapa, mirant cap a una zona lliure. Assenyaleu la casella on penseu que acabarà; el gir canvia cap a on mira el robot, però no l’avança.

```coding-set
avançar -> girar dreta -> avançar
```

### 2. Executeu i comproveu la ruta

Premeu el botó gran taronja. La torre llig les fitxes i envia les ordres al robot. Observeu si avança, gira a la dreta i torna a avançar. Si no es mou, comproveu la connexió i la posició de les peces abans de tornar a prémer.

> **💡 Consell d’ús:** Si la torre no llegeix una fitxa, comprova que la il·luminació no creï ombres intenses sobre el tauler.

## 🧪 Comprovació i resolució de problemes

Comproveu que el robot avança, gira a la dreta i torna a avançar. Si la seqüència no coincideix, reviseu l’ordre de les peces i la connexió de la torre. Torneu el robot a la mateixa posició i orientació abans d’una altra prova.

## 🛡️ Ús i seguretat

Manteniu el tauler estable i retireu objectes de la ruta. No mogueu les peces mentre la torre les llig. Atureu el robot abans de canviar-ne la posició inicial.

## 🔗 Fonts i límits

La pàgina oficial del [Coding Set](https://matatalab.com/en/coding-set?hl=en-IN) descriu la torre, el tauler i el MatataBot. Els indicadors de connexió poden variar segons el model; si no es connecten, seguiu els passos del manual de la torre disponible al centre.
