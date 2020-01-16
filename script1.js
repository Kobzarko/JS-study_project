







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


