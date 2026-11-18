---
active: true
title: "Un aula con opciones sensoriales"
description: "Diseñamos con micro:bit un recurso sensorial opcional para el aula, con patrones visuales regulables y control de quién lo utiliza."
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Ciencias y Inclusión"
theme: "ciutadania"
theme_label: "Diseño accesible"
duration: "4 sesiones · 200 min"
challenge: "¿Cómo podemos crear un recurso visual opcional y configurable que ayude a hacer más previsible una rutina del aula?"
---

![Micro:bit en un soporte de cartón con interruptor de parada y tarjetas de patrones visuales tranquilos.](../../_assets/situacions/mb-aula-sensorial.webp)

_El patrón es una opción configurable, no una respuesta universal a las necesidades sensoriales._

## 🌱 Situación e intención

Una clase de tercer ciclo trabaja el diseño de un recurso de apoyo visual que solo se activa cuando la persona usuaria lo elige. El reto no parte de adivinar qué necesita alguien ni de imitar una experiencia sensorial: el equipo lee un encargo ficticio validado por la docente (por ejemplo, «quiero ver una señal lenta para saber cuándo empieza una tarea»), compara ayudas existentes y diseña una opción fácil de ignorar, cambiar o apagar. La matriz de 5 × 5 es una salida visual pequeña de prototipo; no ilumina el aula ni sustituye adaptaciones acordadas con la persona y el centro.

La unidad oficial tiene cuatro lecciones para 11–14 años y asume conocimientos previos de pseudocódigo y MakeCode. Esta versión local conserva la exploración de entornos y ayudas, patrones de luz, algoritmos con entrada/salida/iteración/selección y construcción, prueba y evaluación; adapta el ritmo y el alcance al tercer ciclo de primaria. No pide a nadie compartir diagnóstico, preferencias personales ni experiencias de salud.

## 🎯 Aprendizajes y vocabulario

- Analizar una rutina ficticia y formular requisitos de predictibilidad, control voluntario y parada.
- Diseñar patrones visuales regulables con entradas y salidas que el usuario pueda controlar.
- Programar y probar opciones estáticas o de movimiento suave, sin parpadeos ni estímulos obligatorios.
- Recoger retorno voluntario sobre el prototipo y explicar que no es una intervención clínica ni una solución universal.

## 🧰 Materiales y acuerdos previos

BBC micro:bit, MakeCode y cable USB, cartón para un soporte que deje visibles botones y LEDs, tarjetas de patrones estáticos, pseudocódigo, hoja de observación de criterios y un temporizador opcional. Preparad dos encargos ficticios contrastados con una persona adulta de apoyo educativo o con material público de accesibilidad; no inventéis una «necesidad típica» de un diagnóstico. Todas las pruebas se hacen primero con simulador, en una zona del aula donde la persona que observa puede apartarse. El uso en un aula real requiere autorización y aceptación voluntaria; el valor pedagógico es el proceso de diseño, no la eficacia clínica del prototipo.

Estableced criterios visibles antes de programar: el recurso permanece apagado hasta que alguien lo activa; ofrece una imagen estática o un patrón lento sin parpadeo; la persona puede cambiar de opción y dejarla; el patrón acaba o vuelve a un estado neutro; y hay una alternativa en papel. Si un criterio no se puede cumplir con la placa, se registra como límite del prototipo.

## 📅 Secuencia didáctica · cuatro sesiones de 50 minutos

### **Sesión 1 · Explorar entornos y evaluar ayudas (Exploring learning environments).**

#### Fase 1 · Activamos y predecimos

Leed una tarjeta ficticia con un objetivo concreto, sin etiquetar a una persona. Predecid qué información del entorno puede ayudar a hacer más previsible una rutina.

#### Fase 2 · Exploramos y construimos

En un mapa inventado de aula, marcad fuentes de cambio o información —inicio de tarea, cartel, reloj o ruido representado con una tarjeta—. No aumentéis la luz ni el ruido real para hacer la prueba.

