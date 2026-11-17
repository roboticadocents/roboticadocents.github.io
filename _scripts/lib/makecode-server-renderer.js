// check-es:skip
'use strict';

/**
 * _scripts/lib/makecode-server-renderer.js
 *
 * Renderitzador headless al servidor per a blocs MakeCode oficials de Microsoft micro:bit.
 * Utilitza un procés de Chromium/Chrome en segon pla per interactuar amb
 * https://makecode.microbit.org/--docs?render=1 mitjançant el protocol postMessage
 * oficial de MakeCode, generant fitxers SVG purs i autònoms amb la matriu de LEDs 5x5 real,
 * les formes exactes de Blockly i la tipografia oficial.
 *
 * 0 dependències externes de npm.
 */

const http = require('node:http');
const { spawn } = require('node:child_process');

function findBrowserBinary() {
  const candidates = [
    'google-chrome',
    'google-chrome-stable',
    'chromium',
    'chromium-browser'
  ];
  return candidates[0];
}

/**
 * Renderitza un lot de fragments MakeCode cridant al motor oficial de makecode.microbit.org.
 * @param {Array<{id: string, code: string}>} items - Llista d'elements a renderitzar.
 * @param {number} [timeoutMs=35000] - Temps màxim d'espera.
 * @returns {Promise<Map<string, string>>} Mapa d'id -> SVG oficial complet.
 */
function renderOfficialMakeCodeBatch(items, timeoutMs = 35000) {
  if (!items || items.length === 0) {
    return Promise.resolve(new Map());
  }

  return new Promise((resolve, reject) => {
    const queue = items.map(item => ({ id: item.id, code: item.code }));
    const results = new Map();
    let chromeProc = null;
    let timer = null;

    const server = http.createServer((req, res) => {
      const parsed = new URL(req.url, 'http://127.0.0.1');

      if (parsed.pathname === '/runner.html') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>MakeCode Render Runner</title></head>
<body>
<iframe id="mcrender" src="https://makecode.microbit.org/--docs?render=1" style="width:1px;height:1px;opacity:0;border:0;"></iframe>
<script>
(function() {
  const iframe = document.getElementById('mcrender');
  let queue = [];

  window.addEventListener('message', async (e) => {
    const msg = e.data;
    if (!msg || msg.source !== 'makecode') return;

    if (msg.type === 'renderready') {
      try {
        const r = await fetch('/queue');
        queue = await r.json();
        sendNext();
      } catch (err) {
        fetch('/error?msg=' + encodeURIComponent(err.message));
      }
    } else if (msg.type === 'renderblocks') {
      try {
        await fetch('/result', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: msg.id, svg: msg.svg, uri: msg.uri, css: msg.css })
        });
        sendNext();
      } catch (err) {
        fetch('/error?msg=' + encodeURIComponent(err.message));
      }
    }
  });

  function sendNext() {
    if (!queue || queue.length === 0) {
      fetch('/done');
      return;
    }
    const item = queue.shift();
    iframe.contentWindow.postMessage({
      type: 'renderblocks',
      id: item.id,
      code: item.code
    }, 'https://makecode.microbit.org');
  }
})();
</script>
</body>
</html>`);
        return;
      }

      if (parsed.pathname === '/queue') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(queue));
        return;
      }

      if (parsed.pathname === '/result' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            let finalSvg = null;
            if (data.uri && typeof data.uri === 'string' && data.uri.startsWith('data:image/svg+xml;utf8,')) {
              finalSvg = decodeURIComponent(data.uri.replace('data:image/svg+xml;utf8,', '')).trim();
            } else if (data.svg) {
              const svgStr = String(data.svg).trim();
              if (data.css && !svgStr.includes('<style')) {
                finalSvg = svgStr.replace(/^<svg\b([^>]*)>/i, `<svg$1><style>${data.css}</style>`);
              } else {
                finalSvg = svgStr;
              }
            }
            if (data.id && finalSvg) {
              results.set(data.id, finalSvg);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('ok');
          } catch (err) {
            res.writeHead(400);
            res.end(err.message);
          }
        });
        return;
      }

      if (parsed.pathname === '/done') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('ok');
        cleanup(null);
        return;
      }

      if (parsed.pathname === '/error') {
        const errorMsg = parsed.searchParams.get('msg') || 'Error en MakeCode runner';
        res.writeHead(200);
        res.end('ok');
        cleanup(new Error(errorMsg));
        return;
      }

      res.writeHead(404);
      res.end();
    });

    function cleanup(err) {
      clearTimeout(timer);
      if (chromeProc) {
        try { chromeProc.kill(); } catch (_) {}
        chromeProc = null;
      }
      try {
        server.close(() => {
          if (err && results.size === 0) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      } catch (_) {
        resolve(results);
      }
    }

    server.on('error', err => {
      cleanup(err);
    });

    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      const runnerUrl = `http://127.0.0.1:${port}/runner.html`;
      const binary = findBrowserBinary();

      timer = setTimeout(() => {
        console.warn(`[makecode-server] Timeout (${timeoutMs}ms) esperant resposta oficial de MakeCode.`);
        cleanup(new Error('Timeout esperant MakeCode'));
      }, timeoutMs);

      try {
        chromeProc = spawn(binary, [
          '--headless=new',
          '--disable-gpu',
          '--no-first-run',
          '--no-default-browser-check',
          '--disable-background-networking',
          '--disable-sync',
          '--disable-translate',
          '--hide-scrollbars',
          '--metrics-recording-only',
          '--mute-audio',
          '--no-sandbox',
          runnerUrl
        ], { stdio: 'ignore' });

        chromeProc.on('error', err => {
          console.warn(`[makecode-server] No s'ha pogut llançar el binari ${binary}: ${err.message}`);
          cleanup(err);
        });
      } catch (err) {
        cleanup(err);
      }
    });
  });
}

module.exports = {
  renderOfficialMakeCodeBatch,
  findBrowserBinary
};
