// const balance = 120;
// const bonusBalance = 900;
// const isBanned = true;
// const isExist = false;
// const isSelling = false;

// const canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist;
// console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);

let array = [1, 2, 3, 5];

function simpleMultiplication(number) {
    let newNumber = 0;
    if (number % 2 === 0) {
        newNumber = number * 8;
    } else {
        newNumber = number * 9;
    }
    return newNumber;
}
console.log(simpleMultiplication(1));
