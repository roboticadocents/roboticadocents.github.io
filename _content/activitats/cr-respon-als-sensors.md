---
title: "Una lectura, una resposta"
description: "Distingir entrada i eixida i programar una resposta observable amb una condició. Una activitat en paper, al simulador i amb Codey Rocky."
robot: codey-rocky
topic: "Abstracció"
cycle_label: "Segon cicle"
duration: "35–45 min"
order: 7
---

<!-- Generat per _scripts/generate-codey-activities.js des de sim/codey-activities.json. -->

## 🎯 Què aprendrem?

Distingir entrada i eixida i programar una resposta observable amb una condició.

És **una mateixa activitat amb tres entorns**, amb tres exercicis compartits. Es pot començar en qualsevol entorn; no és obligatori repetir-los tots. La resposta s’ha de justificar amb una predicció, una traça o una observació.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat (PDF, 2 pàgines A4)](_assets/activitats/kits/cr-respon-als-sensors.pdf).
- [Recull de les huit activitats (PDF, 16 pàgines A4)](_assets/activitats/kits/cr-fitxes-tres-entorns.pdf).
- [Solucionari separat del professorat (PDF, 8 pàgines A4)](_assets/activitats/kits/cr-solucions-tres-entorns.pdf).
- **Paper:** llapis, goma i fitxa. No cal robot ni dispositiu; les lectures donades són dades de la prova.
- **Simulador:** navegador amb el [simulador de Codey Rocky](/sim/index.html?robot=codey-rocky&activity=cr-respon-als-sensors&exercise=1). Cada enllaç carrega les peces inicials i l’escenari de l’exercici.
- **Robot:** Codey Rocky, mBlock, cable o connexió disponible, i els materials de la prova. Els JSON són del simulador: al robot es reconstrueixen les mateixes peces a mBlock.

### Preparació amb el robot

Si cal, segueix [Primeres passes amb Codey](../../tutorial/cr-primeres-passes/index.html). Afegeix Codey a mBlock, connecta’l i usa el mode Càrrega per a les piles d’inici.

Per a la llum, tapeu i destapeu el sensor; per al so, useu veu o un picament moderat; per al color, orienteu Rocky cap al terra i mesureu dues superfícies. Ajusteu el llindar a partir de lectures, no a l’atzar.

En les proves de moviment, mantén accessible l’interruptor. El botó C només atura els motors si li has programat aquesta ordre.

Els valors del paper són exemples controlats. Al robot, anoteu les lectures reals i justifiqueu els ajustos. Una potència i una durada no garanteixen una distància o un angle exactes; no es demanen equivalències en caselles.

## 👣 Desenvolupament pas a pas

### 1. La llum governa el LED

Completa: amb llum menor que 40, LED verd; en cas contrari, LED roig. Prova 20 i 70.

![Programa inicial de l’exercici 1; les peces corresponen al simulador.](_assets/activitats/codey/cr-respon-als-sensors-1-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-respon-als-sensors&exercise=1) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-respon-als-sensors-1.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** prem Executa;  compara amb la consigna i canvia una sola dada.

**Amb el robot:** reconstrueix aquestes peces a mBlock i fes la mateixa prova; registra les lectures reals abans d’ajustar el programa.

### 2. El so governa el text

Completa: amb so major que 60, mostra SO; en cas contrari, mostra SILENCI. Prova 70 i 20.

![Programa inicial de l’exercici 2; les peces corresponen al simulador.](_assets/activitats/codey/cr-respon-als-sensors-2-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-respon-als-sensors&exercise=2) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-respon-als-sensors-2.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** prem Executa;  compara amb la consigna i canvia una sola dada.

**Amb el robot:** reconstrueix aquestes peces a mBlock i fes la mateixa prova; registra les lectures reals abans d’ajustar el programa.

### 3. Detectar un color

Completa: en detectar roig, mostra ROIG; en cas contrari, mostra ALTRE. Prova les dues superfícies.

![Programa inicial de l’exercici 3; les peces corresponen al simulador.](_assets/activitats/codey/cr-respon-als-sensors-3-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-respon-als-sensors&exercise=3) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-respon-als-sensors-3.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** prem Executa;  compara amb la consigna i canvia una sola dada.

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

Connexió amb la situació d’aprenentatge [ruta colors](../../situacio/cr-ruta-colors/index.html). Les fitxes són pràctica de peces i raonament; es poden incorporar a aquesta situació quan tinga sentit.

Les peces corresponen al subconjunt de Codey de mBlock. [Casos oficials de Codey Rocky](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky).
