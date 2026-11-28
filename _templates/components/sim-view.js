'use strict';

function ViewControls(){
  return `<div class="sim-view-controls" data-sim-view-controls hidden>
    <div role="group" aria-label="Vista de l’escenari">
      <button type="button" class="sim-btn sim-btn-outline" data-view="2d" aria-pressed="true">2D</button>
      <button type="button" class="sim-btn sim-btn-outline" data-view="3d" aria-pressed="false">3D</button>
    </div>
    <div role="group" aria-label="Càmera 3D" data-view-camera hidden>
      <button type="button" class="sim-btn sim-btn-outline" data-view-turn="-1" aria-label="Gira la vista a l’esquerra">↶</button>
      <button type="button" class="sim-btn sim-btn-outline" data-view-turn="1" aria-label="Gira la vista a la dreta">↷</button>
      <button type="button" class="sim-btn sim-btn-outline" data-view-zoom="-1" aria-label="Allunya la càmera">−</button>
      <button type="button" class="sim-btn sim-btn-outline" data-view-zoom="1" aria-label="Apropa la càmera">+</button>
      <button type="button" class="sim-btn sim-btn-outline" data-view-top aria-label="Vista superior">Superior</button>
      <button type="button" class="sim-btn sim-btn-outline" data-view-reset>Vista inicial</button>
    </div>
  </div>`;
}

function Preview3D(label,{id,width=800,height=500}){
  const helpId=`${id}-camera-help`;
  return `<div class="sim-preview-3d" data-view-preview hidden>
    <canvas width="${width}" height="${height}" data-view-canvas role="img" aria-label="${label}" tabindex="0" aria-describedby="${helpId}"></canvas>
    <p class="sim-view-help" id="${helpId}">Arrossega o usa les fletxes per girar.</p>
  </div>`;
}

module.exports={ViewControls,Preview3D};
