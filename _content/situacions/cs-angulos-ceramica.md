---
active: true
title: "Ángulos que dibujan la cerámica"
description: "Investigamos cómo los giros del MatataBot forman triángulos y convertimos las pruebas en una roseta inspirada en la cerámica valenciana."
robot: "coding-set"
robot_label: "Coding Set"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "matematiques"
subject_label: "Matemáticas y educación artística"
theme: "entorn-local"
theme_label: "Geometría y cerámica valenciana"
duration: "4 sesiones de 50 minutos"
challenge: "¿Cómo podemos programar un giro interior concreto y comprobar qué bloque de ángulo necesita MatataBot para dibujar cada triángulo?"
official_source: "https://matatalab.com/en/node/84"
---

![MatataBot y la torre del Coding Set junto a una lámina de triángulos y una roseta geométrica inspirada en la cerámica valenciana.](../../_assets/situacions/cs-angles-ceramica.webp)

_La lámina es una composición propia. El dibujo con tinta solo se hace si el centro dispone del Artist Add-On; con el kit base, MatataBot recorre la secuencia sin dibujar._

## Situación, reto e intención

El grupo prepara una muestra de geometría para un pasillo de la escuela. A partir de patrones de cerámica y baldosas del entorno, cada pareja diseña una roseta propia e investiga cómo representar en ella triángulos diferentes. El reto es distinguir el ángulo interior de la figura del giro que ejecuta el robot: cuando MatataBot completa un lado y gira para continuar el contorno, el bloque de ángulo representa el giro exterior suplementario.

La propuesta adapta la actividad pública *Draw triangles* de Matatalab: recupera el triángulo equilátero, la suma de los ángulos interiores, la prueba con ángulos rectos, agudos y obtusos, el trabajo por parejas y la extensión con un pentagrama o paralelogramo. La secuencia, la roseta, las tarjetas de reto y los registros son originales. Si no hay Artist Add-On, las parejas hacen que el robot recorra una cuadrícula sin lápiz y trasladan el trazado al papel; esta alternativa no atribuye dibujo al Coding Set base.

**Pregunta guía:** ¿cómo podemos saber qué giro debe hacer el robot cuando queremos construir un ángulo interior determinado?

## Aprendizajes y vocabulario

- Clasificar ángulos agudos, rectos y obtusos, y reconocerlos dentro de triángulos.
- Comprobar que los ángulos interiores de un triángulo suman 180° y que los tres ángulos de un triángulo equilátero miden 60°.
- Relacionar el ángulo interior con el giro exterior suplementario que necesita el robot para continuar el contorno.
- Escribir, probar y depurar una secuencia de bloques de ángulo y movimiento con una predicción explícita.
- Crear una composición geométrica original y comunicar qué parte es una ruta del robot y qué parte es decoración manual.

**Vocabulario clave:** vértice, lado, ángulo interior, giro exterior, suplementario, agudo, recto, obtuso, equilátero, programa, repetición.

## Materiales y preparación

- Coding Set: MatataBot, torre, tablero y bloques de movimiento, giro, ángulo y bucle disponibles en el centro.
- Artist Add-On compatible solo si el centro lo tiene: soporte, lápiz y bloques de ángulo. La guía oficial enumera diez valores con dos bloques por valor (30°, 36°, 45°, 60°, 72°, 108°, 120°, 135°, 144° y 150°); inventariad las piezas físicas antes de planificar el trazado y no forcéis ningún bloque.
- Papel grande, regla, lápiz, cartulina, tarjetas originales con ángulos interiores y una cuadrícula con punto de inicio y orientación marcados.
- Hoja de registro con columnas **figura**, **ángulo interior previsto**, **bloque de giro**, **predicción**, **resultado observado** y **revisión**.

Comprobad el suelo o la superficie del tablero, la carga del robot y la lectura correcta de la torre. En la prueba con lápiz, asegurad el papel para que no se desplace. No confundáis el número impreso en un bloque de ángulo con el ángulo interior dibujado: la guía del fabricante indica que el robot traza su suplementario. Con el kit base, haced la misma prueba como recorrido sobre cuadrícula y registrad que la figura de papel la ha dibujado el alumnado.

## Secuencia didáctica

### De la baldosa al triángulo (50 min)

#### Fase 1 · Activamos y predecimos

