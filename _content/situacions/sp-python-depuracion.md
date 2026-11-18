---
active: true
title: "Python: el laboratorio de depuración"
description: "Seis lecciones de Python con SPIKE Prime para probar prototipos, distinguir errores de sintaxis, lógica y ejecución, depurar hardware y dar retroalimentación."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Programación"
theme: "python"
theme_label: "Python y depuración de prototipos"
duration: "6 lecciones · 5–6 sesiones"
challenge: "¿Cómo podemos localizar si un comportamiento inesperado proviene del diseño, de una conexión, de un error de sintaxis o de la lógica del programa Python?"
---

![Base móvil LEGO SPIKE Prime detenida en una pista de prueba de mesa con sensor de color y tarjetas de comprobación.](../../_assets/situacions/sp-python-depuracio.webp)

_Depurar es reunir evidencia: observar la maqueta, probar el código y modificar una causa cada vez._

## 🌱 Reto e intención

Un equipo prepara una maqueta interactiva de indicaciones para una feria escolar. Una base SPIKE Prime recorre una ruta corta, lee tarjetas de color y comunica el estado mediante luz, sonido o un movimiento controlado. El reto no es hacer que funcione a la primera: hay que poder determinar por qué ha fallado una prueba, si la causa es la construcción, un cable/puerto, la sintaxis Python, la lógica, los datos del sensor o la interacción de estas partes. La situación adapta las seis lecciones de la unidad 6 *Troubleshooting and Debugging* de LEGO Education *Introduction to Python Programming · Course 2*. A diferencia de las situaciones SPIKE basadas en bloques, todas las pruebas de programa de esta ficha se hacen en Python textual y se acompañan de pseudocódigo, consola y registro de errores. Los programas de motores funcionan a velocidad baja y en una pista de mesa delimitada.

## 🎯 Objetivos y vocabulario

- Aplicar un proceso de diseño: definir el problema, investigar, idear, elegir una solución, construir un prototipo, probarlo, comunicarlo y rediseñarlo.

- Distinguir entre prototipo físico y programa; verificar la mecánica sin código antes de ejecutar Python.

- Leer un traceback e identificar la línea que orienta una investigación; formular hipótesis y probarlas sin cambiar muchas cosas a la vez.

- Diferenciar error de sintaxis (gramática Python), error de ejecución (excepción mientras corre) y error de lógica (el código se ejecuta pero el resultado no es el esperado).

- Diagnosticar problemas de hardware revisando montaje, puertos, conexiones y pieza móvil de manera ordenada.

- Escribir pseudocódigo/comentarios, usar casos esperados e inesperados, registrar cambios y ofrecer retroalimentación específica y aplicable.

**Bug:** defecto en el código o montaje que causa un resultado no deseado. **Depuración:** proceso de localizar, entender y corregir una causa con pruebas. **Prototipo:** modelo inicial usado para comprobar una idea, no producto final certificado. **Iteración:** cambio informado seguido de una nueva prueba.

## 🧰 Materiales y preparación

Un set SPIKE Prime 45678, hub cargado, dispositivo con la versión de la app SPIKE que permita abrir proyectos Python y consola, base móvil sencilla con sensor de color opcional, cables y motores, tarjetas mate de alto contraste, cinta de papel, cartón y diario de ingeniería. Confirmad antes de clase que el entorno Python detecta el hub y qué API de SPIKE está disponible; las funciones concretas y mensajes de error pueden variar entre versiones. Consultad la documentación/Knowledge Base integrada en la misma versión, y no copiéis código sin leerlo. Preparad una pista que no requiera precisión milimétrica, una lista de puertos/montaje previstos, dos pruebas positivas, dos negativas y fragmentos de error deliberadamente seguros que el alumnado solo corregirá en un entorno desconectado antes de hacerlos correr. No provoquéis fallos que puedan hacer salir el robot de la mesa o atrapar dedos.

En parejas, alternad roles cada 10–15 minutos: piloto de teclado y observador/a que lee el pseudocódigo, comprueba la consola y registra predicción/observación. El equipo también necesita una persona responsable del hardware en cada prueba; ningún cable se cambia con motores en marcha.

## 📅 Secuencia didáctica · seis lecciones

