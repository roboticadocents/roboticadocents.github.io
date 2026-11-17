'use strict';

const { Document } = require('../layout/document');
const { SectionHero } = require('../components/section-hero');
const { RobotCard } = require('../components/robot-card');

function RobotsCatalogPage({ robots = [] } = {}) {
  return Document({
    title: "Robótica Educativa - Los 6 Robots de Aula | Robótica200",
    description: "Guías didácticas y tutoriales de los 6 robots educativos de aula.",
    activeNav: 'robotica-educativa',
    root: '../',
    heroLayout: true,
    body: `${SectionHero({
      title: 'Robótica educativa',
      description: "Cada robot tiene su página de aprendizaje y sus tutoriales específicos.",
      bannerSrc: '../_assets/banners/robotica.webp',
      bannerAlt: "Robots de Aula",
      backHref: '../index.html',
      backLabel: 'inicio'
    })}
    <div class="clean-grid" id="robots-grid">
      ${robots.map(item => RobotCard({ item, root: '../' })).join('\n      ')}
    </div>`
  });
}

module.exports = { RobotsCatalogPage };
