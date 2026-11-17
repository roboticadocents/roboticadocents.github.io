#!/usr/bin/env python3
"""Generate A4 pupil worksheets and separate keys from the robot Markdown activities.
Requires Python 3, pycairo, PyGObject and librsvg. No browser or network required.
The exercise statements and answers live only in _content/activitats/*.md.
"""
from pathlib import Path
import re
import math
import cairo
import gi
gi.require_version("Rsvg", "2.0")
from gi.repository import Rsvg

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '_assets/activitats/kits'
W, H = 595.2756, 841.8898
INK, GREY, PALE = (0.06, 0.09, 0.13), (0.33, 0.36, 0.40), (0.95, 0.96, 0.97)
KINDS = ['prediu-el-resultat', 'escriu-el-codi', 'depura-el-codi', 'refactoritza-el-codi']
TB_EXTRA = ['quin-dibuix-fara', 'dibuixa-per-parts', 'des-de-quin-costat', 'aproxima-i-empeny']
CS_EXTRA = ['divideix-i-crea-funcions', 'que-pose-dins-del-bucle', 'una-funcio-diferents-llocs', 'combina-funcions-i-repeticions']
SOURCE_SLUGS = {
    'tb-prediu-el-resultat': 'tb-predice-el-resultado',
    'tb-escriu-el-codi': 'tb-escribe-el-codigo',
    'tb-depura-el-codi': 'tb-depura-el-codigo',
    'tb-refactoritza-el-codi': 'tb-refactoriza-el-codigo',
    'tb-quin-dibuix-fara': 'tb-que-dibujo-hara',
    'tb-dibuixa-per-parts': 'tb-dibuja-per-partes',
    'tb-des-de-quin-costat': 'tb-des-de-que-lado',
    'tb-aproxima-i-empeny': 'tb-aproxima-y-empuja',
    'cs-prediu-el-resultat': 'cs-predice-el-resultado',
    'cs-escriu-el-codi': 'cs-escribe-el-codigo',
    'cs-depura-el-codi': 'cs-depura-el-codigo',
    'cs-refactoritza-el-codi': 'cs-refactoriza-el-codigo',
    'cs-divideix-i-crea-funcions': 'cs-divide-y-crea-funciones',
    'cs-que-pose-dins-del-bucle': 'cs-que-pongo-dentro-del-bucle',
    'cs-una-funcio-diferents-llocs': 'cs-una-funcion-distintos-lugares',
    'cs-combina-funcions-i-repeticions': 'cs-combina-funciones-y-repeticiones',
}
ICONS = ROOT / '_assets/activitats/icones'
ICON_NAMES = dict(A='endavant', R='enrere', D='gir-dreta', E='gir-esquerra', repeat='repetir', loop='bucle-inici', end='bucle-fi', define='defineix-funcio', F='crida-funcio')
icon_handles = {}
LABELS = {'tb': 'Tale-Bot', 'cs': 'Coding Set'}
ctx = None
mascot_surface = None


def font(size=10, bold=False):
    ctx.select_font_face('DejaVu Sans', cairo.FONT_SLANT_NORMAL,
                         cairo.FONT_WEIGHT_BOLD if bold else cairo.FONT_WEIGHT_NORMAL)
    ctx.set_font_size(size)


def text(x, y, value, size=10, bold=False, color=INK):
    font(size, bold)
    assert x + ctx.text_extents(value).x_advance < W - 25, value
    ctx.set_source_rgb(*color)
    ctx.move_to(x, y)
    ctx.show_text(value)


def paragraph(x, y, value, width, size=10, leading=15, bold=False):
    font(size, bold)
    words, lines, line = value.split(), [], ''
    for word in words:
        test = f'{line} {word}'.strip()
        if ctx.text_extents(test).x_advance > width and line:
            lines.append(line)
            line = word
        else:
            line = test
    if line:
        lines.append(line)
    for line in lines:
        text(x, y, line, size, bold)
        y += leading
    return y


def line(x1, y1, x2, y2, grey=0.65, width=0.5):
    ctx.set_source_rgb(grey, grey, grey)
    ctx.set_line_width(width)
    ctx.move_to(x1, y1)
    ctx.line_to(x2, y2)
    ctx.stroke()


