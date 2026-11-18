'use strict';
function CodeyWorkspace({ root }) {
  return `<section class="cr-workspace" id="panel-controls-codey-rocky" role="tabpanel" aria-labelledby="tab-codey-rocky" data-codey-workspace hidden>
    <div class="cr-stage-panel">
      <div class="cr-section-heading"><h2>Codey Rocky</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-reset>↺ Reinicia l’escenari</button></div>
      <div class="cr-device">
        <div class="cr-device-face"><canvas width="320" height="160" data-cr-led aria-label="Pantalla LED de 16 per 8 punts"></canvas><span class="cr-rgb" data-cr-rgb role="img" aria-label="Indicador RGB verd"></span></div>
        <div class="cr-device-buttons"><button type="button" data-cr-event="A">A</button><button type="button" data-cr-event="B">B</button><span>Prem un botó per activar el seu programa.</span></div>
      </div>
      <div class="cr-world-tools" role="group" aria-label="Edició de l’escenari">
        <button type="button" class="sim-btn sim-btn-secondary" data-cr-tool="obstacle" aria-pressed="true">Obstacle</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="robot" aria-pressed="false">Posició inicial</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="remove" aria-pressed="false">Lleva obstacle</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-rotate>Gira l’inici 90°</button>
      </div>
      <p class="cr-hint">Clica o toca l’escenari amb l’eina seleccionada. També pots afegir o llevar obstacles mentre s’executa.</p>
      <canvas class="cr-world" width="800" height="500" data-cr-world tabindex="0" aria-label="Escenari de Rocky. Usa les fletxes per moure el cursor i Espai per aplicar l’eina seleccionada."></canvas>
      <div class="cr-sensors">
        <label>Llum <output data-cr-light-value>70</output><input data-cr-sensor="light" type="range" min="0" max="100" value="70"></label>
        <label>So <output data-cr-sound-value>20</output><input data-cr-sensor="sound" type="range" min="0" max="100" value="20"></label>
        <div class="cr-obstacle-reading">Obstacle al davant <strong data-cr-obstacle>NO</strong><small>Valors de llum i so simulats, de 0 a 100.</small></div>
      </div>
      <p class="cr-model-note">Model didàctic simplificat: el feix blau representa la zona de detecció frontal, incloses les vores. Velocitats, girs i sensors s’han de comprovar i ajustar amb el robot físic.</p>
    </div>
    <div class="cr-program-panel">
      <div class="cr-section-heading"><h2>Programa amb blocs</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-clear>Buida</button></div>
      <label class="cr-example-label">Exemple <select data-cr-example>
        <option value="obstacle">Atura’t davant d’un obstacle</option><option value="while">Avança mentre no hi haja obstacles</option><option value="buttons">Botons i cares</option><option value="light">Si baixa la llum…</option><option value="route">Moviment amb temps</option><option value="blank">Programa nou</option>
      </select></label>
      <div class="cr-event-tabs" role="group" aria-label="Programa que vols editar">
        <button type="button" data-cr-script="start" aria-pressed="true">Quan comença</button><button type="button" data-cr-script="A" aria-pressed="false">Quan prems A</button><button type="button" data-cr-script="B" aria-pressed="false">Quan prems B</button>
      </div>
      <div class="cr-palette" role="group" aria-label="Blocs disponibles">
        <button type="button" data-cr-add="face">Mostra cara</button><button type="button" data-cr-add="text">Mostra text</button><button type="button" data-cr-add="rgb">Llum RGB</button>
        <button type="button" data-cr-add="forward">Avança durant…</button><button type="button" data-cr-add="back">Enrere durant…</button><button type="button" data-cr-add="left">Gira esquerra</button><button type="button" data-cr-add="right">Gira dreta</button><button type="button" data-cr-add="drive">Avança contínuament</button><button type="button" data-cr-add="stop">Atura motors</button>
        <button type="button" data-cr-add="wait">Espera</button><button type="button" data-cr-add="repeat">Repeteix</button><button type="button" data-cr-add="forever">Per sempre</button><button type="button" data-cr-add="if">Si / si no</button><button type="button" data-cr-add="while">Mentre</button>
      </div>
      <p class="cr-hint">Tria «Afegir ací» dins d’una branca o bucle i després un bloc. Pots canviar l’ordre amb ↑ i ↓.</p>
      <div class="cr-program" data-cr-program></div>
      <div class="cr-run-controls"><button type="button" class="sim-btn sim-btn-primary" data-cr-run>▶ Executa</button><button type="button" class="sim-btn sim-btn-secondary" data-cr-step>Pas a pas</button><button type="button" class="sim-btn sim-btn-outline" data-cr-stop>■ Atura</button></div>
      <p class="cr-status" data-cr-status role="status" aria-live="polite">Preparat.</p>
      <p class="cr-hint">Selecció de blocs per practicar la lògica de mBlock. El programa es desa en aquest navegador.</p>
    </div>
  </section>`;
}
module.exports = { CodeyWorkspace };
