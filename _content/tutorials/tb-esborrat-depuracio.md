---
title: Tale-Bot Pro: esborrar una ordre i depurar el recorregut
description: Comparar la pulsació curta i llarga de Clear per retirar l’última ordre o buidar tot el programa abans de tornar-lo a provar.
robot: tale-bot
level: Iniciació
duration: 35 min
order: 5
image: _assets/tutorials/tb-esborrat-depuracio.webp
---

## 🎯 Què aprendrem?

Useu Clear per corregir l’última ordre o buidar tot el programa de Tale-Bot Pro. Una pulsació curta elimina l’última ordre introduïda; una pulsació llarga elimina totes les ordres. Comproveu el resultat als indicadors abans d’executar.

- Llegir la seqüència acumulada als indicadors de color.
- Distingir una pulsació de menys d’un segon d’una pulsació de més d’un segon.
- Corregir l’última ordre sense perdre la resta de la ruta, o esborrar tot el programa quan calga començar de nou.
- Executar només després de revisar el codi que s’ha tornat a introduir.

![](../../_assets/tutorials/tb-esborrat-depuracio.webp)

## 🧰 Materials i preparació

- Tale-Bot Pro carregat i amb una superfície plana per a la prova.
- Targetes de fletxes o una tira de programació en paper.
- Graella o mapa simple amb inici i destinació.

Trieu una ruta segura de quatre ordres. L’exemple següent introdueix una quarta ordre incorrecta per provar l’esborrat parcial. Identifiqueu el botó Clear/X al model físic. El temps de pulsació és important: feu una pulsació clarament curta o llarga i comproveu els indicadors.

## 🧩 Funcions i controls

- Botó Clear amb esborrat de l’última ordre amb pulsació curta (<1 s).
- Esborrat de totes les ordres introduïdes amb pulsació llarga (>1 s).
- Indicadors de programació que reprodueixen el color de les ordres i s’apaguen quan s’ha buidat la seqüència.
- Depuració d’un programa físic abans d’executar-lo amb Play.

## 👣 Pas a pas

### 1. Introduïu una ruta i llegiu-ne els indicadors

Planifiqueu quatre ordres senzilles que facen arribar Tale-Bot a una destinació. Esborreu el programa anterior mantenint X més d’un segon. Introduïu les tres primeres ordres, assenyaleu cada indicador i afegiu una fletxa a la tira de paper. Després, introduïu a propòsit una quarta ordre incorrecta i anoteu-la. Compareu la ruta prevista amb els indicadors i decidiu què convé conservar abans de prémer Play.

Exemple de ruta prevista: dos avanços, un gir a la dreta i un avanç. Introduïu per error un gir a l’esquerra com a quarta ordre, sense executar encara:

```talebot
avançar -> avançar -> girar dreta -> girar esquerra
```

### 2. Corregiu l’última ordre

Premeu Clear breument, menys d’un segon. Comproveu que desapareix l’últim indicador i que els tres anteriors continuen visibles. Introduïu l’ordre correcta i confirmeu que la seqüència torna a tindre quatre passos. Si el resultat no és clar, pareu i reviseu els indicadors abans de continuar.

En l’exemple, feu una pulsació curta de Clear i afegiu l’avanç que faltava. La ruta corregida queda així:

```talebot
avançar -> avançar -> girar dreta -> avançar
```

### 3. Executeu la seqüència i proveu l’esborrat complet

Premeu Play una sola vegada i observeu si el recorregut arriba a la destinació. Compareu-lo amb la tira de paper. Si l’error és en una ordre anterior, retireu amb pulsacions curtes les ordres des del final fins arribar-hi i torneu-les a introduir en ordre. Després, manteniu Clear premut més d’un segon i comproveu que s’apaguen tots els indicadors. Introduïu tres ordres noves, executeu-les i compareu quan convé corregir una ordre i quan és millor començar de nou.

## 🧪 Comprovació i resolució de problemes

Feu tres comprovacions: una pulsació curta després d’introduir almenys tres ordres; una pulsació llarga amb una seqüència visible; i una reprogramació que s’executa amb Play. Anoteu quins indicadors s’han apagat en cada cas i si les ordres conservades coincideixen amb el pla. Si la pulsació dura aproximadament un segon, repetiu la prova amb una durada clarament curta o llarga, sense afegir més ordres al mateix temps.

## 🛡️ Ús i seguretat

Manteniu el robot quiet durant la correcció i no pressioneu diverses tecles alhora. Feu pulsacions clarament inferiors o superiors a un segon i comproveu els indicadors abans de prémer Play.

## 🔗 Fonts i límits

El [curs oficial de Tale-Bot Pro de Matatalab](https://matatalab.com/en/lesson4.2) especifica que Clear premut menys d’un segon elimina l’última ordre i mantingut més d’un segon esborra totes les ordres; també indica que els indicadors de programació s’apaguen quan la seqüència és buida. Els llindars són els publicats pel fabricant: en la pràctica, feu una pulsació clarament inferior o superior a un segon i comproveu el resultat en el vostre robot.
