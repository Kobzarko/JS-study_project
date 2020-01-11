// let num = 50;

// if (num < 49) {
//   console.log("Неверно");
// } else if (num > 100) {
//   console.log("Too much");
// } else {
//   console.log("AllRight");
// }
// // тернарный оператор
// num == 50 ? console.log("AllRight") : console.log("Bad");

// // switch

// switch (num) {
//   case num < 49:
//     // statements_1
//     console.log("Bad");
//     break;

//   case num > 100:
//     console.log("Too much");
//     break;
//   case num > 80:
//     console.log("Still too much");
//     break;
//   case num == 50:
//     console.log("Right");
//   default:
//     // statements_def
//     console.log("new Error(message: string)");
//     break;
// }

// // loops

// newFunction();
// let numer = 50;
// function newFunction() {
//   while (numer < 55) {
//     console.log(numer);
//     numer++;
//   }
// }

// do {
//   console.log(numer);
//   numer++;
// } while (numer < 55);

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// functions

// let fun = 20;

// function showFirstMessage(text){
// 	alert(text);
// 	let fun = 10;
// 	console.log(fun);
// }

// showFirstMessage("Hello World");
// console.log(fun);

function calc(a, b) {
  return a + b;
}

console.log(calc(3, 4));

console.log(calc(5, 8));

function retVar() {
  let num = 50;
  return num;
}

let anotherNum = retVar();
console.log(anotherNum);

// function expression присваивание футнкции в переменную
// не можем вызвать заранее
// используем только после того как ее обьявили

let calculater = function(c, d) {
  return c * d;
};

// стандарт ES6 стрелочная функция

let func = (x, y) => x + y;

// свойства методов

let str = "test";
console.log(str.length);

// Верхний регистр
console.log(str.toUpperCase());
// Нижний реристр
console.log(str.toLowerCase());

let ten = "10.7";

// округляет превращая в число

//console.log(Math.round(ten));

// парсим в число
console.log(parseInt(ten));
console.log(parseFloat(ten));
