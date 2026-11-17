---
title: "micro:bit V2: registrar y analizar datos"
description: "Configurar el registro de MakeCode, recoger lecturas de luz y analizarlas en una tabla."
robot: microbit
level: "Intermedio"
duration: 50 min
order: 7
image: _assets/tutorials/mb-registre-dades-flat.webp
---

## 🎯 ¿Qué vamos a aprender?

Con una micro:bit V2, registrad cinco lecturas de luz: tres en un lugar claro y dos haciendo sombra. Después comparadlas con las anotaciones. Los datos se guardan en la placa y no se envían a Internet automáticamente.

- Crear una columna con un nombre claro.
- Registrar una lectura cada vez que se pulsa el botón A.
- Recuperar los datos de la memoria y representarlos en una tabla o gráfico.
- Diferenciar una variación observada de una conclusión sobre toda esta prueba o el día.

![](../../_assets/tutorials/mb-registre-dades-flat.webp)

## 🧰 Materiales y preparación

- micro:bit V2; la V1 no admite este registro de datos.
- Ordenador con MakeCode y conexión USB para transferir el programa y recuperar los datos.
- Una tarjeta para hacer sombra y una hoja con dos opciones: «luz» y «sombra».

En MakeCode, cread un proyecto nuevo. Antes de descargarlo, guardad los datos anteriores que necesitéis: un programa nuevo puede borrar el registro visible.

## 🧩 Funciones y controles

- Registro de datos de MakeCode en micro:bit V2 con la extensión `datalogger`.
- Sensor de luz de la matriz LED, empleado para comparar las condiciones de la prueba.
- Almacenamiento local que se conserva al desconectar la alimentación hasta que se borra o se sobrescribe el registro.
- Recuperación de las filas al conectar la placa a un ordenador; visualización en tabla o gráfico y exportación cuando el navegador/editor lo ofrece.
- El registro persistente de este tutorial es de V2; las lecturas dependen de las condiciones de la prueba.

## 👣 Paso a paso

### 1. Planificad los datos

Preguntaos: «¿Cambia la lectura cuando hacemos sombra a la placa?». Prepararéis una columna llamada `llum` y pulsaréis A una vez por cada muestra.

Antes de registrar datos, podéis probar la luz en un **proyecto separado**. Guardad primero cualquier registro anterior que queráis conservar; después, cargad esta prueba y pulsad A en una zona clara y en una de sombra:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
```

La primera lectura puede ser cero mientras se activa el sensor; pulsad A otra vez. Este programa solo muestra un número: todavía no guarda ningún dato. En el paso siguiente crearéis el programa de registro.

### 2. Preparad el registro

Añadid la extensión **datalogger** desde «Extensiones». El [ejemplo oficial de registro manual en MakeCode](https://makecode.microbit.org/#pub:_gHx1MJdJziaE) muestra las piezas; para esta prueba, dejad solo la columna de luz.

1. En **al iniciar**, poned el bloque para definir títulos de columna y escribid `llum`. Añadid una primera lectura del nivel de luz en una variable, sin registrarla: activa el sensor antes de las muestras.
2. En **al pulsar el botón A**, añadid el bloque de registrar datos y asociad `llum` con el nivel de luz.
3. Añadid un icono de confirmación, una pausa de un segundo y «limpiar la pantalla».

Para montar las piezas, usad los bloques equivalentes en la versión de MakeCode disponible. También podéis abrir la pestaña **JavaScript**, copiar este ejemplo y volver a **Bloques** para ver la traducción:

```makecode
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumns(["llum"])
let lecturaInicial = input.lightLevel()
input.onButtonPressed(Button.A, function () {
    datalogger.logData([datalogger.createCV("llum", input.lightLevel())])
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
})
```

La variable inicial activa el sensor y no se añade a la tabla. El programa registra una fila cada vez que pulsáis A y muestra una señal de confirmación. Esperad a que desaparezca antes de hacer la muestra siguiente. Si el bloque de registro no está disponible en el editor, no sustituyáis el dato por un número mostrado en la pantalla: ese programa no guardaría ninguna fila. La [guía oficial de registro](https://microbit.org/get-started/user-guide/data-logging/) muestra el apartado «Manual logging».

### 3. Haced una captura controlada

Transferid el programa a la V2 y esperad a que acabe la transferencia. Haced tres lecturas con luz y dos haciendo sombra con la tarjeta. Pulsad A una vez por muestra, esperad a que desaparezca el icono y anotad en papel si era una prueba con luz o con sombra. Mantened la placa en la misma posición.

### 4. Recuperad los datos y conservadlos

Para recuperar los datos, conectad de nuevo la micro:bit al ordenador. Abrid la unidad **MICROBIT** y haced doble clic en el archivo **MY_DATA**: se abrirá una tabla en el navegador. Comparad las filas con las anotaciones y, si queréis, copiad o descargad los datos. Para ver los gráficos de MY_DATA hace falta conexión a Internet; sin conexión podéis consultar la tabla. La columna de tiempo cuenta desde el último reinicio de la placa, no indica la hora del día. Antes de descargar un programa nuevo o borrar el registro, guardad una copia de la tabla. Para empezar otra prueba, seguid el procedimiento de borrado de la guía oficial y volved a preparar los títulos de las columnas.

## 🧪 Comprobación y resolución de problemas

Comparad las cinco filas con la hoja: ¿hay tres pruebas con luz y dos con sombra? Si falta una fila, volved a pulsar A y anotad la nueva muestra. Los datos del simulador son simulados; distinguidlos de los que recoge la placa.

## 🛡️ Uso y seguridad

Mantened el dispositivo estable y no cubráis los componentes con materiales que acumulen calor. No registréis información personal y guardad una copia de los datos antes de borrarlos o cargar otro programa.

## 🔗 Fuentes y límites

La guía oficial de [registro de datos de micro:bit](https://microbit.org/get-started/user-guide/data-logging/) describe la extensión `datalogger`, la captura manual y automática, la recuperación y el almacenamiento local de micro:bit V2. La [vista general de funciones](https://microbit.org/get-started/features/overview/) detalla las diferencias entre V1 y V2. Las lecturas dependen del sensor y de las condiciones de la prueba; el registro no calibra los instrumentos ni valida por sí mismo una hipótesis.
