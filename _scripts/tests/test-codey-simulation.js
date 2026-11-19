'use strict';
const assert = require('node:assert/strict');
const { Engine } = require('../../sim/codey-engine');
let id=0;
const b=(type,extra={})=>({id:String(++id),type,seconds:1,power:30,body:[],then:[],else:[],...extra});
const runFor=(e,time)=>{for(let t=0;t<time;t+=.02)e.tick(.02,.02);};
// Un bucle llig els sensors en cada volta, no només quan s'inicia.
{
 const e=new Engine({start:[b('forever',{body:[b('if',{sensor:'light',compare:'<',threshold:40,then:[b('rgb',{value:'#facc15'})],else:[b('rgb',{value:'#000000'})]})]})]});
 e.trigger('start');runFor(e,.5);assert.equal(e.output.rgb,'#000000');
 e.environment.light=10;runFor(e,.5);assert.equal(e.output.rgb,'#facc15');
 e.stop();const clock=e.clock;runFor(e,1);assert.equal(e.clock,clock);
}
// Els esdeveniments dels botons funcionen encara que la principal haja acabat.
{
 const e=new Engine({start:[],A:[b('face',{value:'happy'})],B:[b('face',{value:'sad'})]});
 e.trigger('B');runFor(e,.3);assert.equal(e.output.face,'sad');
 e.trigger('A');runFor(e,.3);assert.equal(e.output.face,'happy');
}
// Les dues branques, la repetició i el retorn al programa principal respecten l'ordre.
{
 const e=new Engine({start:[b('repeat',{count:2,body:[b('forward',{power:20,seconds:1})]}),b('if',{sensor:'sound',compare:'>',threshold:30,then:[b('text',{value:'fort'})],else:[b('text',{value:'fluix'})]})]});
 e.environment.obstacles=[];e.trigger('start');runFor(e,4);assert.ok(Math.abs(e.pose.x-220)<1);assert.equal(e.output.text,'fluix');assert.equal(e.motor.speed,0);
}
// Detecció frontal i col·lisions: el robot no travessa l'obstacle ni la vora.
{
 const e=new Engine({start:[b('drive',{power:100})]});
 e.pose.x=365;assert.equal(e.obstacle(),true);e.pose.angle=180;assert.equal(e.obstacle(),false);
 e.pose.angle=0;e.trigger('start');runFor(e,3);assert.ok(e.pose.x<=410.01);assert.ok(e.collision);
 e.environment.obstacles=[];runFor(e,5);assert.ok(e.pose.x<=780.01);
}
// Pas a pas: una instrucció motora aplica tota la durada i queda en pausa.
{
 const e=new Engine({start:[b('forward',{power:20,seconds:1}),b('face',{value:'sad'})]});e.environment.obstacles=[];
 e.step();assert.ok(Math.abs(e.pose.x-190)<1);assert.equal(e.output.face,'happy');assert.equal(e.running,false);
 e.step();assert.equal(e.output.face,'sad');
}
// Un bucle finit buit acaba i un bucle infinit es pot aturar sense bloquejar JS.
{
 const e=new Engine({start:[b('forever')]});e.trigger('start');runFor(e,.2);assert.equal(e.tasks.length,0);
}
console.log('Codey Rocky: sensors dinàmics, botons, branques, temps, pas a pas i col·lisions correctes.');
// Mentre: pot executar zero voltes i continua després del bucle.
{
 const e=new Engine({start:[b('while',{sensor:'light',compare:'<',threshold:40,body:[b('text',{value:'dins'})]}),b('text',{value:'fora'})]});
 e.trigger('start');runFor(e,.3);assert.equal(e.output.text,'fora');
}
// Mentre: torna a llegir la condició i ix quan canvia, també dins de repeticions.
{
 const e=new Engine({start:[b('repeat',{count:2,body:[b('while',{sensor:'light',compare:'<',threshold:40,body:[b('text',{value:'dins'})]})]}),b('text',{value:'fora'})]});
 e.environment.light=10;e.trigger('start');runFor(e,.3);assert.equal(e.output.text,'dins');
 e.environment.light=70;runFor(e,.5);assert.equal(e.output.text,'fora');assert.equal(e.tasks.length,0);
}
// Mentre no hi haja obstacle: avança, consulta de nou i acaba sense col·lidir.
{
 const e=new Engine({start:[b('while',{sensor:'obstacle',obstacleValue:'false',body:[b('forward',{seconds:.2})]}),b('stop'),b('text',{value:'detectat'})]});
 e.trigger('start');runFor(e,10);assert.equal(e.output.text,'detectat');assert.ok(e.pose.x>160&&e.pose.x<410);assert.equal(e.motor.speed,0);
}
// Un mentre buit amb condició certa cedeix el control i es pot aturar.
{
 const e=new Engine({start:[b('while',{sensor:'light',compare:'>',threshold:0})]});
 e.trigger('start');runFor(e,.3);assert.equal(e.tasks.length,1);e.stop();assert.equal(e.tasks.length,0);
}
console.log('Mentre: zero voltes, rellegir sensors, negació, eixida i bucles imbricats correctes.');
// L'IR és numèric, augmenta en acostar-se i depén de l'orientació.
{
 const e=new Engine();e.pose={x:200,y:250,angle:0};const far=e.sensor('infrared');e.pose.x=350;const near=e.sensor('infrared');
 assert.ok(near>far&&near>=0&&near<=100);assert.equal(e.test({sensor:'infrared',compare:'>',threshold:near-1}).result,true);
 e.environment.orientation='down';assert.equal(e.sensor('infrared'),null);assert.equal(e.test({sensor:'infrared',compare:'<',threshold:100}).result,false);
}
// Una única petjada llig superfície i color; una vora dona un valor intermedi.
{
 const {trackPreset}=require('../../sim/codey-engine');const e=new Engine();e.environment.orientation='down';e.environment.lines=[trackPreset('straight')];
 e.pose={x:100,y:250,angle:0};assert.equal(e.sensor('gray'),5);assert.equal(e.sensor('color'),'black');
 e.pose.y=262;assert.ok(e.sensor('gray')>5&&e.sensor('gray')<95);
 e.pose.y=300;assert.equal(e.sensor('gray'),95);
 e.environment.patches=[{x:110,y:280,w:40,h:40,color:'red'}];assert.equal(e.sensor('color'),'red');assert.equal(e.test({sensor:'color',compare:'=',value:'red'}).result,true);
 e.environment.orientation='front';assert.equal(e.sensor('gray'),null);assert.equal(e.sensor('color'),null);
}
// Un seguidor de vora real (condició + dues erugues) es manté sobre recta, corbes i circuit.
{
 const {trackPreset,segmentDistance}=require('../../sim/codey-engine');
 for(const name of ['straight','curve','circuit']){
  const e=new Engine({start:[b('forever',{body:[b('if',{sensor:'gray',compare:'<',threshold:50,then:[b('tracks',{left:10,right:6})],else:[b('tracks',{left:6,right:10})]})]})]});
  e.environment={...e.environment,orientation:'down',obstacles:[],lines:[trackPreset(name)]};
  e.pose=name==='circuit'?{x:400,y:112,angle:0}:name==='curve'?{x:70-Math.sin(40*Math.PI/180)*12,y:250+Math.cos(40*Math.PI/180)*12,angle:40}:{x:100,y:262,angle:0};
  const initial={...e.pose};e.trigger('start');let max=0;
  for(let t=0;t<(name==='circuit'?120:40);t+=.02){e.tick(.02,.08);const p=e.sensorPoint(),line=e.environment.lines[0];let distance=Infinity;for(let i=1;i<line.points.length;i++)distance=Math.min(distance,segmentDistance(p.x,p.y,line.points[i-1],line.points[i]));max=Math.max(max,distance);}
  assert.ok(max<16,`${name}: el sensor perd la vora (${max})`);assert.ok(Math.hypot(e.pose.x-initial.x,e.pose.y-initial.y)>100);assert.equal(e.collision,false);
 }
}
// Les erugues poden parar, girar sobre si mateixes o anar arrere.
{
 const e=new Engine({start:[b('tracks',{left:0,right:0}),b('tracks',{left:10,right:-10}),b('tracks',{left:-10,right:-10})]});
 e.step();assert.equal(e.motor.speed,0);assert.equal(e.motor.turn,0);e.step();assert.equal(e.motor.speed,0);assert.ok(e.motor.turn>0);e.step();assert.ok(e.motor.speed<0);assert.equal(e.motor.turn,0);
}
console.log('IR numèric, orientació, grisos, colors, erugues i seguiment de tres pistes correctes.');

