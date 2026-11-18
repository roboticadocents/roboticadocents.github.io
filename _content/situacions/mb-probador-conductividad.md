---
active: true
title: "Un probador de materiales"
description: "¿Cómo podemos escribir un algoritmo y programar un prototipo seguro para clasificar materiales conductores?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "medi"
subject_label: "Ciencias, Matemáticas y Tecnología"
theme: "ciencia"
theme_label: "Materiales y circuitos"
duration: "5 sesiones"
challenge: "¿Cómo podemos usar una entrada de micro:bit y una condición para investigar qué materiales conducen electricidad?"
---

![Una placa micro:bit junto a muestras secas de papel, plástico, madera y papel de aluminio para una investigación de conductividad.](../../_assets/situacions/mb-provador-conductivitat.webp)

_La prueba es de baja tensión y solo usa muestras aisladas y circuitos revisados por el docente._

## 🌱 Situación y intención

El taller de ciencias quiere saber qué materiales podrían formar parte de un interruptor sencillo para una maqueta. El alumnado compara circuitos de baja tensión, representa decisiones con diagramas de flujo y programa una entrada para que micro:bit muestre un icono. La situación adapta las cinco lecciones oficiales de *Electrical conductors*; los materiales se prueban como muestras, no como objetos conectados a instalaciones eléctricas.

## 🎯 Aprendizajes y vocabulario

- Formular una predicción sobre la conductividad de una muestra segura y registrar las condiciones de prueba.
- Construir un circuito de baja tensión y describir la entrada y la salida de micro:bit.
- Programar una selección condicional y probar materiales conocidos, secos y no peligrosos.
- Distinguir el resultado del prototipo de la evidencia científica y rechazar pruebas con enchufes, líquidos o materiales desconocidos.

## 📅 Secuencia didáctica · 5 sesiones

### **Sesión 1 · Selección y conductividad (Selection & conductivity investigation).**

#### Fase 1 · Activamos y predecimos

Presentad muestras seguras y predecid cuáles podrían conducir electricidad en un circuito escolar de baja tensión. Identificad qué se mantendrá igual entre pruebas: tamaño aproximado de la muestra, puntos de contacto y circuito.

#### Fase 2 · Exploramos y construimos

Con un circuito de baja tensión revisado previamente por el docente, observad qué pasa cuando se incluye una muestra conductora o aislante. No cambiéis conexiones mientras el circuito está alimentado.

#### Fase 3 · Explicamos y registramos

Identificad entrada, proceso y salida y escribid una regla «si… entonces…» que describa la respuesta. Registrad el nombre genérico de la muestra, la predicción, el resultado observado, la repetición y la posible causa de error.

#### Fase 4 · Aplicamos y mejoramos

Si una prueba es inconsistente, marcadla como «no concluyente». Revisad por separado los puntos de contacto o las condiciones del montaje y repetidla; no borréis un resultado porque no encaje con la predicción.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué permite afirmar la prueba y qué no se puede generalizar a otros objetos. **Evidencia:** dibujo inicial del circuito, tabla de predicciones y regla condicional.

### **Sesión 2 · Cajas de decisión (Decision boxes).**

#### Fase 1 · Activamos y predecimos

Recuperad la regla de la primera sesión y predecid qué dos respuestas debe mostrar el diagrama según que el circuito se cierre o permanezca abierto.

#### Fase 2 · Exploramos y construimos

Convertid la regla en un diagrama de flujo con una caja de decisión y dos salidas etiquetadas «sí» y «no». Asociad cada rama a un icono LED distinto.

#### Fase 3 · Explicamos y registramos

Una pareja ejecuta el algoritmo con tarjetas de valores simulados antes de conectar ningún circuito. Marcad cualquier rama que no tenga respuesta o instrucción siguiente.

#### Fase 4 · Aplicamos y mejoramos

Revisad el diagrama cuando una instrucción sea ambigua o una rama quede sin salida. Volved a intercambiarlo con otro equipo para que lo ejecute paso a paso.

