'use strict';

const { escapeHTML, escapeAttr } = require('../layout/utils');
const { NavBack } = require('../layout/nav-back');

function SectionHero({
  title = '',
  description = '',
  bannerSrc = '',
  bannerAlt = '',
  backHref = '../index.html',
  backLabel = 'inicio',
  isRobotHero = false,
  robotSlug = ''
} = {}) {
  return `  <section class="section-hero${isRobotHero ? ` section-hero-${escapeAttr(robotSlug)}` : ''}" data-section-hero${isRobotHero ? ` data-robot="${escapeAttr(robotSlug)}"` : ''}>
    <div class="container section-hero-inner">
      ${NavBack({ href: backHref, label: backLabel })}
      <h1 class="section-hero-title">${escapeHTML(title)}</h1>
      <div class="section-hero-body">
        <div class="section-hero-media">
          <img src="${escapeAttr(bannerSrc)}" alt="${escapeAttr(bannerAlt || title)}" class="section-hero-img" width="800" height="600">
        </div>
        ${description ? `<p class="section-hero-desc">${escapeHTML(description)}</p>` : ''}
        <div class="accent-dashes" aria-hidden="true"><span class="dash dash-red"></span><span class="dash dash-yellow"></span><span class="dash dash-blue"></span></div>
      </div>
    </div>
  </section>`;
}

module.exports = { SectionHero };
