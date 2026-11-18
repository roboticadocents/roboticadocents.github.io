---
active: true
title: "Una bienvenida con movimiento"
description: "¿Cómo podemos diseñar una máquina con SPIKE Prime que reciba a las personas con un movimiento amable y fácil de entender?"
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "llengua"
subject_label: "Lengua, Arte y Tecnología"
theme: "societat"
theme_label: "Acogida y convivencia"
duration: "5 sesiones · 250 min"
challenge: "¿Cómo podemos diseñar una máquina con SPIKE Prime que reciba a las personas con un movimiento amable y fácil de entender?"
---

![Un hub SPIKE Prime con matriz luminosa, motor y vigas LEGO mueve un brazo articulado que alza una bandera sin texto sobre una mesa clara.](../../_assets/situacions/sp-benvinguda.webp)

_El gesto se activa a distancia; el hub, el motor y las vigas representan componentes SPIKE Prime de la dotación._

## 🌱 Situación y intención

La biblioteca del centro recibe clases invitadas y quiere una señal visual de acogida que se pueda entender de lejos y que no exija ningún contacto físico. Cada equipo diseña un mecanismo SPIKE Prime con un movimiento de bienvenida: un saludo, una inclinación o una bandera que se alza y vuelve a la posición inicial. El robot es una maqueta de comunicación: no sustituye el saludo de las personas ni decide quién puede entrar.

El reto combina expresión visual, movimiento y programación. La pregunta central es cómo las decisiones sobre la forma, la amplitud y el ritmo cambian la lectura del gesto. Partimos de un espacio próximo —la biblioteca escolar— y pensamos también en cómo se podría recibir a un grupo visitante de otro centro de la localidad. No grabamos ni identificamos visitantes: las pruebas se hacen con tarjetas o con personas voluntarias que pueden observar desde la distancia y retirarse cuando quieran.

## 🎯 Objetivos y criterios de diseño

- Generar varias ideas de gesto y justificar cuál comunica mejor la acogida.

- Construir un brazo o una bandera articulada y relacionar la posición del motor con el movimiento observado.

- Comparar control por tiempo y control por rotaciones con repeticiones medibles.

- Programar una entrada y una respuesta con una parada clara y una posición de reposo segura.

- Recoger feedback sin juzgar la expresión personal de quien participa, y modificar el prototipo a partir de evidencias.

Antes del montaje, cada equipo define cómo comprobará estos criterios: el gesto se reconoce a distancia; el movimiento no resulta brusco ni invade el espacio personal; vuelve de manera repetible a una posición segura; y hay una alternativa si no se quiere activar el sensor o participar en la prueba.

## 📅 Secuencia didáctica · 5 sesiones de 50 minutos

### **Sesión 1 · ¿Qué hace que una bienvenida sea legible?**

#### Fase 1 · Activamos y predecimos

Observad tres tarjetas con gestos dibujados —brazo que saluda, bandera que se alza e inclinación breve— y describid qué veis sin adivinar intenciones. Predecid cuál se reconocerá mejor desde la distancia.

#### Fase 2 · Exploramos y construimos

En grupos, esbozad tres propuestas y anotad para cada una qué se mueve, quién inicia el movimiento, desde qué distancia se ve y cómo acaba. Comparad una forma amable y reconocible con una más abstracta.

#### Fase 3 · Explicamos y registramos

Elegid un gesto que se pueda representar con un motor y una pieza ligera. Marcad base, eje, parte móvil y recorrido máximo. Anotad quién inicia el movimiento y cómo llega a la posición segura de reposo.

#### Fase 4 · Aplicamos y mejoramos

Revisad el diseño con criterios de accesibilidad: la señal tiene que ser visible sin sonido y una tarjeta fija de bienvenida tiene que seguir disponible. No hace falta añadir una cara o unos ojos para que el movimiento comunique.

#### Fase 5 · Comprobamos y reflexionamos

Explicad por qué habéis seleccionado el gesto y cómo se puede entender a distancia. **Evidencia:** tres bocetos, anotaciones de lectura y selección argumentada.

### **Sesión 2 · Del giro del motor al gesto.**

#### Fase 1 · Activamos y predecimos

Elegid una bandera o un brazo articulado y dibujad el eje de rotación. Predecid qué recorrido hará la figura al moverse.

