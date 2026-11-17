---
title: "Codey Rocky: del programa de bloques a Python en mBlock"
description: "Conectar Codey Rocky, cargar un programa de bloques e inspeccionar o editar la traducción a Python del modo Upload."
robot: codey-rocky
level: "Avanzado"
duration: 50 min
order: 6
image: _assets/tutorials/cr-python-upload.webp
---

## 🎯 ¿Qué vamos a aprender?

Haced que Codey muestre una cara al pulsar A y otra al pulsar B. Después cargad el programa en el robot y observad cómo mBlock lo representa en Python. No hace falta saber Python para hacer la primera prueba.

- Conectar Codey a mBlock 5 y seleccionar el dispositivo correcto.
- Distinguir la ejecución Live de la carga Upload.
- Crear dos eventos de botón con bloques y ejecutarlos sin conexión permanente.
- En modo Upload, abrir la vista Python generada por los bloques y buscar las acciones de los botones.
- Cambiar una acción y comprobar el resultado con el robot.

![](../../_assets/tutorials/cr-python-upload.webp)

## 🧰 Materiales y preparación

- Codey Rocky de la dotación, cargado y con el controlador bien acoplado al chasis.
- mBlock 5 para ordenador y cable micro-USB de la dotación.
- Superficie plana, con espacio libre alrededor de Rocky; se puede elevar el chasis para que las orugas no lo desplacen durante la primera comprobación.
- Tarjetas A/B con las dos expresiones que mostrará la matriz 16 × 8.

Abrid mBlock, añadid el dispositivo «Codey» de la biblioteca y conectadlo por USB. En modo Upload, comprobad primero que el programa de bloques funciona antes de abrir la vista Python. Según la edición y versión de mBlock, la etiqueta o la posición de la opción Python puede cambiar; si no aparece, actualizad el software disponible según las instrucciones oficiales o haced el ejercicio con la traducción de bloques que sí se muestre.

## 🧩 Funciones y controles

- Programación de Codey Rocky con bloques y Python en mBlock 5.
- Botones A y B del controlador Codey como entradas y matriz LED 16 × 8 como salida.
- Modo Live para ejecutar mientras Codey continúa conectado y modo Upload para transferir el programa al controlador.
- Vista de código Python generado por los bloques y uso de bibliotecas propias de Codey/Rocky.

## 👣 Paso a paso

### 1. Conectad el dispositivo Codey

Usad el cable micro-USB para conectar Codey al ordenador y encendedlo. En mBlock 5, añadid «Codey» y completad la conexión. Confirmad que el estado es conectado antes de crear el programa. Si usáis la versión web, seguid el método de conexión y el controlador mLink que indique la instalación disponible.

### 2. Cread el programa con bloques

Cread una pila de bloques para el botón A y otra para el B. Dibujad una cara diferente en cada bloque de pantalla:

```mblock
quan es prem el botó [A v]
mostra una cara feliç

quan es prem el botó [B v]
mostra una cara sorpresa
```

El dibujo es una guía: los nombres de los bloques pueden variar. Elegid **Live** y, con Codey conectado, probad A y B. Después elegid **Upload** y seguid las indicaciones de mBlock para preparar la carga.

### 3. Cargad y comprobad el programa

Seleccionad Upload y transferid el proyecto a Codey. Cuando la carga acabe, desconectad el cable solo si el programa ya se ha transferido y probad A y B. El programa cargado continúa funcionando sin conexión a mBlock. En Live, en cambio, el controlador debe mantener la conexión con el ordenador para que las órdenes se ejecuten en tiempo real.

### 4. Abrid la vista Python generada

Volved a conectar Codey, abrid el mismo proyecto en modo Upload y activad la opción de ver Python. Comparad la parte del botón A con la del B y buscad dónde aparecen las imágenes. El texto depende de la versión de mBlock; no hace falta copiarlo ni entender todas las líneas para continuar.

### 5. Modificad una instrucción y volved a probar

Guardad primero el proyecto. Volved a los bloques y cambiad solo el dibujo del botón A; después consultad de nuevo la vista Python para observar el cambio. Cargad el programa otra vez y probad A y B: A debe mostrar la nueva cara y B debe conservar la anterior.

En algunas versiones es posible editar Python directamente. Si lo probáis, hacedlo en una copia del proyecto: la traducción automática de los bloques a texto no garantiza que los cambios en texto vuelvan a convertirse en bloques.

## 🧪 Comprobación y resolución de problemas

Anotad qué pasa con A y B en la prueba Live con el cable conectado y en la prueba Upload después de cargar el programa. Si Python no aparece, comprobad que habéis seleccionado Codey, que estáis en Upload y que vuestra versión ofrece la vista de código.

## 🛡️ Uso y seguridad

Mantened el robot quieto durante la transferencia del programa. Antes de añadir órdenes de motor, dejad libre la zona y localizad el control de parada. Desconectad el cable agarrando el conector.

## 🔗 Fuentes y límites

La guía oficial de Makeblock [Program Codey Rocky with mBlock 5](https://support.makeblock.com/hc/en-us/articles/1500008637961-Program-Codey-Rocky-with-mBlock-5) confirma los modos Live/Upload y que, en Upload, se puede cambiar entre bloques y Python o ver el código correspondiente. La documentación de [transcodificación de Upload](https://support.makeblock.com/hc/en-us/articles/15236617061783-Configuration-Transcoding-Setting-for-the-Upload-Mode) muestra las bibliotecas `codey` y `rocky`. Las opciones de vista y edición dependen de la versión instalada; la guía no presupone una API manual estable ni una conexión a Internet durante la ejecución cargada.
