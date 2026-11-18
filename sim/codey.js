(function () {
  'use strict';
  const root = document.querySelector('[data-codey-workspace]');
  if (!root || !window.CodeySimulation) return;
  const { Engine, WIDTH, HEIGHT, COLORS, trackPreset, segmentDistance } = window.CodeySimulation;
  const $ = q => root.querySelector(q);
  const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const blankPattern = () => Array(8).fill('0000000000000000');
  const numeric = (v,min,max,fallback) => Number.isFinite(Number(v)) ? Math.max(min,Math.min(max,Number(v))) : fallback;
  const colorNames={black:'Negre',white:'Blanc',red:'Roig',green:'Verd',blue:'Blau',yellow:'Groc'};
  const sensorOptions=[['infrared','IR reflectit (0–100)'],['gray','Grisos (0–100)'],['color','Color de la superfície'],['light','Llum'],['sound','So']];
  const {blocks: blockStyles, icon: blockIcon} = window.CodeyBlocks;
  const names=Object.fromEntries(Object.entries(blockStyles).map(([type,b])=>[type,b.label]));
  let counter=0;
  function block(type,extra={}) {
    return {id:`cr-${++counter}`,type,power:30,left:10,right:10,seconds:1,count:3,sensor:'infrared',compare:'>',threshold:50,value:type==='face'?'happy':type==='rgb'?'#22c55e':'Hola',pattern:blankPattern(),body:[],then:[],else:[],...extra};
  }
  function example(name) {
    const program={start:[],A:[block('face')],B:[block('face',{value:'sad'})]};
    if(name==='obstacle')program.start=[block('forever',{body:[block('if',{sensor:'infrared',compare:'>',threshold:60,then:[block('stop'),block('face',{value:'surprise'})],else:[block('face'),block('drive')]}),block('wait',{seconds:.1})]})];
    if(name==='while')program.start=[block('while',{sensor:'infrared',compare:'<',threshold:60,body:[block('forward',{seconds:.2})]}),block('stop'),block('face',{value:'surprise'})];
    if(name==='line')program.start=[block('forever',{body:[block('if',{sensor:'gray',compare:'<',threshold:50,then:[block('tracks',{left:10,right:6})],else:[block('tracks',{left:6,right:10})]})]})];
    if(name==='color')program.start=[block('while',{sensor:'color',compare:'!=',value:'red',body:[block('forward',{power:15,seconds:.1})]}),block('stop'),block('rgb',{value:'#ef4444'})];
    if(name==='light')program.start=[block('forever',{body:[block('if',{sensor:'light',compare:'<',threshold:40,then:[block('rgb',{value:'#facc15'})],else:[block('rgb',{value:'#000000'})]}),block('wait',{seconds:.1})]})];
    if(name==='route')program.start=[block('forward'),block('right'),block('forward'),block('stop')];
    if(name==='buttons')program.start=[block('text',{value:'Prem A o B'})];
    return name==='blank'?{start:[],A:[],B:[]}:program;
  }
  function cleanProgram(value) {
    if(!value||typeof value!=='object')throw new Error('Falta el programa.');let total=0;
    function clean(list,depth=0) {
      if(!Array.isArray(list)||list.length>100||depth>8)throw new Error('Estructura de blocs no vàlida.');
      return list.map(b=>{
        if(!b||!names[b.type]||++total>300)throw new Error('Bloc desconegut o programa massa llarg.');
        const legacy=b.sensor==='obstacle';
        return block(b.type,{value:String(b.value||'').slice(0,40),pattern:Array.isArray(b.pattern)&&b.pattern.length===8&&b.pattern.every(r=>/^[01]{16}$/.test(r))?b.pattern:blankPattern(),power:numeric(b.power,0,100,30),left:numeric(b.left,-100,100,10),right:numeric(b.right,-100,100,10),seconds:numeric(b.seconds,.05,10,1),count:Math.round(numeric(b.count,1,100,3)),sensor:legacy?'infrared':sensorOptions.some(([v])=>v===b.sensor)?b.sensor:'infrared',compare:legacy?(b.obstacleValue==='false'?'<':'>'):['<','>','<=','>=','=','!='].includes(b.compare)?b.compare:'>',threshold:legacy?60:numeric(b.threshold,0,100,50),body:clean(b.body||[],depth+1),then:clean(b.then||[],depth+1),else:clean(b.else||[],depth+1)});
      });
    }
    return {start:clean(value.start||[]),A:clean(value.A||[]),B:clean(value.B||[])};
  }
  let stored=null,program=example('obstacle');
  try {stored=JSON.parse(localStorage.getItem('robotica-codey-v2')||localStorage.getItem('robotica-codey-v1'));if(stored&&[1,2].includes(stored.version))program=cleanProgram(stored.program);}catch(_){stored=null;}
  const engine=new Engine(program);
  let selectedEvent='start',target=program.start,tool='obstacle',listMap=new Map();
  let startPose={...engine.pose},cursor={x:320,y:250},keyboardCursor=false;
  let calibration={background:null,line:null},lineWidth=24,surfaceColor='black',drawing=null;
  function cleanEnvironment(value={}) {
    const rects=(items,patch=false)=>(Array.isArray(items)?items:[]).slice(0,60).map(b=>({x:numeric(b.x,0,WIDTH-5,100),y:numeric(b.y,0,HEIGHT-5,100),w:numeric(b.w,5,WIDTH,50),h:numeric(b.h,5,HEIGHT,50),...(patch?{color:COLORS[b.color]?b.color:'black'}:{})}));
    return {light:numeric(value.light,0,100,70),sound:numeric(value.sound,0,100,20),orientation:value.orientation==='down'?'down':'front',obstacles:rects(value.obstacles),patches:rects(value.patches,true),lines:(Array.isArray(value.lines)?value.lines:[]).slice(0,80).map(l=>({width:numeric(l.width,8,60,24),color:COLORS[l.color]?l.color:'black',points:(Array.isArray(l.points)?l.points:[]).slice(0,1200).filter(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)).map(p=>({x:numeric(p.x,0,WIDTH,0),y:numeric(p.y,0,HEIGHT,0)}))}))};
  }
  function restoreScene(data) {
    if(data.environment)engine.environment=cleanEnvironment(data.environment);
    if(data.startPose){startPose={x:numeric(data.startPose.x,25,WIDTH-25,160),y:numeric(data.startPose.y,25,HEIGHT-25,250),angle:numeric(data.startPose.angle,0,360,0)};engine.pose={...startPose};}
    if(data.calibration)calibration={background:data.calibration.background===null?null:numeric(data.calibration.background,0,100,null),line:data.calibration.line===null?null:numeric(data.calibration.line,0,100,null)};
  }
  if(stored){restoreScene(stored);$('[data-cr-example]').selectedIndex=-1;}
  const world = $('[data-cr-world]'), ctx = world.getContext('2d');
  const led = $('[data-cr-led]'), ledCtx = led.getContext('2d');
  const sprite = new Image(); sprite.src = new URL('../_assets/icons/codey-rocky.webp', document.currentScript.src).href;
  function project() {return {type:'robotica-codey',version:2,program,environment:engine.environment,startPose,calibration};}
  function save() {try {localStorage.setItem('robotica-codey-v2',JSON.stringify(project()));}catch(_){}}
  function syncSceneControls() {
    $('[data-cr-orientation]').value=engine.environment.orientation;lineWidth=engine.environment.lines[0]?.width||lineWidth;$('[data-cr-line-width]').value=lineWidth;
    for(const sensor of ['light','sound']){$(`[data-cr-sensor="${sensor}"]`).value=engine.environment[sensor];$(`[data-cr-${sensor}-value]`).textContent=engine.environment[sensor];}
    for(const key of ['background','line'])$(`[data-cr-sample-${key}]`).textContent=calibration[key]??'—';
    $('[data-cr-calibration-status]').textContent=calibration.background!==null&&calibration.line!==null?`Fons: ${calibration.background} · Línia: ${calibration.line}.`:'Encara no hi ha dues mesures.';
  }
  function loadTrack(name) {
    halt();engine.environment.lines=name==='none'?[]:[trackPreset(name,lineWidth)];engine.environment.patches=[];engine.environment.obstacles=[];engine.environment.orientation='down';
    startPose=name==='circuit'?{x:400,y:100+lineWidth/2,angle:0}:name==='curve'?{x:70,y:250+lineWidth/2,angle:40}:{x:100,y:250+lineWidth/2,angle:0};
    if(name==='curve') {const first=engine.environment.lines[0].points;startPose={x:first[0].x-Math.sin(40*Math.PI/180)*lineWidth/2,y:first[0].y+Math.cos(40*Math.PI/180)*lineWidth/2,angle:40};}
    engine.reset();engine.pose={...startPose};calibration={background:null,line:null};$('[data-cr-track]').value=name;syncSceneControls();save();
  }
  function halt() { engine.stop(); engine.active = null; }
  function select(options, current, field, label) {
    return `<label>${label} <select data-cr-field="${field}">${options.map(([value, text]) => `<option value="${value}"${String(current) === String(value) ? ' selected' : ''}>${text}</option>`).join('')}</select></label>`;
  }
  function number(field, value, min, max, step, label) {
    return `<label>${label} <input type="number" data-cr-field="${field}" value="${value}" min="${min}" max="${max}" step="${step}"></label>`;
  }
  function blockFields(b) {
    if (b.type === 'face') return select([['happy','Feliç'],['sad','Trista'],['surprise','Sorpresa'],['blank','Buida'],['custom','Dibuixa la teua']], b.value, 'value', 'Cara') + (b.value === 'custom' ? '<div class="cr-pixel-editor" role="group" aria-label="Dibuixa la cara: 16 columnes per 8 files">' + b.pattern.map((row,y)=>[...row].map((pixel,x)=>`<button type="button" data-cr-pixel="${y*16+x}" class="${pixel==='1'?'is-on':''}" aria-label="Punt ${x+1}, ${y+1}" aria-pressed="${pixel==='1'}"></button>`).join('')).join('') + '</div>' : '');
    if (b.type === 'text') return `<label>Text <input data-cr-field="value" value="${escape(b.value)}" maxlength="40" aria-label="Text de la pantalla"></label>`;
    if (b.type === 'rgb') return select([['#22c55e','Verd'],['#ef4444','Roig'],['#3b82f6','Blau'],['#facc15','Groc'],['#000000','Apagada']], b.value, 'value', 'Color');
    if(b.type==='reading')return select(sensorOptions,b.sensor,'sensor','Sensor');
    if(b.type==='tracks')return number('left',b.left,-100,100,1,'Esquerra %')+number('right',b.right,-100,100,1,'Dreta %');
    if(['if','while'].includes(b.type))return select(sensorOptions,b.sensor,'sensor','Sensor')+(b.sensor==='color'?select([['=','és'],['!=','no és']],b.compare,'compare','Condició')+select(Object.entries(colorNames),b.value,'value','Color'):select([['<','menor que'],['>','major que'],['<=','menor o igual'],['>=','major o igual'],['=','igual'],['!=','diferent']],b.compare,'compare','Condició')+number('threshold',b.threshold,0,100,1,'Llindar'));
    if (b.type === 'repeat') return number('count', b.count, 1, 100, 1, 'Vegades');
    const movement = ['forward','back','left','right','drive'].includes(b.type);
    return (movement ? number('power', b.power, 0, 100, 1, 'Potència %') : '') + ((movement && b.type !== 'drive') || b.type === 'wait' ? number('seconds', b.seconds, .05, 10, .05, 'Segons') : '');
  }
  function renderList(list, depth = 0) {
    const key = `list-${listMap.size}`; listMap.set(key, list);
    return `<div class="cr-block-list${list === target ? ' is-target' : ''}">${list.map((b, i) => {
      const category=blockStyles[b.type].category;
      return `<div class="cr-block cr-block-${category} cr-category-${category}" data-cr-block="${b.id}"><div class="cr-block-heading"><strong class="cr-block-title">${blockIcon(b.type)}<span>${names[b.type]}</span></strong><div class="cr-block-actions"><button type="button" data-cr-action="up" aria-label="Puja ${names[b.type]}"${i === 0 ? ' disabled' : ''}>↑</button><button type="button" data-cr-action="down" aria-label="Baixa ${names[b.type]}"${i === list.length - 1 ? ' disabled' : ''}>↓</button><button type="button" data-cr-action="delete" aria-label="Lleva ${names[b.type]}">×</button></div></div><div class="cr-block-fields">${blockFields(b)}</div>${b.type === 'if' ? `<p class="cr-branch-label">Aleshores</p>${renderList(b.then, depth+1)}<p class="cr-branch-label">Si no</p>${renderList(b.else, depth+1)}` : ['repeat','forever','while'].includes(b.type) ? renderList(b.body, depth+1) : ''}</div>`;
    }).join('')}<button type="button" class="cr-insert" data-cr-target="${key}" aria-pressed="${list === target}">${list === target ? '✓ ' : '+ '}Afegir ací</button></div>`;
  }
  function renderProgram() {
    listMap = new Map(); $('[data-cr-program]').innerHTML = renderList(program[selectedEvent]); previousActive = undefined;
    root.querySelectorAll('[data-cr-script]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.crScript === selectedEvent)));
  }
  function find(id, lists = Object.values(program)) {
    for (const list of lists) for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) return { list, index: i, block: list[i] };
      const nested = find(id, [list[i].body, list[i].then, list[i].else]); if (nested) return nested;
    }
    return null;
  }
  root.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button) return;
    if (button.hasAttribute('data-cr-script')) { selectedEvent = button.dataset.crScript; target = program[selectedEvent]; renderProgram(); }
    if (button.hasAttribute('data-cr-target')) { target = listMap.get(button.dataset.crTarget); renderProgram(); }
    if (button.hasAttribute('data-cr-add')) {
      let total = 0; function count(list, d=0) { if(d>8) throw new Error(); for(const b of list) { total++;count(b.body,d+1);count(b.then,d+1);count(b.else,d+1); } }
      try { for(const list of Object.values(program))count(list); if(total>=150)throw new Error(); }
      catch (_) { engine.trace='Programa massa llarg. Redueix els blocs o la profunditat dels bucles.'; return; }
      halt(); const b = block(button.dataset.crAdd); target.push(b);
      if (b.type === 'if') target = b.then; else if (['repeat','forever','while'].includes(b.type)) target = b.body;
      save(); renderProgram();
    }
    if (button.hasAttribute('data-cr-pixel')) {
      halt();const b=find(button.closest('[data-cr-block]').dataset.crBlock).block;const i=Number(button.dataset.crPixel),y=Math.floor(i/16),x=i%16;const row=[...b.pattern[y]];row[x]=row[x]==='1'?'0':'1';b.pattern[y]=row.join('');
      button.classList.toggle('is-on',row[x]==='1');button.setAttribute('aria-pressed',String(row[x]==='1'));engine.output={...engine.output,face:'custom',pattern:b.pattern,text:''};save();
    }
    if (button.hasAttribute('data-cr-action')) {
      const entry = find(button.closest('[data-cr-block]').dataset.crBlock); halt();
      if (button.dataset.crAction === 'delete') { entry.list.splice(entry.index, 1); target = program[selectedEvent]; }
      else { const n = entry.index + (button.dataset.crAction === 'up' ? -1 : 1); if(n>=0&&n<entry.list.length)[entry.list[n],entry.list[entry.index]]=[entry.list[entry.index],entry.list[n]]; }
      save();renderProgram();
    }
    if (button.hasAttribute('data-cr-clear')) { halt();program[selectedEvent]=[];target=program[selectedEvent];save();renderProgram(); }
    if (button.hasAttribute('data-cr-run')) { engine.reset();engine.pose={...startPose};engine.trigger('start'); }
    if (button.hasAttribute('data-cr-step')) engine.step();
    if (button.hasAttribute('data-cr-stop')) { halt();engine.trace='Programa aturat.'; }
    if (button.hasAttribute('data-cr-event')) engine.trigger(button.dataset.crEvent);
    if (button.hasAttribute('data-cr-reset')) { engine.reset();engine.pose={...startPose};engine.trace='Robot retornat a la posició inicial; es conserva la pista.'; }
    if (button.hasAttribute('data-cr-rotate')) { halt();startPose.angle=(startPose.angle+90)%360;engine.pose={...startPose};save(); }
    if(button.hasAttribute('data-cr-clear-lines')){halt();engine.environment.lines=[];engine.environment.patches=[];$('[data-cr-track]').value='none';save();}
    if(button.hasAttribute('data-cr-sample')) {
      const value=engine.sensor('gray');
      if(value===null){$('[data-cr-calibration-status]').textContent='Orienta primer el sensor cap al terra.';return;}
      calibration[button.dataset.crSample]=value;syncSceneControls();save();
      $('[data-cr-calibration-status]').textContent=`Fons: ${calibration.background??'—'} · Línia: ${calibration.line??'—'}.`;
    }
    if(button.hasAttribute('data-cr-apply-threshold')) {
      const {background,line}=calibration;
      if(background===null||line===null||Math.abs(background-line)<10){$('[data-cr-calibration-status]').textContent='Calen dues lectures amb prou contrast. Mesura el fons i el centre de la línia.';return;}
      halt();const threshold=Math.round((background+line)/2);let total=0;
      function apply(list){for(const b of list){if(['if','while'].includes(b.type)&&b.sensor==='gray'){b.threshold=threshold;total++;}apply(b.body);apply(b.then);apply(b.else);}}
      for(const list of Object.values(program))apply(list);
      $('[data-cr-calibration-status]').textContent=`Llindar ${threshold} aplicat a ${total} condicions de grisos. ${line<background?'La línia és més fosca que el fons.':'La línia és més clara: revisa el sentit de la comparació.'}`;
      save();renderProgram();
    }
    if(button.hasAttribute('data-cr-export')) {
      const url=URL.createObjectURL(new Blob([JSON.stringify(project(),null,2)],{type:'application/json'}));
      const a=document.createElement('a');a.href=url;a.download='projecte-codey-rocky.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    }
    if (button.hasAttribute('data-cr-tool')) { tool=button.dataset.crTool;root.querySelectorAll('[data-cr-tool]').forEach(b=>b.setAttribute('aria-pressed',String(b===button))); }
  });
  root.addEventListener('change', async event => {
    const input = event.target;
    if(input.hasAttribute('data-cr-import')) {
      const file=input.files[0];if(!file)return;
      try{
        if(file.size>1500000)throw new Error('Fitxer massa gran.');const data=JSON.parse(await file.text());
        if(data.type!=='robotica-codey'||data.version!==2)throw new Error('No és un projecte de Codey Rocky compatible.');
        const nextProgram=cleanProgram(data.program);cleanEnvironment(data.environment);
        halt();program=nextProgram;engine.program=program;restoreScene(data);engine.reset();engine.pose={...startPose};selectedEvent='start';target=program.start;syncSceneControls();save();renderProgram();
        engine.trace='Projecte obert: programa i escenari restaurats.';
      }catch(error){engine.trace='No s’ha pogut obrir el projecte: '+error.message;}
      input.value='';return;
    }
    if(input.hasAttribute('data-cr-example')) {
      halt();program=example(input.value);engine.program=program;selectedEvent='start';target=program.start;
      if(input.value==='line')loadTrack('circuit');
      else if(input.value==='color'){loadTrack('none');engine.environment.patches=[{x:430,y:210,w:80,h:80,color:'red'}];startPose={x:160,y:250,angle:0};}
      else if(['obstacle','while'].includes(input.value)){engine.environment={...engine.environment,orientation:'front',lines:[],patches:[],obstacles:[{x:430,y:190,w:65,h:120}]};startPose={x:160,y:250,angle:0};}
      engine.reset();engine.pose={...startPose};engine.trace='Exemple carregat. Executa el programa o prem A o B.';syncSceneControls();save();renderProgram();
    }
    if (input.hasAttribute('data-cr-field')) {
      const entry=find(input.closest('[data-cr-block]').dataset.crBlock);halt();
      entry.block[input.dataset.crField]=input.type==='number'?numeric(input.value,Number(input.min),Number(input.max),Number(input.min)):input.value;
      if(input.dataset.crField==='sensor'&&input.value==='color'){entry.block.compare='=';entry.block.value='red';}
      else if(input.dataset.crField==='sensor'&&!['<','>','<=','>=','=','!='].includes(entry.block.compare))entry.block.compare='>';
      save();renderProgram();
    }
    if(input.hasAttribute('data-cr-orientation')){halt();engine.environment.orientation=input.value;save();}
    if(input.hasAttribute('data-cr-track'))loadTrack(input.value);
    if(input.hasAttribute('data-cr-line-width')){lineWidth=numeric(input.value,8,60,24);input.value=lineWidth;for(const l of engine.environment.lines)l.width=lineWidth;save();}
    if(input.hasAttribute('data-cr-surface-color'))surfaceColor=input.value;
  });
  root.querySelectorAll('[data-cr-sensor]').forEach(input=>input.addEventListener('input',()=>{
    engine.environment[input.dataset.crSensor]=Number(input.value);
    $(`[data-cr-${input.dataset.crSensor}-value]`).textContent=input.value;save();
  }));
  function editWorld(x,y) {
    x=numeric(x,25,WIDTH-25,25);y=numeric(y,25,HEIGHT-25,25);
    if(tool==='robot') {
      halt();if(engine.environment.obstacles.some(b=>x>=b.x-20&&x<=b.x+b.w+20&&y>=b.y-20&&y<=b.y+b.h+20)){engine.trace='La posició inicial ha de quedar fora dels obstacles.';return;}
      startPose={x,y,angle:startPose.angle};engine.pose={...startPose};
    }else if(tool==='remove') {
      engine.environment.obstacles=engine.environment.obstacles.filter(b=>!(x>=b.x-10&&x<=b.x+b.w+10&&y>=b.y-10&&y<=b.y+b.h+10));
      engine.environment.patches=engine.environment.patches.filter(b=>!(x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h));
      engine.environment.lines=engine.environment.lines.filter(l=>!(l.points.length===1&&Math.hypot(x-l.points[0].x,y-l.points[0].y)<l.width/2+5)&&!l.points.some((p,i)=>i>0&&segmentDistance(x,y,l.points[i-1],p)<l.width/2+5));
    }else if(tool==='line'){
      halt();if(engine.environment.lines.length<80){drawing={points:[{x,y}],width:lineWidth,color:surfaceColor};engine.environment.lines.push(drawing);$('[data-cr-track]').value='none';}
    }else if(tool==='surface') {
      halt();if(engine.environment.patches.length<60)engine.environment.patches.push({x:Math.min(WIDTH-60,x-30),y:Math.min(HEIGHT-60,y-30),w:60,h:60,color:surfaceColor});
    }else if(engine.environment.obstacles.length<30)engine.environment.obstacles.push({x:Math.min(WIDTH-60,x-25),y:Math.min(HEIGHT-60,y-25),w:50,h:50});
    save();
  }
  function worldPoint(e){const r=world.getBoundingClientRect();return {x:numeric((e.clientX-r.left)*WIDTH/r.width,0,WIDTH,0),y:numeric((e.clientY-r.top)*HEIGHT/r.height,0,HEIGHT,0)};}
  world.addEventListener('pointerdown',e=>{keyboardCursor=false;const p=worldPoint(e);editWorld(p.x,p.y);if(tool==='line')world.setPointerCapture(e.pointerId);});
  world.addEventListener('pointermove',e=>{if(!drawing||!world.hasPointerCapture(e.pointerId))return;const p=worldPoint(e),last=drawing.points.at(-1);if(drawing.points.length<1200&&Math.hypot(p.x-last.x,p.y-last.y)>2)drawing.points.push(p);});
  const endDrawing=()=>{drawing=null;save();};world.addEventListener('pointerup',endDrawing);world.addEventListener('pointercancel',endDrawing);
  world.addEventListener('keydown',e=>{
    const dirs={ArrowUp:[0,-20],ArrowDown:[0,20],ArrowLeft:[-20,0],ArrowRight:[20,0]};
    if(dirs[e.key]) {e.preventDefault();keyboardCursor=true;cursor.x=Math.max(25,Math.min(WIDTH-25,cursor.x+dirs[e.key][0]));cursor.y=Math.max(25,Math.min(HEIGHT-25,cursor.y+dirs[e.key][1]));}
    if(e.key===' '||e.key==='Enter'){e.preventDefault();editWorld(cursor.x,cursor.y);}
  });
  const pixelText=document.createElement('canvas');pixelText.width=16;pixelText.height=8;const textCtx=pixelText.getContext('2d',{willReadFrequently:true});
  const faces={
    happy:['0000000000000000','0001100000011000','0001100000011000','0000000000000000','0010000000000100','0001000000001000','0000111111110000','0000000000000000'],
    sad:['0000000000000000','0001100000011000','0001100000011000','0000000000000000','0000111111110000','0001000000001000','0010000000000100','0000000000000000'],
    surprise:['0000000000000000','0001100000011000','0001100000011000','0000000000000000','0000001111000000','0000010000100000','0000001111000000','0000000000000000'],
    blank:Array(8).fill('0000000000000000')
  };
  let previousTrace='', previousActive=null;
  function draw(now) {
    ctx.fillStyle='#ffffff';ctx.fillRect(0,0,WIDTH,HEIGHT);ctx.strokeStyle='#e2e8f0';ctx.lineWidth=1;
    for(let x=0;x<WIDTH;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,HEIGHT);ctx.stroke();}
    for(let y=0;y<HEIGHT;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(WIDTH,y);ctx.stroke();}
    for(const b of engine.environment.patches){ctx.fillStyle=COLORS[b.color]||COLORS.white;ctx.fillRect(b.x,b.y,b.w,b.h);}
    for(const line of engine.environment.lines){
      if(!line.points.length)continue;ctx.strokeStyle=COLORS[line.color]||COLORS.black;ctx.fillStyle=ctx.strokeStyle;ctx.lineWidth=line.width;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(line.points[0].x,line.points[0].y);for(const p of line.points.slice(1))ctx.lineTo(p.x,p.y);ctx.stroke();
      if(line.points.length===1){ctx.beginPath();ctx.arc(line.points[0].x,line.points[0].y,line.width/2,0,Math.PI*2);ctx.fill();}
    }
    ctx.lineWidth=1;
    for(const b of engine.environment.obstacles){ctx.fillStyle='#cbd5e1';ctx.fillRect(b.x,b.y,b.w,b.h);ctx.strokeStyle='#64748b';ctx.strokeRect(b.x,b.y,b.w,b.h);}
    const p=engine.pose;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.angle*Math.PI/180);
    if(engine.environment.orientation==='front'){ctx.fillStyle=engine.sensor('infrared')>60?'#fca5a566':'#38bdf833';ctx.beginPath();ctx.moveTo(24,0);ctx.lineTo(224,-28);ctx.lineTo(224,28);ctx.closePath();ctx.fill();}
    if(sprite.complete&&sprite.naturalWidth){ctx.rotate(Math.PI/2);ctx.drawImage(sprite,-27,-27,54,54);ctx.rotate(-Math.PI/2);}
    else {ctx.fillStyle='#2563eb';ctx.beginPath();ctx.arc(0,0,20,0,Math.PI*2);ctx.fill();}
    ctx.fillStyle='#1d4ed8';ctx.beginPath();ctx.moveTo(34,0);ctx.lineTo(24,-7);ctx.lineTo(24,7);ctx.closePath();ctx.fill();ctx.restore();
    if(engine.environment.orientation==='down'){const point=engine.sensorPoint();ctx.strokeStyle='#0284c7';ctx.fillStyle='#38bdf8';ctx.lineWidth=2;ctx.beginPath();ctx.arc(point.x,point.y,5,0,Math.PI*2);ctx.fill();ctx.stroke();}
    if(keyboardCursor){ctx.strokeStyle='#2563eb';ctx.lineWidth=3;ctx.strokeRect(cursor.x-15,cursor.y-15,30,30);}
    let pattern=engine.output.face==='custom'&&engine.output.pattern?engine.output.pattern:faces[engine.output.face]||faces.happy;
    if(engine.output.text){textCtx.clearRect(0,0,16,8);textCtx.fillStyle='white';textCtx.font='8px monospace';const length=engine.output.text.length*5;const offset=16-(Math.floor(now/140)%(length+20));textCtx.fillText(engine.output.text,offset,7);const pixels=textCtx.getImageData(0,0,16,8).data;pattern=Array.from({length:8},(_,y)=>Array.from({length:16},(_,x)=>pixels[(y*16+x)*4+3]>80?'1':'0').join(''));}
    ledCtx.fillStyle='#0f172a';ledCtx.fillRect(0,0,320,160);
    for(let y=0;y<8;y++)for(let x=0;x<16;x++){ledCtx.fillStyle=pattern[y][x]==='1'?'#38bdf8':'#1e293b';ledCtx.beginPath();ledCtx.arc(x*20+10,y*20+10,6,0,Math.PI*2);ledCtx.fill();}
    led.setAttribute('aria-label',engine.output.text?'Pantalla: '+engine.output.text:'Pantalla LED: '+({happy:'cara feliç',sad:'cara trista',surprise:'cara de sorpresa',blank:'buida',custom:'cara personalitzada'}[engine.output.face]||''));
    const rgb=$('[data-cr-rgb]');rgb.style.backgroundColor=engine.output.rgb;rgb.setAttribute('aria-label','Indicador RGB: '+({'#22c55e':'verd','#ef4444':'roig','#3b82f6':'blau','#facc15':'groc','#000000':'apagat'}[engine.output.rgb]||engine.output.rgb));
    $('[data-cr-ir]').textContent=engine.sensor('infrared')??'—';$('[data-cr-gray]').textContent=engine.sensor('gray')??'—';$('[data-cr-color]').textContent=colorNames[engine.sensor('color')]??'—';
    $('[data-cr-condition]').textContent=engine.lastCondition||'La lectura i el resultat de la condició apareixeran ací.';
    if(previousTrace!==engine.trace){$('[data-cr-status]').textContent=engine.trace;previousTrace=engine.trace;}
    if(previousActive!==engine.active){root.querySelectorAll('[data-cr-block]').forEach(b=>b.classList.toggle('is-executing',b.dataset.crBlock===engine.active));previousActive=engine.active;}
    $('[data-cr-run]').setAttribute('aria-pressed',String(engine.running));
  }
  document.addEventListener('simrobotchange',e=>{if(e.detail.robot!=='codey-rocky'){halt();engine.trace='Simulació aturada en canviar de robot.';}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)halt();});
  syncSceneControls();renderProgram();
  let last=performance.now();
  function frame(now){
    if(!root.hidden){const speed=Number(document.querySelector('[data-speed-select]').value)||520;engine.tick(Math.min((now-last)/1000,.1)*(520/speed),.08);draw(now);}
    last=now;requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
