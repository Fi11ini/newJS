let test = 'ooxx'


function checkXOBalance(inputStr) {
    inputStr = inputStr.toLowerCase();

    let countX = 0;
    let countO = 0;

    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === 'x') {
            countX++;
        } else if (inputStr[i] === 'o') {
            countO++;
        }
    }
    return countX === countO;
}


const result = checkXOBalance(test);
console.log(result);