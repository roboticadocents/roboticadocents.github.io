---
title: "Primeros pasos: botones direccionales y la tecla Delete"
description: "Descubrir los botones de Tale-Bot Pro, probar un recorrido corto y aprender a borrarlo."
robot: tale-bot
level: "Iniciación"
duration: 30 min
order: 1
image: _assets/tutorials/tb-primeres-passes.webp
---

## 🎯 ¿Qué vamos a aprender?

Programad dos avances con los botones físicos. Comprobad cómo el robot guarda las órdenes y cómo borra la última antes de iniciar el recorrido.

- Distinguir las teclas Adelante, Atrás, Girar a la derecha y Girar a la izquierda.
- Aprender la rutina del botón Delete (X) para evitar acumular órdenes viejas.
- Comparar el desplazamiento real con las casillas de la cuadrícula.

![](../../_assets/tutorials/tb-primeres-passes.webp)

## 🧰 Materiales y preparación

- Tale-Bot Pro cargado.
- Cuadrícula o mapa plano, con la distancia entre casillas anotada.
- Cinta para marcar el punto de partida.
- Regla o cinta métrica para medir el recorrido.

## 🧩 Funciones y controles

- Botones direccionales, Play, borrado de órdenes e indicadores de programación.
- La distancia nominal de cada orden hay que probarla con el Tale-Bot concreto y el mapa utilizado.

## 👣 Paso a paso

### 1. Encended y limpiad la secuencia

Encended el Tale-Bot con el control posterior y esperad el saludo. Si no responde, ponedlo a cargar y volved a probarlo.

Antes de un camino nuevo, mantened pulsado el botón X más de un segundo y comprobad que los indicadores se apagan. Una pulsación breve, de menos de un segundo, elimina solo la última orden; reservadla para corregir una secuencia que queráis conservar.

### 2. Programad y probad una recta

Marcad el inicio y orientad el robot hacia delante. Pulsad:

```talebot
avanzar -> avanzar -> ejecutar
```

Observad dónde se detiene y medid la distancia recorrida. Comprobad el tamaño del paso de vuestro robot; no supongáis que cada orden equivale a una casilla de la cuadrícula. El movimiento también puede variar según el suelo.

```talebot
avanzar -> girar derecha -> borrar -> avanzar -> ejecutar
```

Para comprobar el borrado parcial, mantened X más de un segundo, introducid **Adelante → Derecha**, pulsad X brevemente y añadid **Adelante**. Revisad las órdenes con las tarjetas o los indicadores y pulsad Play: el robot debería hacer dos avances. Si gira, vaciad la secuencia y repetid con una pulsación breve más clara.

> **💡 Consejo de uso:** Mostrad que Tale-Bot gira sobre sí mismo: el giro cambia la dirección, pero no lo avanza hacia otra casilla.

## 🧪 Comprobación y resolución de problemas

Comprobad que el robot hace dos avances sin girar. Si gira, vaciad la secuencia y volved a introducir las órdenes. Revisad la orientación inicial y medid la distancia real antes de adaptarla a una cuadrícula.

## 🛡️ Uso y seguridad

Mantened el robot lejos de bordes y dejad libre el recorrido. Detenedlo antes de corregir las órdenes o cambiar su posición inicial.

## 🔗 Fuentes y límites

La [guía oficial de Tale-Bot Pro](https://matatalab.com/en/lesson4.2) muestra los botones direccionales, Play y Clear. El desplazamiento de cada orden puede variar según la configuración del robot y la superficie; medidlo antes de preparar la cuadrícula.
