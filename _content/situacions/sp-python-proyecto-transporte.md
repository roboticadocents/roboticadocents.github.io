---
active: true
title: "Un trayecto útil, un prototipo que aprende"
description: "Proyecto final de 10 lecciones con SPIKE Prime y Python: investigar, diseñar, programar y probar un prototipo de transporte escolar de materiales."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Programación"
theme: "python"
theme_label: "Proyecto culminante: transporte y Python"
duration: "10 lecciones · 10–12 sesiones"
challenge: "¿Cómo podemos diseñar y programar en Python un prototipo SPIKE que transporte materiales de maqueta por una ruta escolar definida, y comunicar con datos qué resuelve y qué todavía no?"
official_source: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5436c2a0ac31fc17/65e9d0ef2a3929468f30be14/File_2_Units_678910_Intro_to_Python_Course_TG_Course_2.pdf?locale=en-us"
---

![Base móvil LEGO SPIKE Prime con una carga de tarjetas de papel que sigue una ruta de maqueta hasta un aula y una biblioteca.](../../_assets/situacions/sp-python-projecte-transport.webp)

_El proyecto final integra mecánica, Python, sensores, datos, pruebas iterativas y comunicación de límites._

## 🌱 Reto de proyecto y trazabilidad

La comunidad escolar necesita mover materiales compartidos (tarjetas, piezas grandes o libros de maqueta) entre dos puntos de un aula o biblioteca simulada. Cada equipo investiga una necesidad concreta, define criterios de éxito y restricciones, compara ideas, construye una base SPIKE Prime o un mecanismo de transporte, programa con Python una ruta repetible y documenta pruebas y mejoras. La muestra final explica la solución y los datos que la sustentan.

Es una adaptación de la rama *Transportation Project* anunciada como proyecto culminante de LEGO Education [*Introduction to Python Programming · Course 2*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5436c2a0ac31fc17/65e9d0ef2a3929468f30be14/File_2_Units_678910_Intro_to_Python_Course_TG_Course_2.pdf?locale=en-us). El proyecto moviliza las competencias de final de curso que enumera la guía: diseñar e iterar un prototipo, usar algoritmos, datos, sensores, bucles y condiciones compuestas, depurar hardware/software, escribir pseudocódigo, descomponer el problema, documentar pruebas y retroalimentación, considerar sesgo/accesibilidad y comunicar la solución. La guía accesible dice que el proyecto ocupa entre 10 y 12 lecciones de 45–60 minutos y que tiene diario y rúbrica propia, pero el PDF publicado no incluye un guion detallado de esas sesiones ni los descriptores de la rúbrica. Por eso, esta secuencia de diez lecciones es una propuesta didáctica original, trazada a los resultados publicados, y no una adaptación paso a paso de instrucciones no disponibles.

## 🎯 Resultados de aprendizaje y vocabulario

- Investigar y reformular una necesidad de transporte de materiales de maqueta sin recopilar trayectos personales ni exponer a personas a vehículos.

- Definir criterios medibles (llegar a destino, mantener la carga, respetar la zona de parada) y restricciones de tiempo, piezas, dimensiones y seguridad.

- Descomponer ruta, seguimiento de línea/metas, decisiones, parada, carga y retroalimentación en funciones/subproblemas.

- Escribir en Python una secuencia de movimiento con funciones, variables, listas, bucles, condicionales, lógica booleana y datos de sensor, según los conceptos trabajados en Course 2.

- Calibrar y registrar distancia, color o contacto solo cuando el sensor disponible sea adecuado; distinguir dato medido, regla escrita por el equipo y decisión del programa.

- Depurar errores mecánicos, de conexión, sintaxis, ejecución o lógica con hipótesis y pruebas controladas.

- Iterar a partir de resultados y comentarios, documentar los cambios y comunicar límites del prototipo y evidencia de éxito.

- Trabajar en equipo con roles rotativos y considerar si la interfaz, la pista y la carga son accesibles a personas con diferentes capacidades.

**Necesidad:** dificultad observada y descrita sin atribuir defectos a una persona. **Criterio:** condición que define si la solución cumple el propósito. **Restricción:** límite que el diseño debe respetar. **Iteración:** cambio basado en una prueba seguido de una nueva prueba. **Prototipo:** modelo para aprender y comparar, no un sistema certificado de transporte. **Evidencia:** registro u observación que permite a otra persona valorar una afirmación.

## 🧰 Recursos, organización y preparación

