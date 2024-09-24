import readline from 'readline-sync';
import Punto1 from './Puntos/punto1.js';
import Punto2 from './Puntos/punto2.js';
import Punto3 from './Puntos/punto3.js';
import Punto4 from './Puntos/punto4.js';
import Punto5 from './Puntos/punto5.js';
import Punto6 from './Puntos/punto6.js';

function mostrarMenu() {
    console.log('Seleccione una opción:');
    console.log('1. Punto 1');
    console.log('2. Punto 2');
    console.log('3. Punto 3');
    console.log('4. Punto 4');
    console.log('5. Punto 5');
    console.log('6. Punto 6');
    console.log('7. Salir');
}

function ejecutarMenu() {
    let opcion = 0;
    while (opcion !== 7) {
        mostrarMenu();
        opcion = parseInt(readline.question('Ingrese su opción: '));
        switch (opcion) {
            case 1:
                Punto1();
                break;
            case 2:
                Punto2();
                break;
            case 3:
                Punto3();
                break;
            case 4:
                Punto4();
                break;
            case 5:
                Punto5();
                break;
            case 6:
                Punto6();
                break;
            case 7:
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida, por favor intente de nuevo.');
        }
    }
}

// Llamar a la función para ejecutar el menú
ejecutarMenu();