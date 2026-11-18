---
active: true
title: "Señalización inclusiva en una maqueta"
description: "Investigamos cómo comunicar estados diferentes en una maqueta de paso urbano con micro:bit, sin presentar el prototipo como un dispositivo de seguridad real."
robot: "microbit"
robot_label: "Micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Conocimiento del Medio y Diseño"
theme: "ciutat"
theme_label: "Accesibilidad y diseño urbano"
duration: "6 sesiones"
challenge: "¿Cómo podemos representar dos estados de un paso urbano con señales comprensibles por más de un canal y probarlos en una maqueta?"
---

![Placa micro:bit de la dotación junto a un paso de peatones de cartón, pavimento táctil representado y tarjetas de dos estados para una maqueta escolar.](../../_assets/situacions/mb-ciutat-accessible.webp)

_Ilustración IA propia basada en la placa micro:bit de la dotación. La maqueta representa estados para estudiar comunicación y accesibilidad; no controla ni valida un paso real._

## 🏙️ Reto, contexto y aprendizajes

Los equipos estudian un recorrido próximo al centro a partir de fotografías autorizadas, mapas u observación desde un lugar seguro con permiso escolar. Identifican elementos que ayudan a orientarse y posibles barreras físicas o de información, sin atribuir necesidades a personas que no han participado. Después crean una maqueta de paso urbano y programan una micro:bit para que represente dos estados acordados con iconos de la matriz LED. Si la placa y los accesorios lo permiten, añaden sonido como canal complementario.

El proyecto no instala un semáforo, no guía a personas por la calle y no afirma resolver necesidades de movilidad o visión. Una micro:bit sola no es una señal homologada, no detecta si el paso está libre y no puede garantizar que sea seguro cruzar. La finalidad es practicar diseño inclusivo, programación de entradas y salidas, y evaluación de prototipos a escala.



## 🎯 Aprendizajes y vocabulario

observar sin inferir experiencias ajenas, definir un reto, programar estados con eventos, comparar formas de información, construir una maqueta legible, probarla con observadores voluntarios y comunicar límites de un prototipo.

## 🧰 Materiales y compatibilidad

Preparad micro:bit de la dotación, portapilas o USB, MakeCode, cartón y papel para la maqueta, pictogramas, material táctil de manualidades, tarjetas de prueba y hoja de registro. Identificad si cada placa es V1 o V2 antes de programar sonido. La matriz 5×5 y los botones funcionan como salida y entrada básicas; la placa V2 incorpora altavoz. La V1 necesita una salida de audio compatible, como un altavoz o auriculares conectados correctamente a los pines, y cualquier cableado debe prepararlo y supervisarlo una persona adulta.

Si no sabéis qué versión tenéis, diseñad primero una respuesta visual y usad tarjetas o una señal oral separada para comparar canales; no carguéis bloques exclusivos de V2 en una placa V1. La guía de MakeCode indica que estos bloques pueden mostrar un error 927 en hardware V1. No hace falta añadir accesorios para completar el núcleo de la actividad.

**Vocabulario:** entrada, estado, evento, pictograma, contraste, canal visual, canal sonoro, prototipo, accesibilidad, observación y validación. «Más de un canal» no significa que todos los canales sean adecuados para todas las personas; se trata de ofrecer alternativas y pedir retorno con respeto.

## 📅 Secuencia didáctica · seis sesiones de 45 minutos

### **Observamos el recorrido y hacemos preguntas (45 min).**

#### Fase 1 · Activamos y predecimos

Usad un mapa del entorno escolar o fotografías que no muestren caras, matrículas, rutas de casa ni información identificable. Predecid qué información se puede observar directamente y cuál exigiría consultar a personas usuarias y el contexto.

#### Fase 2 · Exploramos y construimos

Si la escuela autoriza la observación exterior, hacedla desde un recorrido seguro, con supervisión y sin interrumpir a ningún viandante. Registrad solo elementos visibles: paso, acera, desnivel, señal, semáforo existente o información legible. También podéis trabajar con el mapa o fotografías autorizadas.

#### Fase 3 · Explicamos y registramos

Separad hechos de preguntas: «hay un bordillo» es una observación; «impide pasar a cualquier persona con silla de ruedas» requeriría consultar a personas usuarias y el contexto. Formulad preguntas abordables a escala, como «¿cómo indicamos en una maqueta que el estado ha cambiado?». Registrad dos preguntas con lenguaje prudente.

#### Fase 4 · Aplicamos y mejoramos

Revisad las preguntas para evitar atribuir experiencias a personas que no han participado. No simuléis ceguera, no pidáis a nadie que finja una discapacidad y no asumáis que una persona representa a un grupo entero.

#### Fase 5 · Comprobamos y reflexionamos

