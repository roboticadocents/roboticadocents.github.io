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
      title:'Sínia de quatre cabines',guide:'sinia',motor:'A',
      task:'Executa el programa. Marca «Botó esquerre premut» per avançar una cabina i desmarca’l abans de tornar a prémer.',
      note:'Un quart de volta situa la cabina següent a la zona d’embarcament. Prova de mantindre el botó premut.',
      phases:angle=>Array.from({length:4},(_,index)=>(angle-index*90)*Math.PI/180),
      program:()=>[speed(25,'A'),forever(
        when(button('left','pressed')),
        block('motorFor',{port:'A',direction:'clockwise',amount:90,motionUnit:'degrees'}),
        when(button('left','released')),
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
