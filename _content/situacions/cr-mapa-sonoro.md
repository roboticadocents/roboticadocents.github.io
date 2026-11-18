---
active: true
title: "Un mapa sonoro para leer el aula"
description: "Cinco sesiones con Codey Rocky para comparar niveles relativos de sonido, representar patrones y diseñar una guía de confort acústico sin grabar voces ni vigilar personas."
robot: "codey-rocky"
robot_label: "Codey Rocky"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Conocimiento del Medio, Matemáticas y Tecnología"
theme: "benestar"
theme_label: "Entorno sonoro y bienestar compartido"
duration: "5 sesiones · 225–250 min"
challenge: "¿Cómo podemos describir y comparar el ambiente sonoro de un espacio sin identificar quién habla ni confundir una lectura del sensor con una medida clínica o en decibelios?"
---

![Codey Rocky junto a un mapa del aula con zonas de colores y ondas que representan muestras controladas de sonido.](../../_assets/situacions/cr-mapa-sonor.webp)

_El sensor de sonido permite comparar muestras en unas condiciones acordadas; no graba ni identifica qué o quién ha producido el sonido._

## Situación, reto e intención

La biblioteca de la escuela quiere una guía sencilla para que cada grupo pueda elegir dónde leer, conversar en voz baja o preparar una actividad. La clase construirá un mapa sonoro a partir de pruebas breves y repetibles con Codey Rocky. El sensor de sonido del robot ofrece lecturas del nivel de sonido del entorno; cada equipo las comparará con las de otras pruebas y las representará como **valores relativos**, sin convertirlas en decibelios ni afirmar que miden el bienestar de una persona.

El reto parte de tres escenarios ficticios reproducidos con materiales —papel que se arruga suavemente, páginas que se pasan y un lápiz que toca una cubierta—, no de conversaciones ni de grabaciones del alumnado. Las pruebas se hacen en una mesa preparada, manteniendo el robot quieto y controlando distancia, orientación y duración. El producto final será una guía visual revisable: mostrará qué se ha probado, en qué condiciones y qué decisiones aún debería tomar la comunidad escolar.

## Aprendizajes y vocabulario

- Distinguir **sonido**, lectura del sensor e interpretación; justificar por qué son tres cosas diferentes.
- Formular una pregunta investigable y mantener constantes la distancia, la posición, la duración y la fuente sonora.
- Leer valores relativos del sensor de sonido, repetir medidas y representar su rango sin atribuirle unidades que no se han calibrado.
- Construir una regla condicional con dos umbrales y probar los casos inferior, igual y superior.
- Comparar una predicción con datos, identificar una lectura atípica sin borrarla y proponer una nueva prueba.
- Comunicar una recomendación de organización del espacio con evidencia y límites explícitos, sin establecer normas de conducta o diagnósticos sobre las personas.

**Vocabulario:** fuente sonora, sensor, lectura, variable, umbral, repetición, rango, caso límite, representación y límite del modelo.

## Materiales y preparación

- Codey Rocky de la dotación, con batería cargada y mBlock 5 instalado en un dispositivo compatible.
- Tarjetas de tres escenarios de prueba; papel, un libro y un lápiz para producir sonidos suaves y breves.
- Regla o cinta métrica, cronómetro y hoja de registro con campos para código de muestra, distancia, duración, lectura e incidencias.
- Cartulina grande, rotuladores y adhesivos para el mapa; opcionalmente, hoja de cálculo sin nombres ni datos personales.
- Una zona plana, estable y sin obstáculos. Colocad el robot quieto y el material sonoro en una posición marcada; mantened el sensor orientado igual durante toda la sesión.

Antes de la clase, comprobad en el modelo y la versión de mBlock del centro que el bloque de lectura de sonido está disponible. Haced lecturas de prueba con la sala en reposo y con cada uno de los materiales, y determinad un intervalo que el equipo pueda distinguir de manera repetible. Los valores de cada modelo y entorno pueden variar: los umbrales de la actividad se establecen con la prueba local, no se copian de una ficha ni se interpretan como dB. Si el bloque no está disponible o varía demasiado, usad una escala de observación manual y marcad los datos como simulación.

## 📅 Secuencia didáctica · cinco sesiones

### **¿Qué significa leer un sonido? (45 min).**

#### Fase 1 · Activamos y predecimos

Presentad tres tarjetas sin hacer ninguna prueba todavía. En grupos, ordenadlas según el nivel de sonido que esperáis y explicad qué condición podría cambiar el resultado. Acordad que la investigación compara muestras, no clasifica personas ni juzga si un aula es buena o mala.

#### Fase 2 · Exploramos y construimos

Poned Codey Rocky en una marca de la mesa, con el sensor de sonido libre y el robot inmóvil. Observad la lectura en reposo durante un intervalo corto. Repetidla con una sola acción sonora suave —por ejemplo, pasar una página a una distancia marcada— y volved al silencio antes de la siguiente prueba. No habléis ninguna frase delante del sensor ni hagáis gritos, palmadas fuertes o sonidos repentinos.

