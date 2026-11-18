(function(){
  'use strict';
  const root=document.querySelector('[data-spike-workspace]');if(!root||!window.SpikeSimulation)return;
  const {Engine,definitions,examples,block,example,cleanProgram}=window.SpikeSimulation;
  const {icon}=window.CodeyBlocks;
  const $=selector=>root.querySelector(selector);
  const storageKey='robotica-spike-prime-v1';
  let exampleKey='sequence',program=example(exampleKey),stored=null;
  try{stored=JSON.parse(localStorage.getItem(storageKey));if(stored?.type==='robotica-spike-prime'&&stored.version===1)program=cleanProgram(stored.program);else stored=null;}catch(_){stored=null;}
  const engine=new Engine(program);
  function restoreEnvironment(data){engine.environment={present:data?.present===true,distance:Math.max(5,Math.min(200,Number(data?.distance)||80))};}
  if(stored){restoreEnvironment(stored.environment);exampleKey=Object.hasOwn(examples,stored.exampleKey)?stored.exampleKey:'custom';$('[data-sp-example]').value=exampleKey;}
  let target=program,targetIndex=null,movingId=null,lists=new Map();
  function project(){return {type:'robotica-spike-prime',version:1,model:'barrier',exampleKey,program,environment:{...engine.environment}};}
  function save(){try{localStorage.setItem(storageKey,JSON.stringify(project()));}catch(_){}}
  function halt(){engine.stop();engine.started=false;engine.active=null;}
  function syncEnvironment(){$('[data-sp-present]').checked=engine.environment.present;$('[data-sp-distance]').value=engine.environment.distance;$('[data-sp-distance-label]').textContent=engine.environment.distance+' cm';}
  function find(id,list=program){for(let index=0;index<list.length;index++){const b=list[index];if(b.id===id)return {block:b,list,index};for(const key of ['body','then','else']){const found=find(id,b[key]);if(found)return found;}}return null;}
  function contains(b,list){return ['body','then','else'].some(key=>b[key]===list||b[key].some(child=>contains(child,list)));}
  function fits(){let total=0;function visit(list,depth=0){return list.every(b=>++total<=150&&depth<=8&&['body','then','else'].every(key=>visit(b[key],depth+1)));}return visit(program);}
  function copy(b){return block(b.type,{...b,body:b.body.map(copy),then:b.then.map(copy),else:b.else.map(copy)});}
  function numeric(field,value,min,max,step,label){return `<label>${label} <input type="number" data-sp-field="${field}" value="${value}" min="${min}" max="${max}" step="${step}"></label>`;}
  function fields(b){
    if(b.type==='motor')return numeric('angle',b.angle,0,90,1,'Angle °')+numeric('speed',b.speed,1,100,1,'Velocitat %');
    if(b.type==='wait')return numeric('seconds',b.seconds,.1,30,.1,'Segons');
    if(b.type==='repeat')return numeric('count',b.count,1,100,1,'Vegades');
    if(['waitUntil','if','while'].includes(b.type))return `<label>Distància D <select data-sp-field="compare">${[['<','menor que'],['>','major que'],['<=','menor o igual'],['>=','major o igual'],['=','igual'],['!=','diferent']].map(([value,label])=>`<option value="${value}"${b.compare===value?' selected':''}>${label}</option>`).join('')}</select></label>`+numeric('threshold',b.threshold,5,200,1,'cm');
    return '';
  }
  function renderList(list){
    const key=`sp-list-${lists.size}`;lists.set(key,list);const moving=movingId&&find(movingId)?.block,blocked=moving&&contains(moving,list);
    function insertion(index){const selected=list===target&&index===(targetIndex??list.length);if(!moving&&!selected&&index!==list.length)return '';return `<button type="button" class="cr-insert" data-sp-target="${key}" data-sp-index="${index}" aria-pressed="${selected}" aria-label="${moving?'Mou':'Afegir'} ací: posició ${index+1}"${blocked?' disabled':''}>${selected?'✓ ':'+ '}${moving?'Mou ací':'Afegir ací'}</button>`;}
    return `<div class="cr-block-list${target===list?' is-target':''}">${list.map((b,index)=>{
      const d=definitions[b.type];return `${insertion(index)}<div class="cr-block cr-category-${d.category}${movingId===b.id?' is-moving':''}" data-sp-block="${b.id}"><div class="cr-block-heading"><strong class="cr-block-title">${icon(d.icon)}<span>${d.label}</span></strong><details class="cr-block-menu" name="sp-block-actions"><summary aria-label="Opcions de ${d.label}" title="Opcions del bloc">⋯</summary><div class="cr-block-actions"><button type="button" data-sp-action="before">Afig abans</button><button type="button" data-sp-action="after">Afig després</button><button type="button" data-sp-action="duplicate">Duplica</button><button type="button" data-sp-action="move">Mou…</button><button type="button" data-sp-action="up"${index===0?' disabled':''}>↑ Puja</button><button type="button" data-sp-action="down"${index===list.length-1?' disabled':''}>↓ Baixa</button><button type="button" data-sp-action="delete">Lleva</button></div></details></div><div class="cr-block-fields">${fields(b)}</div>${b.type==='if'?`<p class="cr-branch-label">Aleshores</p>${renderList(b.then)}<p class="cr-branch-label">Si no</p>${renderList(b.else)}`:['while','repeat','forever'].includes(b.type)?renderList(b.body):''}</div>`;
    }).join('')}${insertion(list.length)}</div>`;
  }
  function syncActivity(){
    const item=examples[exampleKey];
    const body=$('.sp-activity-body');if(body.dataset.source!==exampleKey){body.scrollTop=0;body.dataset.source=exampleKey;}
    $('[data-sp-sda-title]').textContent=item?.title||'Barrera · projecte propi';
    $('[data-sp-sda-lesson]').textContent=item?.lesson||'Tria un exemple per vincular el programa a una SdA.';
    $('[data-sp-task]').textContent=item?.task||'Defineix una acció, prediu el resultat i comprova’l amb el mecanisme.';
    $('[data-sp-adaptation]').textContent=item?.adaptation||'Muntatge de referència propi amb motor A i sensor D.';
    const link=$('[data-sp-sda-link]');link.hidden=!item;
    if(item)link.href=`../situacio/${item.sda}/`;
  }
  function render(){
    syncActivity();lists=new Map();$('[data-sp-program]').innerHTML=renderList(program);
    $('[data-sp-cancel-move]').hidden=!movingId;
    $('[data-sp-edit-status]').textContent=movingId?'Tria «Mou ací» a la posició de destí.':'';
    root.querySelectorAll('[data-sp-add]').forEach(button=>button.disabled=!!movingId);
  }
  function focusTarget(){$('[data-sp-target][aria-pressed="true"]')?.focus({preventScroll:true});}
  function cancelMove(){movingId=null;render();focusTarget();}
  root.addEventListener('click',event=>{
    if(!event.target.closest('.cr-block-menu'))root.querySelectorAll('.cr-block-menu[open]').forEach(menu=>menu.open=false);
    const button=event.target.closest('button');if(!button)return;
    if(button.hasAttribute('data-sp-cancel-move'))cancelMove();
    if(button.hasAttribute('data-sp-target')){
      const destination=lists.get(button.dataset.spTarget);let index=Number(button.dataset.spIndex);
      if(movingId){const entry=find(movingId);if(!entry||contains(entry.block,destination))return;halt();entry.list.splice(entry.index,1);if(entry.list===destination&&entry.index<index)index--;destination.splice(index,0,entry.block);
        if(!fits()){destination.splice(index,1);entry.list.splice(entry.index,0,entry.block);engine.trace='No es pot superar la profunditat de 8 nivells.';return;}movingId=null;save();}
      target=destination;targetIndex=index;render();focusTarget();
    }
    if(button.hasAttribute('data-sp-add')){
      if(movingId)return;halt();const b=block(button.dataset.spAdd),index=targetIndex??target.length;target.splice(index,0,b);
      if(!fits()){target.splice(index,1);engine.trace='Màxim 150 blocs i 8 nivells.';return;}targetIndex=index+1;
      if(b.type==='if'){target=b.then;targetIndex=null;}else if(['while','repeat','forever'].includes(b.type)){target=b.body;targetIndex=null;}save();render();
    }
    if(button.hasAttribute('data-sp-action')){
      const entry=find(button.closest('[data-sp-block]').dataset.spBlock),action=button.dataset.spAction;halt();
      if(action==='move'){movingId=entry.block.id;render();$('[data-sp-cancel-move]').focus();return;}
      movingId=null;target=entry.list;targetIndex=null;
      if(action==='before'||action==='after'){targetIndex=entry.index+(action==='after'?1:0);render();focusTarget();return;}
      if(action==='duplicate'){entry.list.splice(entry.index+1,0,copy(entry.block));if(!fits()){entry.list.splice(entry.index+1,1);engine.trace='No es pot superar el límit de 150 blocs.';return;}targetIndex=entry.index+2;}
      else if(action==='delete'){entry.list.splice(entry.index,1);target=program;}
      else{const next=entry.index+(action==='up'?-1:1);if(next>=0&&next<entry.list.length)[entry.list[next],entry.list[entry.index]]=[entry.list[entry.index],entry.list[next]];}
      save();render();if(['up','down'].includes(action))root.querySelector(`[data-sp-block="${entry.block.id}"] > .cr-block-heading summary`)?.focus({preventScroll:true});else focusTarget();
    }
    if(button.hasAttribute('data-sp-run'))engine.start();
    if(button.hasAttribute('data-sp-step'))engine.step();
    if(button.hasAttribute('data-sp-stop')){halt();engine.trace='Programa aturat. El motor conserva l’angle.';}
    if(button.hasAttribute('data-sp-reset')){engine.reset();engine.trace='Barrera a 0°; es conserva el programa.';}
    if(button.hasAttribute('data-sp-clear')){halt();exampleKey='blank';$('[data-sp-example]').value='blank';program=[];engine.program=program;target=program;targetIndex=null;movingId=null;save();render();}
    if(button.hasAttribute('data-sp-export')){const url=URL.createObjectURL(new Blob([JSON.stringify(project(),null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='projecte-spike-barrera.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  });
  root.addEventListener('keydown',event=>{if(event.key!=='Escape')return;const menu=event.target.closest('.cr-block-menu[open]');if(menu){menu.open=false;menu.querySelector('summary').focus();}if(movingId){event.preventDefault();cancelMove();}});
  root.addEventListener('input',event=>{
    if(event.target.hasAttribute('data-sp-distance')){engine.environment.distance=Number(event.target.value);engine.environment.present=true;syncEnvironment();save();}
  });
  root.addEventListener('change',async event=>{
    const input=event.target;
    if(input.hasAttribute('data-sp-present')){engine.environment.present=input.checked;save();}
    if(input.hasAttribute('data-sp-field')){const b=find(input.closest('[data-sp-block]').dataset.spBlock).block;halt();b[input.dataset.spField]=input.type==='number'?Math.max(Number(input.min),Math.min(Number(input.max),Number(input.value)||Number(input.min))):input.value;if(input.type==='number')input.value=b[input.dataset.spField];save();}
    if(input.hasAttribute('data-sp-example')){halt();exampleKey=input.value;program=example(input.value);engine.program=program;engine.reset();target=program;targetIndex=null;movingId=null;save();render();}
    if(input.hasAttribute('data-sp-import')){
      const file=input.files[0];if(!file)return;
      try{if(file.size>1500000)throw new Error('Fitxer massa gran.');const data=JSON.parse(await file.text());if(data.type!=='robotica-spike-prime'||data.version!==1||data.model!=='barrier')throw new Error('No és un projecte de la barrera SPIKE Prime.');const next=cleanProgram(data.program);halt();exampleKey=Object.hasOwn(examples,data.exampleKey)?data.exampleKey:'custom';program=next;engine.program=program;restoreEnvironment(data.environment);engine.reset();target=program;targetIndex=null;movingId=null;syncEnvironment();save();render();$('[data-sp-example]').value=exampleKey;engine.trace='Projecte obert.';}catch(error){engine.trace=error instanceof SyntaxError?'El fitxer no conté un JSON vàlid.':'No s’ha pogut obrir: '+error.message;}input.value='';
    }
  });
  function draw(){
    $('[data-sp-arm]').setAttribute('transform',`rotate(${-engine.angle} 230 280)`);
    $('[data-sp-angle]').textContent=Math.round(engine.angle)+'°';
    $('[data-sp-distance-value]').textContent=engine.distance()===null?'Sense objecte':engine.distance()+' cm';
    $('[data-sp-scene-state]').textContent=engine.angle<1?'Tancada':engine.angle>89?'Oberta':'En posició intermèdia';
    const x=300+engine.environment.distance*1.4;
    $('[data-sp-object]').setAttribute('transform',`translate(${x} 0)`);$('[data-sp-object]').style.display=engine.environment.present?'':'none';
    $('[data-sp-beam]').setAttribute('x2',x);$('[data-sp-beam]').style.display=engine.environment.present?'':'none';
    const condition=engine.lastCondition||'La lectura de la condició apareixerà ací.';
    const status=engine.pending?.type==='condition'?'Esperant que es complisca la condició.':engine.trace;
    if($('[data-sp-condition]').textContent!==condition)$('[data-sp-condition]').textContent=condition;
    if($('[data-sp-status]').textContent!==status)$('[data-sp-status]').textContent=status;
    root.querySelectorAll('[data-sp-block]').forEach(b=>b.classList.toggle('is-executing',b.dataset.spBlock===engine.active));
    $('[data-sp-run]').setAttribute('aria-pressed',String(engine.running));
  }
  document.addEventListener('simrobotchange',event=>{if(event.detail.robot!=='spike'){halt();engine.trace='Simulació aturada en canviar de robot.';}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)halt();});
  syncEnvironment();render();let last=performance.now();
  function frame(now){if(!root.hidden){const speed=Number(document.querySelector('[data-speed-select]').value)||520;engine.tick(Math.min((now-last)/1000,.1)*(520/speed));draw();}last=now;requestAnimationFrame(frame);}requestAnimationFrame(frame);
})();
