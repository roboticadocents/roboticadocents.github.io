#!/usr/bin/env python3
"""Genera la guia i la fitxa A4 de SPIKE Prime. Requereix reportlab."""
from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer
from xml.sax.saxutils import escape

root = Path(__file__).resolve().parents[1]
fonts = root / '_assets/sessions/marp/fonts'
for name, file in [('Sora', 'Sora-Bold.ttf'), ('Jakarta', 'PlusJakartaSans.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(fonts / file)))

title = ParagraphStyle('Títol', fontName='Sora', fontSize=24, leading=30, spaceAfter=10)
heading = ParagraphStyle('Apartat', fontName='Sora', fontSize=12, leading=16, spaceBefore=12, spaceAfter=4)
body = ParagraphStyle('Cos', fontName='Jakarta', fontSize=11, leading=16, spaceAfter=7)


def p(text, style=body):
    return Paragraph(escape(text), style)


story = [
    p('SPIKE Prime · Barrera automàtica', title),
    p('Una barrera de taula amb hub fix. El motor angular mou el braç i el sensor mesura la distància a un objecte.'),
    p('Preparem el muntatge', heading),
    p('Connecta el motor angular al port A i el sensor de distància al D. Fixa el hub i el suport sobre una base ampla. Orienta el sensor cap a l’objecte i deixa lliure el recorregut del braç.'),
    p('Pren la posició horitzontal com a referència de barrera tancada. Prova un moviment curt i lent. Comprova el sentit de gir abans de provar l’obertura completa.'),
    p('Tria els blocs segons la tasca', heading),
    p('Motor A: fixa la velocitat i ves a la posició pel camí més curt. Són dues peces. En el simulador, 0° tanca la barrera i 90° l’obri. En el muntatge físic, ajusta l’angle i el sentit a partir de la posició que has marcat.'),
    p('Espera fins que. Dins de la peça de control, tria la condició «sensor D: objecte més a prop de…» i el llindar en cm. La pila s’espera fins que es compleix la condició i continua amb la peça següent.'),
    p('Si. Executa les peces de dins quan la condició és certa. Usa Si / si no quan necessites una resposta en cadascun dels dos casos.'),
    p('Repeteix fins que. Torna a comprovar la condició abans de cada volta. Si ja es compleix a l’inici, no executa cap volta.'),
    p('Primera prova amb el sensor', heading),
    p('Al simulador, carrega «Obri quan s’apropa un objecte». El programa espera una lectura menor de 30 cm i després obri. Activa l’objecte i mou-lo amb el dit, el ratolí o el control de distància.'),
    p('Per passar al muntatge físic, reconstrueix el programa amb els blocs de paraules de l’app SPIKE. La lectura i la posició del motor depenen del muntatge.'),
    Paragraph('<link href="https://roboticadocents.github.io/sim/?robot=spike"><u>Simulador</u></link> · <link href="https://roboticadocents.github.io/sim/muntatge-barrera/"><u>Guia de muntatge</u></link>', body),
    PageBreak(),
    p('Fitxa · Tres proves amb la barrera', title),
    p('Nom ___________________________________ Data __________________'),
    p('En paper, prediu el resultat. Al simulador, executa la prova. Amb SPIKE Prime, ajusta la posició inicial i comprova les distàncies amb un regle.'),
]

for title_text, prompt in [
    ('1. Obrir i tornar', 'Carrega «Acció i retorn». Prediu l’angle final. Canvia només l’angle d’obertura a 45° i comprova què canvia durant el recorregut i al final.'),
    ('2. Esperar una lectura', 'Carrega «Obri quan s’apropa un objecte». Prediu què farà sense objecte, a 40 cm, a 30 cm i a 20 cm. Comprova quin valor fa que continue després de l’espera.'),
    ('3. Triar quan tancar', 'Carrega «Barrera amb detecció». Apropa l’objecte a 20 cm i espera que s’òbriga. Prova 35 cm i després 60 cm. Repeteix retirant l’objecte. Explica per què té sentit usar dos llindars.'),
]:
    story.extend([p(title_text, heading), p(prompt), p('Predicció __________________________________________________________'),
                  p('Resultat i canvi provat ________________________________________________')])

story.extend([Spacer(1, 7), p('Aplicació a l’aula', heading),
              p('On seria útil una barrera així? Proposa dos casos per comprovar que respon com esperes.'),
              p('___________________________________________________________________'),
              p('___________________________________________________________________')])


def page_number(canvas, doc):
    canvas.setFont('Jakarta', 8)
    canvas.drawRightString(A4[0] - 36, 22, f'SPIKE Prime · {doc.page}')


pdf = root / 'output/pdf/spike-prime-barrera-handout-bn.pdf'
SimpleDocTemplate(str(pdf), pagesize=A4, title='SPIKE Prime · Guia i fitxa de la barrera',
                  leftMargin=36, rightMargin=36, topMargin=32, bottomMargin=34).build(
                      story, onFirstPage=page_number, onLaterPages=page_number)
