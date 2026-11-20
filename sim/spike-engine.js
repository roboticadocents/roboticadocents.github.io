/* Mecanismes SPIKE Prime. Model didàctic: motor directe, sense inèrcia ni càrrega. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;else root.SpikeSimulation=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const number=(value,min,max,fallback)=>Number.isFinite(Number(value))?Math.max(min,Math.min(max,Number(value))):fallback;
  const definitions={motor:{label:'Motor A a un ángulo',category:'motion',icon:'right'},wait:{label:'Espera',category:'control',icon:'wait'},waitUntil:{label:'Espera hasta que',category:'sensor',icon:'reading'},if:{label:'Si / si no',category:'control',icon:'if'},while:{label:'Mientras',category:'control',icon:'while'},repeat:{label:'Repite',category:'control',icon:'repeat'},forever:{label:'Por siempre',category:'control',icon:'forever'}};
  const examples={
    sequence:{label:'Acción y retorno · Movimiento con motivo',sda:'sp-python-motors',title:'Movimiento con motivo',lesson:'Lección 3 · Automatizar una acción útil',task:'Predice el orden del movimiento, ejecuta tres ciclos y comprueba si el brazo vuelve a 0°. Cambia solo el ángulo o la espera y registra el resultado.',adaptation:'Práctica previa en bloques de la tarea de levantar una barrera de cartón; la SdA continúa con Python y el montaje físico.'},
    automatic:{label:'Barrera con detección · ampliación',sda:'sp-python-motors',title:'Movimiento con motivo',lesson:'Ampliación de la lección 3',task:'Añade una entrada a la acción automatizada: prueba 20, 35 y 60 cm, y después retira el objeto. Explica cuándo se abre y cuándo puede volver a cerrarse.',adaptation:'Ampliación propia con sensor de distancia y dos umbrales; no es una reproducción literal de la lección.'},
    condition:{label:'Sensor y respuesta · Biblioteca',sda:'sp-sensores-logistica',title:'Sensores al servicio de la biblioteca',lesson:'Preparación de la lección 1 · Los sensores activan respuestas',task:'Predice la rama para 20, 30 y 40 cm. Prueba los tres valores y anota lectura, decisión y ángulo observado.',adaptation:'La regla sensor–motor se practica con un brazo fijo; la SdA lo aplica después a una base móvil.'},
    repeat:{label:'Cuatro movimientos · Mosaico',sda:'sp-python-bucles',title:'Un mosaico de movimientos repetidos',lesson:'Lección 1 · Cuatro repeticiones, una instrucción',task:'Usa el brazo como indicador: cuenta cuatro idas y vueltas. Cambia el número de repeticiones y predice dónde acabará.',adaptation:'Práctica en bloques del movimiento repetido del indicador. No simula la colocación de las piezas del mosaico; la SdA continúa en Python.'}
  };
  let counter=0;
  function block(type,extra={}){return {type,angle:90,speed:30,seconds:1,count:3,compare:'<',threshold:30,body:[],then:[],else:[],...extra,id:`sp-${++counter}`};}
  function example(name){
    if(name==='blank')return [];
    if(name==='sequence')return [block('motor'),block('wait',{seconds:2}),block('motor',{angle:0})];
    if(name==='repeat')return [block('repeat',{count:4,body:[block('motor',{angle:45}),block('motor',{angle:0}),block('wait',{seconds:.5})]})];
    if(name==='condition')return [block('forever',{body:[block('if',{then:[block('motor')],else:[block('motor',{angle:0})]}),block('wait',{seconds:.2})]})];
    return [block('forever',{body:[block('waitUntil'),block('motor'),block('waitUntil',{compare:'>',threshold:40}),block('wait'),block('motor',{angle:0})]})];
  }
  function cleanProgram(program){
    let count=0;
    function clean(list,depth=0){
      if(!Array.isArray(list)||list.length>150)throw new Error('Lista de bloques no válida.');
      return list.map(b=>{
        if(!b||!Object.hasOwn(definitions,b.type)||++count>150||depth>8)throw new Error('Programa no válido: máximo 150 bloques y 8 niveles.');
        return block(b.type,{angle:number(b.angle,0,90,90),speed:number(b.speed,1,100,30),seconds:number(b.seconds,.1,30,1),count:Math.round(number(b.count,1,100,3)),compare:['<','>','<=','>=','=','!='].includes(b.compare)?b.compare:'<',threshold:number(b.threshold,5,200,30),body:clean(b.body||[],depth+1),then:clean(b.then||[],depth+1),else:clean(b.else||[],depth+1)});
      });
    }
    return clean(program);
  }
  class Engine{
    constructor(program=[]){this.program=program;this.environment={present:false,distance:80};this.reset();}
    reset(){this.stop();this.angle=0;this.clock=0;this.active=null;this.lastCondition='';this.trace='Preparado.';this.budget=0;this.accumulator=0;this.started=false;}
    stop(){this.running=false;this.frames=[];this.pending=null;}
    start(){this.reset();this.started=true;this.frames=[{blocks:this.program,index:0,remaining:1}];this.running=true;this.trace='Programa iniciado.';}
    distance(){return this.environment.present?number(this.environment.distance,5,200,80):null;}
    test(b){
      const value=this.distance(),threshold=number(b.threshold,5,200,30);
      const result=value!==null&&({'<':()=>value<threshold,'>':()=>value>threshold,'<=':()=>value<=threshold,'>=':()=>value>=threshold,'=':()=>value===threshold,'!=':()=>value!==threshold}[b.compare]||(()=>false))();
      // Sense objecte també podem esperar que la zona torne a quedar lliure.
      const clear=value===null&&['>','>='].includes(b.compare);
      this.lastCondition=`Distancia D: ${value===null?'sin objeto':value+' cm'} ${b.compare} ${threshold} cm → ${result||clear?'cierto':'falso'}`;
      return result||clear;
    }
    next(){
      while(this.frames.length){
        const f=this.frames.at(-1);
        if(f.index>=f.blocks.length){
          if(f.whileBlock){this.frames.pop();return f.whileBlock;}
          if(f.blocks.length&&f.remaining>1){f.index=0;f.remaining--;}else{this.frames.pop();continue;}
        }
        return f.blocks[f.index++];
      }
      return null;
    }
    executeOne(){
      if(this.pending){if(this.pending.type==='condition'){if(this.test(this.pending.block)){this.pending=null;this.trace='Condición cumplida; continuamos.';}}return;}
      const b=this.next();
      if(!b){this.running=false;this.trace='Programa terminado.';return;}
      if(++this.budget>10000){this.stop();this.trace='Pausa tras 10.000 bloques. Vuelve a ejecutar para continuar.';return;}
      this.active=b.id;this.trace=definitions[b.type].label;
      switch(b.type){
        case 'motor':this.pending={type:'motor',target:number(b.angle,0,90,90),speed:number(b.speed,1,100,30)*1.8};break;
        case 'wait':this.pending={type:'wait',remaining:number(b.seconds,.1,30,1)};break;
        case 'waitUntil':if(!this.test(b))this.pending={type:'condition',block:b};break;
        case 'if':this.frames.push({blocks:this.test(b)?b.then:b.else,index:0,remaining:1});break;
        case 'while':if(this.test(b))this.frames.push({blocks:b.body,index:0,remaining:1,whileBlock:b});break;
        case 'repeat':case 'forever':this.frames.push({blocks:b.body,index:0,remaining:b.type==='forever'?Infinity:number(b.count,1,100,3)});break;
      }
    }
    elapse(dt){
      this.clock+=dt;const p=this.pending;if(!p)return;
      if(p.type==='motor'){
        const difference=p.target-this.angle,change=p.speed*dt;
        if(Math.abs(difference)<=change+1e-8){this.angle=p.target;this.pending=null;}else this.angle+=Math.sign(difference)*change;
      }else if(p.type==='wait'){p.remaining-=dt;if(p.remaining<=1e-8)this.pending=null;}
    }
    tick(dt){
      if(!this.running)return;let remaining=number(dt,0,.25,0);
      while(remaining>1e-8&&this.running){const slice=Math.min(.02,remaining);remaining-=slice;this.elapse(slice);this.accumulator+=slice;if(this.accumulator>=.08){this.accumulator=0;this.executeOne();}}
    }
    step(){
      if(!this.started){this.start();}this.running=false;
      if(this.pending&&this.pending.type!=='condition')this.finishPending();
      this.executeOne();this.finishPending();
    }
    finishPending(){const p=this.pending;if(p?.type==='motor')this.elapse(Math.abs(p.target-this.angle)/p.speed);else if(p?.type==='wait')this.elapse(p.remaining);}
  }
  return {Engine,definitions,examples,block,example,cleanProgram};
});
