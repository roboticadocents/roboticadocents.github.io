---
title: Codey Rocky: expressions, sons i energia
description: Personalitzar la matriu LED, programar sons i dansa i comprovar el nivell de bateria del robot.
robot: codey-rocky
level: Intermedi
duration: 50 min
order: 7
image: _assets/tutorials/cr-expressions-so-bateria.webp
---

## 🎯 Què aprendrem?

Creeu una salutació amb una cara i una llum de Codey. Després hi podeu afegir un so i provar una dansa. Els noms de les peces poden variar segons la versió de mBlock.

- Dibuixar i mostrar una expressió a la matriu LED de 16 × 8.
- Vincular una acció als botons i a l’indicador RGB.
- Crear una seqüència curta de tons o una melodia i activar una dansa programada.
- Consultar el nivell de bateria abans de fer una prova llarga.

![](../../_assets/tutorials/cr-expressions-so-bateria.webp)

## 🧰 Materials i preparació

- Un Codey Rocky de la dotació, amb les erugues lliures i espai per a girar sense colpejar objectes.
- Ordinador amb mBlock 5 i el dispositiu/firmware de Codey actualitzats segons les instruccions del fabricant.
- Plantilla de 16 × 8 píxels, cartolines de colors i targetes amb icones de resposta.
- Opcional: un espai silenciós i un temporitzador per comparar la duració de la seqüència.

Connecteu Codey i confirmeu que la vista de blocs ofereix pantalla, botons, RGB i so. Si el bloc de bateria no apareix, anoteu l’estat indicat pel dispositiu o carregueu-lo abans de la prova; no deduïu un percentatge exacte a partir del temps d’ús. Manteniu el robot sobre una superfície plana i poseu el volum baix.

## 🧩 Funcions i controls

- Matriu LED 16 × 8: dibuix d’icones o patrons propis.
- Botons programables de Codey i indicador RGB per a activar i comunicar estats.
- Altaveu integrat: tons, efectes o melodies disponibles en l’extensió del dispositiu.
- Motors d’eruga: moviment o dansa programada, executada en una zona lliure.
- Lectura de bateria disponible a mBlock; és un indicador d’estat, no una mesura de duració garantida.

## 👣 Pas a pas

### 1. Prepareu una expressió de 16 × 8

Dibuixeu una expressió pròpia —una cara o un símbol— que es puga reconéixer sense color. Reproduïu-la amb el bloc de mostrar imatge i compareu la pantalla real amb el dibuix. Feu una segona versió amb només tres canvis de píxel i expliqueu què continua sent llegible.

### 2. Associeu una resposta al botó i al RGB

Programeu el botó A perquè mostre la primera expressió i encenga l’indicador RGB amb un color triat. Feu que el botó B mostre una icona diferent. Premeu cada botó tres vegades i observeu la resposta.

Per començar, prepareu només la resposta del botó A:

```mblock
quan es prem el botó [A v]
mostra una cara feliç
encén el llum RGB de color [blau v]
```

El dibuix és una guia: trieu els blocs de pantalla i llum equivalents en mBlock. Premeu A tres vegades i comproveu la cara i la llum abans d’afegir el botó B o els sensors.

**Per ampliar:** en un projecte separat, proveu la idea d’estalvi del fabricant. Amb llum ambiental alta, el RGB queda apagat; amb poca llum, s’encén quan el sensor de so supera el valor que heu triat i s’apaga quan el so baixa. Compareu clar/silenci, ombra/silenci i ombra/palmada suau. Mantindre els projectes separats evita que dues ordres diferents controlen el mateix llum alhora.

### 3. Afegiu un so o una melodia breu

Després de la resposta visual, reproduïu un to o una seqüència curta amb els blocs de so que ofereix el dispositiu. Si la versió permet triar notes, alterneu dues notes; si només ofereix efectes, compareu dos sons disponibles. Afegiu una pausa perquè una pulsació no dispare una cadena de sons superposats. Manteniu una alternativa només visual.

### 4. Proveu una dansa controlada

Afegiu una dansa o una seqüència de moviments predefinida a una activació separada. Poseu Codey Rocky al centre d’una àrea lliure, inicieu el programa amb el robot quiet i atureu-lo abans de canviar el muntatge. Si la versió instal·lada no inclou un bloc de dansa, construïu una seqüència pròpia amb dos girs curts i una pausa; identifiqueu-la com a programa propi.

### 5. Registreu l’estat de la bateria

Abans de la prova final, consulteu el bloc o indicador de nivell de bateria de mBlock i anoteu què mostra. Executeu la salutació tres vegades i torneu a consultar l’estat. Compareu la lectura sense interpretar diferències menudes com una predicció exacta d’autonomia. Si el robot es desconnecta o respon irregularment, carregueu-lo i repetiu la mateixa prova.

## 🧪 Comprovació i resolució de problemes

Premeu A i B i comproveu la resposta de cada botó. Proveu el so i la dansa per separat, amb el robot en una zona lliure. Si una acció falla, reviseu el bloc corresponent, la connexió i la càrrega de la bateria.

## 🛡️ Ús i seguretat

Ajusteu el volum abans de reproduir tons. Manteniu el robot allunyat de vores, cables i persones durant la dansa. No bloquegeu les erugues amb les mans mentre els motors estan actius.

## 🔗 Fonts i límits

Makeblock enumera els casos de [pantalla emocional, RGB, sons, potenciòmetre, llum ambiental, bateria, sacsejada, postures, melodies i dansa](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky), inclòs l’[indicador RGB d’estalvi d’energia](https://support.makeblock.com/hc/en-us/articles/7463194482839-Case-12-Energy-conserving-RGB-LED-indicator), i descriu les funcions de [Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky). La lectura de bateria i els blocs de so depenen del dispositiu, firmware i versió de mBlock; les melodies i danses disponibles poden variar. Les lliçons de temps meteorològic i els jocs en línia depenen de serveis de xarxa externs; el reconeixement de veu també requereix un servei extern i no és una funció autònoma del robot.
