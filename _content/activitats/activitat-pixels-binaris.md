---
title: "Píxels: un dibuix en 25 bits"
description: "Reconstruïu imatges amb zeros i uns, creeu un missatge propi i reviseu les discrepàncies casella per casella."
topic: "Dades i representació"
cycle_label: "Primer cicle"
duration: "45 min"
order: 2
image: "_assets/activitats/portades/pixels-binaris.webp"
image_alt: "Graella amb una figura feta de caselles fosques i clares, peces soltes i targetes de codi."
---

![Graella amb una figura feta de caselles fosques i clares, peces soltes i targetes de codi.](_assets/activitats/portades/pixels-binaris.webp)

## 🎯 Què aprendrem?

El taller d'icones ha rebut dos dibuixos convertits en nombres. Cada parella ha de reconstruir-los sense veure l'original i després enviar-ne un de propi. Treballem la representació binària: cada casella només té dos estats i cada estat es representa amb un valor.

La convenció del joc és **0 = blanc i 1 = negre**. Llegim cada fila d'esquerra a dreta i les cinc files de dalt a baix. El repte és conservar tota la informació i detectar diferències, sense necessitar cap pantalla. A diferència del correu de píxels amb recomptes, ací escrivim un valor per casella: no agrupem trams.

## 🧰 Materials i preparació

- [Descarrega el kit de l'activitat (PDF, 4 pàgines)](_assets/activitats/kits/pixels-binaris.pdf).
- Pàgina 1: dos codis amb graelles buides. Pàgina 2: graella de l'emissor i espais per escriure el codi. Pàgina 3: taller de reparació. Pàgina 4: solucions docents.
- Per parella, una còpia de les pàgines 1 i 3; una còpia de la pàgina 2 per persona. Llapis, goma i una carpeta per ocultar el dibuix original. A4 al 100%, en blanc i negre.
- No cal retallar. Per a qui no vulga pintar, oferiu fitxes fosques o quadradets de paper negre d'uns 3 cm. Prepareu un espai on l'emissor puga tapar la part superior del seu full i mostrar només les files de codi.

![Cinc valors es transformen en cinc caselles, sempre d’esquerra a dreta; el codi complet es llig fila a fila.](_assets/activitats/kits/pixels-binaris-exemple.webp)

## 👣 Desenvolupament pas a pas

![Esquema de l'activitat Píxels: un dibuix en 25 bits: materials, regla i comprovació del resultat.](_assets/activitats/kits/pixels-binaris-inici.webp)

### 1. Provem una sola fila · 7 min

Mostreu `0 0 1 0 1`. Cada parella deixa dues caselles blanques, pinta la tercera, deixa la quarta blanca i pinta la cinquena. Compareu abans de continuar. Assenyaleu l'inici de fila; un mateix codi no produeix necessàriament el mateix resultat si el llegim al revés.

### 2. Reconstruïm dos missatges · 12 min

Repartiu la pàgina 1 sense mostrar les solucions. Una persona llig i assenyala un valor cada vegada; l'altra pinta la casella corresponent. Canvieu els papers per al segon dibuix. No completeu una forma perquè semble una lletra o una fletxa: seguiu tots els valors, encara que la primera intuïció siga una altra.

### 3. Ara som emissors · 10 min

Cada persona dibuixa una icona pròpia de 5 × 5 a la pàgina 2 i escriu les cinc files de codi. Comprova que cada fila té cinc valors i que només hi ha zeros i uns. Oculta la graella i passa només el codi a la parella, que el reconstrueix en una de les graelles de prova o en paper quadriculat. No dieu el nom de la icona abans de provar.

### 4. Comparem i reparem · 10 min

Destapeu l'original i compareu casella per casella. Anoteu la primera fila diferent i comproveu si el problema és al codi o a la lectura. La pàgina 3 proposa una fila incompleta, `1 0 0 0`: sabem que falta un valor, però no on. Demaneu la fila sencera, sense endevinar la posició absent. També proposeu un `1 0 0 0 0` pintat a l'inrevés i repetiu-lo amb la convenció correcta.

### 5. Expliquem què representa el codi · 6 min

Compteu cinc files de cinc valors: **25 valors binaris, és a dir, 25 bits per al dibuix del nostre model**. No estem calculant la mida real d'un fitxer, que pot incloure altres dades. Cada parella explica una reparació i torna a comprovar la fila afectada.

> **💡 Consell docent:** Triar una icona asimètrica fa visibles els errors de direcció. Un dibuix simètric pot quedar igual quan s'inverteix una fila, encara que no s'haja seguit la convenció.

![Una fila de quatre valors és incompleta; es demana reenviar-la sencera en lloc d’inventar la casella absent.](_assets/activitats/kits/pixels-binaris-reparacio.webp)

## ✅ Evidències d'aprenentatge

- Manté la correspondència d'un valor amb una casella i respecta l'ordre de lectura.
- Produeix cinc files completes que permeten reconstruir el seu dibuix.
- Localitza una discrepància i justifica què ha de corregir o tornar a demanar.

Recolliu original, codi i reconstrucció. Marqueu un exemple de revisió. Valoreu la correspondència i l'explicació, no la qualitat del dibuix ni la rapidesa en pintar.

### Preguntes per fer pensar

- Un codi amb cinc valors sempre és el codi correcte? Com ho comprovem?
- Quina informació falta quan només rebem quatre valors?
- Per què una imatge simètrica pot amagar un error de lectura?

## ♿ Variants i inclusió

**Suport:** useu una sola fila i una finestra de paper que tape les altres. Permeteu fitxes, dictat i lectura compartida. El contrast és blanc/negre i no depèn de distingir colors. **Ampliació per a Segon cicle:** compareu una graella de 5 × 5 amb una de 8 × 8; compteu 25 i 64 valors sense afirmar que el fitxer només ocuparà eixa quantitat. El treball amb trams repetits queda per a l'activitat específica de correu de píxels.
