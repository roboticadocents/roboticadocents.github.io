import {LDrawLoader,LDrawConditionalLineMaterial,Vector3,Group,Mesh,BoxGeometry,PlaneGeometry,
  MeshBasicMaterial,CanvasTexture,SRGBColorSpace} from './vendor/three/viewer-r177.js?v=3';

const asset=name=>new URL('./models/'+name,import.meta.url).href;
let packedModels;
const rotation=angle=>angle*Math.PI/180;
const projectPieces={cart:'cart-destination',sorter:'palet'};

function floor(width,depth){
  const platform=new Mesh(new BoxGeometry(width,2,depth),new MeshBasicMaterial({color:'#e0ebf5'}));
  platform.position.y=1;
  return platform;
}

function hubDisplay(hub){
  const canvas=document.createElement('canvas');
  canvas.width=canvas.height=96;
  const ctx=canvas.getContext('2d');
  const texture=new CanvasTexture(canvas);
  texture.colorSpace=SRGBColorSpace;
  const panel=new Mesh(new PlaneGeometry(15,15),new MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}));
  panel.rotation.x=Math.PI/2;
  panel.position.set(0,-32.15,-32);
  hub.add(panel);
  const light=new Mesh(new PlaneGeometry(5,5),new MeshBasicMaterial({transparent:true,opacity:.85}));
  light.rotation.x=Math.PI/2;
  light.position.set(16,-32.15,32);
  hub.add(light);
  const colors={red:'#ef4444',green:'#22c55e',yellow:'#facc15',blue:'#2563eb',magenta:'#d946ef'};
  return engine=>{
    ctx.clearRect(0,0,96,96);
    for(let index=0;index<25;index++){
      const intensity=engine.pixels[index];
      if(!intensity)continue;
      ctx.fillStyle='rgba(255,123,53,'+(intensity/100)+')';
      ctx.beginPath();
      ctx.arc(10+index%5*19,10+Math.floor(index/5)*19,5,0,Math.PI*2);
      ctx.fill();
    }
    texture.needsUpdate=true;
    light.visible=Boolean(colors[engine.hubColor]);
    if(light.visible)light.material.color.set(colors[engine.hubColor]);
  };
}

