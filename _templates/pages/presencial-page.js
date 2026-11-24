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
          <p>Versió compacta de 20 pàgines amb guia, índex, tots els exercicis i registre del treball autònom. Les pàgines coincideixen amb les referències de la presentació.</p>
        </div>
        <a class="presencial-download-link" href="../output/pdf/sessio-1-handout-compacte.pdf" download>Descarrega el quadern <span>PDF</span></a>
      </div>
      <p class="presencial-note">El ritme i la tria d’exercicis s’adapten al nivell del grup. El quadern permet continuar practicant fins a la sessió següent.</p>
    </section>
    <section class="presencial-session" aria-labelledby="sessio-2">
      <p class="presencial-eyebrow">Itinerari 4 · Sessió 2</p>
      <h2 id="sessio-2">Codey Rocky · Dels botons als sensors</h2>
      <p class="presencial-summary">Posada en marxa, moviment, botons, eixides, sensors i condicions. Activitats compartides per a paper, simulador i robot.</p>
      <div class="presencial-download">
        <div><h3>Presentació</h3><p>Cinc etapes: preparar, activar respostes, controlar el moviment, respondre als sensors i aplicar-ho a l’aula. Ampliacions opcionals al final; les pàgines remeten al recull de fitxes de Codey.</p></div>
        <a class="presencial-download-link" href="../_assets/sessions/presentacio-it4-sessio-2.pdf" download>Descarrega la presentació <span>PDF</span></a>
      </div>
      <p><a href="../_assets/sessions/marp/it4-sessio-2.html">Obri la presentació al navegador</a></p>
      <div class="presencial-download">
        <div><h3>Posada en marxa de Codey Rocky</h3><p>Connexió USB, modes En viu i Càrrega, primera prova sense cable i resolució de problemes, amb referències al manual oficial.</p></div>
        <a class="presencial-download-link" href="../tutorial/cr-primeres-passes/">Obri la guia <span>Web</span></a>
      </div>
      <p><a href="https://support.makeblock.com/hc/en-us/article_attachments/13133887873047">Manual oficial de Codey Rocky (PDF, anglés)</a> · <a href="https://support.makeblock.com/hc/en-us/articles/1500008637961-Program-Codey-Rocky-with-mBlock-5">Connexió i programació: instruccions oficials</a></p>
      <div class="presencial-download">
        <div><h3>Quadern de treball</h3><p>Guia del taller, índex, registre i les nou fitxes de Codey Rocky.</p></div>
        <a class="presencial-download-link" href="../_assets/sessions/it4-sessio-2-handout.pdf" download>Descarrega el quadern <span>PDF</span></a>
      </div>
      <div class="presencial-download">
        <div><h3>Fitxes de l’alumnat</h3><p>Nou activitats, 27 exercicis i espai per registrar prediccions, resultats i canvis. Recull de 18 pàgines.</p></div>
        <a class="presencial-download-link" href="../_assets/activitats/kits/cr-fitxes-tres-entorns.pdf" download>Descarrega les fitxes <span>PDF</span></a>
      </div>
      <div class="presencial-download">
        <div><h3>Solucionari docent</h3><p>Respostes i possibles programes en un document separat de nou pàgines.</p></div>
        <a class="presencial-download-link" href="../_assets/activitats/kits/cr-solucions-tres-entorns.pdf" download>Descarrega el solucionari <span>PDF</span></a>
      </div>
      <p class="presencial-note">Trieu els exercicis segons el nivell i el ritme del grup. Els reptes de sensors i seguiment de línia permeten aprofundir. <a href="../robot/codey-rocky/#activitats">Obri les activitats de Codey Rocky</a> · <a href="../sim/?robot=codey-rocky">Obri el simulador</a></p>
    </section>`
  });
}

module.exports = { PresencialPage };
