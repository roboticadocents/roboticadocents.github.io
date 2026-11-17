'use strict';

const { escapeHTML, escapeAttr } = require('./utils');

function NavBack({ href = 'index.html', label = 'Volver', preserveFilters = false, slug = '' } = {}) {
  let cleanLabel = String(label || 'Volver').trim();
  if (cleanLabel.startsWith('←')) {
    cleanLabel = cleanLabel.replace(/^←\s*/, '');
  } else if (!cleanLabel.toLowerCase().startsWith('volver')) {
    cleanLabel = `Volver a ${cleanLabel}`;
  }
  const filterAttr = preserveFilters
    ? ` data-preserve-filters="${escapeAttr(slug)}"`
    : '';

  return `<div class="section-nav-back">
    <a href="${escapeAttr(href)}" class="btn-back"${filterAttr}>
      <span class="btn-back-arrow" aria-hidden="true">←</span>
      <span class="btn-back-text">${escapeHTML(cleanLabel)}</span>
    </a>
  </div>`;
}

module.exports = { NavBack };
