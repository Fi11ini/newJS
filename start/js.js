'use strickt';

let massive = [1, 2, 5, 4];
let massiveSecond = [2, 3, 5, 5, 5];
let desert = [];

function findAverage(numbers) {
    const initialValue = 0;
    const sumWithInitial = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
    return initialValue;
}

console.log(findAverage(massive));
// Expected output: 10
