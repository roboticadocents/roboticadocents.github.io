---
active: true
title: "Un indicador para leer datos de viento"
description: "Adaptamos Wind Speed de SPIKE Prime: representamos datos cuantitativos del viento con una escala calibrada, condiciones y dirección."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Ciencias, Matemáticas y Tecnología"
theme: "sostenibilitat"
theme_label: "Meteorologia y datos"
duration: "3 sesiones de 45–60 min"
challenge: "¿Cómo podemos convertir la velocidad prevista del viento en una representación calibrada, comparable y comprensible?"
---

![Hub SPIKE Prime e indicador mecánico de viento junto a una pantalla que representa datos meteorológicos por categorías.](../../_assets/situacions/sp-vent-model.webp)

_La maqueta muestra datos consultados en la nube; no mide el viento que hace en el patio._

## 🌬️ Reto e intención

**Situación:** Transformamos una previsión meteorológica en una representación que se pueda leer y comparar. En equipos, construimos un indicador accionado por motor, calibramos la escala y programamos condiciones para clasificar cuatro intervalos inspirados en la escala Beaufort.

> **Pregunta guía:** ¿Cómo podemos convertir un dato de velocidad del viento en una representación calibrada, comparable y comprensible?

> **Límite del modelo:** La maqueta representa datos de una previsión para una ubicación y una hora. No mide el viento del patio ni es un dispositivo de aviso o seguridad.

## 🎯 Aprendizajes y vocabulario

- Interpretar un dato cuantitativo de velocidad del viento e identificar su fuente y sus unidades.
- Construir y calibrar un indicador con intervalos que se puedan distinguir y probar.
- Añadir una segunda condición o dirección y comprobar cómo cambia la representación.
- Comunicar que el prototipo representa datos y no mide el viento ni sustituye los avisos oficiales.
- Elaborar un mensaje divulgativo breve con fuente, ubicación, hora y límites de la previsión; relacionar el trabajo con tareas de meteorología, ciencia de datos e ingeniería.

## 📅 Secuencia didáctica · 3 sesiones

### **S1 · Construimos e interpretamos un indicador (45–60 min).**

#### Fase 1 · Activamos y predecimos

Hablad de cómo cambian las actividades cotidianas cuando hace viento y de cómo distinguimos una brisa de un viento fuerte. Presentad la escala Beaufort como una clasificación de referencia, no como una medida del patio. Cada equipo predice qué posición o categoría mostrará el indicador ante una velocidad elegida.

#### Fase 2 · Exploramos y construimos

En parejas, montad una base estable con una aguja o placa ligera y un motor SPIKE. Alinead el motor para que el ángulo programado corresponda al sentido de la flecha. Elegid una ciudad pública en la app, leed la velocidad y ejecutad el programa inicial. Si no hay consulta en vivo, usad una tabla de valores fechada e identificadla como una simulación archivada.

#### Fase 3 · Explicamos y registramos

Describid qué muestra el indicador y cómo se relaciona el dato con la posición. Registrad ciudad, fecha, hora, unidad y fuente; dibujad el mecanismo y señalad qué parte es entrada de datos, proceso y salida del modelo.

#### Fase 4 · Aplicamos y mejoramos

Comparad la lectura inicial con una segunda velocidad. Si la aguja no señala la categoría prevista, revisad la alineación o el programa y cambiad una sola cosa antes de repetir la prueba.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué representa la aguja y qué no permite concluir la maqueta. **Evidencia:** dibujo del mecanismo, ciudad, fecha, hora y unidades consultadas, predicción y dos lecturas comparadas.

### **S2 · Calibramos cuatro intervalos con condiciones (45–60 min).**

#### Fase 1 · Activamos y predecimos

Ordenad tarjetas de velocidad y asociad cada banda con el color acordado. Mantened las unidades visibles: **calma · fuerza 0:** 0–<0,5 m/s; **azul · fuerzas 1–3:** 0,5–<5,5 m/s; **verde · fuerzas 4–6:** 5,5–<13,8 m/s; **amarillo · fuerzas 7–9:** 13,8–<24,4 m/s; **rojo · fuerzas 10–12:** ≥24,4 m/s. Los cuatro colores agrupan fuerzas según el resumen de LEGO; no son los trece tramos completos de la escala Beaufort. La fuerza 12 no tiene límite superior. Predecid el resultado en cada frontera.

