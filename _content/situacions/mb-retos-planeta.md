---
active: true
title: "Retos micro:bit para cuidar el entorno y las personas"
description: "Cinco retos oficiales de micro:bit adaptados con propuestas locales sobre biodiversidad, océanos, movimiento y seguridad vial."
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Ciencias y Ciudadanía"
theme: "sostenibilitat"
theme_label: "Retos de diseño con impacto"
duration: "10–15 sesiones · selección de retos"
challenge: "¿Qué prototipo podemos diseñar para responder a un reto real sin prometer una protección que la tecnología no puede garantizar?"
---

![Micro:bit real de la dotación del centro rodeada de cuatro maquetas de mesa: humedal, mapa oceánico, camino costero y pista escolar de pruebas.](../../_assets/situacions/mb-reptes-planeta.webp)

_Las escenas son maquetas de papel y cartón alrededor de la placa real; no representan dispositivos instalados, pruebas en tránsito o protección de fauna._

## 🌍 Cómo usar esta colección

Esta ficha adapta cinco retos de diseño de micro:bit, cada uno con sus actividades identificadas. El docente puede elegir un reto completo (dos o tres actividades) y dedicarle entre dos y tres sesiones por actividad. Empezad con investigación y criterios, seguid con pseudocódigo y prototipo, y cerrad con pruebas y comunicación de los límites. Los datos son simulados o de maquetas; no se hacen pruebas con fauna, personas en riesgo, calles abiertas ni agua real.

## 🐾 Reto 1 · Biodiversidad terrestre