Por equipo: set SPIKE Prime, hub cargado, app con Python y consola, base móvil de dos motores o estructura alternativa diseñada por el alumnado, sensor de color/distancia/fuerza solo si ayuda a un criterio definido, fichas grandes simulando cargas, cartón para carriles y topes, cinta de papel, regla, cronómetro opcional, diario de proyecto, lápiz y ordenador para la muestra. No hacen falta sensores adicionales, cámaras, teléfonos personales ni conexión a Internet durante la prueba. Las instrucciones de montaje y API se consultan en la versión de la app y el set locales; las API de Python varían según la versión.

La docente prepara una zona cerrada de mesa o suelo liso con márgenes, una ruta de prueba asequible a todos los equipos, una carga ficticia y ligera, una estación de salida y un destino marcado con forma y texto grande. Prevé una ruta manual en cuadrícula y un programa de simulación si el robot o un sensor fallan. Ninguna maqueta transporta objetos frágiles, comida, líquidos ni personas. Los motores se detienen antes de manipular el robot y funcionan a baja velocidad; se evitan desniveles, pasillos abiertos y escaleras.

Durante las diez lecciones, rotan cuatro responsabilidades: investigación/documentación, construcción/seguridad, Python/pruebas y comunicación/accesibilidad. Todas las personas deben tener oportunidad de leer o explicar una parte del programa y una evidencia. La docente hace minirrevisiones al final de las lecciones 2, 4, 6 y 8 para que el proyecto pueda reorientarse sin perder el calendario.

## 📅 Proyecto en diez lecciones

### **Lección 1 · Escuchar, observar y definir el reto (45–60 min).**

#### Fase 1 · Activamos y predecimos

Presentad el mandato: trasladar materiales ligeros entre dos puntos de una maqueta de clase con un prototipo SPIKE. Usad un escenario escolar ficticio; no preguntéis quién lleva materiales a casa ni cómo llega a la escuela. Predecid qué condiciones harían clara y ordenada la entrega.

#### Fase 2 · Exploramos y construimos

Examinad una escena de maqueta o hablad con una persona adulta voluntaria sobre qué hace que una entrega sea clara y accesible. Registrad necesidades anónimas como observaciones y preguntas, no como opiniones sobre personas.

#### Fase 3 · Explicamos y registramos

Redactad una frase de problema, usuario, objetivo, dos criterios de éxito y tres restricciones. Un criterio posible es llegar al destino en 3 de 4 intentos, sin caída de la carga y con parada manual accesible.

#### Fase 4 · Aplicamos y mejoramos

Decidid si la ruta seguirá una línea de cinta, metas de color u órdenes prefijadas. No presupongáis ningún sensor hasta comprobar la dotación; ajustad los criterios si el material disponible no puede verificarlos.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** problema definido, usuario, criterios, restricciones y una pregunta abierta. Explicad una cosa que el prototipo no pretende resolver.

### **Lección 2 · Investigar datos, materiales y restricciones (45–60 min).**

#### Fase 1 · Activamos y predecimos

Dibujad el origen, los tramos, los giros, la zona de carga, el destino y los puntos de parada. Predecid qué materiales o datos pueden limitar la ruta.

#### Fase 2 · Exploramos y construimos

Medid la anchura de pista y la longitud de los tramos; describid la carga como ligera o media sin necesidad de báscula. Consultad las funciones del sensor en la Knowledge Base y anotad puerto, unidad y rango legible.

#### Fase 3 · Explicamos y registramos

Comparad dos soluciones manuales y dos mecanismos de maqueta, como base con bandeja, empujador o pinza sin cierre arriesgado. Registrad estabilidad, accesibilidad y piezas necesarias; no copiéis modelos protegidos.

#### Fase 4 · Aplicamos y mejoramos

Revisad los criterios con la información recogida y anotad lo que no se ha podido comprobar. Añadid la restricción de utilizar solo carga de prueba ligera.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa del sistema, inventario de datos y comparación de mecanismos. La docente comprueba que el reto es posible con las piezas y el tiempo disponibles.

### **Lección 3 · Generar opciones y elegir con criterios (45–60 min).**

#### Fase 1 · Activamos y predecimos

Cada miembro dibuja una idea individual sin discutirla ni juzgarla. Predecid qué criterio será más difícil de satisfacer.

#### Fase 2 · Exploramos y construimos

Combinad aportaciones y preparad al menos tres conceptos diferentes, incluida una opción no motorizada. Haced bocetos suficientemente claros para compararlos.

