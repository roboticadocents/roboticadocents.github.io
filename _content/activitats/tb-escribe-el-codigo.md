---
title: "¿Qué código pondré?"
description: "Escribir un programa que reproduzca un recorrido y una orientación final. Ficha A4 de Tale-Bot, resuelta a mano y sin robot."
robot: tale-bot
topic: "Algoritmos"
cycle_label: "Segundo ciclo"
duration: "25 min"
order: 2
---

## 🎯 Què aprendrem?

Escriure un programa que reproduïsca un recorregut i una orientació final. Activitat individual per a 8 anys, neutra i descontextualitzada: només hi ha codis, caselles i orientacions. No requereix robot, ordinador, tauleta ni peces físiques.

**Convencions del paper:** les ordres es representen amb dibuixos de les tecles del Tale-Bot o de les peces del Coding Set, sense abreviatures amb lletres. La quadrícula indica la posició i la direcció inicials amb una fletxa plena. El camí de punts i la fletxa buida indiquen el recorregut i l’orientació que cal aconseguir. Avançar o retrocedir mou una casella; girar canvia la direcció sense moure’s de casella. Cada exercici comença de nou.

La repetició afecta tota la base. «2 vegades» significa dues execucions totals, no una més dues. No s’utilitzen bucles parcials ni nombres de moviment.

Llegiu les ordres d’esquerra a dreta i marqueu cada canvi de posició o orientació. No cal escriure Play: la simulació comença en la primera ordre.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat: Quin codi posaré? (PDF, 1 pàgina A4)](_assets/activitats/kits/tb-escriu-el-codi.pdf).
- [Les huit fitxes de Tale-Bot (PDF, 8 pàgines A4)](_assets/activitats/kits/tb-fitxes-paper.pdf).
- [Solucionari del professorat de Tale-Bot (PDF, 8 pàgines A4)](_assets/activitats/kits/tb-solucions-paper.pdf).
- Una còpia de la fitxa per alumne, llapis i goma. Imprimiu en A4 vertical, al 100%, en blanc i negre. No repartiu el solucionari.
- La llegenda i totes les dades necessàries apareixen en cada full. Dibuixeu els símbols en les caselles de resposta i escriviu només les explicacions; traceu els moviments en la quadrícula.

## 👣 Desenvolupament pas a pas

### 1. Segueix la ruta

<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: A A D A A -->
<!-- Resposta de control: A A D A A -->

**Consigna:** Dibuixa les tecles per seguir el camí de punts.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/tb-escriu-el-codi-ex1-graella.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-escriu-el-codi-ex1-resposta.svg)

**Solució docent:** Dos avanços, un gir a la dreta i dos avanços. Visita B3, B4, C4 i D4; acaba en D4, mirant a l’est.

### 2. Comença mirant a l’esquerra

<!-- Inici: E2 O -->
<!-- Codi: - -->
<!-- Objectiu: A A D A -->
<!-- Resposta de control: A A D A -->

**Consigna:** Segueix el camí. Fixa’t en la fletxa del final.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/tb-escriu-el-codi-ex2-graella.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-escriu-el-codi-ex2-resposta.svg)

**Solució docent:** Dos avanços, un gir a la dreta i un avanç. Visita D2, C2 i C3; acaba en C3, mirant al nord.

### 3. Utilitza el retrocés

<!-- Inici: C3 E -->
<!-- Codi: - -->
<!-- Objectiu: R D A -->
<!-- Resposta de control: R D A -->

**Consigna:** Segueix el camí. Comença amb la tecla d’anar enrere.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/tb-escriu-el-codi-ex3-graella.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-escriu-el-codi-ex3-resposta.svg)

**Solució docent:** Un retrocés, un gir a la dreta i un avanç. Visita B3 i B2; acaba en B2, mirant al sud.

## ✅ Evidències d'aprenentatge

- Interpreta avanç, retrocés i gir sense confondre desplaçament amb orientació.
- Deixa una resposta gràfica i un recorregut verificable per a cada exercici.
- Justifica el resultat seguint les ordres una a una.

Valoreu cada exercici de 0 a 2 punts: 1 per la resposta correcta i 1 per la traça o justificació coherent. Total: 6 punts. En escriptura de codi, accepteu alternatives que respecten la ruta ordenada, l’orientació final i les restriccions de la consigna; el solucionari dona una resposta possible.

### Preguntes per fer pensar

- Quina diferència hi ha entre girar i desplaçar-se?
- Per què necessitem conéixer l’orientació inicial?
- Com pots comprovar la resposta sense disposar del robot?

## ♿ Variants i inclusió

Llegiu les consignes en veu alta si cal; les respostes continuen escrivint-se en la fitxa. Es pot usar el dit o un llapis per seguir el codi. Els símbols són grans, en blanc i negre; la resposta es pot dibuixar amb fletxes senzilles. La mascota de contorn es pot colorejar en acabar. Per donar suport, resolgueu oralment un primer moviment; per ampliar, canvieu l’orientació inicial i torneu a calcular el resultat en un full auxiliar.

## 🔗 Referent consultat

[Comandaments i repetició de Tale-Bot Pro](https://matatalab.com/en/lesson4.2). Les tecles i les peces es representen amb dibuixos de contorn simplificats. Els símbols conserven el sentit dels comandaments. Les dades internes de generació queden en comentaris i no es mostren a l’alumnat.
