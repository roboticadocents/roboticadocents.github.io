'use strict';

const { escapeHTML, escapeAttr } = require('../layout/utils');
const { Document } = require('../layout/document');
const { SectionHero } = require('../components/section-hero');
const { SituationCard } = require('../components/situation-card');

function renderOptions(options = []) {
  return options.map(([val, label]) => `<option value="${escapeAttr(val)}">${escapeHTML(label)}</option>`).join('');
}

function SituationsCatalogPage({
  situacions = [],
  robotOptions = [],
  cycleOptions = [],
  topicOptions = [],
  subjectOptions = []
} = {}) {
  const total = situacions.length;

  return Document({
    title: "Situaciones de Aprendizaje Curriculares | Robótica200",
    description: "Catálogo de situaciones de aprendizaje curriculares de robótica y pensamiento computacional.",
    activeNav: 'situacions',
    root: '../',
    heroLayout: true,
    body: `${SectionHero({
      title: "Situaciones de Aprendizaje",
      description: "Propuestas curriculares y retos de aula para conectar la robótica y el pensamiento computacional con contextos significativos.",
      bannerSrc: '../_assets/banners/situacions-aprenentatge.webp',
      bannerAlt: "Situaciones de Aprendizaje",
      backHref: '../index.html',
      backLabel: 'inicio'
    })}
    <div data-situations-catalog data-total="${total}">
      <div class="filters-bar">
        <div class="filter-group">
          <label class="filter-label" for="filter-robot"><img src="../_assets/icons/pack/robot.webp" alt="" class="filter-label-icon" height="36">Robot</label>
          <select id="filter-robot" class="filter-select" data-filter="robot">
            <option value="all">Todos los robots</option>
            ${renderOptions(robotOptions)}
          </select>
        </div>
        <div class="filter-group">
          <label class="filter-label" for="filter-cicle"><img src="../_assets/icons/pack/cicle.webp" alt="" class="filter-label-icon" height="36">Ciclo</label>
          <select id="filter-cicle" class="filter-select" data-filter="cicle">
            <option value="all">Todos los ciclos</option>
            ${renderOptions(cycleOptions)}
          </select>
        </div>
        <div class="filter-group">
          <label class="filter-label" for="filter-tematica"><img src="../_assets/icons/pack/tematica.webp" alt="" class="filter-label-icon" height="36">Temática</label>
          <select id="filter-tematica" class="filter-select" data-filter="tematica">
            <option value="all">Todas las temáticas</option>
            ${renderOptions(topicOptions)}
          </select>
        </div>
        <div class="filter-group">
          <label class="filter-label" for="filter-materia"><img src="../_assets/icons/pack/materia.webp" alt="" class="filter-label-icon" height="36">Materia</label>
          <select id="filter-materia" class="filter-select" data-filter="materia">
            <option value="all">Todas las materias</option>
            ${renderOptions(subjectOptions)}
          </select>
        </div>
        <div class="filter-count">
          <span id="situations-count" data-filter-count role="status" aria-live="polite">Mostrando ${total} de ${total} situaciones</span>
          <button type="button" class="btn-reset-filters" data-filter-reset>Restablecer filtros</button>
        </div>
      </div>
      <div class="clean-grid" id="situations-grid">
        ${situacions.map(item => SituationCard({ item, root: '../' })).join('\n        ')}
      </div>
      <p id="situations-empty" data-filter-empty hidden>No hay situaciones con estos filtros. Cambiar los filtros o restablecerlos.</p>
    </div>`
  });
}

module.exports = { SituationsCatalogPage };
