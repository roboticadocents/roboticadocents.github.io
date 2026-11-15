---
title: 'Primeres passes: Connexió a mBlock 5 i cares a la matriu LED'
description: Connectar Codey al software de l'ordinador o tauleta i programar animacions facials i missatges lliscants.
robot: codey-rocky
level: Iniciació
duration: 35 min
order: 1
image: _assets/tutorials/cr-primeres-passes.webp
---

## 🎯 Què aprendrem?

Dibuixeu una cara a la pantalla de Codey i feu que aparega en prémer A. Després, programeu B perquè mostre una salutació.

- Connectar Codey per cable USB a mBlock 5.
- Dibuixar una cara a la pantalla LED.
- Assignar una resposta als botons A i B.

![](../../_assets/tutorials/cr-primeres-passes.webp)

## 🧰 Materials i preparació

- Controlador Codey de la dotació (Rocky és opcional per a aquesta pràctica).
- Ordinador amb mBlock 5 i cable micro-USB de dades.

## 🧩 Funcions i controls

- Connexió a mBlock 5, pantalla LED 16 × 8 i botons programables A/B.
- Execució en viu i càrrega de codi segons la connexió triada.

## 👣 Pas a pas

### 1. Connecteu Codey i prepareu la pantalla

A mBlock 5, afegiu el dispositiu **Codey**, connecteu-lo amb el cable i enceneu-lo. Comproveu que l’estat indica que està connectat. Per a aquesta primera prova, no cal muntar-lo sobre Rocky.

Obriu la categoria de pantalla i afegiu el bloc per mostrar una imatge. Dibuixeu dos ulls i una boca a la graella de 16 × 8 punts. Deseu el projecte abans de provar-lo.

### 2. Feu que els botons mostren dues respostes

Prepareu dues piles separades: quan es prem A, mostreu la cara; quan es prem B, mostreu el text «Hola».

```mblock
quan es prem el botó [A v]
mostra una cara feliç

quan es prem el botó [B v]
mostra el text [Hola]
```

Busqueu els blocs equivalents en la vostra versió de mBlock: els noms poden variar. Executeu en mode **En viu**, que envia les ordres mentre Codey està connectat. Si voleu que el programa funcione sense l'ordinador, feu servir el mode de càrrega i seguiu la indicació de mBlock per transferir-lo al dispositiu.

> **💡 Consell d’ús:** Comenceu en mode «En viu» per comprovar cada canvi. Proveu la càrrega al dispositiu només després que les dues respostes funcionen.

## 🧪 Comprovació i resolució de problemes

Amb Codey connectat en mode **En viu**, premeu A: ha d’aparéixer la cara que heu dibuixat. Premeu B: ha d’aparéixer «Hola». Si no passa res, comproveu la connexió i que cada bloc estiga unit al botó corresponent.

## 🛡️ Ús i seguretat

Manteniu el robot quiet durant la connexió i les proves dels botons. Deixeu el cable USB allunyat de la zona de moviment i desconnecteu-lo agafant-ne el connector.

## 🔗 Fonts i límits

Makeblock · Codey Rocky · [About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) i [Display the battery level](https://support.makeblock.com/hc/en-us/articles/7462863296535-Case-7-Display-the-battery-level). La lectura depén del bloc disponible en la versió de mBlock instal·lada.
