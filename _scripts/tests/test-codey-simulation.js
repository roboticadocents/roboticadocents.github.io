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
