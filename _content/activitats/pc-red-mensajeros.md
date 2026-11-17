---
active: true
title: "La red de mensajeros"
description: "Enviad un mensaje en paquetes por una red de mesas y reparad pérdidas, desorden y caminos cerrados."
topic: "Descomposición"
cycle_label: "Tercer ciclo"
duration: "60 min"
order: 14
image: "_assets/activitats/portades/xarxa-missatgers.webp"
image_alt: "Estaciones conectadas por caminos alternativos con paquetes de papel que forman un mensaje."
---

![Estaciones conectadas por caminos alternativos con paquetes de papel que forman un mensaje.](_assets/activitats/portades/xarxa-missatgers.webp)

## 🎯 ¿Qué vamos a aprender?

¿Cómo podemos reconstruir un mensaje si las partes llegan por caminos diferentes o en orden cambiado? Cuatro nodos de aula enviarán paquetes numerados y comprobarán qué ha llegado. Trabajamos descomposición, rutas, identificadores y un protocolo de confirmación y reenvío. Es una simulación con reglas propias, pensada para razonar; no reproduce todo el funcionamiento de Internet.

## 🧰 Materiales y preparación

- [Descargad el kit de la red (PDF, 4 páginas)](_assets/activitats/kits/xarxa-missatgers.pdf): mapa, cuatro paquetes del mensaje M1, incidencias y confirmación, registro y solución docente.
- Por red, un kit y cuatro mesas o bandejas marcadas A, B, C y D. Una copia adicional de la página 2 se queda en A para los reenvíos. Imprimid en A4 al 100 %, en blanco y negro o color.
- Recortad los paquetes y las tarjetas de incidencias; mantened la confirmación separada. Marcad las conexiones con tiras de papel sobre la mesa. En un aula grande, replicad redes de cuatro grupos; no añadáis nodos en la primera ronda.

![Mapa del kit con cuatro nodos: A conecta con B y C; B y C también conectan entre sí y con D. Hay dos rutas directas de dos saltos entre A y D.](_assets/activitats/kits/xarxa-missatgers-1.webp)

## 👣 Desarrollo paso a paso

![El mensaje se divide en cuatro paquetes, atraviesa una red con rutas alternativas y se reconstruye antes de confirmar la recepción.](_assets/activitats/kits/xarxa-missatgers-inici.webp)

### 1. Pactamos el protocolo · 10 min

A es el origen y D es el destino; B y C reenvían. Dentro de cada nodo, repartid los papeles de responsable de paquetes, registro y comprobación; se pueden combinar y rotar. Cada paquete muestra identificador M1, origen, destino, número y total. A conserva la copia original. D sabe que espera cuatro paquetes de M1, pero no el texto.

Un turno tiene tres momentos: cada nodo decide dónde enviar los paquetes que ya tiene; se resuelven los conflictos; se mueven los paquetes y se registran las llegadas. Un paquete avanza como máximo un enlace por turno. Cada enlace admite un solo paquete por turno, sumando las dos direcciones. Si dos nodos quieren usarlo a la vez, se ponen de acuerdo en quién espera; si no hay acuerdo, los dos esperan. Un paquete recién llegado espera al turno siguiente para volver a moverse.

### 2. Primera entrega sin incidencias · 12 min

A reparte los cuatro paquetes entre las rutas A-B-D y A-C-D. Registrad turno, paquete, origen del salto y destino del salto. D ordena las partes por el número, reconstruye el texto y marca los cuatro recibos en la tarjeta de confirmación. La confirmación viaja de D a A por los enlaces y ocupa turnos como cualquier otro paquete. El envío acaba cuando A recibe la confirmación completa.

![Cuatro paquetes recortables de M1, numerados del 1 al 4, con origen A, destino D y las palabras EL, ROBOT, LLEVA y LIBROS.](_assets/activitats/kits/xarxa-missatgers-2.webp)

_La numeración permite ordenar las partes. El identificador evita mezclar fragmentos de mensajes diferentes._

### 3. Un camino se cierra · 10 min

Reiniciad el mensaje y cerrad B-D con la tarjeta de incidencia. Antes de mover nada, cada nodo propone qué hará con los paquetes que tiene. Un paquete en B puede pasar por C y llegar a D; un paquete que todavía está en A puede ir por C. Contad los saltos y los turnos reales. Una ruta con menos saltos puede tener que esperar si el enlace está ocupado.

### 4. Falta una parte · 13 min

Reiniciad y aplicad solo la incidencia de paquete retenido: el docente aparta el paquete 2 después de que salga de A. Acordad un plazo de seis turnos para esta ronda, que es una regla del juego y no una garantía de entrega. Al acabar el plazo, D comprueba los números y envía la confirmación con la petición «M1: falta 2; reenvía 2». Cuando llega a A, A envía la copia del paquete 2. El docente no retiene el reenvío. D confirma cuando completa el mensaje.

### 5. Llega desordenado: ¿qué hemos aprendido? · 15 min

En una ronda breve, haced llegar el paquete 4 antes del 3. D los guarda y ordena sin pedir el reenvío de lo que ya tiene. Comparad las tres incidencias: un camino cerrado exige buscar ruta; una parte ausente exige pedirla; el orden de llegada diferente se resuelve con los números. Cada equipo propone una mejora del protocolo y la prueba con una incidencia, no con todas a la vez.

> **💡 Consejo para el aula:** No hagáis carreras ni lancéis sobres. Los mensajes se pasan entre bandejas o con un único mensajero adulto. El reto es coordinarse y justificar el protocolo, no moverse rápidamente.

## ✅ Evidencias de aprendizaje

- Elige una ruta que solo utiliza las conexiones disponibles y respeta los turnos.
- Reconstruye el mensaje por número e identifica con precisión una parte ausente.
- Pide el reenvío con identificador y número, sin adivinar el contenido.
- Distingue una pérdida, una espera y una llegada desordenada con datos del registro.

La página 4 incluye nueve filas: usad otra copia si necesitáis más saltos. Recoged un registro y una explicación breve de qué incidencia han resuelto y con qué regla.

### Preguntas para pensar

- ¿Podemos saber el contenido del paquete que falta solo con su número?
- ¿Qué pasaría si A borrara el original antes de recibir la confirmación?
- ¿Por qué necesitaríamos M1 y M2 si enviáramos dos mensajes a la vez?

## ♿ Variantes e inclusión

Haced toda la red en una mesa con bandejas; nadie tiene que caminar. Ofreced paquetes grandes, lectura compartida y un marcador de turno visible. Para empezar, usad dos paquetes y una sola ruta. Para profundizar, introducid un segundo mensaje M2 con cuatro fragmentos propios y comparad qué pasa con y sin identificadores. Mantened el límite de capacidad de los enlaces.