def box(x, y, w, h, fill=None):
    ctx.rectangle(x, y, w, h)
    if fill:
        ctx.set_source_rgb(*fill)
        ctx.fill_preserve()
    ctx.set_source_rgb(0.65, 0.65, 0.65)
    ctx.set_line_width(0.5)
    ctx.stroke()


def expand(code, function=None):
    """Only the four motion commands, A/R numeric parameters and finite loops."""
    if re.search(r'\bF\b', code):
        if not function or function == '-' or re.search(r'\bF\b', function):
            raise ValueError('La llamada necesita una definición sin recursividad')
        code = re.sub(r'\bF\b', function, code)
    pattern = re.compile(r'REP([2-4])\[([^\[\]]+)\]')
    while 'REP' in code:
        changed = pattern.sub(lambda m: ' '.join([m[2]] * int(m[1])), code)
        if changed == code:
            raise ValueError(f'Bucle no válido: {code}')
        code = changed
    actions = []
    for token in code.split():
        match = re.fullmatch(r'([AR])([1-6])?', token)
        if match:
            actions.extend([match[1]] * int(match[2] or '1'))
        elif token in ('D', 'E'):
            actions.append(token)
        else:
            raise ValueError(f'Orden no válida: {token}')
    return actions


def simulate(start, code, function=None):
    cell, heading = start.split()
    x, y, d = ord(cell[0]) - 65, int(cell[1]) - 1, 'NESO'.index(heading)
    states = [(x, y, d)]
    for action in expand(code, function):
        if action == 'D':
            d = (d + 1) % 4
        elif action == 'E':
            d = (d - 1) % 4
        else:
            dx, dy = [(0, 1), (1, 0), (0, -1), (-1, 0)][d]
            sign = 1 if action == 'A' else -1
            x, y = x + sign * dx, y + sign * dy
        assert 0 <= x < 8 and 0 <= y < 8, (start, code, x, y)
        states.append((x, y, d))
    return states


def load(prefix, kind, number):
    stem = f'{prefix}-{kind}'
    file = ROOT / '_content/activitats' / f'{SOURCE_SLUGS.get(stem, stem)}.md'
    source = file.read_text()
    title = re.search(r'^title: "(.*)"$', source, re.M)[1]
    sequence = source.split('## 👣 Desarrollo paso a paso\n', 1)[1].split('\n## ', 1)[0]
    exercises = []
    for block in re.split(r'(?m)^### ', sequence)[1:]:
        heading = block.splitlines()[0]
        fields = dict(re.findall(r'^\*\*([^*]+):\*\* (.+)$', block, re.M))
        fields.update(dict(re.findall(r'^<!-- ([^:]+): (.+) -->$', block, re.M)))
        required = ['Inici', 'Codi', 'Objectiu', 'Consigna', 'Resposta de control', 'Solución docente']
        assert all(k in fields for k in required), file
        fields['heading'] = heading
        solution = fields['Resposta de control']
        simulate(fields['Inici'], solution, fields.get('Funcio'))
        if fields['Codi'] != '-':
            simulate(fields['Inici'], fields['Codi'], fields.get('Funcio'))
        if fields['Objectiu'] != '-':
            assert simulate(fields['Inici'], solution, fields.get('Funcio')) == simulate(fields['Inici'], fields['Objectiu'], fields.get('Funcio')), file
        if number == 4:
            assert expand(fields['Codi']) == expand(solution), file
            if prefix == 'tb' and 'REP' in solution:
                assert re.fullmatch(r'REP[2-4]\[[ARDE ]+\]', solution), file
        if fields.get('Capses'):
            simulate_objects(fields)
        else:
            assert all(0<=x<6 and 0<=y<6 for x,y,_ in simulate(fields['Inici'],solution,fields.get('Funcio'))), file
        if fields.get('Comparacio'):
            assert all(0<=x<6 and 0<=y<6 for x,y,_ in simulate(fields['Comparacio'],solution,fields.get('Funcio'))), file
        exercises.append(fields)
    assert len(exercises) == 3, file
    return {'prefix': prefix, 'slug': f'{prefix}-{kind}', 'number': number, 'title': title, 'exercises': exercises}


