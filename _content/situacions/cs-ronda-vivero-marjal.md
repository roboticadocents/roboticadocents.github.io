---
active: true
title: "Una ronda por el vivero de la marjal"
description: "Diseñamos una ruta programada que pase alrededor de uno o más objetos del vivero escolar sin tocarlos."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "pensament-computacional"
subject_label: "Pensamiento computacional y medio"
theme: "entorn-local"
theme_label: "El vivero escolar de la marjal"
duration: "3 sesiones de 45 minutos"
challenge: "¿Cómo planificamos una ruta que pase alrededor de más de un objeto y llegue a la bandera si MatataBot no puede detectar ningún obstáculo?"
official_source: "https://matatalab.com/cdn/ff/IhHZwon10hgweb9Aqf4zXOcRD2XjU0s9E0F2sWyqps4/1637739725/public/2021-11/Coding%20Activity%20Cards.pdf"
---

![MatataBot y la torre de control reales del Coding Set recorren una cuadrícula alrededor de un plantel y una regadera de maqueta hasta una bandera.](../../_assets/situacions/cs-ronda-viver-marjal.webp)

_Ilustración IA propia basada en el kit real del Coding Set. Los objetos son marcas fijas que las personas colocan y el robot evita con una ruta previamente programada; no hay ningún sensor que los detecte._

## Situación, reto e intención

El grupo prepara una maqueta de vivero con un plantel, una regadera y una bandera que marca el espacio donde se dejarán las herramientas. MatataBot debe hacer una ronda alrededor de los objetos sin tocarlos y acabar en la bandera. Los objetos son materiales estáticos, no obstáculos que el robot pueda reconocer: el equipo observa el mapa, planifica y programa toda la ruta antes de empezar.

La propuesta adapta la tarjeta oficial **A-4 · MatataBot Guard** de las *Coding Activity Cards*. La tarjeta sitúa MatataBot y un juguete sobre una superficie plana, pide programarlo para que se mueva alrededor del objeto y propone como ampliación repetir la ruta con más de un juguete en un programa. Aquí el vivero, los marcadores, el mapa, el objetivo de bandera, el registro y las imágenes son propios. La ruta es intencional y fija: MatataBot no busca, detecta ni esquiva nada automáticamente.

**Pregunta guía:** ¿qué instrucciones nos permiten pasar alrededor de cada objeto y llegar a la bandera sin depender de que el robot detecte lo que hay en el mapa?

## Aprendizajes y vocabulario

- Representar objetos y destinos en una cuadrícula con inicio y orientación marcados.
- Diseñar una ruta que pase alrededor de un marcador sin tocarlo.
- Ampliar una secuencia para que pase alrededor de más de un objeto en un solo programa.
- Predecir, ejecutar y registrar el movimiento real, y revisar el primer punto de divergencia.
- Distinguir una ruta programada de una esquiva automática con sensores.

**Vocabulario clave:** marcador, obstáculo representado, ruta, contorno, inicio, orientación, giro, secuencia, bandera, prueba, depuración.

## Materiales y preparación

- Coding Set real: MatataBot, torre de control, tablero y bloques direccionales disponibles.
- Cuadrícula plana propia de 4 × 4 casillas; si se utiliza una cuadrícula física del kit, comprobad su escala y dimensiones antes de hacer predicciones.
- Un plantel de maqueta de base amplia, una regadera de papel o espuma y una bandera grande; deben ser objetos ligeros, estables, no punzantes y más altos que las ruedas.
- Ficha de robot de papel para planificar; mapa con las casillas libres, los objetos, la meta y la posición inicial del robot.
- Hoja de registro con **objetos**, **inicio/orientación**, **secuencia**, **casillas de paso**, **contacto sí/no**, **llegada a la bandera sí/no** y **cambio probado**.

Cargad MatataBot y la torre, fijad la cuadrícula y probad una secuencia corta sobre la misma superficie. Situad los objetos en el centro de casillas marcadas y dejad espacio de paso superior a la anchura del robot. No uséis agua real ni plantas vivas. Durante la prueba, retirad las manos de la cuadrícula; detened el robot antes de mover cualquier marcador.

## Secuencia didáctica

### Sesión 1 · Hacemos una ronda alrededor de un objeto (45 min)

#### Fase 1 · Activamos y predecimos

Presentad el vivero de maqueta, el plantel y la bandera. Preguntad cómo podría pasar el robot alrededor del plantel sin tocarlo. Comparad una ruta que pasa por delante con una que hace un recorrido por dos lados; el grupo señala inicio, orientación y final antes de programar.

#### Fase 2 · Exploramos y construimos

Colocad un único objeto en una casilla central y marcad la bandera en otra. En parejas, ensayad una ruta con la ficha de papel y colocad una flecha en cada cambio de orientación. Traducid después el recorrido a los bloques físicos del Coding Set, teniendo presente que un bloque de giro hace girar el robot sobre el sitio.

#### Fase 3 · Explicamos y registramos

Una persona lee la secuencia y la otra sigue la ruta. Marcad las casillas por donde pasará MatataBot y comprobad que la línea no atraviesa la casilla ocupada por el objeto. Escribid una predicción observable: «el robot pasará por estas casillas y no tocará el plantel».

#### Fase 4 · Aplicamos y mejoramos

