---
active: true
title: "Datos que orientan el trayecto"
description: "Siete lecciones de Python y SPIKE Prime para leer datos de sensores, hacer cálculos, controlar un vehículo de maqueta y comparar opciones de transporte."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Ciencias Sociales"
theme: "python"
theme_label: "Python, datos y movilidad escolar"
duration: "7 lecciones · 7–10 sesiones"
challenge: "¿Cómo podemos recoger datos con sensores SPIKE, comprobarlos y usar cálculos en Python para planificar un trayecto simulado de manera comprensible?"
---

![Base móvil LEGO SPIKE Prime en una ruta de papel con marcadores geométricos, una plaza de parada de cartón y una escala de medida.](../../_assets/situacions/sp-python-dades.webp)

_El sensor da una lectura; el programa indica sus unidades, la transforma y la usa en una decisión que podemos probar._

## 🌱 Reto y contexto

Una clase quiere comparar, con datos ficticios y pruebas en maqueta, varias maneras de llegar a una actividad de barrio. Los equipos construyen o adaptan una base SPIKE Prime, miden su movimiento en una ruta de papel, leen entradas de los sensores, convierten unidades y calculan velocidad o giro. Después diseñan una ruta de transporte escolar en miniatura y explican qué puede demostrar un prototipo, qué depende de la prueba y qué no se puede inferir sobre las rutas o preferencias reales del alumnado.

Esta situación adapta las siete lecciones de la unidad 9 *Data and Math Functions* de LEGO Education *Introduction to Python Programming · Course 2*: obtener datos con sensores; variar velocidad con operaciones; usar variables y comparaciones para contar movimientos; transformar grados de motor en cambios de dirección; practicar cálculos en un aparcamiento de maqueta; diseñar un vehículo/ruta de transporte hasta la escuela; y hacer retroalimentación y mejoras. El objetivo no es entrenar una habilidad física ni hacer un plan real de movilidad, sino comprender la cadena medida → cálculo → decisión → comprobación.

## 🎯 Aprendizajes y vocabulario

- Leer datos de sensores SPIKE, interpretar el valor y la unidad, mostrarlo en consola y reconocer cuándo una lectura no es válida o no está disponible.

- Cambiar un valor numérico con suma/resta y relaciones matemáticas sin salir de los límites seguros de potencia o recorrido.

- Usar variables para contar, estimar distancia y calcular velocidad; convertir milímetros a centímetros y milisegundos a segundos.

- Aplicar `<`, `<=`, `>`, `>=`, `==` y `!=` en reglas que separan casos de prueba.

- Explicar ruido, umbral, calibración, repetición y error de medida; comparar previsión con observación sin presentar un dato como exacto.

- Representar dirección y velocidad en una ruta simulada, relacionando magnitudes del motor con giros aproximados y comprobando las instrucciones en una pista segura.

- Documentar las decisiones, comunicar limitaciones y revisar una solución con las perspectivas de otros equipos.

**Lectura:** valor que devuelve el sensor en una instantánea de la prueba. **Muestreo:** momento o frecuencia con la que leemos datos. **Calibrar:** ajustar una regla de lectura a las condiciones y materiales reales de la prueba. **Variable:** nombre que guarda un dato que puede cambiar. **Velocidad:** distancia recorrida dividida por el tiempo. **Media:** suma de valores dividida por el número de medidas; no oculta la dispersión entre intentos.

```python
distancia_mm = 235
distancia_cm = distancia_mm / 10
temps_s = 5
velocitat_cm_s = distancia_cm / temps_s
print("cm:", distancia_cm, "cm/s:", velocitat_cm_s)
```

El fragmento Python usa datos de muestra para explicar unidades. La medida física, los puertos y el movimiento del vehículo deben implementarse con las funciones disponibles en la app SPIKE local; la compatibilidad entre versiones debe probarse antes de clase.

## 🧰 Materiales y preparación

