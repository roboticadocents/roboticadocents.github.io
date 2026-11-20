#!/usr/bin/env python3
"""Fichas y solucionario con las piezas nativas. Fuente: sim/codey-activities.json.
Dependencias: reportlab, pypdf, cairosvg. Renderiza antes los SVG con render-codey-activity-blocks.js.
"""
from pathlib import Path
from io import BytesIO
from html import escape
import json, re, shutil
import cairosvg
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Image, Flowable, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader, PdfWriter
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'output/pdf';OUT.mkdir(parents=True,exist_ok=True)
WEB=ROOT/'_assets/activitats/kits';WEB.mkdir(parents=True,exist_ok=True)
ASSETS=ROOT/'_assets/activitats/codey'
activities=json.loads((ROOT/'sim/codey-activities.json').read_text())['activities']
fonts=ROOT/'_assets/sessions/marp/fonts'
for name,file in [('Jakarta','PlusJakartaSans.ttf'),('JakartaBold','PlusJakartaSans-Bold.ttf'),('Sora','Sora-Bold.ttf')]:pdfmetrics.registerFont(TTFont(name,str(fonts/file)))
pdfmetrics.registerFontFamily('Jakarta',normal='Jakarta',bold='JakartaBold')
styles={
 'title':ParagraphStyle('title',fontName='Sora',fontSize=19,leading=24,textColor=HexColor('#0f172a'),spaceAfter=8),
 'h':ParagraphStyle('h',fontName='Sora',fontSize=11,leading=15,textColor=HexColor('#0f172a'),spaceBefore=9,spaceAfter=5),
 'body':ParagraphStyle('body',fontName='Jakarta',fontSize=9.4,leading=14,spaceAfter=6,textColor=HexColor('#0f172a')),
 'small':ParagraphStyle('small',fontName='Jakarta',fontSize=8,leading=11,spaceAfter=5,textColor=HexColor('#475569'))}
def para(value,style='body'):return Paragraph(escape(value),styles[style])
def labelled(label,value):return Paragraph('<b>'+escape(label)+'</b> '+escape(value),styles['body'])
class Response(Flowable):
 def __init__(self,draw_program=False):super().__init__();self.width=527;self.draw_program=draw_program;self.height=195 if draw_program else 95
 def draw(self):
  c=self.canv;c.setStrokeColor(HexColor('#cbd5e1'));c.setFillColor(HexColor('#475569'));c.setFont('Jakarta',8)
  labels=['Predicción / propuesta','Resultado y entorno (papel / simulador / robot)','Dificultad y cambio probado','Duda pendiente']
  if self.draw_program:
   c.drawString(0,self.height-12,'Dibuja aquí el programa o las piezas que añades');c.rect(0,110,527,80)
  for i,label in enumerate(labels):
   y=85-i*22;c.drawString(0,y,label);c.line(0,y-13,527,y-13)
def diagram(ex,solution=False,maxheight=190):
 file=ASSETS/f"{ex['id']}-{'solucio' if solution else 'inici'}.svg"
 raw=file.read_bytes();view=re.search(rb'viewBox="([^\"]+)"',raw).group(1).split();w,h=float(view[2]),float(view[3]);scale=min(.75,527/w,maxheight/h)
 png=cairosvg.svg2png(bytestring=raw,scale=2)
 image=Image(BytesIO(png),width=w*scale,height=h*scale);image.hAlign='LEFT';return image
def footer(label):
 def draw(c,doc):
  c.saveState();c.setStrokeColor(HexColor('#cbd5e1'));c.line(34,31,A4[0]-34,31);c.setFont('Jakarta',8);c.setFillColor(HexColor('#475569'));c.drawString(34,19,'Robótica para docentes · Codey Rocky');c.drawRightString(A4[0]-34,19,f'{label} · {doc.page}');c.restoreState()
 return draw
def document(file,story,label):
 doc=SimpleDocTemplate(str(file),pagesize=A4,rightMargin=34,leftMargin=34,topMargin=30,bottomMargin=43,title=label,author='Robótica para docentes');doc.build(story,onFirstPage=footer(label),onLaterPages=footer(label))
def exercise(ex,i):
 return [para(f'{i}. {ex["title"]}','h'),para(ex['prompt']),diagram(ex),Spacer(1,5),Response(ex['id'].startswith(('cr-completa-el-programa','cr-respon-')))]
files=[]
for index,a in enumerate(activities,1):
 story=[para(f'ACTIVIDAD {index} · PAPEL / SIMULADOR / ROBOT','small'),para(a['title'],'title'),para(a['objective']),para('Nombre: ____________________________  Fecha: ______________','small'),
  labelled('En papel.', 'Predice o completa las piezas antes de comprobar. Las lecturas dadas son los datos de la prueba.'),
  labelled('En el simulador.', 'Abre Codey Rocky, despliega Actividades y elige esta ficha y el ejercicio. Carga el programa inicial, pruébalo y cambia un solo dato.'),
  labelled('Con el robot.', 'Conecta Codey a mBlock y usa Carga. '+a['robot']),
  para('Los valores reales pueden variar. Mide y justifica los ajustes. Para los movimientos, potencia y tiempo no equivalen a casillas o ángulos exactos.','small')]
 story+=exercise(a['exercises'][0],1)+[PageBreak(),para(a['title'],'title'),para('Continúa con los mismos pasos: predecir, comprobar, explicar y revisar.','small')]
 for i,ex in enumerate(a['exercises'][1:],2):story+=exercise(ex,i)
 story += [Spacer(1,2),para('Cierre: explica una solución, un error revisado y un cambio que probarías en otro entorno.','small')]
 file=OUT/f'{a["asset_slug"]}.pdf';document(file,story,f'Ficha {index}');assert len(PdfReader(file).pages)==2,f'{file}: debe tener dos páginas';files.append(file);shutil.copyfile(file,WEB/file.name)
writer=PdfWriter()
for file in files:writer.append(file)
combined=OUT/'cr-fitxes-tres-entorns.pdf'
with combined.open('wb') as f:writer.write(f)
shutil.copyfile(combined,WEB/combined.name)
story=[]
for index,a in enumerate(activities,1):
 if index>1:story.append(PageBreak())
 story += [para(f'SOLUCIONARIO DOCENTE · ACTIVIDAD {index}','small'),para(a['title'],'title'),para('Las piezas muestran una solución posible. Aceptad alternativas que cumplan la consigna y estén justificadas.','small')]
 for i,ex in enumerate(a['exercises'],1):
  story += [para(f'{i}. {ex["title"]}','h'),diagram(ex,True,145),para(ex['answer'])]
 story += [Spacer(1,7),para('Criterio compartido: 1 punto por el resultado o propuesta válida y 1 punto por la traza o justificación, en cada ejercicio. En el robot valorad las lecturas y los ajustes; no una coincidencia física exacta con el modelo.','small')]
key=OUT/'cr-solucions-tres-entorns.pdf';document(key,story,'Solucionario');assert len(PdfReader(key).pages)==8,'El solucionario debe tener ocho páginas';shutil.copyfile(key,WEB/key.name)
print('8 fichas de 2 páginas, recopilatorio de 16 páginas y solucionario de 8 páginas generados.')
