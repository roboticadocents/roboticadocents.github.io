---
active: true
title: "Reparto con una ruta segura"
description: "¿Cómo puede un vehículo programado avanzar por una ruta de reparto y reaccionar ante un obstáculo previsible?"
robot: "codey-rocky"
robot_label: "Codey Rocky"
cycle: "segon-cicle"
cycle_label: "Segundo ciclo"
subject: "matematiques"
subject_label: "Matemáticas y Tecnología"
theme: "ciutat"
theme_label: "Entorno y movilidad"
duration: "4 sesiones"
challenge: "¿Cómo puede un vehículo programado avanzar por una ruta de reparto y reaccionar ante un obstáculo previsible?"
---

![Codey Rocky de la dotación junto a una ruta de mesa con obstáculos de cartón y una caja de papel separada en la meta.](../../_assets/situacions/cr-repartiment.webp)

_El robot no transporta la caja: es una maqueta independiente. La ruta y los obstáculos sirven para probar el sensor en condiciones controladas, no para garantizar un reparto autónomo._

## 🧩 Reto y contexto

El grupo diseña un servicio de reparto de juguete entre un punto de preparación, una parada de barrio y un destino como una biblioteca o un huerto escolar. Codey Rocky sigue una ruta de baja velocidad y prueba una respuesta programada ante obstáculos de cartón. La maqueta sirve para estudiar decisiones y límites de un sensor; no representa un vehículo seguro para entregas reales ni sustituye la supervisión humana.

**Aprendizajes:** planificar un itinerario, controlar una variable, usar una condición, registrar detecciones y errores, revisar un programa y justificar por qué un sistema automático necesita una persona responsable.

## 📅 Secuencia didáctica · cuatro sesiones de 45 minutos

### **Diseñamos el mapa de reparto (45 min).**

#### Fase 1 · Activamos y predecimos

Dibujad una pista cerrada y estable con un punto de carga, una parada y un destino. Marcad distancias con unidades de papel, tramos rectos y posibles puntos de giro. Predecid qué acciones necesitaría Codey Rocky para seguir la ruta.

#### Fase 2 · Exploramos y construimos

Trazad una ruta en el plano y colocad una caja ligera de papel como símbolo del paquete. No la fijéis encima del robot si puede tapar el sensor o desestabilizarlo. Identificad dos riesgos potenciales de la maqueta.

#### Fase 3 · Explicamos y registramos

Definid qué significa «obstáculo» dentro del modelo y anotad qué información no puede dar el robot: si una persona quiere cruzar, si una zona es privada o si el paquete ha llegado a una persona concreta.

#### Fase 4 · Aplicamos y mejoramos

Revisad el recorrido y ampliad las zonas de giro si hace falta. Añadid puntos de parada claros antes de mover el robot.

#### Fase 5 · Comprobamos y reflexionamos

Explicad qué puede hacer el robot con una detección y qué decisión sigue siendo humana. **Evidencia:** mapa con ruta, puntos de parada y riesgos potenciales.

### **Establecemos una línea base (45 min).**

#### Fase 1 · Activamos y predecimos

Comprobad el Codey Rocky y el entorno mBlock 5. Orientad hacia delante el sensor IR/color integrado según las instrucciones del fabricante; no añadáis sensores ajenos a la dotación. Predecid dónde acabará el robot en una prueba sin obstáculos.

#### Fase 2 · Exploramos y construimos

Cread un programa corto que inicie el movimiento con el botón A y lo pare con una acción accesible o supervisada. Hacedlo circular sin obstáculo, a baja velocidad, en una pista cerrada y libre.

#### Fase 3 · Explicamos y registramos

Marcad el punto de inicio, el tiempo aproximado y el lugar final. Repetid la misma ruta tres veces y comparad los resultados, manteniendo superficie, batería, velocidad y posición inicial.

#### Fase 4 · Aplicamos y mejoramos

Si la desviación es grande, comprobad superficie, batería, velocidad y posición antes de cambiar el código. Repetid el protocolo después de corregir una condición.

#### Fase 5 · Comprobamos y reflexionamos

Describid la variabilidad que se ha observado e indicad qué condiciones se han mantenido igual. **Evidencia:** tres registros de línea base y configuración probada.

### **Probamos una condición ante obstáculos (45 min).**

#### Fase 1 · Activamos y predecimos

Elegid un obstáculo grande, blando, estable y visible para el sensor, como una pared baja de cartón. Predecid qué hará el robot cuando lo detecte y recordad que la dirección aleatoria no garantiza llegar a un destino.

#### Fase 2 · Exploramos y construimos

