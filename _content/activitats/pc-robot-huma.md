---
title: "El robot humà: missió biblioteca"
description: "Prepareu un programa per entregar un llibre, distingiu girar d’avançar i repareu una ordre amb una nova prova."
topic: "Algorismes"
cycle_label: "Primer cicle"
duration: "45 min"
order: 1
image: "_assets/activitats/portades/robot-huma.webp"
image_alt: "Fitxa de robot, tauler amb obstacles, llibre i targetes de fletxes per preparar una entrega."
---

![Fitxa de robot, tauler amb obstacles, llibre i targetes de fletxes per preparar una entrega.](_assets/activitats/portades/robot-huma.webp)

## 🎯 Què aprendrem?

La biblioteca espera un llibre a la casella C1. El robot comença a A3 i hi ha una prestatgeria que bloqueja B2. L'equip ha de preparar un programa que permeta entregar-lo sense travessar la prestatgeria ni eixir del tauler. Una persona interpreta el robot movent una fitxa i executa les ordres acordades, sense afegir passos per ajudar a arribar.

Treballarem seqüències, orientació i depuració: **girar canvia cap a on mira el robot, però no el desplaça de casella**. Abans de provar, predirem el resultat; si no coincideix, buscarem la primera discrepància i comprovarem una reparació. La proposta principal és per a Primer cicle; al final hi ha una adaptació per a Educació Infantil.

## 🧰 Materials i preparació

- [Descarrega el kit del robot humà (PDF, 5 pàgines)](_assets/activitats/kits/robot-huma.pdf): tauler, dotze ordres retallables, fitxes i tres missions, full de programa i guia docent amb solucions.
- Per grup de tres: una còpia de les pàgines 1, 2 i 3, i una còpia de la pàgina 4 per ronda que vulgueu registrar. Reserveu la pàgina 5 per al docent. Imprimiu en A4 al 100%; el color no és necessari.
- Llapis i un marcador petit per assenyalar l'ordre que s'està executant. Retalleu les dotze ordres de la pàgina 2 i els dos robots i les dues metes de la pàgina 3 abans de començar. Les targetes de missió poden quedar en el full.

### Tauler, inici i papers de l'equip

Les columnes són A, B i C d'esquerra a dreta; les files són 1, 2 i 3 de dalt a baix. La primera missió comença a **A3, mirant cap a la fila 1**, i acaba a **C1**, on hi ha el llibre. B2 està bloquejada en totes les missions. Col·loqueu la fitxa damunt del robot dibuixat: la punta negra marca el davant. Poseu la meta mòbil sobre el llibre de C1; en altres missions, traslladeu-la i ignoreu el llibre imprès.

Repartiu tres papers i canvieu-los en cada ronda: **programació** ordena les instruccions, **execució** mou la fitxa i **comprovació** assenyala l'ordre actual i contrasta el moviment amb el programa. Tothom participa en la predicció i la revisió. En parelles, combineu execució i comprovació.

### Tres ordres i una regla de parada

- **A / Avança 1:** una casella en la direcció cap a on mira la punta del robot.
- **D / Gira dreta:** un quart de volta a la dreta del robot, sense canviar de casella.
- **E / Gira esquerra:** un quart de volta a l'esquerra del robot, sense canviar de casella.

Cada targeta s'executa una vegada, d'esquerra a dreta. No hi ha diagonals ni salts. Si la següent ordre obliga a eixir de la graella o entrar a B2, **pareu abans de moure**, marqueu eixa ordre i reviseu el programa. Acabar damunt del llibre és suficient; aquesta missió no exigeix una orientació final concreta.

