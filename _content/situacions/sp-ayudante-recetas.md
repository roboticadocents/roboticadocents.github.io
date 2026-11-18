---
active: true
title: "Un ayudante de recetas en maqueta"
description: "¿Cómo podemos prototipar un ayudante mecánico para una tarea de cocina y hacer que sea fácil y seguro de usar?"
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Conocimiento del Medio, Matemáticas y Tecnología"
theme: "salut"
theme_label: "Alimentación y vida cotidiana"
duration: "5 sesiones · 250 min"
challenge: "¿Cómo podemos prototipar un ayudante mecánico para una tarea de cocina y hacer que sea fácil y seguro de usar?"
---

![Un montaje LEGO SPIKE Prime mueve tarjetas de receta y fichas de comida sobre una maqueta de mesa.](../../_assets/situacions/sp-ajudant-receptes.webp)

_El prototipo trabaja con tarjetas y alimentos simulados; no toca comida ni prepara recetas reales._

## 🌱 Situación y intención

La biblioteca escolar prepara una muestra titulada «De la huerta a la mesa» con recetas inventadas a partir de tarjetas de ingredientes. El encargo es diseñar un ayudante mecánico de mesa que resuelva una parte concreta de la preparación representada: hacer avanzar una tarjeta, pulsar una ficha de un recorrido o remover piezas ligeras dentro de una zona de papel. Los alimentos, las bandejas y los utensilios solo aparecen dibujados; el robot no toca comida ni participa en una cocina real.

