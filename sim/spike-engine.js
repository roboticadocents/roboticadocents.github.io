/* Mecanismes SPIKE Prime. Model didàctic: motor directe, sense inèrcia ni càrrega. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;else root.SpikeSimulation=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const number=(value,min,max,fallback)=>Number.isFinite(Number(value))?Math.max(min,Math.min(max,Number(value))):fallback;
  const directions=[['pel camí més curt','shortest'],['en sentit horari','clockwise'],['en sentit antihorari','counterclockwise']];
  const comparisons=[['més prop de','<'],['exactament a','='],['més lluny de','>']];
  const legacyComparisons=[['menor o igual','<='],['major o igual','>='],['diferent de','!=']];
  const units=[['cm','cm'],['polzades','inches'],['%','%']];
  const normalizeAngle=angle=>((angle%360)+360)%360;
  const distanceScale={cm:1,inches:.3937,'%':.5};
  const choice=(options,value,fallback)=>options.some(([,key])=>key===value)?value:fallback;
  const numberField=(name,value,min,max,precision=1)=>({name,value,min,max,precision,type:'field_number'});
  const menuField=(name,options)=>({name,options,value:options[0][1],type:'field_dropdown'});
  const motorDirection=menuField('direction',directions.slice(1));
  const motorPort=menuField('port',Array.from('ABCDEF',port=>[port,port]));
  const colorPort=menuField('port',[['C','C'],['B','B'],['D','D']]);
  const distancePort=menuField('port',[['D','D'],['B','B']]);
  const colors=[['roig','red'],['verd','green'],['blau','blue'],['groc','yellow'],['blanc','white'],
    ['negre','black'],['blau cel','azure'],['violeta','violet'],['rosa','magenta'],['apagat','none']];
  const heart='0101011111111110111000100';
  const dark='0'.repeat(25);
  const matrix={type:'field_matrix',name:'matrix',value:heart};
  const seconds=numberField('seconds',1,.1,30,.1);
  const note={...numberField('note',60,36,96),type:'field_note',note:60};
  const extraCommands={
    motorFor:['%1 · gira %2 durant %3 %4',[motorPort,motorDirection,numberField('amount',1,0,3600,.01),menuField('motionUnit',[['voltes','rotations'],['graus','degrees'],['segons','seconds']])],'motor','right'],
    motorStart:['%1 · engega el motor %2',[motorPort,motorDirection],'motor','right'],
    motorStop:['%1 · atura el motor',[motorPort],'motor','right'],
    matrixOn:['encén %1',[matrix],'lights','event'],
    matrixFor:['encén %1 durant %2 segons',[matrix,seconds],'lights','event'],
    matrixOff:['apaga els píxels',[],'lights','event'],
    pixel:['fixa el píxel %1 , %2 al %3 %',[numberField('x',1,1,5),numberField('y',1,1,5),numberField('brightness',100,0,100)],'lights','event'],
    hubLight:['fixa la llum del botó central a %1',[menuField('color',colors)],'lights','event'],
    beep:['comença a tocar la nota %1',[note],'sound','event'],
    beepFor:['toca la nota %1 durant %2 segons',[note,seconds],'sound','event'],
    soundStop:['atura tots els sons',[],'sound','event'],
    volume:['fixa el volum al %1 %',[numberField('volume',70,0,100)],'sound','event'],
    resetTimer:['reinicia el cronòmetre',[],'sensor','wait'],
  };
  const booleanInput=name=>({type:'input_value',name,check:'Boolean'});
  const numericInput=name=>({type:'input_value',name,check:'Number'});
  const pair=[numericInput('left'),numericInput('right')];
  const forceStates=[['premut','pressed'],['premut amb força','hard'],['alliberat','released']];
  const buttonStates=[['premut','pressed'],['alliberat','released']];
  const buttons=[['esquerre','left'],['dret','right']];
  const predicates={
    color:['%1 · és de color %2?', [colorPort,menuField('color',colors)], 'sensor'],
    force:['B · està %1?', [menuField('state',forceStates)], 'sensor'],
    button:['el botó %1 està %2?', [menuField('button',buttons),menuField('state',buttonStates)], 'sensor'],
    and:['%1 i %2',[booleanInput('left'),booleanInput('right')],'operators'],
    or:['%1 o %2',[booleanInput('left'),booleanInput('right')],'operators'],
    not:['no %1',[booleanInput('left')],'operators'],
    less:['%1 < %2',pair,'operators'],
    greater:['%1 > %2',pair,'operators'],
    equals:['%1 = %2',pair,'operators'],
  };
  const reporters={
    position:['%1 · posició',[motorPort],'motor'],
    speed:['%1 · velocitat',[motorPort],'motor'],
    distanceNumber:['%1 · distància en %2',[distancePort,menuField('unit',units)],'sensor'],
    pressure:['B · pressió en %1',[menuField('unit',[['newtons','N'],['%','%']])],'sensor'],
    timer:['cronòmetre',[],'sensor'],
    add:['%1 + %2',pair,'operators'],
    subtract:['%1 − %2',pair,'operators'],
    multiply:['%1 × %2',pair,'operators'],
    divide:['%1 ÷ %2',pair,'operators'],
    round:['arredonix %1',[numericInput('left')],'operators'],
  };
  function readField(arg,value){
    if(arg.type==='field_dropdown')return choice(arg.options,value,arg.value);
    if(arg.type==='field_matrix')return typeof value==='string'&&/^[01]{25}$/.test(value)?value:arg.value;
    return number(value??arg.value,arg.min,arg.max,arg.value);
  }
  function cleanPredicate(predicate,depth=0){
    if(depth>8||!predicate)throw new Error('Condició SPIKE no vàlida.');
    if(predicate.type==='distance')return {type:'distance',port:readField(distancePort,predicate.port),compare:choice(comparisons,predicate.compare,'<'),
      threshold:number(predicate.threshold,0,1000000,30),unit:choice(units,predicate.unit,'cm')};
    if(!Object.hasOwn(predicates,predicate.type))throw new Error('Condició SPIKE no vàlida.');
    const [,args]=predicates[predicate.type];
    return {type:predicate.type,...Object.fromEntries(args.map(arg=>[arg.name,
      arg.check==='Number'?cleanNumber(predicate[arg.name],depth+1):
        arg.check==='Boolean'?cleanPredicate(predicate[arg.name],depth+1):readField(arg,predicate[arg.name])]))};
  }
  function cleanNumber(expression,depth){
    if(typeof expression==='number'&&Number.isFinite(expression))return expression;
    if(depth>8||!expression||!Object.hasOwn(reporters,expression.type))throw new Error('Expressió numèrica SPIKE no vàlida.');
    const [,args]=reporters[expression.type];
    return {type:expression.type,...Object.fromEntries(args.map(arg=>[arg.name,
      arg.check==='Number'?cleanNumber(expression[arg.name],depth+1):readField(arg,expression[arg.name])]))};
  }
  const definitions={motor:{label:'Ves a la posició',category:'motion',icon:'right'},setSpeed:{label:'Fixa la velocitat',category:'motion',icon:'right'},wait:{label:'Espera',category:'control',icon:'wait'},waitUntil:{label:'Espera fins que',category:'control',icon:'reading'},ifThen:{label:'Si',category:'control',icon:'if'},until:{label:'Repeteix fins que',category:'control',icon:'until'},if:{label:'Si / si no',category:'control',icon:'if'},while:{label:'Mentre',category:'control',icon:'while'},repeat:{label:'Repeteix',category:'control',icon:'repeat'},forever:{label:'Per sempre',category:'control',icon:'forever'}};
  for(const [type,[label,,category,icon]] of Object.entries(extraCommands)){
    definitions[type]={label:label.replace(/%\d/g,'…'),category:category==='motor'?'motion':category,icon};
  }
  let counter=0;
  function block(type,extra={}){
    const defaults=Object.fromEntries((extraCommands[type]?.[1]??[]).map(arg=>[arg.name,arg.value]));
    return {type,angle:90,direction:'shortest',speed:type==='motor'?null:30,seconds:1,count:3,compare:'<',threshold:30,unit:'cm',body:[],then:[],else:[],...defaults,...extra,id:`sp-${++counter}`};
  }
  function cleanProgram(program){
    let count=0;
    function clean(list,depth=0){
      if(!Array.isArray(list)||list.length>150)throw new Error('Llista de blocs no vàlida.');
      return list.map(b=>{
        if(!b||!Object.hasOwn(definitions,b.type)||++count>150||depth>8)throw new Error('Programa no vàlid: màxim 150 blocs i 8 nivells.');
        const parameters=Object.fromEntries((extraCommands[b.type]?.[1]??[]).map(arg=>[arg.name,readField(arg,b[arg.name])]));
        return block(b.type,{port:readField(motorPort,b.port),angle:number(b.angle,0,359,90),direction:choice(directions,b.direction,'shortest'),speed:b.type==='motor'&&b.speed==null?null:number(b.speed,1,100,30),seconds:number(b.seconds,.1,30,1),count:Math.round(number(b.count,1,100,3)),compare:choice([...comparisons,...legacyComparisons],b.compare,'<'),threshold:number(b.threshold,0,1000000,30),distancePort:readField(distancePort,b.distancePort),unit:choice(units,b.unit,'cm'),body:clean(b.body||[],depth+1),then:clean(b.then||[],depth+1),else:clean(b.else||[],depth+1),...parameters,...(b.predicate?{predicate:cleanPredicate(b.predicate)}:{})});
      });
    }
    return clean(program);
  }
  class Engine{
    constructor(program=[]){
      this.program=program;this.motorPort='A';this.colorPort='C';this.distancePort='D';
      this.extraMotors=[];this.project='';this.environment={present:false,distance:80,force:0,color:'none',left:false,right:false};this.reset();
    }
    motorAt(port){return this.motors[port];}
    get angle(){return this.motorAt(this.motorPort)?.angle??0;}
    get motorSpeed(){return this.motorAt(this.motorPort)?.speed??30;}
    reset(){
      this.motors=Object.fromEntries([this.motorPort,...this.extraMotors].map(port=>[port,{angle:0,speed:30,spin:0}]));
      this.travel=0;this.delivery='';this.stop();this.clock=0;this.timerStart=0;this.active=null;this.lastCondition='';
      this.trace='Preparat.';this.budget=0;this.accumulator=0;this.started=false;this.hubColor='none';this.volume=100;this.setMatrix(dark);
    }
    stop(){this.running=false;this.frames=[];this.pending=null;for(const motor of Object.values(this.motors))motor.spin=0;this.note=null;}
    start(){this.reset();this.started=true;this.frames=[{blocks:this.program,index:0,remaining:1}];this.running=true;this.trace='Programa iniciat.';}
    distance(){
      if(!this.environment.present)return null;
      return Math.max(5,number(this.environment.distance,5,200,80)-(this.project==='cart'?this.travel:0));
    }
    test(b){
      if(!b.predicate)return this.testDistance({...b,port:b.distancePort??'D'});
      const result=this.evaluate(b.predicate);
      this.lastCondition=`Condició → ${result?'cert':'fals'}`;
      return result;
    }
    evaluate(predicate){
      const {type,button,color,state,left,right}=predicate;
      switch(type){
        case 'distance':return this.testDistance(predicate);
        case 'force':return state==='hard'?this.environment.force>5:state==='pressed'?this.environment.force>0:!this.environment.force;
        case 'color':return (predicate.port??'C')===this.colorPort&&this.environment.color===color;
        case 'button':return Boolean(this.environment[button])===(state==='pressed');
        case 'and':return this.evaluate(left)&&this.evaluate(right);
        case 'or':return this.evaluate(left)||this.evaluate(right);
        case 'not':return !this.evaluate(left);
        case 'less':return this.numeric(left)<this.numeric(right);
        case 'greater':return this.numeric(left)>this.numeric(right);
        case 'equals':return this.numeric(left)===this.numeric(right);
      }
    }
    numeric(expression){
      if(typeof expression==='number')return expression;
      const {type,left,right,unit}=expression;
      switch(type){
        case 'position':return this.motorAt(expression.port??'A')?.angle??0;
        case 'speed':{
          const port=expression.port??'A',motor=this.motorAt(port);
          if(!motor)return 0;
          return this.pending?.type==='motor'&&this.pending.port===port?Math.sign(this.pending.remaining)*this.pending.speed/1.8:motor.spin*motor.speed;
        }
        case 'distanceNumber':return this.distanceIn(unit,expression.port??'D');
        case 'pressure':return (this.environment.force||0)*(unit==='%'?10:1);
        case 'timer':return this.clock-this.timerStart;
        case 'add':return this.numeric(left)+this.numeric(right);
        case 'subtract':return this.numeric(left)-this.numeric(right);
        case 'multiply':return this.numeric(left)*this.numeric(right);
        case 'divide':return this.numeric(left)/this.numeric(right);
        case 'round':return Math.round(this.numeric(left));
      }
    }
    distanceIn(unit,port=this.distancePort){return Number((((port===this.distancePort?this.distance():null)??200)*distanceScale[unit]).toFixed(4));}
    testDistance(b){
      const distance=this.distance(),unit=b.unit??'cm',threshold=number(b.threshold,0,1000000,30);
      const value=this.distanceIn(unit,b.port??'D');
      const legacy=legacyComparisons.some(([,operator])=>operator===b.compare);
      const result=legacy&&distance===null?b.compare==='>=':
        ({'<':()=>value<threshold,'>':()=>value>threshold,'<=':()=>value<=threshold,'>=':()=>value>=threshold,
          '=':()=>Math.abs(value-threshold)<1e-8,'!=':()=>value!==threshold}[b.compare]||(()=>false))();
      const reading=`${value} ${unit==='inches'?'polzades':unit}`;
      this.lastCondition=`Distància ${b.port??'D'}: ${reading}${distance===null?' (sense objecte)':''} ${b.compare} ${threshold} → ${result?'cert':'fals'}`;
      return result;
    }
    setMatrix(pattern){this.pixels=Array.from(pattern,pixel=>Number(pixel)*100);}
    move(port,travel,speed){
      const motor=this.motorAt(port);motor.spin=0;
      if(travel)this.pending={type:'motor',port,remaining:travel,target:normalizeAngle(motor.angle+travel),speed};
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
      if(!b){this.stop();this.trace='Programa acabat.';return;}
      if(++this.budget>10000){this.stop();this.trace='Pausa després de 10.000 blocs. Torna a executar per continuar.';return;}
      this.active=b.id;this.trace=definitions[b.type].label;
      const port=b.port??'A',motor=this.motorAt(port);
      if(definitions[b.type].category==='motion'&&!motor){
        this.stop();this.trace='El muntatge no té cap motor al port '+(b.port??'A')+'.';return;
      }
      switch(b.type){
        case 'setSpeed':motor.speed=number(b.speed,1,100,30);break;
        case 'motor':{
          const target=number(b.angle,0,359,90);
          const clockwise=normalizeAngle(target-motor.angle);
          const anticlockwise=normalizeAngle(motor.angle-target);
          const travel=b.direction==='counterclockwise'?-anticlockwise:
            b.direction==='clockwise'||clockwise<=anticlockwise?clockwise:-anticlockwise;
          this.move(port,travel,number(b.speed??motor.speed,1,100,30)*1.8);
          break;
        }
        case 'motorFor':{
          const speed=motor.speed*1.8;
          const scale={degrees:1,rotations:360,seconds:speed};
          this.move(port,(b.direction==='counterclockwise'?-1:1)*b.amount*scale[b.motionUnit],speed);
          break;
        }
        case 'motorStart':motor.spin=b.direction==='counterclockwise'?-1:1;break;
        case 'motorStop':motor.spin=0;break;
        case 'matrixOn':this.setMatrix(b.matrix);break;
        case 'matrixFor':this.setMatrix(b.matrix);this.pending={type:'wait',remaining:b.seconds,after:'matrix'};break;
        case 'matrixOff':this.setMatrix(dark);break;
        case 'pixel':this.pixels[(Math.round(b.y)-1)*5+Math.round(b.x)-1]=b.brightness;break;
        case 'hubLight':this.hubColor=b.color;break;
        case 'beep':this.note=b.note;break;
        case 'beepFor':this.note=b.note;this.pending={type:'wait',remaining:b.seconds,after:'sound'};break;
        case 'soundStop':this.note=null;break;
        case 'volume':this.volume=b.volume;break;
        case 'resetTimer':this.timerStart=this.clock;break;
        case 'wait':this.pending={type:'wait',remaining:number(b.seconds,.1,30,1)};break;
        case 'waitUntil':if(!this.test(b))this.pending={type:'condition',block:b};break;
        case 'ifThen':if(this.test(b))this.frames.push({blocks:b.then,index:0,remaining:1});break;
        case 'if':this.frames.push({blocks:this.test(b)?b.then:b.else,index:0,remaining:1});break;
        case 'until':if(!this.test(b))this.frames.push({blocks:b.body,index:0,remaining:1,whileBlock:b});break;
        case 'while':if(this.test(b))this.frames.push({blocks:b.body,index:0,remaining:1,whileBlock:b});break;
        case 'repeat':case 'forever':this.frames.push({blocks:b.body,index:0,remaining:b.type==='forever'?Infinity:number(b.count,1,100,3)});break;
      }
    }
    elapse(dt){
      this.clock+=dt;
      const previousArm=this.motorAt('F')?.angle;
      const wheelDelta={};
      for(const [port,motor] of Object.entries(this.motors)){
        const delta=motor.spin*motor.speed*1.8*dt;
        if(delta){motor.angle=normalizeAngle(motor.angle+delta);wheelDelta[port]=delta;}
      }
      const p=this.pending;
      if(p?.type==='motor'){
        const motor=this.motorAt(p.port),change=Math.min(Math.abs(p.remaining),p.speed*dt);
        const delta=Math.sign(p.remaining)*change;
        wheelDelta[p.port]=delta;
        p.remaining-=delta;
        motor.angle=normalizeAngle(motor.angle+delta);
        if(Math.abs(p.remaining)<=1e-8){
          motor.angle=p.target;
          this.pending=null;
        }
      }else if(p?.type==='wait'){
        p.remaining-=dt;
        if(p.remaining<=1e-8){
          if(p.after==='matrix')this.setMatrix(dark);
          if(p.after==='sound')this.note=null;
          this.pending=null;
        }
      }
      if(this.project==='sorter'&&!this.delivery&&this.environment.color!=='none'&&previousArm>45&&this.motorAt('F').angle<=45){
        const base=this.motorAt('A').angle;
        if(Math.abs(base-90)<12)this.delivery='yellow';
        if(Math.abs(base-270)<12)this.delivery='magenta';
      }
      if(this.project==='cart'){
        // Els motors miren en sentits oposats. El corredor restringeix el moviment a un eix.
        const delta=((wheelDelta.E??0)-(wheelDelta.A??0))*.055;
        const limit=this.environment.present?this.environment.distance-5:200;
        this.travel=Math.max(0,Math.min(Math.max(0,limit),this.travel+delta));
      }
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
    finishPending(){const p=this.pending;if(p?.type==='motor')this.elapse(Math.abs(p.remaining)/p.speed);else if(p?.type==='wait')this.elapse(p.remaining);}
  }
  return {Engine,definitions,block,cleanProgram,directions,comparisons,legacyComparisons,units,extraCommands,predicates,reporters,colors,motorPort,distancePort};
});
