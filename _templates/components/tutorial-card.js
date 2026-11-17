'use strict';

const { escapeHTML, escapeAttr, cleanRoot } = require('../layout/utils');

function TutorialCard({ item, root = '../../' }) {
  const r = cleanRoot(root);
  const href = `${r}${item.url}`;
  const imgSrc = `${r}${item.imatge || `_assets/robots/${item.robot}.webp`}`;

  return `<article class="tutorial-card" id="${escapeAttr(item.id)}">
    <div class="card-top">
      <div class="card-badges">
        <span class="tag-badge badge-${escapeAttr(item.dificultatSlug)}">${escapeHTML(item.dificultat)}</span>
        <span class="tag-badge badge-durada">⏱️ ${escapeHTML(item.durada)}</span>
      </div>
      <img src="${escapeAttr(`${r}_assets/icons/${item.robot}.webp`)}" alt="" class="card-robot-icon" width="28" height="28">
    </div>
    <a href="${escapeAttr(href)}" class="tutorial-card-media-link" aria-label="${escapeAttr(item.titol)}">
      <div class="tutorial-card-media">
        <img src="${escapeAttr(imgSrc)}" alt="${escapeAttr(item.titol)}" class="tutorial-card-img" loading="lazy">
      </div>
    </a>
    <h3 class="tutorial-card-title"><a href="${escapeAttr(href)}">${escapeHTML(item.titol)}</a></h3>
    <p class="tutorial-card-desc">${escapeHTML(item.descripcio)}</p>
    <div class="tutorial-card-footer">
      <a href="${escapeAttr(href)}" class="btn-open-tutorial">Abrir tutorial →</a>
    </div>
  </article>`;
}

module.exports = { TutorialCard };
