'use strict';
const assert=require('node:assert/strict');const {Engine,segmentDistance}=require('../../sim/codey-engine');
const {activities}=require('../../sim/codey-activities.json');
assert.equal(activities.length,8);let count=0;
for(const activity of activities){assert.equal(activity.exercises.length,3);assert.ok(activity.robot.length>50);
 for(const ex of activity.exercises){
  const e=new Engine(ex.solution);e.environment=structuredClone(ex.environment);e.pose={...ex.startPose};
  for(const event of ex.events||['start']){e.trigger(event);for(let t=0;t<ex.seconds;t+=.02)e.tick(.02,.08);}
  for(const [key,value] of Object.entries(ex.expected)){const actual=key.split('.').reduce((v,k)=>v[k],e);if(typeof value==='number')assert.ok(Math.abs(actual-value)<1e-6,`${ex.id}: ${key}: ${actual}`);else assert.equal(actual,value,`${ex.id}: ${key}`);}
  if(activity.slug==='cr-sigue-el-borde'&&ex.id.endsWith('-2')){
   const follower=new Engine(ex.solution);follower.environment=structuredClone(ex.environment);follower.pose={...ex.startPose};follower.trigger('start');let max=0;
   for(let t=0;t<30;t+=.02){follower.tick(.02,.08);const point=follower.sensorPoint(),line=follower.environment.lines[0];let d=Infinity;for(let i=1;i<line.points.length;i++)d=Math.min(d,segmentDistance(point.x,point.y,line.points[i-1],line.points[i]));max=Math.max(max,d);}
   assert.ok(max<16,`Seguidor: ${max}`);assert.equal(follower.collision,false);
  }
  count++;
 }
}
console.log(`${count} soluciones compartidas entre papel, simulador y robot verificadas, incluido el seguidor de línea.`);
