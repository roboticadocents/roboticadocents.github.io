---
active: true
title: "Un temporizador de actividades responsable"
description: "¿Cómo podemos explicar qué es la IA, limpiar datos de movimiento y evaluar con responsabilidad un modelo en micro:bit?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Ciencias, Matemáticas y Ciudadanía Digital"
theme: "innovacio"
theme_label: "IA, movimiento y diseño responsable"
duration: "8 sesiones"
challenge: "¿Cómo podemos crear un temporizador de maqueta con aprendizaje automático y explicar con honestidad cuándo falla?"
---

![Una placa micro:bit y una maqueta interactiva con tarjetas de datos representan un temporizador de actividades basado en patrones de movimiento.](../../_assets/situacions/mb-ia-exercici-responsable.webp)

_El sistema es una demostración de clasificación y temporización; no es un entrenador ni una herramienta de salud._

## 🌱 Situación y intención

La feria de ciencia del centro quiere mostrar cómo datos y decisiones de diseño afectan a un sistema de IA. Los equipos crean un temporizador que reacciona a movimientos asignados a una maqueta, no a perfiles de alumnado. La secuencia adapta las ocho lecciones oficiales de *Developing AI literacy with the micro:bit*, incluyendo actividades desconectadas, CreateAI, código MakeCode, sesgo y una tarjeta del modelo.

## 📅 Secuencia didáctica · 8 sesiones

### **Sesión 1 · Hablar de IA (Talking about AI).**

#### Fase 1 · Activamos y predecimos

Presentad la feria de ciencia y el temporizador de maqueta. Antes de definir IA, el alumnado dibuja qué imagina que pasa entre una inclinación de la base y un icono que aparece en la placa. Preguntad qué partes creen que deciden las personas y qué podría hacer el sistema.

#### Fase 2 · Exploramos y construimos

Clasificad tarjetas de tecnologías familiares —alarma, calculadora, mapa digital, luz con sensor— según si aplican una regla explícita o si aprenden patrones con datos. Revisad mensajes publicitarios que dicen que una máquina «entiende» o «decide como una persona» y marcad qué afirmaciones habría que comprobar.

#### Fase 3 · Explicamos y registramos

Comparad las clasificaciones y describid una regla fija con la estructura «si pasa X, haz Y». Distinguid esta instrucción de un modelo entrenado con ejemplos y anotad en un diagrama quién define las clases, elige los datos y decide qué significa el resultado.

#### Fase 4 · Aplicamos y mejoramos

Escribid en equipo una definición propia de IA y una de ML para la feria. Revisadlas con una pareja: eliminad expresiones que atribuyan intenciones o comprensión humana al modelo y añadid un ejemplo de regla fija para contrastarlas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** clasificación de tecnologías, diagrama de decisiones humanas y dos definiciones revisadas. Comprobad si el alumnado puede explicar la diferencia entre regla y aprendizaje con un ejemplo. Pregunta de cierre: «¿Quién es responsable cuando el sistema da una respuesta inesperada?».

### **Sesión 2 · Importancia de los datos (Exploring AI: the importance of data).**

#### Fase 1 · Activamos y predecimos

Recuperad el temporizador y preguntad qué información necesitaría para mostrar un icono. Cada equipo predice si hace falta registrar la identidad, la edad o cualquier dato personal para reconocer la orientación de una maqueta.

#### Fase 2 · Exploramos y construimos

Ordenad tarjetas ficticias con diversas reglas —por ejemplo, dirección, ángulo o duración— y probad una clasificación que use solo una característica cada vez. Incluid tarjetas incompletas o con dos características mezcladas para que el grupo decida si puede clasificarlas.

#### Fase 3 · Explicamos y registramos

Comparad los resultados de cada regla y anotad qué tarjetas cambian de grupo. Hablad de consentimiento, contexto, minimización y usos inesperados; identificad los datos que no haría falta recoger para un temporizador de exposición.

#### Fase 4 · Aplicamos y mejoramos

Revisad el protocolo del temporizador y quitad cualquier dato que no sirva para responder a la orientación del objeto. Escribid una regla de eliminación de datos y una situación en la que no se debería reutilizar el conjunto recogido.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** dos clasificaciones, comparación de resultados y lista de datos necesarios/innecesarios. Preguntad: «¿Qué cambia cuando cambiamos la regla? ¿Quién debería dar permiso para recoger un dato y para qué uso?».

