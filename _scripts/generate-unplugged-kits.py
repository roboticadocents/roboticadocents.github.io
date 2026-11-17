#!/usr/bin/env python3
"""Reconstruye los cuatro kits de aula originales y sus vistas web.
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
TITLES = {'maleta-personatges': ('La maleta de los personajes', 'Educación Infantil'), 'fabrica-monstres': ('La fábrica de monstruos', 'Primer ciclo'), 'correu-pixels': ('El correo secreto de píxeles', 'Segundo ciclo'), 'xarxa-missatgers': ('La red de mensajeros', 'Tercer ciclo')}

def text(x, y, s, size=12, bold=False):
    font = 'KitSans-Bold' if bold else 'KitSans'
    assert x + pdfmetrics.stringWidth(s, font, size) <= c._pagesize[0]-20, f'Text overflows: {s}'
    c.setFillColor(INK); c.setFont(font, size); c.drawString(x, y, s)
def page(label, hint):
    global num
    num += 1
    c.setFillColor(BLUE); c.rect(0, H-130, W, 130, fill=1, stroke=0)
    text(36,H-35,'ROBÓTICA 200 / MATERIAL DE AULA',10,True)
    text(36,H-67,title,22,True); text(36,H-91,f'{level}  |  {label}',12)
    text(36,H-113,hint,10)
    text(36,24,'Imprimid en A4 al 100 %. El color no es necesario para resolver los retos.',9)
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
    c.setTitle(f'{title} - kit imprimible'); c.setAuthor('Robótica para docentes')
    if slug=='maleta-personatges':
        page('01 / Tarjetas para recortar','Un juego por grupo de 3 o 4. Recortad los rectángulos; un adulto prepara las piezas.')
        cards([('Gorra','gorra'),('Botas','botes'),('Paraguas','paraigua'),('Agua','aigua'),('Toalla','tovallola'),('Abrigo','abric'),('Libro','llibre'),('Pelota','pilota')]); end()
        page('02 / La maleta','Colocad las piezas dentro. Dejad fuera las que queráis discutir.')
        c.roundRect(85,210,425,400,30); c.roundRect(220,610,155,30,10)
        text(118,570,'Preparamos la maleta de:',16,True); c.line(118,535,475,535)
        text(118,490,'Vamos a:',16,True); c.line(118,455,475,455)
        text(118,255,'Elegid 3 objetos y explicad por qué.',14); end()
        page('03 / Destinos y pistas','Elegid un destino. Las pistas se leen en voz alta y también se representan con gestos.')
        for i,(dest,pistas) in enumerate([('PLAYA',['Hace sol. Nos bañaremos.','Después tendremos que secarnos.']),('MONTAÑA',['Hace frío. Caminaremos por barro.','Necesitaremos beber agua.']),('DÍA DE LLUVIA',['Llueve y hay charcos.','Después leeremos dentro de casa.'])]):
            y=510-i*155; box(36,y,523,135); text(55,y+100,dest,18,True); text(55,y+70,pistas[0],14); text(55,y+43,pistas[1],14); weather(i,480,y+73)
        end()
        page('04 / Ejemplo y conversación','Guía docente. No es una lista única de respuestas correctas.')
        lines(650,['1. Playa: hace sol, nos bañaremos y nos secaremos.','2. Una elección posible: gorra, agua y toalla.','3. La pelota también se puede defender: ¿qué dejaríamos fuera?'])
        for i,k in enumerate(['gorra','aigua','tovallola']): icon(k,130+i*160,480,1.5)
        lines(385,['Cambio de pista: ahora hace frío y caminamos por barro.','¿Qué pieza cambiarías? ¿Qué pista justifica el cambio?','¿Observamos: relaciona una pieza con una pista?','¿Revisa la elección cuando cambia una condición?'])
        end()
    elif slug=='fabrica-monstres':
        page('01 / Piezas para recortar','Imprimid esta página dos veces por pareja. Añadid un cuerpo de la página 2.')
        cards([('Ojo','ull')]*4+[('Pata','pota')]*3+[('Cuerno','banya')]); end()
        page('02 / Dos cuerpos de montaje','Recortad los cuerpos. Poned las piezas encima; no hace falta pegarlas.')
        for y in [440,155]:
            c.roundRect(190,y,215,220,28); text(235,y+95,'CUERPO',24,True)
        end()
        page('03 / Receta y comprobación','Marcad la posición respecto al cuerpo. Intercambiad la receta sin mostrar el modelo.')
        for i,s in enumerate(['1. Cuerpo: ponlo en el centro.','2. Ojos: ¿cuántos? ____  ¿Dónde? ____________________','3. Patas: ¿cuántas? ____  ¿Dónde? __________________','4. Cuernos: ¿cuántos? ____  ¿Dónde? _________________']):
            box(36,585-i*85,523,65); text(50,610-i*85,s,12)
        lines(235,['¿Hemos obtenido lo mismo? __________________________','La instrucción que hemos cambiado: _____________________','Ahora dice: ________________________________________']); end()
        page('04 / Una receta que se puede ejecutar','Guía docente y ejemplo para explicar la primera ronda.')
        monster(300,500)
        lines(340,['1. Poned un cuerpo en el centro.','2. Poned dos ojos dentro del cuerpo, en la parte de arriba.','3. Poned dos patas debajo del cuerpo, una a cada lado.','4. Poned un cuerno encima del cuerpo, en el centro.'])
        lines(200,['Error para discutir: «pon ojos» no dice cuántos ni dónde.','Comparad cantidad y posición, no la belleza del dibujo.','Una receta diferente puede describir el mismo monstruo.']); end()
    elif slug=='correu-pixels':
        rows=['00100','01110','11111','00100','00100']
        codes=['2, 1, 2','1, 3, 1','0, 5','2, 1, 2','2, 1, 2']
        page('01 / Ejemplo resuelto','Siempre empezamos contando las casillas blancas, aunque sean cero.')
        grid(85,570,rows,43)
        for i,s in enumerate(codes): text(355,580-i*43,f'Fila {i+1}: {s}',16,True)
        lines(280,['Leed cada fila de izquierda a derecha.','Alternamos: blancas, negras, blancas, negras...','Fila 3: 0 blancas y 5 negras. El 0 inicial es necesario.','Cada fila debe sumar 5. No se escriben ceros al final.']); end()
        page('02 / Emisor','Dibuja un icono en la cuadrícula. Envía solo la página 3 al receptor.')
        grid(205,575,None,42)
        lines(295,['Nombre del mensaje: ______________________________','¿Antes de enviar: cada fila suma 5?','¿Has empezado contando las blancas?','¿Has separado las cinco filas?']); end()
        page('03 / Mensaje codificado','Recorta por la línea. El receptor no debe ver el dibujo original.')
        for i in range(5): text(50,650-i*40,f'Fila {i+1}: ______________________________________',15)
        c.setDash(5,4); c.line(36,445,559,445); c.setDash()
        text(45,410,'RECEPTOR / Reconstruye sin mirar el original',14,True)
        grid(210,355,None,39); text(45,100,'Fila revisada y motivo: _______________________________',12); end()
        page('04 / Taller de reparación','Guía docente. Tapad las respuestas durante la primera prueba.')
        lines(645,['A. Código recibido para una fila de 5 casillas: 2, 2','¿Qué podemos detectar? La suma es 4: falta información.','No podemos deducir con certeza qué casilla falta.','','B. Código recibido: 1, 3, 1','La suma es 5. ¿Esto garantiza que el dibujo sea correcto?','No: el código 2, 1, 2 también suma 5 y dibuja otra fila.','','C. Comparamos formas de escribir una fila negra.','Con bits: 1 1 1 1 1. Con recuentos: 0, 5.','Contamos números escritos, no bits ni tamaño de un archivo.','Los recuentos no siempre hacen el mensaje más corto.']); end()
    else:
        page('01 / Mapa de la red','Un nodo puede ser una mesa. Solo se puede enviar por las líneas dibujadas.')
        pts={'A':(95,525),'B':(285,645),'C':(285,405),'D':(490,525)}
        for a,b in [('A','B'),('A','C'),('B','C'),('B','D'),('C','D')]: c.line(*pts[a],*pts[b])
        for name,(x,y) in pts.items():
            c.setFillColor(colors.white); c.circle(x,y,30,fill=1); text(x-7,y-7,name,22,True)
        lines(285,['Origen A / Destino D. Caminos: A-B-D o A-C-D.','También podéis pasar por B-C. Contad cada salto.','Protocolo: espera un turno, mueve un paquete un enlace.','Cada enlace admite un paquete por turno, en total.']); end()
        page('02 / Paquetes para recortar','Recortad los cuatro paquetes. El receptor solo conoce el total y el identificador.')
        for i,word in enumerate(['EL','ROBOT','LLEVA','LIBROS']):
            y=525-i*125; box(36,y,523,110)
            text(52,y+82,f'Mensaje M1 | Origen A | Destino D | {i+1} de 4',13,True)
            text(52,y+38,word,23,True)
        end()
        page('03 / Incidencias y confirmaciones','Recortad las tarjetas. Introducid solo una incidencia cada ronda.')
        labels=[('CAMINO CERRADO','Cerrad B-D. Buscad otro camino.'),('PAQUETE RETENIDO','El docente retiene el paquete 2 en esta ronda.'),('LLEGADA DESORDENADA','Haced llegar el paquete 4 antes del paquete 3.'),('CONFIRMACIÓN M1','He recibido: 1 / 2 / 3 / 4. Falta: __________')]
        for i,(a,b) in enumerate(labels):
            y=525-i*125; box(36,y,523,110); text(52,y+75,a,17,True); text(52,y+40,b,12)
        end()
        page('04 / Registro y solución docente','Un registro por equipo. La confirmación vuelve a A por los mismos enlaces.')
        for i,s in enumerate(['Turno','Paquete','De','A']): text(45+i*130,640,s,12,True)
        for r in range(9):
            y=620-r*30; c.line(36,y,559,y)
            for x in [36,166,296,426,559]: c.line(x,y,x,y-30)
        c.line(36,350,559,350)
        lines(285,['Solución: EL ROBOT LLEVA LIBROS.','Si falta 2/4, sabemos qué falta, pero no su contenido.','D pide «M1, reenvía 2»; A conserva una copia.','Al cerrar B-D, B-C-D es una alternativa desde B.','Los paquetes se pueden ordenar gracias a los números.','Esta es una simulación con turnos, no Internet real.']); end()
    c.save()
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['pdftoppm','-scale-to','1400','-png',str(OUT/f'{slug}.pdf'),str(Path(tmp)/'page')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
        files=sorted(Path(tmp).glob('page-*.png'))
        # Two instructional previews per activity, using the actual kit artwork.
        chosen=[2,3] if slug=='maleta-personatges' else ([0,3] if slug=='fabrica-monstres' else ([0,2] if slug=='correu-pixels' else [0,1]))
        for n,index in enumerate(chosen,1):
            im=Image.open(files[index]).convert('RGB')
            im.save(OUT/f'{slug}-{n}.webp','WEBP',quality=90)
print('Generados cuatro kits de 4 páginas y ocho vistas web.')

rows=['00100','01110','11111','00100','00100']
codes=['2, 1, 2','1, 3, 1','0, 5','2, 1, 2','2, 1, 2']

# Landscape explainers show the flow of play; the second web image shows real kit pieces.
with tempfile.TemporaryDirectory() as tmp:
    for slug,(title,level) in TITLES.items():
        target=Path(tmp)/f'{slug}.pdf'
        c=canvas.Canvas(str(target),pagesize=(960,460))
        c.setFillColor(colors.white); c.rect(0,0,960,460,fill=1,stroke=0)
        c.setFillColor(BLUE); c.roundRect(16,16,928,428,20,fill=1,stroke=0)
        text(38,405,title,26,True); text(38,376,level+' / Así se juega',14)
        for i in range(3):
            box(34+i*308,48,280,300)
            c.setFillColor(INK); c.circle(59+i*308,322,14,fill=1)
            c.setFillColor(colors.white); c.setFont('KitSans-Bold',12); c.drawCentredString(59+i*308,318,str(i+1))
        if slug=='maleta-personatges':
            text(83,317,'Escuchamos las pistas',14,True)
            weather(0,173,235); text(61,160,'Sol, baño y secarse.',13)
            text(391,317,'Elegimos tres objetos',14,True)
            for i,k in enumerate(['gorra','aigua','tovallola']): icon(k,390+i*75,225,1)
            text(366,160,'¿Qué pista lo explica?',13)
            text(699,317,'Cambia el destino',14,True)
            weather(1,790,250); icon('botes',755,160); icon('abric',840,160)
            text(677,90,'¿Qué conservamos? ¿Qué cambiamos?',12)
        elif slug=='fabrica-monstres':
            text(83,317,'Creamos un modelo',14,True); monster(175,200)
            text(391,317,'Escribimos la receta',14,True)
            for i,s in enumerate(['1 cuerpo al centro','2 ojos dentro, arriba','2 patas debajo','1 cuerno encima']): text(370,260-i*38,s,15)
            text(699,317,'Montamos y comparamos',14,True); monster(790,200)
            text(677,79,'Si no coincide, revisamos un paso.',12)
        elif slug=='correu-pixels':
            text(83,317,'Dibujamos',14,True); grid(105,250,rows,27)
            text(391,317,'Enviamos recuentos',14,True)
            for i,s in enumerate(codes): text(390,260-i*33,f'{i+1}:   {s}',16)
            text(699,317,'Reconstruimos',14,True); grid(720,250,rows,27)
            text(677,79,'Comparamos con el original.',12)
        else:
            text(83,317,'Separamos en paquetes',14,True)
            for i,s in enumerate(['1/4  EL','2/4  ROBOT','3/4  LLEVA','4/4  LIBROS']):
                box(63,243-i*44,220,35); text(76,254-i*44,s,13,True)
            text(391,317,'Elegimos una ruta',14,True)
            pts={'A':(375,200),'B':(478,265),'C':(478,130),'D':(585,200)}
            for a,b in [('A','B'),('A','C'),('B','C'),('B','D'),('C','D')]: c.line(*pts[a],*pts[b])
            for name,(x,y) in pts.items():
                c.setFillColor(colors.white); c.circle(x,y,19,fill=1); text(x-5,y-5,name,14,True)
            text(699,317,'Ordenamos y confirmamos',14,True)
            for i,s in enumerate(['EL ROBOT','LLEVA LIBROS','Recibidos: 1, 2, 3, 4','¿Falta 2? Pedimos 2.']): text(682,260-i*40,s,15,i<2)
        c.save()
        subprocess.run(['pdftoppm','-scale-to','1600','-singlefile','-png',str(target),str(Path(tmp)/slug)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
        Image.open(Path(tmp)/f'{slug}.png').convert('RGB').save(OUT/f'{slug}-inici.webp','WEBP',quality=92)
print('Generados cuatro explicadores de actividad en horizontal.')
