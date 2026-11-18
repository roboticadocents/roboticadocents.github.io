---
active: true
title: "Mensajes que llegan"
description: "Seis lecciones de Python de la unidad oficial Hardware and Software más una ampliación profesional, con mensajes escolares de luz, sonido y programación por parejas."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Lenguas y Programación"
theme: "python"
theme_label: "Python: hardware, software y comunicación"
duration: "6 lecciones oficiales + 1 ampliación · 7–9 sesiones"
challenge: "¿Cómo podemos crear una señal escolar inclusiva con Python, luz y sonido, y comprobar que el mensaje se entiende en diferentes condiciones de uso?"
---

![Robot LEGO SPIKE Prime real con hub y base de dos ruedas junto a una señal escolar de tarjetas de colores, sobre una mesa de prueba.](../../_assets/situacions/sp-python-comunicacio.webp)

_El hub, los sensores y los actuadores son hardware; Python describe las instrucciones que los coordinan._

## 🌱 Reto y sentido

La biblioteca del centro prepara una semana de puertas abiertas y quiere probar un pequeño punto de información que anuncie, con un patrón de luz y una señal sonora opcional, si una mesa está disponible, ocupada o necesita ayuda. El equipo no registra personas ni datos reales: trabaja con tarjetas de situación creadas en clase y un hub SPIKE Prime. El encargo es diseñar un código de señales fácil de aprender, escribirlo en Python, comprobarlo con distintas personas y condiciones, y explicar qué puede y qué no puede comunicar el prototipo.

Esta situación adapta las seis lecciones de la unidad 1 *Communicating Ideas: Hardware and Software* de LEGO Education *Introduction to Python Programming · Course 1*: *Importing Libraries*, *Communicating with Light*, *Pair Programming*, *Communicating with Sounds*, *Digital Sign* e *Ideas to Support Your Design*. Añade una séptima sesión propia de orientación profesional, marcada como ampliación y no contada como una lección de esa unidad. El recorrido mantiene el hilo de introducción a las bibliotecas, uso de matriz luminosa y sonido, trabajo en parejas, depuración elemental, mensaje multimodal, revisión con feedback y conexión con profesiones. El contexto y la producción son propios, y la respuesta sonora siempre es opcional.

## 🎯 Aprendizajes y vocabulario

- Describir la relación entre hardware (hub, puertos, matriz, altavoz y dispositivos) y software (instrucciones Python que organizan su respuesta).

- Explicar que una biblioteca es código reutilizable que aporta funciones, y que importarla permite acceder a ella cuando la versión instalada lo admite.

- Abrir, leer y ejecutar un programa corto; localizar errores sencillos de nombre, orden, indentación o llamada con ayuda de la consola.

- Crear una secuencia luminosa con patrón, duración y pausa deliberados; distinguir una secuencia fija de una entrada interactiva.

- Crear y comparar patrones sonoros cortos, regular el volumen y ofrecer una alternativa visual equivalente sin sonido.

- Descomponer un mensaje en estados y señales; probar si el código se interpreta correctamente sin depender solo del color, el sonido o la memoria.

- Practicar la programación por parejas alternando quién escribe y quién revisa, verbalizar predicciones y citar código o ideas reutilizados cuando corresponda.

- Recoger feedback, documentar una modificación y relacionar las tareas con funciones profesionales de programación, diseño de interacción, accesibilidad y soporte técnico.

**Hardware:** partes físicas que captan o producen acciones. **Software:** instrucciones y datos que utiliza el dispositivo. **Biblioteca:** conjunto de código reutilizable. **Importar:** incorporar una biblioteca al programa. **Matriz:** conjunto de píxeles luminosos del hub. **Depurar:** investigar una diferencia entre el resultado esperado y el observado.

```python
# Fragment conceptual de Python; adapteu la biblioteca a l'app SPIKE disponible.
# primer es defineix el senyal; després es prova una instrucció cada vegada
missatge = "AJUDA"
print(missatge)
```

