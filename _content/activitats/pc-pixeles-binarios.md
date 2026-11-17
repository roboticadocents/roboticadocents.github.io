---
title: "Píxeles: un dibujo en 25 bits"
description: "Reconstruid imágenes con ceros y unos, cread un mensaje propio y revisad las discrepancias casilla por casilla."
topic: "Abstracción"
cycle_label: "Primer ciclo"
duration: "45 min"
order: 2
image: "_assets/activitats/portades/pixels-binaris.webp"
image_alt: "Cuadrícula con una figura hecha de casillas oscuras y claras, piezas sueltas y tarjetas de código."
---

![Cuadrícula con una figura hecha de casillas oscuras y claras, piezas sueltas y tarjetas de código.](_assets/activitats/portades/pixels-binaris.webp)

## 🎯 ¿Qué vamos a aprender?

El taller de iconos ha recibido dos dibujos convertidos en números. Cada pareja debe reconstruirlos sin ver el original y después enviar uno propio. Trabajamos la representación binaria: cada casilla solo tiene dos estados y cada estado se representa con un valor.

La convención del juego es **0 = blanco y 1 = negro**. Leemos cada fila de izquierda a derecha y las cinco filas de arriba abajo. El reto es conservar toda la información y detectar diferencias, sin necesidad de ninguna pantalla. A diferencia del correo de píxeles con recuentos, aquí escribimos un valor por casilla: no agrupamos tramos.

## 🧰 Materiales y preparación

- [Descargad el kit de la actividad (PDF, 4 páginas)](_assets/activitats/kits/pixels-binaris.pdf).
- Página 1: dos códigos con cuadrículas vacías. Página 2: cuadrícula del emisor y espacios para escribir el código. Página 3: taller de reparación. Página 4: soluciones docentes.
- Por pareja, una copia de las páginas 1 y 3; una copia de la página 2 por persona. Lápiz, goma y una carpeta para ocultar el dibujo original. A4 al 100 %, en blanco y negro.
- No hace falta recortar. Para quien no quiera pintar, ofreced fichas oscuras o cuadraditos de papel negro de unos 3 cm. Preparad un espacio donde el emisor pueda tapar la parte superior de su hoja y mostrar solo las filas de código.

![Cinco valores se transforman en cinco casillas, siempre de izquierda a derecha; el código completo se lee fila a fila.](_assets/activitats/kits/pixels-binaris-exemple.webp)

## 👣 Desarrollo paso a paso

![Esquema de la actividad Píxeles: un dibujo en 25 bits: materiales, regla y comprobación del resultado.](_assets/activitats/kits/pixels-binaris-inici.webp)

### 1. Probamos una sola fila · 7 min

Mostrad `0 0 1 0 1`. Cada pareja deja dos casillas blancas, pinta la tercera, deja la cuarta blanca y pinta la quinta. Comparad antes de continuar. Señalad el inicio de fila; un mismo código no produce necesariamente el mismo resultado si lo leemos al revés.

### 2. Reconstruimos dos mensajes · 12 min

Repartid la página 1 sin mostrar las soluciones. Una persona lee y señala un valor cada vez; la otra pinta la casilla correspondiente. Cambiad los papeles para el segundo dibujo. No completéis una forma porque parezca una letra o una flecha: seguid todos los valores, aunque la primera intuición sea otra.

### 3. Ahora somos emisores · 10 min

Cada persona dibuja un icono propio de 5 × 5 en la página 2 y escribe las cinco filas de código. Comprueba que cada fila tiene cinco valores y que solo hay ceros y unos. Oculta la cuadrícula y pasa solo el código a la pareja, que lo reconstruye en una de las cuadrículas de prueba o en papel cuadriculado. No digáis el nombre del icono antes de probar.

### 4. Comparamos y reparamos · 10 min

Destapad el original y comparad casilla por casilla. Anotad la primera fila diferente y comprobad si el problema está en el código o en la lectura. La página 3 propone una fila incompleta, `1 0 0 0`: sabemos que falta un valor, pero no dónde. Pedid la fila entera, sin adivinar la posición ausente. También proponed un `1 0 0 0 0` pintado al revés y repetidlo con la convención correcta.

### 5. Explicamos qué representa el código · 6 min

Contad cinco filas de cinco valores: **25 valores binarios, es decir, 25 bits para el dibujo de nuestro modelo**. No estamos calculando el tamaño real de un archivo, que puede incluir otros datos. Cada pareja explica una reparación y vuelve a comprobar la fila afectada.

> **💡 Consejo docente:** Elegir un icono asimétrico hace visibles los errores de dirección. Un dibujo simétrico puede quedar igual cuando se invierte una fila, aunque no se haya seguido la convención.

![Una fila de cuatro valores está incompleta; se pide reenviarla entera en lugar de inventar la casilla ausente.](_assets/activitats/kits/pixels-binaris-reparacio.webp)

## ✅ Evidencias de aprendizaje

- Mantiene la correspondencia de un valor con una casilla y respeta el orden de lectura.
- Produce cinco filas completas que permiten reconstruir su dibujo.
- Localiza una discrepancia y justifica qué debe corregir o volver a pedir.

Recoged original, código y reconstrucción. Marcad un ejemplo de revisión. Valorad la correspondencia y la explicación, no la calidad del dibujo ni la rapidez al pintar.

### Preguntas para pensar

- ¿Un código con cinco valores siempre es el código correcto? ¿Cómo lo comprobamos?
- ¿Qué información falta cuando solo recibimos cuatro valores?
- ¿Por qué una imagen simétrica puede esconder un error de lectura?

## ♿ Variantes e inclusión

**Apoyo:** usad una sola fila y una ventana de papel que tape las demás. Permitid fichas, dictado y lectura compartida. El contraste es blanco/negro y no depende de distinguir colores. **Ampliación para Segundo ciclo:** comparad una cuadrícula de 5 × 5 con una de 8 × 8; contad 25 y 64 valores sin afirmar que el archivo solo ocupará esa cantidad. El trabajo con tramos repetidos queda para la actividad específica de correo de píxeles.
