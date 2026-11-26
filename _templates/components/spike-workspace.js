'use strict';
const {ViewControls,Preview3D}=require('./sim-view');
const {definitions,colors,motorPort}=require('../../sim/spike-engine');
const projects=require('../../sim/spike-projects');
const {icon}=require('../../sim/codey-blocks');
function SpikeWorkspace(){
  const categories={motion:'Motor',lights:'Llums',sound:'So',control:'Control',sensor:'Sensors'};
  const palette=Object.entries(categories).map(([category,label])=>`<details class="cr-palette-family cr-category-${category}" name="sp-block-family"><summary><span class="cr-category-dot" aria-hidden="true"></span>${label}</summary><div class="cr-palette">${Object.entries(definitions).filter(([type,d])=>type!=='while'&&d.category===category).map(([type,d])=>`<button type="button" data-sp-add="${type}" class="cr-category-${category}">${icon(d.icon)}<span>${d.label}</span></button>`).join('')}</div></details>`).join('');
  return `<section class="cr-workspace sp-workspace" id="panel-controls-spike" role="tabpanel" aria-labelledby="tab-spike" data-spike-workspace hidden>
    <div class="cr-stage-panel">
      <div class="cr-section-heading"><h2>SPIKE Prime</h2><button type="button" class="sim-btn sim-btn-outline" data-sp-reset>↺ Reinicia</button><button type="button" class="sim-btn sim-btn-outline" data-sp-clear-scene>Buida l’escenari</button></div>
      <label class="sp-project-choice">Projecte <select data-sp-project><option value="">Banc de proves</option>${Object.entries(projects).map(([key,project],index)=>`<option value="${key}">${index+1}. ${project.title}</option>`).join('')}</select></label>
      <div class="sp-project-brief" data-sp-brief hidden><p data-sp-task></p><p data-sp-note></p><a href="muntatges-spike/" data-sp-guide>Guia de muntatge</a></div>
      ${ViewControls({inspect:true})}
      ${Preview3D('Vista 3D de l’escenari de SPIKE Prime',{inspect:true})}
      <div class="sp-scene" data-sp-panel="" data-view-planar><svg viewBox="0 0 720 300" role="img" aria-labelledby="sp-scene-title">
        <title id="sp-scene-title">Vista superior del banc de proves amb un motor i un sensor de distància</title>
        <rect x="1" y="1" width="718" height="298" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
        <circle cx="170" cy="135" r="74" fill="#ebf5fd" stroke="#94a3b8" stroke-dasharray="4 5"/>
        <g data-sp-rotor><path d="M170 135v-55" stroke="#2563eb" stroke-width="10" stroke-linecap="round"/><circle cx="170" cy="135" r="14" fill="#155e75"/></g>
        <text x="170" y="248" text-anchor="middle" class="sp-svg-label" data-sp-motor-label>Motor A</text>
        <rect x="249" y="115" width="40" height="40" rx="8" fill="#fff" stroke="#0891b2" stroke-width="2"/>
        <circle cx="276" cy="127" r="5" fill="#0891b2"/><circle cx="276" cy="143" r="5" fill="#0891b2"/>
        <text x="270" y="184" text-anchor="middle" class="sp-svg-label">Sensor D</text>
        <line x1="289" y1="135" x2="412" y2="135" stroke="#0891b2" stroke-width="2" stroke-dasharray="5 5" data-sp-beam/>
        <g data-sp-object><rect x="0" y="113" width="61" height="44" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="30" y="140" text-anchor="middle" class="sp-svg-label">Objecte</text></g>
      </svg></div>
      <div class="sp-project-scene" data-sp-panel="dial" data-view-planar hidden><svg viewBox="0 0 520 300" role="img" aria-label="Indicador de torns">
        <circle cx="255" cy="180" r="106" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
        <text x="255" y="55" text-anchor="middle" class="sp-svg-label">Lliure</text>
        <text x="317" y="80" class="sp-svg-label">En ús</text>
        <text x="373" y="141" class="sp-svg-label">Canvi de torn</text>
        <circle cx="255" cy="91" r="6" fill="#16a34a"/><circle cx="300" cy="102" r="6" fill="#2563eb"/><circle cx="332" cy="135" r="6" fill="#d97706"/>
        <g data-sp-dial-needle><path d="M255 180v-73" stroke="#155e75" stroke-width="11" stroke-linecap="round"/><circle cx="255" cy="180" r="13" fill="#155e75"/></g>
      </svg></div>
      <div class="sp-project-scene" data-sp-panel="claw" data-view-planar hidden><svg viewBox="0 0 520 300" role="img" aria-label="Pinça robòtica">
        <rect x="177" y="34" width="166" height="72" rx="12" fill="#0891b2"/><text x="260" y="77" text-anchor="middle" fill="#fff">Motor F</text>
        <path data-sp-jaw-left d="M207 98l-35 73v47h35" fill="none" stroke="#2563eb" stroke-width="18" stroke-linejoin="round"/>
        <path data-sp-jaw-right d="M313 98l35 73v47h-35" fill="none" stroke="#2563eb" stroke-width="18" stroke-linejoin="round"/>
        <rect data-sp-claw-piece x="233" y="185" width="54" height="43" rx="6" fill="#facc15"/>
      </svg></div>
      <div class="sp-project-scene" data-sp-panel="wheel" data-view-planar hidden><svg viewBox="0 0 520 310" role="img" aria-label="Sínia amb quatre cabines penjants i una zona d’embarcament">
        <path d="M185 265l75-145 75 145" fill="none" stroke="#2478c7" stroke-width="11" stroke-linejoin="round"/>
        <rect x="166" y="263" width="192" height="12" rx="3" fill="#94a3b8"/>
        <rect x="227" y="250" width="66" height="12" rx="3" fill="#155e75"/>
        <text x="260" y="297" text-anchor="middle" class="sp-svg-label">Zona d’embarcament</text>
        <circle cx="260" cy="120" r="92" fill="#ebf5fd" fill-opacity=".5" stroke="#0891b2" stroke-width="9"/>
        <g data-sp-wheel-rim><path d="M260 28v184M168 120h184" stroke="#0891b2" stroke-width="8"/></g>
        <circle cx="260" cy="120" r="13" fill="#155e75"/>
        ${['#bde8f1','#e9d5ff','#fde68a','#bbf7d0'].map((color,index)=>`<g data-sp-wheel-cabin="${index}">
          <path d="M0 0v10" stroke="#334155" stroke-width="3"/><circle r="4" fill="#334155"/>
          <rect x="-18" y="10" width="36" height="24" rx="5" fill="${color}" stroke="#475569" stroke-width="1.5"/>
          <text x="0" y="27" text-anchor="middle" class="sp-svg-label">${index+1}</text>
        </g>`).join('')}
      </svg></div>
      <div class="sp-project-scene" data-sp-panel="cart" data-view-planar hidden><svg viewBox="0 0 650 280" role="img" aria-label="Carretó en el corredor de repartiment">
        <rect x="24" y="55" width="597" height="160" rx="11" fill="#ebf5fd"/>
        <path d="M30 135h586" stroke="#94a3b8" stroke-width="2" stroke-dasharray="12 8"/>
        <g data-sp-cart-target><rect x="0" y="70" width="21" height="130" rx="4" fill="#64748b"/></g>
        <g data-sp-cart-body><rect x="0" y="92" width="101" height="86" rx="12" fill="#0891b2"/>
          <rect x="13" y="84" width="26" height="12" rx="4" fill="#334155"/><rect x="13" y="175" width="26" height="12" rx="4" fill="#334155"/>
          <rect x="60" y="114" width="31" height="42" rx="5" fill="#facc15"/><circle cx="101" cy="135" r="7" fill="#155e75"/>
        </g>
      </svg></div>
      <div class="sp-project-scene" data-sp-panel="sorter" data-view-planar hidden><svg viewBox="0 0 520 300" role="img" aria-label="Classificador amb dues eixides">
        <rect x="64" y="118" width="96" height="78" rx="8" fill="#fef3c7" stroke="#ca8a04" stroke-width="2"/><text x="112" y="222" text-anchor="middle" class="sp-svg-label">Groc</text>
        <rect x="362" y="118" width="96" height="78" rx="8" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="410" y="222" text-anchor="middle" class="sp-svg-label">Rosa</text>
        <rect x="229" y="30" width="62" height="42" rx="7" fill="#0891b2"/><text x="260" y="56" fill="#fff" text-anchor="middle">Sensor D</text>
        <g data-sp-sort-arm><path data-sp-arm-line d="M260 160v-79" stroke="#2563eb" stroke-width="17" stroke-linecap="round"/><circle cx="260" cy="160" r="16" fill="#155e75"/></g>
        <rect data-sp-sort-piece x="-17" y="-14" width="34" height="28" rx="5"/>
      </svg></div>
      <div class="sp-readings"><div>Posició del motor <strong data-sp-angle>0°</strong></div><div data-sp-wheel-reading hidden>Embarcament <strong data-sp-boarding>Cabina 1</strong></div><div><span data-sp-distance-title>Distància D</span> <strong data-sp-distance-value>Sense objecte</strong></div></div>
      <div class="sp-object-controls" data-sp-distance-controls><label><input type="checkbox" data-sp-present> Objecte davant del sensor</label><button type="button" class="sim-btn sim-btn-outline" data-sp-remove-object>Lleva l’objecte</button><label><span data-sp-range-label>Distància de l’objecte</span> <output data-sp-distance-label>80 cm</output><input type="range" min="5" max="200" step="1" value="80" data-sp-distance></label></div>
      <label class="sp-piece-control" data-sp-claw-control hidden><input type="checkbox" data-sp-claw-present> Peça entre les mordasses</label>
      <details class="sp-hub" data-sp-hub><summary>Hub i sensors</summary>
        <div class="sp-hub-content">
          <div class="sp-hub-output">
            <div class="sp-led-matrix" role="img" aria-label="Matriu apagada" data-sp-matrix>${'<i></i>'.repeat(25)}</div>
            <span class="sp-hub-light" data-sp-hub-light role="img" aria-label="Llum del botó central apagada"></span>
            <output data-sp-sound>Sense so</output>
          </div>
          <div class="sp-hub-inputs">
            <label>Força B <output data-sp-force-label>0 N</output><input type="range" min="0" max="10" step="1" value="0" data-sp-force></label>
            <label><span data-sp-color-label>Color C</span> <select data-sp-color>${colors.map(([label,key])=>`<option value="${key}"${key==='none'?' selected':''}>${key==='none'?'Sense peça':label}</option>`).join('')}</select></label>
            <label><input type="checkbox" data-sp-button="left"> Botó esquerre premut</label>
            <label><input type="checkbox" data-sp-button="right"> Botó dret premut</label>
            <label><input type="checkbox" data-sp-mute> Silencia el so</label>
          </div>
        </div>
      </details>
      <details class="cr-scene-settings"><summary>Ports del banc de proves</summary>
        <div class="cr-scene-settings-body sp-port-settings">
          <label>Motor <select data-sp-motor-port>${motorPort.options.map(([label,key])=>`<option value="${key}">${label}</option>`).join('')}</select></label>
          <label>Sensor de color <select data-sp-color-port><option value="C">C</option><option value="B">B</option><option value="D">D</option></select></label>
          <span data-sp-fixed-ports>Força B · Distància D</span>
        </div>
      </details>
    </div>
    <div class="cr-program-panel">
      <div class="cr-section-heading"><h2>Programa SPIKE Prime</h2><button type="button" class="sim-btn sim-btn-outline" data-sp-clear>Buida</button></div>
      <details class="cr-project"><summary>Guarda o obri un projecte</summary><p class="cr-hint">Es desa automàticament en aquest navegador. El JSON és del simulador, no de l’app SPIKE.</p><div class="cr-project-controls"><button type="button" class="sim-btn sim-btn-outline" data-sp-export>Descarrega el projecte</button><button type="button" class="sim-btn sim-btn-outline" data-sp-backup hidden>Descarrega el programa anterior</button><label class="sim-btn sim-btn-outline">Obri un projecte<input class="visually-hidden" type="file" accept=".json,application/json" data-sp-import></label></div></details>
      <div data-sp-native hidden aria-label="Editor de blocs de SPIKE Prime"></div><p data-sp-native-status role="status"></p>
      <div data-sp-fallback>
      <div class="sp-event">${icon('event')} Quan s’inicia el programa</div>
      <div class="cr-palette-families" role="group" aria-label="Blocs de SPIKE Prime">${palette}</div>
      <p class="cr-hint">Per treballar amb els blocs originals, obri l’app oficial i crea un projecte de blocs de paraules per a SPIKE Prime. En aquest simulador, afig blocs al punt seleccionat. Obri ⋯ per inserir, duplicar o moure.</p>
      <div class="cr-edit-feedback"><span data-sp-edit-status role="status"></span><button type="button" class="cr-insert" data-sp-cancel-move hidden>Cancel·la el moviment</button></div>
      <div class="cr-program" data-sp-program></div>
      </div>
      <div class="cr-execution"><div class="cr-run-controls"><button type="button" class="sim-btn sim-btn-primary" data-sp-run>▶ Executa</button><button type="button" class="sim-btn sim-btn-secondary" data-sp-step>Pas a pas</button><button type="button" class="sim-btn sim-btn-outline" data-sp-stop>■ Atura</button></div><p class="cr-condition-reading" data-sp-condition>La lectura de la condició apareixerà ací.</p><p class="cr-status" role="status" aria-live="polite" data-sp-status>Preparat.</p></div>
    </div>
  </section>`;
}
module.exports={SpikeWorkspace};
