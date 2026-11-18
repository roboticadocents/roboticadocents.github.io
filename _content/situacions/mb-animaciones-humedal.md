---
active: true
title: "Animaciones del humedal"
description: "¿Cómo podemos convertir la fauna y las plantas de los humedales en iconos y animaciones originales con micro:bit?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "primer-cicle"
cycle_label: "Primer ciclo"
subject: "artistica"
subject_label: "Educación Artística, Medio y Tecnología"
theme: "natura"
theme_label: "Naturaleza y expresión digital"
duration: "2 sesiones · 100 min"
challenge: "¿Cómo podemos explicar una observación de la naturaleza con un icono LED y una animación programada?"
---

![Una placa micro:bit muestra un icono de píxeles de un pájaro junto a un taumátropo de papel inspirado en el humedal.](../../_assets/situacions/mb-animacions-aiguamoll.webp)

_Los iconos son representaciones propias, no imágenes realistas ni reclamos para fauna salvaje._

## 🌱 Situación e intención

La clase prepara una microexposición digital del humedal de la Albufera. Cada equipo parte de una imagen u observación autorizada de fauna o vegetación, identifica un rasgo reconocible y lo transforma primero en un icono de 5 × 5 y después en una animación de dos fotogramas. La placa ayuda a estudiar entrada/salida, secuencia y repetición; no se lleva al humedal ni se utiliza para atraer o registrar fauna.

La unidad oficial tiene dos lecciones para alumnado de unos 7–9 años: familiarización con componentes y transferencia de programa, iconos predefinidos y diseño LED píxel a píxel; después, taumátropo, bucle continuo, bucle con contador y evaluación. Esta secuencia conserva todos estos objetivos y los sitúa en un contexto valenciano verificable.

## 🎯 Aprendizajes y vocabulario

- Abstraer un rasgo observable de una planta o animal y representarlo con un icono de 5×5 píxeles.
- Ordenar dos fotogramas para sugerir un movimiento sin afirmar que la placa reproduce el comportamiento real.
- Programar, probar y revisar una animación breve con los bloques disponibles.
- Comunicar la decisión artística y distinguir una observación propia de una inferencia sobre la especie.

## 🧰 Materiales y preparación

