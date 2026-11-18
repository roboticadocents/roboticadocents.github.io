---
active: true
title: "¿Qué puede saber un sensor de color?"
description: "Diseñamos un prototipo SPIKE Prime que separa muestras por color e investigamos por qué el color no identifica el material de un residuo."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Conocimiento del Medio, Ciencias y Tecnología"
theme: "sostenibilitat"
theme_label: "Residuos, consumo y sostenibilidad"
duration: "5 sesiones"
challenge: "¿Podemos crear una máquina que clasifique muestras de prueba y explicar con honestidad qué no sabe identificar?"
---

![Prototipo SPIKE Prime con sensor de color, muestras de ladrillos y bandejas de clasificación por colores.](../../_assets/situacions/sp-residus-lego.webp)

_El prototipo clasifica muestras de prueba según el color; no determina por sí mismo el material ni el contenedor correcto._

## ♻️ Reto, contexto y aprendizajes

En un mercado de barrio o en el comedor escolar se generan materiales diferentes y hay que separarlos siguiendo las normas locales. El equipo diseña con SPIKE Prime un prototipo de clasificación que usa el color como dato de entrada. Primero probará ladrillos o tarjetas de colores conocidos; después comparará esa tarea limitada con el problema real de gestionar residuos. Un envase azul puede ser de varios materiales, y un mismo material puede tener muchos colores: la lectura cromática no es una identificación del material ni una instrucción de reciclaje.



## 🎯 Aprendizajes y vocabulario

formular criterios de clasificación, relacionar un dato de sensor con una regla, construir un mecanismo con motores, probarlo con casos variados, calcular resultados sobre un conjunto conocido y comunicar límites y decisiones pendientes de validación humana.

## 🧰 Materiales, preparación y referencias locales

Preparad un set SPIKE Prime con hub, motor(es) angular(es), sensor de color y elementos de construcción; un dispositivo con la app SPIKE; muestras limpias de ladrillos o tarjetas mates de varios colores; bandejas vacías; regla o separadores para estabilizar distancias; hoja de registro y calculadora opcional. La ilustración muestra un prototipo conceptual hecho con piezas compatibles; el alumnado tiene que construir y probar su propio mecanismo con las piezas disponibles, no copiar un montaje oficial.

El sensor de color de SPIKE puede leer color, reflectividad o luz ambiental. La ficha técnica del fabricante da una distancia de lectura óptima aproximada de 16 mm, que puede variar con el tamaño, el color y la superficie del objeto. Antes de clase, comprobad en el set físico la lectura y el mecanismo propuesto; no hagáis depender una decisión importante de un valor de sensor sin verificarlo. Para una clasificación auténtica de residuos, consultad la guía vigente del municipio o centro y usad muestras limpias o tarjetas, nunca residuos cortantes, sucios o desconocidos.

**Vocabulario:** sensor, muestra, criterio, clasificar, material, color, excepción, falso positivo, falsa detección, prototipo y validación. Distinguid el vocabulario de la máquina («ha leído azul») del vocabulario del residuo («es un envase de un material concreto»).

## 📅 Secuencia didáctica · cinco sesiones de 50 minutos

### **Auditamos un problema sin tocar residuos (50 min).**

#### Fase 1 · Activamos y predecimos

Mostrad fotografías o una lista de materiales del mercado o del comedor escolar. En parejas, el alumnado propone cómo los separaría y anota qué información le falta. Antes de la sesión, el docente contrasta las propuestas con la guía municipal o la información vigente del centro.

#### Fase 2 · Exploramos y construimos

Comparad dos objetos ficticios de color parecido y hablad de qué sabemos y qué no sabemos solo mirándolos. Un envase azul puede estar hecho de materiales diferentes; un material puede tener colores diversos. La lectura cromática no identifica la composición ni determina el contenedor.

#### Fase 3 · Explicamos y registramos

Cada equipo elige dos o tres categorías de color para una maqueta con ladrillos o tarjetas. Dibujad entrada, regla y posibles salidas. Añadid una categoría «por revisar» para lecturas desconocidas, y comparadla con la información que habría que consultar para decidir sobre un residuo real.