### **Sesión 3 · Evaluar los datos (Exploring ML: evaluating data).**

#### Fase 1 · Activamos y predecimos

Definid el propósito limitado: reconocer dos orientaciones de una maqueta para cambiar un panel. Acordad qué significa cada etiqueta y qué posición quedará «sin clase». Predecid qué muestra podría resultar ambigua si se empieza desde una posición diferente.

#### Fase 2 · Exploramos y construimos

Poned la micro:bit sobre una base de cartón marcada con dos ángulos y recoged muestras con su acelerómetro en CreateAI. Mantened la misma posición inicial para el primer conjunto, usad códigos anónimos y registrad varias repeticiones de cada orientación. No pidáis que nadie haga un gesto corporal concreto.

#### Fase 3 · Explicamos y registramos

Revisad los datos y localizad muestras con orientación errónea o con dos clases mezcladas. Para cada muestra dudosa, anotad si el problema es la etiqueta, el movimiento de la placa durante la captura o una muestra incompleta.

#### Fase 4 · Aplicamos y mejoramos

Limpiad las muestras que no representan la clase definida y documentad el motivo de exclusión. Si la confusión viene del protocolo, corregid la posición inicial y haced una nueva captura controlada en lugar de añadir datos indistintos.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** definiciones de etiqueta, tabla de muestras aceptadas/excluidas y motivos verificables. Comprobad que las categorías describen la orientación del objeto, no una persona. Pregunta final: «¿Qué decisión nuestra ha cambiado el conjunto de datos?».

### **Sesión 4 · Probar la exactitud (Exploring ML: testing accuracy).**

#### Fase 1 · Activamos y predecimos

Separad antes de entrenar las muestras que se reservarán para la prueba. Predecid qué clase podría confundirse y explicad por qué no se deberían usar los datos de prueba para ajustar el modelo.

#### Fase 2 · Exploramos y construimos

Entrenad el modelo con el conjunto asignado y probadlo con muestras que no se han usado para entrenar. Por cada intento, anotad clase esperada, respuesta del modelo y si es acierto, error o duda.

#### Fase 3 · Explicamos y registramos

Completad una tarjeta de resultados con recuento por clase. Debated qué permite concluir esa muestra y qué no, especialmente si hay pocos casos o una clase tiene menos ejemplos. Distinguid exactitud del modelo y validez del propósito.

#### Fase 4 · Aplicamos y mejoramos

Revisad si los datos de movimiento del dispositivo son apropiados para el prototipo y qué consentimiento y control hacen falta. Proponed una mejora concreta del protocolo y volved a probar con un conjunto nuevo, sin mezclarlo con las muestras reservadas inicialmente.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** separación de los conjuntos, tarjeta de aciertos/errores/dudas y justificación del uso de datos. Preguntad: «¿Qué prueba adicional necesitaríamos antes de decir que el prototipo es fiable?».

### **Sesión 5 · Considerar sesgos (Exploring ML: considering bias).**

#### Fase 1 · Activamos y predecimos

Presentad un caso ficticio: el modelo ha visto solo una orientación estable y confunde otra inclinación de la base. Predecid qué puede pasar si el temporizador se expone en una mesa diferente o si la maqueta se mueve más lentamente.

#### Fase 2 · Exploramos y construimos

Con tarjetas de prueba inventadas, variad ángulo, velocidad o soporte, una característica cada vez. Clasificad los resultados correctos, las confusiones y los casos sin respuesta; no uséis datos personales ni inferáis características de quien manipula el dispositivo.

#### Fase 3 · Explicamos y registramos

Formulad preguntas para revisar sesgo y datos ausentes: ¿qué condiciones no aparecen?, ¿qué clase tiene menos muestras?, ¿a quién podría perjudicar un falso resultado si alguien lo aplicara fuera de la maqueta? Registrad cada hipótesis con una evidencia del conjunto ficticio.

#### Fase 4 · Aplicamos y mejoramos

Rediseñad el protocolo para que represente mejor las variaciones de la maqueta y proponed una prueba que podría refutar vuestra hipótesis. Mantened el aviso de que el modelo no clasifica personas ni sirve para tomar decisiones sobre ellas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** caso de sesgo analizado, condición ausente y prueba propuesta. Explicad por qué el sesgo puede aparecer por las decisiones de recogida y etiquetado. Pregunta de cierre: «¿Qué uso deberíamos rechazar aunque el modelo pareciera acertar?».

### **Sesión 6 · Hacer mejoras (Exploring ML: making improvements).**

