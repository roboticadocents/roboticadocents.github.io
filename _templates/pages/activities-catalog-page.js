'use strict';

const { Document } = require('../layout/document');
const { SectionHero } = require('../components/section-hero');
const { ActivityCard } = require('../components/activity-card');

function ActivitiesCatalogPage({ activitats = [] } = {}) {
  return Document({
    title: 'Pensamiento Computacional Desconectado | Robótica200',
    description: "Actividades desconectadas de pensamiento computacional para el aula.",
    activeNav: 'pensament',
    root: '../',
    heroLayout: true,
    body: `${SectionHero({
      title: 'Pensamiento Computacional',
      description: "Actividades desconectadas para trabajar instrucciones, patrones, decisiones y datos con el cuerpo y materiales de aula.",
      bannerSrc: '../_assets/banners/pensament-computacional.webp',
      bannerAlt: 'Pensamiento Computacional',
      backHref: '../index.html',
      backLabel: 'inicio'
    })}
    <div class="clean-grid" id="activities-grid">
      ${activitats.map(item => ActivityCard({ item, root: '../' })).join('\n      ')}
    </div>`
  });
}

module.exports = { ActivitiesCatalogPage };
