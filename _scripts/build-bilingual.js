#!/usr/bin/env node
'use strict';

/**
 * Prototipo local de sitio bilingüe:
 *   /      -> build catalán desde la rama `main`
 *   /es/   -> build castellano desde la rama actual
 *
 * No modifica el contenido ni las plantillas: compone ambos `dist` y añade
 * selector de idioma y alternates hreflang. Pensado para validar la propuesta
 * catalán en raíz + castellano en /es antes de upstream.
 */

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'dist-bilingue');
const CA_WORKTREE = '/tmp/opencode/roboticadocents-ca';
const ES_DIST = path.join(ROOT, 'dist');
const CA_DIST = path.join(CA_WORKTREE, 'dist');

function sh(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { stdio: 'inherit', ...opts });
}

function cleanWorktree() {
  try {
    sh('git', ['worktree', 'remove', '--force', CA_WORKTREE], { cwd: ROOT });
  } catch (_) {
    fs.rmSync(CA_WORKTREE, { recursive: true, force: true });
  }
  try {
    sh('git', ['worktree', 'prune'], { cwd: ROOT });
  } catch (_) {}
}

function buildCatalan() {
  cleanWorktree();
  sh('git', ['worktree', 'add', '--force', CA_WORKTREE, 'main'], { cwd: ROOT });
  sh('node', ['_scripts/build.js'], { cwd: CA_WORKTREE });
}

function buildSpanish() {
  sh('node', ['_scripts/build.js'], { cwd: ROOT });
}

function loadMaps() {
  const legacy = JSON.parse(fs.readFileSync(path.join(ROOT, '_scripts/legacy-content-map.json'), 'utf8'));
  const inverse = {};
  for (const [section, pairs] of Object.entries(legacy.slugs || {})) {
    inverse[section] = {};
    for (const [ca, es] of Object.entries(pairs)) inverse[section][es] = ca;
  }
  return { legacy, inverse };
}

const SIMPLE_PAIRS = [
  ['/', '/es/'],
  ['/activitat/', '/es/actividad/'],
  ['/situacio/', '/es/situacion/'],
  ['/tutorial/', '/es/tutorial/'],
  ['/guia/', '/es/guia/'],
  ['/robot/', '/es/robot/'],
  ['/imprimir/', '/es/imprimir/'],
  ['/sim/', '/es/sim/'],
  ['/pensament-computacional/', '/es/pensamiento-computacional/'],
  ['/situacions-aprenentatge/', '/es/situaciones-aprendizaje/']
];

function splitPath(p) {
  return p.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
}

