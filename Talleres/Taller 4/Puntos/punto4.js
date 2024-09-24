import readline from 'readline-sync';

function solicitarNumeros() {
    let cantidad = parseInt(readline.question('¿Cuántos valores va a introducir? '));
    let sumatoria = 0;
    let anterior = null;

    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(readline.question('Escriba un número: '));
        while (anterior !== null && numero === anterior) {
            console.log(`¡${numero} no es distinto de ${anterior}!`);
            numero = parseInt(readline.question(`Escriba un número distinto de ${anterior}: `));
        }
        sumatoria += numero;
        anterior = numero;
    }

    console.log('Gracias por su colaboración.');
    console.log(`La sumatoria de todos los números es: ${sumatoria}`);
}

// Llamar a la función para ejecutar el programa
// solicitarNumeros();
export default solicitarNumeros;