Mostrad una baldosa o una fotografía de cerámica y una plantilla original con tres triángulos. El alumnado marca vértices y lados, clasifica los ángulos como agudos, rectos u obtusos y predice si todos los triángulos pueden tener los mismos ángulos.

#### Fase 2 · Exploramos y construimos

Con regla y transportador opcional, construid un triángulo equilátero grande sobre papel. Medid los tres ángulos y anotad los datos antes de probar el robot. Una pareja construye una segunda copia con tiras de papel; si las longitudes son iguales, comparad sus ángulos sin depender del color de la plantilla.

#### Fase 3 · Explicamos y registramos

Completad una tabla con los tres ángulos interiores. Comprobad que cada uno es de 60° y que juntos suman 180°. Dibujad una flecha en el vértice para indicar la dirección en la que continuará el robot después de llegar a él.

#### Fase 4 · Aplicamos y mejoramos

Un equipo explica la figura sin decir la respuesta y el otro comprueba las medidas. Si los lados o ángulos no concuerdan, revisad la construcción antes de programar; así separáis un error de dibujo de un error de secuencia.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** triángulo con vértices y medidas anotadas, suma de los ángulos y predicción escrita. **Pregunta docente:** ¿qué prueba tenemos de que la figura es equilátera y no solo parece regular?

### Un giro exterior para cada vértice (50 min)

#### Fase 1 · Activamos y predecimos

Colocad MatataBot con la nariz orientada al primer lado del triángulo. En un vértice, comparad el ángulo interior de 60° con el cambio de dirección necesario para seguir el contorno. Cada pareja dibuja las dos medidas en colores o símbolos diferentes y predice qué valor deberá indicar el bloque de ángulo.

#### Fase 2 · Exploramos y construimos

Revisad la guía del fabricante y preparad la secuencia con tres lados y giros repetidos. En la versión con Artist Add-On, haced primero una prueba corta sobre papel; en la versión base, colocad el robot sobre una cuadrícula y contad los pasos de cada lado. La propuesta oficial señala que para el triángulo equilátero se usan bloques de giro de 120°, no de 60°, porque el valor del trazado interior y el giro del robot son suplementarios.

#### Fase 3 · Explicamos y registramos

Registrad la relación 60° + 120° = 180°. Indicad claramente en qué columna está el ángulo de la figura y en cuál el bloque que utiliza el robot. Si la interfaz o el bloque del centro no muestra un valor comprobado, describid el giro observado y no inventéis la pieza necesaria.

#### Fase 4 · Aplicamos y mejoramos

Ejecutad o simulad una vuelta completa y observad si el robot vuelve cerca del punto inicial y con una orientación coherente. Cambiad una variable cada vez: ángulo del bloque, longitud del lado o punto de inicio. Con el accesorio, retirad el lápiz durante las pruebas de posición para evitar marcas superpuestas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** secuencia anotada, dibujo de los dos ángulos y comparación entre predicción y resultado. **Criterio:** el equipo explica por qué 60° es el ángulo interior mientras que 120° es el giro exterior del triángulo equilátero.

![MatataBot y la torre reales del Coding Set junto a un triángulo equilátero: el sector interior y la flecha exterior representan dos ángulos diferentes en el mismo vértice.](../../_assets/situacions/sa-cs-angulos-gir-exterior-v1.webp)

_Esquema conceptual del giro: el bloque de ángulo solo se prueba con Artist Add-On; con el kit base se valida la secuencia como recorrido, sin dibujo con tinta._

### Retos de triángulos: recto, agudo y obtuso (50 min)

#### Fase 1 · Activamos y predecimos

Preparad tres tarjetas originales con retos de triángulo: uno con un ángulo recto, uno con ángulos agudos y uno con un ángulo obtuso. Antes de colocar bloques, cada pareja dibuja el ángulo interior deseado y escribe qué giro exterior le ayudaría a continuar el lado.

#### Fase 2 · Exploramos y construimos

Por turnos, una persona propone el reto y la otra prepara primero el giro en el vértice y después una secuencia de movimiento para completar los lados. La guía oficial plantea que el lado final puede quedar inicialmente demasiado largo o corto: usadlo como dato de calibración, medid la diferencia y anotad qué bloque hay que ajustar. Si no hay Artist Add-On, el robot recorre la ruta en la cuadrícula y el equipo completa el triángulo en papel.

