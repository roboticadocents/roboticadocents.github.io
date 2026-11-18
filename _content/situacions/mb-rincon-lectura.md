---
active: true
title: "Seis proyectos para la biblioteca"
description: "¿Cómo podemos crear seis proyectos de micro:bit para una biblioteca escolar y programarlos con bloques o Python?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "llengua"
subject_label: "Lengua, Matemáticas y Tecnología"
theme: "art"
theme_label: "Lectura y creación digital"
duration: "6 sesiones"
challenge: "¿Cómo podemos combinar entradas, salidas, sensores y aleatoriedad para crear seis proyectos útiles y lúdicos para la biblioteca?"
---

![Una placa micro:bit entre libros ilustra un laboratorio de proyectos digitales para la biblioteca escolar.](../../_assets/situacions/mb-raco-lectura.webp)

_Una misma placa da lugar a seis proyectos; la ruta se puede programar con bloques o con Python._

## 🌱 Situación y intención

La biblioteca escolar abre un laboratorio de proyectos digitales para explicar qué puede hacer una micro:bit. Cada sesión resuelve un reto corto con una salida, una entrada, una estructura de control o un sensor. Los proyectos parten de la unidad oficial *First lessons with MakeCode and the micro:bit*; se puede repetir la ruta con el curso paralelo de Python. Las palabras y personajes de los ejemplos son ficticios: no se muestran nombres ni emociones reales del alumnado.

## 🎯 Aprendizajes y vocabulario

- Identificar la entrada y la salida de cada uno de los seis proyectos de biblioteca.
- Programar una insignia, una animación, un contador o un juego con secuencia, bucle, botón, sensor o aleatoriedad.
- Comparar una versión con bloques y una versión Python manteniendo el mismo objetivo y los mismos casos de prueba.
- Diseñar prototipos con contenido ficticio, sin guardar datos personales de lectores o visitantes.

## 📅 Secuencia didáctica · 6 sesiones

### **Sesión 1 · Identificador ficticio (Name badge).**

#### Fase 1 · Activamos y predecimos

Elegid una palabra inventada, una palabra común o un icono de personaje. Predecid cómo aparecerá en la matriz LED y qué puede pasar si el texto es demasiado largo.

#### Fase 2 · Exploramos y construimos

Programad el texto o el icono para comprender instrucciones, secuencia, carga del programa y matriz LED. Para la vía Python, abrid el editor y haced que la placa muestre un símbolo propio.

#### Fase 3 · Explicamos y registramos

Identificad la entrada, el proceso y la salida y anotad el comportamiento del texto y de la imagen. Guardad el programa breve o una captura impresa.

#### Fase 4 · Aplicamos y mejoramos

Comparad texto e icono y revisad el mensaje si el desplazamiento o la duración dificultan la lectura.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué información puede mostrar la placa y qué se podría comunicar mejor en una tarjeta impresa. **Evidencia:** programa de identificador ficticio y diagrama entrada-proceso-salida.

### **Sesión 2 · Animación con bucle (Beating heart).**

#### Fase 1 · Activamos y predecimos

Dibujad dos fotogramas y decidid su orden. Predecid cómo cambiará la percepción del movimiento con pausas cortas o largas.

#### Fase 2 · Exploramos y construimos

Programad dos imágenes sencillas que se alternen y usad un bucle para repetirlas. Mantened la misma secuencia visual si comparáis bloques con una versión Python.

#### Fase 3 · Explicamos y registramos

Anotad el orden, las pausas y el número de repeticiones. Comparad el guion visual con el programa ejecutado.

#### Fase 4 · Aplicamos y mejoramos

Ajustad una pausa y volved a probar. Ofreced una versión estática si los LED intermitentes no son accesibles o cómodos.

#### Fase 5 · Comprobamos y reflexionamos

Explicad cómo el bucle reduce instrucciones repetidas y si la animación mantiene el patrón previsto. **Evidencia:** dos fotogramas, programa con bucle y comparación de pausas.

### **Sesión 3 · Insignia con entrada (Emotion badge).**

#### Fase 1 · Activamos y predecimos

Diseñad dos iconos para preferencias lectoras de personajes ficticios. Predecid qué salida aparecerá al pulsar A o B; las imágenes no representan ni revelan estados emocionales de compañeros.

