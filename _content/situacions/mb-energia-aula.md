---
active: true
title: "La luz que usamos"
description: "¿Cómo podemos recoger datos de luz con micro:bit para argumentar una propuesta de ahorro de energía?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Ciencias, Matemáticas y Tecnología"
theme: "sostenibilitat"
theme_label: "Energía y datos del centro"
duration: "6 sesiones"
challenge: "¿Qué nos dicen las lecturas de luz sobre el uso de la iluminación y qué propuesta podemos defender con datos?"
---

![Una placa micro:bit sobre la mesa acompaña a una lámpara de sobremesa y un gráfico de barras en blanco.](../../_assets/situacions/mb-energia-aula.webp)

_El sensor de luz registra lecturas ambientales; hay que separarlas del consumo eléctrico real._

## 🌱 Situación e intención

La comisión ambiental del centro quiere entender mejor cuándo se enciende la iluminación de un aula. El alumnado planifica una recogida de lecturas con micro:bit, establece una línea de base, procesa datos y prepara una propuesta razonada. La placa estima la luz que llega al sensor: no es un contador eléctrico ni permite atribuir consumo sin datos adicionales de potencia y tiempo de uso.

## 📅 Secuencia didáctica · 6 sesiones

### **Sesión 1 · Energía a nuestro alrededor (Energy around us).**

#### Fase 1 · Activamos y predecimos

Abrid la conversación con una ronda de ejemplos: ¿dónde se utiliza luz eléctrica en el centro y qué fuentes de luz natural hay? Conectad la observación con la acción climática (Objetivo Global 13) y preguntad qué nos gustaría saber antes de proponer un cambio.

#### Fase 2 · Exploramos y construimos

En un plano sencillo, marcad espacios posibles —aula vacía con permiso, biblioteca en un momento acordado o una maqueta de aula— y los puntos donde se podría colocar la micro:bit sin molestar. Elegid una ubicación autorizada y definid una pregunta investigable, por ejemplo cómo varía la lectura en un punto fijo entre luz natural y luz de la maqueta.

#### Fase 3 · Explicamos y registramos

Acordad qué querrá decir «lectura baja» y «lectura alta» solo dentro de esta prueba, y qué condiciones anotaréis. Separad la medida ambiental de la idea de consumo: el sensor observa la luz que le llega, no la electricidad utilizada.

#### Fase 4 · Aplicamos y mejoramos

Revisad la pregunta con otra pareja: ¿puede responderse con lecturas de luz?, ¿necesita registrar personas u horarios?, ¿se puede hacer sin tocar interruptores? Simplificad la investigación si depende de un dato que el sensor no puede medir.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** pregunta de investigación, punto autorizado en el mapa y definición operativa de las lecturas altas/bajas. Relacionad el proyecto con una acción climática prudente sin atribuir consumo a personas o grupos. Pregunta final: «¿Qué información nos falta antes de sugerir una medida de ahorro?».

### **Sesión 2 · Planificar los datos (Energy data planning).**

#### Fase 1 · Activamos y predecimos

Recuperad la pregunta y predecid qué variables pueden hacer cambiar la lectura aunque la luz no varíe: posición, orientación, sombra, hora o luz natural. Elegid qué condición cambiaréis y cuáles mantendréis constantes.

#### Fase 2 · Exploramos y construimos

Planificad ubicación, orientación de la placa, intervalo, duración, momentos con luz natural y una situación de referencia. Haced una ficha de campo con código de lugar no identificador, condición, lectura e incidencias; excluid nombres, presencia y horarios personales.

#### Fase 3 · Explicamos y registramos

Programad micro:bit para que muestre o registre valores del sensor de luz, según el modelo y el entorno de programación disponibles. Practicad una lectura y anotad cómo se interpreta la escala de la placa; no la etiquetéis como lux si no es una medida calibrada.

#### Fase 4 · Aplicamos y mejoramos

