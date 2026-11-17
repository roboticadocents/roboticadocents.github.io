---
title: "¿Qué código pondré?"
description: "Escribir un programa que reproduzca un recorrido y una orientación final. Ficha A4 de Coding Set, resuelta a mano y sin robot."
robot: coding-set
topic: "Algoritmos"
cycle_label: "Segundo ciclo"
duration: "25 min"
order: 2
---

## 🎯 Què aprendrem?

Escriure un programa que reproduïsca un recorregut i una orientació final. Activitat individual per a 8 anys, neutra i descontextualitzada: només hi ha codis, caselles i orientacions. No requereix robot, ordinador, tauleta ni peces físiques.

**Convencions del paper:** les ordres es representen amb dibuixos de les tecles del Tale-Bot o de les peces del Coding Set, sense abreviatures amb lletres. La quadrícula indica la posició i la direcció inicials amb una fletxa plena. El camí de punts i la fletxa buida indiquen el recorregut i l’orientació que cal aconseguir. Avançar o retrocedir mou una casella; girar canvia la direcció sense moure’s de casella. Cada exercici comença de nou.

Els nombres es dibuixen en una peça menuda davall del moviment o de l’inici del bucle. Els girs no porten nombres. Les peces d’inici i final delimiten les ordres repetides.

Llegiu les ordres d’esquerra a dreta i marqueu cada canvi de posició o orientació. No cal escriure Play: la simulació comença en la primera ordre.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat: Quin codi posaré? (PDF, 1 pàgina A4)](_assets/activitats/kits/cs-escriu-el-codi.pdf).
- [Les huit fitxes de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionari del professorat de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Una còpia de la fitxa per alumne, llapis i goma. Imprimiu en A4 vertical, al 100%, en blanc i negre. No repartiu el solucionari.
- La llegenda i totes les dades necessàries apareixen en cada full. Dibuixeu els símbols en les caselles de resposta i escriviu només les explicacions; traceu els moviments en la quadrícula.

## 👣 Desenvolupament pas a pas

### 1. Abreuja els trams rectes

<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: A3 D A2 -->
<!-- Resposta de control: A3 D A2 -->

**Consigna:** Dibuixa les peces per seguir el camí. Usa nombres.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/cs-escriu-el-codi-ex1-graella.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-escriu-el-codi-ex1-resposta.svg)

**Solució docent:** Avançar amb el nombre 3, girar a la dreta i avançar amb el nombre 2. Acaba en D5, mirant a l’est.

### 2. Tanca el quadrat

<!-- Inici: B2 N -->
<!-- Codi: - -->
<!-- Objectiu: REP4[A D] -->
<!-- Resposta de control: REP4[A D] -->

**Consigna:** Comença avançant. Dibuixa un bucle per fer el quadrat.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/cs-escriu-el-codi-ex2-graella.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-escriu-el-codi-ex2-resposta.svg)

**Solució docent:** Un bucle de quatre voltes amb avançar i girar a la dreta. Acaba en B2, mirant al nord.

### 3. Combina trams i girs

<!-- Inici: E2 O -->
<!-- Codi: - -->
<!-- Objectiu: A2 D A2 D A -->
<!-- Resposta de control: A2 D A2 D A -->

**Consigna:** Segueix el camí. Usa peces de moviment i nombres.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/cs-escriu-el-codi-ex3-graella.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-escriu-el-codi-ex3-resposta.svg)

**Solució docent:** Avançar amb el nombre 2, girar a la dreta, avançar amb el nombre 2, girar a la dreta i avançar. Acaba en D4, mirant a l’est.

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

[Moviments i nombres del Coding Set](https://matatalab.com/en/node/61) i [bucles](https://matatalab.com/en/node/62). Les tecles i les peces es representen amb dibuixos de contorn simplificats. Els símbols conserven el sentit dels comandaments. Les dades internes de generació queden en comentaris i no es mostren a l’alumnat.
