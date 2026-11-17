---
title: "¿Qué pongo dentro del bucle?"
description: "Identificar la unidad repetida y delimitarla con las piezas de inicio y fin de bucle. Ficha A4 sin robot."
robot: coding-set
topic: "Patrones"
cycle_label: "Segundo ciclo"
duration: "30 min"
order: 6
---

## 🎯 Què aprendrem?

Identificar la unitat repetida i delimitar-la amb les peces d’inici i fi de bucle. Activitat individual per a alumnat de 8 anys, neutra, sobre paper i sense robot.

Un avanç o retrocés mou una casella; un gir canvia l’orientació sense desplaçar-se. La fletxa plena indica l’inici. Els punts indiquen el recorregut i la fletxa buida, l’orientació final desitjada. Cada exercici comença de nou.

La **definició** va en una fila inferior i no s’executa per si mateixa. La fila principal conté les **crides**. Cada crida executa totes les ordres de la funció i després continua la principal. No poseu nombres davall de definir ni de cridar: les funcions no admeten peces de nombre. Només usem una funció, sense recursivitat.

El **bucle** repeteix només les peces entre l’inici i el fi. El nombre va davall de l’inici del bucle. Una crida pot estar dins del bucle. «3 voltes» significa tres execucions totals. Les icones són representacions de contorn simplificades; la llegenda diferencia cada peça.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat (PDF, 1 pàgina A4)](_assets/activitats/kits/cs-que-pose-dins-del-bucle.pdf).
- [Les huit fitxes de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionari de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Llapis i goma. Imprimiu en A4 vertical al 100%, en blanc i negre. Reserveu el solucionari al professorat.

## 👣 Desenvolupament pas a pas

### 1. Repeteix només l’escaló

<!-- Mode: coding -->
<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: REP3[A D A E] -->
<!-- Funcio: - -->
<!-- Principal: REP3[A D A E] -->
<!-- Resposta de control: REP3[A D A E] -->

**Consigna:** Dibuixa un bucle de tres voltes per seguir els tres escalons.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex1-graella.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex1-resposta.svg)

**Solució docent:** Entre inici i fi van avançar, dreta, avançar i esquerra. El nombre 3 va davall de l’inici. Acaba en E5 mirant al nord.

### 2. L’aproximació queda fora

<!-- Mode: coding -->
<!-- Inici: B1 N -->
<!-- Codi: - -->
<!-- Objectiu: A REP2[A D A E] -->
<!-- Funcio: - -->
<!-- Principal: A REP2[A D A E] -->
<!-- Resposta de control: A REP2[A D A E] -->

**Consigna:** Fes un avanç inicial i després dos escalons. Repeteix només els escalons.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex2-graella.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex2-resposta.svg)

**Solució docent:** L’avanç inicial es fa una vegada. El bucle repeteix dues vegades l’escaló. Acaba en D4 mirant al nord.

### 3. També hi ha un tram final

<!-- Mode: coding -->
<!-- Inici: B1 N -->
<!-- Codi: - -->
<!-- Objectiu: A REP2[A D A E] D A -->
<!-- Funcio: - -->
<!-- Principal: A REP2[A D A E] D A -->
<!-- Resposta de control: A REP2[A D A E] D A -->

**Consigna:** Dibuixa l’inici i el fi del bucle. Deixa fora l’avanç inicial i el gir i avanç finals.

![Recorregut i inici de l’exercici.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex3-graella.svg)

**Resposta gràfica de control:**

![Fila principal amb crides i bucles.](_assets/activitats/kits/cs-que-pose-dins-del-bucle-ex3-resposta.svg)

**Solució docent:** El bucle de dues voltes conté només l’escaló. Després del fi hi ha dreta i avançar. Acaba en E4 mirant a l’est.

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
