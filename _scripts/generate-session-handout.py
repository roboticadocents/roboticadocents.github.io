#!/usr/bin/env python3
"""Genera el quadern complet i sincronitza les referències de pàgina del MARP.
Dependències: reportlab, pypdf, svglib. No modifica les 16 fitxes originals.
"""
from pathlib import Path
from io import BytesIO
import json
import re
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.graphics import renderPDF
from svglib.svglib import svg2rlg
from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parents[1]
MARP = ROOT / '_assets/sessions/marp'
OUT = ROOT / 'output/pdf/sessio-1-handout-compacte.pdf'
GUIDE_PAGES = 4
W, H = A4
M = 44
WIDTH = W - 2*M
INK, BLUE, MUTED, PALE = '#0f172a', '#2563eb', '#64748b', '#ebf5fd'
WORKSHEETS = [
 ('tb-prediu-el-resultat', 'Què farà el robot?'),
 ('tb-escriu-el-codi', 'Dibuixa el codi!'),
 ('tb-depura-el-codi', 'Troba l’error!'),
 ('tb-refactoritza-el-codi', 'Fes el codi més curt!'),
 ('tb-quin-dibuix-fara', 'Quin dibuix farà?'),
 ('tb-dibuixa-per-parts', 'Dibuixa per parts'),
 ('tb-des-de-quin-costat', 'Des de quin costat?'),
 ('tb-aproxima-i-empeny', 'Primer aproxima’t, després empeny'),
 ('cs-prediu-el-resultat', 'Què farà el robot?'),
 ('cs-escriu-el-codi', 'Dibuixa el codi!'),
 ('cs-depura-el-codi', 'Troba l’error!'),
 ('cs-refactoritza-el-codi', 'Fes el codi més curt!'),
 ('cs-divideix-i-crea-funcions', 'Divideix i crea funcions'),
 ('cs-que-pose-dins-del-bucle', 'Què pose dins del bucle?'),
 ('cs-una-funcio-diferents-llocs', 'Una funció, diferents llocs'),
 ('cs-combina-funcions-i-repeticions', 'Combina funcions i repeticions'),
]
PAGES = {slug: GUIDE_PAGES+i+1 for i,(slug,_) in enumerate(WORKSHEETS)}
PAGES.update({'robots':2, 'tale-bot':2, 'coding-set':2, 'disseny':4, 'registre':4, 'seguent':4})

for name, file in [('Sora','Sora.ttf'),('SoraBold','Sora-Bold.ttf'),('Jakarta','PlusJakartaSans.ttf'),('JakartaBold','PlusJakartaSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(MARP/'fonts'/file)))
pdfmetrics.registerFontFamily('Jakarta',normal='Jakarta',bold='JakartaBold',italic='Jakarta',boldItalic='JakartaBold')
logo = svg2rlg(str(ROOT/'_assets/icons/logo.svg'))
styles = {
 'body':ParagraphStyle('body',fontName='Jakarta',fontSize=11,leading=16,textColor=HexColor(INK)),
 'small':ParagraphStyle('small',fontName='Jakarta',fontSize=9.5,leading=14,textColor=HexColor(MUTED)),
 'h2':ParagraphStyle('h2',fontName='SoraBold',fontSize=15,leading=21,textColor=HexColor(BLUE)),
 'title':ParagraphStyle('title',fontName='SoraBold',fontSize=25,leading=32,textColor=HexColor(INK)),
}

class Guide:
    def __init__(self):
        self.buffer=BytesIO(); self.c=canvas.Canvas(self.buffer,pagesize=A4); self.page=0; self.y=0
    def new(self,title):
        if self.page: self.c.showPage()
        self.page+=1; c=self.c
        c.setFillColor(HexColor(PALE));c.rect(0,H-64,W,64,fill=1,stroke=0)
        scale=27/logo.height;c.saveState();c.translate(M,H-45);c.scale(scale,scale);renderPDF.draw(logo,c,0,0);c.restoreState()
        c.setFillColor(HexColor(INK));c.setFont('Sora',10);c.drawString(M+38,H-34,'Robòtica per a docents')
        c.setFillColor(HexColor(MUTED));c.setFont('Jakarta',8);c.drawString(M,25,'Sessió 1 · Programar per aprendre');c.drawRightString(W-M,25,str(self.page))
        self.y=H-96;self.p(title,'title',after=20)
    def p(self,text,style='body',after=10):
        p=Paragraph(text,styles[style]);_,h=p.wrap(WIDTH,800)
        assert self.y-h>48,(self.page,text)
        p.drawOn(self.c,M,self.y-h);self.y-=h+after
    def heading(self,text):self.p(text,'h2',after=10)
    def lines(self,label,count=2):
        self.p(label,after=3)
        self.c.setStrokeColor(HexColor('#cbd5e1'));self.c.setLineWidth(.5)
        for _ in range(count):
            self.y-=21;self.c.line(M,self.y,W-M,self.y)
        self.y-=17
        assert self.y>45,(self.page,label)
    def table(self,rows,widths=None,compact=False):
        data=[[Paragraph(str(x),styles['small'] if i else styles['body']) for x in row] for i,row in enumerate(rows)]
        t=Table(data,colWidths=widths or [WIDTH/len(rows[0])]*len(rows[0]),hAlign='LEFT')
        t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),HexColor(PALE)),('VALIGN',(0,0),(-1,-1),'TOP'),('BOTTOMPADDING',(0,0),(-1,-1),4 if compact else 8),('TOPPADDING',(0,0),(-1,-1),4 if compact else 8),('LEFTPADDING',(0,0),(-1,-1),9),('LINEBELOW',(0,0),(-1,-1),.5,HexColor('#dbe5ef'))]))
        _,h=t.wrap(WIDTH,800);assert self.y-h>48,(self.page,'table');t.drawOn(self.c,M,self.y-h);self.y-=h+16
    def finish(self):
        assert self.page==GUIDE_PAGES
        self.c.save();return self.buffer