#### Fase 3 · Explicamos y registramos

Comparad tres opciones: pictograma impreso, temporizador analógico y micro:bit con un icono. Usad una matriz de criterios: control de la persona, comprensibilidad, facilidad de parada, accesibilidad, coste y mantenimiento; anotad también qué no sabéis.

#### Fase 4 · Aplicamos y mejoramos

Elegid qué probaríais para el encargo ficticio y qué dejaríais fuera. Revisad la propuesta para que la opción impresa, el control de la persona y la posibilidad de rechazarla continúen disponibles.

#### Fase 5 · Comprobamos y reflexionamos

Explicad quién decide utilizar el recurso y cómo puede no usarlo. **Evidencia:** mapa de entorno, comparación de ayudas y criterios acordados.

### **Sesión 2 · Diseñar patrones de luz con repetición (Light patterns).**

#### Fase 1 · Activamos y predecimos

Recuperad los criterios de la sesión anterior y comprobad que la opción impresa y el estado apagado continúan disponibles. Predecid cómo será el comportamiento de un patrón estático o lento.

#### Fase 2 · Exploramos y construimos

Escribid pseudocódigo con la secuencia «inicio voluntario → mostrar patrón → pausa → acabar en neutro». Diseñad dos imágenes de 5 × 5 de contraste claro; evitad animaciones, alternancia rápida y estímulos inesperados.

#### Fase 3 · Explicamos y registramos

Trasladad un patrón a MakeCode y usad una repetición de duración finita o una pausa para que el comportamiento sea previsible. Registrad cómo corresponde cada bloque con el pseudocódigo.

#### Fase 4 · Aplicamos y mejoramos

Comparad el código con los criterios y revisadlo si se activa solo, no acaba en neutro o no es fácil de detener. No pidáis a compañeros que valoren reacciones corporales ni comodidad personal.

#### Fase 5 · Comprobamos y reflexionamos

Comprobad que el patrón solo empieza con una acción voluntaria y acaba de manera previsible. **Evidencia:** pseudocódigo, dos cuadrículas, código y revisión según criterios técnicos.

### **Sesión 3 · Algoritmo con entrada, selección y salida (Developing pattern algorithms).**

#### Fase 1 · Activamos y predecimos

Dibujad los estados «apagado», «opción 1», «opción 2» y «retorno a neutro». Predecid qué debe pasar cuando no se pulsa ningún botón, se elige una opción o se detiene.

#### Fase 2 · Exploramos y construimos

Decidid qué botón elige una opción y cuál la detiene o la cambia. El programa no se activa por luz, ruido, presencia o movimiento de la persona. Escribid pseudocódigo con condiciones «si/opción», «si/parada» y una iteración limitada.

#### Fase 3 · Explicamos y registramos

Una pareja hace de ordenador y ejecuta literalmente las instrucciones. Completad una tabla con **estado inicial, entrada, salida esperada, salida observada y resultado**. Incluid como mínimo: ninguna entrada (se mantiene apagado), botón A (muestra la opción 1), botón B (muestra la opción 2), una segunda pulsación (cambia o mantiene la opción según la regla escrita) y orden de parada (vuelve a neutro). Añadid un caso inesperado, como dejar pasar el tiempo sin pulsar ningún botón. No hace falta registrar nombres ni opiniones personales.

#### Fase 4 · Aplicamos y mejoramos

Localizad instrucciones ambiguas o una rama sin salida y corregidlas. Volved a ejecutar los casos afectados para comprobar la revisión.

#### Fase 5 · Comprobamos y reflexionamos

Verificad que el diagrama incluye entrada, selección, salida y retorno a estado neutro. **Evidencia:** diagrama de estados, pseudocódigo depurado y matriz de casos.

### **Sesión 4 · Construir, probar y evaluar la ayuda (Building sensory aids).**

