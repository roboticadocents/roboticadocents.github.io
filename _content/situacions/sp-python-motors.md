---
active: true
title: "Movimiento con motivo"
description: "Seis lecciones de Python con SPIKE Prime para controlar motores, posiciones, parejas de motores, automatización y trayectos probados."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Programación"
theme: "python"
theme_label: "Python: motores, posición y automatización"
duration: "6 lecciones · 6–8 sesiones"
challenge: "¿Cómo podemos programar un mecanismo SPIKE que complete movimientos útiles y repetibles en una ruta de transporte simulada, y demostrar su precisión con pruebas?"
---

![Base de dos ruedas construida con piezas LEGO SPIKE Prime y su hub, en una pista de mesa con giros y una meta de destino.](../../_assets/situacions/sp-python-motors.webp)

_El movimiento solo se considera repetible después de medirlo en la misma superficie y con el mismo montaje._

## 🌱 Reto e intención

Una clase prepara una muestra de prototipos para una jornada escolar. Un equipo debe idear un dispositivo SPIKE Prime que mueva una ficha de mensajería por una ruta delimitada, la deje en una zona de destino y vuelva a un punto de inicio. Puede ser una base móvil o un mecanismo de mesa con movimiento acotado: la solución no está predeterminada. Las pruebas se centran en cómo responden los motores a tiempo, velocidad, posición y grados, cómo se coordinan dos motores y qué variables físicas alteran el trayecto.

Esta propuesta adapta la progresión de la unidad 2 *Motores* de LEGO Education *Introduction to Python Programming · Course 1*: control individual de motores con parámetros, movimientos hacia posiciones/cantidades definidas, automatización de una tarea, sincronización de dos motores y desplazamiento de un modelo sin ruedas, trayecto con pasos y giros y retroalimentación entre equipos. La situación sitúa esos objetivos en un servicio escolar ficticio; no representa una solución real de movilidad ni asume que el robot navegue sin supervisión.

## 🎯 Aprendizajes y vocabulario

- Identificar el motor como actuador y describir cómo el programa Python le envía órdenes según la biblioteca y la versión de la app.

- Comparar movimiento por tiempo, velocidad, posición y ángulo de giro del motor; entender que grados del eje no equivalen automáticamente a grados de giro del robot.

- Hacer que dos motores actúen individualmente y en pareja; explicar qué cambia cuando giran a la vez o en sentidos distintos.

- Descomponer una tarea automática en inicio, acción, espera, señalización y parada; escribirla antes como pseudocódigo.

- Programar y trazar una secuencia de tramos y giros para llegar a una meta en una pista conocida.

- Calibrar una relación motor-distancia con la misma rueda, superficie, carga y batería, y documentar las fuentes de variación.

- Hacer pruebas repetidas con una variable cambiada cada vez, registrar diferencias y decidir si un cambio mejora el criterio elegido.

- Dar retroalimentación específica sobre el diseño y el código sin tomar el control del proyecto de otro equipo.

**Actuador:** componente que produce movimiento u otra salida. **Velocidad:** ritmo de giro ordenado al motor. **Posición:** ángulo del eje respecto a un referente definido. **Grados:** unidad angular para describir una rotación. **Calibración:** obtener una relación de trabajo con pruebas del montaje real. **Repetibilidad:** semejanza entre resultados de ensayos repetidos bajo condiciones comparables.

```python
# Python general per a descriure el pla; no controla motors SPIKE
trams = ["recte", "gir dret", "recte", "aturada"]
for tram in trams:
    print("provar:", tram)
```

Este fragmento no es código de motor. La API exacta (puertos, motor individual, pareja, `runloop`, posición, velocidad y frenado) depende de la versión local de la app SPIKE. Consultad su Knowledge Base y probad las órdenes con la base suspendida o en una pista segura antes de adaptarlas.

## 🧰 Materiales y preparación docente

