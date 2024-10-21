# Taller 2

Este taller tiene como objetivo aprender a implementar etiquetas HTML y modelar una página web. A continuación, se describen los puntos a desarrollar:

## Enunciado

1. **Modelar una Imagen**:
   - Implementando etiquetas trate de modelar la siguiente imagen lo más parecido posible en estructura y usando los colores que ustedes consideren.

2. **Implementación de Etiquetas**:
   - Implemente las siguientes etiquetas, puede llevar un orden con el salto de línea usando la etiqueta `<br>` y para cada una especifique al menos tres atributos:
     - `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
     - `<img>`
     - `<video></video>`
     - `<table></table>`
     - `<textarea></textarea>`
   - Al final, incluya una conclusión acerca del funcionamiento de dichas etiquetas.

3. **Modificación de Apariencia**:
   - Implemente las siguientes etiquetas, luego haciendo uso del atributo `style` modifique la apariencia de la etiqueta.

4. **Diseño de un Cuestionario**:
   - Diseñe un cuestionario de al menos 20 preguntas, que esté centrado y contenga etiquetas `input` para que el usuario pueda ingresar los datos.

## Desarrollo

### 1. Modelar una Imagen

Para modelar la imagen proporcionada, se utilizó una estructura HTML básica y se aplicaron estilos CSS para lograr una apariencia similar.

### 2. Implementación de Etiquetas

#### Encabezados

```html
<h1 style="color: blue; text-align: center; font-size: 2em;">Encabezado 1</h1>
<h2 style="color: green; text-align: left; font-size: 1.75em;">Encabezado 2</h2>
<h3 style="color: red; text-align: right; font-size: 1.5em;">Encabezado 3</h3>
<h4 style="color: purple; text-align: justify; font-size: 1.25em;">Encabezado 4</h4>
<h5 style="color: orange; text-align: center; font-size: 1em;">Encabezado 5</h5>
<h6 style="color: brown; text-align: left; font-size: 0.75em;">Encabezado 6</h6>

```

#### Imagen

<img src="ruta/a/la/imagen.jpg" alt="Descripción de la imagen" width="300" height="200" style="border: 2px solid black;">

#### Video

<video width="320" height="240" controls style="border: 2px solid black;">
  <source src="ruta/al/video.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>

#### Tabla 

<table border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="background-color: #f2f2f2;">Encabezado 1</th>
      <th style="background-color: #f2f2f2;">Encabezado 2</th>
      <th style="background-color: #f2f2f2;">Encabezado 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
      <td>Dato 3</td>
    </tr>
    <tr>
      <td>Dato 4</td>
      <td>Dato 5</td>
      <td>Dato 6</td>
    </tr>
  </tbody>
</table>

## Conclusion Final

Este taller permitió familiarizarse con diversas etiquetas HTML y su uso para estructurar y dar formato a una página web. Además, se aprendió a utilizar el atributo style para modificar la apariencia de las etiquetas y a diseñar un cuestionario interactivo.