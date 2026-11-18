---
active: true
title: "Tesoros entre acequias"
description: "Dibujamos un laberinto inspirado en la marjal, programamos una ruta con bloques de movimiento y número y llegamos a uno o dos tesoros."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "pensament-computacional"
subject_label: "Pensamiento computacional y Matemáticas"
theme: "entorn-local"
theme_label: "Acequia y marjal"
duration: "3 sesiones de 45 minutos"
challenge: "¿Cómo podemos diseñar un laberinto claro y programar MatataBot para visitar un tesoro, y después dos, en una sola secuencia?"
official_source: "https://matatalab.com/cdn/ff/IhHZwon10hgweb9Aqf4zXOcRD2XjU0s9E0F2sWyqps4/1637739725/public/2021-11/Coding%20Activity%20Cards.pdf"
---

![MatataBot y la torre del Coding Set reales junto a un laberinto de papel inspirado en acequias, con dos tesoros de cartón en puntos distintos.](../../_assets/situacions/cs-tresors-sequia.webp)

_Ilustración de IA propia basada en el kit real. El laberinto y los tesoros son materiales de papel; el robot ejecuta los bloques y no detecta, recoge ni identifica las piezas._

## Situación, reto e intención

Una clase diseña un mapa de acequias para una misión ficticia del humedal. En una cuadrícula plastificada, cada equipo dibuja canales y márgenes que dejan un pasillo continuo desde el inicio hasta un tesoro. MatataBot debe recorrer el pasillo y llegar a la casilla del tesoro. Cuando la ruta funciona con un tesoro, el equipo añade un segundo y adapta el programa para que visite los dos antes de acabar.

La situación adapta la tarjeta oficial **B-1 · Maze Adventure I** de las *Coding Activity Cards*. El procedimiento visible pide crear laberintos con rotuladores borrables, poner tesoros en puntos indicados, programar MatataBot con bloques de movimiento y número para encontrarlos y añadir un tesoro más a cada mapa para probar si se pueden encontrar los dos con un programa. El mapa, el vocabulario local, los tesoros de papel, las pruebas entre parejas y la secuencia didáctica son propios. El robot no sigue las líneas ni detecta tesoros: las personas planifican el camino y comprueban la casilla final.

**Pregunta guía:** ¿cómo podemos pasar de un laberinto dibujado a una secuencia de bloques que llegue al tesoro, y qué hay que cambiar cuando añadimos otro?

## Aprendizajes y vocabulario

- Diseñar un laberinto con inicio, pasillo accesible y uno o más destinos.
- Leer una ruta en cuadrícula y traducir tramos rectos a bloques de movimiento y número disponibles.
- Registrar la posición y la orientación después de cada giro.
- Probar una secuencia, localizar la primera divergencia y revisarla con una nueva prueba.
- Ampliar una ruta para que visite dos tesoros con un único programa.
- Diferenciar la planificación humana de la detección o recogida automática, que el robot no hace.

**Vocabulario clave:** laberinto, pasillo, margen, casilla, tesoro, destino, orientación, movimiento, número, ruta, secuencia, depuración.

## Materiales y preparación

- Coding Set de la dotación: MatataBot, torre de control, tablero y bloques de movimiento. Usad bloques de número solo si el kit los incluye y la torre los reconoce.
- Mapa propio plastificado o funda borrable con cuadrícula; rotulador borrable y paño suave. Haced una prueba de borrado en un rincón antes de la sesión.
- Fichas de papel o cartón grandes como tesoros, con una cara de inicio y una de meta; no son códigos que el robot pueda leer.
- Plantilla con **dibujo del laberinto**, **ruta prevista**, **bloques**, **orientación**, **tesoro visitado**, **resultado observado** y **cambio probado**.
- Ficha de robot de papel y tarjetas de flechas para resolver el mapa sin activar el dispositivo.

Dibujad una cuadrícula grande y aseguraos de que las casillas que corresponden a un desplazamiento físico tienen la escala adecuada al modelo y la superficie. Dejad pasillos suficientemente anchos para las ruedas y evitad cruces demasiado estrechos. Fijad el mapa a una mesa plana, colocad los tesoros en el centro de las casillas acordadas y cargad MatataBot y la torre. No pongáis rotuladores, dedos ni tesoros pequeños en el recorrido mientras el robot se mueve.

## Secuencia didáctica

### Sesión 1 · Dibujamos y resolvemos el primer laberinto (45 min)

#### Fase 1 · Activamos y predecimos

Mostrad un mapa en blanco con una casilla de inicio y una meta. Preguntad qué decisiones hay que tomar para que otra pareja pueda encontrar el tesoro sin que la autoría le explique el camino. Acordad cómo se representan los pasillos, los márgenes y las casillas bloqueadas.

#### Fase 2 · Exploramos y construimos

Por parejas, dibujad con rotulador borrable un laberinto original con una única entrada, al menos dos giros y un pasillo continuo hasta el tesoro. Poned la ficha del tesoro en una casilla marcada. Otra persona recorre el pasillo con la ficha de papel y señala cualquier bifurcación que permita más de una lectura.

#### Fase 3 · Explicamos y registramos

Marcad en el mapa la posición inicial y hacia dónde mira MatataBot. Dibujad una ruta posible sin levantar la ficha ni atravesar los márgenes. Anotad cada tramo recto y cada cambio de orientación en una tabla; si hay dos rutas, comparadlas sin declarar ninguna como la única solución correcta.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad mapas. La pareja visitante debe poder llegar al tesoro con sus flechas. Si no puede, el equipo autor revisa una bifurcación o hace más ancho el pasillo y vuelve a dar el mapa a una tercera pareja. No modifiquéis el mapa mientras el otro equipo lo resuelve.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** laberinto propio, ruta trazada y una revisión a partir de la lectura de otro equipo. **Pregunta:** ¿qué parte del mapa ha hecho que la ruta fuera ambigua o imposible?

