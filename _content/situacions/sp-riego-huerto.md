---
active: true
title: "Un indicador de riego para el huerto escolar"
description: "Adaptamos Veggie Love: leemos la previsión de precipitación, calibramos un indicador y argumentamos una decisión para un huerto de maqueta."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Ciencias, Matemáticas y Tecnología"
theme: "sostenibilitat"
theme_label: "Agricultura y datos meteorológicos"
duration: "3 sesiones de 45–60 min"
challenge: "¿Cómo podemos transformar la previsión de lluvia de una semana en un indicador calibrado y útil para tomar una decisión sobre una maqueta de huerto?"
---

![Hub y mecanismo motorizado SPIKE Prime junto a una maqueta de tomateras y una pantalla con iconos de previsión meteorológica.](../../_assets/situacions/sp-reg-hort.webp)

_El indicador representa un dato de previsión; no mide la humedad del suelo ni decide el riego de un huerto real._

## 🌱 Reto e intención

La clase prepara un indicador visual que ayude a hablar de las necesidades de agua de un huerto escolar. La situación adapta *Veggie Love* de LEGO Education: construimos un «tomato-meter», consultamos datos meteorológicos cuantitativos de la nube para una ciudad y hacemos que una aguja represente la precipitación prevista acumulada para la semana. Investigamos la relación entre dato, escala y decisión sin convertir la maqueta en una recomendación agronómica: el riego real depende también del suelo, la especie, el cultivo y las observaciones del huerto. La conversación inicial también contrasta por qué algunos cultivos o regiones tienen periodos de crecimiento diferentes; no se asume que una previsión semanal determine por sí sola la necesidad de agua.

## 🎯 Aprendizajes y vocabulario

- Interpretar una serie semanal de precipitación con fuente, fechas y unidades explícitas.
- Calibrar una escala de maqueta y probar los valores en los límites y entre intervalos.
- Programar un indicador que represente los datos sin confundir previsión con medida del suelo.
- Argumentar una decisión para un huerto de maqueta y dejar claro que no controla un riego real.

## 📅 Secuencia didáctica · 3 sesiones de 45–60 min

### **S1 · De la previsión a una pregunta investigable (45–60 min).**

#### Fase 1 · Activamos y predecimos

Activad ideas previas sobre estaciones, cultivos y lluvia: ¿qué necesitaría saber una persona que cuida tomateras? Distinguid precipitación prevista, lluvia observada y humedad del suelo.

#### Fase 2 · Exploramos y construimos

En parejas, construid o adaptad un indicador de papel con aguja motorizada. Elegid una ciudad y ejecutad el programa con los bloques de datos meteorológicos disponibles en la app SPIKE. Si no hay conexión o los bloques no están disponibles, usad una captura fechada o una tabla docente y etiquetadla como dato archivado.

#### Fase 3 · Explicamos y registramos

Anotad ciudad, fecha y hora, unidad y periodo del dato. Comprobad si el bloque proporciona el total semanal o siete valores diarios; si son diarios, sumad una sola vez los siete días del mismo periodo y escribid la operación. No mezcléis días incompletos ni una previsión con observaciones. Dibujad el esquema e indicad qué variable no se mide: el modelo no incorpora humedad del suelo.

![Modelo SPIKE Prime real junto a tres representaciones separadas: previsión meteorológica, lluvia observada y perfil de suelo con una planta de maqueta.](../../_assets/situacions/sa-sp-reg-hort-dades.webp)

_El modelo motorizado representa un dato elegido; no mide la lluvia ni la humedad del suelo._

#### Fase 4 · Aplicamos y mejoramos

Comparad el dato con lo que representa la aguja y revisad la escala inicial si las unidades o el periodo no quedan claros. Mantened separados los datos en vivo y los archivados.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué representa el indicador y qué no permite concluir sobre el riego. **Evidencia:** diagrama de maqueta y ficha que diferencia dato en vivo, dato guardado y variable no medida.

### **S2 · Calibramos el tomato-meter con la precipitación semanal (45–60 min).**

#### Fase 1 · Activamos y predecimos

