# Icones editables de les fitxes de robots

Aquests SVG són les fonts originals que llig el generador. Es poden modificar
manualment amb Inkscape o un editor de text. El generador no els sobreescriu.

| Fitxer | Ús |
| --- | --- |
| `endavant.svg` | Avançar |
| `enrere.svg` | Retrocedir |
| `gir-dreta.svg` | Girar a la dreta |
| `gir-esquerra.svg` | Girar a l’esquerra |
| `repetir.svg` | Repetir tota la base de Tale-Bot |
| `bucle-inici.svg` | Inici del bucle de Coding Set; el nombre es dibuixa davall |
| `bucle-fi.svg` | Final del bucle de Coding Set |
| `defineix-funcio.svg` | Definició de la funció en la fila inferior |
| `crida-funcio.svg` | Crida a la funció des de la fila principal |

Conserveu els noms i el `viewBox="0 0 64 64"`. Dibuixeu dins d’eixe espai,
amb fons transparent i traços foscos prou grossos per imprimir en blanc i negre.
Els SVG contenen només el símbol: el contorn de la tecla o peça i els nombres
els dibuixa el generador. Les representacions inicials són esquemes didàctics,
no reproduccions exactes de les peces comercials.

Després de modificar-los, executeu des de l’arrel del projecte:

```sh
python3 _scripts/generate-robot-paper-kits.py
node _scripts/build.js
```

Això actualitza els PDF individuals, els reculls i solucionaris i els esquemes
SVG que mostren les activitats del web, tant de Tale-Bot com de Coding Set.
Editeu les icones d’aquesta carpeta, no els esquemes generats de `../kits/`.
El procés falla si falta una icona o no es pot llegir: no utilitza una còpia antiga.

Requisits: Python 3, pycairo, PyGObject i librsvg (en Debian/Ubuntu:
`python3-cairo python3-gi python3-gi-cairo gir1.2-rsvg-2.0`). No necessita xarxa.
