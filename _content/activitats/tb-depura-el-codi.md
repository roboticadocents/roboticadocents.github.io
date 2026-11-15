---
title: "Troba i corregeix l’error"
description: "Localitzar i corregir un únic error amb una simulació sobre paper. Fitxa A4 de Tale-Bot, resolta a mà i sense robot."
robot: tale-bot
topic: "Algorismes"
cycle_label: "Segon cicle"
duration: "25 min"
order: 3
---

## 🎯 Què aprendrem?

Localitzar i corregir un únic error amb una simulació sobre paper. Activitat individual per a 8 anys, neutra i descontextualitzada: només hi ha codis, caselles i orientacions. No requereix robot, ordinador, tauleta ni peces físiques.

**Convencions del paper:** les ordres es representen amb dibuixos de les tecles del Tale-Bot o de les peces del Coding Set, sense abreviatures amb lletres. La quadrícula indica la posició i la direcció inicials amb una fletxa plena. El camí de punts i la fletxa buida indiquen el recorregut i l’orientació que cal aconseguir. Avançar o retrocedir mou una casella; girar canvia la direcció sense moure’s de casella. Cada exercici comença de nou.

La repetició afecta tota la base. «2 vegades» significa dues execucions totals, no una més dues. No s’utilitzen bucles parcials ni nombres de moviment.

Llegiu les ordres d’esquerra a dreta i marqueu cada canvi de posició o orientació. No cal escriure Play: la simulació comença en la primera ordre.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat: Troba i corregeix l’error (PDF, 1 pàgina A4)](_assets/activitats/kits/tb-depura-el-codi.pdf).
- [Les quatre fitxes de Tale-Bot (PDF, 4 pàgines A4)](_assets/activitats/kits/tb-fitxes-paper.pdf).
- [Solucionari del professorat de Tale-Bot (PDF, 4 pàgines A4)](_assets/activitats/kits/tb-solucions-paper.pdf).
- Una còpia de la fitxa per alumne, llapis i goma. Imprimiu en A4 vertical, al 100%, en blanc i negre. No repartiu el solucionari.
- La llegenda i totes les dades necessàries apareixen en cada full. Dibuixeu els símbols en les caselles de resposta i escriviu només les explicacions; traceu els moviments en la quadrícula.

## 👣 Desenvolupament pas a pas

### 1. Un gir incorrecte

<!-- Inici: B2 N -->
<!-- Codi: A A E A -->
<!-- Objectiu: A A D A -->
<!-- Resposta de control: A A D A -->

**Consigna:** Hi ha una tecla equivocada. Encercla-la i corregeix el codi.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/tb-depura-el-codi-ex1-graella.svg)

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/tb-depura-el-codi-ex1-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-depura-el-codi-ex1-resposta.svg)

**Solució docent:** La tercera tecla ha de girar a la dreta, no a l’esquerra. El codi erroni acaba en A4, mirant a l’oest; el corregit, en C4, mirant a l’est.

### 2. La posició no ho és tot

<!-- Inici: B2 N -->
<!-- Codi: A D A D -->
<!-- Objectiu: A D A E -->
<!-- Resposta de control: A D A E -->

**Consigna:** Arriba al lloc correcte, però mira malament. Canvia una tecla.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/tb-depura-el-codi-ex2-graella.svg)

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/tb-depura-el-codi-ex2-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-depura-el-codi-ex2-resposta.svg)

**Solució docent:** La quarta tecla ha de girar a l’esquerra. Tots dos codis acaben en C3, però l’erroni mira al sud i el corregit al nord.

### 3. Avançar o retrocedir?

<!-- Inici: C3 E -->
<!-- Codi: R D A -->
<!-- Objectiu: A D A -->
<!-- Resposta de control: A D A -->

**Consigna:** Canvia una sola tecla per seguir el camí de punts.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/tb-depura-el-codi-ex3-graella.svg)

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/tb-depura-el-codi-ex3-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-depura-el-codi-ex3-resposta.svg)

**Solució docent:** La primera tecla ha de ser avançar, no retrocedir. L’erroni acaba en B2, mirant al sud; el corregit, en D2, mirant al sud.

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
