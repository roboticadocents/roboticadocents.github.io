'use strict';
const { icon } = require('../../sim/codey-blocks');
function CodeyWorkspace({ root }) {
  return `<section class="cr-workspace" id="panel-controls-codey-rocky" role="tabpanel" aria-labelledby="tab-codey-rocky" data-codey-workspace hidden>
    <div class="cr-stage-panel">
      <div class="cr-section-heading"><h2>Codey Rocky</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-reset>↺ Reinicia l’escenari</button></div>
      <div class="cr-device">
        <div class="cr-device-face"><canvas width="320" height="160" data-cr-led aria-label="Pantalla LED de 16 per 8 punts"></canvas><span class="cr-rgb" data-cr-rgb role="img" aria-label="Indicador RGB verd"></span></div>
        <div class="cr-device-buttons"><button type="button" data-cr-event="A">A</button><button type="button" data-cr-event="B">B</button><button type="button" data-cr-event="C">C</button><span>Prem un botó per activar el seu programa.</span></div>
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
          <label>Color <select data-cr-surface-color><option value="black">Negre</option><option value="white">Blanc</option><option value="red">Roig</option><option value="green">Verd</option><option value="blue">Blau</option><option value="yellow">Groc</option><option value="cyan">Cian</option><option value="purple">Morat</option></select></label>
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
      <div class="cr-section-heading"><h2>Programa Codey</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-clear>Buida</button></div>
      <details class="cr-project"><summary>Guarda o obri un projecte</summary><p class="cr-hint">Peces natives de Scratch Blocks amb un subconjunt de blocs Codey equivalents als de mBlock. Arrossega i encaixa les peces; el botó dret permet duplicar-les o llevar-les. El simulador conserva el programa i les peces soltes.</p>
      <div class="cr-project-controls"><button type="button" class="sim-btn sim-btn-outline" data-cr-export>Descarrega el projecte</button><label class="sim-btn sim-btn-outline">Obri un projecte<input class="visually-hidden" type="file" accept=".json,application/json" data-cr-import></label></div></details>
      <details class="cr-activities"><summary data-cr-activity-summary>Activitats: paper, simulador i robot</summary>
        <label class="cr-example-label">Activitat <select data-cr-activity><option value="">Tria una activitat</option></select></label>
        <label class="cr-example-label">Exercici <select data-cr-exercise disabled><option value="0">Tria primer l’activitat</option></select></label>
        <p class="cr-hint" data-cr-activity-prompt>Resol el mateix repte en paper, al simulador o amb Codey Rocky.</p>
        <div class="cr-project-controls"><button type="button" class="sim-btn sim-btn-secondary" data-cr-load-activity disabled>Carrega l’exercici</button><a data-cr-activity-link hidden>Guia i fitxa</a></div>
      </details>
      <label class="cr-example-label">Exemple <select data-cr-example>
        <option value="line">Segueix la vora de la línia</option><option value="color">Atura’t sobre el roig</option><option value="obstacle">Atura’t davant d’un obstacle</option><option value="while">Repeteix fins a trobar un obstacle</option><option value="buttons">Botons i cares</option><option value="light">Si baixa la llum…</option><option value="route">Moviment amb temps</option><option value="blank">Programa nou</option>
      </select></label>
      <div class="cr-event-tabs" role="group" aria-label="Programa que vols editar">
        <button type="button" data-cr-script="start" aria-pressed="true">${icon('event')}<span>En iniciar</span></button><button type="button" data-cr-script="A" aria-pressed="false">${icon('event')}<span>Botó A</span></button><button type="button" data-cr-script="B" aria-pressed="false">${icon('event')}<span>Botó B</span></button><button type="button" data-cr-script="C" aria-pressed="false">${icon('event')}<span>Botó C</span></button>
      </div>
      <div class="cr-program" data-cr-program></div>
      <div class="cr-execution"><div class="cr-run-controls"><button type="button" class="sim-btn sim-btn-primary" data-cr-run>▶ Executa</button><button type="button" class="sim-btn sim-btn-secondary" data-cr-step>Pas a pas</button><button type="button" class="sim-btn sim-btn-outline" data-cr-stop>■ Atura</button></div>
      <p class="cr-condition-reading" data-cr-condition>La lectura i el resultat de la condició apareixeran ací.</p>
      <p class="cr-status" data-cr-status role="status" aria-live="polite">Preparat.</p>
      </div>

    </div>
  </section>`;
}
module.exports = { CodeyWorkspace };
