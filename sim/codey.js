(function () {
  'use strict';
  const root = document.querySelector('[data-codey-workspace]');
  if (!root || !window.CodeySimulation) return;
  const { Engine, WIDTH, HEIGHT } = window.CodeySimulation;
  const $ = q => root.querySelector(q);
  const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const blankPattern = () => Array(8).fill('0000000000000000');
  const names = { face: 'Mostra cara', text: 'Mostra text', rgb: 'Llum RGB', forward: 'Avança', back: 'Enrere', left: 'Gira esquerra', right: 'Gira dreta', drive: 'Avança contínuament', stop: 'Atura motors', wait: 'Espera', repeat: 'Repeteix', forever: 'Per sempre', while: 'Mentre', if: 'Si' };
  let counter = 0;
  function block(type, extra = {}) {
    return { id: `cr-${++counter}`, type, power: 30, seconds: 1, count: 3, sensor: 'obstacle', obstacleValue: 'true', compare: '<', threshold: 40, value: type === 'face' ? 'happy' : type === 'rgb' ? '#22c55e' : 'Hola', pattern: blankPattern(), body: [], then: [], else: [], ...extra };
  }
  function example(name) {
    const program = { start: [], A: [block('face')], B: [block('face', { value: 'sad' })] };
    if (name === 'obstacle') program.start = [block('forever', { body: [block('if', { then: [block('stop'), block('face', { value: 'surprise' })], else: [block('face'), block('drive')] }), block('wait', { seconds: .1 })] })];
    if (name === 'light') program.start = [block('forever', { body: [block('if', { sensor: 'light', threshold: 40, then: [block('rgb', { value: '#facc15' })], else: [block('rgb', { value: '#000000' })] }), block('wait', { seconds: .1 })] })];
    if (name === 'route') program.start = [block('forward'), block('right', { seconds: 1, power: 30 }), block('forward'), block('stop')];
    if (name === 'while') program.start = [block('while', { obstacleValue: 'false', body: [block('forward', { seconds: .2 })] }), block('stop'), block('face', { value: 'surprise' })];
    if (name === 'buttons') program.start = [block('text', { value: 'Prem A o B' })];
    if (name === 'blank') return { start: [], A: [], B: [] };
    return program;
  }
  // La memòria local és opcional; en navegació privada el simulador continua funcionant.
  let program = example('obstacle');
  try {
    const stored = JSON.parse(localStorage.getItem('robotica-codey-v1'));
    if (stored && stored.version === 1) {
      let total = 0;
      function clean(list, depth = 0) {
        if (!Array.isArray(list) || depth > 8) return [];
        return list.slice(0, 100).filter(b => b && names[b.type]).map(b => {
          if (++total > 300) throw new Error('Programa massa llarg');
          return block(b.type, { value: String(b.value || '').slice(0, 40), pattern: Array.isArray(b.pattern) && b.pattern.length === 8 && b.pattern.every(row => /^[01]{16}$/.test(row)) ? b.pattern : blankPattern(), power: Math.max(0, Math.min(100, Number(b.power) || 30)), seconds: Math.max(.05, Math.min(10, Number(b.seconds) || 1)), count: Math.max(1, Math.min(100, Number(b.count) || 3)), sensor: ['light', 'sound', 'obstacle'].includes(b.sensor) ? b.sensor : 'obstacle', obstacleValue: b.obstacleValue === 'false' ? 'false' : 'true', compare: b.compare === '>' ? '>' : '<', threshold: Math.max(0, Math.min(100, Number(b.threshold) || 40)), body: clean(b.body, depth + 1), then: clean(b.then, depth + 1), else: clean(b.else, depth + 1) });
        });
      }
      program = { start: clean(stored.program.start), A: clean(stored.program.A), B: clean(stored.program.B) };
      $('[data-cr-example]').selectedIndex = -1;
    }
  } catch (_) {}
  const engine = new Engine(program);
  let selectedEvent = 'start', target = program.start, tool = 'obstacle', listMap = new Map();
  let startPose = { ...engine.pose }, cursor = { x: 320, y: 250 }, keyboardCursor = false;
  const world = $('[data-cr-world]'), ctx = world.getContext('2d');
  const led = $('[data-cr-led]'), ledCtx = led.getContext('2d');
  const sprite = new Image(); sprite.src = new URL('../_assets/icons/codey-rocky.webp', document.currentScript.src).href;
  function save() { try { localStorage.setItem('robotica-codey-v1', JSON.stringify({ version: 1, program })); } catch (_) {} }
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
    if (['if','while'].includes(b.type)) return select([['obstacle','Obstacle al davant'],['light','Llum'],['sound','So']], b.sensor, 'sensor', 'Sensor') + (b.sensor === 'obstacle' ? select([['true','hi ha obstacle'],['false','no hi ha obstacle']], b.obstacleValue, 'obstacleValue', 'Condició') : select([['<','menor que'],['>','major que']], b.compare, 'compare', 'Condició') + number('threshold', b.threshold, 0, 100, 1, 'Llindar'));
    if (b.type === 'repeat') return number('count', b.count, 1, 100, 1, 'Vegades');
    const movement = ['forward','back','left','right','drive'].includes(b.type);
    return (movement ? number('power', b.power, 0, 100, 1, 'Potència %') : '') + ((movement && b.type !== 'drive') || b.type === 'wait' ? number('seconds', b.seconds, .05, 10, .05, 'Segons') : '');
  }
  function renderList(list, depth = 0) {
    const key = `list-${listMap.size}`; listMap.set(key, list);
    return `<div class="cr-block-list${list === target ? ' is-target' : ''}">${list.map((b, i) => {
      const category = ['if','while','repeat','forever','wait'].includes(b.type) ? 'control' : ['face','text','rgb'].includes(b.type) ? 'display' : 'motion';
      return `<div class="cr-block cr-block-${category}" data-cr-block="${b.id}"><div class="cr-block-heading"><strong>${names[b.type]}</strong><div class="cr-block-actions"><button type="button" data-cr-action="up" aria-label="Puja ${names[b.type]}"${i === 0 ? ' disabled' : ''}>↑</button><button type="button" data-cr-action="down" aria-label="Baixa ${names[b.type]}"${i === list.length - 1 ? ' disabled' : ''}>↓</button><button type="button" data-cr-action="delete" aria-label="Lleva ${names[b.type]}">×</button></div></div><div class="cr-block-fields">${blockFields(b)}</div>${b.type === 'if' ? `<p class="cr-branch-label">Aleshores</p>${renderList(b.then, depth+1)}<p class="cr-branch-label">Si no</p>${renderList(b.else, depth+1)}` : ['repeat','forever','while'].includes(b.type) ? renderList(b.body, depth+1) : ''}</div>`;
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
    if (button.hasAttribute('data-cr-reset')) { engine.reset();engine.pose={...startPose};engine.environment.obstacles=[{x:430,y:190,w:65,h:120}]; }
    if (button.hasAttribute('data-cr-rotate')) { halt();startPose.angle=(startPose.angle+90)%360;engine.pose={...startPose}; }
    if (button.hasAttribute('data-cr-tool')) { tool=button.dataset.crTool;root.querySelectorAll('[data-cr-tool]').forEach(b=>b.setAttribute('aria-pressed',String(b===button))); }
  });
  root.addEventListener('change', event => {
    const input = event.target;
    if (input.hasAttribute('data-cr-example')) { halt();program=example(input.value);engine.program=program;engine.reset();engine.pose={...startPose};engine.trace='Exemple carregat. Executa el programa o prem A o B.';selectedEvent='start';target=program.start;save();renderProgram(); }
    if (input.hasAttribute('data-cr-field')) {
      const entry=find(input.closest('[data-cr-block]').dataset.crBlock);halt();
      entry.block[input.dataset.crField]=input.type==='number'?Math.max(Number(input.min),Math.min(Number(input.max),Number(input.value)||Number(input.min))):input.value;
      save();renderProgram();
    }
  });
  root.querySelectorAll('[data-cr-sensor]').forEach(input=>input.addEventListener('input',()=>{
    engine.environment[input.dataset.crSensor]=Number(input.value);
    $(`[data-cr-${input.dataset.crSensor}-value]`).textContent=input.value;
  }));
  function editWorld(x,y) {
    x=Math.max(25,Math.min(WIDTH-25,x));y=Math.max(25,Math.min(HEIGHT-25,y));
    if(tool==='robot') { halt();startPose={x,y,angle:startPose.angle};engine.pose={...startPose}; }
    else if(tool==='remove') engine.environment.obstacles=engine.environment.obstacles.filter(b=>!(x>=b.x-10&&x<=b.x+b.w+10&&y>=b.y-10&&y<=b.y+b.h+10));
    else if(engine.environment.obstacles.length<30) engine.environment.obstacles.push({x:Math.min(WIDTH-60,x-25),y:Math.min(HEIGHT-60,y-25),w:50,h:50});
  }
  world.addEventListener('pointerdown',e=>{keyboardCursor=false;const r=world.getBoundingClientRect();editWorld((e.clientX-r.left)*WIDTH/r.width,(e.clientY-r.top)*HEIGHT/r.height);});
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
    ctx.fillStyle='#f8fafc';ctx.fillRect(0,0,WIDTH,HEIGHT);ctx.strokeStyle='#e2e8f0';ctx.lineWidth=1;
    for(let x=0;x<WIDTH;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,HEIGHT);ctx.stroke();}
    for(let y=0;y<HEIGHT;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(WIDTH,y);ctx.stroke();}
    for(const b of engine.environment.obstacles){ctx.fillStyle='#cbd5e1';ctx.fillRect(b.x,b.y,b.w,b.h);ctx.strokeStyle='#64748b';ctx.strokeRect(b.x,b.y,b.w,b.h);}
    const p=engine.pose;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.angle*Math.PI/180);
    ctx.fillStyle=engine.obstacle()?'#fca5a566':'#38bdf833';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(100,-22);ctx.lineTo(100,22);ctx.closePath();ctx.fill();
    if(sprite.complete&&sprite.naturalWidth){ctx.rotate(Math.PI/2);ctx.drawImage(sprite,-27,-27,54,54);ctx.rotate(-Math.PI/2);}
    else {ctx.fillStyle='#2563eb';ctx.beginPath();ctx.arc(0,0,20,0,Math.PI*2);ctx.fill();}
    ctx.fillStyle='#1d4ed8';ctx.beginPath();ctx.moveTo(34,0);ctx.lineTo(24,-7);ctx.lineTo(24,7);ctx.closePath();ctx.fill();ctx.restore();
    if(keyboardCursor){ctx.strokeStyle='#2563eb';ctx.lineWidth=3;ctx.strokeRect(cursor.x-15,cursor.y-15,30,30);}
    let pattern=engine.output.face==='custom'&&engine.output.pattern?engine.output.pattern:faces[engine.output.face]||faces.happy;
    if(engine.output.text){textCtx.clearRect(0,0,16,8);textCtx.fillStyle='white';textCtx.font='8px monospace';const length=engine.output.text.length*5;const offset=16-(Math.floor(now/140)%(length+20));textCtx.fillText(engine.output.text,offset,7);const pixels=textCtx.getImageData(0,0,16,8).data;pattern=Array.from({length:8},(_,y)=>Array.from({length:16},(_,x)=>pixels[(y*16+x)*4+3]>80?'1':'0').join(''));}
    ledCtx.fillStyle='#0f172a';ledCtx.fillRect(0,0,320,160);
    for(let y=0;y<8;y++)for(let x=0;x<16;x++){ledCtx.fillStyle=pattern[y][x]==='1'?'#38bdf8':'#1e293b';ledCtx.beginPath();ledCtx.arc(x*20+10,y*20+10,6,0,Math.PI*2);ledCtx.fill();}
    led.setAttribute('aria-label',engine.output.text?'Pantalla: '+engine.output.text:'Pantalla LED: '+({happy:'cara feliç',sad:'cara trista',surprise:'cara de sorpresa',blank:'buida',custom:'cara personalitzada'}[engine.output.face]||''));
    const rgb=$('[data-cr-rgb]');rgb.style.backgroundColor=engine.output.rgb;rgb.setAttribute('aria-label','Indicador RGB: '+({'#22c55e':'verd','#ef4444':'roig','#3b82f6':'blau','#facc15':'groc','#000000':'apagat'}[engine.output.rgb]||engine.output.rgb));
    $('[data-cr-obstacle]').textContent=engine.obstacle()?'SÍ':'NO';
    if(previousTrace!==engine.trace){$('[data-cr-status]').textContent=engine.trace;previousTrace=engine.trace;}
    if(previousActive!==engine.active){root.querySelectorAll('[data-cr-block]').forEach(b=>b.classList.toggle('is-executing',b.dataset.crBlock===engine.active));previousActive=engine.active;}
    $('[data-cr-run]').setAttribute('aria-pressed',String(engine.running));
  }
  document.addEventListener('simrobotchange',e=>{if(e.detail.robot!=='codey-rocky'){halt();engine.trace='Simulació aturada en canviar de robot.';}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)halt();});
  renderProgram();
  let last=performance.now();
  function frame(now){
    if(!root.hidden){const speed=Number(document.querySelector('[data-speed-select]').value)||520;engine.tick(Math.min((now-last)/1000,.1),speed/1000);draw(now);}
    last=now;requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
