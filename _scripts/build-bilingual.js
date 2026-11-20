#!/usr/bin/env node
'use strict';

/**
 * Prototipo local de sitio bilingüe:
 *   /      -> build catalán desde la rama `catalan` (original)
 *   /es/   -> build castellano desde la rama actual
 *
 * No modifica el contenido ni las plantillas: compone ambos `dist` y añade
 * selector de idioma y alternates hreflang. Pensado para validar la propuesta
 * catalán en raíz + castellano en /es antes de upstream.
 */

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'dist-bilingue');
const CA_BRANCH = process.env.CA_REF || 'catalan';
const CA_FALLBACK = 'c619386';
const CA_WORKTREE = process.env.CA_WORKTREE || path.join(path.dirname(ROOT), 'roboticadocents-ca');
const ES_DIST = path.join(ROOT, 'dist');
const CA_DIST = path.join(CA_WORKTREE, 'dist');
const BUILD_PDF = process.argv.includes('--pdf');

function sh(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { stdio: 'inherit', ...opts });
}

function ensureCatalanWorktree() {
  try {
    sh('git', ['show-ref', '--verify', '--quiet', `refs/heads/${CA_BRANCH}`], { cwd: ROOT });
  } catch (_) {
    sh('git', ['branch', CA_BRANCH, CA_FALLBACK], { cwd: ROOT });
  }
  const valid = fs.existsSync(path.join(CA_WORKTREE, '_scripts/build.js'));
  if (!valid) {
    if (fs.existsSync(CA_WORKTREE)) {
      try {
        sh('git', ['worktree', 'remove', '--force', CA_WORKTREE], { cwd: ROOT });
      } catch (_) {
        fs.rmSync(CA_WORKTREE, { recursive: true, force: true });
      }
    }
    sh('git', ['worktree', 'add', '--force', CA_WORKTREE, CA_BRANCH], { cwd: ROOT });
  }
}

function buildCatalan() {
  ensureCatalanWorktree();
  const args = ['_scripts/build.js'];
  if (BUILD_PDF) args.push('--pdf');
  sh('node', args, { cwd: CA_WORKTREE });
}

function buildSpanish() {
  const args = ['_scripts/build.js'];
  if (BUILD_PDF) args.push('--pdf');
  sh('node', args, { cwd: ROOT });
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
  ['/presencial/', '/es/presencial/'],
  ['/activitat/', '/es/actividad/'],
  ['/situacio/', '/es/situacion/'],
  ['/tutorial/', '/es/tutorial/'],
  ['/guia/', '/es/guia/'],
  ['/robot/', '/es/robot/'],
  ['/imprimir/', '/es/imprimir/'],
  ['/sim/', '/es/sim/'],
  ['/sim/muntatge-barrera/', '/es/sim/montaje-barrera/'],
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
    if (p === es || p === es.replace(/^\/es/, '')) return ca;
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


function walkFiles(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, cb);
    else cb(full);
  }
}

function sameFile(a, b) {
  const sa = fs.statSync(a);
  const sb = fs.statSync(b);
  if (!sa.isFile() || sa.size !== sb.size) return false;
  const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  return hash(a) === hash(b);
}

function pruneEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) pruneEmptyDirs(path.join(dir, entry.name));
  }
  if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

function dedupeSpanishStatic() {
  let removed = 0;
  let bytes = 0;
  for (const dirName of ['_assets', '_css', '_js']) {
    const esDir = path.join(OUT, 'es', dirName);
    if (!fs.existsSync(esDir)) continue;
    walkFiles(esDir, file => {
      const rel = path.relative(esDir, file);
      const rootFile = path.join(OUT, dirName, rel);
      if (fs.existsSync(rootFile) && sameFile(file, rootFile)) {
        bytes += fs.statSync(file).size;
        fs.unlinkSync(file);
        removed += 1;
      }
    });
    pruneEmptyDirs(esDir);
  }
  return { removed, bytes };
}

