---
title: "Refactoritza el codi"
description: "Abreujar un programa sense alterar la seqüència d’ordres executades. Fitxa A4 de Tale-Bot, resolta a mà i sense robot."
robot: tale-bot
topic: "Patrons"
cycle_label: "Segon cicle"
duration: "25 min"
order: 4
---

## 🎯 Què aprendrem?

Abreujar un programa sense alterar la seqüència d’ordres executades. Activitat individual per a 8 anys, neutra i descontextualitzada: només hi ha codis, caselles i orientacions. No requereix robot, ordinador, tauleta ni peces físiques.

**Convencions del paper:** les ordres es representen amb dibuixos de les tecles del Tale-Bot o de les peces del Coding Set, sense abreviatures amb lletres. La quadrícula indica la posició i la direcció inicials amb una fletxa plena. El camí de punts i la fletxa buida indiquen el recorregut i l’orientació que cal aconseguir. Avançar o retrocedir mou una casella; girar canvia la direcció sense moure’s de casella. Cada exercici comença de nou.

La repetició afecta tota la base. «2 vegades» significa dues execucions totals, no una més dues. No s’utilitzen bucles parcials ni nombres de moviment.

**Refactoritzar** significa conservar totes les ordres elementals en el mateix ordre: arribar a la mateixa casella no basta. No es val eliminar anades i tornades o girs que es compensen.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat: Refactoritza el codi (PDF, 1 pàgina A4)](_assets/activitats/kits/tb-refactoritza-el-codi.pdf).
- [Les quatre fitxes de Tale-Bot (PDF, 4 pàgines A4)](_assets/activitats/kits/tb-fitxes-paper.pdf).
- [Solucionari del professorat de Tale-Bot (PDF, 4 pàgines A4)](_assets/activitats/kits/tb-solucions-paper.pdf).
- Una còpia de la fitxa per alumne, llapis i goma. Imprimiu en A4 vertical, al 100%, en blanc i negre. No repartiu el solucionari.
- La llegenda i totes les dades necessàries apareixen en cada full. Dibuixeu els símbols en les caselles de resposta i escriviu només les explicacions; traceu els moviments en la quadrícula.

## 👣 Desenvolupament pas a pas

### 1. Una unitat que es repeteix

<!-- Inici: B2 N -->
<!-- Codi: A D A D -->
<!-- Objectiu: A D A D -->
<!-- Resposta de control: REP2[A D] -->

**Consigna:** Dibuixa el tros que es repeteix. Quantes vegades cal fer-lo?

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/tb-refactoritza-el-codi-ex1-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-refactoritza-el-codi-ex1-resposta.svg)

**Solució docent:** La base és avançar i girar a la dreta. S’executa dues vegades en total. Es guarden dues tecles en lloc de quatre; acaba en C3, mirant al sud.

### 2. Troba el patró

<!-- Inici: D2 N -->
<!-- Codi: A A E A A E A A E -->
<!-- Objectiu: A A E A A E A A E -->
<!-- Resposta de control: REP3[A A E] -->

**Consigna:** Busca el tros repetit. Dibuixa’l i indica quantes vegades es fa.

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/tb-refactoritza-el-codi-ex2-codi.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-refactoritza-el-codi-ex2-resposta.svg)

**Solució docent:** La base són dos avanços i un gir a l’esquerra. S’executa tres vegades en total. Es guarden tres tecles en lloc de nou; acaba en B2, mirant a l’est.

### 3. Es pot abreujar així?

<!-- Inici: B2 N -->
<!-- Codi: A D A D A -->
<!-- Objectiu: A D A D A -->
<!-- Resposta de control: A D A D A -->
<!-- Proposta: REP3[A D] -->

**Consigna:** La proposta fa exactament el mateix? Encercla sí o no.

**Codi donat:**

![Seqüència de tecles o peces amb símbols de moviment.](_assets/activitats/kits/tb-refactoritza-el-codi-ex3-codi.svg)

**Proposta que cal comprovar:**

![Dues tecles amb repetició global de tres execucions.](_assets/activitats/kits/tb-refactoritza-el-codi-ex3-proposta.svg)

**Resposta gràfica de control:**

![Solució amb dibuixos dels comandaments.](_assets/activitats/kits/tb-refactoritza-el-codi-ex3-resposta.svg)

**Solució docent:** No són equivalents: la proposta afegeix un gir a la dreta al final. L’original acaba en C2, mirant al sud; la proposta, en C2, mirant a l’oest. Cal conservar les cinc tecles originals perquè no són una repetició exacta d’una base més curta.

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

[Comandaments i repetició de Tale-Bot Pro](https://matatalab.com/en/lesson4.2). Les tecles i les peces es representen amb dibuixos de contorn simplificats. Els símbols conserven el sentit dels comandaments. Les dades internes de generació queden en comentaris i no es mostren a l’alumnat.