def rounded(x,y,w,h,r=6):
    ctx.new_sub_path()
    for cx,cy,a in [(x+w-r,y+r,-math.pi/2),(x+w-r,y+h-r,0),(x+r,y+h-r,math.pi/2),(x+r,y+r,math.pi)]:
        ctx.arc(cx,cy,r,a,a+math.pi/2)
    ctx.close_path()


def outline(x,y,w,h,r=6,dashed=False):
    rounded(x,y,w,h,r)
    ctx.set_source_rgb(1,1,1); ctx.fill_preserve()
    ctx.set_source_rgb(*INK); ctx.set_line_width(.9)
    if dashed: ctx.set_dash([2,2])
    ctx.stroke(); ctx.set_dash([])


def symbol(x,y,size,kind):
    # Read user-editable SVG sources. Never regenerate or overwrite these files.
    name=ICON_NAMES[kind]
    if name not in icon_handles:
        icon_handles[name]=Rsvg.Handle.new_from_file(str(ICONS/f'{name}.svg'))
    rect=Rsvg.Rectangle(); rect.x=x; rect.y=y; rect.width=size; rect.height=size
    ctx.save()
    icon_handles[name].render_document(ctx,rect)
    ctx.restore()


def tile(x,y,size,kind=None,prefix='tb',number=None,blank_number=False):
    # Rounded keys for Tale-Bot, notched physical blocks for Coding Set.
    if prefix=='tb': outline(x,y,size,size,size*.30,dashed=kind is None)
    else:
        ctx.save(); ctx.translate(x,y)
        ctx.move_to(4,0); ctx.line_to(size-4,0); ctx.curve_to(size,0,size,0,size,4)
        ctx.line_to(size,size-4); ctx.curve_to(size,size,size,size,size-4,size)
        ctx.line_to(size*.62,size); ctx.line_to(size*.55,size-3); ctx.line_to(size*.45,size-3)
        ctx.line_to(size*.38,size); ctx.line_to(4,size); ctx.curve_to(0,size,0,size,0,size-4)
        ctx.line_to(0,4); ctx.curve_to(0,0,0,0,4,0); ctx.close_path()
        ctx.set_source_rgb(1,1,1); ctx.fill_preserve(); ctx.set_source_rgb(*INK); ctx.set_line_width(.9)
        if kind is None: ctx.set_dash([2,2])
        ctx.stroke(); ctx.restore()
    if kind: symbol(x,y,size,kind)
    if number or blank_number:
        outline(x,y+size+3,size,size*.48,3,dashed=not number)
        if number:
            font(size*.38,True); width=ctx.text_extents(str(number)).x_advance
            text(x+(size-width)/2,y+size+3+size*.37,str(number),size*.38,True)


def tokens(code,prefix):
    parts=re.findall(r'REP[2-4]|[AR][1-6]?|[DEF]|\[|\]',code)
    result=[]; repeat=None
    for p in parts:
        if p.startswith('REP'):
            if prefix=='tb': repeat=int(p[3:])
            else: result.append(('loop',int(p[3:])))
        elif p==']':
            if prefix=='cs': result.append(('end',None))
        elif p=='[': continue
        else: result.append((p[0],int(p[1:]) if len(p)>1 else None))
    return result,repeat


def sequence(x,y,code,prefix,size=30,gap=7,available=520):
    pieces,repeat=tokens(code,prefix)
    reserved=100 if repeat else 0
    size=min(size,(available-reserved-gap*max(0,len(pieces)-1))/max(1,len(pieces)))
    assert size>=23,(code,size)
    for i,(kind,number) in enumerate(pieces): tile(x+i*(size+gap),y,size,kind,prefix,number)
    if repeat:
        offset=x+len(pieces)*(size+gap)+10
        tile(offset,y,size,'repeat',prefix)
        text(offset+size+8,y+size*.67,f'× {repeat}',14,True)
    return size*1.55 if any(n for _,n in pieces) else size


def blanks(x,y,prefix,count=7,size=34,numbers=False):
    for i in range(count): tile(x+i*(size+8),y,size,None,prefix,blank_number=numbers)


