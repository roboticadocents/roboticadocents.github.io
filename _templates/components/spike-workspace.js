'use strict';
const {definitions,examples}=require('../../sim/spike-engine');
const {icon}=require('../../sim/codey-blocks');
function SpikeWorkspace(){
  const categories={motion:'Motor',sensor:'Sensor',control:'Control'};
  const palette=Object.entries(categories).map(([category,label])=>`<details class="cr-palette-family cr-category-${category}" name="sp-block-family"><summary><span class="cr-category-dot" aria-hidden="true"></span>${label}</summary><div class="cr-palette">${Object.entries(definitions).filter(([,d])=>d.category===category).map(([type,d])=>`<button type="button" data-sp-add="${type}" class="cr-category-${category}">${icon(d.icon)}<span>${d.label}</span></button>`).join('')}</div></details>`).join('');
  return `<section class="cr-workspace sp-workspace" id="panel-controls-spike" role="tabpanel" aria-labelledby="tab-spike" data-spike-workspace hidden>
    <div class="cr-stage-panel">
      <div class="cr-section-heading"><div><h2>Barrera automàtica</h2><span class="sp-subtitle">SPIKE Prime · mecanismes</span></div><button type="button" class="sim-btn sim-btn-outline" data-sp-reset>↺ Reinicia</button></div>
      <div class="sp-connections"><a class="sp-build-link" href="muntatge-barrera/" target="_blank" rel="noopener">Muntatge ↗</a><span><b>A</b> Motor angular</span><span><b>D</b> Sensor de distància</span></div>
      <div class="sp-scene"><svg viewBox="0 0 720 430" role="img" aria-labelledby="sp-scene-title sp-scene-desc">
        <title id="sp-scene-title">Mecanisme d’una barrera amb motor i sensor</title><desc id="sp-scene-desc">El braç gira de 0 graus, tancat, a 90 graus, obert. L’objecte davant del sensor es controla amb les entrades de sota.</desc>
        <defs><pattern id="sp-stripes" width="48" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)"><rect width="48" height="22" fill="#fff"/><rect width="24" height="22" fill="#ef4444"/></pattern></defs>
        <rect x="1" y="1" width="718" height="428" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
        <path d="M30 360H690" stroke="#cbd5e1" stroke-width="3"/>
        <path d="M230 50V280H460" fill="none" stroke="#cbd5e1" stroke-dasharray="5 6"/><path d="M230 150a130 130 0 0 1 130 130" fill="none" stroke="#cbd5e1" stroke-dasharray="5 6"/>
        <text x="245" y="104" class="sp-svg-label">90° · oberta</text><text x="470" y="280" class="sp-svg-label">0° · tancada</text>
        <rect x="205" y="280" width="50" height="80" rx="8" fill="#facc15" stroke="#a16207" stroke-width="2"/>
        <path d="M115 320C150 260 170 315 230 280M115 345C160 385 260 390 262 325" fill="none" stroke="#94a3b8" stroke-width="4"/>
        <rect x="50" y="295" width="100" height="65" rx="12" fill="#facc15" stroke="#a16207" stroke-width="2"/><rect x="72" y="307" width="56" height="32" rx="5" fill="#fff"/><text x="83" y="329" class="sp-svg-label">HUB</text><text x="70" y="352" class="sp-svg-label">A · D</text>
        <g data-sp-arm transform="rotate(0 230 280)"><rect x="230" y="270" width="230" height="20" rx="6" fill="url(#sp-stripes)" stroke="#475569" stroke-width="2"/></g>
        <circle cx="230" cy="280" r="21" fill="#06b6d4" stroke="#155e75" stroke-width="3"/><path d="M218 280h24M230 268v24" stroke="#fff" stroke-width="5"/>
        <rect x="246" y="308" width="35" height="31" rx="6" fill="#fff" stroke="#0891b2" stroke-width="2"/><circle cx="267" cy="317" r="5" fill="#0891b2"/><circle cx="267" cy="330" r="5" fill="#0891b2"/>
        <line x1="284" y1="325" x2="412" y2="325" stroke="#0891b2" stroke-width="2" stroke-dasharray="5 5" data-sp-beam/>
        <g data-sp-object><rect x="0" y="290" width="65" height="60" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><path d="M22 290v22h20v-22" fill="#bfdbfe" stroke="#2563eb"/><text x="32" y="380" text-anchor="middle" class="sp-svg-label">Objecte</text></g>
        <text x="32" y="40" class="sp-svg-status" data-sp-scene-state>Tancada</text>
        <text x="32" y="65" class="sp-svg-label">Transmissió directa · 0° és la posició inicial</text>
      </svg></div>
      <div class="sp-readings"><div>Motor A <strong data-sp-angle>0°</strong></div><div>Distància D <strong data-sp-distance-value>Sense objecte</strong></div></div>
      <div class="sp-object-controls"><label><input type="checkbox" data-sp-present> Objecte davant del sensor</label><label>Distància de l’objecte <output data-sp-distance-label>80 cm</output><input type="range" min="5" max="200" step="1" value="80" data-sp-distance></label></div>
      <details class="cr-scene-settings"><summary>Muntatge i proposta d’activitat</summary><div class="cr-scene-settings-body"><p>Hub fix, motor al port A i sensor de distància al D. El braç va directament a l’eix: 0° tanca i 90° obri. No hi ha rodes ni desplaçament del hub.</p><p><strong>Prova-ho:</strong> tria un exemple i desplega «SdA, repte i muntatge» per veure la consigna i les proves. La guia de muntatge explica com preparar la base, el braç, el sensor i el zero del motor.</p><p>Model didàctic: velocitat aproximada, sense càrrega, col·lisions ni engranatges. La distància es controla manualment entre 5 i 200 cm; sense objecte es considera la zona lliure. Cal ajustar el zero, el sentit i el muntatge amb el robot físic.</p></div></details>
    </div>
    <div class="cr-program-panel">
      <div class="cr-section-heading"><h2>Programa el mecanisme</h2><button type="button" class="sim-btn sim-btn-outline" data-sp-clear>Buida</button></div>
      <details class="cr-project"><summary>Guarda o obri un projecte</summary><p class="cr-hint">Es desa automàticament en aquest navegador. El JSON és del simulador, no de l’app SPIKE.</p><div class="cr-project-controls"><button type="button" class="sim-btn sim-btn-outline" data-sp-export>Descarrega el projecte</button><label class="sim-btn sim-btn-outline">Obri un projecte<input class="visually-hidden" type="file" accept=".json,application/json" data-sp-import></label></div></details>
      <label class="cr-example-label">Exemple <select data-sp-example>${Object.entries(examples).map(([key,item])=>`<option value="${key}">${item.label}</option>`).join('')}<option value="blank">Programa nou</option><option value="custom" disabled>Projecte propi</option></select></label>
      <details class="sp-activity"><summary>SdA, repte i muntatge</summary><div class="sp-resource-links"><a data-sp-sda-link href="../situacio/sp-python-motors/" target="_blank" rel="noopener">Obri la SdA ↗</a><a href="muntatge-barrera/" target="_blank" rel="noopener">Guia de muntatge ↗</a></div><div class="sp-activity-body"><p><strong data-sp-sda-title></strong><br><span data-sp-sda-lesson></span></p><p data-sp-task></p><p class="sp-adaptation" data-sp-adaptation></p></div></details>
      <div class="sp-event">${icon('event')} Quan comença</div>
      <div class="cr-palette-families" role="group" aria-label="Blocs de SPIKE Prime">${palette}</div>
      <p class="cr-hint">Afig blocs al punt seleccionat. Obri ⋯ per inserir, duplicar o moure.</p>
      <div class="cr-edit-feedback"><span data-sp-edit-status role="status"></span><button type="button" class="cr-insert" data-sp-cancel-move hidden>Cancel·la el moviment</button></div>
      <div class="cr-program" data-sp-program></div>
      <div class="cr-execution"><div class="cr-run-controls"><button type="button" class="sim-btn sim-btn-primary" data-sp-run>▶ Executa</button><button type="button" class="sim-btn sim-btn-secondary" data-sp-step>Pas a pas</button><button type="button" class="sim-btn sim-btn-outline" data-sp-stop>■ Atura</button></div><p class="cr-condition-reading" data-sp-condition>La lectura de la condició apareixerà ací.</p><p class="cr-status" role="status" aria-live="polite" data-sp-status>Preparat.</p></div>
    </div>
  </section>`;
}
module.exports={SpikeWorkspace};
