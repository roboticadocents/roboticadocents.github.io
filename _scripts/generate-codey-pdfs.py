#!/usr/bin/env python3
"""Fitxes i solucionari amb les peces natives. Font: sim/codey-activities.json.
Dependencies: reportlab, pypdf, cairosvg. Renderitza abans els SVG amb render-codey-activity-blocks.js.
"""
from pathlib import Path
from io import BytesIO
from html import escape
import base64, json, re, shutil, sys
from urllib.parse import unquote_to_bytes
from xml.etree import ElementTree as ET
from PIL import Image as PillowImage, ImageOps
import cairosvg
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Image, Flowable, KeepTogether, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader, PdfWriter
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'output/pdf';OUT.mkdir(parents=True,exist_ok=True)
WEB=ROOT/'_assets/activitats/kits';WEB.mkdir(parents=True,exist_ok=True)
ASSETS=ROOT/'_assets/activitats/codey'
activities=json.loads((ROOT/'sim/codey-activities.json').read_text())['activities']
fonts=ROOT/'_assets/sessions/marp/fonts'
for name,file in [('Jakarta','PlusJakartaSans.ttf'),('JakartaBold','PlusJakartaSans-Bold.ttf'),('Sora','Sora-Bold.ttf')]:pdfmetrics.registerFont(TTFont(name,str(fonts/file)))
pdfmetrics.registerFontFamily('Jakarta',normal='Jakarta',bold='JakartaBold')
styles={
 'title':ParagraphStyle('title',fontName='Sora',fontSize=19,leading=24,textColor=HexColor('#111111'),spaceAfter=8),
 'h':ParagraphStyle('h',fontName='Sora',fontSize=11,leading=15,textColor=HexColor('#111111'),spaceBefore=9,spaceAfter=5),
 'body':ParagraphStyle('body',fontName='Jakarta',fontSize=9.4,leading=14,spaceAfter=6,textColor=HexColor('#111111')),
 'small':ParagraphStyle('small',fontName='Jakarta',fontSize=8,leading=11,spaceAfter=5,textColor=HexColor('#444444'))}