def arrow(x,y,d,size=6,filled=True):
    ctx.save(); ctx.translate(x,y); ctx.rotate(d*math.pi/2)
    ctx.move_to(0,-size); ctx.line_to(size*.85,size*.75); ctx.line_to(0,size*.35); ctx.line_to(-size*.85,size*.75); ctx.close_path()
    ctx.set_source_rgb(1,1,1); ctx.fill_preserve()
    ctx.set_source_rgb(*INK); ctx.set_line_width(1.1)
    if filled: ctx.fill()
    else: ctx.stroke()
    ctx.restore()


def grid(x,y,start,states=None,goal=False,cell=20):
    for n in range(7):
        line(x+n*cell,y,x+n*cell,y+6*cell,grey=.55,width=.5)
        line(x,y+n*cell,x+6*cell,y+n*cell,grey=.55,width=.5)
    for n in range(6):
        text(x+n*cell+7,y-7,chr(65+n),8.5)
        text(x-13,y+(5-n)*cell+13,str(n+1),8.5)
    center=lambda st:(x+(st[0]+.5)*cell,y+(5.5-st[1])*cell)
    initial=simulate(start,'')[0]
    if states:
        ctx.set_dash([2.2,3] if goal else [])
        for a,b in zip(states,states[1:]):
            if a[:2]!=b[:2]: line(*center(a),*center(b),grey=.08,width=1.5)
        ctx.set_dash([])
        arrow(*center(states[-1]),states[-1][2],size=9,filled=False)
    arrow(*center(initial),initial[2],size=5,filled=True)


def mascot(x,y,size):
    global mascot_surface
    if mascot_surface is None:
        mascot_surface=cairo.ImageSurface.create_from_png(str(OUT/'robot-llapis-outline.png'))
    picture=mascot_surface
    ctx.save(); ctx.translate(x,y); ctx.scale(size/picture.get_width(),size/picture.get_height())
    ctx.set_source_surface(picture,0,0); ctx.paint(); ctx.restore()


def header(doc,teacher):
    prefix,number=doc['prefix'],doc['number']
    title=(['¿Qué hará el robot?','¡Dibuja el código!','¡Encuentra el error!','¡Acorta el código!'][number-1] if number <= 4 else doc['title'])
    text(32,30,LABELS[prefix].upper()+'  ·  PROGRAMAMOS EN PAPEL',9,True)
    title_size=min(23, 430 / max(1, len(title)) * 1.55)
    font(title_size,True)
    while ctx.text_extents(title).x_advance > 435:
        title_size-=.5; font(title_size,True)
    text(32,61,title,title_size,True)
    text(32,82,'Soluciones para el profesorado' if teacher else 'Nombre: _______________________   Fecha: __________',10.5,teacher)
    mascot(477,15,82)
    outline(30,102,535,75,9)
    labels=[('A','Adelante'),('R','Atrás'),('D','Giro derecha'),('E','Giro izquierda')]
    for i,(kind,label) in enumerate(labels):
        x=42+i*128
        tile(x,113,29,kind,prefix)
        text(x+35,132,label,9.8,True)
    text(42,162,'Un paso = una casilla. Un giro cambia hacia dónde mira, pero no lo mueve.',9.8)
    if prefix=='cs' and number>4:
        for x,kind,label in [(34,'define','Define'),(163,'F','Llama'),(282,'loop','Inicio'),(423,'end','Fin')]:
            tile(x,184,25,kind,prefix,2 if kind=='loop' else None)
            text(x+32,201,label,9.5,True)
    elif prefix=='cs':
        tile(34,184,23,'A',prefix,3)
        text(66,201,'El número va debajo.',9.2)
        tile(208,184,23,'loop',prefix,2); tile(241,184,23,'end',prefix)
        text(275,201,'Inicio + final: repite las piezas del medio.',9.2)
        text(275,219,'Flecha llena: inicio. Flecha vacía: final.',8.5)
    elif number in (4,6,8):
        tile(34,184,27,'repeat',prefix)
        text(71,202,'Repetir toda la base: 3 veces = 3 ejecuciones.',9.5)
    elif number==7:
        text(34,202,'Caja: cuadrado con cruz. Destino: círculo.',10)
    else:
        arrow(42,198,0,filled=True); arrow(70,198,0,size=8,filled=False)
        text(89,202,'Flecha llena: inicio. Flecha vacía: final.',10.3)

    if prefix=='tb' and number in (5,6):
        text(32,225,'Rotulador siempre bajado: avanzar y retroceder dejan trazo.',9.5,True)
    elif prefix=='tb' and number in (7,8):
        text(32,225,'Solo empuja hacia delante. Un paso mueve la caja una casilla. Círculo = meta.',9.2,True)


