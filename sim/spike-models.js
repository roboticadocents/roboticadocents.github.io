import {BoxGeometry,CylinderGeometry,Mesh,MeshStandardMaterial,Group,Vector3,CanvasTexture,Sprite,SpriteMaterial} from "./vendor/three/viewer-r177.js?v=2";

function drawMechanism({box,round,tag},engine,partColor){
  const {project,environment,angle,travel,delivery}=engine;
  const navy='#243649',cyan='#28b8d6',blue='#2478c7',yellow='#fac72e',pink='#d92480';
  const light='#f7fafc',gray='#94a8be';
  const rotate=(x,y,angle)=>aroundVertical(x,y,radians(angle));
  function hub(x,y,z){
    box(x,y,z,73,58,22,yellow);
    box(x+1,y+1,z+22,71,56,6,light);
    box(x+44,y+13,z+28,22,25,.6,navy);
    for(let row=0;row<5;row++)for(let column=0;column<5;column++){
      if(engine.pixels[row*5+column]>0)box(x+46+column*4,y+15+row*4,z+29,2,2,.7,'#f8f0dd');
    }
    round(x+21,y+23,z+28,7,1.4,'z',engine.hubColor==='none'?'#b3c4d2':{
      red:'#ef4444',green:'#22c55e',yellow,blue:'#2563eb',magenta:pink,
    }[engine.hubColor]||'#b3c4d2');
  }
  function motor(x,y,z,transform=identity){
    box(x,y,z,45,41,27,light,transform);
    box(x,y,z+21,45,41,11,cyan,transform);
    round(x+22.5,y+20.5,z+32,12,3,'z',blue,transform);
    round(x+22.5,y+20.5,z+35,5,5,'z',navy,transform);
  }
  function beam(x,y,z,length,color,transform=identity){
    box(x,y-6,z,length,12,8,color,transform);
    for(let offset=7;offset<length-4;offset+=12){
      round(x+offset,y,z+8,3.2,.24,'z',navy,transform);
    }
  }
  function link(x,y,endX,endY,z,color){
    const length=Math.hypot(endX-x,endY-y);
    beam(0,0,z,length,color,aroundVertical(x,y,Math.atan2(endY-y,endX-x)));
  }
  function tray(x,y,z,color){
    box(x,y,z,55,43,5,color);
    box(x,y,z+5,55,4,7,color);
    box(x,y+39,z+5,55,4,7,color);
    box(x,y+4,z+5,4,35,7,color);
    box(x+51,y+4,z+5,4,35,7,color);
  }
  if(project==='dial'){
    box(115,38,0,210,146,9,yellow);
    for(const y of [47,174])beam(121,y,9,197,cyan);
    hub(126,103,9);
    motor(201,92,9);
    const pivot=[224,113],dialZ=50;
    round(...pivot,44,61,3,'z',light);
    for(let tick=0;tick<=6;tick++){
      const a=radians(tick*10),x=pivot[0]+48*Math.sin(a),y=pivot[1]-48*Math.cos(a);
      const color=({0:'#15803d',3:blue,6:'#b45309'})[tick]||gray;
      round(x,y,dialZ,({0:4,3:4,6:4})[tick]||2,2,'z',color);
    }
    const pointer=rotate(...pivot,angle);
    beam(-3,-3,dialZ+3,50,blue,([x,y,z])=>pointer([y,-x,z]));
    round(...pivot,dialZ+11,9,5,'z',navy);
  }else if(project==='claw'){
    hub(172,34,0);
    box(151,78,0,137,47,9,pink);
    beam(153,89,9,133,cyan);
    motor(195,79,9);
    const turn=Math.min(65,angle)*.39;
    const joints=[[182,116],[257,116]];
    const jaws=[rotate(...joints[0],32-turn),rotate(...joints[1],-32+turn)];
    const drive=rotate(217.5,99.5,angle);
    const [pinX,pinY]=drive([9,0,0]);
    round(pinX,pinY,45,3.5,4,'z',pink);
    for(const [index,jaw] of jaws.entries()){
      const [x,y]=jaw([0,13,0]);
      link(pinX,pinY,x,y,40,index===0?yellow:blue);
    }
    for(const [index,jaw] of jaws.entries()){
      round(0,0,12,10,12,'z',navy,jaw);
      beam(0,0,23,57,cyan,([x,y,z])=>jaw([y,x,z]));
      round(index===0?6:-6,51,13,12,14,'z',navy,jaw);
      round(index===0?6:-6,51,27,8,2,'z',pink,jaw);
    }
    if(environment.present)box(204,160,3,33,24,20,yellow);
  }else if(project==='cart'){
    const x=23+travel*1.48;
    const body=point=>[point[0]+x,point[1]+80,point[2]];
    box(0,0,10,88,64,10,pink,body);
    beam(2,7,20,82,cyan,body);
    beam(2,57,20,82,cyan,body);
    motor(16,12,20,body);
    // Dos rodes de tracció, amb una marca solidària amb cada eix.
    for(const [port,y] of [['E',-2],['A',58]]){
      round(27,y,15,16,8,'y',navy,body);
      round(27,y+8.1,15,9,1.4,'y',gray,body);
      const a=radians(engine.motorAt(port)?.angle??0);
      round(27+6*Math.cos(a),y+9.7,15+6*Math.sin(a),2.2,1,'y',yellow,body);
    }
    round(69,29,8,8,7,'y',navy,body);
    box(65,12,23,18,40,19,yellow,body);
    box(83,18,10,9,32,19,light,body);
    for(const y of [25,42])round(92,y,20,5,2,'x',navy,body);
    if(environment.present){
      const target=115+environment.distance*1.48;
      box(target,73,0,15,76,9,cyan);
      box(target+4,75,9,11,5,37,blue);box(target+4,142,9,11,5,37,blue);
      box(target+4,75,42,11,72,8,blue);
    }
    if(environment.present){
      const clearance=engine.distance();
      tag(115+(environment.distance+travel)*.74,116,0,Math.round(clearance)+' cm','#155e75');
    }
  }else if(project==='sorter'){
    box(88,49,0,260,118,10,pink);
    for(const y of [56,160])beam(94,y,10,244,cyan);
    tray(94,97,10,'#edb72c');tray(287,97,10,'#e255a2');
    const pivot=rotate(222,132,-angle);
    box(199,110,10,46,43,19,navy);
    round(222,132,29,19,11,'z',gray);
    motor(-22,-18,40,pivot);
    box(216,54,10,13,15,61,cyan);
    box(203,49,65,37,23,18,light);
    round(223,72,74,7,3,'y',navy);
    const lift=(engine.motorAt('F')?.angle??0)/235;
    const tilt=.15+Math.min(1,lift)*.5;
    const arm=([x,y,z])=>pivot([x,y*Math.cos(tilt)+z*Math.sin(tilt),66-y*Math.sin(tilt)+z*Math.cos(tilt)]);
    beam(0,0,0,66,cyan,([x,y,z])=>arm([y,-x,z]));
    box(-13,-67,-8,26,15,12,blue,arm);
    if(delivery)box(delivery==='yellow'?107:301,109,17,24,20,16,delivery==='yellow'?yellow:pink);
    else if(environment.color!=='none')box(-12,-71,-22,24,22,17,partColor,arm);
    tag(120,177,2,'Groc','#854d0e');tag(314,177,2,'Rosa','#9d174d');
  }else{
    hub(68,122,0);
    motor(139,53,0);
    beam(-3,-3,40,54,blue,([x,y,z])=>rotate(161,73,angle)([y,-x,z]));
    box(198,59,0,28,45,23,light);
    for(const y of [70,92])round(226,y,12,7,3,'x',navy);
    if(environment.present)box(237+environment.distance*.82,64,0,31,35,34,'#84b3e2');
  }
}


