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
