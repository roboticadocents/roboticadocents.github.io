---
title: Codey Rocky
description: "El robot con pantalla LED de 16 × 8, sensores y movimiento con orugas"
icon: 🐼
cicle: "Primer y segundo ciclo"
age: "Primer y segundo ciclo"
order: 4
specs:
- ✓ Pantalla de matriz LED de 16 × 8
- ✓ Giroscopio de 6 ejes
- ✓ Tracción por orugas
- ✓ Sensor infrarrojo y de color
- ✓ Conexión USB/Bluetooth
image: _assets/robots/codey-rocky.webp

# Informació i recursos oficials del fabricant
tech_info: >
  Codey Rocky se programa con bloques o Python en mBlock 5. Permite controlar el movimiento del chasis con orugas, mostrar patrones en la matriz LED de 16 × 8, emitir sonidos y modificar la iluminación RGB. Los programas pueden responder a los botones, al potenciómetro, al sonido, a la luz y a la orientación de Codey. El sensor infrarrojo/de color de Rocky permite detectar obstáculos, identificar colores y seguir líneas; el emisor y receptor infrarrojo de Codey permiten intercambiar señales. Dispone de conexión USB y Bluetooth según el entorno utilizado. Consulta la [documentación técnica de Codey Rocky](https://support.makeblock.com/hc/en-us/articles/1500004392242-About-Codey-Rocky).
official_resources:
- title: Guías y casos de Codey Rocky
  href: https://support.makeblock.com/hc/en-us/sections/360001829193-Codey-Rocky
  description: Guías de configuración, programación con mBlock y retos con sensores.
- title: Codey Rocky & Neuron Discovery
  href: https://support.makeblock.com/hc/en-us/articles/25494707612823-Codey-Rocky-Neuron-Discovery
  description: Curso con secuencias, bucles, condiciones, sensores y actividades desconectadas; algunas partes requieren Neuron.
---
Codey Rocky está formado por dos partes desacoplables: «Codey» (el cerebro con pantalla matricial de 128 LED, sensor de luz, micrófono, altavoz y giroscopio) y «Rocky» (el chasis con orugas y sensores de color e infrarrojos). Se programa con bloques tipo Scratch o Python mediante el software mBlock 5.

## De la observación al código

Codey Rocky combina el módulo Codey con el chasis Rocky y se programa con mBlock. La matriz de LED, los botones y los movimientos observables permiten empezar con eventos; los sensores del chasis abren retos de línea, color y distancia. Separar «¿qué lee el sensor?» de «¿qué debería hacer el programa?» evita que las pruebas se conviertan en una sucesión de tanteos al azar.
