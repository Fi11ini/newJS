'use strict';

// let li = document.querySelectorAll("li");

// let styleOfHeader = getComputedStyle(li, "::before");
// let header = document.querySelector("h1");

// console.log();

// function removeChar(str) {
//     const newStr = str.substr(1, str.length - 2);
//     return newStr;
// }

// removeChar();

let numbers = [1, 2, 2];

// function squareSum(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] += total;
//         return total;
//     }
// }

// squareSum();
// console.log(total);

// function basicOp(operator, value1, value2) {
//     switch (operator) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

// console.log(basicOp('-', 2, 3));

function lovefunc(flower1, flower2) {
    let result;
    if ((flower1 + flower2) % 2 === 1) {
        result = true;
    } else if ((flower1 + flower2) % 2 === 0) {
        result = false;
    }
    return result;
}

console.log(lovefunc(1, 2));
