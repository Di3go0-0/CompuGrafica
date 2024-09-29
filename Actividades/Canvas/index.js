const canvas = document.getElementById('canvas');
let lienzo = canvas.getContext('2d');

function dibujarLinea(xinicial, yinicial, xfinal, yfinal, color){
    lienzo.beginPath();
    lienzo.strokeStyle = color;

    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarLinea(xinicial, yinicial, xfinal, yfinal, color, grosor, espacio){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    // lienzo.lineWidth = grosor;
    lienzo.setLineDash([grosor, espacio]);

    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarCirculo(x, y, radio, color){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.arc(x, y, radio, 0, 2 * Math.PI);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarCirculo(x, y, radio, color, grosor, espacio){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.setLineDash([grosor, espacio]);
    lienzo.arc(x, y, radio, 0, 2 * Math.PI);
    lienzo.stroke();
    lienzo.closePath();
}


function Triangulo(){

    dibujarLinea(400, 100, 100, 700, 'black')
    dibujarLinea(400, 100, 700, 700, 'black')
    dibujarLinea(100, 700, 700, 700, 'black')

}

function Circulo(){
    lienzo.beginPath();
    lienzo.strokeStyle = 'black';
    lienzo.arc(400, 400, 300, 0, 2 * Math.PI);
    lienzo.stroke();
    lienzo.closePath();
}

function Cubo(){
    dibujarLinea(100, 300, 500, 300, 'black')
    dibujarLinea(500, 300, 500, 700, 'black')
    dibujarLinea(500, 700, 100, 700, 'black')
    dibujarLinea(100, 700, 100, 300, 'black')

    dibujarLinea(500, 700, 700, 500, 'black')
    dibujarLinea(500, 300, 700, 100, 'black')
    dibujarLinea(100, 300, 300, 100, 'black')


    dibujarLinea(300, 100, 700, 100, 'black')
    dibujarLinea(700, 100, 700, 500, 'black')

    dibujarLinea(300, 100, 300, 500, 'black', 15, 10)
    dibujarLinea(300, 500, 100, 700, 'black', 15, 10)
    dibujarLinea(300, 500, 700, 500, 'black', 15, 10)
}


function Figura(){
    dibujarLinea(400, 100, 170, 180, 'black')
    dibujarLinea(400, 100, 630, 180, 'black')
    dibujarLinea(170, 180, 250, 300, 'black')
    dibujarLinea(630, 180, 550, 300, 'black')
    dibujarLinea(250, 300, 550, 300, 'black')

    dibujarLinea(170, 180, 170, 580, 'black')
    dibujarLinea(630, 180, 630, 580, 'black')
    dibujarLinea(250, 300, 250, 700, 'black')
    dibujarLinea(550, 300, 550, 700, 'black')

    dibujarLinea(170, 580, 250, 700, 'black')
    dibujarLinea(630, 580, 550, 700, 'black')
    dibujarLinea(250, 700, 550, 700, 'black')

    dibujarLinea(400, 100, 400, 500, 'black', 15, 10)
    dibujarLinea(400, 500, 170, 580, 'black', 15, 10)
    dibujarLinea(400, 500, 630, 580, 'black', 15, 10)

}

function dibujarGato() {
    // Cabeza
    dibujarCirculo(400, 400, 150, 'black'); // Cabeza del gato

    // Orejas
    dibujarLinea(300, 300, 350, 200, 'black'); // Oreja izquierda
    dibujarLinea(350, 200, 400, 300, 'black'); // Oreja izquierda parte 2

    dibujarLinea(400, 300, 450, 200, 'black'); // Oreja derecha
    dibujarLinea(450, 200, 500, 300, 'black'); // Oreja derecha parte 2

    // Ojos
    dibujarCirculo(360, 370, 20, 'black'); // Ojo izquierdo
    dibujarCirculo(440, 370, 20, 'black'); // Ojo derecho

    // Pupilas
    dibujarCirculo(360, 370, 10, 'black'); // Pupila izquierda
    dibujarCirculo(440, 370, 10, 'black'); // Pupila derecha

    // Nariz
    dibujarLinea(390, 420, 410, 420, 'black'); // Nariz del gato

    // Boca
    dibujarLinea(390, 420, 380, 440, 'black'); // Parte izquierda de la boca
    dibujarLinea(410, 420, 420, 440, 'black'); // Parte derecha de la boca

    // Cuerpo
    dibujarCirculo(400, 600, 200, 'black'); // Cuerpo del gato

    // Cola
    dibujarLinea(500, 650, 650, 600, 'black'); // Cola del gato
}


function dibujarCorazon(x, y, tamano, color) {
    let ancho = tamano / 2;
    lienzo.beginPath();
    lienzo.moveTo(x, y + ancho / 2);

    // Parte izquierda del corazón
    lienzo.bezierCurveTo(
        x - ancho, y - ancho,  // Punto de control superior izquierdo
        x - ancho * 1.5, y + ancho,  // Punto de control inferior izquierdo
        x, y + ancho * 1.5    // Punto inferior del corazón
    );

    // Parte derecha del corazón
    lienzo.bezierCurveTo(
        x + ancho * 1.5, y + ancho,  // Punto de control inferior derecho
        x + ancho, y - ancho,  // Punto de control superior derecho
        x, y + ancho / 2    // Punto de unión superior
    );

    lienzo.fillStyle = color;
    lienzo.fill();
    lienzo.closePath();
}

function dibujarEscenaRomantica() {
    // Fondo romántico de color suave
    lienzo.fillStyle = "#ffe4e1"; // Rosa claro
    lienzo.fillRect(0, 0, canvas.width, canvas.height);

    // Corazones separados
    dibujarCorazon(300, 400, 150, 'red'); // Primer corazón más a la izquierda
    dibujarCorazon(500, 400, 150, 'red'); // Segundo corazón más a la derecha
}

// Llama a la función para dibujar la escena romántica
dibujarEscenaRomantica();
