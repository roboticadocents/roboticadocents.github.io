---
title: "El laberinto de los errores"
description: "Investigad una ruta que choca con un obstáculo, conservad el programa inicial y comprobad una reparación."
topic: "Algoritmos"
cycle_label: "Primer ciclo"
duration: "40 min"
order: 4
image: "_assets/activitats/portades/laberint-debugging.webp"
image_alt: "Tablero de laberinto con obstáculos, una ficha y tarjetas de dirección para revisar un recorrido."
---

![Tablero de laberinto con obstáculos, una ficha y tarjetas de dirección para revisar un recorrido.](_assets/activitats/portades/laberint-debugging.webp)

## 🎯 ¿Qué vamos a aprender?

El mensajero debe ir de S, en A4, hasta M, en D1. Ya tenemos un programa, pero alguna orden lo lleva a una estantería. El equipo trabaja como un taller de depuración: predice, ejecuta sin improvisar, identifica la primera orden imposible y prueba una versión revisada.

Aquí las cuatro flechas indican **direcciones fijas del papel: arriba, derecha, abajo e izquierda**. No giran ningún robot ni dependen de dónde mire una ficha. Esto permite centrarnos en el registro y la comparación de pruebas, con una mecánica diferente de la misión biblioteca.

## 🧰 Materiales y preparación

- [Descargad el kit de la actividad (PDF, 4 páginas)](_assets/activitats/kits/laberint-debugging.pdf).
- Página 1: tablero 4 × 4 con S en A4, M en D1 y obstáculos en B3 y C3. Página 2: veinte flechas recortables. Página 3: programa inicial y registro. Página 4: solución y ampliación.
- Por trío, una copia de las páginas 1 y 2 y dos de la página 3. Un botón o pieza grande como mensajero. A4 al 100 %, blanco y negro. Recortad las flechas antes de la sesión.
- Mantened el tablero orientado con A–D arriba. Las columnas se leen de izquierda a derecha y las filas del 1 al 4 de arriba abajo. Repartid programación, ejecución y registro, y rotad los papeles.

![Cuatro flechas del papel, arriba, derecha, abajo e izquierda; cada una desplaza una casilla sin representar ningún giro.](_assets/activitats/kits/laberint-debugging-exemple.webp)

## 👣 Desarrollo paso a paso

![Esquema de la actividad El laberinto de los errores: materiales, regla y comprobación del resultado.](_assets/activitats/kits/laberint-debugging-inici.webp)

### 1. Acordamos las pruebas · 6 min

Mostrad una flecha y moved la ficha una casilla. Las X son casillas prohibidas y no se pueden saltar. Si la siguiente orden entra en una X o sale del tablero, deteneos antes de mover. Nadie añade un desvío para ayudar al mensajero. Identificad inicio y meta señalándolos, sin exigir leer coordenadas.

### 2. Predecimos el programa recibido · 8 min

Preparad `arriba, derecha, arriba, derecha, derecha, arriba`. Numerad las seis tarjetas de izquierda a derecha. Sin mover la ficha, cada equipo predice si llegará, se parará o saldrá. Anotad la predicción en el registro. Una persona señala qué tarjeta se revisa en cada momento.

### 3. Probamos sin tocar las órdenes · 8 min

Reiniciad en A4. La primera orden lleva a A3; la segunda intenta entrar en B3 y obliga a parar. Anotad «orden 2, B3» y conservad intacta la secuencia inicial. Revisad primero si el movimiento ha seguido la flecha. Si la ejecución era correcta, lo que hay que cambiar es el programa.

### 4. Hacemos una reparación comprobable · 10 min

Proponed intercambiar las órdenes 2 y 3. El programa queda `arriba, arriba, derecha, derecha, derecha, arriba`. Predecid de nuevo y ejecutad desde A4: A3, A2, B2, C2, D2 y D1. Comparad las dos pruebas. No hace falta cambiar la meta ni quitar obstáculos para hacer funcionar la reparación.

### 5. Cambiamos una condición · 8 min

Rotad papeles. Poned una pieza sobre D2 como obstáculo adicional y mantened inicio y meta. El programa anterior ahora falla. Buscad una alternativa: `arriba, arriba, arriba, derecha, derecha, derecha` pasa por la fila 1. Registrad que la condición ha cambiado: un programa que funcionaba puede dejar de servir en otro tablero.

> **💡 Consejo docente:** No borréis el programa inicial. Ver las dos versiones ayuda a explicar qué ha provocado la mejora. Reiniciad siempre la ficha en el mismo punto antes de comparar dos pruebas.

![El programa inicial choca en B3; intercambiando la segunda y la tercera orden y reiniciando en A4, la ruta llega a D1.](_assets/activitats/kits/laberint-debugging-reparacio.webp)

## ✅ Evidencias de aprendizaje

- Mantiene la correspondencia entre número de orden y desplazamiento.
- Registra una orden y una casilla concretas en lugar de decir solo «no funciona».
- Conserva la versión inicial y verifica el cambio ejecutando la ruta entera.
- Explica que la validez de una ruta depende también de los obstáculos acordados.

Recoged las dos versiones y una frase sobre qué se ha mantenido igual. Valorad una revisión justificada, aunque no sea la ruta más corta.

### Preguntas para pensar

- ¿Hemos ejecutado mal una flecha o la flecha nos envía a un lugar prohibido?
- ¿Por qué volver a A4 ayuda a comparar las pruebas?
- Si cambiamos un obstáculo, ¿qué hay que volver a comprobar?

## ♿ Variantes e inclusión

**Educación Infantil:** tapad parte del tablero y proponed dos flechas sobre una fila sin obstáculos antes de introducir una X; haced predicción oral y señalando. **Acceso:** fichas grandes, tarjetas preparadas y ejecución por otra persona si hace falta. No es necesario caminar, leer ni recortar. **Ampliación:** inventad un programa con un único error y dadlo a otro equipo junto con la ruta que queríais obtener.
