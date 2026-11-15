#!/usr/bin/env node
/**
 * _scripts/dev.js
 *
 * Servidor de desenvolupament local amb Live Reload (0 dependències externes).
 * - Executa el build inicial sense PDF (_scripts/build.js).
 * - Observa canvis a _content/, _templates/, _scripts/, _css/, _js/ i _assets/.
 * - Recompila automàticament quan canvia el Markdown o les plantilles.
 * - Actualitza el navegador en temps real via Server-Sent Events (/__livereload):
 *   · Hot-reload sense perdre l'estat ni l'scroll si només canvia _css/.
 *   · Recàrrega automàtica de la pàgina si canvia el contingut, plantilles o JS.
 */
'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { execFile } = require('node:child_process');
const { setCachedMakeCodeSVG, setCachedMakeCodeByHash } = require('./lib/makecode-cache');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const BUILD_SCRIPT = path.join(__dirname, 'build.js');
const DEFAULT_PORT = Number(process.env.PORT) || 8000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.md': 'text/markdown; charset=utf-8'
};

const LIVE_RELOAD_SNIPPET = `
<!-- Robòtica²⁰⁰ Dev Live Reload -->
<script>
(() => {
  const es = new EventSource('/__livereload');
  es.onmessage = (event) => {
    if (event.data === 'css') {
      document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        const url = new URL(link.href, window.location.origin);
        url.searchParams.set('_lr', Date.now());
        link.href = url.pathname + url.search;
      });
    } else if (event.data === 'reload') {
      window.location.reload();
    }
  };
  es.onerror = () => {
    // El navegador reconectarà automàticament si el servidor es reinicia
  };
})();
</script>
`;

const clients = new Set();

function broadcast(type = 'reload') {
  for (const res of clients) {
    try {
      res.write(`data: ${type}\n\n`);
    } catch (_) {
      clients.delete(res);
    }
  }
}

let isBuilding = false;
let pendingBuild = false;

function runBuild() {
  return new Promise((resolve) => {
    if (isBuilding) {
      pendingBuild = true;
      return resolve(false);
    }
    isBuilding = true;
    const start = Date.now();
    // Sense --pdf: el desenvolupament no genera materials imprimibles.
    execFile(process.execPath, [BUILD_SCRIPT], { cwd: ROOT_DIR }, (error, stdout, stderr) => {
      isBuilding = false;
      const elapsed = Date.now() - start;
      if (error) {
        console.error(`\n✗ Error durant el build (${elapsed} ms):`);
        if (stderr) console.error(stderr.trim());
        else console.error(error.message);
      } else {
        console.log(`⚡ Build completat en ${elapsed} ms`);
      }

      if (pendingBuild) {
        pendingBuild = false;
        runBuild().then(resolve);
      } else {
        resolve(!error);
      }
    });
  });
}

function watchTree(baseDir, onChange) {
  const watchers = new Map();

  function addDir(dirPath) {
    if (watchers.has(dirPath) || !fs.existsSync(dirPath)) return;
    try {
      const watcher = fs.watch(dirPath, (eventType, filename) => {
        if (!filename || filename.startsWith('.') || filename.endsWith('~')) return;
        const fullPath = path.join(dirPath, filename);
        if (fs.existsSync(fullPath)) {
          try {
            if (fs.statSync(fullPath).isDirectory()) addTree(fullPath);
          } catch (_) {}
        }
        onChange(path.relative(ROOT_DIR, fullPath));
      });
      watchers.set(dirPath, watcher);
    } catch (_) {}
  }

  function addTree(dirPath) {
    addDir(dirPath);
    let entries = [];
    try {
      entries = fs.readdirSync(dirPath, { withFileTypes: true });
    } catch (_) {
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        addTree(path.join(dirPath, entry.name));
      }
    }
  }

  addTree(baseDir);
}