Compartid qué habéis visto directamente y qué información necesitaríais de una persona usuaria que quiera participar. **Evidencia:** mapa de observaciones y dos preguntas de diseño. **Pregunta docente:** ¿qué hemos visto directamente y qué necesitaríamos saber antes de hacer una afirmación más amplia?

### **Definimos los dos estados del modelo (45 min).**

#### Fase 1 · Activamos y predecimos

Describid qué debería comunicar una maqueta cuando cambia de estado. Elegid dos estados ficticios, por ejemplo «espera» y «simulación de cambio», y predecid qué entrada —botón A o B— activará cada uno.

#### Fase 2 · Exploramos y construimos

Construid una maqueta de mesa con calle, aceras y paso dibujado. Las texturas táctiles son recursos para representar materiales, no una guía de dimensiones normativas. Añadid la etiqueta visible «PROTOTIPO ESCOLAR — NO SE UTILIZA EN LA CALLE». Esbozad señales con más de una representación: icono LED, tarjeta física y, solo si el modelo lo admite, un tono breve.

#### Fase 3 · Explicamos y registramos

Especificad los dos estados, las entradas y los canales elegidos y justificadlos. Anotad cómo sabrá el observador que es una simulación; evitad símbolos confusos con un semáforo real o instrucciones como «cruza ahora».

#### Fase 4 · Aplicamos y mejoramos

Comparad los bocetos y revisad cualquier canal que no sea necesario o que pueda resultar inadecuado. El sonido no es necesariamente accesible en todos los entornos; el silencio o la tarjeta también son opciones.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué acción cambia el estado y cómo se comunica el carácter simulado del prototipo. **Evidencia:** maqueta inicial y especificación de estados, eventos y canales con justificación. **Pregunta docente:** ¿cómo puede saber una persona observadora que la muestra es una simulación?

### **Programamos y probamos la micro:bit (45 min).**

#### Fase 1 · Activamos y predecimos

Antes de programar, una persona lee los eventos previstos y otra anticipa qué respuesta debería aparecer en cada estado. Comprobad la versión de la placa antes de incluir sonido.

#### Fase 2 · Exploramos y construimos

En MakeCode, asociad el botón A a un icono propio para «espera» y el botón B a otro para el estado simulado. Probad la matriz LED con la luz real del aula y revisad que los iconos sean distintos y simples. Si usáis sonido, comprobad la salida: altavoz integrado en V2 o accesorio compatible en V1. Mantened un volumen moderado y una opción de silencio; el sonido no debe ser la única diferencia entre estados.

#### Fase 3 · Explicamos y registramos

Una pareja lee el código, otra pulsa los botones en el orden de prueba y una tercera anota la respuesta esperada y la observada. Incluid al menos cuatro pruebas y registrad también qué ocurre tras un reinicio.

#### Fase 4 · Aplicamos y mejoramos

Revisad los iconos o los eventos si la respuesta no es clara. Volved a probar las entradas y comprobad si la pantalla conserva o borra la señal tras el reinicio.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué entrada ha activado cada respuesta y qué vería o sentiría alguien que aún no conoce el código. **Evidencia:** programa con dos eventos, tabla de cuatro o más pruebas y una revisión. **Pregunta docente:** ¿qué entrada ha activado la respuesta y cómo lo sabemos?

### **Construimos el prototipo a escala (45 min).**

#### Fase 1 · Activamos y predecimos

Revisad la especificación de los estados y predecid si se podrá entender el modelo sin que un miembro del equipo lo explique. Identificad qué parte es el dispositivo y qué parte representa la calle.

#### Fase 2 · Exploramos y construimos

Usad cartón reutilizado para hacer la calle y soportes independientes para la placa. Mantened micro:bit y pilas fuera de cualquier zona que pueda mojarse o quedar comprimida. Colocad el prototipo a una altura visible para observadores sentados y de pie, si es viable. El pavimento táctil se puede representar con papel rugoso o piezas, identificado como símbolo.

#### Fase 3 · Explicamos y registramos

Añadid una leyenda de los símbolos y documentad el etiquetado del prototipo, el soporte de la placa y las alternativas de representación. No hagáis afirmaciones de cumplimiento normativo a partir de una maqueta escolar.

#### Fase 4 · Aplicamos y mejoramos

Comprobad que tarjetas, iconos y estados no se contradicen. Si usáis color, añadid también una forma o palabra legible para que la interpretación no dependa solo de distinguir colores.

#### Fase 5 · Comprobamos y reflexionamos

Pedid a otra pareja que interprete la maqueta sin explicación previa y anotad qué ha entendido. **Evidencia:** maqueta con etiqueta de prototipo, placa fija, leyenda y retorno inicial. **Pregunta docente:** ¿se puede entender el modelo sin que el equipo lo explique?

### **Hacemos pruebas de uso sin simular discapacidades (45 min).**

