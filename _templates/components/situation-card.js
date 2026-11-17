'use strict';

const { escapeHTML, escapeAttr, cleanRoot } = require('../layout/utils');

function SituationCard({ item, root = '../' }) {
  const r = cleanRoot(root);
  const href = `${r}${item.url}`;
  const imgSrc = item.imatge ? `${r}${item.imatge}` : `${r}_assets/banners/situacions-aprenentatge.webp`;
  const imgAlt = item.imatgeAlt || item.titol;

  return `<a id="${escapeAttr(item.id)}" href="${escapeAttr(href)}" data-base-href="${escapeAttr(href)}" class="item-card sa-card" data-robot="${escapeAttr(item.robot)}" data-cicle="${escapeAttr(item.cicle)}" data-tematica="${escapeAttr(item.tematica)}" data-materia="${escapeAttr(item.materia)}">
    <div class="card-top">
      <div class="card-robot-info">
        ${item.robot ? `<img src="${escapeAttr(`${r}_assets/icons/${item.robot}.webp`)}" alt="" class="card-robot-sa-icon" width="28" height="28">` : ''}
        <span class="tag-badge primary">${escapeHTML(item.robotLabel)}</span>
      </div>
      <span class="tag-badge sa-cicle-badge">${escapeHTML(item.cicleLabel)}</span>
    </div>
    <div class="sa-card-media">
      <img src="${escapeAttr(imgSrc)}" alt="${escapeAttr(imgAlt)}" class="sa-card-img" width="600" height="448" loading="lazy">
    </div>
    <h3 class="item-title sa-card-title">${escapeHTML(item.titol)}</h3>
    ${item.repte ? `<div class="sa-challenge">“${escapeHTML(item.repte)}”</div>` : ''}
    <div class="card-tags">
      <span class="tag-pill">${escapeHTML(item.materiaLabel)}</span>
      <span class="tag-pill">${escapeHTML(item.tematicaLabel)}</span>
    </div>
    <div class="item-footer">
      <span>⏱️ ${escapeHTML(item.sessions || item.durada)}</span>
      <span class="sa-card-action">Abrir situación →</span>
    </div>
  </a>`;
}

module.exports = { SituationCard };
