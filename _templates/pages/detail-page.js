'use strict';

const { escapeHTML, escapeAttr } = require('../layout/utils');
const { Document } = require('../layout/document');
const { NavBack } = require('../layout/nav-back');
const { BadgeList } = require('../components/badge-list');

function DetailPage({
  title = '',
  description = '',
  activeNav = '',
  root = '../../',
  backHref = '../../index.html',
  backLabel = 'Inicio',
  badges = [],
  printHref = '',
  content = ''
} = {}) {
  return Document({
    title: `${title} | Robótica²⁰⁰`,
    description: description || 'Contenido didáctico de robótica educativa.',
    activeNav,
    root,
    body: `    ${NavBack({ href: backHref, label: backLabel })}
    <article class="detail-page-card" data-wizard-container>
      <div class="detail-page-header">
        ${BadgeList(badges)}
        <h1 class="detail-page-title" data-title>${escapeHTML(title)}</h1>
        ${description ? `<p class="detail-intro" data-description>${escapeHTML(description)}</p>` : ''}
      </div>
      ${printHref ? `<p class="print-version-link"><a href="${escapeAttr(printHref)}" download>Descargar la versión imprimible (PDF)</a></p>` : ''}
      <div class="prose" data-content>${content}</div>
    </article>`
  });
}

module.exports = { DetailPage };
