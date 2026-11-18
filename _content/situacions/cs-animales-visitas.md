---
active: true
title: "Cuatro animales, cuatro visitas y una ruta de memoria"
description: "Programamos MatataBot para entregar cuatro animales a lugares de la comunidad, recordar por qué han ido y recuperarlos con una ruta comprobable."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "infantil"
cycle_label: "Educación Infantil"
subject: "pensament-computacional"
subject_label: "Pensamiento computacional, lenguaje y entorno"
theme: "entorn-local"
theme_label: "Servicios del pueblo y animals de granja"
duration: "4 sesiones de 45 minutos"
challenge: "¿Podemos recordar dónde hemos dejado cada animal y programar MatataBot para que vuelva sin que el robot vea ni recoja las piezas?"
official_source: "https://matatalab.com/en/node/86"
---

![MatataBot y la torre del Coding Set junto a un mapa de pueblo con cuatro edificios de cartón, bolsillos de papel y tarjetas de animales de granja.](../../_assets/situacions/cs-animals-visites.webp)

_Los bolsillos esconden las fichas para que el alumnado las recuerde; una persona las coloca o las recupera manualmente. MatataBot solo ejecuta la ruta programada._

## Situación, reto e intención

Cuatro animales de cartulina visitan lugares de un pueblo inspirado en el entorno valenciano: la biblioteca, el mercado, el horno y el vivero escolar. La clase prepara una maqueta plana con cuadrícula y un bolsillo de papel en cada edificio. En una primera ronda, se programa MatataBot para llevar una ficha a cada lugar; una persona la coloca dentro del bolsillo y el grupo inventa una frase que ayude a recordar la visita. Después, los bolsillos se cierran y hay que recordar dónde está cada animal, planificar la ruta de vuelta y comprobarla.

La propuesta adapta el plan oficial de Matatalab *Deliver Animals*: cuatro animales de granja viajan a cuatro lugares de la comunidad; cada llegada abre una historia sobre el destino. El plan propone revisar los bloques de movimiento y preparar lugares, animales y obstáculos durante 10 minutos; dedicar 30 al reparto, la narración y, como ampliación, una sola ruta con los cuatro destinos; y cerrar con 5 minutos de retorno y preguntas. Aquí se mantienen esa progresión, el recuerdo de los destinos y la posibilidad de programar el recorrido completo. Los lugares, los materiales, las historias y el registro son propios y locales. La colocación o retirada de cada ficha la hace una persona: no atribuimos a MatataBot un mecanismo de descarga.

**Pregunta guía:** ¿qué pista de nuestra historia nos ayuda a recordar el destino y cómo podemos comprobar que la ruta de vuelta es correcta?

## Aprendizajes y vocabulario

- Descomponer un trayecto en órdenes de movimiento y estimar cuántas casillas hay que avanzar o retroceder.
- Asociar cada ficha con un destino y una historia creada por el grupo, y recuperar la información de memoria.
- Construir y leer una cuadrícula con inicio, orientación, cuatro lugares y rutas transitables.
- Comparar la predicción con el recorrido, detectar el primer punto de divergencia y corregir una orden cada vez.
- Explicar qué hace MatataBot y qué hacen las personas: el robot no ve, recuerda ni recoge las fichas.

**Palabras clave:** secuencia, casilla, destino, parámetro, estimación, memoria, historia, depuración, prueba.

## Materiales y preparación

- Coding Set completo: MatataBot, torre, tablero de control y bloques de movimiento; cargad y emparejad los componentes según la guía del modelo del centro.
- Una cuadrícula de papel grande basada en las casillas del tablero o una ruta comprobada con el robot; mantened constante la distancia entre casillas y marcad inicio y orientación.
- Cuatro edificios pequeños de cartón con un bolsillo de papel fácil de abrir, cuatro fichas grandes de animales y tarjetas con biblioteca, mercado, horno y vivero. Las fichas no deben poder entrar en ninguna pieza del robot.
- Hoja de registro con columnas **animal**, **lugar visitado**, **frase-pista**, **ruta de ida**, **ruta de vuelta**, **predicción** y **resultado**; tarjetas de flecha y número para planificar antes de tocar los bloques.

Haced una prueba previa entre las casillas que elijáis y comprobad la longitud real del paso, el giro y la orientación inicial de MatataBot. Si el mapa no coincide con la distancia del modelo, ajustad su cuadrícula antes de la clase. Colocad los bolsillos al lado de la ruta, sin impedir el movimiento ni tapar casillas; la persona adulta administra las fichas.

## Secuencia didáctica

### Sesión 1 · Construimos el pueblo y probamos las rutas (45 min)

#### Fase 1 · Activamos y predecimos

Presentad las cuatro fichas de animales y los cuatro lugares. Preguntad qué podría hacer cada animal en una visita y cómo recordaríamos un destino si después no pudiéramos verlo. Cada pareja dibuja una ruta hasta dos lugares y estima las órdenes antes de montarla.

#### Fase 2 · Exploramos y construimos

