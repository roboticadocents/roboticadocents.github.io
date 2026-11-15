---
title: Codey Rocky: llum, so, RGB i seguiment de línia
description: Explorar els sensors de llum, so i infraroig/color i combinar-los amb l’indicador RGB i els motors de Rocky.
robot: codey-rocky
level: Intermedi
duration: 55 min
order: 4
image: _assets/tutorials/cr-sensors-llum-so-linia.webp
---

## 🎯 Què aprendrem?

Feu que Codey responga a una palmada suau i investigueu com detecta la llum. Després proveu Rocky sobre una línia negra. Observeu què detecta el robot i què li heu indicat que faça.

- Comparar lectures de llum i so en condicions repetibles.
- Relacionar la lectura del sensor infraroig/color amb una línia i els motors.
- Explicar per què els llindars depenen de la superfície i de la llum ambiental.

![](../../_assets/tutorials/cr-sensors-llum-so-linia.webp)

## 🧰 Materials i preparació

- Codey Rocky de la dotació, carregat i muntat correctament.
- Ordinador amb una versió compatible de mBlock 5 i l’extensió/dispositiu Codey.
- Cartolines clara, fosca i de colors; una tira negra ampla sobre fons blanc.
- Un llum regulable o una caixa de cartó oberta per variar la il·luminació.
- Targetes de prova amb condicions de llum, so i color; les dades poden ser simulades.

Abans de començar, comproveu que el robot es connecta, que les erugues es mouen lliurement i que el sensor infraroig/color no està tapat. Els noms dels blocs poden variar amb la versió de mBlock i del firmware; no substituïu la lectura del sensor per una afirmació de distància o color exacte si l’aplicació no la proporciona.

## 🧩 Funcions i controls

- Sensor de llum ambiental i indicador RGB programable del mòdul Codey.
- Sensor de so ambiental: detecta intensitat/llindar de so, no paraules ni identitat de qui parla.
- Sensor infraroig/color de Rocky i motors de les erugues per provar una ruta amb línia i targetes.
- Condicionals i ajust de llindars a mBlock 5; el sensor reflectit depén del material, la distància i l’angle.

## 👣 Pas a pas

### 1. Comprovem les entrades i eixides

Obriu mBlock 5, seleccioneu Codey Rocky i executeu una seqüència curta que mostre un color a l’indicador RGB i faça avançar Rocky a baixa velocitat durant un interval breu. Atureu el programa i verifiqueu que el botó d’aturada del projecte respon. Anoteu quins elements són entrades (llum, so i reflexió infraroja) i quins són eixides (RGB i motors).

Podeu començar amb aquesta prova curta:

```mblock
quan es prem el botó [A v]
encén el llum RGB de color [blau v]
avança a velocitat (20) durant (1) segons
atura el moviment
```

Busqueu els blocs equivalents a la vostra versió. En prémer A, observeu la llum i comproveu que Rocky s’atura; si no ho fa, atureu el programa abans de continuar.

### 2. Calibrem llum i color

Manteniu Codey en la mateixa orientació. En mBlock, combineu un bloc de pantalla amb el valor del sensor de llum. Aquesta és la idea que heu de construir amb les peces de la vostra versió:

```mblock
quan es prem el botó [A v]
mostra el valor de llum ambiental
```

Premeu A i anoteu tres lectures amb llum habitual i tres fent ombra al sensor. Si necessiteu ajuda per trobar el sensor, consulteu l’[exemple de llum del fabricant](https://support.makeblock.com/hc/en-us/articles/7463194482839-Case-12-Energy-conserving-RGB-LED-indicator).

Després, amb Rocky aturat i el sensor orientat cap avall, compareu una targeta clara i una fosca a la mateixa distància. Anoteu què detecta el bloc de color de la vostra versió. No suposeu que distingirà tots els colors amb la mateixa fiabilitat.

### 3. Proveu el sensor de so amb una entrada controlada

En un projecte de prova, mostreu el nivell de so contínuament a la pantalla de Codey amb el bloc de lectura del sensor dins de «per sempre». Anoteu el valor en silenci i després durant tres palmades suaus, sempre a la mateixa distància. Trieu un valor entre les lectures de silenci i de palmada: serà el **valor de tall**. Per exemple, si obteniu aproximadament 10 i 40, proveu amb 25.

En un projecte nou, construïu aquesta idea amb els blocs equivalents de mBlock. El número 25 és només un exemple: poseu-hi el vostre valor de tall.

```mblock
quan comença el programa
per sempre
si <nivell de so > (25)> aleshores
encén el llum RGB de color [blau v]
si no
apaga el llum RGB
fi
espera (0.5) segons
fi
```

Aquest dibuix resumeix les accions; els noms dels blocs poden variar. Proveu el programa en silenci i amb una palmada. Si la llum no canvia, reviseu les lectures i ajusteu el valor de tall. El sensor no reconeix paraules.

### 4. Proveu el seguiment de línia i depureu la ruta

Atureu el programa i orienteu el sensor infraroig/color de Rocky cap al terra. Poseu-lo primer sobre el fons blanc i després sobre la línia negra; anoteu què mostra mBlock en cada cas. El sensor identifica la superfície que té davall, però no sap a quin costat queda el centre de la línia.

Per provar una correcció pròpia, comenceu amb el sensor sobre la **vora dreta** de la línia, mirant en el sentit del recorregut. Programeu un gir curt a la dreta quan veja negre i a l’esquerra quan veja blanc; després de cada gir, avanceu un interval curt a baixa velocitat i torneu a llegir el sensor. Ajusteu la durada dels girs i dels avanços en un tram recte i atureu-lo si perd la pista. Si comenceu per l’altra vora, intercanvieu els girs. Si la vostra versió ofereix un exemple de seguiment, també podeu provar-lo i comparar-ne el resultat. Si la lectura no distingeix les superfícies, anoteu que el seguiment queda pendent.

## 🧪 Comprovació i resolució de problemes

Comproveu que les lectures canvien entre llum i ombra, i entre silenci i una palmada suau. Si Rocky perd la línia, reviseu que el sensor mire a terra i que comence a la vora correcta. Ajusteu un sol llindar cada vegada.

## 🛡️ Ús i seguretat

Manteniu el robot a velocitat baixa dins d’un recorregut delimitat, lluny de vores i dits. Feu servir sons breus a volum moderat. Atureu-lo abans de canviar el sensor de posició.

## 🔗 Fonts i límits

[Makeblock · About Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) descriu els elements de Codey i Rocky. [Makeblock · Programming Codey Rocky with mBlock 5](https://support.makeblock.com/hc/en-us/articles/1500008637961-Program-Codey-Rocky-with-mBlock-5) és el punt de partida per a la connexió; comproveu la compatibilitat del sistema i l’extensió instal·lada. La detecció de so no és reconeixement de parla, i el sensor infraroig/color no és una càmera ni un dispositiu de mesura universal.
