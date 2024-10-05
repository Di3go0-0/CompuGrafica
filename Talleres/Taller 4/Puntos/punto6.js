import readline from 'readline-sync';

const Cadenas = () => {
    let cantidad = parseInt(readline.question('¿Cuántas cadenas va a introducir? '));
    while (isNaN(cantidad) || cantidad <= 0) {
        console.log('Por favor, introduzca un número válido mayor que 0.');
        cantidad = parseInt(readline.question('¿Cuántas cadenas va a introducir? '));
    }

    let sumatoriaLongitudes = 0;
    let longitudes = [];

    for (let i = 0; i < cantidad; i++) {
        let cadena = readline.question(`Escriba la cadena ${i + 1}: `);
        let longitud = cadena.length;
        longitudes.push(longitud);
        sumatoriaLongitudes += longitud;
    }

    console.log('Longitudes de las cadenas:');
    longitudes.forEach((longitud, index) => {
        console.log(`Cadena ${index + 1}: ${longitud}`);
    });

    console.log(`La sumatoria de todas las longitudes es: ${sumatoriaLongitudes}`);
}

// Llamar a la función para ejecutar el programa
// solicitarCadenas();

export default Cadenas;