def para(value,style='body'):return Paragraph(escape(value),styles[style])
def labelled(label,value):return Paragraph('<b>'+escape(label)+'</b> '+escape(value),styles['body'])
class Response(Flowable):
 def __init__(self,draw_program=False,width=527,compact=False):
  super().__init__()
  self.width=width
  self.draw_program=draw_program
  self.compact=compact
  self.pitch=19 if compact else 22
  self.columns=2 if compact and width>=500 else 1
  self.height=29+(4//self.columns-1)*self.pitch+(100 if draw_program else 0)
 def draw(self):
  c=self.canv;c.setStrokeColor(HexColor('#b0b0b0'));c.setFillColor(HexColor('#444444'));c.setFont('Jakarta',8)
  labels=['Predicció / proposta','Resultat i entorn (paper / simulador / robot)','Dificultat i canvi provat','Dubte pendent']
  if self.compact:
   labels[1]='Resultat i entorn'
  if self.draw_program:
   c.drawString(0,self.height-12,'Dibuixa el programa' if self.compact else 'Dibuixa ací el programa o les peces que afegeixes');c.rect(0,self.height-97 if self.compact else 110,self.width,80)
  for i,label in enumerate(labels):
   row, column = divmod(i, self.columns)
   y = 19+(4//self.columns-1-row)*self.pitch
   start = column*self.width/self.columns
   end = (column+1)*self.width/self.columns-(12 if column+1<self.columns else 0)
   c.drawString(start,y,label)
   line_y = y-(10 if self.compact else 13)
   c.line(start,line_y,end,line_y)
def darken_print_icon(element):
    href = '{http://www.w3.org/1999/xlink}href'
    source = element.get(href, '')
    header, _, payload = source.partition(',')
    if not header.startswith('data:image/svg+xml'):
        return
    # La graella LED necessita els píxels blancs sobre el fons fosc.
    if element.get('width', '').removesuffix('px') not in {'12', '24', '28'}:
        return
    raw = base64.b64decode(payload) if ';base64' in header else unquote_to_bytes(payload)
    dark = re.sub(
        rb'(?i)((?:fill|stroke)\s*(?:=\s*["\']|:\s*))(?:#ffffff|#fff|white)\b',
        rb'\g<1>#222222',
        raw,
    )
    element.set(href, 'data:image/svg+xml;base64,' + base64.b64encode(dark).decode('ascii'))


def print_blocks(raw):
    """Reprodueix els contorns dels blocs amb tinta baixa i posa sigles a les mostres RGB."""
    root = ET.fromstring(raw)
    ns = '{http://www.w3.org/2000/svg}'
    swatches = {'#ef4444': 'RO', '#22c55e': 'VE', '#3b82f6': 'BL'}
    for parent in root.iter():
        for element in list(parent):
            classes = element.get('class', '').split()
            if 'blocklyBlockBackground' in classes:
                colour = element.get('fill', '').lower()
                shade = '#fff' if colour == '#ffffff' or colour in swatches else '#f2f2f2'
                element.set('style', f'fill:{shade};stroke:#555;stroke-width:1.3')
                if colour in swatches:
                    label = ET.SubElement(parent, ns+'text', {
                        'x': '20', 'y': '21', 'text-anchor': 'middle',
                        'font-family': 'sans-serif', 'font-weight': 'bold', 'font-size': '14',
                        'fill': '#111',
                    })
                    label.text = swatches[colour]
            elif element.tag == ns+'image':
                darken_print_icon(element)
            elif element.tag == ns+'text':
                style = element.get('style', '')
                style = re.sub(r'fill:[^;]*', 'fill:#111', style)
                # Scratch Blocks calcula els encaixos amb les mètriques d’Helvetica/Arial.
                # Alguns SVG antics guarden DejaVu Sans, que eixampla el text en rasteritzar.
                style = re.sub(r'font-family:[^;]*;?', '', style)
                element.set('style', style.rstrip(';') + ';font-family:Liberation Sans,Arial,sans-serif')
    return ET.tostring(root)


def diagram(ex,solution=False,maxheight=190,monochrome=False):
 file=ASSETS/f"{ex['id']}-{'solucio' if solution else 'inici'}.svg"
 raw=file.read_bytes();view=re.search(rb'viewBox="([^\"]+)"',raw).group(1).split();w,h=float(view[2]),float(view[3]);scale=min(.75,527/w,maxheight/h)
 png=cairosvg.svg2png(bytestring=print_blocks(raw) if monochrome else raw,scale=2)
 if monochrome:
  grayscale = BytesIO()
  ImageOps.grayscale(PillowImage.open(BytesIO(png))).save(grayscale, format='PNG')
  png = grayscale.getvalue()
 image=Image(BytesIO(png),width=w*scale,height=h*scale);image.hAlign='LEFT';return image
def footer(label, page_offset=0):
 def draw(c,doc):
  c.saveState();c.setStrokeColor(HexColor('#b0b0b0'));c.line(34,31,A4[0]-34,31);c.setFont('Jakarta',8);c.setFillColor(HexColor('#444444'));c.drawString(34,19,'Robòtica per a docents · Codey Rocky');c.drawRightString(A4[0]-34,19,f'{label} · {doc.page+page_offset}');c.restoreState()
 return draw
def document(file,story,label,page_offset=0):
 doc=SimpleDocTemplate(str(file) if isinstance(file, Path) else file,pagesize=A4,rightMargin=34,leftMargin=34,topMargin=30,bottomMargin=43,title=label,author='Robòtica per a docents');doc.build(story,onFirstPage=footer(label,page_offset),onLaterPages=footer(label,page_offset))
def exercise(ex,i):
 return [para(f'{i}. {ex["title"]}','h'),para(ex['prompt']),diagram(ex),Spacer(1,5),Response(ex['id'].startswith(('cr-completa-el-programa','cr-respon-als-sensors')))]
if '--compact-only' not in sys.argv:
    files=[]
    for index,a in enumerate(activities,1):
     story=[para(f'ACTIVITAT {index} · PAPER / SIMULADOR / ROBOT','small'),para(a['title'],'title'),para(a['objective']),para('Nom: ______________________________  Data: ______________','small'),
      labelled('En paper.', 'Prediu o completa les peces abans de comprovar. Les lectures donades són les dades de la prova.'),
      labelled('Al simulador.', 'Obri Codey Rocky, desplega Activitats i tria aquesta fitxa i l’exercici. Carrega el programa inicial, prova’l i canvia una sola dada.'),
      labelled('Amb el robot.', 'Connecta Codey a mBlock i usa Càrrega. '+a['robot']),
      para('Els valors reals poden variar. Mesura i justifica els ajustos. Per als moviments, potència i temps no equivalen a caselles o angles exactes.','small')]
     story+=exercise(a['exercises'][0],1)+[PageBreak(),para(a['title'],'title'),para('Continua amb els mateixos passos: predir, comprovar, explicar i revisar.','small')]
     for i,ex in enumerate(a['exercises'][1:],2):story+=exercise(ex,i)
     story += [Spacer(1,2),para('Tancament: explica una solució, un error revisat i un canvi que provaries en un altre entorn.','small')]
     file=OUT/f'{a["slug"]}.pdf';document(file,story,f'Fitxa {index}');assert len(PdfReader(file).pages)==2,f'{file}: ha de tindre dues pàgines';files.append(file);shutil.copyfile(file,WEB/file.name)
    writer=PdfWriter()
    for file in files:writer.append(file)
    combined=OUT/'cr-fitxes-tres-entorns.pdf'
    with combined.open('wb') as f:writer.write(f)
    shutil.copyfile(combined,WEB/combined.name)
    story=[]
    for index,a in enumerate(activities,1):
     if index>1:story.append(PageBreak())
     story += [para(f'SOLUCIONARI DOCENT · ACTIVITAT {index}','small'),para(a['title'],'title'),para('Les peces mostren una solució possible. Accepteu alternatives que complisquen la consigna i estiguen justificades.','small')]
     for i,ex in enumerate(a['exercises'],1):
      story += [para(f'{i}. {ex["title"]}','h'),diagram(ex,True,145),para(ex['answer'])]
     story += [Spacer(1,7),para('Criteri compartit: 1 punt pel resultat o proposta vàlida i 1 punt per la traça o justificació, en cada exercici. Al robot valoreu les lectures i els ajustos; no una coincidència física exacta amb el model.','small')]
    key=OUT/'cr-solucions-tres-entorns.pdf';document(key,story,'Solucionari');assert len(PdfReader(key).pages)==len(activities),'El solucionari ha de tindre una pàgina per activitat';shutil.copyfile(key,WEB/key.name)
    print(f'{len(activities)} fitxes de 2 pàgines, recull de {len(activities)*2} pàgines i solucionari de {len(activities)} pàgines generats.')

def compact_workbook(reference):
    """Maqueta els exercicis en flux continu i indexa la pàgina de cadascun."""
    intro_pages = len(PdfReader(reference).pages) + 1
    exercise_heading = ParagraphStyle('compact-exercise', parent=styles['h'], spaceBefore=5, spaceAfter=3)
    prompt_style = ParagraphStyle('compact-prompt', parent=styles['body'], spaceAfter=3)

    class ExerciseTitle(Paragraph):
        def __init__(self, activity, number, title):
            super().__init__(escape(f'Exercici {number} · {title}'), exercise_heading)
            self.key = (activity, number)

    class Workbook(SimpleDocTemplate):
        def afterFlowable(self, item):
            if isinstance(item, ExerciseTitle):
                exercise_pages[item.key] = self.page + intro_pages

    exercise_pages = {}
    # Reservem més alçada per al bucle llarg del seguidor de línia.
    limits = {4: (155, 155, 155), 6: (155, 155, 155),
              8: (145, 180, 145), 9: (150, 150, 150)}
    exercises = []
    for number, activity in enumerate(activities, 1):
        if number > 1:
            exercises.append(PageBreak())
        exercises.append(para(f'Fitxa {number} · {activity["title"]}', 'title'))
        for position, ex in enumerate(activity['exercises'], 1):
            max_height = limits.get(number, (190, 190, 190))[position-1]
            image = diagram(ex, maxheight=max_height, monochrome=True)
            draw_program = ex['id'].startswith(('cr-completa-el-programa', 'cr-respon-als-sensors'))
            if image.drawWidth <= (240 if draw_program else 345):
                # Quan el programa és estret, aprofitem l’espai que deixa a la dreta.
                image_column = max(245, image.drawWidth + 10)
                response_column = 527 - image_column
                response = Response(draw_program, width=response_column, compact=True)
                content = Table([[image, response]], colWidths=[image_column, response_column], hAlign='LEFT')
                content.setStyle(TableStyle([
                    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                    ('LEFTPADDING', (0, 0), (-1, -1), 0),
                    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                ]))
                body = [content]
            else:
                body = [image, Spacer(1, 3), Response(draw_program, compact=True)]
            exercises.append(KeepTogether([
                ExerciseTitle(number, position, ex['title']),
                Paragraph(escape(ex['prompt']), prompt_style), *body, Spacer(1, 3),
            ]))


    pages = BytesIO()
    label = 'Quadern compacte · Codey Rocky'
    def exercise_footer(c, doc):
        c.saveState()
        c.setFont('Jakarta', 8)
        c.setFillColor(HexColor('#444444'))
        c.drawString(34, 19, label)
        c.drawRightString(A4[0]-34, 19, str(doc.page+intro_pages))
        c.restoreState()
    Workbook(pages, pagesize=A4, rightMargin=34, leftMargin=34,
             topMargin=23, bottomMargin=31).build(
        exercises, onFirstPage=exercise_footer, onLaterPages=exercise_footer)

    intro = [
        para('ITINERARI 4 · SESSIÓ 2 · FITXES EN BLANC I NEGRE', 'small'),
        para('Codey Rocky · Dels botons als sensors', 'title'),
        para('Nom ____________________________________ Data _____________'),
        para('Del taller al treball autònom', 'h'),
        para('Carrega una cara al botó A i prova-la sense USB. Compara l’avanç temporitzat amb l’avanç continu. Fes que una lectura determine quan s’atura Rocky i adapta el repte al teu grup.'),
        para('En paper, prediu i explica. Al simulador, carrega la fitxa i canvia una dada. Amb el robot, reconstrueix el programa a mBlock i comprova els valors reals. Prova el botó d’aturada abans de moure Rocky.'),
        para('Als blocs RGB, RO vol dir roig, VE vol dir verd i BL vol dir blau.', 'small'),
        para('Índex dels 27 exercicis', 'h'),
        para('Identifica la fitxa i l’exercici a la presentació o al simulador. L’índex dona les pàgines d’aquesta edició. La columna «Recull» mostra les pàgines citades a les diapositives.', 'small'),
    ]
    rows = [['Fitxa', 'Recull', 'Pàgina']]
    for n, activity in enumerate(activities, 1):
        rows.append([f'{n}. {activity["title"]}', f'{2*n-1}–{2*n}'] +
                    [str(exercise_pages[n, 1])])
        assert all(exercise_pages[n, position] == n+intro_pages for position in range(1, 4)), f'La fitxa {n} no cap en una pàgina'
    table = Table([[para(cell, 'small') for cell in row] for row in rows],
                  colWidths=[377, 75, 75])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HexColor('#eeeeee')),
        ('LINEBELOW', (0, 0), (-1, -1), .5, HexColor('#b0b0b0')),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
    ]))
    intro += [
        table, para('Per a la sessió següent', 'h'),
        para('Tria un exercici segons el dubte que vulgues resoldre. Porta una solució explicada, un error que hages revisat i una possible aplicació a l’aula. Usa el registre del mateix exercici.'),
        para('Grup, objectiu d’aula i dos casos de prova', 'h'),
        para('__________________________________________________________________'),
        para('__________________________________________________________________'),
    ]
    guide = BytesIO()
    document(guide, intro, label, page_offset=intro_pages-1)
    assert len(PdfReader(guide).pages) == 1, 'La guia i l’índex han d’ocupar una pàgina'
    writer = PdfWriter()
    writer.append(reference, import_outline=False)
    writer.append(PdfReader(guide))
    writer.add_outline_item(title="Guia del robot i de programació", page_number=0)
    writer.add_outline_item(title="Índex de les fitxes", page_number=intro_pages-1)
    writer.append(PdfReader(pages))
    for n, activity in enumerate(activities, 1):
        writer.add_outline_item(title=activity['title'], page_number=exercise_pages[n, 1]-1)
    filename = 'sessio-2-handout-compacte-bn.pdf'
    writer.write(OUT / filename)
    print(f'{filename} · {len(writer.pages)} pàgines')



