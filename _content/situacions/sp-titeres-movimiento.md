---
active: true
title: "Títeres mecánicos de la Albufera"
description: "¿Cómo podemos transformar el giro de un motor en el movimiento expresivo de un títere que cuenta una historia local?"
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "artistica"
subject_label: "Educación Artística, Lengua y Tecnología"
theme: "art"
theme_label: "Relato, naturaleza y expresión"
duration: "5 sesiones · 250 min"
challenge: "¿Cómo podemos transformar el giro de un motor en el movimiento expresivo de un títere que cuenta una historia local?"
---

![Un hub SPIKE Prime con matriz de luces, un motor y vigas LEGO mueve un títere plano de pájaro de papel.](../../_assets/situacions/sp-titelles-moviment.webp)

_La silueta de papel es un personaje escénico; el hub y el motor visibles son componentes del set SPIKE Prime._

## 🌱 Situación e intención

La biblioteca escolar prepara una muestra de relatos breves del territorio. Los equipos crean un títere mecánico inspirado en la Albufera: puede ser un animal real representado a partir de una fuente pública, un paisaje personificado o una criatura inventada que se declara como ficción. La Generalitat presenta la Albufera como un parque natural con laguna, marjal, dehesa y costa; estas formas ofrecen ideas de color, ritmo y movimiento sin tener que copiar una especie concreta. Si un grupo usa su nombre, contrastadlo con recursos del [Parque Natural de la Albufera](https://parquesnaturales.gva.es/va/web/pn-l-albufera) y anotad la fuente.

El títere puede mover un pico o un ala, girar, inclinarse o aparecer detrás de una pantalla de papel. El hub y el motor SPIKE Prime hacen el movimiento; la figura es de cartón ligero. El reto conecta diseño, literatura, artes escénicas e ingeniería, y deja abierta la forma de contar: narración oral, subtítulos, secuencia de imágenes o sonido opcional.

## 🎯 Objetivos y criterios

- Descomponer un personaje en silueta, articulación, movimiento y secuencia narrativa.

- Construir una manivela o biela que transforme el giro del motor en un movimiento reconocible.

- Relacionar el punto de unión y la longitud del brazo con la amplitud y la trayectoria del títere.

- Programar pausa, repetición finita y comportamientos diferentes con los botones disponibles.

- Probar una escena con otra pareja, revisar el código o mecanismo y documentar una mejora.

- Representar fauna con respeto y distinguir un dato documentado de un elemento narrativo inventado.

Criterios de diseño: el movimiento se puede describir con un verbo; la estructura aguanta la figura sin cargar el motor; la secuencia tiene inicio y final reconocibles; el público dispone de una vía visual para seguir el relato; y el prototipo puede detenerse antes de tocarse o ajustarse.

## 📅 Secuencia didáctica · 5 sesiones de 50 minutos

### **Sesión 1 · Del lugar a un personaje.**

#### Fase 1 · Activamos y predecimos

Consultad un mapa o páginas divulgativas del Parque Natural de la Albufera. Elegid una idea visual —agua, cañaveral, dunas, barca o silueta animal— y preparad una tarjeta de fuente: qué hemos visto, qué sabemos por la fuente y qué inventaremos para el relato. Si representáis una especie, no le atribuyáis comportamientos biológicos sin fuente; también podéis crear una criatura ficticia y declararlo.

#### Fase 2 · Exploramos y construimos

Dibujad tres poses y asignad un verbo a cada una: alzar, girar, inclinar, avanzar o esconderse. En una tira de papel, marcad cuatro momentos del relato y decidid cuál necesita movimiento mecánico.

#### Fase 3 · Explicamos y registramos

Haced una animación desconectada pasando las figuras por una ventana de papel, sin representar el gesto con el cuerpo. Anotad el orden de las viñetas y el verbo asociado a cada pose.

#### Fase 4 · Aplicamos y mejoramos

Revisad las poses si el movimiento elegido no se distingue del personaje quieto. Separad los rasgos consultados en la fuente de los elementos inventados.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué momento necesita movimiento y qué aporta a la historia. **Evidencia:** tarjeta de fuente/ficción, bocetos y guion de cuatro momentos.

### **Sesión 2 · Del motor al títere.**

#### Fase 1 · Activamos y predecimos

Elegid un formato: títere de varilla con movimiento directo, silueta detrás de una pantalla o títere de hilos con un movimiento sencillo e hilos cortos sujetos. Dibujad el eje de rotación y predecid el recorrido de la figura.

#### Fase 2 · Exploramos y construimos

Construid primero el soporte y el punto de giro con cartón ligero. En SPIKE Prime, fijad un motor y una manivela o biela que haga avanzar y retroceder la varilla. El movimiento se puede resolver también con una varilla unida al brazo del motor.

#### Fase 3 · Explicamos y registramos

Probad dos longitudes de brazo o dos puntos de unión con una misma figura. Medid el arco aproximado en una cuadrícula y anotad si el títere gira demasiado, se queda corto o golpea el escenario.

#### Fase 4 · Aplicamos y mejoramos

Reducid la masa de la figura antes de aumentar la potencia. Ajustad el punto de unión o el brazo y volved a probar. Comprobad que la estructura aguanta sin cargar el motor.

#### Fase 5 · Comprobamos y reflexionamos

Comparad predicción y movimiento observado y explicad cómo la manivela transforma el giro en trayectoria. **Evidencia:** esquema mecánico, predicción y comparación de dos configuraciones.

### **Sesión 3 · Escribimos y probamos la partitura de código.**

#### Fase 1 · Activamos y predecimos

Antes de programar, redactad una secuencia con inicio, pausa y retorno: por ejemplo, «posición de reposo; alzar una vez; esperar; volver a reposo». Predecid dónde estará el títere al final.

#### Fase 2 · Exploramos y construimos

En bloques, programad una repetición finita para el gesto que se repite. Si el grupo ya trabaja con Python, usad un `for` con número limitado de repeticiones para la partitura principal. Estudiad `while` solo con condición de parada explícita y una acción corta; nunca con el motor atrapado en un bucle sin salida.

#### Fase 3 · Explicamos y registramos

Ejecutad a baja velocidad y marcad si cada paso coincide con la tarjeta del relato. Registrad pseudocódigo, programa o bloques y tres observaciones.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una variable por intento —rotaciones, duración o pausa— y comparad la previsibilidad. Verificad la app local antes de usar Python, ya que la sintaxis del brief depende de SPIKE Legacy.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué valor ha dado más control al movimiento y si la secuencia tiene inicio y final reconocibles. **Evidencia:** pseudocódigo, programa o bloques y tres observaciones comparables.

### **Sesión 4 · Botones, sonido y lectura del público.**

#### Fase 1 · Activamos y predecimos

Si la app local lo permite, asignad comportamientos diferentes a los botones A y B del hub, como una pose de atención y un movimiento de ala. Predecid qué pasará en cada caso; los botones crean variantes, no una puntuación o respuesta correcta.

#### Fase 2 · Exploramos y construimos

Preparad un guion de muestra y probad si la figura se puede leer desde dos lugares marcados del aula. Podéis sincronizar un sonido corto con el movimiento si la app y el dispositivo lo permiten; también es válido hacer el sonido en directo o usar una tarjeta visual. El sonido no es necesario para entender la escena.

#### Fase 3 · Explicamos y registramos

Otra pareja ve el ensayo sin recibir el título y elige qué verbo describe mejor el gesto. Recoged una pregunta concreta de mejora y anotad si el público ha podido seguir la escena por vía visual.

#### Fase 4 · Aplicamos y mejoramos

Revisad una pose, el control de un botón o la sincronización a partir del retorno. Mantened una alternativa visual para quien no use sonido.

#### Fase 5 · Comprobamos y reflexionamos

Comprobad si el movimiento se lee desde los dos puntos del aula. **Evidencia:** mapa de botones, prueba de sincronización o alternativa, retorno y nota de revisión.

### **Sesión 5 · Reescribimos y presentamos.**

#### Fase 1 · Activamos y predecimos

Elegid una mejora —modificar el mecanismo, cambiar el ritmo, añadir una pausa, reducir la figura o aclarar una tarjeta— y predecid qué cambiará en la lectura de la escena.

#### Fase 2 · Exploramos y construimos

Aplicad la mejora y repetid la escena. Preparad una presentación de dos minutos con el personaje, la fuente local si procede, explicación del movimiento, código o esquema y un límite del prototipo.

#### Fase 3 · Explicamos y registramos

Organizad una muestra en estaciones. La persona que presenta puede hablar, mostrar subtítulos o colocar tarjetas; otra puede operar el botón si quien narra no quiere tocar el equipo.

#### Fase 4 · Aplicamos y mejoramos

Usad el retorno para aclarar una parte de la narración o del mecanismo. Registrad un dato de la fuente que hayáis contrastado y una prueba que todavía falta.

#### Fase 5 · Comprobamos y reflexionamos

Comparad la primera escena con la revisada y completad: «una decisión artística que afecta al mecanismo», «un dato contrastado» y «una prueba pendiente». **Evidencia:** escena revisada, cartela y reflexión.

## 🧰 Materiales y preparación

Set SPIKE Prime 45678, hub, un motor, vigas y conectores; cartón o cartulina, varillas ligeras de papel, hilos cortos si se opta por un títere de hilos, pantalla de papel, cinta, rotuladores, tarjetas de guion y regla. Altavoz o sonido programado es opcional. No hace falta expansión; el movimiento se puede resolver con un motor y el hub.

Cargad los hubs, revisad la construcción y comprobad qué botones y órdenes de sonido están disponibles en la app local. Recortad figuras pequeñas y ligeras para que no sobrecarguen la transmisión. Preparad una copia impresa de una fuente del Parque Natural para los equipos sin internet y una plantilla de cuatro viñetas. Rotad los roles de autoría, construcción, programación, operación, narración y documentación.

## 🧪 Evidencias y evaluación

Carpeta de proceso: tarjeta de fuente o ficción, guion gráfico, esquema mecánico, hipótesis de movimiento, pseudocódigo/programa, registro de pruebas, retorno de audiencia y revisión final. Observad si el alumnado:

- distingue un dato consultado de una invención narrativa;

- explica cómo la manivela o biela transforma el giro en trayectoria;

- usa pausas, repeticiones limitadas y controles para dar intención al movimiento;

- prueba la escena desde perspectivas diferentes y ajusta una decisión a partir del feedback;

- comunica el relato con más de un canal y describe una limitación del prototipo.

Autoevaluación: «el movimiento se lee como… porque…», «la longitud/punto de unión que he elegido es…» y «para entender mi relato también puedo…». El feedback entre equipos concreta una fortaleza visual y una pregunta, no una valoración de la especie o de la interpretación personal.

## ♿ Participación y seguridad

Permitid narrar, subtitular, diseñar, programar, operar u observar; ningún rol exige actuar ante el público. Proporcionad guion en texto y pictogramas, contraste de siluetas y alternativa sin sonido. Los hilos deben ser cortos y no envolver manos o cuello; parad el motor antes de deshacer nudos o ajustar el eje. Mantened el mecanismo sobre una base firme, a baja velocidad, y alejad los dedos de las partes articuladas.

El títere no es un modelo científico de locomoción animal, y el robot no imita una especie. Si un personaje se basa en fauna local, la ficha diferencia rasgos consultados y elementos inventados; la actividad no requiere observar o molestar animales en su hábitat.

## 🔗 Brief oficial adaptado

Esta situación adapta el reto [SPIKE Activity Brief: Puppet Show](https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltec6e8b8eef367bb0/6324c3f02343d638c6940874/LE_14x8.5_LessonMat_Puppet_Show_WB_Mech2_NoCrops.pdf?locale=en-us) y su [ejemplo de código Python para el títere de varilla](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt0065e3f0ed027e5a/5f880121b8b59a77a945d126/le_activitybrief_puppet_show_python.pdf?locale=en-us). Conserva la creación de personajes y el diseño abierto, las ideas de títere de hilos, sombras y varilla, la pregunta biológica de cómo se mueven diferentes criaturas, la transformación del giro en movimiento lineal, la prueba/mejora, música, botones para movimientos alternativos, sonido simultáneo y bucles `for`/`while`. La narración de la Albufera, las tarjetas, las pruebas, la rúbrica y la ilustración son propias. El código Python del fabricante requiere SPIKE Legacy; se ofrece una secuencia de bloques equivalente.
