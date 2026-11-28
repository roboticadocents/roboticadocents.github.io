'use strict';
const {Document}=require('../layout/document');

const officialGuides=` <section id="the-thing"><h2>The Thing · What is this?</h2>
 <p>El <a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt4e5b4b810582125d/5ec829ba1df2000f9ba98b02/what-is-this-bi-pdf-book1of1.pdf?locale=en-us">manual oficial de muntatge (PDF de 42 pàgines)</a> mostra les peces i quantitats de cadascun dels 38 passos, la construcció acabada i la connexió final del cable.</p>
 <ol class="sp-build-steps">
 <li>Prepara el kit 45678 i el hub carregat. Separa les peces amb els requadres de cada pas del manual, inclosos els eixos i els engranatges de la transmissió.</li>
 <li>Munta les peces en l’ordre del llibret i connecta el motor al port <strong>F</strong>. Abans d’executar, comprova que l’eix de sortida puga girar lliurement.</li>
 <li>Al projecte de blocs, comprova que fa cinc cicles amb dos segons en cada sentit. Si tots dos girs duren igual, l’objecte torna aproximadament a la posició inicial.</li>
 </ol>
 <p><a href="https://education.lego.com/en-us/lessons/prime-extra-resources/what-is-this/">Lliçó oficial de LEGO Education</a></p></section>
 <section id="kiki"><h2>Kiki, la gosseta · Help!</h2>
 <p>El <a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt7c8102105587e585/5ec96d37afa52a7b51941198/help-bi-pdf-book1of1.pdf?locale=en-us">manual oficial de muntatge (PDF de 43 pàgines)</a> mostra les peces i quantitats de cadascun dels 39 passos, incloses les peces blaves, grogues i verdes dels passos finals.</p>
 <ol class="sp-build-steps">
 <li>Prepara el kit 45678 i el hub carregat. Munta la figura i la base del sensor seguint el llibret. Connecta el sensor de color al port <strong>B</strong>.</li>
 <li>Obri la lectura del sensor en l’app SPIKE. Passa una peça de cada color per davant del sensor i comprova que identifica el blau, el groc i el verd.</li>
 <li>Executa i prem el botó esquerre. Mostra les tres peces en ordre. La pràctica del simulador usa una nota per a cada color. La lliçó de LEGO utilitza efectes sonors per contar la història.</li>
 </ol>
 <p><a href="https://education.lego.com/en-us/lessons/prime-invention-squad/help/">Lliçó oficial de LEGO Education</a></p></section>
 <section id="indicador-vent"><h2>Indicador de vent amb muntatge oficial</h2>
 <p>Prepara el kit 45678 i el hub carregat. Els dos llibrets de LEGO Education mostren les peces i quantitats a cada pas. Munta primer la base i després l’agulla. Connecta el motor que mou l’agulla al port <strong>A</strong> tal com indica el segon llibret.</p>
 <ul><li><a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltcb3f3f3f050be7ca/5f8802c330c48e7ee7c062ed/wind-speed-bi-pdf-book1of2.pdf?locale=en-us">Llibret 1 · Base i placa (PDF)</a></li>
 <li><a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt3a5f33a9f27cdc4c/5f8802c6f4c5ce0e93db15a1/wind-speed-bi-pdf-book2of2.pdf?locale=en-us">Llibret 2 · Agulla (PDF)</a></li></ul>
 <ol class="sp-build-steps">
 <li><p>Tria una posició de repòs amb espai perquè l’agulla puga avançar 60°. Llig l’angle del motor a l’app i posa eixe valor als dos blocs de posició que marquen l’inici i el retorn.</p></li>
 <li><p>Prova un gir curt i comprova el sentit. Si cal, canvia el sentit del bloc de gir. Després prova els tres angles de la pràctica: repòs, 30° i 60° respecte de la posició de repòs.</p></li>
 <li><p>Escriu 3 i després 8 m/s com a primer valor de la comparació. Compara en quin punt es para l’agulla abans de tornar al repòs.</p></li>
 </ol><p><a href="https://education.lego.com/en-us/lessons/prime-life-hacks/wind-speed/">Lliçó Wind Speed de LEGO Education</a></p></section>
`;

