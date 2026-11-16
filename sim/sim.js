// sim/sim.js - Motor interactiu dels simuladors de Tale-Bot Pro i Matatalab Coding Set
(function () {
  'use strict';

  const GRID_SIZE = 6;
  const COLS = ['A', 'B', 'C', 'D', 'E', 'F'];
  const DIRS = [
    { dx: 0, dy: -1, angle: 0, label: '↑ Nord' },
    { dx: 1, dy: 0, angle: 90, label: '→ Est' },
    { dx: 0, dy: 1, angle: 180, label: '↓ Sud' },
    { dx: -1, dy: 0, angle: 270, label: '← Oest' }
  ];

  const LABELS = {
    forward: 'Endavant',
    back: 'Enrere',
    right: 'Gir a la dreta',
    left: 'Gir a l’esquerra',
    record: 'Reprodueix la gravació',
    dance: 'Dansa predefinida',
    loop: 'Inici del bucle',
    end: 'Fi del bucle',
    define: 'Defineix funció',
    call: 'Crida funció',
    random: 'Moviment aleatori',
    music: 'Música predefinida'
  };

  const TB_COLORS = {
    forward: '#ff3b47',
    back: '#188c38',
    right: '#00a8f3',
    left: '#ffd400',
    record: '#66d1ff',
    dance: '#a365d9'
  };

  const EMOJI_CATEGORIES = [
    {
      title: 'Animals',
      emojis: [
        '🐰', '🦊', '🐻', '🐸', '🦁', '🐯', '🐼', '🐨', '🐶', '🐱', '🐭', '🐹',
        '🐷', '🐮', '🐵', '🐔', '🐧', '🐦', '🦆', '🦉', '🐝', '🐛', '🦋', '🐌',
        '🐞', '🐢', '🐍', '🦖', '🦕', '🐙', '🐠', '🐬', '🐳', '🐴', '🐑', '🐿️'
      ]
    },
    {
      title: 'Natura i bosc',
      emojis: [
        '🌲', '🌳', '🌴', '🌵', '🍄', '🌻', '🌷', '🌹', '🌺', '🌸', '🌼', '🍀',
        '🍁', '🍂', '🍃', '🌾', '🪨', '🌈', '☀️', '🌙', '⭐', '🌟', '☁️', '❄️',
        '💧', '🔥', '🌊', '🌍'
      ]
    },
    {
      title: 'Menjar i fruites',
      emojis: [
        '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍒', '🍑', '🍍', '🥝',
        '🍅', '🥕', '🌽', '🥦', '🥔', '🍞', '🧀', '🥚', '🍕', '🍔', '🍟', '🍿',
        '🧁', '🍰', '🎂', '🍪', '🍩', '🍫', '🍬', '🍭', '🍯', '🥛', '🍦', '🍉'
      ]
    },
    {
      title: 'Llocs i transports',
      emojis: [
        '🏡', '🏠', '🏰', '⛺', '🏫', '🏥', '🚒', '🚓', '🚑', '🚜', '🚗', '🚌',
        '🚂', '✈️', '🚀', '🛸', '🚁', '⛵', '🚢', '🚲', '🛴', '🚦', '⛽', '🗺️',
        '🧭', '🏝️', '⛰️', '🌋'
      ]
    },
    {
      title: 'Objectes, contes i símbols',
      emojis: [
        '👑', '💎', '🔑', '🎁', '🎈', '🎉', '🎨', '🎭', '🎪', '📚', '✏️', '🔍',
        '💡', '🔦', '🧲', '⚙️', '🧰', '🧪', '🔭', '⚽', '🏀', '🏆', '🥇', '🎸',
        '🎺', '🥁', '🤖', '👾', '👻', '🧙', '🧚', '🧜', '🦄', '🐉', '❤️', '💛',
        '💚', '💙', '💜', '❓', '❗', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'
      ]
    }
  ];

  const rootEl = document.querySelector('[data-sim-workspace]');
  if (!rootEl) return;

  const heroEl = document.querySelector('[data-sim-hero]');
  const tabs = Array.from(document.querySelectorAll('[data-robot-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-robot-panel]'));

  const gridCellsEl = document.querySelector('[data-grid-cells]');
  const drawCanvas = document.querySelector('[data-draw-canvas]');
  const drawCtx = drawCanvas.getContext('2d');
  const robotActor = document.querySelector('[data-robot-actor]');
  const tbArmsEl = document.querySelector('[data-tb-arms]');
  const markerBadgeEl = document.querySelector('[data-marker-badge]');
  const speechBubbleEl = document.querySelector('[data-speech-bubble]');

  const matToolBtns = Array.from(document.querySelectorAll('[data-mat-tool]'));
  const tbOnlyTools = Array.from(document.querySelectorAll('[data-tb-only]'));
  const rotateStartBtn = document.querySelector('[data-rotate-start]');
  const resetRobotBtn = document.querySelector('[data-reset-robot]');

  const openEmojiDialogBtn = document.querySelector('[data-open-emoji-dialog]');
  const emojiToolIconEl = document.querySelector('[data-emoji-tool-icon]');
  const emojiDialog = document.querySelector('[data-emoji-dialog]');
  const emojiCustomInput = document.querySelector('[data-emoji-custom-input]');
  const emojiCustomApplyBtn = document.querySelector('[data-emoji-custom-apply]');
  const emojiCategoriesEl = document.querySelector('[data-emoji-categories]');

  const togglePenBtn = document.querySelector('[data-toggle-pen]');
  const colorSwatches = Array.from(document.querySelectorAll('[data-pen-color]'));
  const clearDrawingBtn = document.querySelector('[data-clear-drawing]');
  const toggleSoundBtn = document.querySelector('[data-toggle-sound]');
  const soundIconEl = document.querySelector('[data-sound-icon]');
  const speedSelect = document.querySelector('[data-speed-select]');

  // Controls Tale-Bot
  const MAX_TB_COMMANDS = 256;
  const tbLedsContainer = document.querySelector('[data-tb-leds]');
  const tbRepeatLeds = Array.from(document.querySelectorAll('[data-repeat-led-index]'));
  const tbRepeatBtn = document.querySelector('[data-tb-repeat]');
  const tbRepeatBadge = document.querySelector('[data-tb-repeat-badge]');
  const tbCmdBtns = Array.from(document.querySelectorAll('[data-tb-cmd]'));
  const tbPlayBtn = document.querySelector('[data-sim-play]');
  const tbPlayLabel = document.querySelector('[data-play-label]');
  const tbStepBtn = document.querySelector('[data-sim-step]');
  const tbClearHoldBtn = document.querySelector('[data-tb-clear-hold]');
  const tbHoldBar = document.querySelector('[data-tb-hold-bar]');
  const tbDeleteLastBtn = document.querySelector('[data-tb-delete-last]');
  const tbDeleteAllBtn = document.querySelector('[data-tb-delete-all]');
  const tbVoiceInput = document.querySelector('[data-tb-voice-input]');
  const tbTestVoiceBtn = document.querySelector('[data-tb-test-voice]');
  const tbToggleArmsBtn = document.querySelector('[data-tb-toggle-arms]');

  // Controls Coding Set
  const csPlayBtn = document.querySelector('[data-sim-play-cs]');
  const csStepBtn = document.querySelector('[data-sim-step-cs]');
  const csAddBtns = Array.from(document.querySelectorAll('[data-cs-add]'));
  const csNumBtns = Array.from(document.querySelectorAll('[data-cs-num]'));
  const csMainSlotsEl = document.querySelector('[data-cs-main-slots]');
  const csClearMainBtn = document.querySelector('[data-cs-clear-main]');

  // Estat global del simulador
  const state = {
    robot: 'tale-bot',
    matTool: 'robot',
    selectedEmoji: '😀',
    activeCellIndex: 25, // B5 (row 4, col 1)
    startPose: { col: 1, row: 4, dir: 0 },
    pose: { col: 1, row: 4, dir: 0, visualAngle: 0 },
    flag: { col: 4, row: 1 },
    obstacles: [],
    box: null,
    initialBox: null,
    oidCells: [],
    penEnabled: false,
    penColor: '#ea580c',
    soundEnabled: true,
    stepMs: 520,
    isRunning: false,
    runToken: 0,
    stepCursor: 0,
    hasStartedStepping: false,
    infinitePassCount: 0,
    // Estat Tale-Bot
    tb: {
      sequence: ['forward', 'forward', 'right', 'forward'],
      repeat: 0,
      armsEnabled: false,
      activeLed: -1,
      activeRepLed: -1
    },
    // Estat Coding Set: Tauler físic de 3 files × 6 caselles (18 ranures)
    cs: {
      selectedSlot: 0,
      boardSlots: Array.from({ length: 18 }, () => null),
      activeMainSlot: -1,
      activeFuncSlot: -1
    }
  };

  // Inicialitzem una seqüència inicial al tauler 3×6 del Coding Set
  state.cs.boardSlots[0] = { type: 'forward', number: '2' };
  state.cs.boardSlots[1] = { type: 'right', number: '' };
  state.cs.boardSlots[2] = { type: 'forward', number: '2' };
  state.cs.selectedSlot = 3;

  // =========================================================
  // 1. SINTETITZADOR D'ÀUDIO WEB (0 dependències)
  // =========================================================
  let audioCtx = null;
  function getAudioCtx() {
    if (!state.soundEnabled) return null;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
    return audioCtx;
  }

  function playTone(freq = 520, durationMs = 110, type = 'sine', gainVal = 0.08) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + durationMs / 1000);
    } catch (_) {}
  }

  function playMelody(notes) {
    if (!state.soundEnabled) return;
    notes.forEach(([freq, delayMs, durMs], idx) => {
      setTimeout(() => playTone(freq, durMs || 120, 'triangle', 0.09), delayMs ?? idx * 130);
    });
  }

  let speechTimer = null;
  function showBubble(text, duration = 2200) {
    clearTimeout(speechTimer);
    if (!text) {
      speechBubbleEl.hidden = true;
      speechBubbleEl.textContent = '';
      return;
    }
    speechBubbleEl.textContent = text;
    speechBubbleEl.hidden = false;
    speechTimer = setTimeout(() => {
      speechBubbleEl.hidden = true;
    }, duration);
  }

  function setStatus(message, tone = 'info') {
    if (tone === 'error' || tone === 'warning') {
      showBubble(message, 2600);
    }
  }

  // =========================================================
  // 2. SPATIAL NAVIGATION (Fletxes del teclat sobre graelles)
  // =========================================================
  function setupSpatialNavigation(container) {
    if (!container) return;
    container.addEventListener('keydown', (e) => {
      const dirMap = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right'
      };
      const dir = dirMap[e.key];
      if (!dir || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

      const path0 = e.composedPath()[0];
      if (path0 && path0.matches && path0.matches(':read-write, select, input[type="range"], [role="slider"]')) {
        return;
      }

      const candidates = Array.from(container.querySelectorAll('button:not(:disabled)')).filter(el =>
        typeof el.checkVisibility === 'function' ? el.checkVisibility() : el.offsetParent !== null
      );
      if (!candidates.includes(path0)) return;

      const currentRect = path0.getBoundingClientRect();
      const curCenterX = (currentRect.left + currentRect.right) / 2;
      const curCenterY = (currentRect.top + currentRect.bottom) / 2;
      const tolerance = 2;

      const inDir = [];
      for (const cand of candidates) {
        if (cand === path0) continue;
        const r = cand.getBoundingClientRect();
        let match = false;
        let gap = 0;
        let overlapsPerp = false;
        let perpOffset = 0;

        if (dir === 'right' && r.left >= currentRect.right - tolerance) {
          match = true;
          gap = Math.max(0, r.left - currentRect.right);
          overlapsPerp = Math.min(r.bottom, currentRect.bottom) > Math.max(r.top, currentRect.top);
          perpOffset = Math.abs((r.top + r.bottom) / 2 - curCenterY);
        } else if (dir === 'left' && r.right <= currentRect.left + tolerance) {
          match = true;
          gap = Math.max(0, currentRect.left - r.right);
          overlapsPerp = Math.min(r.bottom, currentRect.bottom) > Math.max(r.top, currentRect.top);
          perpOffset = Math.abs((r.top + r.bottom) / 2 - curCenterY);
        } else if (dir === 'down' && r.top >= currentRect.bottom - tolerance) {
          match = true;
          gap = Math.max(0, r.top - currentRect.bottom);
          overlapsPerp = Math.min(r.right, currentRect.right) > Math.max(r.left, currentRect.left);
          perpOffset = Math.abs((r.left + r.right) / 2 - curCenterX);
        } else if (dir === 'up' && r.bottom <= currentRect.top + tolerance) {
          match = true;
          gap = Math.max(0, currentRect.top - r.bottom);
          overlapsPerp = Math.min(r.right, currentRect.right) > Math.max(r.left, currentRect.left);
          perpOffset = Math.abs((r.left + r.right) / 2 - curCenterX);
        }

        if (match) {
          inDir.push({ cand, gap, overlapsPerp, perpOffset });
        }
      }

      if (!inDir.length) {
        return;
      }

      const aligned = inDir.filter(item => item.overlapsPerp);
      let best = null;
      if (aligned.length) {
        aligned.sort((a, b) => a.gap - b.gap || a.perpOffset - b.perpOffset);
        best = aligned[0].cand;
      } else {
        const w = 2.5;
        inDir.sort((a, b) => (a.gap + w * a.perpOffset) - (b.gap + w * b.perpOffset));
        best = inDir[0].cand;
      }

      if (best) {
        e.preventDefault();
        candidates.forEach(c => c.setAttribute('tabindex', c === best ? '0' : '-1'));
        best.focus();
        best.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    });
  }

  // =========================================================
  // 3. DIÀLEG SELECTOR D'EMOJIS (TALE-BOT)
  // =========================================================
  function extractFirstEmojiOrGrapheme(raw) {
    const trimmed = (raw || '').trim();
    if (!trimmed) return '';
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const seg = new Intl.Segmenter('ca', { granularity: 'grapheme' });
      const first = seg.segment(trimmed)[Symbol.iterator]().next();
      if (first && first.value && first.value.segment) {
        return first.value.segment;
      }
    }
    return Array.from(trimmed)[0] || '';
  }

  function renderEmojiDialogOptions() {
    if (!emojiCategoriesEl) return;
    emojiCategoriesEl.innerHTML = '';

    EMOJI_CATEGORIES.forEach((cat) => {
      const section = document.createElement('section');
      section.className = 'sim-emoji-category';

      const heading = document.createElement('h3');
      heading.className = 'sim-emoji-category-title';
      heading.textContent = cat.title;
      section.appendChild(heading);

      const grid = document.createElement('div');
      grid.className = 'sim-emoji-grid';

      cat.emojis.forEach((emoji) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sim-emoji-option-btn';
        if (emoji === state.selectedEmoji) {
          btn.classList.add('is-selected');
        }
        btn.textContent = emoji;
        btn.setAttribute('aria-label', `Selecciona l'emoji ${emoji}`);
        btn.addEventListener('click', () => {
          selectEmojiForBoard(emoji);
        });
        grid.appendChild(btn);
      });

      section.appendChild(grid);
      emojiCategoriesEl.appendChild(section);
    });
  }

  function openEmojiDialog() {
    if (!emojiDialog) return;
    renderEmojiDialogOptions();
    if (typeof emojiDialog.showPopover === 'function') {
      try {
        if (!emojiDialog.matches(':popover-open')) {
          emojiDialog.showPopover();
        }
      } catch (_) {}
    } else {
      emojiDialog.classList.add(':popover-open');
    }
    if (emojiCustomInput) {
      setTimeout(() => emojiCustomInput.focus(), 20);
    }
  }

  function closeEmojiDialog() {
    if (!emojiDialog) return;
    if (typeof emojiDialog.hidePopover === 'function') {
      try {
        if (emojiDialog.matches(':popover-open')) {
          emojiDialog.hidePopover();
        }
      } catch (_) {}
    } else {
      emojiDialog.classList.remove(':popover-open');
    }
  }

  function selectEmojiForBoard(emoji) {
    if (!emoji) return;
    state.selectedEmoji = emoji;
    if (emojiToolIconEl) {
      emojiToolIconEl.textContent = emoji;
    }
    setMatTool('emoji');
    renderEmojiDialogOptions();
    playTone(620, 75, 'sine', 0.06);
    closeEmojiDialog();
  }

  if (emojiDialog) {
    renderEmojiDialogOptions();
    emojiDialog.addEventListener('beforetoggle', (e) => {
      if (e.newState === 'open') {
        renderEmojiDialogOptions();
      }
    });
  }

  // Fallback per a Invoker Commands (commandfor / command) en navegadors sense suport natiu
  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    document.addEventListener('click', (event) => {
      const btn = event.composedPath().find((el) => el && el.matches && el.matches('button[commandfor="sim-emoji-dialog"]'));
      if (!btn) return;
      const cmd = btn.getAttribute('command');
      if (cmd === 'show-popover') {
        openEmojiDialog();
      } else if (cmd === 'hide-popover') {
        closeEmojiDialog();
      }
    });
  }

  if (emojiCustomApplyBtn && emojiCustomInput) {
    const applyCustomEmoji = () => {
      const chosen = extractFirstEmojiOrGrapheme(emojiCustomInput.value);
      if (!chosen) return;
      emojiCustomInput.value = '';
      selectEmojiForBoard(chosen);
    };

    emojiCustomApplyBtn.addEventListener('click', applyCustomEmoji);
    emojiCustomInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCustomEmoji();
      }
    });
  }

  // =========================================================
  // 4. RENDERITZACIÓ DEL TAPÍS 6x6 I EL ROBOT
  // =========================================================
  function cellName(col, row) {
    return `${COLS[col] || 'A'}${row + 1}`;
  }

  function hasObstacle(col, row) {
    return state.obstacles.some(o => o.col === col && o.row === row);
  }

  function getOidCell(col, row) {
    return state.oidCells.find(c => c.col === col && c.row === row) || null;
  }

  function renderGridCells() {
    gridCellsEl.innerHTML = '';
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        const idx = row * GRID_SIZE + col;
        const coord = cellName(col, row);
        const isStart = state.startPose.col === col && state.startPose.row === row;
        const isFlag = state.flag && state.flag.col === col && state.flag.row === row;
        const isObs = hasObstacle(col, row);
        const isBox = state.robot === 'tale-bot' && state.box && state.box.col === col && state.box.row === row;
        const oid = getOidCell(col, row);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sim-cell';
        if (isStart) btn.classList.add('is-start');
        if (isFlag) btn.classList.add('is-flag');
        if (isObs) btn.classList.add('is-obstacle');
        if (oid) btn.classList.add('is-oid');
        btn.setAttribute('tabindex', idx === state.activeCellIndex ? '0' : '-1');

        const parts = [`Casella ${coord}`];
        if (isStart) parts.push('Inici del robot');
        if (isFlag) parts.push('Bandera de destinació');
        if (isObs) parts.push('Obstacle físic');
        if (isBox) parts.push('Objecte lleuger per transportar');
        if (oid) parts.push(`Emoji: ${oid.icon}`);
        btn.setAttribute('aria-label', parts.join(', '));

        let itemEmoji = '';
        if (isObs) itemEmoji = '🚧';
        else if (isBox) itemEmoji = '📦';
        else if (isFlag) itemEmoji = '🚩';
        else if (oid) itemEmoji = oid.icon;

        btn.innerHTML = `
          <span class="sim-cell-coord" aria-hidden="true">${coord}</span>
          ${itemEmoji ? `<span class="sim-cell-item" aria-hidden="true">${itemEmoji}</span>` : ''}
          ${oid && oid.label && !isFlag && !isObs ? `<span class="sim-cell-oid-label" aria-hidden="true">${oid.label}</span>` : ''}
          ${isStart ? '<span class="sim-cell-StartTag" aria-hidden="true">INICI</span>' : ''}
        `;

        btn.addEventListener('click', () => {
          state.activeCellIndex = idx;
          onCellClicked(col, row);
        });

        gridCellsEl.appendChild(btn);
      }
    }
  }

  function updateRobotActor() {
    robotActor.style.setProperty('--col', String(state.pose.col));
    robotActor.style.setProperty('--row', String(state.pose.row));
    robotActor.style.setProperty('--angle', `${state.pose.visualAngle}deg`);
    robotActor.style.setProperty('--step-ms', `${Math.max(180, state.stepMs - 60)}ms`);

    tbArmsEl.hidden = !(state.robot === 'tale-bot' && state.tb.armsEnabled);
    markerBadgeEl.hidden = !state.penEnabled;
  }

  function clearCanvas() {
    drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
  }

  function drawSegment(fromCol, fromRow, toCol, toRow) {
    if (!state.penEnabled) return;
    const cellW = drawCanvas.width / GRID_SIZE;
    const x1 = (fromCol + 0.5) * cellW;
    const y1 = (fromRow + 0.5) * cellW;
    const x2 = (toCol + 0.5) * cellW;
    const y2 = (toRow + 0.5) * cellW;

    drawCtx.save();
    drawCtx.strokeStyle = state.penColor;
    drawCtx.fillStyle = state.penColor;
    drawCtx.lineWidth = 8;
    drawCtx.lineCap = 'round';
    drawCtx.lineJoin = 'round';

    if (fromCol === toCol && fromRow === toRow) {
      drawCtx.beginPath();
      drawCtx.arc(x1, y1, 4.5, 0, Math.PI * 2);
      drawCtx.fill();
    } else {
      drawCtx.beginPath();
      drawCtx.moveTo(x1, y1);
      drawCtx.lineTo(x2, y2);
      drawCtx.stroke();
    }
    drawCtx.restore();
  }

  function onCellClicked(col, row) {
    if (state.isRunning) stopExecution();
    const coord = cellName(col, row);

    if (state.matTool === 'robot') {
      if (hasObstacle(col, row)) {
        setStatus(`La casella ${coord} té un obstacle. Retira'l abans de situar-hi el robot.`, 'warning');
        return;
      }
      if (state.startPose.col === col && state.startPose.row === row) {
        state.startPose.dir = (state.startPose.dir + 1) % 4;
      } else {
        state.startPose.col = col;
        state.startPose.row = row;
      }
      resetRobotToStart(false);
    } else if (state.matTool === 'flag') {
      if (state.flag && state.flag.col === col && state.flag.row === row) {
        state.flag = null;
      } else {
        state.obstacles = state.obstacles.filter(o => !(o.col === col && o.row === row));
        state.flag = { col, row };
      }
    } else if (state.matTool === 'obstacle') {
      if (state.startPose.col === col && state.startPose.row === row) {
        setStatus(`No pots posar un obstacle damunt de la casella d'inici (${coord}).`, 'warning');
        return;
      }
      if (hasObstacle(col, row)) {
        state.obstacles = state.obstacles.filter(o => !(o.col === col && o.row === row));
      } else {
        if (state.flag && state.flag.col === col && state.flag.row === row) state.flag = null;
        if (state.box && state.box.col === col && state.box.row === row) state.box = null;
        state.obstacles.push({ col, row });
      }
    } else if (state.matTool === 'box') {
      if (state.box && state.box.col === col && state.box.row === row) {
        state.box = null;
        state.initialBox = null;
      } else {
        state.obstacles = state.obstacles.filter(o => !(o.col === col && o.row === row));
        state.box = { col, row };
        state.initialBox = { col, row };
        if (!state.tb.armsEnabled) {
          state.tb.armsEnabled = true;
          updateAccessoryButtons();
        }
      }
    } else if (state.matTool === 'emoji') {
      const existing = getOidCell(col, row);
      if (existing && existing.icon === state.selectedEmoji) {
        state.oidCells = state.oidCells.filter(c => !(c.col === col && c.row === row));
      } else {
        state.obstacles = state.obstacles.filter(o => !(o.col === col && o.row === row));
        if (state.box && state.box.col === col && state.box.row === row) state.box = null;
        if (state.flag && state.flag.col === col && state.flag.row === row) state.flag = null;
        state.oidCells = state.oidCells.filter(c => !(c.col === col && c.row === row));
        state.oidCells.push({
          col,
          row,
          icon: state.selectedEmoji
        });
      }
    }

    playTone(580, 70, 'sine', 0.05);
    renderGridCells();
    updateRobotActor();
  }

  function resetRobotToStart(clearStepCursor = true) {
    if (state.isRunning) stopExecution();
    state.pose.col = state.startPose.col;
    state.pose.row = state.startPose.row;
    state.pose.dir = state.startPose.dir;
    state.pose.visualAngle = DIRS[state.startPose.dir].angle;
    if (state.initialBox) {
      state.box = { col: state.initialBox.col, row: state.initialBox.row };
    }
    if (clearStepCursor) {
      state.stepCursor = 0;
      state.hasStartedStepping = false;
      state.infinitePassCount = 0;
      state.tb.activeLed = -1;
      state.tb.activeRepLed = -1;
      state.cs.activeMainSlot = -1;
      state.cs.activeFuncSlot = -1;
    }
    showBubble('');
    renderGridCells();
    updateRobotActor();
    renderTaleBotUI();
    renderCodingSetUI();
  }

  // =========================================================
  // 5. GENERADOR D'SVG DE BLOCS TANGIBLES (Des de sim/svg/)
  // =========================================================
  const svgDataEl = document.getElementById('sim-svg-data');
  const SIM_SVGS = svgDataEl ? JSON.parse(svgDataEl.textContent) : { codingSet: {}, taleBot: {} };

  function renderCSInstructionSVG(type) {
    const entry = SIM_SVGS.codingSet[type] || SIM_SVGS.codingSet.forward;
    return entry ? entry.svg : '';
  }

  function renderCSNumberSVG(num) {
    const entry = SIM_SVGS.codingSet[`num-${num}`];
    return entry ? entry.svg : '';
  }

  function renderTopPegSVG() {
    const entry = SIM_SVGS.codingSet['peg-top'];
    return entry ? entry.svg : '';
  }

  function renderBottomPegSVG() {
    const entry = SIM_SVGS.codingSet['peg-bottom'];
    return entry ? entry.svg : '';
  }

  function buildTangibleSVG(blocks, isTaleBot, activeIndex = -1) {
    if (!blocks.length) return '';
    const width = blocks.length * 84 + 16;
    const desc = blocks.map(b => `${LABELS[b.type] || b.type}${b.number ? ` (${b.number})` : ''}`).join(' → ');
    const pieces = blocks.map((block, i) => {
      const x = i * 84 + 10;
      const isCurrent = i === activeIndex;
      if (isTaleBot) {
        const keySvg = SIM_SVGS.taleBot[block.type] || SIM_SVGS.taleBot.forward;
        const inner = keySvg ? keySvg.inner : '';
        const highlight = isCurrent
          ? '<circle cx="32" cy="32" r="30" fill="none" stroke="#0f172a" stroke-width="3.5"/>'
          : '';
        const conn = i < blocks.length - 1
          ? '<path d="M69 32h10m-4-4 4 4-4 4" stroke="#64748b" stroke-width="2" fill="none"/>'
          : '';
        return `<g transform="translate(${x} 8)"><g transform="scale(0.8)">${inner}</g>${highlight}${conn}</g>`;
      }
      const tileSvg = SIM_SVGS.codingSet[block.type] || SIM_SVGS.codingSet.forward;
      const numSvg = block.number && SIM_SVGS.codingSet[`num-${block.number}`]
        ? `<g transform="translate(0 61)">${SIM_SVGS.codingSet[`num-${block.number}`].inner}</g>`
        : '';
      return `<g transform="translate(${x} 8)">${tileSvg ? tileSvg.inner : ''}${numSvg}</g>`;
    }).join('');

    return `<svg xmlns="http://www.w3.org/2000/svg" class="tangible-sequence" role="img" aria-label="${desc}" width="${width}" height="108" viewBox="0 0 ${width} 108">${pieces}</svg>`;
  }

  // =========================================================
  // 6. INTERFÍCIE DE TALE-BOT PRO (FINS A 256 ORDRES EN FILES DE 8 LEDS)
  // =========================================================
  function renderTaleBotUI() {
    const seq = state.tb.sequence;
    const isInfinite = state.tb.repeat === 5;

    if (state.tb.repeat === 0) {
      tbRepeatBadge.hidden = true;
      tbRepeatBadge.textContent = '';
      tbRepeatBadge.classList.remove('is-infinite');
    } else {
      tbRepeatBadge.hidden = false;
      tbRepeatBadge.textContent = isInfinite ? '∞' : `×${state.tb.repeat}`;
      tbRepeatBadge.classList.toggle('is-infinite', isInfinite);
    }

    if (tbLedsContainer) {
      const totalRows = Math.min(MAX_TB_COMMANDS / 8, Math.floor(seq.length / 8) + 1);
      const totalSlots = totalRows * 8;
      tbLedsContainer.innerHTML = '';

      let scrollTargetEl = null;
      for (let idx = 0; idx < totalSlots; idx++) {
        const cmd = seq[idx];
        const led = document.createElement('span');
        led.className = 'sim-tb-led';
        led.setAttribute('data-led-index', String(idx));

        if (cmd) {
          led.classList.add('is-lit');
          led.style.setProperty('--led-color', TB_COLORS[cmd] || '#ff3b47');
          led.setAttribute('title', `#${idx + 1}: ${LABELS[cmd] || cmd}`);
        }
        if (idx === state.tb.activeLed) {
          led.classList.add('is-current');
          scrollTargetEl = led;
        } else if (state.tb.activeLed === -1 && idx === seq.length) {
          scrollTargetEl = led;
        }

        tbLedsContainer.appendChild(led);
      }

      if (scrollTargetEl && totalRows > 1) {
        scrollTargetEl.scrollIntoView({ block: 'nearest' });
      }
    }

    tbRepeatLeds.forEach((led, idx) => {
      const lit = isInfinite || (state.tb.repeat > 0 && idx < state.tb.repeat);
      const isBlinking = lit && idx === state.tb.activeRepLed;
      led.classList.toggle('is-lit', lit && !isInfinite);
      led.classList.toggle('is-infinite', isInfinite);
      led.classList.toggle('is-blinking', isBlinking);
    });
  }

  function addTaleBotCommand(cmd) {
    if (state.isRunning) stopExecution();
    if (state.tb.sequence.length >= MAX_TB_COMMANDS) {
      playTone(220, 180, 'sawtooth', 0.08);
      setStatus(`Memòria completa (${MAX_TB_COMMANDS} ordres). Esborra una ordre o buida-les totes.`, 'warning');
      return;
    }
    state.tb.sequence.push(cmd);
    state.stepCursor = 0;
    const freqMap = { forward: 523, back: 392, right: 659, left: 587, record: 740, dance: 880 };
    playTone(freqMap[cmd] || 520, 95, 'sine', 0.08);
    renderTaleBotUI();
  }

  function deleteLastTaleBotCommand() {
    if (state.isRunning) stopExecution();
    if (!state.tb.sequence.length) return;
    state.tb.sequence.pop();
    state.stepCursor = 0;
    playTone(330, 100, 'triangle', 0.08);
    renderTaleBotUI();
  }

  function clearAllTaleBotCommands() {
    if (state.isRunning) stopExecution();
    state.tb.sequence = [];
    state.tb.repeat = 0;
    state.stepCursor = 0;
    state.hasStartedStepping = false;
    state.infinitePassCount = 0;
    state.tb.activeLed = -1;
    state.tb.activeRepLed = -1;
    playMelody([[440, 0, 90], [330, 95, 140]]);
    renderTaleBotUI();
  }

  // Gestió del botó físic Delete (X) amb mesura de temps (<1s vs >1s)
  let holdStartTime = 0;
  let holdInterval = null;
  if (tbClearHoldBtn) {
    const startHold = () => {
      if (holdStartTime) return;
      holdStartTime = performance.now();
      tbHoldBar.style.inlineSize = '0%';
      holdInterval = setInterval(() => {
        const elapsed = performance.now() - holdStartTime;
        const pct = Math.min(100, (elapsed / 950) * 100);
        tbHoldBar.style.inlineSize = `${pct}%`;
        if (elapsed >= 950) {
          clearInterval(holdInterval);
          holdInterval = null;
          holdStartTime = 0;
          tbHoldBar.style.inlineSize = '0%';
          clearAllTaleBotCommands();
        }
      }, 40);
    };

    const endHold = () => {
      if (!holdStartTime) return;
      const elapsed = performance.now() - holdStartTime;
      clearInterval(holdInterval);
      holdInterval = null;
      holdStartTime = 0;
      tbHoldBar.style.inlineSize = '0%';
      if (elapsed < 950) {
        deleteLastTaleBotCommand();
      }
    };

    tbClearHoldBtn.addEventListener('pointerdown', startHold);
    tbClearHoldBtn.addEventListener('pointerup', endHold);
    tbClearHoldBtn.addEventListener('pointercancel', endHold);
    tbClearHoldBtn.addEventListener('pointerleave', endHold);
    tbClearHoldBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        deleteLastTaleBotCommand();
      }
    });
  }

  // =========================================================
  // 7. INTERFÍCIE DE MATATALAB CODING SET (TAULER FÍSIC 3×6)
  // =========================================================
  function acceptsNumberBlock(type) {
    return type === 'forward' || type === 'back' || type === 'loop';
  }

  function resolveNumberValue(numStr) {
    if (!numStr) return 1;
    if (numStr === 'random') {
      return Math.floor(Math.random() * 5) + 2; // 2..6
    }
    return parseInt(numStr, 10) || 1;
  }

  function renderCodingSetUI() {
    csMainSlotsEl.innerHTML = '';
    const slots = state.cs.boardSlots;

    slots.forEach((slotData, idx) => {
      const rowNum = Math.floor(idx / 6) + 1;
      const colNum = (idx % 6) + 1;
      const cell = document.createElement('div');
      cell.className = 'sim-cs-cell';
      cell.setAttribute('role', 'gridcell');

      const isSelected = state.cs.selectedSlot === idx;
      const isExecuting = state.cs.activeMainSlot === idx || state.cs.activeFuncSlot === idx;
      if (isSelected) cell.classList.add('is-selected');
      if (isExecuting) cell.classList.add('is-executing');

      // Ranura superior (fitxa d'instrucció)
      const topBtn = document.createElement('button');
      topBtn.type = 'button';
      topBtn.className = 'sim-cs-peg-top';
      topBtn.setAttribute('tabindex', isSelected ? '0' : '-1');

      if (slotData) {
        topBtn.classList.add('is-filled');
        topBtn.draggable = true;
        topBtn.setAttribute(
          'aria-label',
          `Fila ${rowNum} casella ${colNum}: ${LABELS[slotData.type]}${slotData.number ? ` (${slotData.number})` : ''}. Clica per retirar.`
        );
        topBtn.innerHTML = renderCSInstructionSVG(slotData.type);
        topBtn.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', JSON.stringify({ kind: 'move-slot', fromIndex: idx }));
        });
      } else {
        topBtn.setAttribute('aria-label', `Fila ${rowNum} casella ${colNum} buida`);
        topBtn.innerHTML = renderTopPegSVG();
      }

      topBtn.addEventListener('click', () => {
        if (state.isRunning) stopExecution();
        if (slotData) {
          slots[idx] = null;
          state.cs.selectedSlot = idx;
          playTone(330, 80, 'triangle', 0.06);
        } else {
          state.cs.selectedSlot = idx;
          playTone(500, 60, 'sine', 0.05);
        }
        renderCodingSetUI();
      });

      // Ranura inferior (fitxa numèrica 2-5 o dau)
      const bottomBtn = document.createElement('button');
      bottomBtn.type = 'button';
      bottomBtn.className = 'sim-cs-peg-bottom';
      bottomBtn.setAttribute('tabindex', '-1');

      if (slotData && slotData.number) {
        bottomBtn.classList.add('is-filled');
        bottomBtn.setAttribute('aria-label', `Bloc numèric ${slotData.number} a fila ${rowNum} casella ${colNum}. Clica per canviar o retirar.`);
        bottomBtn.innerHTML = renderCSNumberSVG(slotData.number);
      } else {
        bottomBtn.setAttribute(
          'aria-label',
          slotData && acceptsNumberBlock(slotData.type)
            ? `Afegeix bloc numèric (2 a 5 o dau) sota ${LABELS[slotData.type]}`
            : `Clavilla inferior fila ${rowNum} casella ${colNum}`
        );
        bottomBtn.innerHTML = renderBottomPegSVG();
      }

      bottomBtn.addEventListener('click', () => {
        if (state.isRunning) stopExecution();
        state.cs.selectedSlot = idx;
        if (!slotData) {
          renderCodingSetUI();
          return;
        }
        if (!acceptsNumberBlock(slotData.type)) {
          playTone(230, 140, 'sawtooth', 0.07);
          setStatus(
            `Els blocs numèrics només s'utilitzen sota Endavant, Enrere i Inici del bucle.`,
            'warning'
          );
          renderCodingSetUI();
          return;
        }
        const cycle = ['', '2', '3', '4', '5', 'random'];
        const nextIdx = (cycle.indexOf(slotData.number || '') + 1) % cycle.length;
        slotData.number = cycle[nextIdx];
        playTone(620, 75, 'sine', 0.07);
        renderCodingSetUI();
      });

      // Suport Drag & Drop sobre la casella del tauler 3×6
      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        cell.classList.add('is-dragover');
      });
      cell.addEventListener('dragleave', () => {
        cell.classList.remove('is-dragover');
      });
      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        cell.classList.remove('is-dragover');
        if (state.isRunning) stopExecution();
        try {
          const payload = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');
          if (payload.kind === 'add-block' && payload.type) {
            slots[idx] = { type: payload.type, number: payload.type === 'loop' ? '2' : '' };
            state.cs.selectedSlot = idx;
            playTone(540, 85, 'sine', 0.08);
            renderCodingSetUI();
          } else if (payload.kind === 'move-slot' && typeof payload.fromIndex === 'number') {
            if (payload.fromIndex !== idx && slots[payload.fromIndex]) {
              const temp = slots[idx];
              slots[idx] = slots[payload.fromIndex];
              slots[payload.fromIndex] = temp;
              state.cs.selectedSlot = idx;
              playTone(540, 85, 'sine', 0.08);
              renderCodingSetUI();
            }
          } else if (payload.kind === 'set-num' && typeof payload.num === 'string') {
            state.cs.selectedSlot = idx;
            applyCodingSetNumberToSlot(idx, payload.num);
          }
        } catch (_) {}
      });

      cell.appendChild(topBtn);
      cell.appendChild(bottomBtn);
      csMainSlotsEl.appendChild(cell);
    });
  }

  function addCodingSetBlock(type) {
    if (state.isRunning) stopExecution();
    const slots = state.cs.boardSlots;
    let targetIdx = state.cs.selectedSlot;

    if (targetIdx < 0 || targetIdx >= slots.length || slots[targetIdx] !== null) {
      let found = -1;
      for (let i = Math.max(0, targetIdx); i < slots.length; i++) {
        if (slots[i] === null) {
          found = i;
          break;
        }
      }
      if (found === -1) {
        found = slots.findIndex(s => s === null);
      }
      targetIdx = found;
    }

    if (targetIdx === -1) {
      playTone(230, 150, 'sawtooth', 0.08);
      setStatus('El tauler de 3×6 caselles és ple.', 'warning');
      return;
    }

    slots[targetIdx] = { type, number: type === 'loop' ? '2' : '' };
    state.cs.selectedSlot = targetIdx;
    state.stepCursor = 0;
    playTone(540, 85, 'sine', 0.08);
    renderCodingSetUI();
  }

  function applyCodingSetNumberToSlot(slotIdx, numStr) {
    if (state.isRunning) stopExecution();
    const slots = state.cs.boardSlots;
    let idx = slotIdx;
    let target = slots[idx];

    if (!target) {
      for (let i = slots.length - 1; i >= 0; i--) {
        if (slots[i] && acceptsNumberBlock(slots[i].type)) {
          idx = i;
          target = slots[i];
          break;
        }
      }
    }

    if (!target) {
      setStatus('Col·loca primer una fitxa Endavant, Enrere o Inici del bucle al tauler.', 'warning');
      return;
    }
    if (!acceptsNumberBlock(target.type)) {
      playTone(230, 150, 'sawtooth', 0.08);
      setStatus(
        `Els blocs numèrics només s'utilitzen sota Endavant, Enrere i Inici del bucle.`,
        'warning'
      );
      return;
    }
    target.number = numStr;
    state.cs.selectedSlot = idx;
    playTone(640, 80, 'sine', 0.08);
    renderCodingSetUI();
  }

  function applyCodingSetNumber(numStr) {
    applyCodingSetNumberToSlot(state.cs.selectedSlot, numStr);
  }

  // =========================================================
  // 8. COMPILACIÓ I EXECUCIÓ PAS A PAS DELS PROGRAMES
  // =========================================================
  function compileTaleBotQueue() {
    if (!state.tb.sequence.length) {
      return { error: 'Introdueix almenys una ordre als botons de Tale-Bot abans de prémer Play.' };
    }
    const isInfinite = state.tb.repeat === 5;
    const reps = isInfinite ? 1 : Math.max(1, state.tb.repeat);
    const steps = [];
    for (let rep = 0; rep < reps; rep++) {
      state.tb.sequence.forEach((cmd, ledIndex) => {
        steps.push({
          type: cmd,
          ledIndex,
          repLedIndex: state.tb.repeat === 0 ? -1 : rep % 4,
          repIndex: rep + 1,
          totalReps: isInfinite ? Infinity : reps
        });
      });
    }
    return { steps, isInfinite };
  }

  function compileCodingSetQueue() {
    const allFilled = state.cs.boardSlots
      .map((slot, idx) => (slot ? { ...slot, slotIndex: idx } : null))
      .filter(Boolean);

    if (!allFilled.length) {
      return { error: 'Col·loca almenys una fitxa al tauler 3×6 abans de prémer Play.' };
    }

    let mainFilled = [];
    let funcFilled = [];
    const defPos = allFilled.findIndex(b => b.type === 'define');

    if (defPos === -1) {
      mainFilled = allFilled;
    } else {
      const defSlotIndex = allFilled[defPos].slotIndex;
      const defRowEnd = Math.floor(defSlotIndex / 6) * 6 + 5;
      const hasBlocksAfterDefRow = allFilled.some(b => b.slotIndex > defRowEnd);
      const hasBlocksBeforeDef = defPos > 0;

      if (!hasBlocksBeforeDef && hasBlocksAfterDefRow) {
        funcFilled = allFilled
          .filter(b => b.slotIndex > defSlotIndex && b.slotIndex <= defRowEnd && b.type !== 'define')
          .map(b => ({ ...b, funcIndex: b.slotIndex }));
        mainFilled = allFilled.filter(b => b.slotIndex > defRowEnd);
      } else {
        mainFilled = allFilled.slice(0, defPos);
        funcFilled = allFilled
          .slice(defPos + 1)
          .filter(b => b.type !== 'define')
          .map(b => ({ ...b, funcIndex: b.slotIndex }));
      }
    }

    if (!mainFilled.length) {
      return { error: 'Falta el programa principal al tauler (només hi ha la definició de funció).' };
    }

    const steps = [];
    let i = 0;
    while (i < mainFilled.length) {
      const block = mainFilled[i];
      if (block.type === 'end') {
        return { error: `Error al tauler (casella #${block.slotIndex + 1}): hi ha una fitxa «Fi del bucle» sense «Inici del bucle» abans.` };
      }
      if (block.type === 'loop') {
        const endIdx = mainFilled.findIndex((b, j) => j > i && b.type === 'end');
        if (endIdx === -1) {
          return { error: `Falta la fitxa «Fi del bucle» per tancar el bucle iniciat a la casella #${block.slotIndex + 1}.` };
        }
        const inner = mainFilled.slice(i + 1, endIdx);
        if (inner.some(b => b.type === 'loop')) {
          return { error: 'El Coding Set no admet bucles niuats dins d’un altre bucle.' };
        }
        const count = block.number ? resolveNumberValue(block.number) : 2;
        for (let r = 0; r < count; r++) {
          for (const innerBlock of inner) {
            const exp = expandSingleCSBlock(innerBlock, funcFilled);
            if (exp.error) return exp;
            steps.push(...exp.steps);
          }
        }
        i = endIdx + 1;
        continue;
      }

      const exp = expandSingleCSBlock(block, funcFilled);
      if (exp.error) return exp;
      steps.push(...exp.steps);
      i += 1;
    }

    return { steps };
  }

  function expandSingleCSBlock(block, funcFilled) {
    if (block.type === 'call') {
      if (!funcFilled.length) {
        return { error: `Has col·locat «Crida funció» a la casella #${block.slotIndex + 1}, però no hi ha cap funció definida amb la fitxa «fn».` };
      }
      const fnSteps = [];
      for (const fBlock of funcFilled) {
        const reps = acceptsNumberBlock(fBlock.type) && fBlock.number ? resolveNumberValue(fBlock.number) : 1;
        for (let k = 0; k < reps; k++) {
          fnSteps.push({
            type: fBlock.type,
            mainSlot: block.slotIndex,
            funcSlot: fBlock.funcIndex
          });
        }
      }
      return { steps: fnSteps };
    }

    const reps = acceptsNumberBlock(block.type) && block.number ? resolveNumberValue(block.number) : 1;
    const out = [];
    for (let k = 0; k < reps; k++) {
      out.push({
        type: block.type,
        mainSlot: block.slotIndex,
        funcSlot: -1,
        subStep: reps > 1 ? `${k + 1}/${reps}` : ''
      });
    }
    return { steps: out };
  }

  async function executeSingleStep(step) {
    if (state.robot === 'tale-bot') {
      state.tb.activeLed = step.ledIndex;
      state.tb.activeRepLed = typeof step.repLedIndex === 'number' ? step.repLedIndex : -1;
      renderTaleBotUI();
    } else {
      state.cs.activeMainSlot = step.mainSlot;
      state.cs.activeFuncSlot = step.funcSlot;
      renderCodingSetUI();
    }

    let actionType = step.type;
    if (actionType === 'random') {
      const pool = ['forward', 'back', 'left', 'right'];
      actionType = pool[Math.floor(Math.random() * pool.length)];
      showBubble(`🎲 Moviment aleatori: ${LABELS[actionType]}`, state.stepMs);
    }

    if (actionType === 'forward' || actionType === 'back') {
      const sign = actionType === 'forward' ? 1 : -1;
      const d = DIRS[state.pose.dir];
      const nextCol = state.pose.col + d.dx * sign;
      const nextRow = state.pose.row + d.dy * sign;

      if (nextCol < 0 || nextCol >= GRID_SIZE || nextRow < 0 || nextRow >= GRID_SIZE) {
        robotActor.classList.add('is-bumped');
        playTone(170, 260, 'sawtooth', 0.1);
        setStatus(`Atenció! El robot ha arribat a la vora del tapís a ${cellName(state.pose.col, state.pose.row)} i s'ha aturat.`, 'error');
        setTimeout(() => robotActor.classList.remove('is-bumped'), 380);
        return false;
      }

      if (hasObstacle(nextCol, nextRow)) {
        robotActor.classList.add('is-bumped');
        playTone(160, 280, 'sawtooth', 0.1);
        const obsCoord = cellName(nextCol, nextRow);
        setStatus(
          state.robot === 'coding-set'
            ? `El MatataBot ha topat amb l'obstacle de ${obsCoord}!`
            : `Tale-Bot ha topat amb l'obstacle de ${obsCoord}!`,
          'error'
        );
        setTimeout(() => robotActor.classList.remove('is-bumped'), 380);
        return false;
      }

      // Si hi ha l'objecte lleuger 📦 a la casella següent (només Tale-Bot)
      if (state.robot === 'tale-bot' && state.box && state.box.col === nextCol && state.box.row === nextRow) {
        if (state.tb.armsEnabled && sign === 1) {
          const boxNextCol = nextCol + d.dx;
          const boxNextRow = nextRow + d.dy;
          if (
            boxNextCol < 0 || boxNextCol >= GRID_SIZE ||
            boxNextRow < 0 || boxNextRow >= GRID_SIZE ||
            hasObstacle(boxNextCol, boxNextRow)
          ) {
            robotActor.classList.add('is-bumped');
            playTone(180, 220, 'sawtooth', 0.09);
            setStatus('L’objecte transportat 📦 no pot avançar més enllà d’aquesta casella.', 'warning');
            setTimeout(() => robotActor.classList.remove('is-bumped'), 380);
            return false;
          }
          state.box = { col: boxNextCol, row: boxNextRow };
        } else {
          robotActor.classList.add('is-bumped');
          playTone(180, 220, 'sawtooth', 0.09);
          setStatus('Activa els «Braços» de Tale-Bot i avança de cara per empènyer la caixa 📦!', 'warning');
          setTimeout(() => robotActor.classList.remove('is-bumped'), 380);
          return false;
        }
      }

      const prevCol = state.pose.col;
      const prevRow = state.pose.row;
      state.pose.col = nextCol;
      state.pose.row = nextRow;
      drawSegment(prevCol, prevRow, nextCol, nextRow);
      renderGridCells();
      updateRobotActor();
      playTone(sign === 1 ? 523 : 415, 115, 'sine', 0.08);

      // Comprovar emoji a la casella
      const oid = getOidCell(nextCol, nextRow);
      if (oid) {
        showBubble(oid.speech ? `${oid.icon} ${oid.speech}` : oid.icon, Math.max(1500, state.stepMs * 1.8));
        playMelody([[659, 60, 90], [784, 160, 120]]);
      }
    } else if (actionType === 'right' || actionType === 'left') {
      const delta = actionType === 'right' ? 1 : 3;
      state.pose.dir = (state.pose.dir + delta) % 4;
      state.pose.visualAngle += actionType === 'right' ? 90 : -90;
      drawSegment(state.pose.col, state.pose.row, state.pose.col, state.pose.row);
      updateRobotActor();
      playTone(actionType === 'right' ? 659 : 587, 105, 'triangle', 0.08);
    } else if (actionType === 'record') {
      const msg = (tbVoiceInput && tbVoiceInput.value.trim()) || 'Hola, sóc el conill!';
      showBubble(`🎙️ «${msg}»`, Math.max(1800, state.stepMs * 2));
      playMelody([[523, 0, 100], [659, 110, 100], [784, 220, 140]]);
    } else if (actionType === 'music') {
      showBubble('🎵 ♪ Melodia predefinida de MatataBot ♫', Math.max(1800, state.stepMs * 2));
      playMelody([[523, 0, 110], [587, 120, 110], [659, 240, 110], [784, 360, 160]]);
    } else if (actionType === 'dance') {
      robotActor.classList.add('is-dancing');
      showBubble('💃 Dansa predefinida!', Math.max(1600, state.stepMs * 1.8));
      playMelody([[523, 0, 90], [659, 100, 90], [587, 200, 90], [784, 300, 140]]);
      setTimeout(() => robotActor.classList.remove('is-dancing'), state.stepMs - 40);
    }

    return true;
  }

  function checkVictoryCondition() {
    if (!state.flag) return;
    const onFlag = state.pose.col === state.flag.col && state.pose.row === state.flag.row;
    const boxOnFlag = state.box && state.box.col === state.flag.col && state.box.row === state.flag.row;

    if (onFlag || boxOnFlag) {
      playMelody([[523, 0, 110], [659, 120, 110], [784, 240, 110], [1046, 360, 220]]);
      showBubble('🎉 Objectiu assolit! Molt bona feina!', 2800);
    }
  }

  function updatePlayButtonsState() {
    tbPlayBtn.classList.toggle('is-running', state.isRunning);
    if (tbPlayLabel) tbPlayLabel.textContent = state.isRunning ? 'Atura' : 'Play';
    csPlayBtn.classList.toggle('is-running', state.isRunning);
  }

  function stopExecution() {
    state.runToken += 1;
    state.isRunning = false;
    state.tb.activeLed = -1;
    state.tb.activeRepLed = -1;
    robotActor.classList.remove('is-dancing');
    updatePlayButtonsState();
    renderTaleBotUI();
  }

  async function runFullProgram() {
    if (state.isRunning) {
      stopExecution();
      return;
    }

    const compiled = state.robot === 'tale-bot' ? compileTaleBotQueue() : compileCodingSetQueue();
    if (compiled.error) {
      playTone(210, 180, 'sawtooth', 0.09);
      setStatus(compiled.error, 'warning');
      return;
    }

    resetRobotToStart(true);
    clearCanvas();
    drawSegment(state.pose.col, state.pose.row, state.pose.col, state.pose.row);

    const token = ++state.runToken;
    state.isRunning = true;
    updatePlayButtonsState();

    if (compiled.isInfinite) {
      let pass = 0;
      while (token === state.runToken) {
        for (let i = 0; i < compiled.steps.length; i++) {
          if (token !== state.runToken) return;
          const ok = await executeSingleStep({
            ...compiled.steps[i],
            repLedIndex: pass % 4
          });
          if (!ok) {
            stopExecution();
            return;
          }
          await new Promise(r => setTimeout(r, state.stepMs));
        }
        pass += 1;
      }
      return;
    }

    for (let i = 0; i < compiled.steps.length; i++) {
      if (token !== state.runToken) return;
      const ok = await executeSingleStep(compiled.steps[i]);
      if (!ok) {
        stopExecution();
        return;
      }
      await new Promise(r => setTimeout(r, state.stepMs));
    }

    if (token !== state.runToken) return;
    stopExecution();
    state.tb.activeLed = -1;
    state.tb.activeRepLed = -1;
    state.cs.activeMainSlot = -1;
    state.cs.activeFuncSlot = -1;
    renderTaleBotUI();
    renderCodingSetUI();
    checkVictoryCondition();
  }

  async function runNextSingleStep() {
    if (state.isRunning) stopExecution();
    const compiled = state.robot === 'tale-bot' ? compileTaleBotQueue() : compileCodingSetQueue();
    if (compiled.error) {
      playTone(210, 180, 'sawtooth', 0.09);
      setStatus(compiled.error, 'warning');
      return;
    }

    if (state.stepCursor === 0 && !state.hasStartedStepping) {
      resetRobotToStart(true);
      clearCanvas();
      drawSegment(state.pose.col, state.pose.row, state.pose.col, state.pose.row);
      state.hasStartedStepping = true;
    } else if (state.stepCursor >= compiled.steps.length) {
      if (compiled.isInfinite) {
        state.stepCursor = 0;
        state.infinitePassCount += 1;
      } else {
        resetRobotToStart(true);
        clearCanvas();
        drawSegment(state.pose.col, state.pose.row, state.pose.col, state.pose.row);
        state.hasStartedStepping = true;
      }
    }

    const baseStep = compiled.steps[state.stepCursor];
    const step = compiled.isInfinite
      ? { ...baseStep, repLedIndex: state.infinitePassCount % 4 }
      : baseStep;

    const ok = await executeSingleStep(step);
    if (!ok) {
      state.stepCursor = 0;
      state.hasStartedStepping = false;
      state.infinitePassCount = 0;
      state.tb.activeRepLed = -1;
      renderTaleBotUI();
      return;
    }
    state.stepCursor += 1;
    if (state.stepCursor >= compiled.steps.length && !compiled.isInfinite) {
      checkVictoryCondition();
    }
  }

  // =========================================================
  // 9. GESTIÓ D'ACCESSORIS I CANVI DE ROBOT
  // =========================================================
  function updateAccessoryButtons() {
    togglePenBtn.setAttribute('aria-pressed', String(state.penEnabled));
    markerBadgeEl.hidden = !state.penEnabled;

    toggleSoundBtn.setAttribute('aria-pressed', String(state.soundEnabled));
    if (soundIconEl) soundIconEl.textContent = state.soundEnabled ? '🔊' : '🔇';

    tbToggleArmsBtn.setAttribute('aria-pressed', String(state.tb.armsEnabled));
    tbArmsEl.hidden = !(state.robot === 'tale-bot' && state.tb.armsEnabled);
  }

  function switchRobot(robotSlug, pushUrl = true) {
    if (!['tale-bot', 'coding-set'].includes(robotSlug)) robotSlug = 'tale-bot';
    if (state.isRunning) stopExecution();
    state.robot = robotSlug;

    heroEl.setAttribute('data-active-robot', robotSlug);
    rootEl.setAttribute('data-robot', robotSlug);

    tabs.forEach(tab => {
      const isSelected = tab.getAttribute('data-robot-tab') === robotSlug;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');
    });

    panels.forEach(panel => {
      panel.hidden = panel.getAttribute('data-robot-panel') !== robotSlug;
    });

    tbOnlyTools.forEach(btn => {
      btn.hidden = robotSlug !== 'tale-bot';
    });
    if (robotSlug !== 'tale-bot') {
      state.box = null;
      state.initialBox = null;
      if (state.matTool === 'box') {
        setMatTool('robot');
      }
    }

    updateAccessoryButtons();
    resetRobotToStart(true);

    if (pushUrl && window.history && window.history.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set('robot', robotSlug);
      window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    }
  }

  function setMatTool(toolName) {
    state.matTool = toolName;
    matToolBtns.forEach(btn => {
      const active = btn.getAttribute('data-mat-tool') === toolName;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  // =========================================================
  // 10. ESDEVENIMENTS D'INTERFÍCIE I TECLAT
  // =========================================================
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      switchRobot(tab.getAttribute('data-robot-tab'), true);
    });
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const nextIdx = (idx + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
        const nextTab = tabs[nextIdx];
        switchRobot(nextTab.getAttribute('data-robot-tab'), true);
        nextTab.focus();
      }
    });
  });

  matToolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const toolName = btn.getAttribute('data-mat-tool');
      setMatTool(toolName);
      if (toolName === 'emoji') {
        openEmojiDialog();
      }
    });
  });

  rotateStartBtn.addEventListener('click', () => {
    state.startPose.dir = (state.startPose.dir + 3) % 4;
    resetRobotToStart(false);
    playTone(540, 70, 'sine', 0.06);
  });

  resetRobotBtn.addEventListener('click', () => {
    resetRobotToStart(true);
    playTone(480, 80, 'sine', 0.06);
  });

  togglePenBtn.addEventListener('click', () => {
    state.penEnabled = !state.penEnabled;
    updateAccessoryButtons();
    playTone(state.penEnabled ? 660 : 440, 80, 'sine', 0.06);
  });

  colorSwatches.forEach(sw => {
    sw.addEventListener('click', () => {
      state.penColor = sw.getAttribute('data-pen-color') || '#ea580c';
      state.penEnabled = true;
      colorSwatches.forEach(b => {
        const active = b === sw;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      updateAccessoryButtons();
      playTone(680, 60, 'sine', 0.05);
    });
  });

  clearDrawingBtn.addEventListener('click', () => {
    if (state.isRunning) stopExecution();
    clearCanvas();
    state.obstacles = [];
    state.box = null;
    state.initialBox = null;
    state.oidCells = [];
    state.flag = null;
    resetRobotToStart(true);
    playTone(400, 80, 'triangle', 0.06);
  });

  toggleSoundBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    updateAccessoryButtons();
    if (state.soundEnabled) playTone(600, 80, 'sine', 0.07);
  });

  speedSelect.addEventListener('change', () => {
    state.stepMs = Number(speedSelect.value) || 520;
    updateRobotActor();
  });

  // Esdeveniments Tale-Bot
  tbCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => addTaleBotCommand(btn.getAttribute('data-tb-cmd')));
  });

  tbRepeatBtn.addEventListener('click', () => {
    if (state.isRunning) stopExecution();
    state.tb.repeat = (state.tb.repeat + 1) % 6;
    playTone(580 + state.tb.repeat * 55, 85, 'sine', 0.08);
    renderTaleBotUI();
  });

  tbDeleteLastBtn.addEventListener('click', deleteLastTaleBotCommand);
  tbDeleteAllBtn.addEventListener('click', clearAllTaleBotCommands);
  tbPlayBtn.addEventListener('click', runFullProgram);
  tbStepBtn.addEventListener('click', runNextSingleStep);

  tbTestVoiceBtn.addEventListener('click', () => {
    const msg = (tbVoiceInput && tbVoiceInput.value.trim()) || 'Hola, sóc el conill!';
    showBubble(`🎙️ «${msg}»`, 2400);
    playMelody([[523, 0, 90], [659, 100, 90], [784, 200, 130]]);
  });

  tbToggleArmsBtn.addEventListener('click', () => {
    state.tb.armsEnabled = !state.tb.armsEnabled;
    updateAccessoryButtons();
  });

  // Esdeveniments Coding Set (Paleta SVG + Drag & Drop + Tauler 3×6)
  csAddBtns.forEach(btn => {
    const type = btn.getAttribute('data-cs-add');
    btn.addEventListener('click', () => addCodingSetBlock(type));
    btn.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify({ kind: 'add-block', type }));
    });
  });

  csNumBtns.forEach(btn => {
    const num = btn.getAttribute('data-cs-num') || '';
    btn.addEventListener('click', () => applyCodingSetNumber(num));
    if (num) {
      btn.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ kind: 'set-num', num }));
      });
    }
  });

  if (csClearMainBtn) {
    csClearMainBtn.addEventListener('click', () => {
      if (state.isRunning) stopExecution();
      state.cs.boardSlots = Array.from({ length: 18 }, () => null);
      state.cs.selectedSlot = 0;
      state.cs.activeMainSlot = -1;
      state.cs.activeFuncSlot = -1;
      playMelody([[440, 0, 80], [330, 90, 120]]);
      renderCodingSetUI();
    });
  }

  csPlayBtn.addEventListener('click', runFullProgram);
  csStepBtn.addEventListener('click', runNextSingleStep);

  // Spatial navigation per al tapís 6x6 i el tauler 3x6
  setupSpatialNavigation(gridCellsEl);
  setupSpatialNavigation(csMainSlotsEl);

  // Inicialització segons ?robot=tale-bot | coding-set
  const initialParams = new URLSearchParams(window.location.search);
  const initialRobot = initialParams.get('robot') === 'coding-set' ? 'coding-set' : 'tale-bot';
  switchRobot(initialRobot, false);
})();
