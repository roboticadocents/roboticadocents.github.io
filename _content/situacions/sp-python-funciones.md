---
active: true
title: "Funciones que hacen equipo"
description: "Seis lecciones de Python con SPIKE Prime para descomponer programas en funciones, pasar parámetros y diseñar un prototipo de triaje escolar."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Programación"
theme: "python"
theme_label: "Python: funciones y parámetros"
duration: "6 lecciones · 6–8 sesiones"
challenge: "¿Cómo podemos dividir el triaje de una jornada escolar en acciones reutilizables y enseñar a un prototipo SPIKE a ejecutarlas con datos diferentes?"
---

![Robot LEGO SPIKE Prime real con pinza mecánica que clasifica fichas de materiales de colores sobre una mesa de prueba.](../../_assets/situacions/sp-python-funcions.webp)

_Una función concentra una acción; los parámetros permiten reutilizarla con valores diferentes._

## 🌱 Reto y sentido

La comunidad educativa quiere preparar una jornada de reutilización de materiales y necesita ordenar fichas limpias de cartón, papel y envases simulados en una maqueta de mesa. Un equipo construye un mecanismo sencillo con piezas SPIKE Prime y escribe en Python un programa que clasifica muestras de colores acordados. El robot no identifica materiales reales ni decide qué se recicla: en esta maqueta, el color es una etiqueta creada por la clase, y las personas comprueban y validan la clasificación. La pregunta de ingeniería es cómo separar un procedimiento largo en acciones con nombre, cómo repetirlo con datos diferentes y cómo demostrar que la reutilización mantiene el comportamiento esperado.

La secuencia adapta las seis lecciones de la unidad 7 *Functions* de LEGO Education *Introduction to Python Programming · Course 2*. Progresa desde la descomposición de una acción, pasa por varias funciones y funciones con parámetros, y llega a un prototipo ambiental investigado, probado y revisado con retroalimentación. La programación es Python textual: el pseudocódigo ayuda a planificar, pero no sustituye las funciones y llamadas de Python.

## 🎯 Aprendizajes y lenguaje

- Descomponer una tarea en subproblemas y dar nombres claros a acciones que se repetirán.

- Definir una función con `def`, indentación y cuerpo; explicar la diferencia entre definirla y llamarla.

- Crear y llamar varias funciones en un orden deliberado, evitando duplicar instrucciones.

- Usar parámetros como nombres de entrada dentro de una función y argumentos como valores concretos en la llamada; anticipar errores de cantidad o orden.

- Separar la lectura del sensor, la decisión de clasificación y la actuación mecánica para que se puedan probar de forma independiente.

- Probar casos conocidos y no asignados, registrar resultados, depurar una causa cada vez y justificar rediseños.

- Comunicar los límites del prototipo: una lectura de color no es identificación de material ni una recomendación real de reciclaje.

**Función:** bloque de código con nombre que se puede ejecutar cuando se llama. **Parámetro:** nombre declarado entre los paréntesis de la definición; recibe un dato cuando se llama a la función. **Argumento:** valor concreto que pasamos en una llamada. **Descomposición:** dividir una tarea compleja en partes que se pueden entender, construir y probar. **Caso de prueba:** entrada, comportamiento esperado y resultado observado.

```python
def mostrar_estat(etiqueta, color):
    print(etiqueta, color)

mostrar_estat("Mostra A", "blau")
```

En el ejemplo, `etiqueta` y `color` son parámetros; `"Mostra A"` y `"blau"` son argumentos. Es Python general válido para entender la idea. Las órdenes SPIKE de motores, sensores y runloop deben consultarse en la Knowledge Base de la versión de la app instalada: no hay que copiar este ejemplo como si fuera un programa de hardware completo.

## 🧰 Materiales y preparación docente

