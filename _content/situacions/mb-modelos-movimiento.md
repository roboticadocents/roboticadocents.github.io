---
active: true
title: "Una maqueta que aprende patrones"
description: "¿Cómo podemos enseñar, probar y mejorar un modelo de movimiento para que controle una maqueta interactiva?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Ciencias"
theme: "innovacio"
theme_label: "Datos, modelos y patrimonio"
duration: "7 sesiones"
challenge: "¿Cómo podemos hacer que una maqueta reconozca patrones de movimiento, probar sus errores y explicar para quién funciona?"
---

![Una placa micro:bit y tarjetas de ejemplos de movimiento acompañan una maqueta de divulgación científica.](../../_assets/situacions/mb-models-moviment.webp)

_El clasificador responde a ejemplos de movimiento y no interpreta el significado de una gesticulación._

## 🌱 Situación y intención

Un centro de interpretación quiere una maqueta interactiva que cambie de panel cuando la placa se inclina hacia una de dos direcciones. Los equipos aprenden qué es la IA, cómo las personas agrupan datos, cómo se recogen y limpian muestras de movimiento, cómo se entrena un modelo y cómo se conecta a un programa MakeCode. Las pruebas son anónimas y las etiquetas describen orientaciones del objeto, no identidades ni capacidades de las personas.

## 🎯 Aprendizajes y vocabulario

- Explicar el ciclo de un modelo: ejemplos etiquetados, entrenamiento, prueba y revisión.
- Preparar datos de movimiento consistentes para controlar qué variaciones ve el modelo.
- Evaluar casos nuevos, errores y diferencias entre grupos de prueba antes de activar una respuesta en la maqueta.
- Iterar una solución con el usuario al control y documentar sus límites, riesgos y condiciones de uso.

## 📅 Secuencia didáctica · 7 sesiones

### **Sesión 1 · Presentar la IA (Introducing AI).**

#### Fase 1 · Activamos y predecimos

Presentad el centro de interpretación y la maqueta que querría cambiar de panel cuando se inclina. Antes de hablar de inteligencia artificial, cada equipo dibuja cómo cree que un dispositivo podría distinguir dos orientaciones y anota qué tendría que preparar una persona para que funcionara.

#### Fase 2 · Exploramos y construimos

Clasificad tarjetas propias de objetos y servicios conocidos —temporizador, alarma, mapa digital, luz automática, calculadora— según si aplican una regla escrita o si pueden aprender patrones a partir de datos. Dejad algunas tarjetas sin clasificar en el primer intento para que el alumnado pueda proponer una pregunta antes de decidir.

#### Fase 3 · Explicamos y registramos

Comparad los criterios de los equipos: ¿qué pruebas o información les han hecho clasificar cada ejemplo? Distinguid un sistema que aplica una regla explícita de un modelo que ajusta patrones con ejemplos. Registrad en un diagrama quién define el propósito, elige los datos e interpreta el resultado.

#### Fase 4 · Aplicamos y mejoramos

Revisad las tarjetas dudosas después de escuchar a otro grupo y añadid un ejemplo local, como un indicador del aula o del centro. Escribid una definición de dos frases para una familia visitante y revisadla para que no atribuya intenciones, emociones ni comprensión humana al modelo.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** clasificación inicial y revisada, diagrama del papel humano y definición breve de IA. Comprobad que el alumnado puede describir con palabras sencillas qué puede hacer la IA e identificar una decisión humana del proceso. Pregunta de cierre: «¿Qué no podemos concluir solo porque un sistema dé una respuesta?».

### **Sesión 2 · Encontrar patrones en los datos (Exploring patterns in data).**

#### Fase 1 · Activamos y predecimos

Recuperad la clasificación de la sesión anterior y preguntad qué significa encontrar un patrón. Cada grupo predice dos maneras distintas de ordenar un conjunto de tarjetas con flechas, ángulos dibujados u orientaciones de una maqueta.

#### Fase 2 · Exploramos y construimos

Ordenad las tarjetas primero por una regla visible —dirección de la flecha— y después por otra —ángulo aproximado o posición inicial. Haced una tercera clasificación con una tarjeta que no encaje claramente en ningún grupo. No uséis fotografías ni movimientos identificables de compañeros: los datos son símbolos y posiciones de la maqueta.

#### Fase 3 · Explicamos y registramos

