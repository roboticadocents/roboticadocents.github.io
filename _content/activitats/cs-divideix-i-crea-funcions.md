---
title: "Divideix i crea funcions"
description: "Separar un recorregut en parts i definir una funció que el programa principal crida quan cal. Fitxa A4 sense robot."
robot: coding-set
topic: "Descomposició"
cycle_label: "Segon cicle"
duration: "30 min"
order: 5
---

## 🎯 Què aprendrem?

Separar un recorregut en parts i definir una funció que el programa principal crida quan cal. Activitat individual per a alumnat de 8 anys, neutra, sobre paper i sense robot.

Un avanç o retrocés mou una casella; un gir canvia l’orientació sense desplaçar-se. La fletxa plena indica l’inici. Els punts indiquen el recorregut i la fletxa buida, l’orientació final desitjada. Cada exercici comença de nou.

La **definició** va en una fila inferior i no s’executa per si mateixa. La fila principal conté les **crides**. Cada crida executa totes les ordres de la funció i després continua la principal. No poseu nombres davall de definir ni de cridar: les funcions no admeten peces de nombre. Només usem una funció, sense recursivitat.

El **bucle** repeteix només les peces entre l’inici i el fi. El nombre va davall de l’inici del bucle. Una crida pot estar dins del bucle. «3 voltes» significa tres execucions totals. Les icones són representacions de contorn simplificades; la llegenda diferencia cada peça.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat (PDF, 1 pàgina A4)](_assets/activitats/kits/cs-divideix-i-crea-funcions.pdf).
- [Les huit fitxes de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionari de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Llapis i goma. Imprimiu en A4 vertical al 100%, en blanc i negre. Reserveu el solucionari al professorat.

## 👣 Desenvolupament pas a pas

### 1. Una part que pots guardar

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: A D A D -->
<!-- Funcio: A D -->
<!-- Principal: F F -->
<!-- Resposta de control: F F -->

**Consigna:** Dibuixa en la fila inferior la funció d’un costat i un gir. En la principal, fes dues crides.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex1-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex1-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex1-resposta.svg)

**Solució docent:** Cada crida fa avançar i girar a la dreta. Dues crides acaben en C3 mirant al sud.

### 2. Reutilitza un escaló

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: A D A E A D A E -->
<!-- Funcio: A D A E -->
<!-- Principal: F F -->
<!-- Resposta de control: F F -->

**Consigna:** Separa el camí en dos escalons. Defineix-ne un i crida’l dues vegades.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex2-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex2-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex2-resposta.svg)

**Solució docent:** La funció fa avançar, dreta, avançar i esquerra. El primer escaló acaba en C3 i el segon en D4, sempre mirant al nord.

### 3. Una aproximació i dues crides

<!-- Mode: coding -->
<!-- Inici: B1 N -->
<!-- Codi: - -->
<!-- Objectiu: A A D A E A D A E -->
<!-- Funcio: A D A E -->
<!-- Principal: A F F -->
<!-- Resposta de control: A F F -->

**Consigna:** Deixa el primer avanç fora de la funció. Defineix l’escaló i completa la fila principal.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex3-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex3-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-divideix-i-crea-funcions-ex3-resposta.svg)

**Solució docent:** L’avanç inicial acaba en B2. Les dues crides fan els escalons i acaben en D4 mirant al nord.

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
