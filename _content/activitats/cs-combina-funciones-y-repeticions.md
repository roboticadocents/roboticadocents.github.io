---
title: "Combina funciones y repeticiones"
description: "Construir un programa con aproximación, llamadas a una función dentro de un bucle y un tramo final. Ficha A4 sin robot."
robot: coding-set
topic: "Algoritmos"
cycle_label: "Segundo ciclo"
duration: "30 min"
order: 8
---

## 🎯 Què aprendrem?

Construir un programa amb aproximació, crides a una funció dins d’un bucle i un tram final. Activitat individual per a alumnat de 8 anys, neutra, sobre paper i sense robot.

Un avanç o retrocés mou una casella; un gir canvia l’orientació sense desplaçar-se. La fletxa plena indica l’inici. Els punts indiquen el recorregut i la fletxa buida, l’orientació final desitjada. Cada exercici comença de nou.

La **definició** va en una fila inferior i no s’executa per si mateixa. La fila principal conté les **crides**. Cada crida executa totes les ordres de la funció i després continua la principal. No poseu nombres davall de definir ni de cridar: les funcions no admeten peces de nombre. Només usem una funció, sense recursivitat.

El **bucle** repeteix només les peces entre l’inici i el fi. El nombre va davall de l’inici del bucle. Una crida pot estar dins del bucle. «3 voltes» significa tres execucions totals. Les icones són representacions de contorn simplificades; la llegenda diferencia cada peça.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat (PDF, 1 pàgina A4)](_assets/activitats/kits/cs-combina-funcions-i-repeticions.pdf).
- [Les huit fitxes de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionari de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Llapis i goma. Imprimiu en A4 vertical al 100%, en blanc i negre. Reserveu el solucionari al professorat.

## 👣 Desenvolupament pas a pas

### 1. Una funció dins del bucle

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: REP3[A D A E] -->
<!-- Funcio: A D A E -->
<!-- Principal: REP3[F] -->
<!-- Resposta de control: REP3[F] -->

**Consigna:** La funció ja està definida. Crida-la dins d’un bucle de tres voltes.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex1-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex1-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex1-resposta.svg)

**Solució docent:** La principal té inici amb el nombre 3, una crida i fi. Acaba en E5 mirant al nord.

### 2. Primer arriba a l’escala

<!-- Mode: coding -->
<!-- Inici: B1 N -->
<!-- Codi: - -->
<!-- Objectiu: A REP2[A D A E] -->
<!-- Funcio: A D A E -->
<!-- Principal: A REP2[F] -->
<!-- Resposta de control: A REP2[F] -->

**Consigna:** La funció ja està definida. Fes un avanç i després repeteix la crida dues vegades.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex2-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex2-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex2-resposta.svg)

**Solució docent:** L’avanç inicial queda fora del bucle. Dues crides fan dos escalons. Acaba en D4 mirant al nord.

### 3. Construeix tot el programa

<!-- Mode: coding -->
<!-- Inici: B1 N -->
<!-- Codi: - -->
<!-- Objectiu: A REP2[A D A E] D A -->
<!-- Funcio: A D A E -->
<!-- Principal: A REP2[F] D A -->
<!-- Resposta de control: A REP2[F] D A -->

**Consigna:** Defineix un escaló. Escriu: aproximació, dues crides amb bucle i tram final.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex3-graella.svg)

**Definició de referència:**

![Fila inferior: definició de la funció.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex3-funcio.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-combina-funcions-i-repeticions-ex3-resposta.svg)

**Solució docent:** Defineix avançar, dreta, avançar i esquerra. La principal és avançar, bucle de dues crides, dreta i avançar. Acaba en E4 mirant a l’est.

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
