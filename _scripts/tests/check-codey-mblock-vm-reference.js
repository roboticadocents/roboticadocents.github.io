// Auditoria diferencial amb els chunks originals de mBlock web 5.6.1.
// Ús: node _scripts/tests/check-codey-mblock-vm-reference.js /directori/referencia
// Fonts, noms i hashes a docs/SIMULADOR-CODEY.md. No carrega l’aplicació ni usa xarxa.
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {evaluate,Engine}=require('../../sim/codey-engine');
const directory=process.argv[2];if(!directory)throw new Error('Indica el directori amb common.js i vm.js oficials de mBlock.');
const modules={},self={webpackChunk_mblock_mblock_web:{push(chunk){Object.assign(modules,chunk[1]);}}};
for(const name of ['common.js','vm.js'])vm.runInNewContext(fs.readFileSync(path.join(directory,name),'utf8'),{self},{timeout:2000});
const cache={};function load(id){if(cache[id])return cache[id].exports;if(!modules[id])throw new Error(`Falta el mòdul oficial ${id}. Comprova la versió dels chunks.`);const module={exports:{}};cache[id]=module;modules[id](module,module.exports,load);return module.exports;}
const Operators=load(20341),Control=load(53225),operators=new Operators({});
const literal=value=>({kind:typeof value,value});
const values=[-100,-1,-.5,0,.5,1,2,10,50,100,false,true,'',' ','  ','0','00',' 0 ','01','1','2','10','50','1e2','false','FALSE','true','Codey','CODEY','a','B','!'];let cases=0;
for(const left of values)for(const right of values){
 for(const [op,method] of [['<','lt'],['>','gt'],['=','equals']]){assert.equal(evaluate({kind:'compare',op,left:literal(left),right:literal(right)},()=>0),operators[method]({OPERAND1:left,OPERAND2:right}),JSON.stringify([op,left,right]));cases++;}
 for(const kind of ['and','or']){assert.equal(evaluate({kind,left:literal(left),right:literal(right)},()=>0),operators[kind]({OPERAND1:left,OPERAND2:right}));cases++;}
}
for(const value of values){assert.equal(evaluate({kind:'not',value:literal(value)},()=>0),operators.not({OPERAND:value}));cases++;}
const control=new Control({on(){}});
for(const count of [-3,0,.49,.5,1.49,1.5,2.5,5]){
 let branches=0;const util={stackFrame:{},startBranch(){branches++;}};for(let i=0;i<10;i++)control.repeat({TIMES:count},util);
 const e=new Engine({start:[{id:'repeat',type:'repeat',count,body:[{id:'mark',type:'text',value:'x'}]}]});e.trigger('start');let executed=0;
 for(let i=0;i<20;i++){e.executeOne();if(e.active==='mark'&&e.tasks.length)executed++;}assert.equal(executed,branches);cases++;
}
console.log(`${cases} casos coincideixen directament amb Operadors i Control del motor de mBlock web 5.6.1.`);
