#!/usr/bin/env python3
"""Rebuild the Robot Humano PDF and instructional WebP diagrams.
Requires ReportLab, Pillow, pdftoppm and system DejaVu Sans fonts.
"""
from pathlib import Path
import subprocess
import tempfile
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '_assets/activitats/kits'
OUT.mkdir(parents=True, exist_ok=True)
for name, file in [('Kit', 'DejaVuSans.ttf'), ('Kit-Bold', 'DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, '/usr/share/fonts/truetype/dejavu/' + file))
INK, MUTED, BLUE = map(HexColor, ['#0f172a', '#64748b', '#ebf5fd'])
W,H = A4
c = None

def text(x,y,s,size=11,bold=False):
    font = 'Kit-Bold' if bold else 'Kit'
    assert x + pdfmetrics.stringWidth(s,font,size) <= c._pagesize[0]-24, s
    c.setFont(font,size); c.setFillColor(INK); c.drawString(x,y,s)

def lines(x,y,items,size=11,gap=21):
    for s in items: text(x,y,s,size); y-=gap

def box(x,y,w,h,fill=white):
    c.setStrokeColor(MUTED); c.setLineWidth(.8); c.setFillColor(fill)
    c.roundRect(x,y,w,h,8,fill=1,stroke=1)

def arrow(x,y,kind='A',size=1):
    c.saveState(); c.translate(x,y); c.scale(size,size)
    c.setStrokeColor(INK); c.setLineWidth(4); c.setLineCap(1); c.setLineJoin(1)
    if kind=='A':
        c.line(0,-18,0,18); c.line(0,18,-10,8); c.line(0,18,10,8)
    else:
        sign=1 if kind=='D' else -1
        p=c.beginPath(); p.moveTo(-sign*12,-17); p.lineTo(-sign*12,1)
        p.curveTo(-sign*12,14,sign*1,18,sign*17,18); c.drawPath(p)
        c.line(sign*17,18,sign*7,28); c.line(sign*17,18,sign*7,8)
    c.restoreState()

def robot(x,y,heading=0,size=1):
    c.saveState(); c.translate(x,y); c.rotate(-90*heading); c.scale(size,size)
    c.setStrokeColor(INK); c.setLineWidth(1.5); c.setFillColor(BLUE)
    c.roundRect(-17,-16,34,32,5,fill=1,stroke=1)
    c.setFillColor(INK)
    for dx in [-7,7]: c.circle(dx,3,2.5,fill=1,stroke=0)
    p=c.beginPath(); p.moveTo(0,29); p.lineTo(-9,19); p.lineTo(9,19); p.close(); c.drawPath(p,fill=1,stroke=0)
    c.restoreState()

def book(x,y,size=1):
    c.saveState(); c.translate(x,y); c.scale(size,size); c.setStrokeColor(INK); c.setLineWidth(2)
    c.rect(-21,-15,42,30); c.line(0,-15,0,15)
    for dx in [-15,5]: c.line(dx,5,dx+10,5)
    c.restoreState()

def block(x,y,size=1):
    c.saveState();c.translate(x,y);c.scale(size,size);c.setStrokeColor(INK);c.setLineWidth(3)
    c.rect(-20,-20,40,40);c.line(-12,-12,12,12);c.line(-12,12,12,-12);c.restoreState()

def board(x,y,size=100,heading=0,pos=(0,2),goal=(2,0),path=False):
    # x,y is bottom-left; row 1 is the top row, matching printed coordinates.
    for r in range(3):
        for col in range(3):
            c.setStrokeColor(MUTED);c.setFillColor(white)
            c.rect(x+col*size,y+(2-r)*size,size,size,fill=1)
    for i,label in enumerate('ABC'): text(x+(i+.46)*size,y+3*size+10,label,11,True)
    for r in range(3): text(x-18,y+(2-r+.45)*size,str(r+1),11,True)
    block(x+1.5*size,y+1.5*size,min(size/100,.8))
    book(x+(goal[0]+.5)*size,y+(2-goal[1]+.5)*size,min(size/90,.9))
    if path:
        c.setStrokeColor(INK);c.setLineWidth(2);c.setDash(4,3)
        p=c.beginPath();p.moveTo(x+.5*size,y+.5*size);p.lineTo(x+.5*size,y+2.5*size);p.lineTo(x+2.5*size,y+2.5*size);c.drawPath(p);c.setDash()
    robot(x+(pos[0]+.5)*size,y+(2-pos[1]+.5)*size,heading,min(size/90,.9))

def commands(x,y,seq,cell=51,start=1):
    for i,s in enumerate(seq):
        box(x+i*(cell+6),y,cell,63);arrow(x+i*(cell+6)+cell/2,y+31,s,.58)
        text(x+i*(cell+6)+5,y-14,str(i+start),9)

def page(n,label,hint):
    c.setFillColor(BLUE);c.rect(0,H-126,W,126,fill=1,stroke=0)
    text(36,H-33,'ROBÓTICA 200 / MATERIAL DE AULA',10,True)
    text(36,H-66,'El robot humano',25,True)
    text(36,H-90,f'Primer ciclo | {label}',12)
    text(36,H-111,hint,9)
    text(36,24,'A4 al 100 %. Apto para blanco y negro. Las respuestas docentes están en la página 5.',8)
    text(W-50,24,str(n),10)

c=canvas.Canvas(str(OUT/'robot-huma.pdf'),pagesize=A4,invariant=1)
c.setTitle('El robot humano - misión biblioteca - kit imprimible')
c.setAuthor('Robótica para docentes')
page(1,'01 / Tablero de juego','No recortéis el tablero. El robot y la meta dibujados marcan la primera misión.')
board(110,270,125)
lines(40,215,['Inicio: A3, mirando hacia la fila 1. Meta: C1 (libro).',
              'La casilla B2 está bloqueada durante todas las misiones.',
              'Poned la ficha de robot encima de la posición inicial.',
              'Un giro cambia la orientación sin cambiar de casilla.',
              'Si una orden sale del tablero o entra en B2: parad antes de mover.'])
c.showPage()
page(2,'02 / Doce órdenes para recortar','Seis órdenes de avanzar, tres de girar a la derecha y tres de girar a la izquierda.')
seq=['A']*6+['D']*3+['E']*3
for i,s in enumerate(seq):
    x=36+(i%3)*177;y=H-258-(i//3)*139
    box(x,y,165,122);arrow(x+82,y+77,s,1)
    label={'A':'AVANZA 1','D':'GIRA DERECHA','E':'GIRA IZQUIERDA'}[s]
    text(x+12,y+29,label,11,True)
    text(x+12,y+12,'Una casilla' if s=='A' else 'Un cuarto de vuelta',9)
c.showPage()
page(3,'03 / Fichas y misiones','Recortad los dos robots y las dos metas. Usad las misiones sin mostrar la solución.')
for i in range(4):
    x=36+i*133;box(x,545,123,125)
    if i<2:robot(x+61,612,0,1.15)
    else:book(x+61,612,1.1)
    text(x+12,560,'ROBOT' if i<2 else 'META',11,True)
missions=[('MISIÓN 1 / Biblioteca','Inicio A3, mirando hacia la fila 1.','Meta C1. B2 bloqueada.'),
          ('MISIÓN 2 / Nueva entrega','Inicio A3, mirando hacia la fila 1.','Meta C3. B2 bloqueada.'),
          ('MISIÓN 3 / Vuelta','Inicio C1, mirando hacia la fila 3.','Meta A1. B2 bloqueada.')]
for i,(label,a,b) in enumerate(missions):
    y=395-i*127;box(36,y,523,110);text(50,y+79,label,15,True)
    text(50,y+52,a,12);text(50,y+28,b,12)
c.showPage()
page(4,'04 / Programa y comprobación','Escribid A, D o E en los espacios. Las tarjetas grandes se ponen en fila encima de la mesa.')
text(36,660,'Misión: ______  Inicio: ______  Mira hacia: __________',13,True)
text(36,621,'1. Antes de mover: preparamos el programa.',13,True)
for i in range(8):
    x=39+i*65;box(x,530,58,66);text(x+5,516,str(i+1),10)
lines(36,475,['Predicción: llegará a __________ mirando hacia __________.',
              '2. Ejecutamos una orden cada vez. Marcamos dónde nos paramos.',
              'Resultado: ___________________________________________',
              'Primera orden que hay que revisar: _________________________'],11,29)
text(36,336,'3. Cambiamos solo lo necesario y volvemos a probar.',13,True)
for i in range(8):
    x=39+i*65;box(x,246,58,66);text(x+5,232,str(i+1),10)
lines(36,191,['Hemos cambiado: ________________________________________',
              'Porque: _____________________________________________',
              'Nueva prueba: _________________________________________'],11,31)
c.showPage()
page(5,'05 / Guía docente y ejemplo resuelto','Reservad esta página. Hay más de una ruta correcta; estas son ejemplos.')
board(64,470,69,path=True)
text(320,655,'MISIÓN 1 / Cinco órdenes',13,True)
lines(320,625,['A, A, D, A, A','A3 > A2 > A1 > B1 > C1','Acaba mirando hacia C.'],10,24)
text(320,533,'MISIÓN 2 / Tres órdenes',13,True)
lines(320,505,['D, A, A','A3 > B3 > C3','Acaba mirando hacia C.'],10,24)
text(36,423,'MISIÓN 3 / Una ruta de ocho órdenes',13,True)
lines(36,395,['A, A, D, A, A, D, A, A. C1 > C2 > C3 > B3 > A3 > A2 > A1.',
              'Acaba mirando hacia la fila 1. No atraviesa B2.'],10,21)
text(36,330,'ERROR PARA REPARAR / Misión 1',14,True)
commands(39,238,['A','A','E','A','A'])
lines(36,196,['Predicción: después del tercer paso está en A1, mirando fuera del tablero.',
              'El cuarto paso no se puede ejecutar: parad sin salir de la cuadrícula.',
              'Cambiad solo la tercera orden: E pasa a D.',
              'Reiniciad en A3, mirando hacia la fila 1, y repetid el programa.',
              'Observamos si distingue giro y avance, predice y justifica la reparación.'],10,24)
c.showPage();c.save()

# Web diagrams use landscape compositions, rather than scaled-down worksheets.
def visual(name,title,subtitle,draw):
    with tempfile.TemporaryDirectory() as tmp:
        global c
        pdf=Path(tmp)/'diagram.pdf'
        c=canvas.Canvas(str(pdf),pagesize=(960,470),invariant=1)
        c.setFillColor(white);c.rect(0,0,960,470,fill=1,stroke=0)
        c.setFillColor(BLUE);c.roundRect(16,16,928,438,20,fill=1,stroke=0)
        text(36,416,title,24,True);text(36,386,subtitle,13)
        draw();c.save()
        subprocess.run(['pdftoppm','-scale-to','1600','-singlefile','-png',str(pdf),str(Path(tmp)/'diagram')],check=True,stderr=subprocess.PIPE)
        Image.open(Path(tmp)/'diagram.png').convert('RGB').save(OUT/f'robot-huma-{name}.webp','WEBP',quality=92)

def overview():
    for i in range(3):box(34+i*308,45,280,315)
    text(50,330,'1. Planificamos',16,True);board(81,105,60)
    text(358,330,'2. Preparamos órdenes',16,True)
    commands(363,221,['A','A','D'],cell=49);commands(363,112,['A','A'],cell=49,start=4)
    text(358,70,'Predecimos antes de mover.',12)
    text(666,330,'3. Probamos y revisamos',16,True);board(697,105,60,path=True)
visual('inici','El robot humano / Misión biblioteca','Un programa sobre papel: acordamos el inicio, ejecutamos y comprobamos.',overview)

def turns():
    for i in range(3):box(34+i*308,45,280,315)
    for i,(label,kind,h1,h2) in enumerate([('AVANZA 1','A',0,0),('GIRA DERECHA','D',0,1),('GIRA IZQUIERDA','E',0,3)]):
        x=34+i*308;text(x+16,326,label,16,True)
        robot(x+64,240,h1,.9);arrow(x+143,245,kind,.9);robot(x+220,240,h2,.9)
        if kind=='A':
            lines(x+16,157,['Cambia a la casilla de delante.','Conserva hacia dónde mira.'],12,25)
        else:
            lines(x+16,157,['Se queda en la misma casilla.','Cambia hacia dónde mira.'],12,25)
        text(x+16,79,'La punta negra indica el frente.',11)
visual('ordres','Girar no es avanzar','Las órdenes se leen desde el punto de vista del robot.',turns)

def repair():
    box(34,45,430,315);box(484,45,442,315)
    text(52,327,'Antes / tercera orden incorrecta',16,True)
    commands(54,223,['A','A','E','A','A'],cell=57)
    lines(52,166,['A A E: queda en A1 mirando fuera.','La cuarta orden saldría del tablero.','Paramos antes de mover.'],13,27)
    text(502,327,'Después / cambiamos E por D',16,True)
    commands(504,223,['A','A','D','A','A'],cell=57)
    lines(502,166,['Reiniciamos en la posición inicial.','Probamos la secuencia corregida.','Llegamos a C1: el libro está entregado.'],13,27)
visual('reparacio','Una sola orden cambia el resultado','La reparación se comprueba ejecutando de nuevo, con el mismo inicio.',repair)
print('Generado robot-huma.pdf (5 páginas) y tres diagramas WebP instructivos.')
