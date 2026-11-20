'use strict';
const { icon } = require('../../sim/codey-blocks');
function CodeyWorkspace({ root }) {
  return `<section class="cr-workspace" id="panel-controls-codey-rocky" role="tabpanel" aria-labelledby="tab-codey-rocky" data-codey-workspace hidden>
    <div class="cr-stage-panel">
      <div class="cr-section-heading"><h2>Codey Rocky</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-reset>↺ Reiniciar el escenario</button></div>
      <div class="cr-device">
        <div class="cr-device-face"><canvas width="320" height="160" data-cr-led aria-label="Pantalla LED de 16 por 8 puntos"></canvas><span class="cr-rgb" data-cr-rgb role="img" aria-label="Indicador RGB verde"></span></div>
        <div class="cr-device-buttons"><button type="button" data-cr-event="A">A</button><button type="button" data-cr-event="B">B</button><button type="button" data-cr-event="C">C</button><span>Pulsar un botón para activar su programa.</span></div>
      </div>
      <div class="cr-world-viewport"><canvas class="cr-world" width="800" height="500" data-cr-world tabindex="0" aria-label="Escenario de Rocky. Usa las flechas para mover el cursor y Espacio para aplicar la herramienta seleccionada."></canvas></div>
      <div class="cr-sensors">
        <label>Luz <output data-cr-light-value>70</output><input data-cr-sensor="light" type="range" min="0" max="100" value="70"></label>
        <label>Sonido <output data-cr-sound-value>20</output><input data-cr-sensor="sound" type="range" min="0" max="100" value="20"></label>
        <div class="cr-obstacle-reading">IR reflejado <strong data-cr-ir>0</strong><small>0–100 · crece al acercarse</small></div>
        <div class="cr-obstacle-reading">Grises <strong data-cr-gray>—</strong><small>Modelo: 0 oscuro · 100 claro</small></div>
        <div class="cr-obstacle-reading">Color <strong data-cr-color>—</strong></div>
      </div>
      <details class="cr-scene-settings"><summary>Editar el escenario y calibrar el sensor</summary><div class="cr-scene-settings-body">
      <div class="cr-world-tools" role="group" aria-label="Edición del escenario">
        <button type="button" class="sim-btn sim-btn-secondary" data-cr-tool="obstacle" aria-pressed="true">Obstáculo</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="robot" aria-pressed="false">Posición inicial</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="line" aria-pressed="false">Dibujar línea</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="surface" aria-pressed="false">Superficie de color</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-tool="remove" aria-pressed="false">Quitar elemento</button>
        <button type="button" class="sim-btn sim-btn-outline" data-cr-rotate>Girar el inicio 90°</button>
      </div>
      <details class="cr-track-settings" open><summary>Pista y sensor</summary>
        <div class="cr-track-controls">
          <label>Sensor <select data-cr-orientation><option value="front">Hacia delante · IR</option><option value="down">Hacia el suelo · grises y color</option></select></label>
          <label>Pista <select data-cr-track><option value="none">Libre</option><option value="straight">Recta</option><option value="curve">Curvas</option><option value="circuit">Circuito cerrado</option></select></label>
          <label>Anchura <input data-cr-line-width type="number" min="8" max="60" value="24" step="2"></label>
          <label>Color <select data-cr-surface-color><option value="black">Negro</option><option value="white">Blanco</option><option value="red">Rojo</option><option value="green">Verde</option><option value="blue">Azul</option><option value="yellow">Amarillo</option><option value="cyan">Cian</option><option value="purple">Morado</option></select></label>
          <button type="button" class="sim-btn sim-btn-outline" data-cr-clear-lines>Limpiar la pista</button>
        </div>
      </details>
      <p class="cr-hint">Hacer clic o tocar el escenario con la herramienta seleccionada. Arrastrar para dibujar una línea. Se pueden editar obstáculos durante la ejecución.</p>
      <details class="cr-calibration"><summary>Calibración de la línea</summary>
        <p>Con el sensor hacia el suelo, sitúa el punto de lectura sobre el fondo y después sobre la línea.</p>
        <div class="cr-track-controls"><button type="button" class="sim-btn sim-btn-outline" data-cr-sample="background">Medir el fondo</button><output data-cr-sample-background>—</output><button type="button" class="sim-btn sim-btn-outline" data-cr-sample="line">Medir la línea</button><output data-cr-sample-line>—</output><button type="button" class="sim-btn sim-btn-secondary" data-cr-apply-threshold>Aplicar el umbral medio</button></div>
        <p data-cr-calibration-status role="status">Todavía no hay dos medidas.</p>
      </details>
      <p class="cr-model-note">Modelo didáctico simplificado: IR y grises son lecturas de 0 a 100, no centímetros ni un porcentaje de distancia. El punto azul indica el único sensor de superficie; el haz frontal incluye los bordes. Hay que calibrar lecturas, velocidades y giros con el robot físico.</p>
      </div></details>
    </div>
    <div class="cr-program-panel">
      <div class="cr-section-heading"><h2>Programa Codey</h2><button type="button" class="sim-btn sim-btn-outline" data-cr-clear>Vaciar</button></div>
      <details class="cr-project"><summary>Guardar o abrir un proyecto</summary><p class="cr-hint">Piezas nativas de Scratch Blocks con un subconjunto de bloques Codey equivalentes a los de mBlock. Arrastra y encaja las piezas; el botón derecho permite duplicarlas o quitarlas. El simulador conserva el programa y las piezas sueltas.</p>
      <div class="cr-project-controls"><button type="button" class="sim-btn sim-btn-outline" data-cr-export>Descargar el proyecto</button><label class="sim-btn sim-btn-outline">Abrir un proyecto<input class="visually-hidden" type="file" accept=".json,application/json" data-cr-import></label></div></details>
      <details class="cr-activities"><summary data-cr-activity-summary>Actividades: papel, simulador y robot</summary>
        <label class="cr-example-label">Actividad <select data-cr-activity><option value="">Elegir una actividad</option></select></label>
        <label class="cr-example-label">Ejercicio <select data-cr-exercise disabled><option value="0">Elegir primero la actividad</option></select></label>
        <p class="cr-hint" data-cr-activity-prompt>Resuelve el mismo reto en papel, en el simulador o con Codey Rocky.</p>
        <div class="cr-project-controls"><button type="button" class="sim-btn sim-btn-secondary" data-cr-load-activity disabled>Cargar el ejercicio</button><a data-cr-activity-link hidden>Guía y ficha</a></div>
      </details>
      <label class="cr-example-label">Ejemplo <select data-cr-example>
        <option value="line">Sigue el borde de la línea</option><option value="color">Párate sobre el rojo</option><option value="obstacle">Párate delante de un obstáculo</option><option value="while">Repite hasta encontrar un obstáculo</option><option value="buttons">Botones y caras</option><option value="light">Si baja la luz…</option><option value="route">Movimiento con tiempo</option><option value="blank">Programa nuevo</option>
      </select></label>
      <div class="cr-event-tabs" role="group" aria-label="Programa que quieres editar">
        <button type="button" data-cr-script="start" aria-pressed="true">${icon('event')}<span>Al iniciar</span></button><button type="button" data-cr-script="A" aria-pressed="false">${icon('event')}<span>Botón A</span></button><button type="button" data-cr-script="B" aria-pressed="false">${icon('event')}<span>Botón B</span></button><button type="button" data-cr-script="C" aria-pressed="false">${icon('event')}<span>Botón C</span></button>
      </div>
      <div class="cr-program" data-cr-program></div>
      <div class="cr-execution"><div class="cr-run-controls"><button type="button" class="sim-btn sim-btn-primary" data-cr-run>▶ Ejecutar</button><button type="button" class="sim-btn sim-btn-secondary" data-cr-step>Paso a paso</button><button type="button" class="sim-btn sim-btn-outline" data-cr-stop>■ Detener</button></div>
      <p class="cr-condition-reading" data-cr-condition>La lectura y el resultado de la condición aparecerán aquí.</p>
      <p class="cr-status" data-cr-status role="status" aria-live="polite">Preparado.</p>
      </div>

    </div>
  </section>`;
}
module.exports = { CodeyWorkspace };
