'use strict';
const assert=require('node:assert/strict');
const {Engine,block:b,cleanProgram}=require('../../sim/spike-engine');
const run=(e,seconds)=>{for(let t=0;t<seconds;t+=.02)e.tick(Math.min(.02,seconds-t));};
const cycle=()=>[b('forever',{body:[b('waitUntil'),b('motor'),b('waitUntil',{compare:'>',threshold:40}),
 b('wait'),b('motor',{angle:0})]})];
// La barrera espera l'aproximació i només tanca després d'allunyar-se i esperar.
{
 const e=new Engine(cycle());e.start();run(e,2);assert.equal(e.angle,0);assert.equal(e.pending.type,'condition');
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
 const restored=cleanProgram(cycle());const ids=[];function visit(list){for(const b of list){ids.push(b.id);['body','then','else'].forEach(k=>visit(b[k]));}}visit(restored);assert.equal(ids.length,new Set(ids).size);
}
// Quatre repeticions d’una seqüència.
{
 const program=[b('repeat',{count:4,body:[b('motor',{angle:45}),b('motor',{angle:0}),b('wait',{seconds:.5})]})];
 const e=new Engine(program);e.start();run(e,15);assert.equal(e.angle,0);assert.equal(e.running,false);assert.equal(e.budget,13);
}
// Les unitats del bloc es converteixen des de la lectura del mateix sensor.
{
 const e=new Engine();
 e.environment={present:true,distance:50};
 assert.equal(e.test(b('if',{compare:'=',threshold:25,unit:'%'})),true);
 assert.equal(e.test(b('if',{compare:'=',threshold:19.685,unit:'inches'})),true);
 assert.equal(e.test(b('if',{compare:'<',threshold:50,unit:'cm'})),false);
 e.environment.present=false;
 assert.equal(e.test(b('if',{compare:'=',threshold:100,unit:'%'})),true);
 assert.equal(e.test(b('if',{compare:'>',threshold:200,unit:'cm'})),false);
}
// El mateix angle final pot requerir recorreguts diferents segons el sentit.
{
 const [shortest,clockwise,counterclockwise]=['shortest','clockwise','counterclockwise'].map(direction=>{
   const [motor]=cleanProgram([b('motor',{angle:270,direction,speed:50})]);
   const e=new Engine([motor]);
   e.step();
   assert.equal(e.angle,270);
   return e.clock;
 });
 assert.equal(shortest,1);
 assert.equal(clockwise,3);
 assert.equal(counterclockwise,1);
}
console.log('SPIKE Prime: cicle de barrera, dos llindars, motor gradual, aturada, pas a pas, bucles, sensors i validació de projectes correctes.');

// Les dues peces noves han de conservar les seues branques quan es reobri el projecte.
{
 const program=cleanProgram([
  b('until',{body:[b('wait',{seconds:.2})]}),
  b('ifThen',{then:[b('motor')]}),
 ]);
 const engine=new Engine(program);
 engine.start();
 run(engine,1);
 assert.equal(engine.angle,0);
 engine.environment={present:true,distance:20};
 run(engine,3);
 assert.equal(engine.angle,90);
 const skip=new Engine([b('until',{body:[b('motor')]}),b('ifThen',{compare:'>',threshold:30,then:[b('motor')]})]);
 skip.environment={present:true,distance:20};
 skip.start();
 run(skip,3);
 assert.equal(skip.angle,0);
 assert.equal(skip.running,false);
}

// Les combinacions de blocs funcionen també després de serialitzar el programa.
{
 const matrix='0000000001000101010001000';
 const programs={
  signals:[b('setSpeed'),b('volume',{volume:55}),b('hubLight',{color:'green'}),b('matrixOn',{matrix}),
   b('beepFor',{note:72,seconds:.4}),b('motorFor',{amount:90,motionUnit:'degrees'}),b('wait',{seconds:2}),
   b('motorFor',{amount:90,motionUnit:'degrees',direction:'counterclockwise'}),b('hubLight',{color:'red'}),b('matrixOff')],
  manual:[b('waitUntil',{predicate:{type:'force',state:'pressed'}}),b('motor'),
   b('waitUntil',{predicate:{type:'force',state:'released'}}),b('motor',{angle:0})],
  access:[b('forever',{body:[b('if',{predicate:{type:'and',left:{type:'color',color:'green'},
   right:{type:'button',button:'right',state:'pressed'}},then:[b('matrixOn',{matrix}),b('motor')],
   else:[b('matrixOff'),b('motor',{angle:0})]}),b('wait',{seconds:.2})]})],
  timed:[b('waitUntil',{predicate:{type:'less',left:{type:'distanceNumber',unit:'cm'},right:30}}),b('motor'),
   b('resetTimer'),b('waitUntil',{compare:'>',threshold:40}),b('if',{predicate:{type:'greater',left:{type:'timer'},right:3},
   then:[b('matrixOn',{matrix})],else:[b('matrixOff')]}),b('motor',{angle:0})],
  comparison:[b('setSpeed'),b('motor',{angle:0}),b('if',{predicate:{type:'less',left:8,right:5.5},
   then:[b('motorFor',{amount:30,motionUnit:'degrees'})],else:[b('motorFor',{amount:60,motionUnit:'degrees'})]}),
   b('wait',{seconds:3}),b('motor',{angle:0})],
 };
 const restore=key=>new Engine(cleanProgram(JSON.parse(JSON.stringify(programs[key]))));
 const signal=restore('signals');
 signal.start();
 run(signal,.48);
 assert.equal(signal.hubColor,'green');
 assert.equal(signal.note,72);
 assert.ok(signal.pixels.some(Boolean));
 run(signal,8);
 assert.equal(signal.angle,0);
 assert.equal(signal.hubColor,'red');
 assert.equal(signal.note,null);
 assert.equal(signal.pixels.some(Boolean),false);

 const manual=restore('manual');
 manual.start();
 manual.environment.force=7;
 run(manual,3);
 assert.equal(manual.angle,90);
 manual.environment.force=0;
 run(manual,3);
 assert.equal(manual.angle,0);

 const access=restore('access');
 access.environment.color='green';
 access.start();
 run(access,3);
 assert.equal(access.angle,0);
 const denied=access.pixels.join(',');
 access.environment.right=true;
 run(access,3);
 assert.equal(access.angle,90);
 assert.notEqual(access.pixels.join(','),denied);

 const timedResult=delay=>{
   const engine=restore('timed');
   engine.environment.present=true;
   engine.environment.distance=20;
   engine.start();
   run(engine,delay);
   engine.environment.present=false;
   run(engine,3);
   assert.equal(engine.angle,0);
   return engine.pixels.join(',');
 };
 assert.notEqual(timedResult(2.5),timedResult(6));
 assert.throws(()=>cleanProgram([b('if',{predicate:{type:'greater',left:{type:'unknown'},right:3}})]));

 const wind=restore('comparison');
 wind.start();
 run(wind,2);
 assert.equal(wind.angle,60);
 run(wind,6);
 assert.equal(wind.angle,0);
 wind.program[2].predicate.left=3;
 wind.start();
 run(wind,2);
 assert.equal(wind.angle,30);
}

