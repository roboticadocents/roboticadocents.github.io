---
active: true
title: "La ruta de los libros viajeros"
description: "¿Cómo podemos programar MatataBot para visitar cuatro espacios mientras presentamos un libro ficticio y una recomendación original?"
robot: "coding-set"
robot_label: "Coding Set"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "llengua"
subject_label: "Lengua y Literatura"
theme: "societat"
theme_label: "Convivencia y ciudadanía"
duration: "4 sesiones · 180 min"
challenge: "¿Cómo podemos programar MatataBot para visitar cuatro espacios mientras presentamos un libro ficticio y una recomendación original?"
official_source: "https://matatalab.com/en/node/95"
---

![MatataBot y el Coding Set recorren casillas entre un punto de préstamo, un rincón de lectura y una estantería.](../../_assets/situacions/cs-ruta-biblioteca.webp)

_MatataBot y el Coding Set recorren casillas entre un punto de préstamo, un rincón de lectura y una estantería._

## ❓ Reto e intención

MatataBot es el visitante nuevo. Cada equipo investiga cuatro espacios públicos del centro, representa su distribución en un plano simplificado, crea maquetas ligeras de papel y codifica una ruta para guiar a la clase. El grupo prepara un discurso breve con información contrastada y divide la guía en paradas; un libro ficticio puede hacer de hilo narrativo, pero el robot no transporta carga. La secuencia localiza y reinterpreta los objetivos de *MatataBot’s Guide* en un itinerario de bienvenida propio.

La guía oficial parte de la experiencia previa con el modo de programación de Matatalab Lite. Esta adaptación traslada el proyecto al Coding Set de la dotación: el alumnado traduce la ruta del mapa a bloques tangibles de movimiento. Las coordenadas sirven para comunicar lugares a las personas, no son órdenes que el robot pueda leer.

## 🎯 Aprendizajes y vocabulario

- Observar el espacio y representar sus puntos de interés en un mapa en miniatura y una cuadrícula.
- Programar una secuencia que visite cuatro espacios del centro y comprobar su recorrido.
- Escribir una recomendación original para un libro inventado sin copiar sinopsis ni usar datos de lectores.
- Guiar a otra persona, recoger sus comentarios y revisar tanto el mapa como las órdenes.

## 🧰 Materiales y preparación docente

Preparad el Coding Set completo, papel grande para el mapa, reglas, recortes de cartón y papel, cinta de pintor, tarjetas de símbolos, lápices, hojas de investigación y una hoja de registro. Pedid antes a la escuela información pública o autorizada sobre la historia y cultura del centro, y delimitad qué espacios se pueden observar y representar. No fotografiéis personas ni incluyáis horarios, códigos de acceso, nombres completos o información de seguridad. Si no hay plano compartible, medid o estimad solo relaciones de proximidad entre espacios con permiso docente, e indicad que el mapa es esquemático. Para una prueba física, dibujad la cuadrícula con casillas de 10 × 10 cm según la especificación de Matatalab; comprobad la alineación del paso del modelo local con una orden corta y registrad desviaciones antes de programar la ruta. Un mapa a escala diferente solo se usa para planificar o simular.

Las coordenadas (x, y) son una herramienta para encontrar y comunicar una ubicación en el mapa; MatataBot no recibe parejas de coordenadas como código. El alumnado traduce un itinerario entre puntos en bloques físicos de avance, retroceso y giro, teniendo en cuenta la orientación inicial.

## 📅 Secuencia didáctica · cuatro sesiones de 45 minutos

Las cuatro sesiones suman 180 minutos, como la duración publicada del proyecto de referencia: 45 minutos para investigar e iniciar la visita, 90 para el mapa, las maquetas y la programación, y 45 para las presentaciones y la reflexión. La distribución en cuatro encuentros permite secar, revisar y probar los materiales entre sesiones. La propuesta local concreta cuatro paradas; mantened la misma cantidad en el mapa, el guion, el programa y la visita.

### **Sesión 1 · Investigamos el centro que vamos a presentar.**

#### Fase 1 · Activamos y predecimos

Empezad con el encargo: ¿quién llega por primera vez y qué información le sería útil? Cada equipo anota qué sabe ya del centro y qué datos necesita confirmar.