#### Fase 4 · Aplicamos y mejoramos

Completad un mapa de dos columnas: «qué puede hacer el prototipo» y «qué hay que confirmar en la guía local». No hace falta manipular ni llevar residuos reales al aula.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa de criterios con una decisión del prototipo y un dato pendiente de verificar.


**Pregunta docente:** ¿El color nos dice de qué material está hecho un objeto? ¿Qué fuente nos ayudaría a decidir qué hacer con un residuo real?


### **Diseñamos y construimos el clasificador (50 min).**

#### Fase 1 · Activamos y predecimos

Dibujad el recorrido de una muestra: entrada, lectura, regla y salida. Elegid un montaje seguro con una muestra situada delante del sensor y una compuerta motorizada que pueda orientarla hacia una de dos bandejas. En una primera versión, la compuerta se puede mover a mano.

#### Fase 2 · Exploramos y construimos

Fijad el sensor en un soporte firme y perpendicular a la muestra. Marcad una distancia estable próxima a la recomendación técnica del fabricante, aproximadamente 16 mm, y haced una lectura antes de conectar el motor. Usad solo piezas ligeras y dejad espacio para que la muestra no se atasque.

#### Fase 3 · Explicamos y registramos

Moved la compuerta manualmente para comprobar su alcance. Identificad dónde podrían quedar atrapados los dedos o la muestra y ajustad la estructura antes de automatizarla. El alumnado no tiene que copiar el prototipo conceptual de la imagen: construirá una solución propia con las piezas disponibles.

#### Fase 4 · Aplicamos y mejoramos

Señalad en el diagrama el sensor, el actuador, las bandejas y la zona de parada segura.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** boceto anotado y prototipo mecánico que supera una prueba manual sin atascos.

**Pregunta docente:** ¿Qué pieza tiene que moverse? ¿Cómo evitaremos que una muestra o un dedo quede atrapado?


### **Programamos y calibramos con muestras conocidas (50 min).**

#### Fase 1 · Activamos y predecimos

Leed ladrillos o tarjetas mates con colores que el sensor de SPIKE reconozca en el modelo del centro. Registrad el valor que devuelve el programa antes de añadir una compuerta. La lectura exacta puede variar con la distancia, la iluminación y la superficie.

#### Fase 2 · Exploramos y construimos

En la app SPIKE, cread una condición para el color elegido. Si se detecta, el motor orienta la compuerta hacia una salida; de lo contrario, la muestra queda en una bandeja de revisión. Ajustad los bloques al montaje real y comprobad que la posición inicial del motor sea repetible.

#### Fase 3 · Explicamos y registramos

Probad cada caso al menos tres veces desde la misma posición. Después cambiad solo una variable —distancia, iluminación o superficie— y comparad el resultado. Incluid una muestra fuera de las categorías; el programa tiene que poder responder «no lo sé».

#### Fase 4 · Aplicamos y mejoramos

Completad la tabla con muestra, color esperado, lectura, salida y excepción. Añadid un comentario al código que explique la regla.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de calibración con lecturas repetidas, código comentado y una ruta de revisión para los casos desconocidos.

**Pregunta docente:** ¿Qué lectura se repite? ¿Qué hace el sistema cuando aparece un color que no habíamos previsto?


### **Ponemos a prueba los límites con casos adversos (50 min).**

#### Fase 1 · Activamos y predecimos

Cread veinte muestras repetibles con piezas LEGO o tarjetas, no con residuos reales. Incluid colores coincidentes, variaciones de tono, blanco y negro, y superficies mates y brillantes. Mezclad el orden para que el programa no pueda aprovechar una secuencia conocida.

#### Fase 2 · Exploramos y construimos

Una persona que no programa la máquina conserva la clave de las categorías de prueba. El equipo ejecuta las muestras y registra aciertos, errores y casos enviados a revisión. Mantened constantes la orientación y la distancia; si las cambiáis, marcadlo como una prueba diferente.

#### Fase 3 · Explicamos y registramos