![Cuatro grupos de líneas de viento que aumentan de intensidad, de azul a verde, amarillo y rojo.](../../_assets/situacions/sa-sp-vent-beaufort.webp)

_Representación cualitativa de los cuatro tramos; no es una escala de medida. Para programar, usad los valores y las unidades._

#### Fase 2 · Exploramos y construimos

Como andamiaje, podéis empezar con dos intervalos; el reto compartido es llegar a los cuatro y verificarlos.

1. Escribid una tabla de umbrales con unidades coherentes y decidid a qué tramo pertenece cada valor de frontera.
2. Programad condiciones *si / si no* para que cada tramo active el color o el ángulo asignado.
3. Tratad **0 ≤ velocidad < 0,5 m/s como calma (fuerza 0)**, separada de los cuatro colores.
4. Probad 0; 0,49; 0,5; 5,49; 5,5; 13,79; 13,8; 24,39; 24,4; 32,7 y 32,71 m/s. Cada valor válido debe recibir una sola clasificación; un dato ausente, negativo o no numérico se debe marcar como inválido, no como calma.
5. Anotad si cada caso queda clasificado como esperabais y corregid las condiciones cuando haga falta.

#### Fase 3 · Explicamos y registramos

Describid cómo las condiciones transforman datos continuos en grupos discretos. Guardad la tabla, el pseudocódigo o el esquema de condiciones e indicad qué hace cada frontera.

#### Fase 4 · Aplicamos y mejoramos

Repetid las pruebas de frontera, incluido un valor superior a 32,7 m/s, que continúa dentro de la fuerza 12. Comprobad también que la entrada inválida queda diferenciada de la calma. Anotad si cada caso se clasifica como esperabais y corregid las condiciones cuando haga falta; volved a ejecutar los casos afectados.

#### Fase 5 · Comprobamos y reflexionamos

Otra pareja revisa si las cuatro bandas cubren los casos previstos y si la calma y los valores fuera de rango tienen una respuesta definida. **Evidencia:** tabla de umbrales, pseudocódigo, casos de prueba y una corrección explicada.

### **S3 · Comparamos ubicaciones y añadimos dirección (45–60 min).**

#### Fase 1 · Activamos y predecimos

Antes de ejecutar el programa, comparad dos velocidades en cada una de tres ciudades públicas y predecid qué categoría corresponderá a cada dato. Distinguid estos datos de las condiciones meteorológicas locales del centro.

#### Fase 2 · Exploramos y construimos

Ejecutad el mismo programa con al menos dos velocidades diferentes en cada una de las tres ciudades. Añadid la dirección del viento con flechas a la matriz LED del hub. Si hay tiempo, ampliad el indicador hasta 180° y medid cuánto tarda el equipo en recalibrarlo; un segundo motor para el dial es opcional. Para la ampliación, convertid los datos a otra unidad (por ejemplo, km/h), haced explícito el factor de conversión y comprobad un valor de frontera.

![Hub SPIKE Prime conectado a un motor que mueve una aguja ante cuatro tramos de colores: azul, verde, amarillo y rojo; una cinta blanca representa el viento.](../../_assets/situacions/sa-sp-vent-indicador.webp)

_La aguja representa la categoría de la previsión seleccionada; la maqueta no capta el viento del aula ni del patio._

#### Fase 3 · Explicamos y registramos

Preparad una tabla que compare ubicación, hora, fuente, velocidad, categoría y dirección. Explicad qué puede inferir el modelo a partir de estos datos y qué queda fuera de su alcance.

#### Fase 4 · Aplicamos y mejoramos

Revisad una categoría o recalibrad el indicador si los resultados de dos ubicaciones no concuerdan con los datos. Si usáis un segundo motor, probad el dial de dirección; si no, mantened la matriz LED como opción base. Contrastad la explicación con una fuente divulgativa fiable o una persona experta, si es posible. Como extensión de comunicación, preparad un mensaje oral, escrito o pictográfico de 30 segundos con la ciudad, la hora, la velocidad prevista, la dirección, la fuente y una limitación del modelo. Debe presentarse como una previsión didáctica, nunca como una alerta meteorológica ni una indicación para suspender actividades. Si hay tiempo, investigad una tarea concreta de meteorología, ciencia de datos o ingeniería relacionada con medir o comunicar el viento, y contrastadla con una fuente identificada.