El fragmento es Python general y no controla hardware. Los nombres de importación y las funciones para matriz, sonido y botones varían entre versiones de SPIKE; el profesorado comprueba el ejemplo correspondiente en la Knowledge Base de la app local antes de ejecutarlo.

## 🧰 Materiales y preparación docente

Un set SPIKE Prime por pareja, hub cargado, dispositivo con la app SPIKE y editor Python disponible, diario de ingeniería, tarjetas mate con símbolos grandes y palabras cortas, cartón para una base de mostrador, rotuladores, cinta de papel, temporizador y versiones impresas de los patrones. Un robot móvil no es imprescindible: el hub se puede usar fijado en un soporte estable, que es más pertinente para una señal. No hacen falta materiales externos de LEGO ni se atribuye ninguna capacidad de reconocimiento automático a la maqueta.

Antes de la primera sesión, comprobad la conexión al hub, el idioma y la maquetación del editor, la API Python presente y el acceso a la consola. Probad una expresión inocua antes de conectar motores; en esta situación no necesitamos ningún motor. Consultad los nombres oficiales de las funciones de matriz y sonido de vuestra versión. Preparad un ejemplo que funcione y copias con un error intencionado de código; evitad errores que puedan activar un actuador. Definid un nivel bajo de volumen y una alternativa sin sonido.

Formad parejas con roles que cambian en cada sesión: *piloto* (escribe o manipula el dispositivo) y *navegante* (lee el criterio, predice y registra). Reservad turnos para que ambas personas escriban código y expliquen decisiones. Antes de usar la señal con personas, explicad que es un prototipo de aula, no un sistema operativo del centro ni un canal de emergencia.

## 📅 Secuencia didáctica · seis lecciones y una ampliación propia

### **Lección 1 · La caja de herramientas del programa (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (5 min):** comparad una receta con un programa: los ingredientes y los utensilios son recursos; las instrucciones organizan su uso. Trasladad la analogía con cuidado: una biblioteca es código reutilizable, no una pieza física.

#### Fase 2 · Exploramos y construimos

**Inventario del set (7 min):** abrid un set por pareja y localizad el hub, los tres motores y los tres sensores. Poned las piezas sobre la mesa, identificadlas sin conectar ningún motor y completad en el diario tres columnas: «componente», «qué puede hacer según la documentación» y «qué todavía tenemos que comprobar». Volved a colocar cada pieza en su espacio antes de abrir el editor; no compartáis piezas entre sets.

#### Fase 3 · Explicamos y registramos

**Lectura del ejemplo (7 min):** abrid la plantilla Python de la app y localizad las importaciones, la función principal y la línea que envía un texto a la matriz. En el material de Course 1, el ejemplo parte de `from hub import light_matrix`, `import runloop` y `await light_matrix.write("Hi!")`; tratadlo como ejemplo de la versión de la guía, porque los nombres pueden variar en la app actual. Relacionad `light_matrix` con la matriz del hub y `runloop` con la ejecución del programa.

#### Fase 4 · Aplicamos y mejoramos

**Práctica y depuración (18 min):** con el hub conectado y ningún motor en uso, ejecutad primero el ejemplo funcional y observad el texto que se desplaza y el estado de conexión de la app. Cambiad solo el texto por un saludo corto. Después, en una copia, omitid una importación o cambiad una letra del nombre y ejecutadla para observar el error de consola; señalad la línea, corregidla y volved a probar. No hagáis errores deliberados sobre un montaje en movimiento.

#### Fase 5 · Comprobamos y reflexionamos

**Registro y salida (8 min):** completad el esquema hardware → biblioteca importada → instrucción → respuesta observada y explicad qué no podría hacer el programa si faltara la biblioteca. Anotad la versión de la app y la forma de importación que habéis comprobado. Antes de salir, autoevaluaos en una escala del 1 al 3 en la gestión del tiempo y el cuidado del material; contrastad con la pareja que todas las piezas han vuelto al lugar correcto y que las dos personas han participado.