### Sesión 2 · Programamos la ruta hasta un tesoro (45 min)

#### Fase 1 · Activamos y predecimos

Elegid un mapa validado y colocad el robot en el punto inicial. Antes de construir los bloques, cada equipo predice la casilla después de tres órdenes y señala cuándo tendrá que girar MatataBot para seguir el pasillo.

#### Fase 2 · Exploramos y construimos

Traducid los tramos rectos a bloques de movimiento. Si vuestro Coding Set tiene bloques numéricos, usadlos solo con avanzar o retroceder según las instrucciones del kit; los números no se aplican a los giros. Colocad los bloques en el orden de lectura del tablero y simulad la secuencia con la ficha de robot antes de ejecutarla.

#### Fase 3 · Explicamos y registramos

Registrad bloque a bloque las casillas previstas y la orientación después de cada giro. Una pareja observadora sigue el programa sobre el mapa y comprueba si atraviesa un borde, entra en un pasillo cerrado o llega a la casilla del tesoro.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad la ruta física con el robot y observad su posición final. Si no coincide con la predicción, identificad la primera instrucción divergente y revisad solo ese tramo. Volved a empezar desde la misma posición inicial; no desplacéis el tesoro para hacer que el resultado parezca correcto.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** secuencia de bloques y tabla de posiciones previstas y observadas. **Pregunta:** ¿qué orden ha determinado el giro o el número de casillas avanzadas?

### Sesión 3 · Añadimos un segundo tesoro al mismo programa (45 min)

#### Fase 1 · Activamos y predecimos

Añadid una segunda ficha del tesoro al mapa sin cambiar el inicio. Cada equipo decide en qué orden visitará los tesoros y predice si el programa actual puede llegar a los dos sin borrarse ni iniciar una segunda ejecución.

#### Fase 2 · Exploramos y construimos

Planificad una única ruta que pase por la primera y la segunda casilla con tesoro. Añadid los bloques necesarios y registrad cada segmento. Si los dos destinos exigen un giro o una secuencia larga, contad los movimientos antes de ejecutar; el robot no se detendrá al ver la primera ficha del tesoro.

#### Fase 3 · Explicamos y registramos

Otra pareja comprueba que el programa completo visita las dos casillas en el orden acordado. Marcad **tesoro 1 visitado** y **tesoro 2 visitado** solo a partir del recorrido observado. Distinguid «pasar por la casilla» de «recoger la ficha del tesoro»: una persona la retira después de que el robot se haya detenido.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad el programa único y anotad si llega a los dos puntos. Si la ruta no completa el segundo tesoro, localizad la última casilla correcta, corregid el tramo final y repetid desde el inicio. Como extensión, añadid una tercera ficha del tesoro al mapa y discutid qué información habría que registrar para verificarla sin confundir esta extensión con el paso oficial de dos tesoros.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia final:** mapa revisado, un programa que visita dos tesoros, resultados observados y tarjeta de límites del robot. Cerrad con: «Hemos comprobado los dos tesoros porque…» y «El robot no los ha identificado ni recogido; nosotros…».

## Evidencias y evaluación

Recoged los mapas de papel, la ruta de flechas, la secuencia física, la tabla de pruebas y una nota sobre la revisión hecha después del primer intento. Observad si el alumnado:

- dibuja un pasillo continuo y situaciones reproducibles;
- conserva la posición y la orientación iniciales al planificar;
- utiliza bloques de número solo en los tramos compatibles del kit;
- visita dos puntos con una sola ejecución del programa;
- justifica una corrección con la primera diferencia observada;
- separa la llegada al tesoro de su retirada manual.

No evaluéis la rapidez, la estética del laberinto ni el acierto al primer intento.

## Participación, accesibilidad y seguridad

Ofreced laberintos preparados con alto contraste y pocos pasillos, cuadrícula grande, paredes táctiles o flechas anchas. Se puede participar dibujando, dictando una secuencia, moviendo la ficha de papel, colocando bloques o registrando las pruebas. Evitad superficies brillantes que dificultan la lectura de la torre; limpiad el rotulador antes de guardar el mapa. Retirad las fichas del tesoro solo con el robot detenido y usad piezas grandes que no puedan entrar bajo las ruedas.

## Referentes y adaptación

- Matatalab, [*Coding Activity Cards*, tarjeta B-1 · *Maze Adventure I* (PDF oficial)](https://matatalab.com/cdn/ff/IhHZwon10hgweb9Aqf4zXOcRD2XjU0s9E0F2sWyqps4/1637739725/public/2021-11/Coding%20Activity%20Cards.pdf): propone hacer laberintos con rotuladores borrables, colocar tesoros, programar MatataBot con bloques de movimiento y número y añadir un segundo tesoro para encontrar dos en un único programa. La muestra consultada incluye ejemplos gráficos de dos mapas; esta propuesta crea mapas locales propios y no asegura una correspondencia geométrica exacta.
- Matatalab, [*Hello Matatalab Robots!*](https://matatalab.com/en/node/88): fuente de comprobación para la lectura de los bloques direccionales, la orientación y los giros del Coding Set.

La propuesta mantiene el ciclo completo de la tarjeta: crear un laberinto borrable, poner un tesoro, encontrarlo con bloques de movimiento y número y añadir otro para resolver dos destinos con un solo programa. El mapa y las piezas son materiales locales; la toma de decisiones es humana y MatataBot solo ejecuta la secuencia.
