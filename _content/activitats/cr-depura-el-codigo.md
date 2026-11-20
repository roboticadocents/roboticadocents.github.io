---
title: "Encuentra y corrige el error"
description: "Localizar la orden que contradice la consigna y justificar una corrección concreta. Una actividad en papel, en el simulador y con Codey Rocky."
robot: codey-rocky
topic: "Algoritmos"
cycle_label: "Segundo ciclo"
duration: "35–45 min"
order: 4
---

<!-- Generado por _scripts/generate-codey-activities.js desde sim/codey-activities.json. -->

## 🎯 ¿Qué vamos a aprender?

Localizar la orden que contradice la consigna y justificar una corrección concreta.

Es **una misma actividad con tres entornos**, con tres ejercicios compartidos. Se puede empezar en cualquier entorno; no es obligatorio repetirlos todos. La respuesta debe justificarse con una predicción, una traza o una observación.

## 🧰 Materiales y preparación

- [Ficha del alumnado (PDF, 2 páginas A4)](_assets/activitats/kits/cr-depura-el-codi.pdf).
- [Recopilatorio de las ocho actividades (PDF, 16 páginas A4)](_assets/activitats/kits/cr-fitxes-tres-entorns.pdf).
- [Solucionario separado del profesorado (PDF, 8 páginas A4)](_assets/activitats/kits/cr-solucions-tres-entorns.pdf).
- **Papel:** lápiz, goma y ficha. No hace falta robot ni dispositivo; las lecturas dadas son datos de la prueba.
- **Simulador:** navegador con el [simulador de Codey Rocky](/sim/index.html?robot=codey-rocky&activity=cr-depura-el-codigo&exercise=1). Cada enlace carga las piezas iniciales y el escenario del ejercicio.
- **Robot:** Codey Rocky, mBlock, cable o conexión disponible, y los materiales de la prueba. Los JSON son del simulador: en el robot se reconstruyen las mismas piezas en mBlock.

### Preparación con el robot

Si hace falta, seguid [Primeros pasos con Codey](../../tutorial/cr-primeras-pasos/index.html). Añadid Codey a mBlock, conectadlo y usad el modo Carga para las pilas de inicio.

En los retos de luz y color, anotad las lecturas reales antes de probar. Para el movimiento, usad una superficie libre y un objeto ancho; empezad con potencia baja y mantened a mano la parada.

En las pruebas de movimiento, mantened accesible el interruptor. El botón C solo detiene los motores si le has programado esa orden.

Los valores del papel son ejemplos controlados. En el robot, anotad las lecturas reales y justificad los ajustes. Una potencia y una duración no garantizan una distancia o un ángulo exactos; no se piden equivalencias en casillas.

## 👣 Desarrollo paso a paso

### 1. La comparación al revés

Debe mostrar OSCURO si la luz es menor que 40. La lectura es 20. Repara la condición.

![Programa inicial del ejercicio 1; las piezas corresponden al simulador.](_assets/activitats/codey/cr-depura-el-codi-1-inici.svg)

[Abre este ejercicio en el simulador](/sim/index.html?robot=codey-rocky&activity=cr-depura-el-codigo&exercise=1) · [Descarga el proyecto inicial](_assets/activitats/codey/projectes/cr-depura-el-codi-1.json)

**En papel:** escribe la predicción o dibuja las piezas que faltan antes de comprobar.

**En el simulador:** pulsa Ejecuta;  compara con la consigna y cambia un solo dato.

**Con el robot:** reconstruye estas piezas en mBlock y haz la misma prueba; registra las lecturas reales antes de ajustar el programa.

### 2. El color equivocado

Debe mostrar ROJO al detectar rojo. El sensor está sobre una superficie roja. Repara el desplegable.

![Programa inicial del ejercicio 2; las piezas corresponden al simulador.](_assets/activitats/codey/cr-depura-el-codi-2-inici.svg)

[Abre este ejercicio en el simulador](/sim/index.html?robot=codey-rocky&activity=cr-depura-el-codigo&exercise=2) · [Descarga el proyecto inicial](_assets/activitats/codey/projectes/cr-depura-el-codi-2.json)

**En papel:** escribe la predicción o dibuja las piezas que faltan antes de comprobar.

**En el simulador:** pulsa Ejecuta;  compara con la consigna y cambia un solo dato.

**Con el robot:** reconstruye estas piezas en mBlock y haz la misma prueba; registra las lecturas reales antes de ajustar el programa.

### 3. Hasta que, no mientras

Debe avanzar hasta que el IR supere 60 y detenerse. La lectura inicial es baja. Repara el comparador.

![Programa inicial del ejercicio 3; las piezas corresponden al simulador.](_assets/activitats/codey/cr-depura-el-codi-3-inici.svg)

[Abre este ejercicio en el simulador](/sim/index.html?robot=codey-rocky&activity=cr-depura-el-codigo&exercise=3) · [Descarga el proyecto inicial](_assets/activitats/codey/projectes/cr-depura-el-codi-3.json)

**En papel:** escribe la predicción o dibuja las piezas que faltan antes de comprobar.

**En el simulador:** pulsa Ejecuta; deja tiempo para observar el bucle; compara con la consigna y cambia un solo dato.

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

Conexión con la situación de aprendizaje [El mapa de luz del aula](../../situacion/cr-luz-aula/index.html). Las fichas son práctica de piezas y razonamiento; se pueden incorporar a esa situación cuando tenga sentido.

Las piezas corresponden al subconjunto de Codey de mBlock. [Casos oficiales de Codey Rocky](https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky).