#### Fase 1 · Activamos y predecimos

Predecid cómo se podrá activar y detener el prototipo antes de montarlo. Comprobad que la prueba se puede hacer con simulador, captura estática o papel, sin mirar el patrón. Asignad una persona al programa, otra a leer los casos de prueba y una tercera a registrar salidas; cambiad los roles antes de la revisión final.

#### Fase 2 · Exploramos y construimos

Colocad la micro:bit en un soporte estable sin tapar botones ni matriz LED, o dejadla plana si así es más fácil controlarla. Implementad el algoritmo con entradas, selección, una repetición limitada y salida estática; no añadáis automatismos que observen la clase.

![Micro:bit real de la dotación en un soporte de cartón, junto a tarjetas de papel con un sol, una hoja y una opción neutra en blanco.](../../_assets/situacions/sa-mb-aula-sensorial-opcions-v2.webp)

_La placa presenta un patrón visual elegido; no observa el aula ni interpreta emociones. La persona puede usar las tarjetas de papel o dejar el dispositivo apagado._

#### Fase 3 · Explicamos y registramos

Recorred los seis casos de la sesión anterior y anotad salida esperada y real. Si la tabla muestra una diferencia, reproducid solo ese caso, localizad si el error está en la entrada, la condición o la salida y volved a probarlo después del cambio. Los comentarios de la galería serán sobre el diseño, no sobre las reacciones de ninguna persona.

#### Fase 4 · Aplicamos y mejoramos

Auditad los criterios: por defecto queda apagado, la opción en papel es equivalente para comprender el aviso y siempre es fácil dejar el recurso. Revisad el programa si alguno de estos puntos falla.

#### Fase 5 · Comprobamos y reflexionamos

Presentad el código, los criterios y un límite conocido. **Evidencia:** prototipo, programa revisado, matriz de pruebas y autoevaluación técnica.

## 📊 Evaluación y evidencias

Guardad el encargo ficticio, mapa de entorno, comparación de ayudas, criterios, pseudocódigo, diagrama de estados, código y resultados esperados/reales de los seis casos. Valorad si el equipo (1) justifica por qué una opción puede responder al encargo sin decir que conviene a todo el mundo; (2) representa entrada, selección, salida y repetición; (3) programa el comportamiento elegido y previsible; (4) prueba y depura casos, incluidos estado apagado y parada; y (5) comunica una alternativa y un límite. La rúbrica evalúa decisiones de diseño y funcionamiento técnico, no una respuesta sensorial «correcta».

## 🛡️ Consentimiento, accesibilidad y privacidad

La ayuda es voluntaria, no se registra quién la ha probado y no se piden testimonios, diagnósticos ni preferencias personales. Nadie tiene que mirar el patrón: la prueba puede hacerse en el simulador, con una captura estática o en papel. No uséis destellos, luces intermitentes ni sonido; ofreced siempre control manual, opción neutra y posibilidad de no usar el dispositivo. Si el centro quiere probar un apoyo en uso real, la decisión debe contar con la persona usuaria y el personal responsable, y puede abandonarse sin justificación. Este prototipo escolar no se presenta como terapia, tratamiento ni ajuste razonable formal.

## 🔗 Unidad oficial adaptada

[Sensory classroom](https://microbit.org/teach/lessons/sensory-classroom/) tiene cuatro lecciones para 11–14 años y asume experiencia previa con algoritmos/MakeCode. La primera explora entornos de aprendizaje y evalúa ayudas; la segunda escribe pseudocódigo con iteración y patrones de luz; la tercera planifica una ayuda visual con entradas, salidas, iteración y selección; la cuarta programa, prueba, depura y evalúa el diseño. Esta adaptación mantiene la progresión y los objetivos, incorpora criterios de uso voluntario, casos de prueba y alternativa impresa y reduce el alcance tecnológico a micro:bit. No reutiliza materiales visuales oficiales.
