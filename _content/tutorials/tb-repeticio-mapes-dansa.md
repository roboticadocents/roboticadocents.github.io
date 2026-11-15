---
title: Tale-Bot Pro: repetició, dansa i mapes interactius
description: Provar els comandaments de repetició i dansa, escoltar la guia OID del mapa i depurar una seqüència sense confondre gravació amb reconeixement de parla.
robot: tale-bot
level: Intermedi
duration: 50 min
order: 4
image: _assets/tutorials/tb-repeticio-mapes-dansa.webp
---

## 🎯 Què aprendrem?

Prepareu una ruta curta, proveu la repetició i descobriu què passa sobre un mapa interactiu compatible. Les marques especials del mapa permeten que el robot reproduïsca instruccions; un mapa imprés normal no té aquesta funció.

- Comparar un programa repetit amb un programa que inclou ordres addicionals.
- Diferenciar una dansa predefinida d’una seqüència programada amb els botons.
- Explorar la lectura OID i la gravació només amb accessoris compatibles.

![](../../_assets/tutorials/tb-repeticio-mapes-dansa.webp)

## 🧰 Materials i preparació

- Tale-Bot Pro carregat, en una superfície plana.
- Un mapa interactiu OID compatible o, com a alternativa, un mapa imprés sense funcions interactives.
- Targetes de comandament i una ruta curta amb inici i destinació marcats.
- Dos retoladors rentables i el suport de dibuix només si formen part del kit disponible.

Abans de començar, comproveu les tecles físiques de moviment, Play, esborrat, repetició, dansa i gravació. El fabricant documenta una gravació de veu de fins a 30 segons i sis danses predefinides; les funcions interactives del mapa depenen del mapa concret.

## 🧩 Funcions i controls

- Botó de repetició per repetir unitats d’ordres del programa complet; no permet repetir només un fragment d’un programa més llarg.
- Indicadors de color per seguir les ordres enregistrades.
- Botó de dansa aleatòria amb moviments predefinits.
- Lectura OID del mapa compatible i instruccions de veu contextuals.
- Gravació i reproducció d’àudio, diferenciades de la interpretació de parla.
- Dibuix mitjançant accessori compatible, com a extensió opcional.

## 👣 Pas a pas

### 1. Programeu i repetiu una seqüència

Manteniu X més d’un segon per començar sense ordres anteriors. Prepareu amb targetes **Endavant → Dreta**, introduïu eixes dues ordres i premeu Play sense activar la repetició. Compteu els moviments i torneu el robot a la posició i orientació inicials. Introduïu de nou la seqüència si cal, premeu el botó de repetició, observeu els llums i premeu Play. Compteu quantes vegades es fa la seqüència. Canvieu el nombre de repeticions amb el botó i torneu a provar des de l’inici. La repetició s’aplica al programa complet: no permet seleccionar només un fragment si després hi ha altres ordres. Si no sabeu quina opció de repetició està activa, comenceu amb una prova curta en un espai ampli i atureu el robot si continua més del previst.

Seqüència base; el botó de repetició es configura després, tal com s’explica al pas:

```talebot
avançar -> girar dreta
```

### 2. Compareu la dansa predefinida

Esborreu les ordres anteriors, premeu una vegada el botó de dansa i després **Play**. Repetiu la prova tres vegades i anoteu si el moviment canvia. Compareu-lo amb una seqüència direccional pròpia: la dansa selecciona un patró incorporat, mentre que la ruta depén de les ordres introduïdes.

```talebot
dansa -> executa
```

### 3. Exploreu la guia d’un mapa OID

Amb un mapa interactiu compatible, col·loqueu el robot a l’entrada principal i escolteu la instrucció. Després proveu una entrada secundària i compareu el missatge. Programeu una ruta i premeu Play. Per tornar a utilitzar-lo fora del mapa, apagueu el robot i torneu-lo a encendre. Un mapa imprés normal no activa la lectura OID; sense un mapa compatible, ometeu aquesta prova.

### 4. Afegiu una veu gravada o un traç opcional

Manteniu premut el botó de gravació mentre dieu una frase fictícia curta i solteu-lo. El robot la reproduirà perquè la pugueu comprovar. Esborreu les ordres anteriors i introduïu **Endavant → gravació** amb una pulsació curta del botó de gravació; premeu Play i escolteu el missatge després del moviment.

```talebot
avançar -> gravació -> executa
```

Useu una frase fictícia sense noms ni dades personals.

## 🧪 Comprovació i resolució de problemes

Compareu l’execució de la ruta amb repetició i sense. Si continua més del previst, atureu el robot i reviseu l’opció de repetició. Proveu la dansa i la gravació per separat. La guia OID només es pot comprovar amb un mapa compatible.

## 🛡️ Ús i seguretat

Deixeu espai lliure per a les repeticions i danses. Manteniu mans i retoladors lluny de les rodes. Atureu el robot abans de moure’l i useu missatges ficticis sense dades personals.

## 🔗 Fonts i límits

El [curs oficial de Tale-Bot Pro de Matatalab](https://matatalab.com/en/lesson4.2) descriu botons, indicadors, gravació/reproducció, dansa i repetició. Les [instruccions oficials de l’Activity Box](https://matatalab.com/en/lesson4.3) documenten l’ús dels mapes interactius i les entrades OID. La gravació no és reconeixement de parla; la dansa no és una seqüència creada per l’usuari; la repetició no permet seleccionar una subseqüència dins d’un programa més llarg; i la lectura de mapa requereix material OID compatible.
