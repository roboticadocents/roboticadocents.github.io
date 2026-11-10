#!/usr/bin/env python3
"""Rebuild the four original classroom kits and their web previews.
Requires reportlab, Pillow and pdftoppm. No network assets or fonts required.
"""
from pathlib import Path
import subprocess
import tempfile
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Embed fonts so printing does not depend on PDF viewer substitutions.
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
pdfmetrics.registerFont(TTFont("KitSans", str(FONT_DIR / "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("KitSans-Bold", str(FONT_DIR / "DejaVuSans-Bold.ttf")))
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '_assets/activitats/kits'
OUT.mkdir(parents=True, exist_ok=True)
W, H = A4
INK = colors.HexColor('#0f172a')
BLUE = colors.HexColor('#ebf5fd')
TITLES = {'maleta-personatges': ('La maleta dels personatges', 'Educació Infantil'), 'fabrica-monstres': ('La fàbrica de monstres', 'Primer cicle'), 'correu-pixels': ('El correu secret de píxels', 'Segon cicle'), 'xarxa-missatgers': ('La xarxa de missatgers', 'Tercer cicle')}

def text(x, y, s, size=12, bold=False):
    font = 'KitSans-Bold' if bold else 'KitSans'
    assert x + pdfmetrics.stringWidth(s, font, size) <= c._pagesize[0]-20, f'Text overflows: {s}'
    c.setFillColor(INK); c.setFont(font, size); c.drawString(x, y, s)
def page(label, hint):
    global num
    num += 1
    c.setFillColor(BLUE); c.rect(0, H-130, W, 130, fill=1, stroke=0)
    text(36,H-35,'ROBÒTICA 200 / MATERIAL D’AULA',10,True)
    text(36,H-67,title,22,True); text(36,H-91,f'{level}  |  {label}',12)
    text(36,H-113,hint,10)
    text(36,24,'Imprimiu en A4 al 100%. El color no és necessari per resoldre els reptes.',9)
    text(W-60,24,str(num),10)
    c.setStrokeColor(INK); c.setLineWidth(1)
def end(): c.showPage()
def box(x,y,w,h):
    c.setStrokeColor(colors.HexColor('#64748b')); c.setFillColor(colors.white)
    c.roundRect(x,y,w,h,8,fill=1,stroke=1)
def lines(y, labels):
    for s in labels:
        text(42,y,s,12); y-=25

def icon(kind,x,y,scale=1):
    c.saveState(); c.translate(x,y); c.scale(scale,scale)
    c.setStrokeColor(INK); c.setFillColor(colors.HexColor('#e2e8f0')); c.setLineWidth(2)
    if kind=='ull':
        c.ellipse(-18,-12,18,12,fill=0); c.circle(0,0,5,fill=1)
    elif kind=='pota':
        c.line(-8,17,-8,-14); c.line(-8,-14,15,-14)
    elif kind=='banya':
        p=c.beginPath(); p.moveTo(-15,-15); p.lineTo(0,20); p.lineTo(15,-15); p.close(); c.drawPath(p,fill=1)
    elif kind=='gorra':
        c.arc(-22,-12,22,24,0,180); c.line(-24,6,30,6)
    elif kind=='botes':
        c.rect(-20,-15,13,34); c.rect(6,-15,13,34); c.line(-20,-15,-28,-15); c.line(6,-15,28,-15)
    elif kind=='paraigua':
        p=c.beginPath(); p.moveTo(-27,3); p.curveTo(-20,37,20,37,27,3); p.close(); c.drawPath(p,fill=0); c.line(0,3,0,-24); c.arc(-14,-31,0,-17,180,180)
    elif kind=='aigua':
        c.roundRect(-13,-25,26,43,5,fill=0); c.rect(-7,18,14,8); c.line(-9,-7,9,-7)
    elif kind=='tovallola':
        c.rect(-24,-17,48,34); c.line(-18,-17,-18,17); c.line(18,-17,18,17)
    elif kind=='abric':
        p=c.beginPath(); p.moveTo(-12,25); p.lineTo(-30,10); p.lineTo(-21,-2); p.lineTo(-14,3); p.lineTo(-14,-25); p.lineTo(14,-25); p.lineTo(14,3); p.lineTo(21,-2); p.lineTo(30,10); p.lineTo(12,25); p.close(); c.drawPath(p,fill=0); c.line(0,20,0,-25)
    elif kind=='llibre':
        c.rect(-24,-18,48,36); c.line(0,-18,0,18); c.line(-18,7,-6,7); c.line(6,7,18,7)
    elif kind=='pilota':
        c.circle(0,0,23); c.line(-23,0,23,0); c.arc(-12,-23,12,23,90,180)
    c.restoreState()
def weather(kind,x,y):
    c.saveState(); c.translate(x,y); c.setStrokeColor(INK); c.setLineWidth(2)
    if kind==0:
        c.circle(0,0,15)
        for dx,dy in [(0,27),(0,-27),(27,0),(-27,0),(20,20),(-20,20),(20,-20),(-20,-20)]:
            c.line(dx*.75,dy*.75,dx,dy)
    elif kind==1:
        p=c.beginPath(); p.moveTo(-35,-22); p.lineTo(-4,25); p.lineTo(28,-22); p.close(); c.drawPath(p)
        c.line(-16,7,-4,1); c.line(-4,1,6,8)
    else:
        c.ellipse(-32,-2,32,25)
        for dx in [-18,0,18]: c.line(dx,-10,dx-7,-28)
    c.restoreState()

def cards(items):
    for i,(label,kind) in enumerate(items):
        x=36+(i%3)*177; y=H-285-(i//3)*155
        box(x,y,165,140); icon(kind,x+82,y+83,1.15); text(x+12,y+17,label,12,True)
def grid(x,y,rows=None,size=28):
    for r in range(5):
        for col in range(5):
            c.setFillColor(INK if rows and rows[r][col]=='1' else colors.white)
            c.setStrokeColor(INK); c.rect(x+col*size,y-r*size,size,size,fill=1)
    c.setFillColor(INK)
    for r in range(5): text(x-22,y-r*size+8,str(r+1),10)

def monster(x,y):
    c.setStrokeColor(INK); c.setFillColor(BLUE); c.roundRect(x-50,y-45,100,100,12,fill=1)
    for dx in [-20,20]: icon('ull',x+dx,y+15,.65)
    for dx in [-25,25]: icon('pota',x+dx,y-60,.7)
    icon('banya',x,y+70,.8)

for slug,(title,level) in TITLES.items():
    num=0; c=canvas.Canvas(str(OUT/f'{slug}.pdf'),pagesize=A4)
    c.setTitle(f'{title} - kit imprimible'); c.setAuthor('Robòtica per a docents')
    if slug=='maleta-personatges':
        page('01 / Targetes per retallar','Un joc per grup de 3 o 4. Retalleu els rectangles; un adult prepara les peces.')
        cards([('Gorra','gorra'),('Botes','botes'),('Paraigua','paraigua'),('Aigua','aigua'),('Tovallola','tovallola'),('Abric','abric'),('Llibre','llibre'),('Pilota','pilota')]); end()
        page('02 / La maleta','Col·loqueu les peces dins. Reserveu fora les que voleu discutir.')
        c.roundRect(85,210,425,400,30); c.roundRect(220,610,155,30,10)
        text(118,570,'Preparem la maleta de:',16,True); c.line(118,535,475,535)
        text(118,490,'Anem a:',16,True); c.line(118,455,475,455)
        text(118,255,'Trieu 3 objectes i expliqueu per què.',14); end()
        page('03 / Destins i pistes','Trieu un destí. Les pistes es lligen en veu alta i també es representen amb gestos.')
        for i,(dest,pistas) in enumerate([('PLATJA',['Fa sol. Ens banyarem.','Després ens haurem d’eixugar.']),('MUNTANYA',['Fa fred. Caminarem per fang.','Necessitarem beure aigua.']),('DIA DE PLUJA',['Plou i hi ha bassals.','Després llegirem dins de casa.'])]):
            y=510-i*155; box(36,y,523,135); text(55,y+100,dest,18,True); text(55,y+70,pistas[0],14); text(55,y+43,pistas[1],14); weather(i,480,y+73)
        end()
        page('04 / Exemple i conversa','Guia docent. No és una llista única de respostes correctes.')
        lines(650,['1. Platja: fa sol, ens banyarem i ens eixugarem.','2. Una tria possible: gorra, aigua i tovallola.','3. La pilota també es pot defensar: què deixaríem fora?'])
        for i,k in enumerate(['gorra','aigua','tovallola']): icon(k,130+i*160,480,1.5)
        lines(385,['Canvi de pista: ara fa fred i caminem per fang.','Quina peça canviaries? Quina pista justifica el canvi?','Observem: relaciona una peça amb una pista?','Revisa la tria quan canvia una condició?'])
        end()
    elif slug=='fabrica-monstres':
        page('01 / Peces per retallar','Imprimiu aquesta pàgina dues vegades per parella. Afegiu un cos de la pàgina 2.')
        cards([('Ull','ull')]*4+[('Pota','pota')]*3+[('Banya','banya')]); end()
        page('02 / Dos cossos de muntatge','Retalleu els cossos. Poseu les peces damunt; no cal enganxar-les.')
        for y in [440,155]:
            c.roundRect(190,y,215,220,28); text(235,y+95,'COS',24,True)
        end()
        page('03 / Recepta i comprovació','Marqueu la posició respecte del cos. Intercanvieu la recepta sense mostrar el model.')
        for i,s in enumerate(['1. Cos: posa’l al centre.','2. Ulls: quants? ____  On? ____________________','3. Potes: quantes? ____  On? __________________','4. Banyes: quantes? ____  On? _________________']):
            box(36,585-i*85,523,65); text(50,610-i*85,s,12)
        lines(235,['Hem obtingut el mateix? __________________________','La instrucció que hem canviat: _____________________','Ara diu: ________________________________________']); end()
        page('04 / Una recepta que es pot executar','Guia docent i exemple per explicar la primera ronda.')
        monster(300,500)
        lines(340,['1. Poseu un cos al centre.','2. Poseu dos ulls dins del cos, a la part de dalt.','3. Poseu dues potes davall del cos, una a cada costat.','4. Poseu una banya damunt del cos, al centre.'])
        lines(200,['Error per discutir: «posa ulls» no diu quants ni on.','Compareu quantitat i posició, no la bellesa del dibuix.','Una recepta diferent pot descriure el mateix monstre.']); end()
    elif slug=='correu-pixels':
        rows=['00100','01110','11111','00100','00100']
        codes=['2, 1, 2','1, 3, 1','0, 5','2, 1, 2','2, 1, 2']
        page('01 / Exemple resolt','Sempre comencem comptant les caselles blanques, encara que siguen zero.')
        grid(85,570,rows,43)
        for i,s in enumerate(codes): text(355,580-i*43,f'Fila {i+1}: {s}',16,True)
        lines(280,['Llegiu cada fila d’esquerra a dreta.','Alternem: blanques, negres, blanques, negres...','Fila 3: 0 blanques i 5 negres. El 0 inicial és necessari.','Cada fila ha de sumar 5. No s’escriuen zeros al final.']); end()
        page('02 / Emissor','Dibuixa una icona en la graella. Envia només la pàgina 3 al receptor.')
        grid(205,575,None,42)
        lines(295,['Nom del missatge: ______________________________','Abans d’enviar: cada fila suma 5?','Has començat comptant les blanques?','Has separat les cinc files?']); end()
        page('03 / Missatge codificat','Retalla per la línia. El receptor no ha de veure el dibuix original.')
        for i in range(5): text(50,650-i*40,f'Fila {i+1}: ______________________________________',15)
        c.setDash(5,4); c.line(36,445,559,445); c.setDash()
        text(45,410,'RECEPTOR / Reconstrueix sense mirar l’original',14,True)
        grid(210,355,None,39); text(45,100,'Fila revisada i motiu: _______________________________',12); end()
        page('04 / Taller de reparació','Guia docent. Tapeu les respostes durant la primera prova.')
        lines(645,['A. Codi rebut per a una fila de 5 caselles: 2, 2','Què podem detectar? La suma és 4: falta informació.','No podem deduir amb certesa quina casella falta.','','B. Codi rebut: 1, 3, 1','La suma és 5. Això garanteix que el dibuix siga correcte?','No: el codi 2, 1, 2 també suma 5 i dibuixa una altra fila.','','C. Comparem maneres d’escriure una fila negra.','Amb bits: 1 1 1 1 1. Amb recomptes: 0, 5.','Comptem nombres escrits, no bits ni mida d’un fitxer.','Els recomptes no sempre fan el missatge més curt.']); end()
    else:
        page('01 / Mapa de la xarxa','Un node pot ser una taula. Només es pot enviar per les línies dibuixades.')
        pts={'A':(95,525),'B':(285,645),'C':(285,405),'D':(490,525)}
        for a,b in [('A','B'),('A','C'),('B','C'),('B','D'),('C','D')]: c.line(*pts[a],*pts[b])
        for name,(x,y) in pts.items():
            c.setFillColor(colors.white); c.circle(x,y,30,fill=1); text(x-7,y-7,name,22,True)
        lines(285,['Origen A / Destí D. Camins: A-B-D o A-C-D.','També podeu passar per B-C. Compteu cada salt.','Protocol: espera un torn, mou un paquet un enllaç.','Cada enllaç admet un paquet per torn, en total.']); end()
        page('02 / Paquets per retallar','Retalleu els quatre paquets. El receptor només coneix el total i l’identificador.')
        for i,word in enumerate(['EL','ROBOT','PORTA','LLIBRES']):
            y=525-i*125; box(36,y,523,110)
            text(52,y+82,f'Missatge M1 | Origen A | Destí D | {i+1} de 4',13,True)
            text(52,y+38,word,23,True)
        end()
        page('03 / Incidències i confirmacions','Retalleu les targetes. Introduïu només una incidència cada ronda.')
        labels=[('CAMÍ TANCAT','Tanqueu B-D. Busqueu un altre camí.'),('PAQUET RETINGUT','El docent reté el paquet 2 en aquesta ronda.'),('ARRIBADA DESORDENADA','Feu arribar el paquet 4 abans del paquet 3.'),('CONFIRMACIÓ M1','He rebut: 1 / 2 / 3 / 4. Falta: __________')]
        for i,(a,b) in enumerate(labels):
            y=525-i*125; box(36,y,523,110); text(52,y+75,a,17,True); text(52,y+40,b,12)
        end()
        page('04 / Registre i solució docent','Un registre per equip. La confirmació torna a A pels mateixos enllaços.')
        for i,s in enumerate(['Torn','Paquet','De','A']): text(45+i*130,640,s,12,True)
        for r in range(9):
            y=620-r*30; c.line(36,y,559,y)
            for x in [36,166,296,426,559]: c.line(x,y,x,y-30)
        c.line(36,350,559,350)
        lines(285,['Solució: EL ROBOT PORTA LLIBRES.','Si falta 2/4, sabem què falta, però no el seu contingut.','D demana «M1, reenvia 2»; A conserva una còpia.','En tancar B-D, B-C-D és una alternativa des de B.','Els paquets es poden ordenar gràcies als números.','Aquesta és una simulació amb torns, no Internet real.']); end()
    c.save()
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['pdftoppm','-scale-to','1400','-png',str(OUT/f'{slug}.pdf'),str(Path(tmp)/'page')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
        files=sorted(Path(tmp).glob('page-*.png'))
        # Two instructional previews per activity, using the actual kit artwork.
        chosen=[2,3] if slug=='maleta-personatges' else ([0,3] if slug=='fabrica-monstres' else ([0,2] if slug=='correu-pixels' else [0,1]))
        for n,index in enumerate(chosen,1):
            im=Image.open(files[index]).convert('RGB')
            im.save(OUT/f'{slug}-{n}.webp','WEBP',quality=90)
print('Generated four 4-page kits and eight web previews.')

rows=['00100','01110','11111','00100','00100']
codes=['2, 1, 2','1, 3, 1','0, 5','2, 1, 2','2, 1, 2']

# Landscape explainers show the flow of play; the second web image shows real kit pieces.
with tempfile.TemporaryDirectory() as tmp:
    for slug,(title,level) in TITLES.items():
        target=Path(tmp)/f'{slug}.pdf'
        c=canvas.Canvas(str(target),pagesize=(960,460))
        c.setFillColor(colors.white); c.rect(0,0,960,460,fill=1,stroke=0)
        c.setFillColor(BLUE); c.roundRect(16,16,928,428,20,fill=1,stroke=0)
        text(38,405,title,26,True); text(38,376,level+' / Així es juga',14)
        for i in range(3):
            box(34+i*308,48,280,300)
            c.setFillColor(INK); c.circle(59+i*308,322,14,fill=1)
            c.setFillColor(colors.white); c.setFont('KitSans-Bold',12); c.drawCentredString(59+i*308,318,str(i+1))
        if slug=='maleta-personatges':
            text(83,317,'Escoltem les pistes',14,True)
            weather(0,173,235); text(61,160,'Sol, bany i eixugar-se.',13)
            text(391,317,'Triem tres objectes',14,True)
            for i,k in enumerate(['gorra','aigua','tovallola']): icon(k,390+i*75,225,1)
            text(366,160,'Quina pista ho explica?',13)
            text(699,317,'Canvia el destí',14,True)
            weather(1,790,250); icon('botes',755,160); icon('abric',840,160)
            text(677,90,'Què conservem? Què canviem?',12)
        elif slug=='fabrica-monstres':
            text(83,317,'Creem un model',14,True); monster(175,200)
            text(391,317,'Escrivim la recepta',14,True)
            for i,s in enumerate(['1 cos al centre','2 ulls dins, dalt','2 potes davall','1 banya damunt']): text(370,260-i*38,s,15)
            text(699,317,'Muntem i comparem',14,True); monster(790,200)
            text(677,79,'Si no coincideix, revisem un pas.',12)
        elif slug=='correu-pixels':
            text(83,317,'Dibuixem',14,True); grid(105,250,rows,27)
            text(391,317,'Enviem recomptes',14,True)
            for i,s in enumerate(codes): text(390,260-i*33,f'{i+1}:   {s}',16)
            text(699,317,'Reconstruïm',14,True); grid(720,250,rows,27)
            text(677,79,'Comparem amb l’original.',12)
        else:
            text(83,317,'Separem en paquets',14,True)
            for i,s in enumerate(['1/4  EL','2/4  ROBOT','3/4  PORTA','4/4  LLIBRES']):
                box(63,243-i*44,220,35); text(76,254-i*44,s,13,True)
            text(391,317,'Triem una ruta',14,True)
            pts={'A':(375,200),'B':(478,265),'C':(478,130),'D':(585,200)}
            for a,b in [('A','B'),('A','C'),('B','C'),('B','D'),('C','D')]: c.line(*pts[a],*pts[b])
            for name,(x,y) in pts.items():
                c.setFillColor(colors.white); c.circle(x,y,19,fill=1); text(x-5,y-5,name,14,True)
            text(699,317,'Ordenem i confirmem',14,True)
            for i,s in enumerate(['EL ROBOT','PORTA LLIBRES','Rebuts: 1, 2, 3, 4','Falta 2? Demanem 2.']): text(682,260-i*40,s,15,i<2)
        c.save()
        subprocess.run(['pdftoppm','-scale-to','1600','-singlefile','-png',str(target),str(Path(tmp)/slug)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
        Image.open(Path(tmp)/f'{slug}.png').convert('RGB').save(OUT/f'{slug}-inici.webp','WEBP',quality=92)
print('Generated four landscape activity explainers.')
