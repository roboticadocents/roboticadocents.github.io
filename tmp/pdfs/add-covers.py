from pathlib import Path
exec(Path('tmp/pdfs/build.py').read_text().split('# 18 landscape slides',1)[0])

def text(c,x,y,t,size=12,font='Jakarta',color=INK):
 c.setFillColor(HexColor(color));c.setFont(font,size);c.drawString(x,y,t)
def pill(c,x,y,w,t,color):
 c.setFillColor(HexColor(color));c.roundRect(x,y,w,31,15.5,stroke=0,fill=1)
 text(c,x+16,y+10,t,11,color='#ffffff')
def rule(c,x,y,w):
 c.setStrokeColor(HexColor('#cbd5e1'));c.setLineWidth(.6);c.line(x,y,x+w,y)

def cover(path,w,h,handout=False):
 c=canvas.Canvas(str(path),pagesize=(w,h))
 c.setFillColor(white);c.rect(0,0,w,h,fill=1,stroke=0)
 c.setFillColor(HexColor(PALE));c.rect(0,h*.30,w,h*.70,fill=1,stroke=0)
 m=48 if handout else 56
 logo(c,m,h-100,45)
 text(c,m+61,h-79,'Robòtica per a docents',15,'Sora')
 if handout:
  text(c,m,h-175,'SESSIÓ 1 · GUIA DE TREBALL',11,color=BLUE)
  text(c,m,h-244,'Programar',39,'Sora')
  text(c,m,h-294,'per aprendre',39,'Sora')
  text(c,m,h-343,'Pensem, programem i comprovem',15)
  pill(c,m,h-403,130,'Tale-Bot Pro','#cf7015')
  pill(c,m+143,h-403,184,'Matatalab Coding Set','#128255')
  text(c,m,h-449,'Una primera experiència amb paper i simulador.',11,color=MUT)
  text(c,m,211,'Handout i activitats completes',19,'Sora')
  text(c,m,180,'Guia de la sessió · Disseny d’una activitat per cicles',11,color=MUT)
  text(c,m,159,'8 fitxes de Tale-Bot + 8 fitxes de Coding Set',11,color=MUT)
  rule(c,m,116,w-2*m)
  text(c,m,87,'Nom:',10,color=MUT);rule(c,m+37,84,w-2*m-37)
  text(c,m,56,'Centre i cicle:',10,color=MUT);rule(c,m+85,53,w-2*m-85)
 else:
  text(c,m,h-147,'SESSIÓ 1 · PRESENTACIÓ',12,color=BLUE)
  text(c,m,h-214,'Programar per aprendre',43,'Sora')
  text(c,m,h-258,'Pensem, programem i comprovem',22)
  pill(c,m,h-325,143,'Tale-Bot Pro','#cf7015')
  pill(c,m+157,h-325,196,'Matatalab Coding Set','#128255')
  text(c,m,108,'Una primera experiència amb paper i simulador.',16,color=MUT)
  rule(c,m,65,w-2*m)
  text(c,m,38,'Formació docent · Robòtica educativa',11,color=MUT)
 c.showPage();c.save()

for filename,ishand in [('sessio-1-presentacio.pdf',False),('sessio-1-handout-activitats-completes.pdf',True)]:
 target=OUT/filename
 old=PdfReader(target)
 w,h=map(float,old.pages[0].mediabox[2:])
 cp=ROOT/'tmp/pdfs'/('cover-handout.pdf' if ishand else 'cover-slides.pdf')
 cover(cp,w,h,ishand)
 writer=PdfWriter();writer.append(str(cp),outline_item='Portada');writer.append(old)
 writer.add_metadata({k:v for k,v in (old.metadata or {}).items() if isinstance(v,str)})
 temp=ROOT/'tmp/pdfs'/filename
 writer.write(temp)
 check=PdfReader(temp)
 assert len(check.pages)==len(old.pages)+1
 assert all(a.extract_text()==b.extract_text() for a,b in zip(old.pages,check.pages[1:]))
 if not ishand:
  assert not re.search(r'\d{2}:\d{2}|minuts?|hores?|segons?', ''.join(p.extract_text() for p in check.pages),re.I)
 temp.replace(target)
 print(filename,len(check.pages),'pàgines; contingut anterior preservat')