#### Fase 3 · Explicamos y registramos

Comparad el ángulo interior del dibujo con el giro codificado. Clasificad el resultado y explicad qué ha pasado con el cierre del triángulo. No cambiéis a la vez longitud y giro; mantened el registro lo bastante claro para que otra pareja pueda repetir la prueba.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad las tarjetas con otra pareja. El equipo visitante comprueba si el programa corresponde al reto y prueba una sola mejora. Si el tablero del centro solo admite giros en valores fijos, elegid un reto posible con los bloques reales o presentad la parte no ejecutable como modelo de papel, no como función probada del robot.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tres tarjetas con medidas, secuencias y una nota de depuración. **Pregunta docente:** ¿cómo has distinguido que había que cambiar el ángulo de un vértice y no la longitud del lado?

### Una roseta propia para la escuela (50 min)

#### Fase 1 · Activamos y predecimos

Observad las pruebas e identificad una figura que se pueda repetir alrededor de un centro. Cada equipo dibuja una roseta geométrica inspirada en formas del entorno, sin copiar una baldosa concreta; marcad qué elementos se pueden recorrer con el robot y cuáles se completarán a mano.

#### Fase 2 · Exploramos y construimos

Diseñad una composición propia con triángulos y una repetición sencilla. Si el centro dispone del accesorio, probad el trazado con bloques de ángulo y bucle siguiendo el manual; sin él, programad el recorrido de vértices y dibujad la roseta con regla y lápiz. La extensión opcional es plantear un paralelogramo o pentagrama como problema para otra sesión, no asumir que el programa quedará resuelto con una secuencia que no se ha comprobado.

#### Fase 3 · Explicamos y registramos

Añadid una leyenda con los ángulos interiores medidos y los giros probados. Otra pareja debe poder identificar el punto de inicio, el orden de las piezas y qué partes de la composición son manuales.

#### Fase 4 · Aplicamos y mejoramos

Haced una prueba de intercambio: el grupo visitante interpreta la leyenda y reconstruye el recorrido o la simulación. Registrad dónde duda, revisad una instrucción y volved a probarla. Mantened los materiales de recorte y adhesivo en una estación con supervisión.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** roseta, leyenda, secuencia, registro de la prueba de otra pareja y una explicación del límite entre accesorio y kit base. **Cierre:** «El giro que más nos ha sorprendido es… porque…».

## Evidencias y evaluación

Recoged las plantillas medidas, las tarjetas de reto, los programas o simulaciones, las pruebas antes/después y la roseta final. Valorad si el alumnado clasifica los ángulos, comprueba la suma de 180°, distingue interior y exterior, cambia una variable cada vez y comunica los límites de su prueba. La precisión de dibujo, el uso del color y la velocidad no son criterios de éxito.

## Participación, accesibilidad y seguridad

Ofreced plantillas con ángulos en relieve, piezas grandes para representar vértices, cuadrículas de alto contraste y medidas impresas para quien no pueda usar el transportador. Se puede participar como programador/a, medidor/a, verificador/a, relator/a o diseñador/a de tarjetas. La audición y la manipulación fina no son necesarias. Mantened los dedos fuera de la trayectoria del robot, asegurad el papel y usad tijeras escolares con supervisión; no montéis el accesorio de lápiz si no tenéis el modelo y las instrucciones compatibles.

## Referentes y adaptación

- Matatalab, [Draw triangles](https://matatalab.com/en/node/84): actividad pública que trabaja la clasificación de ángulos y triángulos, la suma de 180°, el triángulo equilátero, el giro de 120° para el contorno, pruebas con triángulos rectángulos/agudos/obtusos, intercambio de retos en parejas y extensión con paralelogramo o pentagrama.
- Matatalab, [Artist Add-On](https://matatalab.com/en/node/64): inventario de diez valores de bloque de ángulo, instrucciones para combinar bloques de ángulo con movimiento y giro, y aclaración de que el bloque describe el giro suplementario.

Esta situación amplía los objetivos y procedimientos públicos con una secuencia original de cuatro sesiones, pruebas calibrables, una temática de cerámica local, accesibilidad y una alternativa completa con el kit base. No reproduce las imágenes, materiales gráficos ni la redacción de Matatalab; el trazado con tinta queda condicionado al Artist Add-On real y compatible del centro.
