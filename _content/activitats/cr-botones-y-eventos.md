---
title: "¿Cuándo se ejecuta cada pila?"
description: "Relacionar cada evento con su pila y separar inicio, botones y salidas. Una actividad en papel, en el simulador y con Codey Rocky."
robot: codey-rocky
topic: "Descomposición"
cycle_label: "Segundo ciclo"
duration: "35–45 min"
order: 2
---

<!-- Generado por _scripts/generate-codey-activities.js desde sim/codey-activities.json. -->

## 🎯 ¿Qué vamos a aprender?

Relacionar cada evento con su pila y separar inicio, botones y salidas.

Es **una misma actividad con tres entornos**, con tres ejercicios compartidos. Se puede empezar en cualquier entorno; no es obligatorio repetirlos todos. La respuesta debe justificarse con una predicción, una traza o una observación.

## 🧰 Materiales y preparación

- [Ficha del alumnado (PDF, 2 páginas A4)](_assets/activitats/kits/cr-botons-i-esdeveniments.pdf).
- [Recopilatorio de las ocho actividades (PDF, 16 páginas A4)](_assets/activitats/kits/cr-fitxes-tres-entorns.pdf).
- [Solucionario separado del profesorado (PDF, 8 páginas A4)](_assets/activitats/kits/cr-solucions-tres-entorns.pdf).
- **Papel:** lápiz, goma y ficha. No hace falta robot ni dispositivo; las lecturas dadas son datos de la prueba.
- **Simulador:** navegador con el [simulador de Codey Rocky](/sim/index.html?robot=codey-rocky&activity=cr-botones-y-eventos&exercise=1). Cada enlace carga las piezas iniciales y el escenario del ejercicio.
- **Robot:** Codey Rocky, mBlock, cable o conexión disponible, y los materiales de la prueba. Los JSON son del simulador: en el robot se reconstruyen las mismas piezas en mBlock.

### Preparación con el robot

Si hace falta, seguid [Primeros pasos con Codey](../../tutorial/cr-primeras-pasos/index.html). Añadid Codey a mBlock, conectadlo y usad el modo Carga para las pilas de inicio.

Reproducid las pilas en mBlock. Reiniciad Codey antes de cada ejercicio y pulsad solo el botón indicado. C sirve aquí como evento programable, no como parada automática.

En las pruebas de movimiento, mantened accesible el interruptor. El botón C solo detiene los motores si le has programado esa orden.

Los valores del papel son ejemplos controlados. En el robot, anotad las lecturas reales y justificad los ajustes. Una potencia y una duración no garantizan una distancia o un ángulo exactos; no se piden equivalencias en casillas.

## 👣 Desarrollo paso a paso

### 1. Inicio y botón A

Enciende Codey. Después pulsa A. ¿Qué muestra antes y después?

![Programa inicial del ejercicio 1; las piezas corresponden al simulador.](_assets/activitats/codey/cr-botons-i-esdeveniments-1-inici.svg)

[Abre este ejercicio en el simulador](/sim/index.html?robot=codey-rocky&activity=cr-botones-y-eventos&exercise=1) · [Descarga el proyecto inicial](_assets/activitats/codey/projectes/cr-botons-i-esdeveniments-1.json)

**En papel:** escribe la predicción o dibuja las piezas que faltan antes de comprobar.

**En el simulador:** ejecuta los eventos start → A en este orden;  compara con la consigna y cambia un solo dato.

**Con el robot:** reconstruye estas piezas en mBlock y haz la misma prueba; registra las lecturas reales antes de ajustar el programa.

### 2. El botón B no se pulsa solo

Enciende Codey sin pulsar B. ¿Se enciende el LED rojo?

![Programa inicial del ejercicio 2; las piezas corresponden al simulador.](_assets/activitats/codey/cr-botons-i-esdeveniments-2-inici.svg)

[Abre este ejercicio en el simulador](/sim/index.html?robot=codey-rocky&activity=cr-botones-y-eventos&exercise=2) · [Descarga el proyecto inicial](_assets/activitats/codey/projectes/cr-botons-i-esdeveniments-2.json)

**En papel:** escribe la predicción o dibuja las piezas que faltan antes de comprobar.

**En el simulador:** pulsa Ejecuta;  compara con la consigna y cambia un solo dato.

**Con el robot:** reconstruye estas piezas en mBlock y haz la misma prueba; registra las lecturas reales antes de ajustar el programa.

### 3. El botón C

Pulsa A y después C. ¿Qué texto queda?

![Programa inicial del ejercicio 3; las piezas corresponden al simulador.](_assets/activitats/codey/cr-botons-i-esdeveniments-3-inici.svg)

[Abre este ejercicio en el simulador](/sim/index.html?robot=codey-rocky&activity=cr-botones-y-eventos&exercise=3) · [Descarga el proyecto inicial](_assets/activitats/codey/projectes/cr-botons-i-esdeveniments-3.json)

**En papel:** escribe la predicción o dibuja las piezas que faltan antes de comprobar.

**En el simulador:** ejecuta los eventos A → C en este orden;  compara con la consigna y cambia un solo dato.

**Con el robot:** reconstruye estas piezas en mBlock y haz la misma prueba; registra las lecturas reales antes de ajustar el programa.

## ✅ Evidencias de aprendizaje

- Predice o propone una solución antes de probarla.
- Explica qué pieza, lectura o condición determina el resultado.
- Compara lo que esperaba con lo que observa y justifica un cambio.

### Registro compartido

Para cada ejercicio: **entorno, predicción, resultado, dificultad, cambio probado y duda pendiente**. En el robot añadid las lecturas medidas. El criterio es el mismo en los tres entornos; la traza en papel, el programa y la observación son evidencias alternativas.

## ♿ Variantes e inclusión

Se puede responder oralmente, señalando o dibujando las piezas. En pareja, alternad quién predice y quién comprueba. Para dar apoyo, resolved una comparación antes de mirar la pila entera. Para ampliar, cambiad una entrada y explicad si se conserva el resultado.

## 🔗 Transferencia y referentes

Conexión con la situación de aprendizaje [El laboratorio de sensores de Codey Rocky](../../situacion/cr-entradas-sensores/index.html). Las fichas son práctica de piezas y razonamiento; se pueden incorporar a esa situación cuando tenga sentido.

Las piezas corresponden al subconjunto de Codey de mBlock. [Casos oficiales de Codey Rocky](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky).