def result_line(x,y,ex,teacher=False):
    state=simulate(ex['Inici'],ex['Resposta de control'])[-1]
    text(x,y,'Casilla final: '+(f'{chr(65+state[0])}{state[1]+1}' if teacher else '______'),10.5)
    text(x+155,y,'Rodea:',9.5)
    for d in range(4):
        xx=x+209+d*29
        arrow(xx,y-5,d,size=6,filled=False)
        if teacher and state[2]==d:
            ctx.arc(xx,y-5,11,0,math.pi*2); ctx.set_line_width(1); ctx.stroke()


def regular_exercise(doc,ex,index,teacher):
    top=241+index*181; prefix=doc['prefix']; number=doc['number']
    text(32,top,ex['heading'],11.2,True)
    goal=number in (2,3)
    route=simulate(ex['Inici'],ex['Resposta de control']) if teacher or goal else None
    grid(47,top+28,ex['Inici'],route,goal=goal and not teacher)
    text(33,top+165,'Sigue los puntos' if goal else 'Dibuja el camino',8.5)
    right=191
    if ex['Codi']!='-':
        sequence(right,top+10,ex['Codi'],prefix,31,available=370)
        task_y=top+73
    else:
        text(right,top+24,'Mira el camino de la cuadrícula.',11,True)
        task_y=top+47
    end=paragraph(right,task_y,ex['Consigna'],370,10.5,14)
    assert end<=top+105,(doc['slug'],end-top)
    if number==1:
        result_line(right,top+120,ex,teacher)
        if not teacher:
            text(right,top+153,'Lo explico: __________________________',10)
        else:
            moves=sum(a in 'AR' for a in expand(ex['Resposta de control']))
            turns=len(expand(ex['Resposta de control']))-moves
            text(right,top+151,f'{moves} pasos y {turns} giros. La flecha rodeada es el final.',9.2)
    else:
        text(right,top+105,'Una respuesta posible:' if teacher else 'Dibuja aquí. Puedes dejar casillas vacías.',9.6,True)
        if teacher:
            sequence(right,top+115,ex['Resposta de control'],prefix,31,available=370)
        else:
            blanks(right,top+114,prefix,8,34,numbers=prefix=='cs')



def refactor_exercise(doc,ex,index,teacher):
    top=241+index*181; prefix=doc['prefix']
    text(32,top,ex['heading'],11.2,True)
    text(32,top+24,'Antes:',10,True)
    sequence(99,top+7,ex['Codi'],prefix,31,available=463)
    task_y=top+61
    paragraph(32,task_y,ex['Consigna'],530,10.6,14)
    if 'Proposta' in ex:
        text(32,top+96,'Propuesta:',10,True)
        sequence(99,top+79,ex['Proposta'],prefix,31,available=463)
        text(32,top+137,'¿Hace lo mismo?',11.5,True)
        text(147,top+137,'SÍ',11.5,True)
        text(192,top+137,'NO',11.5,True)
        if teacher:
            ctx.new_path(); ctx.arc(201,top+133,15,0,math.pi*2); ctx.set_line_width(1); ctx.stroke()
            text(32,top+161,'No: la propuesta añade un giro a la derecha al final.',10)
        else: text(32,top+161,'¿Por qué? ___________________________________________________',10)
    else:
        text(32,top+93,'Después:',10,True)
        if teacher:
            sequence(99,top+79,ex['Resposta de control'],prefix,34,available=463)
            before=len(tokens(ex['Codi'],prefix)[0])
            if prefix=='cs':
                pieces,_=tokens(ex['Resposta de control'],prefix)
                after=len(pieces)+sum(n is not None for _,n in pieces)
                text(32,top+160,f'Antes: {before} piezas. Después: {after} piezas, contando los números.',10)
            else:
                pieces,repeat=tokens(ex['Resposta de control'],prefix)
                text(32,top+160,f'Base: {len(pieces)} teclas. Se ejecuta {repeat} veces en total.',10)
        else:
            blanks(99,top+78,prefix,8,34,numbers=prefix=='cs')
            if prefix=='tb':
                tile(99,top+123,26,'repeat',prefix)
                text(136,top+141,'Veces en total: _____',10.5)
            else: text(99,top+157,'Pon números solo donde haga falta.',9.5)



