'use strict';
const { palette, icon } = require('../../sim/codey-blocks');
function CodeyWorkspace({ root }) {
  return `<section class="cr-workspace" id="panel-controls-codey-rocky" role="tabpanel" aria-labelledby="tab-codey-rocky" data-codey-workspace hidden>
    <div class="cr-stage-panel">
      <div class="cr-section-heading"><h2>Codey Rocky</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-reset>↺ Reinicia l’escenari</button></div>
      <div class="cr-device">
        <div class="cr-device-face"><canvas width="320" height="160" data-cr-led aria-label="Pantalla LED de 16 per 8 punts"></canvas><span class="cr-rgb" data-cr-rgb role="img" aria-label="Indicador RGB verd"></span></div>
        <div class="cr-device-buttons"><button type="button" data-cr-event="A">A</button><button type="button" data-cr-event="B">B</button><span>Prem un botó per activar el seu programa.</span></div>
      </div>
      <div class="cr-world-viewport"><canvas class="cr-world" width="800" height="500" data-cr-world tabindex="0" aria-label="Escenari de Rocky. Usa les fletxes per moure el cursor i Espai per aplicar l’eina seleccionada."></canvas></div>
      <div class="cr-sensors">
        <label>Llum <output data-cr-light-value>70</output><input data-cr-sensor="light" type="range" min="0" max="100" value="70"></label>
        <label>So <output data-cr-sound-value>20</output><input data-cr-sensor="sound" type="range" min="0" max="100" value="20"></label>
        <div class="cr-obstacle-reading">IR reflectit <strong data-cr-ir>0</strong><small>0–100 · creix en apropar-se</small></div>
        <div class="cr-obstacle-reading">Grisos <strong data-cr-gray>—</strong><small>Model: 0 fosc · 100 clar</small></div>
        <div class="cr-obstacle-reading">Color <strong data-cr-color>—</strong></div>
      </div>
      <details class="cr-scene-settings"><summary>Edita l’escenari i calibra el sensor</summary><div class="cr-scene-settings-body">
      <div class="cr-world-tools" role="group" aria-label="Edició de l’escenari">
        <button type="button" class="sim-btn sim-btn-secondary" data-cr-tool="obstacle" aria-pressed="true">Obstacle</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="robot" aria-pressed="false">Posició inicial</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="line" aria-pressed="false">Dibuixa línia</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="surface" aria-pressed="false">Superfície de color</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="remove" aria-pressed="false">Lleva element</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-rotate>Gira l’inici 90°</button>
      </div>
      <details class="cr-track-settings" open><summary>Pista i sensor</summary>
        <div class="cr-track-controls">
          <label>Sensor <select data-cr-orientation><option value="front">Cap endavant · IR</option><option value="down">Cap al terra · grisos i color</option></select></label>
          <label>Pista <select data-cr-track><option value="none">Lliure</option><option value="straight">Recta</option><option value="curve">Corbes</option><option value="circuit">Circuit tancat</option></select></label>
          <label>Amplària <input data-cr-line-width type="number" min="8" max="60" value="24" step="2"></label>
          <label>Color <select data-cr-surface-color><option value="black">Negre</option><option value="white">Blanc</option><option value="red">Roig</option><option value="green">Verd</option><option value="blue">Blau</option><option value="yellow">Groc</option></select></label>
          <button type="button" class="sim-btn sim-btn-outline" data-cr-clear-lines>Neteja la pista</button>
        </div>
      </details>
      <p class="cr-hint">Clica o toca l’escenari amb l’eina seleccionada. Arrossega per dibuixar una línia. Pots editar obstacles durant l’execució.</p>
      <details class="cr-calibration"><summary>Calibratge de la línia</summary>
        <p>Amb el sensor cap al terra, situa el punt de lectura sobre el fons i després sobre la línia.</p>
        <div class="cr-track-controls"><button type="button" class="sim-btn sim-btn-outline" data-cr-sample="background">Mesura el fons</button><output data-cr-sample-background>—</output><button type="button" class="sim-btn sim-btn-outline" data-cr-sample="line">Mesura la línia</button><output data-cr-sample-line>—</output><button type="button" class="sim-btn sim-btn-secondary" data-cr-apply-threshold>Aplica el llindar mitjà</button></div>
        <p data-cr-calibration-status role="status">Encara no hi ha dues mesures.</p>
      </details>
      <p class="cr-model-note">Model didàctic simplificat: IR i grisos són lectures de 0 a 100, no centímetres ni un percentatge de distància. El punt blau indica l’únic sensor de superfície; el feix frontal inclou les vores. Cal calibrar lectures, velocitats i girs amb el robot físic.</p>
      </div></details>
    </div>
    <div class="cr-program-panel">
      <div class="cr-section-heading"><h2>Programa amb blocs</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-clear>Buida</button></div>
      <details class="cr-project"><summary>Guarda o obri un projecte</summary><p class="cr-hint">Selecció de blocs per practicar la lògica de mBlock. El projecte, amb el programa i l’escenari, es desa en aquest navegador.</p>
      <div class="cr-project-controls"><button type="button" class="sim-btn sim-btn-outline" data-cr-export>Descarrega el projecte</button><label class="sim-btn sim-btn-outline">Obri un projecte<input class="visually-hidden" type="file" accept=".json,application/json" data-cr-import></label></div></details>
      <label class="cr-example-label">Exemple <select data-cr-example>
        <option value="line">Segueix la vora de la línia</option><option value="color">Atura’t sobre el roig</option><option value="obstacle">Atura’t davant d’un obstacle</option><option value="while">Avança mentre no hi haja obstacles</option><option value="buttons">Botons i cares</option><option value="light">Si baixa la llum…</option><option value="route">Moviment amb temps</option><option value="blank">Programa nou</option>
      </select></label>
      <div class="cr-event-tabs" role="group" aria-label="Programa que vols editar">
        <button type="button" data-cr-script="start" aria-pressed="true">${icon('event')}<span>Quan comença</span></button><button type="button" data-cr-script="A" aria-pressed="false">${icon('event')}<span>Quan prems A</span></button><button type="button" data-cr-script="B" aria-pressed="false">${icon('event')}<span>Quan prems B</span></button>
      </div>
      <div class="cr-palette-families" role="group" aria-label="Blocs disponibles per família">
        ${palette()}
      </div>
      <p class="cr-hint">Tria «Afegir ací» dins d’una branca o bucle i després un bloc. Pots canviar l’ordre amb ↑ i ↓.</p>
      <div class="cr-program" data-cr-program></div>
      <div class="cr-execution"><div class="cr-run-controls"><button type="button" class="sim-btn sim-btn-primary" data-cr-run>▶ Executa</button><button type="button" class="sim-btn sim-btn-secondary" data-cr-step>Pas a pas</button><button type="button" class="sim-btn sim-btn-outline" data-cr-stop>■ Atura</button></div>
      <p class="cr-condition-reading" data-cr-condition>La lectura i el resultat de la condició apareixeran ací.</p>
      <p class="cr-status" data-cr-status role="status" aria-live="polite">Preparat.</p>
      </div>

    </div>
  </section>`;
}
module.exports = { CodeyWorkspace };
