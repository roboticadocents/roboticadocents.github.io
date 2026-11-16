---
title: "Refactoritza el codi"
description: "Abreujar un programa sense alterar la seqüència d’ordres executades. Fitxa A4 de Coding Set, resolta a mà i sense robot."
robot: coding-set
topic: "Patrons"
cycle_label: "Segon cicle"
duration: "25 min"
order: 4
---

## 🎯 Què aprendrem?

Abreujar un programa sense alterar la seqüència d’ordres executades. Activitat individual per a 8 anys, neutra i descontextualitzada: només hi ha codis, caselles i orientacions. No requereix robot, ordinador, tauleta ni peces físiques.

**Convencions del paper:** les ordres es representen amb dibuixos de les tecles del Tale-Bot o de les peces del Coding Set, sense abreviatures amb lletres. La quadrícula indica la posició i la direcció inicials amb una fletxa plena. El camí de punts i la fletxa buida indiquen el recorregut i l’orientació que cal aconseguir. Avançar o retrocedir mou una casella; girar canvia la direcció sense moure’s de casella. Cada exercici comença de nou.

Els nombres es dibuixen en una peça menuda davall del moviment o de l’inici del bucle. Els girs no porten nombres. Les peces d’inici i final delimiten les ordres repetides.

**Refactoritzar** significa conservar totes les ordres elementals en el mateix ordre: arribar a la mateixa casella no basta. No es val eliminar anades i tornades o girs que es compensen.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat: Refactoritza el codi (PDF, 1 pàgina A4)](_assets/activitats/kits/cs-refactoritza-el-codi.pdf).
- [Les huit fitxes de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-fitxes-paper.pdf).
- [Solucionari del professorat de Coding Set (PDF, 8 pàgines A4)](_assets/activitats/kits/cs-solucions-paper.pdf).
- Una còpia de la fitxa per alumne, llapis i goma. Imprimiu en A4 vertical, al 100%, en blanc i negre. No repartiu el solucionari.
- La llegenda i totes les dades necessàries apareixen en cada full. Dibuixeu els símbols en les caselles de resposta i escriviu només les explicacions; traceu els moviments en la quadrícula.

## 👣 Desenvolupament pas a pas

### 1. Agrupa moviments iguals

<!-- Inici: C2 N -->
<!-- Codi: A A A D R R -->
<!-- Objectiu: A A A D R R -->
<!-- Resposta de control: A3 D R2 -->

**Consigna:** Ajunta els moviments iguals amb peces de nombre.

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/cs-refactoritza-el-codi-ex1-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-refactoritza-el-codi-ex1-resposta.svg)

**Solució docent:** Avançar amb el nombre 3, girar a la dreta i retrocedir amb el nombre 2. Acaba en A5, mirant a l’est. Les sis peces originals passen a cinc: tres de moviment i dos nombres.

### 2. Substitueix la repetició

<!-- Inici: B2 N -->
<!-- Codi: A D A D A D A D -->
<!-- Objectiu: A D A D A D A D -->
<!-- Resposta de control: REP4[A D] -->

**Consigna:** Canvia les repeticions per un bucle. Dibuixa’n totes les peces.

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/cs-refactoritza-el-codi-ex2-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-refactoritza-el-codi-ex2-resposta.svg)

**Solució docent:** Un bucle de quatre voltes amb avançar i girar a la dreta. Acaba en B2, mirant al nord. Huit peces passen a cinc: inici, nombre 4, avançar, girar i final de bucle.

### 3. Deixa l’últim gir fora

<!-- Inici: B2 N -->
<!-- Codi: A A D A A D A A D E -->
<!-- Objectiu: A A D A A D A A D E -->
<!-- Resposta de control: REP3[A2 D] E -->

**Consigna:** Usa un bucle i nombres. L’últim gir es fa només una vegada.

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/cs-refactoritza-el-codi-ex3-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/cs-refactoritza-el-codi-ex3-resposta.svg)

**Solució docent:** Un bucle de tres voltes amb avançar amb el nombre 2 i girar a la dreta. Després del bucle, un gir a l’esquerra. Acaba en D2, mirant al sud. Deu peces passen a set, comptant els nombres. L’últim gir queda fora del bucle.

## ✅ Evidències d'aprenentatge

- Interpreta avanç, retrocés i gir sense confondre desplaçament amb orientació.
- Deixa una resposta gràfica i un recorregut verificable per a cada exercici.
- Comprova l’equivalència desplegant les dues versions del codi.

Valoreu cada exercici de 0 a 2 punts: 1 per la resposta correcta i 1 per la traça o justificació coherent. Total: 6 punts. En escriptura de codi, accepteu alternatives que respecten la ruta ordenada, l’orientació final i les restriccions de la consigna; el solucionari dona una resposta possible.

### Preguntes per fer pensar

- Quina diferència hi ha entre girar i desplaçar-se?
- Per què necessitem conéixer l’orientació inicial?
- Com demostres que els dos codis executen exactament les mateixes ordres?

## ♿ Variants i inclusió

Llegiu les consignes en veu alta si cal; les respostes continuen escrivint-se en la fitxa. Es pot usar el dit o un llapis per seguir el codi. Els símbols són grans, en blanc i negre; la resposta es pot dibuixar amb fletxes senzilles. La mascota de contorn es pot colorejar en acabar. Per donar suport, resolgueu oralment un primer moviment; per ampliar, canvieu l’orientació inicial i torneu a calcular el resultat en un full auxiliar.

## 🔗 Referent consultat

[Moviments i nombres del Coding Set](https://matatalab.com/en/node/61) i [bucles](https://matatalab.com/en/node/62). Les tecles i les peces es representen amb dibuixos de contorn simplificats. Els símbols conserven el sentit dels comandaments. Les dades internes de generació queden en comentaris i no es mostren a l’alumnat.