def cells(value):
    return {(ord(c[0])-65, int(c[1:])-1) for c in value.split()}


def simulate_objects(ex):
    states=simulate(ex['Inici'],ex['Resposta de control'],ex.get('Funcio'))
    boxes=cells(ex['Capses'])
    for action,a,b in zip(expand(ex['Resposta de control']),states,states[1:]):
        if a[:2]==b[:2]: continue
        if b[:2] in boxes:
            assert action=='A', ('No se puede arrastrar ni atravesar una caja', ex)
            target=(2*b[0]-a[0],2*b[1]-a[1])
            assert target not in boxes and all(0<=v<8 for v in target), ex
            boxes.remove(b[:2]); boxes.add(target)
    assert boxes==cells(ex['Metes']), (ex, boxes)
    return states,boxes


def extra_grid(x,y,ex,teacher=False,cell=17):
    n=8 if ex.get('Capses') else 6
    for k in range(n+1):
        line(x+k*cell,y,x+k*cell,y+n*cell)
        line(x,y+k*cell,x+n*cell,y+k*cell)
    for k in range(n):
        text(x+k*cell+cell*.3,y-6,chr(65+k),7)
        text(x-12,y+(n-k-.35)*cell,str(k+1),7)
    center=lambda st:(x+(st[0]+.5)*cell,y+(n-.5-st[1])*cell)
    states=simulate(ex['Inici'],ex['Resposta de control'],ex.get('Funcio'))
    if ex.get('Capses'):
        for pos in cells(ex['Metes']):
            cx,cy=center(pos); ctx.set_source_rgb(*INK); ctx.set_line_width(1)
            ctx.new_path(); ctx.arc(cx,cy,cell*.35,0,2*math.pi); ctx.stroke()
        boxes=simulate_objects(ex)[1] if teacher else cells(ex['Capses'])
        for pos in boxes:
            cx,cy=center(pos); box(cx-cell*.3,cy-cell*.3,cell*.6,cell*.6,fill=(1,1,1))
            line(cx-cell*.3,cy-cell*.3,cx+cell*.3,cy+cell*.3,grey=.15)
            line(cx-cell*.3,cy+cell*.3,cx+cell*.3,cy-cell*.3,grey=.15)
    elif teacher or ex['Mode']=='patro' or (ex['Mode']=='coding' and ex['Codi']=='-'):
        for a,b in zip(states,states[1:]):
            if a[:2]!=b[:2]:
                ctx.set_dash([] if teacher else [2,2])
                line(*center(a),*center(b),grey=.1,width=1.5)
                ctx.set_dash([])
    if teacher or ex['Mode']!='costat':
        arrow(*center(states[0]),states[0][2],size=cell*.25)
    if teacher or (ex['Mode']=='coding' and ex['Codi']=='-'):
        arrow(*center(states[-1]),states[-1][2],size=cell*.4,filled=False)


def compact_sequence(x,y,code,available=365,size=28):
    pieces,repeat=tokens(code,'tb')
    # Long sequences on two lines; the repeat applies to both rows together.
    if len(pieces)>9:
        split=7
        for row,start in enumerate(range(0,len(pieces),split)):
            for j,(kind,num) in enumerate(pieces[start:start+split]):
                tile(x+j*(size+5),y+row*(size+5),size,kind,'tb',num)
        return
    sequence(x,y,code,'tb',size,5,available)


