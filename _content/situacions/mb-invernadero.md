---
active: true
title: "Alertas para el bosque y el huerto"
description: "¿Cómo pueden ayudar las comunicaciones de micro:bit a proteger un árbol y cómo representar un sensor de cultivo con seguridad?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "medi"
subject_label: "Ciencias, Tecnología y Matemáticas"
theme: "sostenibilitat"
theme_label: "Biodiversidad y cultivo"
duration: "4 sesiones · 200 min"
challenge: "¿Cómo podemos enviar un aviso de protección y representar un sensor de cultivo sin exponer la placa al agua o al suelo?"
official_source: "https://microbit.org/teach/lessons/helping-plants-grow-trees/"
---

![Dos placas micro:bit reales sobre soportes secos junto a una maqueta de jardín y tarjetas de luz y agua para simular pruebas de radio.](../../_assets/situacions/mb-hivernacle.webp)

_Ilustración de IA propia basada en la placa micro:bit del lote. Las plantas y tarjetas son materiales de maqueta; no hay ningún sensor de suelo integrado, las placas se mantienen secas y el montaje no vigila bosques ni controla el riego real._

## 🌱 Situación y intención

Una clase de tercer ciclo investiga dos preguntas sobre un huerto y un espacio verde escolar: ¿cómo podría un nodo avisar de que hay que revisar una zona de semillero, y cómo podríamos representar lecturas de luz y humedad antes de decidir qué hacer? Los dos retos oficiales se adaptan en un prototipo de comunicación y uno de lectura/decisión. Las pruebas se hacen con maquetas y valores de laboratorio: ninguna placa vigila un bosque, toma imágenes, controla una bomba ni decide el riego de una planta real.

La fundación presenta las actividades para 11–14 y 14–16 años. Esta versión las escala a tercer ciclo de primaria: simplifica la instrumentación, modela los sensores externos y pone el acento en el diseño, los datos, la radio y los límites. No se presenta como una equivalencia de edad ni como un sistema IoT desplegable.

## 🎯 Aprendizajes y vocabulario

- Convertir una necesidad de protección o cultivo en criterios observables para un prototipo.
- Programar emisor y receptor de radio y comprobar la recepción con mensajes ficticios e intentos repetidos.
- Comparar dos entradas independientes —luz y humedad—, una regla para cada salida y una parada manual del prototipo.
- Interpretar lecturas simuladas o de un sensor adicional solo después de verificar el hardware y el programa.
- Explicar que el prototipo no vigila fauna, no controla un cultivo real y no debe exponer la placa al agua o al suelo.

## 🧰 Preparación, materiales y conocimientos

Necesitáis una o preferiblemente dos placas micro:bit, MakeCode, ordenador o tableta, cable USB, tarjetas de condición/mensaje, hoja de datos y materiales secos para construir una maqueta. La radio y los botones son funciones integradas; en V1 y V2, la matriz LED también puede leer el nivel de luz ambiental, aunque esta lectura depende del entorno y la propia matriz se utiliza como salida. La micro:bit no tiene sensor de humedad del suelo, relé ni conexión a internet integrados; para hacer la lectura con hardware real hace falta un sensor analógico y un circuito de baja tensión compatible que el centro verifique. Si no se dispone de estos componentes, los botones A/B seleccionan valores simulados que se identifican claramente como datos de prueba. No conectéis sondas desnudas a tierra húmeda ni ninguna carga a tensión de red.

Antes de la sesión, comprobad que las dos placas comparten el mismo grupo de radio y que pueden enviar/recibir mensajes; preparad un receptor de reserva si la conexión falla. Definid qué cuenta como «seco» solo para la simulación de clase. No convirtáis el valor de maqueta en un umbral de riego real: los sensores, el suelo, la especie y el entorno cambian la lectura.

## 📅 Secuencia didáctica · cuatro sesiones de 50 minutos

### **Sesión 1 · De la necesidad al criterio del protector de árboles.**

#### Fase 1 · Activamos y predecimos

Leed una ficha ficticia de un vivero o de un árbol joven del patio y relacionadla con la protección de la biodiversidad y el ODS 15.

#### Fase 2 · Exploramos y construimos

En un diagrama IPO, escribid la entrada que inicia la prueba (inclinación leída por el acelerómetro o, si hace falta, botón de simulación), la decisión de enviar un aviso y las salidas posibles. El diseño oficial usa el sensor de aceleración/caída libre como indicio y advierte de que hay que probar el umbral; en este aula no se deja caer ni se pega la placa a ningún árbol. Añadid una tarjeta de «pasarela» entre el nodo local y un servicio de internet para representar la arquitectura IoT descrita por la fuente oficial. Esta pasarela es un modelo de papel: la micro:bit solo envía datos por radio a la otra placa y no se conecta a internet por sí misma.

#### Fase 3 · Explicamos y registramos

Dibujad el nodo sensor, el mensaje por radio, el nodo receptor y la persona responsable que interpreta el aviso; distinguid esta red local de prueba de una instalación real con pasarela a internet.

#### Fase 4 · Aplicamos y mejoramos

