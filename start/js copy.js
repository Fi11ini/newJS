"use strict";

let array = [1, -4, 7, 9, 12];

function positiveSum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            total += array[i];
        }
    }
    return total;
}

console.log(positiveSum(array)); // return total
