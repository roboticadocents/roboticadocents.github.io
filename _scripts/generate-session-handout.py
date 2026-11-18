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
OUT = ROOT / 'output/pdf/sessio-1-handout-revisat.pdf'
GUIDE_PAGES = 9
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
PAGES.update({'robots':4, 'tale-bot':5, 'coding-set':6, 'disseny':7, 'registre':8, 'seguent':9})

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

def ref(slug):return f'p. {PAGES[slug]}'

def build_guide():
    g=Guide()
    g.new('Programar per aprendre')
    g.p('Pensem, programem i comprovem','h2',after=24)
    g.p('<b>Sessió 1 · Quadern de treball i activitats completes</b>',after=20)
    g.p('Tale-Bot Pro i Matatalab Coding Set<br/>Presentació de Coding Express',after=24)
    g.p('Guia de treball · 16 fitxes amb 48 exercicis · Treball entre sessions',after=40)
    g.lines('Nom:',2);g.lines('Centre i cicle:',2)
    g.p('El quadern acompanya el taller i permet continuar treballant fins a la sessió següent. El ritme i la tria d’exercicis s’adapten al nivell de cada participant.',after=16)
    g.p('La pàgina impresa coincideix amb el número de pàgina del PDF. Les diapositives remeten a aquesta mateixa numeració.','small')

    g.new('Com treballarem')
    g.p('Interpretarem programes curts, comprovarem els moviments i explicarem les correccions. Compararem la repetició completa, els bucles i les funcions, i prepararem una aplicació curricular.')
    g.heading('El recorregut')
    g.p('Introducció → Coding Express (presentació breu) → Tale-Bot i activitats → pausa → Coding Set i activitats → aplicació a l’aula i posada en comú.')
    g.p('Treballarem amb paper i simulador. Els moviments reals, els accessoris i la lectura de les peces es contrastaran amb els robots quan en disposem.')
    g.heading('La nostra rutina')
    g.p('<b>Prediu → Programa → Comprova → Explica → Millora</b>')
    g.p('En parella, una persona planifica i explica; l’altra programa i comprova. Canvieu els rols. Abans de cada prova, recupereu la mateixa posició i orientació inicials.')
    g.table([['Quan…','Posem en joc…'],['Separem una tasca en parts','Descomposició'],['Identifiquem què es repeteix','Patrons'],['Triem les dades necessàries','Abstracció'],['Ordenem instruccions','Algorismes']],[WIDTH*.61,WIDTH*.39])
    g.p('La depuració acompanya tot el procés: identificar una diferència, proposar un canvi i tornar a comprovar.')
    g.p('No hi ha una llista tancada d’exercicis per al taller o per a casa. Continueu segons el vostre nivell i anoteu les proves i els dubtes al registre de la pàgina 8.','small')

    g.new('Índex de fitxes')
    g.p('Totes les fitxes contenen tres exercicis. Aquest índex serveix per trobar-les; no estableix un ordre obligatori de treball.','small')
    for prefix,title in [('tb-','Tale-Bot Pro'),('cs-','Matatalab Coding Set')]:
        g.heading(title)
        g.table([['Fitxa','Pàgina']]+[[name,str(PAGES[slug])] for slug,name in WORKSHEETS if slug.startswith(prefix)],[WIDTH-65,65],compact=True)
    g.p('Guia dels robots: p. 4 · Tale-Bot: p. 5 · Coding Set: p. 6<br/>Disseny d’aula: p. 7 · Registre: p. 8 · Sessió següent: p. 9','small')

    g.new('Què aporta cada robot?')
    g.heading('Coding Express · Les accions són a la via')
    g.p('Construïm el recorregut amb vies DUPLO i hi situem maons d’acció. Quan el tren hi passa, respon amb aturades, sons o llums. Permet anticipar què passarà en cada punt i narrar un trajecte.')
    g.p('Educació Infantil. En aquesta sessió el presentem amb imatges, sense pràctica. El sensor llig els maons; no detecta obstacles ni decideix una destinació.','small',after=20)
    g.heading('Tale-Bot Pro · Moviment, veu i traç')
    g.p('Introduïm les ordres amb botons del robot. Pot gravar i reproduir veu dins d’una ruta, repetir el programa complet i, amb els accessoris compatibles, dibuixar o empentar objectes. Els mapes OID compatibles ofereixen instruccions de veu.')
    g.p('La veu gravada no és reconeixement de parla. Un tapís imprés normal no té les funcions d’un mapa OID. La repetició afecta el programa complet.','small',after=20)
    g.heading('Coding Set · El programa queda a la vista')
    g.p('Les peces sobre el tauler permeten llegir, discutir i modificar el programa abans d’executar-lo. Els nombres abreugen moviments; els bucles delimiten el fragment repetit; les funcions permeten definir una seqüència i cridar-la des de diferents punts.')
    g.p('La torre llig el tauler i envia les ordres al robot. Les peces de definició i crida no admeten nombres davall.','small')
    g.p('Fonts: tutorials del portal i guies dels fabricants enllaçades a les diapositives de presentació dels robots.','small')

    g.new('Tale-Bot · Pensar abans de prémer')
    g.heading('Recorda')
    g.p('• Avançar i retrocedir desplacen el robot; girar només canvia l’orientació.<br/>• Anar enrere no canvia cap a on mira.<br/>• La repetició executa tota la base; tres vegades són tres execucions totals.<br/>• En els exercicis de dibuix suposem que el retolador està sempre baixat: repassar una línia no l’esborra.<br/>• En les activitats de capses, els braços empenten cap endavant.')
    g.heading('Propostes de treball')
    g.p(f'Predir i depurar: {ref("tb-prediu-el-resultat")} i {ref("tb-depura-el-codi")}.<br/>Escriure i abreujar: {ref("tb-escriu-el-codi")} i {ref("tb-refactoritza-el-codi")}.<br/>Interpretar i construir dibuixos: {ref("tb-quin-dibuix-fara")} i {ref("tb-dibuixa-per-parts")}.<br/>Aproximar-se i empentar: {ref("tb-des-de-quin-costat")} i {ref("tb-aproxima-i-empeny")}.')
    g.lines('Què he predit? Posició i orientació finals:',3)
    g.lines('Què he observat? On apareix la primera diferència?',3)
    g.lines('Què canviaria i per què?',3)

    g.new('Coding Set · Llegir el programa')
    g.table([['Element','Per a què serveix?'],['Moviment i nombre','El moviment indica l’acció; el nombre indica passos en moviments compatibles.'],['Inici i fi de bucle','Delimiten les ordres repetides. El nombre va davall de l’inici.'],['Definició de funció','Guarda la seqüència en una fila inferior.'],['Crida a funció','Executa la definició i després continua la principal.']],[145,WIDTH-145])
    g.p('Les peces de definició i crida no porten nombres. Una crida pot estar dins d’un bucle.')
    g.heading('Propostes de treball')
    g.p(f'Predir i depurar: {ref("cs-prediu-el-resultat")} i {ref("cs-depura-el-codi")}.<br/>Escriure i abreujar: {ref("cs-escriu-el-codi")} i {ref("cs-refactoritza-el-codi")}.<br/>Definir i delimitar: {ref("cs-divideix-i-crea-funcions")} i {ref("cs-que-pose-dins-del-bucle")}.<br/>Reutilitzar i combinar: {ref("cs-una-funcio-diferents-llocs")} i {ref("cs-combina-funcions-i-repeticions")}.')
    g.lines('Quines ordres s’executen una vegada? Quines es repeteixen?',3)
    g.lines('On continua la principal després d’una crida?',3)
    g.p('<b>Diferència clau:</b> Tale-Bot repeteix tota la base; Coding Set permet delimitar un fragment amb un bucle i reutilitzar una definició mitjançant crides.')

    g.new('Dissenyem una activitat d’aula')
    g.p('Partiu d’un contingut que ja treballeu. Prepareu una consigna i proveu una possible solució abans de portar-la a l’aula.','small')
    for label,count in [('Cicle, àrea i robot:',1),('Volem que l’alumnat aprenga a…',2),('Consigna que donarem:',2),('Què haurà de decidir o explicar l’alumnat?',2),('Tapís, materials i suports per participar:',2),('Una possible solució i com la comprovarem:',2),('Què observarem per saber si ho ha entés?',2)]:g.lines(label,count)

    g.new('Registre del treball autònom')
    g.p('Anota els exercicis que hages treballat, al taller o entre sessions. No cal completar totes les fitxes ni seguir-ne l’ordre. Si necessites més espai, continua en un full.','small',after=16)
    for n in range(1,3):
        g.heading(f'Prova {n}')
        for label in ['Exercici i pàgina:','Dificultat trobada:','Canvi provat i resultat:','Dubte pendent:']:g.lines(label,1)

    g.new('Per a la sessió següent')
    g.p('A partir del que hages treballat, prepara aquests tres elements per compartir-los. Pots portar el quadern, una fotografia o una explicació oral.')
    g.lines('Una solució explicada: què has fet i com l’has comprovada?',4)
    g.lines('Un error revisat: què passava, què has canviat i què has observat?',4)
    g.lines('Una possible aplicació a l’aula: amb quin grup i per aprendre què?',4)
    g.heading('Recursos per continuar')
    g.p('<link href="https://roboticadocents.github.io/sim/" color="#2563eb">Simulador: roboticadocents.github.io/sim/</link><br/><link href="https://roboticadocents.github.io/" color="#2563eb">Portal del curs: roboticadocents.github.io</link>')
    g.p('Al portal trobaràs activitats, materials imprimibles, solucionaris, tutorials i situacions d’aprenentatge. Els solucionaris permeten contrastar una prova després d’haver-la intentada.','small')
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
for title,page in [('Guia de treball',1),('Índex',3),('Capacitats dels robots',4),('Disseny d’aula',7),('Registre',8),('Sessió següent',9)]:writer.add_outline_item(title=title,page_number=page-1)
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
md.write_text(source)
print(f'{OUT.relative_to(ROOT)} · {len(writer.pages)} pàgines; referències MARP sincronitzades')
