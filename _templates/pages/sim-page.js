'use strict';

const { escapeHTML, escapeAttr, cleanRoot } = require('../layout/utils');
const { CodeyWorkspace } = require('../components/codey-workspace');
const { SpikeWorkspace } = require('../components/spike-workspace');
const { getSimSvgs } = require('../../_scripts/lib/tangible-blocks');

function SimPage({ root = '../' } = {}) {
  const r = cleanRoot(root);
  const svgs = getSimSvgs();
  const title = 'Simulador · Tale-Bot, Coding Set, Codey Rocky i SPIKE Prime | Robòtica²⁰⁰';
  const description = 'Aplicació de simulació per a Tale-Bot Pro, Matatalab Coding Set, Codey Rocky i SPIKE Prime.';

  return `<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title id="page-title">${escapeHTML(title)}</title>
  <meta name="description" content="${escapeAttr(description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${r}_css/styles.css?v=10">
  <link rel="stylesheet" href="${r}sim/sim.css?v=10">
  <link rel="icon" type="image/svg+xml" href="${r}_assets/icons/logo.svg">
  <script defer src="${r}sim/sim.js?v=9"></script>
  <link rel="stylesheet" href="${r}sim/codey.css?v=10">
  <script defer src="${r}sim/codey-engine.js?v=9"></script>
  <script defer src="${r}sim/codey-blocks.js?v=4"></script>
  <script defer src="${r}sim/vendor/scratch-blocks/blockly_compressed_vertical.js"></script>
  <script defer src="${r}sim/vendor/scratch-blocks/blocks_compressed.js"></script>
  <script defer src="${r}sim/vendor/scratch-blocks/blocks_compressed_vertical.js"></script>
  <script defer src="${r}sim/vendor/scratch-blocks/messages.js"></script>
  <script defer src="${r}sim/vendor/scratch-blocks/messages-ca.js"></script>
  <script defer src="${r}sim/codey-native-blocks.js?v=5"></script>
  <script defer src="${r}sim/scene-3d.js?v=19"></script>
  <script defer src="${r}sim/codey.js?v=17"></script>
  <link rel="stylesheet" href="${r}sim/spike.css?v=11">
  <script defer src="${r}sim/spike-engine.js?v=12"></script>
  <script defer src="${r}sim/spike-projects.js?v=4"></script>
  <script defer src="${r}sim/spike-native-blocks.js?v=7"></script>
  <script defer src="${r}sim/spike.js?v=19"></script>
</head>
<body class="sim-app-body">
  <header class="sim-topbar" data-sim-hero data-active-robot="tale-bot">
    <div class="sim-topbar-start">
      <a href="${r}index.html" class="sim-brand" aria-label="Inici Robòtica 200">
        <img src="${r}_assets/icons/logo.svg" alt="" class="logo-badge-img" width="24" height="24">
        <span class="logo-name">Robòtica<sup>200</sup></span>
      </a>
    </div>

    <div class="sim-robot-switcher" role="tablist" aria-label="Robot">
      <button
        type="button"
        role="tab"
        id="tab-tale-bot"
        class="sim-robot-tab is-active"
        aria-selected="true"
        aria-controls="panel-controls-tale-bot"
        tabindex="0"
        data-robot-tab="tale-bot"
      >
        <img src="${r}_assets/icons/tale-bot.webp" alt="" class="sim-robot-tab-icon" width="28" height="28">
        <span class="sim-robot-tab-name">Tale-Bot Pro</span>
      </button>

      <button
        type="button"
        role="tab"
        id="tab-coding-set"
        class="sim-robot-tab"
        aria-selected="false"
        aria-controls="panel-controls-coding-set"
        tabindex="-1"
        data-robot-tab="coding-set"
      >
        <img src="${r}_assets/icons/coding-set.webp" alt="" class="sim-robot-tab-icon" width="28" height="28">
        <span class="sim-robot-tab-name">Coding Set</span>
      </button>
      <button type="button" role="tab" id="tab-codey-rocky" class="sim-robot-tab" aria-selected="false" aria-controls="panel-controls-codey-rocky" tabindex="-1" data-robot-tab="codey-rocky">
        <img src="${r}_assets/icons/codey-rocky.webp" alt="" class="sim-robot-tab-icon" width="28" height="28"><span class="sim-robot-tab-name">Codey Rocky</span>
      </button>
      <button type="button" role="tab" id="tab-spike" class="sim-robot-tab" aria-selected="false" aria-controls="panel-controls-spike" tabindex="-1" data-robot-tab="spike"><img src="${r}_assets/icons/spike.webp" alt="" class="sim-robot-tab-icon" width="28" height="28"><span class="sim-robot-tab-name">SPIKE Prime</span></button>
    </div>

    <div class="sim-topbar-end">
      <div class="sim-speed-control">
        <label for="sim-speed-select" class="visually-hidden">Velocitat</label>
        <select id="sim-speed-select" class="sim-speed-select" data-speed-select>
          <option value="850">🐢 Lenta</option>
          <option value="520" selected>▶ Normal</option>
          <option value="260">⚡ Ràpida</option>
        </select>
      </div>

      <button type="button" class="sim-icon-toggle" aria-pressed="true" data-toggle-sound aria-label="So">
        <span data-sound-icon aria-hidden="true">🔊</span>
      </button>
    </div>
  </header>

  <main id="page-content" class="sim-workspace" data-sim-workspace data-robot="tale-bot">
    <h1 class="visually-hidden">Simulador de Tale-Bot Pro, Coding Set, Codey Rocky i SPIKE Prime</h1>

    <!-- PANELL ESQUERRE: BARRA D'EINES VERTICAL ESQUERRA + TAPÍS 6x6 -->
    <div class="sim-stage-pane">
      <div class="sim-mat-toolbar" role="toolbar" aria-orientation="vertical" aria-label="Eines del tapís">
        <div class="sim-toolbar-section" role="group" aria-label="Elements del tapís" data-mat-tools>
          <button type="button" class="sim-tool-btn" aria-pressed="false" data-mat-tool="flag">
            <span aria-hidden="true">🚩</span>
            <span>Bandera</span>
          </button>
          <button type="button" class="sim-tool-btn" aria-pressed="false" data-mat-tool="obstacle">
            <span aria-hidden="true">🚧</span>
            <span>Obstacle</span>
          </button>
          <button type="button" class="sim-tool-btn" aria-pressed="false" data-mat-tool="box" data-tb-only>
            <span aria-hidden="true">📦</span>
            <span>Caixa</span>
          </button>
          <button
            type="button"
            class="sim-tool-btn"
            aria-pressed="false"
            data-mat-tool="emoji"
            data-open-emoji-dialog
          >
            <span data-emoji-tool-icon aria-hidden="true">😀</span>
            <span>Emoji</span>
          </button>
        </div>

        <hr class="sim-toolbar-divider" aria-hidden="true">

        <div class="sim-toolbar-section sim-draw-controls" role="group" aria-label="Robot i accessoris">
          <button type="button" class="sim-tool-btn is-active" aria-pressed="true" data-mat-tool="robot">
            <span aria-hidden="true">📍</span>
            <span>Robot</span>
          </button>
          <button type="button" class="sim-tool-btn" data-rotate-start="left" aria-label="Gira l'orientació inicial 90 graus">
            <span aria-hidden="true">↺</span>
            <span>90°</span>
          </button>
          <button type="button" class="sim-tool-btn" aria-pressed="false" data-tb-toggle-arms data-tb-only>
            <span aria-hidden="true">🦾</span>
            <span>Braços</span>
          </button>
          <button type="button" class="sim-tool-btn" aria-pressed="false" data-toggle-pen>
            <span aria-hidden="true">✏️</span>
            <span>Retolador</span>
          </button>
          <div class="sim-color-swatches" role="group" aria-label="Color del retolador">
            <button type="button" class="sim-color-swatch is-active" style="--swatch:#ea580c" data-pen-color="#ea580c" aria-label="Taronja" aria-pressed="true"></button>
            <button type="button" class="sim-color-swatch" style="--swatch:#2563eb" data-pen-color="#2563eb" aria-label="Blau" aria-pressed="false"></button>
            <button type="button" class="sim-color-swatch" style="--swatch:#16a34a" data-pen-color="#16a34a" aria-label="Verd" aria-pressed="false"></button>
            <button type="button" class="sim-color-swatch" style="--swatch:#9333ea" data-pen-color="#9333ea" aria-label="Lila" aria-pressed="false"></button>
            <button type="button" class="sim-color-swatch" style="--swatch:#e11d48" data-pen-color="#e11d48" aria-label="Roig" aria-pressed="false"></button>
          </div>
        </div>

        <hr class="sim-toolbar-divider" aria-hidden="true">

        <div class="sim-toolbar-section" role="group" aria-label="Accions del tauler">
          <button type="button" class="sim-tool-btn" data-clear-drawing aria-label="Neteja el tauler i el dibuix">
            <span aria-hidden="true">🧹</span>
            <span>Neteja</span>
          </button>
          <button
            type="button"
            class="sim-tool-btn"
            data-reset-board
            aria-label="Reinicia el tauler: torna el robot i les caixes a la posició inicial i esborra el dibuix"
            title="Torna el robot i les caixes a la posició inicial i esborra el traç del retolador"
          >
            <span aria-hidden="true">🔄</span>
            <span>Reinicia</span>
          </button>
        </div>

        <hr class="sim-toolbar-divider" aria-hidden="true">

        <div class="sim-toolbar-section sim-grid-size-controls" role="group" aria-label="Mida del tauler">
          <div class="sim-size-field">
            <label for="sim-grid-rows" class="sim-size-label">Files</label>
            <select id="sim-grid-rows" class="sim-size-select" data-grid-rows aria-label="Nombre de files del tauler">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6" selected>6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="sim-size-field">
            <label for="sim-grid-cols" class="sim-size-label">Columnes</label>
            <select id="sim-grid-cols" class="sim-size-select" data-grid-cols aria-label="Nombre de columnes del tauler">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6" selected>6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Tapís auto-escalable -->
      <div class="sim-board-stage">
        <div class="sim-board-outer" data-board-outer style="--grid-rows: 6; --grid-cols: 6;">
          <div class="sim-col-headers" data-col-headers aria-hidden="true">
            <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span>
          </div>
          <div class="sim-board-row-wrap">
            <div class="sim-row-headers" data-row-headers aria-hidden="true">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
            </div>

            <div class="sim-mat-viewport" data-mat-viewport>
              <div
                class="sim-grid-cells"
                data-grid-cells
                role="grid"
                aria-label="Tapís 6 per 6"
              ></div>

              <canvas class="sim-draw-canvas" data-draw-canvas width="600" height="600" aria-hidden="true"></canvas>

              <div class="sim-speech-bubble" data-speech-bubble hidden aria-hidden="true"></div>

              <div class="sim-robot-actor" data-robot-actor style="--col: 1; --row: 4; --angle: 0deg;">
                <div class="sim-tb-arms" data-tb-arms hidden aria-hidden="true">
                  <span class="sim-tb-arm sim-tb-arm-left"></span>
                  <span class="sim-tb-arm sim-tb-arm-right"></span>
                </div>

                <span class="sim-marker-badge" data-marker-badge hidden aria-hidden="true">✏️</span>

                <svg class="sim-actor-svg sim-actor-tale-bot" viewBox="0 0 100 100" aria-label="Tale-Bot Pro" role="img">
                  <title>Tale-Bot Pro</title>
                  <rect x="10" y="12" width="80" height="78" rx="26" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
                  <rect x="5" y="28" width="8" height="44" rx="4" fill="#ea580c"/>
                  <rect x="87" y="28" width="8" height="44" rx="4" fill="#ea580c"/>
                  <rect x="22" y="10" width="56" height="16" rx="8" fill="#1e293b"/>
                  <circle cx="36" cy="18" r="5" fill="#38bdf8"/>
                  <circle cx="34.5" cy="16.5" r="1.8" fill="#ffffff"/>
                  <circle cx="64" cy="18" r="5" fill="#38bdf8"/>
                  <circle cx="62.5" cy="16.5" r="1.8" fill="#ffffff"/>
                  <path d="M50 3 L44 10 H56 Z" fill="#ea580c"/>
                  <rect x="43" y="30" width="14" height="14" rx="5" fill="#ff3b47"/>
                  <rect x="43" y="64" width="14" height="14" rx="5" fill="#188c38"/>
                  <rect x="26" y="47" width="14" height="14" rx="5" fill="#00a8f3"/>
                  <rect x="60" y="47" width="14" height="14" rx="5" fill="#ffd400"/>
                  <circle cx="50" cy="54" r="7" fill="#ff8f00"/>
                </svg>

                <svg class="sim-actor-svg sim-actor-coding-set" viewBox="0 0 100 100" aria-label="MatataBot" role="img">
                  <title>MatataBot</title>
                  <rect x="6" y="28" width="8" height="44" rx="4" fill="#334155"/>
                  <rect x="86" y="28" width="8" height="44" rx="4" fill="#334155"/>
                  <rect x="12" y="14" width="76" height="74" rx="18" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
                  <rect x="20" y="24" width="60" height="54" rx="14" fill="#fc7813"/>
                  <circle cx="50" cy="52" r="16" fill="#ff9344"/>
                  <rect x="22" y="10" width="56" height="15" rx="7" fill="#1e293b"/>
                  <circle cx="36" cy="17.5" r="4.5" fill="#38bdf8"/>
                  <circle cx="64" cy="17.5" r="4.5" fill="#38bdf8"/>
                  <path d="M50 2 L43 10 H57 Z" fill="#16a34a"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PANELL DRET: CONSOLA DEL ROBOT ACTIU -->
    <div class="sim-console-pane">

      <!-- =========================================================
           CONSOLA 1: TALE-BOT PRO
           ========================================================= -->
      <div
        id="panel-controls-tale-bot"
        role="tabpanel"
        aria-labelledby="tab-tale-bot"
        class="sim-robot-panel"
        data-robot-panel="tale-bot"
      >
        <div class="sim-panel-header">
          <div class="sim-tb-leds-group">
            <div class="sim-tb-leds" data-tb-leds aria-label="Indicadors LED d'ordres">
              <span class="sim-tb-led" data-led-index="0"></span>
              <span class="sim-tb-led" data-led-index="1"></span>
              <span class="sim-tb-led" data-led-index="2"></span>
              <span class="sim-tb-led" data-led-index="3"></span>
              <span class="sim-tb-led" data-led-index="4"></span>
              <span class="sim-tb-led" data-led-index="5"></span>
              <span class="sim-tb-led" data-led-index="6"></span>
              <span class="sim-tb-led" data-led-index="7"></span>
            </div>
            <div class="sim-tb-repeat-leds" data-tb-repeat-leds aria-label="Indicadors LED de repetició">
              <span class="sim-tb-repeat-led" data-repeat-led-index="0"></span>
              <span class="sim-tb-repeat-led" data-repeat-led-index="1"></span>
              <span class="sim-tb-repeat-led" data-repeat-led-index="2"></span>
              <span class="sim-tb-repeat-led" data-repeat-led-index="3"></span>
            </div>
          </div>
        </div>

        <div class="sim-tb-shell">
          <div class="sim-tb-keypad" role="group" aria-label="Teclat físic de Tale-Bot Pro">
            <!-- Fila 1: Clear (X) · Endavant · Repetició -->
            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-clear"
              data-tb-clear-hold
              aria-label="Esborra (pulsació curta última, pulsació llarga tot)"
              title="Esborra"
            >
              ${svgs.taleBot.clear.svg}
              <span class="sim-tb-hold-bar" data-tb-hold-bar aria-hidden="true"></span>
            </button>

            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-forward"
              data-tb-cmd="forward"
              aria-label="Endavant"
              title="Endavant"
            >
              ${svgs.taleBot.forward.svg}
            </button>

            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-repeat"
              data-tb-repeat
              aria-label="Repetició del programa"
              title="Repetició"
            >
              ${svgs.taleBot.repeat.svg}
              <span class="sim-tb-repeat-badge" data-tb-repeat-badge hidden></span>
            </button>

            <!-- Fila 2: Esquerra · Play · Dreta -->
            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-left"
              data-tb-cmd="left"
              aria-label="Gir a l’esquerra"
              title="Gir a l’esquerra"
            >
              ${svgs.taleBot.left.svg}
            </button>

            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-play"
              data-sim-play
              aria-label="Executa (Play)"
              title="Play"
            >
              ${svgs.taleBot.play.svg}
              <span class="visually-hidden" data-play-label>Play</span>
            </button>

            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-right"
              data-tb-cmd="right"
              aria-label="Gir a la dreta"
              title="Gir a la dreta"
            >
              ${svgs.taleBot.right.svg}
            </button>

            <!-- Fila 3: Gravació · Enrere · Dansa -->
            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-record"
              data-tb-cmd="record"
              aria-label="Gravació de veu"
              title="Gravació de veu"
            >
              ${svgs.taleBot.record.svg}
            </button>

            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-back"
              data-tb-cmd="back"
              aria-label="Enrere"
              title="Enrere"
            >
              ${svgs.taleBot.back.svg}
            </button>

            <button
              type="button"
              class="sim-tb-key-btn sim-tb-key-dance"
              data-tb-cmd="dance"
              aria-label="Dansa predefinida"
              title="Dansa predefinida"
            >
              ${svgs.taleBot.dance.svg}
            </button>
          </div>
        </div>

        <div class="sim-tb-actions-row">
          <button type="button" class="sim-btn sim-btn-outline" data-tb-delete-last>
            ⌫ Esborrar última
          </button>
          <button type="button" class="sim-btn sim-btn-outline sim-btn-danger" data-tb-delete-all>
            🗑️ Esborrar tot
          </button>
          <button type="button" class="sim-btn sim-btn-secondary" data-sim-step>
            👣 Pas a pas
          </button>
        </div>

        <div class="sim-tb-voice-bar">
          <label for="sim-tb-voice-input" class="sim-voice-icon-label" aria-label="Frase de veu gravada">🎙️</label>
          <input
            type="text"
            id="sim-tb-voice-input"
            class="sim-text-input"
            value="Hola, sóc el conill del bosc!"
            maxlength="80"
            data-tb-voice-input
          >
          <button type="button" class="sim-btn sim-btn-secondary" data-tb-test-voice aria-label="Escolta la gravació">
            ▶
          </button>
        </div>
      </div>

      <!-- =========================================================
           CONSOLA 2: MATATALAB CODING SET
           ========================================================= -->
      <div
        id="panel-controls-coding-set"
        role="tabpanel"
        aria-labelledby="tab-coding-set"
        class="sim-robot-panel sim-cs-panel"
        data-robot-panel="coding-set"
        hidden
      >
        <!-- Paleta de fitxes tangibles (exclusivament vectors SVG oficials) -->
        <div class="sim-cs-palette" aria-label="Fitxes del Coding Set">
          <div class="sim-cs-blocks-tray" role="group" aria-label="Fitxes d'instrucció">
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="forward" aria-label="Endavant" title="Endavant">${svgs.codingSet.forward.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="back" aria-label="Enrere" title="Enrere">${svgs.codingSet.back.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="right" aria-label="Gir a la dreta" title="Gir a la dreta">${svgs.codingSet.right.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="left" aria-label="Gir a l’esquerra" title="Gir a l’esquerra">${svgs.codingSet.left.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="loop" aria-label="Inici del bucle" title="Inici del bucle">${svgs.codingSet.loop.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="end" aria-label="Fi del bucle" title="Fi del bucle">${svgs.codingSet.end.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="define" aria-label="Defineix funció" title="Defineix funció">${svgs.codingSet.define.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="call" aria-label="Crida funció" title="Crida funció">${svgs.codingSet.call.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="dance" aria-label="Dansa predefinida" title="Dansa predefinida">${svgs.codingSet.dance.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="music" aria-label="Música predefinida" title="Música predefinida">${svgs.codingSet.music.svg}</button>
            <button type="button" class="sim-cs-tile-btn" draggable="true" data-cs-add="random" aria-label="Moviment aleatori" title="Moviment aleatori">${svgs.codingSet.random.svg}</button>
          </div>

          <div class="sim-cs-numbers-tray" role="group" aria-label="Blocs numèrics">
            <button type="button" class="sim-cs-num-tile-btn" draggable="true" data-cs-num="2" aria-label="Bloc numèric 2" title="2">${svgs.codingSet['num-2'].svg}</button>
            <button type="button" class="sim-cs-num-tile-btn" draggable="true" data-cs-num="3" aria-label="Bloc numèric 3" title="3">${svgs.codingSet['num-3'].svg}</button>
            <button type="button" class="sim-cs-num-tile-btn" draggable="true" data-cs-num="4" aria-label="Bloc numèric 4" title="4">${svgs.codingSet['num-4'].svg}</button>
            <button type="button" class="sim-cs-num-tile-btn" draggable="true" data-cs-num="5" aria-label="Bloc numèric 5" title="5">${svgs.codingSet['num-5'].svg}</button>
            <button type="button" class="sim-cs-num-tile-btn" draggable="true" data-cs-num="random" aria-label="Bloc numèric aleatori (dau)" title="Aleatori (dau)">${svgs.codingSet['num-random'].svg}</button>
            <button type="button" class="sim-cs-num-tile-btn sim-cs-num-remove-btn" data-cs-num="" aria-label="Retira el bloc numèric" title="Retira el bloc numèric">
              <svg viewBox="0 0 64 32" aria-hidden="true"><rect x="1" y="3" width="62" height="27" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 3"/><path d="M26 10.5l12 12M38 10.5l-12 12" stroke="#64748b" stroke-width="3" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>

        <!-- Tauler físic Matatalab (3 files × 6 caselles + botó taronja Play inferior) -->
        <div class="sim-cs-physical-board" data-cs-board>
          <div class="sim-cs-board-well">
            <div
              class="sim-cs-board-grid"
              data-cs-main-slots
              role="grid"
              aria-label="Tauler de programació de 3 files per 6 caselles"
            ></div>
          </div>

          <div class="sim-cs-board-footer">
            <button
              type="button"
              class="sim-cs-board-aux-btn"
              data-sim-step-cs
              aria-label="Executa pas a pas"
              title="Pas a pas"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v14l9-7-9-7Zm11 0v14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>

            <button
              type="button"
              class="sim-cs-orange-play"
              data-sim-play-cs
              aria-label="Executa el programa del tauler"
              title="Play"
            >
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M22 16.5c0-2.5 2.7-4 4.8-2.7l23.4 15.5c2 1.3 2 4.1 0 5.4L26.8 50.2c-2.1 1.3-4.8-.2-4.8-2.7V16.5Z" fill="white"/>
              </svg>
            </button>

            <button
              type="button"
              class="sim-cs-board-aux-btn sim-cs-board-clear-btn"
              data-cs-clear-main
              aria-label="Buida tot el tauler"
              title="Buida el tauler"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
    ${CodeyWorkspace({ root: r })}
    ${SpikeWorkspace()}
  </main>

  <!-- Diàleg emergent (Popover Top-Layer) per seleccionar qualsevol emoji per al tauler de Tale-Bot -->
  <div
    id="sim-emoji-dialog"
    class="sim-emoji-dialog"
    popover="auto"
    hidden
    role="dialog"
    aria-labelledby="sim-emoji-dialog-title"
    data-emoji-dialog
  >
    <div class="sim-emoji-dialog-header">
      <h2 id="sim-emoji-dialog-title" class="sim-emoji-dialog-title">Selecciona un emoji per al tauler</h2>
      <button
        type="button"
        class="sim-emoji-dialog-close"
        data-close-emoji-dialog
        aria-label="Tanca el selector d'emojis"
      >✕</button>
    </div>

    <div class="sim-emoji-custom-row">
      <label for="sim-emoji-custom-input" class="visually-hidden">Escriu o enganxa qualsevol emoji</label>
      <input
        type="text"
        id="sim-emoji-custom-input"
        class="sim-text-input sim-emoji-custom-input"
        placeholder="Escriu o enganxa qualsevol emoji (ex. 🦄, 🚀, 🏰)..."
        maxlength="16"
        data-emoji-custom-input
      >
      <button type="button" class="sim-btn sim-btn-secondary" data-emoji-custom-apply>
        Usa l'emoji
      </button>
    </div>

    <div class="sim-emoji-categories" data-emoji-categories></div>
  </div>

  <script id="sim-svg-data" type="application/json">${JSON.stringify(svgs)}</script>
</body>
</html>
`;
}

module.exports = { SimPage };
