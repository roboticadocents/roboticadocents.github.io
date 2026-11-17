---
title: "El taller de mensajes César"
description: "Construid una rueda de sustitución, acordad una clave y comprobad el cifrado en los dos sentidos."
topic: "Algoritmos"
cycle_label: "Tercer ciclo"
duration: "50 min"
order: 6
image: "_assets/activitats/portades/criptografia-cesar.webp"
image_alt: "Ruedas de sustitución con marcas de colores, un sobre y una tira de símbolos."
---

![Ruedas de sustitución con marcas de colores, un sobre y una tira de símbolos.](_assets/activitats/portades/criptografia-cesar.webp)

## 🎯 ¿Qué vamos a aprender?

El taller envía mensajes ficticios sustituyendo cada letra por otra situada un número fijo de posiciones más adelante. El equipo deberá compartir una convención, cifrar, descifrar y comprobar que recupera el texto inicial. El desplazamiento es la clave del juego.

Utilizamos **A–Z, 26 letras, sin acentos ni ce cedilla**, con espacios conservados. Escribid directamente mensajes compatibles; si adaptáis texto catalán, acordad quitar los acentos y representar la ce cedilla como C, asumiendo que se pierde información ortográfica. Es una convención de este modelo, no una norma de escritura. El juego no sirve para proteger contraseñas ni mensajes reales.

## 🧰 Materiales y preparación

- [Descargad el kit de la actividad (PDF, 4 páginas)](_assets/activitats/kits/criptografia-cesar.pdf).
- Página 1: rueda exterior fija e interior móvil. Página 2: tabla de sustitución +3 para trabajar sin montaje. Página 3: mensajes y registro. Página 4: respuestas y límites.
- Por pareja, una copia de las páginas 1 y 3 o, si no queréis recortar, una de las páginas 2 y 3. Reservad la página 4. A4 al 100 %, blanco y negro; cartulina opcional.
- Si usáis la rueda, un adulto recorta y perfora los dos centros y pone un encuadernador de dos patas. Las letras interiores deben quedar visibles dentro del anillo exterior. La tabla ofrece la misma tarea sin tijeras ni encajes.

![Tabla de clave +3: A se corresponde con D, X con A y Z con C; HOLA se transforma en KROD y ZOO en CRR.](_assets/activitats/kits/criptografia-cesar-exemple.webp)

## 👣 Desarrollo paso a paso

![Esquema de la actividad El taller de mensajes César: materiales, regla y comprobación del resultado.](_assets/activitats/kits/criptografia-cesar-inici.webp)

### 1. Fijamos la convención · 8 min

Leed los dos alfabetos y acordad qué se conserva y qué se transforma. Con clave +3, A se convierte en D, y después de Z continuamos por A. Repartid funciones de cifrado y comprobación y cambiadlas en la segunda ronda. Los mensajes serán inventados, como nombres de objetos del taller.

### 2. Preparamos una herramienta ejecutable · 10 min

En la rueda, alinead **A exterior con D interior**. Para cifrar, buscad la letra original en el exterior y leed la correspondiente en el interior. Para descifrar, haced el camino inverso: entrada en el interior y respuesta en el exterior. En la tabla de +3, leed original → cifrado o cifrado → original. Comprobad HOLA → KROD antes de continuar.

### 3. Intercambiamos y verificamos · 12 min

Haced los tres casos de la página 3: cifrar ROBOT y LIBRO, y descifrar FDVD con la misma clave +3. Después inventad una frase corta y compartid la clave oralmente con la pareja. El receptor anota el mensaje recuperado; comparad con el original y revisad cada letra diferente. La clave y el sentido de lectura deben quedar registrados.

### 4. Investigamos una inversión · 10 min

Proponed que alguien intenta descifrar KROD avanzando de nuevo +3. Antes de probar, preguntad si repetir la operación deshace el primer cambio. Comprobad que para volver a HOLA hay que retroceder tres posiciones, o leer interior → exterior. Revisad también ZOO → CRR para practicar el retorno de Z a A.

### 5. Contamos los límites del juego · 10 min

¿Cuántos desplazamientos distintos podemos probar antes de repetir el alfabeto? Hay 26, incluido el cero que no cambia nada. Con un mensaje corto, varios candidatos pueden parecer posibles. Explicad por qué poder probar todas las claves es un límite del método, sin equipararlo con los sistemas actuales de protección de datos.

> **💡 Consejo docente:** Si el montaje hace perder tiempo, usad directamente la tabla: el aprendizaje es la sustitución reversible, la clave y la comprobación, no la destreza para recortar una rueda.

![Descifrar KROD exige retroceder tres posiciones; la rueda tiene 26 desplazamientos posibles y es un juego de sustitución con límites explícitos.](_assets/activitats/kits/criptografia-cesar-reparacio.webp)

## ✅ Evidencias de aprendizaje

- Aplica una clave de manera consistente, incluidas las letras finales del alfabeto.
- Descifra en el sentido inverso y recupera el mensaje normalizado inicial.
- Identifica una discrepancia causada por sentido de lectura, clave o alfabeto.
- Explica con el número de claves un límite del juego y lo diferencia de la protección de secretos reales.

Recoged original, clave, cifrado y texto recuperado de una misma prueba. Una respuesta con sentido no sustituye la comprobación letra a letra.

### Preguntas para pensar

- ¿Por qué avanzar dos veces no deshace el primer desplazamiento?
- ¿Qué necesitamos acordar si el mensaje contiene ce cedilla o acentos?
- ¿La clave cero cifra algo? ¿Cuántas claves cambian realmente las letras?

## ♿ Variantes e inclusión

**Apoyo y adaptación para Segundo ciclo:** usad la tabla ya preparada y una palabra corta con clave +3; tapad el resto del alfabeto con una ventana si hace falta. Permitid lectura y escritura compartidas. **Ampliación:** construid una tabla para otra clave y comprobad la ida y la vuelta con el mismo texto. No se pide usar este mecanismo para datos personales.