Leed el total semanal de precipitación prevista y decidid qué escala física lo representará. Para una primera prueba común, usad una escala didáctica de **0–60 mm** en **0–180°**; no es un máximo meteorológico ni una necesidad de riego. Marcad los dos extremos y las divisiones antes de mover la aguja. Predecid dónde caerán 0, 15, 30, 45 y 60 mm.

#### Fase 2 · Exploramos y construimos

Programad una respuesta proporcional entre el dato `p` y el ángulo del motor, después de alinear y poner la aguja a cero: `angle = (p / 60) × 180`. Así, 0, 15, 30, 45 y 60 mm deben apuntar, respectivamente, a 0°, 45°, 90°, 135° y 180°. Si la entrada está ausente, es negativa o no es numérica, indicad error y no la convirtáis en cero. Si `p` supera 60 mm, mostrad «fuera de escala» y decidid si ampliáis el máximo; no recortéis silenciosamente el dato a 60. Como ampliación, cambiad el rango con una regla documentada.

#### Fase 3 · Explicamos y registramos

Probad los cinco valores de referencia (0, 15, 30, 45 y 60 mm) y anotad valor, ángulo esperado, ángulo observado y diferencia. Reiniciad la posición del motor antes de cada prueba y haced dos lecturas por caso. Otra pareja revisa los desajustes y explica una causa posible: alineación inicial, lectura del dato, sentido de giro o relación de conversión.

![Modelo SPIKE Prime de la dotación junto a un indicador semicircular de papel con aguja motorizada y cinco tarjetas de gotas para probar una escala proporcional.](../../_assets/situacions/sa-sp-reg-hort-calibratge.webp)

_La ilustración es una guía conceptual: la escala impresa y el montaje se deben construir y validar con el kit del centro._

#### Fase 4 · Aplicamos y mejoramos

Cambiad una sola regla de escala cada vez y volved a probar los mismos valores de referencia. Si ampliáis el rango porque la previsión lo supera, actualizad a la vez la etiqueta de la escala y la conversión del programa. Documentad una iteración y comprobad si la nueva conversión mejora la lectura sin ocultar datos fuera de rango.

#### Fase 5 · Comprobamos y reflexionamos

Explicad cómo el dato se ha transformado en movimiento y qué significa el error de la escala. **Evidencia:** tabla de valores, posiciones previstas/observadas e iteración documentada.

### **S3 · Recalibramos para otro dato y comunicamos los límites (45–60 min).**

#### Fase 1 · Activamos y predecimos

Sin cambiar el montaje, predecid por qué no se puede reutilizar directamente la conversión de precipitación: lluvia semanal acumulada en milímetros y temperatura en grados son magnitudes y unidades diferentes. Identificad la nueva variable, la unidad que muestra la app y un rango que incluya los valores previstos; si trabajáis en °C, no presupongáis que la temperatura mínima sea cero. Elegid también una tarjeta propia de necesidades de agua para un cultivo ficticio y distinguidla de los datos meteorológicos: es una condición del reto, no un dato científico ni una orden de riego.

#### Fase 2 · Exploramos y construimos

Recalibrad la escala para la temperatura prevista: definid `t_min` y `t_max`, asignadlos a los dos extremos angulares y usad `angle = ((t − t_min) / (t_max − t_min)) × 180`. En una prueba didáctica de −5 a 35 °C, −5, 15 y 35 °C deben dar 0°, 90° y 180°; si el rango real de la previsión queda fuera, marcad «fuera de escala» y volved a calibrar. Mantened esta conversión separada de la precipitación. Como ampliación, cread tarjetas propias de necesidades de agua para cultivos ficticios o representad velocidad del viento/temperatura en momentos diferentes, definiendo de nuevo la variable, la unidad y el rango.

![Modelo SPIKE Prime de la dotación junto a un indicador motorizado y dos tarjetas separadas: precipitación con gotas y temperatura con termómetro; una tomatera de maqueta completa la escena.](../../_assets/situacions/sa-sp-reg-hort-recalibratge-v2.webp)

_Las tarjetas representan entradas de datos diferentes; el prototipo recalibra la escala y no mide ni la lluvia ni la temperatura._

#### Fase 3 · Explicamos y registramos

