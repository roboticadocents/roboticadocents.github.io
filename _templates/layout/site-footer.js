'use strict';

const { robot3D } = require('./footer-robots-3d');

// Els 6 robots oficials. `lights` són els colors de les peces que s'encenen i s'apaguen
// (ulls, LEDs, botons...) i `walk` indica quant li agrada passejar a cada robot.
const FOOTER_BOTS = [
  { slug: 'coding-express', name: 'Coding Express', lights: ['#f60000', '#f14644'], walk: 6 },
  { slug: 'tale-bot', name: 'Tale-Bot', lights: ['#5ec0ea', '#e42d2f', '#ff6900', '#38e239', '#f7f700'], walk: 4 },
  { slug: 'coding-set', name: 'Coding Set', lights: ['#ff9344'], walk: 4 },
  { slug: 'codey-rocky', name: 'Codey Rocky', lights: ['#4ad4ed'], walk: 5 },
  { slug: 'spike', name: 'Spike', lights: ['#06cbd6'], walk: 3 },
  { slug: 'microbit', name: 'Micro:bit', lights: ['#ff2c00'], walk: 2 }
];

const FOOTER_ROBOTS_HTML = FOOTER_BOTS
  .map((b, i) => {
    const model = robot3D(b.slug);
    return `<div class="fbot${model ? ' fbot-is-3d' : ''}" style="--i:${i}" data-robot="${b.slug}" data-walk="${b.walk}" title="${b.name}"><span class="fbot-emote"></span>${model}</div>`;
  })
  .join('');

function SiteFooter({ root = '' } = {}) {
  return `
  <footer class="site-footer">
    <div class="site-footer-waves" aria-hidden="true">
      <svg class="footer-wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
        <path class="footer-wave-warm" d="M0 65 C120 5 240 5 380 55 S640 115 810 55 S1080 0 1220 45 S1370 85 1440 50 L1440 120 L0 120 Z"/>
        <path class="footer-wave-back" d="M0 45 C160 110 280 110 450 50 S720 5 900 65 S1210 115 1440 35 L1440 120 L0 120 Z"/>
        <path class="footer-wave-front" d="M0 85 C160 35 300 35 470 85 S760 120 940 70 S1240 40 1440 85 L1440 120 L0 120 Z"/>
      </svg>
    </div>
    <div class="site-footer-body">
      <div class="container site-footer-inner">
        <p class="site-footer-motto">Aprendre fent, programar per a un futur millor.</p>
        <div class="footer-accent-dashes" aria-hidden="true">
          <span class="dash dash-red"></span>
          <span class="dash dash-yellow"></span>
          <span class="dash dash-blue"></span>
        </div>
        <p class="site-footer-brand">Robòtica<sup>200</sup> • Robòtica per a docents</p>
        <nav class="site-footer-links" aria-label="Recursos del web">
          <a href="${root}imprimir/index.html">Materials imprimibles</a>
          <a href="${root}sim/index.html">Simulador</a>
        </nav>
        <div class="footer-robots" aria-hidden="true" data-footer-robots>
          <img class="footer-desks" src="${root}_assets/extra/pupitres.svg" alt="" width="831" height="68" loading="lazy" decoding="async">
          ${FOOTER_ROBOTS_HTML}
        </div>
      </div>
    </div>
  </footer>`;
}

module.exports = { SiteFooter };
