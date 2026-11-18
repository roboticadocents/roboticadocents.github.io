---
active: true
title: "El rastro del corral"
description: "Una ruta creada por el aula ayuda a Tale-Bot a encontrar tarjetas de animales y a practicar instrucciones de movimiento hacia delante."
robot: "tale-bot"
robot_label: "Tale-Bot Pro"
cycle: "infantil"
cycle_label: "Educación Infantil"
subject: "pensament-computacional"
subject_label: "Descubrimiento del entorno y Pensamiento Computacional"
theme: "entorn"
theme_label: "Animales y entorno"
duration: "3 sesiones"
challenge: "¿Cómo podemos preparar un mapa con filas, columnas y una orientación inicial para que Tale-Bot encuentre cinco animales con órdenes hacia delante que podamos contar y comprobar?"
official_source: "https://matatalab.com/zh-hans/node/829"
---

![Tale-Bot Pro de la dotación comienza una ruta en una cuadrícula con cinco tarjetas de destino: oveja, gallina, caballo, vaca y pato.](../../_assets/situacions/tb-rastre-corral.webp)

_El mapa y las cinco tarjetas de animales son materiales propios; Tale-Bot conserva el diseño del robot real._

## ❓ Reto e intención

**Situación:** Un aula prepara un mapa de un corral o de un paisaje agrario valenciano para que Tale-Bot visite cinco animales. El mapa, las imágenes y las tarjetas son originales; la clase practica la misma idea central de la lección pública: preparar un mapa y completar en él un reto con órdenes hacia delante.

**Pregunta guía:** ¿Cuántas órdenes hacia delante necesita el robot para llegar a cada animal, y cómo podemos comprobar que el programa es correcto?

## 🎯 Aprendizajes y vocabulario

- Orientarse en una cuadrícula con filas, columnas y un punto inicial acordado.
- Programar rutas a cinco destinos con órdenes hacia delante que se puedan contar.
- Comparar predicción y trayecto y corregir una instrucción concreta cuando no coinciden.
- Explicar las decisiones con un mapa de papel sin atribuir al robot la capacidad de identificar animales.

## Antes de empezar

**Materiales:** Tale-Bot, cuadrícula plana en blanco, tarjetas propias de flechas, cinco imágenes grandes de animales, fichas adhesivas o marcadores reposicionables y una marca de inicio orientada. Las tarjetas propias hacen la función de las tarjetas de mando y los adhesivos del material oficial, sin reutilizar sus elementos gráficos.

Comprobad la distancia de movimiento en el Tale-Bot disponible: el valor predeterminado es de unos 10 cm y algunos modelos permiten configurar 15 cm. Consultad [Primeros pasos con Tale-Bot Pro](../../tutorial/index.html?id=tb-primeras-pasos) antes de definir la cuadrícula. Para practicar solo órdenes hacia delante, poned las metas en el corredor delante del robot y reorientadlo al reiniciar cada reto.

## 📅 Secuencia didáctica · 3 sesiones

### **Sesión 1 · Diseñamos y leemos el mapa.**

#### Fase 1 · Activamos y predecimos

Explorad qué representa el mapa y predecid cómo se puede indicar un destino sin tapar las casillas.

#### Fase 2 · Exploramos y construimos

Observad qué indican las tarjetas de flechas y cómo se pueden mover las fichas adhesivas sin cubrir el recorrido.

#### Fase 3 · Explicamos y registramos

Marcad filas y columnas con letras, números u otro código visual. Practicad describir una posición y contad las casillas.

#### Fase 4 · Aplicamos y mejoramos

Colocad cinco animales y una marca de inicio orientada. Si elegís fauna valenciana, contrastad los nombres con una fuente local fiable. Volved a colocar el mapa igual después de cada ronda.

![Tale-Bot Pro real junto a una cuadrícula en blanco, tarjetas originales de animales y flechas de papel para preparar el mapa del aula.](../../_assets/situacions/sa-tb-rastre-corral-mapa-aula-v1.webp)

_La cuadrícula, las tarjetas y la maqueta son recursos propios; el robot no reconoce los adhesivos ni los animales._

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** mapa con leyenda, filas, columnas, inicio orientado y cinco metas. ¿Otra pareja puede describir correctamente un destino?

### **Sesión 2 · Programamos cinco llegadas.**

#### Fase 1 · Activamos y predecimos

Una persona elige un animal y el equipo localiza el destino en el mapa.

#### Fase 2 · Exploramos y construimos

Contad las casillas entre inicio y meta y colocad las tarjetas «adelante» en el orden previsto.

#### Fase 3 · Explicamos y registramos

