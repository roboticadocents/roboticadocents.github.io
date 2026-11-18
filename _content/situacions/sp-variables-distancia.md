---
active: true
title: "Medir para decidir"
description: "Seis lecciones SPIKE Prime sobre orientación del hub, variables, contadores, distancia, velocidad y decisiones de gestión con datos."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Economía"
theme: "dades"
theme_label: "Variables, medidas y gestión"
duration: "6 lecciones · 7–9 sesiones"
challenge: "¿Cómo usamos variables y medidas repetibles para decidir qué ruta de servicio escolar conviene en una maqueta?"
---

![Base móvil real LEGO SPIKE Prime en una pista corta de mesa, con un objetivo de papel y una regla para medir el recorrido.](../../_assets/situacions/sp-variables-distancia.webp)

_Una medida solo es útil si sabemos qué representa, cómo se ha obtenido y qué incertidumbre tiene._

## 🌱 Reto e intención

La biblioteca prepara un plano de rutas para una jornada escolar simulada. Los equipos deben representar movimientos en una cuadrícula, leer datos de orientación del hub, programar variables que cuentan destinos y comparar la distancia prevista con la recorrida por una base SPIKE Prime. Al final, cada equipo recomienda una ruta dentro de un presupuesto ficticio de tiempo y materiales y explica qué datos justifican la decisión. La secuencia adapta las seis lecciones de la unidad *Variables* de *Foundations of Physical Computing*. Las prácticas de «vuelo» de la fuente se convierten en modelos a mano y trayectorias de mesa: SPIKE Prime no es un dron y su orientación no mide la posición de un vehículo en el espacio.

## 🧭 Ideas clave

- **Yaw:** giro alrededor del eje vertical; **pitch** y **roll:** inclinaciones en dos ejes diferentes. Usad los términos como convención para describir orientación.

- **Variable:** nombre asociado a un valor que el programa puede leer y actualizar, como `paquets_blaus` o `distancia_cm`.

- **Medida:** la predicción calculada con la circunferencia de la rueda no es idéntica al recorrido real, que depende de la superficie, el deslizamiento, la alineación y la batería.

- **Decisión:** una recomendación debe indicar criterios, costes simulados y límites de los datos.

## 🎯 Aprendizajes y vocabulario

- Usar variables y contadores para describir la orientación, la distancia y la velocidad de una maqueta.
- Hacer medidas repetibles y registrar unidades, condiciones iniciales y diferencias entre intentos.
- Comparar rutas de servicio simuladas con criterios explícitos de distancia y tiempo.
- Explicar los límites de las medidas y evitar extrapolarlas a distancias reales sin calibración.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Orientarse sin volar (60–90 min).**

#### Fase 1 · Activamos y predecimos

Abrid con dos preguntas: ¿cómo sabemos si un movimiento es preciso y qué puede revelar un gráfico? Cada alumno anota una hipótesis sobre la información que podría dar una curva de orientación.

#### Fase 2 · Exploramos y construimos

Con un máximo de diez piezas, construid un modelo con delante, detrás, arriba y abajo. Representad pitch (inclinación del frente), roll (inclinación lateral), yaw (giro sobre el eje vertical) y dos combinaciones. Montad después un marco con asa que sujete el hub sin tapar la matriz y marcad su parte delantera.

#### Fase 3 · Explicamos y registramos

Conectad el hub por USB o Bluetooth, abrid el gráfico de línea de la app SPIKE y configurad el flujo de datos de orientación. Dibujad la predicción antes de empezar y fijad una posición inicial estable, con la matriz orientada hacia el alumnado.

#### Fase 4 · Aplicamos y mejoramos

Programad una prueba de diez segundos que represente un trayecto recto con un obstáculo bajo de cartón. Elevad y bajad el frente una vez mientras avanzáis suavemente. Comparad la predicción con la curva de pitch, señalad el pico y repetid a otra velocidad. Quien necesite una entrada más simple puede sujetar directamente el hub; mantened el programa ajustado a la posición del modelo.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** hipótesis, dibujo del movimiento y dos curvas anotadas. El gráfico registra orientación, no altura ni posición real. No lancéis, sacudáis ni dejéis caer el hub. ¿Qué habéis podido observar y qué dato haría falta para saber la ubicación exacta?

### **Lección 2 · Leer una ruta a partir de datos (60–90 min).**

#### Fase 1 · Activamos y predecimos

Preparad dos carriles paralelos de ida y vuelta, de unos dos metros, con obstáculos bajos de cartón y espacio libre en los lados. Dibujad la ruta y predecid dónde hará falta pitch para superar el obstáculo y yaw para girar.

#### Fase 2 · Exploramos y construimos