micro:bit física de la BBC y cable USB o simulador MakeCode, ordenador/tableta, proyector opcional, cuadrículas de 5 × 5, lápices, papel, cartulina ligera, lápices de colores, cinta y un palo de cartón o dos lazadas de papel para el taumátropo. Preparad un icono predefinido para analizar, un proyecto MakeCode inicial y tarjetas de secuencia desconectada. Elegid imágenes propias o con uso autorizado y fuentes fechadas; la información local se puede contrastar con la [guía pública de la Albufera](https://parquesnaturales.gva.es/documents/80302883/168872077/RUTA%2B1%2B-%2B%2BVOLTA%2BA%2BL%27ALBUFERA%2BEN%2BBICICLETA.pdf/efb00d45-964e-4115-a8fe-6e30bb45508c). Si la identificación de una especie no está verificada, describidla como «ave observada» o «planta del humedal» y no le asignéis un nombre científico.

Antes de empezar, comprobad el proceso de transferencia USB del centro. La versión física y el simulador son alternativas para el mismo programa; anotad cuál se ha utilizado, porque la transferencia al dispositivo también es un objetivo de la primera lección.

## 📅 Secuencia didáctica · dos sesiones de 50 minutos

### **Sesión 1 · De la placa y el programa a un icono propio (50 min).**

#### Fase 1 · Activamos y predecimos

**Exploramos componentes (8 min).** Localizad la matriz LED, los botones A/B, los pines, el conector USB y el control de reinicio; asociad cada componente a una función de entrada, salida o conexión sin desmontar la placa. **Predicción (8 min).** Ordenad tarjetas «inicio, mostrar icono, pausa, mostrar otra imagen» y haced que una pareja ejecute las órdenes como si fuera el dispositivo. Predecid qué pasa si se cambia el orden.

#### Fase 2 · Exploramos y construimos

**Transferimos un programa (8 min).** Abrid un ejemplo en MakeCode, ejecutadlo en el simulador y, si hay placa, descargadlo y transferidlo por USB. Comparad lo que se ve en ambos casos y registrad cualquier diferencia. **Analizamos y creamos (18 min).** Mirad un icono integrado y determinad qué celdas enciende; en una cuadrícula de 5 × 5, cread una representación de un rasgo —pico, ala, hoja o tallo— con un máximo de 25 píxeles. Pasad la cuadrícula a bloques LED individuales y preved el resultado antes de ejecutar.

#### Fase 3 · Explicamos y registramos

Anotad las funciones de los componentes, el orden elegido y la predicción del icono. Guardad la cuadrícula y el programa transferido o simulado para que se pueda comparar el diseño con la salida.

#### Fase 4 · Aplicamos y mejoramos

Una pareja intenta identificar el rasgo representado y propone un píxel que se podría quitar o mover. El equipo modifica el icono solo si puede explicar cómo el cambio ayuda a conservar el rasgo.

#### Fase 5 · Comprobamos y reflexionamos

Comparad la predicción con la matriz y valorad si el público ha reconocido el rasgo. **Evidencia:** esquema de los componentes, secuencia en tarjetas, programa transferido o simulado, icono y revisión basada en la interpretación del público.

### **Sesión 2 · Dos fotogramas, un movimiento sugerido (50 min).**

#### Fase 1 · Activamos y predecimos

**Construimos y predecimos (10 min).** Dibujad en las dos caras de un disco de cartulina una figura y un cambio pequeño —por ejemplo, un ave quieta y el ave con el ala en otra posición—. Alinead el centro de las imágenes antes de pegar el palo o las asas de papel; probad el giro lentamente y anotad cuándo cuesta leer el cambio.

![Placa micro:bit real de la dotación, dos cuadrículas de 5 × 5 con un ave en dos fotogramas y un taumátropo de papel con una escena del humedal.](../../_assets/situacions/sa-mb-animacions-taumatrop-v2.webp)

_La placa y las cuadrículas representan la animación LED; el taumátropo es una manualidad de papel separada, no un accesorio electrónico._

#### Fase 2 · Exploramos y construimos

**Storyboard LED (8 min).** Representad los dos fotogramas en dos cuadrículas de 5 × 5, numerándolos y describiendo qué cambia; otra persona comprueba que la diferencia sea legible. **Animación continua (12 min).** Programad fotograma 1, pausa, fotograma 2 y pausa dentro de un bucle continuo. Ejecutadlo en el simulador o en la placa, cambiad solo el tiempo de pausa y comparad si aún se perciben los dos dibujos. El objetivo es hacer comprensible la secuencia, no buscar el parpadeo más rápido. **Animación contada (10 min).** Repetid la pareja de fotogramas un número fijo de vueltas con un bucle con contador; después, limpiad la matriz o mostrad un icono final y distinguid este comportamiento del bucle infinito.

#### Fase 3 · Explicamos y registramos

Registrad el orden de los fotogramas, el valor de pausa y el número de repeticiones. Pedid a otro equipo que describa qué ha cambiado y anotad una propuesta concreta de mejora.

#### Fase 4 · Aplicamos y mejoramos

Revisad una cuadrícula o el tiempo de pausa a partir del retorno. Volved a ejecutar tanto el bucle continuo como el contado para comprobar que la modificación no ha alterado el número de imágenes ni el final previsto.

#### Fase 5 · Comprobamos y reflexionamos

Comparad las representaciones en papel y LED y registrad qué versión explica mejor el movimiento y por qué. **Evidencia:** taumátropo, storyboard, dos programas (continuo y contado), comparación de ritmos y una mejora probada.

## 📋 Criterios de éxito y evidencias

Archivad el diagrama anotado de la placa, el orden de instrucciones, el nombre del archivo MakeCode, las dos cuadrículas, la transferencia o captura del simulador, el código con `forever` y el bucle con contador y las notas de coevaluación. Comprobad si el alumnado (1) relaciona partes físicas con sus funciones; (2) predice y ejecuta una secuencia de salidas LED; (3) diferencia repetición continua y repetición limitada; (4) conserva un rasgo visual con pocos píxeles; y (5) propone y prueba una mejora. El icono no se evalúa como identificación científica de una especie: se evalúan decisiones de diseño y explicación.

## ♿ Acceso visual y confort sensorial

Permitid participar con versión estática, simulador, cuadrícula impresa, dictado de píxeles o rol de narración/observación. Avisad antes de cada animación, ofreced no mirarla y no utilicéis ráfagas rápidas ni destellos; la persona docente puede mostrar fotogramas estáticos en lugar de reproducir el bucle. Usad iconos grandes, alto contraste y apoyo oral para describir qué celdas cambian. Para dificultades motoras, las tarjetas de 5 × 5 sustituyen la manipulación de bloques pequeños sin quitar el análisis del algoritmo.

## 🔗 Unidad oficial adaptada

[Barefoot · Wildlife animations](https://microbit.org/teach/lessons/barefoot-wildlife-animations/) contiene dos lecciones: la primera trata componentes, secuenciación en MakeCode, transferencia, iconos predefinidos e imágenes hechas con LED individuales; la segunda crea un taumátropo, programa una animación con bucle *forever*, hace otra con repetición con contador y pide evaluar y sugerir mejoras. La ficha mantiene esta cobertura y crea iconos, storyboard y relato propios del humedal. La fuente oficial dice que el uso de placa física es preferible pero admite simulador; aquí ambos itinerarios se declaran y se registran.