function rewriteSpanishAssetUrls() {
  const staticDirs = ['_assets', '_css', '_js'];
  let rewritten = 0;
  walkHtml(path.join(OUT, 'es'), file => {
    const pagePath = pagePathFromFile(path.join(OUT, 'es'), file);
    const base = `https://bilingue.local/es${pagePath}`;
    const html = fs.readFileSync(file, 'utf8');
    let changed = false;
    const next = html.replace(/(href|src|poster)=(["'])([^"']+)\2/g, (match, attr, quote, value) => {
      if (/^(?:https?:|data:|mailto:|tel:|#|\/\/)/i.test(value)) return match;
      let pathname;
      try {
        pathname = new URL(value, base).pathname;
      } catch (_) {
        return match;
      }
      for (const dirName of staticDirs) {
        const esPrefix = `/es/${dirName}/`;
        const rootPrefix = `/${dirName}/`;
        if (pathname.startsWith(esPrefix) || pathname.startsWith(rootPrefix)) {
          const rel = pathname.slice((pathname.startsWith(esPrefix) ? esPrefix : rootPrefix).length);
          const esFile = path.join(OUT, 'es', dirName, rel);
          const target = fs.existsSync(esFile) ? `/es/${dirName}/${rel}` : `/${dirName}/${rel}`;
          if (target !== value) changed = true;
          return `${attr}=${quote}${target}${quote}`;
        }
      }
      return match;
    });
    if (changed) {
      fs.writeFileSync(file, next);
      rewritten += 1;
    }
  });
  return rewritten;
}

function isRedirectPage(html) {
  return /http-equiv=["']refresh["']/i.test(html) || /data-legacy-redirect/.test(html);
}

function inject(html, { selfPath, caPath, esPath, currentLang, currentLabel, alternateLabel, target }) {
  const alternateLang = currentLang === 'ca' ? 'es' : 'ca';
  const selector = `<div class="lang-switch" role="group" aria-label="Idioma">`
    + `<span>${currentLabel}</span>`
    + `<a href="${target}" onclick="try{localStorage.setItem('rd-lang','${alternateLang}')}catch(e){}">${alternateLabel}</a>`
    + `</div>`;
  const style = `<style id="lang-switch-style">.lang-switch{display:inline-flex;align-items:center;gap:.35rem;padding:.35rem .6rem;border:1px solid #cbd5e1;border-radius:999px;background:#fff;font:600 .8rem/1.2 'Plus Jakarta Sans',system-ui,sans-serif;white-space:nowrap}.lang-switch span{color:#64748b}.lang-switch a{color:#2563eb;text-decoration:none}@media(max-width:760px){.header-inner{position:relative}.lang-switch{position:absolute;top:0;right:0;font-size:.7rem;padding:.3rem .5rem}}@media(max-width:420px){.lang-switch span{display:none}.lang-switch{font-size:.68rem;padding:.28rem .45rem}}</style>`;
  const detect = `<script id="lang-detect">(function(){try{var p=localStorage.getItem('rd-lang');if(p)return;var l=((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase();var c=document.documentElement.lang;var t=null;if(l.indexOf('es')===0)t='es';else if(l.indexOf('ca')===0)t='ca';if(!t)return;localStorage.setItem('rd-lang',t);if(t===c)return;var h=document.querySelector('link[rel="alternate"][hreflang="'+t+'"]');if(h)location.replace(h.getAttribute('href'));}catch(e){}})();</script>`;
  const head = `${style}\n  <link rel="alternate" hreflang="ca" href="${caPath}">\n  <link rel="alternate" hreflang="es" href="${esPath}">\n  <link rel="alternate" hreflang="x-default" href="${caPath}">\n  ${detect}`;
  let out = html;
  if (out.includes('</head>')) out = out.replace('</head>', `  ${head}\n</head>`);
  if (!out.includes('class="lang-switch"')) {
    const navRe = /(<nav[^>]*class="[^"]*header-nav[^"]*"[^>]*>[\s\S]*?)(<\/nav>)/;
    if (navRe.test(out)) {
      out = out.replace(navRe, `$1${selector}$2`);
    } else if (out.includes('</header>')) {
      out = out.replace('</header>', `${selector}</header>`);
    } else if (out.includes('</body>')) {
      out = out.replace('</body>', `${selector}</body>`);
    }
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
    const esSelf = pagePath === '/' ? '/es/' : `/es${pagePath}`;
    const caPath = lang === 'ca' ? pagePath : alternate;
    const esPath = lang === 'ca' ? alternate : esSelf;
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
    console.log(`1/4 · build catalán desde ${CA_BRANCH} (${CA_WORKTREE})`);
    buildCatalan();
    console.log('2/4 · build castellano desde traduccion-es');
    buildSpanish();
  }

  console.log(assembleOnly ? '2/3 · componiendo dist-bilingue' : '3/4 · componiendo dist-bilingue');
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  fs.cpSync(CA_DIST, OUT, { recursive: true });
  fs.cpSync(ES_DIST, path.join(OUT, 'es'), { recursive: true });

  const dedupe = dedupeSpanishStatic();
  console.log(`   ${dedupe.removed} assets idénticos deduplicados (${(dedupe.bytes / 1024 / 1024).toFixed(1)} MB)`);
  const rewritten = rewriteSpanishAssetUrls();
  console.log(`   ${rewritten} páginas ES con referencias de assets reescritas`);

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