#### Fase 2 · Exploramos y construimos

Consultad una fuente del centro o preguntad a una persona autorizada sobre la historia, cultura o uso compartido de cuatro espacios. Anotad la fuente, la fecha y lo que todavía no sabéis.

#### Fase 3 · Explicamos y registramos

Haced una observación docente guiada o usad notas y bocetos preparados. Identificad entradas, pasillos y lugares visitables sin entrar en zonas restringidas; registrad solo la información necesaria para el plano.

#### Fase 4 · Aplicamos y mejoramos

Decidid qué distancia representará cada tramo y dibujad límites y cuatro puntos de interés. Otro equipo comprueba si puede encontrar el inicio y los destinos y señala qué hay que aclarar.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** notas de investigación con fuentes, boceto con leyenda y escala declarada. ¿Qué información sigue pendiente de confirmar?

### **Sesión 2 · Hacemos el mapa en miniatura y las maquetas.**

#### Fase 1 · Activamos y predecimos

Revisad el boceto de la sesión anterior y predecid qué información debe mantenerse para que el mapa sea legible y conserve la escala.

#### Fase 2 · Exploramos y construimos

Trasladad pasillos y ubicaciones con la misma escala. Añadid título, norte u orientación inicial, leyenda y una cuadrícula con letras y números.

#### Fase 3 · Explicamos y registramos

Cread maquetas tridimensionales sencillas de papel para los edificios o espacios representados; mantenedlas bajas y fuera de la trayectoria del robot o sustituidlas por símbolos planos. Asignad coordenadas a los lugares.

#### Fase 4 · Aplicamos y mejoramos

Haced que cada persona encuentre un destino a partir de una pareja ordenada. Contrastad que las maquetas y los símbolos conservan la posición relativa en el mapa y que la escala no ha cambiado.

![MatataBot, la torre y el tablero Coding Set de la dotación junto a un mapa en miniatura de biblioteca, rincón de lectura y huerto escolar.](../../_assets/situacions/sa-cs-ruta-biblioteca-plano.webp)

_La cuadrícula localiza los espacios en el mapa; el alumnado traduce la ruta a fichas físicas para que MatataBot se mueva, ya que el robot no recibe coordenadas ni transporta libros._

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa legible con cuatro maquetas o símbolos y tarjetas de coordenadas. ¿Qué información nos da la coordenada y qué información necesitará el robot para moverse?

### **Sesión 3 · Codificamos y escribimos la visita guiada.**

#### Fase 1 · Activamos y predecimos

Elegid un punto de inicio, el orden de las cuatro paradas y una ruta que el robot pueda recorrer sin chocar. Marcad con una flecha su orientación inicial y predecid cada giro.

#### Fase 2 · Exploramos y construimos

Convertid la ruta dibujada en bloques de movimiento. Colocad la secuencia de izquierda a derecha y probad un tramo cada vez.

![MatataBot y la torre reales del Coding Set junto a un mapa en miniatura con ruta y a una secuencia de bloques físicos.](../../_assets/situacions/sa-cs-biblioteca-codi-mapa-v1.webp)

_El mapa guía a las personas; el programa tangible envía órdenes de movimiento al robot. Las coordenadas no son una entrada directa del Coding Set._

#### Fase 3 · Explicamos y registramos

Redactad cuatro fragmentos de visita guiada de dos o tres frases: nombre del espacio, un hecho verificado y qué puede descubrir allí el visitante. Citad oralmente la fuente o señaladla en una tarjeta docente; no inventéis hechos locales.

#### Fase 4 · Aplicamos y mejoramos

Si MatataBot se aleja de la ruta, registrad la casilla, la orientación y el primer bloque que hay que revisar. Depurad una instrucción y practicad la narración sincronizada con las paradas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** guion de visita, programa y registro de una prueba. ¿El mapa de coordenadas y las órdenes del robot describen la misma ruta de maneras diferentes?

### **Sesión 4 · Guiamos a MatataBot y revisamos el proyecto.**

#### Fase 1 · Activamos y predecimos

Situad mapa, maquetas y señal de inicio; asignad quién programa, quién narra y quién registra. Predecid si el público podrá seguir la ruta solo con el mapa y el discurso.