Añadid una condición: cuando el sensor detecta el obstáculo, el robot elige un giro a izquierda o derecha y después reanuda el avance. Haced primero una demostración de una sola detección y mantened las manos fuera de la ruta mientras el motor está activo.

#### Fase 3 · Explicamos y registramos

Cambiad una variable cada vez —posición del obstáculo, ángulo o distancia inicial— y anotad configuración, respuesta esperada, respuesta real e incidencia. Incluid casos sin detección o con una reacción demasiado temprana; no los ocultéis ni los atribuyáis a negligencia de quien programa.

#### Fase 4 · Aplicamos y mejoramos

Revisad una condición y volved a probar la misma situación. Si varía el obstáculo, mantened el registro de los intentos para que se pueda comparar cada resultado.

#### Fase 5 · Comprobamos y reflexionamos

Identificad qué prueba muestra que el sensor puede fallar y qué habría que hacer si hubiera una persona. **Evidencia:** tabla de pruebas con detecciones, falsas alarmas y una revisión justificada.

### **Revisamos el servicio y comunicamos los límites (45 min).**

#### Fase 1 · Activamos y predecimos

Ajustad el recorrido para que tenga una zona de giro amplia y no se salga al suelo. Predecid qué fallos requerirían una intervención humana.

#### Fase 2 · Exploramos y construimos

Otra pareja ejecuta el mismo protocolo sin recibir la explicación previa y comprueba si puede reproducir la prueba. Mantened supervisión directa y un obstáculo elegido por el docente.

#### Fase 3 · Explicamos y registramos

Preparad una presentación con mapa, datos y una afirmación prudente, como «en dos de tres pruebas ha detectado esta pared de cartón a esta distancia». Separad la observación de lo que no se puede concluir.

#### Fase 4 · Aplicamos y mejoramos

Revisad el programa o el protocolo si la otra pareja no puede reproducir la prueba. Añadid un cartel de uso: pista cerrada, velocidad baja y supervisión; no es un vehículo seguro para entregas reales.

#### Fase 5 · Comprobamos y reflexionamos

Presentad la recomendación para la persona supervisora y explicad qué permiten afirmar los datos y qué no se puede prometer sobre un robot real. **Evidencia:** programa comentado, plano revisado, tabla de pruebas y recomendación.

## 🧪 Evidencias y evaluación

Recoged el plano, el programa con comentarios, tres pruebas de línea base, las observaciones con obstáculo y la recomendación final. Observad si el alumnado:

- describe ruta e instrucciones antes de mover el robot;

- identifica la condición que activa la respuesta y anticipa qué debería pasar;

- separa una detección correcta de una falsa alarma o de un obstáculo no detectado;

- cambia una variable a la vez y usa los resultados para depurar;

- explica por qué hace falta supervisión humana y qué límites tiene el prototipo.

Valorad la calidad del protocolo y la interpretación honesta, no que el robot complete siempre la ruta.

## 🎯 Aprendizajes y vocabulario

- Descomponer una tarea de reparto ficticia en entrada, decisión, giro y continuación.
- Programar una respuesta con los componentes de Codey Rocky que se han comprobado en el centro.
- Comparar los resultados de varios intentos y revisar una regla ante una detección incorrecta.
- Explicar por qué un prototipo escolar no es un sistema autónomo seguro para un espacio público.


## 🧰 Preparación y seguridad

Verificad que el sensor IR/color está montado y orientado hacia delante, que el programa mBlock 5 puede leerlo y que la batería permite pruebas cortas. Mantened velocidad baja, pista delimitada sobre una mesa grande o en el suelo liso, obstáculos ligeros y supervisión directa. No probéis cerca de escaleras, personas en movimiento, animales, objetos frágiles o accesos de paso. El infrarrojo puede no detectar materiales o ángulos diversos; una ausencia de detección no significa que el camino esté libre.

## ♿ Variantes de participación

Permitid diseñar el recorrido en papel antes de manipular el robot y asignad roles rotativos de planificación, programación, observación, registro y seguridad. Una ruta corta, una orden por tarjeta o la lectura en voz alta facilitan la participación sin reducir el reto de razonamiento. Ofreced tablas con pictogramas para registrar resultados y dejad que una persona dicte instrucciones mientras otra maneja el robot. Cualquier participante puede optar por observar las pruebas a una distancia cómoda.

## 🔗 Referente oficial adaptado

Hemos tomado como punto de partida [Case 18: Codey Rocky avoids obstacles](https://support.makeblock.com/hc/en-us/articles/7463724329879-Case-18-Codey-Rocky-avoids-obstacles). Esta situación es una propuesta propia con contexto, secuencia y materiales verificables para el centro; no reproduce ni sustituye el material oficial. Comprobad siempre el modelo de robot y los accesorios disponibles.
