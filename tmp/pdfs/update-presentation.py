from pathlib import Path
import re,html,xml.etree.ElementTree as ET
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor,white
from reportlab.platypus import SimpleDocTemplate,Paragraph,Spacer,Table,TableStyle,PageBreak,KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader,PdfWriter
ROOT=Path('/home/gerard/roboticadocents.github.io'); OUT=ROOT/'output/pdf'
pdfmetrics.registerFont(TTFont('Sora',str(ROOT/'tmp/pdfs/Sora.ttf')))
pdfmetrics.registerFont(TTFont('Jakarta',str(ROOT/'tmp/pdfs/Jakarta.ttf')))
pdfmetrics.registerFontFamily('Jakarta',normal='Jakarta',bold='Jakarta',italic='Jakarta',boldItalic='Jakarta')
INK='#0f172a';MUT='#64748b';BLUE='#2563eb';PALE='#ebf5fd'
raw=Path('/home/gerard/.codex/attachments/e7557457-b888-4534-8b2d-1f5507e32fed/Texto pegado.txt').read_text()
slidepart,hand=raw[raw.index('# 01 ·'):].split('# Robòtica per a docents',1)
def fmt(s):
 s=html.escape(s.strip()).replace('→','&#8594;')
 s=re.sub(r'\*\*(.+?)\*\*',r'<b>\1</b>',s);s=re.sub(r'\*(.+?)\*',r'<i>\1</i>',s)
 return s
# Reproduce the official SVG as vector primitives.
svg=ET.parse(ROOT/'_assets/icons/logo.svg').getroot()
def logo(c,x,y,size=26):
 c.saveState();c.translate(x,y);c.scale(size/73.025,size/75.142)
 for e in svg:
  a=e.attrib; tag=e.tag.split('}')[-1];c.setFillColor(HexColor(a.get('fill',BLUE)))
  if tag=='rect':
   xx=float(a.get('x',0)); yy=75.142-float(a.get('y',0))-float(a['height']);c.roundRect(xx,yy,float(a['width']),float(a['height']),float(a.get('rx',0)),stroke=0,fill=1)
  elif tag=='circle':c.circle(float(a['cx']),75.142-float(a['cy']),float(a['r']),stroke=0,fill=1)
 c.restoreState()
def frame(c,w,h,n,label):
 c.setFillColor(white);c.rect(0,0,w,h,fill=1,stroke=0)
 c.setFillColor(HexColor(PALE));c.rect(0,h-64,w,64,fill=1,stroke=0)
 logo(c,32,h-46,27);c.setFillColor(HexColor(INK));c.setFont('Sora',12);c.drawString(70,h-37,'Robòtica per a docents')
 c.setFillColor(HexColor(MUT));c.setFont('Jakarta',9);c.drawString(32,22,label);c.drawRightString(w-32,22,str(n))
# 18 landscape slides, with all time indicators removed.
c=canvas.Canvas(str(OUT/'sessio-1-presentacio.pdf'),pagesize=(960,540));c.setTitle('Programar per aprendre · Sessió 1')
slides=re.split(r'\n---\s*\n',slidepart.strip())
for i,s in enumerate(slides,1):
 lines=s.strip().splitlines(); title=re.sub(r'^# \d+ · ','',lines[0]);body='\n'.join(lines[1:]).strip()
 body='\n'.join(line for line in body.splitlines() if not re.search(r'\d{2}:\d{2}',line))
 body=re.sub(r'\*\*\d+ minuts\*\*', '', body)
 body=re.sub(r'\d+ minuts · ', '', body)
 body=body.replace(' de 15–20 minuts', '').replace(', amb un màxim de 2 minuts', '')
 frame(c,960,540,i,'Sessió 1 · Tale-Bot Pro i Matatalab Coding Set')
 accent='#ea8b20' if 8<=i<=10 else '#16a36b' if 12<=i<=15 else BLUE
 c.setFillColor(HexColor(accent));c.roundRect(36,423,7,37,3,fill=1,stroke=0)
 titlep=Paragraph(fmt(title),ParagraphStyle('title',fontName='Sora',fontSize=29,leading=36,textColor=HexColor(INK)))
 tw,th=titlep.wrap(868,90);titlep.drawOn(c,56,458-th)
 # compact paragraphs with generous line spacing
 chunks=re.split(r'\n\s*\n',body)
 size=23
 while True:
  ps=ParagraphStyle('body',fontName='Jakarta',fontSize=size,leading=size*1.45,textColor=HexColor(INK),spaceAfter=10)
  blocks=[Paragraph(fmt(t).replace('\n','<br/>'),ps) for t in chunks]
  heights=[p.wrap(858,500)[1] for p in blocks]
  if sum(heights)+10*(len(blocks)-1)<=350 or size<=12:break
  size-=.5
 y=408
 for p,h in zip(blocks,heights):p.drawOn(c,56,y-h);y-=h+10
 assert y>48,(i,y)
 c.showPage()
c.save()

print('Presentació actualitzada:',len(slides),'diapositives')