Un set SPIKE Prime por equipo con hub cargado y base móvil estable (o una plataforma con una sola rueda motriz si el equipo quiere estudiar el giro), dos motores, sensor de fuerza, sensor de distancia y sensor de movimiento integrado en el hub; dispositivo con SPIKE Python, cinta de papel, cartón para carriles y aparcamiento, regla o cinta métrica, cronómetro externo opcional, tarjetas de forma/color para hitos, calculadora y diario de datos. No es necesario usar todos los sensores a la vez: adaptad el reto al hardware disponible.

Preparad una ruta recta corta con tope de cartón blando, carriles independientes y una zona de parada clara. Medid distancias manualmente antes de ejecutar. Verificad que el sensor de distancia tiene campo de visión libre, que la superficie de la ruta no resbala y que el hub muestra lecturas en la consola. El sensor de distancia del repertorio SPIKE devuelve milímetros; haced explícita la conversión a centímetros. El sensor de movimiento del hub da orientación/ángulo, que no es directamente un recuento de pasos humanos: esta situación evita recoger datos corporales y, si usa el ángulo, girad el hub o un soporte con cuidado sobre la mesa. Consultad la Knowledge Base para la API actual y los límites de motores.

Preparad una hoja de datos con columnas para hipótesis, entrada, unidad, valor esperado, valor medido, diferencia, decisión de código y observaciones. Asignad roles rotativos de programación, conducción, medida y registro. Acordad un límite de velocidad bajo y una orden de parada antes de encender motores.

## 📅 Secuencia didáctica · siete lecciones

### **Lección 1 · Leer y mostrar datos del sensor (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (7 min):** comparad qué información haría falta para describir un trayecto en una maqueta: distancia, duración, presión sobre un botón, giro. Diferenciad una estimación de una lectura medida.

#### Fase 2 · Exploramos y construimos

**Exploración del editor (8 min):** conectad el hub SPIKE y mirad datos en vivo del sensor de fuerza; después acercad/alejad un cartón del sensor de distancia. El modelo se mueve con la mano solo si está apagado. Anotad qué varía y qué se mantiene.

#### Fase 3 · Explicamos y registramos

**Programa de lectura (15 min):** examinad tres patrones en Python: leer una vez e imprimir; leer en bucle con pausa; leer solo cuando se pulsa el sensor de fuerza. Comparad cuál es mejor para responder una pregunta concreta y por qué imprimir sin pausa llena demasiado la consola. Cread una versión mínima que lea distancia y escriba `mm:` con la unidad.

#### Fase 4 · Aplicamos y mejoramos

**Conversión y prueba (10 min):** comparad mm con cm dividiendo por diez y probad objetos a distancias conocidas (por ejemplo 100, 200 y 300 mm, ajustadas a la mesa). Si no hay lectura, no la tratéis como cero: anotad «ausente/desconocida».

#### Fase 5 · Comprobamos y reflexionamos

**Salida (5 min):** indicad qué parte es dato medido, qué es conversión y qué es unidad de representación. Explicad un error que se introduciría si se mostrara 200 como cm cuando el sensor devuelve mm.

### **Lección 2 · Ajustar velocidad con operaciones y límites (45 min).**

#### Fase 1 · Activamos y predecimos

**Discusión (5 min):** hablad de cómo se regula un ritmo y por qué un valor de programa no equivale automáticamente a la misma distancia en distintas superficies.

#### Fase 2 · Exploramos y construimos

**Base y control (10 min):** preparad una base SPIKE en pista recta. En Python, guardad la velocidad en una variable numérica, mostradla como texto en la matriz del hub (conversión explícita con `str()` cuando haga falta) y escribid una función de recorrido que use el valor actual.

#### Fase 3 · Explicamos y registramos