Calculad el porcentaje de aciertos sobre el número de muestras que el prototipo tenía que distinguir. Contad aparte las muestras de revisión: no son aciertos automáticos. Elegid un falso positivo y un caso ambiguo, y decidid si el origen probable es la lectura, la regla o el mecanismo.

#### Fase 4 · Aplicamos y mejoramos

Escribid un límite que los datos demuestran y un riesgo que todavía no se ha probado. Un resultado con ladrillos o tarjetas no valida la clasificación de residuos reales.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** matriz de veinte pruebas, porcentaje con denominador explícito y dos errores comentados.

**Pregunta docente:** ¿Qué error sería más grave si la muestra fuera un residuo real? ¿Qué información falta todavía?



### **Mejoramos y comunicamos una conclusión responsable (50 min).**

#### Fase 1 · Activamos y predecimos

Revisad la matriz de pruebas y elegid una regla o una parte mecánica. Escribid una predicción concreta sobre qué debería mejorar antes de tocar el prototipo.

#### Fase 2 · Exploramos y construimos

Cambiad una sola cosa y volved a probar las mismas veinte muestras en condiciones parecidas. Si una categoría mejora y otra empeora, conservad los dos datos y explicad el compromiso.

#### Fase 3 · Explicamos y registramos

Comparad la maqueta con la guía local: ¿qué se puede automatizar en una prueba de color?, ¿qué exige información sobre composición y etiquetado?, ¿cuándo hace falta una revisión humana? La guía vigente, y no el prototipo, es la referencia para las normas locales.

#### Fase 4 · Aplicamos y mejoramos

Presentad un diagrama, la tabla de pruebas, el porcentaje, un límite del sensor y una mejora pendiente. Redactad la conclusión como «clasifica estas muestras por color en las condiciones probadas», no como «sabe reciclar cualquier residuo».

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** prototipo revisado, comparación antes/después y recomendación para una persona operadora.

**Pregunta docente:** ¿Qué afirmación permiten los datos? ¿Qué información adicional hace falta para decidir sobre un objeto real?


## 📊 Evaluación y evidencias

Recoged el boceto del flujo, fotografías del mecanismo sin personas, código comentado, registros de calibración y tabla comparativa de veinte muestras. Observad si el alumnado:

- separa una lectura sensorial de una conclusión sobre material o contenedor;

- construye una regla que tiene una salida para casos desconocidos;

- repite pruebas en condiciones documentadas y calcula aciertos sobre el total correcto;

- identifica si el error aparece en el sensor, en la lógica o en el mecanismo;

- usa la guía local como referente para hablar de residuos reales.

Se valora la calidad de las pruebas y la explicación de los límites, no una tasa de acierto perfecta. El equipo tiene que distinguir claramente entre muestra de prueba y residuo real.

## ♿ Seguridad y participación accesible

No manipuléis residuos reales ni objetos sucios, cortantes, con líquidos o de origen desconocido. Usad piezas ligeras; mantened los dedos fuera de la compuerta y desconectad el motor antes de ajustar engranajes. Mantened la máquina a baja velocidad y bajo supervisión. Para participar, ofreced roles de cartografía, montaje, programación, lectura de datos y auditoría; se pueden dar instrucciones para que otra persona opere el dispositivo. Las categorías tienen que tener pictogramas y formas además de colores para no depender solo de la visión cromática. Se puede presentar la conclusión con gráfico, texto, comunicación aumentativa o demostración sin contacto con el mecanismo.

## 🔗 Dotación y fuentes técnicas

La propuesta usa el sensor de color, hub, motores y elementos estructurales del set SPIKE Prime. Consultad la [ficha técnica oficial del sensor de color](https://education.lego.com/en-us/teacher-resources/lego-education-spike-prime/support-technical-info/lego-education-spike-prime-support-technical-info-product-info/) y comprobad su funcionamiento en el set del centro. La guía municipal o del centro sobre residuos se tiene que consultar de nuevo antes de usar la actividad, porque el prototipo no determina las normas locales ni sustituye una clasificación humana.