Escribid la regla de cada agrupación y comparad qué tarjetas cambian de grupo cuando cambia el criterio. Mostrad un ejemplo en el que dos personas discrepen y explicad qué información adicional haría falta para decidir. Relacionadlo con las características numéricas que un sistema puede calcular, no con el significado que una persona atribuye a un gesto.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad el conjunto de tarjetas con otro equipo sin explicarle la regla. Pedid que proponga una clasificación y que señale una excepción; después haced explícita la regla y revisad una tarjeta si la instrucción era ambigua.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tarjetas agrupadas bajo dos reglas, una excepción razonada y una definición de «característica». Preguntad: «Si cambiamos la regla, ¿qué tarjetas cambian de lugar? ¿Qué parte ha decidido la persona y qué parte podría ejecutar una máquina?».

### **Sesión 3 · Añadir etiquetas y recoger datos (Adding labels and collecting data).**

#### Fase 1 · Activamos y predecimos

Definid el propósito limitado del modelo: reconocer la orientación de una maqueta y cambiar su panel. Acordad dos etiquetas operativas —por ejemplo, «inclinada hacia la izquierda» y «inclinada hacia la derecha»— y una regla para no etiquetar las posiciones intermedias. Predecid qué variaciones podrían confundir al sistema.

#### Fase 2 · Exploramos y construimos

Conectad una micro:bit compatible a CreateAI según la guía oficial y practicad con una muestra corta. Fijad la placa a una base ligera de la maqueta, no al cuerpo; capturad varios ejemplos de cada orientación con códigos de grupo que no identifiquen personas. Mantened constantes las condiciones en el primer conjunto y anotad el ángulo aproximado y el número de muestras.

#### Fase 3 · Explicamos y registramos

Revisad las etiquetas una a una: ¿cada muestra representa realmente la clase definida? Marcad las transiciones y las lecturas ambiguas como «unknown» o excluidlas con una justificación; no las forcéis dentro de una clase. Comparad si los grupos han registrado el mismo movimiento con criterios parecidos.

#### Fase 4 · Aplicamos y mejoramos

Si hay muestras inconsistentes, detened la captura y corregid el protocolo antes de continuar. Variad solo un factor —ángulo, velocidad de inclinación o estabilidad de la base— y añadid las muestras necesarias para representar una situación que antes faltaba. La V2 hace falta para ejecutar el proyecto MakeCode con el modelo en la placa, no para recoger datos ni entrenar en CreateAI.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** definiciones de etiqueta, protocolo de captura y registro de muestras aceptadas, excluidas y dudosas. Comprobad que las categorías describen la posición del objeto, no una identidad, emoción o capacidad. Preguntad: «¿Qué decisión de diseño ha afectado a los datos que hemos recogido?».

### **Sesión 4 · Entrenar y probar (Training and testing an ML model).**

#### Fase 1 · Activamos y predecimos

Recuperad el conjunto etiquetado y predecid qué clase será más difícil de reconocer y por qué. Reservad antes de entrenar una parte de las muestras como prueba; no la uséis para ajustar el modelo, para poder compararlo con datos que no ha visto.

#### Fase 2 · Exploramos y construimos

Entrenad el modelo en CreateAI con las muestras de cada clase. Probadlo con el conjunto reservado y con orientaciones nuevas de la maqueta. Registrad la etiqueta esperada, la respuesta del modelo y si la respuesta es correcta, una confusión o «unknown».

#### Fase 3 · Explicamos y registramos

Completad una matriz de confusión de dos clases y anotad el número de pruebas, no solo un porcentaje. Localizad falsos aciertos y errores y buscad si comparten una condición —por ejemplo, un ángulo poco representado— antes de decidir qué hay que cambiar.

#### Fase 4 · Aplicamos y mejoramos

Añadid datos solo después de identificar qué vacío de representación queréis cubrir. Limpiad muestras mal etiquetadas o repetidas, volved a entrenar y probad con un conjunto nuevo que quede separado. Comparad la matriz anterior y la nueva para ver si una clase mejora sin ocultar errores de la otra.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** separación entrenamiento/prueba, matriz de resultados antes y después, y justificación del cambio. Explicad que un mejor resultado en pocas muestras no demuestra que el modelo funcione en todas las situaciones. Preguntad: «¿Qué error todavía nos haría detener o no activar la respuesta?».

### **Sesión 5 · Mejorar el código con el modelo (Enhancing code with ML).**

#### Fase 1 · Activamos y predecimos