#### Fase 3 · Explicamos y registramos

Dibujad el recorrido del dato: **fuente sonora → sensor → valor mostrado → interpretación del equipo**. Registrad una observación y una interpretación distintas. Por ejemplo: «el valor ha subido durante la prueba» es una observación; «esta zona siempre es ruidosa» todavía no está justificado.

#### Fase 4 · Aplicamos y mejoramos

Cambiad solo la distancia a la fuente y observad si la lectura cambia. Después volved a la marca inicial. Anotad cualquier diferencia y proponed cómo evitar que la posición explique el resultado en lugar del material.

#### Fase 5 · Comprobamos y reflexionamos

Cada equipo entrega el diagrama del dato y una pregunta que se pueda investigar sin grabar personas. **Evidencia:** predicción inicial, observación, interpretación y una variable que hay que controlar.

### **Preparamos un protocolo de comparación (45 min).**

#### Fase 1 · Activamos y predecimos

Recuperad las lecturas de la sesión anterior. ¿Qué debería mantenerse igual para que dos pruebas sean comparables? Anotad una predicción para cada uno de los tres materiales y una posible fuente de error.

#### Fase 2 · Exploramos y construimos

Definid un protocolo común: misma mesa, misma orientación del robot, misma distancia entre sensor y fuente, misma duración y una pausa entre pruebas. Una persona prepara el material, otra inicia el programa, una tercera registra el valor y una cuarta comprueba el protocolo. Cambiad los roles después de cada fuente.

```blocks
cuando comience
  mostrar la lectura del sensor de sonido
  esperar el intervalo acordado
  registrar el valor y el código de muestra
  volver al estado de reposo
```

#### Fase 3 · Explicamos y registramos

Haced tres repeticiones de cada muestra. Registrad todos los valores, incluidas las lecturas inesperadas. Calculad el mínimo, el máximo y el rango (máximo − mínimo); no uséis una media si las lecturas son tan dispersas que oculta la variación.

#### Fase 4 · Aplicamos y mejoramos

Intercambiad las hojas entre parejas. Comprobad si otra pareja podría repetir el protocolo sin preguntaros ningún paso. Si falta distancia, duración o código de muestra, añadidlo y repetid una prueba.

#### Fase 5 · Comprobamos y reflexionamos

Comparad las tres repeticiones y destacad una lectura estable y una variable. **Evidencia:** protocolo fechado, registro completo y justificación de una decisión de control.

### **Construimos una escala relativa y una regla (45–50 min).**

#### Fase 1 · Activamos y predecimos

Ordenad las muestras a partir de los rangos observados, no de una impresión inicial. Marcad con un interrogante las que se superponen. Predecid qué umbral separaría dos categorías útiles para la guía y por qué esa separación podría fallar.

#### Fase 2 · Exploramos y construimos

Elegid dos umbrales a partir de los datos locales y programad tres estados visibles en la matriz LED: lectura baja, intermedia o alta según la escala de la clase. Los umbrales son convenciones de la actividad, no valores universales. Comprobad en el programa que las condiciones no se solapan y que cada caso tiene una respuesta.

```blocks
cuando comience
  leer el nivel de sonido
  si es inferior al primer umbral
    mostrar el símbolo de nivel bajo
  si no, si es inferior al segundo umbral
    mostrar el símbolo de nivel intermedio
  si no
    mostrar el símbolo de nivel alto
```

#### Fase 3 · Explicamos y registramos

Haced una tabla de decisión con valores por debajo, iguales y por encima de cada umbral. Simulad cada fila antes de ejecutarla y confirmad qué muestra el robot. Si la lectura oscila alrededor del límite, anotad la incertidumbre; no presentéis el LED como una alarma.

#### Fase 4 · Aplicamos y mejoramos

Cambiad un umbral y volved a probar las mismas muestras. Comparad cuántas cambian de categoría y si la modificación mejora la utilidad del mapa. Volved a la regla inicial si la nueva decisión no se puede justificar con datos.

#### Fase 5 · Comprobamos y reflexionamos

Explicad con un ejemplo por qué un valor igual al umbral necesita una regla definida. **Evidencia:** programa, tabla con seis casos límite y una comparación entre umbrales.

### **Representamos el mapa de muestras de la biblioteca (45–50 min).**

#### Fase 1 · Activamos y predecimos

Mostrad un plano ficticio con tres espacios: mesa de lectura, estantería y zona de preparación de materiales. La clase no medirá ni etiquetará espacios reales ocupados. Predecid cómo representaríais una muestra estable, una variable y una prueba que todavía no se ha hecho.

#### Fase 2 · Exploramos y construimos

Asignad cada material a una zona ficticia y situad allí el código de muestra, no el nombre de ninguna persona. Registrad de nuevo tres repeticiones por material con el protocolo. Trasladad al mapa una escala de colores acordada por el grupo y añadid allí la distancia y el rango observado.

