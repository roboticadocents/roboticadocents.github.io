'use strict';
const assert=require('node:assert/strict');
const {Engine,block:b,example,cleanProgram}=require('../../sim/spike-engine');
const run=(e,seconds)=>{for(let t=0;t<seconds;t+=.02)e.tick(Math.min(.02,seconds-t));};
// La barrera espera l'aproximació i només tanca després d'allunyar-se i esperar.
{
 const e=new Engine(example('automatic'));e.start();run(e,2);assert.equal(e.angle,0);assert.equal(e.pending.type,'condition');
 e.environment={present:true,distance:20};run(e,3);assert.equal(e.angle,90);assert.equal(e.pending.type,'condition');
 run(e,3);assert.equal(e.angle,90);
 e.environment.distance=35;run(e,2);assert.equal(e.angle,90);
 e.environment.distance=40;run(e,1);assert.equal(e.angle,90);
 e.environment.distance=60;run(e,.5);assert.equal(e.angle,90);run(e,3);assert.equal(e.angle,0);assert.equal(e.pending.type,'condition');
 e.environment.distance=10;run(e,3);assert.equal(e.angle,90);
 e.environment.present=false;run(e,4);assert.equal(e.angle,0);run(e,2);assert.equal(e.angle,0);
}
// El motor es desplaça gradualment i Atura conserva exactament l'angle actual.
{
 const e=new Engine([b('motor',{angle:90,speed:50})]);e.start();run(e,.6);assert.ok(e.angle>40&&e.angle<55);
 e.stop();const angle=e.angle,clock=e.clock;run(e,5);assert.equal(e.angle,angle);assert.equal(e.clock,clock);
 e.reset();assert.equal(e.angle,0);e.step();assert.equal(e.angle,90);assert.equal(e.running,false);
}
// Pas a pas no es bloqueja esperant un sensor; les esperes finites s'acaben.
{
 const e=new Engine([b('waitUntil'),b('motor',{angle:70}),b('wait',{seconds:2}),b('motor',{angle:0})]);
 e.step();assert.equal(e.pending.type,'condition');e.step();assert.equal(e.angle,0);
 e.environment={present:true,distance:10};e.step();assert.equal(e.pending,null);e.step();assert.equal(e.angle,70);e.step();assert.equal(e.angle,70);e.step();assert.equal(e.angle,0);
}
// Branques, repeticions, bucles i lectures noves en cada iteració.
{
 const e=new Engine([b('repeat',{count:2,body:[b('motor'),b('motor',{angle:0})]}),b('while',{compare:'<',threshold:30,body:[b('motor',{angle:45}),b('wait',{seconds:.1})]}),b('if',{compare:'>',threshold:40,then:[b('motor',{angle:80})],else:[b('motor',{angle:10})]})]);
 e.environment={present:true,distance:10};e.start();run(e,10);assert.equal(e.angle,45);e.environment.distance=70;run(e,3);assert.equal(e.angle,80);assert.equal(e.running,false);
 const empty=new Engine([b('forever')]);empty.start();run(empty,1);assert.equal(empty.running,false);
}
// Límits del model i de l’esquema dels projectes.
{
 const e=new Engine();e.environment={present:false,distance:10};assert.equal(e.distance(),null);assert.equal(e.test(b('if')),false);assert.equal(e.test(b('if',{compare:'>'})),true);
 e.environment={present:true,distance:500};assert.equal(e.distance(),200);e.environment.distance=0;assert.equal(e.distance(),5);
 const clean=cleanProgram([b('motor',{angle:0,speed:0})]);assert.equal(clean[0].angle,0);assert.equal(clean[0].speed,1);
 assert.throws(()=>cleanProgram([{type:'vehicle'}]));assert.throws(()=>cleanProgram(Array.from({length:151},()=>b('wait'))));
 let nested=b('wait');for(let i=0;i<10;i++)nested=b('repeat',{body:[nested]});assert.throws(()=>cleanProgram([nested]));
 const restored=cleanProgram(example('automatic'));const ids=[];function visit(list){for(const b of list){ids.push(b.id);['body','then','else'].forEach(k=>visit(b[k]));}}visit(restored);assert.equal(ids.length,new Set(ids).size);
}
console.log('SPIKE Prime: cicle de barrera, dos llindars, motor gradual, aturada, pas a pas, bucles, sensors i validació de projectes correctes.');