![Robot SPIKE Prime de la dotación junto a tres prototipos de cartón separados: bandeja, empujador y plataforma, con tarjetas de ruta y criterios visuales.](../../_assets/situacions/sa-sp-python-projecte-transport-disseny.webp)

_Los tres conceptos son maquetas propias para comparar; no son accesorios ni mecanismos incluidos en el set._

#### Fase 3 · Explicamos y registramos

Comparad cada idea por seguridad, estabilidad de carga, funciones Python, adaptación a usuarios, piezas y facilidad de prueba. Usad una escala 1–3 con comentarios; si falta un dato, marcadlo como desconocido.

#### Fase 4 · Aplicamos y mejoramos

Elegid una idea y anotad el compromiso que implica y una característica de una alternativa que podríais incorporar. Presentad el boceto a otro equipo y preguntad qué entiende del criterio antes de construir.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tres conceptos, matriz razonada y decisión. La escala orienta la conversación; no es una puntuación científica de las ideas.

### **Lección 4 · Planificar el programa y los casos de prueba (45–60 min).**

#### Fase 1 · Activamos y predecimos

Representad una ruta y predecid qué puede fallar: sensor ausente, meta desconocida, carga desplazada o necesidad de parada manual.

#### Fase 2 · Exploramos y construimos

Descomponed el programa en iniciar, conducir tramo, leer meta, corregir, llegar/detener y comunicar error. Cread funciones para las acciones que realmente se repiten.

#### Fase 3 · Explicamos y registramos

Dibujad el algoritmo o pseudocódigo. Indicad dónde pueden servir listas de puntos, condiciones compuestas, bucles, parámetros de velocidad y registro de datos.

#### Fase 4 · Aplicamos y mejoramos

Preparad casos nominales y límite: ruta con giro, color no asignado, carga ancha, inicio mal orientado y parada manual. Predecid el resultado y qué haréis si falla; guardad una copia del plan.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** diagrama, pseudocódigo y plan de pruebas. La docente comprueba que ninguna regla depende de un sensor que no esté disponible.

### **Lección 5 · Construir el prototipo y validar la mecánica (45–60 min).**

#### Fase 1 · Activamos y predecimos

Antes de montar, predecid qué podría hacer inestable la carga o dificultar un giro. Recordad que el prototipo transporta solo materiales ligeros de maqueta.

#### Fase 2 · Exploramos y construimos

Construid por subsistemas la base, el soporte de carga y el sensor si procede. Probad la bandeja vacía y después con carga de cartón muy ligera; observad recta y giro. No sujetéis la carga con personas ni uséis pinzas que se cierran sobre dedos.

![Base móvil SPIKE Prime de la dotación con una bandeja vacía de cartón, un carril plano y una regla para comprobar estabilidad y espacio.](../../_assets/situacions/sa-sp-python-projecte-transport-mecanica.webp)

_La bandeja es un prototipo del equipo; la imagen no presupone ningún accesorio oficial de transporte._

#### Fase 3 · Explicamos y registramos

Con el montaje apagado, probad manualmente el recorrido si es seguro. Anotad atascos, cables que arrastran, ruedas que rozan o centro de carga alto.

#### Fase 4 · Aplicamos y mejoramos

Escribid una única orden corta con la función API verificada; no intentéis todavía un programa autónomo completo. Dibujad la versión 1, anotad qué funciona y decidid un ajuste.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** esquema de montaje y primer registro de prueba. Valorad la construcción por los criterios acordados, no por el parecido con un modelo comercial.

### **Lección 6 · Escribir el primer programa Python integrado (45–60 min).**

#### Fase 1 · Activamos y predecimos

Predecid cómo se dividirá el programa y qué información necesitaréis para depurar una ruta corta. Acordad quién puede autorizar el arranque y quién tiene el control de la parada.

#### Fase 2 · Exploramos y construimos

Organizad constantes y puertos al principio, funciones con nombres claros en el medio y secuencia principal al final. Comentad las unidades de velocidad/distancia y el origen de los umbrales.

#### Fase 3 · Explicamos y registramos

Programad un tramo, una parada controlada y la secuencia hacia el tramo siguiente. Comprobad aisladamente cada sensor antes de añadirlo; si no está disponible, usad metas u órdenes manuales identificadas como simulación.

#### Fase 4 · Aplicamos y mejoramos

Usad una lista para puntos o acciones si reduce repeticiones y añadid una condición para datos no reconocidos. Ejecutad una ruta corta con velocidad baja, zona libre y una persona responsable de detener; no hagáis el programa tan largo que sea difícil de depurar.

