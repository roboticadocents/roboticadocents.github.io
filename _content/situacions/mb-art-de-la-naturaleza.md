---
active: true
title: "Arte de la naturaleza en píxeles"
description: "¿Cómo podemos observar formas de la naturaleza, abstraer sus rasgos esenciales y representarlas con micro:bit?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "artistica"
subject_label: "Educación Artística, Medio y Tecnología"
theme: "natura"
theme_label: "Observación y representación"
duration: "4 sesiones · 180 min"
challenge: "¿Qué rasgos de una forma natural podemos conservar cuando la representamos primero con materiales y después con cinco por cinco píxeles?"
---

![Una placa micro:bit junto a tarjetas botánicas con bocetos sencillos de hoja, semilla y flor.](../../_assets/situacions/mb-art-de-la-natura.webp)

_La representación digital es una interpretación de una observación, no una reproducción exacta de la naturaleza._

## 🌱 Situación e intención

Una galería del humedal de la Albufera mostrará cómo una observación natural se puede representar con medios diferentes. Cada equipo elige una planta, semilla, hoja o ave que aparezca en una imagen autorizada o en una observación del patio; identifica un rasgo relevante, lo representa con técnicas artísticas y finalmente lo codifica en la matriz de micro:bit. La secuencia combina abstracción, razonamiento lógico, algoritmos, depuración y evaluación. Las representaciones son interpretaciones: un icono de 25 LEDs no es una identificación científica ni sustituye a una guía de campo.

La unidad oficial *Nature art* contiene cuatro lecciones para 7–8 años: observación y representación con materiales, algoritmos de arte, representación digital con LEDs y programación/evaluación de imágenes. Esta situación conserva la progresión y sitúa el trabajo en un entorno valenciano; una visita física es opcional y nunca implica recolectar seres vivos.

## 🎯 Aprendizajes y vocabulario

- Observar formas naturales con respeto y elegir rasgos esenciales para una representación.
- Descomponer un icono en una cuadrícula de 5×5 y explicar qué información conserva o pierde.
- Escribir y depurar un algoritmo para representar una forma con materiales y píxeles.
- Comparar interpretaciones, justificar decisiones artísticas y evitar presentar un icono como una identificación científica.

## 🧰 Materiales y preparación