**Modificar con botones (15 min):** configurad un botón para reducir y otro para aumentar un paso acordado, por ejemplo 20 unidades; definid mínimo y máximo para impedir órdenes negativas o demasiado rápidas. Probad primero el límite en pseudocódigo y después a velocidad baja, manteniendo fija la distancia y las condiciones de la pista.

#### Fase 4 · Aplicamos y mejoramos

**Datos (10 min):** para tres valores de velocidad, haced tres intentos y medid distancia final y tiempo. Calculad medias y anotad también rango (mínimo–máximo), no solo una cifra central.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión (5 min):** explicad si aumentar la potencia cambió el tiempo, la distancia o ambos, y qué otras variables (batería, fricción, alineación) podrían explicar diferencias.

### **Lección 3 · Contar oscilaciones sin contarlas dos veces (45 min).**

#### Fase 1 · Activamos y predecimos

**Situación (5 min):** mostrad una serie de lecturas de ángulo de un hub que gira a un lado y vuelve: 0°, 40°, 82°, 95°, 66°, −10°, −81°, −90°. Preguntad cuántas oscilaciones se ven y por qué contar cada lectura por encima de 75° daría un número demasiado grande.

#### Fase 2 · Exploramos y construimos

**Modelo y control de valores (10 min):** en una tabla, aplicad comparaciones `>`, `<`, igualdad y desigualdad a las lecturas y estableced un umbral como parte del modelo, no como verdad universal.

#### Fase 3 · Explicamos y registramos

**Programa de conteo (20 min):** usad el sensor de movimiento integrado en el hub en una base de mesa o usad secuencias de datos previamente preparadas. Mantened una variable `comptat_en_aquesta_banda` para sumar solo cuando el ángulo cruza el umbral y rearmadla cuando vuelve a la zona neutra. Añadid un botón para terminar y mostrar el recuento. Imprimid lectura cruda y estado del contador en consola para que se pueda auditar.

#### Fase 4 · Aplicamos y mejoramos

**Validación (7 min):** haced una secuencia con 0, 1, 3 movimientos completos y varios valores que oscilan cerca del umbral; comparad recuento previsto y observado.

#### Fase 5 · Comprobamos y reflexionamos

**Puesta en común (3 min):** ¿qué cambiaría si el umbral fuera 60° o 90°? Especificad que es un contador de rotaciones de demostración, no un podómetro ni una medida fiable de actividad física de una persona.

### **Lección 4 · Mover y girar con proporciones conocidas (45 min).**

#### Fase 1 · Activamos y predecimos

**Planificación (7 min):** dibujad una ruta de dos tramos con un giro a la izquierda o a la derecha; convertid cada tramo en una orden (avanzar, parar, girar) y marcad las unidades.

#### Fase 2 · Exploramos y construimos

**Programa inicial (15 min):** en una base SPIKE, controlad un par de motores para avanzar y usad variables para velocidad y grados de giro. Mostrad el valor elegido en la matriz/consola. Explicad que el giro de un vehículo depende de la separación de las ruedas, la superficie, la velocidad y el deslizamiento: la relación entre una rotación y un cuarto de vuelta en el suelo es una aproximación del modelo de ejemplo, no una constante universal.

#### Fase 3 · Explicamos y registramos

**Prueba matemática (13 min):** medid el giro resultante en una cuadrícula grande de cartón para dos valores de motor, repetid tres veces y calculad desviación del ángulo previsto. Relacionad división/multiplicación con el ajuste; cambiad una variable cada vez.

#### Fase 4 · Aplicamos y mejoramos

**Depuración (7 min):** analizad un fragmento desconectado al que le falta la cantidad de grados de una llamada de motor. Leed el mensaje de error e identificad si señala exactamente la línea problemática; corregidlo en una copia y trazad cuándo se ejecuta la llamada.

#### Fase 5 · Comprobamos y reflexionamos

**Cierre (3 min):** anotad qué dato hay que volver a calibrar tras cambiar ruedas o superficie.

