#!/usr/bin/env python3
"""Generate A4 pupil worksheets and separate keys from the eight robot Markdown activities.
Requires Python 3 and pycairo (python3-cairo). No robot, browser or network required.
The exercise statements and answers live only in _content/activitats/*.md.
"""
from pathlib import Path
import re
import math
import cairo

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '_assets/activitats/kits'
W, H = 595.2756, 841.8898
INK, GREY, PALE = (0.06, 0.09, 0.13), (0.33, 0.36, 0.40), (0.95, 0.96, 0.97)
KINDS = ['prediu-el-resultat', 'escriu-el-codi', 'depura-el-codi', 'refactoritza-el-codi']
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


def expand(code):
    """Only the four motion commands, A/R numeric parameters and finite loops."""
    pattern = re.compile(r'REP([2-4])\[([^\[\]]+)\]')
    while 'REP' in code:
        changed = pattern.sub(lambda m: ' '.join([m[2]] * int(m[1])), code)
        if changed == code:
            raise ValueError(f'Bucle no vàlid: {code}')
        code = changed
    actions = []
    for token in code.split():
        match = re.fullmatch(r'([AR])([1-6])?', token)
        if match:
            actions.extend([match[1]] * int(match[2] or '1'))
        elif token in ('D', 'E'):
            actions.append(token)
        else:
            raise ValueError(f'Ordre no vàlida: {token}')
    return actions


def simulate(start, code):
    cell, heading = start.split()
    x, y, d = ord(cell[0]) - 65, int(cell[1]) - 1, 'NESO'.index(heading)
    states = [(x, y, d)]
    for action in expand(code):
        if action == 'D':
            d = (d + 1) % 4
        elif action == 'E':
            d = (d - 1) % 4
        else:
            dx, dy = [(0, 1), (1, 0), (0, -1), (-1, 0)][d]
            sign = 1 if action == 'A' else -1
            x, y = x + sign * dx, y + sign * dy
        assert 0 <= x < 6 and 0 <= y < 6, (start, code, x, y)
        states.append((x, y, d))
    return states