Ejecutad la secuencia desde el mismo inicio. Observad si el robot pasa por los puntos previstos y mantiene separación del marcador. Si lo toca o se sale de la ruta, registrad la primera diferencia entre mapa y movimiento real, cambiad una sola orden y repetid la prueba con la misma disposición.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa anotado, programa de una ronda y registro del resultado. **Pregunta:** ¿cómo sabemos que el robot ha pasado alrededor del objeto y no simplemente por delante?

### Sesión 2 · Una ruta para el plantel y la regadera (45 min)

#### Fase 1 · Activamos y predecimos

Añadid una regadera de maqueta al mapa. Cada equipo predice cómo cambiará la ruta para que pase alrededor de los dos objetos y llegue a la bandera en una sola secuencia. Determinad qué casilla será el punto de giro más exigente.

#### Fase 2 · Exploramos y construimos

Volved a planificar la ruta con una ficha de papel, en este orden: iniciar, pasar alrededor del plantel, alejarse, pasar alrededor de la regadera y acabar en la bandera. Escribid toda la secuencia antes de ejecutarla; no dividáis el reto en dos programas independientes.

#### Fase 3 · Explicamos y registramos

Otra pareja verifica en el mapa que hay un tramo libre alrededor de cada objeto y que la ruta llega a la bandera. Registrad las casillas de paso y haced que quien ha programado explique qué instrucción inicia cada desvío alrededor de los marcadores.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad el programa completo. Si MatataBot toca un objeto, no lo retiréis para hacer pasar el robot: detenedlo, anotad el contacto y revisad la ruta. Podéis mover un marcador y repetir, pero tratadlo como una prueba nueva y actualizad el mapa antes de cambiar el código.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** ruta única con dos objetos, casillas previstas y observadas, y registro de cada contacto. **Pregunta:** ¿qué instrucción ha permitido rodear cada objeto en un mismo programa?

### Sesión 3 · Revisamos la ronda de otro equipo (45 min)

#### Fase 1 · Activamos y predecimos

Los equipos intercambian los mapas sin mostrar los programas. La pareja visitante predice una ruta posible y señala un lugar donde un giro impreciso podría acercar el robot demasiado al plantel o a la regadera.

#### Fase 2 · Exploramos y construimos

La pareja autora entrega la secuencia y la visitante la reconstruye con bloques o flechas. Si las casillas del mapa no permiten una interpretación clara, añadid orientación inicial, leyenda o coordenada; no interpretéis el movimiento del robot como una decisión autónoma.

#### Fase 3 · Explicamos y registramos

Ejecutad la secuencia con los dos objetos en las posiciones indicadas. La pareja visitante marca cada paso observado y confirma por separado **ha pasado por los dos lados de cada marcador**, **no ha habido contacto** y **ha llegado a la bandera**.

#### Fase 4 · Aplicamos y mejoramos

Devolved una observación concreta al equipo autor: una instrucción clara y un punto que conviene revisar. El equipo aplica un cambio y vuelve a probar el programa completo. Si los datos muestran que el robot se desplaza ligeramente, ajustad el margen de la ruta en el mapa y documentad el cambio.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia final:** mapa y programa revisados, comprobación por otra pareja y explicación del límite del kit. Cerrad con: «La ruta estaba planificada para que…» y «MatataBot no ha detectado los objetos; el equipo…».

## Evidencias y evaluación

Recoged los mapas de las dos rondas, las secuencias, la comparación entre predicción y resultado, y la revisión hecha después de la prueba externa. Observad si el alumnado:

- representa posición y orientación iniciales;
- traza una ruta que pasa alrededor del objeto sin atravesar su casilla;
- incorpora dos marcadores a un único programa;
- localiza y corrige una divergencia a partir de una observación concreta;
- explica que los objetos no son detectados automáticamente por el robot.

No evaluéis la rapidez, la ausencia de errores en el primer intento ni la habilidad motriz para manipular los objetos.

## Participación, accesibilidad y seguridad

Proporcionad mapas grandes, flechas táctiles, códigos de forma además del color y secuencias impresas. Se puede participar dibujando la ruta, leyendo bloques, observando el movimiento o registrando datos. Usad solo objetos ligeros y estables; dejad las manos fuera del recorrido mientras MatataBot está activo y detenedlo antes de cambiar un marcador. No planteéis el robot como un sistema de vigilancia o seguridad del vivero: es una secuencia programada dentro de una maqueta escolar.

## Referentes y adaptación

- Matatalab, [*Coding Activity Cards*, tarjeta A-4 · *MatataBot Guard* (PDF oficial)](https://matatalab.com/cdn/ff/IhHZwon10hgweb9Aqf4zXOcRD2XjU0s9E0F2sWyqps4/1637739725/public/2021-11/Coding%20Activity%20Cards.pdf): pide situar MatataBot y un juguete sobre una superficie plana, programar el robot para que se mueva alrededor del objeto y propone como extensión incluir más de un juguete en un programa. La muestra es parcial; la propuesta local concreta esta mecánica con dos marcadores estáticos y una meta.
- Matatalab, [*Hello Matatalab Robots!*](https://matatalab.com/en/node/88): referencia para verificar bloques direccionales, giros y orientación en la programación tangible del Coding Set.

La adaptación conserva la secuencia oficial de un juguete y la ampliación a más de un objeto en un programa. El vivero y sus elementos son una maqueta del entorno local; ningún objeto es detectado ni esquivado automáticamente, y la ruta se debe planificar antes de iniciar el robot.