def build_guide():
    g = Guide()
    g.new('Programar per aprendre')
    g.p('Itinerari 4 · Sessió 1 · Quadern de treball', 'h2')
    g.p('Tale-Bot Pro i Matatalab Coding Set · Presentació de Coding Express')
    g.p('16 fitxes · 48 exercicis · Versió compacta')
    g.lines('Nom, centre i cicle', 1)
    g.heading('Què treballarem')
    g.p('Interpretarem programes curts, comprovarem recorreguts i explicarem les correccions. Compararem la repetició completa, els bucles i les funcions per preparar una activitat d’aula.')
    g.heading('Com treballarem')
    g.p('<b>Prediu → Programa → Comprova → Explica → Millora</b>')
    g.p('En parella, alterneu qui planifica i qui comprova. Recupereu la mateixa posició i orientació abans de cada prova. Podeu treballar en paper, al simulador i amb els robots disponibles.')
    g.table([['Quan…', 'Posem en joc…'], ['Separem la tasca en parts', 'Descomposició'], ['Identifiquem què es repeteix', 'Patrons'], ['Triem les dades necessàries', 'Abstracció'], ['Ordenem instruccions', 'Algorismes']], compact=True)
    g.p('Trieu les fitxes segons el vostre nivell i continueu practicant entre sessions. Anoteu un canvi i el resultat al registre de la pàgina 4.')
    g.p('<link href="https://roboticadocents.github.io/sim/" color="#2563eb">Obri el simulador</link> · <link href="https://roboticadocents.github.io/" color="#2563eb">Portal del curs</link>')

    g.new('Què aporta cada robot?')
    g.heading('Coding Express · Accions a la via')
    g.p('Els maons d’acció situats a la via fan que el tren s’ature o emeta sons i llums. Ho veurem amb imatges per anticipar i narrar què passa al llarg del trajecte.')
    g.heading('Tale-Bot Pro · Moviment, veu i traç')
    g.p('Programem amb els botons del robot. Pot reproduir veu gravada i, amb els accessoris compatibles, dibuixar o empentar objectes. Els mapes OID compatibles incorporen instruccions de veu.')
    g.p('<b>Per començar:</b> marqueu la posició i cap a on mira. Avançar i retrocedir canvien la posició. Girar canvia l’orientació. La repetició afecta la seqüència completa.')
    g.heading('Matatalab Coding Set · El programa queda a la vista')
    g.p('La torre llig les peces del tauler i envia les ordres al robot. Els nombres abreugen moviments compatibles, els bucles delimiten un fragment i les funcions permeten reutilitzar una seqüència.')
    g.p('<b>Per començar:</b> seguiu les peces amb el dit. Localitzeu què queda dins del bucle i on continua el programa després d’una crida. Les peces de definició i crida van sense nombres.')
    g.p('En els reptes de dibuix, el retolador es manté baixat. En els de capses, els braços empenten cap endavant.', 'small')

    g.new('Índex de fitxes')
    g.p('Totes les fitxes contenen tres exercicis. Aquest índex serveix per trobar-les; no estableix un ordre obligatori de treball.','small')
    for prefix,title in [('tb-','Tale-Bot Pro'),('cs-','Matatalab Coding Set')]:
        g.heading(title)
        g.table([['Fitxa','Pàgina']]+[[name,str(PAGES[slug])] for slug,name in WORKSHEETS if slug.startswith(prefix)],[WIDTH-65,65],compact=True)
    g.p('Capacitats dels robots: p. 2 · Aplicació a l’aula i registre: p. 4', 'small')

    g.new('Del taller a l’aula')
    g.heading('Una possible activitat')
    g.lines('Cicle, robot i què volem que aprenga el grup', 2)
    g.lines('Consigna i com comprovarem l’aprenentatge', 2)
    g.heading('Registre del treball autònom')
    for label in ['Fitxa i exercici', 'Dificultat trobada', 'Canvi provat i resultat', 'Dubte pendent']:
        g.lines(label, 1)
    g.heading('Per a la sessió següent')
    g.p('Porta una solució explicada, un error revisat amb la prova que has fet i una possible aplicació a l’aula.')
    return g.finish()

