# Scratch Blocks 1.1.202

Procedència: paquet `scratch-blocks@1.1.202` de Scratch Foundation.

- Repositori: https://github.com/scratchfoundation/scratch-blocks
- Paquet original: https://registry.npmjs.org/scratch-blocks/-/scratch-blocks-1.1.202.tgz
- Llicència i marques: `LICENSE` i `TRADEMARK`, copiats del paquet.

Els tres fitxers compilats, `messages.js` (original `msg/js/en.js`) i `media/` es distribueixen sense modificar. `messages-ca.js` assigna a `Blockly.Msg` les traduccions catalanes extretes de `msg/scratch_msgs.js` del mateix paquet.

El simulador carrega aquests recursos locals i no necessita un CDN per a l’editor. Les definicions pròpies dels blocs Codey i la conversió del projecte són a `sim/codey-native-blocks.js`. No s’inclouen serveis ni codi d’execució de mBlock.