En equipos de cuatro, repartid roles de planificación, programación, observación y registro. Marcad un punto de inicio y una orientación fija; construid la cuadrícula y poned los edificios con los bolsillos fuera del paso del robot. Probad una ruta sencilla con bloques del kit y ajustad el mapa hasta que la distancia entre casillas sea consistente.

#### Fase 3 · Explicamos y registramos

Leed en voz alta una ruta como una secuencia ordenada: inicio, órdenes, giro y llegada. El grupo observador contrasta las órdenes con el mapa y registra cuántas casillas separan cada lugar del inicio; distinguid la coordenada del mapa de las órdenes que realmente recibe el robot.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad los mapas entre dos equipos. El equipo visitante tiene que encontrar una ruta hasta un edificio sin que se la dicten. Si la predicción falla, localizad la primera orden que no concuerda con el mapa, cambiad solo una y volved a ejecutarla.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa legible con inicio, orientación, cuatro destinos y una ruta probada; registro de la predicción y el ajuste. **Pregunta:** ¿qué hemos tenido que fijar para que otro equipo pudiera repetir nuestro recorrido?

### Sesión 2 · Entregamos los animales e inventamos pistas (45 min)

**Correspondencia con *Deliver Animals*:** reservad aproximadamente 10 minutos para repasar los bloques y montar los cuatro destinos con obstáculos; 30 minutos para programar y narrar las entregas; y 5 minutos para compartir una historia y responder preguntas de comprobación. En esta adaptación, el registro y la construcción de pistas se integran en las cinco fases siguientes.

#### Fase 1 · Activamos y predecimos

Cada miembro del equipo elige una ficha de animal y, antes de programar, inventa una frase breve que explique por qué visita un lugar. La frase debe relacionar el animal y el destino con una pista fácil de recordar; no hace falta que describa un hecho real sobre el animal.

#### Fase 2 · Exploramos y construimos

Por turnos, planificad con tarjetas la ruta desde el inicio hasta el lugar elegido. Contad los avances y los giros, poned los bloques en el orden previsto y pedid a otra persona que los revise antes de pulsar *Play*. Repetid el proceso para las cuatro fichas, manteniendo el mismo inicio y acordando si el robot vuelve al inicio entre trayectos.

![MatataBot y torre reales del Coding Set junto a una maqueta de pueblo con cuatro destinos, barreras y tarjetas planas de animales.](../../_assets/situacions/sa-cs-animals-visites-s2-v1.webp)

_Los destinos, las barreras y las fichas son materiales de papel. Una persona coloca cada animal después de la llegada; el robot solo ejecuta las órdenes._

#### Fase 3 · Explicamos y registramos

Al llegar, la persona adulta o un alumno con el rol acordado coloca manualmente el animal dentro del bolsillo. Quien ha creado la frase la dice al grupo y el equipo anota animal, lugar, pista y ruta. MatataBot no coloca ni esconde la ficha.

#### Fase 4 · Aplicamos y mejoramos

Comparad dos pistas: ¿cuál ayuda más a distinguir los cuatro destinos sin decir directamente su nombre? Reescribid una frase demasiado parecida a otra y comprobad que cada animal queda asociado a un único lugar. En cada nueva ronda, cambiad los roles para que todas las personas planifiquen y programen.

Cuando las cuatro visitas funcionan por separado, encadenadlas como ampliación en una única secuencia, tal como sugiere el plan oficial. Si el kit y el modo utilizado ofrecen un bloque de música predefinida, el equipo puede añadirlo después de una llegada; es opcional y no sustituye la comprobación de la ruta. Una persona coloca manualmente cada ficha en la parada correspondiente.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** cuatro fichas escondidas, cuatro asociaciones animal–lugar y cuatro frases-pista registradas, más las rutas de ida. **Pregunta:** ¿qué parte de la historia nos ayuda a recuperar cada asociación?

### Sesión 3 · Recordamos y recuperamos las fichas (45 min)

#### Fase 1 · Activamos y predecimos

Cerrad los bolsillos y apartad el registro. Escuchad las cuatro frases-pista sin mostrar los lugares; cada alumno relaciona una frase con un destino y explica su predicción antes de tocar el robot.

![MatataBot y torre reales junto a una maqueta de cuatro lugares con bolsillos de papel cerrados y tarjetas de ruta.](../../_assets/situacions/sa-cs-animals-visites-s3-v1.webp)

_Las fichas quedan escondidas en los bolsillos. El alumnado recuerda y programa la ruta; una persona abre el bolsillo y comprueba la predicción._

#### Fase 2 · Exploramos y construimos

Elegid un destino y reconstruid de memoria la ruta de ida; después planificad cómo volver al inicio con las órdenes disponibles. Dibujad las dos secuencias en tarjetas separadas y comprobadlas sobre la cuadrícula antes de cargarlas en el tablero. Si el programa del modelo no permite guardar rutas, haced cada trayecto como una ejecución independiente.

#### Fase 3 · Explicamos y registramos

