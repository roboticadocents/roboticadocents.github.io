#!/usr/bin/env node
/**
 * _scripts/test.js
 *
 * Executor unificat de totes les proves i validacions de Robòtica²⁰⁰:
 * 1. Validació del lloc estàtic i enllaços (_scripts/tests/check-static-site.py)
 * 2. Proves del pipeline Markdown -> HTML semàntic (_scripts/tests/test-markdown-renderer.js)
 * 3. Proves del format i cobertura dels tutorials (_scripts/tests/test-tutorial-format.js)
 */
'use strict';

const path = require('node:path');
const { execFileSync } = require('node:child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const TESTS_DIR = path.join(__dirname, 'tests');

function runStep(label, cmd, args) {
  process.stdout.write(`▶ ${label}... `);
  const start = Date.now();
  try {
    const out = execFileSync(cmd, args, { cwd: ROOT_DIR, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    const elapsed = Date.now() - start;
    console.log(`✓ (${elapsed} ms)`);
    if (out && out.trim()) {
      console.log(`  ${out.trim().replace(/\n/g, '\n  ')}`);
    }
  } catch (err) {
    console.log('✗ ERROR');
    if (err.stdout) console.error(err.stdout);
    if (err.stderr) console.error(err.stderr);
    process.exit(1);
  }
}

function main() {
  console.log('🧪 Executant suite de validació de Robòtica²⁰⁰:\n');
  runStep('Proves del bloqueig del build', process.execPath, [path.join(TESTS_DIR, 'test-build-lock.js')]);
  runStep('Validació de pàgines HTML i enllaços', 'python3', [path.join(TESTS_DIR, 'check-static-site.py')]);
  runStep('Proves del pipeline Markdown → HTML semàntic', process.execPath, [path.join(TESTS_DIR, 'test-markdown-renderer.js')]);
  runStep('Proves de classificació i rutes del contingut', process.execPath, [path.join(TESTS_DIR, 'test-content-routing.js')]);
  runStep('Proves de format i cobertura de tutorials', process.execPath, [path.join(TESTS_DIR, 'test-tutorial-format.js')]);
  console.log('\n✅ Totes les proves han passat correctament.');
}

if (require.main === module) {
  main();
}
