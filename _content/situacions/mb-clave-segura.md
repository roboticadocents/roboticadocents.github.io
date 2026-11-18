---
active: true
title: "Clave segura, datos protegidos"
description: "¿Cómo podemos reconocer riesgos digitales y probar un algoritmo didáctico de contraseñas con micro:bit?"
robot: "microbit"
robot_label: "micro:bit"
cycle: "tercer-cicle"
cycle_label: "Tercer ciclo"
subject: "tecnologia"
subject_label: "Tecnología, Matemáticas y Ciudadanía Digital"
theme: "ciutadania"
theme_label: "Seguridad y privacidad"
duration: "4 sesiones · 200 min"
challenge: "¿Cómo podemos explicar los riesgos digitales y probar un algoritmo de contraseñas con datos completamente ficticios?"
---

![Una placa BBC micro:bit sobre una mesa con tarjetas en blanco y un candado de papel para hablar de contraseñas.](../../_assets/situacions/mb-clau-segura.webp)

_La placa representa estados y pasos de un algoritmo; no guarda ni protege contraseñas reales._

## 🌱 Situación e intención

La biblioteca escolar prepara una guía para que la comunidad reconozca riesgos digitales y entienda cómo se diseña un algoritmo para generar una combinación ficticia. Los equipos trabajan con mensajes inventados, deciden qué indicios hay que verificar, describen los límites del “hacking ético” y prototipan una secuencia de tokens con micro:bit. El dispositivo muestra índices o iconos de demostración: no es un gestor de contraseñas, no guarda credenciales y no produce claves adecuadas para cuentas reales.

La unidad oficial tiene tres lecciones para 11–14 años y se imparte idealmente después de *Computing fundamentals*. Esta versión local para tercer ciclo incorpora una activación de pseudocódigo, tarjetas de apoyo y casos preparados; mantiene la progresión de ciberseguridad, contraseñas fuertes, algoritmo con variables/selección y programación, prueba, depuración y evaluación.

## 🎯 Aprendizajes y vocabulario

- Identificar riesgos digitales y distinguir una demostración escolar de una protección de seguridad real.
- Descomponer un algoritmo didáctico que combina caracteres ficticios y reglas de selección.
- Programar una salida simbólica y probar casos sin introducir credenciales o datos reales.
- Explicar por qué una secuencia aleatoria de micro:bit no es una clave criptográfica segura.

## 🧰 Preparación, datos y materiales

Micro:bit, MakeCode, tarjetas de mensajes totalmente ficticios, cuadrículas de algoritmo, hoja de prueba y tarjetas de tokens neutros (palabras sin referencia personal, símbolos y dígitos). No uséis servicios en línea, cuentas, credenciales reales ni datos del alumnado. El generador queda desconectado de redes y la placa borra la pantalla al final de cada prueba. Preparad ejemplos de mensajes sin URL activa, archivo adjunto, código QR ni instrucción que el alumnado pueda seguir.

En la parte de programación, usad una selección aleatoria de MakeCode solo como recurso didáctico: no tiene garantía criptográfica y puede ser reproducible o previsible. La salida representa categorías/índices para probar el flujo; no guardéis ni aprovechéis ninguna combinación generada como contraseña. Si la versión de editor no permite mostrar una secuencia segura y efímera, el alumnado simula los tokens con tarjetas y deja la placa en una salida simbólica.

## 📅 Secuencia didáctica · cuatro sesiones de 50 minutos

### **Sesión 1 · Ciberseguridad, malware y hacking ético (What is cyber security?).**

#### Fase 1 · Activamos y predecimos

Distinguid datos públicos, privados y de acceso restringido con tarjetas inventadas. Predecid qué indicios harían sospechoso un mensaje y qué paso seguro se puede dar sin abrirlo.

#### Fase 2 · Exploramos y construimos

Clasificad seis ejemplos impresos: mensaje esperado, aviso urgente, adjunto no solicitado, petición de credencial, premio inesperado y remitente desconocido. Para cada uno, marcad indicios, qué no podéis saber solo mirándolo y una respuesta segura: no hacer clic, no descargar, no responder o consultar a una persona adulta o el canal oficial escrito. No abráis ningún contenido real.

#### Fase 3 · Explicamos y registramos

Comparad una auditoría autorizada en un entorno de práctica con el acceso a la cuenta de otra persona. Registrad quién da permiso, qué sistema se incluye y dónde acaba la prueba; no hagáis escaneos, pruebas de contraseña ni conexiones a redes reales.

#### Fase 4 · Aplicamos y mejoramos

Dibujad dispositivo, cuenta ficticia, dato y persona de apoyo. Añadid una medida preventiva y una respuesta si hay duda; revisad el mapa para que no contenga ningún dato real.

#### Fase 5 · Comprobamos y reflexionamos

Practicad una frase de reporte segura sin reenviar el mensaje y justificad una frontera de autorización. **Evidencia:** clasificación razonada, límite de autorización y diagrama de datos.

### **Sesión 2 · Contraseñas y planificación del algoritmo (Strong passwords).**

#### Fase 1 · Activamos y predecimos

Contrastad longitud, imprevisibilidad, unicidad y no reutilización con ejemplos abstractos. Predecid qué característica importa en cada caso; no proclaméis «fuerte» una cadena solo porque contiene símbolos.

#### Fase 2 · Exploramos y construimos

Definid el prototipo como un patrón didáctico de tres posiciones con un token de cada conjunto neutro, nunca una clave de uso real. Preparad listas ficticias cortas de palabras o índices, símbolos inventados y dígitos de prueba. Ningún token puede provenir de nombres, fechas o preferencias personales.

#### Fase 3 · Explicamos y registramos