def load(prefix, kind, number):
    file = ROOT / '_content/activitats' / f'{prefix}-{kind}.md'
    source = file.read_text()
    title = re.search(r'^title: "(.*)"$', source, re.M)[1]
    sequence = source.split('## 👣 Desenvolupament pas a pas\n', 1)[1].split('\n## ', 1)[0]
    exercises = []
    for block in re.split(r'(?m)^### ', sequence)[1:]:
        heading = block.splitlines()[0]
        fields = dict(re.findall(r'^\*\*([^*]+):\*\* (.+)$', block, re.M))
        fields.update(dict(re.findall(r'^<!-- ([^:]+): (.+) -->$', block, re.M)))
        required = ['Inici', 'Codi', 'Objectiu', 'Consigna', 'Resposta de control', 'Solució docent']
        assert all(k in fields for k in required), file
        fields['heading'] = heading
        solution = fields['Resposta de control']
        simulate(fields['Inici'], solution)
        if fields['Codi'] != '-':
            simulate(fields['Inici'], fields['Codi'])
        if fields['Objectiu'] != '-':
            assert simulate(fields['Inici'], solution) == simulate(fields['Inici'], fields['Objectiu']), file
        if number == 4:
            assert expand(fields['Codi']) == expand(solution), file
            if prefix == 'tb' and 'REP' in solution:
                assert re.fullmatch(r'REP[2-4]\[[ARDE ]+\]', solution), file
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
    ctx.save(); ctx.translate(x,y); ctx.scale(size/64,size/64)
    ctx.set_source_rgb(*INK); ctx.set_line_width(4); ctx.set_line_cap(cairo.LINE_CAP_ROUND); ctx.set_line_join(cairo.LINE_JOIN_ROUND)
    if kind in ['A','R']:
        if kind=='R': ctx.translate(64,64); ctx.rotate(math.pi)
        ctx.move_to(32,47); ctx.line_to(32,17); ctx.line_to(21,28)
        ctx.move_to(32,17); ctx.line_to(43,28); ctx.stroke()
    elif kind in ['D','E']:
        if kind=='E': ctx.translate(64,0); ctx.scale(-1,1)
        ctx.move_to(27,21); ctx.line_to(47,21); ctx.line_to(37,11)
        ctx.move_to(47,21); ctx.line_to(37,31); ctx.stroke()
        for a,b in [(18,22),(15,31),(21,40),(29,47)]:
            ctx.arc(a,b,2,0,2*math.pi); ctx.fill()
    elif kind in ['loop','end','repeat']:
        ctx.arc(32,27 if kind != 'repeat' else 30,13 if kind != 'repeat' else 16,math.radians(200),math.radians(510)); ctx.stroke()
        ctx.move_to(18,21); ctx.line_to(17,33); ctx.line_to(28,29); ctx.stroke()
        if kind!='repeat':
            ctx.set_font_size(10); ctx.select_font_face('DejaVu Sans',cairo.FONT_SLANT_NORMAL,cairo.FONT_WEIGHT_BOLD)
            label='inici' if kind=='loop' else 'fi'
            ext=ctx.text_extents(label)
            ctx.move_to(32-ext.x_advance/2,56); ctx.show_text(label)
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
    parts=re.findall(r'REP[2-4]|[AR][1-6]?|[DE]|\[|\]',code)
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
    title=['Què farà el robot?','Dibuixa el codi!','Troba l’error!','Fes el codi més curt!'][number-1]
    text(32,30,LABELS[prefix].upper()+'  ·  PROGRAMEM EN PAPER',9,True)
    text(32,61,title,23,True)
    text(32,82,'Solucions per al professorat' if teacher else 'Nom: _______________________   Data: __________',10.5,teacher)
    mascot(477,15,82)
    outline(30,102,535,75,9)
    labels=[('A','Endavant'),('R','Enrere'),('D','Gir dreta'),('E','Gir esquerra')]
    for i,(kind,label) in enumerate(labels):
        x=42+i*128
        tile(x,113,29,kind,prefix)
        text(x+35,132,label,9.8,True)
    text(42,162,'Un pas = una casella. Un gir canvia on mira, però no el mou.',9.8)
    if prefix=='cs':
        tile(34,184,23,'A',prefix,3)
        text(66,201,'El nombre va davall.',9.2)
        tile(208,184,23,'loop',prefix,2); tile(241,184,23,'end',prefix)
        text(275,201,'Inici + final: repeteix les peces del mig.',9.2)
        text(275,219,'Fletxa plena: inici. Fletxa buida: final.',8.5)
    elif number==4:
        tile(34,184,27,'repeat',prefix)
        text(71,202,'Repetir: fes TOTES les tecles de nou.',10)
    else:
        arrow(42,198,0,filled=True); arrow(70,198,0,size=8,filled=False)
        text(89,202,'Fletxa plena: inici. Fletxa buida: final.',10.3)


def result_line(x,y,ex,teacher=False):
    state=simulate(ex['Inici'],ex['Resposta de control'])[-1]
    text(x,y,'Casella final: '+(f'{chr(65+state[0])}{state[1]+1}' if teacher else '______'),10.5)
    text(x+155,y,'Encercla:',9.5)
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
    text(33,top+165,'Segueix els punts' if goal else 'Dibuixa el camí',8.5)
    right=191
    if ex['Codi']!='-':
        sequence(right,top+10,ex['Codi'],prefix,31,available=370)
        task_y=top+73
    else:
        text(right,top+24,'Mira el camí de la quadrícula.',11,True)
        task_y=top+47
    end=paragraph(right,task_y,ex['Consigna'],370,10.5,14)
    assert end<=top+105,(doc['slug'],end-top)
    if number==1:
        result_line(right,top+120,ex,teacher)
        if not teacher:
            text(right,top+153,'Ho explique: __________________________',10)
        else:
            moves=sum(a in 'AR' for a in expand(ex['Resposta de control']))
            turns=len(expand(ex['Resposta de control']))-moves
            text(right,top+151,f'{moves} passos i {turns} girs. La fletxa encerclada és el final.',9.2)
    else:
        text(right,top+105,'Una resposta possible:' if teacher else 'Dibuixa ací. Pots deixar caselles buides.',9.6,True)
        if teacher:
            sequence(right,top+115,ex['Resposta de control'],prefix,31,available=370)
        else:
            blanks(right,top+114,prefix,8,34,numbers=prefix=='cs')