#### Fase 2 · Exploramos y construimos

Construid una base firme con un motor SPIKE Prime y un brazo o una bandera de cartón ligero sujeto con piezas del kit. Empezad con la articulación más simple. Desplazad el motor o cambiad la posición del eje para observar cómo varía el arco; medid su amplitud aproximada en una cuadrícula.

#### Fase 3 · Explicamos y registramos

Comparad una extensión corta con una larga y anotad recorrido, oscilación de la base y estabilidad al empezar y parar. Si hacéis una tijera con piezas en X, medid el alcance en reposo y desplegada.

#### Fase 4 · Aplicamos y mejoramos

Añadid una mano geométrica o una pieza terminal solo si ayuda a leer el gesto y no hace el montaje demasiado pesado. Revisad la estructura si es inestable; si hace falta, conservad la tijera como modelo de papel y haced el gesto con un brazo directo.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué configuración es más visible y estable a partir de las pruebas. **Evidencia:** montaje anotado, esquema del eje y comparación de dos formas.

### **Sesión 3 · Programamos el ritmo y la vuelta.**

#### Fase 1 · Activamos y predecimos

Escribid una secuencia: posición inicial, movimiento hasta una amplitud acordada, pausa breve y retorno. Predecid si el elemento llegará al punto previsto y volverá al reposo sin golpear el soporte.

#### Fase 2 · Exploramos y construimos

Programadla con bloques; si el grupo tiene experiencia, representadla también en Python. Cread dos versiones, una basada en tiempo y otra en rotaciones del motor, manteniendo constantes la forma y la velocidad.

#### Fase 3 · Explicamos y registramos

Ejecutad cada versión tres veces y registrad si el elemento llega al punto previsto y vuelve al reposo. Guardad pseudocódigo, captura o diagrama del programa.

#### Fase 4 · Aplicamos y mejoramos

Si el brazo no retorna o se mueve demasiado, cambiad una sola cosa —rotación, duración u orientación inicial— y repetid la prueba. Evitad acelerar el movimiento como primera solución.

#### Fase 5 · Comprobamos y reflexionamos

Comparad previsibilidad y repetibilidad entre tiempo y rotaciones. **Evidencia:** programa y tabla de tres ejecuciones. Como ampliación, programad dos movimientos con pausa y explicad qué se perdería si la pausa fuera demasiado corta.

### **Sesión 4 · Decidimos cuándo se activa.**

#### Fase 1 · Activamos y predecimos

Predecid a qué distancias tendría que activarse el gesto y cuántas veces tendría que responder mientras el objeto sigue delante del sensor. No apuntéis sensores a personas.

#### Fase 2 · Exploramos y construimos

Usad una tarjeta grande o un objeto de cartón delante del sensor de distancia SPIKE. Definid una distancia de activación y otra de separación y haced pruebas desde tres puntos marcados. Si el sensor no forma parte del set o no está disponible, usad el botón del hub o un inicio manual.

#### Fase 3 · Explicamos y registramos

Anotad las distancias, respuesta esperada y observada, y si el gesto se activa una vez o repetidamente. Registrad posibles errores: objeto demasiado pequeño, ángulo distinto, obstáculo del fondo o distancia fuera del rango probado.

#### Fase 4 · Aplicamos y mejoramos

Ajustad el umbral solo después de escribir qué esperáis que cambie. Comparad una entrada automatizada con una explícita; la alternativa manual mantiene el control de la persona y es igualmente válida.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué puede y qué no puede detectar el sistema. **Evidencia:** diagrama entrada/respuesta, tabla de distancias y nota sobre falsas activaciones. El sensor no identifica quién está delante ni si quiere interactuar.

### **Sesión 5 · Hacemos una prueba de uso y revisamos.**

#### Fase 1 · Activamos y predecimos

Preparad una demostración en una mesa estable. Una pareja que no ha construido el modelo observará el gesto desde un punto marcado y elegirá una tarjeta de retorno: «he entendido la señal», «el movimiento me ha sorprendido» o «prefiero la señal estática».

#### Fase 2 · Exploramos y construimos

Probad el gesto sin preguntar si el robot parece personalmente acogedor y sin grabar la respuesta. El grupo constructor recoge el retorno sobre el diseño y la legibilidad.

