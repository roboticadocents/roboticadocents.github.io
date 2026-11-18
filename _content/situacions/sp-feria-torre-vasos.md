---
active: true
title: "La feria de las torres de vasos"
description: "Diseñamos una ruta programada que evite obstáculos y haga caer una torre ligera con un vehículo SPIKE Prime."
robot: "spike"
robot_label: "SPIKE Prime"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Ciencias"
theme: "horta-valenciana"
theme_label: "Feria de la huerta"
duration: "4 sesiones de 50 minutos"
challenge: "¿Cómo podemos planificar, programar y mejorar una ruta que evite obstáculos y derribe una torre de vasos con seguridad?"
official_source: "https://matatalab.com/en/node/94"
---

![Un vehículo SPIKE Prime real de la dotación se acerca a una torre ligera de vasos de papel; en el mapa de mesa se ve una ruta que bordea un obstáculo.](../../_assets/situacions/sp-fira-torre-gots.webp)

_Ilustración conceptual generada con IA a partir del modelo SPIKE Prime del centro. La torre representada es orientativa: montad cada torre real con cinco vasos en la base, cuatro en el nivel central y tres en la cima._

## Situación, reto e intención

La feria escolar de la huerta prepara una prueba de destreza con vehículos programables. Los equipos construyen una torre ligera de vasos de papel según la regla **5–4–3**, delimitan una salida y un destino, colocan un obstáculo blando y programan el vehículo SPIKE Prime para que lo rodee y llegue a la torre. El resultado se registra como número de vasos que caen, pero el objetivo principal es explicar y mejorar la ruta, no ganar por rapidez.

La propuesta adapta la actividad oficial *Knockdown the Paper Cup Tower*, creada para Matatalab Lite. Conserva la decoración y la construcción de torres, el punto de partida, los obstáculos, la aproximación al blanco y la comprobación final. La traslada al vehículo SPIKE Prime de la dotación con un empuje pasivo de baja velocidad. No se presupone ningún sensor para detectar obstáculos: el alumnado programa una ruta conocida, observa el resultado y ajusta el código. La competición de velocidad del material original se convierte en una comparación cooperativa de pruebas.

**Pregunta guía:** ¿qué información necesitamos para prever la ruta, evitar el obstáculo y tocar la torre sin salir del recorrido?

## Aprendizajes y vocabulario

- Construir y describir una torre 5–4–3 y acordar un criterio observable para contar los vasos caídos.
- Descomponer una ruta en tramos, giros, inicio, obstáculo y destino; representarla con un diagrama o pseudocódigo.
- Programar el movimiento del modelo SPIKE disponible y distinguir una ruta planificada de una detección automática.
- Repetir pruebas cambiando una sola variable, registrar resultados y explicar qué iteración ha mejorado el control.
- Cooperar con roles rotativos y priorizar un movimiento lento, previsible y seguro.

**Vocabulario clave:** torre 5–4–3, base, nivel, punto de inicio, destino, obstáculo, trayecto, giro, motor, programa, predicción, prueba, depuración e iteración.

## Materiales y preparación

- Un vehículo SPIKE Prime de la dotación por equipo o por estación, con hub cargado y la configuración de movimiento disponible en el centro.
- Piezas LEGO del mismo conjunto para comprobar o adaptar una **barra pasiva frontal**. No añadáis un motor o sensor nuevo para hacer de empujador. Si el modelo existente no permite una barra estable, usadlo sin modificar y haced que el destino sea una zona marcada junto a los vasos.
- Vasos de papel ligeros: **12 por torre** (5 en la base, 4 en el segundo nivel y 3 en el tercero); preparad al menos una torre de repuesto por estación.
- Cinta de pintor para marcar una ruta corta sobre una superficie plana, bloques de espuma u obstáculos blandos, hoja de registro, rotuladores y tarjetas para decorar los vasos.
- Regla o cinta métrica para marcar tramos y distancias; ningún material duro, punzante o frágil dentro del recorrido.

Antes de la sesión, probad el modelo concreto del centro a velocidad baja, confirmad qué motores mueven el vehículo y qué configuración de la app está disponible. El empujador debe quedar firme, bajo y sin bordes punzantes, cables sueltos ni contacto con ruedas o sensores. Marcad un área de ensayo libre de manos y personas; solo una persona adulta puede recuperar el vehículo si queda bloqueado. Si no es posible verificar el montaje o el control, haced las pruebas con el robot detenido y una ficha que represente el vehículo.

## Secuencia didáctica

### 1. Montamos la torre de la feria (50 min)

#### Fase 1 · Activamos y predecimos

