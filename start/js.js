let string = 'Vadim'

function doubleChar(str) {
    let newString = str.split('')
    .map((letter) => letter + letter )
    .join('')
    return newString
}


console.log(doubleChar(string));