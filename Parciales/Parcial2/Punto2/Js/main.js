
const canvas = document.getElementById('canvas');
let lienzo = canvas.getContext('2d');

let ultimaPosicion = { x: 0, y: 10000 };

const dibujarLinea = (xinicial, yinicial, xfinal, yfinal) => { 
    lienzo.beginPath();
    lienzo.strokeStyle = "Black";
    lienzo.lineWidth = 50;

    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    
    lienzo.stroke();
    lienzo.closePath();
};

const LimpiarCanvas = () => {
    lienzo.clearRect(0, 0, canvas.width, canvas.height);
    ultimaPosicion = { x: 0, y: 10000 };  // Reiniciar la última posición al limpiar
};

document.getElementById('clear').addEventListener('click', LimpiarCanvas);

document.getElementById('coordinate-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío del formulario

    const input = document.getElementById('coordinates').value;
    const coords = input.split(',');

    // Verificar que se hayan introducido 2 valores
    if (coords.length !== 2) {
        alert('Debes introducir 2 valores separados por coma');
        return; // Salir de la función si hay un error
    }

    const x = parseInt(coords[0].trim());
    const y = 10000 - parseInt(coords[1].trim());

    // Verificar que los valores sean números
    if (isNaN(x) || isNaN(y)) {
        alert('Debes introducir valores numéricos');
        return; // Salir de la función si hay un error
    }

    if (x < 0 || x > 10000 || y < 0 || y > 10000) {
      alert('Los valores deben estar entre 0 y 10000');
      return; // Salir de la función si hay un error
    }

    // Dibujar la línea desde la última posición hasta la nueva
    dibujarLinea(ultimaPosicion.x, ultimaPosicion.y, x, y);

    // Actualizar la última posición
    ultimaPosicion = { x: x, y: y };
});