def quick_reference():
    """Guia de dues cares per acompanyar les fitxes de la sessió."""
    body_style = ParagraphStyle('guide-body', parent=styles['body'], fontSize=11, leading=16)
    def body(text):
        return Paragraph(escape(text), body_style)
    def section(label, text):
        return Paragraph(f'<b>{escape(label)}</b> {escape(text)}', body_style)

    story = [
        para('ITINERARI 4 · SESSIÓ 2 · GUIA DE CONSULTA', 'small'),
        para('Codey Rocky al taller', 'title'),
        para('Identifica les dues parts del robot', 'h'),
        section('Codey.', 'És el controlador programable. Té els botons A, B i C, una pantalla de 16 × 8 punts, un LED RGB, un altaveu i sensors de llum i so. Pots practicar amb la pantalla i els botons sense muntar Rocky.'),
        section('Rocky.', 'És el xassís amb motors i erugues. Porta un sensor de color i infraroig orientable. Cap endavant serveix per detectar obstacles. Cap al terra permet comprovar el color o llegir els grisos per seguir una línia.'),
        para('Primera càrrega amb mBlock 5', 'h'),
        body('1. Encén Codey i connecta’l a l’ordinador amb un cable micro-USB de dades.'),
        body('2. A Dispositius, afegeix Codey i prem Connecta. Si l’editor demana un port, tria el del robot.'),
        body('3. Uneix «en prémer el botó A» amb «mostra la imatge». Tria una cara, selecciona Càrrega i transfereix el programa.'),
        body('4. Prem A. Desconnecta el cable i torna a prémer A amb Codey encés. Si modifiques el programa, carrega’l de nou.'),
        section('En viu i Càrrega.', 'En viu necessita connexió amb mBlock. Càrrega transfereix el programa a Codey perquè puga executar-lo després sense l’ordinador.'),
        para('Llegir una pila de blocs', 'h'),
        body('L’esdeveniment de dalt indica quan comença la pila. Les instruccions de baix s’executen en ordre. Ací l’encesa i el botó A inicien dues piles diferents.'),
        diagram(activities[1]['exercises'][0], maxheight=130, monochrome=True),
        Spacer(1, 8),
        Paragraph('<link href="https://roboticadocents.github.io/tutorial/cr-primeres-passes/">Guia de posada en marxa</link> · <link href="https://roboticadocents.github.io/sim/?robot=codey-rocky">Simulador de Codey Rocky</link>', styles['body']),
        PageBreak(),
        para('ITINERARI 4 · SESSIÓ 2 · GUIA DE CONSULTA', 'small'),
        para('Moviment, sensors i decisions', 'title'),
        para('Tria l’ordre segons quan vulgues que s’ature', 'h'),
        section('Avança durant 1 s.', 'El bloc controla la durada i atura els motors en acabar. La distància real varia segons el muntatge i la potència. Mesura-la abans de repetir el recorregut.'),
        section('Mou endavant.', 'Els motors continuen actius mentre el programa passa a la peça següent. «Espera 1 s» pausa la pila. Per aturar el robot, posa-hi «deixa de moure».'),
        diagram(activities[8]['exercises'][1], maxheight=145, monochrome=True),
        para('A inicia l’avanç. B i C executen l’aturada perquè els hem programat eixa ordre. Prova l’aturada abans de fer avançar Rocky.', 'small'),
        para('Fes que una lectura determine la resposta', 'h'),
        section('Pregunta de sí o no.', '«Hi ha obstacles al davant?» es pot encaixar dins d’«espera fins que». Seqüència: mou endavant → espera fins que hi haja un obstacle → deixa de moure.'),
        section('Lectura numèrica.', 'La intensitat infraroja reflectida va de 0 a 100. Orienta el sensor endavant, observa la lectura amb el teu obstacle i tria un llindar. El valor mesura intensitat, en lloc de distància en centímetres.'),
        section('Comprovació contínua.', 'Un «si» comprova la condició en arribar-hi. Dins d’un «per sempre», el robot torna a llegir i pot canviar la resposta.'),
        para('Troba la pràctica al quadern', 'h'),
        body('Fitxa 2: inici i botons. Fitxa 9: moviment i aturada. Fitxa 4: condicions i obstacles. Fitxa 8: seguiment de línia.'),
        para('Prediu què passarà, prova-ho i canvia una sola dada. En passar del simulador a Rocky, torna a mesurar abans d’ajustar el programa.', 'small'),
    ]
    target = OUT / 'sessio-2-guia-codey-rocky-bn.pdf'
    document(target, story, 'Guia de consulta')
    assert len(PdfReader(target).pages) == 2, 'La guia ha d’ocupar dues pàgines'
    print(f'{target.name} · 2 pàgines')

    return target


compact_workbook(quick_reference())
