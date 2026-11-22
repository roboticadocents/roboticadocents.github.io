---
title: "Del pas al control dels motors"
description: "Distingir una ordre de pas o gir d’una ordre de motor amb potència i temps, i explicar quan s’atura el moviment. Una activitat en paper, al simulador i amb Codey Rocky."
robot: codey-rocky
topic: "Algorismes"
cycle_label: "Segon cicle"
duration: "35–45 min"
order: 9
---

<!-- Generat per _scripts/generate-codey-activities.js des de sim/codey-activities.json. -->

## 🎯 Què aprendrem?

Distingir una ordre de pas o gir d’una ordre de motor amb potència i temps, i explicar quan s’atura el moviment.

És **una mateixa activitat amb tres entorns**, amb tres exercicis compartits. Es pot començar en qualsevol entorn; no és obligatori repetir-los tots. La resposta s’ha de justificar amb una predicció, una traça o una observació.

## 🧰 Materials i preparació

- [Fitxa de l’alumnat (PDF, 2 pàgines A4)](_assets/activitats/kits/cr-moviment-discret-continu.pdf).
- [Recull de les 9 activitats (PDF, 18 pàgines A4)](_assets/activitats/kits/cr-fitxes-tres-entorns.pdf).
- [Solucionari separat del professorat (PDF, 9 pàgines A4)](_assets/activitats/kits/cr-solucions-tres-entorns.pdf).
- **Paper:** llapis, goma i fitxa. No cal robot ni dispositiu; les lectures donades són dades de la prova.
- **Simulador:** navegador amb el [simulador de Codey Rocky](/sim/index.html?robot=codey-rocky&activity=cr-moviment-discret-continu&exercise=1). Cada enllaç carrega les peces inicials i l’escenari de l’exercici.
- **Robot:** Codey Rocky, mBlock, cable o connexió disponible, i els materials de la prova. Els JSON són del simulador: al robot es reconstrueixen les mateixes peces a mBlock.

### Preparació amb el robot

Si cal, segueix [Primeres passes amb Codey](../../tutorial/cr-primeres-passes/index.html). Afegeix Codey a mBlock, connecta’l i usa el mode Càrrega per a les piles d’inici.

Prepareu una zona lliure de la taula o del terra i marqueu l’inici. Comenceu a potència baixa. Programeu també C amb deixa de moure i proveu-lo abans del moviment continu; en l’exercici 2, B també atura. Reinicieu la posició i l’orientació abans de cada assaig. Mesureu amb regle o transportador i feu tres proves amb la mateixa configuració.

En les proves de moviment, mantén accessible l’interruptor. El botó C només atura els motors si li has programat aquesta ordre.

Els valors del paper són exemples controlats. Al robot, anoteu les lectures reals i justifiqueu els ajustos. Una potència i una durada no garanteixen una distància o un angle exactes; no es demanen equivalències en caselles.

## 👣 Desenvolupament pas a pas

### 1. Un segon o dos?

Prem A: avança al 20% durant 1 s. Torna al mateix inici, canvia només la durada a 2 s i prova-ho de nou. Prediu quin assaig arribarà més lluny i quan s’atura. Després varia només la potència i registra què canvia.

![Programa inicial de l’exercici 1; les peces corresponen al simulador.](_assets/activitats/codey/cr-moviment-discret-continu-1-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-moviment-discret-continu&exercise=1) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-moviment-discret-continu-1.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** executa els esdeveniments A en aquest ordre;  compara amb la consigna i canvia una sola dada.

**Amb el robot:** reconstrueix aquestes peces a mBlock i fes la mateixa prova; registra les lectures reals abans d’ajustar el programa.

### 2. Què fa el motor durant espera?

Prem A i observa el moviment mentre espera 1 s i quan mostra FI. S’ha aturat? Prem B per aturar-lo. Repara la pila A perquè acabe parada després de l’espera i conserve el text FI.

![Programa inicial de l’exercici 2; les peces corresponen al simulador.](_assets/activitats/codey/cr-moviment-discret-continu-2-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-moviment-discret-continu&exercise=2) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-moviment-discret-continu-2.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** executa els esdeveniments A en aquest ordre;  compara amb la consigna i canvia una sola dada.

**Amb el robot:** reconstrueix aquestes peces a mBlock i fes la mateixa prova; registra les lectures reals abans d’ajustar el programa.

### 3. Un gir que hem de mesurar

Prem A: gira a l’esquerra al 20% durant 0,5 s. Recupera l’orientació inicial i prova 1 s. Quin gir és més gran? Podem donar per fet que és un gir de 90°? Tria i calibra una durada per acostar-te a un quart de volta.

![Programa inicial de l’exercici 3; les peces corresponen al simulador.](_assets/activitats/codey/cr-moviment-discret-continu-3-inici.svg)

[Obri aquest exercici al simulador](/sim/index.html?robot=codey-rocky&activity=cr-moviment-discret-continu&exercise=3) · [Descarrega el projecte inicial](_assets/activitats/codey/projectes/cr-moviment-discret-continu-3.json)

**En paper:** escriu la predicció o dibuixa les peces que falten abans de comprovar.

**Al simulador:** executa els esdeveniments A en aquest ordre;  compara amb la consigna i canvia una sola dada.

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

Connexió amb la situació d’aprenentatge [repartiment](../../situacio/cr-repartiment/index.html). Les fitxes són pràctica de peces i raonament; es poden incorporar a aquesta situació quan tinga sentit.

Les peces corresponen al subconjunt de Codey de mBlock. [Casos oficials de Codey Rocky](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky).
