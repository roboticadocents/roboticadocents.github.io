---
active: true
title: "El correu secret de píxels"
description: "Envieu dibuixos amb recomptes de caselles consecutives i descobriu què permet detectar un error."
topic: "Patrons"
cycle_label: "Segon cicle"
duration: "55 min"
order: 13
image: "_assets/activitats/portades/correu-pixels.webp"
image_alt: "Dues graelles de píxels, un sobre i una tira de codi per enviar i reconstruir un dibuix."
---

![Dues graelles de píxels, un sobre i una tira de codi per enviar i reconstruir un dibuix.](_assets/activitats/portades/correu-pixels.webp)

## 🎯 Què aprendrem?

Un equip dibuixa una icona i un altre l'ha de reconstruir rebent només nombres. En lloc d'enviar un 0 o un 1 per casella, comptarem trams consecutius de blanc i negre. Treballem una convenció compartida de codificació, patrons i comprovació d'errors. Aquesta proposta amplia el treball amb píxels: el repte és descriure trams i distingir un codi possible d'un codi correcte.

## 🧰 Materials i preparació

- [Descarrega el kit del correu de píxels (PDF, 4 pàgines)](_assets/activitats/kits/correu-pixels.pdf): exemple resolt, graella de l'emissor, missatge amb graella del receptor i taller de reparació amb respostes docents.
- Per parella, una pàgina 2 i una pàgina 3; després una altra còpia per canviar els papers. Llapis i goma o cinc fitxes negres per fila.
- A4 al 100%, blanc i negre. El docent retalla la pàgina 3 per la línia: l'emissor rep la meitat superior i el receptor la inferior. Reserveu la pàgina 4 fins a la conversa final.

![Exemple resolt d'una fletxa de cinc per cinc: cada fila apareix al costat del seu codi de recomptes; la fila tota negra es codifica 0, 5.](_assets/activitats/kits/correu-pixels-1.webp)

## 👣 Desenvolupament pas a pas

![Una fletxa dibuixada es transforma en cinc files de recomptes i es reconstrueix en una altra graella seguint el mateix codi.](_assets/activitats/kits/correu-pixels-inici.webp)

### 1. Acordem com es llig · 10 min

Llegiu cada fila d'esquerra a dreta i les files de dalt a baix. Cada fila té cinc caselles. Escrivim primer el nombre de blanques inicials, després negres, després blanques i així successivament fins al final. Si la fila comença negra, escrivim un 0 inicial. No afegim zeros al final.

Una fila blanc, blanc, negre, blanc, blanc és `2, 1, 2`. Una fila de cinc negres és `0, 5`; una fila de cinc blanques és `5`. Els recomptes de cada fila han de sumar cinc. Reconstruïu col·lectivament la fletxa de la pàgina 1 abans de crear cap missatge.

### 2. Dibuixem i codifiquem · 12 min

Una persona crea una icona pròpia a la graella de la pàgina 2. La manté amagada i escriu els recomptes a les cinc línies de la meitat superior de la pàgina 3. Comprova cada suma i separa bé les files. Envia només aquesta tira de codi; el nom de la icona no és una pista per al receptor.

![Full d'intercanvi del kit amb cinc línies numerades per al codi i, separada per una línia de tall, una graella buida per al receptor.](_assets/activitats/kits/correu-pixels-2.webp)

### 3. Reconstruïm sense endevinar · 10 min

El receptor pinta la seua graella seguint els recomptes, encara que el dibuix no semble el que esperava. Si una fila no suma cinc o presenta una quantitat impossible, la marca i demana revisar-la. Acabada la descodificació, compareu amb l'original casella per casella i corregiu el codi o la lectura segons l'origen de la discrepància.

### 4. Un error que es veu i un que s'amaga · 10 min

Proposeu els casos de la pàgina 4. `2, 2` suma quatre: sabem que falta informació, però no on. `1, 3, 1` suma cinc i és un codi vàlid, però podria substituir per error `2, 1, 2`. Per tant, sumar cinc és una comprovació necessària que no detecta totes les equivocacions. Davant d'un dubte, el receptor demana que es reenvie la fila; no inventa caselles.

### 5. Canviem de papers i comparem · 13 min

Feu un segon intercanvi amb una icona nova. Trieu una fila i escriviu-la tant amb cinc valors binaris com amb recomptes. Compteu quants nombres heu escrit en cada cas. Una fila negra passa de cinc valors a dos; una fila alternada pot necessitar-ne cinc o sis, si comença negra. No tots els patrons s'escurcen.

> **💡 Precisió del model:** Comptem nombres sobre paper. Això no equival a calcular bits, bytes ni la mida real d'un fitxer. La simulació ajuda a entendre per què agrupar repeticions pot estalviar descripció.

## ✅ Evidències d'aprenentatge

- Codifica i reconstrueix cinc files respectant la convenció i el zero inicial quan cal.
- Detecta una suma incorrecta i demana una revisió concreta.
- Explica amb un exemple per què una suma correcta no garanteix que la imatge siga la mateixa.

Conserveu original, tira de codi i reconstrucció. Demaneu que encerclen una fila revisada i anoten què han reparat.

### Preguntes per fer pensar

- Per què `5` i `0, 5` representen files oposades?
- Podríem entendre el missatge si no acordàrem l'ordre dels colors?
- Quin tipus de fila necessita més recomptes? I quin menys?

## ♿ Variants i inclusió

Useu fitxes fosques i caselles buides en lloc de pintar. Oferiu una finestra de paper que deixe visible una sola fila i una graella ampliada. Un company pot escriure els recomptes dictats. Per començar, feu només tres files de cinc caselles; per aprofundir, passeu a huit caselles i compareu patrons sense canviar la convenció.