Un set SPIKE Prime por equipo, hub cargado, dispositivo con app SPIKE y editor Python disponible, sensor de color del set, un motor y piezas Technic para una pinza o puerta de triaje sencilla, cartón para canales y contenedores, fichas grandes de colores mate, cinta de papel, diario de diseño, cronómetro externo opcional y ordenador/proyector para mostrar fragmentos cortos. El modelo puede ser fijo sobre la mesa: la base móvil no es necesaria para la tarea. Evitad instrucciones de construcción privadas o copiar modelos de marca; cada equipo diseña una solución con piezas de su caja.

Antes de clase, comprobad que el editor Python detecta el hub, que el sensor y el motor están conectados a los puertos acordados y que se puede detener la ejecución. Las versiones de la app pueden ofrecer API diferentes. Preparad cuatro etiquetas de color probadas con la luz del aula, una etiqueta sin correspondencia, una entrada manual alternativa por si falla el sensor y copias desconectadas de llamadas correctas e incorrectas. Desactivad los motores antes de conectar o cambiar cables. Poned el mecanismo a baja velocidad, con topes de recorrido y los dedos lejos de la pinza.

Equipos de 2–3 personas: programación/lectura del código, cuidado del mecanismo y registro de pruebas. Haced rotación de roles en cada lección. La persona que observa tiene derecho a pedir una pausa antes de ejecutar cualquier cambio físico.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Una tarea, muchas acciones con nombre (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (8 min):** pedid que describan oralmente un gesto repetible —por ejemplo, levantar un cartel y devolverlo a la posición inicial— y marcad dónde reaparecen las mismas instrucciones. Escribidlas en pseudocódigo y preguntad qué cambiaría si repitiéramos el gesto con otro mensaje.

#### Fase 2 · Exploramos y construimos

**Modelo (10 min):** comparad una secuencia con las mismas líneas copiadas tres veces y una secuencia que define `saludar()` una vez y la llama en tres puntos. No ejecutéis todavía el mecanismo; haced una traza en papel para comprobar definición, llamada y orden.

#### Fase 3 · Explicamos y registramos

**Reto (20 min):** construir una pequeña aleta/indicador articulado con un motor SPIKE que haga una señal de inicio, una señal de «muestra preparada» y un retorno a la posición inicial. Descomponed el comportamiento en `preparar()`, `indicar()` y `tornar()`; definidlos con `def` y llamadlos en el orden del pseudocódigo. Consultad la Knowledge Base para las órdenes de motor compatibles. Probad primero cada función con el mecanismo desconectado o sin carga, después con un movimiento corto y lento.

#### Fase 4 · Aplicamos y mejoramos

**Evidencia y conversación (7 min):** dibujad las llamadas como una línea temporal y explicad qué instrucción se ejecuta primero y por qué el código dentro de una definición no se ejecuta hasta que se llama a la función.

#### Fase 5 · Comprobamos y reflexionamos

**Extensión:** cambiad el orden de dos llamadas y predecid el comportamiento antes de probarlo.

### **Lección 2 · Dos pinzas, dos funciones de captura (45 min).**

#### Fase 1 · Activamos y predecimos

**Pregunta de investigación:** ¿cómo puede el mismo programa controlar accesorios con agarres diferentes? Diseñad en boceto dos puntas intercambiables —una ancha y ligera para una ficha grande y otra más estrecha para una ficha pequeña— sin que ninguna pieza pueda caer de la mesa. No hace falta fabricar ambas si el tiempo o las piezas no lo permiten: una pinza y una palanca de cartón pueden representar la segunda variante.

#### Fase 2 · Exploramos y construimos

**Descomposición (8 min):** haced una secuencia como esperar la orden, cerrar hasta el límite seguro, indicar la captura y abrir. Marcad qué acciones son comunes y cuáles dependen de la forma del accesorio.

#### Fase 3 · Explicamos y registramos

**Construcción y Python (25 min):** cread dos funciones con nombres que expliquen la diferencia (por ejemplo, `agafar_fitxa_gran()` y `agafar_fitxa_menuda()`) y un programa principal que llama a la función adecuada según una etiqueta elegida por el equipo. Comparad este diseño con una larga copia de código duplicado: contad qué líneas cambian y cuáles se repiten. Calibrad cada recorrido con la pinza vacía, sin poner los dedos en la zona de cierre.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas (7 min):** probad tres veces una misma ficha con cada variante; registrad si la agarra, si resbala, si se deforma y si la deja en el contenedor.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión:** ¿por qué ayuda tener funciones separadas cuando cada accesorio necesita un movimiento distinto? ¿En qué casos sería mejor compartir una función común y cambiar solo un dato?

### **Lección 3 · Una función, entradas diferentes: parámetros (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación corporal (7 min):** haced un gráfico humano de preferencias con cuatro opciones neutras (por ejemplo, qué tipo de mensaje visual se comprende mejor); contad las respuestas sin guardar nombres. Relacionad categorías y cantidades con la necesidad de enviar datos a una misma acción.

#### Fase 2 · Exploramos y construimos

**Modelado (10 min):** escribid una función de software general `informar(etiqueta, color)` y llamadla con dos conjuntos de argumentos. El alumnado señala qué es fijo y qué varía. Contrastadla con una función sin parámetros y observad que definir parámetros obliga a proporcionar argumentos al llamarla.

#### Fase 3 · Explicamos y registramos

**Estación SPIKE (20 min):** el sensor lee una de cuatro fichas mate probadas; el programa asigna una respuesta de la maqueta (posición corta/media/larga del motor y mensaje de consola). Separad la función que informa de los datos y la parte que lee el sensor: una función de actuación recibe argumentos ya decididos por la regla. Por ejemplo, el programa puede llamar a `indicar(20, "paper")` o `indicar(45, "cartró")`; traducid las posiciones a la API disponible solo después de consultarla. Incluid un color sin asignación que no cierre la pinza y muestre «sin lectura».

#### Fase 4 · Aplicamos y mejoramos

**Depuración guiada (8 min):** comparad llamadas con dos argumentos, un argumento y argumentos intercambiados. Predecid cuáles fallan de inmediato y cuáles podrían ejecutarse pero mostrar una etiqueta incorrecta. Registrad definición, llamada, error/salida y corrección.

#### Fase 5 · Comprobamos y reflexionamos

**Salida:** cada alumno completa «el parámetro es…, el valor concreto que he pasado es…».

### **Lección 4 · Una estación de triaje automática en maqueta (90 min).**

#### Fase 1 · Activamos y predecimos

**Reto y criterios (12 min):** programar un prototipo que reciba una ficha de una en una y la lleve al contenedor asignado por el código de colores acordado por la clase. No se trata de identificar el material real. Fijad criterios: no coger fichas no asignadas; colocar la ficha dentro de una zona marcada; mantener las piezas enteras; responder con un indicador comprensible; permitir una parada manual. Registrad las limitaciones antes de construir.

#### Fase 2 · Exploramos y construimos

**Ideación y maqueta (18 min):** esbozad dos mecanismos posibles (brazo/pinza, puerta desviadora o canal accionado); comparad número de piezas, recorrido y riesgo de atasco; seleccionad uno y construidlo con una ficha de prueba, sin reproducir ningún modelo oficial.

#### Fase 3 · Explicamos y registramos

**Pseudocódigo (10 min):** describid una vuelta: esperar activación; leer color; seleccionar regla; llamar a la función de triaje con argumentos; mostrar confirmación o «no reconocido»; esperar nueva muestra.

#### Fase 4 · Aplicamos y mejoramos

**Programa (20 min):** organizad funciones por responsabilidad: por ejemplo, `llegir_mostra()`, `informar_resultat(etiqueta, posicio)` y una rutina de actuación de cada mecanismo. La lectura del sensor de color, los valores previstos y las órdenes del motor dependen de la versión de la app y deben consultarse en la Knowledge Base. Mantened separada la regla escolar de clasificación de la acción física del robot.

#### Fase 5 · Comprobamos y reflexionamos

**Pruebas (20 min):** cread una tabla con entrada, resultado esperado, observación y decisión: cada color asignado, un color no asignado, ausencia de ficha, pieza girada y dos intentos seguidos. Haced tres ensayos por color asignado; contad aciertos sobre intentos, errores de lectura, atascos y tiempo aproximado, sin presentar el recuento como una certificación. Cambiad solo una variable cada vez (luz, posición del sensor, umbral, geometría o argumento). **Cierre (10 min):** explicad un error que la función reutilizable ha evitado y un límite del sensor que el equipo todavía debe comunicar al usuario.

### **Lección 5 · Investigar una necesidad del entorno escolar (90 min).**

#### Fase 1 · Activamos y predecimos

**Exploración (15 min):** elegid con el centro un flujo de materiales limpios que exista en el aula o en una actividad escolar: repartir tarjetas, ordenar piezas reutilizables o devolver material a bandejas. No manipuléis residuos reales ni fotografiéis personas. Si no hay tiempo para una visita, usad una planta del espacio o un escenario inventado claramente identificado como simulación. Escribid quién hace la tarea, qué cuesta o se confunde y qué dato permitiría tomar una decisión mejor; no convirtáis una observación puntual en una afirmación sobre toda la escuela.

#### Fase 2 · Exploramos y construimos

**Define e idea (15 min):** formulad una necesidad en una frase neutra, seleccionad usuario y condiciones de uso, y redactad dos criterios medibles y dos restricciones (tiempo, piezas, estabilidad o accesibilidad). Esbozad individualmente dos soluciones antes de consensuar un prototipo.

#### Fase 3 · Explicamos y registramos

**Construcción y funciones (30 min):** montad una ayuda de mesa que clasifique o indique el paso de una ficha simulada. Descomponedla en subproblemas: recibir, detectar o seleccionar, actuar, informar y reiniciar. Escribid funciones con nombres coherentes, parámetros para los datos variables y comentarios para explicar decisiones no obvias. Evitad una función monolítica que lee el sensor, elige la categoría, mueve el motor e imprime todo a la vez.

#### Fase 4 · Aplicamos y mejoramos

**Plan de prueba y revisión (20 min):** preparad casos normales, de frontera/no asignado y de repetición; dejad un margen físico alrededor del accesorio y una parada manual. Ejecutadlos, registrad predicción/resultado y cambiad un elemento por iteración.

#### Fase 5 · Comprobamos y reflexionamos

**Comunicación (10 min):** escribid una tarjeta de uso que explique la entrada, el resultado, qué hacer con «sin lectura» y qué no puede determinar el prototipo. Si la necesidad se ha identificado en el centro, pedid a una persona adulta que confirme que la descripción es respetuosa y no contiene datos personales.

### **Lección 6 · Ideas para mejorar y retorno entre equipos (45 min).**

#### Fase 1 · Activamos y predecimos

**Preparación (8 min):** cada equipo deja un programa corto comentado, una tabla con al menos dos casos, la tarjeta de uso y una pregunta abierta. Compartid solo datos simulados y el código necesario para entender la maqueta; no publiquéis información del centro.

#### Fase 2 · Exploramos y construimos

**Revisión (12 min):** otro equipo sigue el pseudocódigo o prueba la maqueta con el permiso del equipo autor. El retorno describe evidencia con una pauta: «he observado…», «esperaba…», «un caso que todavía probaría es…». No se cambia ni se reescribe el proyecto de otro grupo.

#### Fase 3 · Explicamos y registramos

**Decisión (5 min):** el equipo autor marca qué idea adopta, cuál deja para más adelante y con qué evidencia lo justifica.

#### Fase 4 · Aplicamos y mejoramos

**Rediseño (12 min):** haced una única mejora: aclarar un nombre, reorganizar llamadas, validar un argumento, añadir respuesta a una entrada no asignada o hacer más legible el indicador. Repetid el caso que la motivó y un caso diferente para comprobar que no se ha roto una respuesta existente.

#### Fase 5 · Comprobamos y reflexionamos

**Autoevaluación (8 min):** cada persona registra una contribución propia, una ayuda que ha recibido, una práctica de código que entiende mejor y una pregunta que queda abierta. Escala privada de 1–3 para el uso del tiempo y el cuidado del material, con un objetivo de mejora, sin comparar al alumnado.

## 🧪 Evidencias, evaluación y producto final

El portafolio de equipo contiene: definición de la necesidad y límites; dos bocetos y una decisión con criterios; pseudocódigo; mapa de funciones y llamadas; código Python comentado; explicación de parámetros y argumentos con un ejemplo propio; tabla de entradas esperadas/no asignadas y resultados; registro de depuración; pruebas repetidas; retroalimentación recibida y decisión de rediseño; y una tarjeta de uso con las limitaciones del prototipo. El producto final es una maqueta de triaje de fichas limpias, una demostración de menos de dos minutos y una explicación oral o escrita que distingue dato, regla y actuación.

Observad cuatro dimensiones con descriptores: **estructura** (identifica y llama funciones en un orden coherente), **parámetros** (diferencia definición, parámetro y argumento y comprueba cantidad/orden), **validación** (prueba casos asignados y no asignados, registra evidencia y explica un cambio) y **comunicación/colaboración** (documenta el código, responde a la retroalimentación y declara límites). En cada dimensión, usad niveles «todavía necesita modelado / lo hace con apoyo / lo hace con autonomía / lo transfiere y lo justifica». La valoración no depende solo de que el robot se mueva: una función bien probada y una limitación bien comunicada también son evidencia de aprendizaje.

## ♿ Accesibilidad, seguridad y sostenibilidad

Permitid pseudocódigo oral, tablero de llamadas en papel, fragmentos Python con tipografía ampliada o lectura compartida; los roles de diseño, registro, pruebas y programación tienen un valor equivalente y rotan. Las etiquetas se identifican con color y forma/textura o un símbolo elegido por el alumnado, sin depender solo de la visión del color. Usad piezas grandes, limpias y ligeras; mantened la pinza en la mesa, con velocidad limitada, recorrido corto y parada manual. No ejecutéis cambios mientras hay manos cerca del mecanismo. No introduzcáis residuos, comida, líquidos ni objetos punzantes. Recoged y reutilizad las fichas. Evitad datos personales, etiquetas con nombres, imágenes de alumnado y afirmaciones sobre prácticas ambientales del centro que no se hayan comprobado.

## 🔗 Referente oficial y decisiones de adaptación

Adapta las seis lecciones de la unidad 7 *Functions* del curso LEGO Education [*Introduction to Python Programming · Course 2*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5436c2a0ac31fc17/65e9d0ef2a3929468f30be14/File_2_Units_678910_Intro_to_Python_Course_TG_Course_2.pdf?locale=en-us): *Turtle Trouble*, *Clean Up with Multiple Functions*, *Clean Indicator*, *Automate the Clean Up*, *Taking Care of My Environment* e *Ideas to Help with My Environment*. Conserva la progresión de descomposición y funciones, varias funciones para mecanismos diferentes, parámetros y depuración de las llamadas, triaje con datos, reto de diseño ambiental en contexto auténtico, documentación, pruebas y retroalimentación. La tortuga y la limpieza de residuos se transforman en una necesidad de circulación de materiales limpios elegida localmente; las reglas de colores son una simulación acordada por el aula, y no se dice que el sensor reconozca materiales. Se han creado relato, actividades, evidencias e ilustración propios; no se copian instrucciones de construcción ni código completo del fabricante. La guía oficial especifica lecciones de 45 minutos, con actividades de 90 minutos para la automatización y el proyecto ambiental, y una sesión final de retroalimentación; esta propuesta mantiene seis lecciones y distribuye la duración según la disponibilidad del centro.