const projectGuides=`
 <section id="indicador-torns"><h2>Indicador de torns</h2>
 <p>Prepara les peces dels dos llibrets de l’indicador de vent que trobaràs <a href="#indicador-vent">més avall</a>. Afig cartolina i un retolador per fer l’escala.</p>
 <ol><li>Munta el model i connecta el motor al port A.</li><li>Marca «Lliure», «En ús» i «Canvi de torn» a 0°, 30° i 60° respecte del repòs. Usa l’app SPIKE per comprovar la posició física real del motor en cada marca.</li><li>Executa els tres moviments i comprova que l’agulla passa per totes les marques i torna a l’inici.</li></ol>
 <p><a href="../?robot=spike&amp;project=dial">Obri l’indicador al simulador</a></p></section>
 <section id="pinca"><h2>Pinça per recollir peces</h2>
 <p>Prepara un kit SPIKE Prime 45678 i una peça lleugera de prova. El <a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltd34f6e501eb5ff30/5f8802b8bf5ab07ee90076df/pass-the-brick-bi-pdf-book1of1.pdf?locale=en-us">llibre oficial Pass the Brick (PDF)</a> mostra les peces i els passos de la mà robòtica.</p>
 <ol><li>Munta les dues mordasses i connecta el motor al port F.</li><li>Obri la pinça i anota la posició del motor. Tanca-la lentament sobre la peça i anota l’angle on la subjecta sense forçar el motor. Usa aquests valors al programa físic.</li><li>Prem i solta el botó esquerre. Comprova si pots agafar i deixar la peça tres vegades.</li></ol>
 <p><a href="../?robot=spike&amp;project=claw">Obri la pinça al simulador</a> · <a href="https://education.lego.com/en-us/lessons/prime-extra-resources/pass-the-brick/">Lliçó de LEGO Education</a></p></section>
 <section id="sinia"><h2>Sínia de sis cabines</h2>
 <p>La sínia es basa en el muntatge SPIKE Prime de subeen40, amb sis cabines de LEGO, una estructura Technic i una transmissió amb vis sense fi.</p>
 <p><a href="https://blog.naver.com/subeen40/223212140282">Obri les instruccions de muntatge originals (85 passos)</a> · <a href="https://youtu.be/xsvf345XInw">Vídeo del muntatge en marxa</a></p>
 <h3>Prova física</h3>
 <ol>
  <li>Segueix els 85 passos de la guia per muntar la base, instal·lar la transmissió i penjar les sis cabines. Fes girar l’eix a mà abans de connectar el motor i comprova que les cabines pengen lliurement.</li>
  <li>Connecta el sensor de distància al port D i el motor al port F.</li>
  <li>Prem Play. Acosta un objecte a menys de 15 cm del sensor i comprova que la sínia reduïx la velocitat. Allunya’l i observa com recupera la velocitat anterior.</li>
 </ol>
 <p><a href="../?robot=spike&amp;project=wheel">Obri la sínia al simulador</a></p>
 </section>
 <section id="carreto"><h2>Carretó de repartiment</h2>
 <p>Prepara un kit 45678, una peça de càrrega i una capsa plana com a zona de descàrrega. Segueix el <a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt809618df861ea1b7/5f8802a14376310c19e3370a/out-of-order-bi-pdf-book1of1.pdf?locale=en-us">manual complet del carretó (PDF)</a> per identificar les peces.</p>
 <ol><li>Munta el carretó de la lliçó Cart Control. Comprova el parell de tracció als ports E i A, el motor de la roda posterior al C i el sensor de distància al B. Posa la roda posterior recta.</li><li>Orienta el sensor cap a la capsa. Al programa físic, aparella E i A i engega el moviment recte. Atura el parell quan la distància llegida siga menor de 15 cm.</li><li>Repeteix des de dos punts d’eixida i mesura la separació final. Ajusta la velocitat si la càrrega cau o el carretó s’acosta massa.</li></ol>
 <p><a href="../?robot=spike&amp;project=cart">Obri el carretó al simulador</a> · <a href="https://education.lego.com/en-gb/lessons/spike-python-u3-sensor-control/spike-python-u3l3/">Lliçó de LEGO Education</a></p></section>
 <section id="classificador"><h2>Classificador de peces per color</h2>
 <p>Els tres llibrets indiquen les peces per construir el mecanisme, la base i les peces de prova.</p>
 <ul><li><a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltebfffd33fc0a5e72/5f8802a1bc43790f5c4389f2/automate-it-bi-pdf-book1of3.pdf?locale=en-us">1. Mecanisme classificador (PDF)</a></li>
 <li><a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blte262c4974fee83b0/5f8802a3ed5ccb12e4342dac/automate-it-bi-pdf-book2of3.pdf?locale=en-us">2. Base del classificador (PDF)</a></li>
 <li><a href="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt2cb1e769ec72a3d7/5f88022d6c54ba0f72c2081a/automate-it-bi-pdf-book3of3.pdf?locale=en-us">3. Paquets de prova (PDF)</a></li></ul>
 <ol><li>Munta el model amb el motor A a la base, el F al braç i el sensor de color al D.</li><li>Col·loca una peça a mà a la zona de lectura. Calibra les posicions de recollida i descàrrega abans d’executar el cicle complet. Assenyala les dues eixides amb targetes groga i rosa.</li><li>Prova una peça de cada color i una d’un tercer color. Comprova que cada color programat acaba a l’eixida prevista i que un color desconegut activa l’avís.</li></ol>
 <p><a href="../?robot=spike&amp;project=sorter">Obri el classificador al simulador</a> · <a href="https://education.lego.com/en-us/lessons/prime-kickstart-a-business/automate-it/">Lliçó de LEGO Education</a></p></section>`;