Abrid el proyecto MakeCode asociado a CreateAI y localizad dónde entra en el programa el resultado del modelo. Antes de modificarlo, predecid qué icono tendría que aparecer para cada orientación y qué debe ver el usuario si el modelo no reconoce ninguna clase.

#### Fase 2 · Exploramos y construimos

Leed los bloques existentes e identificad la entrada del modelo, las dos etiquetas y las salidas. Conectad cada etiqueta con un icono distinto de la matriz LED que represente un destino de la maqueta; mantened una salida neutra para «unknown» o ausencia de movimiento.

#### Fase 3 · Explicamos y registramos

Trazad el flujo entrada–clasificación–respuesta con tres casos de prueba. Explicad qué ocurre cuando el modelo da una clase conocida y qué pasa cuando no hay ninguna. Revisad que la pantalla no presente la respuesta neutra como si fuera una tercera clase aprendida.

#### Fase 4 · Aplicamos y mejoramos

Descargad el proyecto y el modelo en una micro:bit V2 y probadlos en la maqueta sin ordenador. Ajustad el programa si una respuesta no es clara y añadid un control para que el usuario pueda reiniciar manualmente. Si solo disponéis de otra versión, haced la prueba en el ordenador y marcadla explícitamente como simulación.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** diagrama de bloques anotado, iconos de respuesta y registro de la prueba física o simulada. Preguntad: «¿Qué parte es código con reglas y qué parte es el modelo? ¿Cómo sabe el usuario que el sistema no ha reconocido la entrada?».

### **Sesión 6 · Evaluar el sistema (Evaluating an AI system).**

#### Fase 1 · Activamos y predecimos

Presentad la maqueta completa y recordad que el sistema integra datos, modelo, código y placa. Antes de la muestra, cada equipo identifica un límite posible y predice qué caso podría dar una respuesta equivocada o ninguna respuesta.

#### Fase 2 · Exploramos y construimos

Probad la maqueta con orientaciones nuevas del dispositivo y, solo con participación voluntaria, con distintas maneras de mover o sujetar la base. No registréis quién ha probado cada caso; usad un código de intento y describid solo la condición técnica observada. Ofreced una alternativa de prueba con soporte fijo si alguien no quiere o no puede mover el modelo.

#### Fase 3 · Explicamos y registramos

Anotad la clase esperada, la respuesta, si ha habido error y qué variación de orientación había. Comparad los resultados con el conjunto de prueba anterior y revisad qué diferencias pueden explicar la pérdida de fiabilidad. No generalicéis a partir de una sola persona ni de una sola ejecución.

#### Fase 4 · Aplicamos y mejoramos

Proponed una mejora concreta de datos, montaje o código, cambiad solo una y repetid los casos afectados. Si la maqueta no funciona con una variación, documentad el límite y preferid una salida neutra antes que presentar una predicción dudosa como cierta.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** registro anónimo de pruebas, límite identificado y decisión de rediseño. Explicad cómo interactúan el hardware, los datos, el modelo y el código. Preguntad: «¿Quién tendría que decidir si este prototipo es lo bastante fiable para una visita?».

### **Sesión 7 · Diversificar los datos (Strengthening models through adding diverse data).**

#### Fase 1 · Activamos y predecimos

Revisad los errores de las sesiones anteriores e identificad qué ángulos, ritmos o maneras de sujetar la maqueta faltan. Predecid qué clase podría mejorar si se añadieran ejemplos de esa variación, sin atribuir ningún error a una persona o grupo concreto.

#### Fase 2 · Exploramos y construimos

Añadid muestras pertinentes a las clases existentes con participación voluntaria y códigos anónimos, o usad una base móvil para variar la orientación sin capturar gestos corporales. Mantened un conjunto de prueba nuevo y separado; no lo mezcléis con los datos que se usan para entrenar.

#### Fase 3 · Explicamos y registramos

Volved a entrenar y comparad los resultados con la matriz anterior. Registrad aciertos, confusiones y «unknown» por clase, así como qué variación se ha añadido. Comprobad si la mejora de una clase ha afectado a la otra y explicad qué no permite concluir el número limitado de pruebas.

#### Fase 4 · Aplicamos y mejoramos

Si persiste una confusión, revisad si hay que redefinir la etiqueta, el montaje o el protocolo antes de capturar más muestras. Ajustad el modelo solo con los datos de entrenamiento y volved a probarlo con el conjunto reservado. Comparad la accesibilidad de la respuesta y mantened una salida neutra y el reinicio manual.

