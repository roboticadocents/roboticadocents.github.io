---
active: true
title: "Una erupción en píxeles"
description: "¿Cómo podemos descomponer y programar una animación de volcán con bucles en la matriz LED de micro:bit?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "medi"
subject_label: "Ciencias, Geografía y Tecnología"
theme: "ciencia"
theme_label: "Fenómenos geológicos y animación"
duration: "5 sesiones · 225 min"
challenge: "¿Cómo podemos descomponer un proceso en fotogramas y repetirlos en una animación LED comprensible?"
---

![Una placa micro:bit junto a una maqueta de volcán de papel y un flipbook abstracto de penacho ascendente.](../../_assets/situacions/mb-animacio-volca.webp)

_Es una maqueta de aula para hablar de animación, no una simulación de riesgo ni un modelo predictivo._

## 🌱 Situación e intención

El museo escolar prepara una pieza digital para explicar cómo una animación simplifica un proceso natural. El alumnado descompone un movimiento, escribe un diagrama de flujo, planifica una secuencia de fotogramas y la programa con LEDs de micro:bit. La idea parte de los volcanes, pero sitúa la investigación en dos escalas: casos volcánicos documentados en el Estado español y referentes geológicos cercanos. El IGN enumera Cofrentes (Valencia) y las islas Columbretes (Castellón) entre las áreas volcánicas documentadas; esto no implica actividad eruptiva actual ni riesgo para la población.

La secuencia conserva las cinco lecciones de *Volcano animations* para alumnado de unos 8–9 años: animación y descomposición con danza/flipbook, diagrama y repetición, planificación de la erupción, programación/prueba/depuración y reflexión. La animación del proyecto es un modelo gráfico de cuatro estados elegidos, no una secuencia universal ni una herramienta de predicción geológica.

## 🎯 Aprendizajes y vocabulario

- Descomponer un fenómeno en fotogramas y ordenarlos para que otra persona pueda reconstruir el cambio.
- Representar movimiento con una matriz de 5×5 y controlar qué cambia entre dos fotogramas.
- Usar una repetición para mostrar un patrón y relacionarlo con el diagrama o el algoritmo.
- Probar la animación en la placa, depurar una transición y explicar que es un modelo gráfico, no una simulación científica de una erupción.

## 🧰 Materiales y preparación

micro:bit física de la BBC o simulador MakeCode, proyector opcional, papel para diagramas y flipbooks, cuadrícula de 5 × 5, lápices de colores, cartulina para la maqueta seca y tarjetas con los términos *magma*, *lava*, *erupción* y *animación*. Revisad antes una fuente del Instituto Geográfico Nacional sobre el fenómeno y su cartografía; distinguid magma subterráneo de lava que llega a la superficie. Para el vínculo valenciano, podéis consultar la documentación del IGN que identifica zonas volcánicas documentadas, incluidos Cofrentes y Columbretes. No supongáis que el volcán de la maqueta representa ninguna de estas áreas.

Decidid si toda la clase trabajará con simulador o si habrá transferencia a la placa; preparad un proyecto base y una alternativa impresa. No uséis calor, polvos, líquidos, reacciones químicas ni modelos que expulsen material. La maqueta es de papel o cartulina y permanece estática durante la programación.

## 📅 Secuencia didáctica · cinco sesiones de 45 minutos

### **Sesión 1 · Animación y descomposición.**

#### Fase 1 · Activamos y predecimos

Haced una red de palabras alrededor de «animación» y separad movimiento real, movimiento dibujado y secuencia de fotogramas.

#### Fase 2 · Exploramos y construimos

Una persona demuestra un paso de danza sencillo y el grupo lo explica como inicio, movimiento, pausa y final; no hace falta que el alumnado lo haga físicamente, también puede usar una ficha o dirigirlo.

#### Fase 3 · Explicamos y registramos

Elegid tres poses que comuniquen el cambio y dibujadlas con el mismo encuadre.

#### Fase 4 · Aplicamos y mejoramos

Haced un librillo de tres o cuatro imágenes con un cambio pequeño entre páginas y probadlo sin lanzarlo ni sacudirlo cerca de la cara.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué parte se ha descompuesto y qué se ha omitido. Evidencia: mapa de ideas, poses numeradas y flipbook.

### **Sesión 2 · Diagramas de flujo y repetición.**

#### Fase 1 · Activamos y predecimos

Ordenad las imágenes del flipbook y detectad si alguna queda fuera de secuencia.

#### Fase 2 · Exploramos y construimos

Convertid las poses en un diagrama de flujo con inicio, mostrar fotograma A, mostrar fotograma B, repetir y final; representad con una flecha de retorno el fragmento que se repite.

#### Fase 3 · Explicamos y registramos

Un equipo lee solo el diagrama y otro hace de «pantalla»; anotad qué resulta ambiguo.

#### Fase 4 · Aplicamos y mejoramos

Trasladad los dos fotogramas a la matriz LED, añadid pausas y comparad un programa que duplica las instrucciones con otro que usa un bucle.

#### Fase 5 · Comprobamos y reflexionamos

Indicad qué ha hecho más corto el bucle y qué órdenes continúan siendo únicas. Evidencia: diagrama inicial/depurado y comparación de programas con/sin repetición.

### **Sesión 3 · Planificar la animación del volcán.**

#### Fase 1 · Activamos y predecimos

Consultad una infografía o un texto del IGN; localizad un caso documentado y un área volcánica histórica de la Comunidad Valenciana. Anotad fuente y fecha y no deduzcáis actividad o peligro actual a partir de un mapa geológico.

