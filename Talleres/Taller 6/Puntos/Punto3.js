import prompt from './Helpers/readline.js';

const numbers = [];

const askForNumber = () => {
    const input = prompt('Ingrese un número de más de dos cifras: ');
    const number = parseInt(input, 10);
    if (validateNumber(number)) {
        numbers.push(number);
        handleAnswer();
        return;
    } 
        console.log('El número debe ser de más de dos cifras.');
        askForNumber();
};

const validateNumber = (number) => {
    return !isNaN(number) && number >= 100;
};

const handleAnswer = () => {
    const answer = prompt('¿Desea ingresar otro número? (s/n): ');
    if (answer.toLowerCase() === 's') {
        askForNumber();
        return
    } 
    console.log('Números ingresados:', numbers);
    numbers.forEach(num => {
        console.log(`Número: ${num}, Cantidad de cifras: ${num.toString().length}`);
    });
    
};

export default askForNumber;