Preparad micro:bit física o simulador, MakeCode, cable USB si se va a transferir a la placa, cuadrículas de 5 × 5, cuaderno de observación, lápices, papel translúcido o cartulina, ceras/lápices de colores y recortes de materiales de arte no tóxicos. Elegid una zona segura del patio o imágenes e ilustraciones con uso autorizado. Se puede consultar la [guía pública del Parque Natural de la Albufera](https://parquesnaturales.gva.es/documents/80302883/168872077/RUTA%2B1%2B-%2B%2BVOLTA%2BA%2BL%27ALBUFERA%2BEN%2BBICICLETA.pdf/efb00d45-964e-4115-a8fe-6e30bb45508c) para decidir qué investigar; anotad la fuente y no afirméis el nombre de una especie si no lo habéis verificado. Revisad el flujo de descarga de MakeCode antes de la sesión. Mantened la micro:bit seca y no la llevéis al humedal.

## 📅 Secuencia didáctica · cuatro sesiones de 45 minutos

### **Sesión 1 · Representamos la naturaleza con materiales (45 min).**

#### Fase 1 · Activamos y predecimos

**Mirada atenta (5 min).** Presentad una imagen autorizada o haced una observación breve desde un lugar seguro del patio. Distinguid lo que se ve directamente de lo que solo se infiere. Antes de dibujar, cada persona predice qué rasgo permitirá reconocer el elemento si se quitan el color, la textura y el fondo.

#### Fase 2 · Exploramos y construimos

**Bocetos y materiales (25 min).** Dibujad contorno, repetición y proporción sin arrancar ni tocar plantas o animales. Haced dos representaciones con técnicas diferentes —línea, collage, estampa de papel o textura frotada sobre una superficie artificial— y comparad qué conserva cada una.

#### Fase 3 · Explicamos y registramos

Anotad la predicción, el rasgo elegido y las decisiones de cada representación. Una pareja observa las dos propuestas sin que el autor adelante la respuesta y señala qué pista visual le ha ayudado.

#### Fase 4 · Aplicamos y mejoramos

El autor decide si la simplificación funciona y modifica un detalle —contorno, proporción o repetición— a partir del retorno. Mantened las dos versiones para poder compararlas.

#### Fase 5 · Comprobamos y reflexionamos

Comprobad si la pareja reconoce el rasgo elegido y explicad qué se ha conservado o perdido en cada técnica. **Evidencia:** registro de observación y predicción, dos representaciones materiales y comentario comparativo.

### **Sesión 2 · Escribimos y depuramos algoritmos de arte (45 min).**

#### Fase 1 · Activamos y predecimos

**Recordamos el orden (5 min).** Ordenad tarjetas con las instrucciones «prepara base», «elige forma», «sitúa elemento» y «añade detalle». Predecid qué pasaría si se intercambiaran dos pasos y explicad que un algoritmo es una secuencia de instrucciones para conseguir un resultado.

#### Fase 2 · Exploramos y construimos

**Descomponemos la representación (10 min).** Elegid una obra de la sesión anterior y divididla en forma exterior, detalles, posición y acabado. **Escribimos instrucciones (10 min).** Cada paso debe indicar una acción y un lugar; cambiad expresiones ambiguas como «hazlo bonito» por instrucciones observables, como «añade tres líneas cortas a la derecha».

#### Fase 3 · Explicamos y registramos

**Prueba entre parejas (12 min).** Otra pareja sigue las instrucciones sin ver el modelo final. Marca el primer paso que no puede interpretar y describe qué necesita saber para continuar. Registrad tanto el resultado como las dudas, sin corregirlas antes de la prueba.

#### Fase 4 · Aplicamos y mejoramos

**Depuramos (8 min).** Reescribid solo las instrucciones que han causado confusión y pedid a la pareja que repita la prueba. Comparad el primer y el segundo resultado para comprobar si el cambio ha resuelto el problema.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué instrucción se ha concretado y cómo ha afectado al resultado. **Evidencia:** algoritmo inicial anotado, resultado de la prueba entre equipos y versión depurada.

### **Sesión 3 · Diseñamos una representación digital (45 min).**

#### Fase 1 · Activamos y predecimos

**Partes y salida (5 min).** Localizad la matriz LED, los botones y la conexión USB de micro:bit. Explicad que los LED forman una salida visual y predecid qué detalles de la representación se podrán distinguir en una cuadrícula de solo 5 × 5.

#### Fase 2 · Exploramos y construimos

**Planificamos (10 min).** Representad el elemento con un máximo de 25 celdas; numerad filas y columnas o usad transparencias para que quede claro qué se enciende. **Programamos (15 min).** Otra persona lee la cuadrícula y anticipa la imagen antes de abrir MakeCode. Pasad los píxeles al programa con las órdenes LED y ejecutadlo en el simulador. Si usáis una placa, descargad el programa y comprobad que se muestra como en el simulador.

#### Fase 3 · Explicamos y registramos

Comparad la predicción con la salida y anotad en qué fila o columna aparece cualquier diferencia. Guardad la cuadrícula y el programa para que otra persona pueda reconstruir la representación.

#### Fase 4 · Aplicamos y mejoramos

Cambiad uno o dos píxeles y observad si el rasgo identificativo mejora o se pierde. No añadáis detalles que la resolución no puede representar; justificad cada cambio con el criterio de legibilidad elegido.

#### Fase 5 · Comprobamos y reflexionamos

Volved a ejecutar el programa y comprobad si la salida coincide con la cuadrícula revisada. **Evidencia:** algoritmo visual, programa, predicción inicial, comparación con la salida y nota sobre el cambio.

### **Sesión 4 · Programamos y evaluamos representaciones (45 min).**

#### Fase 1 · Activamos y predecimos

**Nueva observación (5 min).** Elegid un segundo elemento u otro punto de vista del primero. Anotad qué rasgo queréis conservar y predecid cómo lo representaréis con los 25 píxeles disponibles.

#### Fase 2 · Exploramos y construimos

**Planificamos y codificamos (15 min).** Diseñad una segunda imagen o una secuencia de dos imágenes estáticas; pasadla a MakeCode y probadla en el simulador o en micro:bit. Mantened cada imagen el tiempo suficiente para que se pueda observar.

#### Fase 3 · Explicamos y registramos

**Prueba de audiencia (10 min).** Mostrad la imagen sin decir qué representa y pedid a dos observadores qué características reconocen en ella. Registrad las respuestas literalmente, sin calificarlas como acierto o error científico.

#### Fase 4 · Aplicamos y mejoramos

Elegid un criterio explícito —legibilidad, semejanza de un rasgo, uso de los píxeles o coherencia con la fuente— y revisad la imagen a partir del retorno. Anotad si aceptáis cada propuesta y por qué.

#### Fase 5 · Comprobamos y reflexionamos

Presentad la versión inicial y la final. Explicad la abstracción, un error depurado y una mejora posible. **Evidencia:** segundo icono o secuencia, retorno de los observadores, cambio probado y reflexión del equipo.

## 📊 Criterios de éxito y evaluación

Recoged cuaderno de observación, predicción inicial, dos representaciones materiales, algoritmo antes/después de la prueba, cuadrículas digitales, proyecto MakeCode y retorno de dos observadores. Valorad si el alumnado (1) separa observación e inferencia, (2) selecciona rasgos relevantes en lugar de copiar todos los detalles, (3) escribe instrucciones ordenadas que otra persona puede seguir, (4) predice y comprueba la salida LED, y (5) mejora el producto citando un criterio concreto. Si la placa no está disponible, el simulador es una alternativa para programar; para evaluar la transferencia física, registradla como pendiente en lugar de atribuirla a la simulación.

## ♿ Participación y accesibilidad

Ofreced muestras grandes, lupa digital o ilustración con contraste, cuadrículas de 5 × 5 impresas y plantillas con punto de inicio. Permitid respuestas por voz, pictograma, boceto o comunicación aumentativa. Se pueden repartir roles de observación, selección de rasgos, escritura de algoritmo, programación y registro, y cambiarlos entre sesiones. El parpadeo no es necesario: las imágenes pueden aparecer de forma estática y cada observador puede elegir si quiere mirarlas. No pidáis dibujar con precisión motriz fina para poder explicar un patrón.

## 🔗 Unidad oficial adaptada

[Nature art](https://microbit.org/teach/lessons/nature-art-unit-of-work/) es una unidad de cuatro lecciones para 7–8 años: observación y representación de naturaleza con materiales; redacción, prueba y depuración de algoritmos artísticos; planificación visual de imágenes LED y programación MakeCode; y predicción, programación, evaluación y reflexión sobre el pensamiento computacional. Esta propuesta conserva cada fase y amplía sus evidencias, crea un contexto de la Albufera y no reutiliza las ilustraciones oficiales.
