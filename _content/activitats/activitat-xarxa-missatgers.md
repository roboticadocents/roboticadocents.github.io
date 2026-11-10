---
active: true
title: "La xarxa de missatgers"
description: "Envieu un missatge en paquets per una xarxa de taules i repareu pèrdues, desordre i camins tancats."
topic: "Xarxes i processos"
cycle_label: "Tercer cicle"
duration: "60 min"
order: 14
image: "_assets/activitats/portades/xarxa-missatgers.webp"
image_alt: "Estacions connectades per camins alternatius amb paquets de paper que formen un missatge."
---

![Estacions connectades per camins alternatius amb paquets de paper que formen un missatge.](_assets/activitats/portades/xarxa-missatgers.webp)

## 🎯 Què aprendrem?

Com podem reconstruir un missatge si les parts arriben per camins diferents o en ordre canviat? Quatre nodes d'aula enviaran paquets numerats i comprovaran què ha arribat. Treballem descomposició, rutes, identificadors i un protocol de confirmació i reenviament. És una simulació amb regles pròpies, pensada per raonar; no reprodueix tot el funcionament d'Internet.

## 🧰 Materials i preparació

- [Descarrega el kit de la xarxa (PDF, 4 pàgines)](_assets/activitats/kits/xarxa-missatgers.pdf): mapa, quatre paquets del missatge M1, incidències i confirmació, registre i solució docent.
- Per xarxa, un kit i quatre taules o safates marcades A, B, C i D. Una còpia addicional de la pàgina 2 es queda a A per als reenviaments. Imprimiu en A4 al 100%, en blanc i negre o color.
- Retalleu els paquets i les targetes d'incidències; manteniu la confirmació separada. Marqueu les connexions amb tires de paper sobre la taula. En una aula gran, repliqueu xarxes de quatre grups; no afegiu nodes a la primera ronda.

![Mapa del kit amb quatre nodes: A connecta amb B i C; B i C també connecten entre si i amb D. Hi ha dues rutes directes de dos salts entre A i D.](_assets/activitats/kits/xarxa-missatgers-1.webp)

## 👣 Desenvolupament pas a pas

![El missatge es divideix en quatre paquets, travessa una xarxa amb rutes alternatives i es reconstrueix abans de confirmar la recepció.](_assets/activitats/kits/xarxa-missatgers-inici.webp)

### 1. Pactem el protocol · 10 min

A és l'origen i D és el destí; B i C reenvien. Dins de cada node, repartiu els papers de responsable de paquets, registre i comprovació; es poden combinar i rotar. Cada paquet mostra identificador M1, origen, destí, número i total. A conserva la còpia original. D coneix que espera quatre paquets de M1, però no el text.

Un torn té tres moments: cada node decideix on enviar els paquets que ja té; es resolen els conflictes; es mouen els paquets i es registren les arribades. Un paquet avança com a màxim un enllaç per torn. Cada enllaç admet un sol paquet per torn, sumant les dues direccions. Si dos nodes volen usar-lo alhora, es posa d'acord qui espera; si no hi ha acord, tots dos esperen. Un paquet acabat d'arribar espera al torn següent per tornar a moure's.

### 2. Primera entrega sense incidències · 12 min

A reparteix els quatre paquets entre les rutes A-B-D i A-C-D. Registreu torn, paquet, origen del salt i destí del salt. D ordena les parts pel número, reconstrueix el text i marca els quatre rebuts a la targeta de confirmació. La confirmació viatja de D a A pels enllaços i ocupa torns com qualsevol altre paquet. L'enviament acaba quan A rep la confirmació completa.

![Quatre paquets retallables de M1, numerats de l'1 al 4, amb origen A, destí D i les paraules EL, ROBOT, PORTA i LLIBRES.](_assets/activitats/kits/xarxa-missatgers-2.webp)

_La numeració permet ordenar les parts. L'identificador evita barrejar fragments de missatges diferents._

### 3. Un camí es tanca · 10 min

Reinicieu el missatge i tanqueu B-D amb la targeta d'incidència. Abans de moure res, cada node proposa què farà amb els paquets que té. Un paquet a B pot passar per C i arribar a D; un paquet que encara és a A pot anar per C. Compteu els salts i els torns reals. Una ruta amb menys salts pot haver d'esperar si l'enllaç està ocupat.

### 4. Falta una part · 13 min

Reinicieu i apliqueu només la incidència de paquet retingut: el docent aparta el paquet 2 després que isca d'A. Acordeu un termini de sis torns per a aquesta ronda, que és una regla del joc i no una garantia d'entrega. En acabar el termini, D comprova els números i envia la confirmació amb la petició «M1: falta 2; reenvia 2». Quan arriba a A, A envia la còpia del paquet 2. El docent no reté el reenviament. D confirma quan completa el missatge.

### 5. Arriba desordenat: què hem après? · 15 min

En una ronda breu, feu arribar el paquet 4 abans del 3. D els guarda i ordena sense demanar el reenviament del que ja té. Compareu les tres incidències: un camí tancat exigeix buscar ruta; una part absent exigeix demanar-la; l'ordre d'arribada diferent es resol amb els números. Cada equip proposa una millora del protocol i la prova amb una incidència, no amb totes alhora.

> **💡 Consell per a l'aula:** No feu carreres ni llanceu sobres. Els missatges es passen entre safates o amb un únic missatger adult. El repte és coordinar-se i justificar el protocol, no moure's ràpidament.

## ✅ Evidències d'aprenentatge

- Tria una ruta que només utilitza les connexions disponibles i respecta els torns.
- Reconstrueix el missatge per número i identifica amb precisió una part absent.
- Demana el reenviament amb identificador i número, sense endevinar el contingut.
- Distingeix una pèrdua, una espera i una arribada desordenada amb dades del registre.

La pàgina 4 inclou nou files: useu una altra còpia si necessiteu més salts. Recolliu un registre i una explicació breu de quina incidència han resolt i amb quina regla.

### Preguntes per fer pensar

- Podem saber el contingut del paquet que falta només amb el seu número?
- Què passaria si A esborrara l'original abans de rebre la confirmació?
- Per què necessitaríem M1 i M2 si enviàrem dos missatges alhora?

## ♿ Variants i inclusió

Feu tota la xarxa en una taula amb safates; ningú ha de caminar. Oferiu paquets grans, lectura compartida i un marcador de torn visible. Per començar, useu dos paquets i una sola ruta. Per aprofundir, introduïu un segon missatge M2 amb quatre fragments propis i compareu què passa amb i sense identificadors. Manteniu el límit de capacitat dels enllaços.