Usad el hub como simulador manual; su ángulo no es la posición del modelo. Configurad el gráfico para registrar yaw, mantened una posición inicial común y haced una pasada lenta y continua. Marcad los momentos de giro en el registro y relacionadlos con la curva.

#### Fase 3 · Explicamos y registramos

Añadid pitch o roll en una segunda prueba y comparad los movimientos. Intercambiad los gráficos con otra pareja para que reproduzca el patrón. Anotad qué tramos son ambiguos y qué interpretación propone cada equipo.

#### Fase 4 · Aplicamos y mejoramos

Definid una condición calibrada que muestre una señal cuando yaw o pitch supera un umbral. Probad un valor por debajo, uno en el umbral y uno por encima. Como extensión, estimad la pendiente de un tramo casi recto con dos puntos (cambio de ángulo/tiempo) y comparadla con una segunda prueba.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** ruta prevista, gráficos con giros marcados, tres casos de umbral y pendiente estimada. Un gráfico de orientación puede sugerir un giro o inclinación, pero no revela por sí solo ubicación, altura ni obstáculo. ¿Qué dato adicional haría falta? No extrapoléis la pendiente a todo el recorrido.

### **Lección 3 · Contar destinos con variables (90 min).**

#### Fase 1 · Activamos y predecimos

Presentad cinco bandejas de devolución ficticias, identificadas con color y símbolo, y una sexta bandeja de revisión. Cada equipo clasifica diez tarjetas simuladas sin código, anota cuántas llegan a cada destino y predice qué cambiaría si se alterara el orden.

#### Fase 2 · Exploramos y construimos

Escribid pseudocódigo para clasificar las tarjetas y preparar una respuesta de revisión para los casos no previstos. Mantened símbolos además de los colores para que la clasificación no dependa solo de la percepción cromática.

#### Fase 3 · Explicamos y registramos

Definid e inicializad a cero `comptador_blau`, `comptador_verd`, `comptador_groc`, `comptador_roig`, `comptador_lila` y `revisio_manual`. Antes de ejecutar el programa, haced una traza de mesa con la misma secuencia y anotad los valores finales esperados.

#### Fase 4 · Aplicamos y mejoramos

Leed las tarjetas de una en una con el sensor de color. Repetid diez lecturas, sumad una unidad al contador correspondiente y enviad cualquier color desconocido a revisión manual. Comparad los resultados con la traza, añadid comentarios y depurad un error controlado, como olvidar reiniciar una variable.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** código comentado, traza de diez tarjetas y recuento final con casos desconocidos. Como ampliación, cread un juego ficticio de bibliobús con `punts`: una categoría suma un punto, otra dos y un retorno incorrecto resta uno. Validadlo con una secuencia conocida. No uséis préstamos reales ni nombres de alumnos; el sonido del hub es una confirmación opcional.

![Hub SPIKE Prime conectado a un sensor de color que lee una ficha azul delante de cinco bandejas de color y una bandeja gris de revisión.](../../_assets/situacions/sa-sp-variables-comptadors.webp)

_Cada lectura actualiza un contador con nombre; el color imprevisto se envía a revisión manual._

### **Lección 4 · Distancia, velocidad y representación gráfica (90 min).**

#### Fase 1 · Activamos y predecimos

Haced rodar dos ruedas unidas por un eje con un empujón suave. Estimad el recorrido con baldosas o pasos y después comprobadlo con cinta métrica. Predecid cómo el diámetro de la rueda afectará a la distancia por vuelta.

#### Fase 2 · Exploramos y construimos

Montad un carrito ligero con ruedas libres, una marca blanca y negra en una rueda, el sensor de color orientado a la marca y el sensor de fuerza accesible. Medid la circunferencia de la rueda al menos tres veces y calculad su media.

#### Fase 3 · Explicamos y registramos

Conectad el hub a la app SPIKE y activad el gráfico y las variables. El programa espera el toque en el sensor de fuerza, registra el tiempo y cuenta los ciclos de la marca con el sensor de color. En una mesa delimitada y vacía, haced un empujón controlado y detened el registro cuando el carrito pare.

#### Fase 4 · Aplicamos y mejoramos

Leed la curva de distancia y medid el tiempo entre dos pasos consecutivos por el mismo marcador para estimar la velocidad en cm/s. Comprobad `distància = circumferència × voltes` y `velocitat = distància / temps`, con unidades. Repetid tres intentos y cambiad una sola condición cada vez: intensidad del empujón o diámetro de rueda.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** circunferencia media, tres registros y estimaciones de distancia y velocidad. Con masa en kg y velocidad inicial en m/s, calculad `Ec = ½ × massa × velocitat²`; es una estimación matemática, no una medida del sensor. Explicad cómo el tiempo, la superficie y la interpretación de la velocidad afectan a la comparación.

