---
title: Tale-Bot Pro: dibuix i transport amb accessoris
description: Programar formes amb el suport de retoladors i provar els braços per a transportar un objecte lleuger.
robot: tale-bot
level: Intermedi
duration: 45 min
order: 3
image: _assets/tutorials/tb-motors-sensors.webp
---

## 🎯 Què aprendrem?

Instal·leu el suport de retolador i programeu un quadrat i un rectangle amb Tale-Bot. Comproveu el traç i ajusteu el contacte del retolador amb el paper.

- Relacionar la geometria espacial amb seqüències d'ordres repetitives.
- Dibuixar i comparar un quadrat i un rectangle.
- Observar com la superfície i el suport afecten el resultat del dibuix.

![](../../_assets/tutorials/tb-motors-sensors.webp)

## 🧰 Materials i preparació

- Tale-Bot Pro i accessoris de dibuix; braços de transport si formen part de la caixa disponible.
- Un retolador rentable i full gran de paper fixat sobre una superfície plana.
- Un objecte lleuger, gran i segur que càpia entre els braços; no useu peces menudes ni fràgils.

## 🧩 Funcions i controls

- Moviment programat i suport oficial de dibuix amb retoladors quan està inclòs en la dotació.
- Braços opcionals per a subjectar i desplaçar objectes lleugers; no són pinça motoritzada ni mesuren la càrrega.
- La precisió del traç depén de la posició del suport, el contacte amb el paper i la superfície; no és un sensor.

## 👣 Pas a pas

### 1. Prepareu el suport i dibuixeu un quadrat

Fixeu un full gran sobre una superfície plana i poseu-hi una cartolina a sota. Amb el robot aturat, col·loqueu el suport de dibuix i el retolador rentable seguint la guia del fabricant; ajusteu-lo suaument perquè la punta toque el paper sense alçar les rodes. Cal el suport compatible per fer aquesta prova de dibuix.

Marqueu un punt inicial i orienteu el robot paral·lel a una vora del paper. Esborreu el programa anterior mantenint X més d’un segon. Premeu **Endavant → Dreta** quatre vegades i després **Play**. Cada avanç dibuixa un costat i cada gir canvia l’orientació; el gir no dibuixa un costat. Observeu si el traç s’assembla a un quadrat i acaba prop del punt inicial.

```talebot
avançar -> girar dreta -> avançar -> girar dreta -> avançar -> girar dreta -> avançar -> girar dreta -> executa
```

### 2. Creeu un patró rectangular

Esborreu la seqüència. Planifiqueu costats de dos passos, un pas, dos passos i un pas, amb un gir a la dreta després de cada costat. Introduïu **Endavant → Endavant → Dreta → Endavant → Dreta → Endavant → Endavant → Dreta → Endavant → Dreta** i premeu **Play**. Els costats oposats tenen la mateixa longitud. Abans d’executar, dibuixeu la forma prevista; useu un full nou per distingir els intents. Si el robot no accepta tota la seqüència, executeu dos costats, esborreu les ordres i introduïu els altres dos sense canviar-ne la posició ni l’orientació.

```talebot
avançar -> avançar -> girar dreta -> avançar -> girar dreta
avançar -> avançar -> girar dreta -> avançar -> girar dreta -> executa
```

### 3. Ampliació opcional: proveu el transport amb els braços

Si el kit inclou els dos braços, instal·leu-los en els punts indicats pel fabricant i comproveu manualment que queden subjectes. Trieu un objecte lleuger i ample, col·loqueu-lo entre els braços i programeu un recorregut curt fins a una zona de lliurament. Observeu si l’objecte es manté estable; reduïu el nombre de girs abans d’augmentar la distància. Si el kit no inclou els braços compatibles, ometeu la prova de transport.

> **💡 Consell d’ús:** Posa una cartolina gruixuda a sota per evitar que els retoladors traspassin a la taula.

## 🧪 Comprovació i resolució de problemes

Fixeu el paper a una taula plana. Proveu un avanç i un gir per comprovar el contacte del retolador. Després executeu el quadrat i anoteu si torna prop de la marca inicial. Per al transport, feu una prova curta amb un objecte ample i lleuger. No forceu els braços si l’objecte cau o el robot no el pot moure.

## 🛡️ Ús i seguretat

Fixeu el paper sobre una superfície plana i protegiu la taula amb cartolina. Ajusteu el retolador sense alçar les rodes i manteniu-lo lluny del mecanisme. Atureu el robot abans de canviar el suport o els braços.

## 🔗 Fonts i límits

Matatalab · [guia oficial de Tale-Bot Pro](https://matatalab.com/en/node/774). El fabricant descriu el suport de dibuix i els braços per subjectar i moure objectes; confirmeu que aquests accessoris estan en la caixa disponible. La precisió del traç i el transport depenen del muntatge, la superfície i la càrrega.