const identity=point=>point;
const radians=angle=>angle*Math.PI/180;

function aroundVertical(x,y,angle){
  const cos=Math.cos(angle),sin=Math.sin(angle);
  return ([u,v,z])=>[x+u*cos-v*sin,y+u*sin+v*cos,z];
}

const geometries={box:new BoxGeometry(),cylinder:new CylinderGeometry(1,1,1,20)};
const materials=new Map();
function material(color){
  if(!materials.has(color))materials.set(color,new MeshStandardMaterial({color}));
  return materials.get(color);
}

export function createMechanism(project){
  const model=new Group();
  const width=project==='cart'||!project?456:324;
  const origin=width===456?228:224;
  const target=new Vector3(0,project==='sorter'?40:25,0);
  const world=([x,y,z])=>new Vector3(x-origin,z,108-y);
  const bounds=[];
  for(const x of [origin-width/2,origin+width/2])for(const y of [0,216])for(const z of [0,108]){
    bounds.push({center:world([x,y,z]),radius:0});
  }
  const meshes=[];
  const labels=[];
  let usedMeshes=0,usedLabels=0,lastState;
  function place(kind,color,transform,center,axes){
    let mesh=meshes[usedMeshes++];
    if(!mesh){
      mesh=new Mesh();
      mesh.matrixAutoUpdate=false;
      meshes.push(mesh);
      model.add(mesh);
    }
    const position=world(transform(center));
    const basis=axes.map(axis=>world(transform(center.map((value,index)=>value+axis[index]))).sub(position));
    mesh.matrix.makeBasis(...basis).setPosition(position);
    mesh.matrixWorldNeedsUpdate=true;
    mesh.geometry=geometries[kind];
    mesh.material=material(color);
    mesh.visible=true;
  }
  function box(x,y,z,w,d,h,color,transform=identity){
    place('box',color,transform,[x+w/2,y+d/2,z+h/2],[[w,0,0],[0,d,0],[0,0,h]]);
  }
  function round(x,y,z,r,length,axis,color,transform=identity){
    const center=[x,y,z];
    const index='xyz'.indexOf(axis);
    center[index]+=length/2;
    const basis=axis==='x'?[[0,r,0],[length,0,0],[0,0,-r]]:
      axis==='y'?[[r,0,0],[0,length,0],[0,0,r]]:[[r,0,0],[0,0,length],[0,-r,0]];
    place('cylinder',color,transform,center,basis);
  }
  function tag(x,y,z,text,color){
    let label=labels[usedLabels++];
    if(!label){
      const canvas=document.createElement('canvas');
      canvas.width=256;
      canvas.height=64;
      const texture=new CanvasTexture(canvas);
      const sprite=new Sprite(new SpriteMaterial({map:texture,transparent:true,depthTest:false}));
      sprite.scale.set(62,15.5,1);
      model.add(sprite);
      label={sprite,canvas,texture};
      labels.push(label);
    }
    if(label.text!==text||label.color!==color){
      const ctx=label.canvas.getContext('2d');
      ctx.fillStyle='#ffffff';
      ctx.fillRect(0,0,256,64);
      ctx.font='600 38px sans-serif';
      ctx.fillStyle=color;
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      ctx.fillText(text,128,32);
      label.texture.needsUpdate=true;
      label.text=text;
      label.color=color;
    }
    label.sprite.position.copy(world([x,y,z+10]));
    label.sprite.visible=true;
  }
  return {
    model,target,bounds,
    update(engine,partColor){
      const {environment}=engine;
      const state=[engine.angle,engine.travel,engine.delivery,engine.motorAt('E')?.angle,engine.motorAt('F')?.angle,
        engine.hubColor,...engine.pixels,environment.present,environment.distance,environment.color].join('/');
      if(state===lastState)return false;
      lastState=state;
      usedMeshes=usedLabels=0;
      box(origin-width/2,0,-3,width,216,3,'#dbe7f3');
      if(project==='cart'){
        box(18,67,0,419,89,1,'#aabed4');
        for(let x=22;x<430;x+=20)box(x,110,1,11,2,.2,'#f7fafc');
      }
      drawMechanism({box,round,tag},engine,partColor);
      for(let i=usedMeshes;i<meshes.length;i++)meshes[i].visible=false;
      for(let i=usedLabels;i<labels.length;i++)labels[i].sprite.visible=false;
      return true;
    },
  };
}
