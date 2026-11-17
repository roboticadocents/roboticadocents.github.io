'use strict';

const { Document } = require('../layout/document');

function HomePage() {
  return Document({
    title: 'Robótica200 | Robótica para docentes',
    description: 'Recursos abiertos de robótica educativa y pensamiento computacional para maestros y profesores.',
    activeNav: 'inici',
    root: '',
    body: `<div class="home-intro">
  <button type="button" class="home-hero-icon" data-home-robot aria-label="Interactúa con el robot de Robótica 200">
    <svg viewBox="0 0 73.025 75.142" class="home-hero-svg" data-home-robot-svg role="img" aria-label="Robot Robótica 200" xmlns="http://www.w3.org/2000/svg">
      <rect id="antenna" x="27.252" y="0" width="18.521" height="7.408" rx="3.175" fill="#f59e0b"/>
      <g class="antenna-dashes" aria-hidden="true">
        <rect class="antenna-dash antenna-dash-red" x="18.512" y="2.104" width="10" height="3.2" rx="1.6" fill="#ef4444"/>
        <rect class="antenna-dash antenna-dash-yellow" x="31.512" y="2.104" width="10" height="3.2" rx="1.6" fill="#f59e0b"/>
        <rect class="antenna-dash antenna-dash-blue" x="44.512" y="2.104" width="10" height="3.2" rx="1.6" fill="#3b82f6"/>
      </g>
      <rect id="head" x="0" y="8.996" width="73.025" height="66.146" rx="22.49" fill="#2563eb"/>
      <rect id="face" x="7.938" y="21.431" width="57.15" height="41.275" rx="14.552" fill="#0f172a"/>
      <circle id="right_eye" cx="23.161" cy="38.629" r="6.35" fill="#38bdf8"/>
      <circle id="left_eye" cx="49.62" cy="38.629" r="6.35" fill="#38bdf8"/>
      <path id="mouth" d="m40.434 46.66a4.427 3.936 0 0 1-3.915 2.117 4.427 3.936 0 0 1-3.928-2.101l-1.768.793a6.364 5.657 0 0 0 5.698 3.108 6.364 5.657 0 0 0 5.68-3.135z" fill="#38bdf8"/>
    </svg>
  </button>
  <h1 class="home-title">Robótica<sup>200</sup></h1>
  <div class="home-desc"><p>Robótica para docentes</p></div>
</div>
<div class="three-pillars">
  <a href="pensamiento-computacional/index.html" class="pillar-card">
    <div class="pillar-media"><img src="_assets/banners/pensament-computacional.webp" alt="" class="pillar-banner-img" width="800" height="600"></div>
    <h2 class="pillar-title">Pensamiento computacional</h2>
    <p class="pillar-desc">Actividades desconectadas de pensamiento computacional para trabajar la lógica, los algoritmos y la resolución de problemas sin pantallas.</p>
    <div class="pillar-action">Explorar actividades →</div>
  </a>
  <a href="robotica-educativa/index.html" class="pillar-card">
    <div class="pillar-media"><img src="_assets/banners/robotica.webp" alt="" class="pillar-banner-img" width="800" height="600"></div>
    <h2 class="pillar-title">Robótica educativa</h2>
    <p class="pillar-desc">Tutoriales y guías de los 6 robots de aula.</p>
    <div class="pillar-action">Ver los 6 robots →</div>
  </a>
  <a href="situaciones-aprendizaje/index.html" class="pillar-card">
    <div class="pillar-media"><img src="_assets/banners/situacions-aprenentatge.webp" alt="" class="pillar-banner-img" width="800" height="600"></div>
    <h2 class="pillar-title">Situaciones de aprendizaje</h2>
    <p class="pillar-desc">Catálogo curricular filtrable por robot, ciclo educativo, temática transversal y materia de aprendizaje.</p>
    <div class="pillar-action">Abrir catálogo →</div>
  </a>
</div>`
  });
}

module.exports = { HomePage };
