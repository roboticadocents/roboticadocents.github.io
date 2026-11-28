import {LDrawLoader,LDrawConditionalLineMaterial,Vector3} from './vendor/three/viewer-r177.js?v=3';

export async function loadWheelModel(){
  const loader=new LDrawLoader();
  loader.setConditionalLineMaterial(LDrawConditionalLineMaterial);
  await loader.preloadMaterials(new URL('./models/sinia-colors.ldr?v=3',import.meta.url).href);
  const model=await loader.loadAsync(new URL('./models/sinia-spike.mpd?v=6',import.meta.url).href);
  const disc=model.getObjectByName('disc.ldr');
  const cabins=Array.from({length:6},(_,i)=>model.getObjectByName('cabina-'+(i+1)+'.ldr'));
  const offsets=cabins.map(cabin=>cabin.position.clone().sub(disc.position));
  // LDraw measures height downwards. Reflect Y to keep the numbered cabins in front view order.
  model.scale.y=-1;
  // Bound the fixed parts and the full circular path of each cabin.
  model.updateMatrixWorld(true);
  const bounds=[];
  model.traverse(part=>{
    if(!part.geometry)return;
    let parent=part.parent;
    while(parent&&parent!==model&&!cabins.includes(parent))parent=parent.parent;
    const offset=offsets[cabins.indexOf(parent)];
    part.geometry.computeBoundingBox();
    const {min,max}=part.geometry.boundingBox;
    for(const x of [min.x,max.x])for(const y of [min.y,max.y])for(const z of [min.z,max.z]){
      const center=new Vector3(x,y,z).applyMatrix4(part.matrixWorld);
      if(offset){center.x-=offset.x;center.y+=offset.y;}
      bounds.push({center,radius:offset?Math.hypot(offset.x,offset.y):0});
    }
  });
  const axis=new Vector3(0,0,1);
  let lastAngle;
  return {
    model,bounds,target:new Vector3(0,162,-14),
    update(engine){
      const angle=engine.wheelAngle;
      if(angle===lastAngle)return false;
      disc.rotation.z=angle*Math.PI/180;
      cabins.forEach((cabin,i)=>cabin.position.copy(offsets[i]).applyAxisAngle(axis,disc.rotation.z).add(disc.position));
      lastAngle=angle;
      return true;
    },
  };
}
