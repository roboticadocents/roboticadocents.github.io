/* Editor Scratch Blocks per a SPIKE Prime. */
(function(){
  'use strict';
  const B=window.Blockly;
  if(!B)return;
  const {directions,comparisons,legacyComparisons,units,extraCommands,predicates,reporters,motorPort,distancePort}=window.SpikeSimulation;
  const media=new URL('./vendor/scratch-blocks/media/',document.currentScript.src).href;
  const fields=(name,value,min,max,precision=1)=>({type:'field_number',name,value,min,max,precision});
  const menuField=(name,options)=>({type:'field_dropdown',name,options});
  const condition={type:'input_value',name:'CONDITION',check:'Boolean'};
  const stack=name=>({type:'input_statement',name});
  const commands={
    motor:['%1 · ves %2 a la posició %3 °',[motorPort,menuField('direction',directions),fields('angle',0,0,359)],'motor'],
    setSpeed:['%1 · fixa la velocitat al %2 %',[motorPort,fields('speed',75,1,100)],'motor'],
    wait:['espera %1 segons',[fields('seconds',1,.1,30,.1)],'control'],
    waitUntil:['espera fins que %1',[condition],'control'],
    ifThen:['si %1 llavors',[condition,stack('then')],'control'],
    if:['si %1 llavors',[condition,stack('then'),stack('else')],'control'],
    while:['mentre %1',[condition,stack('body')],'control'],
    until:['repeteix fins que %1',[condition,stack('body')],'control'],
    repeat:['repeteix %1 vegades',[fields('count',3,1,100),stack('body')],'control'],
    forever:['per sempre',[stack('body')],'control'],
    ...extraCommands,
  };
  // Paleta de blocs de paraules de l’app LEGO Education SPIKE.
  const palette=(colour,colourSecondary,colourTertiary)=>({colour,colourSecondary,colourTertiary});
  const colours={
    motor:palette('#0090F5','#0078CC','#0062A6'),
    lights:palette('#9B6AF6','#691FF0','#571CC1'),
    sound:palette('#C061F1','#8A40AF','#642E7F'),
    control:palette('#FFB515','#ECA100','#C98A01'),
    sensor:palette('#34CCF1','#00A8C9','#368FA9'),
    operators:palette('#00B94D','#00963E','#006A2A'),
    event:palette('#F5C402','#C8A300','#B09400'),
  };
  const loopTypes=new Set(['forever','repeat','until','while']);
  for(const [type,[message,args,category]] of Object.entries(commands)){
    const stacks=args.filter(arg=>arg.type==='input_statement');
    const layout={message0:message,args0:args.filter(arg=>arg.type!=='input_statement')};
    // Scratch Blocks renders the opening of a C-shaped block on its own statement row.
    if(stacks.length){
      Object.assign(layout,{message1:'%1',args1:[stacks[0]]});
      if(stacks.length===2)Object.assign(layout,{message2:'si no',message3:'%1',args3:[stacks[1]]});
      if(loopTypes.has(type))Object.assign(layout,{message2:'%1',lastDummyAlign2:'RIGHT',args2:[
        {type:'field_image',src:media+'repeat.svg',width:24,height:24,alt:'',flip_rtl:true},
      ]});
    }
    B.Blocks['sp_'+type]={init(){
      this.jsonInit({...layout,inputsInline:true,...colours[category],extensions:['shape_statement']});
    }};
  }
  B.Blocks.sp_start={init(){
    this.jsonInit({message0:'quan s’inicia el programa',...colours.event,extensions:['shape_hat']});
  }};
  for(const [type,options] of [['sp_distance',comparisons],['sp_legacy_distance',legacyComparisons]]){
    B.Blocks[type]={init(){
      this.jsonInit({message0:'%1 · està %2 %3 %4?',args0:[distancePort,
        menuField('compare',options),fields('threshold',15,0,1000000,.0001),menuField('unit',units),
      ],output:'Boolean',outputShape:B.OUTPUT_SHAPE_HEXAGONAL,...colours.sensor});
    }};
  }
  const expressions={...predicates,...reporters};
  for(const [type,[message,args,category]] of Object.entries(expressions)){
    const boolean=Object.hasOwn(predicates,type);
    B.Blocks[(boolean?'sp_pred_':'sp_report_')+type]={init(){
      this.jsonInit({message0:message,args0:args,inputsInline:true,output:boolean?'Boolean':'Number',
        outputShape:boolean?B.OUTPUT_SHAPE_HEXAGONAL:B.OUTPUT_SHAPE_ROUND,...colours[category]});
    }};
  }
  B.Blocks.sp_numeric={init(){
    this.jsonInit({message0:'%1',args0:[fields('NUM',0,undefined,undefined,0)],
      output:'Number',outputShape:B.OUTPUT_SHAPE_ROUND,colour:'#ffffff',colourSecondary:'#cbd5e1',colourTertiary:'#94a3b8'});
  }};

  const xmlText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
  const field=(name,value)=>`<field name="${name}">${xmlText(value)}</field>`;
  const value=(name,block)=>`<value name="${name}">${block}</value>`;
  const writeField=(a,b)=>field(a.name,b[a.name]??a.value??a.options?.[0][1]);
  function readField(a,b){
    const raw=b.getFieldValue(a.name);
    return ['field_number','field_note'].includes(a.type)?Number(raw):raw;
  }
  function distanceXml(compare='<',threshold=15,unit='%',port='D'){
    const type=legacyComparisons.some(([,value])=>value===compare)?'sp_legacy_distance':'sp_distance';
    return `<block type="${type}">${field('port',port)}${field('compare',compare)}${field('threshold',threshold)}${field('unit',unit)}</block>`;
  }
  const numericShadow=n=>`<shadow type="sp_numeric">${field('NUM',n)}</shadow>`;
  function encodeExpression(b){
    if(typeof b==='number')return numericShadow(b);
    if(b.type==='distance')return distanceXml(b.compare,b.threshold,b.unit,b.port);
    const [,args]=expressions[b.type];
    const content=args.map(a=>{
      if(a.type!=='input_value')return writeField(a,b);
      const shadow=a.check==='Number'&&typeof b[a.name]!=='number'?numericShadow(0):'';
      return value(a.name,shadow+encodeExpression(b[a.name]));
    }).join('');
    return `<block type="${Object.hasOwn(predicates,b.type)?'sp_pred_':'sp_report_'}${b.type}">${content}</block>`;
  }
  function decodeExpression(b,depth=0){
    if(!b)throw new Error('Completa els espais buits de la condició.');
    if(depth>8)throw new Error('Màxim 8 nivells dins d’una expressió.');
    if(b.type==='sp_numeric')return Number(b.getFieldValue('NUM'));
    if(['sp_distance','sp_legacy_distance'].includes(b.type))return {
      type:'distance',port:b.getFieldValue('port'),compare:b.getFieldValue('compare'),threshold:Number(b.getFieldValue('threshold')),unit:b.getFieldValue('unit'),
    };
    const type=b.type.replace(/^sp_(pred|report)_/,'');
    const [,args]=expressions[type];
    return {type,...Object.fromEntries(args.map(a=>[a.name,a.type==='input_value'?
      decodeExpression(b.getInputTargetBlock(a.name),depth+1):readField(a,b)]))};
  }
  const toolbox=Object.entries({motor:'Motors',lights:'Llums',sound:'So',control:'Control',sensor:'Sensors',operators:'Operadors'}).map(([category,label])=>{
    const statements=Object.entries(commands)
      .filter(([type,config])=>config[2]===category&&type!=='while')
      .map(([type,[,args]])=>`<block type="sp_${type}">${args.filter(a=>a.type==='field_matrix').map(a=>writeField(a,{})).join('')}</block>`).join('');
    const values=Object.entries(expressions).filter(([,config])=>config[2]===category)
      .map(([type,[,args]])=>`<block type="${Object.hasOwn(predicates,type)?'sp_pred_':'sp_report_'}${type}">${args
        .filter(a=>a.check==='Number').map(a=>value(a.name,numericShadow(0))).join('')}</block>`).join('');
    const entries=(category==='sensor'?distanceXml():'')+statements+values;
    return `<category name="${label}" id="sp-${category}" colour="${colours[category].colour}" secondaryColour="${colours[category].colourSecondary}">${entries}</category>`;
  }).join('');

  function encodeList(list){
    return list.reduceRight((next,b)=>{
      const args=commands[b.type][1];
      let content=args.filter(a=>a.type.startsWith('field_')).map(a=>writeField(a,b)).join('');
      if(args.includes(condition))content+=value('CONDITION',b.predicate?encodeExpression(b.predicate):distanceXml(b.compare,b.threshold,b.unit??'cm',b.distancePort));
      for(const a of args.filter(a=>a.type==='input_statement')){
        if(b[a.name]?.length)content+=`<statement name="${a.name}">${encodeList(b[a.name])}</statement>`;
      }
      // Els projectes anteriors podien configurar la velocitat dins de cada moviment.
      if(b.type==='motor'&&b.speed!=null)content+=`<data>${Number(b.speed)}</data>`;
      return `<block type="sp_${b.type}" id="${xmlText(b.id)}">${content}${next?`<next>${next}</next>`:''}</block>`;
    },'');
  }
  function decodeList(first,depth=0,budget={count:0}){
    const list=[];
    for(let b=first;b;b=b.getNextBlock()){
      const type=b.type.slice(3),spec=commands[type];
      if(!spec||depth>8||++budget.count>150)throw new Error('Màxim 150 blocs i 8 nivells.');
      const result={id:b.id,type,body:[],then:[],else:[],speed:type==='motor'&&b.data?Number(b.data):null};
      const [,args]=spec;
      for(const a of args){
        if(a.type.startsWith('field_'))result[a.name]=readField(a,b);
        if(a.type==='input_statement')result[a.name]=decodeList(b.getInputTargetBlock(a.name),depth+1,budget);
      }
      if(args.includes(condition)){
        const predicate=decodeExpression(b.getInputTargetBlock('CONDITION'));
        if(predicate.type==='distance'){
          const {compare,threshold,unit,port}=predicate;
          Object.assign(result,{compare,threshold,unit,distancePort:port});
        }else result.predicate=predicate;
      }
      list.push(result);
    }
    return list;
  }
  function create(element,onChange,onError){
    const workspace=B.inject(element,{media,toolbox:`<xml>${toolbox}</xml>`,scrollbars:true,trashcan:true,sounds:false,
      zoom:{controls:true,wheel:true,startScale:.85,minScale:.45,maxScale:1.6}});
    let hat,loading=false,timer,last='',highlighted;
    const resize=()=>{if(element.offsetWidth&&element.offsetHeight)B.svgResize(workspace);};
    new ResizeObserver(resize).observe(element);
    const flyout=workspace.getFlyout(),menu=workspace.getToolbox();
    const expandedWidth=menu.getWidth.bind(menu);
    const positionFlyout=flyout.position.bind(flyout);
    const categoryWidth=()=>element.querySelector('.blocklyToolboxDiv').offsetWidth;
    // El llenç conserva l’origen quan la paleta se superposa i quan es plega.
    menu.getWidth=categoryWidth;
    flyout.position=()=>{
      menu.getWidth=expandedWidth;
      try{positionFlyout();}finally{menu.getWidth=categoryWidth;}
    };
    const createBlock=flyout.createBlock.bind(flyout);
    function closePalette(){
      menu.clearSelection();
      flyout.setVisible(false);
      workspace.recordCachedAreas();
    }
    flyout.createBlock=source=>{
      const block=createBlock(source);
      closePalette();
      return block;
    };
    function flush(){
      clearTimeout(timer);
      if(loading||!hat||workspace.isDragging())return false;
      try{
        const list=decodeList(hat.getNextBlock());
        const key=JSON.stringify(list);
        if(key!==last){last=key;onChange(list);}
        onError('');
        return true;
      }catch(error){onError(error.message);return false;}
    }
    workspace.addChangeListener(event=>{
      if(loading||event.type===B.Events.UI)return;
      clearTimeout(timer);
      timer=setTimeout(flush,100);
    });
    workspace.getCanvas().addEventListener('pointerdown',closePalette);
    element.addEventListener('pointerup',()=>setTimeout(flush,0));
    return {resize,flush,setProgram(list){
      loading=true;
      clearTimeout(timer);
      try{
        workspace.clear();
        const chain=encodeList(list);
        B.Xml.domToWorkspace(B.Xml.textToDom(`<xml><block type="sp_start" id="sp-program-start" x="24" y="24">${chain?`<next>${chain}</next>`:''}</block></xml>`),workspace);
        hat=workspace.getBlockById('sp-program-start');
        hat.setDeletable(false);
        hat.setMovable(false);
        last=JSON.stringify(decodeList(hat.getNextBlock()));
        closePalette();
        highlighted=null;
        onError('');
      }finally{loading=false;}
      requestAnimationFrame(()=>{
        resize();
        const m=workspace.getMetrics();
        workspace.scrollbar.set(-m.contentLeft,-m.contentTop);
      });
    },highlight(id){
      if(id===highlighted)return;
      if(highlighted&&workspace.getBlockById(highlighted))workspace.glowBlock(highlighted,false);
      if(id&&workspace.getBlockById(id))workspace.glowBlock(id,true);
      highlighted=id;
    }};
  }
  window.SpikeNativeBlocks={create};
})();