Repetid lecturas en condiciones conocidas, por ejemplo en la misma posición con la luz de la maqueta apagada y encendida. Comparadlas y ajustad el protocolo si la orientación o la base cambian entre intentos. Anotad las limitaciones del modelo de placa.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** plan de muestreo, programa inicial y lecturas repetidas de referencia. Comprobad que se puede repetir el procedimiento y que el dato responde a la pregunta. Preguntad: «¿Qué variable tenemos que mantener fija para que la comparación sea justa?».

### **Sesión 3 · Recoger y calibrar (Energy data collecting).**

#### Fase 1 · Activamos y predecimos

Antes de salir al punto autorizado, revisad el plan de muestreo y predecid qué podría alterar la línea de base (nube, sombra, puerta abierta o cambio de posición). Asignad roles de preparación, lectura, registro y comprobación, y acordad cuándo se detiene la recogida.

#### Fase 2 · Exploramos y construimos

Calibrad el registro con varias lecturas consecutivas en el mismo punto y poned en marcha la micro:bit como temporizador o registrador según el programa. Recoged datos en intervalos cortos acordados; el prototipo queda supervisado y no obstaculiza la actividad del centro.

#### Fase 3 · Explicamos y registramos

Comparad la línea de base con una prueba controlada de luz de maqueta encendida y apagada. Para cada lectura, anotad condición, orientación e incidencias; marcad cambios de luz natural y repeticiones sin grabar ni registrar presencia, horarios personales o nombres.

#### Fase 4 · Aplicamos y mejoramos

Revisad si la base se ha movido o si una sombra inesperada afecta a una tanda. Repetid solo la comparación afectada y conservad las lecturas originales con una nota de incidencia, en lugar de sustituirlas en silencio.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla de campo con valores, condiciones, repeticiones e incidencias, más una nota de calibración. Preguntad: «¿Qué datos son comparables? ¿Cuáles deberíamos marcar como dudosos y por qué?».

### **Sesión 4 · Procesar e interpretar (Energy data processing).**

#### Fase 1 · Activamos y predecimos

Mirad las lecturas y predecid qué patrón podríais ver entre la línea de base y las pruebas controladas. Antes de calcular, decidid qué columnas y condiciones necesitáis para responder la pregunta sin exponer datos personales.

#### Fase 2 · Exploramos y construimos

Pasad las lecturas a una tabla limpia, mantened los códigos de lugar no identificadores y calculad un valor representativo (media o mediana, según el nivel) para cada condición. Conservad el rango y el número de repeticiones junto al resumen.

#### Fase 3 · Explicamos y registramos

Dibujad un gráfico con título, ejes y escala descritos. Detectad valores atípicos, cambios de posición y momentos con iluminación externa; no eliminéis una lectura sin dejar constancia del motivo. Distinguid observación («la lectura subió») de interpretación («había más luz natural»).

#### Fase 4 · Aplicamos y mejoramos

Escribid una inferencia prudente y, al lado, una explicación alternativa antes de recomendar ningún cambio. Si los datos no permiten distinguir luz natural de luz eléctrica, proponed una nueva medida controlada en lugar de afirmar una causa.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** tabla procesada, gráfico y dos explicaciones posibles vinculadas a las lecturas. Comprobad que otra pareja puede reconstruir el cálculo y entender las limitaciones. Preguntad: «¿Qué parte es medida y qué parte es inferencia?».

### **Sesión 5 · Estimar energía y coste (Energy use calculations).**

#### Fase 1 · Activamos y predecimos

Separad la lectura del sensor de luz del dato de potencia: la micro:bit no mide kWh. Predecid qué datos hacen falta para calcular energía y coste (potencia, tiempo de uso y tarifa) e identificad cuáles son ficticios o autorizados por el centro.

#### Fase 2 · Exploramos y construimos

