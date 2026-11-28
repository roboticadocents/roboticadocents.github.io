(function(){
  'use strict';
  const root=document.querySelector('[data-spike-workspace]');if(!root||!window.SpikeSimulation)return;
  const {Engine,definitions,block,cleanProgram,directions,comparisons,legacyComparisons,units,extraCommands,predicates,reporters,colors,motorPort}=window.SpikeSimulation;
  const {icon}=window.CodeyBlocks;
  const projects=window.SpikeProjects;
  const projectKey=value=>Object.hasOwn(projects,value)?value:'';
  const $=selector=>root.querySelector(selector);
  const scene3d=window.RoboticsScene3D;
  const view=scene3d?.mount(root,'spike-prime');
  const storageKey='robotica-spike-prime-v2';
  function readSaved(key){
    try{return JSON.parse(localStorage.getItem(key));}catch(_){return null;}
  }
  const previous=readSaved('robotica-spike-prime-v1');
  $('[data-sp-backup]').hidden=!(previous?.type==='robotica-spike-prime'&&previous.program?.length);
  let program=[];
  const engine=new Engine();
  function readProject(data){
    if(data?.type!=='robotica-spike-prime'||![1,2].includes(data.version))throw new Error('No és un projecte del simulador de SPIKE Prime.');
    const motor=data.version===1?(data.model==='thing'?'F':'A'):data.ports?.motor;
    const color=data.version===1?(data.model==='kiki'?'B':'C'):data.ports?.color;
    return {program:cleanProgram(data.program),environment:data.environment,scenario:projectKey(data.scenario),
      motor:motorPort.options.some(([,key])=>key===motor)?motor:'A',color:['B','C','D'].includes(color)?color:'C'};
  }
  function loadProject(data){
    program=engine.program=data.program;
    engine.project=data.scenario??'';
    const setup=projects[engine.project];
    engine.motorPort=engine.project==='wheel'&&data.motor==='A'?'A':setup?.motor??data.motor;
    engine.colorPort=setup?.color??data.color;
    engine.extraMotors=setup?.extraMotors??[];
    engine.distancePort=setup?.distance??'D';
    restoreEnvironment(data.environment);
    engine.reset();
  }
  function restoreDraft(saved){
    const setup=projects[projectKey(saved.scenario)];
    const data=readProject(setup&&saved.program==null?{...saved,program:[]}:saved);
    if(setup&&!data.program.length&&saved.emptyProgram!==true){
      data.program=setup.program();
      data.motor=setup.motor;
    }
    if(data.scenario==='wheel'){
      // Update only the previous starter, preserving edited and imported programs.
      const turn=block('motorFor',{port:'A',direction:'clockwise',amount:90,motionUnit:'degrees'});
      const buttonWait=state=>block('waitUntil',{predicate:{type:'button',button:'left',state}});
      const oldStarters=[
        [block('setSpeed',{speed:25,port:'A'}),block('forever',{body:[buttonWait('pressed'),turn,buttonWait('released')]})],
        [block('setSpeed',{speed:25,port:'A'}),block('forever',{body:[turn,block('wait',{seconds:2})]})],
      ];
      const signature=list=>JSON.stringify(list,(key,value)=>key==='id'?undefined:value);
      if(oldStarters.some(starter=>signature(data.program)===signature(cleanProgram(starter)))){
        data.program=projects.wheel.program();
        data.motor=projects.wheel.motor;
      }
    }
    loadProject(data);
  }
  const saved=readSaved(storageKey);
  if(saved){try{restoreDraft(saved);}catch(_){}}
  function chooseProject(key){
    const draft=readSaved(storageKey+'-project-'+key);
    if(draft){try{restoreDraft(draft);return;}catch(_){}}
    const setup=projects[key];
    loadProject({scenario:key,program:setup?.program()??[],environment:setup?.environment,motor:setup?.motor??'A',color:'C'});
  }
  const url=new URL(location.href),requested=url.searchParams.get('project');
  if(requested&&projectKey(requested)&&engine.project!==requested){
    chooseProject(requested);
    save();
    url.searchParams.delete('project');
    history.replaceState(history.state,'',url);
  }
  function restoreEnvironment(data){
    engine.environment={present:data?.present===true,distance:Math.max(5,Math.min(200,Number(data?.distance)||80)),
      force:Math.max(0,Math.min(10,Number(data?.force)||0)),color:colors.some(([,key])=>key===data?.color)?data.color:'none',
      left:data?.left===true,right:data?.right===true};
  }
  let nativeEditor=null;
  let audioContext,oscillator,gain;
  const matrix=$('[data-sp-matrix]'),pixels=[...matrix.children];
  const cssColors={red:'#ef4444',green:'#22c55e',blue:'#2563eb',yellow:'#facc15',white:'#fff',
    black:'#111827',azure:'#38bdf8',violet:'#8b5cf6',magenta:'#ec4899',none:'#e2e8f0'};
  let target=program,targetIndex=null,movingId=null,lists=new Map();
  function project(){return {type:'robotica-spike-prime',version:2,scenario:engine.project,ports:{motor:engine.motorPort,color:engine.colorPort},program,emptyProgram:program.length===0,environment:{...engine.environment}};}
  function save(){
    try{
      const content=JSON.stringify(project());
      localStorage.setItem(storageKey,content);
      localStorage.setItem(storageKey+'-project-'+engine.project,content);
    }catch(_){}
  }
  function halt(){engine.stop();engine.started=false;engine.active=null;if(gain)gain.gain.value=0;}
  function syncProject(){
    const key=engine.project,setup=projects[key];
    root.dataset.spScenario=key;
    $('[data-sp-project]').value=key;
    $('[data-sp-load-example]').hidden=!setup;
    $('[data-sp-brief]').hidden=!setup;
    $('[data-sp-task]').textContent=setup?.task??'';
    $('[data-sp-note]').textContent=setup?.note??'';
    if(setup)$('[data-sp-guide]').href='muntatges-spike/#'+setup.guide;
    for(const panel of root.querySelectorAll('[data-sp-panel]'))panel.hidden=panel.dataset.spPanel!==key;
    $('[data-sp-distance-controls]').hidden=Boolean(key&&!['cart','wheel'].includes(key));
    $('[data-sp-distance-title]').parentElement.hidden=Boolean(key&&!['cart','wheel'].includes(key));
    $('[data-sp-claw-control]').hidden=key!=='claw';
    $('[data-sp-wheel-reading]').hidden=key!=='wheel';
    if(key==='claw'||key==='wheel'||key==='sorter')$('[data-sp-hub]').open=true;
    $('[data-sp-distance-title]').textContent='Distància '+engine.distancePort;
    $('[data-sp-range-label]').textContent=key==='cart'?'Distància inicial de la zona':'Distància de l’objecte';
    $('[data-sp-fixed-ports]').textContent='Força B · Distància '+engine.distancePort;
    $('[data-sp-motor-port]').disabled=Boolean(setup);
    $('[data-sp-color-port]').disabled=Boolean(setup?.color);
  }
  function syncEnvironment(){
    $('[data-sp-motor-port]').value=engine.motorPort;
    $('[data-sp-color-port]').value=engine.colorPort;
    $('[data-sp-motor-label]').textContent='Motor '+engine.motorPort;
    $('[data-sp-color-label]').textContent='Color '+engine.colorPort;
    const {present,distance,force,color,left,right}=engine.environment;
    $('[data-sp-present]').checked=present;
    $('[data-sp-claw-present]').checked=present;
    $('[data-sp-distance]').value=distance;
    $('[data-sp-distance-label]').textContent=distance+' cm';
    $('[data-sp-force]').value=force;
    $('[data-sp-force-label]').textContent=force+' N';
    $('[data-sp-color]').value=color;
    $('[data-sp-button="left"]').checked=left;
    $('[data-sp-button="right"]').checked=right;
  }
  function find(id,list=program){for(let index=0;index<list.length;index++){const b=list[index];if(b.id===id)return {block:b,list,index};for(const key of ['body','then','else']){const found=find(id,b[key]);if(found)return found;}}return null;}
  function contains(b,list){return ['body','then','else'].some(key=>b[key]===list||b[key].some(child=>contains(child,list)));}
  function fits(){let total=0;function visit(list,depth=0){return list.every(b=>++total<=150&&depth<=8&&['body','then','else'].every(key=>visit(b[key],depth+1)));}return visit(program);}
  function copy(b){return block(b.type,{...b,body:b.body.map(copy),then:b.then.map(copy),else:b.else.map(copy)});}
  function numeric(field,value,min,max,step,label){return `<label>${label} <input type="number" data-sp-field="${field}" value="${value}" min="${min}" max="${max}" step="${step}"></label>`;}
  function select(field,value,options,label){
    return `<label>${label} <select data-sp-field="${field}">${options.map(([text,key])=>`<option value="${key}"${key===value?' selected':''}>${text}</option>`).join('')}</select></label>`;
  }
  function fields(b){
    if(b.type==='motor')return select('port',b.port??'A',motorPort.options,'Port')+select('direction',b.direction,directions,'Sentit')+numeric('angle',b.angle,0,359,1,'Posició °')+(b.speed==null?'':numeric('speed',b.speed,1,100,1,'Velocitat del projecte antic %'));
    if(b.type==='setSpeed')return select('port',b.port??'A',motorPort.options,'Port')+numeric('speed',b.speed,1,100,1,'Velocitat %');
    if(b.type==='wait')return numeric('seconds',b.seconds,.1,30,.1,'Segons');
    if(b.type==='repeat')return numeric('count',b.count,1,100,1,'Vegades');
    if(extraCommands[b.type]){
      const labels={port:'Port',direction:'Sentit',amount:'Quantitat',motionUnit:'Unitat',seconds:'Segons',note:'Nota MIDI',
        x:'Columna',y:'Fila',brightness:'Brillantor %',color:'Color',volume:'Volum %'};
      return extraCommands[b.type][1].map(a=>{
        if(a.type==='field_dropdown')return select(a.name,b[a.name],a.options,labels[a.name]);
        if(a.type==='field_matrix')return `<label>Matriu (25 zeros o uns) <input type="text" data-sp-field="matrix" value="${b.matrix}" maxlength="25" pattern="[01]{25}"></label>`;
        return numeric(a.name,b[a.name],a.min,a.max,a.precision,labels[a.name]);
      }).join('');
    }
    if(['waitUntil','if','ifThen','while','until'].includes(b.type)){
      if(b.predicate)return `<p class="sp-distance-condition">Condició: ${predicateText(b.predicate)}</p>`;
      const oldComparison=legacyComparisons.filter(([,key])=>key===b.compare);
      return `<div class="sp-distance-condition">${select('distancePort',b.distancePort??'D',[['D','D'],['B','B']],'Port')}${select('compare',b.compare,[...comparisons,...oldComparison],'Sensor D')}${numeric('threshold',b.threshold,0,1000000,.0001,'Llindar')}${select('unit',b.unit,units,'Unitat')}</div>`;
    }
    return '';
  }
  function predicateText(p){
    if(typeof p==='number')return String(p);
    if(p.type==='distance')return `${p.port??'D'} ${p.compare==='<'?'&lt;':p.compare==='>'?'&gt;':'='} ${p.threshold} ${p.unit}`;
    const [message,args]=predicates[p.type]??reporters[p.type];
    return message.replace(/</g,'&lt;').replace(/%(\d)/g,(_,n)=>{
      const arg=args[Number(n)-1];
      return arg.options?arg.options.find(([,key])=>key===p[arg.name])?.[0]:`(${predicateText(p[arg.name])})`;
    });
  }
  function renderList(list){
    const key=`sp-list-${lists.size}`;lists.set(key,list);const moving=movingId&&find(movingId)?.block,blocked=moving&&contains(moving,list);
    function insertion(index){const selected=list===target&&index===(targetIndex??list.length);if(!moving&&!selected&&index!==list.length)return '';return `<button type="button" class="cr-insert" data-sp-target="${key}" data-sp-index="${index}" aria-pressed="${selected}" aria-label="${moving?'Mou':'Afegir'} ací: posició ${index+1}"${blocked?' disabled':''}>${selected?'✓ ':'+ '}${moving?'Mou ací':'Afegir ací'}</button>`;}
    return `<div class="cr-block-list${target===list?' is-target':''}">${list.map((b,index)=>{
      const d=definitions[b.type];return `${insertion(index)}<div class="cr-block cr-category-${d.category}${movingId===b.id?' is-moving':''}" data-sp-block="${b.id}"><div class="cr-block-heading"><strong class="cr-block-title">${icon(d.icon)}<span>${d.label}</span></strong><details class="cr-block-menu" name="sp-block-actions"><summary aria-label="Opcions de ${d.label}" title="Opcions del bloc">⋯</summary><div class="cr-block-actions"><button type="button" data-sp-action="before">Afig abans</button><button type="button" data-sp-action="after">Afig després</button><button type="button" data-sp-action="duplicate">Duplica</button><button type="button" data-sp-action="move">Mou…</button><button type="button" data-sp-action="up"${index===0?' disabled':''}>↑ Puja</button><button type="button" data-sp-action="down"${index===list.length-1?' disabled':''}>↓ Baixa</button><button type="button" data-sp-action="delete">Lleva</button></div></details></div><div class="cr-block-fields">${fields(b)}</div>${['if','ifThen'].includes(b.type)?`<p class="cr-branch-label">Aleshores</p>${renderList(b.then)}${b.type==='if'?`<p class="cr-branch-label">Si no</p>${renderList(b.else)}`:''}`:['while','until','repeat','forever'].includes(b.type)?renderList(b.body):''}</div>`;
    }).join('')}${insertion(list.length)}</div>`;
  }
  function render(){
    if(nativeEditor){nativeEditor.setProgram(program);return;}
    lists=new Map();$('[data-sp-program]').innerHTML=renderList(program);
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
      if(movingId)return;halt();const b=block(button.dataset.spAdd,{port:engine.motorPort}),index=targetIndex??target.length;target.splice(index,0,b);
      if(!fits()){target.splice(index,1);engine.trace='Màxim 150 blocs i 8 nivells.';return;}targetIndex=index+1;
      if(['if','ifThen'].includes(b.type)){target=b.then;targetIndex=null;}else if(['while','until','repeat','forever'].includes(b.type)){target=b.body;targetIndex=null;}save();render();
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
    if(nativeEditor && ['data-sp-run','data-sp-step','data-sp-export'].some(key=>button.hasAttribute(key)) && !nativeEditor.flush())return;
    if(button.hasAttribute('data-sp-run')||button.hasAttribute('data-sp-step'))activateAudio();
    if(button.hasAttribute('data-sp-run'))engine.start();
    if(button.hasAttribute('data-sp-step'))engine.step();
    if(button.hasAttribute('data-sp-stop')){halt();engine.trace='Programa aturat. El motor conserva l’angle.';}
    if(button.hasAttribute('data-sp-reset')){engine.reset();engine.trace='Motor a 0°. Es conserva el programa.';}
    if(button.hasAttribute('data-sp-remove-object')){
      engine.environment.present=false;
      syncEnvironment();save();
    }
    if(button.hasAttribute('data-sp-clear-scene')){
      restoreEnvironment(projects[engine.project]?.environment);
      engine.reset();
      engine.trace='Escenari buit. Es conserva el programa.';
      syncEnvironment();save();
    }
    if(button.hasAttribute('data-sp-load-example')){
      const setup=projects[engine.project];
      if(!setup)return;
      const valid=nativeEditor?.flush()!==false;
      if((program.length||!valid)&&!window.confirm('Vols substituir el programa actual pel programa d’exemple?'))return;
      halt();
      engine.motorPort=setup.motor;
      program=engine.program=setup.program();
      engine.reset();
      target=program;targetIndex=null;movingId=null;
      syncEnvironment();save();render();
      engine.trace='Programa d’exemple carregat.';
    }
    if(button.hasAttribute('data-sp-clear')){halt();program=engine.program=[];target=program;targetIndex=null;movingId=null;save();render();}
    if(button.hasAttribute('data-sp-export'))downloadProject(project(),'projecte-spike.json');
    if(button.hasAttribute('data-sp-backup'))downloadProject(previous,'programa-spike-anterior.json');
  });
  root.addEventListener('keydown',event=>{if(event.key!=='Escape')return;const menu=event.target.closest('.cr-block-menu[open]');if(menu){menu.open=false;menu.querySelector('summary').focus();}if(movingId){event.preventDefault();cancelMove();}});
  root.addEventListener('input',event=>{
    if(event.target.hasAttribute('data-sp-distance')){engine.environment.distance=Number(event.target.value);engine.environment.present=true;syncEnvironment();save();}
    if(event.target.hasAttribute('data-sp-force')){engine.environment.force=Number(event.target.value);syncEnvironment();save();}
  });
  root.addEventListener('change',async event=>{
    const input=event.target;
    if(input.hasAttribute('data-sp-present')||input.hasAttribute('data-sp-claw-present')){engine.environment.present=input.checked;save();}
    if(input.hasAttribute('data-sp-color')){engine.environment.color=input.value;if(input.value!=='none')engine.delivery='';save();}
    if(input.hasAttribute('data-sp-button')){engine.environment[input.dataset.spButton]=input.checked;save();}
    if(input.hasAttribute('data-sp-field')){
      const b=find(input.closest('[data-sp-block]').dataset.spBlock).block,key=input.dataset.spField;
      if(key==='matrix'&&!/^[01]{25}$/.test(input.value)){input.value=b.matrix;return;}
      halt();
      b[key]=input.type==='number'?Math.max(Number(input.min),Math.min(Number(input.max),Number(input.value)||Number(input.min))):input.value;
      if(input.type==='number')input.value=b[key];
      save();
    }
    if(input.hasAttribute('data-sp-project')){
      nativeEditor?.flush();save();halt();
      chooseProject(projectKey(input.value));
      target=program;targetIndex=null;movingId=null;
      syncProject();syncEnvironment();save();render();
      if(new URL(location.href).searchParams.has('project')){
        url.searchParams.delete('project');
        history.replaceState(history.state,'',url);
      }
    }
    if(input.hasAttribute('data-sp-motor-port')||input.hasAttribute('data-sp-color-port')){
      halt();
      if(input.hasAttribute('data-sp-motor-port'))engine.motorPort=input.value;
      else engine.colorPort=input.value;
      syncEnvironment();save();
    }
    if(input.hasAttribute('data-sp-import')){
      const file=input.files[0];if(!file)return;
      try{
        if(file.size>1500000)throw new Error('Fitxer massa gran.');
        const next=readProject(JSON.parse(await file.text()));
        halt();loadProject(next);engine.reset();target=program;targetIndex=null;movingId=null;
        syncProject();syncEnvironment();save();render();engine.trace='Projecte obert.';
      }catch(error){engine.trace=error instanceof SyntaxError?'El fitxer no conté un JSON vàlid.':'No s’ha pogut obrir: '+error.message;}
      input.value='';
    }
  });
  function downloadProject(data,filename){
    const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
    const link=document.createElement('a');
    link.href=url;link.download=filename;link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  const object = $('[data-sp-object]');
  const scene = object.ownerSVGElement;
  const objectOrigin = 300;
  const distanceScale = 1.65;
  let objectDrag = null;
  function sceneX(event) {
    const point = scene.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    return point.matrixTransform(scene.getScreenCTM().inverse()).x;
  }
  object.addEventListener('pointerdown',event=>{
    if(event.button!==0||!event.isPrimary)return;
    objectDrag={id:event.pointerId,start:sceneX(event),distance:engine.environment.distance};
    object.setPointerCapture(event.pointerId);
  });
  object.addEventListener('pointermove',event=>{
    if(objectDrag?.id!==event.pointerId)return;
    const distance=objectDrag.distance+(sceneX(event)-objectDrag.start)/distanceScale;
    engine.environment.distance=Math.max(5,Math.min(200,Math.round(distance)));
    syncEnvironment();
  });
  object.addEventListener('lostpointercapture',event=>{
    if(objectDrag?.id!==event.pointerId)return;
    objectDrag=null;
    save();
  });
  function activateAudio(){
    if($('[data-sp-mute]').checked)return;
    const Context=window.AudioContext||window.webkitAudioContext;
    if(!Context)return;
    try{
      if(!audioContext){
        audioContext=new Context();
        oscillator=audioContext.createOscillator();
        gain=audioContext.createGain();
        gain.gain.value=0;
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start();
      }
      audioContext.resume().catch(()=>{});
    }catch(_){}
  }
  function drawHub(){
    const pattern=engine.pixels.join(',');
    if(matrix.dataset.pattern!==pattern){
      matrix.dataset.pattern=pattern;
      matrix.setAttribute('aria-label',`Matriu de 5 × 5 amb ${engine.pixels.filter(Boolean).length} píxels encesos`);
      pixels.forEach((pixel,index)=>pixel.style.backgroundColor=engine.pixels[index]?`rgb(190 49 12 / ${engine.pixels[index]/100})`:'');
    }
    const hubLight=$('[data-sp-hub-light]');
    if(hubLight.dataset.color!==engine.hubColor){
      hubLight.dataset.color=engine.hubColor;
      hubLight.style.backgroundColor=cssColors[engine.hubColor];
      hubLight.setAttribute('aria-label','Llum del botó central · '+colors.find(([,key])=>key===engine.hubColor)[0]);
    }
    const sound=$('[data-sp-sound]');
    const caption=engine.note==null?'Sense so':`Nota MIDI ${engine.note} · ${engine.volume}%`;
    if(sound.textContent!==caption)sound.textContent=caption;
    if(gain){
      const audible=engine.note!=null&&!$('[data-sp-mute]').checked;
      if(audible)oscillator.frequency.value=440*2**((engine.note-69)/12);
      gain.gain.value=audible ? .07*engine.volume/100 : 0;
    }
  }
  function drawProject(){
    const {project,angle,environment,travel,delivery}=engine;
    if(project==='dial')$('[data-sp-dial-needle]').setAttribute('transform',`rotate(${angle} 255 180)`);
    if(project==='claw'){
      const close=Math.min(65,angle)*.42;
      $('[data-sp-jaw-left]').setAttribute('transform',`rotate(${-close} 207 98)`);
      $('[data-sp-jaw-right]').setAttribute('transform',`rotate(${close} 313 98)`);
      $('[data-sp-claw-piece]').style.display=environment.present?'':'none';
    }
    if(project==='wheel'){
      const wheelAngle=engine.wheelAngle;
      $('[data-sp-wheel-rim]').setAttribute('transform',`rotate(${wheelAngle} 260 120)`);
      projects.wheel.phases(wheelAngle).forEach((phase,index)=>{
        const x=260-92*Math.sin(phase),y=120+92*Math.cos(phase);
        $(`[data-sp-wheel-cabin="${index}"]`).setAttribute('transform',`translate(${x} ${y})`);
      });
      const cabin=Math.round(wheelAngle/60)%6+1;
      const output=$('[data-sp-boarding]');
      if(output.textContent!==`Cabina ${cabin}`)output.textContent=`Cabina ${cabin}`;
    }
    if(project==='cart'){
      $('[data-sp-cart-body]').setAttribute('transform',`translate(${40+travel*2.15} 0)`);
      const destination=$('[data-sp-cart-target]');
      destination.setAttribute('transform',`translate(${141+environment.distance*2.15} 0)`);
      destination.style.display=environment.present?'':'none';
    }
    if(project==='sorter'){
      const arm=engine.motorAt('F')?.angle??0;
      const length=70+Math.max(0,1-arm/235)*79;
      $('[data-sp-sort-arm]').setAttribute('transform',`rotate(${-angle} 260 160)`);
      $('[data-sp-arm-line]').setAttribute('d',`M260 160v-${length}`);
      const piece=$('[data-sp-sort-piece]'),rotation=-angle*Math.PI/180;
      const located=delivery?[(delivery==='yellow'?112:410),160]:
        environment.color!=='none'?[260+Math.sin(rotation)*length,160-Math.cos(rotation)*length]:null;
      piece.style.display=located?'':'none';
      if(located)piece.setAttribute('transform',`translate(${located.join(' ')})`);
      piece.setAttribute('fill',cssColors[delivery||environment.color]);
    }
  }
  function draw(){
    drawHub();
    view?.draw(engine.project,engine,cssColors[engine.environment.color]);
    $('[data-sp-model-note]').hidden=root.dataset.simView!=='3d'||!projects[engine.project]?.approximateModel;
    drawProject();
    $('[data-sp-rotor]').setAttribute('transform',`rotate(${engine.angle} 170 135)`);
    $('[data-sp-angle]').textContent=Math.round(engine.angle)+'°';
    $('[data-sp-distance-value]').textContent=engine.distance()===null?'Sense objecte':Math.round(engine.distance())+' cm';
    const x=objectOrigin+engine.environment.distance*distanceScale;
    $('[data-sp-object]').setAttribute('transform',`translate(${x} 0)`);$('[data-sp-object]').style.display=engine.environment.present?'':'none';
    $('[data-sp-beam]').setAttribute('x2',x);$('[data-sp-beam]').style.display=engine.environment.present?'':'none';
    const condition=engine.lastCondition||'La lectura de la condició apareixerà ací.';
    const status=engine.pending?.type==='condition'?'Esperant que es complisca la condició.':engine.trace;
    if($('[data-sp-condition]').textContent!==condition)$('[data-sp-condition]').textContent=condition;
    if($('[data-sp-status]').textContent!==status)$('[data-sp-status]').textContent=status;
    nativeEditor?.highlight(engine.active);
    root.querySelectorAll('[data-sp-block]').forEach(b=>b.classList.toggle('is-executing',b.dataset.spBlock===engine.active));
    $('[data-sp-run]').setAttribute('aria-pressed',String(engine.running));
  }
  function initNativeEditor(){
    if(nativeEditor||!window.SpikeNativeBlocks||root.hidden)return;
    const element=$('[data-sp-native]');
    try{
      element.hidden=false;
      nativeEditor=window.SpikeNativeBlocks.create(element,list=>{
        halt();
        program=list;engine.program=program;save();
      }, message=>{$('[data-sp-native-status]').textContent=message;});
      nativeEditor.setProgram(program);
      root.classList.add('sp-native-active');
    }catch(error){
      nativeEditor=null;
      element.hidden=true;
      console.error('Editor de SPIKE Prime:',error);
    }
  }
  document.addEventListener('simrobotchange',event=>{
    if(event.detail.robot==='spike'){initNativeEditor();nativeEditor?.resize();}
    else{halt();engine.trace='Simulació aturada en canviar de robot.';}
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden)halt();});
  syncProject();syncEnvironment();render();initNativeEditor();let last=performance.now();
  function frame(now){if(!root.hidden){const speed=Number(document.querySelector('[data-speed-select]').value)||520;engine.tick(Math.min((now-last)/1000,.1)*(520/speed));draw();}last=now;requestAnimationFrame(frame);}requestAnimationFrame(frame);
})();