// mBlock: repeteix fins que no és equivalent a mentre; la lectura es renova.
{
 const body=[b('forward',{seconds:.1,power:10})];
 const e=new Engine({start:[b('until',{sensor:'light',compare:'>',threshold:50,body}),b('stop'),b('rgb',{value:'#ef4444'})]});
 e.environment.light=70;e.trigger('start');runFor(e,1);assert.equal(e.pose.x,160);assert.equal(e.output.rgb,'#ef4444');
 e.reset();e.environment.light=10;e.trigger('start');runFor(e,1);assert.ok(e.pose.x>160);assert.equal(e.output.rgb,'#22c55e');e.environment.light=70;runFor(e,1);assert.equal(e.output.rgb,'#ef4444');assert.equal(e.motor.speed,0);
 const unavailable=new Engine({start:[b('until',{sensor:'gray',compare:'>',threshold:50,body})]});unavailable.trigger('start');runFor(unavailable,1);assert.equal(unavailable.running,false);assert.equal(unavailable.pose.x,160);assert.match(unavailable.trace,/no disponible/);
}
// Espera fins que retorna el control a la interfície i no avança prematurament.
{
 const e=new Engine({start:[b('waitUntil',{sensor:'sound',compare:'>',threshold:60}),b('rgb',{value:'#ef4444'})]});e.environment.sound=10;e.trigger('start');runFor(e,1);assert.equal(e.output.rgb,'#22c55e');e.environment.sound=80;runFor(e,1);assert.equal(e.output.rgb,'#ef4444');
 const stepper=new Engine({start:[b('waitUntil',{sensor:'light',compare:'<',threshold:20}),b('face',{value:'sad'})]});stepper.step();assert.equal(stepper.output.face,'happy');stepper.environment.light=10;stepper.step();stepper.step();assert.equal(stepper.output.face,'sad');
}
console.log('mBlock: repeteix fins que, espera fins que, lectures dinàmiques i compatibilitat de mentre correctes.');
// Expressions de peces natives: comparacions, booleans, valors i paràmetres connectats.
{
 const {cleanExpression,evaluate}=require('../../sim/codey-engine');
 const sensor=name=>({kind:'sensor',name}),num=value=>({kind:'number',value});
 const compare=(op,left,right)=>({kind:'compare',op,left,right});
 const expr={kind:'and',left:compare('<',sensor('light'),num(40)),right:{kind:'not',value:compare('>',sensor('sound'),num(60))}};
 const e=new Engine({start:[b('if',{condition:expr,then:[b('rgb',{value:'#ef4444'})],else:[b('rgb',{value:'#000000'})]})]});
 e.environment.light=20;e.environment.sound=10;e.trigger('start');runFor(e,1);assert.equal(e.output.rgb,'#ef4444');
 e.reset();e.environment.sound=90;e.trigger('start');runFor(e,1);assert.equal(e.output.rgb,'#000000');
 assert.equal(evaluate(cleanExpression({kind:'or',left:{kind:'boolean',value:false},right:{kind:'boolean',value:true}}),()=>0),true);
 assert.throws(()=>cleanExpression({kind:'execute',value:'javascript'}));
 const motion=new Engine({start:[b('forward',{seconds:1,bindings:{power:sensor('light')}})]});motion.environment.light=20;motion.trigger('start');runFor(motion,2);assert.ok(Math.abs(motion.pose.x-190)<.1);
 const display=new Engine({start:[b('text',{expression:sensor('light')})]});display.environment.light=37;display.trigger('start');runFor(display,.5);assert.equal(display.output.text,'37');
 const unavailable=new Engine();assert.equal(evaluate(sensor('gray'),name=>unavailable.sensor(name)),null);
}
// Les peces natives admeten zero: repeteix 0 no entra al cos i un moviment de 0 s no queda actiu.
{
 const e=new Engine({start:[b('repeat',{count:0,body:[b('rgb',{value:'#ef4444'})]}),b('forward',{seconds:0,power:80}),b('wait',{seconds:0})]});e.trigger('start');runFor(e,1);assert.equal(e.output.rgb,'#22c55e');assert.equal(e.pose.x,160);assert.equal(e.motor.speed,0);assert.equal(e.running,false);
}
console.log('Peces natives: condicions compostes, lectures connectades, paràmetres dinàmics i valors zero correctes.');