#### Fase 2 · Exploramos y construimos

Programad los botones A/B como entradas y la matriz LED como salida. Cread dos imágenes propias y asignad una a cada botón.

#### Fase 3 · Explicamos y registramos

Una persona probadora pulsa cada botón y comprueba el icono previsto. Registrad la entrada, la respuesta y cualquier discrepancia.

#### Fase 4 · Aplicamos y mejoramos

Revisad el icono o la asignación si las dos opciones no se distinguen lo suficiente. Volved a probar A y B en un orden distinto.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué ha activado cada imagen y por qué el programa no puede inferir emociones de nadie. **Evidencia:** dos iconos ficticios, código y tabla de pruebas de los botones.

### **Sesión 4 · Contador de recorridos (Step counter).**

#### Fase 1 · Activamos y predecimos

Dibujad una ruta corta por una maqueta de estanterías y predecid cuántos pasos de ficha hay. Explicad que el recuento describe la prueba del modelo, no la actividad de una persona.

#### Fase 2 · Exploramos y construimos

Haced la ruta con una ficha móvil y comparadla con un contador de sacudidas de la placa. Definid el algoritmo, incrementad una variable y reiniciadla entre ensayos.

#### Fase 3 · Explicamos y registramos

Comparad el recuento manual y el automático y anotad falsas detecciones o movimientos que no se han contado. Mantened el registro sin nombres.

#### Fase 4 · Aplicamos y mejoramos

Revisad una condición y repetid la ruta. Si sacudir la placa no es accesible, usad el botón, la ficha o una simulación.

#### Fase 5 · Comprobamos y reflexionamos

Describid qué cuenta y qué limitaciones tiene el modelo, sin presentarlo como un podómetro validado. **Evidencia:** algoritmo, variable, registro comparativo y errores identificados.

### **Sesión 5 · Señal que responde a la luz (Nightlight).**

#### Fase 1 · Activamos y predecimos

Predecid qué ocurrirá cuando la lectura de luz baje del umbral acordado. Recordad que la salida LED no ilumina lo suficiente para leer ni es un dispositivo de seguridad.

#### Fase 2 · Exploramos y construimos

Usad la lectura de luz disponible para encender un icono cuando el nivel baja del umbral. Colocad la placa en dos puntos de prueba de la biblioteca.

#### Fase 3 · Explicamos y registramos

Anotad el valor observado y si el icono se ha activado en cada lugar. Incluid pruebas de lectura baja, alta y de frontera.

#### Fase 4 · Aplicamos y mejoramos

Cambiad el umbral si hay falsas activaciones y volved a probar las tres condiciones. Mantened constantes los demás elementos del programa.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué indica el sensor en las condiciones probadas y qué no podemos concluir de una medida local. **Evidencia:** código condicional, tabla de tres casos y umbral revisado.

### **Sesión 6 · Juego de manos (Rock, paper, scissors).**

#### Fase 1 · Activamos y predecimos

Predecid qué opciones puede mostrar el juego y qué significa que el resultado sea aleatorio. Recordad que es una simulación lúdica, no una predicción.

#### Fase 2 · Exploramos y construimos

Usad el gesto «sacudir» o un botón para iniciar una simulación con número aleatorio, variable y selección. Asociad cada valor a una salida del juego.

#### Fase 3 · Explicamos y registramos

Probad una secuencia de casos, incluidos el valor mínimo y máximo del rango. Registrad el número, la condición y la salida resultante.

#### Fase 4 · Aplicamos y mejoramos

Revisad el algoritmo si alguna opción no tiene correspondencia o queda excluida por un límite incorrecto. Volved a probar los extremos y la asociación de cada valor.

#### Fase 5 · Comprobamos y reflexionamos

Explicad si todas las opciones pueden aparecer y qué significa justicia en esta simulación. **Evidencia:** programa, tabla de pruebas y explicación de los límites.

## 💻 Dos vías de programación

MakeCode permite construir los seis proyectos con bloques y transferirlos a la placa. La ruta Python recorre los mismos objetivos con código textual: mostrar texto/iconos, bucles de animación, lectura de botones, variables de recuento, condiciones de luz y números aleatorios. En cada sesión, el alumnado puede comparar el diagrama de bloques con una versión Python preparada por el docente o adaptada al editor vigente; la situación no sustituye los tutoriales específicos de sintaxis.

