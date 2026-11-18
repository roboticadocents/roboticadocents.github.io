'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const checker = path.resolve(__dirname, '../qa/check-es.js');
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'robotica-qa-es-'));
const file = path.join(dir, 'example.md');
function check(lang, code) {
  fs.writeFileSync(file, `# Ejemplo\n\n\`\`\`${lang}\n${code}\n\`\`\`\n`);
  const result = spawnSync(process.execPath, [checker, '--files', file, '--json'], { encoding: 'utf8' });
  assert.ok(!result.error, result.error?.message);
  assert.ok(result.status === 0 || result.status === 1, result.stderr);
  return JSON.parse(result.stdout);
}
try {
  for (const lang of ['blocks', 'pseudocode', 'text', 'mblock']) {
    const ca = check(lang, 'quan comença\n  mostra el valor');
    assert.ok(ca.summary.errors > 0, `${lang}: untranslated instructions must be reported`);
    assert.ok(ca.issues.some(issue => issue.line === 4), `${lang}: retain source line numbers`);
    assert.equal(check(lang, 'cuando comience\n  mostrar el valor').summary.errors, 0);
  }
  const executable = {
    python: '# quan comença\nprint("això")',
    javascript: '// quan comença\nconsole.log("això")',
    makecode: '// quan comença\nbasic.showString("això")'
  };
  for (const [lang, code] of Object.entries(executable)) {
    assert.equal(check(lang, code).summary.errors, 0,
      `${lang}: executable examples and their literal data remain excluded`);
  }
  console.log('Spanish QA: translated pseudo-code checked; executable examples preserved');
} finally {
  fs.rmSync(dir, { recursive: true, force: true });
}