function caToEs(p, legacy) {
  for (const [ca, es] of SIMPLE_PAIRS) {
    if (p === ca) return es;
  }
  const parts = splitPath(p);
  const [section, slug, ...rest] = parts;
  const suffix = rest.length ? '/' + rest.join('/') : '';
  if (section === 'activitat' && slug) {
    return `/es/actividad/${(legacy.slugs.actividad || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'situacio' && slug) {
    return `/es/situacion/${(legacy.slugs.situacion || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'tutorial' && slug) {
    return `/es/tutorial/${(legacy.slugs.tutorial || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'guia' && slug) {
    return `/es/guia/${(legacy.slugs.guia || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'robot' && slug) return `/es/robot/${slug}/`;
  return '/es/';
}

function esToCa(p, inverse) {
  for (const [ca, es] of SIMPLE_PAIRS) {
    if (p === es) return ca;
  }
  const parts = splitPath(p);
  if (parts[0] === 'es') parts.shift();
  const [section, slug, ...rest] = parts;
  const suffix = rest.length ? '/' + rest.join('/') : '';
  if (section === 'actividad' && slug) {
    return `/activitat/${(inverse.actividad || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'situacion' && slug) {
    return `/situacio/${(inverse.situacion || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'tutorial' && slug) {
    return `/tutorial/${(inverse.tutorial || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'guia' && slug) {
    return `/guia/${(inverse.guia || {})[slug] || slug}${suffix}/`;
  }
  if (section === 'robot' && slug) return `/robot/${slug}/`;
  if (section === 'pensamiento-computacional' && !slug) return '/pensament-computacional/';
  if (section === 'situaciones-aprendizaje' && !slug) return '/situacions-aprenentatge/';
  if (section === 'sim' && !slug) return '/sim/';
  if (section === 'imprimir' && !slug) return '/imprimir/';
  return '/';
}

function prefixSpanishAbsoluteUrls(dir) {
  let count = 0;
  walkHtml(dir, file => {
    const html = fs.readFileSync(file, 'utf8');
    const next = html.replace(/(href|src)=(["'])\/(?!\/|es\/)([^"']*)\2/g, (m, attr, q, rest) => {
      count += 1;
      return `${attr}=${q}/es/${rest}${q}`;
    });
    if (next !== html) fs.writeFileSync(file, next);
  });
  return count;
}

function isRedirectPage(html) {
  return /http-equiv=["']refresh["']/i.test(html) || /data-legacy-redirect/.test(html);
}

function inject(html, { selfPath, caPath, esPath, currentLang, currentLabel, alternateLabel, target }) {
  const selector = `\n<div class="lang-switch" style="position:fixed;top:14px;right:16px;z-index:2147483647;display:flex;gap:6px;align-items:center;padding:6px 10px;border:1px solid #cbd5e1;border-radius:999px;background:#fff;box-shadow:0 4px 14px rgba(15,23,42,.12);font:600 13px/1.2 'Plus Jakarta Sans',system-ui,sans-serif">`
    + `<span style="color:#64748b">${currentLabel}</span>`
    + `<a href="${target}" style="color:#2563eb;text-decoration:none">${alternateLabel}</a>`
    + `</div>\n`;
  const style = `<style id="lang-switch-style">@media (min-width:761px){.header-nav{padding-right:118px}}@media (max-width:760px){.lang-switch{top:12px!important;right:10px!important;font-size:11px!important;padding:5px 8px!important}}</style>`;
  const head = `${style}\n  <link rel="alternate" hreflang="ca" href="${caPath}">\n  <link rel="alternate" hreflang="es" href="${esPath}">\n  <link rel="alternate" hreflang="x-default" href="${caPath}">`;
  let out = html;
  if (out.includes('</head>')) out = out.replace('</head>', `  ${head}\n</head>`);
  if (!out.includes('class="lang-switch"') && out.includes('</body>')) {
    out = out.replace('</body>', `${selector}</body>`);
  }
  return out;
}

function walkHtml(dir, cb, skip = new Set()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (skip.has(entry.name)) continue;
      walkHtml(full, cb, skip);
    }
    else if (entry.name.endsWith('.html')) cb(full);
  }
}

function pagePathFromFile(baseDir, file) {
  const rel = path.relative(baseDir, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
}

function addLanguageLinks(dir, lang, mapper, skip = new Set()) {
  let count = 0;
  walkHtml(dir, file => {
    const html = fs.readFileSync(file, 'utf8');
    if (isRedirectPage(html)) return;
    const pagePath = pagePathFromFile(dir, file);
    const alternate = lang === 'ca' ? mapper.caToEs(pagePath) : mapper.esToCa(pagePath);
    const currentLabel = lang === 'ca' ? 'Català' : 'Castellano';
    const alternateLabel = lang === 'ca' ? 'Castellano' : 'Català';
    const caPath = lang === 'ca' ? pagePath : alternate;
    const esPath = lang === 'ca' ? alternate : pagePath;
    fs.writeFileSync(file, inject(html, {
      selfPath: pagePath,
      caPath,
      esPath,
      currentLang: lang,
      target: alternate,
      currentLabel,
      alternateLabel
    }));
    count += 1;
  }, skip);
  return count;
}

function main() {
  const assembleOnly = process.argv.includes('--assemble-only');
  if (!fs.existsSync(path.join(ROOT, '_scripts/legacy-content-map.json'))) {
    throw new Error('Falta _scripts/legacy-content-map.json');
  }
  if (assembleOnly) {
    console.log('1/3 · reutilizando builds existentes');
    if (!fs.existsSync(CA_DIST) || !fs.existsSync(ES_DIST)) throw new Error('No hay builds previos para --assemble-only');
  } else {
    console.log('1/4 · build catalán desde main');
    buildCatalan();
    console.log('2/4 · build castellano desde traduccion-es');
    buildSpanish();
  }

  console.log(assembleOnly ? '2/3 · componiendo dist-bilingue' : '3/4 · componiendo dist-bilingue');
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  fs.cpSync(CA_DIST, OUT, { recursive: true });
  fs.cpSync(ES_DIST, path.join(OUT, 'es'), { recursive: true });

  const prefixed = prefixSpanishAbsoluteUrls(path.join(OUT, 'es'));
  console.log(`   ${prefixed} URLs absolutas del castellano prefijadas con /es`);

  const { legacy, inverse } = loadMaps();
  const mapper = {
    caToEs: p => caToEs(p, legacy),
    esToCa: p => esToCa(p, inverse)
  };

  const caCount = addLanguageLinks(OUT, 'ca', mapper, new Set(['es']));
  const esCount = addLanguageLinks(path.join(OUT, 'es'), 'es', mapper);
  console.log(`${assembleOnly ? '3/3' : '4/4'} · selector inyectado en ${caCount} páginas CA y ${esCount} páginas ES`);
  console.log(`Listo: ${OUT}`);
  console.log('  CA: /');
  console.log('  ES: /es/');
}

if (require.main === module) main();
