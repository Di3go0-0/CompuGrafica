const canvas = document.getElementById('canvas');
let lienzo = canvas.getContext('2d');

const dibujarLinea = (xinicial, yinicial, xfinal, yfinal) => { 
    lienzo.beginPath();
    lienzo.strokeStyle = "Black";
    lienzo.lineWidth = 5;

    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    
    lienzo.stroke();
    lienzo.closePath();
}

const LimpiarCanvas = () =>{
    lienzo.clearRect(0, 0, canvas.width, canvas.height);
}

const RellenarFigura = (color) => {
  lienzo.fillStyle = color;
  lienzo.fill();
}


Punto1 = () => {
  LimpiarCanvas();
  //Parte Superior
  dibujarLinea(500, 100, 673.205, 200)
  dibujarLinea(500, 100, 153.5898, 300)
  dibujarLinea(153.5898, 300,326.7945,400)
  dibujarLinea(673.205, 200, 326.7945, 400)

  //Lado Izquierdo
  dibujarLinea(153.5898, 300, 153.5898, 700)
  dibujarLinea(326.7945, 400, 326.7945, 600)
  dibujarLinea(153.5898, 700, 500, 900)
  dibujarLinea(326.7945, 600, 500, 700)
  dibujarLinea(500, 900, 500, 700)

  //parte in ferior
  dibujarLinea(500, 700, 846.410, 500)
  dibujarLinea(500, 900, 846.410, 700)
  dibujarLinea(846.410, 700, 846.410, 500)

  //parte medio
  dibujarLinea(846.410, 500, 673.205, 200)
  dibujarLinea(326.7945, 600, 500, 500)
  dibujarLinea(500, 500, 673.205, 600)
  dibujarLinea(500, 500, 500,300)
  dibujarLinea(500, 300, 673.205,600)
  RellenarFigura("blue");
}

Punto2 = () => {
  LimpiarCanvas();
  //Parte Superior
  dibujarLinea(500, 100, 846.41, 300)
  dibujarLinea(500, 100, 153.5898, 300)
  dibujarLinea(153.5898, 300,326.7945,400)
  dibujarLinea(326.7945, 400,500 ,300)
  dibujarLinea(846.41, 300, 673.2049, 400)
  dibujarLinea(500,300 ,673.2049,400)

  //Lado Izquierdo
  dibujarLinea(153.5898, 300, 153.5898, 700)
  dibujarLinea(326.7945, 400, 326.7945, 600)
  dibujarLinea(153.5898, 700, 500, 900)
  dibujarLinea(326.7945, 600, 500, 700)
  dibujarLinea(500, 900, 500, 700)

  //parte inferior
  dibujarLinea(500, 700, 673.205, 600)
  dibujarLinea(500, 900, 846.410, 700)
  dibujarLinea(846.410, 700, 846.410, 300)
  
  //parte medio
  dibujarLinea(326.7945, 600, 500, 500)
  dibujarLinea(500, 500, 673.205, 600)
  dibujarLinea(673.2049,400,673.205, 600 )
  dibujarLinea(500, 300, 500,500)

  
}

Punto3 = () => {
  LimpiarCanvas();
  //Parte Superior
  dibujarLinea(500, 100, 673.205, 200)
  dibujarLinea(500, 100, 153.5898, 300)
  dibujarLinea(326.7949, 200, 500,300)
  dibujarLinea(500,300, 673.205, 200)

  dibujarLinea(500, 300, 673.205, 600)
  dibujarLinea(673.205, 200,846.410, 500 )



  //Lado Izquierdo
  dibujarLinea(153.5898, 300, 153.5898, 700)
  dibujarLinea(153.5898, 700, 500, 900)
  dibujarLinea(326.7945, 600, 500, 700)
  dibujarLinea(500, 900, 500, 700)
  dibujarLinea(153.5898, 300, 326.7945, 600)

  //parte in ferior
  dibujarLinea(500, 700, 846.410, 500)
  dibujarLinea(500, 900, 846.410, 700)
  dibujarLinea(846.410, 700, 846.410, 500)

  //parte medio
  dibujarLinea(326.7945, 600, 500, 500)
  dibujarLinea(500, 500, 673.205, 600)
  dibujarLinea(500, 500, 326.7949, 200)

}

Punto4 = () => {
  LimpiarCanvas();
  //Parte Superior
  dibujarLinea(500, 100, 673.205, 200)
  dibujarLinea(500, 100, 153.5898, 300)
  dibujarLinea(326.7949, 200, 500,300)
  dibujarLinea(500,300, 673.205, 200)

  dibujarLinea(500,300, 500, 500)
  dibujarLinea(673.205, 200, 673.205, 400)



  //Lado Izquierdo
  dibujarLinea(153.5898, 300, 153.5898, 700)
  dibujarLinea(153.5898, 700, 500, 900)
  dibujarLinea(153.5898, 300, 500, 900)

  //parte in ferior
  
  dibujarLinea(500, 900, 846.410, 700)
  dibujarLinea(846.410, 700, 846.410, 500)

  dibujarLinea(673.205, 400, 846.410, 500)


  //parte medio
  dibujarLinea(326.7945, 600, 673.205, 400)
  dibujarLinea(500, 500, 326.7949, 200)
  dibujarLinea(846.410, 500, 673.2049,600)
  dibujarLinea(326.7945, 600, 673.2049,600)
  dibujarLinea(500, 900, 673.2049,600)
}




document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("figura1").addEventListener("click", Punto1);
    document.getElementById("figura2").addEventListener("click", Punto2);
    document.getElementById("figura3").addEventListener("click", Punto3);
    document.getElementById("figura4").addEventListener("click", Punto4);
});
