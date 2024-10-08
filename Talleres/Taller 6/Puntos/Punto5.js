import { getRandomInt } from './Helpers/ramdomNumber.js';

const numbers = [];

const randomNumbers = (N) => {
    for (let i = 0; i < N; i++) {
        numbers.push(getRandomInt(0, 999));
    }
}

const reemplaceNumbers = () => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            numbers[i] = "Par";
        }
    }
}

const printThings = (list) => {
    for (let i = 0; i < list.length; i++) {
        process.stdout.write(list[i].toString() + " ");
    }
}

const Main = () => {
    console.log("Numero aleatorios:");
    randomNumbers(20);
    printThings(numbers);
    console.log("\nNumeros reemplazados:");
    reemplaceNumbers();
    printThings(numbers);
}

export default Main;