def extra_exercise(doc,ex,index,teacher):
    top=241+index*181
    text(32,top,ex['heading'],11.2,True)
    extra_grid(47,top+24,ex,teacher,cell=16.5 if ex.get('Capses') else 20)
    right=202
    paragraph(right,top+18,ex['Consigna'],358,9.7,12)
    mode=ex['Mode']
    if mode=='dibuix':
        if ex.get('Comparacio'):
            other=dict(ex, Inici=ex['Comparacio'])
            extra_grid(right+12,top+63,other,teacher,cell=14)
            compact_sequence(right+123,top+62,ex['Codi'],available=235,size=25)
            paragraph(right+123,top+112,'Segundo inicio: D2, mirando al oeste.',230,9,12)
            paragraph(right+123,top+145,'Se conserva la forma.' if teacher else '¿Qué se conserva? ___________',230,9,12)
        else:
            compact_sequence(right,top+61,ex['Codi'])
            paragraph(right,top+117,ex['Solución docente'] if teacher else 'El rotulador no se levanta. Dibuja también los tramos que repasa.',358,9.3,12)
    elif mode=='costat':
        if index==2:
            paragraph(right,top+65,'Datos: lugar de la caja / meta / paso libre / nombre / dibujo de las caras.',355,9.5,12)
        if teacher:
            paragraph(right,top+103,ex['Solución docente'],358,9.2,12)
        else:
            text(right,top+111,'Posición: _____   Mira hacia: __________',9.5)
            text(right,top+139,'¿Por qué? ___________________________',9.5)
    else:
        repeated='REP' in ex['Resposta de control']
        if teacher:
            compact_sequence(right,top+62,ex['Resposta de control'])
        else:
            blanks(right,top+62,'tb',8,size=30)
        if repeated:
            tile(right,top+102,25,'repeat','tb')
            repeat=tokens(ex['Resposta de control'],'tb')[1]
            text(right+34,top+120,'Ejecuciones totales: '+(str(repeat) if teacher else '_____'),10,True)
        if mode=='patro':
            paragraph(right,top+147,'Marca en el dibujo la parte que se repite.' if not teacher else ex['Solución docente'],358,9,11)
        elif index==0:
            text(right,top+123,'Marca: aproximación | empujón.',9.5)
            paragraph(right,top+143,'Aproximación: avanzar y girar; empujón: dos avances.' if teacher else 'Separa las partes en las teclas que has dibujado.',358,9,11)
        else:
            paragraph(right,top+146,('Cajas en las metas; robot '+('D1' if index==1 else 'G1')+', mirando al norte.') if teacher else 'Marca las cajas y el robot al final. También cambia de columna en la última ejecución.',358,9,11)


def coding_sequence(x,y,code,size=28,available=358):
    return sequence(x,y,code,'cs',size,5,available)


def definition_row(x,y,ex,show):
    tile(x,y,27,'define','cs')
    if show:
        coding_sequence(x+34,y,ex['Funcio'],available=320)
    else:
        blanks(x+34,y,'cs',6,size=27,numbers=True)


def coding_exercise(doc,ex,index,teacher):
    top=241+index*181
    text(32,top,ex['heading'],11,True)
    paragraph(202,top+16,ex['Consigna'],358,9.5,12)
    extra_grid(47,top+28,ex,teacher,cell=19)
    if doc['number']==7:
        other=dict(ex,Inici=ex['Comparacio'])
        extra_grid(212,top+62,other,teacher,cell=14)
        text(212,top+49,'Otro inicio: '+ex['Comparacio'],8.5)
        text(330,top+56,'Definición dada:',9,True)
        tile(330,top+65,26,'define','cs')
        coding_sequence(361,top+65,ex['Funcio'],size=26,available=199)
        text(330,top+115,'Principal:',9,True); tile(395,top+97,26,'F','cs')
        paragraph(330,top+137,ex['Solución docente'] if teacher else 'Dibuja los dos caminos y explica qué se conserva.',228,8.6,10)
        return
    text(202,top+56,'Fila principal:',9,True)
    if teacher: coding_sequence(202,top+64,ex['Principal'],size=27)
    else: blanks(202,top+64,'cs',9,size=27,numbers=True)
    if ex['Funcio']!='-':
        text(202,top+123,'Fila inferior: definición',9,True)
        supplied=doc['number']==8 and index<2
        definition_row(202,top+131,ex,teacher or supplied)
    else:
        paragraph(202,top+126,ex['Solución docente'] if teacher else 'Número debajo del inicio. Marca qué piezas quedan fuera del bucle.',358,9.2,12)


