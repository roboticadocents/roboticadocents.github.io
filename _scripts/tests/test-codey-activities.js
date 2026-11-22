'use strict';
const assert=require('node:assert/strict');const {Engine,segmentDistance}=require('../../sim/codey-engine');
const {activities}=require('../../sim/codey-activities.json');
assert.equal(activities.length,9);let count=0;
for(const activity of activities){assert.equal(activity.exercises.length,3);assert.ok(activity.robot.length>50);
 for(const ex of activity.exercises){
  const e=new Engine(ex.solution);e.environment=structuredClone(ex.environment);e.pose={...ex.startPose};
  for(const event of ex.events||['start']){e.trigger(event);for(let t=0;t<ex.seconds;t+=.02)e.tick(.02,.08);}
  for(const [key,value] of Object.entries(ex.expected)){const actual=key.split('.').reduce((v,k)=>v[k],e);if(typeof value==='number')assert.ok(Math.abs(actual-value)<1e-6,`${ex.id}: ${key}: ${actual}`);else assert.equal(actual,value,`${ex.id}: ${key}`);}
  if(activity.slug==='cr-segueix-la-vora'&&ex.id.endsWith('-2')){
   const follower=new Engine(ex.solution);follower.environment=structuredClone(ex.environment);follower.pose={...ex.startPose};follower.trigger('start');let max=0;
   for(let t=0;t<30;t+=.02){follower.tick(.02,.08);const point=follower.sensorPoint(),line=follower.environment.lines[0];let d=Infinity;for(let i=1;i<line.points.length;i++)d=Math.min(d,segmentDistance(point.x,point.y,line.points[i-1],line.points[i]));max=Math.max(max,d);}
   assert.ok(max<16,`Seguidor: ${max}`);assert.equal(follower.collision,false);
  }
  count++;
 }
}
console.log(`${count} solucions compartides entre paper, simulador i robot verificades, inclòs el seguidor de línia.`);

// Els casos de la nova fitxa posen a prova el canvi conceptual, no una equivalència en caselles.
{
 const activity=activities.find(a=>a.slug==='cr-moviment-discret-continu');
 function run(ex,program){const e=new Engine(structuredClone(program));e.environment=structuredClone(ex.environment);e.pose={...ex.startPose};e.trigger('A');for(let t=0;t<3;t+=.02)e.tick(.02,.08);return e;}
 const timed=activity.exercises[0],one=run(timed,timed.starter),longer=structuredClone(timed.starter);longer.A[0].seconds=2;const two=run(timed,longer);assert.ok(two.pose.x>one.pose.x);assert.equal(one.motor.speed,0);assert.equal(two.motor.speed,0);
 const continuous=activity.exercises[1],moving=run(continuous,continuous.starter);assert.equal(moving.output.text,'FI');assert.ok(moving.motor.speed>0);const x=moving.pose.x;for(let t=0;t<.2;t+=.02)moving.tick(.02,.08);assert.ok(moving.pose.x>x);moving.trigger('B');for(let t=0;t<.4;t+=.02)moving.tick(.02,.08);assert.equal(moving.motor.speed,0);assert.equal(run(continuous,continuous.solution).motor.speed,0);
 const turn=activity.exercises[2],short=run(turn,turn.starter),more=structuredClone(turn.starter);more.A[0].seconds=1;const long=run(turn,more);assert.ok((360-long.pose.angle)%360>(360-short.pose.angle)%360);assert.notEqual(short.pose.angle,270);
}
console.log('Moviment: durada, persistència durant espera, aturada explícita i gir temporal comprovats.');