Escribid pseudocódigo: inicializad variables para posición y token; seleccionad una opción de un conjunto; avanzad la posición; repetid hasta llenar tres lugares; mostrad solo el índice simbólico y borradlo al terminar. Anotad qué debería pasar en cada paso.

#### Fase 4 · Aplicamos y mejoramos

Planificad casos con conjunto vacío o longitud no permitida, índice mínimo y máximo, selección fuera de rango y categoría omitida. Revisad el pseudocódigo si algún caso no tiene una respuesta definida.

#### Fase 5 · Comprobamos y reflexionamos

Otra pareja sigue el algoritmo con las listas de prueba y comprueba las predicciones. **Evidencia:** pseudocódigo, listas ficticias y predicciones de los casos de prueba.

### **Sesión 3 · Programamos el prototipo con micro:bit (Making a password generator).**

#### Fase 1 · Activamos y predecimos

Asignad una variable a cada posición y comparadla con el pseudocódigo. Predecid qué índices simbólicos mostraría una ronda con tokens de demostración y qué debe hacer la orden de borrado.

#### Fase 2 · Exploramos y construimos

Programad inicialización, selección, condición y repetición limitada. Cada botón inicia una única generación de prueba o borra la salida. No mostréis una cadena completa que alguien pueda confundir con una credencial real; si el editor no permite una salida efímera, simulad los tokens con tarjetas y dejad la placa en una salida simbólica.

#### Fase 3 · Explicamos y registramos

Ejecutad tres rondas con tokens de aula, anotad los índices y comprobad que cada posición se completa. Comparad el resultado con la predicción y el pseudocódigo.

#### Fase 4 · Aplicamos y mejoramos

Señalad una diferencia entre el código y el algoritmo. Cambiad una parte —inicialización, límite, orden o borrado— y volved a ejecutar la misma prueba.

#### Fase 5 · Comprobamos y reflexionamos

Volved al estado neutro y confirmad que no hay ninguna credencial real ni historial guardado. **Evidencia:** código anotado, diagrama, resultados de las rondas y comprobación de borrado de la pantalla.

### **Sesión 4 · Probamos, depuramos y evaluamos sin afirmar seguridad real.**

#### Fase 1 · Activamos y predecimos

Preparad una matriz de pruebas con conjunto vacío, índice mínimo y máximo, categoría omitida, reinicio, entrada inesperada y repetición de tokens. Anotad la salida prevista antes de ejecutar cada caso.

#### Fase 2 · Exploramos y construimos

Ejecutad los casos en el prototipo didáctico y comparad las salidas previstas y observadas. Si una prueba no se puede hacer de manera efímera o local, representadla con tarjetas; no introduzcáis servicios, cuentas ni credenciales reales.

#### Fase 3 · Explicamos y registramos

Clasificad cada error como problema de inicialización, límite, orden o estado de reinicio. Registrad el caso, el resultado y la causa que el equipo considera más probable.

#### Fase 4 · Aplicamos y mejoramos

Cambiad una parte del programa y repetid el mismo caso, así como los casos relacionados. Revisad si la corrección mantiene el flujo previsto sin guardar ni mostrar una cadena completa.

#### Fase 5 · Comprobamos y reflexionamos

Evaluad si el prototipo sigue el algoritmo y explicad tres límites: aleatoriedad no criptográfica, salida visible y ausencia de almacenamiento o gestión segura. Presentad una práctica de protección basada en una fuente fiable y explicad por qué no usaríais el resultado de la placa en una cuenta. **Evidencia:** matriz con seis casos, versiones antes/después, retorno de otro equipo y declaración de límites.

## 📊 Criterios de éxito y evaluación

Recoged tarjetas clasificadas con justificación, mapa de datos y permisos, pseudocódigo, variables, tabla de pruebas, código revisado y declaración de límites. Valorad si el equipo (1) reconoce indicios de riesgo y sabe detenerse/consultar; (2) diferencia prueba autorizada de acceso no permitido; (3) planifica un algoritmo con selección, variables y repetición delimitada; (4) prueba límites y depura con evidencias; y (5) no confunde un prototipo con un generador seguro. No se evalúa la “calidad” de una contraseña de uso real ni se pide mostrar ningún secreto.

## 🔐 Privacidad, bienestar y respuesta a incidentes

No pidáis a nadie que comparta o introduzca contraseñas reales, que reutilice datos de una cuenta o que revele qué servicio utiliza. No fotografiéis credenciales ni guardéis las combinaciones de prueba; borrad salidas y tarjetas al finalizar. Ningún mensaje de clase se envía, se abre o se reenvía. Si aparece una situación real, paraos, no investiguéis la cuenta por vuestra cuenta y seguid el protocolo del centro con una persona adulta responsable. Evitad etiquetar o culpabilizar a quien recibe un mensaje engañoso: el análisis es del diseño del mensaje y de la respuesta segura.

## 🔗 Unidad oficial adaptada

[Introduction to cyber security](https://www.microbit.org/teach/lessons/cyber-security/) consta de tres lecciones y recomienda haber trabajado antes *Computing fundamentals*. [What is cyber security?](https://microbit.org/teach/lessons/cyber-security-what-is/) trata la importancia, el hacking ético, el malware y la protección de datos/dispositivos; [Strong passwords](https://microbit.org/teach/lessons/cyber-security-strong-passwords/) pide diseñar, probar y depurar un generador con selección y variables; [Making a password generator](https://microbit.org/teach/lessons/cyber-security-password-generator/) lleva el pseudocódigo a MakeCode y evalúa la depuración. Esta adaptación conserva los objetivos y crea casos ficticios, andamiaje de pseudocódigo y pruebas específicas. La fuente se dirige a 11–14 años; la secuencia de tercer ciclo reduce el alcance, evita cuentas reales y no presenta el producto didáctico como generador criptográfico.