Para arraigar el reto en el territorio, cada equipo elige una hortaliza u otro producto que pueda documentar con una fuente pública de la Comunitat Valenciana, como las fichas de cultivo del [Portal Agrari de la Generalitat](https://portalagrari.gva.es/va/formacio-i-transferencia/cerca-divulgacio-tecnica), y prepara una tarjeta que cita su procedencia. La receta y el proceso son ficticios: no se hacen afirmaciones sobre temporada, nutrición o técnicas culinarias sin una fuente contrastada. El objetivo tecnológico es convertir una necesidad de uso en un prototipo fácil de activar, repetible, revisable y seguro.

## 🎯 Objetivos y criterios de diseño

- Definir una tarea delimitada e identificar quién la utilizaría y en qué punto del proceso.

- Transformar el giro del motor en una acción útil mediante una palanca, un rodillo o un mecanismo de movimiento.

- Relacionar la longitud del brazo con el recorrido y comparar configuraciones con una prueba justa.

- Ajustar velocidad, duración o rotaciones a materiales de maqueta diferentes, registrar resultados e iterar.

- Reutilizar una parte del programa en una herramienta nueva y explicar qué hay que adaptar.

- Comunicar la limitación del prototipo y distinguir la maqueta de un dispositivo alimentario real.

Antes de construir, el equipo acuerda cuatro criterios observables: la acción se entiende sin una explicación larga; se activa con un control accesible; completa la tarea tres veces de manera parecida; y se detiene sin golpear, atrapar dedos ni salir de la zona de prueba.

## 📅 Secuencia didáctica · 5 sesiones de 50 minutos

### **Sesión 1 · Investigamos la tarea y quién la va a usar.**

#### Fase 1 · Activamos y predecimos

Observad las tarjetas de la receta de muestra y marcad el paso que podría beneficiarse de una ayuda: alisar una tira de papel, avanzar una tarjeta o mover fichas de un recorrido. No reproduzcáis ninguna tarea real con alimentos.

#### Fase 2 · Exploramos y construimos

Completad en pareja un mapa «persona / tarea / dificultad / ayuda posible». Formulad la necesidad con la frase «Una persona que ___ necesita que ___ porque ___». Ordenad las tarjetas del proceso y elegid una sola acción para el primer prototipo.

#### Fase 3 · Explicamos y registramos

Comparad los ejemplos del brief —rodillo sin mango, sandwichera y batidor automático— y valorad cuáles se pueden representar con seguridad. Dibujad dos soluciones y señalad entrada, acción, zona de trabajo y parada.

#### Fase 4 · Aplicamos y mejoramos

Seleccionad una solución según los criterios acordados: acción comprensible, activación accesible, tres ejecuciones parecidas y parada sin golpes, dedos atrapados ni salida de la zona de prueba. Ofreced tarjetas visuales y frases iniciadoras si hace falta.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué parte tiene que hacer el robot y cuál conviene dejar a la persona. **Evidencia:** mapa de necesidad, dos ideas anotadas y decisión razonada.

### **Sesión 2 · Hacemos una primera maqueta mecánica.**

#### Fase 1 · Activamos y predecimos

Construid una base SPIKE Prime estable con un motor y un rodillo o brazo que actúe sobre papel. En el reto del rodillo sin mango, conectad una pieza LEGO larga al radio del motor, tal como propone el brief. Dibujad qué esperáis que haga el papel y marcad líneas de inicio y final.

#### Fase 2 · Exploramos y construimos

Comprobad que ninguna pieza pueda caer sobre las manos y que haya espacio para desconectar la alimentación o detener el programa. Haced girar el mecanismo a mano solo si el montaje lo permite sin forzarlo.

#### Fase 3 · Explicamos y registramos

Comparad un brazo corto y uno largo manteniendo iguales material, velocidad y tiempo de activación. Anotad la distancia del punto final y si la estructura se balancea.

#### Fase 4 · Aplicamos y mejoramos

Revisad el montaje si se desestabiliza. Explicad el compromiso: un brazo largo puede ampliar el recorrido y a la vez reducir estabilidad o control; no concluyáis que «más largo es siempre mejor».

#### Fase 5 · Comprobamos y reflexionamos

Comparad predicción y resultado y decidid qué configuración probar después. **Evidencia:** boceto, dos configuraciones y predicción. Si no hay motor libre, haced primero la comparación con palanca manual.

### **Sesión 3 · Programamos una acción controlada.**

#### Fase 1 · Activamos y predecimos

Activad el motor con el botón del hub o una orden inicial simple. Predecid qué ocurrirá con cuatro rotaciones o una duración acordada y marcad la distancia esperada.

#### Fase 2 · Exploramos y construimos

Cread una secuencia de inicio, movimiento y parada, primero con bloques y, si hay experiencia, con Python. Probad duración y número de rotaciones como formas de delimitar la acción; usad baja velocidad en la primera ejecución.

#### Fase 3 · Explicamos y registramos

Cada intento parte de una predicción y registra valor programado, distancia, desviación e incidencia. Haced tres intentos comparables y cambiad una sola variable en cada prueba.

#### Fase 4 · Aplicamos y mejoramos

Si el rodillo patina, comprobad contacto, base y valor del programa antes de reconstruirlo todo. Añadid una pausa o una orden de parada clara cuando se complete la acción.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué cambio habéis elegido a partir de los datos. **Evidencia:** código comentado o diagrama, tres intentos comparables y decisión de mejora. Como ampliación, haced que la acción se pueda repetir con un segundo botón solo si se conserva una parada accesible.

### **Sesión 4 · Adaptamos el programa y lo reutilizamos.**

#### Fase 1 · Activamos y predecimos

Preparad dos tiras de prueba —por ejemplo, papel fino y cartulina ligera— y anotad las diferencias. Predecid qué configuración del motor funcionará mejor; no las describáis como alimentos ni atribuyáis al sensor una lectura de dureza.

#### Fase 2 · Exploramos y construimos

Modificad solo la configuración del motor —velocidad, potencia o duración— y determinad cuál funciona mejor para cada tira. Después cambiad la herramienta: reutilizad la lógica del rodillo en una palanca que mueve una ficha o un removedor de piezas dentro de un círculo dibujado.

#### Fase 3 · Explicamos y registramos

Resaltad en el código qué instrucciones se conservan y cuáles dependen del mecanismo nuevo. Registrad las configuraciones y los resultados para cada material simulado.

#### Fase 4 · Aplicamos y mejoramos

Como extensión, añadid un sensor del set solo si aporta una entrada comprensible. El sensor de color puede leer una marca grande de la tarjeta y seleccionar una configuración; calibradlo con la luz del aula y ofreced un botón manual equivalente. El color es una etiqueta del equipo, no una identificación de ingrediente ni una medida del material.

#### Fase 5 · Comprobamos y reflexionamos

Explicad cómo se puede reutilizar el programa y qué hay que adaptar al cambiar el mecanismo. **Evidencia:** tabla de dos configuraciones y esquema «código que reutilizo / código que cambio».

### **Sesión 5 · Combinamos, probamos y presentamos.**

#### Fase 1 · Activamos y predecimos

Combinad dos acciones sencillas —por ejemplo, ordenar una tarjeta y avanzar una ficha— sin hacer el prototipo más complejo de lo que podéis probar. Predecid el orden y la manera de detenerlo.

#### Fase 2 · Exploramos y construimos

Otro equipo recibe la consigna sin ver el boceto y tiene que explicar qué hace el ayudante, encontrar el control y señalar cómo se detiene. Haced tres ejecuciones con la misma configuración.

#### Fase 3 · Explicamos y registramos

Registrad los resultados y el retorno del otro equipo. Si las ejecuciones varían, identificad si hay que ajustar la base, el recorrido o la instrucción.

#### Fase 4 · Aplicamos y mejoramos

Revisad una parte y repetid la prueba. Preparad una cartela con nombre de la tarea, esquema de entrada/salida, fuente de la tarjeta local, un dato de prueba y una limitación explícita.

#### Fase 5 · Comprobamos y reflexionamos

Demostrad el prototipo y comparadlo con la secuencia manual. Explicad qué hace con más repetibilidad, qué sigue haciendo la persona y qué comprobaciones serían necesarias antes de cualquier uso fuera de la maqueta. **Evidencia:** demostración, registro final, retorno de otro equipo y reflexión individual.

## 🧰 Materiales y preparación

Set LEGO Education SPIKE Prime 45678 por equipo o pareja, hub cargado, un motor, piezas estructurales, papel fino y cartulina ligera, tarjetas propias con símbolos, rotuladores, regla y hoja de registro. Sensor de color opcional si forma parte de la dotación disponible. No hace falta expansión, utensilio de cocina, comida, líquido ni pieza adicional no indicada.

Antes de la sesión, revisad la app y la versión del kit, probad el puerto del motor, preparad una base estable de demostración y una alternativa manual para las tarjetas. Recortad las pruebas a una medida que no pueda quedar atrapada dentro del mecanismo. Organizad roles rotativos —diseño, montaje, programación, registro y portavoz— para que cada miembro participe en la predicción y la prueba, no solo en la construcción.

## 🧪 Evidencias y criterios de evaluación

La carpeta de proceso reúne mapa de necesidad, bocetos, criterios, esquema mecánico, código o pseudocódigo, tabla de pruebas, adaptación a un segundo material, fragmento de programa reutilizado, fuente local y cartela. Usad esta escala breve para dar retorno durante el trabajo:

- **Necesidad y uso:** identifica una tarea concreta y describe quién la usaría; comprueba si otra persona entiende la acción.

- **Mecanismo:** relaciona brazo/radio y recorrido con medidas y reconoce el compromiso con la estabilidad.

- **Programación e iteración:** delimita la acción, registra al menos tres pruebas comparables y modifica una variable con una razón.

- **Adaptación:** diferencia entre cambiar el programa y cambiar el mecanismo, y justifica qué reutiliza.

- **Comunicación responsable:** cita la fuente de un dato local y declara que la maqueta no prepara alimentos ni valida seguridad alimentaria.

Autoevaluación: «La prueba que más me ha enseñado es…», «el cambio que he hecho a partir de un dato es…» y «una persona todavía tiene que…». El retorno entre equipos tiene que incluir una fortaleza observada y una pregunta que ayude a mejorar.

## ♿ Participación, cuidado y límites

Presentad consignas en texto y pictogramas, dejad que la persona elija entre programación, construcción, documentación o presentación y permitid participar sin manipular el mecanismo. Marcad la zona de movimiento con una base clara, usad baja velocidad y piezas de prueba ligeras; nadie pone los dedos delante del rodillo ni bloquea el motor con la mano. Detened y desconectad el hub antes de ajustar engranajes o retirar papel atascado. Si una pieza se suelta o el montaje se mueve, parad la prueba y estabilizadlo antes de continuar.

Este prototipo no es apto para cocinar, manipular alimentos, líquidos, cuchillos, superficies calientes o recipientes. Una lectura de color solo reconoce la marca preparada para la actividad. Las tarjetas de receta son una representación educativa, no un consejo nutricional ni una receta para consumir.

## 🔗 Referente oficial y correspondencia

Partimos del [SPIKE Activity Brief: RoboChef](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5cf523e9f737c7ac/6324c446556fbc660c8ca4ba/LE_14x8.5_LessonMat_RoboChef_WB_Mech_NoCrops.pdf?locale=en-us) de LEGO Education. La propuesta conserva el reto abierto de ayudar en una tarea de preparación, las preguntas sobre qué cuesta hacer y qué herramientas serían útiles, los tres ejemplos de la hoja —rodillo sin mango, sandwichera y batidor—, el criterio de diseño fácil de usar, la pieza LEGO larga que amplía el radio del motor, el cambio de configuración según el material, la reutilización del programa en otras herramientas, la incorporación opcional de sensores y el reto de combinar más de una tarea. Estos elementos aparecen en el brief oficial de dos páginas; la secuencia de cinco sesiones, la temática valenciana, las tarjetas, las pruebas, los criterios y la ilustración son elaboración propia. La programación por bloques o Python se elige según la versión de la app y la experiencia del equipo.
