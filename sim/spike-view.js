import {Scene,Color,AmbientLight,DirectionalLight,OrthographicCamera,OrbitControls,
  WebGLRenderer,Spherical,Vector3} from './vendor/three/viewer-r177.js?v=2';
import {createMechanism} from './spike-models.js';
import {loadWheelModel} from './wheel-view.js?v=8';

export function createSpikeView(original){
  const canvas=original.cloneNode(false);
  const context=canvas.getContext('webgl2',{antialias:true})
    ||canvas.getContext('webgl2',{antialias:false});
  if(!context)return null;
  const scene=new Scene();
  scene.background=new Color(0xebf5fd);
  const light=new DirectionalLight(0xffffff,2);
  light.position.set(-150,320,240);
  scene.add(light,new AmbientLight(0xffffff,1.8));
  const renderer=new WebGLRenderer({canvas,context});
  renderer.setSize(original.width,original.height,false);
  const camera=new OrthographicCamera(-1,1,1,-1,1,1500);
  const orbit=new OrbitControls(camera,canvas);
  orbit.minZoom=.65;
  orbit.maxZoom=2.8;
  orbit.maxPolarAngle=Math.PI*.49;
  let active;
  function frameModel(){
    if(!active)return;
    const inverse=camera.quaternion.clone().invert();
    const aspect=canvas.width/canvas.height;
    const horizontal=new Vector3(1,0,0).applyQuaternion(camera.quaternion);
    const vertical=new Vector3(0,1,0).applyQuaternion(camera.quaternion);
    const horizontalSweep=Math.hypot(horizontal.x,horizontal.y);
    const verticalSweep=Math.hypot(vertical.x,vertical.y);
    let extent=0;
    const point=new Vector3();
    for(const bound of active.bounds){
      point.copy(bound.center).sub(active.target).applyQuaternion(inverse);
      const width=Math.abs(point.x)+bound.radius*horizontalSweep;
      const height=Math.abs(point.y)+bound.radius*verticalSweep;
      extent=Math.max(extent,height,width/aspect);
    }
    camera.top=extent*1.09;
    camera.bottom=-camera.top;
    camera.right=camera.top*aspect;
    camera.left=-camera.right;
    camera.updateProjectionMatrix();
  }
  let dirty=true;
  orbit.addEventListener('change',()=>{frameModel();dirty=true;});
  function rotate(yaw,pitch){
    const offset=camera.position.clone().sub(orbit.target);
    const spherical=new Spherical().setFromVector3(offset);
    spherical.theta+=yaw;
    spherical.phi+=pitch;
    spherical.makeSafe();
    camera.position.copy(orbit.target).add(offset.setFromSpherical(spherical));
    orbit.update();
  }
  canvas.addEventListener('keydown',event=>{
    const turns={ArrowLeft:[-.25,0],ArrowRight:[.25,0],ArrowUp:[0,-.15],ArrowDown:[0,.15]};
    if(turns[event.key]){event.preventDefault();rotate(...turns[event.key]);}
  });
  return {
    canvas,
    load(project){return project==='wheel'?loadWheelModel():createMechanism(project);},
    command(button){
      if(button.dataset.viewTurn)rotate(Number(button.dataset.viewTurn)*Math.PI/4,0);
      if(button.hasAttribute('data-view-top'))rotate(0,-orbit.getPolarAngle()+.02);
      if(button.dataset.viewZoom){
        camera.zoom=Math.max(orbit.minZoom,Math.min(orbit.maxZoom,camera.zoom*1.2**Number(button.dataset.viewZoom)));
        camera.updateProjectionMatrix();
        dirty=true;
      }
      if(button.hasAttribute('data-view-reset'))orbit.reset();
    },
    draw(projectView,engine,partColor){
      if(active!==projectView){
        if(active)scene.remove(active.model);
        active=projectView;
        scene.add(active.model);
        canvas.dataset.spikeViewProject=engine.project||'bench';
        orbit.target.copy(active.target);
        camera.position.copy(active.target).add(new Vector3(230,engine.project==='wheel'?67:245,504));
        camera.zoom=1;
        orbit.update();
        frameModel();
        orbit.saveState();
        dirty=true;
      }
      if(active.update(engine,partColor))dirty=true;
      if(dirty){renderer.render(scene,camera);dirty=false;}
    },
  };
}
