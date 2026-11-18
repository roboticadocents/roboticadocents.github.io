---
active: true
title: "Contamos residuos con cuidado"
description: "¿Cómo podemos programar un contador con micro:bit para registrar residuos seguros y proponer una mejora en el patio?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Medio, Matemáticas y Tecnología"
theme: "sostenibilitat"
theme_label: "Residuos y entorno escolar"
duration: "3 sesiones · 150 min"
challenge: "¿Cómo podemos diseñar un contador de micro:bit que registre residuos por categoría y nos ayude a hacer una propuesta responsable?"
---

![Una placa micro:bit acompaña a una libreta de recuento, pinzas de recogida y ejemplos limpios de residuos de papel separados por tipo.](../../_assets/situacions/mb-comptador-residus.webp)

_El registro es anónimo y se centra en objetos; la placa no identifica quién los ha dejado._

## 🌱 Situación e intención

La brigada verde del centro quiere saber qué residuos visibles aparecen en una zona delimitada del patio y proponer una mejora de prevención o separación. El alumnado aprende a leer entradas, guardar recuentos en variables y construir un contador de categorías con micro:bit. Primero lo prueba con materiales limpios preparados; después lo utiliza en una observación guiada del centro y presenta datos agregados. No se registra quién ha dejado ningún objeto ni se afirma que una muestra pequeña describa todo el centro.

La propuesta adapta las dos lecciones de *Barefoot · Litter hunt*, dirigidas a alumnado de unos 9–11 años: usar botones y sensores para mostrar iconos, modificar variables y jugar con una entrada; después diseñar, programar y usar un contador de residuos reciclables en el entorno local. La tercera sesión es una ampliación propia para separar diseño técnico, trabajo de campo e interpretación.

## 🎯 Aprendizajes y vocabulario

- Definir categorías observables y registrar recuentos con un procedimiento consistente.
- Programar entradas, variables y salidas para representar un contador de muestras seguras.
- Probar valores iniciales, incrementos y límites para detectar errores de recuento.
- Usar los resultados para plantear una mejora local sin tocar residuos peligrosos ni atribuir causalidad a datos limitados.

## 🧰 Materiales y preparación

Micro:bit física con portapilas, MakeCode, 3 tarjetas de iconos de categoría, muestras simuladas limpias de papel/cartón y envases vacíos limpios, cuadrícula o tabla de datos, lápiz, guantes y pinzas solo si el centro autoriza la recogida segura. La fuente oficial pide placas físicas y alimentación para el proyecto de campo: el simulador sirve para preparar y probar el código, pero no equivale a usar el contador en una recogida real. Si no hay placa o portapilas, mantened la misma actividad con tarjetas y etiquetadla como simulación.

Antes de salir, consultad la guía de separación del municipio o del servicio de residuos del centro, anotad fuente y fecha y convertidla en tres categorías con una opción “no sabemos / consultar”. Las normas de separación pueden variar; no clasifiquéis automáticamente un objeto como reciclable solo por su aspecto. Delimitad una zona privada y autorizada del patio, acordando límites de recorrido, tiempo, roles y contacto con residuos. La persona adulta revisa el protocolo de riesgos y decide qué objetos no se tocan.

## 📅 Secuencia didáctica · tres sesiones de 50 minutos

### **Sesión 1 · Entradas, salidas y variables (Litter hunt, lesson 1).**

#### Fase 1 · Activamos y predecimos

Localizad los botones A/B, la matriz LED, los pines y un sensor integrado relevante, como el acelerómetro. Predecid qué es una entrada y qué es una salida y cómo una inclinación o una sacudida pueden activar una respuesta sin identificar a ninguna persona.

#### Fase 2 · Exploramos y construimos

Programad A para mostrar un icono y B otro. Probad el movimiento de inclinación o sacudida para mostrar una tercera respuesta. Después, inicializad un contador en cero, haced que un evento lo modifique y mostrad su valor; predecid el resultado antes de cada prueba.

#### Fase 3 · Explicamos y registramos

Adaptad el juego de entrada por turnos: una tarjeta indica la entrada, cada participante anticipa qué icono o valor aparecerá y ejecuta el turno cuando le toca. Registrad las entradas y el valor esperado y observado.

#### Fase 4 · Aplicamos y mejoramos

Comparad si todas las entradas se detectan y si el contador se modifica una sola vez. Si hay incrementos no deseados, cambiad una condición o el evento de entrada y repetid el mismo turno. No midáis quién es más rápido ni hagáis clasificaciones.

#### Fase 5 · Comprobamos y reflexionamos

Explicad cómo se guarda el número y qué entrada podría provocar un incremento accidental. **Evidencia:** mapa entrada-procesamiento-salida, variable anotada, predicción y tabla de eventos.

### **Sesión 2 · Diseñamos y verificamos el contador.**

#### Fase 1 · Activamos y predecimos

Usad una situación inventada de recogida del patio. Consultad la guía local de separación, anotad su fuente y fecha y elegid tres categorías verificables, por ejemplo papel/cartón, envases ligeros y dudoso/otro. Predecid qué debe pasar cuando se cambia de categoría sin contar ningún objeto.

#### Fase 2 · Exploramos y construimos

Diseñad la interfaz: A cambia la categoría, B suma una unidad y una combinación de órdenes reinicia el recuento; asociad un icono constante a cada categoría. Cread variables independientes por categoría y, si es útil, un total derivado. Evitad que cambiar de categoría incremente el recuento.

