---
active: true
title: "Una parada a tiempo"
description: "Seis lecciones de Python SPIKE Prime con sensores de fuerza y distancia, condicionales, parada segura, calibración y depuración."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Ciencias y Programación"
theme: "python"
theme_label: "Python: sensores y decisiones"
duration: "6 lecciones · 6–8 sesiones"
challenge: "¿Cómo podemos hacer que un prototipo SPIKE se ponga en marcha al pulsar el sensor de fuerza, reconozca una zona de parada con el sensor de distancia y transporte una carga ligera sin salir del recorrido?"
---

![Robot real LEGO SPIKE Prime con sensor de fuerza y sensor de distancia, transportando un paquete pequeño de semillas por una maqueta de vivero escolar.](../../_assets/situacions/sp-python-sensors.webp)

_Una decisión automatizada necesita una entrada bien probada, un umbral justificado y una parada segura._

## 🌱 Reto e intención

La clase crea una maqueta de un vivero escolar para transportar un paquete ficticio de semillas desde la mesa de preparación hasta una zona de recepción. El prototipo SPIKE Prime espera una orden de la persona operadora mediante el sensor de fuerza, avanza con una carga ligera y utiliza el sensor de distancia para reducir el recorrido o detenerse ante una barrera de cartón. El equipo debe decidir qué entradas puede leer, qué condiciones las interpretan y cómo evitar que una lectura incierta se convierta en una acción no deseada.

Esta situación adapta las seis lecciones de la unidad 3 *Sensor Control* de LEGO Education *Introduction to Python Programming · Course 1*: *Start Sensing*, *Charging Rhino*, *Cart Control*, *Safe Delivery*, *Grasshopper Troubles* e *Ideas to Help Your Grasshopper*. Conserva el trabajo con sensor de fuerza y condicionales, la relación entre potencia y movimiento, sensor de distancia/ultrasonidos, uso seguro de los sensores en un modelo móvil, depuración de un prototipo y retroalimentación de mejora. El contexto de vivero y los datos son simulados; no se presenta el robot como transportador autónomo ni como sistema de seguridad.

## 🎯 Aprendizajes y vocabulario

- Interpretar el sensor de fuerza como una entrada que puede detectar una presión, liberación o golpe según la función disponible; diferenciar la acción humana de la lectura del programa.

- Usar condicionales para decidir si el prototipo espera, empieza, continúa o se detiene; describir las condiciones en pseudocódigo antes de programarlas.

- Relacionar potencia de los motores con distancia, tiempo, estabilidad y energía del movimiento, sin suponer una relación fija independiente del montaje.

- Describir el sensor de distancia como una medida basada en ultrasonidos, reconocer unidad, rango y factores que pueden alterar la lectura.

- Programar la respuesta del vehículo con umbral de distancia y parada; explicar que el umbral se debe ajustar a la geometría y la velocidad de la base.

- Hacer una entrega segura simulada: carga ligera, ruta plana, zona de llegada amplia y supervisión manual durante toda la prueba.

- Depurar por separado sensor, condición, potencia, montaje y lógica; probar una causa cada vez y mantener un registro.

- Dar y recibir retroalimentación con evidencia observable, seleccionar una sugerencia y repetir un caso de prueba antes/después.

**Entrada:** dato recibido por el programa, como la presión del sensor. **Condicional:** instrucción que elige una acción según si una expresión es verdadera o falsa. **Umbral:** valor a partir del cual se activa una regla. **Ultrasonidos:** sonido de alta frecuencia usado por el sensor para estimar la separación respecto a un objeto. **Potencia:** intensidad ordenada al motor, que no determina por sí sola la velocidad real. **Falso positivo/negativo:** activación o ausencia de activación que no concuerda con el criterio de prueba.

```pseudocode
# Pseudocodi conceptual, no és una API executable de SPIKE
si s'ha confirmat_l'ordre:
    avançar_a_velocitat_baixa()
si distancia_llegida < llindar_d'aturada:
    aturar_i_mostrar_arribada()
```