#### Fase 1 · Activamos y predecimos

Invitamos a compañeros o personal del centro a observar voluntariamente el prototipo y describir qué entienden. Explicad que no se les asignará ningún diagnóstico ni se les pedirá hablar en nombre de una comunidad.

#### Fase 2 · Exploramos y construimos

Registrad la interpretación de los pictogramas, la visibilidad desde dos puntos y si el sonido resulta molesto. Si participa una persona con experiencia de accesibilidad, acordad antes qué quiere revisar y respetad el derecho a no dar consejo. Registrad comentarios de esas personas concretas, no como prueba universal.

#### Fase 3 · Explicamos y registramos

Describid literalmente qué ha dicho cada observador y separadlo de las conclusiones del equipo. Identificad qué no se puede generalizar a partir de esta prueba.

#### Fase 4 · Aplicamos y mejoramos

Revisad un elemento a partir del retorno: tamaño del icono, contraste, secuencia, etiqueta o canal opcional. Si aparece una preocupación de seguridad real, comunicadla al personal responsable del centro para que use los canales establecidos; no intentéis resolverla con el prototipo.

#### Fase 5 · Comprobamos y reflexionamos

Comparad el prototipo inicial y el revisado e indicad qué limitación continúa abierta. **Evidencia:** comentarios anónimos, cambio documentado y limitación identificada. **Pregunta docente:** ¿qué ha dicho cada observador y qué no podemos generalizar?

### **Presentamos el diseño y su frontera de uso (45 min).**

#### Fase 1 · Activamos y predecimos

Preparad una exposición con maqueta, diagrama de bloques, prueba de entradas y cambios hechos tras el retorno. Predecid qué preguntas podría hacer el público sobre el uso real del prototipo.

#### Fase 2 · Exploramos y construimos

Demostrad los estados solo sobre la maqueta y con la etiqueta de prototipo a la vista. Incluid las condiciones de uso: escala escolar, no conectado a infraestructuras, no instalable en la calle, no certifica accesibilidad y no determina que sea seguro cruzar.

#### Fase 3 · Explicamos y registramos

Explicad qué problema de programación se ha resuelto y qué queda fuera del alcance. Registrad en un cartel qué validaciones requeriría una solución real: diseño profesional, consulta de las personas afectadas, revisión normativa y autorización de la administración responsable.

#### Fase 4 · Aplicamos y mejoramos

Usad las preguntas del público para aclarar el diagrama o la descripción de los límites. No hace falta que el alumnado aporte las validaciones profesionales para terminar la situación.

#### Fase 5 · Comprobamos y reflexionamos

Presentad la versión final y explicad qué decisiones reales no se pueden tomar con esta placa. **Evidencia:** presentación, código, registro de pruebas y lista de validaciones fuera del alcance escolar. **Pregunta docente:** ¿qué problema de programación hemos resuelto y qué decisiones reales continúan fuera del modelo?

## 📋 Evaluación y evidencias

Recoged mapa de observación, definición de estados, programa, registro de pruebas y presentación de límites. Observad si el alumnado:

- separa observaciones propias de inferencias sobre las necesidades de otras personas;

- programa entradas y salidas identificables para los dos estados del prototipo;

- ofrece representaciones complementarias y considera la versión concreta de la placa;

- usa comentarios voluntarios para revisar el diseño sin generalizarlos;

- explica claramente por qué la maqueta no es un dispositivo de seguridad real.

No se evalúa si el prototipo resuelve necesidades de una persona con discapacidad ni si sería apto para el espacio público. Se evalúan el proceso de diseño, la programación y la calidad de la reflexión crítica.

## ♿ Participación, privacidad y seguridad

La participación de personas usuarias es voluntaria y no se graba ni se recogen datos personales. No hagáis juegos de rol de discapacidad. Ofreced instrucciones anticipadas, iconos con buen contraste, formatos táctiles de maqueta y alternativas al audio. Se puede contribuir con cartografía, programación, construcción, observación o presentación. Cualquier recorrido exterior necesita permiso del centro y supervisión; la maqueta no se instala ni se prueba en un paso real. La placa y los cables se mantienen fuera del agua y de las zonas de paso.

## 🔗 Referencias técnicas y adaptación propia

La pantalla 5×5 y los eventos de los botones son funciones programables de micro:bit. La [referencia MakeCode sobre micro:bit V2](https://makecode.microbit.org/device/v2) especifica qué bloques son exclusivos de esta versión y el error 927 en hardware V1. La [guía oficial micro:bit sobre accesibilidad visual](https://www.microbit.org/accessibility/visual-impairment/) describe opciones de salida de sonido según versión y accesorio. El reto, la maqueta, los estados, las pruebas y los materiales son propios; antes de usar audio, comprobad siempre la placa disponible.
