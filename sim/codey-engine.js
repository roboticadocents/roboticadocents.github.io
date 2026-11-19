/* Model didàctic independent de la interfície; coordenades i temps simulats. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CodeySimulation = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const clamp = (v, min, max) => Math.max(min, Math.min(max, Number(v) || 0));
  const R = 20, WIDTH = 800, HEIGHT = 500;
  function intersects(x, y, box) {
    const dx = x - clamp(x, box.x, box.x + box.w), dy = y - clamp(y, box.y, box.y + box.h);
    return dx * dx + dy * dy < R * R;
  }
  const SENSOR_NAMES = { infrared:'IR reflectit', gray:'Grisos', color:'Color', obstacle:'Obstacle', light:'Llum', sound:'So' };
  const COLORS = { black:'#111827', white:'#ffffff', red:'#ef4444', green:'#22c55e', blue:'#3b82f6', yellow:'#facc15' };
  function segmentDistance(x,y,a,b) {
    const dx=b.x-a.x,dy=b.y-a.y,t=clamp(((x-a.x)*dx+(y-a.y)*dy)/(dx*dx+dy*dy||1),0,1);
    return Math.hypot(x-a.x-t*dx,y-a.y-t*dy);
  }
  function trackPreset(name, width=24) {
    const points=[];
    if(name==='straight') points.push({x:70,y:250},{x:730,y:250});
    else if(name==='curve') for(let i=0;i<=100;i++){const x=70+i*6.6;points.push({x,y:250+90*Math.sin((x-70)/660*Math.PI*2)});}
    else if(name==='circuit') for(let i=0;i<=160;i++){const a=-Math.PI/2+i/160*Math.PI*2;points.push({x:400+250*Math.cos(a),y:250+150*Math.sin(a)});}
    return { points, width, color:'black' };
  }
  function cleanExpression(expr,depth=0){
    if(!expr||typeof expr!=='object'||depth>12)throw new Error('Expressió de blocs no vàlida.');
    if(expr.kind==='number'&&Number.isFinite(Number(expr.value)))return {kind:'number',value:clamp(expr.value,-10000,10000)};
    if(expr.kind==='boolean')return {kind:'boolean',value:expr.value===true};
    if(expr.kind==='string')return {kind:'string',value:String(expr.value||'').slice(0,40)};
    if(expr.kind==='sensor'&&['infrared','gray','light','sound','color'].includes(expr.name))return {kind:'sensor',name:expr.name};
    if(expr.kind==='color'&&COLORS[expr.value])return {kind:'color',value:expr.value};
    if(expr.kind==='not')return {kind:'not',value:cleanExpression(expr.value,depth+1)};
    if(['compare','and','or'].includes(expr.kind)){
      if(expr.kind==='compare'&&!['<','>','='].includes(expr.op))throw new Error('Operador no vàlid.');
      return {kind:expr.kind,...(expr.kind==='compare'?{op:expr.op}:{}),left:cleanExpression(expr.left,depth+1),right:cleanExpression(expr.right,depth+1)};
    }
    throw new Error('Expressió de blocs desconeguda.');
  }
  function evaluate(expr,read){
    if(['number','string','boolean'].includes(expr.kind))return expr.value;
    if(expr.kind==='sensor')return read(expr.name);
    if(expr.kind==='color'){const value=read('color');return value===null?null:value===expr.value;}
    if(expr.kind==='not'){const value=evaluate(expr.value,read);return value===null?null:!value;}
    const left=evaluate(expr.left,read),right=evaluate(expr.right,read);
    if(left===null||right===null)return null;
    if(expr.kind==='and')return Boolean(left&&right);
    if(expr.kind==='or')return Boolean(left||right);
    return expr.op==='<'?left<right:expr.op==='>'?left>right:left===right;
  }
  function describe(expr,read){
    if(['number','string','boolean'].includes(expr.kind))return String(expr.value);
    if(expr.kind==='sensor'){const value=read(expr.name);return `${SENSOR_NAMES[expr.name]} (${value===null?'no disponible':value})`;}
    if(expr.kind==='color')return `color (${read('color')??'no disponible'}) = ${expr.value}`;
    if(expr.kind==='not')return `no (${describe(expr.value,read)})`;
    return `(${describe(expr.left,read)} ${expr.kind==='compare'?expr.op:expr.kind==='and'?'i':'o'} ${describe(expr.right,read)})`;
  }
  class Engine {
    constructor(program = {}) {
      this.program = program;
      this.environment = { light: 70, sound: 20, orientation:'front', lines:[], patches:[], obstacles: [{ x: 430, y: 190, w: 65, h: 120 }] };
      this.reset();
    }
    reset() {
      this.pose = { x: 160, y: 250, angle: 0 };
      this.output = { face: 'happy', text: '', rgb: '#22c55e' };
      this.tasks = []; this.running = false; this.motor = { speed: 0, turn: 0 };
      this.clock = 0; this.budget = 0; this.accumulator = 0; this.active = null;
      this.trace = 'Preparat. Executa el programa o prem A o B.';
      this.collision = false; this.nextTask = 0; this.lastCondition='';
    }
    stop() { this.running = false; this.tasks = []; this.motor = { speed: 0, turn: 0 }; }
    obstacle() {
      const a = this.pose.angle * Math.PI / 180;
      for (let d = 0; d <= 85; d += 5) {
        const x = this.pose.x + Math.cos(a) * d, y = this.pose.y + Math.sin(a) * d;
        if (x < R || y < R || x > WIDTH - R || y > HEIGHT - R || this.environment.obstacles.some(b => intersects(x, y, b))) return true;
      }
      return false;
    }
    sensorPoint() {
      const a=this.pose.angle*Math.PI/180;
      return {x:this.pose.x+24*Math.cos(a),y:this.pose.y+24*Math.sin(a)};
    }
    infrared() {
      if(this.environment.orientation!=='front') return null;
      const origin=this.sensorPoint();let nearest=200;
      for(const offset of [-8,0,8]) {
        const a=(this.pose.angle+offset)*Math.PI/180;
        for(let d=0;d<=200;d+=2){
          const x=origin.x+Math.cos(a)*d,y=origin.y+Math.sin(a)*d;
          if(x<0||y<0||x>WIDTH||y>HEIGHT||this.environment.obstacles.some(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h)){nearest=Math.min(nearest,d);break;}
        }
      }
      return Math.round(clamp(100*(1-nearest/200),0,100));
    }
    surfaceAt(x,y) {
      let color='white';
      for(const patch of this.environment.patches||[]) if(x>=patch.x&&y>=patch.y&&x<=patch.x+patch.w&&y<=patch.y+patch.h) color=patch.color;
      for(const line of this.environment.lines||[]){
        if(line.points.length===1&&Math.hypot(x-line.points[0].x,y-line.points[0].y)<=line.width/2)color=line.color;
        for(let i=1;i<line.points.length;i++)if(segmentDistance(x,y,line.points[i-1],line.points[i])<=line.width/2){color=line.color;break;}
      }
      return color;
    }
    gray() {
      if(this.environment.orientation!=='down')return null;
      const p=this.sensorPoint();let sum=0;
      // Petita petjada d'un únic sensor: la lectura varia en creuar una vora.
      for(const dx of [-2,0,2])for(const dy of [-2,0,2]) {
        const color=this.surfaceAt(p.x+dx,p.y+dy);
        sum+=({black:5,white:95,red:40,green:55,blue:25,yellow:85})[color]??95;
      }
      return Math.round(sum/9);
    }
    sensor(name) {
      if(name==='infrared')return this.infrared();
      if(name==='gray')return this.gray();
      if(name==='color'){if(this.environment.orientation!=='down')return null;const p=this.sensorPoint();return this.surfaceAt(p.x,p.y);}
      if (name === 'obstacle') return this.obstacle(); // Compatibilitat amb projectes antics.
      return this.environment[name] ?? 0;
    }
    test(block) {
      if(block.condition){const result=evaluate(block.condition,name=>this.sensor(name));return {value:result===null?null:describe(block.condition,name=>this.sensor(name)),result:result===true};}
      const value = this.sensor(block.sensor);
      if(value===null)return {value,result:false};
      if(block.sensor==='color')return {value,result:block.compare==='!='?value!==block.value:value===block.value};
      if(block.sensor==='obstacle')return {value,result:block.obstacleValue==='false'?!value:Boolean(value)};
      const threshold=Number(block.threshold);
      const result = ({'>':()=>value>threshold,'<':()=>value<threshold,'>=':()=>value>=threshold,'<=':()=>value<=threshold,'=':()=>value===threshold,'!=':()=>value!==threshold}[block.compare]||(()=>value<threshold))();
      return {value,result};
    }
    conditionTrace(block,value,result) {
      if(block.condition){this.lastCondition=`${describe(block.condition,name=>this.sensor(name))} → condició ${result?'certa':'falsa'}`;return this.lastCondition;}
      const text=value===null?'no disponible: canvia l’orientació del sensor':typeof value==='boolean'?(value?'sí':'no'):String(value);
      const comparison=block.sensor==='color'?` ${block.compare} ${block.value}`:typeof value==='number'?` ${block.compare} ${block.threshold}`:'';
      this.lastCondition=`${SENSOR_NAMES[block.sensor]||block.sensor}: ${text}${comparison} → condició ${result?'certa':'falsa'}`;
      return this.lastCondition;
    }
    trigger(event, run = true) {
      if (this.tasks.some(t => t.event === event)) return;
      const blocks = this.program[event] || [];
      if (!blocks.length) { this.trace = `No hi ha ordres per a ${event === 'start' ? 'l’inici' : 'el botó ' + event}.`; return; }
      this.tasks.push({ event, frames: [{ blocks, index: 0, remaining: 1 }], wait: 0, timedMotor: false });
      this.running = run; this.budget = 0;
    }
    // Cada frame representa un cos de bucle o una branca; les condicions es tornen a llegir.
    next(task) {
      while (task.frames.length) {
        const frame = task.frames[task.frames.length - 1];
        if (frame.index >= frame.blocks.length) {
          if (frame.whileBlock) { task.frames.pop(); return frame.whileBlock; }
          if (frame.remaining > 1) { frame.remaining--; frame.index = 0; }
          else { task.frames.pop(); continue; }
        }
        if (!frame.blocks.length) { task.frames.pop(); continue; }
        return frame.blocks[frame.index++];
      }
      return null;
    }
    executeOne() {
      for (let attempt = 0; attempt < this.tasks.length; attempt++) {
        this.nextTask %= this.tasks.length;
        const task = this.tasks[this.nextTask++];
        if (task.wait > 0) continue;
        const block = this.next(task);
        if (!block) { this.tasks.splice(this.tasks.indexOf(task), 1); this.nextTask = 0; if (!this.tasks.length && !this.motor.speed && !this.motor.turn) this.trace = 'Programa acabat. Pots provar els botons A i B.'; return false; }
        if (++this.budget > 10000) { this.stop(); this.trace = 'Pausa després de 10.000 blocs. Revisa el programa i torna a executar.'; return false; }
        this.active = block.id;
        const input=key=>block.bindings?.[key]?evaluate(block.bindings[key],name=>this.sensor(name)):block[key];
        const seconds = clamp(input('seconds'),0,3600), power = clamp(input('power'), 0, 100);
        this.trace = 'Executant: ' + ({face:'mostra cara',text:'mostra text',rgb:'llum RGB',forward:'avança',back:'enrere',left:'gira esquerra',right:'gira dreta',drive:'avança contínuament',tracks:'potència de les erugues',reading:'mostra lectura del sensor',stop:'atura motors',wait:'espera',repeat:'repeteix',forever:'per sempre'}[block.type] || block.type);
        switch (block.type) {
          case 'face': this.output.face = block.value || 'happy'; this.output.pattern = block.pattern; this.output.text = ''; break;
          case 'text': this.output.text = String(block.expression?evaluate(block.expression,name=>this.sensor(name))??'—':block.value??'Hola').slice(0,40); break;
          case 'rgb': this.output.rgb = block.value || '#22c55e'; break;
          case 'forward': case 'back':
            this.motor = { speed: power * 1.5 * (block.type === 'back' ? -1 : 1), turn: 0 };
            task.wait=seconds;task.timedMotor=seconds>0;if(!seconds)this.motor={speed:0,turn:0};break;
          case 'left': case 'right':
            this.motor = { speed: 0, turn: power * 2.4 * (block.type === 'left' ? -1 : 1) };
            task.wait=seconds;task.timedMotor=seconds>0;if(!seconds)this.motor={speed:0,turn:0};break;
          case 'drive': this.motor = { speed: power * 1.5, turn: 0 }; break;
          case 'tracks': {
            const left=clamp(input('left'),-100,100),right=clamp(input('right'),-100,100);
            this.motor={speed:(left+right)*.75,turn:(left-right)*2.4};break;
          }
          case 'reading': {const value=this.sensor(block.sensor);this.output.text=value===null?'—':String(value);break;}
          case 'stop': this.motor = { speed: 0, turn: 0 }; break;
          case 'wait': task.wait = seconds; break;
          case 'if': {
            const { value, result } = this.test(block);
            this.trace = this.conditionTrace(block,value,result) + ` → ${result?'aleshores':'si no'}`;
            task.frames.push({ blocks: result ? block.then : block.else, index: 0, remaining: 1 }); break;
          }
          case 'while': case 'until': {
            const { value, result } = this.test(block);
            const repeat=block.type==='until'?!result:result;
            this.trace = (block.type==='until'?'Repeteix fins que · ':'Mentre · ')+this.conditionTrace(block,value,result)+(repeat?': repetim':': continuem després del bucle');
            if(block.type==='until'&&value===null){this.stop();this.trace='Lectura no disponible: orienta el sensor abans de repetir el moviment.';return false;}
            if (repeat) task.frames.push({ blocks: block.body || [], index: 0, remaining: 1, whileBlock: block });
            break;
          }
          case 'waitUntil': {
            const {value,result}=this.test(block);this.trace='Espera fins que · '+this.conditionTrace(block,value,result);
            if(!result){task.frames[task.frames.length-1].index--;task.wait=.08;}break;
          }
          case 'repeat': case 'forever': {
            const count=block.type==='forever'?Infinity:Math.round(clamp(input('count'),0,10000));
            if(count>0)task.frames.push({blocks:block.body||[],index:0,remaining:count});break;
          }
        }
        return true;
      }
      return false;
    }
    elapse(dt) {
      this.clock += dt;
      this.pose.angle = (this.pose.angle + this.motor.turn * dt + 360) % 360;
      const a = this.pose.angle * Math.PI / 180;
      const x = this.pose.x + Math.cos(a) * this.motor.speed * dt, y = this.pose.y + Math.sin(a) * this.motor.speed * dt;
      const blocked = x < R || y < R || x > WIDTH - R || y > HEIGHT - R || this.environment.obstacles.some(b => intersects(x, y, b));
      this.collision = blocked && this.motor.speed !== 0;
      if (!blocked) { this.pose.x = x; this.pose.y = y; }
      if (this.collision) this.trace = 'Contacte amb un obstacle o la vora. El robot no pot travessar-los.';
      for (const task of this.tasks) if (task.wait > 0) {
        task.wait = Math.max(0, task.wait - dt);
        if (task.wait < 1e-8) { task.wait = 0; if (task.timedMotor) this.motor = { speed: 0, turn: 0 }; task.timedMotor = false; }
      }
    }
    tick(dt, interval = .3) {
      if (!this.running) return;
      let remaining = clamp(dt, 0, .1);
      while (remaining > 1e-8) {
        const slice = Math.min(remaining, .02); this.elapse(slice); remaining -= slice;
        this.accumulator += slice;
        if (this.accumulator >= interval) { this.accumulator = 0; this.executeOne(); }
      }
      if (!this.tasks.length && this.motor.speed === 0 && this.motor.turn === 0) this.running = false;
    }
    step() {
      this.running = false;
      if (!this.tasks.length) this.trigger('start', false);
      // Acaba les esperes pendents; després executa exactament un bloc lògic.
      if (this.tasks.length && this.tasks.every(t => t.wait > 0)) {
        const seconds = Math.min(...this.tasks.map(t => t.wait));
        for (let t = 0; t < seconds; t += .02) this.elapse(Math.min(.02, seconds - t));
      }
      this.executeOne();
      const waits = this.tasks.filter(t => t.wait > 0).map(t => t.wait);
      if (waits.length) for (let t = 0, duration = Math.min(...waits); t < duration; t += .02) this.elapse(Math.min(.02, duration - t));
    }
  }
  return { Engine, WIDTH, HEIGHT, R, COLORS, trackPreset, segmentDistance, cleanExpression, evaluate };
});
