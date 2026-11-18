---
active: true
title: "Cifras que viajan"
description: "¿Cómo podemos crear, probar y programar un cifrado de César y explicar por qué no protege información actual?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Historia, Matemáticas y Programación"
theme: "historia"
theme_label: "Mensajes y patrimonio"
duration: "4 sesiones · 200 min"
challenge: "¿Cómo podemos codificar y descodificar un mensaje con un algoritmo, y qué límites tiene el cifrado de César?"
---

![Una placa micro:bit acompaña a un disco de cifrado de papel y un mensaje doblado sin texto legible.](../../_assets/situacions/mb-xifres-que-viatgen.webp)

_Los mensajes son inventados y los cifrados históricos se estudian como algoritmos, no como protección moderna._

## 🌱 Situación e intención

El archivo imaginario de un museo local prepara una pequeña exposición sobre cómo las personas han transformado mensajes para transmitirlos. Cada equipo crea una pieza didáctica: una nota inventada, un disco de César, una explicación del algoritmo y una demostración programada. Para darle arraigo, la nota puede contener un dato cultural comprobado en una fuente pública de la localidad —un nombre, una fecha o una ubicación—, pero nunca información personal ni ningún secreto real.

La propuesta combina historia, lengua, matemáticas y programación. Está secuenciada para el tercer ciclo de primaria; la unidad oficial de micro:bit se dirige a alumnado de 11 a 14 años, de manera que aquí el contexto y el código se introducen con pasos guiados. La programación textual es una ampliación: si el grupo todavía no conoce Python, puede completar la misma lógica con pseudocódigo y tablas de seguimiento.

## 🎯 ¿Qué vamos a aprender?

- Distinguir mensaje original, regla de transformación, clave, cifrado y descifrado.

- Describir y ejecutar un algoritmo reversible, incluido el retorno de Z a A.

- Comparar el resultado manual con una traza de programa y corregir errores con pruebas.

- Explicar por qué un cifrado de César es un modelo didáctico débil y no protege datos actuales.

- Documentar la procedencia de un dato cultural público y comunicarlo sin revelar datos personales.

## 📅 Secuencia didáctica · 4 sesiones de 50 minutos

### **Sesión 1 · Una historia, muchas claves (50 min).**

#### Fase 1 · Activamos y predecimos

Ordenad cuatro tarjetas —mensaje, clave, transformación y resultado— y predecid qué necesita saber quien recibe el mensaje para recuperarlo. Plantead la pregunta de la sesión: ¿qué puede esconder una regla sencilla y qué puede revelarla?

#### Fase 2 · Exploramos y construimos

En grupos, construid una línea del tiempo breve con ejemplos documentados de comunicación secreta: un cifrado de sustitución antiguo y el trabajo de descifrado durante la Segunda Guerra Mundial. Consultad fuentes para situar a Alan Turing dentro del trabajo colectivo de Bletchley Park y reconocer las investigaciones polacas anteriores que también lo hicieron posible.

#### Fase 3 · Explicamos y registramos

Explicad con las tarjetas qué se conoce en cada etapa y qué información necesita el receptor para recuperar el texto. Anotad junto a cada hito de la línea del tiempo la fuente y una idea que hayáis verificado.

#### Fase 4 · Aplicamos y mejoramos

Comparad los ejemplos de la línea del tiempo y revisad si la secuencia confunde cifrado, descifrado y descifrado por análisis. Añadid una nota o cambiad el orden cuando la fuente indique una relación diferente.

#### Fase 5 · Comprobamos y reflexionamos

Compartid una cosa que puede esconder una regla de sustitución y una pista que podría revelar el mensaje. **Evidencia:** línea del tiempo con fuentes y ordenación justificada de mensaje, clave, transformación y resultado.

### **Sesión 2 · El disco y las convenciones (50 min).**

#### Fase 1 · Activamos y predecimos

Antes de construir el disco, decidid qué letras y signos se transformarán. Acordad para toda la secuencia: alfabeto A–Z en mayúscula; espacios, acentos, `Ç`, números y signos se conservan sin cambios.

