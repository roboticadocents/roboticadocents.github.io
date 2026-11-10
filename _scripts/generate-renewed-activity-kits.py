#!/usr/bin/env python3
"""Rebuild nine classroom kits and 27 web diagrams, using local vector artwork.
Requires ReportLab, Pillow, pdftoppm and DejaVu Sans fonts. No network access.
Run from any directory. Existing Robot Humà and the four new kits are untouched.
"""
from pathlib import Path
import itertools
import math
import subprocess
import tempfile
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'_assets/activitats/kits'
OUT.mkdir(parents=True,exist_ok=True)
for n,f in [('Kit','DejaVuSans.ttf'),('KitB','DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(n,'/usr/share/fonts/truetype/dejavu/'+f))
INK=HexColor('#0f172a');MUTED=HexColor('#64748b');BLUE=HexColor('#ebf5fd')
W,H=A4
C=None
TITLES={
'pixels-binaris':('Píxels: un dibuix en 25 bits','Primer cicle'),
'xarxa-ordenacio':('La xarxa que ordena','Tercer cicle'),
'laberint-debugging':('El laberint dels errors','Primer cicle'),
'condicionals-moviment':('La màquina de les decisions','Primer cicle'),
'criptografia-cesar':('El taller de missatges Cèsar','Tercer cicle'),
'bucles-coreografia':('La coreografia dels bucles','Primer cicle'),
'patrons-simetries':('Detectius de patrons','Educació Infantil'),
'descomposicio-receptes':('Receptes per preparar un enviament','Segon cicle'),
'dades-classificacio':('El museu de les dades','Segon cicle')}
L=['10000','10000','10000','10000','11111']
ARROW=['00100','00010','11111','00010','00100']
STAGES=[[(0,1),(2,3)],[(0,2),(1,3)],[(1,2)]]
ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
TASKS=[('O','Obri el sobre'),('M','Dibuixa el missatge'),('I','Introdueix el missatge'),('T','Tanca el sobre'),('E','Escriu el destí'),('C','Comprova l’enviament'),('L','Lliura l’enviament')]
EDGES=[('O','I'),('M','I'),('I','T'),('T','C'),('E','C'),('C','L')]

def text(x,y,s,size=11,bold=False):
    font='KitB' if bold else 'Kit'
    assert x+pdfmetrics.stringWidth(s,font,size)<=C._pagesize[0]-22, f'Overflow: {s}'
    C.setFillColor(INK);C.setFont(font,size);C.drawString(x,y,s)
def lines(x,y,items,size=11,gap=23):
    for s in items:text(x,y,s,size);y-=gap

def para(x,y,s,width=510,size=11,gap=18):
    words=s.split();line=''
    for word in words:
        if pdfmetrics.stringWidth((line+' '+word).strip(),'Kit',size)>width:
            text(x,y,line,size);y-=gap;line=word
        else:line=(line+' '+word).strip()
    if line:text(x,y,line,size);y-=gap
    return y

def box(x,y,w,h,fill=white):
    C.setStrokeColor(MUTED);C.setLineWidth(.8);C.setFillColor(fill)
    C.roundRect(x,y,w,h,7,fill=1,stroke=1)
def line(x,y,xx,yy):C.setStrokeColor(INK);C.setLineWidth(1);C.line(x,y,xx,yy)
def header(n,label,hint):
    C.setFillColor(BLUE);C.rect(0,H-130,W,130,fill=1,stroke=0)
    text(36,H-32,'ROBÒTICA 200 / MATERIAL D’AULA',10,True)
    text(36,H-65,TITLES[slug][0],20,True)
    text(36,H-90,f'{TITLES[slug][1]} | {label}',11)
    text(36,H-113,hint,9)
    text(36,24,'A4 al 100%. Apte per a blanc i negre. Solucions docents: pàgina 4.',9)
    text(W-50,24,str(n),10)
def end():C.showPage()
def shape(kind,x,y,size=18,striped=False):
    C.saveState();C.setStrokeColor(INK);C.setLineWidth(1.7);C.setFillColor(white)
    p=C.beginPath()
    if kind=='O':p.circle(x,y,size)
    elif kind=='T':p.moveTo(x,y+size);p.lineTo(x-size,y-size);p.lineTo(x+size,y-size);p.close()
    elif kind=='S':
        for i in range(10):
            a=math.pi/2+i*math.pi/5;r=size if i%2==0 else size*.42
            xx=x+math.cos(a)*r;yy=y+math.sin(a)*r
            if i==0:p.moveTo(xx,yy)
            else:p.lineTo(xx,yy)
        p.close()
    elif kind=='Q':p.rect(x-size,y-size,size*2,size*2)
    C.drawPath(p,stroke=1,fill=0)
    if striped:
        C.clipPath(p,stroke=0,fill=0)
        for xx in range(int(x-size*2),int(x+size*2),7):line(xx,y-size*2,xx+size*2,y+size*2)
    C.restoreState()
def grid(x,y,rows=None,n=5,s=34):
    for r in range(n):
        for col in range(n):
            C.setFillColor(INK if rows and rows[r][col]=='1' else white);C.setStrokeColor(MUTED)
            C.rect(x+col*s,y+(n-1-r)*s,s,s,fill=1,stroke=1)
    for r in range(n):text(x-17,y+(n-r-.6)*s,str(r+1),9)
def move_arrow(kind,x,y,size=1):
    C.saveState();C.translate(x,y);C.rotate({'U':0,'R':-90,'B':180,'E':90}[kind]);C.scale(size,size)
    C.setStrokeColor(INK);C.setLineWidth(3);C.line(0,-18,0,18);C.line(0,18,-11,7);C.line(0,18,11,7);C.restoreState()
def action(k,x,y,size=1):
    C.saveState();C.translate(x,y);C.scale(size,size)
    C.setStrokeColor(INK);C.setLineWidth(2.3);C.setLineCap(1)
    if k=='M':
        for sign in [-1,1]:
            p=C.beginPath();p.moveTo(sign*26,-20);p.lineTo(sign*18,9)
            p.curveTo(sign*16,17,sign*5,15,sign*7,6)
            p.lineTo(sign*10,-3);p.lineTo(sign*2,11);C.drawPath(p)
        for dx in [-13,0,13]:C.line(dx,23,dx,31)
    elif k=='E':
        C.circle(0,23,10);C.line(0,13,0,-24)
        C.line(-25,4,25,4);C.line(-25,4,12,-11);C.line(25,4,-12,-11)
        for dx in [-19,19]:C.circle(dx,4,4)
    else:
        C.line(-35,-9,35,-9);C.line(-26,-9,-26,-27);C.line(26,-9,26,-27)
        C.line(0,29,0,-1);C.line(0,-1,-8,8);C.line(0,-1,8,8)
        C.line(-13,-5,13,-5)
    C.restoreState()

def connector(x,y,xx,yy):
    dx,dy=xx-x,yy-y
    f=1/max(abs(dx)/42,abs(dy)/27)
    sx,sy=x+dx*f,y+dy*f; ex,ey=xx-dx*f,yy-dy*f
    line(sx,sy,ex,ey)
    a=math.atan2(dy,dx)
    for da in [-.55,.55]:line(ex,ey,ex-9*math.cos(a+da),ey-9*math.sin(a+da))

def sequence(x,y,seq,s=44,directional=True):
    for i,a in enumerate(seq):
        box(x+i*(s+5),y,s,52)
        if directional and a in 'URBE':move_arrow(a,x+i*(s+5)+s/2,y+26,.6)
        else:text(x+i*(s+5)+12,y+18,a,16,True)
        text(x+i*(s+5)+4,y-13,str(i+1),8)
def maze(x,y,s=90,route=False):
    for r in range(4):
        for col in range(4):
            C.setFillColor(BLUE if (col,r) in [(1,2),(2,2)] else white);C.setStrokeColor(MUTED)
            C.rect(x+col*s,y+(3-r)*s,s,s,fill=1)
            if (col,r) in [(1,2),(2,2)]:text(x+(col+.35)*s,y+(3-r+.4)*s,'X',16,True)
    for i,a in enumerate('ABCD'):text(x+(i+.4)*s,y+4*s+9,a,10,True)
    for i in range(4):text(x-18,y+(3-i+.4)*s,str(i+1),10)
    text(x+.35*s,y+.4*s,'S',16,True);text(x+3.35*s,y+3.4*s,'M',16,True)
    if route:
        C.setStrokeColor(INK);C.setDash(4,3);C.setLineWidth(2)
        p=C.beginPath();p.moveTo(x+.5*s,y+.5*s);p.lineTo(x+.5*s,y+2.5*s);p.lineTo(x+3.5*s,y+2.5*s);p.lineTo(x+3.5*s,y+3.5*s);C.drawPath(p);C.setDash()
def network(x,y,dx=110,dy=65):
    for r in range(4):
        line(x,y-r*dy,x+4*dx,y-r*dy);text(x-20,y-r*dy-4,str(r+1),10)
    for j,stage in enumerate(STAGES,1):
        for pair,(a,b) in enumerate(stage):
            # Offset overlapping comparators within stage 2: they do not join.
            xx=x+j*dx+((pair-.5)*dx*.28 if j==2 else 0);line(xx,y-a*dy,xx,y-b*dy)
            for r in [a,b]:C.setFillColor(INK);C.circle(xx,y-r*dy,4,fill=1,stroke=0)
        text(x+j*dx-10,y+25,str(j),11,True)
    text(x,y+48,'ENTRADA',9,True);text(x+4*dx-28,y+48,'EIXIDA',9,True)
def wheel(x,y,r,label,shift=0):
    C.setStrokeColor(INK);C.circle(x,y,r);C.circle(x,y,3)
    for i,ch in enumerate(ALPHABET):
        a=math.pi/2-(i-shift)*2*math.pi/26
        text(x+math.cos(a)*(r-15)-4,y+math.sin(a)*(r-15)-4,ch,11,True)
    text(x-38,y-4,label,10,True)
def table(x,y,headers,rows,widths,rowh=32):
    for r,row in enumerate([headers]+rows):
        xx=x
        for col,(val,w) in enumerate(zip(row,widths)):
            C.setStrokeColor(MUTED);C.setFillColor(BLUE if r==0 else white)
            C.rect(xx,y-(r+1)*rowh,w,rowh,fill=1)
            text(xx+6,y-r*rowh-rowh*.65,str(val),10,r==0);xx+=w

def label_card(x,y,w,h,label,symbol=None):
    box(x,y,w,h)
    if symbol:shape(symbol,x+w/2,y+h*.65,18)
    text(x+10,y+16,label,11,True)
def data_card(x,y,i,w=123,h=128):
    box(x,y,w,h)
    shape('O' if i<4 else 'T',x+w/2,y+75,24 if i%4>=2 else 15,i%2==1)
    text(x+9,y+12,f'P{i+1}',12,True)
def instruction_diagrams(kind):
    # Content-specific overview, example and repair visuals; all are vector-drawn.
    if slug=='pixels-binaris':
        if kind==0:
            text(40,321,'1. Llegim el codi',17,True);lines(40,278,['1 0 0 0 0']*4+['1 1 1 1 1'],17,36)
            text(360,321,'2. Pintem per files',17,True);grid(385,103,L,s=36)
            text(684,321,'3. Comprovem',17,True);lines(684,268,['5 files de 5 valors.','0 = blanc; 1 = negre.','Mateix ordre, mateix dibuix.'],13,35)
        elif kind==1:
            text(42,323,'Una fila és una seqüència',19,True);sequence(44,213,['0','0','1','0','1'],s=63)
            for i,v in enumerate('00101'):
                C.setFillColor(INK if v=='1' else white);C.setStrokeColor(INK);C.rect(453+i*78,212,50,50,fill=1)
            lines(45,140,['Llegim d’esquerra a dreta. En acabar, baixem a la fila següent.','El dibuix complet té 25 valors binaris: 25 bits en aquest model.'],14,31)
        else:
            text(42,322,'Codi rebut: 1 0 0 0',22,True);text(42,276,'Falta un valor per completar cinc caselles.',16)
            lines(42,211,['No sabem quina posició s’ha perdut.','Demanem que es reenvie la fila completa.','Una fila de cinc valors també pot contindre un valor equivocat.'],16,40)
    elif slug=='xarxa-ordenacio':
        if kind<2:
            network(95,285,170,60)
            text(45,55,'En cada comparador: menor al canal de dalt; major al de baix.',15)
            if kind==1:lines(805,290,['3,1,4,2','1,3,2,4','1,3,2,4','1,2,3,4'],12,44)
        else:
            lines(45,300,['Sense l’últim comparador: 1, 3, 2, 4.','Els extrems estan bé, però el centre encara no està ordenat.','Compareu els canals 2 i 3: obtenim 1, 2, 3, 4.'],19,55)
    elif slug=='laberint-debugging':
        if kind==0:
            maze(65,85,56,True);text(400,310,'1. Prediem',20,True);text(400,270,'2. Provem sense canviar el programa',17,True);text(400,230,'3. Registrem i tornem a provar',17,True)
            sequence(400,120,['U','U','R','R','R','U'],s=66)
        elif kind==1:
            for i,k in enumerate('URBE'):
                x=43+i*230;box(x,100,208,240);move_arrow(k,x+104,245,1.3)
                text(x+20,145,{'U':'Amunt','R':'Dreta','B':'Avall','E':'Esquerra'}[k],17,True)
            text(45,58,'Les direccions són fixes al paper. No són girs del robot.',16)
        else:
            text(40,317,'ABANS / topa a la segona ordre',18,True);sequence(40,222,['U','R','U','R','R','U'],s=57)
            text(510,317,'DESPRÉS / intercanviem 2 i 3',18,True);sequence(510,222,['U','U','R','R','R','U'],s=57)
            lines(42,148,['La primera seqüència intenta entrar a B3.','Reiniciem a A4 i provem la nova ruta sencera.'],17,35)
    elif slug=='condicionals-moviment':
        if kind==0:
            shape('S',140,235,57);text(55,115,'Entrada: estrela',16,True)
            box(310,180,300,110);text(334,242,'Té una estrela?',20,True)
            line(212,235,310,235);line(610,260,712,300);line(610,210,712,150)
            shape('Q',795,300,26);shape('O',795,150,26)
            text(700,342,'SÍ / llibre',16,True);text(700,90,'NO / música',16,True)
        elif kind==1:
            for i,(k,label,result) in enumerate([('S','Estrela','LLIBRE'),('O','Cercle','MÚSICA'),('T','Triangle','MÚSICA')]):
                x=45+i*315;box(x,100,285,245);shape(k,x+142,260,36)
                text(x+20,185,label,18,True);text(x+20,137,'Resposta: '+result,15,True)
            text(45,55,'«Si no» inclou totes les entrades que no tenen estrela.',16)
        else:
            for i,k in enumerate('SSOOTT'):
                x=40+i*156;box(x,185,140,148);shape(k,x+70,266,24)
                if i%2==0:
                    for dx in [20,45,70,95,120]:C.setFillColor(INK);C.circle(x+dx,207,2,fill=1,stroke=0)
            lines(45,135,['Estrela I punts: només la primera targeta.','Estrela O punts: targetes 1, 2, 3 i 5.'],18,40)
    elif slug=='criptografia-cesar':
        if kind==0:
            wheel(180,220,110,'EXTERIOR');wheel(445,220,91,'INTERIOR',shift=3)
            lines(590,310,['A exterior amb D interior.','Xifrar: exterior > interior.','Desxifrar: interior > exterior.','Clau +3.'],14,45)
        elif kind==1:
            lines(45,310,['ALFABET: A B C D E F ... X Y Z','XIFRAT:  D E F G H I ... A B C','HOLA > KROD','ZOO > CRR'],22,60)
        else:lines(45,310,['KROD amb clau +3 torna a HOLA.','Per desxifrar, retrocedim tres posicions.','Aquesta roda té només 26 desplaçaments.','És un joc de substitució, no protecció per a secrets reals.'],20,57)
    elif slug=='bucles-coreografia':
        if kind==0:
            text(44,320,'Un bloc de tres accions',20,True);sequence(44,206,['M','E','T'],s=75,directional=False)
            text(400,282,'REPETEIX 3 VEGADES',23,True)
            lines(400,219,['M E T | M E T | M E T','3 voltes × 3 accions = 9 accions.'],20,44)
        elif kind==1:
            for i,(k,label) in enumerate([('M','Mans'),('E','Espatlles'),('T','Taula')]):
                x=45+i*315;box(x,100,285,245);action(k,x+142,250,1.6)
                text(x+25,150,k+' / '+label,20,True)
            text(45,55,'Una acció per símbol. També es pot fer assenyalant.',16)
        else:lines(45,310,['REPETEIX 3: [M E T]  >  9 accions','REPETEIX 3: [M E]; després T  >  7 accions','El límit del bloc canvia el que es repeteix.'],20,65)
    elif slug=='patrons-simetries':
        if kind==0:
            for i,k in enumerate('OOT'*3):shape(k,75+i*100,245,24)
            text(45,115,'Busquem el tros més curt que repetim: cercle, cercle, triangle.',18,True)
        elif kind==1:
            for i,k in enumerate('OOT'):
                shape(k,110+i*135,245,30)
            lines(535,300,['Cercle = toca els genolls.','Triangle = alça una mà.','Genolls, genolls, mà.'],17,45)
            text(45,90,'Canvien els materials. Es conserva l’ordre A A B.',18,True)
        else:
            for i,k in enumerate('OOTOOTOO'):shape(k,75+i*100,245,24)
            text(865,230,'?',34,True)
            text(45,110,'Si repetim A A B, falta un triangle. Expliquem la regla.',18,True)
    elif slug=='descomposicio-receptes':
        if kind==0:
            for i in range(3):box(40+i*315,100,285,245)
            text(58,305,'1. Sobre buit',18,True)
            box(90,157,180,110);line(90,267,180,206);line(180,206,270,267)
            text(373,305,'2. Set passos',18,True)
            lines(375,260,['Obrir, preparar, introduir...','Què ha de passar abans?','Una acció per targeta.'],15,43)
            text(688,305,'3. Enviament fet',18,True)
            box(720,157,180,110);text(735,218,'BIBLIOTECA',14,True);shape('S',810,184,15)
        elif kind==1:
            pos={'O':(125,280),'M':(125,145),'I':(360,220),'T':(560,220),'E':(560,100),'C':(760,220),'L':(760,100)}
            for a,b in EDGES:connector(*pos[a],*pos[b])
            for k,(x,y) in pos.items():box(x-38,y-23,76,46);text(x-8,y-8,k,22,True)
            text(45,50,'Una línia indica «ha de passar abans», no una ordre de caminar.',15)
        else:lines(45,310,['O, M, E, I, T, C, L: funciona.','E, M, O, I, T, C, L: també funciona.','T abans d’I: el sobre es tanca abans de posar el missatge.','No hi ha una única recepta: cal respectar les dependències.'],18,55)
    else:
        if kind==0:
            for i in range(4):data_card(48+i*147,140,i,133,160)
            lines(665,310,['Regla: té ratlles?','P2 i P4: sí.','P1 i P3: no.','P9: no ho sabem.'],16,48)
        elif kind==1:
            table(45,330,['ID','Forma','Mida','Ratlles'],[['P1','Cercle','Petit','0'],['P2','Cercle','Petit','1'],['P9','Triangle','Gran','?']],[100,230,200,200],53)
            text(45,90,'Cada identificador és una fila; cada propietat és una columna.',16)
        else:lines(45,310,['Sense ratlles no és el mateix que «no ho sabem».','P9 té la superfície amagada: registrem ?','No inventem un 0 per completar la taula.','Un recompte és fiable si la regla i les dades són clares.'],19,57)

for slug,(title,level) in TITLES.items():
    C=canvas.Canvas(str(OUT/f'{slug}.pdf'),pagesize=A4,invariant=1)
    C.setTitle(title+' - kit imprimible');C.setAuthor('Robòtica per a docents')
    if slug=='pixels-binaris':
        header(1,'01 / Dos missatges per reconstruir','0 = blanc; 1 = negre. Llegiu cada fila d’esquerra a dreta i de dalt a baix.')
        for j,rows in enumerate([L,ARROW]):
            y=460-j*280;text(40,y+180,f'MISSATGE {j+1}',15,True)
            for r,row in enumerate(rows):text(48,y+134-r*26,' '.join(row),15,True)
            grid(310,y, s=32)
        end()
        header(2,'02 / Crea el teu missatge','El receptor només rep el codi. Manteniu amagada la graella original.')
        grid(202,445,s=38)
        for r in range(5):text(42,368-r*47,f'Fila {r+1}: ____  ____  ____  ____  ____',15)
        end()
        header(3,'03 / Comprovació i reparació','Anoteu la primera diferència. No endevineu el dibuix per completar el codi.')
        lines(40,657,['A. Una fila rebuda és: 1 0 0 0','Què falta saber? __________________________________',
                      'Què demanaríeu a l’emissor? ________________________'],12,32)
        lines(40,520,['B. El codi diu 1 0 0 0 0, però la fila s’ha pintat 0 0 0 0 1.','Què s’ha de revisar? ______________________________'],12,32)
        grid(205,270,s=34)
        lines(40,220,['C. Descodifiqueu un missatge propi i compareu-lo amb l’original.',
                      'Fila revisada: ______  Valor canviat: ______',
                      'Motiu del canvi: __________________________________'],11,32)
        end()
        header(4,'04 / Solucions docents','Reserveu aquesta pàgina fins a acabar la reconstrucció.')
        grid(75,430,L,s=35);grid(340,430,ARROW,s=35)
        text(75,402,'Missatge 1 / L',13,True);text(340,402,'Missatge 2 / fletxa',13,True)
        para(40,340,'A: falta un valor, però la fila incompleta no diu on s’ha perdut. Cal demanar la fila sencera. B: s’ha invertit la lectura de la fila; cal seguir la convenció d’esquerra a dreta.')
        para(40,245,'Cinc files de cinc valors fan 25 bits per al dibuix d’aquest model. No hi comptem el format del fitxer, les dimensions o altres metadades. Aquesta activitat no demana comprimir el codi.')
        end()
    elif slug=='xarxa-ordenacio':
        header(1,'01 / Xarxa de quatre canals','Temps: d’esquerra a dreta. Menor: canal de dalt; major: canal de baix.')
        network(70,600,110,80)
        lines(40,280,['Etapa 1: compareu 1-2 i 3-4. Poden actuar alhora.',
                      'Etapa 2: compareu 1-3 i 2-4. Poden actuar alhora.',
                      'Etapa 3: compareu 2-3. La resta conserva el valor.',
                      'Si hi ha empat, conserveu l’ordre dels dos valors.',
                      'Només avanceu d’etapa quan totes les comparacions acaben.'],11,29)
        end()
        header(2,'02 / Nombres per retallar','Trieu quatre targetes. Els duplicats serveixen per provar els empats.')
        for i,v in enumerate(list(range(1,9))+[2,2,5,5]):
            x=36+i%3*177;y=H-255-i//3*139;box(x,y,165,120);text(x+60,y+45,str(v),35,True)
        end()
        header(3,'03 / Registre de les etapes','Un registre per prova. Els valors s’escriuen de dalt a baix en cada etapa.')
        table(36,650,['Canal','Entrada','Etapa 1','Etapa 2','Etapa 3'],[[str(i+1),'','','',''] for i in range(4)],[65,114,114,114,114],45)
        lines(40,360,['Entrada d’exemple: 3, 1, 4, 2. Predicció: ______________',
                      'Hi ha ordre creixent en totes les eixides? ______________',
                      'Cinc comparacions, repartides en quantes etapes? ______'],11,32)
        para(40,230,'Prova de reparació: tapeu l’últim comparador (canals 2 i 3). Executeu 3, 1, 4, 2. Escriviu l’eixida i justifiqueu què falta fer.')
        text(40,130,'Eixida sense el comparador: ________________________',12)
        end()
        header(4,'04 / Solucions i interpretació','Una entrada ordenada no demostra per si sola que qualsevol diagrama funcione.')
        table(36,650,['Entrada','Etapa 1','Etapa 2','Etapa 3'],[['3, 1, 4, 2','1, 3, 2, 4','1, 3, 2, 4','1, 2, 3, 4']],[130]*4,43)
        para(40,510,'Sense el comparador final, l’exemple acaba 1, 3, 2, 4: el centre no està ordenat. La xarxa completa té cinc comparadors en tres etapes. Dos comparadors sense canals compartits poden actuar en una mateixa etapa.')
        para(40,380,'Proveu també 4, 3, 2, 1 i 2, 2, 1, 1. Les eixides són 1, 2, 3, 4 i 1, 1, 2, 2. Conserveu les quatre targetes: comparar no crea ni elimina dades.')
        para(40,260,'La disposició és una xarxa de quatre entrades; no n’hi ha prou d’afegir canals per ordenar-ne sis. El generador verifica les 24 permutacions d’1, 2, 3, 4 i casos amb empats.')
        end()
    elif slug=='laberint-debugging':
        header(1,'01 / Tauler del laberint','S = inici A4; M = meta D1. B3 i C3 estan bloquejades. No es poden travessar.')
        maze(105,235,95)
        lines(40,180,['Cada fletxa mou una casella en la direcció del paper.',
                      'No hi ha girs ni orientació del robot en aquest joc.',
                      'Pareu abans d’entrar en una X o d’eixir del tauler.'],11,27)
        end()
        header(2,'02 / Fletxes i fitxes per retallar','Huit fletxes amunt, huit dreta, dues avall i dues esquerra. Afegiu un botó com a fitxa.')
        for i,k in enumerate('U'*8+'R'*8+'B'*2+'E'*2):
            x=36+i%4*133;y=H-235-i//4*105;box(x,y,123,94);move_arrow(k,x+61,y+57,.8)
            text(x+12,y+15,{'U':'Amunt','R':'Dreta','B':'Avall','E':'Esquerra'}[k],10,True)
        end()
        header(3,'03 / Dues proves d’un mateix programa','Abans de començar, predieu el resultat. No canvieu fletxes durant la prova.')
        text(40,657,'PROGRAMA INICIAL',14,True);sequence(40,555,['U','R','U','R','R','U'],s=65)
        lines(40,500,['Predicció: ________________________________________',
                      'Primera ordre impossible: ______  Casella: ______',
                      'Canvi proposat: ___________________________________'],11,31)
        text(40,375,'PROGRAMA REVISAT / dibuixeu sis fletxes',14,True)
        for i in range(6):box(40+i*75,285,68,60)
        lines(40,225,['Resultat de la nova prova: __________________________',
                      'Què heu conservat igual per comparar les proves? ______',
                      '_________________________________________________'],11,31)
        end()
        header(4,'04 / Solucions docents','Les dues primeres ordres adequades són amunt i amunt, des d’A4.')
        maze(75,400,59,True)
        lines(355,620,['Ruta de sis ordres:','Amunt, amunt, dreta,','dreta, dreta, amunt.','A4 > A3 > A2 > B2','> C2 > D2 > D1.'],11,30)
        para(40,337,'El programa inicial topa en la segona ordre: des d’A3 intenta entrar a B3. Intercanviar les ordres 2 i 3 produeix una ruta vàlida. Torneu a començar a A4 i proveu-la sencera.')
        para(40,220,'Ampliació: bloquegeu també D2 amb una peça i manteniu la mateixa meta. Una alternativa és amunt, amunt, amunt, dreta, dreta, dreta, per la fila 1. No altereu alhora inici i obstacles si voleu comparar proves.')
        end()
    elif slug=='condicionals-moviment':
        header(1,'01 / Entrades per retallar','Sis targetes: estrela, cercle i triangle; cadascun amb marc de punts i sense.')
        for i,k in enumerate('SSOOTT'):
            x=36+i%2*266;y=510-i//2*175;box(x,y,250,155);shape(k,x+125,y+87,33)
            if i%2==0:
                for dx in range(15,240,25):
                    for dy in [9,137]:C.setFillColor(INK);C.circle(x+dx,y+dy,2,fill=1,stroke=0)
            text(x+17,y+40,{'S':'Estrela','O':'Cercle','T':'Triangle'}[k],13,True)
            text(x+17,y+17,'Marc de punts' if i%2==0 else 'Sense marc de punts',10)
        end()
        header(2,'02 / Zones de resposta','Poseu una fitxa a INICI abans de cada targeta nova.')
        for y,name,symbol in [(510,'SÍ / LLIBRE','Q'),(290,'SI NO / MÚSICA','O')]:
            box(36,y,523,190);shape(symbol,122,y+95,43);text(210,y+105,name,20,True)
        box(36,112,523,110);text(65,159,'INICI / abans de cada prova',18,True)
        end()
        header(3,'03 / Regla i registre','Regla: si té una estrela, llibre; si no, música. El marc no intervé encara.')
        table(36,650,['Entrada','Predicció','Resultat'],[[x,'',''] for x in ['Estrela amb punts','Estrela sense punts','Cercle amb punts','Cercle sense punts','Triangle amb punts','Triangle sense punts']],[205,155,161],43)
        lines(40,290,['La regla nova del nostre equip: _____________________',
                      'Si ______________________________________________',
                      'Llavors __________________________________________',
                      'Si no ____________________________________________'],11,35)
        end()
        header(4,'04 / Guia docent','Les propietats són de les targetes inventades, no de les persones.')
        para(40,650,'Amb la regla completa, les dues estreles van a llibre. Els dos cercles i els dos triangles van a música. El marc de punts no canvia aquesta decisió.')
        para(40,550,'Amb només «si té estrela, llibre», les altres formes no fan cap acció. Reinicieu la fitxa abans de cada prova: quedar a INICI permet observar que no s’ha executat cap branca alternativa.')
        para(40,427,'Error proposat: algú envia el triangle a llibre perquè «si no» vol dir només cercle. La regla escrita diu que totes les entrades sense estrela van a música. Proveu les tres formes.')
        para(40,300,'Ampliació: «estrela i marc de punts» només és certa per a una targeta. «Estrela o marc de punts» és certa per a quatre: les dues estreles, el cercle amb punts i el triangle amb punts. En «o», una o les dues propietats són suficients.')
        end()
    elif slug=='criptografia-cesar':
        header(1,'01 / Roda retallable','Retalleu els dos cercles. L’adult prepara els forats centrals i col·loca l’enquadernador.')
        wheel(W/2,555,120,'FIX EXTERIOR');wheel(W/2,270,90,'MÒBIL')
        lines(40,119,['Per a +3, alineeu A exterior amb D interior.',
                      'Xifreu d’exterior a interior. Desxifreu d’interior a exterior.'],10,24)
        end()
        header(2,'02 / Alternativa sense retallar','Una taula de substitució també permet xifrar i desxifrar. Clau +3.')
        for j in range(2):
            chars=ALPHABET if j==0 else ALPHABET[3:]+ALPHABET[:3]
            text(36,650-j*90,'Original' if j==0 else 'Xifrat (+3)',13,True)
            for i,a in enumerate(chars):
                xx=36+i*20;box(xx,593-j*90,20,36);text(xx+6,605-j*90,a,10,True)
        lines(40,415,['HOLA > KROD. Per tornar, llegiu la taula en sentit invers.',
                      'ZOO > CRR: després de Z, el desplaçament continua per A.',
                      'Alfabet del joc: A-Z, sense accents ni Ç. Espais conservats.'],10,32)
        para(40,275,'Escriviu directament missatges ficticis amb aquestes 26 lletres. Si adapteu un text català, acordeu abans llevar accents i representar Ç com C. Això perd informació ortogràfica i no és una convenció general d’escriptura.')
        end()
        header(3,'03 / Missatges i registre','Compartiu la clau acordada per un altre canal: ací pot ser oralment amb el company.')
        for i,(task,msg) in enumerate([('XIFRA +3','ROBOT'),('XIFRA +3','LLIBRE'),('DESXIFRA +3','FDVD')]):
            y=535-i*135;box(36,y,523,112);text(50,y+78,task+' / '+msg,17,True)
            text(50,y+35,'Resposta: ___________________________________',12)
        lines(40,190,['Un error per reparar: algú desxifra KROD avançant +3.',
                      'Quin sentit hauria d’usar? __________________________',
                      'Escriviu un missatge propi i comproveu l’anada i la tornada.'],11,31)
        end()
        header(4,'04 / Solucions i límits','Aquest xifratge de paper no serveix per protegir contrasenyes ni secrets reals.')
        lines(40,650,['ROBOT > URERW','LLIBRE > OOLEUH','FDVD > CASA','KROD > HOLA en retrocedir 3 posicions.'],18,44)
        para(40,420,'Avançar +3 una segona vegada no desfà el primer xifratge. Per desxifrar, busqueu la lletra rebuda a l’interior i llegiu l’exterior, o retrocediu tres posicions en l’alfabet.')
        para(40,300,'Hi ha 26 desplaçaments possibles, inclòs el 0 que deixa el text igual: només 25 el canvien. Es poden provar tots. Una paraula amb sentit pot suggerir una clau, però un missatge curt no garanteix una única interpretació.')
        para(40,170,'No equipareu aquest joc amb els sistemes actuals de protecció de dades. El seu objectiu és entendre una substitució reversible i explicar per què provar poques claus posa en evidència el límit del mètode.')
        end()
    elif slug=='bucles-coreografia':
        header(1,'01 / Accions per retallar','Quatre targetes de cada acció. Les accions també es poden fer assenyalant.')
        for i,k in enumerate('MET'*4):
            x=36+i%3*177;y=H-255-i//3*139;box(x,y,135,110);action(k,x+67,y+73,.8);text(x+110,y+83,k,14,True)
            text(x+12,y+31,{'M':'Mans','E':'Espatlles','T':'Taula'}[k],13,True)
            text(x+12,y+12,'Una acció cada vegada',9)
        end()
        header(2,'02 / El marc del bucle','El marc inclou només les accions que cal repetir en cada volta.')
        box(36,365,523,300,BLUE);text(55,625,'REPETEIX ____ VEGADES',20,True)
        for i in range(3):box(70+i*155,440,135,120)
        text(55,392,'COS DEL BUCLE / una volta completa',12,True)
        for i in range(4):box(40+i*130,205,115,110);text(80+i*130,243,str(i+1),30,True)
        text(40,160,'Retalleu els nombres o escriviu el recompte al marc.',11)
        end()
        header(3,'03 / Predicció i prova','M = mans; E = espatlles; T = taula. Cada símbol equival a una acció.')
        lines(40,650,['Programa: repeteix 3 vegades [M E T].',
                      'Abans d’actuar: ____ voltes × ____ accions = ____ accions.'],13,35)
        text(40,545,'Escriviu la seqüència desplegada:',13,True)
        for i in range(9):box(36+i*58,462,52,57)
        lines(40,399,['Ara canvieu només el recompte a 2.',
                      'Predicció: ____ accions. Resultat: ____ accions.'],12,32)
        para(40,280,'Error per discutir: repeteix 3 vegades [M E]; després T. Té el mateix resultat que repetir [M E T] tres vegades? Desplegueu les dues seqüències.')
        text(40,155,'El canvi que proposem: ______________________________',11)
        end()
        header(4,'04 / Solucions docents','El nombre de voltes i el límit del bloc han de quedar visibles.')
        lines(40,650,['3 × [M E T] = M E T / M E T / M E T = 9 accions.',
                      '2 × [M E T] = M E T / M E T = 6 accions.',
                      '3 × [M E]; després T = M E / M E / M E / T = 7 accions.'],11,38)
        para(40,470,'La reparació és tornar a posar T dins del marc si la intenció és fer taula en cada volta. Un altre resultat pot ser correcte per a una intenció diferent, però no és equivalent a la seqüència original.')
        para(40,340,'Una volta del model és: picar una vegada de mans, tocar alhora les dues espatlles una vegada i tocar suaument la taula una vegada. Marqueu les voltes amb un comptador, no només de memòria.')
        para(40,210,'No cal fer soroll, alçar-se o tocar el propi cos. Assenyalar M, E i T també executa el programa. Per ampliar, afegiu una acció fora del bucle i distingiu què es repeteix i què es fa una sola vegada.')
        end()
    elif slug=='patrons-simetries':
        header(1,'01 / Peces de patrons','Retalleu dotze cercles i sis triangles. No cal distingir colors.')
        for i,k in enumerate('O'*12+'T'*6):
            x=36+i%6*87;y=H-235-i//6*130;box(x,y,80,78);shape(k,x+40,y+39,23)
        end()
        header(2,'02 / Tres tires per completar','Amb la regla repetitiva acordada, poseu la peça que falta. No cal escriure.')
        for j,pattern in enumerate(['OOTOO?','OTT?TT','OTO?OT']):
            y=555-j*175;text(40,y+105,f'TIRA {j+1}',14,True)
            for i,k in enumerate(pattern):
                box(36+i*87,y,80,85)
                if k=='?':text(36+i*87+29,y+26,'?',29,True)
                else:shape(k,76+i*87,y+43,19)
        end()
        header(3,'03 / Canviem les peces, conservem la regla','Cercle: toca els genolls. Triangle: alça una mà. També es pot assenyalar.')
        text(40,651,'UNITAT / cercle, cercle, triangle',17,True)
        for i,k in enumerate('OOT'):box(80+i*155,490,135,120);shape(k,147+i*155,552,28)
        lines(40,410,['Una volta: genolls, genolls, mà.',
                      'Tres voltes: genolls, genolls, mà / genolls, genolls, mà /',
                      'genolls, genolls, mà.'],11,27)
        text(40,285,'INVENTEU UNA UNITAT / màxim tres peces',14,True)
        for i in range(3):box(80+i*155,125,135,120)
        end()
        header(4,'04 / Guia d’observació i solucions','Les solucions pressuposen que es repeteix la unitat mostrada.')
        lines(40,650,['Tira 1: O O T / O O T. Falta un triangle.',
                      'Tira 2: O T T / O T T. Falta un cercle.',
                      'Tira 3: O T / O T / O T. Falta un triangle.'],13,35)
        para(40,480,'Mostreu almenys dues voltes de la unitat abans de tapar una peça. Demaneu que assenyalen el tros que es repeteix i que el reconstruïsquen amb altres peces o gestos.')
        para(40,350,'Una seqüència curta pot admetre més d’una regla. Si una criatura proposa una altra continuació, demaneu que mostre la seua regla i com continuaria. La consigna del joc és repetir la unitat acordada, no descobrir una única llei inevitable.')
        para(40,210,'Observeu si agrupa una unitat, anticipa una peça i conserva l’ordre en canviar de representació. No valoreu la rapidesa, la lectura o el nom formal de les formes.')
        end()
    elif slug=='descomposicio-receptes':
        header(1,'01 / Passos per retallar','Les targetes ja descriuen les accions: el repte és ordenar-les segons les dependències.')
        for i,(k,label) in enumerate(TASKS):
            x=36+i%2*266;y=548-i//2*142;box(x,y,250,128);text(x+15,y+80,k,24,True);text(x+15,y+34,label,12,True)
        end()
        header(2,'02 / Sobre de joc','Doblegueu la meitat inferior cap arrere. Fixeu els dos costats amb cinta; deixeu obert dalt.')
        box(70,500,455,170);text(90,625,'DESTÍ FICTICI',14,True);text(90,590,'____________________',21)
        text(90,550,'Equip: __________________________',13)
        C.setDash(5,4);line(36,H/2,W-36,H/2);C.setDash()
        lines(40,340,['Línia de plec / part inferior cap arrere.',
                      'Podeu usar un sobre reutilitzable en lloc d’aquesta plantilla.',
                      'La cinta es posa als laterals: el sobre s’ha de poder obrir.',
                      'Tancar en el joc és abaixar la vora oberta, sense segellar.'],10,28)
        end()
        header(3,'03 / Què ha de passar abans?','Un registre per equip. Retalleu només el missatge de la part inferior.')
        table(36,650,['Acció','Què cal haver fet abans?'],[[k+' / '+label,''] for k,label in TASKS],[260,261],36)
        text(40,310,'Ordre proposat: __________________________________',12)
        text(40,275,'Ordre alternatiu vàlid: ______________________________',12)
        box(65,80,465,145);text(85,193,'MISSATGE / dibuixeu un símbol inventat',13,True)
        end()
        header(4,'04 / Dependències i solucions','O: obrir; M: missatge; I: introduir; T: tancar; E: destí; C: comprovar; L: lliurar.')
        lines(40,650,['O i M han de passar abans d’I.',
                      'I ha de passar abans de T.',
                      'T i E han de passar abans de C.',
                      'C ha de passar abans de L.'],14,35)
        lines(40,465,['Una seqüència: O, M, E, I, T, C, L.',
                      'Una altra seqüència: E, M, O, I, T, C, L.'],13,35)
        para(40,350,'Comprovar vol dir revisar que el missatge és dins, el destí és llegible i la vora està abaixada. Feu la prova amb el material: si tanqueu abans d’introduir el missatge, no el podeu posar dins sense reobrir. En aquesta prova només es pot executar cada targeta una vegada.')
        para(40,205,'Error: O, M, T, I, E, C, L. La inversió T-I impedeix completar l’enviament amb les regles. Intercanvieu T i I, reinicieu i proveu. Escriure el destí pot fer-se en diferents moments sempre que siga abans de comprovar.')
        end()
    else:
        header(1,'01 / Objectes del museu','Huit objectes ficticis: cercle o triangle, gran o petit, amb ratlles o sense.')
        for i in range(8):data_card(36+i%4*133,475-i//4*185,i)
        lines(40,225,['Identificadors: P1-P4 són cercles; P5-P8 són triangles.',
                      'P1, P2, P5 i P6 són petits; la resta són grans.',
                      'P2, P4, P6 i P8 tenen ratlles.'],10,28)
        end()
        header(2,'02 / Classificació i dada desconeguda','Retalleu els cartells i P9. «No ho sabem» no equival a «no té ratlles».')
        for i,s in enumerate(['SÍ / TÉ RATLLES','NO / SENSE RATLLES','NO HO SABEM / ?']):
            box(36,555-i*140,523,110);text(60,600-i*140,s,20,True)
        box(36,80,190,160);shape('T',130,173,28);text(120,161,'?',22,True);text(50,102,'P9 / superfície tapada',10,True)
        para(260,204,'De P9 sabem que és un triangle gran. No es veu si té ratlles. No completeu la propietat inventant-la.',width=285,size=11)
        end()
        header(3,'03 / Registre de dades','Anoteu O o T; mida G o P; ratlles 1, 0 o ? si no hi ha informació.')
        table(36,650,['ID','Forma','Mida','Ratlles'],[[f'P{i+1}','','',''] for i in range(9)],[70,150,150,151],34)
        lines(40,250,['Regla de classificació: ______________________________',
                      'Amb ratlles: ____  Sense ratlles: ____  Desconegut: ____',
                      'Total comprovat: ____  Hi és cada identificador una vegada?',
                      'Si canviem a «és cercle», quins grups obtenim? __________'],11,32)
        end()
        header(4,'04 / Solucions i límits de les dades','Classificació per ratlles amb P1-P9: quatre sí, quatre no, una dada desconeguda.')
        table(36,650,['ID','Forma','Mida','Ratlles'],[[f'P{i+1}','O' if i<4 else 'T','G' if i%4>=2 else 'P',str(i%2)] for i in range(8)]+[['P9','T','G','?']],[70,150,150,151],30)
        para(40,285,'Amb ratlles: P2, P4, P6, P8. Sense ratlles: P1, P3, P5, P7. P9 queda desconegut. La suma 4 + 4 + 1 és 9. Si classifiquem per forma: quatre cercles i cinc triangles; la superfície desconeguda no impedeix llegir la forma.')
        para(40,155,'No registrem noms, gustos ni dades de persones. Un 0 expressa que hem observat absència de ratlles; ? expressa que no ho podem saber. Són informacions diferents.')
        end()
    C.save()
    for kind,name in enumerate(['inici','exemple','reparacio']):
        with tempfile.TemporaryDirectory() as tmp:
            p=Path(tmp)/'visual.pdf';C=canvas.Canvas(str(p),pagesize=(1000,460),invariant=1)
            C.setFillColor(white);C.rect(0,0,1000,460,fill=1,stroke=0)
            C.setFillColor(BLUE);C.roundRect(16,16,968,428,20,fill=1,stroke=0)
            text(36,410,title,25,True)
            text(36,379,[level+' / Així es juga','Exemple i convencions','Una prova per revisar'][kind],13)
            instruction_diagrams(kind);C.save()
            subprocess.run(['pdftoppm','-scale-to','1600','-singlefile','-png',str(p),str(Path(tmp)/'visual')],check=True,stderr=subprocess.PIPE)
            Image.open(Path(tmp)/'visual.png').convert('RGB').save(OUT/f'{slug}-{name}.webp','WEBP',quality=92)
    print(slug+': 4 PDF pages + 3 web diagrams',flush=True)

# Verify the classroom models and printed answer keys.
for values in itertools.product(range(3),repeat=4):
    result=list(values)
    for stage in STAGES:
        for a,b in stage:result[a],result[b]=sorted([result[a],result[b]])
    assert result==sorted(values)
for values in itertools.permutations(range(1,5)):
    result=list(values)
    for stage in STAGES:
        for a,b in stage:result[a],result[b]=sorted([result[a],result[b]])
    assert result==sorted(values)
def shift(word,k):return ''.join(ALPHABET[(ALPHABET.index(a)+k)%26] if a in ALPHABET else a for a in word)
assert shift('HOLA',3)=='KROD' and shift('ZOO',3)=='CRR'
assert shift('ROBOT',3)=='URERW' and shift('LLIBRE',3)=='OOLEUH' and shift('FDVD',-3)=='CASA'
for seq in ['OMEITCL','EMOITCL']:
    assert all(seq.index(a)<seq.index(b) for a,b in EDGES)
assert not all('OMTIECL'.index(a)<'OMTIECL'.index(b) for a,b in EDGES)
print('Verified sorting network (24 permutations, 81 cases with ties), cipher and task dependencies.')