![Una micro:bit de la dotación muestra un icono mientras el alumnado elige una categoría en una cuadrícula de recuento con muestras limpias y un apartado para casos dudosos.](../../_assets/situacions/sa-mb-comptador-residus-prova.webp)

_La placa registra la categoría que elige una persona con los botones; no identifica ni clasifica los residuos automáticamente._

#### Fase 3 · Explicamos y registramos

Escribid una tabla de pruebas con entrada, categoría seleccionada, valor previsto y valor mostrado. Incluid una entrada de cada tipo, dos elementos seguidos de la misma categoría, cambio de categoría antes de incrementar, reinicio y categoría dudosa.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad los casos, comparad resultado previsto y real y corregid un error. Volved a ejecutar exactamente los mismos casos para comprobar que la corrección resuelve el problema sin alterar las otras categorías.

#### Fase 5 · Comprobamos y reflexionamos

Otra pareja sigue las instrucciones y explica si puede saber qué está contando. **Evidencia:** código, interfaz con iconos, tabla de pruebas completa y un cambio justificado.

### **Sesión 3 · Observamos con seguridad y hacemos una propuesta local (adaptación de Litter hunt, lesson 2).**

#### Fase 1 · Activamos y predecimos

Recordad los límites, la zona, el recorrido y la señal de parada. Asignad roles de operación del contador, lectura de la guía, registro, observación y supervisión adulta. Predecid qué categorías se podrán identificar visualmente y qué casos quedarán como dudosos.

#### Fase 2 · Exploramos y construimos

En una ruta corta y autorizada, clasificad solo aquello que se puede identificar visualmente con la guía local. Una persona registra cada observación con el contador y otra lleva el recuento de comprobación en papel. No fotografiéis personas ni toquéis objetos desconocidos. La persona adulta, no el alumnado, gestiona residuos potencialmente peligrosos; si no hay protocolo aprobado, haced solo observación y usad muestras limpias de clase.

#### Fase 3 · Explicamos y registramos

Comparad el total de micro:bit con el registro manual. Identificad discrepancias, conservadlas en el registro y describid una causa posible, como doble recuento, categoría incierta o botón pulsado dos veces.

#### Fase 4 · Aplicamos y mejoramos

Convertid los resultados en una tabla y un gráfico sencillo; indicad zona, fecha y duración de la muestra, sin extrapolar al centro entero. Escribid una mejora que el centro pueda probar —como ubicar mejor un contenedor o hacer un recordatorio visual— y concretad qué dato futuro permitiría comprobarla.

#### Fase 5 · Comprobamos y reflexionamos

Presentad la propuesta con los límites de la muestra y explicad cómo una nueva observación permitiría valorarla. **Evidencia:** registros agregados, discrepancia documentada, gráfico y propuesta local.

## 📊 Criterios de éxito y evaluación

Recoged diagrama de componentes, variables, iconos, código, casos de prueba, pauta local de separación, recuento de micro:bit y papel, gráfico y propuesta. Valorad si el alumnado (1) diferencia sensor/botón y entrada/salida; (2) inicializa y modifica variables sin perder categorías; (3) sigue una guía fechada y deja dudas como dudas; (4) detecta discrepancias entre recuento automático y manual; y (5) formula una conclusión proporcional a una zona y un periodo observados. El dispositivo ayuda a registrar, pero no clasifica residuos por sí mismo: la persona decide la categoría y puede marcar incertidumbre.

## ♿ Participación, seguridad y privacidad

Ofreced iconos táctiles o de alto contraste, tarjetas de categoría, dictado de datos, rol de verificación en papel y una ruta accesible u observación desde un punto fijo. No cronometréis la velocidad ni publiquéis clasificaciones de alumnos o grupos. Manteneos en zona autorizada, usad pinzas/guantes solo con supervisión y no toquéis vidrio, jeringuillas, pilas, heces, objetos cortantes, sustancias ni residuos de origen desconocido. Si hay cualquier duda, el alumnado no lo recoge: la persona adulta lo deja, aísla la zona según el protocolo del centro y lo comunica al servicio responsable. No registréis nombres, caras ni quién podría haber dejado un residuo; los datos se guardan agregados. Lavaos las manos después de la práctica.

## 🔗 Unidad oficial adaptada

[Barefoot · Litter hunt](https://microbit.org/teach/lessons/barefoot-litter-hunt/) consta de dos lecciones oficiales para 7–11 años con MakeCode. La [primera](https://microbit.org/teach/lessons/barefoot-litter-hunt-lesson-1/) fija como objetivos explicar botones y sensores, programarlos y guardar datos con variables; la página describe también imágenes en la matriz y un juego de pulsar el botón rápidamente. La [segunda](https://microbit.org/teach/lessons/barefoot-litter-hunt-lesson-2/) pide diseñar y programar un contador y usarlo para registrar residuos locales, incluida la identificación de los que se pueden reciclar. Esta propuesta conserva los objetivos de programación y registro, adapta el juego sin clasificación de velocidad, consulta la normativa local de separación y separa la observación de la manipulación segura de residuos. La tercera sesión de verificación y propuesta es una ampliación propia; no reutiliza los materiales visuales oficiales. Los planes docentes descargables aparecen enlazados en las páginas, pero no se han podido recuperar en esta auditoría; por eso la correspondencia se limita a los objetivos y la descripción pública y no afirma una adaptación paso a paso de los documentos docentes.
