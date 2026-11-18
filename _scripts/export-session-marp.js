#!/usr/bin/env node
'use strict';

// Exporta el Markdown editable sense regenerar-ne ni sobreescriure'n el contingut.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const slug = process.argv[2] || 'it4-sessio-1';
if (!/^[a-z0-9-]+$/.test(slug) || process.argv.length > 3) {
  throw new Error('Ús: node _scripts/export-session-marp.js [it4-sessio-1]');
}
const dir = path.join(root, '_assets/sessions/marp');
const source = path.join(dir, `${slug}.md`);
if (!fs.existsSync(source)) throw new Error(`No existeix ${source}`);
const local = path.join(root, 'node_modules/.bin/marp');
const cached = '/tmp/robotica-training-tools/node_modules/.bin/marp';
const bin = process.env.MARP_BIN || (fs.existsSync(local) ? local : fs.existsSync(cached) ? cached : 'marp');
const args = [source, '--config-file', path.join(dir, 'marp.config.cjs'),
  '--theme-set', path.join(dir, 'tema.css'), path.join(dir, 'taller.css')];
const env = { ...process.env, CHROME_NO_SANDBOX: '1' };
const browser = process.env.CHROME_PATH;
const browserArgs = browser ? ['--browser-path', browser] : [];
const html = path.join(dir, `${slug}.html`);
const pdf = path.join(root, '_assets/sessions', `presentacio-${slug}.pdf`);
execFileSync(bin, [...args, '-o', html], { env, stdio:'inherit' });
execFileSync(bin, [...args, '--pdf', '--pdf-outlines', '--browser', 'chrome',
  ...browserArgs, '--allow-local-files', '-o', pdf], { env, stdio:'inherit' });
console.log(`HTML: ${path.relative(root, html)}\nPDF: ${path.relative(root, pdf)}`);