#### Fase 2 · Exploramos y construimos

Cada equipo muestra el código, hace el recorrido y presenta los espacios con el discurso. El público sigue el mapa y marca las cuatro paradas.

![MatataBot y la torre reales del Coding Set junto al mapa final de cuatro espacios y a tarjetas visuales para la presentación.](../../_assets/situacions/sa-cs-biblioteca-visita-v1.webp)

_La persona guía narra las paradas y el público consulta las tarjetas; MatataBot solo recorre la ruta programada y no transporta el libro ficticio._

#### Fase 3 · Explicamos y registramos

Otra pareja indica un punto fuerte y formula una pregunta concreta sobre escala, información o ruta. Registrad los comentarios y la parada a la que se refieren.

#### Fase 4 · Aplicamos y mejoramos

Corregid una parte del mapa o del programa a partir de los comentarios y volved a comprobar que el recorrido se puede seguir.

#### Fase 5 · Comprobamos y reflexionamos

Responded: ¿qué nos ha costado, qué fuente hemos utilizado y cómo nos hemos repartido el trabajo? **Evidencia:** visita completa, mapa final, programa revisado y reflexión individual o dictada.

## 🧭 Registro, rúbrica y evidencias

Conservad la fuente y la fecha de cada dato, el boceto, la escala escrita, la cuadrícula, la leyenda, las coordenadas de las paradas, las maquetas, el guion, la secuencia de bloques y los resultados de las pruebas. Valorad con tres niveles —con modelado, con alguna pista, de manera autónoma y explicada— si el equipo (1) representa posiciones relativas y usa la escala con coherencia; (2) localiza lugares en una cuadrícula sin confundir (x, y) con una orden del robot; (3) programa y depura la ruta considerando la orientación; y (4) comparte datos verificados con una audiencia. El éxito no depende de la ruta más corta: también cuentan una visita segura, comprensible y fiel al mapa.

## ♿ Participación, accesibilidad y seguridad

Ofreced plano de alto contraste, símbolos en relieve, coordenadas en tarjetas grandes y versiones de ruta con menos paradas. Los roles pueden ser investigador/a, cartógrafo/a, constructor/a, programador/a, guía oral, narrador/a con comunicación aumentativa o auditor/a de fuentes; no hace falta hacer la visita física para participar. En lugar de una excursión, podéis trabajar con notas y bocetos de lugares públicos preparados por el centro. Mantened las maquetas lejos de los pasillos de movimiento, no tapéis sensores ni ruedas y detened el robot antes de mover maquetas. La visita real se hace solo en zonas autorizadas y con las normas habituales del centro.

## 📚 Conexión cultural propia

La clase puede vincular el recorrido a un espacio de lectura, un patio, un aula taller o un elemento de memoria del centro. Si se quiere añadir patrimonio de la localidad, usad fuentes municipales, de biblioteca o de una entidad cultural y distinguid lo que está documentado de lo que es una narración inventada. Los personajes y el hilo del libro son creados por el alumnado; los hechos de la visita se verifican por separado.

## 🔗 Referentes oficiales y adaptación

[MatataBot’s Guide](https://matatalab.com/en/node/95) es un proyecto para presentar la escuela a un robot visitante: la guía publicada propone 45 minutos de investigación y visita, 90 minutos para dibujar el recinto a escala, crear maquetas de papel y codificar ruta y discurso, y 45 minutos de presentación y comentarios. La página menciona como conocimiento previo el modo de programación de Matatalab Lite; esta adaptación lo traslada a una secuencia física del Coding Set, sin confundir las dos interfaces. Conserva la investigación de la cultura y distribución del centro, el miniplano a escala, las maquetas tridimensionales, la ruta programada y el discurso de guía; los convierte en una bienvenida propia con hechos locales verificados y protocolos de privacidad. A diferencia de la fuente, ofrece opciones basadas en bocetos preparados cuando la visita no es posible y explicita que las coordenadas son de mapa, no instrucciones que MatataBot entienda directamente. Los personajes, guion, mapa, pictogramas y visuales intercalados son originales y se basan en el robot y la torre reales. La parada de préstamo conecta también con la idea de destinos de [Delivery Animals](https://matatalab.com/en/node/86), sin afirmar que el robot transporte libros.