function setupWatchers() {
  let debounceTimer = null;
  let needsBuild = false;
  let cssOnly = true;
  const changedFiles = new Set();

  function triggerChange(relPath) {
    // Evitem reaccionar si s'edita el propi dev.js, dist, la memòria cau o si el build està escrivint SVGs a _assets/blocks
    if (relPath === '_scripts/dev.js') return;
    if (relPath.startsWith('dist' + path.sep)) return;
    if (relPath.startsWith('_cache' + path.sep)) return;
    if (isBuilding && relPath.startsWith(path.join('_assets', 'blocks') + path.sep)) return;
    if (isBuilding && relPath === path.join('sim', 'index.html')) return;

    changedFiles.add(relPath);
    if (
      relPath.startsWith('_content' + path.sep) ||
      relPath.startsWith('_templates' + path.sep) ||
      relPath.startsWith('_scripts' + path.sep)
    ) {
      needsBuild = true;
      cssOnly = false;
    } else if (!relPath.startsWith('_css' + path.sep)) {
      cssOnly = false;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const files = Array.from(changedFiles);
      const shouldBuild = needsBuild;
      const isCssOnly = cssOnly && !shouldBuild;

      changedFiles.clear();
      needsBuild = false;
      cssOnly = true;

      const label = files.length === 1 ? files[0] : `${files[0]} (+${files.length - 1} més)`;
      console.log(`\n📝 Canvi detectat: ${label}`);

      // Totes les escriptures a dist passen pel build i el seu bloqueig compartit.
      // Això evita copiar actius mentre un altre procés neteja el directori.
      const ok = await runBuild();
      if (ok) {
        console.log(`🔄 Actualitzant navegador (${clients.size} client/s connectat/s)`);
        broadcast(isCssOnly ? 'css' : 'reload');
      }
    }, 80);
  }

  for (const folder of ['_content', '_templates', '_scripts', '_css', '_js', '_assets', 'sim', 'test-blocks']) {
    watchTree(path.join(ROOT_DIR, folder), triggerChange);
  }
}

function createServer() {
  return http.createServer((req, res) => {
    const parsedUrl = new URL(req.url || '/', 'http://localhost');
    const pathname = decodeURIComponent(parsedUrl.pathname);

    // Endpoint Server-Sent Events per a Live Reload
    if (pathname === '/__livereload') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
      });
      res.write(': connected\n\n');
      clients.add(res);
      req.on('close', () => clients.delete(res));
      return;
    }

    // Endpoint API per actualitzar la memòria cau de blocs MakeCode
    if (pathname === '/__api/cache-makecode' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          let hash = data.hash;
          if (data.code && data.svg) {
            hash = setCachedMakeCodeSVG(data.code, data.svg);
          } else if (data.hash && data.svg) {
            hash = setCachedMakeCodeByHash(data.hash, data.svg);
          }
          console.log(`[makecode-cache] Desa a memòria cau: ${hash}.svg`);
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(JSON.stringify({ ok: true, hash }));
        } catch (err) {
          res.writeHead(400, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(JSON.stringify({ ok: false, error: err.message }));
        }
      });
      return;
    }

    // Resolució segura de fitxer dins de DIST_DIR
    const safeRel = pathname.replace(/^\/+/, '');
    let filePath = path.resolve(DIST_DIR, safeRel);
    if (!filePath.startsWith(DIST_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('403 Forbidden');
      return;
    }

    try {
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        if (!pathname.endsWith('/')) {
          res.writeHead(302, { Location: `${pathname}/${parsedUrl.search}` });
          res.end();
          return;
        }
        filePath = path.join(filePath, 'index.html');
      } else if (!path.extname(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      }

      if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`404 Not Found: ${pathname}`);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      if (ext === '.html') {
        let html = fs.readFileSync(filePath, 'utf8');
        if (html.includes('</body>')) {
          html = html.replace('</body>', `${LIVE_RELOAD_SNIPPET}</body>`);
        } else {
          html += LIVE_RELOAD_SNIPPET;
        }
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-store'
        });
        res.end(html);
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-store'
      });
      fs.createReadStream(filePath).pipe(res);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`500 Internal Server Error: ${err.message}`);
    }
  });
}

// Heartbeat per mantenir vives les connexions SSE
setInterval(() => {
  for (const res of clients) {
    try {
      res.write(': ping\n\n');
    } catch (_) {
      clients.delete(res);
    }
  }
}, 25000).unref();

async function start() {
  console.log('🔨 Executant build inicial...');
  await runBuild();
  setupWatchers();

  const server = createServer();
  let port = DEFAULT_PORT;

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      port += 1;
      server.listen(port);
    } else {
      throw err;
    }
  });

  server.on('listening', () => {
    console.log('\n============================================================');
    console.log(`🚀 Servidor de desenvolupament actiu a: http://localhost:${port}`);
    console.log('👀 Observant canvis a: _content, _templates, _css, _js, _assets');
    console.log('🔄 Live Reload activat (actualització automàtica al navegador)');
    console.log('============================================================\n');
  });

  server.listen(port);
}

start();
