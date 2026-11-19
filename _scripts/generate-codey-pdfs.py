#!/usr/bin/env python3
"""Fitxes i solucionari amb les peces natives. Font: sim/codey-activities.json.
Dependencies: reportlab, pypdf, cairosvg. Renderitza abans els SVG amb render-codey-activity-blocks.js.
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
  labels=['Predicció / proposta','Resultat i entorn (paper / simulador / robot)','Dificultat i canvi provat','Dubte pendent']
  if self.draw_program:
   c.drawString(0,self.height-12,'Dibuixa ací el programa o les peces que afegeixes');c.rect(0,110,527,80)
  for i,label in enumerate(labels):
   y=85-i*22;c.drawString(0,y,label);c.line(0,y-13,527,y-13)
def diagram(ex,solution=False,maxheight=190):
 file=ASSETS/f"{ex['id']}-{'solucio' if solution else 'inici'}.svg"
 raw=file.read_bytes();view=re.search(rb'viewBox="([^\"]+)"',raw).group(1).split();w,h=float(view[2]),float(view[3]);scale=min(.75,527/w,maxheight/h)
 png=cairosvg.svg2png(bytestring=raw,scale=2)
 image=Image(BytesIO(png),width=w*scale,height=h*scale);image.hAlign='LEFT';return image
def footer(label):
 def draw(c,doc):
  c.saveState();c.setStrokeColor(HexColor('#cbd5e1'));c.line(34,31,A4[0]-34,31);c.setFont('Jakarta',8);c.setFillColor(HexColor('#475569'));c.drawString(34,19,'Robòtica per a docents · Codey Rocky');c.drawRightString(A4[0]-34,19,f'{label} · {doc.page}');c.restoreState()
 return draw
def document(file,story,label):
 doc=SimpleDocTemplate(str(file),pagesize=A4,rightMargin=34,leftMargin=34,topMargin=30,bottomMargin=43,title=label,author='Robòtica per a docents');doc.build(story,onFirstPage=footer(label),onLaterPages=footer(label))
def exercise(ex,i):
 return [para(f'{i}. {ex["title"]}','h'),para(ex['prompt']),diagram(ex),Spacer(1,5),Response(ex['id'].startswith(('cr-completa-el-programa','cr-respon-als-sensors')))]
files=[]
for index,a in enumerate(activities,1):
 story=[para(f'ACTIVITAT {index} · PAPER / SIMULADOR / ROBOT','small'),para(a['title'],'title'),para(a['objective']),para('Nom: ______________________________  Data: ______________','small'),
  labelled('En paper.', 'Prediu o completa les peces abans de comprovar. Les lectures donades són les dades de la prova.'),
  labelled('Al simulador.', 'Obri Codey Rocky, desplega Activitats i tria aquesta fitxa i l’exercici. Carrega el programa inicial, prova’l i canvia una sola dada.'),
  labelled('Amb el robot.', 'Connecta Codey a mBlock i usa Càrrega. '+a['robot']),
  para('Els valors reals poden variar. Mesura i justifica els ajustos. Per als moviments, potència i temps no equivalen a caselles o angles exactes.','small')]
 story+=exercise(a['exercises'][0],1)+[PageBreak(),para(a['title'],'title'),para('Continua amb els mateixos passos: predir, comprovar, explicar i revisar.','small')]
 for i,ex in enumerate(a['exercises'][1:],2):story+=exercise(ex,i)
 story += [Spacer(1,2),para('Tancament: explica una solució, un error revisat i un canvi que provaries en un altre entorn.','small')]
 file=OUT/f'{a["slug"]}.pdf';document(file,story,f'Fitxa {index}');assert len(PdfReader(file).pages)==2,f'{file}: ha de tindre dues pàgines';files.append(file);shutil.copyfile(file,WEB/file.name)
writer=PdfWriter()
for file in files:writer.append(file)
combined=OUT/'cr-fitxes-tres-entorns.pdf'
with combined.open('wb') as f:writer.write(f)
shutil.copyfile(combined,WEB/combined.name)
story=[]
for index,a in enumerate(activities,1):
 if index>1:story.append(PageBreak())
 story += [para(f'SOLUCIONARI DOCENT · ACTIVITAT {index}','small'),para(a['title'],'title'),para('Les peces mostren una solució possible. Accepteu alternatives que complisquen la consigna i estiguen justificades.','small')]
 for i,ex in enumerate(a['exercises'],1):
  story += [para(f'{i}. {ex["title"]}','h'),diagram(ex,True,145),para(ex['answer'])]
 story += [Spacer(1,7),para('Criteri compartit: 1 punt pel resultat o proposta vàlida i 1 punt per la traça o justificació, en cada exercici. Al robot valoreu les lectures i els ajustos; no una coincidència física exacta amb el model.','small')]
key=OUT/'cr-solucions-tres-entorns.pdf';document(key,story,'Solucionari');assert len(PdfReader(key).pages)==8,'El solucionari ha de tindre huit pàgines';shutil.copyfile(key,WEB/key.name)
print('8 fitxes de 2 pàgines, recull de 16 pàgines i solucionari de 8 pàgines generats.')
