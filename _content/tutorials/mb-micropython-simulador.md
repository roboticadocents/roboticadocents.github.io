---
title: "micro:bit: programar con MicroPython y depurar con el simulador"
description: "Leer los botones A/B en Python, mostrar iconos, probar la indentación y enviar el programa a una micro:bit."
robot: microbit
level: "Avanzado"
duration: 50 min
order: 7
image: _assets/tutorials/mb-python-microbit-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Cread una insignia que muestre una cara feliz al pulsar A y una cara pensativa al pulsar B. Primero la probaréis en el simulador y después en la placa. No hace falta saber Python: copiad el ejemplo y cambiad un icono para ver el resultado.

- Abrir el Python Editor oficial y localizar el código, el simulador, la referencia y los avisos de error.
- Relacionar los botones A/B y la matriz 5 × 5 con instrucciones Python.
- Reconocer `import`, un bucle `while`, las condiciones `if` y la indentación.
- Probar el comportamiento en el simulador antes de transferir el programa.
- Comparar MicroPython y MakeCode Python sin mezclar sus bibliotecas.

![](../../_assets/tutorials/mb-python-microbit-flat.webp)

## 🧰 Materiales y preparación

- BBC micro:bit V1 o V2 con cable USB; un portapilas es opcional para la prueba sin ordenador.
- Ordenador con navegador compatible y acceso a [python.microbit.org](https://python.microbit.org/).
- Tarjetas con `A`, `B`, `HAPPY` y `CONFUSED` para anticipar la relación entrada–programa–salida.
- MakeCode o capturas impresas para comparar las dos versiones de Python, si conviene.

Abrid un proyecto nuevo en el Python Editor y leed el tutorial de referencia integrado. El simulador permite empezar sin placa. El V1 y el V2 comparten los botones y la matriz necesarios para esta práctica; no uséis micrófono, altavoz ni logotipo táctil, que dependen del V2. Si queréis enviar el código directamente a la placa desde el navegador, seguid la compatibilidad y los pasos que indica el editor; si no, descargad el archivo `.hex` y transferidlo por USB.

## 🧩 Funciones y controles

- Python Editor oficial con MicroPython, simulador, autocompletado, referencia y resaltado de estructura y errores.
- MicroPython sobre la placa: `button_a`, `button_b` y `display` con la matriz LED.
- Transferencia del programa a la micro:bit o prueba previa sin hardware.
- Diferencia entre MicroPython y MakeCode Python, que usa funciones de evento y una biblioteca propia de MakeCode.

## 👣 Paso a paso

### 1. Exploramos el simulador y el panel de referencia

Abrid el Python Editor y localizad las pestañas de referencia, ideas y API, el área de edición y el simulador. Elegid una instrucción de pantalla en la referencia y arrastradla al editor. Ejecutad un ejemplo con el botón de reproducción del simulador y probad los controles que simulan los botones de la placa.

### 2. Copiad y ejecutad el programa

Copiad el programa siguiente. Antes de ejecutarlo, marcad qué líneas se repiten y qué salida corresponde a cada botón.

```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
    if button_b.is_pressed():
        display.show(Image.CONFUSED)
```

`from microbit import *` carga las funciones de la placa; `while True` mantiene las comprobaciones activas; cada `if` prueba un botón; `display.show(...)` muestra un icono. Las líneas interiores deben ir indentadas. Si pulsáis A y B a la vez, las dos condiciones pueden ejecutarse en el mismo ciclo: observad qué dibujo queda visible y explicad el orden de las instrucciones.

### 3. Depurad en el Python Editor

Ejecutad primero el código en el simulador. Cambiad un icono y volved a probar A y B. Después eliminad temporalmente los espacios de una línea interior para ver cómo el resaltado o el mensaje de error ayuda a localizar la indentación incorrecta; deshaced el cambio y comprobad que el programa vuelve a ejecutarse. No descarguéis la versión con error a la placa.

### 4. Transferid el programa a una micro:bit

Conectad la placa por USB y usad la opción «Send to micro:bit» si el navegador y los permisos son compatibles. Si esta opción no aparece, descargad el `.hex`, abrid la unidad de la micro:bit y copiadlo. Esperad a que la transferencia acabe; después probad A y B en la placa real y comparad el resultado con el simulador.

### 5. Comparad con los bloques de MakeCode

En MakeCode, podéis hacer la misma prueba con bloques. Este ejemplo muestra una cara para cada botón:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
})
```

Ejecutad el proyecto de MakeCode y pulsad primero A y después B. Para ver la versión textual, seleccionad **Python** en la parte superior de MakeCode. Comparadla con el programa de MicroPython: las dos hacen una prueba parecida, pero usan nombres y formas de organizar las órdenes diferentes.

MakeCode y el editor de MicroPython son herramientas diferentes: no copiéis las órdenes de uno dentro del otro. Probad A+B en cada proyecto y anotad qué observáis; no hace falta que reaccionen igual cuando se pulsan los dos botones a la vez.

## 🧪 Comprobación y resolución de problemas

Haced cuatro pruebas en el simulador y en la placa: A, B, ningún botón y A+B a la vez. Comprobad la respuesta de cada botón en el simulador y en la placa. Para depurar, comprobad importación, indentación, nombre de imagen, transferencia acabada y editor elegido. Cambiad una única cosa cada vez; si el simulador responde pero la placa no, revisad primero que el archivo se ha transferido a la micro:bit correcta.

## 🛡️ Uso y seguridad

Podéis comprobar el programa en el simulador antes de transferirlo. Desconectad el cable agarrando el conector y no presionéis ni dobléis el borde dorado de la placa.

## 🔗 Fuentes y límites

La [guía oficial del Python Editor](https://microbit.org/get-started/user-guide/python-editor/) describe referencia, fragmentos, resaltado, errores, autocompletado, simulador y transferencia. El artículo de la fundación [MakeCode Python y MicroPython](https://support.microbit.org/support/solutions/articles/19000111744-makecode-python-and-micropython) compara las dos sintaxis y sus modelos de ejecución. El editor Python necesita haberse cargado inicialmente; después puede funcionar sin conexión en las condiciones indicadas en la [guía oficial de uso sin conexión](https://microbit.org/get-started/user-guide/offline/). Las funciones de micrófono, altavoz y logotipo táctil no forman parte de esta práctica y requieren micro:bit V2.
