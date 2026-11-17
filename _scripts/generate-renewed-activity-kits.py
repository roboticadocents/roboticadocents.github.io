#!/usr/bin/env python3
"""Rebuild nine classroom kits and 27 web diagrams, using local vector artwork.
Requires ReportLab, Pillow, pdftoppm and DejaVu Sans fonts. No network access.
Run from any directory. Existing Robot Humano and the four new kits are untouched.
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
'pixels-binaris':('Píxeles: un dibujo en 25 bits','Primer ciclo'),
'xarxa-ordenacio':('La red que ordena','Tercer ciclo'),
'laberint-debugging':('El laberinto de los errores','Primer ciclo'),
'condicionals-moviment':('La máquina de las decisiones','Primer ciclo'),
'criptografia-cesar':('El taller de mensajes César','Tercer ciclo'),
'bucles-coreografia':('La coreografía de los bucles','Primer ciclo'),
'patrons-simetries':('Detectives de patrones','Educación Infantil'),
'descomposicio-receptes':('Recetas para preparar un envío','Segundo ciclo'),
'dades-classificacio':('El museo de los datos','Segundo ciclo')}
L=['10000','10000','10000','10000','11111']
ARROW=['00100','00010','11111','00010','00100']
STAGES=[[(0,1),(2,3)],[(0,2),(1,3)],[(1,2)]]
ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
TASKS=[('O','Abre el sobre'),('M','Dibuja el mensaje'),('I','Introduce el mensaje'),('T','Cierra el sobre'),('E','Escribe el destino'),('C','Comprueba el envío'),('L','Entrega el envío')]
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
    text(36,H-32,'ROBÓTICA 200 / MATERIAL DE AULA',10,True)
    text(36,H-65,TITLES[slug][0],20,True)
    text(36,H-90,f'{TITLES[slug][1]} | {label}',11)
    text(36,H-113,hint,9)
    text(36,24,'A4 al 100 %. Apto para blanco y negro. Soluciones docentes: página 4.',9)
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
            text(40,321,'1. Leemos el código',17,True);lines(40,278,['1 0 0 0 0']*4+['1 1 1 1 1'],17,36)
            text(360,321,'2. Pintamos por filas',17,True);grid(385,103,L,s=36)
            text(684,321,'3. Comprobamos',17,True);lines(684,268,['5 filas de 5 valores.','0 = blanco; 1 = negro.','Mismo orden, mismo dibujo.'],13,35)
        elif kind==1:
            text(42,323,'Una fila es una secuencia',19,True);sequence(44,213,['0','0','1','0','1'],s=63)
            for i,v in enumerate('00101'):
                C.setFillColor(INK if v=='1' else white);C.setStrokeColor(INK);C.rect(453+i*78,212,50,50,fill=1)
            lines(45,140,['Leemos de izquierda a derecha. Al acabar, bajamos a la fila siguiente.','El dibujo completo tiene 25 valores binarios: 25 bits en este modelo.'],14,31)
        else:
            text(42,322,'Código recibido: 1 0 0 0',22,True);text(42,276,'Falta un valor para completar cinco casillas.',16)
            lines(42,211,['No sabemos qué posición se ha perdido.','Pedimos que se reenvíe la fila completa.','Una fila de cinco valores también puede contener un valor equivocado.'],16,40)
    elif slug=='xarxa-ordenacio':
        if kind<2:
            network(95,285,170,60)
            text(45,55,'En cada comparador: menor en el canal de arriba; mayor en el de abajo.',15)
            if kind==1:lines(805,290,['3,1,4,2','1,3,2,4','1,3,2,4','1,2,3,4'],12,44)
        else:
            lines(45,300,['Sin el último comparador: 1, 3, 2, 4.','Los extremos están bien, pero el centro todavía no está ordenado.','Comparad los canales 2 y 3: obtenemos 1, 2, 3, 4.'],19,55)
    elif slug=='laberint-debugging':
        if kind==0:
            maze(65,85,56,True);text(400,310,'1. Predecimos',20,True);text(400,270,'2. Probamos sin cambiar el programa',17,True);text(400,230,'3. Registramos y volvemos a probar',17,True)
            sequence(400,120,['U','U','R','R','R','U'],s=66)
        elif kind==1:
            for i,k in enumerate('URBE'):
                x=43+i*230;box(x,100,208,240);move_arrow(k,x+104,245,1.3)
                text(x+20,145,{'U':'Arriba','R':'Derecha','B':'Abajo','E':'Izquierda'}[k],17,True)
            text(45,58,'Las direcciones son fijas en el papel. No son giros del robot.',16)
        else:
            text(40,317,'ANTES / choca en la segunda orden',18,True);sequence(40,222,['U','R','U','R','R','U'],s=57)
            text(510,317,'DESPUÉS / intercambiamos 2 y 3',18,True);sequence(510,222,['U','U','R','R','R','U'],s=57)
            lines(42,148,['La primera secuencia intenta entrar en B3.','Reiniciamos en A4 y probamos la nueva ruta entera.'],17,35)
    elif slug=='condicionals-moviment':
        if kind==0:
            shape('S',140,235,57);text(55,115,'Entrada: estrella',16,True)
            box(310,180,300,110);text(334,242,'¿Tiene una estrella?',20,True)
            line(212,235,310,235);line(610,260,712,300);line(610,210,712,150)
            shape('Q',795,300,26);shape('O',795,150,26)
            text(700,342,'SÍ / libro',16,True);text(700,90,'NO / música',16,True)
        elif kind==1:
            for i,(k,label,result) in enumerate([('S','Estrella','LIBRO'),('O','Círculo','MÚSICA'),('T','Triángulo','MÚSICA')]):
                x=45+i*315;box(x,100,285,245);shape(k,x+142,260,36)
                text(x+20,185,label,18,True);text(x+20,137,'Resposta: '+result,15,True)
            text(45,55,'«Si no» incluye todas las entradas que no tienen estrella.',16)
        else:
            for i,k in enumerate('SSOOTT'):
                x=40+i*156;box(x,185,140,148);shape(k,x+70,266,24)
                if i%2==0:
                    for dx in [20,45,70,95,120]:C.setFillColor(INK);C.circle(x+dx,207,2,fill=1,stroke=0)
            lines(45,135,['Estrella Y puntos: solo la primera tarjeta.','Estrella O puntos: tarjetas 1, 2, 3 y 5.'],18,40)
    elif slug=='criptografia-cesar':
        if kind==0:
            wheel(180,220,110,'EXTERIOR');wheel(445,220,91,'INTERIOR',shift=3)
            lines(590,310,['A exterior con D interior.','Cifrar: exterior > interior.','Descifrar: interior > exterior.','Clave +3.'],14,45)
        elif kind==1:
            lines(45,310,['ALFABETO: A B C D E F ... X Y Z','CIFRADO:  D E F G H I ... A B C','HOLA > KROD','ZOO > CRR'],22,60)
        else:lines(45,310,['KROD con clave +3 vuelve a HOLA.','Para descifrar, retrocedemos tres posiciones.','Esta rueda tiene solo 26 desplazamientos.','Es un juego de sustitución, no protección para secretos reales.'],20,57)
    elif slug=='bucles-coreografia':
        if kind==0:
            text(44,320,'Un bloque de tres acciones',20,True);sequence(44,206,['M','E','T'],s=75,directional=False)
            text(400,282,'REPITE 3 VECES',23,True)
            lines(400,219,['M E T | M E T | M E T','3 vueltas × 3 acciones = 9 acciones.'],20,44)
        elif kind==1:
            for i,(k,label) in enumerate([('M','Manos'),('E','Hombros'),('T','Mesa')]):
                x=45+i*315;box(x,100,285,245);action(k,x+142,250,1.6)
                text(x+25,150,k+' / '+label,20,True)
            text(45,55,'Una acción por símbolo. También se puede hacer señalando.',16)
        else:lines(45,310,['REPITE 3: [M E T]  >  9 acciones','REPITE 3: [M E]; después T  >  7 acciones','El límite del bloque cambia lo que se repite.'],20,65)
    elif slug=='patrons-simetries':
        if kind==0:
            for i,k in enumerate('OOT'*3):shape(k,75+i*100,245,24)
            text(45,115,'Buscamos el trozo más corto que repetimos: círculo, círculo, triángulo.',18,True)
        elif kind==1:
            for i,k in enumerate('OOT'):
                shape(k,110+i*135,245,30)
            lines(535,300,['Círculo = toca las rodillas.','Triángulo = alza una mano.','Rodillas, rodillas, mano.'],17,45)
            text(45,90,'Cambian los materiales. Se conserva el orden A A B.',18,True)
        else:
            for i,k in enumerate('OOTOOTOO'):shape(k,75+i*100,245,24)
            text(865,230,'?',34,True)
            text(45,110,'Si repetimos A A B, falta un triángulo. Explicamos la regla.',18,True)
    elif slug=='descomposicio-receptes':
        if kind==0:
            for i in range(3):box(40+i*315,100,285,245)
            text(58,305,'1. Sobre vacío',18,True)
            box(90,157,180,110);line(90,267,180,206);line(180,206,270,267)
            text(373,305,'2. Siete pasos',18,True)
            lines(375,260,['Abrir, preparar, introducir...','¿Qué debe pasar antes?','Una acción por tarjeta.'],15,43)
            text(688,305,'3. Envío hecho',18,True)
            box(720,157,180,110);text(735,218,'BIBLIOTECA',14,True);shape('S',810,184,15)
        elif kind==1:
            pos={'O':(125,280),'M':(125,145),'I':(360,220),'T':(560,220),'E':(560,100),'C':(760,220),'L':(760,100)}
            for a,b in EDGES:connector(*pos[a],*pos[b])
            for k,(x,y) in pos.items():box(x-38,y-23,76,46);text(x-8,y-8,k,22,True)
            text(45,50,'Una línea indica «debe pasar antes», no una orden de caminar.',15)
        else:lines(45,310,['O, M, E, I, T, C, L: funciona.','E, M, O, I, T, C, L: también funciona.','T antes de I: el sobre se cierra antes de poner el mensaje.','No hay una única receta: hay que respetar las dependencias.'],18,55)
    else:
        if kind==0:
            for i in range(4):data_card(48+i*147,140,i,133,160)
            lines(665,310,['Regla: ¿tiene rayas?','P2 y P4: sí.','P1 y P3: no.','P9: no lo sabemos.'],16,48)
        elif kind==1:
            table(45,330,['ID','Forma','Tamaño','Rayas'],[['P1','Círculo','Pequeño','0'],['P2','Círculo','Pequeño','1'],['P9','Triángulo','Grande','?']],[100,230,200,200],53)
            text(45,90,'Cada identificador es una fila; cada propiedad es una columna.',16)
        else:lines(45,310,['Sin rayas no es lo mismo que «no lo sabemos».','P9 tiene la superficie tapada: registramos ?','No inventamos un 0 para completar la tabla.','Un recuento es fiable si la regla y los datos son claros.'],19,57)

for slug,(title,level) in TITLES.items():
    C=canvas.Canvas(str(OUT/f'{slug}.pdf'),pagesize=A4,invariant=1)
    C.setTitle(title+' - kit imprimible');C.setAuthor('Robótica para docentes')
    if slug=='pixels-binaris':
        header(1,'01 / Dos mensajes para reconstruir','0 = blanco; 1 = negro. Leed cada fila de izquierda a derecha y de arriba abajo.')
        for j,rows in enumerate([L,ARROW]):
            y=460-j*280;text(40,y+180,f'MENSAJE {j+1}',15,True)
            for r,row in enumerate(rows):text(48,y+134-r*26,' '.join(row),15,True)
            grid(310,y, s=32)
        end()
        header(2,'02 / Crea tu mensaje','El receptor solo recibe el código. Mantened oculta la cuadrícula original.')
        grid(202,445,s=38)
        for r in range(5):text(42,368-r*47,f'Fila {r+1}: ____  ____  ____  ____  ____',15)
        end()
        header(3,'03 / Comprobación y reparación','Anotad la primera diferencia. No adivinéis el dibujo para completar el código.')
        lines(40,657,['A. Una fila recibida es: 1 0 0 0','¿Qué falta saber? __________________________________',
                      '¿Qué pediríais al emisor? ________________________'],12,32)
        lines(40,520,['B. El código dice 1 0 0 0 0, pero la fila se ha pintado 0 0 0 0 1.','¿Qué hay que revisar? ______________________________'],12,32)
        grid(205,270,s=34)
        lines(40,220,['C. Descodificad un mensaje propio y comparadlo con el original.',
                      'Fila revisada: ______  Valor cambiado: ______',
                      'Motivo del cambio: __________________________________'],11,32)
        end()
        header(4,'04 / Soluciones docentes','Reservad esta página hasta acabar la reconstrucción.')
        grid(75,430,L,s=35);grid(340,430,ARROW,s=35)
        text(75,402,'Mensaje 1 / L',13,True);text(340,402,'Mensaje 2 / flecha',13,True)
        para(40,340,'A: falta un valor, pero la fila incompleta no dice dónde se ha perdido. Hay que pedir la fila entera. B: se ha invertido la lectura de la fila; hay que seguir la convención de izquierda a derecha.')
        para(40,245,'Cinco filas de cinco valores hacen 25 bits para el dibujo de este modelo. No contamos el formato del archivo, las dimensiones u otros metadatos. Esta actividad no pide comprimir el código.')
        end()
    elif slug=='xarxa-ordenacio':
        header(1,'01 / Red de cuatro canales','Tiempo: de izquierda a derecha. Menor: canal de arriba; mayor: canal de abajo.')
        network(70,600,110,80)
        lines(40,280,['Etapa 1: comparad 1-2 y 3-4. Pueden actuar a la vez.',
                      'Etapa 2: comparad 1-3 y 2-4. Pueden actuar a la vez.',
                      'Etapa 3: comparad 2-3. El resto conserva el valor.',
                      'Si hay empate, conservad el orden de los dos valores.',
                      'Solo avanzad de etapa cuando todas las comparaciones acaban.'],11,29)
        end()
        header(2,'02 / Números para recortar','Elegid cuatro tarjetas. Los duplicados sirven para probar los empates.')
        for i,v in enumerate(list(range(1,9))+[2,2,5,5]):
            x=36+i%3*177;y=H-255-i//3*139;box(x,y,165,120);text(x+60,y+45,str(v),35,True)
        end()
        header(3,'03 / Registro de las etapas','Un registro por prueba. Los valores se escriben de arriba abajo en cada etapa.')
        table(36,650,['Canal','Entrada','Etapa 1','Etapa 2','Etapa 3'],[[str(i+1),'','','',''] for i in range(4)],[65,114,114,114,114],45)
        lines(40,360,['Entrada de ejemplo: 3, 1, 4, 2. Predicción: ______________',
                      '¿Hay orden creciente en todas las salidas? ______________',
                      'Cinco comparaciones, repartidas en ¿cuántas etapas? ______'],11,32)
        para(40,230,'Prueba de reparación: tapad el último comparador (canales 2 y 3). Ejecutad 3, 1, 4, 2. Escribid la salida y justificad qué falta hacer.')
        text(40,130,'Salida sin el comparador: ________________________',12)
        end()
        header(4,'04 / Soluciones e interpretación','Una entrada ordenada no demuestra por sí sola que cualquier diagrama funcione.')
        table(36,650,['Entrada','Etapa 1','Etapa 2','Etapa 3'],[['3, 1, 4, 2','1, 3, 2, 4','1, 3, 2, 4','1, 2, 3, 4']],[130]*4,43)
        para(40,510,'Sin el comparador final, el ejemplo acaba 1, 3, 2, 4: el centro no está ordenado. La red completa tiene cinco comparadores en tres etapas. Dos comparadores sin canales compartidos pueden actuar en una misma etapa.')
        para(40,380,'Probad también 4, 3, 2, 1 y 2, 2, 1, 1. Las salidas son 1, 2, 3, 4 y 1, 1, 2, 2. Conservad las cuatro tarjetas: comparar no crea ni elimina datos.')
        para(40,260,'La disposición es una red de cuatro entradas; no basta con añadir canales para ordenar seis. El generador verifica las 24 permutaciones de 1, 2, 3, 4 y casos con empates.')
        end()
    elif slug=='laberint-debugging':
        header(1,'01 / Tablero del laberinto','S = inicio A4; M = meta D1. B3 y C3 están bloqueadas. No se pueden atravesar.')
        maze(105,235,95)
        lines(40,180,['Cada flecha mueve una casilla en la dirección del papel.',
                      'No hay giros ni orientación del robot en este juego.',
                      'Parad antes de entrar en una X o de salir del tablero.'],11,27)
        end()
        header(2,'02 / Flechas y fichas para recortar','Ocho flechas arriba, ocho derecha, dos abajo y dos izquierda. Añadid un botón como ficha.')
        for i,k in enumerate('U'*8+'R'*8+'B'*2+'E'*2):
            x=36+i%4*133;y=H-235-i//4*105;box(x,y,123,94);move_arrow(k,x+61,y+57,.8)
            text(x+12,y+15,{'U':'Arriba','R':'Derecha','B':'Abajo','E':'Izquierda'}[k],10,True)
        end()
        header(3,'03 / Dos pruebas de un mismo programa','Antes de empezar, predecid el resultado. No cambiéis flechas durante la prueba.')
        text(40,657,'PROGRAMA INICIAL',14,True);sequence(40,555,['U','R','U','R','R','U'],s=65)
        lines(40,500,['Predicción: ________________________________________',
                      'Primera orden imposible: ______  Casilla: ______',
                      'Cambio propuesto: ___________________________________'],11,31)
        text(40,375,'PROGRAMA REVISADO / dibujad seis flechas',14,True)
        for i in range(6):box(40+i*75,285,68,60)
        lines(40,225,['Resultado de la nueva prueba: __________________________',
                      '¿Qué habéis conservado igual para comparar las pruebas? ______',
                      '_________________________________________________'],11,31)
        end()
        header(4,'04 / Soluciones docentes','Las dos primeras órdenes adecuadas son arriba y arriba, desde A4.')
        maze(75,400,59,True)
        lines(355,620,['Ruta de seis órdenes:','Arriba, arriba, derecha,','derecha, derecha, arriba.','A4 > A3 > A2 > B2','> C2 > D2 > D1.'],11,30)
        para(40,337,'El programa inicial choca en la segunda orden: desde A3 intenta entrar en B3. Intercambiar las órdenes 2 y 3 produce una ruta válida. Volved a empezar en A4 y probadla entera.')
        para(40,220,'Ampliación: bloquead también D2 con una pieza y mantened la misma meta. Una alternativa es arriba, arriba, arriba, derecha, derecha, derecha, por la fila 1. No alteréis a la vez inicio y obstáculos si queréis comparar pruebas.')
        end()
    elif slug=='condicionals-moviment':
        header(1,'01 / Entradas para recortar','Seis tarjetas: estrella, círculo y triángulo; cada uno con marco de puntos y sin él.')
        for i,k in enumerate('SSOOTT'):
            x=36+i%2*266;y=510-i//2*175;box(x,y,250,155);shape(k,x+125,y+87,33)
            if i%2==0:
                for dx in range(15,240,25):
                    for dy in [9,137]:C.setFillColor(INK);C.circle(x+dx,y+dy,2,fill=1,stroke=0)
            text(x+17,y+40,{'S':'Estrella','O':'Círculo','T':'Triángulo'}[k],13,True)
            text(x+17,y+17,'Marco de puntos' if i%2==0 else 'Sin marco de puntos',10)
        end()
        header(2,'02 / Zonas de respuesta','Poned una ficha en INICIO antes de cada tarjeta nueva.')
        for y,name,symbol in [(510,'SÍ / LIBRO','Q'),(290,'SI NO / MÚSICA','O')]:
            box(36,y,523,190);shape(symbol,122,y+95,43);text(210,y+105,name,20,True)
        box(36,112,523,110);text(65,159,'INICIO / antes de cada prueba',18,True)
        end()
        header(3,'03 / Regla y registro','Regla: si tiene una estrella, libro; si no, música. El marco no interviene todavía.')
        table(36,650,['Entrada','Predicción','Resultado'],[[x,'',''] for x in ['Estrella con puntos','Estrella sin puntos','Círculo con puntos','Círculo sin puntos','Triángulo con puntos','Triángulo sin puntos']],[205,155,161],43)
        lines(40,290,['La regla nueva de nuestro equipo: _____________________',
                      'Si ______________________________________________',
                      'Entonces __________________________________________',
                      'Si no ____________________________________________'],11,35)
        end()
        header(4,'04 / Guía docente','Las propiedades son de las tarjetas inventadas, no de las personas.')
        para(40,650,'Con la regla completa, las dos estrellas van a libro. Los dos círculos y los dos triángulos van a música. El marco de puntos no cambia esta decisión.')
        para(40,550,'Con solo «si tiene estrella, libro», las demás formas no hacen ninguna acción. Reiniciad la ficha antes de cada prueba: quedarse en INICIO permite observar que no se ha ejecutado ninguna rama alternativa.')
        para(40,427,'Error propuesto: alguien envía el triángulo a libro porque «si no» significa solo círculo. La regla escrita dice que todas las entradas sin estrella van a música. Probad las tres formas.')
        para(40,300,'Ampliación: «estrella y marco de puntos» solo es cierto para una tarjeta. «Estrella o marco de puntos» es cierto para cuatro: las dos estrellas, el círculo con puntos y el triángulo con puntos. En «o», una o las dos propiedades son suficientes.')
        end()
    elif slug=='criptografia-cesar':
        header(1,'01 / Rueda recortable','Recortad los dos círculos. El adulto prepara los agujeros centrales y coloca el encuadernador.')
        wheel(W/2,555,120,'FIJO EXTERIOR');wheel(W/2,270,90,'MÓVIL')
        lines(40,119,['Para +3, alinead A exterior con D interior.',
                      'Cifrad de exterior a interior. Descifrad de interior a exterior.'],10,24)
        end()
        header(2,'02 / Alternativa sin recortar','Una tabla de sustitución también permite cifrar y descifrar. Clave +3.')
        for j in range(2):
            chars=ALPHABET if j==0 else ALPHABET[3:]+ALPHABET[:3]
            text(36,650-j*90,'Original' if j==0 else 'Cifrado (+3)',13,True)
            for i,a in enumerate(chars):
                xx=36+i*20;box(xx,593-j*90,20,36);text(xx+6,605-j*90,a,10,True)
        lines(40,415,['HOLA > KROD. Para volver, leed la tabla en sentido inverso.',
                      'ZOO > CRR: después de Z, el desplazamiento continúa por A.',
                      'Alfabeto del juego: A-Z, sin acentos ni ce cedilla. Espacios conservados.'],10,32)
        para(40,275,'Escribid directamente mensajes ficticios con estas 26 letras. Si adaptáis un texto catalán, acordad antes quitar los acentos y representar la ce cedilla como C. Esto pierde información ortográfica y no es una convención general de escritura.')
        end()
        header(3,'03 / Mensajes y registro','Compartid la clave acordada por otro canal: aquí puede ser oralmente con el compañero.')
        for i,(task,msg) in enumerate([('CIFRA +3','ROBOT'),('CIFRA +3','LIBRO'),('DESCIFRA +3','FDVD')]):
            y=535-i*135;box(36,y,523,112);text(50,y+78,task+' / '+msg,17,True)
            text(50,y+35,'Respuesta: ___________________________________',12)
        lines(40,190,['Un error para reparar: alguien descifra KROD avanzando +3.',
                      '¿Qué sentido debería usar? __________________________',
                      'Escribid un mensaje propio y comprobad la ida y la vuelta.'],11,31)
        end()
        header(4,'04 / Soluciones y límites','Este cifrado de papel no sirve para proteger contraseñas ni secretos reales.')
        lines(40,650,['ROBOT > URERW','LIBRO > OLEUR','FDVD > CASA','KROD > HOLA al retroceder 3 posiciones.'],18,44)
        para(40,420,'Avanzar +3 una segunda vez no deshace el primer cifrado. Para descifrar, buscad la letra recibida en el interior y leed el exterior, o retroceded tres posiciones en el alfabeto.')
        para(40,300,'Hay 26 desplazamientos posibles, incluido el 0 que deja el texto igual: solo 25 lo cambian. Se pueden probar todos. Una palabra con sentido puede sugerir una clave, pero un mensaje corto no garantiza una única interpretación.')
        para(40,170,'No equiparéis este juego con los sistemas actuales de protección de datos. Su objetivo es entender una sustitución reversible y explicar por qué probar pocas claves pone en evidencia el límite del método.')
        end()
    elif slug=='bucles-coreografia':
        header(1,'01 / Acciones para recortar','Cuatro tarjetas de cada acción. Las acciones también se pueden hacer señalando.')
        for i,k in enumerate('MET'*4):
            x=36+i%3*177;y=H-255-i//3*139;box(x,y,135,110);action(k,x+67,y+73,.8);text(x+110,y+83,k,14,True)
            text(x+12,y+31,{'M':'Manos','E':'Hombros','T':'Mesa'}[k],13,True)
            text(x+12,y+12,'Una acción cada vez',9)
        end()
        header(2,'02 / El marco del bucle','El marco incluye solo las acciones que hay que repetir en cada vuelta.')
        box(36,365,523,300,BLUE);text(55,625,'REPITE ____ VECES',20,True)
        for i in range(3):box(70+i*155,440,135,120)
        text(55,392,'CUERPO DEL BUCLE / una vuelta completa',12,True)
        for i in range(4):box(40+i*130,205,115,110);text(80+i*130,243,str(i+1),30,True)
        text(40,160,'Recortad los números o escribid el recuento en el marco.',11)
        end()
        header(3,'03 / Predicción y prueba','M = manos; E = hombros; T = mesa. Cada símbolo equivale a una acción.')
        lines(40,650,['Programa: repite 3 veces [M E T].',
                      'Antes de actuar: ____ vueltas × ____ acciones = ____ acciones.'],13,35)
        text(40,545,'Escribid la secuencia desplegada:',13,True)
        for i in range(9):box(36+i*58,462,52,57)
        lines(40,399,['Ahora cambiad solo el recuento a 2.',
                      'Predicción: ____ acciones. Resultado: ____ acciones.'],12,32)
        para(40,280,'Error para discutir: repite 3 veces [M E]; después T. ¿Tiene el mismo resultado que repetir [M E T] tres veces? Desplegad las dos secuencias.')
        text(40,155,'El cambio que proponemos: ______________________________',11)
        end()
        header(4,'04 / Soluciones docentes','El número de vueltas y el límite del bloque deben quedar visibles.')
        lines(40,650,['3 × [M E T] = M E T / M E T / M E T = 9 acciones.',
                      '2 × [M E T] = M E T / M E T = 6 acciones.',
                      '3 × [M E]; después T = M E / M E / M E / T = 7 acciones.'],11,38)
        para(40,470,'La reparación es volver a poner T dentro del marco si la intención es hacer mesa en cada vuelta. Otro resultado puede ser correcto para una intención diferente, pero no es equivalente a la secuencia original.')
        para(40,340,'Una vuelta del modelo es: dar una palmada, tocar a la vez los dos hombros una vez y tocar suavemente la mesa una vez. Marcad las vueltas con un contador, no solo de memoria.')
        para(40,210,'No hace falta hacer ruido, levantarse o tocar el propio cuerpo. Señalar M, E y T también ejecuta el programa. Para ampliar, añadid una acción fuera del bucle y distinguid qué se repite y qué se hace una sola vez.')
        end()
    elif slug=='patrons-simetries':
        header(1,'01 / Piezas de patrones','Recortad doce círculos y seis triángulos. No hace falta distinguir colores.')
        for i,k in enumerate('O'*12+'T'*6):
            x=36+i%6*87;y=H-235-i//6*130;box(x,y,80,78);shape(k,x+40,y+39,23)
        end()
        header(2,'02 / Tres tiras para completar','Con la regla repetitiva acordada, poned la pieza que falta. No hace falta escribir.')
        for j,pattern in enumerate(['OOTOO?','OTT?TT','OTO?OT']):
            y=555-j*175;text(40,y+105,f'TIRA {j+1}',14,True)
            for i,k in enumerate(pattern):
                box(36+i*87,y,80,85)
                if k=='?':text(36+i*87+29,y+26,'?',29,True)
                else:shape(k,76+i*87,y+43,19)
        end()
        header(3,'03 / Cambiamos las piezas, conservamos la regla','Círculo: toca las rodillas. Triángulo: alza una mano. También se puede señalar.')
        text(40,651,'UNIDAD / círculo, círculo, triángulo',17,True)
        for i,k in enumerate('OOT'):box(80+i*155,490,135,120);shape(k,147+i*155,552,28)
        lines(40,410,['Una vuelta: rodillas, rodillas, mano.',
                      'Tres vueltas: rodillas, rodillas, mano / rodillas, rodillas, mano /',
                      'rodillas, rodillas, mano.'],11,27)
        text(40,285,'INVENTAD UNA UNIDAD / máximo tres piezas',14,True)
        for i in range(3):box(80+i*155,125,135,120)
        end()
        header(4,'04 / Guía de observación y soluciones','Las soluciones presuponen que se repite la unidad mostrada.')
        lines(40,650,['Tira 1: O O T / O O T. Falta un triángulo.',
                      'Tira 2: O T T / O T T. Falta un círculo.',
                      'Tira 3: O T / O T / O T. Falta un triángulo.'],13,35)
        para(40,480,'Mostrad al menos dos vueltas de la unidad antes de tapar una pieza. Pedid que señalen el trozo que se repite y que lo reconstruyan con otras piezas o gestos.')
        para(40,350,'Una secuencia corta puede admitir más de una regla. Si un niño o niña propone otra continuación, pedid que muestre su regla y cómo seguiría. La consigna del juego es repetir la unidad acordada, no descubrir una única ley inevitable.')
        para(40,210,'Observad si agrupa una unidad, anticipa una pieza y conserva el orden al cambiar de representación. No valoréis la rapidez, la lectura o el nombre formal de las formas.')
        end()
    elif slug=='descomposicio-receptes':
        header(1,'01 / Pasos para recortar','Las tarjetas ya describen las acciones: el reto es ordenarlas según las dependencias.')
        for i,(k,label) in enumerate(TASKS):
            x=36+i%2*266;y=548-i//2*142;box(x,y,250,128);text(x+15,y+80,k,24,True);text(x+15,y+34,label,12,True)
        end()
        header(2,'02 / Sobre de juego','Doblad la mitad inferior hacia atrás. Fijad los dos lados con cinta; dejad abierto arriba.')
        box(70,500,455,170);text(90,625,'DESTINO FICTICIO',14,True);text(90,590,'____________________',21)
        text(90,550,'Equipo: __________________________',13)
        C.setDash(5,4);line(36,H/2,W-36,H/2);C.setDash()
        lines(40,340,['Línea de pliegue / parte inferior hacia atrás.',
                      'Podéis usar un sobre reutilizable en lugar de esta plantilla.',
                      'La cinta se pone en los laterales: el sobre debe poder abrirse.',
                      'Cerrar en el juego es bajar el borde abierto, sin sellar.'],10,28)
        end()
        header(3,'03 / ¿Qué debe pasar antes?','Un registro por equipo. Recortad solo el mensaje de la parte inferior.')
        table(36,650,['Acción','¿Qué hay que haber hecho antes?'],[[k+' / '+label,''] for k,label in TASKS],[260,261],36)
        text(40,310,'Orden propuesto: __________________________________',12)
        text(40,275,'Orden alternativo válido: ______________________________',12)
        box(65,80,465,145);text(85,193,'MENSAJE / dibujad un símbolo inventado',13,True)
        end()
        header(4,'04 / Dependencias y soluciones','O: abrir; M: mensaje; I: introducir; T: cerrar; E: destino; C: comprobar; L: entregar.')
        lines(40,650,['O y M deben pasar antes de I.',
                      'I debe pasar antes de T.',
                      'T y E deben pasar antes de C.',
                      'C debe pasar antes de L.'],14,35)
        lines(40,465,['Una secuencia: O, M, E, I, T, C, L.',
                      'Otra secuencia: E, M, O, I, T, C, L.'],13,35)
        para(40,350,'Comprobar significa revisar que el mensaje está dentro, el destino es legible y el borde está bajado. Haced la prueba con el material: si cerráis antes de introducir el mensaje, no podéis ponerlo dentro sin reabrir. En esta prueba solo se puede ejecutar cada tarjeta una vez.')
        para(40,205,'Error: O, M, T, I, E, C, L. La inversión T-I impide completar el envío con las reglas. Intercambiad T e I, reiniciad y probad. Escribir el destino puede hacerse en distintos momentos siempre que sea antes de comprobar.')
        end()
    else:
        header(1,'01 / Objetos del museo','Ocho objetos ficticios: círculo o triángulo, grande o pequeño, con rayas o sin ellas.')
        for i in range(8):data_card(36+i%4*133,475-i//4*185,i)
        lines(40,225,['Identificadores: P1-P4 son círculos; P5-P8 son triángulos.',
                      'P1, P2, P5 y P6 son pequeños; el resto son grandes.',
                      'P2, P4, P6 y P8 tienen rayas.'],10,28)
        end()
        header(2,'02 / Clasificación y dato desconocido','Recortad los carteles y P9. «No lo sabemos» no equivale a «no tiene rayas».')
        for i,s in enumerate(['SÍ / TIENE RAYAS','NO / SIN RAYAS','NO LO SABEMOS / ?']):
            box(36,555-i*140,523,110);text(60,600-i*140,s,20,True)
        box(36,80,190,160);shape('T',130,173,28);text(120,161,'?',22,True);text(50,102,'P9 / superficie tapada',10,True)
        para(260,204,'De P9 sabemos que es un triángulo grande. No se ve si tiene rayas. No completéis la propiedad inventándola.',width=285,size=11)
        end()
        header(3,'03 / Registro de datos','Anotad O o T; tamaño G o P; rayas 1, 0 o ? si no hay información.')
        table(36,650,['ID','Forma','Mida','Ratlles'],[[f'P{i+1}','','',''] for i in range(9)],[70,150,150,151],34)
        lines(40,250,['Regla de clasificación: ______________________________',
                      'Con rayas: ____  Sin rayas: ____  Desconocido: ____',
                      'Total comprobado: ____  ¿Está cada identificador una vez?',
                      'Si cambiamos a «es círculo», ¿qué grupos obtenemos? __________'],11,32)
        end()
        header(4,'04 / Soluciones y límites de los datos','Clasificación por rayas con P1-P9: cuatro sí, cuatro no, un dato desconocido.')
        table(36,650,['ID','Forma','Mida','Ratlles'],[[f'P{i+1}','O' if i<4 else 'T','G' if i%4>=2 else 'P',str(i%2)] for i in range(8)]+[['P9','T','G','?']],[70,150,150,151],30)
        para(40,285,'Con rayas: P2, P4, P6, P8. Sin rayas: P1, P3, P5, P7. P9 queda desconocido. La suma 4 + 4 + 1 es 9. Si clasificamos por forma: cuatro círculos y cinco triángulos; la superficie desconocida no impide leer la forma.')
        para(40,155,'No registramos nombres, gustos ni datos de personas. Un 0 expresa que hemos observado ausencia de rayas; ? expresa que no lo podemos saber. Son informaciones diferentes.')
        end()
    C.save()
    for kind,name in enumerate(['inici','exemple','reparacio']):
        with tempfile.TemporaryDirectory() as tmp:
            p=Path(tmp)/'visual.pdf';C=canvas.Canvas(str(p),pagesize=(1000,460),invariant=1)
            C.setFillColor(white);C.rect(0,0,1000,460,fill=1,stroke=0)
            C.setFillColor(BLUE);C.roundRect(16,16,968,428,20,fill=1,stroke=0)
            text(36,410,title,25,True)
            text(36,379,[level+' / Así se juega','Ejemplo y convenciones','Una prueba para revisar'][kind],13)
            instruction_diagrams(kind);C.save()
            subprocess.run(['pdftoppm','-scale-to','1600','-singlefile','-png',str(p),str(Path(tmp)/'visual')],check=True,stderr=subprocess.PIPE)
            Image.open(Path(tmp)/'visual.png').convert('RGB').save(OUT/f'{slug}-{name}.webp','WEBP',quality=92)
    print(slug+': 4 páginas PDF + 3 diagramas web',flush=True)

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
assert shift('ROBOT',3)=='URERW' and shift('LIBRO',3)=='OLEUR' and shift('FDVD',-3)=='CASA'
for seq in ['OMEITCL','EMOITCL']:
    assert all(seq.index(a)<seq.index(b) for a,b in EDGES)
assert not all('OMTIECL'.index(a)<'OMTIECL'.index(b) for a,b in EDGES)
print('Verificados la red de ordenación (24 permutaciones, 81 casos con empates), el cifrado y las dependencias de tareas.')