![SPIKE Prime real de la dotación sobre una ruta de pruebas de colores, junto a un ordenador con editor textual de Python y tarjetas de test.](../../_assets/situacions/sa-sp-python-projecte-transport-python.webp)

_La pantalla representa código textual; el programa, los puertos y la API se deben comprobar en la versión de app instalada en el centro._

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** salida de consola y registro de posición final, detección, tiempo y error. Una sola prueba no demuestra que el criterio se haya cumplido.

### **Lección 7 · Calibrar, probar y depurar con evidencia (45–60 min).**

#### Fase 1 · Activamos y predecimos

Elegid una causa probable de un fallo: orientación, fricción, unidad, umbral, orden, dato ausente o función API incorrecta. Escribid qué esperáis observar si la hipótesis es correcta.

#### Fase 2 · Exploramos y construimos

Haced tres intentos del mismo caso nominal con inicio y superficie constantes. Añadid después un caso con meta ausente o diferente.

#### Fase 3 · Explicamos y registramos

Anotad lectura del sensor, valor esperado, respuesta, parada y variación. Clasificad el error como montaje, conexión, sintaxis, ejecución o lógica.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una sola causa y repetid. Si la consola no muestra error pero el robot falla, revisad la especificación y la lectura antes de asumir que el código es correcto. Decidid si hace falta continuar o simplificar el alcance.

![Base móvil SPIKE Prime de la dotación con una tarjeta ligera en una ruta plana entre aula y biblioteca de maqueta; al lado hay una regla y un registro de pruebas sin texto.](../../_assets/situacions/sa-sp-python-projecte-transport-proves.webp)

_La ruta de prueba es plana; la rampa que aparece apartada no forma parte del ensayo. Se comparan el punto de partida, la parada y la carga ligera._

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** pruebas repetidas, hipótesis revisada y versión de app/API. Atribuid cualquier función o fragmento externo reutilizado.

### **Lección 8 · Revisar accesibilidad y mejorar el sistema completo (45–60 min).**

#### Fase 1 · Activamos y predecimos

Una pareja de otro equipo observa la pista e intenta seguir las instrucciones sin ayuda. Predecid qué barreras podrían dificultar el uso: leyenda poco clara, color difícil de distinguir o parada difícil de encontrar.

#### Fase 2 · Exploramos y construimos

Comprobad si la meta tiene palabra o símbolo además de color, si hay alternativa cuando el sensor no distingue una marca y si la ruta evita exigir reflejos rápidos.

#### Fase 3 · Explicamos y registramos

Recoged retorno con frases de evidencia: «he visto…», «no he sabido…», «esperaba…». Valorad la accesibilidad del artefacto, no la habilidad personal de quien lo prueba.

#### Fase 4 · Aplicamos y mejoramos

Elegid un cambio de estructura, programa o instrucción. Actualizad el pseudocódigo, aplicad una edición cada vez y volved a ejecutar dos casos.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** retorno, cambio y dos pruebas posteriores. Registrad una posible barrera, un sensor sin calibrar o una afirmación que excede los datos, y cómo lo habéis abordado.

### **Lección 9 · Cerrar documentación, demostración y rúbrica (45–60 min).**

#### Fase 1 · Activamos y predecimos

Revisad qué debe entender la audiencia sobre el reto y predecid qué evidencia sustenta cada afirmación de la presentación.

#### Fase 2 · Exploramos y construimos

Completad el diario con problema, criterios/restricciones, tres ideas, diagrama, puertos, código comentado, plan/resultados de prueba, fallo importante, cambio, retorno y limitación.

#### Fase 3 · Explicamos y registramos

Preparad una muestra de tres minutos: necesidad, usuario y criterios, construcción, fragmento Python, pruebas repetidas, mejora y qué no resuelve. Si el robot no está disponible, usad una imagen estática o simulación identificada como tal.

#### Fase 4 · Aplicamos y mejoramos

Aplicad la rúbrica de equipo en Python, integración física, pruebas/depuración, accesibilidad y comunicación. Usad niveles inicial, en desarrollo, competente y transferible con una evidencia concreta del diario.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** diario completo y guion revisado entre parejas. Comprobad que cada afirmación de la presentación tiene un dato u observación detrás.

### **Lección 10 · Feria de prototipos y reflexión final (45–60 min).**

#### Fase 1 · Activamos y predecimos

Delimitad carril, carga y zona de público y elegid una demostración corta. Predecid qué condición de prueba puede mostrar una limitación del prototipo.