Comparad ciudades o periodos con datos fechados. Preparad una tarjeta con fuente, fecha, variable, unidades y la regla de escala. Si es posible, contrastad el indicador con una entrevista a una persona agricultora u horticultora; si no, usad una fuente divulgativa fiable, sin pedir ubicaciones privadas ni recomendaciones para un cultivo concreto. Preguntad qué instrumentos reales se utilizan y comparadlos con el tomato-meter: ¿qué magnitud miden, qué unidades dan y qué información adicional necesitaría una decisión de riego? Las profesiones y los instrumentos son una extensión de investigación, no una validación del prototipo.

#### Fase 4 · Aplicamos y mejoramos

Revisad la explicación para que separe dato previsto, representación de la escala y decisión pendiente. Comprobad que los valores negativos de temperatura sean posibles dentro del rango y que no se hayan interpretado como error; solo una entrada ausente o incompatible se rechaza. Indicad qué habría que comprobar antes de tomar una decisión real: la previsión no es una medida del suelo ni una instrucción de riego.

#### Fase 5 · Comprobamos y reflexionamos

Presentad las dos escalas calibradas y la conclusión con sus límites. Cada persona elige una autoevaluación: **azul**, puedo mover la aguja según un dato; **amarillo**, represento correctamente el total semanal; **violeta**, puedo mostrar una temperatura en una escala recalibrada. Una pareja aporta un comentario concreto y una propuesta de mejora para la prueba siguiente. **Evidencia:** dos escalas, tarjeta de necesidades ficticia, ficha explicativa con fuente y fecha, comparación con un instrumento o una fuente profesional y conclusión que separa observación, interpretación y decisión pendiente.

## 🧰 Materiales y preparación

Set SPIKE Prime, hub, motor y piezas para un indicador de papel; ordenador o tableta con la app SPIKE y los bloques de previsión meteorológica activados; papel, rotuladores y regla. Antes de clase, comprobad que la conexión, la ubicación seleccionable y los datos requeridos funcionan en el dispositivo del centro. Preparad una tabla meteorológica fechada como alternativa equivalente para analizar datos cuando el servicio no esté disponible. No hace falta sensor de humedad: el kit SPIKE Prime no lo proporciona.

## 🧪 Evidencias y evaluación

Recoged el boceto y el montaje, el registro de consulta, las dos reglas de conversión, las tablas con valores esperados y observados, el error de escala, los datos fuera de rango, la recalibración y la comunicación final. Valorad si el alumnado diferencia suma semanal y temperatura, elige unidades y rango coherentes, prueba valores de referencia, explica un error y recalibra sin reutilizar una conversión incompatible. Autoevaluación: **azul**, hago mover la aguja según un dato; **amarillo**, represento el total semanal con una escala probada; **violeta**, recalibro para temperatura y explico qué hago con valores negativos o fuera de rango. El retorno entre parejas debe indicar una mejora concreta y una limitación.

## ♿ Participación, privacidad y límites

Repartid roles de consulta, programación, lectura de escala y documentación, con instrucciones visuales y códigos redundantes en color. Consultad solo ciudades públicas, no ubicaciones personales. El indicador comunica una previsión y su transformación; no es un pluviómetro ni un sensor de suelo, no determina si una planta necesita agua y no sustituye la observación de las personas responsables del huerto.

## 🔗 Lección oficial adaptada

Esta ficha adapta [Veggie Love](https://education.lego.com/en-us/lessons/prime-life-hacks/veggie-love/), quinta lección de [Life Hacks](https://education.lego.com/en-us/lessons/prime-life-hacks/): montaje en parejas del tomato-meter, selección de una ciudad, lectura de precipitación prevista, movimiento proporcional de la aguja, suma semanal, ayuda entre parejas, extensión a la temperatura, recalibración, tarjetas de necesidades de agua y evaluación de la fiabilidad de la escala. La propuesta hace observable la proporcionalidad con una escala de ejemplo 0–60 mm → 0–180°, cinco puntos de prueba y detección de entradas fuera de rango; la temperatura usa una conversión separada que admite valores negativos. Estas escalas son herramientas didácticas, no parámetros universales ni recomendaciones agronómicas. La situación, las explicaciones, los registros y la imagen son propios; las instrucciones y la hoja del alumnado del fabricante continúan en la app SPIKE.