Mostrad una torre sencilla de vasos y preguntad qué la hace estable y qué podría pasar si el vehículo la toca de lado. Presentad la regla 5–4–3 como **cinco vasos en la base, cuatro en el nivel del medio y tres en la cima**. Cada equipo dibuja la torre y anticipa qué parte caerá primero con un empuje ligero.

#### Fase 2 · Exploramos y construimos

Decorad los vasos con motivos propios de la feria o de la huerta, sin cubrir sus bordes. Montad una torre completa de 12 vasos y una segunda, si hay suficiente material. Haced una prueba manual muy suave con un vaso de repuesto para observar cómo se transmite el movimiento; no forcéis las torres ni lancéis objetos.

#### Fase 3 · Explicamos y registramos

Anotad el número de vasos de cada nivel y dibujad la vista frontal. Acordad un criterio común: contaremos como caído un vaso que abandona su posición de la torre tras el contacto con el empujador; si solo se mueve sin caer, no suma. Registrad también cualquier cambio de montaje.

#### Fase 4 · Aplicamos y mejoramos

Construid una tarjeta de verificación con las tres filas de vasos y revisad la torre de otra pareja antes de empezar la feria. Si la torre cae antes de la prueba, reconstruidla con la misma regla; no modifiquéis el criterio de recuento según el equipo.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** dibujo anotado, torre de 12 vasos y acuerdo escrito sobre qué cuenta como caída. **Reflexión:** ¿qué diferencia hay entre una torre bien construida y una torre difícil de derribar? La respuesta debe mencionar una observación, no solo una preferencia.

### 2. Preparamos el vehículo y la ruta (50 min)

#### Fase 1 · Activamos y predecimos

Observad el vehículo SPIKE Prime real disponible en el centro y localizad el frontal, las ruedas o elementos de tracción, el hub y los motores que realmente lo mueven. Marcad sobre una cuadrícula del suelo un punto de inicio, un obstáculo blando y la zona de la torre. Predecid cuántos tramos y giros harán falta para llegar.

#### Fase 2 · Exploramos y construimos

Comprobad primero que el vehículo avanza y gira en un espacio abierto. Si la configuración del centro lo permite, fijad una viga pasiva baja al frontal con piezas del kit; la persona adulta comprueba estabilidad, altura y separación de ruedas. No hay una construcción oficial universal para este reto: usad el modelo ya validado en el centro y retirad la barra si interfiere con el movimiento.

#### Fase 3 · Explicamos y registramos

Dibujad la ruta en cuadrícula y describid cada orden antes de programarla. Usad este pseudocódigo, ajustando los movimientos a la app y al montaje locales:

```text
inici: orientar el vehicle cap al primer tram
avançar a velocitat baixa fins a la marca de gir
girar per vorejar l'obstacle tou
avançar fins a la zona de la torre
aturar el vehicle abans de recuperar-lo
```

La secuencia no incluye una lectura de sensor: el vehículo no sabe por sí mismo dónde está el obstáculo ni si ha llegado a la torre. La persona observadora comprueba estos eventos y registra la diferencia entre el recorrido previsto y el ejecutado.

#### Fase 4 · Aplicamos y mejoramos

Haced una primera pasada **sin torre**, a velocidad baja. Si el vehículo toca el obstáculo, se sale del carril o no llega a la marca, cambiad una sola instrucción o distancia y repetid. Después intercambiad los roles de programación, observación y registro.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa de ruta con inicio, obstáculo y destino, pseudocódigo y una prueba en vacío registrada. **Reflexión:** ¿qué partes de la decisión provienen del programa y cuáles de la observación humana? Identificad explícitamente que evitar un obstáculo conocido con una ruta prefijada no es lo mismo que detectarlo con un sensor.

### 3. Probamos el empuje con cuidado (50 min)

#### Fase 1 · Activamos y predecimos

Antes de acercar el vehículo a la torre, cada equipo elige una distancia inicial y predice cuántos vasos caerán. Recordad las normas: velocidad baja, una sola ejecución por turno, manos fuera del recorrido y ninguna persecución del vehículo si se desvía.

#### Fase 2 · Exploramos y construimos

Colocad la torre en el destino marcado y el obstáculo blando en una posición acordada. Una persona ejecuta el programa; otra observa desde fuera del carril, y una tercera anota si ha seguido la ruta. Si la primera prueba no llega al blanco, detened el robot y recuperadlo cuando los motores se hayan parado.

#### Fase 3 · Explicamos y registramos

Después de cada pasada, contad los vasos que han caído según el criterio común. Anotad orden probado, velocidad configurada, distancia hasta la torre, contacto conseguido, vasos caídos e incidencias. No comparéis tiempos ni convirtáis los resultados en una clasificación de equipos.

#### Fase 4 · Aplicamos y mejoramos