### **Lección 2 · ¿La luz puede dar información? (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (5 min):** ¿qué figuras podemos dibujar en una matriz de cinco por cinco? Predecid si un triángulo, un rectángulo y un icono elegido por el grupo se reconocerán con solo 25 píxeles; anotad por qué conviene esbozar antes de programar.

#### Fase 2 · Exploramos y construimos

**Diseño en papel (8 min):** dibujad una cuadrícula de 5 × 5 en el diario y recortad 25 cuadrados de papel de colores para poder representar cada píxel. Probad una figura sencilla —rectángulo, triángulo o símbolo propio del centro— y marcad solo las casillas que se tienen que iluminar. Escribid un pseudocódigo de cuatro pasos: limpiar la matriz, mostrar la figura, esperar y borrarla. No hace falta utilizar a la vez las 25 piezas.

![Hub SPIKE Prime y una cuadrícula de cinco por cinco con el mismo patrón geométrico representado en papel y en la matriz luminosa.](../../_assets/situacions/sa-sp-python-matriu-llum.webp)

_La cuadrícula de papel permite predecir y revisar el patrón antes de escribir el programa._

#### Fase 3 · Explicamos y registramos

**Programación en pareja (20 min):** partid de un ejemplo verificado en la Knowledge Base de la versión local. Mostrad un icono, esperad cinco segundos y limpiad la matriz; después cambiad solo la constante del icono y el comentario correspondiente. Comparad `show_image` —que representa una figura— con `write` —que desplaza una cadena de caracteres—. La persona navegante lee el pseudocódigo y registra la predicción; la piloto edita. Intercambiad los roles. No copiéis una API de otra versión sin probarla antes.

#### Fase 4 · Aplicamos y mejoramos

**Depuración y prueba con compañeros (8 min):** si la figura no corresponde al boceto, comparad filas y casillas con la cuadrícula. En una copia segura, cambiad la mayúscula de una constante de imagen, abrid la consola y localizad la línea que señala el error; corregidla y volved a ejecutar. Preguntad qué cambiaría si se omitiera `sleep_ms` y contrastad la predicción con la ejecución. Después, mostrad el icono a otra pareja sin revelar la clave y registrad la interpretación de forma anónima.

#### Fase 5 · Comprobamos y reflexionamos

**Autoevaluación (4 min):** explicad para qué sirve la pausa, qué indica el comentario que empieza por `#` y qué diferencia habéis observado entre mostrar un icono y desplazar una palabra. Anotad un error que habéis resuelto, una prueba que falta y una modificación medible; una prueba con una pareja no es suficiente para afirmar que el código será accesible para todo el mundo.

### **Lección 3 · Una pareja, un programa revisable (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación (5 min):** imaginad un coche con cuatro personas y distinguid quién conduce de quién interpreta el mapa y avisa de un giro. Trasladad la comparación a la programación: ambas personas piensan, pero en cada turno una escribe y la otra revisa el código y el criterio.

#### Fase 2 · Exploramos y construimos

**Primer turno (12 min):** elegid un icono del repertorio que muestra la Knowledge Base y escribidlo en un programa corto. La persona que pilota el editor explica qué cambiará antes de escribir; la navegante comprueba el nombre de la constante, el orden de las líneas y la llamada antes de pulsar ejecutar. Mostrad el resultado al grupo desde el hub detenido y estable.

#### Fase 3 · Explicamos y registramos

**Intercambio y registro (10 min):** cambiad de rol y programad un segundo icono elegido por la nueva piloto. Cada pareja comparte las dos figuras con el grupo; el alumnado registra en notas adhesivas solo el nombre del icono que prefiere, sin poner su nombre. Organizad las notas en columnas para hacer un recuento de preferencias y hablad de cómo cambia la tarea cuando hay que acordar categorías y contar resultados.

#### Fase 4 · Aplicamos y mejoramos