![Comparació de les tres ordres: avançar canvia de casella i conserva l'orientació; girar a la dreta o a l'esquerra conserva la casella i canvia l'orientació de la fitxa.](_assets/activitats/kits/robot-huma-ordres.webp)

_Les fletxes rectes són ordres d'avançar respecte del robot, no una ordre de pujar sempre en el paper. Les fletxes corbes indiquen girs sobre la mateixa casella._

## 👣 Desenvolupament pas a pas

![Tres moments de la missió biblioteca: planificar una ruta en una graella de tres per tres, ordenar cinc instruccions i comprovar el recorregut fins al llibre.](_assets/activitats/kits/robot-huma-inici.webp)

### 1. Entenem el repte i provem les ordres · 8 min

Presenteu el llibre que cal entregar. Abans de donar targetes, digueu «ves al llibre» i pregunteu què falta concretar per fer el recorregut pas a pas. Mostreu les tres ordres i modeleu-les en una casella lliure.

Poseu el robot mirant cap a la fila 1: executeu D i després A. El gir el deixa a la mateixa casella i l'avanç el porta cap a la columna següent. Repetiu amb el robot mirant cap a la fila 3: ara la seua dreta apunta a l'altre costat del paper. Deixeu que el grup gire el tauler o es pose darrere de la fitxa per entendre el punt de vista.

### 2. Planifiquem sense moure la fitxa · 10 min

Prepareu la missió 1: A3 mirant cap a la fila 1, meta C1 i B2 bloquejada. Cada equip compon un programa amb les targetes disponibles; les ordres que sobren queden fora. Es poden posar en una fila damunt de la taula o escriure com A, D i E als espais del full de registre. No cal omplir els huit espais.

Abans de tocar la fitxa, la persona que comprova ressegueix mentalment la seqüència i explica on creu que acabarà. Anoteu o assenyaleu la casella i cap a on mirarà. En aquesta primera ronda, l'objectiu és obtenir una ruta executable, no trobar la més curta.

### 3. Executem i comparem amb la predicció · 10 min

La persona executora posa la fitxa en la posició inicial. La persona que comprova assenyala una targeta, es fa només eixa acció i després es passa a la següent. No es mouen les targetes durant la prova. Si apareix una ordre impossible, s'aplica la regla de parada.

En acabar o parar, compareu amb la predicció. Si no coincideix, distingiu dues possibilitats: el moviment no ha seguit la targeta, o el programa no descrivia la ruta prevista. En el primer cas, torneu a executar correctament; en el segon, reviseu les ordres. Per comprovar qualsevol canvi, torneu sempre a la mateixa casella i orientació inicials.

### 4. Taller de reparació: un gir canviat · 10 min

Proposeu a tots els grups el programa **A, A, E, A, A** per a la missió 1. Primer feu una predicció i després proveu-lo. Després de les dues primeres ordres, el robot és a A1; la tercera el deixa mirant fora del tauler. La quarta ordre no es pot executar. Pregunteu: «L'ordre on ens parem és necessàriament la que hem de canviar?».

La reparació és substituir la **tercera ordre, E, per D**. Reinicieu a A3 mirant cap a la fila 1 i executeu A, A, D, A, A. El robot arriba a C1. Registreu què s'ha canviat i per què. No es tracta de memoritzar la solució: cal relacionar el gir amb la direcció del moviment següent.

![Programa amb un error i la seua reparació: A, A, E, A, A intenta eixir del tauler; canviant només la tercera ordre per D i reiniciant, arriba a C1.](_assets/activitats/kits/robot-huma-reparacio.webp)

_L'ordre impossible és la quarta, però l'error del programa està en el gir anterior. La reparació es valida repetint la prova amb el mateix inici._

### 5. Canviem els papers i transferim · 7 min

Roteu els papers i feu la missió 2: A3 mirant cap a la fila 1, amb meta a C3. Cada equip prepara un programa nou i el prova. Una solució és D, A, A. Demaneu que expliquen per què reutilitzar sense canvis el programa de la primera missió no resol aquesta entrega.

Tanqueu amb una frase de cada equip: «Hem canviat ___ perquè ___, i ho hem comprovat ___». La missió 3 queda com a ampliació o segona sessió: comença a C1 mirant cap a la fila 3 i acaba a A1. El kit inclou una ruta possible de huit ordres.

> **💡 Consell per a l'aula:** El nom «robot humà» descriu un paper dins del joc. La persona no ha d'endevinar la intenció del programa ni fer-lo funcionar d'amagat. El docent pot ajudar a llegir les targetes mantenint les mateixes regles.

## ✅ Evidències d'aprenentatge

- Identifica la casella inicial i l'orientació abans de començar.
- Distingeix un gir d'un desplaçament i executa una acció per targeta.
- Fa una predicció i la compara amb el resultat observat.
- Relaciona una discrepància amb una instrucció, proposa una reparació i la torna a provar.

Recolliu el programa inicial i el revisat al full de la pàgina 4. En cada criteri, anoteu **amb ajuda**, **de manera autònoma** o **encara no observat**, sense confondre dificultats de lectura o de motricitat amb la comprensió de les instruccions. Una explicació oral o assenyalant és una evidència vàlida. A la missió 2, observeu especialment si transfereixen la diferència entre girar i avançar.

### Preguntes per fer pensar

- Si el robot mira cap a nosaltres, on és la seua dreta?
- Després de girar, ha canviat la seua casella o només cap a on mira?
- Per què ens parem a la quarta ordre si hem de corregir la tercera?
- Què passaria si provàrem la reparació des d'una orientació diferent?

## ♿ Variants i inclusió

**Educació Infantil:** comenceu amb només la columna A, sense girs. Situeu el robot a A3 mirant cap a la fila 1 i la meta a A1. Prepareu dues targetes A i anticipeu amb gestos on arribarà. Després de dues proves, introduïu un sol gir en una demostració guiada. Dividiu el treball en dos moments de 15 minuts i no exigiu registrar per escrit ni reconèixer les coordenades: el docent les assenyala.

**Accés i participació:** oferiu fitxes ja retallades, una graella ampliada, lectura compartida i resposta assenyalant o dictant. Les ordres combinen símbol i text i no depenen del color. Qui no puga moure la fitxa pot indicar cada acció perquè una altra persona la faça. Tot el joc es pot fer assegut en una taula.

**Amb el cos:** si voleu representar el robot caminant, reproduïu el mateix tauler amb cinta de pintor en un espai lliure, amb caselles prou grans per girar sense topar. La persona camina mirant el recorregut, sense ulls tapats, i el grup s'atura entre ordres. És una variant opcional; no afegeix cap requisit d'aprenentatge.

**Aprofundiment:** feu la missió 3 o compareu dues rutes vàlides per a una mateixa entrega. Compteu avanços i girs per separat. Si decidiu buscar un programa més curt, acordeu abans que cada targeta compta com una ordre; arribar és el criteri inicial i optimitzar és un repte posterior.
