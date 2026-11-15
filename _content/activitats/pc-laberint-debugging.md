---
title: "El laberint dels errors"
description: "Investigueu una ruta que topa amb un obstacle, conserveu el programa inicial i comproveu una reparació."
topic: "Algorismes"
cycle_label: "Primer cicle"
duration: "40 min"
order: 4
image: "_assets/activitats/portades/laberint-debugging.webp"
image_alt: "Tauler de laberint amb obstacles, una fitxa i targetes de direcció per revisar un recorregut."
---

![Tauler de laberint amb obstacles, una fitxa i targetes de direcció per revisar un recorregut.](_assets/activitats/portades/laberint-debugging.webp)

## 🎯 Què aprendrem?

El missatger ha d'anar de S, a A4, fins a M, a D1. Ja tenim un programa, però alguna ordre el porta a una prestatgeria. L'equip treballa com un taller de depuració: prediu, executa sense improvisar, identifica la primera ordre impossible i prova una versió revisada.

Ací les quatre fletxes indiquen **direccions fixes del paper: amunt, dreta, avall i esquerra**. No giren cap robot ni depenen d'on mire una fitxa. Això permet centrar-nos en el registre i la comparació de proves, amb una mecànica diferent de la missió biblioteca.

## 🧰 Materials i preparació

- [Descarrega el kit de l'activitat (PDF, 4 pàgines)](_assets/activitats/kits/laberint-debugging.pdf).
- Pàgina 1: tauler 4 × 4 amb S a A4, M a D1 i obstacles a B3 i C3. Pàgina 2: vint fletxes retallables. Pàgina 3: programa inicial i registre. Pàgina 4: solució i ampliació.
- Per trio, una còpia de les pàgines 1 i 2 i dues de la pàgina 3. Un botó o peça gran com a missatger. A4 al 100%, blanc i negre. Retalleu les fletxes abans de la sessió.
- Manteniu el tauler orientat amb A–D a dalt. Les columnes es lligen d'esquerra a dreta i les files d'1 a 4 de dalt a baix. Repartiu programació, execució i registre, i roteu els papers.

![Quatre fletxes del paper, amunt, dreta, avall i esquerra; cadascuna desplaça una casella sense representar cap gir.](_assets/activitats/kits/laberint-debugging-exemple.webp)

## 👣 Desenvolupament pas a pas

![Esquema de l'activitat El laberint dels errors: materials, regla i comprovació del resultat.](_assets/activitats/kits/laberint-debugging-inici.webp)

### 1. Acordem les proves · 6 min

Mostreu una fletxa i moveu la fitxa una casella. Les X són caselles prohibides i no es poden saltar. Si la següent ordre entra en una X o ix del tauler, pareu abans de moure. Ningú no afegeix una desviació per ajudar el missatger. Identifiqueu inici i meta assenyalant-los, sense exigir llegir coordenades.

### 2. Prediem el programa rebut · 8 min

Prepareu `amunt, dreta, amunt, dreta, dreta, amunt`. Numereu les sis targetes d'esquerra a dreta. Sense moure la fitxa, cada equip prediu si arribarà, es pararà o eixirà. Anoteu la predicció al registre. Una persona assenyala quina targeta es revisa en cada moment.

### 3. Provem sense tocar les ordres · 8 min

Reinicieu a A4. La primera ordre porta a A3; la segona intenta entrar a B3 i obliga a parar. Anoteu «ordre 2, B3» i conserveu intacta la seqüència inicial. Reviseu primer si el moviment ha seguit la fletxa. Si l'execució era correcta, el que cal canviar és el programa.

### 4. Fem una reparació comprovable · 10 min

Proposeu intercanviar les ordres 2 i 3. El programa queda `amunt, amunt, dreta, dreta, dreta, amunt`. Predieu de nou i executeu des d'A4: A3, A2, B2, C2, D2 i D1. Compareu les dues proves. No cal canviar la meta ni llevar obstacles per fer funcionar la reparació.

### 5. Canviem una condició · 8 min

Roteu papers. Poseu una peça sobre D2 com a obstacle addicional i manteniu inici i meta. El programa anterior ara falla. Busqueu una alternativa: `amunt, amunt, amunt, dreta, dreta, dreta` passa per la fila 1. Registreu que la condició ha canviat: un programa que funcionava pot deixar de servir en un altre tauler.

> **💡 Consell docent:** No esborreu el programa inicial. Veure les dues versions ajuda a explicar què ha provocat la millora. Reinicieu sempre la fitxa al mateix punt abans de comparar dues proves.

![El programa inicial topa a B3; intercanviant la segona i la tercera ordre i reiniciant a A4, la ruta arriba a D1.](_assets/activitats/kits/laberint-debugging-reparacio.webp)

## ✅ Evidències d'aprenentatge

- Manté la correspondència entre número d'ordre i desplaçament.
- Registra una ordre i una casella concretes en lloc de dir només «no funciona».
- Conserva la versió inicial i verifica el canvi executant la ruta sencera.
- Explica que la validesa d'una ruta depèn també dels obstacles acordats.

Recolliu les dues versions i una frase sobre què s'ha mantingut igual. Valoreu una revisió justificada, encara que no siga la ruta més curta.

### Preguntes per fer pensar

- Hem executat malament una fletxa o la fletxa ens envia a un lloc prohibit?
- Per què tornar a A4 ajuda a comparar les proves?
- Si canviem un obstacle, què cal tornar a comprovar?

## ♿ Variants i inclusió

**Educació Infantil:** tapeu part del tauler i proposeu dues fletxes sobre una fila sense obstacles abans d'introduir una X; feu predicció oral i assenyalant. **Accés:** fitxes grans, targetes preparades i execució per una altra persona si cal. No és necessari caminar, llegir o retallar. **Ampliació:** inventeu un programa amb un únic error i doneu-lo a un altre equip juntament amb la ruta que volíeu obtenir.
