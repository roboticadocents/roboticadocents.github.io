---
title: Codey Rocky: del programa de blocs a Python en mBlock
description: Connectar Codey Rocky, carregar un programa de blocs i inspeccionar o editar la traducció Python del mode Upload.
robot: codey-rocky
level: Avançat
duration: 50 min
order: 6
image: _assets/tutorials/cr-python-upload.webp
---

## 🎯 Què aprendrem?

Feu que Codey mostre una cara en prémer A i una altra en prémer B. Després carregueu el programa al robot i observeu com mBlock el representa en Python. No cal saber Python per fer la primera prova.

- Connectar Codey a mBlock 5 i seleccionar el dispositiu correcte.
- Distingir l’execució Live de la càrrega Upload.
- Crear dos esdeveniments de botó amb blocs i executar-los sense connexió permanent.
- En mode Upload, obrir la vista Python generada pels blocs i buscar les accions dels botons.
- Canviar una acció i comprovar el resultat amb el robot.

![](../../_assets/tutorials/cr-python-upload.webp)

## 🧰 Materials i preparació

- Codey Rocky de la dotació, carregat i amb el controlador ben acoblat al xassís.
- mBlock 5 per a ordinador i cable micro-USB de la dotació.
- Superfície plana, amb espai lliure al voltant de Rocky; es pot elevar el xassís perquè les erugues no el desplacen durant la primera comprovació.
- Targetes A/B amb les dues expressions que mostrarà la matriu 16 × 8.

Obriu mBlock, afegiu el dispositiu «Codey» de la biblioteca i connecteu-lo per USB. En mode Upload, comproveu primer que el programa de blocs funciona abans d’obrir la vista Python. Segons l’edició i versió de mBlock, l’etiqueta o la posició de l’opció Python pot canviar; si no apareix, actualitzeu el programari disponible segons les instruccions oficials o feu l’exercici amb la traducció de blocs que sí que es mostre.

## 🧩 Funcions i controls

- Programació de Codey Rocky amb blocs i Python a mBlock 5.
- Botons A i B del controlador Codey com a entrades i matriu LED 16 × 8 com a eixida.
- Mode Live per a executar mentre Codey continua connectat i mode Upload per a transferir el programa al controlador.
- Vista de codi Python generat pels blocs i ús de biblioteques pròpies de Codey/Rocky.

## 👣 Pas a pas

### 1. Connecteu el dispositiu Codey

Useu el cable micro-USB per a connectar Codey a l’ordinador i enceneu-lo. A mBlock 5, afegiu «Codey» i completeu la connexió. Confirmeu que l’estat és connectat abans de crear el programa. Si useu la versió web, seguiu el mètode de connexió i el controlador mLink que indique la instal·lació disponible.

### 2. Creeu el programa amb blocs

Creeu una pila de blocs per al botó A i una altra per al B. Dibuixeu una cara diferent en cada bloc de pantalla:

```mblock
quan es prem el botó [A v]
mostra una cara feliç

quan es prem el botó [B v]
mostra una cara sorpresa
```

El dibuix és una guia: els noms dels blocs poden variar. Trieu **Live** i, amb Codey connectat, proveu A i B. Després trieu **Upload** i seguiu les indicacions de mBlock per preparar la càrrega.

### 3. Carregueu i comproveu el programa

Seleccioneu Upload i transferiu el projecte a Codey. Quan la càrrega acabe, desconnecteu el cable només si el programa ja s’ha transferit i proveu A i B. El programa carregat continua funcionant sense connexió a mBlock. En Live, en canvi, el controlador ha de mantindre la connexió amb l’ordinador perquè les ordres s’executen en temps real.

### 4. Obriu la vista Python generada

Torneu a connectar Codey, obriu el mateix projecte en mode Upload i activeu l’opció de veure Python. Compareu la part del botó A amb la del B i busqueu on apareixen les imatges. El text depén de la versió de mBlock; no cal copiar-lo ni entendre totes les línies per continuar.

### 5. Modifiqueu una instrucció i torneu-la a provar

Guardeu primer el projecte. Torneu als blocs i canvieu només el dibuix del botó A; després consulteu de nou la vista Python per observar el canvi. Carregueu el programa una altra vegada i proveu A i B: A ha de mostrar la nova cara i B ha de conservar l’anterior.

En algunes versions és possible editar Python directament. Si ho proveu, feu-ho en una còpia del projecte: la traducció automàtica dels blocs a text no garanteix que els canvis en text tornen a convertir-se en blocs.

## 🧪 Comprovació i resolució de problemes

Anoteu què passa amb A i B en la prova Live amb el cable connectat i en la prova Upload després de carregar el programa. Si Python no apareix, comproveu que heu seleccionat Codey, que esteu en Upload i que la vostra versió ofereix la vista de codi.

## 🛡️ Ús i seguretat

Manteniu el robot quiet durant la transferència del programa. Abans d’afegir ordres de motor, deixeu lliure la zona i localitzeu el control d’aturada. Desconnecteu el cable agafant-ne el connector.

## 🔗 Fonts i límits

La guia oficial de Makeblock [Program Codey Rocky with mBlock 5](https://support.makeblock.com/hc/en-us/articles/1500008637961-Program-Codey-Rocky-with-mBlock-5) confirma els modes Live/Upload i que, en Upload, es pot canviar entre blocs i Python o veure el codi corresponent. La documentació de [transcodificació d’Upload](https://support.makeblock.com/hc/en-us/articles/15236617061783-Configuration-Transcoding-Setting-for-the-Upload-Mode) mostra les biblioteques `codey` i `rocky`. Les opcions de vista i edició depenen de la versió instal·lada; la guia no pressuposa una API manual estable ni una connexió a Internet durant l’execució carregada.
