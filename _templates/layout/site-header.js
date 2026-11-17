'use strict';

const { cleanRoot } = require('./utils');

function SiteHeader({ activeNav = '', root = '' } = {}) {
  const active = String(activeNav).toLowerCase();
  const r = cleanRoot(root);
  const isRobots = active === 'robots' || active === 'robotica' || active === 'robotica-educativa';

  return `
  <header class="header">
    <div class="container header-inner">
      <a href="${r}index.html" class="logo">
        <span class="logo-badge"><img src="${r}_assets/icons/logo.svg" alt="Robótica200" class="logo-badge-img"></span>
        <div class="logo-text">
          <span class="logo-name">Robótica<sup>200</sup></span>
          <span class="logo-subtitle">Robótica para docentes</span>
        </div>
      </a>
      <nav class="header-nav" aria-label="Navegación principal">
        <a href="${r}pensamiento-computacional/index.html" class="nav-btn nav-btn-pensament${active === 'pensament' ? ' active' : ''}" data-nav="pensament"${active === 'pensament' ? ' aria-current="page"' : ''}><span class="nav-label">Pensamiento<span class="nav-label-break"> </span>computacional</span></a>
        <a href="${r}robotica-educativa/index.html" class="nav-btn nav-btn-robotica${isRobots ? ' active' : ''}" data-nav="robotica"${isRobots ? ' aria-current="page"' : ''}><span class="nav-label">Robótica<span class="nav-label-break"> </span>educativa</span></a>
        <a href="${r}situaciones-aprendizaje/index.html" class="nav-btn nav-btn-situacions${active === 'situacions' ? ' active' : ''}" data-nav="situacions"${active === 'situacions' ? ' aria-current="page"' : ''}><span class="nav-label">Situaciones<span class="nav-label-break"> </span>de aprendizaje</span></a>
      </nav>
    </div>
  </header>`;
}

module.exports = { SiteHeader };
