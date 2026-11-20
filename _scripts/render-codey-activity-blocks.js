#!/usr/bin/env node
'use strict';
// Renderitza les peces amb el mateix editor natiu del simulador, sense recrear-les.
const fs=require('node:fs'),path=require('node:path');
const args=process.argv.slice(2),modulePath=args[args.indexOf('--playwright-module')+1];
const {chromium}=require(args.includes('--playwright-module')?path.resolve(modulePath):'playwright');
const root=path.resolve(__dirname,'..'),{activities}=require('../sim/codey-activities.json');
const out=path.join(root,'_assets/activitats/codey');fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CODEY_CHROMIUM||undefined,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 await page.goto(process.env.CODEY_SIM_URL||'http://localhost:8000/sim/?robot=codey-rocky');await page.waitForSelector('.cr-native-active');
 await page.evaluate(()=>{const element=document.createElement('div');element.style.cssText='position:absolute;left:-10000px;top:0;width:2400px;height:3000px';document.body.append(element);window.printEditor=CodeyNativeBlocks.create({element,onChange(){},onDraft(){},onError(message){throw new Error(message);}});});
 for(const activity of activities)for(const exercise of activity.exercises)for(const [name,program] of [['inici',exercise.starter],['solucio',exercise.solution]]){
  const svg=await page.evaluate(async program=>{
   const images=[];const events=Object.entries(program).filter(([key,blocks])=>blocks.length);if(!events.length)events.push(['start',[]]);
   for(const [event,blocks] of events){
    printEditor.setProgram(blocks,event);await new Promise(requestAnimationFrame);
    const block=printEditor.workspace.getTopBlocks(false)[0],original=block.getSvgRoot(),copy=original.cloneNode(true),box=original.getBBox();
    const a=[original,...original.querySelectorAll('*')],b=[copy,...copy.querySelectorAll('*')];
    for(let i=0;i<a.length;i++){const style=getComputedStyle(a[i]);for(const property of ['fill','fill-opacity','stroke','stroke-width','stroke-opacity','font-size','font-weight','font-style','text-anchor','opacity'])b[i].style.setProperty(property,style.getPropertyValue(property));if(a[i].tagName.toLowerCase()==='text')b[i].style.fontFamily='DejaVu Sans, sans-serif';}
    copy.removeAttribute('transform');images.push({body:new XMLSerializer().serializeToString(copy),x:box.x,y:box.y,width:box.width+12,height:box.height+12});
   }
   const width=images.reduce((n,image)=>n+image.width+20,0),height=Math.max(...images.map(image=>image.height));let x=6;
   const content=images.map(image=>{const result=`<g transform="translate(${x-image.x},${6-image.y})">${image.body}</g>`;x+=image.width+20;return result;}).join('');
   return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="white"/>${content}</svg>`;
  },program);
  const local=svg.replace(/xlink:href="[^"]*\/sim\/vendor\/scratch-blocks\/media\/([^"]+)"/g,(_,file)=>`xlink:href="data:image/svg+xml;base64,${fs.readFileSync(path.join(root,'sim/vendor/scratch-blocks/media',file)).toString('base64')}"`);fs.writeFileSync(path.join(out,`${exercise.id}-${name}.svg`),local);
 }
 await browser.close();console.log('48 diagrames renderitzats amb Scratch Blocks natiu.');
})().catch(error=>{console.error(error);process.exit(1);});
