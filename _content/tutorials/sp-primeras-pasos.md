---
title: "Primeras pasos: el Hub inteligente y el primer programa"
description: "Conectar el Hub SPIKE Prime, explorar la matriz de 5 × 5, los seis puertos y el sensor de orientación."
robot: spike
level: "Iniciación"
duration: 35 min
order: 1
image: _assets/tutorials/sp-primeres-passes-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Conectad el Hub grande SPIKE Prime y cread vuestro primer programa: una cara que aparece y desaparece. Después identificad los botones, los puertos A–F y el sensor de orientación. Solo necesitáis el Hub: no hace falta encajar piezas LEGO ni construir ningún modelo.

- Comprobar la carga del Hub y conectarlo por Bluetooth o USB a SPIKE App.
- Programar la matriz de 25 píxeles para mostrar iconos y animaciones.
- Identificar los seis puertos de entrada/salida A–F y los botones del Hub grande SPIKE Prime.
- Distinguir las lecturas de inclinación del sensor de seis ejes de gestos como sacudir o tocar el Hub.

![](../../_assets/tutorials/sp-primeres-passes-flat.webp)

## 🧰 Materiales y preparación

- Hub grande SPIKE Prime (modelo 45601)
- App LEGO SPIKE instalada
- Cable USB

## 🧩 Funciones y controles

- Hub SPIKE Prime: matriz LED 5 × 5, botón central, botones laterales, puertos y sensor de orientación de seis ejes.
- Conexión y programación con SPIKE App; los puertos y elementos conectados hay que identificarlos en cada prueba.
- Batería recargable del Hub; el estado de carga y los indicadores pueden variar según la versión de la app.

## 👣 Paso a paso

### 1. Encended y conectad el Hub Prime

Comprobad que el Hub tiene carga y encendedlo con el botón central. Abrid SPIKE App, cread un proyecto y seleccionad **Conectar**. Elegid el Hub que muestra el mismo nombre o indicador que el vuestro. También podéis conectarlo con el cable USB. Si la app pide una actualización, seguid las instrucciones en pantalla y esperad a que acabe antes de desconectarlo.

### 2. Mostrad un icono en la matriz

Cread un proyecto con bloques de palabras o de iconos. Cuando empiece el programa, mostrad un icono en la matriz 5 × 5 y borradlo. Comprobad que se trata de una matriz de luz del Hub y no de una pantalla de píxeles en color.

```spikeapp
quan comença el programa
mostra una cara feliç
espera (2) segons
esborra la pantalla
```

### 3. Leed el sensor de orientación

En un proyecto nuevo, buscad en la app el evento que detecta una inclinación del Hub y añadid una orden para mostrar una flecha. Transferid y ejecutad el programa. Poned el Hub sobre la mesa e inclinadlo en la dirección elegida: debería aparecer la flecha. Devolvedlo a una posición estable antes de repetir. Si no responde, revisad el sentido seleccionado en el evento y que el proyecto sea el que habéis ejecutado. El sensor de seis ejes combina giroscopio y acelerómetro; no es una brújula que indique el norte.

### 4. Explorad los botones y los indicadores

Con el Hub desconectado de motores y sensores, usad los botones izquierdo y derecho para recorrer los programas guardados y el botón central para iniciar uno. Observad el indicador del Hub mientras se conecta y ejecuta el proyecto. Los botones laterales navegan por los programas del Hub; no son botones A y B de un controlador separado.

> **💡 Consejo de uso:** Identificad el nombre del Hub antes de conectarlo por Bluetooth, especialmente si hay otros dispositivos encendidos cerca.

## 🧪 Comprobación y resolución de problemas

Ejecutad el programa y comprobad que la cara aparece, se mantiene dos segundos y se borra. Si no pasa, revisad la conexión y el orden de los bloques. Identificad los puertos A–F por las letras del Hub antes de conectar accesorios.

## 🛡️ Uso y seguridad

Empezad con el Hub sobre la mesa y sin motores conectados. No interrumpáis una actualización del firmware. Desconectad el cable USB agarrando el conector.

## 🔗 Fuentes y límites

La [ficha técnica y guía oficial de SPIKE Prime](https://education.lego.com/en-us/teacher-resources/lego-education-spike-prime/support-technical-info/lego-education-spike-prime-support-technical-info-product-info/) describe el Hub grande con seis puertos, matriz 5 × 5, BLE, altavoz, sensor de seis ejes y batería recargable, así como los pasos de conexión y actualización. Esta guía es para el Hub grande SPIKE Prime; SPIKE Essential tiene un hub diferente con solo dos puertos. LEGO indica que continuará dando soporte a SPIKE App hasta el 30 de junio de 2031 ([actualización de LEGO Education](https://education.lego.com/en-us/spike-update-2026/)).
