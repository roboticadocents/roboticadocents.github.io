'use strict';

const { Document } = require('../layout/document');

function PresencialPage() {
  return Document({
    title: 'Formació presencial | Robòtica per a docents',
    description: 'Materials de treball de les sessions presencials de robòtica per a docents.',
    root: '../',
    extraHead: '<meta name="robots" content="noindex">\n  <link rel="stylesheet" href="../_css/presencial.css">',
    body: `
    <header class="presencial-intro">
      <p class="presencial-eyebrow">Formació presencial</p>
      <h1>Materials de les sessions</h1>
      <p>Descarrega la presentació i el quadern per seguir la formació i continuar treballant entre sessions.</p>
    </header>
    <section class="presencial-session" aria-labelledby="sessio-1">
      <p class="presencial-eyebrow">Itinerari 4 · Sessió 1</p>
      <h2 id="sessio-1">Programar per aprendre</h2>
      <p class="presencial-summary">Tale-Bot Pro i Matatalab Coding Set, amb una presentació de Coding Express.</p>
      <div class="presencial-download">
        <div>
          <h3>Presentació</h3>
          <p>Els robots, les seues possibilitats educatives i els reptes de la sessió.</p>
        </div>
        <a class="presencial-download-link" href="../_assets/sessions/presentacio-it4-sessio-1.pdf" download>Descarrega la presentació <span>PDF</span></a>
      </div>
      <div class="presencial-download">
        <div>
          <h3>Quadern de treball</h3>
          <p>Guia, índex de fitxes, tots els exercicis i registre del treball autònom. Les pàgines coincideixen amb les referències de la presentació.</p>
        </div>
        <a class="presencial-download-link" href="../output/pdf/sessio-1-handout-revisat.pdf" download>Descarrega el quadern <span>PDF</span></a>
      </div>
      <p class="presencial-note">El ritme i la tria d’exercicis s’adapten al nivell del grup. El quadern permet continuar practicant fins a la sessió següent.</p>
    </section>`
  });
}

module.exports = { PresencialPage };
