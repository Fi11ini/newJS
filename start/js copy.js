const firstName = prompt('Введите мужское имя')
const secondName = prompt('ВВедите женское имя')

const newFirstName = firstName
const newSecondName = secondName

const randomNumber = Math.floor(Math.random() * 100)




if(newFirstName === false ) {
    alert('Неправильно введено имя')
} else if(randomNumber < 33) {
    alert(`Совместимость имен ${newFirstName} и ${newSecondName} равна ${randomNumber} Вам следуем поискать человека с другим именем`)
} else if (randomNumber >= 33 && randomNumber < 66) {
    alert(`Совместимость имен ${newFirstName} и ${newSecondName} равна ${randomNumber} Совместимость хорошая, но может быть и лучше`)
} else if (randomNumber >=66) {
    alert(`Совместимость имен ${newFirstName} и ${newSecondName} равна ${randomNumber} Поздравляем! У вас хорошая совместимость!!!`)
} else {
    alert('Ошибка. Попробуйте еще раз')
}