#### Fase 1 · Activamos y predecimos

Revisad la tarjeta de resultados y elegid un hueco concreto observado, como una orientación que aparece poco o una transición confusa. Escribid qué clase podría mejorar y qué resultado indicaría que la predicción era incorrecta.

#### Fase 2 · Exploramos y construimos

Añadid solo los datos que resuelven el hueco observado. Comprobad etiquetas, condiciones de captura y proporción entre clases antes de entrenar de nuevo; no aumentéis todos los datos sin una justificación.

#### Fase 3 · Explicamos y registramos

Comparad la tarjeta de exactitud antes y después, con número de casos por clase, aciertos, errores y dudas. Marcad si el resultado mejora en la clase prevista y si aparece una regresión en otra.

#### Fase 4 · Aplicamos y mejoramos

Si la mejora no es consistente, conservad la versión original, repetid la prueba con un conjunto diferente y explicad la incertidumbre. Decidid si conviene redefinir la etiqueta, corregir el montaje o mantener la salida neutra.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** comparación antes/después y justificación de conservar o rechazar el cambio. Preguntad: «¿Qué pruebas sostienen la mejora? ¿Qué datos faltan todavía para valorarla?».

### **Sesión 7 · Programar con el modelo (Exploring ML: coding with your model).**

#### Fase 1 · Activamos y predecimos

Recuperad las clases del modelo y dibujad qué debería mostrar el temporizador para cada orientación. Predecid también qué verá el usuario cuando no haya clasificación y cómo podrá detener o reiniciar el sistema.

#### Fase 2 · Exploramos y construimos

Incorporad las etiquetas ML a MakeCode y programad un temporizador visual corto para la maqueta. Definid tres estados claros: preparado, actividad de maqueta y pausa/detenido; usad un icono y una duración breve, sin calcular puntuaciones.

#### Fase 3 · Explicamos y registramos

Trazad el flujo de las entradas del modelo hasta cada estado. Añadid «sin clasificar» como salida neutra y comprobad que no activa el temporizador por error. Registrad las transiciones esperadas antes de ejecutar el programa.

#### Fase 4 · Aplicamos y mejoramos

Añadid pausa manual y botón de parada, que debe funcionar desde cualquier estado. Probad el código en micro:bit y verificad que se puede usar sin seguir ninguna actividad corporal real; si no hay dispositivo compatible, marcad claramente la prueba como simulación.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** programa anotado y tabla de transiciones con clasificación conocida, desconocida, pausa y parada. Explicad qué parte aporta el modelo y qué parte responde a reglas de MakeCode. No enviéis alertas ni calculéis ninguna puntuación de rendimiento.

### **Sesión 8 · Evaluar diseño e impactos (Evaluating AI project design and impacts).**

#### Fase 1 · Activamos y predecimos

Antes de presentar el prototipo, cada equipo predice qué pregunta crítica puede hacer una persona visitante sobre datos, errores o uso del temporizador. Revisad el propósito y confirmad que está restringido a la maqueta.

#### Fase 2 · Exploramos y construimos

Completad una ficha del modelo con propósito, origen y tratamiento de datos, categorías, resultados, límites e impactos posibles. Incluid los datos excluidos, el conjunto de prueba separado y las opciones de parada manual.

#### Fase 3 · Explicamos y registramos

Presentad el sistema como una combinación de datos, modelo, código y hardware. Mostrad los resultados agregados, explicad una confusión y responded qué partes permanecen bajo control humano; no proyectéis datos brutos ni identificables.

#### Fase 4 · Aplicamos y mejoramos

Recibid preguntas de otra pareja y revisad la ficha para hacer explícito cualquier límite que no se había entendido. Decidid qué circunstancias invalidarían una respuesta o exigirían detener el temporizador.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** ficha final del modelo, presentación y decisión documentada sobre cuándo no se debe utilizar. Una pareja revisora debe poder identificar en menos de un minuto para qué sirve y para qué no. Cerrad preguntando: «¿Qué impacto podría tener una respuesta incorrecta si alguien ignorara los límites?».

## 🎯 Aprendizajes y vocabulario

- Distinguir un sistema basado en reglas de un modelo que aprende patrones a partir de datos.
- Limpiar y separar conjuntos de entrenamiento y prueba, documentando exclusiones y condiciones.
- Calcular aciertos, errores y dudas, revisar sesgos e iterar sin usar datos personales o biométricos.
- Construir una salida controlable para una maqueta y presentar una model card con usos, riesgos y límites.