Elegid **una** variable para mejorar —distancia de inicio, giro o velocidad— y haced una segunda prueba con el resto de condiciones iguales. Si la torre o el vehículo se desplazan antes del contacto, revisad la superficie y reiniciad con el mismo punto de inicio. No elevéis la velocidad para obtener más caídas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** dos pruebas comparables con predicción, resultado y una variable identificada. **Reflexión:** ¿se ha acercado la segunda prueba a la predicción? ¿Qué dato lo muestra? Un resultado inesperado también es evidencia útil si el equipo puede describir las condiciones.

### 4. Revisamos la feria y compartimos lo que hemos aprendido (50 min)

#### Fase 1 · Activamos y predecimos

Recuperad el mapa y los datos de la sesión anterior. Cada equipo selecciona una mejora basada en las pruebas y escribe su resultado esperado antes de tocar el programa.

#### Fase 2 · Exploramos y construimos

Ejecutad una pasada final con el mismo criterio de seguridad y recuento. Después, otro equipo lee el mapa y explica qué espera que haga el vehículo; comparad esa predicción con el recorrido real. Si hay una desviación, anotad si proviene del código, del montaje, de la superficie o de la posición inicial.

#### Fase 3 · Explicamos y registramos

Preparad un cartel de feria con el dibujo de la ruta, las instrucciones principales, la tabla de pruebas y una conclusión limitada a lo observado. Distinguid entre «el robot ha seguido esta ruta en dos pruebas» y una afirmación más amplia sobre qué haría siempre.

#### Fase 4 · Aplicamos y mejoramos

Haced una ronda de retorno entre parejas: una observación concreta, una pregunta y una propuesta. Cada equipo puede incorporar una mejora al mapa o a la explicación, aunque el programa no se vuelva a ejecutar. Reconstruid las torres y ordenad vasos, piezas y materiales.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia final:** ruta anotada, pseudocódigo o programa, registro de pruebas, recuento según el criterio acordado y explicación de una iteración. Autoevaluación: puedo describir la ruta; puedo justificar un cambio con datos; puedo explicar qué no detecta el robot. **Cierre:** ¿qué mantendríamos constante si repitiéramos el ensayo mañana?

## Evidencias y evaluación

Recoged el dibujo de la torre, la regla 5–4–3, el mapa de ruta, el pseudocódigo o los bloques, la tabla de pruebas y el cartel final. Observad si el equipo: construye la torre con la disposición acordada; señala inicio, obstáculo y destino; traduce el recorrido a órdenes coherentes; prueba el movimiento sin obstáculos antes de añadir la torre; cambia una sola variable al iterar; y diferencia una ruta programada de una detección automática. El número de vasos caídos es un dato del reto, no una nota ni un indicador de rapidez.

## Participación, accesibilidad y seguridad

Ofreced la ruta en papel o con una ficha móvil cuando la conexión, el código o el vehículo no estén disponibles. Permitid roles de cartógrafo/a, operador/a, observador/a, contador/a y portavoz, con turnos voluntarios en la manipulación. Usad vasos grandes y de colores contrastados o una torre más baja para facilitar su lectura, manteniendo visible la regla 5–4–3. Mantened libre el perímetro de la pista; utilizad solo obstáculos blandos, detened el vehículo antes de cualquier intervención manual y no uséis piezas pesadas, líquidos ni objetos frágiles.

## Referentes y adaptación

- Matatalab, [Knockdown the Paper Cup Tower](https://matatalab.com/en/node/94): actividad Lite con decoración de vasos, torres 5–4–3, punto de partida, obstáculos, modificación de MatataBot, control hacia los blancos y recuento/retorno final. El plan oficial distribuye 15 minutos de activación guiada, 25 de actividad y 5 de retorno.
- LEGO Education, [Making Moves with Motors](https://education.lego.com/en-us/lessons/get-moving-with-motors/making-moves-with-motors/): referencia técnica para explorar movimiento de motores, parámetros y ejecución de pruebas con SPIKE Prime; los puertos y el programa hay que ajustarlos al modelo real del centro.
- LEGO Education, [especificaciones técnicas de SPIKE Prime](https://education.lego.com/en-gb/product-resources/spike-prime/downloads/technical-specifications/): documentación de motores, hub y sensores del conjunto.

La transferencia a SPIKE Prime, la feria local, la pauta de pruebas, los criterios de recuento y la secuencia de cuatro sesiones son creación propia. La imagen generada con IA reproduce el vehículo de la dotación a partir de la referencia local; el montaje de la barra pasiva es una posibilidad que hay que verificar físicamente y no una construcción certificada por el fabricante. La programación concreta depende del modelo de vehículo y de la versión de la app del centro.