export async function loadMechanism(project){
  const name=project||'bench';
  packedModels??=fetch(asset('spike-muntatges.mpd?v=2')).then(response=>{
    if(!response.ok)throw new Error('No s’ha pogut llegir l’arxiu LDraw');
    return response.text();
  }).catch(error=>{packedModels=undefined;throw error;});
  const loader=new LDrawLoader();
  loader.smoothNormals=false;
  loader.setConditionalLineMaterial(LDrawConditionalLineMaterial);
  const [packed]=await Promise.all([packedModels,loader.preloadMaterials(asset('spike-colors.ldr?v=1'))]);
  const ref=name=>'1 16 0 0 0 1 0 0 0 1 0 0 0 1 '+name+'.ldr\n';
  const source='0 FILE escena.ldr\n'+ref(name)+(projectPieces[name]?ref(projectPieces[name]):'')+packed;
  const model=await new Promise((resolve,reject)=>loader.parse(source,resolve,reject));
  const part=name=>{
    const node=model.getObjectByName(name+'.ldr');
    if(!node)throw new Error('Falta el grup LDraw '+name);
    return node;
  };
  const platform=part(name);
  let update;
  switch(name){
    case 'dial':{
      const needle=part('dial-needle');
      update=engine=>{needle.rotation.y=rotation(-engine.angle);};
      break;
    }
    case 'claw':{
      const left=part('jaw-left'),right=part('jaw-right'),piece=part('claw-object');
      update=engine=>{
        const opening=rotation(32-Math.min(65,engine.angle)*.39);
        left.rotation.y=-opening;
        right.rotation.y=opening;
        piece.visible=engine.environment.present;
      };
      break;
    }
    case 'cart':{
      const left=part('cart-wheel-e'),right=part('cart-wheel-a'),destination=part('cart-destination');
      update=engine=>{
        platform.position.x=-166+engine.travel*1.48;
        left.rotation.z=rotation(engine.motorAt('E')?.angle??0);
        right.rotation.z=rotation(engine.motorAt('A')?.angle??0);
        destination.position.x=-75+engine.environment.distance*1.48;
        destination.visible=engine.environment.present;
      };
      break;
    }
    case 'sorter':{
      const pivot=part('sorter-turntable'),arm=part('sorter-arm'),piece=part('palet');
      const yellow=part('tray-yellow'),pink=part('tray-pink');
      const materials=[];
      piece.traverse(node=>{
        if(!node.isMesh)return;
        const originals=Array.isArray(node.material)?node.material:[node.material];
        const copies=originals.map(material=>material.clone());
        node.material=Array.isArray(node.material)?copies:copies[0];
        materials.push(...copies);
      });
      const grip=new Vector3(0,10,-61);
      update=(engine,color)=>{
        const lift=(engine.motorAt('F')?.angle??0)/235;
        pivot.rotation.y=rotation(engine.angle);
        arm.rotation.x=.15+Math.min(1,lift)*.5;
        piece.visible=Boolean(engine.delivery||engine.environment.color!=='none');
        if(!piece.visible)return;
        if(engine.delivery){
          const tray=engine.delivery==='yellow'?yellow:pink;
          piece.position.copy(tray.position).add(new Vector3(0,-14,0));
        }else{
          model.updateMatrixWorld(true);
          piece.position.copy(model.worldToLocal(arm.localToWorld(grip.clone())));
        }
        const tone=engine.delivery==='yellow'?'#facc15':engine.delivery==='magenta'?'#ec4899':color;
        for(const material of materials)material.color.set(tone);
      };
      break;
    }
    default:{
      const rotor=part('bench-rotor'),object=part('bench-object');
      update=engine=>{
        rotor.rotation.y=rotation(-engine.angle);
        object.position.x=139+engine.environment.distance*.82;
        object.visible=engine.environment.present;
      };
    }
  }

  const display=hubDisplay(part('hub'));
  const wide=name==='cart'||name==='bench';
  const bounds=[];
  const minX=name==='bench'?-128:wide?-242:-112,maxX=name==='bench'?330:wide?260:112;
  const depth=wide?110:104;
  for(const x of [minX,maxX])for(const z of [-depth,depth])for(const y of [0,name==='sorter'?110:80]){
    bounds.push({center:new Vector3(x,y,z),radius:0});
  }
  const ground=floor(maxX-minX,depth*2);
  ground.position.x=(maxX+minX)/2;
  model.add(ground);
  if(name==='cart'){
    const road=new Mesh(new BoxGeometry(maxX-minX,1,114),new MeshBasicMaterial({color:'#aabed4'}));
    road.position.set(ground.position.x,.4,0);
    model.add(road);
  }
  // LDraw uses a downward Y axis. Keep the assembly and all its moving groups in that system.
  const sceneModel=new Group();
  model.rotation.x=Math.PI;
  sceneModel.add(model);
  let lastFrame,lastLights;
  return {
    model:sceneModel,bounds,target:new Vector3((maxX+minX)/2,name==='sorter'?37:25,0),
    update(engine,color){
      const {environment}=engine;
      const lights=[engine.hubColor,...engine.pixels].join('/');
      const frame=[engine.angle,engine.travel,engine.delivery,engine.motorAt('E')?.angle,
        engine.motorAt('F')?.angle,environment.present,environment.distance,environment.color,lights].join('/');
      if(frame===lastFrame)return false;
      lastFrame=frame;
      if(lights!==lastLights){
        display(engine);
        lastLights=lights;
      }
      update(engine,color);
      return true;
    },
  };
}