**Juego de depuración (10 min):** en una copia del programa, la piloto introduce un error seguro en el nombre de un icono o en el orden de dos instrucciones; no se activan motores ni mecanismos. La navegante describe qué esperaba, lee la línea indicada por la consola y propone una corrección sin tomar el teclado. Cambiad los papeles y haced una segunda ronda. Cerrad distinguiendo entre reutilizar una idea o un fragmento documentado y presentarlo como propio; añadid la atribución cuando corresponda.

#### Fase 5 · Comprobamos y reflexionamos

**Autoevaluación (8 min):** cada miembro anota qué ha hecho en cada rol, cómo ha ayudado a la pareja y qué práctica quiere mejorar. Puntuad del 1 al 3 la gestión del tiempo y del material; comprobad que las dos personas han escrito código, que el programa acaba en un estado conocido y que todas las piezas vuelven a su espacio. La preferencia del grupo no se interpreta como una evaluación individual.

### **Lección 4 · Sonidos, pausas y alternativas (60 min).**

#### Fase 1 · Activamos y predecimos

**Reto sin palabras (5 min):** en parejas, una persona comunica una orden de tres tarjetas de colores sin hablar ni escribir; primero puede mostrar la pila y después tiene que inventar un código sonoro acordado. Predecid qué parte de la información se pierde si no se conoce el código. Cualquier alumno puede elegir una alternativa silenciosa.

#### Fase 2 · Exploramos y construimos

**Beep del hub (15 min):** abrid una plantilla nueva y seleccionad la función de beep que aparece en la Knowledge Base de la app instalada. En una tabla, relacionad los argumentos con frecuencia, duración en milisegundos y volumen. Ejecutad una nota breve y cambiad solo un argumento por prueba; anotad valor y resultado. Mantened el volumen bajo y no conectéis actuadores.

#### Fase 3 · Explicamos y registramos

**Partitura y explicación (12 min):** componed una secuencia original de tres sonidos; representadla con una partitura de símbolos y escribid el código de manera que cada llamada tenga un comentario breve. Explicad qué representa cada valor numérico y qué biblioteca se importa. Añadid a cada mensaje una alternativa visual y textual equivalente.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas de límite y sonido grabado (23 min):** en una copia, probad una frecuencia inferior a 100 y distinguid «el programa se ejecuta» de «el oído humano percibe el beep»; no asumáis que un resultado silencioso es un error de sintaxis. Después consultad la app para distinguir el beep generado por el módulo de sonido del hub de un efecto pregrabado, como un sonido de la app que sale por los altavoces del dispositivo. Verificad qué dispositivo suena y qué importación necesita la función; cambiad una sola opción y documentadlo. Si el grupo lo elige, cread un patrón corto con tres notas o efectos sin reproducir una canción comercial. Un equipo revisor sigue la partitura y comunica qué ha entendido; ningún sonido es obligatorio y no se usan alarmas repentinas.

#### Fase 5 · Comprobamos y reflexionamos

**Autoevaluación (5 min):** comparad el beep del hub y el sonido de la app: ¿dónde se escucha cada uno y qué tipo de parámetros o nombre necesita? Anotad una prueba de programación, una limitación de audición/entorno y la alternativa visual o textual que conserva el mensaje.

### **Lección 5 · El cartel digital de la biblioteca (90 min).**

#### Fase 1 · Activamos y predecimos

**Definir el mensaje (10 min):** la biblioteca quiere anunciar una actividad ficticia de la semana cultural —por ejemplo, intercambio de libros o lectura de relatos locales— y necesita un cartel que llame la atención sin confundirse con un aviso oficial. Elegid público, mensaje breve y acción esperada; haced un boceto de papel e identificad qué puede aportar una versión luminosa o sonora. No anunciéis horarios reales ni disponibilidad que el prototipo no pueda verificar.

#### Fase 2 · Exploramos y construimos

