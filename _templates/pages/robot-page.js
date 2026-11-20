'use strict';

const { escapeHTML, escapeAttr, cleanRoot } = require('../layout/utils');
const { Document } = require('../layout/document');
const { SectionHero } = require('../components/section-hero');
const { TutorialCard } = require('../components/tutorial-card');
const { ActivityCard } = require('../components/activity-card');
const MarkdownIt = require('../../_scripts/vendor/markdown-it.min.js');
const infoMarkdown = new MarkdownIt({ html: false });

function RobotPage({
  robotSlug = '',
  title = '',
  description = '',
  root = '../../',
  robotLead = '',
  robotHighlightTitle = '',
  robotHighlightBody = '',
  tutorialItems = [],
  activityItems = [],
  resources = [],
  techInfo = '',
  specs = [],
  statusNote = '',
  statusSource = '',
  statusSourceLabel = ''
} = {}) {
  const r = cleanRoot(root);
  const activitiesHTML = ['tale-bot', 'coding-set', 'codey-rocky'].includes(robotSlug) ? `
    <section id="activitats" data-robot-activities aria-labelledby="activities-heading">
      <header class="robot-tutorials-heading">
        <div>
          <h2 id="activities-heading">Actividades</h2>
          <p>Propuestas para trabajar en el aula con ${escapeHTML(title)}.</p>
        </div>
      </header>
      ${activityItems.length ? `<div class="clean-grid" data-activity-grid>
        ${activityItems.map(item => ActivityCard({ item, root: r })).join('\n        ')}
      </div>` : '<p>Todavía no hay actividades publicadas para este robot.</p>'}
    </section>` : '';

  const highlightHTML = (robotHighlightTitle || robotHighlightBody) ? `
      <aside class="robot-highlight-card robot-highlight-${escapeAttr(robotSlug)}" data-robot="${escapeAttr(robotSlug)}">
        <div class="robot-highlight-icon-wrap" aria-hidden="true">
          <svg class="robot-highlight-icon-svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
            <path d="M16 4C11.58 4 8 7.58 8 12C8 14.85 9.5 17.35 11.75 18.75C12.25 19.06 12.6 19.6 12.6 20.2V22C12.6 22.55 13.05 23 13.6 23H18.4C18.95 23 19.4 22.55 19.4 22V20.2C19.4 19.6 19.75 19.06 20.25 18.75C22.5 17.35 24 14.85 24 12C24 7.58 20.42 4 16 4Z" fill="#F59E0B"/>
            <path d="M13 24.5C13 24.22 13.22 24 13.5 24H18.5C18.78 24 19 24.22 19 24.5C19 24.78 18.78 25 18.5 25H13.5C13.22 25 13 24.78 13 24.5Z" fill="#D97706"/>
            <path d="M14 26C14 25.72 14.22 25.5 14.5 25.5H17.5C17.78 25.5 18 25.72 18 26C18 26.83 17.33 27.5 16.5 27.5H15.5C14.67 27.5 14 26.83 14 26Z" fill="#D97706"/>
            <path d="M11.5 10C12 7.8 13.6 6.2 15.8 6" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M22.5 7.5L24.5 5.5" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="robot-highlight-content">
          <h2 class="robot-highlight-title">${robotHighlightTitle}</h2>
          <p class="robot-highlight-desc">${robotHighlightBody}</p>
        </div>
      </aside>` : '';

  const statusHTML = statusNote ? `
      <aside class="manufacturer-status" data-status>
        <span class="manufacturer-kicker">Estado y disponibilidad</span>
        <p>${escapeHTML(statusNote)}</p>
        ${statusSource ? `<a href="${escapeAttr(statusSource)}" target="_blank" rel="noopener noreferrer">${escapeHTML(statusSourceLabel || 'Fuente oficial')} <span aria-hidden="true">↗</span></a>` : ''}
      </aside>` : '';

  const resourcesHTML = (resources.length || statusNote || techInfo || specs.length) ? `
    <section class="robot-official-resources" data-official-resources aria-labelledby="manufacturer-heading">
      <header class="manufacturer-heading">
        <h2 id="manufacturer-heading">Recursos oficiales del fabricante</h2>
        <p>Nuevas posibilidades con la documentación oficial y las guías del fabricante.</p>
      </header>
      <div class="manufacturer-info">
        ${(techInfo || specs.length || statusNote) ? `<div class="manufacturer-tech" data-tech-info><h3>Información técnica y compatibilidad</h3>${techInfo ? `<div>${infoMarkdown.render(techInfo)}</div>` : ''}${specs.length ? `<h4>Especificaciones técnicas</h4><ul class="manufacturer-specs">${specs.map(spec => `<li>${escapeHTML(String(spec).replace(/^✓\s*/, ''))}</li>`).join('')}</ul>` : ''}${statusHTML}</div>` : ''}
      </div>
      ${resources.length ? `<ul class="manufacturer-resource-grid">
        ${resources.map((res, index) => `<li><a class="manufacturer-resource" href="${escapeAttr(res.href)}" target="_blank" rel="noopener noreferrer"><span class="manufacturer-resource-top"><span class="manufacturer-resource-number">${String(index + 1).padStart(2, '0')}</span><span aria-hidden="true">↗</span></span><h3>${escapeHTML(res.title)}</h3>${res.description ? `<p>${escapeHTML(res.description)}</p>` : ''}<span class="manufacturer-resource-action">Consultar el recurso <span aria-hidden="true">→</span></span></a></li>`).join('')}
      </ul>` : ''}
    </section>` : '';

  return Document({
    title: `${title} | Robótica²⁰⁰`,
    description: description || 'Contenido didáctico de robótica educativa.',
    activeNav: 'robots',
    root: r,
    heroLayout: true,
    body: `${SectionHero({
      title,
      description,
      bannerSrc: `${r}_assets/robots/${robotSlug}.webp`,
      bannerAlt: title,
      backHref: `${r}robotica-educativa/index.html`,
      backLabel: 'Robótica educativa',
      isRobotHero: true,
      robotSlug
    })}
  <section class="robot-overview-section robot-overview-${escapeAttr(robotSlug)}" data-robot-overview data-robot="${escapeAttr(robotSlug)}">
    <div class="robot-overview-grid">
      <div class="robot-overview-lead">
        <p>${robotLead}</p>
        ${['tale-bot', 'coding-set', 'codey-rocky', 'spike'].includes(robotSlug) ? `<p class="robot-simulator-link"><a class="btn-primary" href="${r}sim/index.html?robot=${escapeAttr(robotSlug)}">Probar el simulador interactivo de ${escapeHTML(title)}</a></p>` : ''}
      </div>${highlightHTML}
    </div>
  </section>
  <section data-robot-extra>
    <div class="robot-tutorials-heading">
      <div class="robot-tutorials-heading-main">
        <div>
          <h2 data-tutorial-heading>Tutoriales de ${escapeHTML(title)}</h2>
          <p>Tutoriales para iniciarse en las posibilidades del robot, conectarlo y utilizar sus componentes.</p>
        </div>
      </div>
    </div>
    <div class="clean-grid tutorial-grid" data-tutorial-grid>
      ${tutorialItems.map(item => TutorialCard({ item, root: r })).join('\n      ')}
    </div>${activitiesHTML}${resourcesHTML}
  </section>`
  });
}

module.exports = { RobotPage };