#### Fase 3 · Explicamos y registramos

Anotad qué ha observado el público y qué característica podría revisarse: amplitud, posición del motor, duración o forma terminal.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una sola característica y volved a probar el prototipo. Preparad un cartel con el gesto elegido, resumen del programa y una limitación.

#### Fase 5 · Comprobamos y reflexionamos

Comparad el montaje directo con el brazo de tijera, si se ha construido, y explicad qué versión es más estable y clara. **Evidencia:** prototipo revisado, retorno anónimo no identificable, cambio documentado y explicación oral o escrita.

## 🧰 Materiales y preparación

Set LEGO Education SPIKE Prime 45678 por pareja o equipo, hub cargado, un motor, piezas estructurales, cartón ligero para bandera o mano, papel cuadriculado, rotuladores, regla y tarjetas de feedback. Sensor de distancia opcional, solo si forma parte de la dotación y funciona en la versión local de la app; si no, el botón del hub es suficiente. No hace falta una expansión ni ningún objeto adicional que interactúe con el cuerpo.

Antes de la clase, probad el puerto y la orientación del motor, preparad una base estable y marcad una zona de movimiento segura. Dejad tarjetas de gesto disponibles para anticipar la secuencia y un modo manual para que el prototipo no dependa del sensor. Rotan los roles de diseño, montaje, programación, registro y observación; cada alumno puede aportar una prueba aunque no quiera activar ni ver el gesto en directo.

## 🧪 Evidencias y evaluación

Recoged bocetos y criterios, diagrama mecánico, código o pseudocódigo, comparación tiempo/rotaciones, registro de pruebas del sensor (si se usa), retorno de uso y revisión final. La rúbrica formativa observa:

- **Comunicación:** explica qué gesto quiere representar y justifica forma y amplitud con criterios observables.

- **Mecánica:** identifica eje y brazo, compara dos configuraciones y usa una medida para describir el cambio.

- **Programación:** implementa movimiento, pausa y retorno, y depura el comportamiento modificando una variable cada vez.

- **Prueba:** repite las ejecuciones en condiciones parecidas, documenta incidencias y aplica feedback sin identificar participantes.

- **Inclusión y seguridad:** conserva una alternativa estática/manual, delimita la zona y evita el movimiento hacia las personas.

Autoevaluación: «El gesto se lee desde…», «he elegido tiempo/rotaciones porque…» y «una alternativa que sigue disponible es…». El feedback se refiere al diseño y a la legibilidad, nunca a la personalidad o a las emociones de quien observa.

## ♿ Participación, cuidado y límites

Ofreced instrucciones escritas y visuales, demostración lenta y opción de anticipar los movimientos con tarjetas. El mensaje tiene que combinar movimiento con una señal estática visible; el sonido no es necesario. Las personas pueden observar desde la distancia que elijan, participar a través del registro o no acercarse al mecanismo. No uséis el sensor para detectar o seguir visitantes y no asociéis ningún movimiento con el estado de ánimo de las personas.

Probad el brazo a baja velocidad, sobre una superficie estable y sin nadie dentro de su recorrido. Detened y desconectad el hub antes de ajustar el eje o retirar piezas. El prototipo no es un sistema de control de acceso ni un dispositivo para espacios públicos; la recepción real sigue siendo responsabilidad de las personas del centro.

## 🔗 Referente oficial y adaptación

Partimos del [SPIKE Activity Brief: Greetings, Earthling](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt52090884117e954a/6324c3b5258fb55f6b2169d0/LE_14x8.5_LessonMat_GreetingsEarthling_WB_Mech_NoCrops.pdf?locale=en-us), elaborado con el Tufts Center for Engineering Education and Outreach. El brief propone saludar con un saludo de mano, un puño o un choque de manos; pensar cómo hacer un aspecto amable, dónde situar el motor para que el brazo se mueva con naturalidad, y controlar la cantidad de movimiento con tiempo o rotaciones. También sugiere añadir una mano, activarse con sensor ultrasónico y alargar el brazo con una tijera de piezas en X. Esta adaptación conserva ejes y extensiones, pero representa el gesto a distancia para no requerir contacto corporal. La narrativa de biblioteca, la secuencia, las pruebas, los criterios y la ilustración son propios; el sensor se ensaya solo con objetos.