def draw_page(doc,teacher=False):
    header(doc,teacher)
    for i,ex in enumerate(doc['exercises']):
        if doc['prefix']=='cs' and doc['number']>4: coding_exercise(doc,ex,i,teacher)
        elif doc['number']>4: extra_exercise(doc,ex,i,teacher)
        elif doc['number']==4: refactor_exercise(doc,ex,i,teacher)
        else: regular_exercise(doc,ex,i,teacher)
    line(32,793,563,793)
    text(32,811,'¡Ya lo he revisado!',9.5,True)
    outline(145,800,13,13,2)
    text(177,811,'Puedes colorear el robot al terminar.',9)
    text(32,828,'Robótica para docentes  ·  '+('Solucionario' if teacher else 'Lápiz, goma e imaginación')+f'  ·  Ficha {doc["number"]}/{8}',8)
    ctx.show_page()


def pdf(file,docs,teacher=False):
    global ctx
    surface=cairo.PDFSurface(str(file),W,H)
    surface.set_metadata(cairo.PDF_METADATA_TITLE,f'{LABELS[docs[0]["prefix"]]} - {"Solucions" if teacher else "Fitxes amb pictogrames"}')
    surface.set_metadata(cairo.PDF_METADATA_AUTHOR,'Robótica para docentes')
    ctx=cairo.Context(surface)
    for doc in docs: draw_page(doc,teacher)
    surface.finish()


def diagrams(doc):
    global ctx
    for i,ex in enumerate(doc['exercises'],1):
        stem=OUT/f'{doc["slug"]}-ex{i}'
        for field,suffix in [('Codi','codi'),('Resposta de control','resposta'),('Proposta','proposta')]:
            if ex.get(field,'-')=='-': continue
            pieces,repeat=tokens(ex[field],doc['prefix'])
            width=len(pieces)*49+20+(115 if repeat else 0)
            surface=cairo.SVGSurface(str(stem)+f'-{suffix}.svg',width,90)
            ctx=cairo.Context(surface)
            sequence(10,10,ex[field],doc['prefix'],42,gap=7,available=width-20)
            surface.finish()
        if ex.get('Funcio','-')!='-':
            width=(len(tokens(ex['Funcio'],'cs')[0])+1)*49+20
            surface=cairo.SVGSurface(str(stem)+'-funcio.svg',width,90); ctx=cairo.Context(surface)
            tile(10,10,42,'define','cs'); sequence(59,10,ex['Funcio'],'cs',42,available=width-69)
            surface.finish()
        if doc['number']>4:
            surface=cairo.SVGSurface(str(stem)+'-graella.svg',360 if ex.get('Comparacio') else 210,210)
            ctx=cairo.Context(surface)
            extra_grid(25,24,ex,False,cell=21)
            if ex.get('Comparacio'):
                other=dict(ex, Inici=ex['Comparacio']); extra_grid(205,24,other,False,cell=21)
            surface.finish()
        elif doc['number']<4:
            surface=cairo.SVGSurface(str(stem)+'-graella.svg',170,165)
            ctx=cairo.Context(surface)
            goal=doc['number'] in (2,3)
            route=simulate(ex['Inici'],ex['Resposta de control']) if goal else None
            grid(25,24,ex['Inici'],route,goal=goal,cell=21)
            surface.finish()


def main():
    OUT.mkdir(parents=True,exist_ok=True)
    for prefix in LABELS:
        kinds=KINDS+(TB_EXTRA if prefix=='tb' else CS_EXTRA)
        docs=[load(prefix,kind,i) for i,kind in enumerate(kinds,1)]
        for doc in docs:
            pdf(OUT/f'{doc["slug"]}.pdf',[doc])
            diagrams(doc)
        pdf(OUT/f'{prefix}-fitxes-paper.pdf',docs)
        pdf(OUT/f'{prefix}-solucions-paper.pdf',docs,True)
    print('20 PDF A4; 48 ejercicios comprobados con funciones, bucles y empujones. Iconos leídos de los SVG editables.')


if __name__=='__main__':
    main()