#### Fase 2 · Exploramos y construimos

Asociad magma con material fundido bajo la superficie y lava con el material que llega a ella; distinguid estos términos de la columna de gases o ceniza que puede aparecer en algunos tipos de erupción.

#### Fase 3 · Explicamos y registramos

En equipos, definid cuatro estados gráficos —superficie, inicio de la emisión, penacho o flujo representado, y escena que se calma— como una convención visual inventada, sin afirmar que todos los volcanes pasan por una misma secuencia.

#### Fase 4 · Aplicamos y mejoramos

Dibujad cada estado en 5 × 5 píxeles, identificad qué cuadros se repiten y en qué orden, y cread un diagrama con pausas/repetición.

#### Fase 5 · Comprobamos y reflexionamos

Una pareja comprueba que el diagrama coincide con el storyboard. Evidencia: fuente citada, tarjeta de vocabulario, cuatro cuadrículas y algoritmo.

### **Sesión 4 · Programar, probar y depurar.**

#### Fase 1 · Activamos y predecimos

Antes de programar, leed el diagrama y señalad qué fotograma aparecerá después de la repetición.

#### Fase 2 · Exploramos y construimos

Escribid los iconos en MakeCode con LEDs individuales o cuadrícula de diseño; mostradlos en orden dentro de un bucle adecuado y usad pausas suficientes para leerlos.

#### Fase 3 · Explicamos y registramos

Ejecutad en el simulador o transferid a micro:bit, marcad cada salida respecto al storyboard y comprobad si el bucle repite exactamente el fragmento indicado.

#### Fase 4 · Aplicamos y mejoramos

Probad tres casos: fotograma cambiado de orden, una repetición de más y pausa demasiado corta; cambiad una cosa cada vez y registrad el resultado.

#### Fase 5 · Comprobamos y reflexionamos

Justificad una corrección y una simplificación. Evidencia: código, predicciones y registro de tres casos probados.

### **Sesión 5 · Reflexión y revisión.**

#### Fase 1 · Activamos y predecimos

Haced un mapa de pensamiento desde la fuente hasta la animación: investigar, seleccionar fases gráficas, diseñar píxeles, escribir algoritmo, programar, probar y revisar.

#### Fase 2 · Exploramos y construimos

Cada equipo muestra el mapa, el código y el vídeo/demostración de la secuencia; si no se graba, la muestra se hace en directo o con una serie de capturas autorizadas, sin fotografiar alumnado.

#### Fase 3 · Explicamos y registramos

El público comenta una cosa clara y formula una pregunta sobre el modelo científico o el bucle.

#### Fase 4 · Aplicamos y mejoramos

Revisad el storyboard y el programa con el retorno recibido. Elegid una propuesta concreta, como hacer más legible una transición o alargar una pausa, y decidid si mejora la representación del proceso. Antes de cambiar el código, anotad qué esperáis que pase; después, comparad el resultado nuevo con el anterior. Si rechazáis la propuesta, justificadlo con un criterio del proyecto (claridad, coherencia con la fuente o ritmo de lectura), no con una preferencia personal sin explicar.

#### Fase 5 · Comprobamos y reflexionamos

Se completa la frase «mi código representa…, no puede predecir…, la repetición me ha servido para…». Evidencia: mapa final, retorno y reflexión.

## 📊 Criterios de éxito y evaluación

Recoged mapa de ideas, flipbook, diagrama de flujo, fuente geológica citada, storyboard, cuatro cuadrículas, MakeCode, registro de pruebas y mapa de reflexión. Observad si el equipo (1) divide una acción en pasos representables; (2) muestra en el diagrama qué se repite; (3) traduce fielmente el algoritmo a bloques y comprueba tres casos; (4) usa el vocabulario magma/lava de manera coherente con la fuente; y (5) identifica qué ha simplificado su animación. No se evalúa si la secuencia es una reconstrucción universal de una erupción: es una interpretación didáctica.

## ♿ Ritmo, acceso y seguridad

Ofreced storyboard impreso, animación estática, simulador y pausas largas; no es necesario ver estímulos rápidos. Roles posibles: lector/a de fuente, dibujante de cuadrículas, autor/a de flujo, programador/a, probador/a o narrador/a. Se puede dictar u ordenar tarjetas en lugar de hacer un flipbook manual. No hay ningún experimento físico volcánico, fuego, calor ni sustancias. Si el tema de riesgos naturales resulta sensible para alguna persona, se puede animar un proceso geológico no amenazador con los mismos conceptos de algoritmo.

## 🔗 Unidad oficial y contexto valenciano

[Volcano animations](https://microbit.org/teach/lessons/volcano-animations-unit-of-work/) tiene cinco lecciones: mapa de ideas y descomposición de una danza en flipbook; diagrama de flujo y repetición en MakeCode; planificación desconectada de fases de una erupción; programación, prueba y depuración LED; y revisión descompuesta del proceso. Esta propuesta conserva el orden y los aprendizajes, crea el storyboard y los criterios y añade una comparación contextual basada en fuentes geológicas. El IGN documenta Cofrentes y Columbretes dentro de las áreas volcánicas del Estado; se presentan como patrimonio geológico, no como volcanes en erupción o peligro inmediato. Consultad el [catálogo histórico del IGN](https://www.ign.es/web/resources/acercaDe/libDigPub/Catalogo-150-aniversario-IGN.pdf) y su [sección educativa de volcanes](https://www.ign.es/web/ign/portal/recursos-educativos).
