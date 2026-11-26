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

  function codey(ctx,azimuth,engine,{WIDTH,HEIGHT,COLORS},pattern){
    const scene=projection(ctx,WIDTH,HEIGHT,58,azimuth);
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

  function spike(ctx,azimuth,engine,partColor,camera){
    const {project,environment,angle,travel,delivery}=engine;
    const long=project==='cart'||!project;
    const center=long?0:-62;
    const shift=([x,y,z])=>[x+center,y,z];
    const height=project==='wheel'?179:project==='sorter'?104:65;
    const scene=projection(ctx,long?456:324,216,height,azimuth,{...camera,studio:true});
    const box=(x,y,z,w,d,h,color,transform=identity)=>scene.box(x,y,z,w,d,h,color,point=>shift(transform(point)));
    const round=(x,y,z,radius,length,axis,color,transform=identity)=>
      cylinder(scene.surface,x,y,z,radius,length,axis,color,point=>shift(transform(point)));
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
    function tag(x,y,z,text,color=navy){
      const point=scene.project(shift([x,y,z]));
      ctx.font='600 15px "Plus Jakarta Sans",sans-serif';
      const w=ctx.measureText(text).width+17;
      if(point.x<w/2||point.x>ctx.canvas.width-w/2||point.y<14||point.y>ctx.canvas.height-14)return;
      ctx.fillStyle='#fffffff2';
      ctx.fillRect(point.x-w/2,point.y-12,w,24);
      ctx.fillStyle=color;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,point.x,point.y);
    }
    function tray(x,y,z,color){
      box(x,y,z,55,43,5,color);
      box(x,y,z+5,55,4,7,color);
      box(x,y+39,z+5,55,4,7,color);
      box(x,y+4,z+5,4,35,7,color);
      box(x+51,y+4,z+5,4,35,7,color);
    }
    scene.ground(floor=>{
      const width=long?456:324;
      floor.strokeStyle='#d9e5f0';floor.lineWidth=.65;
      floor.beginPath();
      for(let x=16;x<width;x+=20){floor.moveTo(x,0);floor.lineTo(x,216);}
      for(let y=16;y<216;y+=20){floor.moveTo(0,y);floor.lineTo(width,y);}
      floor.stroke();
      if(project==='cart'){
        floor.fillStyle='#dfeaf6';floor.fillRect(18,67,419,89);
        floor.strokeStyle='#91a7bc';floor.lineWidth=1.2;
        floor.setLineDash([8,6]);floor.beginPath();floor.moveTo(21,111);floor.lineTo(438,111);floor.stroke();
        floor.setLineDash([]);
        if(environment.present){
          const sensor=115+travel*1.48,target=115+environment.distance*1.48;
          floor.fillStyle='#70c3eb70';floor.fillRect(sensor,103,Math.max(0,target-sensor),17);
          floor.fillStyle='#2383b3';floor.fillRect(target-2,69,4,85);
        }
      }
      const shadow=project==='cart'?[65+travel*1.48,119,58,36]:
        project==='sorter'?[222,126,154,62]:project==='dial'?[220,112,113,69]:
        project==='claw'?[220,116,96,57]:project==='wheel'?[224,132,120,57]:[190,128,155,60];
      const [x,y,rx,ry]=shadow;
      floor.fillStyle='#708aa31d';
      floor.beginPath();floor.ellipse(x+center,y+5,rx,ry,0,0,Math.PI*2);floor.fill();
    });

    if(project==='dial'){
      box(115,38,0,210,146,9,yellow);
      for(const y of [47,174])beam(121,y,9,197,cyan);
      hub(126,103,9);
      motor(201,92,9);
      const pivot=[224,113],dialZ=50;
      round(...pivot,44,61,3,'z',light);
      scene.paint();
      for(let tick=0;tick<=6;tick++){
        const a=radians(tick*10),x=pivot[0]+48*Math.sin(a),y=pivot[1]-48*Math.cos(a);
        const color=({0:'#15803d',3:blue,6:'#b45309'})[tick]||gray;
        round(x,y,dialZ,({0:4,3:4,6:4})[tick]||2,2,'z',color);
      }
      const pointer=rotate(...pivot,angle);
      beam(-3,-3,dialZ+3,50,blue,([x,y,z])=>pointer([y,-x,z]));
      round(...pivot,dialZ+11,9,5,'z',navy);
      scene.paint();
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
      scene.paint();
    }else if(project==='wheel'){
      const x=224,y=116,z=109,rim=64;
      const phases=window.SpikeProjects.wheel.phases(angle);
      const point=(radius,phase)=>[x-radius*Math.sin(phase),z-radius*Math.cos(phase)];
      function bar(x1,z1,x2,z2,depth,color){
        const length=Math.hypot(x2-x1,z2-z1),c=(x2-x1)/length,s=(z2-z1)/length;
        box(0,-3,-3,length,6,6,color,([u,v,w])=>[x1+u*c-w*s,depth+v,z1+u*s+w*c]);
      }
      box(119,64,0,210,103,8,yellow);
      box(199,138,8,50,24,7,'#155e75');
      hub(120,67,8);
      scene.paint();
      for(const foot of [166,282])bar(foot,8,x,z,y-18,blue);
      box(x-19,y-39,z-19,38,27,38,light);
      round(x,y-13,z,15,5,'y',cyan);
      round(x,y-8,z,5,15,'y',navy);
      const count=16;
      for(let i=0;i<count;i++){
        const first=phases[0]+i*Math.PI*2/count,last=phases[0]+(i+1)*Math.PI*2/count;
        bar(...point(rim,first),...point(rim,last),y,cyan);
      }
      for(const phase of phases)bar(x,z,...point(rim,phase),y,blue);
      round(x,y+3,z,10,4,'y',navy);
      for(const [index,phase] of phases.entries()){
        const [cx,cz]=point(rim,phase);
        const color=['#76cadd','#b58ae3',yellow,'#7ac994'][index];
        round(cx,y+3,cz,3.6,9,'y',navy);
        box(cx-1.5,y+11,cz-9,3,3,9,navy);
        box(cx-12,y+8,cz-24,24,14,4,color);
        box(cx-12,y+8,cz-20,4,14,10,color);
        box(cx+8,y+8,cz-20,4,14,10,color);
        box(cx-8,y+8,cz-20,16,3,10,color);
      }
      scene.paint();
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
      scene.paint();
      if(environment.present){
        const clearance=engine.distance();
        tag(115+(environment.distance+travel)*.74,116,0,Math.round(clearance)+' cm','#155e75');
      }
    }else if(project==='sorter'){
      box(88,49,0,260,118,10,pink);
      scene.paint();
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
      scene.paint();
      tag(120,177,2,'Groc','#854d0e');tag(314,177,2,'Rosa','#9d174d');
    }else{
      hub(68,122,0);
      motor(139,53,0);
      beam(-3,-3,40,54,blue,([x,y,z])=>rotate(161,73,angle)([y,-x,z]));
      box(198,59,0,28,45,23,light);
      for(const y of [70,92])round(226,y,12,7,3,'x',navy);
      if(environment.present)box(237+environment.distance*.82,64,0,31,35,34,'#84b3e2');
      scene.paint();
    }
  }

  function mount(root,key){
    const controls=root.querySelector('[data-sim-view-controls]');
    const preview=root.querySelector('[data-view-preview]');
    const canvas=preview.querySelector('canvas');
    const ctx=canvas.getContext('2d');
    if(!ctx)return null;
    const camera=controls.querySelector('[data-view-camera]');
    const buttons=[...controls.querySelectorAll('[data-view]')];
    const note=root.querySelector('[data-view-note]');
    const storageKey='robotica-view-'+key;
    const initialAzimuth=key==='codey-rocky'?27:-27;
    let azimuth=initialAzimuth,pitch=32,zoom=1,drag=null,lastSpike='';
    const zoomButtons=[...controls.querySelectorAll('[data-view-zoom]')];
    function changeZoom(delta){
      zoom=Math.max(.8,Math.min(1.8,zoom+delta*.2));
      for(const button of zoomButtons)button.disabled=Number(button.dataset.viewZoom)>0?zoom>=1.8:zoom<=.8;
    }
    function adjust(horizontal,vertical){
      azimuth=(azimuth+horizontal)%360;
      pitch=Math.max(12,Math.min(88,pitch+vertical));
    }
    if(canvas.hasAttribute('data-view-inspect')){
      canvas.addEventListener('pointerdown',event=>{
        if(event.button!==0||drag)return;
        drag={id:event.pointerId,x:event.clientX,y:event.clientY};
        canvas.setPointerCapture(event.pointerId);
      });
      canvas.addEventListener('pointermove',event=>{
        if(drag?.id!==event.pointerId)return;
        adjust((event.clientX-drag.x)*.42,(event.clientY-drag.y)*.36);
        drag={id:drag.id,x:event.clientX,y:event.clientY};
      });
      canvas.addEventListener('lostpointercapture',()=>{drag=null;});
      canvas.addEventListener('keydown',event=>{
        const arrows={ArrowLeft:[-15,0],ArrowRight:[15,0],ArrowUp:[0,10],ArrowDown:[0,-10]};
        if(!Object.hasOwn(arrows,event.key))return;
        event.preventDefault();
        adjust(...arrows[event.key]);
      });
    }
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
      if(button.hasAttribute('data-view-turn'))adjust(Number(button.dataset.viewTurn)*45,0);
      if(button.hasAttribute('data-view-zoom'))changeZoom(Number(button.dataset.viewZoom));
      if(button.hasAttribute('data-view-top'))pitch=88;
      if(button.hasAttribute('data-view-reset')){
        azimuth=initialAzimuth;pitch=32;zoom=1;changeZoom(0);
      }
    });
    return {
      draw(scene,...args){
        if(preview.hidden)return;
        if(scene===spike){
          const [engine]=args,{environment}=engine;
          const key=[azimuth,pitch,zoom,engine.project,engine.angle,engine.travel,engine.delivery,
            engine.motorAt('E')?.angle,engine.motorAt('F')?.angle,engine.hubColor,...engine.pixels,
            environment.present,environment.distance,environment.color].join('/');
          if(key===lastSpike)return;
          lastSpike=key;
        }
        scene(ctx,radians(azimuth),...args,{elevation:radians(pitch),zoom});
      },
    };
  }

  window.RoboticsScene3D={mount,codey,spike};
})();
