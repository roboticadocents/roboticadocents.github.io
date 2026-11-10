#!/usr/bin/env node
/**
 * _scripts/build.js
 *
 * Generador estàtic (0 dependències externes) per a Robòtica²⁰⁰.
 * Compila els fitxers Markdown d'_content/ amb _scripts/lib/markdown.js i
 * assembla totes les pàgines HTML directament a les rutes del projecte
 * utilitzant els components modulars d'_templates/.
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const renderer = require('./lib/markdown');
const { ACTIVITY_TOPICS } = require('./lib/activity-topics');
const { buildAllBlocks } = require('./lib/blocks');
const { warmMakeCodeCache } = require('./lib/makecode-cache');

const { HomePage } = require('../_templates/pages/home-page');
const { ActivitiesCatalogPage } = require('../_templates/pages/activities-catalog-page');
const { RobotsCatalogPage } = require('../_templates/pages/robots-catalog-page');
const { SituationsCatalogPage } = require('../_templates/pages/situations-catalog-page');
const { DetailPage } = require('../_templates/pages/detail-page');
const { RobotPage } = require('../_templates/pages/robot-page');
const { SituationPage } = require('../_templates/pages/situation-page');
const { RedirectPage } = require('../_templates/pages/redirect-page');
const { Document } = require('../_templates/layout/document');
const { escapeHTML, escapeAttr } = require('../_templates/layout/utils');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
let includePDFs = false;

function parseOrder(value, defaultOrder = 9999) {
  const n = parseInt(String(value ?? '').trim(), 10);
  return Number.isNaN(n) ? defaultOrder : n;
}

function slugifyBadge(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

function prepareDist() {
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // Copiar actius estàtics necessaris
  for (const folder of ['_assets', '_css', '_js']) {
    const src = path.join(ROOT_DIR, folder);
    const dest = path.join(DIST_DIR, folder);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true });
    }
  }

  const nojekyll = path.join(ROOT_DIR, '.nojekyll');
  if (fs.existsSync(nojekyll)) {
    fs.copyFileSync(nojekyll, path.join(DIST_DIR, '.nojekyll'));
  }
}

function writeHTML(relPath, html) {
  const fullPath = path.join(DIST_DIR, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, html, 'utf8');
}

function cleanSubdirectories(sectionDir) {
  const fullDir = path.join(DIST_DIR, sectionDir);
  if (!fs.existsSync(fullDir)) return;
  for (const entry of fs.readdirSync(fullDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      fs.rmSync(path.join(fullDir, entry.name), { recursive: true, force: true });
    }
  }
}

function buildActivities() {
  cleanSubdirectories('activitat');
  const dir = path.join(ROOT_DIR, '_content/activitats');
  const files = fs.readdirSync(dir)
    .filter(f => f.startsWith('activitat-') && f.endsWith('.md'))
    .sort();
  const items = [];

  for (const file of files) {
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    const rendered = renderer.parse(source, `https://robotica200.local/_content/activitats/${file}`);
    const data = rendered.data;
    if (String(data.active ?? 'true').toLowerCase() !== 'true') continue;

    const slug = file.replace(/^activitat-/, '').replace(/\.md$/, '');
    const title = String(data.title || slug).trim();
    const description = String(data.description || '').trim();
    if (!ACTIVITY_TOPICS.includes(data.topic)) {
      throw new Error(`${file}: topic desconegut. Trieu un de: ${ACTIVITY_TOPICS.join(', ')}`);
    }
    const badges = [];
    if (data.topic) badges.push({ text: data.topic, primary: true });
    if (data.cycle_label || data.cycle) badges.push({ text: data.cycle_label || data.cycle, primary: false });
    if (data.duration) badges.push({ text: `⏱️ ${data.duration}`, primary: false });

    writeHTML(`activitat/${slug}/index.html`, DetailPage({
      title,
      description,
      activeNav: 'pensament',
      root: '../../',
      backHref: '../../pensament-computacional/index.html',
      backLabel: 'Pensament computacional',
      printHref: includePDFs ? `../../imprimir/activitats/${slug}.pdf` : '',
      badges,
      content: rendered.html
    }));

    items.push({
      order: parseOrder(data.order),
      slug,
      record: {
        id: `activitat-${slug}`,
        slug,
        url: `activitat/${slug}/index.html`,
        titol: title,
        image: data.image || '',
        image_alt: data.image_alt || '',
        tag: data.topic || '',
        cicle: data.cycle_label || data.cycle || '',
        durada: data.duration || '',
        descripcio: description
      }
    });
  }

  writeHTML('activitat/index.html', RedirectPage({
    title: 'Activitat | Robòtica²⁰⁰',
    activeNav: 'pensament',
    fallbackHref: '../pensament-computacional/index.html',
    fallbackLabel: 'Tornar a Pensament computacional'
  }));

  items.sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
  return items.map(i => i.record);
}

function buildTutorials() {
  cleanSubdirectories('tutorial');
  const dir = path.join(ROOT_DIR, '_content/tutorials');
  const files = fs.readdirSync(dir)
    .filter(f => f.startsWith('tutorial-') && f.endsWith('.md'))
    .sort();
  const robotDisplay = {
    ce: ['coding-express', 'Coding Express'],
    cr: ['codey-rocky', 'Codey Rocky'],
    cs: ['coding-set', 'Coding Set'],
    mb: ['microbit', 'Micro:bit'],
    sp: ['spike', 'Spike'],
    tb: ['tale-bot', 'Tale-Bot']
  };
  const items = [];

  for (const file of files) {
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    const rendered = renderer.parse(source, `https://robotica200.local/_content/tutorials/${file}`);
    const data = rendered.data;
    if (String(data.active ?? 'true').toLowerCase() !== 'true') continue;

    const slug = file.replace(/^tutorial-/, '').replace(/\.md$/, '');
    const prefix = slug.split('-')[0];
    const [defRobot, defLabel] = robotDisplay[prefix] || ['altres', 'Robot'];
    const robot = String(data.robot || defRobot).toLowerCase();
    const robotLabel = data.robot_label || defLabel;
    const title = String(data.title || slug).trim();
    const description = String(data.description || '').trim();

    let image = data.image || '';
    if (!image) {
      const exts = ['.webp', '.png', '.jpg', '.jpeg'];
      const found = exts.find(ext => fs.existsSync(path.join(ROOT_DIR, `_assets/tutorials/${slug}${ext}`)));
      image = found ? `_assets/tutorials/${slug}${found}` : `_assets/tutorials/${slug}.webp`;
    }

    const badges = [];
    if (robotLabel || robot) badges.push({ text: robotLabel || robot, primary: true });
    if (data.level) badges.push({ text: data.level, primary: false });
    if (data.duration) badges.push({ text: `⏱️ ${data.duration}`, primary: false });

    writeHTML(`tutorial/${slug}/index.html`, DetailPage({
      title,
      description,
      activeNav: 'robots',
      root: '../../',
      backHref: `../../robot/${robot}/index.html`,
      backLabel: robotLabel || robot || 'robots',
      printHref: includePDFs ? `../../imprimir/tutorials/${slug}.pdf` : '',
      badges,
      content: rendered.html
    }));

    const dificultat = data.level || '';
    items.push({
      robot,
      order: parseOrder(data.order),
      slug,
      record: {
        id: `tutorial-${slug}`,
        slug,
        robot,
        robotLabel,
        url: `tutorial/${slug}/index.html`,
        imatge: image,
        titol: title,
        dificultat,
        dificultatSlug: slugifyBadge(dificultat),
        durada: data.duration || '',
        descripcio: description
      }
    });
  }

  writeHTML('tutorial/index.html', RedirectPage({
    title: 'Tutorial | Robòtica²⁰⁰',
    activeNav: 'robots',
    fallbackHref: '../robotica-educativa/index.html',
    fallbackLabel: 'Tornar a Robòtica educativa'
  }));

  items.sort((a, b) => a.robot.localeCompare(b.robot) || a.order - b.order || a.slug.localeCompare(b.slug));
  return items.map(i => i.record);
}

function buildRobots(tutorials) {
  cleanSubdirectories('robot');
  const robotMeta = [
    {
      id: 'robot-coding-express',
      slug: 'coding-express',
      prefix: 'ce',
      nom: 'Coding Express',
      cicle: 'Infantil',
      edat: 'Infantil',
      descripcio: 'El tren interactiu dels colors i el pensament computacional primerenc.',
      colors: ['#e4242b', '#fec002'],
      order: 1
    },
    {
      id: 'robot-tale-bot',
      slug: 'tale-bot',
      prefix: 'tb',
      nom: 'Tale-Bot',
      cicle: 'Infantil i primer cicle',
      edat: 'Infantil i primer cicle',
      descripcio: 'El robot narrador que parla, llegeix mapes interactius i dibuixa.',
      colors: ['#ea580c', '#804cbd'],
      order: 2
    },
    {
      id: 'robot-coding-set',
      slug: 'coding-set',
      prefix: 'cs',
      nom: 'Coding Set',
      cicle: 'Infantil i primer cicle',
      edat: 'Infantil i primer cicle',
      descripcio: 'Programació tangible sense pantalles amb Matatalab.',
      colors: ['#16a34a', '#fc7813'],
      order: 3
    },
    {
      id: 'robot-codey-rocky',
      slug: 'codey-rocky',
      prefix: 'cr',
      nom: 'Codey Rocky',
      cicle: 'Primer i segon cicle',
      edat: 'Primer i segon cicle',
      descripcio: 'El robot amb pantalla LED 16 × 8, sensors i moviment amb orugues.',
      colors: ['#0079dc', '#64748b'],
      order: 4
    },
    {
      id: 'robot-spike',
      slug: 'spike',
      prefix: 'sp',
      nom: 'Spike',
      cicle: 'Segon cicle',
      edat: 'Segon cicle',
      descripcio: "Mecatrònica, engranatges i sensors d'alta precisió de LEGO Education.",
      colors: ['#ca8a04', '#0284c7'],
      order: 5
    },
    {
      id: 'robot-microbit',
      slug: 'microbit',
      prefix: 'mb',
      nom: 'Micro:bit',
      cicle: 'Segon i tercer cicle',
      edat: 'Segon i tercer cicle',
      descripcio: 'La placa microcontroladora per a projectes oberts i ciutadans.',
      colors: ['#db2777', '#facc15'],
      order: 6
    }
  ];

  const robots = [];
  for (const r of robotMeta) {
    const slug = r.slug;
    const mdPath = path.join(ROOT_DIR, `_content/robots/robot-${slug}.md`);
    const source = fs.readFileSync(mdPath, 'utf8');
    const rendered = renderer.parse(source, `https://robotica200.local/_content/robots/robot-${slug}.md`);
    const data = rendered.data;
    const robotTutorials = tutorials.filter(t => t.robot === slug);

    const nom = data.title || r.nom;
    const cicle = data.cicle || data.age || r.cicle || r.edat;
    const descripcio = data.description || r.descripcio;

    writeHTML(`robot/${slug}/index.html`, RobotPage({
      robotSlug: slug,
      printHref: includePDFs ? `../../imprimir/robots/${slug}.pdf` : '',
      title: nom,
      description: descripcio,
      root: '../../',
      robotLead: rendered.robotLead,
      robotHighlightTitle: rendered.robotHighlightTitle,
      robotHighlightBody: rendered.robotHighlightBody,
      tutorialItems: robotTutorials,
      resources: data.official_resources || [],
      techInfo: data.tech_info || '',
      statusNote: data.status_note || '',
      statusSource: data.status_source || '',
      statusSourceLabel: data.status_source_label || '',
      specs: data.specs || []
    }));

    robots.push({
      ...r,
      nom,
      cicle,
      edat: cicle,
      descripcio,
      url: `robot/${slug}/index.html`,
      tutorials: robotTutorials.length
    });
  }

  writeHTML('robot/index.html', RedirectPage({
    title: 'Robot | Robòtica²⁰⁰',
    activeNav: 'robots',
    fallbackHref: '../robotica-educativa/index.html',
    fallbackLabel: 'Tornar a Robòtica educativa'
  }));

  return robots;
}

function buildGuides() {
  cleanSubdirectories('guia');
  const dir = path.join(ROOT_DIR, '_content/guies');
  const files = fs.readdirSync(dir)
    .filter(f => f.startsWith('guia-') && f.endsWith('.md'))
    .sort();

  const guideBack = {
    'pensament-computacional': ['../../pensament-computacional/index.html', 'Activitats de pensament computacional', 'pensament'],
    'robotica-educativa': ['../../robotica-educativa/index.html', 'Catàleg de robòtica', 'robots'],
    'situacions-aprenentatge': ['../../situacions-aprenentatge/index.html', "Situacions d'aprenentatge", 'situacions'],
    'fira-descobertes': ['../../situacions-aprenentatge/index.html', "Situacions d'aprenentatge", 'situacions']
  };

  let count = 0;
  for (const file of files) {
    const slug = file.replace(/^guia-/, '').replace(/\.md$/, '');
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    const rendered = renderer.parse(source, `https://robotica200.local/_content/guies/${file}`);
    const data = rendered.data;
    const title = String(data.title || slug).trim();
    const description = String(data.description || '').trim();
    const [backHref, backLabel, activeNav] = guideBack[slug] || ['../../index.html', 'Inici', 'inici'];

    writeHTML(`guia/${slug}/index.html`, DetailPage({
      title,
      description,
      activeNav,
      root: '../../',
      backHref,
      backLabel,
      printHref: includePDFs ? `../../imprimir/guies/${slug}.pdf` : '',
      badges: [{ text: data.tag || 'Guia docent', primary: true }],
      content: rendered.html
    }));
    count += 1;
  }

  writeHTML('guia/index.html', RedirectPage({
    title: 'Guia docent | Robòtica²⁰⁰',
    activeNav: 'inici',
    fallbackHref: '../index.html',
    fallbackLabel: 'Tornar a Inici'
  }));

  return count;
}

function buildSituations() {
  cleanSubdirectories('situacio');
  const dir = path.join(ROOT_DIR, '_content/situacions');
  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && !f.startsWith('TEMPLATE-'))
    .sort();
  const robotDisplay = {
    'coding-express': 'Coding Express',
    'tale-bot': 'Tale-Bot',
    'coding-set': 'Coding Set',
    'codey-rocky': 'Codey Rocky',
    'spike': 'Spike',
    'microbit': 'Micro:bit',
    'desendollat': 'Desendollat (Sense robot)'
  };

  const situations = [];
  for (const file of files) {
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    const parsed = renderer.parse(source, `https://robotica200.local/_content/situacions/${file}`);
    const editorial = parsed.data;
    if (String(editorial.active || '').toLowerCase() !== 'true') continue;

    const slug = file.replace(/\.md$/, '');
    const title = String(editorial.title || slug).trim();
    let robot = String(editorial.robot || '').toLowerCase();
    if (robot === 'lego-coding-express') robot = 'coding-express';
    else if (robot === 'talebot') robot = 'tale-bot';
    else if (robot === 'codingset') robot = 'coding-set';
    else if (robot === 'codeyrocky') robot = 'codey-rocky';

    const robotLabel = editorial.robot_label || robotDisplay[robot] || (robot.charAt(0).toUpperCase() + robot.slice(1));
    const cicle = editorial.cycle || '';
    const cicleLabel = editorial.cycle_label || cicle;
    const materia = editorial.subject || '';
    const materiaLabel = editorial.subject_label || materia;
    const tematica = editorial.theme || '';
    const tematicaLabel = editorial.theme_label || tematica;
    const durada = editorial.duration || editorial.sessions || '';
    const repte = editorial.challenge || '';

    const badges = [];
    const robotIcon = editorial.robot_icon || (robot ? `${robot}.webp` : '');
    const safeIcon = robotIcon && /^[a-z0-9-]+\.(?:webp|png|svg)$/i.test(robotIcon) ? `../../_assets/icons/${robotIcon}` : '';
    if (robotLabel || robot) badges.push({ text: robotLabel || robot, primary: true, icon: safeIcon });
    if (cicleLabel) badges.push({ text: cicleLabel, primary: false });
    if (materiaLabel) badges.push({ text: materiaLabel, primary: false });
    if (durada) badges.push({ text: `⏱️ ${durada}`, primary: false });

    const contentHasChallenge = /data-section-group="intro"/.test(parsed.html);
    const showChallenge = Boolean(repte && !contentHasChallenge);

    const imgMatch = source.match(/!\[(.*?)\]\((.*?)\)/);
    const imatge = (editorial.image || (imgMatch ? imgMatch[2].replace(/^(\.\.\/)+/, '') : '')).trim();
    const imatgeAlt = imgMatch ? imgMatch[1].trim() : title;

    writeHTML(`situacio/${slug}/index.html`, SituationPage({
      slug,
      title,
      description: String(editorial.description || repte || '').trim(),
      root: '../../',
      backHref: `../../situacions-aprenentatge/index.html#situacio-sa-${slug}`,
      backLabel: "Situacions d'Aprenentatge",
      printHref: includePDFs ? `../../imprimir/situacions/${slug}.pdf` : '',
      badges,
      themeLabel: tematicaLabel,
      challenge: repte,
      showChallenge,
      content: parsed.html
    }));

    situations.push({
      id: `situacio-sa-${slug}`,
      slug,
      url: `situacio/${slug}/index.html`,
      titol: title,
      robot,
      robotLabel,
      cicle,
      cicleLabel,
      tematica,
      tematicaLabel,
      materia,
      materiaLabel,
      sessions: durada,
      repte,
      imatge,
      imatgeAlt
    });
  }

  writeHTML('situacio/index.html', RedirectPage({
    title: 'Situació d’aprenentatge | Robòtica²⁰⁰',
    activeNav: 'situacions',
    fallbackHref: '../situacions-aprenentatge/index.html',
    fallbackLabel: "Tornar a Situacions d'Aprenentatge"
  }));

  return situations;
}

function buildPrintables() {
  const cacheDir = process.env.ROBOTICA_PDF_CACHE || path.join(ROOT_DIR, '.cache/print-pdfs');
  const result = spawnSync('python3', [path.join(__dirname, 'md_to_typst.py'), '--output', DIST_DIR, '--cache-dir', cacheDir], {
    cwd: ROOT_DIR,
    encoding: 'utf8',
    maxBuffer: 8 * 1024 * 1024
  });
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || 'No s’han pogut generar els materials imprimibles.').trim());
  }
  const payload = JSON.parse(result.stdout);
  console.log(`  - PDF: ${payload.stats.reused} reutilitzats, ${payload.stats.generated} regenerats; recull global ${payload.stats.globalCached ? 'reutilitzat' : 'regenerat'}`);
  const groups = new Map();
  for (const item of payload.items) {
    const key = item.webGroup || item.categoryLabel;
    if (!groups.has(key)) groups.set(key, { label: key, categories: new Map() });
    const group = groups.get(key);
    if (!group.categories.has(item.category)) group.categories.set(item.category, { label: item.categoryLabel, items: [] });
    group.categories.get(item.category).items.push(item);
  }
  const groupHTML = Array.from(groups.values()).map(group => {
    const categoryHTML = Array.from(group.categories.values()).map(category => `
      ${group.categories.size > 1 ? `<h3>${escapeHTML(category.label)}</h3>` : ''}
      <ul>${category.items.map(item => `<li><span>${escapeHTML(item.title)}</span><a href="../${escapeAttr(item.pdf)}" download>Descarrega el PDF</a></li>`).join('')}</ul>`).join('\n');
    return `
    <section class="printable-group">
      <h2>${escapeHTML(group.label)}</h2>
      ${categoryHTML}
    </section>`;
  }).join('\n');
  writeHTML('imprimir/index.html', Document({
    title: 'Materials imprimibles | Robòtica²⁰⁰',
    description: 'Descarrega activitats, tutorials, guies i situacions d’aprenentatge en PDF.',
    activeNav: 'imprimir',
    root: '../',
    body: `<article class="detail-page-card printables-page">
      <div class="detail-page-header"><h1 class="detail-page-title">Materials imprimibles</h1>
      <p class="detail-intro">Versions preparades per imprimir, generades directament des dels continguts Markdown.</p>
      <p class="printables-all"><a class="btn-primary" href="../imprimir/robotica200-complet.pdf" download>Descarrega el recull complet (PDF)</a></p></div>
      ${groupHTML}
    </article>`
  }));
  return payload.items;
}

function scanMakeCodeSnippets() {
  const contentDir = path.join(ROOT_DIR, '_content');
  const snippets = [];
  function scan(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(full);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const text = fs.readFileSync(full, 'utf8');
        const matches = text.matchAll(/```(?:makecode)\s*([\s\S]*?)```/gi);
        for (const m of matches) {
          const code = m[1].trim();
          if (code) snippets.push(code);
        }
      }
    }
  }
  scan(contentDir);
  return snippets;
}

async function build({ pdf = false } = {}) {
  includePDFs = pdf;
  prepareDist();

  const snippets = scanMakeCodeSnippets();
  if (snippets.length > 0) {
    await warmMakeCodeCache(snippets);
  }

  const blocks = buildAllBlocks(path.join(DIST_DIR, '_assets/blocks'));
  const activitats = buildActivities();
  const tutorials = buildTutorials();
  const robots = buildRobots(tutorials);
  const guidesCount = buildGuides();
  const situacions = buildSituations();
  const printables = includePDFs ? buildPrintables() : [];
  if (!includePDFs) {
    writeHTML('imprimir/index.html', Document({
      title: 'Materials imprimibles | Robòtica²⁰⁰',
      activeNav: 'imprimir',
      root: '../',
      body: `<article class="detail-page-card"><h1>Materials imprimibles</h1>
        <p>Aquesta versió del web no inclou els materials imprimibles.</p></article>`
    }));
  }

  const robotOptions = [
    ['coding-express', 'Coding Express'],
    ['tale-bot', 'Tale-Bot'],
    ['coding-set', 'Coding Set'],
    ['codey-rocky', 'Codey Rocky'],
    ['spike', 'SPIKE Prime'],
    ['microbit', 'Micro:bit'],
    ['desendollat', 'Desendollat (sense robot)']
  ];
  const cycleOptions = [
    ['infantil', 'Educació Infantil'],
    ['primer-cicle', 'Primer cicle'],
    ['segon-cicle', 'Segon cicle'],
    ['tercer-cicle', 'Tercer cicle']
  ];
  const topicOptions = Array.from(new Map(situacions.map(item => [item.tematica, item.tematicaLabel])).entries());
  const subjectOptions = Array.from(new Map(situacions.map(item => [item.materia, item.materiaLabel])).entries());

  writeHTML('index.html', HomePage());
  writeHTML('pensament-computacional/index.html', ActivitiesCatalogPage({ activitats }));
  writeHTML('robotica-educativa/index.html', RobotsCatalogPage({ robots }));
  writeHTML('situacions-aprenentatge/index.html', SituationsCatalogPage({
    situacions,
    robotOptions,
    cycleOptions,
    topicOptions,
    subjectOptions
  }));

  console.log('✓ Build estàtic completat amb èxit:');
  console.log(`  - ${activitats.length} activitats (/activitat/<slug>/index.html)`);
  console.log(`  - ${tutorials.length} tutorials (/tutorial/<slug>/index.html)`);
  console.log(`  - ${robots.length} robots (/robot/<slug>/index.html)`);
  console.log(`  - ${guidesCount} guies docents (/guia/<slug>/index.html)`);
  console.log(`  - ${situacions.length} situacions d'aprenentatge (/situacio/<slug>/index.html)`);
  console.log(includePDFs
    ? `  - ${printables.length} documents imprimibles i recull global (/imprimir/)`
    : '  - PDF omesos (utilitza --pdf per generar-los)');
  console.log(`  - ${blocks.length} diagrames de blocs SVG (_assets/blocks/*.svg)`);
}

// Compartit entre builds manuals i servidors dev del mateix projecte.
async function main(options = {}) {
  const os = require('node:os');
  const crypto = require('node:crypto');
  const key = crypto.createHash('sha256').update(ROOT_DIR).digest('hex').slice(0, 20);
  const lockPath = path.join(os.tmpdir(), `robotica200-build-${key}.lock`);
  let lock;
  while (lock === undefined) {
    try {
      lock = fs.openSync(lockPath, 'wx');
      fs.writeFileSync(lock, String(process.pid));
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
      try {
        const pid = Number(fs.readFileSync(lockPath, 'utf8'));
        if (pid > 0) {
          try { process.kill(pid, 0); }
          catch (probeError) {
            if (probeError.code === 'ESRCH') fs.unlinkSync(lockPath);
          }
        }
      } catch (readError) {
        if (readError.code !== 'ENOENT') throw readError;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  const ownedLock = fs.fstatSync(lock);
  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    try {
      // No eliminem un bloqueig nou si el nostre ja ha desaparegut.
      const current = fs.statSync(lockPath);
      if (current.dev === ownedLock.dev && current.ino === ownedLock.ino) {
        fs.unlinkSync(lockPath);
      }
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    } finally {
      fs.closeSync(lock);
    }
  };
  process.once('exit', release);
  try {
    return await build(options);
  } finally {
    process.removeListener('exit', release);
    release();
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.some(arg => arg !== '--pdf')) {
    console.error('Ús: node _scripts/build.js [--pdf]');
    process.exit(1);
  }
  main({ pdf: args.includes('--pdf') }).catch(err => {
    console.error('✗ Error durant el build:', err);
    process.exit(1);
  });
}

module.exports = { main, DIST_DIR, ROOT_DIR, prepareDist };
