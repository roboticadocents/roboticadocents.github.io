---
title: "La xarxa que ordena"
description: "Executeu una xarxa concreta de quatre canals i descobriu quines comparacions poden fer-se alhora."
topic: "Algorismes"
cycle_label: "Tercer cicle"
duration: "50 min"
order: 3
image: "_assets/activitats/portades/xarxa-ordenacio.webp"
image_alt: "Quatre canals de comparació transformen piles de peces desordenades en una sèrie creixent."
---

![Quatre canals de comparació transformen piles de peces desordenades en una sèrie creixent.](_assets/activitats/portades/xarxa-ordenacio.webp)

## 🎯 Què aprendrem?

Quatre nombres entren desordenats en una xarxa que sempre fa les mateixes comparacions. L'equip ha de conduir les targetes pels canals, registrar cada etapa i comprovar l'eixida. El repte no és ordenar «a ull», sinó executar un procediment fix i investigar què passa si en llevem un comparador.

La xarxa del kit té **quatre canals, cinc comparadors i tres etapes**. Llegim el temps d'esquerra a dreta. A cada comparador, el menor queda al canal de dalt i el major al de baix; en un empat, mantenim els valors on són. No es tria la direcció segons l'esquerra del participant.

## 🧰 Materials i preparació

- [Descarrega el kit de l'activitat (PDF, 4 pàgines)](_assets/activitats/kits/xarxa-ordenacio.pdf).
- Pàgina 1: xarxa completa amb la regla i les tres etapes. Pàgina 2: dotze targetes numèriques, inclosos duplicats. Pàgina 3: registre i prova amb un comparador absent. Pàgina 4: solucions.
- Per grup de quatre, una còpia de les pàgines 1 i 2 i dues de la pàgina 3. A4 al 100%, blanc i negre. Retalleu les dotze targetes i trieu-ne quatre per prova; reserveu les altres.
- Repartiu els papers de dos comparadors, coordinació d'etapa i registre. Les targetes poden quedar al marge de cada etapa si són més grans que el diagrama. No cal caminar pel pati ni ampliar el dibuix al terra.

![Xarxa de quatre canals: primer es comparen 1–2 i 3–4, després 1–3 i 2–4, i finalment 2–3; l’exemple acaba ordenat.](_assets/activitats/kits/xarxa-ordenacio-exemple.webp)

## 👣 Desenvolupament pas a pas

![Esquema de l'activitat La xarxa que ordena: materials, regla i comprovació del resultat.](_assets/activitats/kits/xarxa-ordenacio-inici.webp)

### 1. Entenem un comparador · 8 min

Poseu 3 al canal de dalt i 1 al de baix. Apliqueu la regla: l'1 acaba dalt i el 3 baix. Repetiu amb dos 2: continuen sent dos valors, encara que no calga intercanviar-los. Un comparador conserva les dues targetes; només decideix a quin canal van.

### 2. Executem la xarxa completa · 12 min

Introduïu `3, 1, 4, 2`, de dalt a baix. A l'etapa 1 compareu 1–2 i 3–4; a la 2, compareu 1–3 i 2–4; a la 3, només 2–3. Després de cada etapa, atureu-vos i anoteu els quatre valors. Els canals que no participen conserven el valor. No comenceu una etapa abans que acabe tota l'anterior.

El registre esperat és `1, 3, 2, 4` després de la primera; igual després de la segona; i `1, 2, 3, 4` després de la tercera. Mostreu la solució només després de comparar registres.

### 3. Provem altres entrades · 10 min

Canvieu els papers i proveu `4, 3, 2, 1`, una entrada ja ordenada i `2, 2, 1, 1`. Abans de començar, predieu el resultat. Comproveu que cada eixida és creixent i que conté els mateixos quatre valors. Els empats no són errors ni autoritzen a eliminar una targeta.

### 4. Llevem una comparació · 12 min

Tapeu només el comparador final, entre canals 2 i 3. Reinicieu l'entrada `3, 1, 4, 2`. La xarxa incompleta acaba `1, 3, 2, 4`: els extrems estan ben situats, però el centre no. Demaneu que localitzen la parella que falta comparar i ho comproven restaurant el comparador. No n'hi ha prou a provar una entrada que per casualitat ja quede ordenada.

### 5. Expliquem el treball simultani · 8 min

Compteu cinc comparacions repartides en tres etapes. En les dues primeres, cada parella de comparadors utilitza canals diferents i pot actuar alhora. L'etapa següent depèn dels resultats de l'anterior. Distingiu nombre de comparacions i nombre d'etapes; no afirmeu que tots els passos de la xarxa són simultanis.

> **💡 Precisió del model:** Aquesta xarxa està definida per a quatre entrades. Per ordenar-ne sis caldria un altre diagrama; afegir dues línies no basta. El generador comprova les 24 permutacions de quatre valors diferents i 81 casos amb empats.

![Sense l’últim comparador l’eixida és 1, 3, 2, 4; comparar els canals centrals repara el resultat.](_assets/activitats/kits/xarxa-ordenacio-reparacio.webp)

## ✅ Evidències d'aprenentatge

- Aplica la convenció menor/dalt i major/baix sense ordenar al marge del procediment.
- Registra cada etapa i conserva tots els valors, també en els empats.
- Mostra un contraexemple de la xarxa incompleta i explica la reparació.
- Distingeix comparacions totals i etapes que poden contenir treball simultani.

Recolliu un registre complet i un de la xarxa incompleta. Una explicació sobre quins canals comparteixen els comparadors és més informativa que arribar ràpidament a l'eixida.

### Preguntes per fer pensar

- Per què una entrada ordenada no és una prova suficient d'un diagrama qualsevol?
- Quins comparadors podrien funcionar alhora sense disputar-se cap targeta?
- Què conservaríem si canviàrem la regla per ordenar de major a menor?

## ♿ Variants i inclusió

**Suport i adaptació per a Segon cicle:** feu primer un comparador i després l'etapa de dues parelles, amb nombres petits i quatre targetes visibles. Una persona pot assenyalar què cal intercanviar sense manipular. **Ampliació:** exploreu totes les permutacions amb quatre valors o busqueu un altre exemple que falle sense l'últim comparador. Compareu l'ordenació descendent invertint la mateixa regla en tots els comparadors.