Adapta [Protecting animals on land](https://microbit.org/teach/lessons/protecting-animals/) y sus dos actividades:

### **Detectives de especies (Spot the species).**

#### Fase 1 · Activamos y predecimos

Elegid un hábitat próximo y una pregunta sobre especies que el grupo pueda investigar con fuentes fiables. Predecid qué rasgos observables permitirían distinguir dos.

#### Fase 2 · Exploramos y construimos

Consultad fuentes seleccionadas y cread una clave de identificación con observaciones accesibles, como forma, tamaño aproximado o número de hojas, siempre que la fuente las documente. Elegid dos especies observables en un hábitat próximo —o dos especies de fichas docentes si no hay salida— y haced una tarjeta de leyenda. 

En MakeCode, cread dos contadores: el botón A suma una observación de la especie 1 y el botón B suma una observación de la especie 2. 

La micro:bit registra la acción de pulsar los botones; no reconoce ni identifica la especie.

```javascript
let especie1 = 0
let especie2 = 0

input.onButtonPressed(Button.A, function () {
    especie1 += 1
    basic.showNumber(especie1)
})

input.onButtonPressed(Button.B, function () {
    especie2 += 1
    basic.showNumber(especie2)
})

input.onGesture(Gesture.Shake, function () {
    basic.showString("E1")
    basic.showNumber(especie1)
    basic.showString("E2")
    basic.showNumber(especie2)
})
```

![Una micro:bit real de la dotación con tarjetas de dos especies del marjal, una clave de identificación y una ficha de registro de botones A y B.](../../_assets/situacions/sa-mb-comptador-especies.webp)

_La placa solo suma las observaciones que introduce una persona; las tarjetas y la leyenda son materiales propios._

#### Fase 3 · Explicamos y registramos

Probad cada botón tres veces, agitad la placa para consultar los dos totales y comparadlos con un recuento manual en papel. Haced una prueba con cero, una observación y una observación repetida; decidid cómo evitar contar dos veces el mismo indicio. Anotad especie, lugar general (sin coordenadas sensibles), fecha, fuente, criterio y si cada pulsación ha incrementado solo el contador correspondiente. Si usáis fichas, etiquetad el registro como simulado.

#### Fase 4 · Aplicamos y mejoramos

Comparad las clasificaciones entre equipos y revisad una descripción ambigua. Diferenciad el número registrado de la presencia real de la especie.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** clave, registro y fuente consultada. No publiquéis ubicaciones sensibles ni presentéis el recuento escolar como un censo de biodiversidad.

### **Alerta de protección del bosque (Anti-poaching collar).**

#### Fase 1 · Activamos y predecimos

La propuesta oficial parte de la caza furtiva y plantea explorar cómo la tecnología podría ayudar a proteger especies. Consultad una fuente de conservación y distinguid tres cosas: qué afirma la fuente, qué datos desconocemos y qué parte se podría representar en el aula sin acercarse a un animal. No supongáis que hay caza furtiva en vuestro municipio. En una historia ficticia de una reserva, formulad la pregunta: «¿Cómo podemos avisar a una persona responsable de que se ha activado una señal de prueba, sin afirmar que hemos detectado ningún peligro?»

#### Fase 2 · Exploramos y construimos

Haced una maqueta seca con una silueta plana de animal de cartón, una tira de papel alrededor —sin ponerla a ningún ser vivo— y dos micro:bit: emisora y estación receptora. El botón A será el único activador manual de la prueba; la placa no incorpora un sensor que detecte caza furtiva. En MakeCode, programad `radio.setGroup(42)` en ambas placas, enviad `PROVA-ALERTA` al pulsar A y haced que la receptora muestre un símbolo solo cuando reciba exactamente ese mensaje. El texto tiene menos de 19 caracteres, límite de `radio.sendString`. La radio funciona como un canal compartido: el mismo grupo permite comunicarse, pero no cifra ni autentica el mensaje.

```javascript
radio.setGroup(42)
input.onButtonPressed(Button.A, function () {
    radio.sendString("PROVA-ALERTA")
})
```

```javascript
radio.setGroup(42)
radio.onReceivedString(function (message) {
    if (message == "PROVA-ALERTA") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

![Dos placas micro:bit de la dotación se comunican por radio entre una estación de cartón y una mesa de control; al fondo hay un mapa esquemático y una silueta de fauna, sin ningún dispositivo sobre el animal.](../../_assets/situacions/sa-mb-radio-estacio-fauna-v2.webp)

_Es una maqueta escolar de comunicación activada manualmente: no se coloca ningún dispositivo sobre la fauna y el sistema no detecta animales ni incidentes._

#### Fase 3 · Explicamos y registramos

Ejecutad tres intentos por caso y registrad si la placa emisora envía, si la receptora muestra la aceptación o el rechazo y qué condición habéis cambiado. Probad: mensaje correcto y grupo igual; mensaje desconocido con el grupo igual; mensaje correcto con un grupo diferente; dos envíos seguidos; y ninguna pulsación de botón. Anotad «sin mensaje recibido» cuando no se activa el evento de recepción: no inventéis un tiempo de respuesta ni interpretéis el silencio como prueba de que todo está bien. Comparad los resultados con una tabla de predicción y observación.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una sola condición cada vez y depurad primero el caso de grupos diferentes; después, volved al mismo grupo e investigad los mensajes desconocidos y repetidos. Añadid una respuesta visual clara para «aviso de prueba recibido» y otra para «mensaje no reconocido». La radio envía mensajes a los dispositivos del mismo grupo, pero esta actividad no implementa confirmación de recepción garantizada, cifrado ni control de identidad. Por eso, cualquier aviso en el relato requeriría revisión humana y una vía de comunicación validada; la maqueta nunca ordena una intervención.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** diagrama emisor–canal–receptor, programa con el grupo compartido, tabla de los cinco casos con tres repeticiones y una explicación de un límite técnico y un límite ético. La propuesta adapta el reto oficial de crear una alarma sin reproducir sus materiales; las historias, la maqueta y el código son propios. El prototipo solo comunica una orden manual de prueba: no detecta caza, tala ni movimiento, no localiza fauna y no garantiza que cada mensaje llegue. No pongáis dispositivos en ningún animal. [La lección oficial Anti-poaching collar](https://microbit.org/teach/lessons/protecting-animals-poaching/) presenta un reto de diseño con radio para alumnado de 7–11 años; la adaptación mantiene este enfoque y cambia el despliegue animal por una simulación escolar segura. Como referencia técnica complementaria, la guía oficial [Investigating biodiversity](https://microbit.org/teach/playground-survey/investigating-biodiversity/) muestra dos contadores con variables, botones A/B y una consulta separada de los totales; aquí se adapta esta mecánica para dos contadores etiquetados por el equipo, sin atribuirla al código de la lección original.

## 🌊 Reto 2 · Criaturas marinas

Adapta [Saving sea creatures](https://microbit.org/teach/lessons/sea-creatures/):

### **Redes más selectivas (Light-up fishing nets).**

#### Fase 1 · Activamos y predecimos

Leed la descripción oficial del reto y definid *captura accidental* con un ejemplo verificado: una red captura una especie distinta de la que se quería pescar. Situad el caso en una lonja o puerto valenciano ficticio, sin atribuirlo a una cofradía concreta. En una cuadrícula, separad qué sabemos por la fuente, qué es una pregunta y qué querríamos probar con una maqueta. Pregunta guía: «¿Qué señal podría mostrar una red de prueba cuando baja la luz ambiental?»

#### Fase 2 · Exploramos y construimos

Construid una red de papel o cordel sobre una bandeja seca y usad fichas planas para representar especies; no pongáis animales vivos ni acerquéis la placa al agua. Programad la lectura ambiental con `input.lightLevel()` —la matriz LED hace también de sensor de luz— y empezad con el umbral oficial `50`: si la lectura es menor, mostrad un patrón de LED; de lo contrario, borrad la pantalla. Leed la luz antes de encender el patrón, porque la misma matriz hace también de entrada y de salida. Cada grupo puede cubrir parcialmente la placa con una cartulina para simular menos luz, sin envolverla ni taparla por completo.

![Una micro:bit de la dotación muestra una señal LED junto a una maqueta seca de red con fichas de pez, tortuga y ave, y una cartulina que simula sombra.](../../_assets/situacions/sa-mb-xarxes-llum-prototip.webp)

_Es un modelo de mesa con fichas planas: no prueba ni demuestra la eficacia de una red real._

#### Fase 3 · Explicamos y registramos

Haced al menos cinco pruebas en cada condición: placa descubierta, parcialmente sombreada y cubierta por la cartulina. Registrad la lectura `0–255`, si es `< 50`, `= 50` o `> 50`, el patrón esperado, el resultado observado y si la pantalla se ha borrado cuando tocaba. Repetid una prueba próxima al umbral y anotad si la luz del aula hace variar la lectura. Si hay micro:bit V2 o un altavoz externo disponible, probad el sonido como una salida separada y opcional; mantenedlo silenciado por defecto y no lo activéis cerca de oídos sensibles. V1 sin altavoz conserva el reto con los LED.

#### Fase 4 · Aplicamos y mejoramos

Comparad las pruebas entre equipos y cambiad solo una variable cada vez: umbral, duración de la señal o patrón LED. Si `50` activa el patrón demasiado a menudo o demasiado pocas veces con la luz del centro, probad un valor nuevo y justificadlo con las lecturas, no con una supuesta profundidad marina exacta. El sonido que muestra el tutorial oficial es una idea de prototipo; la clase no puede inferir de esta maqueta que las luces o el sonido evitan capturas reales. Mantened una versión sin sonido y asegurad que la señal visual se puede distinguir sin color.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** maqueta seca, programa con la condición, tabla de cinco o más pruebas, fuente consultada y una comparación antes/después del cambio elegido. Explicad qué mide la micro:bit, cómo se decide mostrar o apagar el patrón y qué resultado sigue sin poder afirmarse. No uséis animales ni probéis nada dentro del mar. El prototipo no está validado para pesca ni acredita que una luz o un sonido protejan fauna.

### **Playa segura para tortugas (Sea safe turtles).**

#### Fase 1 · Activamos y predecimos

Leed la propuesta oficial: las crías de tortuga utilizan la luz de la luna para orientarse hacia el mar, y las luces altas o brillantes pueden desorientarlas. Consultad una fuente de conservación y anotad qué afirmación proviene de la fuente y cuál es una pregunta del grupo. Situad el reto en una maqueta ficticia de camino costero valenciano, sin atribuir ningún problema concreto a una playa local. Predecid qué señal baja y discreta podría orientar a quienes caminan sin imitar una luna intensa.

#### Fase 2 · Exploramos y construimos

En una maqueta seca, colocad la micro:bit a la altura del camino, junto a una ficha que represente una persona caminando. Leed la luz ambiental con la matriz LED y usad `input.lightLevel() < 100` como umbral inicial oficial: en oscuridad, mostrad un icono propio de tortuga en la matriz; con luz igual o superior a 100, borradlo. Tomad la lectura antes de mostrar el icono y repetid el ciclo cada dos segundos, como en el proyecto de referencia. No añadáis una luz alta, parpadeos ni una linterna real; la pantalla es un indicador de maqueta, no una luz de camino homologada.

![Una micro:bit de la dotación muestra un icono rojo de tortuga junto a un marcador bajo en una maqueta seca de camino costero.](../../_assets/situacions/sa-mb-tortugues-platja-microbit.webp)

_La imagen representa un prototipo de mesa; no es un dispositivo desplegable ni una luz validada para playas._

#### Fase 3 · Explicamos y registramos

Haced cinco lecturas o más en cada una de tres condiciones: placa descubierta, sombreada y con luz intermedia. Anotad `0–255`, si la lectura queda `< 100`, `= 100` o `> 100`, qué patrón se espera y si la pantalla queda oscura cuando toca. Mostrad el icono a otra pareja y preguntad qué interpreta sin darle la respuesta; registrad si ve la tortuga y si entiende que es un símbolo de maqueta, no una instrucción de caminar por una playa real.

#### Fase 4 · Aplicamos y mejoramos

Si el icono no se entiende, cambiad un detalle y volved a probarlo; si la lectura activa la pantalla demasiado pronto o tarde con la luz del aula, cambiad solo el umbral y repetid los casos próximos al valor nuevo. Comparad un patrón estático con una opción sin luz, y justificad cuál comunica mejor con menos salida luminosa. No comparéis la intensidad LED de la placa con una luminaria real ni afirméis que una luz roja concreta es segura para las tortugas: esta propiedad no se ha probado en la maqueta.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** programa con selección `< 100`, icono propio, tabla de lecturas y una decisión argumentada entre patrón, luz mínima o ausencia de luz. Explicad qué mide la placa, cómo se muestra o se borra el icono y qué afirmación de protección no podemos hacer. El proyecto es un prototipo educativo inspirado en la fuente, no una luz que proteja tortugas ni una autorización para intervenir en una playa.

## 🏃 Reto 3 · Actividad con autonomía

Adapta [Being active](https://microbit.org/teach/lessons/being-active/) con tres actividades:

### **Recordatorio elegido por el usuario (Fitness friend).**

#### Fase 1 · Activamos y predecimos

La propuesta oficial pide diseñar y probar un dispositivo wearable que recuerde hacer actividad física a intervalos regulares. Adaptad la idea a una pausa voluntaria durante un rato de trabajo: un aviso puede ofrecer una opción de movimiento suave, estiramiento sentado o descanso, pero no decir qué debe hacer cada persona. Leed la descripción oficial y haced una lista de decisiones de diseño: quién activa el recordatorio, cómo lo cancela, qué mensaje aparece y qué datos no hace falta registrar. Predecid qué debe pasar si nadie lo activa o si la persona pulsa el botón de parada.

#### Fase 2 · Exploramos y construimos

Antes de programar, escribid el algoritmo: inactivo al iniciar; A activa el temporizador; cuando transcurre el intervalo de prueba, muestra un icono breve; B lo detiene y borra la pantalla. Usad una placa sobre una mesa o un soporte de cartón como el de la imagen, no hace falta llevarla al cuerpo. El valor de 10 segundos del código solo facilita probarlo en clase; cada usuario puede cambiar el intervalo y el aviso no prescribe ejercicio.

```javascript
let enabled = false
let lastReminder = 0
let interval = 10000 // interval curt només per a la prova

input.onButtonPressed(Button.A, function () {
    enabled = true
    lastReminder = control.millis()
})
input.onButtonPressed(Button.B, function () {
    enabled = false
    basic.clearScreen()
})

basic.forever(function () {
    if (enabled && control.millis() - lastReminder >= interval) {
        lastReminder = control.millis()
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(800)
        basic.clearScreen()
    }
    basic.pause(100)
})
```

![Una micro:bit de la dotación en un soporte amplio de cartón con botones visuales de inicio y parada y una secuencia de pictogramas que ofrece una pausa o un estiramiento sentado.](../../_assets/situacions/sa-mb-fitness-friend-control.webp)

_Prototipo de mesa con inicio y parada voluntarios; no mide la actividad ni recomienda una rutina de salud._

#### Fase 3 · Explicamos y registramos

Preparad una tabla de prueba con estado inicial, entrada, tiempo simulado, resultado esperado y resultado observado. Comprobad al menos: dejar el dispositivo inactivo; pulsar A y esperar menos de 10 segundos; esperar hasta que aparezca el aviso; pulsar B antes del aviso; pulsar B después del aviso; y volver a pulsar A después de detenerlo. Repetid cada caso tres veces y registrad si la pantalla queda apagada cuando el sistema está inactivo. Pedid a otra pareja que interprete el mensaje, sin pedirle que haga ningún ejercicio.

#### Fase 4 · Aplicamos y mejoramos

Si el mensaje parece una orden, cambiadlo por una invitación que incluya la opción «ahora no». Probad un intervalo diferente y calculad cuánto tarda cada variante, pero no comparéis personas ni registros de actividad. Depurad cualquier caso en el que B no detenga el programa; revisad también que reiniciar con A empiece un intervalo nuevo y que el recordatorio no se acumule cuando el dispositivo estaba detenido. El soporte físico debe dejar los botones accesibles y no atrapar la placa ni dificultar desconectar la batería.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** algoritmo anotado, programa con temporizador y control de parada, prototipo de mesa, resultados de los seis casos y una revisión del mensaje tras recibir feedback. La fuente oficial trata de wearables y recordatorios regulares; esta versión local transforma el aviso en una invitación cancelable con alternativas equivalentes. No mide pulso, movimiento ni rendimiento, no guarda datos personales, no prescribe actividad física y no evalúa a quien participa. Consultad las necesidades de accesibilidad con la persona usuaria y mantened siempre la opción de no empezar o parar. [Fitness friend](https://microbit.org/teach/lessons/being-active/) es la primera actividad de la unidad oficial *Being active*.

### **Medición crítica del pulso (Heart rate monitor).**

#### Fase 1 · Activamos y predecimos

La ficha oficial plantea observar cómo actividades diferentes pueden afectar la frecuencia cardíaca y diseñar, probar y evaluar un prototipo con micro:bit. Convertid el reto en una investigación de sistemas: ¿qué entrada detecta el dispositivo, cómo filtra la señal, qué cálculo hace y qué muestra? Separad «contar eventos de una vibración de prueba» de «medir el pulso de una persona». La micro:bit no incorpora un sensor cardíaco; su acelerómetro registra movimiento. Predecid qué vibraciones artificiales podrían confundirse con un latido y qué conclusiones serían injustificadas.

#### Fase 2 · Exploramos y construimos

Fijad la placa en un soporte estable de cartón sobre la mesa y definid un protocolo de señal conocida: primero 10 segundos sin tocar nada, después una serie de toques ligeros junto al soporte y finalmente silencio. No coloquéis la placa sobre el cuerpo ni golpeéis los componentes. Registrad la aceleración en reposo y durante los toques; elegid un umbral entre las dos distribuciones solo si las medidas se separan lo suficiente. Si se solapan, anotad que el sensor no discrimina la señal con fiabilidad. El algoritmo de muestra cuenta solo el flanco de subida, espera que la señal baje del umbral antes de volver a contar y convierte los eventos de una ventana de 10 segundos en eventos por minuto (`recuento × 6`).

```javascript
let threshold = 1050 // valor inicial de prova; calibreu-lo amb el vostre muntatge
let detected = false
let count = 0
let started = input.runningTime()

basic.forever(function () {
    let signal = input.acceleration(Dimension.Strength)
    if (signal > threshold && !detected) {
        count += 1
        detected = true
    }
    if (signal <= threshold) {
        detected = false
    }
    if (input.runningTime() - started >= 10000) {
        basic.showNumber(count * 6) // esdeveniments simulats per minut, no bpm
        count = 0
        started = input.runningTime()
    }
    basic.pause(20)
})
```

![Una micro:bit de la dotación, fija en un soporte de cartón, registra toques simulados en la mesa mientras la pantalla LED y una hoja muestran un patrón de aceleración de prueba.](../../_assets/situacions/sa-mb-heart-rate-accelerometre.webp)

_Prueba de movimiento sobre una mesa. El número mostrado es una extrapolación de toques simulados, no una frecuencia cardíaca._

#### Fase 3 · Explicamos y registramos

Preparad una matriz de pruebas con cinco situaciones: montaje quieto durante 10 segundos; 10 toques lentos conocidos; 10 toques más rápidos; una sacudida no periódica; y una segunda ejecución quieta después de mover el soporte. Haced tres repeticiones por caso y registrad el umbral, el número de detecciones, lo esperado, el resultado y los falsos positivos/negativos. Comparad el recuento con los toques previstos y calculad el error absoluto del modelo; escribid el resultado como «eventos simulados por minuto», nunca como `bpm`. No midáis el pulso de compañeros, no hagáis la actividad después de ejercicio ni guardéis datos biométricos.

#### Fase 4 · Aplicamos y mejoramos

Cambiad solo el umbral o el tiempo de bloqueo entre detecciones, no ambos a la vez, y repetid las pruebas lenta, rápida y de sacudida. Analizad el compromiso: un umbral bajo puede contar ruido; un umbral alto puede perder toques pequeños. Si los dos tipos de señal continúan confundiéndose, cambiad la conclusión y explicad que la maqueta no cumple un criterio de monitorización. Como ejercicio de datos, comparad series ficticias o una tabla pública seleccionada por el docente, siempre con origen identificado; distinguid correlación, muestra e inferencia, sin deducir salud individual.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** diagrama entrada–proceso–salida, programa con umbral calibrado, registro de cinco situaciones con tres repeticiones y una decisión sobre si el modelo pasa los criterios de prueba. La propuesta oficial pide explorar el corazón y prototipar un monitor; esta adaptación mantiene el trabajo de acelerómetro, cálculo y display como banco de pruebas con vibraciones simuladas. La IET describe, en un recurso técnico complementario para 11–14 años, un prototipo de acelerómetro, pantalla LED y cálculo aproximado, pero ninguna de las dos fichas convierte la placa en instrumento clínico. El montaje de aula no mide pulso real, no evalúa el efecto del ejercicio en el alumnado y no permite diagnósticos; no lo llevéis al cuerpo ni publiquéis datos de salud. [Heart rate monitor](https://microbit.org/teach/lessons/heart-rate-monitor/) es la segunda actividad oficial de *Being active*; el recurso complementario de la [IET](https://education.theiet.org/secondary/teaching-resources/design-a-personal-heart-monitoring-system-microbit) detalla el flujo de diseño con acelerómetro.

### **Contador de un trayecto (Walking for water).**

#### Fase 1 · Activamos y predecimos

Partid del acceso cotidiano al agua potable en el centro y contrastadlo con una fuente pública sobre niños y niñas que tienen que hacer trayectos para obtenerla. La situación oficial *Walking for water* (7–11 años) propone diseñar un contador de pasos; no convirtáis esa experiencia en una carrera ni la comparéis como si una ruta escolar valenciana fuera equivalente. Preguntad qué puede mostrar un contador y qué deja fuera: disponibilidad, carga, terreno, tiempo y condiciones de vida.

#### Fase 2 · Exploramos y construimos

Construid un contador de pulsos simulados con la micro:bit. Cada pulsación de A representa una ficha que avanza una casilla en un itinerario de papel entre el aula y un punto de agua del centro; B reinicia el total. Este modelo permite practicar la variable y el evento sin llevar la placa al cuerpo, caminar ni cargar agua. No lo llaméis medidor de pasos reales: el programa no lee el movimiento de la persona.

```javascript
let polsosSimulats = 0

input.onButtonPressed(Button.A, function () {
    polsosSimulats += 1
    basic.showNumber(polsosSimulats)
})

input.onButtonPressed(Button.B, function () {
    polsosSimulats = 0
    basic.clearScreen()
})
```

![Una micro:bit de la dotación junto a un itinerario de papel con fichas de pulsos y gotas de agua, preparado como simulación de mesa.](../../_assets/situacions/sa-mb-comptador-trajecte.webp)

_Cada pulso es una entrada manual de prueba; no representa los pasos ni la experiencia real de ninguna persona._

#### Fase 3 · Explicamos y registramos

Ejecutad cuatro series de 0, 1, 5 y 10 pulsos. Una persona pulsa A, otra mueve una ficha por cada pulsación y una tercera anota el recuento manual; después, consultad el total con B y comparadlo. Repetid una serie con dos pulsaciones seguidas y comprobad que el programa suma dos entradas, no una distancia ni un tiempo. Registrad cada resultado como «pulsos simulados».

#### Fase 4 · Aplicamos y mejoramos

Revisad dobles pulsaciones y borrados, y explicad qué representa y qué no representa cada pulso simulado. Comparad el plano del centro con la información de la fuente sin calcular distancias o cargas a partir del modelo. Conectad el debate con el acceso equitativo al agua potable sin dramatizar ni representar físicamente el esfuerzo de otros niños y niñas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** código funcional, cuatro series de pulsos simulados, comparación con el registro manual, fuente consultada y una reflexión sobre lo que el contador no mide. La propuesta adapta el objetivo oficial de diseñar un contador y cambia su entrada por una simulación accesible; no afirma que mida pasos reales. No convirtáis experiencias de pobreza en juego ni hagáis competiciones de distancia. [Walking for water](https://microbit.org/teach/lessons/walking-for-water/) es la tercera actividad oficial de *Being active*.

## 🌙 Reto 4 · Visibilidad y desplazamientos nocturnos

Adapta [Night safety](https://microbit.org/teach/lessons/night-safety/) en tres prototipos:

### **Recordatorio de visibilidad (Night sensor).**

#### Fase 1 · Activamos y predecimos

El reto oficial pide comprender los riesgos de visibilidad nocturna y diseñar un *Night sensor* que recuerde «Be Safe: Be Seen». Leed la descripción de [micro:bit Foundation](https://microbit.org/teach/lessons/night-sensor/) y consultad una fuente pública de seguridad vial. En una situación ficticia de camino escolar, distinguid visibilidad, iluminación y seguridad: una señal no evita colisiones ni sustituye infraestructura, supervisión o elementos homologados. Acordad tres criterios observables para el prototipo de mesa: activarse con un umbral acordado, mostrar un símbolo fácil de identificar y poder comprobar en qué condiciones falla.

#### Fase 2 · Exploramos y construimos

Situad la micro:bit sobre una maqueta de cartón junto a una bolsa de papel; haced sombra con una tarjeta, nunca con una linterna potente apuntada a los ojos. La lectura [`input.lightLevel()`](https://makecode.microbit.org/reference/input/light-level) usa la matriz LED como sensor aproximado de 0 a 255, no un sensor de luz separado. En V1 y V2, la placa y su orientación pueden cambiar la lectura; en V2 se puede cubrir la fila superior y obtener una lectura próxima a cero ([detalle técnico oficial](https://support.microbit.org/support/solutions/articles/19000024023-how-does-the-light-sensing-feature-on-the-micro-bit-work-)). Vaciad la pantalla antes de medir y haced una primera lectura de calentamiento, porque la primera llamada puede devolver cero. El umbral `80` de este ejemplo es una elección local de partida, que se debe calibrar en el aula; no es una cifra oficial ni una norma de seguridad.

```javascript
let llindar = 80
basic.clearScreen()
basic.pause(500)
input.lightLevel() // lectura inicial: pot retornar 0
basic.pause(200)

basic.forever(function () {
    basic.clearScreen()
    basic.pause(200)
    let nivell = input.lightLevel()
    if (nivell < llindar) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(700)
    }
    basic.clearScreen()
    basic.pause(700)
})
```

El icono solo queda encendido brevemente después de cada lectura para no mantener la matriz iluminada mientras se vuelve a medir. Esta secuencia es una demostración de umbral, no una luz portátil continua ni un dispositivo para circular.

![Una micro:bit de la dotación mide la luz sobre la mesa junto a una bolsa de papel y una maqueta de paso de peatones; una tarjeta crea una sombra controlada.](../../_assets/situacions/sa-mb-night-sensor-maqueta.webp)

_La maqueta permite probar el umbral en condiciones controladas; no se utiliza en ningún trayecto real._

#### Fase 3 · Explicamos y registramos

Haced cinco lecturas en cada una de tres condiciones repetibles: luz del aula, sombra parcial con cartón y sombra más amplia. Antes de cada intento, dejad la pantalla apagada, esperad 200 ms y anotad la lectura, el estado esperado del icono y el resultado observado. Añadid dos casos de frontera: lectura igual al umbral y una próxima por encima. Comparad el icono con una muestra de material reflectante bajo la misma luz; registrad cuál se ve mejor desde tres lados del modelo y no confundáis una prueba a corta distancia con visibilidad vial.

#### Fase 4 · Aplicamos y mejoramos

Cambiad solo una decisión por iteración: umbral, icono o duración del aviso. Repetid los mismos casos y comparad falsas activaciones, ausencia de aviso y facilidad de interpretación. Si la lectura cambia al girar la placa, documentad la orientación y explicad que la matriz LED también hace de salida. Pedid a otra pareja que identifique qué significa el símbolo sin darle pistas. No probéis el prototipo en una persona ni en un desplazamiento real.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** programa MakeCode, tabla de quince lecturas con condiciones y orientación, comparación con el reflector y una decisión de mejora justificada por resultados. Explicad al menos dos límites: la lectura de la matriz es aproximada y sensible a la posición; una micro:bit no es un elemento homologado ni garantiza que una persona sea vista.

### **Rueda visible en maqueta (Flashing wheels).**

#### Fase 1 · Activamos y predecimos

La lección oficial propone diseñar, probar y presentar un prototipo de luz intermitente para mejorar la visibilidad nocturna de una persona usuaria de silla de ruedas. Leed sus objetivos en [Flashing wheels](https://microbit.org/teach/lessons/flashing-wheels/), consultad criterios de diseño inclusivo y separad qué podemos evaluar en una maqueta de lo que solo puede valorar una persona usuaria en contexto real. No pidáis al alumnado que simule una discapacidad ni habléis en nombre de personas con experiencias diferentes. Acordad requisitos de prototipo: señal distinguible, control de encendido/apagado accesible, ausencia de parpadeos rápidos y ninguna pieza que pueda tocar ruedas o engancharse.

#### Fase 2 · Exploramos y construimos

Construid una rueda y una estructura de cartón, con una micro:bit fijada al soporte de mesa, no a una silla real. En la versión base, la matriz muestra un icono durante un segundo y queda apagada durante un segundo; A activa la secuencia y B la detiene. Este patrón lento es solo para comparar diseños en clase, no una recomendación para el tráfico. Un LED externo es una ampliación opcional: solo usadlo con la resistencia adecuada, conexión revisada por una persona adulta y placa desconectada durante el montaje.

```javascript
let activa = false
input.onButtonPressed(Button.A, function () {
    activa = true
})
input.onButtonPressed(Button.B, function () {
    activa = false
    basic.clearScreen()
})