## 🧪 Evidencias y evaluación

Guardad seis programas breves o capturas impresas, el diagrama de entrada-proceso-salida, una tabla de pruebas y una revisión final de la ruta. Valorad el orden de los pasos, el uso de bucles, variables y condiciones, la depuración y si el grupo puede explicar qué limita cada proyecto.

## Guion común para los seis prototipos

En cada sesión, seguid la misma rutina: leer la tarjeta del reto, dibujar una predicción, construir o programar una primera versión, probar dos casos, anotar una diferencia y hacer una revisión. La micro:bit es el objeto de estudio; no necesita quedar permanentemente instalada en la biblioteca ni mostrar información de usuarios. Cada ficha de proyecto indica qué entrada recibe, qué proceso aplica y qué salida se observa.

### **Insignia ficticia:**

usad un nombre inventado de personaje, una palabra común o un icono. Comparad texto e imagen en la matriz LED y explicad por qué un mensaje largo puede desplazarse.

### **Animación:**

dibujad dos fotogramas, decidid su orden y comparad una animación con pausa corta y una de pausa más larga. La repetición del bucle debe corresponder con el guion visual.

### **Insignia de opciones:**

representad dos personajes ficticios con botones A y B. Una persona probadora pulsa cada botón y comprueba si aparece el icono previsto; no se infieren emociones de nadie.

### **Contador de maqueta:**

una ficha recorre un plano de estanterías y el grupo compara el recuento manual con un programa de entrada de movimiento. Registrad falsas detecciones y reiniciad la variable entre ensayos.

### **Indicador de luz:**

colocad la placa en dos puntos de prueba y ajustad un umbral local. Probad lectura baja, lectura alta y una situación de frontera; explicad que la salida no ilumina lo suficiente para leer ni certifica la iluminación.

### **Juego aleatorio:**

probad las tres opciones del juego en una secuencia de casos, incluidos el mínimo y el máximo del rango. Comprobad que la condición asocia cada número con una salida y que ninguna opción ha quedado sin correspondencia.

## Comparar MakeCode y Python sin duplicar la dificultad

Para quien ya esté preparado para código textual, mostrad un único proyecto equivalente en bloques y Python y asociad cada parte visible con la instrucción textual correspondiente. Mantened estables los objetivos de la sesión: primero la lógica y la prueba, después la sintaxis. El docente puede proporcionar un esqueleto de código para que la clase complete una línea o una condición; la situación no presupone experiencia previa en Python ni un editor concreto.

Al terminar, cada equipo elige uno de los seis prototipos y lo presenta en una tarjeta con reto, entrada, salida, dos casos probados y una limitación. La clase puede montar una pequeña exposición de proyectos con placas desconectadas o simulaciones, sin recoger datos personales de los visitantes.

## 🧰 Materiales, versiones e inclusión

BBC micro:bit, MakeCode o Python Editor, libros y tarjetas de la maqueta. Confirmad las funciones de la placa y el entorno, especialmente el sensor de luz y el acelerómetro. Si sacudir o mirar LED parpadeantes no es accesible, ofreced botón, tarjeta estática o simulación. Ninguna actividad necesita guardar datos de alumnos.

## ♿ Participación, accesibilidad y seguridad

Si sacudir la placa, mirar LED intermitentes o leer código textual no es accesible para alguna persona, ofreced una tarjeta estática, un botón o un programa de muestra equivalente. La vía Python es opcional y no condiciona el acceso a los mismos objetivos. Los prototipos de lectura usan identificadores ficticios y no guardan datos de visitantes.

## 🔗 Unidades oficiales adaptadas

La secuencia cubre los seis proyectos de micro:bit [First lessons with MakeCode and the micro:bit](https://microbit.org/teach/lessons/first-lessons-with-makecode-and-the-microbit/): *Name badge*, *Beating heart*, *Emotion badge*, *Step counter*, *Nightlight* y *Rock, paper, scissors*. La misma secuencia ofrece la vía paralela de [First lessons with Python and the micro:bit](https://microbit.org/teach/lessons/first-lessons-with-python-and-the-microbit/), que reutiliza estos seis proyectos para introducir código textual. La narrativa de biblioteca y las pruebas son propias.