Las llamadas reales del sensor, la lectura no disponible, los puertos y los motores varían según la versión de la app SPIKE. Consultad la Knowledge Base instalada y evitad asumir que una lectura ausente equivale a cero: definid qué hace el robot ante una lectura inválida y cómo puede detenerlo manualmente una persona.

## 🧰 Materiales y preparación docente

Un set LEGO Education SPIKE Prime 45678 por equipo, hub cargado, base de dos motores o plataforma estable, sensor de fuerza, sensor de distancia, piezas para un soporte sencillo de carga, paquete grande y ligero de cartón/papel, cartón para barrera y topes blandos, cinta de papel, regla o cinta métrica, diario de ingeniería y dispositivo con la app SPIKE que permita Python y consola. Evitad cargas con semillas reales, tierra, agua o elementos pequeños; no necesitamos el sensor de color en este reto.

Preparad un carril plano de menos de un metro, con margen lateral, punto de inicio marcado, una barrera grande y mate, y zona de parada lejos del borde. Colocad el sensor de distancia frontalmente y sin obstrucciones próximas al campo de lectura; probad cartón perpendicular y en ángulo para mostrar la variación. Fijad un umbral inicial conservador, ejecutad sin carga primero y a velocidad baja. Comprobad la parada del programa, el cableado y los puertos antes de añadir movimiento. Si no hay Python o sensor disponible, el alumnado puede hacer las mismas tablas con lecturas preparadas, pero identificadlo como simulación.

