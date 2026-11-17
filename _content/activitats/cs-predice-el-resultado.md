---
title: "¿Qué hará el robot?"
description: "Predecir recorridos y orientaciones a partir de un código escrito. Ficha A4 de Coding Set, resuelta a mano y sin robot."
robot: coding-set
topic: "Algoritmos"
cycle_label: "Segundo ciclo"
duration: "25 min"
order: 1
---

## 🎯 Què aprendrem?

Predir recorreguts i orientacions a partir d’un codi escrit. Activitat individual per a 8 anys, neutra i descontextualitzada: només hi ha codis, caselles i orientacions. No requereix robot, ordinador, tauleta ni peces físiques.

**Convencions del paper:** les ordres es representen amb dibuixos de les tecles del Tale-Bot o de les peces del Coding Set, sense abreviatures amb lletres. La quadrícula indica la posició i la direcció inicials amb una fletxa plena. El camí de punts i la fletxa buida indiquen el recorregut i l’orientació que cal aconseguir. Avançar o retrocedir mou una casella; girar canvia la direcció sense moure’s de casella. Cada exercici comença de nou.

Els nombres es dibuixen en una peça menuda davall del moviment o de l’inici del bucle. Els girs no porten nombres. Les peces d’inici i final delimiten les ordres repetides.

Llegiu les ordres d’esquerra a dreta i marqueu cada canvi de posició o orientació. No cal escriure Play: la simulació comença en la primera ordre.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat: Què farà el robot? (PDF, 1 pàgina A4)](_assets/activitats/kits/cs-prediu-el-resultat.pdf).
- [Les huit fitxes de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionari del professorat de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Una còpia de la fitxa per alumne, llapis i goma. Imprimiu en A4 vertical, al 100%, en blanc i negre. No repartiu el solucionari.
- La llegenda i totes les dades necessàries apareixen en cada full. Dibuixeu els símbols en les caselles de resposta i escriviu només les explicacions; traceu els moviments en la quadrícula.

## 👣 Desenvolupament pas a pas

### 1. Moviments amb nombres

<!-- Inici: B2 N -->
<!-- Codi: A3 D A2 -->
<!-- Objectiu: - -->
<!-- Resposta de control: A3 D A2 -->

**Consigna:** Segueix les peces. Dibuixa el camí i com acaba mirant.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/cs-prediu-el-resultat-ex1-graella.svg)

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/cs-prediu-el-resultat-ex1-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-prediu-el-resultat-ex1-resposta.svg)

**Solució docent:** Acaba en D5, mirant a l’est. Fa cinc passos i un gir: B3, B4, B5, C5 i D5.

### 2. Dos passos d’un bucle

<!-- Inici: B2 N -->
<!-- Codi: REP2[A D] -->
<!-- Objectiu: - -->
<!-- Resposta de control: REP2[A D] -->

**Consigna:** Fes les dues voltes. Dibuixa el camí i la fletxa final.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/cs-prediu-el-resultat-ex2-graella.svg)

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/cs-prediu-el-resultat-ex2-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-prediu-el-resultat-ex2-resposta.svg)

**Solució docent:** Fa dues vegades avançar i girar a la dreta. Visita B3 i C3; acaba en C3, mirant al sud.

### 3. Retrocés amb paràmetre

<!-- Inici: D2 N -->
<!-- Codi: A2 E R2 -->
<!-- Objectiu: - -->
<!-- Resposta de control: A2 E R2 -->

**Consigna:** Dibuixa el camí. Fixa’t bé en el moviment enrere.

![Quadrícula amb inici i, quan correspon, camí de punts i orientació final.](_assets/activitats/kits/cs-prediu-el-resultat-ex3-graella.svg)

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/cs-prediu-el-resultat-ex3-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-prediu-el-resultat-ex3-resposta.svg)

**Solució docent:** Acaba en F4, mirant a l’oest. Visita D3, D4, E4 i F4. Els dos passos enrere el mouen cap a l’est sense canviar on mira.

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