# Cada fitxa ocupa una pàgina. Si canvia, parem abans d’escriure referències incorrectes.
annexes=[]
for prefix in ['tb','cs']:
    reader=PdfReader(ROOT/f'_assets/activitats/kits/{prefix}-fitxes-paper.pdf')
    assert len(reader.pages)==8, f'Cal revisar la paginació de {prefix}'
    annexes.append(reader)
writer=PdfWriter();writer.append(PdfReader(build_guide()))
for reader in annexes:
    for original in reader.pages:
        buf=BytesIO();c=canvas.Canvas(buf,pagesize=A4);c.setFillColor(HexColor(MUTED));c.setFont('Jakarta',8)
        c.drawRightString(W-32,14,str(len(writer.pages)+1));c.save()
        writer.add_page(original);writer.pages[-1].merge_page(PdfReader(buf).pages[0])
for title,page in [('Guia de treball',1),('Índex',3),('Capacitats dels robots',2),('Aplicació a l’aula i registre',4)]:writer.add_outline_item(title=title,page_number=page-1)
for slug,title in WORKSHEETS:writer.add_outline_item(title=('Tale-Bot · ' if slug.startswith('tb-') else 'Coding Set · ')+title,page_number=PAGES[slug]-1)
writer.add_metadata({'/Title':'Sessió 1 · Quadern de treball i activitats completes','/Author':'Robòtica per a docents'})
OUT.parent.mkdir(parents=True,exist_ok=True)
with OUT.open('wb') as f:writer.write(f)
# El mapa es genera des de la mateixa font que l’índex i el peu de cada fitxa.
map_path=ROOT/'_assets/sessions/handout/it4-sessio-1-pages.json';map_path.parent.mkdir(parents=True,exist_ok=True)
map_path.write_text(json.dumps({'pages':PAGES,'total':len(writer.pages)},ensure_ascii=False,indent=2)+'\n')
md=MARP/'it4-sessio-1.md';source=md.read_text()
def sync(m):
    attrs=m.group(1);slug=re.search(r'data-handout="([^"]+)"',attrs).group(1)
    ex=re.search(r'data-exercise="([^"]+)"',attrs)
    label=f'Dossier · p. {PAGES[slug]}' + (f' · exercici {ex.group(1)}' if ex else '')
    return '<p '+attrs+'>'+label+'</p>'
source=re.sub(r'<p ([^>]*data-handout="[^"]+"[^>]*)>.*?</p>',sync,source)
md.write_text(source.replace('sessio-1-handout-revisat.pdf', OUT.name))
print(f'{OUT.relative_to(ROOT)} · {len(writer.pages)} pàgines; referències MARP sincronitzades')