Ejecutad el trayecto y llegad al bolsillo indicado. Antes de abrirlo, verbalizad qué animal esperáis encontrar y qué frase lo justifica; la persona encargada abre el modelo y recupera manualmente la ficha. Anotad predicción, resultado y número de órdenes.

#### Fase 4 · Aplicamos y mejoramos

Repetid con los otros tres destinos. Cuando una ruta no llegue, comparad inicio, orientación, conteo y orden de giro. Si el destino es correcto pero la ficha esperada no, revisad primero la pista y la asociación de memoria; no cambiéis el programa para corregir un recuerdo equivocado.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** cuatro recuperaciones con predicción previa, justificación con la frase, ruta y resultado real. **Pregunta:** ¿cómo distinguimos un error de memoria de un error de programación?

### Sesión 4 · Inventamos un reto para otra clase (45 min)

#### Fase 1 · Activamos y predecimos

Cada equipo recibe una cuadrícula limpia y decide qué cuatro destinos locales usará. Predecid qué lugar será más fácil de encontrar y qué pista podría hacer recordar cada animal sin confundirlo con los demás.

#### Fase 2 · Exploramos y construimos

Diseñad cuatro bolsillos de papel y un recorrido con intersecciones claras. Una pareja prepara las rutas de ida y la otra comprueba que cada animal se puede entregar y recuperar desde el inicio con los bloques del kit. Escribid las cuatro historias-pista en tarjetas separadas y numeradlas según un código acordado, no según la solución.

#### Fase 3 · Explicamos y registramos

Intercambiad el reto con otra pareja: explicad solo las reglas, leed las pistas y dejad que el otro equipo deduzca los destinos, planifique las rutas y recupere las fichas. Registrad las preguntas que necesitan aclaración y el primer punto de cada ruta que no coincide con el mapa.

#### Fase 4 · Aplicamos y mejoramos

Revisad una pista ambigua o una intersección confusa y volved a probar el reto. Mantened las mismas distancias y el mismo punto de inicio durante la comparación; no cambiéis a la vez el mapa, la pista y el programa.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** reto completo con cuatro pistas, mapa, rutas de prueba y una revisión basada en el retorno de otro equipo. **Cierre:** cada grupo señala una cosa que ha recordado con la historia y una que ha comprobado con el robot.

## Evidencias y evaluación

Usad el registro para observar si el alumnado fija un inicio y una orientación; cuenta órdenes con coherencia; asocia las pistas con los destinos; formula una predicción antes de revelar la ficha; y depura por separado errores de recuerdo y de ruta. Guardad el mapa final, las cuatro historias, las secuencias de ida/vuelta y una nota de autoevaluación: «lo he planificado», «lo he podido recordar» y «he comprobado la ruta». Valorad la explicación y la cooperación, no la rapidez ni la memoria individual sin apoyos.

## Participación, accesibilidad y seguridad

Usad fichas grandes con forma y dibujo diferenciados, edificios con relieve y pistas orales, visuales o gestuales. Permitid consultar una tarjeta de apoyo en la primera ronda y retiradla solo si el alumno quiere probar el reto de memoria sin ayuda. Repartid roles que no obliguen a hablar delante de todo el grupo; se puede comunicar una pista señalando pictogramas. Mantened el mapa estable y plano, dejad una zona libre alrededor del robot y no pongáis piezas pequeñas en su trayectoria. La persona adulta gestiona las fichas escondidas y ninguna prueba consiste en adivinar datos personales o en exponer recuerdos del alumnado.

## Referentes y adaptación

- Matatalab, [*Deliver Animals*](https://matatalab.com/en/node/86): propone transportar cuatro animales a cuatro lugares comunitarios, revisar los bloques de movimiento, preparar el mapa y obstáculos, narrar cada llegada y probar como ampliación una ruta que visite los cuatro lugares en una ejecución. La propuesta conserva esta secuencia y contextualiza los destinos en un pueblo valenciano.
- Matatalab, [caso docente *Pick Me Up, Piggy!* (U.S. Preschool Case Study)](https://matatalab.com/en/node/428): describe un grupo de cuatro, cuatro animales de granja, cuatro lugares de la comunidad (biblioteca, pizzería, tienda de pintura y dentista), animales escondidos al llegar, una historia individual para recordar cada destino y una ronda posterior de recuperación programada. También observa que la cuadrícula del tablero facilita estimar cuántas órdenes de movimiento hacen falta. La situación traslada esta experiencia a una maqueta local propia con cuatro lugares diferentes, bolsillos de papel, registro de memoria y depuración; la fuente es un caso docente publicado, no un plan completo de unidad.
- MatataStudio, [guía del Coding Set](https://matatalab.com/en/node/60): consultad los bloques de movimiento y las instrucciones de colocación y ejecución del modelo disponible en el centro. El robot sigue las órdenes; la lectura de pistas, la ocultación de fichas y la recuperación son acciones humanas.

La ilustración de IA propia representa MatataBot y la torre de la dotación junto a una maqueta de papel. Los edificios, los bolsillos, las fichas y la ruta son materiales creados para esta propuesta, no elementos del kit ni capacidades del robot.
