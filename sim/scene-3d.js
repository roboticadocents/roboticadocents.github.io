(function(){
  'use strict';

  const faces=[
    {indices:[0,3,2,1],shade:.7},{indices:[4,5,6,7],shade:1},
    {indices:[0,1,5,4],shade:.85},{indices:[1,2,6,5],shade:.77},
    {indices:[2,3,7,6],shade:.9},{indices:[3,0,4,7],shade:.81},
  ];
  const radians=angle=>angle*Math.PI/180;
  const identity=point=>point;

  function projection(ctx,width,height,maxHeight,azimuth,{elevation=Math.asin(.56),zoom=1,studio=false}={}){
    const {width:canvasWidth,height:canvasHeight}=ctx.canvas;
    const diameter=Math.hypot(width,height);
    const rise=Math.sin(elevation),fall=Math.cos(elevation);
    const scale=zoom*Math.min((canvasWidth-50)/diameter,(canvasHeight-52)/(diameter*rise+maxHeight*fall));
    const cos=Math.cos(azimuth),sin=Math.sin(azimuth);
    const floorCenter=canvasHeight/2+maxHeight*fall*scale/2;
    const surfaces=[];
    function project([x,y,z=0]){
      x-=width/2;
      y-=height/2;
      const along=x*cos-y*sin,towards=x*sin+y*cos;
      return {x:canvasWidth/2+along*scale,y:floorCenter+(towards*rise-z*fall)*scale,depth:towards*fall+z*rise};
    }
    function ground(draw){
      const origin=project([0,0]),x=project([1,0]),y=project([0,1]);
      ctx.save();
      ctx.setTransform(x.x-origin.x,x.y-origin.y,y.x-origin.x,y.y-origin.y,origin.x,origin.y);
      ctx.fillStyle=studio?'#f0f5fb':'#ffffff';
      ctx.fillRect(0,0,width,height);
      ctx.strokeStyle=studio?'#bdcddd':'#94a3b8';
      ctx.lineWidth=1.5;
      ctx.strokeRect(0,0,width,height);
      if(draw){
        ctx.beginPath();
        ctx.rect(0,0,width,height);
        ctx.clip();
        draw(ctx);
      }
      ctx.restore();
    }
    function surface(vertices,color,shade=1,transform=identity,outline=true){
      const points=vertices.map(point=>project(transform(point)));
      const [a,b,c]=points;
      if((b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x)<=0)return;
      const depth=points.reduce((sum,p)=>sum+p.depth,0)/points.length;
      surfaces.push({points,shade,color,depth,outline});
    }
    function box(x,y,z,w,d,h,color,transform=identity){
      const vertices=[[x,y,z],[x+w,y,z],[x+w,y+d,z],[x,y+d,z],
        [x,y,z+h],[x+w,y,z+h],[x+w,y+d,z+h],[x,y+d,z+h]];
      for(const {indices,shade} of faces)surface(indices.map(i=>vertices[i]),color,shade,transform);

    }
    function paint(){
      surfaces.sort((a,b)=>a.depth-b.depth);
      for(const {points,shade,color,outline} of surfaces){
        ctx.beginPath();
        ctx.moveTo(points[0].x,points[0].y);
        for(const point of points.slice(1))ctx.lineTo(point.x,point.y);
        ctx.closePath();
        ctx.fillStyle=color;
        ctx.fill();
        if(shade<1){ctx.fillStyle='rgba(15,23,42,'+(1-shade)+')';ctx.fill();}
        if(outline){
          ctx.strokeStyle=studio?'rgba(30,41,59,.19)':'rgba(30,41,59,.28)';
          ctx.lineWidth=.65;
          ctx.stroke();
        }
      }
      surfaces.length=0;
    }
    const background=ctx.createLinearGradient(0,0,0,canvasHeight);
    background.addColorStop(0,studio?'#f8fbff':'#ebf5fd');
    background.addColorStop(1,studio?'#dce8f5':'#ebf5fd');
    ctx.fillStyle=background;
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    return {ground,box,surface,project,paint};
  }

  function aroundVertical(x,y,angle){
    const c=Math.cos(angle),s=Math.sin(angle);
    return ([u,v,z])=>[x+u*c-v*s,y+u*s+v*c,z];
  }

  function codey(ctx,azimuth,engine,{WIDTH,HEIGHT,COLORS},pattern,camera){
    const scene=projection(ctx,WIDTH,HEIGHT,58,azimuth,camera);
    const {environment,pose,output}=engine;
    const atRobot=aroundVertical(pose.x,pose.y,radians(pose.angle));
    scene.ground(floor=>{
      floor.beginPath();
      for(let x=50;x<WIDTH;x+=50){floor.moveTo(x,0);floor.lineTo(x,HEIGHT);}
      for(let y=50;y<HEIGHT;y+=50){floor.moveTo(0,y);floor.lineTo(WIDTH,y);}
      floor.strokeStyle='#e2e8f0';
      floor.lineWidth=1;
      floor.stroke();
      for(const patch of environment.patches){
        floor.fillStyle=COLORS[patch.color]||COLORS.white;
        floor.fillRect(patch.x,patch.y,patch.w,patch.h);
      }
      floor.lineCap='round';
      floor.lineJoin='round';
      for(const line of environment.lines){
        const first=line.points[0];
        if(!first)continue;
        floor.strokeStyle=floor.fillStyle=COLORS[line.color]||COLORS.black;
        floor.lineWidth=line.width;
        floor.beginPath();
        if(line.points.length===1){
          floor.arc(first.x,first.y,line.width/2,0,Math.PI*2);
          floor.fill();
        }else{
          floor.moveTo(first.x,first.y);
          for(const point of line.points.slice(1))floor.lineTo(point.x,point.y);
          floor.stroke();
        }
      }
      if(environment.orientation==='front'){
        const [x,y]=atRobot([24,0,0]),[x1,y1]=atRobot([224,-28,0]),[x2,y2]=atRobot([224,28,0]);
        floor.fillStyle=engine.sensor('infrared')>60?'#ef44444d':'#38bdf844';
        floor.beginPath();floor.moveTo(x,y);floor.lineTo(x1,y1);floor.lineTo(x2,y2);floor.fill();
      }else{
        const point=engine.sensorPoint();
        floor.fillStyle='#0284c7';
        floor.beginPath();floor.arc(point.x,point.y,5,0,Math.PI*2);floor.fill();
      }
    });
    for(const obstacle of environment.obstacles)scene.box(obstacle.x,obstacle.y,0,obstacle.w,obstacle.h,45,'#a8b7cc');
    const body=(...args)=>scene.box(...args,atRobot);
    const round=(...args)=>cylinder(scene.surface,...args,atRobot);
    for(const y of [-24,15]){
      body(-19,y,3,38,9,12,'#26384d');
      for(const x of [-18,18])round(x,y,9,8.5,9,'y','#26384d');
      const outer=y<0?y-.65:y+9;
      body(-17,outer,5,34,.65,8,'#d6e0ea');
      for(const x of [-14,0,14])round(x,outer-.1,9,3.1,.9,'y','#91a8bd');
    }
    body(-20,-17,9,40,34,12,'#d6e0e9');
    body(-14,-19,19,29,38,26,'#f8fafc');
    body(-11,-17,44,16,9,8,'#26384d');
    body(-11,8,44,16,9,8,'#26384d');
    body(15,-16,26,1.5,32,15,'#16243a');
    for(const y of [-10,0,10])round(15,y,22,2.25,1.4,'x','#91a8bd');
    round(15,13,42,1.6,1.4,'x',output.rgb);
    body(19,-7,9,8,14,7,'#243649');
    round(27,0,12.5,3.2,.7,'x','#4aa4be');

    // La cara forma part del mecanisme, i la pantalla gran continua disponible per llegir-la.
    if(pattern&&Math.sin(azimuth+radians(pose.angle))>.02){
      for(let row=0;row<8;row++)for(let column=0;column<16;column++){
        if(pattern[row][column]==='1')body(16.6,-14+column*1.75,39-row*1.5,.15,1,1,'#38bdf8');
      }
    }
    scene.paint();
  }

  function cylinder(surface,x,y,z,radius,length,axis,color,transform=identity){
    const ring=(position,i)=>{
      const a=i*Math.PI/8,u=radius*Math.cos(a),v=radius*Math.sin(a);
      if(axis==='y')return [x+u,y+position,z-v];
      if(axis==='x')return [x+position,y+u,z+v];
      return [x+u,y+v,z+position];
    };
    const ends=[0,length].map(position=>Array.from({length:16},(_,i)=>ring(position,i)));
    const [start,end]=ends;
    for(let i=0;i<16;i++){
      const next=(i+1)%16,shade=.74+.24*(.5+.5*Math.cos(i*Math.PI/8-.8));
      surface([start[i],start[next],end[next],end[i]],color,shade,transform,false);
    }
    surface([...start].reverse(),color,.82,transform,false);
    surface(end,color,1,transform,false);
  }

  function mount(root,key){
    const controls=root.querySelector('[data-sim-view-controls]');
    const preview=root.querySelector('[data-view-preview]');
    const canvas=preview.querySelector('[data-view-canvas]');
    const spikeWorkspace=key==='spike-prime';
    const ctx=spikeWorkspace?null:canvas.getContext('2d');
    if(!spikeWorkspace&&!ctx)return null;
    const camera=controls.querySelector('[data-view-camera]');
    const buttons=[...controls.querySelectorAll('[data-view]')];
    const note=root.querySelector('[data-view-note]');
    const storageKey='robotica-view-'+key;
    const initialAzimuth=27;
    let azimuth=initialAzimuth,pitch=32,zoom=1,drag=null;
    const zoomButtons=[...controls.querySelectorAll('[data-view-zoom]')];
    const status=root.querySelector('[data-spike-view-status]');
    const threeButton=buttons.find(button=>button.dataset.view==='3d');
    const projectViews=new Map();
    let viewerRequest,viewer,viewerError='';
    function requestProject(project){
      const projectView={};
      projectViews.set(project,projectView);
      if(!viewerRequest){
        viewerRequest=import('./spike-view.js?v=1').then(module=>{
          viewer=module.createSpikeView(canvas);
          if(!viewer){
            viewerError='El navegador no ha pogut iniciar WebGL 2. Pots continuar en 2D.';
            return;
          }
          viewer.canvas.addEventListener('webglcontextlost',()=>{
            viewerError='S’ha interromput la vista 3D. Pots continuar en 2D.';
          },{once:true});
        }).catch(error=>{
          viewerError='No s’ha pogut carregar el visor 3D. Pots continuar en 2D.';
          console.warn('Visor SPIKE 3D indisponible',error);
        });
      }
      viewerRequest.then(async()=>{
        if(viewer)projectView.model=await viewer.load(project);
      }).catch(error=>{
        projectView.error='No s’ha pogut carregar el model 3D. Pots continuar en 2D.';
        console.warn('Model SPIKE 3D indisponible',error);
      });
      return projectView;
    }
    function changeZoom(delta){
      zoom=Math.max(.8,Math.min(1.8,zoom+delta*.2));
      for(const button of zoomButtons)button.disabled=Number(button.dataset.viewZoom)>0?zoom>=1.8:zoom<=.8;
    }
    function adjust(horizontal,vertical){
      azimuth=(azimuth+horizontal)%360;
      pitch=Math.max(12,Math.min(88,pitch+vertical));
    }
    canvas.addEventListener('pointerdown',event=>{
      if(event.button!==0||drag)return;
      drag={id:event.pointerId,x:event.clientX,y:event.clientY};
      canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener('pointermove',event=>{
      if(drag?.id!==event.pointerId)return;
      adjust((event.clientX-drag.x)*.42,(event.clientY-drag.y)*.36);
      drag.x=event.clientX;
      drag.y=event.clientY;
    });
    canvas.addEventListener('lostpointercapture',()=>{drag=null;});
    canvas.addEventListener('keydown',event=>{
      const arrows={ArrowLeft:[-15,0],ArrowRight:[15,0],ArrowUp:[0,10],ArrowDown:[0,-10]};
      if(!Object.hasOwn(arrows,event.key))return;
      event.preventDefault();
      adjust(...arrows[event.key]);
    });
    function show(view){
      root.dataset.simView=view;
      preview.hidden=camera.hidden=view!=='3d';
      if(note)note.hidden=view!=='3d';
      for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.view===view));
    }
    let preferred='2d';
    try{if(localStorage.getItem(storageKey)==='3d')preferred='3d';}catch(_){}
    show(preferred);
    controls.hidden=false;
    controls.addEventListener('click',event=>{
      const button=event.target.closest('button');
      if(!button)return;
      if(button.dataset.view){
        show(button.dataset.view);
        try{localStorage.setItem(storageKey,button.dataset.view);}catch(_){}
      }
      if(spikeWorkspace&&!button.dataset.view){
        viewer?.command(button);
        return;
      }
      if(button.hasAttribute('data-view-turn'))adjust(Number(button.dataset.viewTurn)*45,0);
      if(button.hasAttribute('data-view-zoom'))changeZoom(Number(button.dataset.viewZoom));
      if(button.hasAttribute('data-view-top'))pitch=88;
      if(button.hasAttribute('data-view-reset')){
        azimuth=initialAzimuth;pitch=32;zoom=1;changeZoom(0);
      }
    });
    return {
      drawSpike(engine,partColor){
        const project=engine.project;
        let projectView=projectViews.get(project);
        const error=viewerError||projectView?.error;
        threeButton.disabled=Boolean(error);
        if(error&&root.dataset.simView==='3d')show('2d');
        const wants3D=root.dataset.simView==='3d';
        if(wants3D&&!projectView)projectView=requestProject(project);
        const loading=wants3D&&!projectView?.model;
        const message=error||(loading?'Carregant el projecte en 3D…':'');
        status.hidden=!message;
        if(status.textContent!==message)status.textContent=message;
        preview.hidden=camera.hidden=!wants3D||loading;
        if(preview.hidden)return;
        if(canvas.isConnected)canvas.replaceWith(viewer.canvas);
        viewer.draw(projectView.model,engine,partColor);
      },
      draw(scene,...args){
        if(!preview.hidden)scene(ctx,radians(azimuth),...args,{elevation:radians(pitch),zoom});
      },
    };
  }

  window.RoboticsScene3D={mount,codey};
})();
