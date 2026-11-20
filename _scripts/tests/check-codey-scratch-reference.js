// Auditoria opcional contra fitxers originals de Scratch VM, sense dependències de xarxa.
// Ús: node _scripts/tests/check-codey-scratch-reference.js /directori/amb/referencies
// Fitxers: cast.js i scratch3_control.js. Fonts i hashes: docs/SIMULADOR-CODEY.md.
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const reference=process.argv[2];if(!reference)throw new Error('Indica el directori amb cast.js i scratch3_control.js oficials de Scratch VM.');
const load=(path,dependency)=>{const module={exports:{}};new Function('require','module','exports',fs.readFileSync(path,'utf8'))(()=>dependency,module,module.exports);return module.exports;};
const Cast=load(path.join(reference,'cast.js'),{}),Control=load(path.join(reference,'scratch3_control.js'),Cast);
const {evaluate,Engine}=require('../../sim/codey-engine');const literal=value=>({kind:typeof value,value});
const values=[-100,-1,-.5,0,.5,1,2,10,50,100,false,true,'',' ','  ','0','00',' 0 ','01','1','2','10','50','1e2','false','FALSE','true','Codey','CODEY','a','B','!'];let cases=0;
for(const left of values)for(const right of values){for(const op of ['<','>','=']){const expected=Cast.compare(left,right);assert.equal(evaluate({kind:'compare',op,left:literal(left),right:literal(right)},()=>0),op==='<'?expected<0:op==='>'?expected>0:expected===0,JSON.stringify([op,left,right]));cases++;}for(const kind of ['and','or']){assert.equal(evaluate({kind,left:literal(left),right:literal(right)},()=>0),kind==='and'?Cast.toBoolean(left)&&Cast.toBoolean(right):Cast.toBoolean(left)||Cast.toBoolean(right));cases++;}}
for(const value of values){assert.equal(evaluate({kind:'not',value:literal(value)},()=>0),!Cast.toBoolean(value));cases++;}
const control=new Control({on(){}});for(const count of [-3,0,.49,.5,1.49,1.5,2.5,5]){let branches=0;const util={stackFrame:{},startBranch(){branches++;}};for(let i=0;i<10;i++)control.repeat({TIMES:count},util);const e=new Engine({start:[{id:'repeat',type:'repeat',count,body:[{id:'mark',type:'text',value:'x'}]}]});e.trigger('start');let executed=0;for(let i=0;i<20;i++){e.executeOne();if(e.active==='mark'&&e.tasks.length)executed++;}assert.equal(executed,branches);cases++;}
console.log(`${cases} casos diferencials coincideixen amb Cast i Control oficials de Scratch VM.`);
