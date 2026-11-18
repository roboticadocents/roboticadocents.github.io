'use strict';

const { Document } = require('../layout/document');

function PresencialPage() {
  return Document({
    title: 'Formación presencial | Robótica para docentes',
    description: 'Materiales de trabajo de las sesiones presenciales de robótica para docentes.',
    root: '../',
    extraHead: '<meta name="robots" content="noindex">\n  <link rel="stylesheet" href="../_css/presencial.css">',
    body: `
    <header class="presencial-intro">
      <p class="presencial-eyebrow">Formación presencial</p>
      <h1>Materiales de las sesiones</h1>
      <p>Descarga la presentación y el cuaderno para seguir la formación y continuar trabajando entre sesiones.</p>
    </header>
    <section class="presencial-session" aria-labelledby="sesion-1">
      <p class="presencial-eyebrow">Itinerario 4 · Sesión 1</p>
      <h2 id="sesion-1">Programar para aprender</h2>
      <p class="presencial-summary">Tale-Bot Pro y Matatalab Coding Set, con una presentación de Coding Express.</p>
      <div class="presencial-download">
        <div>
          <h3>Presentación</h3>
          <p>Los robots, sus posibilidades educativas y los retos de la sesión.</p>
        </div>
        <a class="presencial-download-link" href="../_assets/sessions/presentacio-it4-sessio-1.pdf" download>Descarga la presentación <span>PDF</span></a>
      </div>
      <div class="presencial-download">
        <div>
          <h3>Cuaderno de trabajo</h3>
          <p>Guía, índice de fichas, todos los ejercicios y registro del trabajo autónomo. Las páginas coinciden con las referencias de la presentación.</p>
        </div>
        <a class="presencial-download-link" href="../output/pdf/sessio-1-handout-revisat.pdf" download>Descarga el cuaderno <span>PDF</span></a>
      </div>
      <p class="presencial-note">El ritmo y la elección de ejercicios se adaptan al nivel del grupo. El cuaderno permite seguir practicando hasta la sesión siguiente.</p>
    </section>`
  });
}

module.exports = { PresencialPage };