Acordad cinco criterios medibles: el nodo detecta una inclinación de prueba o recibe una entrada simulada; solo envía el código acordado con el identificador ficticio de la maqueta; el receptor lo muestra; otro código no se confunde con la alerta; y el mensaje no incluye coordenadas ni datos personales. La fuente oficial modela la entrada con el acelerómetro y contempla coordenadas GPS; aquí la etiqueta `HORT-01` representa una zona ficticia y no geolocaliza nada.

#### Fase 5 · Comprobamos y reflexionamos

Anotad una limitación o una situación en la que el aviso podría ser falso. Evidencia: diagrama, criterios y tabla de casos previstos.

### **Sesión 2 · Construir y probar un aviso de radio.**

#### Fase 1 · Activamos y predecimos

Elegid dos códigos cortos e inequívocos, como `REVISA` y `PRUEBA`, que no incluyan nombres, coordenadas ni información sobre una persona. Antes de enviarlos, cada equipo escribe qué mensaje espera ver en el receptor y qué debería pasar si llega un código diferente. Leed las reglas de radio acordadas y comprobad que los dos dispositivos comparten el mismo grupo; con una sola placa, haced la predicción con tarjetas y marcadla como simulación, no como recepción probada.

#### Fase 2 · Exploramos y construimos

En una placa, estableced grupo de radio y enviad el mensaje solo cuando se pulse el botón seleccionado; añadid un icono que indique que se ha enviado. Incluid un identificador ficticio y no geolocalizable, como `HORT-01`, para que el receptor pueda distinguir qué maqueta ha generado el aviso. Este código es una etiqueta de clase: la micro:bit no tiene GPS y no determina la ubicación de un árbol.

#### Fase 3 · Explicamos y registramos

En la otra placa, esperad el mensaje y mostrad un icono o palabra corta cuando llegue; no hagáis que el receptor active actuadores.

#### Fase 4 · Aplicamos y mejoramos

Haced cinco intentos a corta distancia con el mismo grupo; registrad envíos y recepciones. Repetid con un grupo diferente para comprobar que no se mezclan las pruebas. Después de esta línea de base, elegid una mejora de prototipo —por ejemplo, que el receptor devuelva `REBUT` o muestre un icono de confirmación— y repetid los casos afectados para comprobar el efecto. No hace falta alejar placas del docente ni probar cobertura fuera del aula.

#### Fase 5 · Comprobamos y reflexionamos

Marcad falsos avisos, mensajes perdidos y una mejora. Con una sola placa, una persona puede hacer de emisor y otra de receptor con tarjetas de papel, pero esta alternativa no cuenta como transmisión de radio probada.

### **Sesión 3 · Luz, humedad y decisiones del Auto-farmer.**

#### Fase 1 · Activamos y predecimos

Comparad dos entradas separadas: luz ambiental (oscura/intermedia/iluminada) y humedad del suelo (seca/intermedia/húmeda). Usad tarjetas o valores de prueba para cada variable; si se quiere leer el sensor de luz integrado, haced una comprobación inicial sin proyectar luz sobre la matriz LED. Para la humedad real hace falta un sensor externo: consultad sus instrucciones, calibradlo según el centro y mantenedlo separado de la placa.

#### Fase 2 · Exploramos y construimos

Usad A/B para seleccionar una entrada cada vez y anotad si es simulada o medida. Para la luz, probad valores de la escala de lectura que expone la versión de MakeCode del centro; para la humedad, usad un conjunto de prueba propio o la entrada analógica de un sensor externo calibrado. Mostrad la entrada seleccionada con un número o una barra LED y no comparéis las escalas entre sí.

#### Fase 3 · Explicamos y registramos

Formulad dos reglas independientes: «si la luz baja del umbral de prueba, representar la salida de luz» y «si la humedad baja del umbral de prueba, representar la salida de riego». Usad un icono o un mensaje como sustituto del relé; no activéis ninguna luz ni bomba real.

#### Fase 4 · Aplicamos y mejoramos

Para cada variable, probad un valor por debajo, uno igual y uno por encima de su umbral; anotad las dos salidas por separado. Esto permite comprobar que una alerta de luz no activa por error la regla de humedad.

#### Fase 5 · Comprobamos y reflexionamos

Distinguid lectura, interpretación y decisión humana. Evidencia: pseudocódigo, código y tabla valor/salida.

### **Sesión 4 · Integrar los nodos y comunicar sus límites.**

#### Fase 1 · Activamos y predecimos

Representad un semillero de maqueta y decidid qué placa hace de nodo de datos y cuál recibe el mensaje.

#### Fase 2 · Exploramos y construimos

Combinad las dos entradas simuladas o externas con las reglas de luz y humedad; representad los dos relés del reto oficial con tarjetas o iconos LED. Una salida de maqueta no enciende una lámpara ni activa el riego. Añadid un interruptor de parada del prototipo: mantener pulsados A+B activa un estado de parada que fuerza las dos salidas a «OFF»; reiniciad el programa para volver a probar. Solo si el centro tiene relés compatibles verificados se puede estudiar el circuito de baja tensión según las instrucciones del fabricante; no son componentes integrados y no se conectan a bombas ni a la red eléctrica.

