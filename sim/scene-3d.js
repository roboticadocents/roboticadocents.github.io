(function(){
  'use strict';

  function mount(root,key){
    const controls=root.querySelector('[data-sim-view-controls]');
    const preview=root.querySelector('[data-view-preview]');
    const canvas=preview.querySelector('[data-view-canvas]');
    const camera=controls.querySelector('[data-view-camera]');
    const buttons=[...controls.querySelectorAll('[data-view]')];
    const note=root.querySelector('[data-view-note]');
    const storageKey='robotica-view-'+key;
    const status=root.querySelector('[data-view-status]');
    const threeButton=buttons.find(button=>button.dataset.view==='3d');
    const projectViews=new Map();
    let viewerRequest,viewer,viewerError='';
    function requestProject(project,options){
      const projectView={};
      projectViews.set(project,projectView);
      if(!viewerRequest){
        viewerRequest=import('./scene-view.js?v=3').then(module=>{
          viewer=module.createSceneView(canvas);
          if(!viewer){
            viewerError='El navegador no ha pogut iniciar WebGL 2. Pots continuar en 2D.';
            return;
          }
          viewer.canvas.addEventListener('webglcontextlost',()=>{
            viewerError='S’ha interromput la vista 3D. Pots continuar en 2D.';
          },{once:true});
        }).catch(error=>{
          viewerError='No s’ha pogut carregar el visor 3D. Pots continuar en 2D.';
          console.warn('Visor 3D indisponible',error);
        });
      }
      viewerRequest.then(async()=>{
        if(viewer)projectView.model=await viewer.load(project,options);
      }).catch(error=>{
        projectView.error='No s’ha pogut carregar el model 3D. Pots continuar en 2D.';
        console.warn('Model 3D indisponible',error);
      });
      return projectView;
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
      else viewer?.command(button);
    });
    return {
      draw(project,engine,detail,options){
        let projectView=projectViews.get(project);
        const error=viewerError||projectView?.error;
        threeButton.disabled=Boolean(error);
        if(error&&root.dataset.simView==='3d')show('2d');
        const wants3D=root.dataset.simView==='3d';
        if(wants3D&&!projectView)projectView=requestProject(project,options);
        const loading=wants3D&&!projectView?.model;
        const message=error||(loading?'Carregant la vista 3D…':'');
        status.hidden=!message;
        if(status.textContent!==message)status.textContent=message;
        preview.hidden=camera.hidden=!wants3D||loading;
        if(preview.hidden)return;
        if(canvas.isConnected)canvas.replaceWith(viewer.canvas);
        viewer.draw(project,projectView.model,engine,detail);
      },
    };
  }

  window.RoboticsScene3D={mount};
})();
