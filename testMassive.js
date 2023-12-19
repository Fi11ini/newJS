let memberOne = { name: "Andrey", surname: "Krish", age: 31 };
let memberTwo = { name: "Vadim", surname: "Krish", age: 30 };
let memberThree = { name: "Polina", surname: "Krish", age: 29 };
let memberFour = { name: "Tonya", surname: "Krish", age: 62 };
let memberFive = { name: "Nikita", surname: "Krish", age: 13 };
let memberSix = { name: "Marik", surname: "Krish", age: 2 };

let myFamily = [
  { name: "Andrey", surname: "Krish", age: 31 },
  { name: "Vadim", surname: "Krish", age: 30 },
  { name: "Polina", surname: "Krish", age: 29 },
  { name: "Tonya", surname: "Krish", age: 62 },
  { name: "Nikita", surname: "Krish", age: 13 },
  { name: "Marik", surname: "Krish", age: 2 },
];

let double = myFamily[5].age;

let result = 88 / double;

console.log(result);

if (result <= 45) {
  alert("Congrats! 44 меньше твоего числа!");
} else {
  alert("44 больше твоего числа");
}