Un set SPIKE Prime 45678 por equipo, hub cargado, dos motores, ruedas y piezas Technic para una base móvil baja o un mecanismo acotado, dispositivo con editor Python y consola, cinta de papel, cartón para metas y topes blandos, regla, transportador opcional, ficha ligera de mensajería, diario de ingeniería y temporizador. Para el reto de movimiento sincronizado sin ruedas, ofreced una construcción articulada ligera de baja altura hecha con las piezas de la caja; no hace falta que imite un animal ni que reproduzca ningún modelo oficial.

Elegid una zona plana sin bordes, escaleras ni tránsito; marcad carriles anchos y una zona de parada. Carga y distancia deben ser ligeras y cortas. Antes de empezar, comprobad la batería, el puerto y la orientación de los motores, las ruedas libres, el mecanismo sin fricción y una orden de parada. Ajustad velocidad baja y limitad el recorrido; nadie sujeta la base mientras los motores giran. Preparad una base de referencia y tres distancias de prueba, pero dejad que el alumnado calibre su propio prototipo.

Roles rotativos de Python/prueba, construcción/seguridad y medida/registro. Cada equipo mantiene una configuración de prueba fija durante una comparación y escribe cuándo ha cambiado la superficie, las ruedas, el montaje o la carga. No comparéis resultados de robots distintos como si sus magnitudes fueran transferibles.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · El motor responde a tiempo y velocidad (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (7 min):** comparad dos maneras de hacer girar una rueda una distancia aproximada: hacerla girar durante un tiempo o pedir un número de grados/rotaciones. Dibujad una predicción de lo que podría variar entre una superficie lisa y otra con más fricción.

#### Fase 2 · Exploramos y construimos

**Prueba aislada (10 min):** con la base elevada y fijada, ejecutad con supervisión una orden breve a velocidad baja; comprobad qué motor y puerto responden. Detened antes de cambiar cables o configuración.

#### Fase 3 · Explicamos y registramos

**Exploración Python (18 min):** seguid un ejemplo validado para la API local; cambiad solo el tiempo o la velocidad en cada ensayo, primero manteniendo la otra magnitud fija. Pasad después a la pista corta y medid la distancia real con regla. Haced dos repeticiones por valor y anotad batería/superficie.

#### Fase 4 · Aplicamos y mejoramos

**Interpretación (7 min):** representad velocidad ordenada y distancia observada en una tabla; distinguid una orden del programa de una medida del trayecto.

#### Fase 5 · Comprobamos y reflexionamos

**Salida (3 min):** explicad en qué caso temporal sería más fácil de programar y en cuál haría falta más calibración.

### **Lección 2 · Posición, camino corto y grados (45 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta (5 min):** si un eje está en una posición conocida, ¿qué orden lo lleva a otra posición con menos movimiento?

#### Fase 2 · Exploramos y construimos

**Estación segura (8 min):** usad un motor sin carga con una marca visual de referencia en el eje; anotad la posición inicial y no pongáis dedos cerca del eje.

#### Fase 3 · Explicamos y registramos

**Investigación guiada (22 min):** probad en Python un movimiento hasta una posición y un movimiento por un número de grados, con la función que documenta la app local. Predecid dirección y ángulo, observad si el motor hace el camino esperado y contrastad una rotación positiva con una negativa. Repetid con una posición a cada lado del punto de referencia y comparad recorridos.

#### Fase 4 · Aplicamos y mejoramos

**Transferencia a la rueda (7 min):** calculad la circunferencia con una medida aproximada y comparadla con la distancia que avanza una rotación; explicad por qué el deslizamiento, la presión y el diámetro real alteran el resultado.

#### Fase 5 · Comprobamos y reflexionamos

**Registro (3 min):** dibujad el eje e indicad qué significa posición en la prueba concreta, sin confundirla con la orientación del robot.

### **Lección 3 · Automatizar una acción útil (45 min).**

#### Fase 1 · Activamos y predecimos

**Definición (7 min):** elegid una acción repetible de la muestra: levantar una barrera de cartón, desplazar una ficha por una canaleta o girar un indicador. Escribid entrada, acción del motor, resultado y condición de parada.

#### Fase 2 · Exploramos y construimos

**Ideación/mecanismo (10 min):** dibujad dos alternativas mecánicas y valorad estabilidad, número de piezas, recorrido y riesgo de pinzamiento.

#### Fase 3 · Explicamos y registramos

**Programa por etapas (18 min):** programad una posición inicial conocida, una acción limitada y retorno/parada. Verificad primero el mecanismo a mano con los motores apagados; después probad sin carga y con una ficha grande y ligera. El objetivo es automatizar una tarea clara, no construir un modelo decorativo.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas y mejora (7 min):** ejecutad tres intentos y registrad si llega, se detiene y retorna sin atascarse. Si cambiáis el tope o la posición inicial, volved a medir.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión (3 min):** identificad qué es una decisión del código y qué es una propiedad física del montaje.

### **Lección 4 · Dos motores, un movimiento coordinado (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (5 min):** con una analogía corporal no competitiva, probad en dos lados de una cuerda ligera cómo es avanzar a la vez y qué pasa si cada lado actúa en un momento distinto. No estiréis al alumnado ni uséis fuerzas; también se puede simular con dos rotuladores en papel.

#### Fase 2 · Exploramos y construimos

**Exploración (10 min):** probad los dos motores por separado con la base elevada; comprobad dirección, puerto y respuesta.

#### Fase 3 · Explicamos y registramos

**Construcción (15 min):** cread una plataforma de mesa con dos patas articuladas o un mecanismo sin ruedas de baja altura, inspirado en el problema de coordinar motores del reto *Hopper Run*, pero con una forma original y sin perseguir ninguna distancia o velocidad. El mecanismo debe permanecer dentro del carril y tener topes.

#### Fase 4 · Aplicamos y mejoramos

**Programación (10 min):** usad la llamada de pareja documentada para hacerlos mover simultáneamente durante un intervalo corto; comparad con instrucciones consecutivas. Analizad simetría, orden, fricción y desequilibrio.

#### Fase 5 · Comprobamos y reflexionamos

**Conversación (5 min):** justificad por qué un robot sin ruedas puede avanzar y qué límites presenta vuestro prototipo.

### **Lección 5 · Una ruta con pasos y giros (45–90 min).**

#### Fase 1 · Activamos y predecimos

**Encargo y criterios (10 min):** planificad una entrega ficticia desde la biblioteca a tres paradas de maqueta. El éxito significa pasar por el orden correcto de metas y quedar dentro de una zona final amplia; no se exige la precisión de un servicio real.

#### Fase 2 · Exploramos y construimos

**Mapa y pseudocódigo (10 min):** dibujad una cuadrícula de tramos, giros y pausas. Haced recuento de órdenes, determinad qué motor-pareja se utiliza para la recta y cómo se genera el giro con la diferencia de giros entre ruedas.

#### Fase 3 · Explicamos y registramos

**Calibración (15 min):** haced una recta de una longitud corta con tres pruebas y estimad los grados de rueda necesarios; haced un giro de cuarto aproximado y medid la orientación con cuadrícula/transportador. Usad las relaciones como estimaciones específicas de vuestro robot, no como constantes universales.

#### Fase 4 · Aplicamos y mejoramos

**Implementación Python (20 min):** traducid la ruta en llamadas documentadas, separando recta, giro y parada. Probad cada función por separado, después encadenad dos órdenes y finalmente la ruta completa a baja velocidad. Mantened un botón o una vía manual para detenerlo.

#### Fase 5 · Comprobamos y reflexionamos

**Diagnóstico (10 min):** si se sale de la marca, cambiad una variable por iteración (grados, alineación, velocidad o superficie); documentad qué error disminuye. **Si se dispone de más tiempo:** repetid tres veces la ruta completa y comparad dispersión y causas, sin hacer una carrera de velocidad.

### **Lección 6 · Prueba entre equipos y retroalimentación de diseño (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Preparación (8 min):** cada equipo deja la ruta, el código comentado, el criterio de llegada y los resultados iniciales visibles.

#### Fase 2 · Exploramos y construimos

**Revisión (12 min):** un segundo equipo predice el movimiento antes de ejecutar, prueba con el consentimiento de los autores y registra el comportamiento; no edita el programa ni reconstruye el mecanismo. La retroalimentación sigue «he observado…», «la predicción dice…», «un caso más que probaría…».

#### Fase 3 · Explicamos y registramos

**Decisión (5 min):** los autores eligen una recomendación y explican si la adoptan, la dejan para el futuro o la descartan con motivo.

#### Fase 4 · Aplicamos y mejoramos

**Iteración (12 min):** cambiad una característica, repetid el caso anterior y un caso de control para asegurar que no se ha perjudicado un tramo correcto.

#### Fase 5 · Comprobamos y reflexionamos

**Cierre (3–8 min):** mostrad un gráfico/tabla de predicción y resultado, describid las limitaciones del robot y valorad qué prueba ha sido más informativa que una demostración única.

## 🧪 Evidencias y evaluación

El dosier contiene esquema de hardware y puertos, registro de versión de la app/API, diagrama de posiciones, pseudocódigo de ruta, código Python anotado, predicciones, tabla de tiempo/velocidad/grados y distancia medida, pruebas del mecanismo automatizado, comparación de llamadas individuales y de pareja, mapa de ruta, tres resultados finales, retroalimentación, cambio seleccionado y explicación de límites. El producto es una maqueta de entrega y una nota técnica de una página que separa instrucción, respuesta física y evidencia.

Evaluad con cuatro criterios: **modelo del motor** (interpreta tiempo, velocidad, posición y grados sin confundir magnitudes); **programación** (organiza llamadas y coordina motores a partir de un pseudocódigo); **ingeniería experimental** (mantiene condiciones, registra más de un intento y justifica un ajuste); **colaboración y comunicación** (participa en la retroalimentación y declara qué todavía no funciona). Para cada uno, describid cuatro niveles: con modelado, con apoyo, de manera autónoma y con transferencia justificada. Un recorrido que no llegue a la meta todavía puede aportar evidencia rigurosa si está bien diagnosticado.

## ♿ Inclusión, seguridad y sostenibilidad

Ofreced pista impresa, simulación de movimientos en papel y acceso a consola con lectura compartida. Distribuid roles entre código, construcción, medida y comunicación, y hacedlos rotar. Permitid más tiempo y tramos grandes; la velocidad no es criterio de éxito. Usad carriles delimitados, zona de parada, carga blanda, distancia corta y baja potencia; apagad los motores antes de ajustar ejes, ruedas o cables. Mantened dedos, pelo y ropa lejos de los elementos en movimiento. Recoged todas las piezas después de la prueba y no uséis pasillos, rampas altas o escaleras.

## 🔗 Referente oficial y decisiones de adaptación

Adapta la unidad 2 *Motores* del curso LEGO Education [*Introduction to Python Programming · Course 1*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt834b554cdaa246f7/6584064fd082f7672425e7ea/File_1_Units12345_Intro_to_Python_Course_TG_Course.pdf?locale=en-us). El PDF oficial consultado confirma las lecciones *Hopper Run* (dos motores simultáneos y modelo sin ruedas) y *Race Day* (programa con secuencia de pasos y giros y uso de la pareja de motores), además de la sesión de retroalimentación *Ideas to Help with Race Day*. La progresión de motores individuales, posición y automatización se ha contrastado con los objetivos indexados del plan oficial; las funciones de Python se deben validar en la app del centro. El reto, el contexto, el guion docente, las hojas de registro y la imagen son propios; no se reproducen instrucciones de construcción LEGO ni se afirma que la maqueta completa sea un modelo oficial.