### **Lección 5 · Aparcamiento de maqueta y gestión de datos (45 min).**

#### Fase 1 · Activamos y predecimos

**Reto (5 min):** estacionar la base en una zona amplia de cartón identificada con forma y color, sin tocar límites ni competir en velocidad. Es una simulación, no una función de conducción autónoma segura.

#### Fase 2 · Exploramos y construimos

**Medida y algoritmo (10 min):** medid longitud y anchura de la zona, distancia de aproximación y anchura de la base. Escribid pseudocódigo para avanzar, leer distancia, reducir velocidad antes de la zona y detenerse; declarad tolerancia explícita y casos de entrada ausente.

#### Fase 3 · Explicamos y registramos

**Implementación (15 min):** usad comparaciones numéricas para detectar «más lejos que», «dentro de la tolerancia» o «lectura no válida»; convertid mm/cm de manera explícita. Una marca de color puede ayudar a indicar posición, pero no sustituye al sensor de distancia si necesitáis una lectura métrica. Añadid parada manual y velocidad mínima para los últimos centímetros.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas (10 min):** tres puntos de inicio, dos distancias y dos situaciones de sensor (lectura/sin lectura). Registrad intentos, error en cm y si el prototipo ha quedado dentro de la zona. No comparéis resultados entre equipos como clasificación: identificad factores que pueden variar.

#### Fase 5 · Comprobamos y reflexionamos

**Puesta en común (5 min):** ¿un valor de distancia puede ser lo bastante preciso para esta maqueta? ¿Qué haría falta antes de aplicarlo a un vehículo real? Respuesta esperada: un prototipo educativo no es un dispositivo de seguridad ni de transporte real.

### **Lección 6 · Un trayecto escolar simulado (45 min).**

#### Fase 1 · Activamos y predecimos

**Definición (7 min):** cada equipo elige un punto de origen ficticio, un destino escolar de maqueta y dos opciones de ruta construidas con papel. No se pide a nadie que revele su trayecto, domicilio, modo de transporte o tiempo personal. Redactad una pregunta medible: ¿qué ruta tiene menos longitud de pista? ¿cuál requiere menos giros?

#### Fase 2 · Exploramos y construimos

**Diseño (8 min):** estableced restricciones: la base SPIKE debe seguir una ruta de cartón, evitar una zona marcada, detenerse en una parada y comunicar la velocidad elegida. El equipo propone un vehículo y un procedimiento de prueba en un esbozo con dos alternativas.

#### Fase 3 · Explicamos y registramos

**Construcción/programación (18 min):** construid o ajustad la base y programad un recorrido con una función para avanzar, una para girar y una rutina de registro. El programa calcula la longitud de ruta sumando tramos y puede convertir la lectura de distancia en unidades comunes. Añadid un control de parada; no sobrecarguéis el modelo con pesos.

#### Fase 4 · Aplicamos y mejoramos

**Comprobación (8 min):** ejecutad ruta A y B tres veces, registrad tramos, duración, giros, lecturas de distancia y fallos. La tabla solo describe el prototipo sobre esa superficie; no es una comparación de modos de transporte ni un estudio de tráfico.

#### Fase 5 · Comprobamos y reflexionamos

**Muestra (4 min):** explicad qué datos han influido en una decisión de diseño y cuáles no se han medido.

### **Lección 7 · Retroalimentación y mejora del trayecto (45 min).**

#### Fase 1 · Activamos y predecimos

**Preparación (7 min):** cada equipo comparte un diagrama de ruta, el código comentado, un gráfico/tabla con intentos y una pregunta sobre calibración o accesibilidad.

#### Fase 2 · Exploramos y construimos

**Prueba cruzada (12 min):** el equipo revisor usa una copia de la ruta o repite el procedimiento con permiso. Da retroalimentación concreta sobre legibilidad, unidades, casos de sensor ausente, seguridad de la pista y coherencia entre objetivo y medida. No se solicitan datos de trayecto de personas.