#### Fase 5 · Comprobamos y reflexionamos

Preparad una ficha del modelo con propósito, clases, datos usados, prueba, límites y recomendaciones de uso. **Evidencia:** ficha, matriz comparativa y decisión justificada de conservar o revisar el prototipo. La pregunta final es: «¿Qué personas o situaciones todavía no hemos representado y por qué no deberíamos afirmar que funciona para todo el mundo?».

## 🧰 Montaje y alternativa

Para entrenar y probar, conectad una micro:bit a CreateAI siguiendo la [guía oficial de conexión y uso](https://microbit.org/get-started/user-guide/microbit-createai/), recopilad datos de movimiento de la maqueta, etiquetadlos, entrenad el modelo y probadlo con muestras distintas. En el navegador del ordenador, la conexión inalámbrica requiere Chrome o Edge y Bluetooth habilitado; también se puede usar la aplicación oficial compatible en tableta. Desde CreateAI, abrid el proyecto en MakeCode, revisad los bloques de cada acción —incluida la salida «unknown»—, descargad el programa y el modelo en una micro:bit V2 y probadlos sin el ordenador. Cualquier versión de micro:bit puede recoger datos, entrenar y probar el modelo; para ejecutarlo con MakeCode en la placa hace falta la V2. Se puede reutilizar la misma placa de recogida para descargar el proyecto, reconectándola después si hay que seguir capturando. Fijadla a una maqueta ligera, no al cuerpo. Si la conexión inalámbrica o CreateAI no está disponible, haced las sesiones con tarjetas y datos simulados e indicad claramente que no se ha ejecutado el modelo físico.

## 🔒 Privacidad, equidad y seguridad

No recopiléis nombres, voz, imágenes ni datos de salud. Los movimientos son voluntarios y no deben corresponder a gestos de una persona concreta. CreateAI guarda los proyectos localmente en el dispositivo/navegador y el archivo HEX incluye muestras y modelo; estableced quién tiene acceso y eliminad los datos después de la muestra si no hace falta conservarlos. No uséis el modelo para evaluar personas, autenticarlas o decidir quién puede participar.

## 🧪 Evidencias y evaluación

Recoged etiquetas, diagrama del proceso, tabla de datos representativos y ausentes, tarjeta de pruebas, comparación antes/después de la mejora, programa MakeCode y ficha final del modelo. Valorad la calidad de las pruebas, la explicación del sesgo y la capacidad de limitar el propósito del prototipo.

## Protocolo para comprobar el modelo

Antes de recoger datos, ensayad cada categoría con una muestra de papel y una orientación fija. Las etiquetas deben describir la posición de la maqueta, no un gesto humano. Recoged varias repeticiones controladas por categoría, después variad un factor cada vez —ángulo inicial, velocidad de movimiento o estabilidad de la base— y guardad una parte de las muestras para la prueba final. Si una muestra es ambigua, marcadla como tal y decidid si hay que redefinir la categoría; no la asignéis forzadamente a ningún lado.

La ficha de resultados puede contar: número de muestras de prueba por clase, aciertos, confusiones y resultados «unknown». Mostrad los recuentos en una matriz de dos filas por dos columnas y anotad el total, porque un porcentaje sin número de muestras puede dar una falsa impresión de certeza. Después de añadir datos, probad un conjunto nuevo y comparad si mejora una categoría sin empeorar otra. El objetivo es explicar qué ha cambiado, no maximizar una cifra.

En la maqueta MakeCode, definid qué ocurre para cada clase y qué ve el usuario cuando no hay clasificación. Probad el programa en cinco escenarios: ninguna inclinación, inclinación clara hacia cada lado, transición entre lados y movimiento que no pertenece a ninguna clase. Comprobad que la salida neutra no imita una tercera predicción y que el usuario puede reiniciar manualmente. La muestra de otras personas solo es voluntaria, sin registrar quién ha probado el dispositivo.

## 🔗 Unidad oficial adaptada

Esta situación adapta las siete lecciones de micro:bit [First lessons with micro:bit CreateAI](https://microbit.org/teach/lessons/first-lessons-with-microbit-createai/): introducción a la IA, patrones de datos, etiquetado y recogida, entrenamiento/prueba, código con ML, evaluación del sistema y diversidad de datos. La maqueta, las etiquetas y los criterios son propios.