// Els blocs han de respectar els ports connectats al banc.
{
 const turns=[b('setSpeed',{port:'F',speed:75}),b('repeat',{count:5,body:[
  b('motorFor',{port:'F',amount:2,motionUnit:'seconds'}),
  b('motorFor',{port:'F',direction:'counterclockwise',amount:2,motionUnit:'seconds'}),
 ]})];
 const thing=new Engine(cleanProgram(turns));
 thing.motorPort='F';
 thing.step();
 assert.equal(thing.motorSpeed,75);
 thing.step();
 thing.step();
 assert.equal(thing.angle,270);
 thing.step();
 assert.equal(thing.angle,0);
 const disconnected=new Engine(turns);
 disconnected.start();
 run(disconnected,.2);
 assert.match(disconnected.trace,/port F/);
 assert.equal(disconnected.angle,0);

 const kiki=new Engine(cleanProgram([b('volume',{volume:55}),
  b('waitUntil',{predicate:{type:'button',button:'left',state:'pressed'}}),
  ...[['blue',60],['yellow',67],['green',72]].flatMap(([color,note])=>[
   b('waitUntil',{predicate:{type:'color',port:'B',color}}),b('beepFor',{note,seconds:.45}),
  ]),
 ]));
 kiki.colorPort='B';
 kiki.environment.left=true;
 kiki.start();
 kiki.environment.color='yellow';
 run(kiki,1);
 assert.equal(kiki.pending.block.predicate.color,'blue');
 for(const [color,note] of [['blue',60],['yellow',67],['green',72]]){
   kiki.environment.color=color;
   run(kiki,.35);
   assert.equal(kiki.note,note);
   run(kiki,.65);
 }
 assert.equal(kiki.running,false);
}

// El carretó ha de poder fer girar dos motors mentre espera el sensor B.
{
 const projects=require('../../sim/spike-projects');
 const cart=new Engine(cleanProgram(projects.cart.program()));
 Object.assign(cart,{project:'cart',extraMotors:['E','C'],distancePort:'B'});
 Object.assign(cart.environment,projects.cart.environment);
 cart.start();run(cart,12);
 assert.equal(cart.running,false);
 assert.ok(cart.distance()>=5&&cart.distance()<15);
 assert.notEqual(cart.motorAt('A').angle,cart.motorAt('E').angle);
 assert.equal(cart.motorAt('E').spin,0);
 assert.equal(cart.motorAt('A').spin,0);
 const sorter=new Engine(cleanProgram(projects.sorter.program()));
 Object.assign(sorter,{project:'sorter',extraMotors:['F'],colorPort:'D'});
 for(const [color,expected] of [['yellow','yellow'],['magenta','magenta'],['blue','']]){
   sorter.environment.color=color;sorter.start();run(sorter,12);
   assert.equal(sorter.delivery,expected);
   if(!expected)assert.equal(sorter.hubColor,'red');
   assert.equal(sorter.motorAt('A').angle,0);
 }
}

// La sínia avança una cabina per pulsació, fins i tot si el botó queda premut.
{
 const wheel=require('../../sim/spike-projects').wheel;
 const engine=new Engine(cleanProgram(wheel.program()));
 engine.start();
 run(engine,3);
 assert.equal(engine.angle,0);
 for(const expected of [90,180,270,0]){
   engine.environment.left=true;
   run(engine,5);
   assert.equal(engine.angle,expected);
   assert.ok(engine.pending);
   assert.equal(engine.pending.block.predicate.state,'released');
   engine.environment.left=false;
   run(engine,.5);
   assert.equal(engine.angle,expected);
 }
}