Roles rotativos: Python/condiciones, construcción/seguridad, medida/registro y observación de retroalimentación. Cada prueba debe indicar el punto de inicio, la carga, el umbral, la potencia seleccionada, la superficie y la posición del obstáculo; cambiad solo una por iteración.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Un botón inicia una decisión (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (7 min):** haced una breve dinámica de «empieza/congela» con una tarjeta que el adulto presiona y libera; el alumnado describe qué observación marca cada estado. Sin correr ni tocar a otras personas, traducidlo a «esperar orden / empezar / detener».

#### Fase 2 · Exploramos y construimos

**Predicción de sensor (8 min):** observad el sensor de fuerza y formulad qué podría distinguir: presionado, soltado, golpeado. Diferenciad lo que habéis observado de lo que suponíais.

#### Fase 3 · Explicamos y registramos

**Python (18 min):** conectad el sensor al puerto confirmado, abrid un ejemplo oficial de la Knowledge Base y leed cada línea. En un primer programa imprimid el estado si la función lo permite; en un segundo, añadid una condición para que una presión corta active una luz de confirmación o permita iniciar una acción motorizada breve. No uséis el motor hasta que la lógica de entrada funcione con los actuadores quietos.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas (8 min):** haced cinco pruebas con presión clara, sin tocarlo y con contacto accidental muy suave; anotad estado esperado y retorno observado.

#### Fase 5 · Comprobamos y reflexionamos

**Salida (4 min):** escribid una condición en palabras e indicad qué respuesta segura conviene si el sensor no responde.

### **Lección 2 · La potencia cambia el viaje (45 min).**

#### Fase 1 · Activamos y predecimos

**Reto inspirado en *Charging Rhino* (5 min):** imaginad una base que necesita «cargarse» antes de llevar el paquete; relacionad fuerza/presión con una orden explícita, no con energía eléctrica real ni con ningún animal automatizado.

#### Fase 2 · Exploramos y construimos

**Prueba mecánica (10 min):** sin obstáculo, medid el recorrido con una potencia baja y tiempo fijo. Haced tres repeticiones y registrad distancia, dispersión e irregularidades.

#### Fase 3 · Explicamos y registramos

**Comparación controlada (18 min):** repetid con un segundo valor de potencia, manteniendo tiempo, carga, superficie y punto de inicio; estableced una parada manual y un límite seguro. Comparad distancia y tiempo, y explicad por qué la potencia ordenada no es una velocidad física calibrada.

#### Fase 4 · Aplicamos y mejoramos

**Lectura del sensor de fuerza (8 min):** añadid inicio por presión pero mantened el resto inalterado; pedid a una persona operadora que inicie cada intento.

#### Fase 5 · Comprobamos y reflexionamos

**Conclusión (4 min):** anotad qué configuración parece controlable dentro de esta pista, no cuál sería «mejor» universalmente.

### **Lección 3 · El sensor de distancia orienta una parada (45 min).**

#### Fase 1 · Activamos y predecimos

**Investigar (7 min):** comparad cómo una persona puede estimar si hay espacio delante de un vehículo y qué necesita hacer un robot si el obstáculo está más cerca de lo que esperaba.

#### Fase 2 · Exploramos y construimos

**Lecturas sin movimiento (12 min):** conectad el sensor de distancia; poned una barrera de cartón en tres posiciones medidas con regla y registrad la lectura devuelta, la unidad y la diferencia. Repetid una posición con el cartón perpendicular y ligeramente inclinado. No toquéis ni tapéis el sensor durante la lectura.

#### Fase 3 · Explicamos y registramos

**Programa de control (16 min):** planificad «leer; si lectura válida y menor que el umbral, detener; si no, avanzar muy poco; volver a leer». Implementad primero la rama de decisión con los motores quietos y mensajes de consola. Después añadid movimiento corto, a potencia baja y con supervisión.

#### Fase 4 · Aplicamos y mejoramos

**Casos límite (7 min):** probad obstáculo lejano, próximo, superficie oblicua, ausencia de objeto en rango y lectura inválida simulada. Definid una parada segura explícita.

#### Fase 5 · Comprobamos y reflexionamos

**Salida (3 min):** justificad el umbral según los datos de vuestra prueba.

### **Lección 4 · Entrega segura por una ruta corta (45–90 min).**

#### Fase 1 · Activamos y predecimos

**Especificación (10 min):** el prototipo parte de una línea, espera la presión de la persona operadora, avanza con un paquete ligero, lee una barrera y se detiene antes de tocarla; la persona confirma la llegada. Fijad criterios: queda dentro del carril, lleva la carga sin desplazarla, no choca y tiene parada manual.

#### Fase 2 · Exploramos y construimos

**Pseudocódigo y tabla (10 min):** detallad estados, lecturas, umbral y salidas antes de programar. Separad «no hay lectura» de «no hay obstáculo».

#### Fase 3 · Explicamos y registramos

**Implementación por capas (20 min):** probad el sensor de fuerza; después el de distancia con los motores quietos; después el motor en recta sin carga; finalmente combinad inicio, motor y parada con el paquete. El adulto comprueba el código y la pista entre capas.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas de seguridad (15 min):** haced tres intentos con la barrera en una misma posición, tres con otra y una prueba con el paquete retirado. Registrad parada, contacto, desviación lateral y datos de sensor. Si llega demasiado rápido, reducid la velocidad o el recorrido antes de acercar el obstáculo.

#### Fase 5 · Comprobamos y reflexionamos

**Ampliación (hasta 90 min):** diseñad una maqueta de vivero con dos paradas amplias y ajustad el flujo con una tarjeta de «confirmar», sin afirmar que el robot evita a cualquier persona u obstáculo real.

### **Lección 5 · Depurar el salto del saltamontes (*Grasshopper Troubles*) (45 min).**

#### Fase 1 · Activamos y predecimos

**Observación (5 min):** revisad el modelo de entrega y el ciclo de prueba. El título oficial introduce problemas del prototipo «grasshopper»; aquí lo transformamos en una base que hace un avance corto errático o se detiene fuera de la zona.

#### Fase 2 · Exploramos y construimos

**Clasificación de posibles causas (10 min):** agrupad las pistas en hardware/puerto, orientación y lectura del sensor, umbral/condición, potencia/tiempo y geometría/ruedas. No cambiéis todas las categorías a la vez.

#### Fase 3 · Explicamos y registramos

**Estaciones de diagnóstico (18 min):** investigad tres síntomas: sensor en un puerto diferente, barrera mal orientada y umbral demasiado estricto. Los errores de conexión se inspeccionan con los motores detenidos. Para cada caso, formulad una hipótesis, probad la lectura a mano o con consola y cambiad solo una causa.

#### Fase 4 · Aplicamos y mejoramos

**Repetición de prueba (8 min):** repetid el mismo inicio y obstáculo tres veces; anotad si el error se mantiene.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión (4 min):** distinguid error de código, dato/sensor y respuesta mecánica; identificad qué no se puede concluir con una sola prueba.

### **Lección 6 · Ideas para mejorar el prototipo (*Ideas to Help Your Grasshopper*) (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Preparar una revisión (7 min):** mostrad la especificación, el pseudocódigo, la configuración del umbral y los datos de al menos tres pruebas, incluida una fallida.

#### Fase 2 · Exploramos y construimos

**Intercambio (10 min):** otra pareja predice qué pasará, observa un intento y formula retroalimentación basada en el registro: «he visto que…», «el criterio dice…», «todavía probaría…». No toca el robot ni edita el programa de los autores.

#### Fase 3 · Explicamos y registramos

**Decisión (5 min):** el equipo autor elige una sugerencia, explica el motivo y registra una alternativa aparcada.

#### Fase 4 · Aplicamos y mejoramos

**Iteración (12 min):** haced un solo cambio en el umbral, la potencia, el soporte del sensor o el tope; repetid el caso problema y un caso de control.

#### Fase 5 · Comprobamos y reflexionamos

**Compartir (3–8 min):** comunicad el cambio, el resultado y el límite pendiente. El objetivo es usar perspectivas externas para refinar el diseño, no que todos los prototipos sean idénticos.

## 🧪 Evidencias, evaluación y producto final

El dosier incluye mapa de puertos, diagrama de estados, pseudocódigo, valores de sensor con unidades, comprobación de umbral, tabla potencia/tiempo/distancia, código Python comentado, casos válidos e inválidos, registro de parada y desviación, depuración de una causa, retroalimentación, cambio y repetición de prueba. El producto es un prototipo de mesa con una ruta de entrega de semillas simulada, una tarjeta de operación y una explicación de las condiciones en que se ha probado.

Evaluad: **lectura de sensor** (relaciona medida, unidad y situación de prueba); **condicional** (corresponde entrada con acción y define respuesta para lectura inválida); **integración segura** (combina sensor y motor con umbral documentado y parada manual); y **depuración/comunicación** (prueba causas separadas, da retroalimentación concreta y reconoce límites). Cuatro niveles: necesita modelado, avanza con apoyo, trabaja con autonomía y transfiere/justifica. Un prototipo que se detiene antes de llegar puede demostrar logro si la decisión y los datos son coherentes con la especificación.

## ♿ Inclusión, privacidad y seguridad

Ofreced lectura de datos en tabla impresa, simulación de entradas en papel, pseudocódigo dictado o compartido, pantalla ampliada y roles equivalentes de prueba, diseño y registro. Usad tarjetas con palabra, símbolo y forma, no solo color. La presión se aplica suavemente y el sensor no se golpea. Movimientos siempre cortos, lentos, sobre superficie plana y con supervisión; manos lejos de ruedas, ejes y mecanismos. No se hacen pruebas con animales, plantas vivas, personas como obstáculos, escaleras ni pasillos abiertos. No se capturan imágenes ni datos personales. La maqueta no es un dispositivo certificado de evitación ni se puede dejar funcionando sin supervisión.

## 🔗 Referente oficial y decisiones de adaptación

Adapta las seis lecciones de la unidad 3 *Sensor Control* del curso LEGO Education [*Introduction to Python Programming · Course 1*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt834b554cdaa246f7/6584064fd082f7672425e7ea/File_1_Units12345_Intro_to_Python_Course_TG_Course.pdf?locale=en-us): *Start Sensing*, *Charging Rhino*, *Cart Control*, *Safe Delivery*, *Grasshopper Troubles* e *Ideas to Help Your Grasshopper*. La guía oficial especifica sensor de fuerza y condicionales para *Start Sensing*; sensor de distancia, movimiento y ultrasonidos para *Cart Control*; investigación de potencia y movimiento para *Charging Rhino* y *Safe Delivery*; y depuración/retroalimentación para las dos últimas lecciones. El contexto de vivero, el guion, los instrumentos de evaluación y la imagen son originales. Las API y la respuesta a lecturas ausentes dependen de la versión local de SPIKE y se deben validar antes de clase; no se copian las construcciones ni las páginas de alumnado de LEGO.