#### Fase 5 · Comprobamos y reflexionamos

Comprobad que los dos valores simulados activan respuestas distintas y que el diagrama se puede seguir sin ayuda oral. **Evidencia:** diagrama inicial y versión revisada con las dos ramas probadas.

### **Sesión 3 · Entradas y salidas de micro:bit (Inputs).**

#### Fase 1 · Activamos y predecimos

Explorad con MakeCode los botones y, si la placa y los accesorios lo permiten, las entradas de los pines. Predecid qué salida LED tendría que aparecer cuando cambia la entrada.

#### Fase 2 · Exploramos y construimos

Relacionad el cambio de pin con una salida LED. Dibujad el circuito antes de tocar conexiones e identificad qué partes son internas y cuáles externas. Si falta un accesorio seguro, simulad los valores de entrada con los botones.

#### Fase 3 · Explicamos y registramos

Anotad entrada, condición y respuesta observada. Una pareja lee el programa y otra sigue el diagrama para comprobar que la secuencia concuerda.

#### Fase 4 · Aplicamos y mejoramos

Empezad con una condición y una salida LED. Después añadid una segunda muestra y una rutina de reinicio para que las pruebas no arrastren el valor anterior.

#### Fase 5 · Comprobamos y reflexionamos

Ejecutad tanto valores reales del montaje aprobado como valores simulados si se ha elegido la alternativa. **Evidencia:** esquema del circuito, programa con una condición y registro de entradas y salidas.

### **Sesión 4 · Construimos y depuramos el probador (Making a conductivity tester).**

#### Fase 1 · Activamos y predecimos

Elegid muestras pequeñas, secas y separadas —papel, plástico, madera o una lámina pequeña de aluminio— y predecid el resultado. Confirmad que el montaje ha sido revisado por el docente y que los accesorios son compatibles.

#### Fase 2 · Exploramos y construimos

Solo con un montaje aprobado, probad las muestras y programad la lectura de entrada con selección. Empezad con una condición y una salida; si no hay accesorio protector, simulad los valores con los botones en lugar de hacer la prueba física.

#### Fase 3 · Explicamos y registramos

Usad una muestra conocida conductora y una aislante. Anotad la lectura de entrada, el resultado mostrado y si coincide con la predicción; reiniciad entre casos.

#### Fase 4 · Aplicamos y mejoramos

Si dos muestras dan la misma respuesta, revisad por separado: cambio de lectura al cerrar el circuito, contacto de la pinza con una superficie limpia, momento de mostrar la salida y reinicio entre casos. Cambiad una variable por prueba y volved a ejecutar.

#### Fase 5 · Comprobamos y reflexionamos

Comparad el código inicial y el depurado y limitad la conclusión a los objetos probados y a las condiciones del circuito escolar. **Evidencia:** código con selección, resultados de dos muestras de referencia y registro de depuración.

### **Sesión 5 · Revisión y reflexión (Review & reflection).**

#### Fase 1 · Activamos y predecimos

Con la alimentación desconectada, predecid qué partes del algoritmo describen entrada, condición y salida. Preparad tarjetas «circuito abierto/cerrado» para poder hacer la revisión sin manipular componentes.

#### Fase 2 · Exploramos y construimos

Desmontad el prototipo con la alimentación desconectada. Reescribid el algoritmo en pasos pequeños y marcad entradas, condiciones y salidas.

#### Fase 3 · Explicamos y registramos

Comparad el diagrama inicial con el programa final e indicad qué condiciones se han probado. Anotad qué factores habría que controlar para repetir la prueba de manera justa.

#### Fase 4 · Aplicamos y mejoramos

Una pareja sigue el algoritmo con las tarjetas de circuito abierto/cerrado y detecta cualquier paso que falte. Revisadlo para que cada valor tenga una salida definida.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué se puede concluir sobre las muestras y qué requeriría una investigación más controlada. **Evidencia:** algoritmo revisado, diagrama y reflexión sobre los límites de la prueba.

## 🧰 Materiales y condiciones

