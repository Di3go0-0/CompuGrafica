const canvas = document.getElementById('canvas');
let lienzo = canvas.getContext('2d');

const dibujarLinea = (xinicial, yinicial, xfinal, yfinal) => { 
    lienzo.beginPath();
    lienzo.strokeStyle = "Grey";
    lienzo.lineWidth = 5;

    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    
    lienzo.stroke();
    lienzo.closePath();
}

const dibujarForma = (points, color) => {
    lienzo.beginPath();
    lienzo.moveTo(points[0][0], points[0][1]); // Moverse al primer punto
    for (let i = 1; i < points.length; i++) {
        lienzo.lineTo(points[i][0], points[i][1]); // Dibujar las líneas entre los puntos
    }
    lienzo.closePath(); // Cerrar el camino
    lienzo.fillStyle = color; // Establecer color de relleno
    lienzo.fill(); // Rellenar la figura
    lienzo.stroke(); // Dibujar el borde si lo deseas
}

const LimpiarCanvas = () =>{
    lienzo.clearRect(0, 0, canvas.width, canvas.height);
}


Punto1 = () => {
  LimpiarCanvas();

  const Bordes = [[500,100], [673.205,200], [846.410,500], [846.410, 700], [500,900], [153.5898,700], [153.5898,300], [500,100]];
  dibujarForma(Bordes, "black");
  
  //Parte Superior
  dibujarLinea(500, 100, 673.205, 200) // Borde 
  dibujarLinea(500, 100, 153.5898, 300) //borde
  dibujarLinea(153.5898, 300,326.7945,400) 
  dibujarLinea(673.205, 200, 326.7945, 400)

  //Lado Izquierdo
  dibujarLinea(153.5898, 300, 153.5898, 700) //borde
  dibujarLinea(326.7945, 400, 326.7945, 600)
  dibujarLinea(153.5898, 700, 500, 900)
  dibujarLinea(326.7945, 600, 500, 700)
  dibujarLinea(500, 900, 500, 700)

  //parte in ferior
  dibujarLinea(500, 700, 846.410, 500)
  dibujarLinea(500, 900, 846.410, 700) //Borde
  dibujarLinea(846.410, 700, 846.410, 500) //Borde

  //parte medio
  dibujarLinea(846.410, 500, 673.205, 200) //Borde
  dibujarLinea(326.7945, 600, 500, 500)
  dibujarLinea(500, 500, 673.205, 600)
  dibujarLinea(500, 500, 500,300)
  dibujarLinea(500, 300, 673.205,600)


}

Punto2 = () => {

  LimpiarCanvas();

  const Bordes = [[500,100], [846.41, 300], [846.410,500], [846.410, 700], [500,900], [153.5898,700], [153.5898,300], [500,100]];
  dibujarForma(Bordes, "blue");
  
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

  const Bordes = [[500,100], [673.205,200], [846.410,500], [846.410, 700], [500,900], [153.5898,700], [153.5898,300], [500,100]];
  dibujarForma(Bordes, "red");

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

  const Bordes = [[500,100], [673.205,200], [673.205, 400], [846.410, 500],[846.410, 700], [500,900], [153.5898,700], [153.5898,300], [500,100]];
  dibujarForma(Bordes, "Yellow");

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
