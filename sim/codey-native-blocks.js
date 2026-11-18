/* Editor natiu Scratch Blocks per al subconjunt Codey del simulador. */
(function(){
  'use strict';
  const B=window.Blockly;if(!B)return;
  const {cleanExpression}=window.CodeySimulation;
  const media=new URL('./vendor/scratch-blocks/media/',document.currentScript.src).href;
  const icon='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-width="1.6"><rect x="4" y="2" width="16" height="14" rx="4"/><path d="M7 8h2m6 0h2M8 12h8M5 18h14l2 4H3z"/></g></svg>');
  const faces={happy:['0000000000000000','0001100000011000','0001100000011000','0000000000000000','0010000000000100','0001000000001000','0000111111110000','0000000000000000'],sad:['0000000000000000','0001100000011000','0001100000011000','0000000000000000','0000111111110000','0001000000001000','0010000000000100','0000000000000000'],surprise:['0000000000000000','0001100000011000','0001100000011000','0000000000000000','0000001111000000','0000010000100000','0000001111000000','0000000000000000'],blank:Array(8).fill('0000000000000000')};
  const colourOptions=[['negre','black'],['blanc','white'],['roig','red'],['verd','green'],['blau','blue'],['groc','yellow']];
  const sensorLabels={infrared:'intensitat de llum infraroja reflectida',gray:'valor de grisos',light:'intensitat de la llum',sound:'intensitat del so'};
  const colours={action:['#4c97ff','#4280d7','#3373cc'],looks:['#9966ff','#855cd6','#774dcb'],lighting:['#b17ed8','#a367cd','#8550a9'],sensing:['#4cbfe6','#38add7','#2695bb']};
  function image(pattern){let svg='<svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="0 0 80 40"><rect width="80" height="40" rx="3" fill="#323232"/>';for(let y=0;y<8;y++)for(let x=0;x<16;x++)svg+=`<rect x="${x*5+1}" y="${y*5+1}" width="3" height="3" fill="${pattern[y][x]==='1'?'#fff':'#575757'}"/>`;return 'data:image/svg+xml,'+encodeURIComponent(svg+'</svg>');}
  function device(type,message,args,category){
    B.Blocks[type]={init(){this.jsonInit({message0:'%1 '+message.replace(/%(\d+)/g,(_,n)=>'%'+(Number(n)+1)),args0:[{type:'field_image',src:icon,width:24,height:24,alt:'Codey'},...args],inputsInline:true,colour:colours[category][0],colourSecondary:colours[category][1],colourTertiary:colours[category][2],extensions:['shape_statement']});}};
  }
  const numberInput=name=>({type:'input_value',name,check:'Number'});
  for(const [type,label] of [['forward','mou endavant'],['back','mou enrere'],['left','gira a l’esquerra'],['right','gira a la dreta']])device('cr_'+type,`${label} a potència %1 % durant %2 s`,[numberInput('POWER'),numberInput('SECONDS')],'action');
  device('cr_drive','mou endavant a potència %1 %',[numberInput('POWER')],'action');
  device('cr_tracks','defineix la potència del motor esquerre a %1 % i dret a %2 %',[numberInput('LEFT'),numberInput('RIGHT')],'action');
  device('cr_stop','atura el moviment',[],'action');
  device('cr_face','mostra la imatge %1',[{type:'field_image',name:'IMAGE',src:image(faces.happy),width:80,height:40,alt:'Edita la imatge de 16 × 8'}],'looks');
  const faceInit=B.Blocks.cr_face.init;
  B.Blocks.cr_face.init=function(){faceInit.call(this);this.appendDummyInput('IMAGE_DATA').appendField(new B.FieldTextInput(''),'PATTERN');this.getInput('IMAGE_DATA').setVisible(false);};
  function storedPattern(block,data){const bits=block.getFieldValue('PATTERN');return /^[01]{128}$/.test(bits||'')?Array.from({length:8},(_,y)=>bits.slice(y*16,y*16+16)):validPattern(data.pattern)?data.pattern:faces.happy.slice();}
  device('cr_show','mostra %1',[{type:'input_value',name:'VALUE'}],'looks');
  device('cr_rgb','el LED RGB s’encén de color %1',[{type:'input_value',name:'COLOUR',check:'Colour'}],'lighting');
  for(const [name,label] of Object.entries(sensorLabels))B.Blocks['cr_sensor_'+name]={init(){this.jsonInit({message0:'%1 '+label,args0:[{type:'field_image',src:icon,width:24,height:24,alt:'Codey'}],output:'Number',outputShape:B.OUTPUT_SHAPE_ROUND,colour:colours.sensing[0],colourSecondary:colours.sensing[1],colourTertiary:colours.sensing[2]});}};
  B.Blocks.cr_sensor_color={init(){this.jsonInit({message0:'color detectat · compatibilitat',output:'String',outputShape:B.OUTPUT_SHAPE_ROUND,colour:colours.sensing[0]});}};
  B.Blocks.cr_color={init(){this.jsonInit({message0:'%1 el color detectat és %2 ?',args0:[{type:'field_image',src:icon,width:24,height:24,alt:'Codey'},{type:'field_dropdown',name:'COLOUR',options:colourOptions}],output:'Boolean',outputShape:B.OUTPUT_SHAPE_HEXAGONAL,colour:colours.sensing[0],colourSecondary:colours.sensing[1],colourTertiary:colours.sensing[2]});}};
  B.Blocks.cr_start={init(){this.jsonInit({message0:'quan Codey s’inicia',extensions:['colours_event','shape_hat']});}};
  B.Blocks.cr_button={init(){this.jsonInit({message0:'quan es prem el botó %1',args0:[{type:'field_dropdown',name:'BUTTON',options:[['A','A'],['B','B']]}],extensions:['colours_event','shape_hat']});}};
  const allowed=new Set(['cr_start','cr_button','cr_forward','cr_back','cr_left','cr_right','cr_drive','cr_tracks','cr_stop','cr_face','cr_show','cr_rgb','cr_color','cr_sensor_color',...Object.keys(sensorLabels).map(s=>'cr_sensor_'+s),'control_wait','control_repeat','control_forever','control_if_else','control_repeat_until','control_wait_until','operator_lt','operator_gt','operator_equals','operator_not','operator_and','operator_or','math_number','math_whole_number','math_positive_number','text','colour_picker']);
    function escape(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));}
  const field=(name,value)=>`<field name="${name}">${escape(value)}</field>`;
  const shadow=(value,type='math_number')=>`<shadow type="${type}">${field(type==='text'?'TEXT':'NUM',value)}</shadow>`;
  const input=(name,body)=>`<value name="${name}">${body}</value>`;
  function expressionXml(expr){
    if(expr.kind==='number')return shadow(expr.value);
    if(expr.kind==='string')return shadow(expr.value,'text');
    if(expr.kind==='boolean')return expr.value?'<block type="operator_not"></block>':'';
    if(expr.kind==='sensor')return `<block type="cr_sensor_${expr.name}"></block>`;
    if(expr.kind==='color')return `<block type="cr_color">${field('COLOUR',expr.value)}</block>`;
    if(expr.kind==='not')return `<block type="operator_not">${input('OPERAND',expressionXml(expr.value))}</block>`;
    if(expr.kind==='and'||expr.kind==='or')return `<block type="operator_${expr.kind}">${input('OPERAND1',expressionXml(expr.left))}${input('OPERAND2',expressionXml(expr.right))}</block>`;
    return `<block type="operator_${{'<':'lt','>':'gt','=':'equals'}[expr.op]}">${input('OPERAND1',expressionXml(expr.left))}${input('OPERAND2',expressionXml(expr.right))}</block>`;
  }
  function legacyCondition(b){
    if(b.condition)return b.condition;
    if(b.sensor==='color'){const e={kind:'color',value:b.value};return b.compare==='!='?{kind:'not',value:e}:e;}
    let op=b.compare||'>',negate=false;
    if(['<=','>=','!='].includes(op)){op={'<=':'>','>=':'<','!=':'='}[op];negate=true;}
    const e={kind:'compare',op,left:{kind:'sensor',name:b.sensor||'infrared'},right:{kind:'number',value:b.threshold??50}};
    return negate?{kind:'not',value:e}:e;
  }
  function blockXml(b,next=''){
    const types={forward:'cr_forward',back:'cr_back',left:'cr_left',right:'cr_right',drive:'cr_drive',tracks:'cr_tracks',stop:'cr_stop',face:'cr_face',text:'cr_show',reading:'cr_show',rgb:'cr_rgb',wait:'control_wait',repeat:'control_repeat',forever:'control_forever',if:'control_if_else',until:'control_repeat_until',while:'control_repeat_until',waitUntil:'control_wait_until'};
    let contents='';
    const param=(name,key)=>input(name,expressionXml(b.bindings?.[key]||{kind:'number',value:b[key]}));
    if(['forward','back','left','right','drive'].includes(b.type))contents+=param('POWER','power');
    if(['forward','back','left','right'].includes(b.type))contents+=param('SECONDS','seconds');
    if(b.type==='tracks')contents+=param('LEFT','left')+param('RIGHT','right');
    if(b.type==='text')contents+=input('VALUE',expressionXml(b.expression||{kind:'string',value:b.value}));
    if(b.type==='reading')contents+=input('VALUE',expressionXml({kind:'sensor',name:b.sensor}));
    if(b.type==='rgb')contents+=input('COLOUR',`<shadow type="colour_picker">${field('COLOUR',b.value)}</shadow>`);
    if(b.type==='wait')contents+=param('DURATION','seconds');
    if(b.type==='repeat')contents+=param('TIMES','count');
    if(['if','until','while','waitUntil'].includes(b.type)){const condition=legacyCondition(b);contents+=input('CONDITION',expressionXml(b.type==='while'?{kind:'not',value:condition}:condition));}
    if(b.type==='if')contents+=`<statement name="SUBSTACK">${listXml(b.then)}</statement><statement name="SUBSTACK2">${listXml(b.else)}</statement>`;
    if(['repeat','forever','while','until'].includes(b.type))contents+=`<statement name="SUBSTACK">${listXml(b.body)}</statement>`;
    if(b.type==='face')contents+=`<data>${escape(JSON.stringify({pattern:b.value==='custom'?b.pattern:faces[b.value]||faces.happy,value:b.value}))}</data>`;
    if(b.type==='while')contents+='<data>{"legacyWhile":true}</data>';
    if(b.type==='forever'&&next){detached.push(next);next='';}
    return `<block type="${types[b.type]}" id="${escape(b.id)}">${contents}${next?'<next>'+next+'</next>':''}</block>`;
  }
  let detached=[];
  function listXml(list){let xml='';for(let i=list.length-1;i>=0;i--)xml=blockXml(list[i],xml);return xml;}
  function toolbox(){
    const entry=(type,values={})=>`<block type="${type}">${Object.entries(values).map(([name,value])=>input(name,shadow(value,typeof value==='string'?'text':'math_number'))).join('')}</block>`;
    return `<xml><category name="Aspecte" id="Aspecte" colour="#9966ff" secondaryColour="#9966ff">${entry('cr_face')}${entry('cr_show',{VALUE:'Hola'})}</category><category name="Il·luminació" id="Il·luminació" colour="#b17ed8" secondaryColour="#b17ed8"><block type="cr_rgb"><value name="COLOUR"><shadow type="colour_picker">${field('COLOUR','#22c55e')}</shadow></value></block></category><category name="Acció" id="Acció" colour="#4c97ff" secondaryColour="#4c97ff">${['forward','back','left','right'].map(t=>entry('cr_'+t,{POWER:30,SECONDS:1})).join('')}${entry('cr_drive',{POWER:30})}${entry('cr_tracks',{LEFT:10,RIGHT:10})}${entry('cr_stop')}</category><category name="Detecció" id="Detecció" colour="#4cbfe6" secondaryColour="#4cbfe6">${Object.keys(sensorLabels).map(s=>entry('cr_sensor_'+s)).join('')}${entry('cr_color')}</category><category name="Control" id="Control" colour="#ffab19" secondaryColour="#ffab19">${entry('control_wait',{DURATION:1})}${entry('control_repeat',{TIMES:3})}${entry('control_forever')}${entry('control_if_else')}${entry('control_wait_until')}${entry('control_repeat_until')}</category><category name="Operadors" id="Operadors" colour="#59c059" secondaryColour="#59c059">${['lt','gt','equals'].map(s=>entry('operator_'+s,{OPERAND1:0,OPERAND2:50})).join('')}${['and','or','not'].map(s=>entry('operator_'+s)).join('')}</category></xml>`;
  }
  function readExpression(block){
    if(!block)return {kind:'boolean',value:false};
    if(block.type.startsWith('cr_sensor_'))return {kind:'sensor',name:block.type.slice(10)};
    if(block.type.startsWith('math_'))return {kind:'number',value:Number(block.getFieldValue('NUM'))};
    if(block.type==='text')return {kind:'string',value:block.getFieldValue('TEXT')};
    if(block.type==='cr_color')return {kind:'color',value:block.getFieldValue('COLOUR')};
    if(block.type==='operator_not')return {kind:'not',value:readExpression(block.getInputTargetBlock('OPERAND'))};
    if(['operator_and','operator_or'].includes(block.type))return {kind:block.type.slice(9),left:readExpression(block.getInputTargetBlock('OPERAND1')),right:readExpression(block.getInputTargetBlock('OPERAND2'))};
    if(['operator_lt','operator_gt','operator_equals'].includes(block.type))return {kind:'compare',op:{operator_lt:'<',operator_gt:'>',operator_equals:'='}[block.type],left:readExpression(block.getInputTargetBlock('OPERAND1')),right:readExpression(block.getInputTargetBlock('OPERAND2'))};
    throw new Error('Aquest bloc no és una lectura ni una condició compatible.');
  }
  function flatCondition(expr){
    if(expr.kind==='color')return {sensor:'color',compare:'=',value:expr.value};
    if(expr.kind==='compare'&&expr.left.kind==='sensor'&&expr.right.kind==='number')return {sensor:expr.left.name,compare:expr.op,threshold:expr.right.value};
    return {};
  }
  function readList(first,depth=0,state={count:0}){
    const list=[];for(let current=first;current;current=current.getNextBlock()){
      if(++state.count>150||depth>8)throw new Error('Màxim 150 ordres i 8 nivells.');
      const base={id:current.id,type:current.type.slice(3),power:30,left:10,right:10,seconds:1,count:3,sensor:'infrared',compare:'>',threshold:50,value:'',pattern:faces.blank.slice(),body:[],then:[],else:[]};
      const param=(name,key)=>{const target=current.getInputTargetBlock(name),expr=target?cleanExpression(readExpression(target)):{kind:'number',value:0};if(expr.kind==='number')base[key]=expr.value;else{base.bindings||={};base.bindings[key]=expr;}};
      let data={};try{data=JSON.parse(current.data||'{}');}catch(_){}
      switch(current.type){
        case 'cr_forward':case 'cr_back':case 'cr_left':case 'cr_right':case 'cr_drive':param('POWER','power');if(base.type!=='drive')param('SECONDS','seconds');break;
        case 'cr_tracks':param('LEFT','left');param('RIGHT','right');break;
        case 'cr_stop':break;
        case 'cr_face':base.value=current.getFieldValue('PATTERN')?'custom':data.value||'custom';base.pattern=storedPattern(current,data);break;
        case 'cr_show':{const value=current.getInputTargetBlock('VALUE'),expr=value?cleanExpression(readExpression(value)):{kind:'string',value:''};if(expr.kind==='sensor'){base.type='reading';base.sensor=expr.name;}else{base.type='text';if(expr.kind==='string')base.value=expr.value;else base.expression=expr;}break;}
        case 'cr_rgb':base.type='rgb';base.value=current.getInputTargetBlock('COLOUR')?.getFieldValue('COLOUR')||'#22c55e';break;
        case 'control_wait':base.type='wait';param('DURATION','seconds');break;
        case 'control_repeat':base.type='repeat';param('TIMES','count');break;
        case 'control_forever':base.type='forever';break;
        case 'control_if_else':case 'control_repeat_until':case 'control_wait_until':{
          base.type={control_if_else:'if',control_repeat_until:'until',control_wait_until:'waitUntil'}[current.type];
          let expr=cleanExpression(readExpression(current.getInputTargetBlock('CONDITION')));
          if(data.legacyWhile&&expr.kind==='not'){base.type='while';expr=expr.value;}
          base.condition=expr;Object.assign(base,flatCondition(expr));break;
        }
        default:throw new Error('Aquest bloc no està implementat en el simulador.');
      }
      if(base.type==='if'){base.then=readList(current.getInputTargetBlock('SUBSTACK'),depth+1,state);base.else=readList(current.getInputTargetBlock('SUBSTACK2'),depth+1,state);}
      if(['repeat','forever','until','while'].includes(base.type))base.body=readList(current.getInputTargetBlock('SUBSTACK'),depth+1,state);
      list.push(base);
    }return list;
  }
  function validPattern(pattern){return Array.isArray(pattern)&&pattern.length===8&&pattern.every(row=>typeof row==='string'&&/^[01]{16}$/.test(row));}
  function validateXml(text){
    if(typeof text!=='string'||text.length>500000)throw new Error('Editor desat massa gran.');
    const dom=B.Xml.textToDom(text);const nodes=dom.querySelectorAll('block,shadow');if(nodes.length>900)throw new Error('Massa peces.');
    for(const node of nodes)if(!allowed.has(node.getAttribute('type')))throw new Error('El projecte conté una peça desconeguda.');
    return dom;
  }
  function updateThresholdXml(text,threshold){
    const dom=validateXml(text);
    const value=(node,name)=>Array.from(node.children).find(child=>child.tagName.toLowerCase()==='value'&&child.getAttribute('name')===name);
    const piece=node=>node&&Array.from(node.children).find(child=>['block','shadow'].includes(child.tagName.toLowerCase()));
    for(const node of dom.querySelectorAll('block'))if(['operator_lt','operator_gt','operator_equals'].includes(node.getAttribute('type'))){
      const left=piece(value(node,'OPERAND1')),right=piece(value(node,'OPERAND2'));
      const numeric=left?.getAttribute('type')==='cr_sensor_gray'?right:right?.getAttribute('type')==='cr_sensor_gray'?left:null;
      if(numeric&&numeric.getAttribute('type')?.startsWith('math_')){const field=numeric.querySelector('field[name="NUM"]');if(field)field.textContent=String(threshold);}
    }
    return B.Xml.domToText(dom);
  }
  function create({element,onChange,onDraft,onError}){
    element.replaceChildren();element.classList.add('cr-native-workspace');element.setAttribute('aria-label','Editor de blocs Codey. Arrossega les peces de la paleta i encaixa-les al programa.');
    const workspace=B.inject(element,{media,toolbox:toolbox(),scrollbars:true,trashcan:true,sounds:false,zoom:{controls:true,wheel:true,startScale:.8,maxScale:1.5,minScale:.4,scaleSpeed:1.15},grid:{spacing:24,length:1,colour:'#d9d9df',snap:false}});
    const flyout=workspace.getFlyout(),toolboxMenu=workspace.getToolbox();
    const expandedWidth=toolboxMenu.width;
    toolboxMenu.getWidth=()=>flyout.isVisible()?expandedWidth:expandedWidth-flyout.getWidth();
    const setVisible=flyout.setVisible.bind(flyout);
    flyout.setVisible=visible=>{setVisible(visible);requestAnimationFrame(()=>{resize();const metrics=workspace.getMetrics();workspace.translate(workspace.scrollX+metrics.absoluteLeft,workspace.scrollY+metrics.absoluteTop);});};
    let eventKey='start',busy=false,timer=null,hat=null,lastXml='',lastActive=null;
    function resize(){if(element.offsetWidth&&element.offsetHeight)B.svgResize(workspace);}
    const observer=new ResizeObserver(()=>requestAnimationFrame(resize));observer.observe(element);
    function serialise(){return B.Xml.domToText(B.Xml.workspaceToDom(workspace));}
    function flush(){
      clearTimeout(timer);timer=null;if(busy||!hat||workspace.isDragging())return;
      try{const xml=serialise();onDraft(xml,eventKey);const list=readList(hat.getNextBlock());if(xml!==lastXml){lastXml=xml;onChange(list,eventKey,xml);}return true;}catch(error){onError(error.message);return false;}
    }
    function installImages(){for(const block of workspace.getAllBlocks(false))if(block.type==='cr_face'&&!block.isInsertionMarker()){
      let data={};try{data=JSON.parse(block.data||'{}');}catch(_){}
      const pattern=storedPattern(block,data);
      const field=block.getField('IMAGE');field.setValue(image(pattern));
      if(field.imageElement_&&!field.imageElement_.dataset.editorBound){field.imageElement_.dataset.editorBound='true';field.imageElement_.style.cursor='pointer';field.imageElement_.addEventListener('mousedown',e=>{e.stopPropagation();});field.imageElement_.addEventListener('click',e=>{e.stopPropagation();openMatrix(block,pattern);});}
    }}
    function openMatrix(block){
      let data={};try{data=JSON.parse(block.data||'{}');}catch(_){}
      let pattern=storedPattern(block,data).map(row=>[...row]);
      const dialog=document.createElement('dialog');dialog.className='cr-native-matrix';dialog.innerHTML='<form method="dialog"><h2>Imatge de Codey · 16 × 8</h2><div class="cr-native-presets"></div><div class="cr-native-pixels" role="group" aria-label="Imatge LED"></div><div class="cr-native-dialog-actions"><button value="cancel">Cancel·la</button><button value="save">Aplica</button></div></form>';
      const grid=dialog.querySelector('.cr-native-pixels');function paint(){grid.replaceChildren();for(let y=0;y<8;y++)for(let x=0;x<16;x++){const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Punt ${x+1}, ${y+1}`);b.setAttribute('aria-pressed',String(pattern[y][x]==='1'));b.onclick=()=>{pattern[y][x]=pattern[y][x]==='1'?'0':'1';b.setAttribute('aria-pressed',String(pattern[y][x]==='1'));};grid.append(b);}}
      for(const [key,label] of [['happy','Feliç'],['sad','Trista'],['surprise','Sorpresa'],['blank','Buida']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=()=>{pattern=faces[key].map(row=>[...row]);paint();};dialog.querySelector('.cr-native-presets').append(b);}
      dialog.addEventListener('close',()=>{if(dialog.returnValue==='save'){block.setFieldValue(pattern.map(row=>row.join('')).join(''),'PATTERN');installImages();flush();}dialog.remove();});document.body.append(dialog);paint();dialog.showModal();
    }
    workspace.getCanvas().addEventListener('pointerdown',()=>workspace.getFlyout().setVisible(false));
    element.addEventListener('mouseup',()=>setTimeout(flush,0));
    workspace.addChangeListener(event=>{if(busy)return;installImages();if(event.type===B.Events.CREATE)workspace.getFlyout().setVisible(false);clearTimeout(timer);timer=setTimeout(flush,80);});
    return {workspace,flush,resize,validateXml,
      setProgram(list,key,xml){
        busy=true;clearTimeout(timer);eventKey=key;lastActive=null;
        try{workspace.clear();detached=[];const chain=listXml(list);const loose=detached.map((text,index)=>text.replace('<block ',`<block x="24" y="${450+index*150}" `)).join('');const dom=xml?validateXml(xml):B.Xml.textToDom(`<xml><block type="${key==='start'?'cr_start':'cr_button'}" id="cr-hat-${key}" x="24" y="24">${key==='start'?'':field('BUTTON',key)}${list.length?'<next>'+chain+'</next>':''}</block>${loose}</xml>`);B.Xml.domToWorkspace(dom,workspace);hat=workspace.getAllBlocks(false).find(b=>b.type===(key==='start'?'cr_start':'cr_button'));if(!hat)throw new Error('Falta la peça d’inici.');hat.setDeletable(false);hat.setEditable(false);workspace.getToolbox()?.clearSelection();workspace.getFlyout().setVisible(false);installImages();lastXml=serialise();onChange(readList(hat.getNextBlock()),eventKey,lastXml);}catch(error){onError(error.message);}finally{busy=false;}requestAnimationFrame(()=>{resize();const metrics=workspace.getMetrics();workspace.scrollbar.set(-metrics.contentLeft,-metrics.contentTop);});
      },
      highlight(id){if(lastActive!==id){if(lastActive&&workspace.getBlockById(lastActive))workspace.glowBlock(lastActive,false);if(id&&workspace.getBlockById(id))workspace.glowBlock(id,true);lastActive=id;}},
      dispose(){observer.disconnect();workspace.dispose();}
    };
  }
  window.CodeyNativeBlocks={create,validateXml,updateThresholdXml};
})();