### **Lección 1 · Probar un prototipo antes de programar (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación:** comparad objetos de diseño que funcionan a la primera con aquellos que necesitan mejoras e introducid el ciclo: definir, investigar, idear, seleccionar, construir, probar, comunicar y rediseñar.

#### Fase 2 · Exploramos y construimos

**Reto:** crear con cartón y piezas una señalización de mesa para una feria escolar: el mensaje debe ser legible a una distancia acordada, mantenerse recto y dar una indicación equivalente en dos modalidades (por ejemplo, luz y forma visible). Definid criterios medibles y restricciones (tiempo, piezas y tamaño) antes de construir; dibujad dos soluciones posibles y elegid una con criterio.

#### Fase 3 · Explicamos y registramos

**Prueba:** poned a prueba la estabilidad con un soplido suave o un toque ligero estandarizado, la legibilidad desde dos puntos y la comprensión con tarjetas de respuesta voluntarias y anónimas. No se hace prueba con pesas o líquidos.

#### Fase 4 · Aplicamos y mejoramos

**Registro:** fotografiad/dibujad la versión 1, anotad qué ha pasado y cambiad una propiedad; una nueva prueba comprueba si el cambio ha mejorado el criterio. En una miniextensión, decidid qué señal podría mostrar la SPIKE hub matrix y qué mensaje necesita una tarjeta o texto ajeno al hub.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión:** ¿qué ha enseñado un fallo que no se habría podido saber mirando solo el esbozo? ¿Por qué ninguna medida sola demuestra que la señal es comprensible para todo el mundo?

### **Lección 2 · El movimiento esperado y el primer traceback (45 min).**

#### Fase 1 · Activamos y predecimos

**Activación:** mirad un movimiento mecánico corto elegido por la docente o analizad una base real LEGO SPIKE parada; describid cada movimiento en verbos y orden. Antes de encender motores, girad cada elemento a mano solo si el montaje lo permite con seguridad y anotad puntos de atascamiento, holgura mecánica o movimiento asimétrico.

#### Fase 2 · Exploramos y construimos

**Pseudocódigo:** «coloca el mecanismo; repite tres veces: avanza el brazo una cantidad fija; devuélvelo; pausa». Traducid solo este fragmento a Python con funciones de la Knowledge Base de la app instalada.

#### Fase 3 · Explicamos y registramos

Después la docente proporciona una copia incompleta que tiene un error de sintaxis deliberado (puntuación o indentación) en un fragmento corto de prueba; no ejecutéis el original hasta revisarlo. Leed la consola, localizad la línea indicada y corregid el carácter necesario; comparad la interpretación con el pseudocódigo.

#### Fase 4 · Aplicamos y mejoramos

**Depuración paso a paso:** guardad una copia inicial, haced una sola edición, volved a ejecutar con la salida asegurada y anotad el error antes/después. Si aparece otro mensaje, leedlo completo antes de editar.

#### Fase 5 · Comprobamos y reflexionamos

**Preguntas:** ¿qué hace el traceback y qué no puede decir? ¿Por qué probar el movimiento sin programa reduce posibles causas? Cerrad con una explicación de la sintaxis como «gramática que Python puede leer», no como medida de inteligencia.

### **Lección 3 · Una respuesta por cada entrada: depuración lógica (45 min).**

#### Fase 1 · Activamos y predecimos

**Planificación de pruebas:** cread pseudocódigo y una tabla entrada → respuesta esperada para tres o cuatro tarjetas del sistema de señalización.

#### Fase 2 · Exploramos y construimos

Una tarjeta puede activar la luz A, otra el sonido opcional y otra el movimiento de un motor; las tarjetas no asignadas deben dejar el mecanismo detenido y dar una indicación neutra.

#### Fase 3 · Explicamos y registramos

**Implementación:** programad en Python la lectura del sensor de color según las funciones documentadas en la app. Empezad con un color, probad lectura en vivo con el sensor fijo y registrad el valor devuelto, después añadid una segunda condición.

#### Fase 4 · Aplicamos y mejoramos

No supongáis que papel, impresión y luz ambiental producen valores exactos: haced una tarjeta de referencia y un mecanismo de entrada manual como alternativa.

#### Fase 5 · Comprobamos y reflexionamos