## 🧰 Requisitos y alternativa didáctica

CreateAI, MakeCode, navegador o app compatible, micro:bit V2, alimentación y cable de datos; una segunda placa puede ser necesaria según el Bluetooth del ordenador. El servicio guarda proyectos en el navegador o dispositivo y el archivo HEX puede incluir datos, modelo y código. Si no se puede usar la herramienta, las lecciones 1, 2, 5 y 8 continúan con tarjetas; las sesiones de ML se pueden hacer con un clasificador en papel identificado como simulación, sin afirmar que se ha entrenado un modelo.

## 🔒 Consentimiento, seguridad y bienestar

Usad datos anónimos de movimientos de un objeto o maqueta siempre que sea posible. No registréis nombres, imágenes, voz ni datos de salud; ningún movimiento ni prueba es obligatorio. No compartáis archivos con datos brutos fuera del dispositivo del centro y borradlos según la pauta docente. El temporizador no es un asesor de ejercicio, no mide rendimiento y no debe clasificar personas.

## 🧪 Evidencias y evaluación

Carpeta con clasificación desconectada, categorías y etiquetas, muestras limpias, tarjetas de prueba, código con estado neutro, model card y reflexión sobre el impacto. Valorad la comprensión del papel de los datos, la diversidad de pruebas, la depuración y la comunicación de los límites, no la exactitud absoluta del modelo.

## Registro de datos y secuencia de pruebas

En las sesiones 1 y 2, distinguid una regla fija («si la tarjeta muestra una inclinación, clasifícala como A») de un modelo que ajusta patrones a ejemplos. Clasificad tarjetas ficticias de movimientos y discutid dos ordenaciones posibles. Acordad antes de recoger nada qué significa cada clase, quién controla los datos y cómo se elimina el archivo de prueba. Si CreateAI no está disponible, conservad las discusiones y usad fichas como simulación; no llaméis «entrenado» al clasificador de papel.

En la sesión 3, poned la micro:bit encima de una base de cartón marcada con dos ángulos y recoged varias muestras de cada orientación, siempre con la misma posición inicial. Identificad una muestra mal etiquetada o un movimiento que mezcla las dos categorías. Antes de eliminarla, escribid una razón verificable: etiqueta equivocada, placa que se ha movido durante la captura o muestra incompleta. Evitad nombres de archivo con identidades y no pidáis que ningún alumno haga un gesto físico concreto.

En la sesión 4, separad las muestras de prueba de los datos de entrenamiento. Registrad número de pruebas, aciertos, errores y casos dudosos; explicad qué no se puede inferir de una muestra pequeña. En la sesión 5, revisad un caso de sesgo de datos ficticio: un modelo ha visto solo una orientación y clasifica mal otra. Preguntad quién podría quedar fuera si el prototipo se utilizara con personas y decidid no hacer ese uso. En la sesión 6, añadid ejemplos que cubren la variación de la maqueta, volved a probar con un conjunto nuevo y comparad los resultados sin ocultar ninguna regresión.

## Código del temporizador y model card

En la sesión 7, definid tres estados: «preparado», «actividad de maqueta» y «pausa/detenido». El programa solo muestra un icono y una duración breve tras una clasificación prevista; cuando el modelo no reconoce el patrón, permanece en estado neutro y espera una acción manual. Probad cada transición y asegurad que el botón de parada funciona desde cualquier estado. No se envía ninguna alerta ni se calcula ninguna puntuación.

La tarjeta del modelo final contiene: propósito restringido, datos usados y datos excluidos, etiquetas y quién las definió, cómo se han limpiado las muestras, conjunto de prueba separado, aciertos/errores/dudas, limitaciones y posibles efectos si alguien intentara usarlo con personas. Una pareja revisora debe poder identificar en menos de un minuto para qué sirve el modelo y para qué no sirve. La exposición muestra solo resultados anónimos del prototipo, sin datos brutos identificables.

## 🔗 Unidad oficial adaptada

Esta situación adapta las ocho lecciones de micro:bit [Developing AI literacy with the micro:bit](https://microbit.org/teach/lessons/developing-ai-literacy-with-the-microbit/): hablar de IA, datos, recoger/limpiar, probar, sesgo, mejorar, programar con el modelo y evaluar diseño/impacto. El contexto de maqueta, el uso de datos de objeto y los criterios del temporizador son propios.
