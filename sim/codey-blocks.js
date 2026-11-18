/* Identitat visual compartida entre la paleta i els blocs del programa. */
(function (root, factory) {
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.CodeyBlocks=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const categories={motion:'Moviment',display:'Pantalla i llum',sensor:'Sensors',control:'Control'};
  const paths={
    face:'<rect x="3" y="4" width="18" height="16" rx="4"/><path d="M7 14c2 4 8 4 10 0"/><path d="M8 9h.01M16 9h.01" stroke-width="3"/>',
    text:'<path d="M4 5h16M12 5v14M8 19h8"/>',
    rgb:'<path d="M9 17h6M10 21h4M8 13a6 6 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4ZM12 1v1M2 8h1M21 8h1"/>',
    reading:'<path d="M3 17a9 9 0 1 1 18 0M5 17h14M12 13l4-5M6 9l1 1M18 9l-1 1"/><circle cx="12" cy="14" r="2"/>',
    forward:'<path d="M12 21V3M5 10l7-7 7 7"/>',
    back:'<path d="M12 3v18M5 14l7 7 7-7"/>',
    left:'<path d="M19 21V12a6 6 0 0 0-6-6H3M9 1 3 6l6 5"/>',
    right:'<path d="M5 21V12a6 6 0 0 1 6-6h10M15 1l6 5-6 5"/>',
    drive:'<path d="M8 21V3M2 9l6-6 6 6M17 21V8M13 12l4-4 4 4"/>',
    tracks:'<rect x="3" y="3" width="6" height="18" rx="3"/><rect x="15" y="3" width="6" height="18" rx="3"/><path d="M9 8h6M9 16h6M6 7v10M18 7v10"/>',
    stop:'<rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" stroke="none"/>',
    wait:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
    repeat:'<path d="M4 8h12a4 4 0 0 1 0 8H8M8 4 4 8l4 4M12 12l-4 4 4 4"/>',
    forever:'<path d="M12 12c-3-6-9-6-9 0s6 6 9 0 9-6 9 0-6 6-9 0Z"/>',
    if:'<path d="m12 2 5 5-5 5-5-5 5-5ZM7 7H3v13h4M17 7h4v13h-4"/>',
    while:'<path d="M19 6a9 9 0 1 0 2 9M19 2v5h-5M12 8l4 4-4 4-4-4 4-4Z"/>',
    event:'<path d="M6 3v18M6 4h13l-3 4 3 4H6"/>'
  };
  const definitions={
    face:['Mostra cara','display'],text:['Mostra text','display'],rgb:['Llum RGB','display'],
    forward:['Avança','motion','Avança durant…'],back:['Enrere','motion','Enrere durant…'],left:['Gira esquerra','motion'],right:['Gira dreta','motion'],drive:['Avança contínuament','motion'],tracks:['Potència de les erugues','motion'],reading:['Mostra lectura','sensor'],stop:['Atura motors','motion'],
    wait:['Espera','control'],repeat:['Repeteix','control'],forever:['Per sempre','control'],if:['Si','control','Si / si no'],while:['Mentre','control']
  };
  function icon(type){return `<svg class="cr-block-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[type]||paths.event}</svg>`;}
  const blocks=Object.fromEntries(Object.entries(definitions).map(([type,[label,category,paletteLabel]])=>[type,{label,category,paletteLabel:paletteLabel||label}]));
  function palette(){return Object.entries(blocks).map(([type,b])=>`<button type="button" class="cr-category-${b.category}" data-cr-add="${type}" title="${categories[b.category]} · ${b.paletteLabel}">${icon(type)}<span>${b.paletteLabel}</span></button>`).join('');}
  function legend(){return `<div class="cr-palette-legend" aria-label="Famílies de blocs">${Object.entries(categories).map(([key,label])=>`<span class="cr-category-${key}"><span class="cr-category-dot" aria-hidden="true"></span>${label}</span>`).join('')}</div>`;}
  return {blocks,categories,icon,palette,legend};
});
