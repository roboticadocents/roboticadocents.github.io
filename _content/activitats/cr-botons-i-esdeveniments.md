---
title: "Quan s’executa cada pila?"
description: "Relacionar cada esdeveniment amb la seua pila i separar inici, botons i eixides. Una activitat en paper, al simulador i amb Codey Rocky."
robot: codey-rocky
topic: "Descomposició"
cycle_label: "Segon cicle"
duration: "35–45 min"
order: 2
---

<!-- Generat per _scripts/generate-codey-activities.js des de sim/codey-activities.json. -->

## 🎯 Què aprendrem?

Relacionar cada esdeveniment amb la seua pila i separar inici, botons i eixides.

És **una mateixa activitat amb tres entorns**, amb tres exercicis compartits. Es pot començar en qualsevol entorn; no és obligatori repetir-los tots. La resposta s’ha de justificar amb una predicció, una traça o una observació.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat (PDF, 2 pàgines A4)](_assets/activitats/kits/cr-botons-i-esdeveniments.pdf).
- [Recull de les huit activitats (PDF, 16 pàgines A4)](_assets/activitats/kits/cr-fitxes-tres-entorns.pdf).
- [Solucionari separat del professorat (PDF, 8 pàgines A4)](_assets/activitats/kits/cr-solucions-tres-entorns.pdf).
- **Paper:** llapis, goma i fitxa. No cal robot ni dispositiu; les lectures donades són dades de la prova.
- **Simulador:** navegador amb el [simulador de Codey Rocky](/sim/index.html?robot=codey-rocky&activity=cr-botons-i-esdeveniments&exercise=1). Cada enllaç carrega les peces inicials i l’escenari de l’exercici.
- **Robot:** Codey Rocky, mBlock, cable o connexió disponible, i els materials de la prova. Els JSON són del simulador: al robot es reconstrueixen les mateixes peces a mBlock.

### Preparació amb el robot

Si cal, segueix [Primeres passes amb Codey](../../tutorial/cr-primeres-passes/index.html). Afegeix Codey a mBlock, connecta’l i usa el mode Càrrega per a les piles d’inici.

Reproduïu les piles a mBlock. Reinicieu Codey abans de cada exercici i premeu només el botó indicat. C serveix ací com a esdeveniment programable, no com a aturada automàtica.

En les proves de moviment, mantén accessible l’interruptor. El botó C només atura els motors si li has programat aquesta ordre.

Els valors del paper són exemples controlats. Al robot, anoteu les lectures reals i justifiqueu els ajustos. Una potència i una durada no garanteixen una distància o un angle exactes; no es demanen equivalències en caselles.

## 👣 Desenvolupament pas a pas

### 1. Inici i botó A

Engega Codey. Després prem A. Què mostra abans i després?

![Programa inicial de l’exercici 1; les peces corresponen al simulador.](_assets/activitats/codey/cr-botons-i-esdeveniments-1-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-botons-i-esdeveniments&exercise=1) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-botons-i-esdeveniments-1.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** executa els esdeveniments start → A en aquest ordre;  compara amb la consigna i canvia una sola dada.

**Amb el robot:** reconstrueix aquestes peces a mBlock i fes la mateixa prova; registra les lectures reals abans d’ajustar el programa.

### 2. El botó B no es prem sol

Engega Codey sense prémer B. S’encén el LED roig?

![Programa inicial de l’exercici 2; les peces corresponen al simulador.](_assets/activitats/codey/cr-botons-i-esdeveniments-2-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-botons-i-esdeveniments&exercise=2) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-botons-i-esdeveniments-2.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** prem Executa;  compara amb la consigna i canvia una sola dada.

**Amb el robot:** reconstrueix aquestes peces a mBlock i fes la mateixa prova; registra les lectures reals abans d’ajustar el programa.

### 3. El botó C

Prem A i després C. Quin text queda?

![Programa inicial de l’exercici 3; les peces corresponen al simulador.](_assets/activitats/codey/cr-botons-i-esdeveniments-3-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-botons-i-esdeveniments&exercise=3) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-botons-i-esdeveniments-3.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** executa els esdeveniments A → C en aquest ordre;  compara amb la consigna i canvia una sola dada.

**Amb el robot:** reconstrueix aquestes peces a mBlock i fes la mateixa prova; registra les lectures reals abans d’ajustar el programa.

## ✅ Evidències d’aprenentatge

- Prediu o proposa una solució abans de provar-la.
- Explica quina peça, lectura o condició determina el resultat.
- Compara el que esperava amb el que observa i justifica un canvi.

### Registre compartit

Per a cada exercici: **entorn, predicció, resultat, dificultat, canvi provat i dubte pendent**. Al robot afegiu les lectures mesurades. El criteri és el mateix als tres entorns; la traça en paper, el programa i l’observació són evidències alternatives.

## ♿ Variants i inclusió

Es pot respondre oralment, assenyalant o dibuixant les peces. En parella, alterneu qui prediu i qui comprova. Per donar suport, resolgueu una comparació abans de mirar la pila sencera. Per ampliar, canvieu una entrada i expliqueu si es conserva el resultat.

## 🔗 Transferència i referents

Connexió amb la situació d’aprenentatge [entrades sensors](../../situacio/cr-entrades-sensors/index.html). Les fitxes són pràctica de peces i raonament; es poden incorporar a aquesta situació quan tinga sentit.

Les peces corresponen al subconjunt de Codey de mBlock. [Casos oficials de Codey Rocky](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky).