**Storyboard y pruebas de comprensión (12 min):** comparad el cartel estático con la señal digital. Representad la secuencia: iniciar, mostrar el icono, desplazar el texto, opcionalmente emitir un sonido suave y acabar o volver al inicio. Otra pareja interpreta el boceto sin que le expliquen el contexto; revisad las palabras ambiguas y preparad también una lectura sin sonido.

#### Fase 3 · Explicamos y registramos

**Construcción y código (30 min):** montad un soporte estable de mesa con el hub visible y probad cada función por separado. El programa muestra un icono de 5 × 5, escribe una frase corta en la matriz y, si el grupo lo acuerda, añade un efecto de sonido no intrusivo; cada parte tiene un comentario que explica su intención. Mantened los nombres y órdenes que documenta la versión instalada y anotad si el sonido sale del hub o del dispositivo. La maqueta no usa sensores para afirmar que la actividad ha empezado ni que hay plazas disponibles.

#### Fase 4 · Aplicamos y mejoramos

**Ronda de pruebas (20 min):** probad el icono, la frase y el conjunto; haced también una interrupción y volved a iniciar el programa. Registrad la interpretación del mensaje y si la duración da tiempo para leerlo. **Revisión cruzada (10 min):** otra pareja observa el cartel sin leyenda y explica qué anuncia y qué acción entiende. Recoged solo comentarios anónimos y cambiad una propiedad; repetid una prueba para comprobar si la versión mejorada comunica con más claridad.

#### Fase 5 · Comprobamos y reflexionamos

**Comunicación (8 min):** presentad el cartel, el código comentado y una tarjeta que explique el público, el mensaje, la instrucción de parada y la alternativa sin sonido. Declarad que la actividad anunciada es ficticia y que el prototipo no verifica información, no sustituye la cartelería accesible ni los avisos oficiales y no está preparado para instalarse en el centro.

### **Lección 6 · Mejorar una idea con feedback (45 min).**

#### Fase 1 · Activamos y predecimos

**Modelado del feedback (5 min):** recordad la tarjeta digital creada en la sesión anterior y modelad una respuesta concreta, amable y útil. El feedback no consiste en hacer la tarea por el otro equipo: no reconstruyáis el modelo ni escribáis dentro de su programa; describid qué habéis observado, haced una pregunta y ofreced una opción para que los autores decidan.

#### Fase 2 · Exploramos y construimos

**Revisión entre equipos (10 min):** el equipo B muestra su cartel, el programa y un caso de prueba mientras el equipo A registra comentarios; después intercambian roles. La pauta pide cuatro aportaciones: algo que gusta, algo que ya funciona bien, una alternativa que se podría probar y un punto confuso o mejorable con la razón. Quien recibe el feedback puede pedir aclaraciones; no se juzga a la persona que ha escrito el código.

#### Fase 3 · Explicamos y registramos

**Conversación y selección (5 min):** comparad los comentarios recibidos, identificad una fortaleza que conviene preservar y elegid una propuesta de revisión. Si no la adoptáis, escribid por qué y qué otra prueba necesitáis.

#### Fase 4 · Aplicamos y mejoramos

**Iteración documentada (20 min):** modificad vuestro propio cartel o programa, nunca el del grupo revisor. Repetid un caso que había generado confusión y otro que ya funcionaba; registrad la versión anterior, la sugerencia, el cambio, los resultados y la decisión final. Presentad qué habéis incorporado y qué habéis dejado pendiente con una justificación.

#### Fase 5 · Comprobamos y reflexionamos

**Autoevaluación (5 min):** en el diario, explicad qué feedback habéis dado y recibido, cómo lo habéis utilizado y cómo os habéis sentido en los dos papeles. Puntuad del 1 al 3 la gestión del tiempo y el cuidado del set; cerrad con una acción concreta para mejorar la próxima revisión entre iguales.

### **Lección 7 · Profesiones que unen código y personas · ampliación propia (45–60 min).**

#### Fase 1 · Activamos y predecimos

