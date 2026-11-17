// check-es:skip
// _js/ui.js - Micro-controlador d'interactivitat per a Robòtica²⁰⁰ (0 dependències)
(function () {
  'use strict';

  const FILTER_KEYS = ['robot', 'cicle', 'tematica', 'materia'];

  // 1. Redirecció automàtica d'URLs antigues (?id=slug -> ./slug/index.html)
  function initLegacyRedirect() {
    const redirectBox = document.querySelector('[data-legacy-redirect]');
    if (!redirectBox) return;
    const target = redirectBox.getAttribute('data-redirect-target');
    if (target) {
      window.location.replace(`${target}${window.location.search}${window.location.hash}`);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const rawId = params.get('id') || '';
    const id = rawId.replace(/^(?:sa-|activitat-|tutorial-|robot-|guia-)/i, '');
    if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
      const filters = new URLSearchParams();
      FILTER_KEYS.forEach(k => { if (params.has(k)) filters.set(k, params.get(k)); });
      const qs = filters.size ? `?${filters}` : '';
      window.location.replace(`./${id}/index.html${qs}${window.location.hash}`);
    } else {
      const fallback = redirectBox.getAttribute('data-legacy-redirect') || '../index.html';
      window.location.replace(fallback);
    }
  }

  // 2. Preservació dels filtres al botó de retorn de les Situacions d'Aprenentatge
  function initBackFilters() {
    const backLink = document.querySelector('a[data-preserve-filters]');
    if (!backLink) return;
    const slug = backLink.getAttribute('data-preserve-filters') || '';
    const query = new URLSearchParams(window.location.search);
    const filters = new URLSearchParams();
    FILTER_KEYS.forEach(k => { if (query.has(k)) filters.set(k, query.get(k)); });
    if (filters.size) {
      backLink.href = `../../situaciones-aprendizaje/index.html?${filters}#situacio-sa-${slug}`;
    }
  }

  // 3. Assistent pas a pas (Learning Wizard)
  function initLearningWizards() {
    document.querySelectorAll('[data-learning-wizard]').forEach(wizard => {
      const container = wizard.closest('[data-wizard-container]') || wizard.parentElement;
      if (!container) return;
      const steps = Array.from(container.querySelectorAll('.learning-step'));
      const buttons = Array.from(wizard.querySelectorAll('[data-step-target]'));
      const statusEl = wizard.querySelector('[data-wizard-status]');
      const progressEl = wizard.querySelector('[data-wizard-progress]');
      const barEl = wizard.querySelector('[data-wizard-bar]');
      const prevBtn = wizard.querySelector('[data-step-prev]');
      const nextBtn = wizard.querySelector('[data-step-next]');
      const total = steps.length;
      if (!total) return;

      let current = 0;

      function setStep(index) {
        current = Math.max(0, Math.min(total - 1, index));
        steps.forEach((stepEl, i) => {
          stepEl.hidden = i !== current;
        });
        buttons.forEach((btn, i) => {
          if (i === current) btn.setAttribute('aria-current', 'step');
          else btn.removeAttribute('aria-current');
        });
        const title = steps[current]?.querySelector('h3')?.textContent || '';
        const stepNum = current + 1;
        if (statusEl) statusEl.textContent = `Paso ${stepNum} de ${total} · ${title}`;
        if (progressEl) {
          progressEl.setAttribute('aria-valuenow', String(stepNum));
          progressEl.setAttribute('aria-valuetext', `Paso ${stepNum} de ${total}`);
        }
        if (barEl) barEl.style.width = `${(stepNum / total * 100).toFixed(2)}%`;
        if (prevBtn) prevBtn.disabled = current === 0;
        if (nextBtn) nextBtn.disabled = current === total - 1;
      }

      buttons.forEach(btn => {
        btn.addEventListener('click', () => setStep(Number(btn.getAttribute('data-step-target'))));
      });
      if (prevBtn) prevBtn.addEventListener('click', () => setStep(current - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => setStep(current + 1));
    });
  }

  // 4. Filtres del catàleg de Situacions d'Aprenentatge
  function initSituationsCatalog() {
    const catalog = document.querySelector('[data-situations-catalog]');
    if (!catalog) return;

    const selects = {};
    FILTER_KEYS.forEach(key => {
      selects[key] = catalog.querySelector(`select[data-filter="${key}"]`);
    });
    const cards = Array.from(catalog.querySelectorAll('.sa-card'));
    const countEl = catalog.querySelector('[data-filter-count]');
    const emptyEl = catalog.querySelector('[data-filter-empty]');
    const resetBtn = catalog.querySelector('[data-filter-reset]');
    const total = cards.length;

    const initialParams = new URLSearchParams(window.location.search);
    FILTER_KEYS.forEach(key => {
      const val = initialParams.get(key);
      if (val && selects[key]) selects[key].value = val;
    });

    function applyFilters() {
      const active = {};
      const params = new URLSearchParams();
      FILTER_KEYS.forEach(key => {
        const val = selects[key]?.value || 'all';
        active[key] = val;
        if (val !== 'all') params.set(key, val);
      });

      let visibleCount = 0;
      cards.forEach(card => {
        const matches = FILTER_KEYS.every(key => {
          const currentVal = active[key];
          if (currentVal === 'all') return true;
          const values = String(card.dataset[key] || '').split(/\s+/);
          return values.includes(currentVal) || (key === 'cicle' && values.includes('tots'));
        });
        card.hidden = !matches;
        if (matches) visibleCount += 1;

        const baseHref = card.getAttribute('data-base-href') || card.getAttribute('href');
        if (baseHref) {
          card.href = params.size ? `${baseHref}?${params}` : baseHref;
        }
      });

      if (countEl) countEl.textContent = `Mostrando ${visibleCount} de ${total} situaciones`;
      if (emptyEl) emptyEl.hidden = visibleCount > 0;

      const newUrl = window.location.pathname + (params.size ? `?${params}` : '') + window.location.hash;
      window.history.replaceState(window.history.state || {}, '', newUrl);
    }

    FILTER_KEYS.forEach(key => {
      selects[key]?.addEventListener('change', applyFilters);
    });
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        FILTER_KEYS.forEach(key => { if (selects[key]) selects[key].value = 'all'; });
        applyFilters();
      });
    }

    applyFilters();

    if (window.location.hash) {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.focus({ preventScroll: true });
    }
  }

  // 5. Micro-animacions del robot a la portada
  function initHomeRobot() {
    const btn = document.querySelector('[data-home-robot]');
    const svg = document.querySelector('[data-home-robot-svg]');
    if (!btn || !svg) return;

    const animations = [
      ['robot-anim-blink', 400],
      ['robot-anim-antenna', 700],
      ['robot-anim-alert', 800],
      ['robot-anim-glitch', 500],
      ['robot-anim-look', 1150],
      ['robot-anim-happy', 700],
      ['robot-anim-tilt', 1000],
      ['robot-anim-scan', 900],
      ['robot-anim-dashes', 1700]
    ];
    let last = -1;
    let timer = null;
    let animTimer = null;
    let activeClass = '';

    function play(index) {
      clearTimeout(animTimer);
      if (activeClass) svg.classList.remove(activeClass);
      const [cls, duration] = animations[index];
      void svg.offsetWidth;
      activeClass = cls;
      svg.classList.add(cls);
      animTimer = setTimeout(() => {
        svg.classList.remove(cls);
        activeClass = '';
      }, duration + 50);
    }

    function next() {
      let index;
      do {
        index = Math.floor(Math.random() * animations.length);
      } while (index === last);
      last = index;
      play(index);
      timer = setTimeout(next, 2000 + Math.random() * 2000);
    }

    timer = setTimeout(next, 600);
    btn.addEventListener('click', () => {
      clearTimeout(timer);
      last = 5;
      play(5);
      timer = setTimeout(next, 700);
    });
  }

  // Motor de comportament: cada robot tria accions aleatòries i s'anima amb requestAnimationFrame
  // 6. Els 6 robots oficials passegen i fan coses de robot al peu de pàgina
  function initFooterRobots() {
    const stage = document.querySelector('[data-footer-robots]');
    if (!stage) return;
    const reduceMotion = Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const rand = (a, b) => a + Math.random() * (b - a);
    const ease = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const env = p => Math.min(1, Math.sin(Math.PI * p) * 3); // entrada/sortida suau
    const PIVOT = '105 210'; // base del robot (unitats del viewBox)
    const DUR = {
      walk: [1600, 3400], hop: [850, 850], turn: [1400, 2000], dance: [2200, 3400],
      beep: [1400, 2400], nod: [1600, 2400], greet: [1300, 1300], idle: [700, 2200]
    };
    const EMOTES = { beep: ['♪', '!', '•••'], dance: ['♫'], greet: ['♥'], turn: ['?'] };

    const bots = Array.from(stage.querySelectorAll('.fbot')).map((el, i, all) => {
      const home = (i + 0.5) / all.length;
      return {
        el, home, x: home, x0: home, x1: home,
        dir: Math.random() < 0.5 ? 1 : -1,
        svg: el.querySelector('.fbot-svg'),
        body: el.querySelector('[data-part="body"]'),
        pose: el.querySelector('.fbot-pose'),
        v3: el.querySelector('.v3'),
        yawEl: el.querySelector('.v3-yaw'),
        yaw: 0, lastYaw: null,
        emote: el.querySelector('.fbot-emote'),
        lights: Array.from(el.querySelectorAll('[data-light]')),
        walkW: Number(el.dataset.walk) || 3,
        action: 'idle', t0: 0, dur: rand(200, 1500), target: null,
        nextBlink: rand(800, 5000), lightsOn: true
      };
    });
    if (!bots.length) return;

    // Moviment reduït: els robots es queden quiets al seu lloc (CSS) i només parpellegen els llums
    if (reduceMotion) {
      setInterval(() => {
        bots.forEach(b => {
          if (Math.random() < 0.25) {
            b.lights.forEach(l => { l.style.opacity = '0.3'; });
            setTimeout(() => b.lights.forEach(l => { l.style.opacity = '1'; }), 180);
          }
        });
      }, 1500);
      return;
    }

    let width = stage.clientWidth;
    let visible = true;
    let rafId = null;

    if ('ResizeObserver' in window) new ResizeObserver(() => { width = stage.clientWidth; }).observe(stage);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && rafId === null) rafId = requestAnimationFrame(frame);
      }).observe(stage);
    }

    const nearest = b => bots.reduce((best, o) => (o !== b && (!best || Math.abs(o.x - b.x) < Math.abs(best.x - b.x)) ? o : best), null);

    function pick(b) {
      const near = nearest(b);
      const options = [
        ['walk', b.walkW], ['hop', 2], ['turn', 1.5], ['dance', 1.2],
        ['beep', 2], ['nod', 1.5], ['idle', 2.5],
        ['greet', near && Math.abs(near.x - b.x) < 1.6 / bots.length ? 2 : 0]
      ];
      const total = options.reduce((s, o) => s + o[1], 0);
      let r = Math.random() * total;
      for (const [name, w] of options) { if ((r -= w) <= 0) return name; }
      return 'idle';
    }

    function showEmote(b, text) {
      b.emote.textContent = text || '';
      b.emote.classList.toggle('is-visible', Boolean(text));
    }

    function begin(b, now) {
      b.action = b.action === 'idle' ? pick(b) : 'idle';
      b.t0 = now;
      const [lo, hi] = DUR[b.action];
      b.dur = rand(lo, hi);
      if (b.action === 'walk') {
        const span = 0.5 / bots.length + 0.04;
        b.x0 = b.x;
        b.x1 = Math.max(0.03, Math.min(0.97, b.home + rand(-span, span)));
        b.dir = b.x1 >= b.x0 ? 1 : -1;
      }
      if (b.action === 'greet') {
        const near = nearest(b);
        b.dir = near && near.x > b.x ? 1 : -1;
      }
      const pool = EMOTES[b.action];
      showEmote(b, pool && Math.random() < 0.85 ? pool[Math.floor(Math.random() * pool.length)] : '');
    }

    function setLights(b, fn) {
      b.lights.forEach((l, i) => {
        if (b.yawEl) l.classList.toggle('is-off', !fn(i));
        else l.style.opacity = fn(i) ? '1' : '0.3';
      });
    }

    // Robots 3D: gir real sobre l'eix vertical i ombrejat de cada cara segons cap on mira
    const LIGHT = [-0.24, 0.97]; // llum que ve del davant-esquerra, com als SVG
    function shade3D(b) {
      if (b.lastYaw !== null && Math.abs(b.lastYaw - b.yaw) < 0.2) return;
      b.lastYaw = b.yaw;
      const a = b.yaw * Math.PI / 180;
      const lit = (nx, ny) => (0.8 + 0.2 * Math.max(0, nx * LIGHT[0] + ny * LIGHT[1])).toFixed(3);
      const c = Math.cos(a), s = Math.sin(a);
      b.yawEl.style.setProperty('--yaw', `${b.yaw.toFixed(2)}deg`);
      b.v3.style.setProperty('--b-py', lit(-s, c));
      b.v3.style.setProperty('--b-ny', lit(s, -c));
      b.v3.style.setProperty('--b-px', lit(c, s));
      b.v3.style.setProperty('--b-nx', lit(-c, -s));
    }

    function animate(b, now) {
      let p = (now - b.t0) / b.dur;
      if (p >= 1) { begin(b, now); p = 0; }

      const e = env(p);
      let ty = 0, rot = 0, sx = 1, sy = 1, tx = 0, face = 1, spin = 0;
      let lightMode = 'steady';

      switch (b.action) {
        case 'walk': {
          const steps = p * b.dur / 220;
          b.x = b.x0 + (b.x1 - b.x0) * ease(p);
          ty = -Math.abs(Math.sin(steps * Math.PI)) * 7;
          rot = Math.sin(steps * Math.PI) * 3;
          break;
        }
        case 'hop': {
          if (p < 0.18) { const q = p / 0.18; sx = 1 + 0.1 * q; sy = 1 - 0.14 * q; }
          else if (p < 0.82) { const q = Math.sin(Math.PI * (p - 0.18) / 0.64); ty = -60 * q; sx = 1 - 0.05 * q; sy = 1 + 0.08 * q; rot = -6 * q; }
          else { const q = 1 - (p - 0.82) / 0.18; sx = 1 + 0.08 * q; sy = 1 - 0.1 * q; }
          break;
        }
        case 'turn': // mira enrere i torna a mirar endavant (els 3D fan una volta sencera)
          if (b.yawEl) { spin = 360 * ease(p); break; }
          face = Math.cos(2 * Math.PI * p);
          if (Math.abs(face) < 0.08) face = face < 0 ? -0.08 : 0.08;
          break;
        case 'dance': {
          const s = Math.sin(p * b.dur / 320 * Math.PI);
          ty = -Math.abs(s) * 14 * e;
          rot = s * 9 * e;
          lightMode = 'chase';
          break;
        }
        case 'beep':
          tx = Math.sin(now / 28) * 2.5 * e;
          lightMode = 'random';
          break;
        case 'nod': // s'inclina endavant per inspeccionar el terra (els 3D miren a banda i banda)
          if (b.yawEl) { spin = 40 * e * Math.sin(p * Math.PI * 4); rot = -4 * e; break; }
          rot = -9 * e * (0.7 + 0.3 * Math.sin(p * Math.PI * 4));
          break;
        case 'greet': {
          const q = Math.sin(Math.PI * Math.min(1, p / 0.5));
          ty = p < 0.5 ? -38 * q : 0;
          rot = p >= 0.5 ? -7 * Math.sin(Math.PI * (p - 0.5) / 0.5) : 0;
          lightMode = 'chase';
          break;
        }
        default: // idle: respiració suau
          sy = 1 + 0.018 * Math.sin(now / 420 + b.home * 10);
          sx = 2 - sy;
      }

      // Llums: parpelleig ocasional, aleatori (bip) o en seqüència (ball/salutació)
      if (b.lights.length) {
        if (lightMode === 'random') {
          const tick = Math.floor(now / 120);
          setLights(b, i => ((i * 7 + tick * 13) % 5) > 1);
        } else if (lightMode === 'chase') {
          const tick = Math.floor(now / 160);
          setLights(b, i => (i + tick) % 3 !== 0);
        } else {
          let on = true;
          if (now > b.nextBlink) {
            if (now - b.nextBlink > 160) b.nextBlink = now + rand(2500, 7000);
            else on = false;
          }
          setLights(b, () => on);
        }
      }

      const botW = b.el.offsetWidth || 60;
      const px = b.x * Math.max(0, width - botW) + tx * botW / 240;
      b.el.style.transform = `translateX(${px.toFixed(1)}px)`;

      if (b.yawEl) {
        // Mira cap al davant-esquerra (0°) o cap al davant-dreta (-90°) i hi gira suaument
        const target = (b.dir > 0 ? -90 : 0) - spin * b.dir;
        b.yaw += (target - b.yaw) * (spin ? 1 : 0.12);
        shade3D(b);
        const k = botW / 240;
        b.pose.style.transform =
          `translateY(${(ty * k).toFixed(2)}px) rotate(${(rot * -b.dir).toFixed(2)}deg) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`;
        return;
      }

      b.svg.style.transform = `scaleX(${(-b.dir * face).toFixed(3)})`;
      b.body.setAttribute('transform',
        `translate(0 ${ty.toFixed(2)}) rotate(${rot.toFixed(2)} ${PIVOT}) translate(105 210) scale(${sx.toFixed(3)} ${sy.toFixed(3)}) translate(-105 -210)`);
    }

    function frame(now) {
      if (!visible) { rafId = null; return; }
      bots.forEach(b => animate(b, now));
      rafId = requestAnimationFrame(frame);
    }
    stage.classList.add('is-animated');
    rafId = requestAnimationFrame(frame);
  }

  initLegacyRedirect();
  initBackFilters();
  initLearningWizards();
  initSituationsCatalog();
  initHomeRobot();
  initFooterRobots();
})();