const barrierGuide=` <section id="barrera"><h2>Barrera de taula</h2>
 <p>Material propi del taller anterior. El motor mou un braç de cartó i el sensor detecta una capsa que s’hi acosta. Connecta el <strong>motor al port A</strong> i el <strong>sensor de distància al D</strong>.</p>
 <h3>Peces i materials</h3><ul>
 <li>1 hub SPIKE Prime carregat, 1 motor angular gran i 1 sensor de distància.</li>
 <li>1 eix Technic de 4 mòduls i 1 roda dentada cònica de 36 dents amb forat en creu. La roda fa de suport del cartó.</li>
 <li>1 base de cartó rígid de 30 × 20 cm, 1 capsa rígida de 8 × 6 × 5 cm per elevar el motor i 1 braç de cartolina de 14 × 2 cm.</li>
 <li>2 gomes amples, cinta de paper, cinta de doble cara, regle i 1 capsa menuda per fer d’objecte de prova.</li>
 </ul>
 <figure><svg viewBox="0 0 760 360" role="img" aria-labelledby="build-title build-desc"><title id="build-title">Esquema de muntatge i connexions</title><desc id="build-desc">Hub fix a l’esquerra. El port A va al motor del suport central. El braç s’uneix directament a l’eix horitzontal i gira cap amunt. El port D va al sensor frontal, fora de la trajectòria del braç.</desc>
 <rect x="1" y="1" width="758" height="358" rx="16" fill="#f8fafc" stroke="#cbd5e1"/><path d="M50 300H710" stroke="#94a3b8" stroke-width="4"/>
 <rect x="75" y="215" width="115" height="85" rx="14" fill="#fde047" stroke="#a16207" stroke-width="2"/><text x="100" y="247">Hub fix</text><text x="100" y="278">A · D</text>
 <path d="M190 250C230 180 270 250 315 205M190 275C260 320 330 330 345 265" stroke="#64748b" stroke-width="4" fill="none"/>
 <rect x="290" y="210" width="50" height="90" rx="8" fill="#fde047" stroke="#a16207" stroke-width="2"/><rect x="315" y="195" width="230" height="20" rx="5" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
 <path d="M315 205V45" stroke="#64748b" stroke-dasharray="5 5" stroke-width="2"/><path d="M315 100a105 105 0 0 1 105 105" stroke="#0891b2" fill="none" stroke-width="2"/><circle cx="315" cy="205" r="21" fill="#06b6d4" stroke="#155e75" stroke-width="2"/><path d="M302 205h26M315 192v26" stroke="#fff" stroke-width="5"/>
 <rect x="328" y="248" width="35" height="30" rx="6" fill="#fff" stroke="#0891b2" stroke-width="2"/><circle cx="351" cy="258" r="5" fill="#0891b2"/><circle cx="351" cy="270" r="5" fill="#0891b2"/><path d="M368 264H650" stroke="#0891b2" stroke-dasharray="5 5" stroke-width="2"/>
 <text x="345" y="65">90° · oberta</text><text x="485" y="180">Braç lleuger · 0°</text><text x="50" y="60">A → motor angular</text><text x="50" y="88">D → distància</text><text x="470" y="295">Sensor frontal lliure</text><text x="270" y="332">Base i suport rígids</text></svg>
 <figcaption>Vista lateral del muntatge. L’eix queda horitzontal i el braç s’alça en el pla del dibuix.</figcaption></figure>
 <h3>Passos de muntatge</h3><ol class="sp-build-steps">
 <li><p>Col·loca la base amb el costat llarg davant teu. Fixa la capsa de suport al centre amb cinta de doble cara. Situa el hub a l’esquerra, amb els botons accessibles.</p></li>
 <li><p>Posa el motor damunt de la capsa amb el disc giratori orientat cap a tu i arran de la cara anterior del suport. Passa les dues gomes al voltant del suport i del cos del motor. Deixa lliure el disc. Connecta el cable al port A i fixa el sobrant a la base amb cinta.</p></li>
 <li><p>Amb el motor aturat, introdueix l’eix en creu al centre del disc i posa la roda dentada a l’extrem lliure. Deixa un xicotet espai entre la roda i la carcassa. Enganxa 2 cm del braç de cartolina a la cara exterior de la roda amb cinta de doble cara. La roda i el braç han de girar junts, sense tocar el suport.</p></li>
 <li><p>Fixa el sensor a la dreta del suport, per davall del braç, amb les dues obertures mirant cap a on s’acostarà la capsa de prova. Connecta’l al port D. Mesura les marques de 20, 30 i 40 cm des de la cara del sensor.</p></li>
 <li><p>En l’app SPIKE, obri la lectura del motor A i fes un gir curt a velocitat baixa. Identifica el valor quan el braç està horitzontal i quan està vertical. Anota els dos angles i usa’ls al programa de blocs. Si el braç baixa quan hauria de pujar, revisa el sentit de gir.</p></li>
 <li><p>Programa una espera fins que el sensor detecte una distància menor de 30 cm i, a continuació, mou el motor a la posició oberta. La capsa a 40 cm ha de mantindre el braç horitzontal. En situar-la a 20 cm, el braç ha de pujar. Comprova també que la lectura del sensor es manté estable amb el braç a les dues posicions.</p></li>
 </ol>
 <p><a href="https://education.lego.com/v3/assets/blt293eea581807678a/blt28cad37f1f002fd3/5f8801b982eaa522ca601c89/le_spike_prime_element_overview.pdf">Identifica les peces del kit (PDF de LEGO)</a></p></section>
 <section id="avis-obertura"><h2>Avís d’obertura amb llum i so</h2>
 <ol class="sp-build-steps">
 <li><p>Munta la base i el braç de la guia amb el motor a <strong>A</strong>. Col·loca el hub amb la matriu de 5 × 5 cap amunt i el botó central visible. El programa usa l’altaveu integrat.</p></li>
 <li><p>Posa el braç en la posició tancada abans d’executar. Fixa una velocitat baixa i prova un gir relatiu curt. Si el braç baixa, intercanvia els dos sentits de gir del programa.</p></li>
 <li><p>Comprova la seqüència amb el muntatge aturat al principi. El hub mostra la marca i fa sonar la nota abans d’obrir. En tornar a tancar, la matriu s’apaga i la llum del botó es posa roja.</p></li>
 </ol></section>
 <section id="sensor-forca"><h2>Barrera manual amb sensor de força</h2>
 <ol class="sp-build-steps">
 <li><p>Conserva el motor a <strong>A</strong>. Fixa el sensor de força al lateral de la base i connecta’l a <strong>B</strong>. Orienta el polsador perquè es puga prémer còmodament amb un dit des de fora del recorregut del braç.</p></li>
 <li><p>En l’app SPIKE, comprova que la lectura del sensor puja quan prems i torna a zero quan soltes. Ajusta les posicions tancada i oberta del motor amb les marques de la guia.</p></li>
 <li><p>Executa. Mantín la pressió fins que s’òbriga completament i solta per tornar a tancar. Repetix amb la condició de pressió forta i compara la resposta.</p></li>
 </ol></section>
 <section id="color-boto"><h2>Control d’accés amb color i botó</h2>
 <ol class="sp-build-steps">
 <li><p>Conserva el motor a <strong>A</strong>. Connecta el sensor de color a <strong>C</strong> i fixa’l amb la finestra mirant a la zona de lectura de les targetes. Deixa el botó dret del hub accessible i allunyat del braç.</p></li>
 <li><p>Prepara una peça LEGO verda i una d’un altre color. Fes una guia amb dues bigues perquè les dues peces passen a la mateixa distància del sensor. Comença a uns 16 mm i ajusta-ho mirant la lectura en directe de l’app.</p></li>
 <li><p>Comprova les quatre combinacions de targeta verda o d’un altre color i botó dret premut o alliberat. La marca apareix i la barrera s’obri quan totes dues condicions es compleixen.</p></li>
 </ol></section>
 <section id="temps-pas"><h2>Compta el temps de pas</h2>
 <ol class="sp-build-steps">
 <li><p>Munta la barrera amb el motor a <strong>A</strong> i el sensor de distància a <strong>D</strong>. Posa el hub amb la matriu visible i el sensor frontal paral·lel a la taula.</p></li>
 <li><p>Mesura 30 i 40 cm des de la cara del sensor i marca les dues distàncies. Usa una capsa amb una cara plana i comprova en l’app que el braç deixa la lectura lliure quan s’obri.</p></li>
 <li><p>Acosta la capsa a menys de 30 cm i espera que s’òbriga la barrera. Compta des que s’acaba d’obrir. Allunya la capsa més enllà dels 40 cm abans de tres segons i després repetix la prova esperant-ne més de tres. Compara les dues figures de la matriu.</p></li>
 </ol></section>
 <section><h2>SdA relacionades</h2><p><a href="../../situacio/sp-python-motors/">Moviment amb motiu</a>, lliçó 3, proposa alçar una barrera de cartó i comprovar l’acció i el retorn. El simulador prepara la lògica amb blocs; la SdA continua amb Python i les proves físiques.</p><p>El braç pot servir d’indicador per practicar quatre anades i tornades, com a preparació de la lliçó 1 d’<a href="../../situacio/sp-python-bucles/">Un mosaic de moviments repetits</a>.</p></section>

 <p id="indicador-vent"><a href="../muntatges-spike/#indicador-vent">Guia oficial de l’indicador de vent</a></p>`;

function SpikeBuildPage({legacy=false}={}){
 const title=legacy?'Barrera de taula · Guia de muntatge':'Guies de muntatge · SPIKE Prime';
 return Document({
  title,root:'../../',description:'Materials, connexions, passos de muntatge i proves per als projectes de SPIKE Prime.',
  extraHead:'<link rel="stylesheet" href="../../_css/spike-build.css">',
  body:`<article class="sp-build"><a href="../?robot=spike">← Torna al simulador de SPIKE Prime</a>
  <header><h1>${title}</h1></header>
  ${legacy
   ?'<nav aria-label="Guies" class="sp-build-index"><a href="#barrera">Peces i muntatge de la barrera</a><a href="../muntatges-spike/">Muntatges de SPIKE Prime</a></nav>'+barrierGuide
   :'<nav aria-label="Muntatges" class="sp-build-index"><a href="#indicador-torns">Indicador de torns</a><a href="#pinca">Pinça</a><a href="#sinia">Sínia</a><a href="#carreto">Carretó</a><a href="#classificador">Classificador</a></nav>'+projectGuides+officialGuides}
  </article>`
 });
}
module.exports={SpikeBuildPage};
