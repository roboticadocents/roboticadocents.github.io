---
title: "El robot humano: misión biblioteca"
description: "Preparad un programa para entregar un libro, distinguid girar de avanzar y reparad una orden con una nueva prueba."
topic: "Algoritmos"
cycle_label: "Primer ciclo"
duration: "45 min"
order: 1
image: "_assets/activitats/portades/robot-huma.webp"
image_alt: "Ficha de robot, tablero con obstáculos, libro y tarjetas de flechas para preparar una entrega."
---

![Ficha de robot, tablero con obstáculos, libro y tarjetas de flechas para preparar una entrega.](_assets/activitats/portades/robot-huma.webp)

## 🎯 ¿Qué vamos a aprender?

La biblioteca espera un libro en la casilla C1. El robot empieza en A3 y hay una estantería que bloquea B2. El equipo debe preparar un programa que permita entregarlo sin atravesar la estantería ni salir del tablero. Una persona interpreta al robot moviendo una ficha y ejecuta las órdenes acordadas, sin añadir pasos que ayuden a llegar.

Trabajaremos secuencias, orientación y depuración: **girar cambia hacia dónde mira el robot, pero no lo desplaza de casilla**. Antes de probar, predeciremos el resultado; si no coincide, buscaremos la primera discrepancia y comprobaremos una reparación. La propuesta principal es para Primer ciclo; al final hay una adaptación para Educación Infantil.

## 🧰 Materiales y preparación

- [Descargad el kit del robot humano (PDF, 5 páginas)](_assets/activitats/kits/robot-huma.pdf): tablero, doce órdenes recortables, fichas y tres misiones, hoja de programa y guía docente con soluciones.
- Por grupo de tres: una copia de las páginas 1, 2 y 3, y una copia de la página 4 por ronda que queráis registrar. Reservad la página 5 para el docente. Imprimid en A4 al 100 %; el color no es necesario.
- Lápiz y un rotulador pequeño para señalar la orden que se está ejecutando. Recortad las doce órdenes de la página 2 y los dos robots y las dos metas de la página 3 antes de empezar. Las tarjetas de misión pueden quedar en la hoja.

### Tablero, inicio y papeles del equipo

Las columnas son A, B y C de izquierda a derecha; las filas son 1, 2 y 3 de arriba abajo. La primera misión empieza en **A3, mirando hacia la fila 1**, y termina en **C1**, donde está el libro. B2 está bloqueada en todas las misiones. Colocad la ficha encima del robot dibujado: la punta negra marca el frente. Poned la meta móvil sobre el libro de C1; en otras misiones, trasladadla e ignorad el libro impreso.

Repartid tres papeles y cambiadlos en cada ronda: **programación** ordena las instrucciones, **ejecución** mueve la ficha y **comprobación** señala la orden actual y contrasta el movimiento con el programa. Todo el mundo participa en la predicción y la revisión. En parejas, combinad ejecución y comprobación.

### Tres órdenes y una regla de parada

- **A / Avanzar 1:** una casilla en la dirección hacia donde mira la punta del robot.
- **D / Girar a la derecha:** un cuarto de vuelta a la derecha del robot, sin cambiar de casilla.
- **E / Girar a la izquierda:** un cuarto de vuelta a la izquierda del robot, sin cambiar de casilla.

Cada tarjeta se ejecuta una vez, de izquierda a derecha. No hay diagonales ni saltos. Si la siguiente orden obliga a salir de la cuadrícula o entrar en B2, **deteneos antes de mover**, marcad esa orden y revisad el programa. Acabar encima del libro es suficiente; esta misión no exige una orientación final concreta.

![Comparación de las tres órdenes: avanzar cambia de casilla y conserva la orientación; girar a la derecha o a la izquierda conserva la casilla y cambia la orientación de la ficha.](_assets/activitats/kits/robot-huma-ordres.webp)

_Las flechas rectas son órdenes de avanzar respecto al robot, no una orden de subir siempre en el papel. Las flechas curvas indican giros sobre la misma casilla._

## 👣 Desarrollo paso a paso

![Tres momentos de la misión biblioteca: planificar una ruta en una cuadrícula de tres por tres, ordenar cinco instrucciones y comprobar el recorrido hasta el libro.](_assets/activitats/kits/robot-huma-inici.webp)

### 1. Entendemos el reto y probamos las órdenes · 8 min

Presentad el libro que hay que entregar. Antes de dar tarjetas, decid «ve al libro» y preguntad qué falta concretar para hacer el recorrido paso a paso. Mostrad las tres órdenes y modeladlas en una casilla libre.

Poned el robot mirando hacia la fila 1: ejecutad D y después A. El giro lo deja en la misma casilla y el avance lo lleva hacia la columna siguiente. Repetid con el robot mirando hacia la fila 3: ahora su derecha apunta al otro lado del papel. Dejad que el grupo gire el tablero o se ponga detrás de la ficha para entender el punto de vista.

### 2. Planificamos sin mover la ficha · 10 min

Preparad la misión 1: A3 mirando hacia la fila 1, meta C1 y B2 bloqueada. Cada equipo compone un programa con las tarjetas disponibles; las órdenes que sobran quedan fuera. Se pueden poner en una fila encima de la mesa o escribir como A, D y E en los espacios de la hoja de registro. No hace falta rellenar los ocho espacios.

