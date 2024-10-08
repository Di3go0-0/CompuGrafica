import { getRandomInt } from './Helpers/ramdomNumber.js';

const numbers = [];

const randomNumbers = (N) => {
    for (let i = 0; i < N; i++) {
        numbers.push(getRandomInt(0, 999));
    }
} 

const printRandomNumbers = (N) => {
    for (let i = 0; i < N; i++) {
        console.log(numbers[i]);
    }
}

const Main = () => {
    randomNumbers(100);
    printRandomNumbers(25);
}

export default Main;