'use strict';

const { escapeHTML, escapeAttr } = require('../layout/utils');
const { Document } = require('../layout/document');
const { NavBack } = require('../layout/nav-back');
const { SectionHeading } = require('../components/section-icon');
const { BadgeList } = require('../components/badge-list');

function SituationPage({
  slug = '',
  title = '',
  description = '',
  root = '../../',
  backHref = '../../situaciones-aprendizaje/index.html',
  backLabel = "Situaciones de Aprendizaje",
  badges = [],
  printHref = '',
  themeLabel = '',
  challenge = '',
  showChallenge = false,
  content = ''
} = {}) {
  const challengeSection = showChallenge ? `
      <section class="detail-section" data-challenge-section>
        <h2>${SectionHeading('Reto o pregunta guía', 'intro')}</h2>
        <p class="sa-challenge" data-challenge>${escapeHTML(challenge)}</p>
      </section>` : '';

  return Document({
    title: `${title} | Situación de aprendizaje | Robótica²⁰⁰`,
    description: description || challenge || 'Situación de aprendizaje de robótica y pensamiento computacional.',
    activeNav: 'situacions',
    root,
    body: `    ${NavBack({ href: backHref, label: backLabel, preserveFilters: true, slug })}
    <article class="detail-page-card situation-page-card" data-wizard-container>
      <div class="detail-page-header">
        ${BadgeList(badges)}
        <h1 class="detail-page-title" data-title>${escapeHTML(title)}</h1>
        ${themeLabel ? `<span class="tag-badge" data-theme>🏷️ ${escapeHTML(themeLabel)}</span>` : ''}
      </div>
      ${printHref ? `<p class="print-version-link"><a href="${escapeAttr(printHref)}" download>Descargar la versión imprimible (PDF)</a></p>` : ''}
      <div class="prose">${challengeSection}
        <div data-markdown-content>${content}</div>
      </div>
    </article>`
  });
}

module.exports = { SituationPage };