Verbalizad la predicción. Antes de pulsar *Play*, contad los indicadores luminosos y comprobad que hay uno por cada orden.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad la ruta, recoged un marcador al llegar y repetid con los otros cuatro animales, reiniciando desde la marca orientada. Si Tale-Bot no llega, comparad la posición final con la predicción antes de cambiar el programa.

![Tale-Bot Pro real sigue flechas de movimiento hacia delante sobre una cuadrícula con cinco tarjetas propias de animales de granja.](../../_assets/situacions/sa-tb-rastre-corral-mapa-v1.webp)

_El robot ejecuta la secuencia de movimiento; las personas identifican la tarjeta de destino y comprueban la llegada._

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** cinco secuencias con predicción, destino y comprobación de los indicadores. ¿Qué comprobación os ha permitido detectar antes una orden ausente?

### **Sesión 3 · Comparamos, depuramos y explicamos.**

#### Fase 1 · Activamos y predecimos

Ordenad las cinco rutas de la que necesita menos órdenes a la que necesita más y predecid cuál será más larga.

#### Fase 2 · Exploramos y construimos

Poned los recuentos uno al lado del otro y comprobad que todos parten de la misma casilla, orientación y destino. Marcad en el mapa los tramos rectos y los giros: dos rutas pueden tener el mismo número de órdenes y longitud diferente, o al revés. Si hay desacuerdo, reconstruid una ruta con una ficha antes de volver a programar Tale-Bot. Registrad también si la diferencia proviene del recorrido o de cómo se ha contado una orden.

#### Fase 3 · Explicamos y registramos

Elegid una ruta que haya acabado antes o después de la meta. Comprobad recuento, tamaño de la cuadrícula, orientación e indicadores; anotad dónde dejó de coincidir con la predicción.

#### Fase 4 · Aplicamos y mejoramos

Corregid una sola cosa y repetid desde el mismo punto. Explicad qué ruta era más larga o más corta y qué indicio ha ayudado a encontrar el error.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** secuencia antes/después, corrección explicada y respuesta oral, gestual o pictográfica. ¿Qué orden habéis cambiado y qué observación justifica la decisión?

## Conducción de las sesiones

La página pública de Matatalab describe el objetivo de preparar un mapa propio y completar en él una tarea con órdenes hacia delante, pero no muestra en el texto consultable la duración ni el detalle del flujo docente. Esta adaptación distribuye el reto propio en tres encuentros para poder construir el mapa, hacer cinco intentos con calma y revisar los errores; esta temporalización no se atribuye al fabricante. La página enumera un PDF y una presentación adjuntos, pero su contenido no se ha podido leer en esta auditoría.

En el primer encuentro, modelad solo una ruta, con el inicio y la orientación señalados. En el segundo, dad tiempo para las cinco metas: antes de cada prueba, el equipo anuncia filas/columnas, recuento de casillas y número de órdenes; después, un compañero verifica los indicadores de codificación del robot. En el tercero, comparad las secuencias en una tira común y elegid una para depurar. No reprogramar la ruta entera cuando falla una orden ayuda a mantener el foco en el paso que hay que revisar.

El paso de 10 cm es la configuración predeterminada descrita en el manual; la tarjeta de configuración permite una opción de 15 cm en el modelo correspondiente. Por tanto, la cuadrícula local debe usar la medida activa en el robot concreto. Si una casilla no coincide exactamente, marcad el mapa como modelo aproximado y haced una prueba de alineación antes de colocar las metas.

## 📋 Evaluación y evidencias

Observad si cada niño o niña puede reconocer filas y columnas, describir una casilla o coordenada, orientar el robot, contar casillas, traducir el recuento en órdenes hacia delante, comparar la extensión de programas y usar los indicadores como comprobación visual. Archivad el mapa, la secuencia, la predicción, el resultado y la revisión de un error. Valorad que el alumnado pueda explicar cómo ha sabido qué orden cambiar, no la velocidad.

## ♿ Más de una manera de participar

Reducid la cuadrícula a pocas casillas, marcad el norte del recorrido u ofreced flechas con relieve. Se puede señalar el destino, dictar el programa, mover una ficha que represente a Tale-Bot u observar y registrar su recorrido.

## 🔗 Lección oficial y adaptación

Adapta la segunda lección del primer nivel de Tale-Bot Pro, [«¿Dónde están los animales de la granja?»](https://matatalab.com/zh-hans/node/829). La página pública fija el objetivo de inventar una tarea en un mapa y resolverla con órdenes hacia delante; también enumera robot, mapa en blanco, tarjetas de mando, adhesivos y hoja de actividad. La ficha propia amplía este punto de partida con filas y columnas, inicio orientado, cinco metas de animales, comprobación de los indicadores y comparación de rutas. Son decisiones de diseño local, no detalles que atribuimos al PDF o a la presentación adjuntos, porque no se han podido consultar. No reutiliza sus materiales gráficos.