![Dos micro:bit del lote representan un aviso de radio con identificador ficticio y un prototipo de huerto con dos salidas simuladas y un botón de parada.](../../_assets/situacions/sa-hivernacle-nodes-relle.webp)

_La pasarela, las salidas, el identificador y la parada son elementos de maqueta o representación; las placas no controlan relés ni identifican una ubicación real._

```text
parada = falso  # al iniciar el programa
cuando se pulsen A+B:
    parada = verdadero
si parada:
    luz = OFF
    riego = OFF
si no:
    luz = ON si lectura_luz < umbral_luz_de_prueba, si no OFF
    riego = ON si lectura_humedad < umbral_humedad_de_prueba, si no OFF
    enviar «HORT-01:REVISA» si hace falta una revisión
```

_Pseudocódigo propio para la maqueta: «luz» y «riego» son salidas representadas, no relés reales. En MakeCode, el estado de parada se reinicia al iniciar el programa y A+B lo mantiene activo hasta que se reinicia; la placa permite detectar la pulsación conjunta._

#### Fase 3 · Explicamos y registramos

Ejecutad una matriz de casos combinados: luz baja/alta, humedad baja/alta, una lectura exactamente en el umbral, grupo de radio incorrecto, ausencia de mensaje y parada A+B. Comprobad que cada relé simulado responde solo a su entrada y que, tras la parada, las dos salidas quedan apagadas. Comparad los criterios con los resultados y registrad cualquier falso positivo.

#### Fase 4 · Aplicamos y mejoramos

Dibujad qué sensor compatible o relé de baja tensión verificado haría falta para avanzar el prototipo, qué riesgo o error se debería resolver y quién supervisaría una prueba real. Elegid una mejora adicional del nodo —confirmación de recepción, aviso diferenciado o registro de datos— y repetid los casos de prueba correspondientes; no activéis ningún riego real.

#### Fase 5 · Comprobamos y reflexionamos

Presentad diagrama, datos, prototipo y límite principal a otro equipo, que deja una pregunta. Evidencia: sistema en maqueta, matriz de pruebas y revisión de diseño.

## 📋 Criterios de éxito y evaluación

La propuesta es satisfactoria cuando el equipo (1) diferencia radio integrada, sensor externo, relé y pasarela; (2) envía y recibe un mensaje que incluye un identificador ficticio no geolocalizable; (3) separa las lecturas de luz y humedad y prueba para cada una los valores inferior, igual y superior al umbral; (4) muestra dos salidas simuladas independientes; (5) comprueba que la parada A+B deja ambas salidas en «OFF»; (6) añade y prueba una mejora; y (7) explica qué no permite concluir el prototipo. Recoged diagrama IPO/red, fragmentos de código o pseudocódigo, tabla de los intentos, matriz de entrada/salida, propuesta de ampliación y reflexión. Valorad exactitud del registro, depuración basada en evidencia y justificación; no se puntúa que la señal llegue lejos ni que la maqueta riegue.

## ♿ Accesibilidad, privacidad y seguridad

Ofreced mensajes con iconos y palabras, opciones de respuesta no oral, valores en tarjetas de tamaño grande y roles alternos de programación, observación, registro y explicación. Las transmisiones son códigos de laboratorio, sin nombres, ubicaciones detalladas ni datos personales. Mantened placas y circuitos secos, usad solo alimentación USB/baja tensión dentro de las especificaciones del fabricante y no conectéis bombas, relés de red o válvulas. Ningún prototipo se instala en árboles, bosques, invernaderos ni espacios públicos.

## 🔗 Retos oficiales adaptados

[Tree protector](https://www.microbit.org/teach/lessons/helping-plants-grow-trees/) propone usar la radio de micro:bit para enviar alertas desde un sensor prototipo e introducir cómo los nodos IoT se conectan mediante pasarelas; el reto destaca el ODS 15, el producto que cumple criterios y una ampliación. La guía técnica complementaria del [sensor y el acelerómetro micro:bit](https://microbit.org/get-started/features/overview/) confirma las funciones integradas, mientras que la etiqueta ficticia `HORT-01` sustituye las coordenadas GPS del proyecto fuente y no geolocaliza nada. [Auto-farmer](https://microbit.org/teach/lessons/helping-plants-grow-auto-farmer/) propone relés y sensores de humedad caseros para detectar cultivos secos, transmitir datos y ahorrar agua; la situación representa por separado luz, humedad, las dos salidas de relé y una parada manual, sin activar actuadores. Una copia consultable del [manual Arm School Program alojada por Scoilnet](https://www.scoilnet.ie/uploads/resources/35898/35666.pdf) detalla el umbral de luz, los dos relés y el *kill switch*; los documentos/ZIP enlazados desde las páginas micro:bit no se han podido leer directamente en esta sesión, así que no se atribuyen preguntas o pasos no verificados. Las páginas oficiales indican franjas de 11–14 y 14–16 años. El plan local para primaria es una adaptación simplificada propia.
