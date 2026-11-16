---
title: "Una funció, diferents llocs"
description: "Reconéixer què conserva una funció quan canvia la posició o l’orientació inicial. Fitxa A4 sense robot."
robot: coding-set
topic: "Abstracció"
cycle_label: "Segon cicle"
duration: "30 min"
order: 7
---

## 🎯 Què aprendrem?

Reconéixer què conserva una funció quan canvia la posició o l’orientació inicial. Activitat individual per a alumnat de 8 anys, neutra, sobre paper i sense robot.

Un avanç o retrocés mou una casella; un gir canvia l’orientació sense desplaçar-se. La fletxa plena indica l’inici. Els punts indiquen el recorregut i la fletxa buida, l’orientació final desitjada. Cada exercici comença de nou.

La **definició** va en una fila inferior i no s’executa per si mateixa. La fila principal conté les **crides**. Cada crida executa totes les ordres de la funció i després continua la principal. No poseu nombres davall de definir ni de cridar: les funcions no admeten peces de nombre. Només usem una funció, sense recursivitat.

El **bucle** repeteix només les peces entre l’inici i el fi. El nombre va davall de l’inici del bucle. Una crida pot estar dins del bucle. «3 voltes» significa tres execucions totals. Les icones són representacions de contorn simplificades; la llegenda diferencia cada peça.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat (PDF, 1 pàgina A4)](_assets/activitats/kits/cs-una-funcio-diferents-llocs.pdf).
- [Les huit fitxes de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionari de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Llapis i goma. Imprimiu en A4 vertical al 100%, en blanc i negre. Reserveu el solucionari al professorat.

## 👣 Desenvolupament pas a pas

### 1. Des d’un altre lloc

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: F -->
<!-- Objectiu: A D A -->
<!-- Funcio: A D A -->
<!-- Principal: F -->
<!-- Resposta de control: F -->
<!-- Comparacio: D2 N -->

**Consigna:** Executa la mateixa funció des dels dos inicis. Què es conserva?

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex1-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex1-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex1-resposta.svg)

**Solució docent:** Des de B2 acaba en C3 mirant a l’est; des de D2 acaba en E3 mirant a l’est. Es conserven la forma i l’orientació del recorregut.

### 2. La figura també gira

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: F -->
<!-- Objectiu: A D A -->
<!-- Funcio: A D A -->
<!-- Principal: F -->
<!-- Resposta de control: F -->
<!-- Comparacio: E3 O -->

**Consigna:** Executa la funció des dels dos inicis. Canvia el codi si el robot comença mirant a l’oest?

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex2-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex2-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex2-resposta.svg)

**Solució docent:** Des de B2 N acaba en C3 E. Des de E3 O acaba en D4 N. No canvia el codi: es conserva la forma, però el recorregut gira.

### 3. Tria què es conserva

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: F -->
<!-- Objectiu: A2 D A -->
<!-- Funcio: A2 D A -->
<!-- Principal: F -->
<!-- Resposta de control: F -->
<!-- Comparacio: E2 O -->

**Consigna:** Compara els dos recorreguts. Encercla què es conserva: forma / casella final / longituds.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex3-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex3-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-una-funcio-diferents-llocs-ex3-resposta.svg)

**Solució docent:** Des de B2 N acaba en C4 E. Des de E2 O acaba en C3 N. Es conserven la forma i les longituds; la casella final i l’orientació canvien.

## ✅ Evidències d'aprenentatge

- Distingeix la definició de la funció i les crides de la fila principal.
- Delimita correctament què es repeteix i què s’executa una sola vegada.
- Comprova les posicions, les orientacions i el recorregut; no sols la casella final.

Valoreu cada exercici de 0 a 2 punts: 1 pel resultat i 1 per la comprovació o justificació. Accepteu altres solucions que respecten la ruta i totes les restriccions de la consigna.

### Preguntes per fer pensar

- Definir una funció fa que el robot la comence a executar?
- On continua el programa quan acaba una crida?
- Què canvia si una peça queda fora del bucle?

## ♿ Variants i inclusió

Llegiu les consignes en veu alta si cal. Seguiu la simulació amb el dit i marqueu les ordres ja executades. Les respostes es dibuixen amb peces de contorn en blanc i negre. Per donar suport, proporcioneu la funció resolta; per ampliar, canvieu el nombre de repeticions i comproveu que la ruta cap al tauler.

## 🔗 Referent consultat

[Funcions de Coding Set](https://matatalab.com/en/node/63) i [bucles de Coding Set](https://matatalab.com/en/node/62). La definició va en una fila inferior; els nombres no es combinen amb peces de funció i sí amb l’inici del bucle. Les icones editables són esquemes didàctics, no reproduccions exactes de les peces.
