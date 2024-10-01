const canvas = document.getElementById('canvas');
let lienzo = canvas.getContext('2d');

function dibujarLinea(xinicial, yinicial, xfinal, yfinal, color){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;

    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarCirculo(x, y, radio, color) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.arc(x, y, radio, 0, 2 * Math.PI);
    lienzo.stroke();
    lienzo.closePath();
}

function LimpiarCanvas(){
    lienzo.clearRect(0, 0, canvas.width, canvas.height);
}

function Punto1(){
    LimpiarCanvas()
    dibujarCirculo(250, 250, 250, "green")
    dibujarCirculo(550, 250, 250, "blue")
    dibujarCirculo(400, 550, 250, "red")
}

function Punto2(){
    LimpiarCanvas()

    dibujarLinea(400, 200, 0, 300, "blue")
    dibujarLinea(400, 200, 800, 300, "red")

    dibujarLinea(0, 300, 400, 450, "green")
    dibujarLinea(800, 300, 400, 450, "yellow")

    dibujarLinea(0, 300, 0, 500, "blue")
    dibujarLinea(800, 300, 800, 500, "blue")
    dibujarLinea(400, 450, 400, 650, "purple")

    dibujarLinea(0, 500, 400, 650, "gold")
    dibujarLinea(800, 500, 400, 650, "green")

    //marco interno
    dibujarLinea(400, 230, 90, 305, "grey")
    dibujarLinea(400, 230, 710, 305, "brown")

    dibujarLinea(90, 305, 400, 420, "violet")
    dibujarLinea(710, 305, 400, 420, "orange")
    
    dibujarLinea(400, 230, 400, 420 , "black")
}

class TallerV{
    Triangulo(){
        LimpiarCanvas()


        dibujarLinea(400, 100, 100, 700, 'black')
        dibujarLinea(400, 100, 700, 700, 'black')
        dibujarLinea(100, 700, 700, 700, 'black')
    
    }
    Rectangulo(){
        LimpiarCanvas()

        dibujarLinea(300, 100, 300, 700, "black")
        dibujarLinea(300, 100, 500, 100, "black")
        dibujarLinea(500, 100, 500, 700, "black")
        dibujarLinea(300, 700, 500, 700, "black")
    }
    Trapecio(){
        LimpiarCanvas()

        dibujarLinea(200, 200, 600, 200, "black")
        dibujarLinea(0, 600, 800, 600, "black")

        dibujarLinea(200, 200, 0, 600, "black")
        dibujarLinea(600, 200, 800, 600, "black")
    }
    Hexagono(){
        LimpiarCanvas()

        dibujarLinea(250, 100, 550, 100, "black")
        dibujarLinea(250, 700, 550, 700, "black")

        dibujarLinea(100, 250, 100, 550, "black")
        dibujarLinea(700, 250, 700, 550, "black")

        dibujarLinea(250, 100, 100, 250, "black")
        dibujarLinea(550, 100, 700, 250, "black")
        dibujarLinea(100, 550, 250, 700, "black")
        dibujarLinea(700, 550, 550, 700, "black")
    }
}

let Punto3 = new TallerV()
Punto1()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("punto1").addEventListener("click", Punto1);
    document.getElementById("punto2").addEventListener("click", Punto2);
    document.getElementById("Triangulo").addEventListener("click", Punto3.Triangulo.bind(Punto3));
    document.getElementById("Rectangulo").addEventListener("click", Punto3.Rectangulo.bind(Punto3));
    document.getElementById("Trapecio").addEventListener("click", Punto3.Trapecio.bind(Punto3));
    document.getElementById("Hexagono").addEventListener("click", Punto3.Hexagono.bind(Punto3));
});