#### Fase 2 · Exploramos y construimos

Fabricad dos círculos de cartón con las letras A–Z y marcad un desplazamiento acordado. Cifrad una frase breve inventada e intercambiadla con otro equipo, que debe descifrarla con la misma clave. En `PLAÇA`, por ejemplo, solo se transforman P, L y A; la `Ç` se mantiene.

![Disco de César de papel en una ilustración 3D, con dos círculos superpuestos, marcas de colores esquemáticas, una flecha y tiras de mensaje en blanco.](../../_assets/situacions/sa-mb-xifres-disc-caesar-v2.webp)

_Las marcas de la ilustración son esquemáticas y no se deben contar; el disco de clase se construye con las 26 posiciones A–Z acordadas._

#### Fase 3 · Explicamos y registramos

Anotad la convención junto a cada mensaje y describid los pasos que habéis seguido para cifrarlo. Registrad la clave, el texto original y el resultado para poder repetir el proceso en sentido inverso.

#### Fase 4 · Aplicamos y mejoramos

Si dos equipos obtienen resultados diferentes, comparad primero la convención y después la posición del disco. Corregid una instrucción ambigua y volved a cifrar o descifrar la misma frase para comprobar el efecto.

#### Fase 5 · Comprobamos y reflexionamos

Verificad si el otro equipo puede recuperar el mensaje con la clave y las instrucciones escritas. **Evidencia:** disco, convención explícita y mensaje inventado cifrado y descifrado.

### **Sesión 3 · De la regla al pseudocódigo (50 min).**

#### Fase 1 · Activamos y predecimos

Representad cada letra como una posición de 0 a 25. Predecid qué pasa en los casos de frontera: A con desplazamiento −1 y Z con desplazamiento +1. Recordad que el resultado debe volver al inicio del alfabeto.

#### Fase 2 · Exploramos y construimos

Escribid el pseudocódigo: para cifrar, sumad el desplazamiento y dad la vuelta al alfabeto cuando el valor supera 25; para descifrar, restadlo y dad la vuelta en sentido contrario. Rellenad una tabla de traza con letra, posición, desplazamiento y resultado. Probad desplazamientos 0, 1, 3 y 25; añadid espacios y puntuación para comprobar que quedan intactos.

#### Fase 3 · Explicamos y registramos

Intercambiad el pseudocódigo con una pareja, que lo seguirá paso a paso. Una pareja recibe una tarjeta con un error deliberado —no hacer la vuelta de Z a A— y lo detecta con un caso mínimo; anotad qué paso causa el resultado incorrecto.

#### Fase 4 · Aplicamos y mejoramos

Corregid el paso identificado y repetid la traza de los casos de frontera. Como extensión, probad todas las claves posibles sobre una frase inventada y observad cómo el contexto puede revelar el mensaje.

#### Fase 5 · Comprobamos y reflexionamos

Comparad el pseudocódigo inicial y el corregido y explicad qué prueba ha hecho visible el error. **Evidencia:** pseudocódigo, tabla de traza con casos normales y de frontera y explicación de la corrección.

### **Sesión 4 · Programar, comparar y explicar (50 min).**

#### Fase 1 · Activamos y predecimos

Elegid un mensaje breve ya cifrado con el disco y predecid el resultado del programa. Identificad los casos que se deben conservar sin cambios —espacios, acentos, `Ç`, números y signos— según la convención acordada.

#### Fase 2 · Exploramos y construimos

Escribid funciones separadas para cifrar y descifrar. El programa pasa el texto a mayúsculas, transforma solo las letras A–Z y conserva el resto; para cada letra, calcula la posición con la regla modular. La micro:bit puede ejecutar el programa, pero la matriz LED no es adecuada para mostrar frases largas: usad la consola del entorno cuando esté disponible o una traza impresa o visualizada en el ordenador.

#### Fase 3 · Explicamos y registramos

Ejecutad las mismas pruebas que en el disco y comparad, carácter por carácter, el resultado manual y el del programa. Registrad cualquier discrepancia, el caso que la ha producido y la corrección aplicada.