#### Fase 2 · Exploramos y construimos

Preparad la estación y comprobad que la parada manual es fácil de encontrar. Mantened la carga ligera y el recorrido dentro de la zona marcada.

#### Fase 3 · Explicamos y registramos

Presentad al menos un caso de éxito y una condición que el sistema no resuelve. Aceptad preguntas sobre datos, sensores, decisiones, mecanismo y pruebas; no comparéis equipos por rapidez ni por número de piezas.

![Prototipo SPIKE Prime de la dotación con una carga ligera recorre un carril de maqueta hasta una zona de parada mientras un cuaderno muestra un gráfico de pruebas.](../../_assets/situacions/sa-sp-python-projecte-transport-fira.webp)

_La demostración es de mesa y no representa un sistema autónomo para pasillos ni transporte real._

#### Fase 4 · Aplicamos y mejoramos

Recoged una nota concreta del público y una pregunta respetuosa. Cada miembro explica su contribución y una aportación de otra persona que haya cambiado el proyecto.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** demostración, retorno y siguiente experimento propuesto. Comparad la estimación inicial y final del criterio, no el valor personal. El modelo es educativo, no autónomo ni apto para transportar materiales o personas en espacios reales.

## 📦 Producto final y evidencias

La muestra incluye un prototipo de transporte para fichas o paquetes vacíos y ligeros, programa Python que usa al menos una función propia, un sensor SPIKE cuando sea pertinente/disponible, y una parada; trayecto e instrucciones accesibles; diario de diseño; pseudocódigo/diagrama; código comentado con atribución; mapa de puertos; tabla con criterio, intento, resultado, dato, unidad y ajuste; documentación de un fallo y su depuración; revisión entre iguales; estimación de límites/impacto; y una presentación de 3 minutos.

Rúbrica formativa (4 niveles por dimensión): **uso de Python** —programa poco estructurado / secuencia parcial / funciones y control de flujo coherentes / estructura documentada que se puede reutilizar y justificar; **integración física** —montaje o puertos no verificados / acción básica / mecanismo y sensores responden a los criterios / el grupo explica calibración y alternativas; **prueba/iteración** —resultado anecdótico / una prueba registrada / casos variados y una revisión basada en datos / repeticiones comparables, causas aisladas y límites explícitos; **diseño para las personas** —no hay instrucción/parada clara / una barrera reconocida / alternativas de entrada e indicadores / perspectivas revisadas con iteración; **comunicación/equipo** —afirmaciones sin registro / evidencia parcial / roles y aportaciones explicados con respeto / decisiones y desacuerdos documentados con argumentos y pruebas. La rúbrica se utiliza para orientar mejoras, no para certificar un transportista real.

## ♿ Accesibilidad, datos y seguridad

El reto se puede resolver en simulación, con una maqueta estacionaria o con un vehículo de mesa. La ruta se representa con símbolos, texto ampliado, formas y colores redundantes; se puede dar una orden manual para probar la lógica. No se hacen encuestas identificables, no se registran domicilios ni trayectos del alumnado y no se evalúa capacidad física. Se recogen solo datos del prototipo y de entradas sintéticas. Cualquier observación sobre el espacio escolar se anonimiza y se valida con el adulto responsable. Los motores funcionan en una zona controlada de baja velocidad; ningún equipo prueba en el pasillo, cerca de escaleras, personas o carga frágil. En caso de error, se detiene el robot antes de cambiar piezas o cables.

## 🔗 Referente oficial, alcance y adaptación

El referente es el proyecto culminante de *Introduction to Python Programming · Course 2* de LEGO Education, que se anuncia como *Environmental Impact or Transportation Project*. La guía declara que los proyectos tienen 10–12 lecciones de 45–60 minutos e incluyen documentación con diario y rúbrica; también explicita diseño iterativo, depuración de hardware/software, datos, sensores, condiciones compuestas, pseudocódigo, descomposición, accesibilidad, sesgo y presentación. Este itinerario adapta la rama de transporte a la logística de materiales de maqueta de la escuela y ofrece un artefacto, datos, restricciones, pruebas, roles y rúbrica originales. El PDF consultable no desglosa el guion docente ni los criterios detallados del proyecto de 10–12 lecciones, por lo tanto no atribuimos a LEGO la secuencia de diez sesiones aquí creada ni afirmamos que reproduzca sus materiales privados. La construcción y la API Python se ajustan al set y la versión SPIKE presentes en el centro.
