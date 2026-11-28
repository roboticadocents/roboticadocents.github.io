(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./spike-engine'));
  else root.SpikeProjects=factory(root.SpikeSimulation);
})(globalThis,function({block}){
  const position=(angle,port='A')=>block('motor',{angle,port});
  const wait=seconds=>block('wait',{seconds});
  const when=predicate=>block('waitUntil',{predicate});
  const button=(side,state)=>({type:'button',button:side,state});
  const colour=color=>({type:'color',port:'D',color});
  const light=color=>block('hubLight',{color});
  const speed=(value,port)=>block('setSpeed',{speed:value,port});
  const forever=(...body)=>block('forever',{body});

  return {
    dial:{
      title:'Indicador de torns',guide:'indicador-torns',motor:'A',
      task:'Observa les tres posicions de l’agulla. Canvia l’ordre dels estats o el temps del torn.',
      note:'Lliure → En ús → Canvi de torn. L’agulla torna a 0°.',
      program:()=>[speed(40,'A'),forever(position(0),wait(2),position(30),wait(3),position(60),wait(2))],
    },
    claw:{
      title:'Pinça per recollir peces',guide:'pinca',motor:'F',
      task:'Col·loca la peça. Prem el botó esquerre per tancar la pinça i solta’l per obrir-la.',
      note:'La posició i el recorregut es calibren al muntatge físic.',
      program:()=>[speed(45,'F'),forever(when(button('left','pressed')),position(65,'F'),when(button('left','released')),position(0,'F'))],
    },
    wheel:{
      title:'Sínia de sis cabines',guide:'sinia',motor:'F',distance:'D',
      task:'Prem Play. Posa un objecte davant del sensor i situa’l a menys de 15 cm.',
      note:'La velocitat programada baixa del 100% al 20% quan el sensor detecta un objecte a menys de 15 cm.',
      phases:angle=>Array.from({length:6},(_,index)=>(angle-index*60)*Math.PI/180),
      program:()=>[block('motorStart',{port:'F',direction:'clockwise'}),forever(
        block('if',{predicate:{type:'distance',port:'D',compare:'<',threshold:15,unit:'cm'},
          then:[speed(20,'F')],else:[speed(100,'F')]}),
        wait(.1),
      )],
    },
    cart:{
      title:'Carretó de repartiment',guide:'carreto',motor:'A',extraMotors:['E','C'],distance:'B',environment:{present:true,distance:95},
      task:'Executa amb la zona de descàrrega al davant. Canvia la distància inicial i comprova on s’atura.',
      note:'El carretó avança en línia recta amb els motors E i A. El sensor B ha de llegir menys de 15 cm abans de parar.',
      program:()=>[position(0,'C'),speed(60,'E'),speed(60,'A'),
        block('motorStart',{port:'E',direction:'clockwise'}),block('motorStart',{port:'A',direction:'counterclockwise'}),
        block('waitUntil',{threshold:15,distancePort:'B'}),
        block('motorStop',{port:'E'}),block('motorStop',{port:'A'})],
    },
    sorter:{
      title:'Classificador de peces per color',guide:'classificador',motor:'A',extraMotors:['F'],color:'D',
      task:'Presenta una peça groga o rosa i mira a quina eixida va. Prova després un altre color.',
      note:'Motor A per girar la base, F per moure el braç i D per llegir el color. Retira la peça del sensor abans del següent cicle.',
      program:()=>{
        const lower=()=>block('motor',{port:'F',angle:25,direction:'counterclockwise'});
        const raise=()=>block('motor',{port:'F',angle:235,direction:'clockwise'});
        const deliver=(angle,color)=>[position(angle),lower(),light(color),wait(1),raise(),position(0)];
        return [speed(55,'A'),speed(55,'F'),raise(),forever(
          when({type:'not',left:colour('none')}),
          block('if',{predicate:colour('yellow'),then:deliver(90,'yellow'),else:[
            block('if',{predicate:colour('magenta'),then:deliver(270,'magenta'),else:[light('red')]}),
          ]}),
          when(colour('none')),light('none'),
        )];
      },
    },
  };
});