#### Fase 4 · Aplicamos y mejoramos

Depurad el programa a partir de una prueba fallida y volved a ejecutar los casos de retorno circular y conservación de los signos. Preparad una cartela con la clave, la convención y una prueba de reversibilidad.

#### Fase 5 · Comprobamos y reflexionamos

Presentad la cartela y explicad por qué el cifrado de César es un modelo didáctico débil, que se puede romper probando las claves y que no protege información actual. **Evidencia:** código o modelo de papel, comparación con el disco, prueba de reversibilidad y advertencia sobre los límites del método.

## 🧰 Materiales y preparación

micro:bit, ordenador con un entorno Python compatible, papel o cartulina, tijeras, encuadernador o lápiz para el centro del disco, rotuladores y tarjetas de pruebas. Preparad mensajes inventados y una plantilla con el alfabeto A–Z. Si no hay placas, ordenadores o experiencia previa con Python, las sesiones 3 y 4 se pueden completar con pseudocódigo, tabla de traza y tarjetas de papel; el objetivo conceptual sigue siendo el mismo.

Antes de empezar, comprobad que todo el grupo usa la misma convención de alfabeto y que las frases no incluyen nombres, contraseñas, ubicaciones privadas ni información identificable. Si se incorpora un dato del patrimonio local, el equipo anota su fuente pública y lo contrasta con la ficha original.

## 🧪 Evidencias y evaluación

Recoged una línea del tiempo con fuentes, el disco y la convención escrita, un ejemplo cifrado y descifrado, el pseudocódigo, una tabla de traza con casos normales y de frontera, el código o modelo de papel y la cartela final. Observad si el alumnado:

- identifica correctamente clave, mensaje y transformación;

- aplica el desplazamiento y el retorno circular sin perder caracteres que no son letras;

- usa pruebas que incluyen límites y explica qué revela cada prueba;

- compara el resultado manual con el programa y localiza un error de manera razonada;

- comunica con precisión que el método es vulnerable y cita las fuentes de los datos culturales.

Para la autoevaluación, cada alumno completa: «Mi regla es reversible porque…», «el caso que más me ha ayudado a encontrar errores es…» y «no compartiría este método para…».

## ♿ Acceso y participación

Ofreced el disco con letras grandes y contrastadas, una plantilla ya recortada, lectura en voz alta de las instrucciones y una versión digital accesible. Repartid roles rotativos —historiador/a de fuentes, operador/a del disco, verificador/a y programador/a— para que la manipulación, la lectura y la escritura de código no recaigan siempre en la misma persona. Quien necesite más apoyo puede trabajar con un desplazamiento fijo y frases cortas; quien avance con facilidad puede implementar una segunda convención o probar el ataque por fuerza bruta y explicar su coste.

## 🔒 Límites y uso responsable

El cifrado de César tiene solo 25 desplazamientos útiles y se puede romper probándolos todos o aprovechando palabras previsibles. Sirve para estudiar algoritmos, modularidad e historia; no es una protección para cuentas, mensajes reales o datos personales. Todos los textos de prueba son inventados. La muestra de patrimonio local, si la hay, es un dato ya público y se publica con su fuente, nunca asociada a una persona.

## 🔗 Unidad oficial adaptada

Esta situación adapta la unidad de micro:bit [Introduction to cryptography](https://www.microbit.org/teach/lessons/cryptography/) y sus tres lecciones: [What is cryptography?](https://www.microbit.org/teach/lessons/cryptography-what-is/), [Caesar cipher algorithms](https://www.microbit.org/teach/lessons/cryptography-caesar-cipher/) y [Ciphers and text-based programming](https://www.microbit.org/teach/lessons/cryptography-text-based-programming/). Se conservan los ejes de contexto histórico, creación y descodificación del cifrado de César, diseño y depuración de algoritmos y programación textual con Python; la secuencia, los mensajes, las pruebas y la narrativa del museo son propios. El original está pensado para 11–14 años: aquí se adapta al tercer ciclo con andamiajes, convenciones explícitas y la opción de hacer la extensión de Python de manera guiada.