Elegid la potencia nominal documentada de una luminaria ficticia o facilitada por el centro y un tiempo estimado de uso. Convertid vatios a kilovatios y aplicad **energía (kWh) = potencia (kW) × tiempo (h)**; después multiplicad por una tarifa de ejemplo explicitada por el docente.

#### Fase 3 · Explicamos y registramos

Reproducid el cálculo del ejemplo: luminaria hipotética de 40 W = 0,04 kW; uso durante 3 horas = 0,12 kWh; con 0,30 €/kWh, coste ilustrativo de 0,036 €. Anotad las unidades en cada paso y distinguid el cálculo de los datos de luz recogidos.

#### Fase 4 · Aplicamos y mejoramos

Comparad la estimación de un día con una semana de cinco días y revisad los decimales. Completad una lista de lo que faltaría para estimar mejor un caso real: número de luminarias, potencia efectiva, horas de uso, tarifa aplicable y otros consumos. No uséis facturas ni tarifas familiares.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** hoja de cálculo con fórmula, unidades, tarifa declarada y etiqueta «datos de ejemplo». Comprobad que nadie multiplica directamente la lectura ambiental por un factor de consumo. Preguntad: «¿Qué podemos calcular con estos datos y qué aún no sabemos?».

### **Sesión 6 · Presentar una propuesta (Energy presentations).**

#### Fase 1 · Activamos y predecimos

Definid la audiencia escolar acordada —clase, comisión ambiental o equipo directivo— y predecid qué información necesitará para valorar la propuesta. Seleccionad una recomendación de bajo coste que no requiera manipular la instalación.

#### Fase 2 · Exploramos y construimos

Preparad un póster o exposición breve con cinco piezas: pregunta, método, gráfico, estimación ficticia separada de las lecturas y propuesta de prueba. Añadid las condiciones de medida, repeticiones y posibles errores para que el público pueda valorar la fiabilidad.

#### Fase 3 · Explicamos y registramos

Presentad los datos y explicad qué se ha observado, qué inferencia es prudente y qué estimación económica es solo un ejemplo. Indicad qué habría que medir mejor para comprobar el efecto de una acción.

#### Fase 4 · Aplicamos y mejoramos

Otra pareja revisa si cada afirmación se sostiene en un dato, si las limitaciones son visibles y si la propuesta podría probarse con autorización. Revisad el material con el retorno y quitad cualquier conclusión que exceda las lecturas.

#### Fase 5 · Comprobamos y reflexionamos

**Evidencia:** presentación revisada y respuesta del público acordado. Comprobad que la audiencia puede distinguir el sensor de luz del contador eléctrico e identificar el dato que falta. Cerrad con «¿Qué prueba real sería necesaria antes de decir que se ha ahorrado energía?».

## 🎯 Aprendizajes y vocabulario

- Planificar una recogida de datos de luz con lugar, hora y condiciones comparables.
- Calibrar y repetir lecturas, representarlas y distinguir valores observados de datos ficticios.
- Argumentar una propuesta de uso de la iluminación basada en el conjunto de datos disponible.
- Explicar que el sensor de micro:bit no certifica lux, eficiencia energética ni confort visual.

## 🧰 Materiales y preparación

BBC micro:bit con sensor de luz disponible en la versión del centro, cable o alimentación adecuada, ordenador con MakeCode o Python, cronómetro y hoja de registro. Si la placa es v1 o no expone las lecturas requeridas al entorno instalado, usad un sensor externo verificado por separado o haced una simulación con datos de prueba identificados como simulados.

## 🧪 Evidencias y evaluación

Recoged pregunta y plan de medida, programa del registro, tabla fechada con unidades y condiciones, gráfico, cálculo de ejemplo y propuesta con límites explícitos. Valorad la calidad de las repeticiones, el tratamiento de datos inciertos, el cálculo coherente y la adecuación de la comunicación al público.

## Guion de trabajo de campo y registro