Antes de tocar la ficha, la persona que comprueba repasa mentalmente la secuencia y explica dónde cree que acabará. Anotad o señalad la casilla y hacia dónde mirará. En esta primera ronda, el objetivo es obtener una ruta ejecutable, no encontrar la más corta.

### 3. Ejecutamos y comparamos con la predicción · 10 min

La persona ejecutora pone la ficha en la posición inicial. La persona que comprueba señala una tarjeta, se hace solo esa acción y después se pasa a la siguiente. No se mueven las tarjetas durante la prueba. Si aparece una orden imposible, se aplica la regla de parada.

Al acabar o parar, comparad con la predicción. Si no coincide, distinguid dos posibilidades: el movimiento no ha seguido la tarjeta, o el programa no describía la ruta prevista. En el primer caso, volved a ejecutar correctamente; en el segundo, revisad las órdenes. Para comprobar cualquier cambio, volved siempre a la misma casilla y orientación iniciales.

### 4. Taller de reparación: un giro cambiado · 10 min

Proponed a todos los grupos el programa **A, A, E, A, A** para la misión 1. Primero haced una predicción y después probadlo. Tras las dos primeras órdenes, el robot está en A1; la tercera lo deja mirando fuera del tablero. La cuarta orden no se puede ejecutar. Preguntad: «¿La orden en la que nos paramos es necesariamente la que tenemos que cambiar?».

La reparación es sustituir la **tercera orden, E, por D**. Reiniciad en A3 mirando hacia la fila 1 y ejecutad A, A, D, A, A. El robot llega a C1. Registrad qué se ha cambiado y por qué. No se trata de memorizar la solución: hay que relacionar el giro con la dirección del movimiento siguiente.

![Programa con un error y su reparación: A, A, E, A, A intenta salir del tablero; cambiando solo la tercera orden por D y reiniciando, llega a C1.](_assets/activitats/kits/robot-huma-reparacio.webp)

_La orden imposible es la cuarta, pero el error del programa está en el giro anterior. La reparación se valida repitiendo la prueba con el mismo inicio._

### 5. Cambiamos los papeles y transferimos · 7 min

Rotad los papeles y haced la misión 2: A3 mirando hacia la fila 1, con meta en C3. Cada equipo prepara un programa nuevo y lo prueba. Una solución es D, A, A. Pedid que expliquen por qué reutilizar sin cambios el programa de la primera misión no resuelve esta entrega.

Cerrad con una frase de cada equipo: «Hemos cambiado ___ porque ___, y lo hemos comprobado ___». La misión 3 queda como ampliación o segunda sesión: empieza en C1 mirando hacia la fila 3 y acaba en A1. El kit incluye una ruta posible de ocho órdenes.

> **💡 Consejo para el aula:** El nombre «robot humano» describe un papel dentro del juego. La persona no debe adivinar la intención del programa ni hacerlo funcionar a escondidas. El docente puede ayudar a leer las tarjetas manteniendo las mismas reglas.

## ✅ Evidencias de aprendizaje

- Identifica la casilla inicial y la orientación antes de empezar.
- Distingue un giro de un desplazamiento y ejecuta una acción por tarjeta.
- Hace una predicción y la compara con el resultado observado.
- Relaciona una discrepancia con una instrucción, propone una reparación y la vuelve a probar.

Recoged el programa inicial y el revisado en la hoja de la página 4. En cada criterio, anotad **con ayuda**, **de manera autónoma** o **aún no observado**, sin confundir dificultades de lectura o de motricidad con la comprensión de las instrucciones. Una explicación oral o señalando es una evidencia válida. En la misión 2, observad especialmente si transfieren la diferencia entre girar y avanzar.

### Preguntas para pensar

- Si el robot mira hacia nosotros, ¿dónde está su derecha?
- Después de girar, ¿ha cambiado su casilla o solo hacia dónde mira?
- ¿Por qué nos paramos en la cuarta orden si tenemos que corregir la tercera?
- ¿Qué pasaría si probáramos la reparación desde una orientación diferente?

## ♿ Variantes e inclusión

**Educación Infantil:** empezad con solo la columna A, sin giros. Situad el robot en A3 mirando hacia la fila 1 y la meta en A1. Preparad dos tarjetas A y anticipad con gestos dónde llegará. Después de dos pruebas, introducid un solo giro en una demostración guiada. Dividid el trabajo en dos momentos de 15 minutos y no exijáis registrar por escrito ni reconocer las coordenadas: el docente las señala.

**Acceso y participación:** ofreced fichas ya recortadas, una cuadrícula ampliada, lectura compartida y respuesta señalando o dictando. Las órdenes combinan símbolo y texto y no dependen del color. Quien no pueda mover la ficha puede indicar cada acción para que la haga otra persona. Todo el juego se puede hacer sentado en una mesa.

**Con el cuerpo:** si queréis representar el robot caminando, reproducid el mismo tablero con cinta de pintor en un espacio libre, con casillas lo bastante grandes para girar sin chocar. La persona camina mirando el recorrido, sin ojos tapados, y el grupo se detiene entre órdenes. Es una variante opcional; no añade ningún requisito de aprendizaje.

**Profundización:** haced la misión 3 o comparad dos rutas válidas para una misma entrega. Contad avances y giros por separado. Si decidís buscar un programa más corto, acordad antes que cada tarjeta cuenta como una orden; llegar es el criterio inicial y optimizar es un reto posterior.
