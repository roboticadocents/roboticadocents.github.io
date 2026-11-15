---
title: micro:bit: programar amb MicroPython i depurar amb el simulador
description: Llegir els botons A/B en Python, mostrar icones, provar la indentació i enviar el programa a una micro:bit.
robot: microbit
level: Avançat
duration: 50 min
order: 7
image: _assets/tutorials/mb-python-microbit-flat.webp
---

## 🎯 Què aprendrem?

Creeu una insígnia que mostre una cara feliç quan es prem A i una cara pensativa quan es prem B. Primer la provareu al simulador i després a la placa. No cal saber Python: copieu l’exemple i canvieu una icona per veure’n el resultat.

- Obrir el Python Editor oficial i localitzar el codi, el simulador, la referència i els avisos d’error.
- Relacionar els botons A/B i la matriu 5 × 5 amb instruccions Python.
- Reconéixer `import`, un bucle `while`, les condicions `if` i la indentació.
- Provar el comportament al simulador abans de transferir el programa.
- Comparar MicroPython i MakeCode Python sense barrejar-ne les biblioteques.

![](../../_assets/tutorials/mb-python-microbit-flat.webp)

## 🧰 Materials i preparació

- BBC micro:bit V1 o V2 amb cable USB; un portapiles és opcional per a la prova sense ordinador.
- Ordinador amb navegador compatible i accés a [python.microbit.org](https://python.microbit.org/).
- Targetes amb `A`, `B`, `HAPPY` i `CONFUSED` per anticipar la relació entrada–programa–eixida.
- MakeCode o captures impreses per a comparar les dues versions de Python, si convé.

Obriu un projecte nou al Python Editor i llegiu el tutorial de referència integrat. El simulador permet començar sense placa. El V1 i el V2 comparteixen els botons i la matriu necessaris per a aquesta pràctica; no useu micròfon, altaveu ni logotip tàctil, que depenen del V2. Si voleu enviar el codi directament a la placa des del navegador, seguiu la compatibilitat i els passos que l’editor indica; si no, descarregueu el fitxer `.hex` i transferiu-lo per USB.

## 🧩 Funcions i controls

- Python Editor oficial amb MicroPython, simulador, autocompleció, referència i ressaltat d’estructura i errors.
- MicroPython sobre la placa: `button_a`, `button_b` i `display` amb la matriu LED.
- Transferència del programa a la micro:bit o prova prèvia sense maquinari.
- Diferència entre MicroPython i MakeCode Python, que usa funcions d’esdeveniment i una biblioteca pròpia de MakeCode.

## 👣 Pas a pas

### 1. Explorem el simulador i el panell de referència

Obriu el Python Editor i localitzeu les pestanyes de referència, idees i API, l’àrea d’edició i el simulador. Trieu una instrucció de pantalla a la referència i arrossegueu-la a l’editor. Executeu un exemple amb el botó de reproducció del simulador i proveu els controls que simulen els botons de la placa.

### 2. Copieu i executeu el programa

Copieu el programa següent. Abans d’executar-lo, marqueu quines línies es repeteixen i quina eixida correspon a cada botó.

```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
    if button_b.is_pressed():
        display.show(Image.CONFUSED)
```

`from microbit import *` carrega les funcions de la placa; `while True` manté les comprovacions actives; cada `if` prova un botó; `display.show(...)` mostra una icona. Les línies interiors han d’anar indentades. Si premeu A i B alhora, les dues condicions poden executar-se en el mateix cicle: observeu quin dibuix queda visible i expliqueu l’ordre de les instruccions.

### 3. Depureu al Python Editor

Executeu primer el codi al simulador. Canvieu una icona i torneu a provar A i B. Després elimineu temporalment els espais d’una línia interior per veure com el ressaltat o el missatge d’error ajuda a localitzar la indentació incorrecta; desfeu el canvi i comproveu que el programa torna a executar-se. No descarregueu la versió amb error a la placa.

### 4. Transferiu el programa a una micro:bit

Connecteu la placa per USB i useu l’opció «Send to micro:bit» si el navegador i els permisos són compatibles. Si aquesta opció no apareix, descarregueu el `.hex`, obriu la unitat de la micro:bit i copieu-lo. Espereu que la transferència acabe; després proveu A i B en la placa real i compareu el resultat amb el simulador.

### 5. Compareu amb els blocs de MakeCode

En MakeCode, podeu fer la mateixa prova amb blocs. Aquest exemple mostra una cara per a cada botó:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
})
```

Executeu el projecte de MakeCode i premeu primer A i després B. Per veure’n la versió textual, seleccioneu **Python** a la part superior de MakeCode. Compareu-la amb el programa de MicroPython: les dues fan una prova semblant, però usen noms i formes d’organitzar les ordres diferents.

MakeCode i l’editor de MicroPython són eines diferents: no copieu les ordres d’un dins de l’altre. Proveu A+B en cada projecte i anoteu què observeu; no cal que reaccionen igual quan es premen els dos botons alhora.

## 🧪 Comprovació i resolució de problemes

Feu quatre proves al simulador i a la placa: A, B, cap botó i A+B alhora. Comproveu la resposta de cada botó al simulador i a la placa. Per a depurar, comproveu importació, indentació, nom d’imatge, transferència acabada i editor triat. Canvieu una única cosa cada vegada; si el simulador respon però la placa no, reviseu primer que el fitxer s’ha transferit a la micro:bit correcta.

## 🛡️ Ús i seguretat

Podeu comprovar el programa al simulador abans de transferir-lo. Desconnecteu el cable agafant-ne el connector i no pressioneu ni doblegueu la vora daurada de la placa.

## 🔗 Fonts i límits

La [guia oficial del Python Editor](https://microbit.org/get-started/user-guide/python-editor/) descriu referència, fragments, ressaltat, errors, autocompleció, simulador i transferència. L’article de la fundació [MakeCode Python i MicroPython](https://support.microbit.org/support/solutions/articles/19000111744-makecode-python-and-micropython) compara les dues sintaxis i els seus models d’execució. L’editor Python necessita haver-se carregat inicialment; després pot funcionar fora de línia en les condicions indicades a la [guia oficial d’ús sense connexió](https://microbit.org/get-started/user-guide/offline/). Les funcions de micròfon, altaveu i logotip tàctil no formen part d’aquesta pràctica i requereixen micro:bit V2.