**Prueba sistemática:** comparad el resultado real con la tabla: cada color esperado; un color no asignado; ausencia de tarjeta; tarjeta girada o con luz cambiada. Si no aparece una excepción pero la respuesta no corresponde a la especificación, es un posible error de lógica o calibración, no un error de sintaxis. Cambiad una condición/umbral y repetid; no retoquéis programa y luz a la vez. Registrad cada entrada, valor leído, rama ejecutada y cambio hecho. Acabad explicando por qué «el programa termina sin error» no prueba que haga lo que queríamos.

![Prototipo SPIKE Prime detenido junto a tarjetas de color, con el programa y una alerta de prueba en la pantalla del ordenador.](../../_assets/situacions/sa-sp-python-depuracio-debug-v1.webp)

_La ilustración representa una comprobación controlada: el robot no interpreta el mensaje del ordenador; el equipo contrasta cada entrada con el resultado esperado._

### **Lección 4 · ¿Cuándo el problema es el hardware? (90 min).**

#### Fase 1 · Activamos y predecimos

**Investigación:** la base recibe una ruta de prueba que debería desplazarse hasta una marca, pero no lo hace. Primero confirmad el programa de referencia con motores detenidos o valores de prueba seguros; después seguid una lista de verificación sin reescribir código: hub cargado/conectado, puerto declarado frente a puerto ocupado, conector completo, motor libre, orientación del sensor, cable sin tensión y montaje sin fricción.

#### Fase 2 · Exploramos y construimos

Dividid cada diagnóstico en subcomponentes y probadlos por separado.

#### Fase 3 · Explicamos y registramos

**Casos de fallo controlados:** haced que la docente prepare estaciones con un cable desconectado (hub detenido), puerto intencionadamente incorrecto en el código pero sin activar motores, y sensor que no llega a ver la marca. Cada equipo describe el síntoma antes de corregir una cosa. Si hay código de error de API o puerto vacío, guardad el traceback y relacionadlo con el mapa de puertos.

#### Fase 4 · Aplicamos y mejoramos

**Pruebas:** mantened la misma ruta y una velocidad baja; después de una corrección, haced tres intentos y anotad inicio, puerto/sensor usado, resultado y variación. En cada prueba, asegurad una parada manual y mantened las manos fuera de ruedas/engranajes.

#### Fase 5 · Comprobamos y reflexionamos

**Conclusión:** distinguid «Python ha pedido el motor equivocado», «el motor no responde por conexión/montaje» y «el sistema se mueve pero la ruta no llega a la marca». Decid qué evidencia os permite afirmar cada diagnóstico, y qué alternativa hace falta si la pieza o el sensor no está disponible.

### **Lección 5 · Debug-inator: cazar errores sin crear riesgo (45 min).**

#### Fase 1 · Activamos y predecimos

**Estaciones de código desconectadas:** recibid tres fragmentos Python de la maqueta con un error cada uno: (1) sintaxis, como una puntuación/indentación que impide interpretar el programa; (2) ejecución, como una dirección de puerto no ocupada; (3) lógica, como una comparación con el valor de color equivocado.

#### Fase 2 · Exploramos y construimos

Predecid antes si el programa llega a ejecutarse, si se detendrá con excepción o si producirá un resultado equivocado; marcad la línea o condición sospechosa y escribid una prueba que lo confirme.

#### Fase 3 · Explicamos y registramos

**Laboratorio seguro:** los errores de sintaxis/lógica se pueden corregir en simulación o papel; solo corréis fragmentos de hardware después de comprobar conexiones, velocidad y espacio. El error de runtime del puerto vacío se investiga con el motor detenido y la consola disponible, no se deja girar un montaje mal conectado.

#### Fase 4 · Aplicamos y mejoramos

**Reto:** cada pareja diseña un caso de depuración con una entrada, un resultado esperado y una observación que permite diferenciar dos causas posibles; intercambiad casos con otra pareja.

#### Fase 5 · Comprobamos y reflexionamos

**Registro:** tipo de error, mensaje o síntoma, hipótesis, experimento mínimo, corrección y resultado posterior. La consola no puede revelar por sí sola un error de lógica: la especificación y las pruebas dan el resultado esperado contra el que comparar.