BBC micro:bit, MakeCode, muestras pequeñas, secas y aisladas, pinzas/puentes adecuados y el circuito protector especificado por el fabricante o por el centro. Las pinzas de cocodrilo y los componentes externos solo se usan si forman parte de la dotación y el docente ha verificado el montaje. Sin estos materiales, haced la prueba con simulación de botones y diagramas.

## 🧪 Evidencias y evaluación

Recoged circuito esquemático, diagrama de flujo, tabla de predicciones, código con condición, resultados de dos muestras conocidas y revisión de depuración. Valorad si el algoritmo se puede seguir, si las entradas y salidas están identificadas y si las conclusiones se limitan a las muestras y condiciones probadas.

## Cuaderno de investigación

Antes de tocar el montaje, cada equipo dibuja el circuito previsto e identifica la fuente de energía, el camino conductor, el punto en el que se interrumpe el circuito, la entrada de micro:bit y la salida LED. En una tabla, registrad el nombre genérico de la muestra, la predicción, el resultado observado, la repetición y la posible causa de error. Usad piezas de tamaño parecido y sujetadlas siempre por los mismos puntos cuando sea posible. Una prueba inconsistente se marca como «no concluyente»; no se borra porque no encaje con la predicción.

En el diagrama de flujo, la pregunta de decisión debe tener dos salidas etiquetadas, «sí» y «no». Una pareja ejecuta el algoritmo con tarjetas de valores simulados antes de conectar ningún circuito. Esto permite encontrar una rama sin respuesta y comprobar que cada resultado activa un icono distinto. En la sesión de MakeCode, empezad con una condición y una salida LED; después añadid una segunda muestra y una rutina de reinicio para que las pruebas no arrastren el valor anterior.

## Depuración y lectura de resultados

Si dos muestras parecen dar la misma respuesta, revisad por separado el programa y el montaje: ¿la lectura de entrada cambia cuando se cierra el circuito?, ¿la pinza toca una superficie limpia?, ¿el programa muestra la salida después de leer el pin?, ¿se ha reiniciado entre casos? Cambiad una variable por prueba y anotad el resultado. La conclusión se limita a los objetos probados y a las condiciones del circuito escolar; no se generaliza automáticamente a todas las piezas del mismo material ni a productos reales.

Como ampliación desconectada, dad al equipo tarjetas «circuito abierto/cerrado» y haced que ejecute el diagrama de decisión. También se puede comparar el resultado con una predicción inicial y explicar qué tipo de dato adicional ayudaría a confiar más en la prueba. No hace falta manipular ningún componente para demostrar la comprensión de los algoritmos.

## Roles y protocolo de seguridad

Asignad roles de lector/a del diagrama, encargado/a de las muestras, observador/a del LED y registrador/a. Solo la persona adulta conecta o revisa el prototipo si las piezas no son específicamente compatibles o el grupo no puede verificar el montaje. Mantened las manos y la mesa secas, trabajad con baja tensión, desconectad la alimentación antes de cambiar muestras y no conectéis nunca la micro:bit a la red eléctrica. Si no hay un accesorio de protección adecuado, sustituid toda la prueba física por datos simulados; el reto de entradas, condiciones y flujos sigue completo.

## ⚡ Seguridad eléctrica

Solo se utilizan circuitos educativos de baja tensión y accesorios compatibles, con revisión del docente. Nunca conectéis la placa a la red eléctrica ni unáis directamente los pines de alimentación 3V y GND. No probéis líquidos, cuerpos, pilas, enchufes, aparatos, objetos conectados ni materiales calientes o cortantes. Desconectad antes de cambiar muestras y mantenedlo todo seco.

## 🔗 Unidad oficial adaptada

Esta situación adapta las cinco lecciones de micro:bit [Electrical conductors](https://microbit.org/teach/lessons/electrical-conductors-unit-of-work/): investigación de circuitos y selección, cajas de decisión, exploración de entradas, probador programado con MakeCode y reflexión desconectada. El contexto del taller, la selección de muestras y los criterios son propios.
