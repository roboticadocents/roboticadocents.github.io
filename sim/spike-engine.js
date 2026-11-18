/* Mecanismes SPIKE Prime. Model didàctic: motor directe, sense inèrcia ni càrrega. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;else root.SpikeSimulation=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const number=(value,min,max,fallback)=>Number.isFinite(Number(value))?Math.max(min,Math.min(max,Number(value))):fallback;
  const definitions={motor:{label:'Motor A a un angle',category:'motion',icon:'right'},wait:{label:'Espera',category:'control',icon:'wait'},waitUntil:{label:'Espera fins que',category:'sensor',icon:'reading'},if:{label:'Si / si no',category:'control',icon:'if'},while:{label:'Mentre',category:'control',icon:'while'},repeat:{label:'Repeteix',category:'control',icon:'repeat'},forever:{label:'Per sempre',category:'control',icon:'forever'}};
  const examples={
    sequence:{label:'Acció i retorn · Moviment amb motiu',sda:'sp-python-motors',title:'Moviment amb motiu',lesson:'Lliçó 3 · Automatitzar una acció útil',task:'Prediu l’ordre del moviment, executa tres cicles i comprova si el braç torna a 0°. Canvia només l’angle o l’espera i registra el resultat.',adaptation:'Pràctica prèvia en blocs de la tasca d’alçar una barrera de cartó; la SdA continua amb Python i el muntatge físic.'},
    automatic:{label:'Barrera amb detecció · ampliació',sda:'sp-python-motors',title:'Moviment amb motiu',lesson:'Ampliació de la lliçó 3',task:'Afig una entrada a l’acció automatitzada: prova 20, 35 i 60 cm, i després retira l’objecte. Explica quan s’obri i quan pot tornar a tancar.',adaptation:'Ampliació pròpia amb sensor de distància i dos llindars; no és una reproducció literal de la lliçó.'},
    condition:{label:'Sensor i resposta · Biblioteca',sda:'sp-sensors-logistica',title:'Sensors al servei de la biblioteca',lesson:'Preparació de la lliçó 1 · Els sensors activen respostes',task:'Prediu la branca per a 20, 30 i 40 cm. Prova els tres valors i anota lectura, decisió i angle observat.',adaptation:'La regla sensor–motor es practica amb un braç fix; la SdA l’aplica després a una base mòbil.'},
    repeat:{label:'Quatre moviments · Mosaic',sda:'sp-python-bucles',title:'Un mosaic de moviments repetits',lesson:'Lliçó 1 · Quatre repeticions, una instrucció',task:'Usa el braç com a indicador: compta quatre anades i tornades. Canvia el nombre de repeticions i prediu on acabarà.',adaptation:'Pràctica en blocs del moviment repetit de l’indicador. No simula la col·locació de les peces del mosaic; la SdA continua en Python.'}
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
      if(!Array.isArray(list)||list.length>150)throw new Error('Llista de blocs no vàlida.');
      return list.map(b=>{
        if(!b||!Object.hasOwn(definitions,b.type)||++count>150||depth>8)throw new Error('Programa no vàlid: màxim 150 blocs i 8 nivells.');
        return block(b.type,{angle:number(b.angle,0,90,90),speed:number(b.speed,1,100,30),seconds:number(b.seconds,.1,30,1),count:Math.round(number(b.count,1,100,3)),compare:['<','>','<=','>=','=','!='].includes(b.compare)?b.compare:'<',threshold:number(b.threshold,5,200,30),body:clean(b.body||[],depth+1),then:clean(b.then||[],depth+1),else:clean(b.else||[],depth+1)});
      });
    }
    return clean(program);
  }
  class Engine{
    constructor(program=[]){this.program=program;this.environment={present:false,distance:80};this.reset();}
    reset(){this.stop();this.angle=0;this.clock=0;this.active=null;this.lastCondition='';this.trace='Preparat.';this.budget=0;this.accumulator=0;this.started=false;}
    stop(){this.running=false;this.frames=[];this.pending=null;}
    start(){this.reset();this.started=true;this.frames=[{blocks:this.program,index:0,remaining:1}];this.running=true;this.trace='Programa iniciat.';}
    distance(){return this.environment.present?number(this.environment.distance,5,200,80):null;}
    test(b){
      const value=this.distance(),threshold=number(b.threshold,5,200,30);
      const result=value!==null&&({'<':()=>value<threshold,'>':()=>value>threshold,'<=':()=>value<=threshold,'>=':()=>value>=threshold,'=':()=>value===threshold,'!=':()=>value!==threshold}[b.compare]||(()=>false))();
      // Sense objecte també podem esperar que la zona torne a quedar lliure.
      const clear=value===null&&['>','>='].includes(b.compare);
      this.lastCondition=`Distància D: ${value===null?'sense objecte':value+' cm'} ${b.compare} ${threshold} cm → ${result||clear?'cert':'fals'}`;
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
      if(this.pending){if(this.pending.type==='condition'){if(this.test(this.pending.block)){this.pending=null;this.trace='Condició complida; continuem.';}}return;}
      const b=this.next();
      if(!b){this.running=false;this.trace='Programa acabat.';return;}
      if(++this.budget>10000){this.stop();this.trace='Pausa després de 10.000 blocs. Torna a executar per continuar.';return;}
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