#### Fase 3 · Explicamos y registramos

**Planificación de cambio (5 min):** los autores eligen una mejora a partir de una evidencia (recolocar sensor, corregir conversión, cambiar umbral, aclarar unidad o dividir una función).

#### Fase 4 · Aplicamos y mejoramos

**Iteración (13 min):** haced el cambio y repetid al menos el caso que lo motivó y otro caso para asegurar que no se ha degradado la respuesta.

#### Fase 5 · Comprobamos y reflexionamos

**Evaluación individual (8 min):** explicad por qué una media sola puede ocultar la variación, qué cálculo del proyecto podéis recrear y una limitación que contaríais a quien vea la maqueta. Autoevaluación privada de uso del tiempo, cuidado del material y colaboración, con una acción siguiente concreta.

## 🧪 Evidencias y criterios de evaluación

Portafolio: esquema de los sensores y puertos reales; capturas o transcripción de datos de muestra sin información personal; conversión entre mm/cm y ms/s; código Python comentado; pseudocódigo y mapa de ruta; medidas manuales, repeticiones, medias y rangos; tabla de casos de sensores ausentes; medida de giros; registro de depuración; decisiones de rediseño; diagrama o tabla comparativa de rutas de maqueta; retroalimentación entre iguales; y explicación de límites del prototipo.

Valorad cuatro dimensiones: **tratamiento de datos** (registra valor, unidad y condiciones de medida); **razonamiento matemático** (convierte unidades y calcula distancia/tiempo con operaciones adecuadas); **programación** (variables, comparaciones, condiciones, salida y parada comprobables); y **método experimental** (repite, compara, registra incertidumbre y modifica una variable cada vez). Añadid comunicación y colaboración al retorno final. Una ruta que se completa una vez no demuestra fiabilidad; un cálculo bien documentado que encuentra un fallo también es una evidencia valiosa.

## ♿ Accesibilidad, privacidad y seguridad

Ofreced medidas con regla sobre papel si la conexión o el sensor no está disponible; todas las pruebas pueden hacerse en mesa. Los hitos tienen forma, símbolo y color; evitad depender de una única pista visual o auditiva. Hay roles de registro, diseño de ruta, código y observación, con rotación. No midáis ni publiquéis datos corporales, pasos, actividad, domicilios o trayectos personales del alumnado. Las rutas son inventadas y los datos son del robot o de tarjetas sintéticas. Mantened la base sobre una superficie horizontal con márgenes y topes blandos, velocidad baja y parada manual; no hagáis circular robots por pasillos con personas ni cerca de escaleras. Desconectad los motores antes de ajustar la construcción.

## 🔗 Referente oficial y adaptación

Adapta las siete lecciones de la unidad 9 *Data and Math Functions* del curso LEGO Education [*Introduction to Python Programming · Course 2*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5436c2a0ac31fc17/65e9d0ef2a3929468f30be14/File_2_Units_678910_Intro_to_Python_Course_TG_Course_2.pdf?locale=en-us): *Get Moving to Get Data*, *Bike Riding for Data*, *Counting Your Steps*, *Make It Move*, *Parking Lot*, *My Transportation* e *Ideas to Help with My Transportation*. Conserva lectura de sensores y consola, distancia en mm con conversión a cm, ajuste de velocidad con variable, sensor de movimiento y umbrales/estado para evitar dobles recuentos, cálculo de distancia y velocidad, giros con operaciones, depuración de llamadas, aparcamiento, diseño de transporte, planificación y retroalimentación. El reto de pasos corporales se transforma en giro del hub/secuencia sintética y declara explícitamente que no es un podómetro; el trayecto es una maqueta y los datos no son sobre movilidad personal. Las instrucciones de construcción y los programas completos oficiales no se reproducen; los ejemplos de código de la ficha son conceptuales y la API se comprueba en la versión local.
