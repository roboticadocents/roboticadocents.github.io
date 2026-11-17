---
active: true
title: "El correo secreto de píxeles"
description: "Enviad dibujos con recuentos de casillas consecutivas y descubrid qué permite detectar un error."
topic: "Patrones"
cycle_label: "Segundo ciclo"
duration: "55 min"
order: 13
image: "_assets/activitats/portades/correu-pixels.webp"
image_alt: "Dos cuadrículas de píxeles, un sobre y una tira de código para enviar y reconstruir un dibujo."
---

![Dos cuadrículas de píxeles, un sobre y una tira de código para enviar y reconstruir un dibujo.](_assets/activitats/portades/correu-pixels.webp)

## 🎯 ¿Qué vamos a aprender?

Un equipo dibuja un icono y otro debe reconstruirlo recibiendo solo números. En lugar de enviar un 0 o un 1 por casilla, contaremos tramos consecutivos de blanco y negro. Trabajamos una convención compartida de codificación, patrones y comprobación de errores. Esta propuesta amplía el trabajo con píxeles: el reto es describir tramos y distinguir un código posible de un código correcto.

## 🧰 Materiales y preparación

- [Descargad el kit del correo de píxeles (PDF, 4 páginas)](_assets/activitats/kits/correu-pixels.pdf): ejemplo resuelto, cuadrícula del emisor, mensaje con cuadrícula del receptor y taller de reparación con respuestas docentes.
- Por pareja, una página 2 y una página 3; después otra copia para cambiar los papeles. Lápiz y goma o cinco fichas negras por fila.
- A4 al 100 %, blanco y negro. El docente recorta la página 3 por la línea: el emisor recibe la mitad superior y el receptor la inferior. Reservad la página 4 hasta la conversación final.

![Ejemplo resuelto de una flecha de cinco por cinco: cada fila aparece junto a su código de recuentos; la fila totalmente negra se codifica 0, 5.](_assets/activitats/kits/correu-pixels-1.webp)

## 👣 Desarrollo paso a paso

![Una flecha dibujada se transforma en cinco filas de recuentos y se reconstruye en otra cuadrícula siguiendo el mismo código.](_assets/activitats/kits/correu-pixels-inici.webp)

### 1. Acordamos cómo se lee · 10 min

Leed cada fila de izquierda a derecha y las filas de arriba abajo. Cada fila tiene cinco casillas. Escribimos primero el número de blancas iniciales, después negras, después blancas y así sucesivamente hasta el final. Si la fila empieza en negro, escribimos un 0 inicial. No añadimos ceros al final.

Una fila blanco, blanco, negro, blanco, blanco es `2, 1, 2`. Una fila de cinco negras es `0, 5`; una fila de cinco blancas es `5`. Los recuentos de cada fila deben sumar cinco. Reconstruid colectivamente la flecha de la página 1 antes de crear ningún mensaje.

### 2. Dibujamos y codificamos · 12 min

Una persona crea un icono propio en la cuadrícula de la página 2. Lo mantiene escondido y escribe los recuentos en las cinco líneas de la mitad superior de la página 3. Comprueba cada suma y separa bien las filas. Envía solo esta tira de código; el nombre del icono no es una pista para el receptor.

![Hoja de intercambio del kit con cinco líneas numeradas para el código y, separada por una línea de corte, una cuadrícula vacía para el receptor.](_assets/activitats/kits/correu-pixels-2.webp)

### 3. Reconstruimos sin adivinar · 10 min

El receptor pinta su cuadrícula siguiendo los recuentos, aunque el dibujo no parezca el que esperaba. Si una fila no suma cinco o presenta una cantidad imposible, la marca y pide revisarla. Acabada la descodificación, comparad con el original casilla por casilla y corregid el código o la lectura según el origen de la discrepancia.

### 4. Un error que se ve y otro que se esconde · 10 min

Proponed los casos de la página 4. `2, 2` suma cuatro: sabemos que falta información, pero no dónde. `1, 3, 1` suma cinco y es un código válido, pero podría sustituir por error `2, 1, 2`. Por tanto, sumar cinco es una comprobación necesaria que no detecta todos los equívocos. Ante una duda, el receptor pide que se reenvíe la fila; no inventa casillas.

### 5. Cambiamos los papeles y comparamos · 13 min

Haced un segundo intercambio con un icono nuevo. Elegid una fila y escribidla tanto con cinco valores binarios como con recuentos. Contad cuántos números habéis escrito en cada caso. Una fila negra pasa de cinco valores a dos; una fila alternada puede necesitar cinco o seis, si empieza en negro. No todos los patrones se acortan.

> **💡 Precisión del modelo:** Contamos números sobre papel. Esto no equivale a calcular bits, bytes ni el tamaño real de un archivo. La simulación ayuda a entender por qué agrupar repeticiones puede ahorrar descripción.

## ✅ Evidencias de aprendizaje

- Codifica y reconstruye cinco filas respetando la convención y el cero inicial cuando hace falta.
- Detecta una suma incorrecta y pide una revisión concreta.
- Explica con un ejemplo por qué una suma correcta no garantiza que la imagen sea la misma.

Conservad original, tira de código y reconstrucción. Pedid que rodeen una fila revisada y anoten qué han reparado.

### Preguntas para pensar

- ¿Por qué `5` y `0, 5` representan filas opuestas?
- ¿Podríamos entender el mensaje si no acordáramos el orden de los colores?
- ¿Qué tipo de fila necesita más recuentos? ¿Y cuál menos?

## ♿ Variantes e inclusión

Usad fichas oscuras y casillas vacías en lugar de pintar. Ofreced una ventana de papel que deje visible una sola fila y una cuadrícula ampliada. Un compañero puede escribir los recuentos dictados. Para empezar, haced solo tres filas de cinco casillas; para profundizar, pasad a ocho casillas y comparad patrones sin cambiar la convención.