**Sesiones 1–2:** haced un mapa sencillo de los espacios posibles y elegid uno que el centro autorice. Acordad la pregunta antes de abrir MakeCode: por ejemplo, «¿cómo cambia la lectura del sensor en un punto fijo cuando hay luz natural o cuando encendemos la luz de la maqueta?». Definid qué mantendréis constante —posición y orientación de la placa— y qué condición cambia. Cread un programa que muestre una lectura actual o la guarde a intervalos adecuados a la herramienta. Probad primero con la placa en el mismo lugar y comparad lecturas repetidas; anotad que la lectura es un valor relativo del sensor y que no es una medida profesional de iluminación.

**Sesiones 3–4:** recoged los datos en periodos cortos y supervisados. Cada fila incluye código de lugar no identificador, hora aproximada, condición de luz, orientación, valor e incidencias como una nube o una sombra. No anotéis nombres, presencia, uso de espacios por grupos ni horarios personales. Después, calculad la media o la mediana según el nivel, marcad rango y posibles lecturas anómalas y haced un gráfico con ejes y unidades descritos. Separad observación («la lectura subió») de interpretación («había más luz natural») y de hipótesis («quizá no hacía falta encender la luz»).

## Estimación de energía: ejemplo con datos ficticios

La lectura del sensor no se transforma en kWh. Para practicar el cálculo de la lección oficial, usad una luminaria ficticia o una potencia nominal autorizada por el centro. Convertid vatios a kilovatios y multiplicad por las horas de uso: energía (kWh) = potencia (kW) × tiempo (h). Por ejemplo, una luminaria hipotética de 40 W es 0,04 kW; si se utiliza 3 horas, el cálculo da 0,12 kWh. Con una tarifa de ejemplo de 0,30 €/kWh, el coste ilustrativo es 0,036 €. Indicad en la hoja que potencia, tiempo y tarifa son valores de práctica y que no representan la factura del centro.

Comparad una estimación para un día y para una semana de cinco días y revisad las unidades. Preguntad qué falta para hacer una estimación mejor: número de luminarias, potencia real, horas de uso, tarifa aplicable y otros consumos. No multipliquéis directamente la lectura ambiental del micro:bit por ningún factor de consumo.

## Propuesta, revisión y evaluación

En la sesión final, preparad una presentación con cinco piezas: pregunta, método, gráfico, estimación ficticia separada de las lecturas y propuesta de prueba. La recomendación puede ser tan modesta como «repetir la lectura en dos días más» o «comprobar si hay luz natural antes de encender», y debe indicar quién podría autorizar una prueba real. Otra pareja revisa si cada afirmación se apoya en un dato y si las limitaciones son visibles.

La cuadrícula de evaluación observa: planifica variables y repeticiones; representa el dato con unidades o escala explicadas; diferencia lectura, inferencia y cálculo; usa correctamente kWh y euros en el ejemplo; comunica una propuesta prudente. Aceptad póster, presentación oral, gráfico digital o maqueta anotada. No valoréis el ahorro real conseguido porque esta actividad no mide el contador eléctrico.

## 🔒 Datos, seguridad y límites

Pedid autorización antes de medir dentro del centro y no registréis datos personales ni presencia. No toquéis interruptores o instalaciones, no tapéis salidas ni bloqueéis pasillos. La lectura de luz varía con la orientación, las sombras y la luz natural; una correlación no demuestra por sí sola cuánta energía se ha consumido ni quién es responsable.

## 🔗 Unidad oficial adaptada

Esta situación cubre las seis lecciones de micro:bit [Energy awareness](https://www.microbit.org/teach/lessons/energy-awareness/): *Energy around us*, *Energy data planning*, *Energy data collecting*, *Energy data processing*, *Energy use calculations* y *Energy presentations*. La investigación en el centro, los datos de ejemplo, la propuesta y la imagen son propios; la secuencia mantiene los objetivos de planificar, calibrar, recoger, analizar, calcular y comunicar.
