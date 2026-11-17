'use strict';

const { escapeHTML, escapeAttr, cleanRoot } = require('../layout/utils');

function RobotCard({ item, root = '../' }) {
  const r = cleanRoot(root);
  const count = item.tutorials || 0;
  const countText = `${count} ${count === 1 ? 'tutorial' : 'tutorials'}`;

  return `<a id="${escapeAttr(item.id)}" href="${escapeAttr(r + item.url)}" class="robot-card robot-${escapeAttr(item.prefix)}">
    <div class="robot-card-media">
      <span class="robot-age-badge"><span class="badge-icon">🎓</span> <span>${escapeHTML(item.cicle || item.edat)}</span></span>
      <img src="${escapeAttr(`${r}_assets/robots/${item.slug}.webp`)}" alt="${escapeAttr(item.nom)}" class="robot-card-img" width="400" height="225" loading="lazy">
    </div>
    <div class="robot-card-body">
      <div class="robot-color-dots"><span class="dot dot-1"></span><span class="dot dot-2"></span></div>
      <h3 class="robot-card-title">${escapeHTML(item.nom)}</h3>
      <p class="robot-card-desc">${escapeHTML(item.descripcio)}</p>
      <div class="robot-card-footer">
        <span class="robot-tutorials-count">
          <svg class="icon-book" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>${escapeHTML(countText)}</span>
        </span>
        <span class="robot-card-action">Entrar en la página →</span>
      </div>
    </div>
  </a>`;
}

module.exports = { RobotCard };