**Mapa de tareas (10 min):** mirad el trabajo hecho y asignad partes a funciones profesionales —desarrollar software, diseñar una interacción, probar accesibilidad, documentar, reparar dispositivos— sin afirmar que una persona real hace una única función.

#### Fase 2 · Exploramos y construimos

**Investigación guiada (15 min):** por equipos, redactad tres preguntas sobre habilidades, colaboración y decisiones de ética/acceso. Usad fuentes profesionales o una entrevista autorizada si el centro dispone de ella; no inventéis respuestas ni exigáis datos personales sobre itinerarios familiares.

#### Fase 3 · Explicamos y registramos

**Producto (15 min):** cread una ficha de profesión conectada con una tarea del proyecto, una competencia observable y una pregunta abierta.

#### Fase 4 · Aplicamos y mejoramos

**Galería y síntesis (5–20 min):** presentad prototipos y profesiones en una muestra de clase, con opción de exponer texto, diagrama o explicación oral.

#### Fase 5 · Comprobamos y reflexionamos

Cerrad relacionando un cambio de diseño con una necesidad de usuario y una responsabilidad de quien construye tecnología.

## 🧪 Evidencias, evaluación y producto

El portafolio incluye el diagrama hardware/software, la nota de versiones e importaciones, la traza de un programa inicial, el pseudocódigo, el storyboard, la tabla de estados y señales, el programa Python comentado, dos pruebas de depuración, observaciones anónimas de comprensión, la iteración justificada, la pauta de parejas y la ficha de conexión profesional. El producto es un prototipo de señal digital de mesa más una tarjeta de uso que explica la selección de estado, las alternativas de percepción, el procedimiento de parada y las limitaciones.

Evaluad con cuatro criterios: **comprensión del sistema** (diferencia hardware y software e identifica por qué importa la biblioteca); **programación** (construye una secuencia de luz/sonido coherente y localiza un error elemental); **diseño de comunicación** (mantiene alternativas y revisa interpretaciones a partir de pruebas); y **colaboración/reflexión** (alterna roles, documenta la atribución, usa feedback y conecta tareas con profesiones). Niveles sugeridos: con modelado, con apoyo, autónomo y transferencia justificada. No se evalúa que el robot «funcione» sin más: importa poder explicar la relación entre instrucción, componente, resultado y prueba.

## ♿ Inclusión, privacidad y seguridad

Presentad la información con texto, símbolo, luz y opción sonora suave; nunca hagáis que el color sea la única pista. Ofreced patrones imprimibles, lectura de código en pareja, texto ampliado, pausas, roles alternativos y prueba sin sonidos. Evitad parpadeos rápidos o secuencias que puedan causar molestias; dejad que cualquier alumno observe o elija otra manera de participar. No captéis datos personales, imágenes, conversaciones ni la presencia de personas. Mantened el modelo en una mesa estable; los motores no son necesarios. La señal es una simulación didáctica, no una alarma, un servicio de biblioteca real ni una instrucción de evacuación.

## 🔗 Referente oficial y decisiones de adaptación

Adapta las seis lecciones oficiales de la unidad *Communicating Ideas: Hardware and Software* de LEGO Education [*Introduction to Python Programming · Course 1*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt834b554cdaa246f7/6584064fd082f7672425e7ea/File_1_Units12345_Intro_to_Python_Course_TG_Course.pdf?locale=en-us): *Importing Libraries*, *Communicating with Light*, *Pair Programming*, *Communicating with Sounds*, *Digital Sign* e *Ideas to Support Your Design*. Añade una séptima sesión propia, *Career Connections*, como ampliación profesional, no como lección de la unidad. La guía consultada trabaja con SPIKE Prime, Python, journals y parejas; esta adaptación conserva los ejes objetivos, cambia el contexto por una señal escolar simulada y produce procedimientos, ejemplos, instrumentos e imagen propios. No se reproducen materiales del alumnado ni código completo. Las API de SPIKE dependen de la versión y hay que validarlas localmente.
