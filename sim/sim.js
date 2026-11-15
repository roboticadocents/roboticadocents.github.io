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
    forward: '#ff625f',
    back: '#a4e83b',
    right: '#f3e529',
    left: '#4db9f4',
    record: '#00c9cd',
    dance: '#d94bc8'
  };

  const CS_COLORS = {
    forward: '#8fc32c',
    back: '#8fc32c',
    right: '#8fc32c',
    left: '#8fc32c',
    loop: '#006c3d',
    end: '#006c3d',
    define: '#f4df13',
    call: '#f4df13',
    random: '#922785',
    music: '#922785',
    dance: '#922785'
  };

  const CHALLENGES = {
    'tale-bot': [
      {
        id: 'tb-free',
        optionLabel: 'Mode lliure · Mapa OID',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 4, row: 1 },
        obstacles: [],
        box: null,
        oidCells: [
          { col: 1, row: 2, icon: '🐰', label: 'Conill', speech: 'OID: Cau del conill!' },
          { col: 3, row: 2, icon: '🍄', label: 'Bolet', speech: 'OID: Bolet màgic!' },
          { col: 4, row: 4, icon: '🦊', label: 'Rabosa', speech: 'OID: Hola, rabosa!' }
        ],
        pen: false,
        arms: false,
        oid: true,
        demo: {
          seq: ['forward', 'forward', 'right', 'forward', 'forward', 'forward', 'left', 'forward'],
          repeat: 1
        }
      },
      {
        id: 'tb-primeres-passes',
        optionLabel: '1 · Recta i gir',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 3, row: 2 },
        obstacles: [{ col: 1, row: 1 }, { col: 4, row: 3 }],
        box: null,
        oidCells: [],
        pen: false,
        arms: false,
        oid: false,
        demo: {
          seq: ['forward', 'forward', 'right', 'forward', 'forward'],
          repeat: 1
        }
      },
      {
        id: 'tb-veu-oid',
        optionLabel: '2 · Mapa OID i veu',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 3, row: 2 },
        obstacles: [{ col: 2, row: 4 }],
        box: null,
        oidCells: [
          { col: 1, row: 2, icon: '🐰', label: 'Conill', speech: 'OID: Sóc el conill!' },
          { col: 3, row: 2, icon: '🏡', label: 'Cabana', speech: 'OID: Cabana del bosc!' },
          { col: 4, row: 1, icon: '🌲', label: 'Avet', speech: 'OID: Avet alt!' }
        ],
        pen: false,
        arms: false,
        oid: true,
        demo: {
          seq: ['forward', 'forward', 'record', 'right', 'forward', 'forward', 'dance'],
          repeat: 1
        }
      },
      {
        id: 'tb-dibuix-quadrat',
        optionLabel: '3 · Dibuix quadrat (×4)',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 1, row: 4 },
        obstacles: [],
        box: null,
        oidCells: [],
        pen: true,
        arms: false,
        oid: false,
        demo: {
          seq: ['forward', 'forward', 'right'],
          repeat: 4
        }
      },
      {
        id: 'tb-transport-depuracio',
        optionLabel: '4 · Transport i Clear',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 1, row: 1 },
        obstacles: [{ col: 2, row: 2 }, { col: 0, row: 2 }],
        box: { col: 1, row: 3 },
        oidCells: [],
        pen: false,
        arms: true,
        oid: false,
        initialSeq: ['forward', 'forward', 'left'],
        demo: {
          seq: ['forward', 'forward', 'forward'],
          repeat: 1
        }
      }
    ],
    'coding-set': [
      {
        id: 'cs-free',
        optionLabel: 'Mode lliure · Tauler',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 4, row: 1 },
        obstacles: [],
        pen: false,
        demo: {
          main: [
            { type: 'forward', number: '3' },
            { type: 'right', number: '' },
            { type: 'forward', number: '3' }
          ],
          func: []
        }
      },
      {
        id: 'cs-primeres-passes',
        optionLabel: '1 · Primeres passes',
        start: { col: 1, row: 3, dir: 0 },
        flag: { col: 2, row: 2 },
        obstacles: [{ col: 1, row: 1 }],
        pen: false,
        demo: {
          main: [
            { type: 'forward', number: '' },
            { type: 'right', number: '' },
            { type: 'forward', number: '' }
          ],
          func: []
        }
      },
      {
        id: 'cs-blocs-numerics',
        optionLabel: '2 · Blocs numèrics',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 3, row: 1 },
        obstacles: [{ col: 2, row: 3 }, { col: 3, row: 3 }],
        pen: false,
        demo: {
          main: [
            { type: 'forward', number: '3' },
            { type: 'right', number: '' },
            { type: 'forward', number: '2' }
          ],
          func: []
        }
      },
      {
        id: 'cs-bucles',
        optionLabel: '3 · Bucle quadrat',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 1, row: 4 },
        obstacles: [],
        pen: true,
        demo: {
          main: [
            { type: 'loop', number: '4' },
            { type: 'forward', number: '2' },
            { type: 'right', number: '' },
            { type: 'end', number: '' }
          ],
          func: []
        }
      },
      {
        id: 'cs-obstacles-funcions',
        optionLabel: '4 · Funcions i obstacles',
        start: { col: 1, row: 4, dir: 0 },
        flag: { col: 3, row: 2 },
        obstacles: [{ col: 1, row: 2 }, { col: 2, row: 1 }, { col: 3, row: 4 }],
        pen: false,
        demo: {
          main: [
            { type: 'call', number: '' },
            { type: 'call', number: '' }
          ],
          func: [
            { type: 'forward', number: '' },
            { type: 'right', number: '' },
            { type: 'forward', number: '' },
            { type: 'left', number: '' }
          ]
        }
      }
    ]
  };

  const rootEl = document.querySelector('[data-sim-workspace]');
  if (!rootEl) return;

  const heroEl = document.querySelector('[data-sim-hero]');
  const tabs = Array.from(document.querySelectorAll('[data-robot-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-robot-panel]'));
  const challengeSelect = document.querySelector('[data-challenge-select]');
  const loadDemoBtn = document.querySelector('[data-load-demo]');
  const guideLink = document.querySelector('[data-robot-guide-link]');

  const gridCellsEl = document.querySelector('[data-grid-cells]');
  const drawCanvas = document.querySelector('[data-draw-canvas]');
  const drawCtx = drawCanvas.getContext('2d');
  const robotActor = document.querySelector('[data-robot-actor]');
  const tbArmsEl = document.querySelector('[data-tb-arms]');
  const markerBadgeEl = document.querySelector('[data-marker-badge]');
  const speechBubbleEl = document.querySelector('[data-speech-bubble]');
  const poseCellEl = document.querySelector('[data-pose-cell]');
  const poseDirEl = document.querySelector('[data-pose-dir]');

  const matToolBtns = Array.from(document.querySelectorAll('[data-mat-tool]'));
  const tbOnlyTools = Array.from(document.querySelectorAll('[data-tb-only]'));
  const rotateStartBtn = document.querySelector('[data-rotate-start]');
  const resetRobotBtn = document.querySelector('[data-reset-robot]');

  const togglePenBtn = document.querySelector('[data-toggle-pen]');
  const colorSwatches = Array.from(document.querySelectorAll('[data-pen-color]'));
  const clearDrawingBtn = document.querySelector('[data-clear-drawing]');
  const toggleSoundBtn = document.querySelector('[data-toggle-sound]');
  const soundIconEl = document.querySelector('[data-sound-icon]');
  const speedSelect = document.querySelector('[data-speed-select]');
  const statusBanner = document.querySelector('[data-status-banner]');
  const statusText = document.querySelector('[data-status-text]');

  // Controls Tale-Bot
  const tbCountEl = document.querySelector('[data-tb-count]');
  const tbLeds = Array.from(document.querySelectorAll('[data-led-index]'));
  const tbRepeatBtn = document.querySelector('[data-tb-repeat]');
  const tbRepeatBadge = document.querySelector('[data-tb-repeat-badge]');
  const tbRepeatSummary = document.querySelector('[data-tb-repeat-summary]');
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
  const tbToggleOidBtn = document.querySelector('[data-tb-toggle-oid]');
  const tbToggleArmsBtn = document.querySelector('[data-tb-toggle-arms]');
  const tbSequenceStrip = document.querySelector('[data-tb-sequence-strip]');

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
    challengeId: 'tb-free',
    matTool: 'robot',
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
    compiledQueue: [],
    // Estat Tale-Bot
    tb: {
      sequence: ['forward', 'forward', 'right', 'forward'],
      repeat: 1,
      oidEnabled: true,
      armsEnabled: false,
      activeLed: -1
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
    statusBanner.setAttribute('data-tone', tone);
    statusText.textContent = message;
  }

  // =========================================================
  // 2. SPATIAL NAVIGATION (Fletxes del teclat sobre graelles)
  // =========================================================
  function setupSpatialNavigation(container) {
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
        // Sense candidat en eixa direcció: preservem l'scroll natiu sense preventDefault()
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
  // 3. RENDERITZACIÓ DEL TAPÍS 6x6 I EL ROBOT
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
        const isBox = state.box && state.box.col === col && state.box.row === row;
        const oid = state.robot === 'tale-bot' && state.tb.oidEnabled ? getOidCell(col, row) : null;

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
        if (oid) parts.push(`Casella interactiva OID: ${oid.label}`);
        btn.setAttribute('aria-label', parts.join(', '));

        let itemEmoji = '';
        if (isObs) itemEmoji = '🚧';
        else if (isBox) itemEmoji = '📦';
        else if (isFlag) itemEmoji = '🚩';
        else if (oid) itemEmoji = oid.icon;

        btn.innerHTML = `
          <span class="sim-cell-coord" aria-hidden="true">${coord}</span>
          ${itemEmoji ? `<span class="sim-cell-item" aria-hidden="true">${itemEmoji}</span>` : ''}
          ${oid && !isFlag && !isObs ? `<span class="sim-cell-oid-label" aria-hidden="true">${oid.label}</span>` : ''}
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

    const coord = cellName(state.pose.col, state.pose.row);
    const dirInfo = DIRS[state.pose.dir] || DIRS[0];
    poseCellEl.innerHTML = `<strong>${coord}</strong>`;
    poseDirEl.innerHTML = `<strong>${dirInfo.label}</strong>`;

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
      // Un gir sobre si mateix només deixa el punt de recolzament del retolador, no un costat
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
      setStatus(`Punt d'inici situat a ${coord} (${DIRS[state.startPose.dir].label}).`, 'info');
    } else if (state.matTool === 'flag') {
      if (state.flag && state.flag.col === col && state.flag.row === row) {
        state.flag = null;
        setStatus(`Bandera retirada de ${coord}.`, 'info');
      } else {
        state.obstacles = state.obstacles.filter(o => !(o.col === col && o.row === row));
        state.flag = { col, row };
        setStatus(`Bandera de destinació col·locada a ${coord}.`, 'info');
      }
    } else if (state.matTool === 'obstacle') {
      if (state.startPose.col === col && state.startPose.row === row) {
        setStatus(`No pots posar un obstacle damunt de la casella d'inici (${coord}).`, 'warning');
        return;
      }
      if (hasObstacle(col, row)) {
        state.obstacles = state.obstacles.filter(o => !(o.col === col && o.row === row));
        setStatus(`Obstacle retirat de ${coord}.`, 'info');
      } else {
        if (state.flag && state.flag.col === col && state.flag.row === row) state.flag = null;
        if (state.box && state.box.col === col && state.box.row === row) state.box = null;
        state.obstacles.push({ col, row });
        setStatus(`Obstacle físic col·locat a ${coord}.`, 'info');
      }
    } else if (state.matTool === 'box') {
      if (state.box && state.box.col === col && state.box.row === row) {
        state.box = null;
        state.initialBox = null;
        setStatus(`Objecte lleuger retirat de ${coord}.`, 'info');
      } else {
        state.obstacles = state.obstacles.filter(o => !(o.col === col && o.row === row));
        state.box = { col, row };
        state.initialBox = { col, row };
        if (!state.tb.armsEnabled) {
          state.tb.armsEnabled = true;
          updateAccessoryButtons();
        }
        setStatus(`Objecte lleuger 📦 col·locat a ${coord} (braços de transport activats).`, 'info');
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
      state.tb.activeLed = -1;
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
  // 4. GENERADOR D'SVG DE BLOCS TANGIBLES (Idèntic als tutorials)
  // =========================================================
  function blockIconSVG(type) {
    const straight = '<path d="M32 47V18m-12 12 12-12 12 12"/>';
    if (type === 'forward') return straight;
    if (type === 'back') return `<g transform="rotate(180 32 32)">${straight}</g>`;
    if (type === 'right' || type === 'left') {
      const turn = '<path d="M29 21h17m-10-10 10 10-10 10"/><g fill="white" stroke="none"><circle cx="18" cy="21" r="2.5"/><circle cx="15" cy="30" r="2.5"/><circle cx="21" cy="38" r="2.5"/><circle cx="27" cy="46" r="2.5"/></g>';
      return type === 'left' ? `<g transform="translate(64 0) scale(-1 1)">${turn}</g>` : turn;
    }
    if (type === 'loop' || type === 'end') {
      return '<path d="M42 19a18 18 0 0 0-25 23m5-13-5 13-8-9M22 45a18 18 0 0 0 25-23m-5 13 5-13 8 9"/>';
    }
    if (type === 'record') {
      return '<rect x="27" y="15" width="10" height="22" rx="5"/><path d="M21 30v3a11 11 0 0 0 22 0v-3M32 44v7m-7 0h14"/>';
    }
    if (type === 'music') {
      return '<path d="M26 43V20l20-4v23M26 24l20-4"/><ellipse cx="20" cy="44" rx="6" ry="4"/><ellipse cx="40" cy="40" rx="6" ry="4"/>';
    }
    if (type === 'dance' || type === 'random') {
      return `<circle cx="32" cy="15" r="4" fill="currentColor" stroke="none"/><path d="M32 24v15m0-12-13-7m13 7 13-10M32 39l-11 12m11-12 12 10"/>${type === 'random' ? '<path d="M45 33h9m-4-4 4 4-4 4" stroke-width="3"/>' : ''}`;
    }
    if ( type === 'define' || type === 'call') {
      return `<text x="32" y="43" text-anchor="middle" fill="white" stroke="none" font-family="Plus Jakarta Sans, sans-serif" font-style="italic" font-size="30" font-weight="700">fn</text>${type === 'call' ? '<path d="M17 45a23 23 0 1 1 31 0M12 39l5 6 5-5" stroke-width="2"/>' : ''}`;
    }
    return straight;
  }

  function renderCSInstructionSVG(type) {
    const fill = CS_COLORS[type] || '#8fc32c';
    return `<svg viewBox="0 0 64 64" aria-hidden="true" class="sim-cs-block-svg"><path d="M5 0H59Q64 0 64 5V59Q64 64 59 64H39L35 60H29L25 64H5Q0 64 0 59V5Q0 0 5 0Z" fill="${fill}"/><g color="white" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${blockIconSVG(type)}</g></svg>`;
  }

  function renderCSNumberSVG(num) {
    return `<svg viewBox="0 0 64 28" aria-hidden="true" class="sim-cs-num-svg"><rect width="64" height="28" rx="4" fill="#12aff0"/><text x="32" y="20" text-anchor="middle" fill="white" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="20">${num}</text></svg>`;
  }

  function renderTopPegSVG() {
    return `<svg viewBox="0 0 64 64" aria-hidden="true" class="sim-cs-peg-svg"><path d="M22 32c0-5.8 4.6-10.4 10.2-10.4 4.1 0 6.8 2.2 10.6 6.7 2.2 2.5 2.2 4.9 0 7.4-3.8 4.5-6.5 6.7-10.6 6.7C26.6 42.4 22 37.8 22 32Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2.2"/></svg>`;
  }

  function renderBottomPegSVG() {
    return `<svg viewBox="0 0 64 28" aria-hidden="true" class="sim-cs-peg-svg"><circle cx="32" cy="14" r="4.6" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/></svg>`;
  }

  function buildTangibleSVG(blocks, isTaleBot, activeIndex = -1) {
    if (!blocks.length) return '';
    const width = blocks.length * 84 + 16;
    const desc = blocks.map(b => `${LABELS[b.type] || b.type}${b.number ? ` (${b.number})` : ''}`).join(' → ');
    const pieces = blocks.map((block, i) => {
      const x = i * 84 + 10;
      const isCurrent = i === activeIndex;
      const fill = isTaleBot
        ? (block.type === 'record' || block.type === 'dance' ? '#ffffff' : TB_COLORS[block.type] || '#ff625f')
        : (CS_COLORS[block.type] || '#8fc32c');
      const strokeAttr = isCurrent ? 'stroke="#0f172a" stroke-width="4"' : 'stroke="#cbd5e1" stroke-width="1.5"';
      const shape = isTaleBot
        ? `<rect x="0" y="0" width="64" height="64" rx="22" fill="${fill}" ${strokeAttr}/>`
        : `<path d="M5 0H59Q64 0 64 5V59Q64 64 59 64H39L35 60H29L25 64H5Q0 64 0 59V5Q0 0 5 0Z" fill="${fill}" ${isCurrent ? 'stroke="#0f172a" stroke-width="3.5"' : ''}/>`;
      const numSVG = block.number
        ? `<rect y="66" width="64" height="26" rx="4" fill="#12aff0"/><text x="32" y="85" text-anchor="middle" fill="white" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="19">${block.number}</text>`
        : '';
      const conn = isTaleBot && i < blocks.length - 1
        ? '<path d="M69 32h10m-4-4 4 4-4 4" stroke="#64748b" stroke-width="2" fill="none"/>'
        : '';
      const iconStroke = isTaleBot && block.type === 'record'
        ? '#00c9cd'
        : isTaleBot && block.type === 'dance'
          ? '#d94bc8'
          : 'white';
      return `<g transform="translate(${x} 8)">${shape}<g color="${iconStroke}" fill="none" stroke="${iconStroke}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${blockIconSVG(block.type)}</g>${numSVG}${conn}</g>`;
    }).join('');

    return `<svg xmlns="http://www.w3.org/2000/svg" class="tangible-sequence" role="img" aria-label="${desc}" width="${width}" height="108" viewBox="0 0 ${width} 108">${pieces}</svg>`;
  }

  // =========================================================
  // 5. INTERFÍCIE DE TALE-BOT PRO
  // =========================================================
  function renderTaleBotUI() {
    const seq = state.tb.sequence;
    tbCountEl.textContent = `${seq.length} / 8`;
    tbRepeatBadge.textContent = `×${state.tb.repeat}`;
    tbRepeatSummary.textContent = `×${state.tb.repeat}`;

    tbLeds.forEach((led, idx) => {
      const cmd = seq[idx];
      led.classList.toggle('is-lit', Boolean(cmd));
      led.classList.toggle('is-current', idx === state.tb.activeLed);
      if (cmd) {
        led.style.setProperty('--led-color', TB_COLORS[cmd] || '#ff625f');
      } else {
        led.style.removeProperty('--led-color');
      }
    });

    if (!seq.length) {
      tbSequenceStrip.innerHTML = '<span class="sim-sequence-empty">—</span>';
    } else {
      const blocks = seq.map(type => ({ type }));
      tbSequenceStrip.innerHTML = buildTangibleSVG(blocks, true, state.tb.activeLed);
    }
  }

  function addTaleBotCommand(cmd) {
    if (state.isRunning) stopExecution();
    if (state.tb.sequence.length >= 8) {
      playTone(220, 180, 'sawtooth', 0.08);
      setStatus('Memòria de mostra completa (8 indicadors LED). Usa Delete (X) per esborrar una ordre o buidar-les totes.', 'warning');
      return;
    }
    state.tb.sequence.push(cmd);
    state.stepCursor = 0;
    const freqMap = { forward: 523, back: 392, right: 659, left: 587, record: 740, dance: 880 };
    playTone(freqMap[cmd] || 520, 95, 'sine', 0.08);
    renderTaleBotUI();
    setStatus(`Ordre afegida: ${LABELS[cmd]} (${state.tb.sequence.length}/8).`, 'info');
  }

  function deleteLastTaleBotCommand() {
    if (state.isRunning) stopExecution();
    if (!state.tb.sequence.length) {
      setStatus('La seqüència de Tale-Bot ja està buida.', 'info');
      return;
    }
    const removed = state.tb.sequence.pop();
    state.stepCursor = 0;
    playTone(330, 100, 'triangle', 0.08);
    renderTaleBotUI();
    setStatus(`Pulsació curta (<1 s) de Delete: s'ha esborrat l'última ordre (${LABELS[removed]}).`, 'info');
  }

  function clearAllTaleBotCommands() {
    if (state.isRunning) stopExecution();
    state.tb.sequence = [];
    state.tb.repeat = 1;
    state.stepCursor = 0;
    state.tb.activeLed = -1;
    playMelody([[440, 0, 90], [330, 95, 140]]);
    renderTaleBotUI();
    setStatus('Pulsació llarga (>1 s) de Delete: s’han apagat tots els indicadors i la memòria ha quedat neta.', 'info');
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
  // 6. INTERFÍCIE DE MATATALAB CODING SET (TAULER FÍSIC 3×6)
  // =========================================================
  function acceptsNumberBlock(type) {
    return type === 'forward' || type === 'back' || type === 'loop';
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
          setStatus(`Fitxa retirada (fila ${rowNum}, casella ${colNum}).`, 'info');
        } else {
          state.cs.selectedSlot = idx;
          playTone(500, 60, 'sine', 0.05);
        }
        renderCodingSetUI();
      });

      // Ranura inferior (fitxa numèrica 2-5)
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
            ? `Afegeix bloc numèric (2 a 5) sota ${LABELS[slotData.type]}`
            : ` Clavilla inferior fila ${rowNum} casella ${colNum}`
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
        const cycle = ['', '2', '3', '4', '5'];
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
      // Busquem la primera casella buida a partir de la seleccionada, o des de l'inici
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
      // Si la casella seleccionada és buida, apliquem a l'última casella ocupada
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
  // 7. COMPILACIÓ I EXECUCIÓ PAS A PAS DELS PROGRAMES
  // =========================================================
  function compileTaleBotQueue() {
    if (!state.tb.sequence.length) {
      return { error: 'Introdueix almenys una ordre als botons de Tale-Bot abans de prémer Play.' };
    }
    const steps = [];
    for (let rep = 0; rep < state.tb.repeat; rep++) {
      state.tb.sequence.forEach((cmd, ledIndex) => {
        steps.push({
          type: cmd,
          ledIndex,
          repIndex: rep + 1,
          totalReps: state.tb.repeat
        });
      });
    }
    return { steps };
  }

  function compileCodingSetQueue() {
    const allFilled = state.cs.boardSlots
      .map((slot, idx) => (slot ? { ...slot, slotIndex: idx } : null))
      .filter(Boolean);

    if (!allFilled.length) {
      return { error: 'Col·loca almenys una fitxa al tauler 3×6 abans de prémer Play.' };
    }

    // Separem el programa principal i la definició de funció (si hi ha bloc 'define')
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
        // Si 'define' s'ha posat a una fila superior i el programa és a les files següents
        funcFilled = allFilled
          .filter(b => b.slotIndex > defSlotIndex && b.slotIndex <= defRowEnd && b.type !== 'define')
          .map(b => ({ ...b, funcIndex: b.slotIndex }));
        mainFilled = allFilled.filter(b => b.slotIndex > defRowEnd);
      } else {
        // Cas habitual: el programa principal és abans de 'define' i la funció és a partir de 'define'
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
        const count = parseInt(block.number || '2', 10);
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
        const reps = acceptsNumberBlock(fBlock.type) && fBlock.number ? parseInt(fBlock.number, 10) : 1;
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

    const reps = acceptsNumberBlock(block.type) && block.number ? parseInt(block.number, 10) : 1;
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
            ? `El MatataBot ha topat amb l'obstacle de ${obsCoord}! El kit base no esquiva obstacles sol: depura la ruta al tauler.`
            : `Tale-Bot ha topat amb l'obstacle de ${obsCoord}! Depura la seqüència i torna-ho a provar.`,
          'error'
        );
        setTimeout(() => robotActor.classList.remove('is-bumped'), 380);
        return false;
      }

      // Si hi ha l'objecte lleuger 📦 a la casella següent
      if (state.box && state.box.col === nextCol && state.box.row === nextRow) {
        if (state.robot === 'tale-bot' && state.tb.armsEnabled && sign === 1) {
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
          setStatus('Activa els «Braços de transport» de Tale-Bot i avança de cara per empènyer l’objecte lleuger 📦!', 'warning');
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
      setStatus(
        `${LABELS[actionType]}${step.subStep ? ` (${step.subStep})` : ''} → avança a la casella ${cellName(nextCol, nextRow)}.`,
        'info'
      );

      // Comprovar lectura OID si és Tale-Bot
      if (state.robot === 'tale-bot' && state.tb.oidEnabled) {
        const oid = getOidCell(nextCol, nextRow);
        if (oid) {
          showBubble(`${oid.icon} ${oid.speech}`, Math.max(1600, state.stepMs * 2));
          playMelody([[659, 60, 90], [784, 160, 120]]);
        }
      }
    } else if (actionType === 'right' || actionType === 'left') {
      const delta = actionType === 'right' ? 1 : 3;
      state.pose.dir = (state.pose.dir + delta) % 4;
      state.pose.visualAngle += actionType === 'right' ? 90 : -90;
      drawSegment(state.pose.col, state.pose.row, state.pose.col, state.pose.row);
      updateRobotActor();
      playTone(actionType === 'right' ? 659 : 587, 105, 'triangle', 0.08);
      setStatus(
        `${LABELS[actionType]} (90° sobre ${cellName(state.pose.col, state.pose.row)}, sense canviar de casella). Ara mira cap a ${DIRS[state.pose.dir].label}.`,
        'info'
      );
    } else if (actionType === 'record') {
      const msg = (tbVoiceInput && tbVoiceInput.value.trim()) || 'Hola, sóc el conill!';
      showBubble(`🎙️ «${msg}»`, Math.max(1800, state.stepMs * 2));
      playMelody([[523, 0, 100], [659, 110, 100], [784, 220, 140]]);
      setStatus(`Reproduint veu gravada: «${msg}»`, 'info');
    } else if (actionType === 'music') {
      showBubble('🎵 ♪ Melodia predefinida de MatataBot ♫', Math.max(1800, state.stepMs * 2));
      playMelody([[523, 0, 110], [587, 120, 110], [659, 240, 110], [784, 360, 160]]);
      setStatus('MatataBot reprodueix una melodia predefinida.', 'info');
    } else if (actionType === 'dance') {
      robotActor.classList.add('is-dancing');
      showBubble('💃 Dansa predefinida!', Math.max(1600, state.stepMs * 1.8));
      playMelody([[523, 0, 90], [659, 100, 90], [587, 200, 90], [784, 300, 140]]);
      setStatus('El robot executa un patró de dansa incorporat.', 'info');
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
      const coord = cellName(state.flag.col, state.flag.row);
      showBubble('🎉 Objectiu assolit! Molt bona feina!', 2800);
      setStatus(
        boxOnFlag
          ? `🎉 Repte superat! Has transportat l'objecte lleuger 📦 fins a la bandera a ${coord}!`
          : `🎉 Repte superat! El robot ha arribat a la bandera de destinació a ${coord}!`,
        'success'
      );
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
    robotActor.classList.remove('is-dancing');
    updatePlayButtonsState();
  }

  async function runFullProgram() {
    if (state.isRunning) {
      stopExecution();
      setStatus('Execució aturada manualment.', 'info');
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

    if (state.stepCursor === 0 || state.stepCursor >= compiled.steps.length) {
      resetRobotToStart(true);
      clearCanvas();
      drawSegment(state.pose.col, state.pose.row, state.pose.col, state.pose.row);
    }

    const step = compiled.steps[state.stepCursor];
    const ok = await executeSingleStep(step);
    if (!ok) {
      state.stepCursor = 0;
      return;
    }
    state.stepCursor += 1;
    if (state.stepCursor >= compiled.steps.length) {
      checkVictoryCondition();
    }
  }

  // =========================================================
  // 8. GESTIÓ D'ESCENARIS, REPTES I CANVI DE ROBOT
  // =========================================================
  function updateAccessoryButtons() {
    togglePenBtn.setAttribute('aria-pressed', String(state.penEnabled));
    markerBadgeEl.hidden = !state.penEnabled;

    toggleSoundBtn.setAttribute('aria-pressed', String(state.soundEnabled));
    if (soundIconEl) soundIconEl.textContent = state.soundEnabled ? '🔊' : '🔇';

    tbToggleOidBtn.setAttribute('aria-pressed', String(state.tb.oidEnabled));
    tbToggleArmsBtn.setAttribute('aria-pressed', String(state.tb.armsEnabled));
    tbArmsEl.hidden = !(state.robot === 'tale-bot' && state.tb.armsEnabled);
  }

  function applyChallenge(challenge, loadSolution = false) {
    if (state.isRunning) stopExecution();
    state.challengeId = challenge.id;

    state.startPose = { ...challenge.start };
    state.flag = challenge.flag ? { ...challenge.flag } : null;
    state.obstacles = (challenge.obstacles || []).map(o => ({ ...o }));
    state.box = challenge.box ? { ...challenge.box } : null;
    state.initialBox = challenge.box ? { ...challenge.box } : null;
    state.oidCells = (challenge.oidCells || []).map(c => ({ ...c }));
    state.penEnabled = Boolean(challenge.pen);

    if (state.robot === 'tale-bot') {
      state.tb.armsEnabled = Boolean(challenge.arms);
      state.tb.oidEnabled = challenge.oid !== false;
      if (loadSolution && challenge.demo) {
        state.tb.sequence = [...challenge.demo.seq];
        state.tb.repeat = challenge.demo.repeat || 1;
      } else if (challenge.initialSeq) {
        state.tb.sequence = [...challenge.initialSeq];
        state.tb.repeat = 1;
      }
    } else if (loadSolution && challenge.demo) {
      const nextBoard = Array.from({ length: 18 }, () => null);
      (challenge.demo.main || []).forEach((b, idx) => {
        if (idx < 12) nextBoard[idx] = { ...b };
      });
      if (challenge.demo.func && challenge.demo.func.length) {
        nextBoard[12] = { type: 'define', number: '' };
        challenge.demo.func.forEach((b, idx) => {
          if (13 + idx < 18) nextBoard[13 + idx] = { ...b };
        });
      }
      state.cs.boardSlots = nextBoard;
      state.cs.selectedSlot = 0;
    }

    clearCanvas();
    updateAccessoryButtons();
    resetRobotToStart(true);
    setStatus(
      `${challenge.optionLabel} (${cellName(state.startPose.col, state.startPose.row)})`,
      'info'
    );
  }

  function populateChallengeSelect(robotSlug) {
    const list = CHALLENGES[robotSlug] || [];
    challengeSelect.innerHTML = list
      .map(c => `<option value="${c.id}">${c.optionLabel}</option>`)
      .join('');
    if (list.length) {
      applyChallenge(list[0], false);
    }
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
    if (robotSlug !== 'tale-bot' && state.matTool === 'box') {
      setMatTool('robot');
    }

    if (guideLink) {
      guideLink.href = `../robot/${robotSlug}/index.html`;
    }

    populateChallengeSelect(robotSlug);

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
  // 9. ESDEVENIMENTS D'INTERFÍCIE I TECLAT
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

  challengeSelect.addEventListener('change', () => {
    const list = CHALLENGES[state.robot] || [];
    const found = list.find(c => c.id === challengeSelect.value);
    if (found) applyChallenge(found, false);
  });

  loadDemoBtn.addEventListener('click', () => {
    const list = CHALLENGES[state.robot] || [];
    const found = list.find(c => c.id === challengeSelect.value) || list[0];
    if (found) applyChallenge(found, true);
  });

  matToolBtns.forEach(btn => {
    btn.addEventListener('click', () => setMatTool(btn.getAttribute('data-mat-tool')));
  });

  rotateStartBtn.addEventListener('click', () => {
    state.startPose.dir = (state.startPose.dir + 3) % 4;
    resetRobotToStart(false);
    playTone(540, 70, 'sine', 0.06);
    setStatus(`Orientació inicial girada cap a ${DIRS[state.startPose.dir].label}.`, 'info');
  });

  resetRobotBtn.addEventListener('click', () => {
    resetRobotToStart(true);
    playTone(480, 80, 'sine', 0.06);
    setStatus(`Robot reposicionat a la casella inicial ${cellName(state.startPose.col, state.startPose.row)}.`, 'info');
  });

  togglePenBtn.addEventListener('click', () => {
    state.penEnabled = !state.penEnabled;
    updateAccessoryButtons();
    playTone(state.penEnabled ? 660 : 440, 80, 'sine', 0.06);
    setStatus(
      state.penEnabled
        ? 'Suport de retolador activat: el robot dibuixarà el seu recorregut sobre el tapís.'
        : 'Suport de retolador desactivat.',
      'info'
    );
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
    clearCanvas();
    playTone(400, 80, 'triangle', 0.06);
    setStatus('S’ha netejat el traç del retolador.', 'info');
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
    state.tb.repeat = (state.tb.repeat % 4) + 1;
    playTone(620 + state.tb.repeat * 60, 85, 'sine', 0.08);
    renderTaleBotUI();
    setStatus(
      `Botó de repetició de Tale-Bot configurat a ×${state.tb.repeat} (s'aplicarà a tot el programa complet).`,
      'info'
    );
  });

  tbDeleteLastBtn.addEventListener('click', deleteLastTaleBotCommand);
  tbDeleteAllBtn.addEventListener('click', clearAllTaleBotCommands);
  tbPlayBtn.addEventListener('click', runFullProgram);
  tbStepBtn.addEventListener('click', runNextSingleStep);

  tbTestVoiceBtn.addEventListener('click', () => {
    const msg = (tbVoiceInput && tbVoiceInput.value.trim()) || 'Hola, sóc el conill!';
    showBubble(`🎙️ «${msg}»`, 2400);
    playMelody([[523, 0, 90], [659, 100, 90], [784, 200, 130]]);
    setStatus(`Comprovació de la gravació: «${msg}»`, 'info');
  });

  tbToggleOidBtn.addEventListener('click', () => {
    state.tb.oidEnabled = !state.tb.oidEnabled;
    updateAccessoryButtons();
    renderGridCells();
    setStatus(
      state.tb.oidEnabled
        ? 'Sensor òptic OID activat per llegir les caselles interactives del mapa.'
        : 'Lectura de mapa OID desactivada (com sobre un mapa imprés normal).',
      'info'
    );
  });

  tbToggleArmsBtn.addEventListener('click', () => {
    state.tb.armsEnabled = !state.tb.armsEnabled;
    updateAccessoryButtons();
    setStatus(
      state.tb.armsEnabled
        ? 'Braços de transport instal·lats: Tale-Bot pot empènyer un objecte lleuger 📦 endavant.'
        : 'Braços de transport retirats.',
      'info'
    );
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
      setStatus('Tauler 3×6 buidat.', 'info');
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