basic.forever(function () {
    if (activa) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    } else {
        basic.clearScreen()
        basic.pause(100)
    }
})
```

![Micro:bit de la dotación sobre una maqueta de silla de ruedas de cartón, junto a muestras reflectantes y una ficha de comprobación de ángulos.](../../_assets/situacions/sa-mb-flashing-wheels-maqueta.webp)

_La placa y las muestras solo se prueban en un modelo de mesa, nunca sobre una silla real o en circulación._

#### Fase 3 · Explicamos y registramos

Ejecutad cinco intentos de encendido con A y cinco de parada con B; anotad si el estado observado coincide con el esperado. Situad el modelo en tres orientaciones y observad la matriz desde delante, lado y detrás; repetid con luz ambiental diferente. Registrad visibilidad de la pieza reflectante, señal LED, estabilidad del soporte y si se puede detener sin mover el modelo. La prueba mide solo la maqueta y el punto de vista del aula, no una distancia de detección en carretera.

#### Fase 4 · Aplicamos y mejoramos

Comparad dos soluciones: reflector sin código y matriz programada con reflector. Pedid retorno a una pareja que no haya construido el modelo; revisad una característica por turno (posición, estabilidad, patrón o control) y volved a probar los mismos casos. Si alguna persona necesita evitar luz intermitente, usad la versión estática o solo el reflector. No aumentéis frecuencia ni intensidad para «ganar» visibilidad.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** prototipo de cartón, programa con controles A/B, tabla de encendido/parada, registro de visibilidad en tres orientaciones y cambio hecho tras el retorno. Presentad qué no se ha probado: uso por una persona real, fijación segura, visibilidad a distancia y adecuación normativa. No se utiliza en tráfico real ni representa la experiencia de una persona usuaria.

### **Bolsa para un trayecto (A bag for Juliane).**

#### Fase 1 · Activamos y predecimos

La [propuesta oficial *A bag for Juliane*](https://microbit.org/teach/lessons/a-bag-for-juliane/) cuenta que Juliane, una niña refugiada de Zimbabue, ha llegado a Inglaterra y plantea diseñarle una bolsa más visible para el camino a la escuela. Presentad la historia con respeto, sin dramatizarla ni pedir a nadie que comparta experiencias propias de migración o refugio. Después, trasladad el reto de diseño a un itinerario ficticio de barrio valenciano: quien usa la bolsa elige qué necesita y puede rechazar cualquier función. Distinguid ayuda visual, reflector y medidas comunitarias de seguridad.

#### Fase 2 · Exploramos y construimos

Cread una bolsa de papel o una muestra plana de tela, tres opciones reflectantes y un soporte de cartón para la micro:bit. En el modelo base, A muestra un icono y B lo apaga: la señal es una función que el usuario controla, no un rastreador ni una baliza de localización. El reflector funciona sin placa y queda como alternativa si el centro no tiene micro:bit disponible.

```javascript
basic.clearScreen() // comença sense senyal actiu

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
```

![Micro:bit de la dotación junto a una bolsa de cartón, materiales reflectantes y un itinerario escolar ficticio dibujado como maqueta.](../../_assets/situacions/sa-mb-bag-juliane-prototip.webp)

_El mapa y la bolsa son modelos didácticos; no muestran una dirección ni un recorrido real de Juliane o de ningún alumno._

#### Fase 3 · Explicamos y registramos

Al encender la placa, comprobad primero que la matriz está apagada. Haced una prueba de mesa con la bolsa sin añadidos, con reflector, con icono LED y con reflector más icono. Desde delante, detrás y un lado, anotad qué se ve con luz de aula y en sombra parcial, si A activa la señal y si B la apaga. Repetid tres veces y mantened la misma distancia y posición de la luz; no uséis oscuridad completa, personas en movimiento ni linternas dirigidas a los ojos. Registrad también una limitación del diseño que no sea resoluble con la placa, como el trazado, el alumbrado o el acompañamiento.

#### Fase 4 · Aplicamos y mejoramos

Otra pareja revisa si la señal es reconocible, si la persona ficticia conserva el control y si la bolsa evita datos personales. Cambiad una sola pieza —posición del reflector, tamaño del símbolo o control— y repetid la prueba. Preparad un mensaje corto para una audiencia escolar que presente la mejora sin prometer seguridad: comparad qué puede hacer un objeto individual y qué depende del entorno, la accesibilidad y las decisiones comunitarias.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** bolsa de papel, programa con activación y cancelación, matriz de resultados de cuatro versiones, retorno de una pareja y mensaje público con límites. Conservad el contexto de la historia oficial sin convertirlo en juego de roles: la actividad escolar no resuelve la situación de refugio ni garantiza un trayecto seguro. La seguridad depende también del entorno y de las responsabilidades colectivas.

## 🐬 Reto 5 · Salud de los océanos

Adapta [Healthy oceans](https://microbit.org/teach/lessons/healthy-oceans/) y las actividades avanzadas:

### **Red de sensores en maqueta (Ocean health monitor).**

#### Fase 1 · Activamos y predecimos

La ficha oficial propone construir prototipos de sensores inalámbricos para representar el oleaje y el tiempo marítimo, entender la transmisión de datos y situar los nodos dentro de una red con pasarela. Conectad el reto con el ODS 14 y mostrad un mapa esquemático de la costa valenciana, sin atribuirle ninguna lectura ni problema ambiental real. Cada equipo recibe valores ficticios (por ejemplo, «ola = 3» y «viento = 2», sin unidades físicas) y predice qué registro debería llegar a una estación receptora.

#### Fase 2 · Exploramos y construimos

Construid una red de mesa con dos micro:bit como nodos, una tercera como pasarela y un mapa de papel. Usad el mismo grupo de radio, pero nombres de campo diferentes para identificar los datos simulados. En MakeCode, el botón A envía una muestra manual: una placa envía `ONA` y valor `3`; la otra envía `VENT` y valor `2`. La pasarela recibe el par nombre–valor y lo muestra. Los valores no tienen unidades ni provienen de sensores: la micro:bit no es por sí misma un sensor de mareas, viento o temperatura marina.

```javascript
radio.setGroup(42)
input.onButtonPressed(Button.A, function () {
    radio.sendValue("ONA", 3)
})
```

```javascript
radio.setGroup(42)
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showNumber(value)
})
```

![Dos micro:bit de la dotación funcionan como nodos con datos simulados de oleaje y tiempo marítimo y envían muestras por radio a una tercera placa en una maqueta seca de pasarela hacia Internet.](../../_assets/situacions/sa-mb-ocean-health-network.webp)

_El mapa, los iconos y los valores son una simulación escolar; no se ha conectado ningún sensor marino ni ningún servicio de Internet._

#### Fase 3 · Explicamos y registramos

Haced tres intentos por cada uno de los dos nodos y anotad en una tabla: nombre del campo, valor enviado, valor mostrado por la pasarela, orden de recepción y si el mensaje se ha recibido. Añadid pruebas con un nombre desconocido, valores repetidos, un nodo configurado en un grupo diferente y ninguna pulsación de botón. Comparad la predicción con el resultado observado. En el diagrama, trazad el recorrido «nodo → radio → pasarela → representación de Internet» y marcad claramente que el último tramo solo es una maqueta de papel.

#### Fase 4 · Aplicamos y mejoramos

Si los registros se intercambian o no llegan, revisad el nombre del campo, el grupo y la secuencia de ensayo, cambiando uno cada vez. Añadid a la pantalla de la pasarela un indicador de «SIMULACIÓN» o una ficha visible junto a la placa para que nadie confunda los valores con medidas reales. Discutid qué necesitaría una instalación marina: sensor adecuado, calibración, alimentación, caja resistente, comunicación de largo alcance y mantenimiento; una pasarela real también requeriría conexión y un servicio que almacenara los datos. No presentéis el diagrama como una red desplegada ni publiquéis ubicaciones de fauna.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** esquema anotado de nodo, radio y pasarela; programa emisor y receptor; registro de los cinco casos con tres repeticiones; y una explicación de qué parte del sistema solo está dibujada. La fuente oficial describe una actividad de nodos de datos inalámbricos conectados a pasarelas de Internet; esta propuesta adapta su arquitectura a una maqueta seca y datos ficticios. Una red real requeriría sensores ambientales externos, calibración, energía, protección contra el agua, conectividad y mantenimiento. La micro:bit y el prototipo no miden el océano ni sirven para monitorizarlo. [Ocean health monitor](https://microbit.org/teach/lessons/healthy-oceans-monitor/) es la primera de las dos actividades oficiales *Healthy oceans*, orientada a prototipos de nodos inalámbricos para el oleaje y el tiempo marítimo.

### **Ruta eficiente para una mancha simulada (Oil spill cleaner-upper).**

#### Fase 1 · Activamos y predecimos

La fuente oficial divide *Oil spill cleaner-upper* en dos partes: primero, un reto de algoritmos para limpiar una zona marina que se puede resolver sin micro:bit ni hardware; después, un diseño de vehículo autónomo. Empezad por la parte desconectada, que es completa por sí misma. En una cuadrícula de papel representad una costa ficticia, una mancha con fichas negras, un arrecife protegido con una celda verde, un punto de inicio y una zona de recogida. Acordad los criterios antes de dibujar rutas: visitar todas las fichas, no entrar en el arrecife, minimizar movimientos y, en caso de empate, hacer menos giros. Son criterios del modelo escolar, no una métrica de limpieza real.

#### Fase 2 · Exploramos y construimos

Preparad dos rutas diferentes con tarjetas de flechas y escribidlas también como instrucciones paso a paso. Un marcador de cartón representa el vehículo y una ficha blanca seca, el material de recogida; el alumnado mueve el modelo solo cuando el algoritmo lo indica. No uséis aceite, agua, detergentes ni otros líquidos. Si el centro quiere explorar un vehículo motorizado, tratadlo como una ampliación separada: hace falta identificar antes el controlador, los motores, la alimentación y la compatibilidad reales, y ninguno de estos accesorios se atribuye a la placa micro:bit sola.

![Una micro:bit de la dotación junto a una cuadrícula seca con fichas planas que representan una mancha ficticia, una zona protegida y dos rutas de limpieza comparables.](../../_assets/situacions/sa-mb-vessament-rutes-grid.webp)

_La ilustración muestra un algoritmo de mesa con piezas de papel, no un vertido ni un vehículo autónomo funcional._

#### Fase 3 · Explicamos y registramos

Ejecutad cada ruta tres veces con la misma cuadrícula y registrad, en una tabla, el orden de las celdas, las fichas visitadas, las repeticiones, el número de movimientos y los giros. Comparad la predicción con el recorrido efectivo: ¿el algoritmo cubre todas las fichas? ¿Ha entrado alguna vez en el arrecife? Dos parejas pueden ejecutar la misma lista de instrucciones para comprobar si se interpreta igual. Marcad cualquier diferencia como un error de secuencia o una ambigüedad, no como un fallo de la persona que sigue las instrucciones.

#### Fase 4 · Aplicamos y mejoramos

Cambiad un solo elemento del mapa —por ejemplo, añadid una celda prohibida o trasladad una ficha— y predecid qué pasaría con las dos rutas. Revisad las instrucciones si dejan una ficha sin visitar, atraviesan el arrecife o repiten movimientos evitables; después volved a ejecutarlas con los mismos criterios. Comparad cobertura, movimientos, giros y seguridad de la ruta en lugar de declarar un único algoritmo «mejor» sin explicar para qué objetivo lo es. Si creáis una extensión motorizada, validadla en una pista seca y cerrada con supervisión y parada accesible.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencias:** cuadrícula anotada, dos algoritmos ejecutables, tabla de tres intentos por ruta, diagrama de flujo de una ruta revisada y explicación de los límites del modelo. La segunda parte de la fuente oficial propone pasar del diseño del algoritmo a un vehículo autónomo; aquí queda como extensión condicionada a hardware real compatible y una validación de seguridad, no como una función de micro:bit incluida. Ningún robot escolar se presenta como respuesta suficiente a un vertido ni se vierte ninguna sustancia. [Oil spill cleaner-upper](https://microbit.org/teach/lessons/healthy-oceans-oil-spill/) es la segunda actividad oficial *Healthy oceans* y permite separar la parte de algoritmo de la construcción del vehículo.

## 🎯 Aprendizajes y vocabulario

- Analizar un reto ambiental o de bienestar y delimitar qué puede comprobar una maqueta escolar.
- Diseñar una entrada, una regla y una salida con micro:bit, registrando las condiciones de prueba.
- Comparar las predicciones con resultados repetidos y comunicar errores, riesgos y casos no cubiertos.
- Proponer una alternativa que no manipule fauna ni datos personales y que no prometa protección real.

## 🧰 Materiales, prototipos y evaluación

Micro:bit, MakeCode, cartón, mapa, materiales reflectantes, piezas de maqueta y fichas de datos simulados. Las radios funcionan entre placas dentro de los límites del entorno; sensores de humedad, luz externos, relés, motores u otros elementos no forman parte de la placa y necesitan hardware compatible adicional. Cada equipo entrega mapa del problema, fuente de información, criterios, diagrama/pseudocódigo, prototipo, pruebas y un apartado «qué no puede hacer».

## 🛡️ Salvaguardas

No capturéis datos personales ni biométricos. No pongáis dispositivos en animales ni probéis prototipos en carreteras, espacios naturales sensibles o agua. Usad LED sin parpadeos rápidos y detened cualquier actividad que incomode. Las necesidades de seguridad, salud y conservación se deben consultar con personas expertas y comunidades afectadas; una maqueta escolar no es un producto validado.

## 🧪 Evidencias y evaluación

Rúbrica compartida: comprensión del problema, calidad de las fuentes, algoritmo, elección de componentes reales, pruebas repetibles, cooperación y comunicación de límites. Evaluad también quién podría quedar excluido, qué consecuencias no previstas hay y qué alternativa de bajo coste o desconectada existe.

## 🔗 Fuentes oficiales y alcance de la adaptación

La colección reinterpreta los retos públicos de [Protecting animals on land](https://www.microbit.org/teach/lessons/protecting-animals/), [Saving sea creatures](https://www.microbit.org/teach/lessons/sea-creatures/), [Being active](https://www.microbit.org/teach/lessons/being-active/), [Night safety](https://www.microbit.org/teach/lessons/night-safety/), [Healthy oceans](https://www.microbit.org/teach/lessons/healthy-oceans/) y [Helping plants grow](https://microbit.org/teach/lessons/helping-plants-grow/). La sesión de redes se ha contrastado también con el [proyecto oficial Light-up fishing nets](https://www.microbit.org/projects/make-it-code-it/light-up-fishing-nets/): mantiene la lectura de luz con la matriz, el umbral inicial 50, la respuesta LED y el sonido opcional, pero sitúa la prueba en una maqueta seca y comunica que no se ha demostrado ningún efecto sobre capturas reales. La de tortugas se alinea con el proyecto [Saving sea turtles](https://microbit.org/projects/make-it-code-it/saving-sea-turtles/): lectura de luz por la matriz, umbral inicial 100, icono de tortuga en oscuridad, borrado de pantalla con más luz y ciclo de dos segundos; la propuesta local añade pruebas accesibles y declara que no valida una luz ambiental. Cada reto conserva el tema y el punto de partida descritos en las páginas oficiales, pero cambia los escenarios, los datos, los materiales y los prototipos para el contexto local. Los sensores ambientales, motores y otros accesorios se identifican como externos cuando no forman parte de la placa. Las actividades que requerirían despliegue real se resuelven con simulaciones y maquetas seguras.
