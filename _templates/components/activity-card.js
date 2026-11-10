'use strict';

const { escapeHTML, escapeAttr, cleanRoot } = require('../layout/utils');

function ActivityCard({ item, root = '../' }) {
  const r = cleanRoot(root);
  return `<a id="${escapeAttr(item.id)}" href="${escapeAttr(r + item.url)}" class="item-card activity-card">
    ${item.image ? `<div class="activity-card-cover"><img src="${escapeAttr(r + item.image)}" alt="" width="1200" height="800" loading="lazy" decoding="async"></div>` : ''}
    <div class="card-top">
      <span class="tag-badge primary">${escapeHTML(item.tag)}</span>
      ${item.cicle ? `<span class="tag-badge">${escapeHTML(item.cicle)}</span>` : ''}
    </div>
    <h3 class="item-title">${escapeHTML(item.titol)}</h3>
    <p class="item-desc">${escapeHTML(item.descripcio)}</p>
    <div class="item-footer"><span>⏱️ ${escapeHTML(item.durada)}</span><span>Veure activitat →</span></div>
  </a>`;
}

module.exports = { ActivityCard };