#### Fase 5 · Comprobamos y reflexionamos

Presentad la comparación citando fuente, ubicación y hora. Indicad que la previsión corresponde a un lugar y momento determinados y que la maqueta no mide el viento del aula o del patio ni sustituye avisos oficiales. Apagad y devolved los materiales al set. **Evidencia:** comparación de tres ubicaciones, programa con velocidad y dirección, registro de calibración, mensaje divulgativo con su limitación y, si se ha hecho la extensión, una nota con la profesión investigada y la fuente.

## 🧰 Materiales y preparación

**Materiales:** Preparad los elementos necesarios para el montaje, la consulta de datos y las pruebas.

- Hub SPIKE Prime, un motor y piezas para una base estable y un indicador ligero.
- Ordenador o tableta con la app y los bloques meteorológicos en la nube.
- Tarjetas, papel, regla y plantilla de ángulos para la ampliación a 180°.
- Tabla de valores fechada y con unidades por si no hay conexión.
- Un segundo motor para el dial de dirección, opcional; la matriz LED ya permite representarla.

Antes de la sesión, confirmad el acceso a los datos, la ciudad consultable, la unidad disponible y el funcionamiento del programa. Preparad también las tarjetas de clasificación desconectada.

## 🧪 Evidencias y evaluación

Recoged una carpeta de proceso con:

- Predicción inicial y dibujo del montaje.
- Registro de datos, ubicación, hora y unidades; incluid la conversión si es necesaria.
- Tabla de cuatro categorías y programa condicional.
- Pruebas de los umbrales, casos de frontera y revisión de una condición.
- Comparación de tres ciudades y representación de la dirección.

**Criterios de éxito:** el alumnado calibra el indicador para la unidad empleada, justifica los límites, clasifica los casos de prueba y revisa el programa a partir de los resultados. En la ampliación, combina velocidad y dirección en el programa. El retorno entre parejas señala una prueba que falta.

**Autoevaluación:**

- **En proceso:** represento dos velocidades en tres ubicaciones.
- **Alcanzado:** clasifico las cuatro bandas en tres ubicaciones y compruebo los umbrales.
- **Ampliación:** añado la dirección; si dispongo de un segundo motor, la muestro con un dial y lo recalibro hasta 180°.

## ♿ Participación y límites

- Mostrad cada categoría con color **y** con una palabra, símbolo, explicación oral o tarjeta táctil; no dependáis solo del color.
- Consultad ciudades públicas y no introduzcáis ubicaciones personales.
- Explicad que la previsión corresponde a una ubicación y una hora, y no describe necesariamente el patio.
- Ante una situación meteorológica adversa, seguid los canales oficiales y las indicaciones del centro.

## 🔗 Lección oficial adaptada

La secuencia adapta [Wind Speed](https://education.lego.com/en-us/lessons/prime-life-hacks/wind-speed/), cuarta lección de [Life Hacks](https://education.lego.com/en-us/lessons/prime-life-hacks/). Conserva el montaje en parejas y la alineación del motor, la consulta de una ciudad, la representación de datos de la nube, las cuatro bandas de color, la comparación de ubicaciones, la ampliación a la dirección del viento y la recalibración a 180°. Las bandas de color reproducen la agrupación resumida de LEGO para fuerzas 1–12; la calma (fuerza 0) se trata aparte y la fuerza 12 no tiene máximo. Las fronteras se prueban con intervalos sin huecos ni solapamientos, de acuerdo con la [tabla de la escala Beaufort del Met Office](https://weather.metoffice.gov.uk/guides/coast-and-sea/beaufort-scale) y la [referencia del National Weather Service](https://www.weather.gov/media/wrh/online_publications/TMs/TM-218.pdf). También adapta la extensión oficial de comunicación y los itinerarios profesionales, sin convertir la previsión en una alerta real; incorpora clasificación desconectada, registro de datos y límites de uso. La situación, el registro, la programación y las ilustraciones son propios; los materiales docentes completos remiten a la app SPIKE.