### **Lección 6 · Retroalimentación que ayuda a depurar (30–45 min).**

#### Fase 1 · Activamos y predecimos

**Preparación:** cada equipo elige una función pequeña del prototipo y prepara un programa comentado, un caso de prueba y una incertidumbre; no hace falta mostrar código personal ni toda la maqueta.

#### Fase 2 · Exploramos y construimos

**Intercambio:** el equipo revisor ejecuta (o traza en papel) la prueba sin tocar el proyecto original, describe el resultado y ofrece retroalimentación específica: «he observado…», «esperaba…», «quizá falta probar…». No da órdenes ni altera el código/robot ajeno.

#### Fase 3 · Explicamos y registramos

El equipo autor lee el comentario y lo relaciona con el caso de prueba: ¿qué se ha observado, qué se esperaba y qué diferencia hay? Clasificad cada aportación como aclaración, hipótesis o propuesta de cambio. El equipo decide qué sugerencia adopta, cuál deja pendiente y por qué; registrad la decisión antes de editar el código, de manera que quede visible si el cambio responde a una evidencia o solo a una preferencia.

#### Fase 4 · Aplicamos y mejoramos

**Rediseño:** aplicad una mejora, volved a ejecutar el mismo caso y un caso inesperado, y registrad si el cambio resolvió el problema o creó otro.

#### Fase 5 · Comprobamos y reflexionamos

**Reflexión individual:** describid una contribución propia y cómo disteis o recibisteis retroalimentación; escala del 1–3 para uso del tiempo y cuidado de piezas, sin clasificar habilidades personales. Cerrad con una ronda oral o escrita: una práctica que ayuda a detectar errores, un límite de la consola y una prueba que falta antes de decir que el prototipo está listo.

## 🧪 Evidencias y evaluación

El cuaderno conserva ciclo de diseño, pseudocódigo, criterios del prototipo, fragmentos Python comentados, traceback o síntoma, clasificación de cada error, mapa de puertos, casos esperados/inesperados, registro de tres intentos después de una reparación, retroalimentación recibida y decisión de rediseño. Evaluad si el alumno (1) diferencia diseño, hardware y software; (2) interpreta error de sintaxis, de ejecución o de lógica con evidencias; (3) cambia una causa cada vez; (4) prueba casos relevantes y documenta; y (5) explica qué queda sin resolver. La evaluación docente usa preguntas y observación, coevaluación específica y autoevaluación privada, como recomienda la guía. Un programa no recibe valoración alta solo porque termina sin excepción: debe compararse con las especificaciones y las pruebas.

## ♿ Inclusión, privacidad y seguridad

Ofreced la opción de seguir pseudocódigo en papel, usar simulación o hacer rol de observación, sin excluir a nadie de la resolución. Compartid fragmentos de código preparados, no datos personales ni proyectos identificables. Retroalimentación dirigida al código y al resultado, nunca a la capacidad de la persona. Luces y sonidos tienen alternativa visual/textual y volumen bajo. Limitad la velocidad, inmovilizad el vehículo antes de cambiar puertos y no pongáis las manos en los engranajes; no provoquéis errores de puerto con el motor en marcha. Antes de la sesión, el docente verifica la compatibilidad de biblioteca/API con la versión de la app usada por el alumnado.

## 🔗 Referente oficial y adaptación

Adapta las seis lecciones de la unidad 6 *Troubleshooting and Debugging* del curso LEGO Education [*Introduction to Python Programming · Course 2*](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt5436c2a0ac31fc17/65e9d0ef2a3929468f30be14/File_2_Units_678910_Intro_to_Python_Course_TG_Course_2.pdf?locale=en-us): *Testing Prototypes*, *Break Dancer Break Down*, *Dance to the Beat?*, *Testing for Trouble*, *Debug-inator* e *Ideas to Help with the Debug-inator*. Mantiene diseño iterativo, diagnóstico separado de modelo/programa, lectura de traceback, sintaxis/lógica/runtime, respuesta por color, verificación de puertos y piezas, pruebas fuera de rango y retroalimentación de compañeros; transforma puente y baile en señalización y trayecto escolar propios. La guía usa la API Python de SPIKE y consola; esta adaptación pide verificar funciones en la versión local antes de ejecutar código.
