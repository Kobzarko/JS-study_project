// functions

// let fun = 20; // global variable 

// function showFirstMessage(text) {
//     alert(text);
//     let fun = 10; // local variable
//     console.log(fun);
// }

// showFirstMessage("Hello World");
// console.log(fun);



// console.log(calc(3, 4));

// console.log(calc(5, 8));

// // function declaration
// function calc(a, b) {
//     return a + b;
// }

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);


// Function Declaration
function sum(a, b) {
  return a + b;
}

// function declaration - функция объявленная в потоке кода
// создается до начала кода , можно вызвать до объявления
// Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).

// Function Expression
let sum = function (a, b) {
  return a + b;
};

// Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции.
//  В данном случае функция создаётся в правой части «выражения присваивания»
// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.



//function returning a function 

// let val = 7;
// function createAdder(){
//     function addNumbers(a,b){
//         let ret = a+b;
//         return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val,8);
// console.log('example of function returning a function =' , sum);

// замыкание 


function createCounter() {
  let counter = 0
  const myFunction = function () {
    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

// тернарный оператор в функциях

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function () {
    alert("Привет!");
  } :
  function () {
    alert("Здравствуйте!");
  };


//   Функции – это значения. Они могут быть присвоены, скопированы или объявлены в другом месте кода.
// Если функция объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration.
// Если функция была создана как часть выражения, то считается, что эта функция объявлена при помощи Function Expression.
// Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
// Функции, объявленные при помощи Function Expression, создаются, только когда поток выполнения достигает их.




// СТРЕЛОЧНЫЕ ФУНКЦИИ

let sum = (a, b) => a + b;

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3

// тоже что и
// let double = function(n) { return n * 2 }
let double = n => n * 2;

alert(double(3)); // 6

// Если нет аргументов, указываются пустые круглые скобки:

let sayHi = () => alert("Hello!");

sayHi();

// Многострочные стрелочные функции

let sum = (a, b) => { // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};

alert(sum(1, 2)); // 3


// вариант замены пустой функции

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."), // заменяем function ()  на пустые скобки
  () => {
    return alert("Вы отменили выполнение.");
  }
);

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


// callback functions
// возможность передать функцию другой функции в качестве аргумента

function first(y) {
  console.log(1);
  y();
}

function second(a, b) {
  console.log(a * b);
}

//first(second);
//second(4, 7);

//first(second(3,4)); // вызовет ошибку т.к. y() not a function

// используем функцию обертку 
first(function () {
  second(5, 7);
})

// или анонимная функция

first(function () {
  console.log(5 * 5);
})