![Carrito con ruedas y hub SPIKE Prime, sensor de color delante de una marca blanca en la rueda, sensor de fuerza encima y gráfico de datos al lado.](../../_assets/situacions/sa-sp-distancia-sensors.webp)

_El carrito se desplaza con un empujón manual; los sensores registran las vueltas y el tiempo para estimar distancia y velocidad._

### **Lección 5 · Juego de distancia: acertar y justificar (90 min).**

#### Fase 1 · Activamos y predecimos

Recuperad el carrito instrumentado y delimitad un carril recto, con línea de lanzamiento y diana a 2 m. Haced dos o tres pruebas de calentamiento y predecid cómo el empujón, el peso o la superficie pueden alterar el recorrido.

#### Fase 2 · Exploramos y construimos

Inicializad `massa_kg`, `velocitat_cm_s`, `velocitat_m_s`, `energia_J`, `error_cm` y `error_acumulat_cm`. Después de cada empujón, leed la velocidad del registro, convertidla dividiendo por 100 y actualizad la masa real si cambiáis piezas pesadas.

#### Fase 3 · Explicamos y registramos

Calculad `energia_J = 0.5 × massa_kg × velocitat_m_s²`. Medid siempre desde la parte delantera del carrito hasta el centro del blanco, registrad el error absoluto en cm y acumuladlo. Tres intentos forman cada ronda.

#### Fase 4 · Aplicamos y mejoramos

Después de los tres intentos, moved la diana a 3 m y repetid; haced una ronda a 4 m solo si el espacio es suficientemente largo y seguro. Alternad quién empuja para que cada persona tenga el mismo número de intentos. Entre dianas, elegid si mantenéis la masa y cambiáis la intensidad, o cambiáis el peso medido manteniendo el empujón tan constante como sea posible. No cambiéis las dos variables a la vez.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** errores de los tres intentos a cada distancia, error acumulado y estrategia revisada. Gana quien acumula menos error absoluto, no quien hace un lanzamiento más largo. Comparad la energía estimada con la distancia y explicad por qué superficie, rozamiento y variación del empujón impiden tratarla como una predicción exacta.

![Carrito SPIKE Prime empujado suavemente por el carril hacia una diana de papel, con cinta métrica y un gráfico de tres intentos.](../../_assets/situacions/sa-sp-joc-distancia.webp)

_En cada ronda se mide la distancia al centro de la diana y se suma el error de los tres intentos._

### **Lección 6 · ¿Quién planifica los recursos? Finanzas y gestión empresarial (90 min).**

#### Fase 1 · Activamos y predecimos

Conectad la ruta de la biblioteca con finanzas y gestión/administración de empresas. ¿Quién organiza recursos y cómo colaboran estas funciones? Cada persona puede completar de forma privada una tarjeta de intereses y habilidades; compartirla es voluntario.

#### Fase 2 · Exploramos y construimos

En equipos, proponed cuatro ocupaciones por vía y clasificad tareas, habilidades, entorno, formación y relaciones con otras ocupaciones. Investigad al menos dos ocupaciones de cada vía con fuentes actuales seleccionadas por la docente, como el Observatorio de las Ocupaciones del SEPE o webs institucionales. Anotad fecha, tareas, habilidades y vía de acceso; no convirtáis una previsión en certeza.

#### Fase 3 · Explicamos y registramos

Usad los datos de la maqueta —distancia, tiempo, intentos y giros— y una hoja de costes ficticios igual para todos los equipos para calcular dos opciones de entrega. Separad las medidas de maqueta de los precios y supuestos inventados, mostrad una suma verificable y justificad una recomendación para la biblioteca.

#### Fase 4 · Aplicamos y mejoramos

Con piezas SPIKE, representad una vía profesional —flujo de presupuesto, planificación de operaciones o comprobación de cuentas— sin construir un robot nuevo. Preparad una explicación de un minuto que relacione las partes del modelo con una tarea, una habilidad y una ocupación investigada.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** matriz de las dos vías, fuentes fechadas, comparación de costes y modelo explicado. Después de las presentaciones, comparad habilidades compartidas y diferencias. Cerrad con una autoevaluación individual; no expongáis los intereses personales.

![Hub SPIKE Prime sujeto en un marco con asa e inclinado junto a un gráfico de línea con un pico que representa un cambio de pitch.](../../_assets/situacions/sa-sp-variable-grafic.webp)

_El trazo registra el cambio de orientación mientras se mueve el hub; no representa la altura ni la posición del modelo._

## 🧰 Materiales y preparación

