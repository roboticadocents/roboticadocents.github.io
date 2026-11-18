---
title: "Voz e IA: función externa y simulación con Codey Rocky"
description: "Distinguir el sensor de sonido integrado del reconocimiento de habla, probar una extensión en línea solo si está disponible y simular las órdenes con seguridad."
robot: codey-rocky
level: "Avanzado"
duration: 50 min
order: 3
image: _assets/tutorials/cr-veu-ia.webp
---

## 🎯 ¿Qué vamos a aprender?

Comparad qué pasa cuando Codey oye una palmada y qué haría falta para que interpretara una palabra. El robot puede indicar si un sonido es más fuerte o más flojo, pero no incluye un módulo que reconozca palabras.

- Comparar una lectura de sonido ambiental con una orden de voz interpretada por software.
- Comprobar si la extensión de servicios cognitivos está disponible antes de utilizarla.
- Vincular una entrada de prueba a una respuesta visible y segura, sin activar movimientos inesperados.
- Identificar cuándo una prueba necesita un servicio de voz externo.

![](../../_assets/tutorials/cr-veu-ia.webp)

## 🧰 Materiales y preparación

- Codey Rocky de la dotación con batería suficiente y espacio de trabajo delimitado.
- Ordenador con mBlock 5, micrófono del dispositivo y conexión de red solo si el servicio en línea está autorizado.
- Tarjetas grandes con las órdenes ficticias «marcha», «para» y «gira» para una simulación sin voz.
- Un registro para anotar componente, programa, respuesta y dependencias de cada prueba.

Empezad con el sensor de sonido de Codey. La prueba de palabras es opcional y solo se hace si el centro dispone de un servicio compatible y autoriza su uso; si no, usad las tarjetas.

## 🧩 Funciones y controles

- Sensor de sonido integrado de Codey: permite leer intensidad sonora y hacer que una condición responda a un umbral; no transcribe ni entiende palabras.
- Pantalla LED, indicador RGB y altavoz como salidas para comunicar un estado de prueba.
- Reconocimiento de habla como función de software o módulo Neuron compatible, no como sensor integrado del Codey Rocky base.
- Conexión y servicios en línea como dependencias externas que pueden no estar disponibles o tener límites de idioma y cuenta.

## 👣 Paso a paso

### 1. Medid el sonido con el robot base

Conectad Codey a mBlock y buscad el bloque que lee el nivel de sonido. Preparad un programa que lo muestre continuamente en la pantalla. Esta representación os ayuda a encontrar los bloques equivalentes en vuestra versión:

```mblock
cuando comience el programa
para siempre
mostrar el nivel de sonido
fin
```

Cargad o ejecutad el programa según el modo elegido. Anotad qué muestra en silencio y después con una palmada suave; repetid tres veces. El número ayuda a comparar sonidos: no es una medida de decibelios ni una palabra reconocida.

### 2. Comprobad y, si podéis, probad el servicio de voz

Comprobad si disponéis de una extensión o de un servicio de reconocimiento de habla compatible. Anotad su nombre y la lengua disponible antes de activar el micrófono. Si el servicio funciona y está autorizado, probad una frase ficticia y haced que aparezca un icono cuando coincida con la palabra prevista; probad también una frase diferente y el silencio. Mantened los motores detenidos. Una lectura de sonido alto no significa que Codey haya entendido una palabra.

### 3. Simulad las órdenes si no hay servicio

Una persona elige una tarjeta —«marcha», «para» o «gira»— y otra muestra el icono acordado. Anotad el resultado como **simulación**: esta prueba ayuda a preparar la prueba, pero no comprueba que el robot reconozca la voz.

_Ilustración decorativa: el símbolo no representa un servicio concreto. El robot base no incorpora reconocimiento de habla._

## 🧪 Comprobación y resolución de problemas

Comprobad por separado la lectura del sensor de sonido y la respuesta de la extensión externa. Si el servicio de voz no está disponible, podéis probar la respuesta del programa con una entrada de texto ficticio; esto no comprueba reconocimiento de habla. Mantened los motores detenidos.

## 🛡️ Uso y seguridad

Usad palabras ficticias o texto de prueba, sin datos personales. Mantened los motores desactivados durante las pruebas de voz. Antes de activar un servicio externo, comprobad si envía audio fuera del dispositivo y revisad sus condiciones de privacidad.

## 🔗 Fuentes y límites

Makeblock describe el [sensor de sonido integrado de Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky) como una lectura del nivel sonoro, y en las [FAQ oficiales](https://support.makeblock.com/hc/en-us/articles/1500004266501-FAQs-on-Codey-Rocky) indica que el modelo base no tiene un módulo de reconocimiento de habla; la voz requeriría un módulo Neuron compatible. La [guía oficial del caso de voz](https://support.makeblock.com/hc/en-us/articles/7463171094295-Case-11-Voice-activated-RGB-LED-indicator) trabaja el nivel de sonido, no la transcripción de palabras. Las extensiones de IA y los servicios en línea dependen de la versión y de la red disponible.
