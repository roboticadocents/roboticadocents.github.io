import {BoxGeometry,PlaneGeometry,CylinderGeometry,BufferGeometry,Float32BufferAttribute,Mesh,
  MeshStandardMaterial,MeshBasicMaterial,Group,Vector3,Plane,CanvasTexture,SRGBColorSpace} from './vendor/three/viewer-r177.js?v=3';

export function createCodeyModel({width,height,drawGround}){
  const model=new Group();
  const robot=new Group();
  const floorCanvas=document.createElement('canvas');
  floorCanvas.width=width;
  floorCanvas.height=height;
  const floorTexture=new CanvasTexture(floorCanvas);
  floorTexture.colorSpace=SRGBColorSpace;
  const floor=new Mesh(new PlaneGeometry(width,height),new MeshBasicMaterial({map:floorTexture}));
  floor.rotation.x=-Math.PI/2;
  model.add(floor,robot);

  function box(x,y,z,w,d,h,color){
    const piece=new Mesh(new BoxGeometry(w,h,d),new MeshStandardMaterial({color}));
    piece.position.set(x+w/2,z+h/2,y+d/2);
    robot.add(piece);
  }
  function roller(x,y,z,radius,length,axis,color){
    const piece=new Mesh(new CylinderGeometry(radius,radius,length,16),new MeshStandardMaterial({color}));
    if(axis==='x')piece.rotation.z=-Math.PI/2;
    else piece.rotation.x=Math.PI/2;
    piece.position.set(x+(axis==='x'?length/2:0),z,y+(axis==='z'?length/2:0));
    robot.add(piece);
    return piece;
  }
  for(const y of [-24,15]){
    box(-19,y,3,38,9,12,'#26384d');
    for(const x of [-18,18])roller(x,y,9,8.5,9,'z','#26384d');
    const outer=y<0?y-.65:y+9;
    box(-17,outer,5,34,.65,8,'#d6e0ea');
    for(const x of [-14,0,14])roller(x,outer-.1,9,3.1,.9,'z','#91a8bd');
  }
  box(-20,-17,9,40,34,12,'#d6e0e9');
  box(-14,-19,19,29,38,26,'#f8fafc');
  box(-11,-17,44,16,9,8,'#26384d');
  box(-11,8,44,16,9,8,'#26384d');
  for(const y of [-10,0,10])roller(15,y,22,2.25,1.4,'x','#91a8bd');
  const rgb=roller(15,13,42,1.6,1.4,'x','#000000');
  box(19,-7,9,8,14,7,'#243649');
  roller(27,0,12.5,3.2,.7,'x','#4aa4be');

  const display=document.createElement('canvas');
  display.width=160;
  display.height=80;
  const displayTexture=new CanvasTexture(display);
  displayTexture.colorSpace=SRGBColorSpace;
  const face=new Mesh(new PlaneGeometry(32,16),new MeshBasicMaterial({map:displayTexture}));
  face.position.set(15.2,33.5,0);
  face.rotation.y=Math.PI/2;
  robot.add(face);

  const beamGeometry=new BufferGeometry();
  beamGeometry.setAttribute('position',new Float32BufferAttribute([24,.25,0,224,.25,28,224,.25,-28],3));
  const beam=new Mesh(beamGeometry,new MeshBasicMaterial({color:'#38bdf8',opacity:.3,transparent:true,depthWrite:false,
    clippingPlanes:[new Plane(new Vector3(1,0,0),width/2),new Plane(new Vector3(-1,0,0),width/2),
      new Plane(new Vector3(0,0,1),height/2),new Plane(new Vector3(0,0,-1),height/2)]}));
  robot.add(beam);
  const marker=new Mesh(new CylinderGeometry(5,5,.5,20),new MeshBasicMaterial({color:'#0284c7'}));
  model.add(marker);
  const obstacleGeometry=new BoxGeometry();
  const obstacleMaterial=new MeshStandardMaterial({color:'#a8b7cc'});
  const obstacles=[];
  const bounds=[];
  for(const x of [-width/2-30,width/2+30])for(const z of [-height/2-30,height/2+30])for(const y of [0,54]){
    bounds.push({center:new Vector3(x,y,z),radius:0});
  }
  let lastRevision,lastLed,lastState;
  return {
    model,bounds,target:new Vector3(0,15,0),cameraOffset:new Vector3(460,510,650),
    update(engine,{pattern,revision}){
      const {environment,pose,output}=engine;
      if(revision!==lastRevision){
        lastRevision=revision;
        drawGround(floorCanvas.getContext('2d'));
        floorTexture.needsUpdate=true;
        environment.obstacles.forEach((obstacle,index)=>{
          let mesh=obstacles[index];
          if(!mesh){
            mesh=new Mesh(obstacleGeometry,obstacleMaterial);
            obstacles.push(mesh);
            model.add(mesh);
          }
          mesh.position.set(obstacle.x+obstacle.w/2-width/2,22.5,obstacle.y+obstacle.h/2-height/2);
          mesh.scale.set(obstacle.w,45,obstacle.h);
          mesh.visible=true;
        });
        for(let index=environment.obstacles.length;index<obstacles.length;index++)obstacles[index].visible=false;
      }
      const led=pattern.join('');
      if(led!==lastLed){
        const ctx=display.getContext('2d');
        ctx.fillStyle='#16243a';
        ctx.fillRect(0,0,160,80);
        ctx.fillStyle='#38bdf8';
        for(let row=0;row<8;row++)for(let column=0;column<16;column++){
          if(pattern[row][column]==='1')ctx.fillRect(column*10+2,row*10+2,6,6);
        }
        displayTexture.needsUpdate=true;
        lastLed=led;
      }
      const nearObstacle=environment.orientation==='front'&&engine.sensor('infrared')>60;
      const state=[revision,led,pose.x,pose.y,pose.angle,output.rgb,environment.orientation,nearObstacle].join('/');
      if(state===lastState)return false;
      lastState=state;
      robot.position.set(pose.x-width/2,0,pose.y-height/2);
      robot.rotation.y=-pose.angle*Math.PI/180;
      rgb.material.color.set(output.rgb);
      beam.visible=environment.orientation==='front';
      beam.material.color.set(nearObstacle?'#ef4444':'#38bdf8');
      marker.visible=!beam.visible;
      if(marker.visible){
        const point=engine.sensorPoint();
        marker.position.set(point.x-width/2,.25,point.y-height/2);
      }
      return true;
    },
  };
}
