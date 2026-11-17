---
title: "La red que ordena"
description: "Ejecutad una red concreta de cuatro canales y descubrid qué comparaciones pueden hacerse a la vez."
topic: "Algoritmos"
cycle_label: "Tercer ciclo"
duration: "50 min"
order: 3
image: "_assets/activitats/portades/xarxa-ordenacio.webp"
image_alt: "Cuatro canales de comparación transforman pilas de piezas desordenadas en una serie creciente."
---

![Cuatro canales de comparación transforman pilas de piezas desordenadas en una serie creciente.](_assets/activitats/portades/xarxa-ordenacio.webp)

## 🎯 ¿Qué vamos a aprender?

Cuatro números entran desordenados en una red que siempre hace las mismas comparaciones. El equipo debe conducir las tarjetas por los canales, registrar cada etapa y comprobar la salida. El reto no es ordenar «a ojo», sino ejecutar un procedimiento fijo e investigar qué pasa si quitamos un comparador.

La red del kit tiene **cuatro canales, cinco comparadores y tres etapas**. Leemos el tiempo de izquierda a derecha. En cada comparador, el menor queda en el canal de arriba y el mayor en el de abajo; en un empate, mantenemos los valores donde están. No se elige la dirección según la izquierda de quien participa.

## 🧰 Materiales y preparación

- [Descargad el kit de la actividad (PDF, 4 páginas)](_assets/activitats/kits/xarxa-ordenacio.pdf).
- Página 1: red completa con la regla y las tres etapas. Página 2: doce tarjetas numéricas, incluidos duplicados. Página 3: registro y prueba con un comparador ausente. Página 4: soluciones.
- Por grupo de cuatro, una copia de las páginas 1 y 2 y dos de la página 3. A4 al 100 %, blanco y negro. Recortad las doce tarjetas y elegid cuatro para cada prueba; reservad las demás.
- Repartid los papeles de dos comparadores, coordinación de etapa y registro. Las tarjetas pueden quedar al margen de cada etapa si son más grandes que el diagrama. No hace falta caminar por el patio ni ampliar el dibujo en el suelo.

![Red de cuatro canales: primero se comparan 1–2 y 3–4, después 1–3 y 2–4, y finalmente 2–3; el ejemplo acaba ordenado.](_assets/activitats/kits/xarxa-ordenacio-exemple.webp)

## 👣 Desarrollo paso a paso

![Esquema de la actividad La red que ordena: materiales, regla y comprobación del resultado.](_assets/activitats/kits/xarxa-ordenacio-inici.webp)

### 1. Entendemos un comparador · 8 min

Poned 3 en el canal de arriba y 1 en el de abajo. Aplicad la regla: el 1 acaba arriba y el 3 abajo. Repetid con dos 2: continúan siendo dos valores, aunque no haga falta intercambiarlos. Un comparador conserva las dos tarjetas; solo decide a qué canal van.

### 2. Ejecutamos la red completa · 12 min

Introducid `3, 1, 4, 2`, de arriba abajo. En la etapa 1 comparad 1–2 y 3–4; en la 2, comparad 1–3 y 2–4; en la 3, solo 2–3. Después de cada etapa, deteneos y anotad los cuatro valores. Los canales que no participan conservan el valor. No iniciéis una etapa antes de que acabe toda la anterior.

El registro esperado es `1, 3, 2, 4` después de la primera; igual después de la segunda; y `1, 2, 3, 4` después de la tercera. Mostrad la solución solo después de comparar registros.

### 3. Probamos otras entradas · 10 min

Cambiad los papeles y probad `4, 3, 2, 1`, una entrada ya ordenada y `2, 2, 1, 1`. Antes de empezar, predecid el resultado. Comprobad que cada salida es creciente y que contiene los mismos cuatro valores. Los empates no son errores ni autorizan a eliminar una tarjeta.

### 4. Quitamos una comparación · 12 min

Tapad solo el comparador final, entre los canales 2 y 3. Reiniciad la entrada `3, 1, 4, 2`. La red incompleta acaba `1, 3, 2, 4`: los extremos están bien situados, pero el centro no. Pedid que localicen la pareja que falta comparar y lo comprueben restaurando el comparador. No basta con probar una entrada que por casualidad ya quede ordenada.

### 5. Explicamos el trabajo simultáneo · 8 min

Contad cinco comparaciones repartidas en tres etapas. En las dos primeras, cada pareja de comparadores utiliza canales diferentes y puede actuar a la vez. La etapa siguiente depende de los resultados de la anterior. Distinguid número de comparaciones y número de etapas; no afirméis que todos los pasos de la red son simultáneos.

> **💡 Precisión del modelo:** Esta red está definida para cuatro entradas. Para ordenar seis haría falta otro diagrama; añadir dos líneas no basta. El generador comprueba las 24 permutaciones de cuatro valores diferentes y 81 casos con empates.

![Sin el último comparador la salida es 1, 3, 2, 4; comparar los canales centrales repara el resultado.](_assets/activitats/kits/xarxa-ordenacio-reparacio.webp)

## ✅ Evidencias de aprendizaje

- Aplica la convención menor/arriba y mayor/abajo sin ordenar al margen del procedimiento.
- Registra cada etapa y conserva todos los valores, también en los empates.
- Muestra un contraejemplo de la red incompleta y explica la reparación.
- Distingue comparaciones totales y etapas que pueden contener trabajo simultáneo.

Recoged un registro completo y uno de la red incompleta. Una explicación sobre qué canales comparten los comparadores es más informativa que llegar rápidamente a la salida.

### Preguntas para pensar

- ¿Por qué una entrada ordenada no es una prueba suficiente de un diagrama cualquiera?
- ¿Qué comparadores podrían funcionar a la vez sin disputarse ninguna tarjeta?
- ¿Qué conservaríamos si cambiáramos la regla para ordenar de mayor a menor?

## ♿ Variantes e inclusión

**Apoyo y adaptación para Segundo ciclo:** haced primero un comparador y después la etapa de dos parejas, con números pequeños y cuatro tarjetas visibles. Una persona puede señalar qué hay que intercambiar sin manipular. **Ampliación:** explorad todas las permutaciones con cuatro valores o buscad otro ejemplo que falle sin el último comparador. Comparad la ordenación descendente invirtiendo la misma regla en todos los comparadores.