def refactor_exercise(doc,ex,index,teacher):
    top=241+index*181; prefix=doc['prefix']
    text(32,top,ex['heading'],11.2,True)
    text(32,top+24,'Abans:',10,True)
    sequence(99,top+7,ex['Codi'],prefix,31,available=463)
    task_y=top+61
    paragraph(32,task_y,ex['Consigna'],530,10.6,14)
    if 'Proposta' in ex:
        text(32,top+96,'Proposta:',10,True)
        sequence(99,top+79,ex['Proposta'],prefix,31,available=463)
        text(32,top+137,'Fa el mateix?',11.5,True)
        text(147,top+137,'SÍ',11.5,True)
        text(192,top+137,'NO',11.5,True)
        if teacher:
            ctx.new_path(); ctx.arc(201,top+133,15,0,math.pi*2); ctx.set_line_width(1); ctx.stroke()
            text(32,top+161,'No: la proposta afegeix un gir a la dreta al final.',10)
        else: text(32,top+161,'Per què? ___________________________________________________',10)
    else:
        text(32,top+93,'Després:',10,True)
        if teacher:
            sequence(99,top+79,ex['Resposta de control'],prefix,34,available=463)
            before=len(tokens(ex['Codi'],prefix)[0])
            if prefix=='cs':
                pieces,_=tokens(ex['Resposta de control'],prefix)
                after=len(pieces)+sum(n is not None for _,n in pieces)
                text(32,top+160,f'Abans: {before} peces. Després: {after} peces, comptant els nombres.',10)
            else:
                pieces,repeat=tokens(ex['Resposta de control'],prefix)
                text(32,top+160,f'Base: {len(pieces)} tecles. S’executa {repeat} vegades en total.',10)
        else:
            blanks(99,top+78,prefix,8,34,numbers=prefix=='cs')
            if prefix=='tb':
                tile(99,top+123,26,'repeat',prefix)
                text(136,top+141,'Vegades en total: _____',10.5)
            else: text(99,top+157,'Posa nombres només on calga.',9.5)



def draw_page(doc,teacher=False):
    header(doc,teacher)
    for i,ex in enumerate(doc['exercises']):
        if doc['number']==4: refactor_exercise(doc,ex,i,teacher)
        else: regular_exercise(doc,ex,i,teacher)
    line(32,793,563,793)
    text(32,811,'Ja ho he revisat!',9.5,True)
    outline(145,800,13,13,2)
    text(177,811,'Pots colorejar el robot quan acabes.  ·  A4 al 100%',9)
    text(32,828,'Robòtica per a docents  ·  '+('Solucionari' if teacher else 'Llapis, goma i imaginació')+f'  ·  Fitxa {doc["number"]}/4',8)
    ctx.show_page()


def pdf(file,docs,teacher=False):
    global ctx
    surface=cairo.PDFSurface(str(file),W,H)
    surface.set_metadata(cairo.PDF_METADATA_TITLE,f'{LABELS[docs[0]["prefix"]]} - {"Solucions" if teacher else "Fitxes amb pictogrames"}')
    surface.set_metadata(cairo.PDF_METADATA_AUTHOR,'Robòtica per a docents')
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
        if doc['number']<4:
            surface=cairo.SVGSurface(str(stem)+'-graella.svg',170,165)
            ctx=cairo.Context(surface)
            goal=doc['number'] in (2,3)
            route=simulate(ex['Inici'],ex['Resposta de control']) if goal else None
            grid(25,24,ex['Inici'],route,goal=goal,cell=21)
            surface.finish()


def main():
    OUT.mkdir(parents=True,exist_ok=True)
    for prefix in LABELS:
        docs=[load(prefix,kind,i) for i,kind in enumerate(KINDS,1)]
        for doc in docs:
            pdf(OUT/f'{doc["slug"]}.pdf',[doc])
            diagrams(doc)
        pdf(OUT/f'{prefix}-fitxes-paper.pdf',docs)
        pdf(OUT/f'{prefix}-solucions-paper.pdf',docs,True)
    print('12 PDF A4 amb pictogrames i esquemes web; 24 exercicis comprovats.')


if __name__=='__main__':
    main()