Un set SPIKE Prime 45678 y dispositivo con la app SPIKE por equipo; hub cargado, piezas para un marco con asa y para un carrito ligero de ruedas libres, obstáculos bajos de cartón, sensor de color, sensor de fuerza, ficha blanca y negra para una rueda, mesa con espacio libre, tarjetas de colores, cinta métrica y hojas para predicciones y gráficos. Para el juego, reservad un pasillo o espacio interior de 4 m, marcad un único carril de ida y diana de papel a 2, 3 y 4 m; no uséis pasillos compartidos ni hagáis lanzamientos con personas dentro del recorrido. Conectad el hub por USB o Bluetooth y comprobad antes de la sesión que la app muestra el gráfico, las variables y las lecturas empleadas. Preparad el programa, un ejemplo de curva y una alternativa con datos simulados si no hay conexión; disponed de una balanza escolar o de una masa medida por el docente.

## 🧪 Evidencias y evaluación

Recoged el vocabulario anotado de yaw/pitch/roll, el boceto de los dos carriles, las curvas reales de pitch y yaw con el movimiento que las genera, la comparación entre dos velocidades, pseudocódigo, programa comentado y los tres casos de prueba del umbral. Para las variables, guardad el pseudocódigo de recuento, la tabla de las diez lecturas, los valores finales, la prueba con etiqueta desconocida, el juego de puntuación y la depuración de la variable no reiniciada. Para distancia/velocidad, conservad las medidas de circunferencia, gráficos de distancia y sensor de color, tiempo entre vueltas y velocidad en cm/s. Del minirreto, guardad la masa medida, la conversión a m/s, los valores de energía en julios, las tres medidas de error por diana a 2/3/4 m, el error acumulado y la estrategia revisada entre rondas. Para la lección profesional, evaluad la matriz comparativa de las dos vías, la calidad/fecha de las fuentes, el presupuesto con supuestos separados, el modelo físico y el pitch de un minuto; usad criterios comunes de precisión, relación tarea-habilidad-ocupación y uso explícito de evidencias. Valorad si el alumnado correlaciona movimiento físico y curva, explica qué representa cada eje, inicializa y actualiza variables, controla las condiciones, usa unidades coherentes, verifica el cálculo y limita la conclusión a los datos observados. Autoevaluación individual sobre interpretación de gráficos, variables, decisiones con datos, gestión del tiempo/materiales, colaboración e intereses propios; la reflexión personal se conserva privada. La pareja revisora intenta reproducir el patrón de la otra, destaca un acierto y propone una mejora concreta; quien ha creado el gráfico puede responder si la prueba confirma la interpretación.

## ♿ Inclusión, privacidad y seguridad

Ofreced roles rotativos de montaje, registro, programación, cálculo y comunicación; aceptad gráficos táctiles o esquemáticos e instrucciones escritas en lugar de conducción manual. La clasificación usa solo datos ficticios. No se registran trayectos, nombres ni préstamos reales del alumnado. Los modelos se mueven sobre mesa con espacio libre, velocidad baja y piezas pequeñas recogidas; el hub se detiene antes de conectar o modificar mecanismos. Las conclusiones económicas son una simulación escolar, no una estimación de coste de un servicio público.

## 🔗 Referente oficial y adaptación

Adapta las seis lecciones de la unidad 6 *Variables* de LEGO Education [*Foundations of Physical Computing*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt1b4345f429fde833/64d3828c455bf62b71f9b840/Foundation_of_Physical_Computing_Course_SPIKE_3_2022.pdf?locale=en-gb): *Drone Pitch and Roll*, *Drone Movements*, *Variables*, *Graphing, Speed, and Distance*, *Mini-Challenge: Distance Game* y *Connecting to Careers: Finance and Business Management*. La primera y la segunda lección ahora mantienen el modelo con asa, el flujo de datos real de pitch/roll/yaw, la lectura de curvas, la prueba a velocidades diferentes, la recreación de un gráfico y el paso a obstáculos y recorrido de retorno; el vuelo es una simulación manual sobre mesa, no un dron real. La cuarta recupera la maqueta de ruedas libres, inicio con el sensor de fuerza, recuento de vueltas con sensor de color, gráficos de distancia/tiempo, velocidad en cm/s y estimación de la energía cinética con masa y velocidad en unidades coherentes. La quinta ya usa estos resultados: programa variables de masa, velocidad y energía, añade peso medido al carrito y compara tres intentos por diana a 2/3/4 m con error acumulado y estrategia basada en datos. El resto conserva la progresión de variables para el recuento y la conexión profesional. El flujo de gráficos de movimiento toma como referente funcional la lección pública [Stretch with Data](https://education.lego.com/en-us/lessons/prime-training-trackers/stretch-with-data/); los procedimientos, ejemplos, contexto e ilustración son propios.
