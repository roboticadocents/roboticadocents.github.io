'use strict';

const { escapeHTML, escapeAttr } = require('../layout/utils');
const { Document } = require('../layout/document');
const { NavBack } = require('../layout/nav-back');

function RedirectPage({
  title = 'Redirigiendo… | Robótica²⁰⁰',
  activeNav = 'inici',
  root = '../',
  targetHref = '',
  fallbackHref = '../index.html',
  fallbackLabel = 'Volver al catálogo'
} = {}) {
  return Document({
    title,
    description: 'Contenido didáctico de robótica educativa.',
    activeNav,
    root,
    body: `    ${NavBack({ href: fallbackHref, label: fallbackLabel })}
    <section class="content-load-error" data-legacy-redirect="${escapeAttr(fallbackHref)}"${targetHref ? ` data-redirect-target="${escapeAttr(targetHref)}"` : ''}>
      <h1>Redirigiendo al contenido…</h1>
      <p>Si la redirección no es automática, <a href="${escapeAttr(fallbackHref)}">${escapeHTML(fallbackLabel)}</a>.</p>
    </section>`
  });
}

module.exports = { RedirectPage };