![Codey Rocky junto a un mapa de tres zonas ficticias y un gráfico de barras sin datos personales.](../../_assets/situacions/sa-cr-mapa-sonor-zones.webp)

_Las zonas de color representan escenarios controlados de prueba, no una vigilancia de la biblioteca ni una medida del estado de las personas._

#### Fase 3 · Explicamos y registramos

Una pareja que no ha hecho las medidas interpreta el mapa. Pedidle que señale qué conclusiones están sostenidas por las repeticiones y cuáles dependerían de medir el espacio real. Añadid una leyenda para «prueba estable», «lectura variable» y «sin datos».

#### Fase 4 · Aplicamos y mejoramos

Cambiad un detalle del mapa para que sea más claro en escala de grises y para personas que no distinguen los colores: incorporad formas, patrones o etiquetas breves. Comprobad si la información sigue siendo comprensible sin depender solo del color.

#### Fase 5 · Comprobamos y reflexionamos

Validad la leyenda con una interpretación en voz alta o con tarjetas de respuesta. **Evidencia:** mapa con unidad de escala definida por el grupo, valores y rangos, código de muestra y leyenda accesible.

### **Proponemos una guía responsable y la revisamos (45–60 min).**

#### Fase 1 · Activamos y predecimos

Leed tres recomendaciones ficticias: una basada en una sola lectura, una que afirma usar decibelios sin calibración y una que describe las condiciones de la prueba. Elegid cuál es más responsable e indicad qué dato necesitaríais para mejorar las otras.

#### Fase 2 · Exploramos y construimos

Preparad una guía de una página con pregunta, protocolo resumido, mapa, un hallazgo sostenido por datos y un límite. Redactad recomendaciones como opciones de organización de materiales o espacios, no como órdenes a las personas. Incluid una alternativa sin robot para repetir la comparación con una escala observacional.

#### Fase 3 · Explicamos y registramos

Haced una galería de guías. Cada equipo deja un comentario basado en evidencia: «la repetición muestra…», «nos falta saber…» o «podríais aclarar…». No se comparan equipos por quién obtiene las lecturas más bajas.

#### Fase 4 · Aplicamos y mejoramos

Revisad una afirmación para que distinga dato y propuesta. Añadid una nota que explique que el sensor puede responder a sonidos distintos, que el valor depende del modelo y de las condiciones, y que no hay grabación ni reconocimiento de habla.

#### Fase 5 · Comprobamos y reflexionamos

Presentad la guía final y responded: ¿qué decisión puede ayudar a tomar, qué dato la sostiene y qué queda fuera del modelo? **Evidencia:** guía revisada, registro de pruebas, código y retorno incorporado.

## Evidencias y evaluación

Recoged el diagrama del dato, el protocolo, el código, las repeticiones, la tabla de casos límite, el mapa y la guía final. Usad una escala de tres niveles —**inicial**, **en proceso**, **consolidado**— en estos criterios:

- Mantiene o identifica las condiciones que hay que controlar para comparar dos muestras.
- Registra todas las repeticiones y describe el rango sin ocultar lecturas variables.
- Programa y explica una regla condicional que incluye los casos iguales al umbral.
- Separa el valor leído de la interpretación y limita las conclusiones a lo que se ha probado.
- Revisa una representación para que pueda leerse sin depender solo del color.

La autoevaluación pregunta qué cambio ha hecho el equipo después de un dato inesperado. La coevaluación revisa si el mapa muestra escala, repeticiones, condiciones y límites. No se evalúa la capacidad de mantener el silencio ni el nivel sonoro de una clase.

## Participación, accesibilidad y seguridad

Ninguna actividad graba, almacena o clasifica la voz. No se usan nombres, conversaciones, grabaciones ni medidas de personas; las muestras son materiales y acciones controladas. Se hacen sonidos suaves, breves y anticipados, y cualquier alumno puede elegir un rol sin producir ni escuchar el sonido. No se usa el dispositivo para controlar el comportamiento, comparar grupos o hacer afirmaciones clínicas.

Ofreced roles de programación, preparación, registro, comprobación y comunicación, con rotación o elección. Las instrucciones se dan en texto y oralmente; el mapa incorpora patrones, iconos y palabras además de los colores. Quien lo prefiera puede registrar valores que dicta una pareja, ordenar tarjetas de casos o seguir la misma tabla de decisión en papel. Mantened el robot quieto durante la lectura, evitad sonidos fuertes y desconectadlo antes de moverlo entre pruebas.

## Referentes y adaptación

La ficha toma como referente la descripción oficial de los módulos de Codey Rocky de Makeblock: el [sensor de sonido](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) detecta el nivel sonoro del entorno; el robot también tiene matriz LED e indicador RGB. La [ficha de producto](https://www.makeblock.com/pages/codey-rocky-robot-toys-for-kids) enumera los módulos integrados. La situación transforma esa capacidad en una investigación escolar propia con materiales controlados y lectura crítica; no es una adaptación de una lección oficial concreta ni promete mediciones calibradas en decibelios.
