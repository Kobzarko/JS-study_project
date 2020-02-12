// Функции-конструкторы являются обычными функциями. Но есть два соглашения:

// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна вызываться при помощи оператора "new".

function User(name){
	this.name = name;
	this.isAdmin = false;
}

let user = new User("Vasya");
console.log(user);

// new function() { … }

let user1 = new function(){
	this.name = "Kolya";
	this.isAdmin =false;
}

console.log(user1);


function User(name) {
  if (!new.target) { // в случае, если вы вызвали без оператора new
    return new User(name); // ...добавим оператор new за вас
  }

  this.name = name;
}

let John = User("John"); // переадресовывает вызовы на new User
console.log(John.name); // Вася


// Возврат значения из конструктора return --------------------------------------

function BigUser(){
	this.name = "Bigly";
	return {name: "Smally"}; // return this object
}

console.log(new BigUser().name);  // Smally 

function SmallUser(){
	this.name = "Little";
	return; // return this
}

console.log(new SmallUser().name);  // Little


// Отсутствие скобок

// let user = new User; // <-- без скобок
// // то же, что и
// let user = new User();


// Создание методов в конструкторе -------------------------------------------------

function Booser(name){
	this.name = name;

	this.sayHi = function(){
		console.log("Hi alkash " + this.name);
	}
}

let vova = new Booser("BoBa");

vova.sayHi(); 

// Функции-конструкторы или просто конструкторы являются обычными функциями, 
// именовать которые следует с заглавной буквы.

// Конструкторы следует вызывать при помощи оператора new. 
// Такой вызов создаёт пустой this в начале выполнения и возвращает заполненный в конце.


// Две функции - один объект ------------------------------------->

// function A(){
	
// 	this.isAdmin = false;
// }

// function B(){
	
// 	this.isAdmin = false;
// }

// let a = new A;
// let b = new B;

// console.log(a == b); // false


// let obj = {};

// function C() { return obj; }
// function D() { return obj; }

// alert( new A() == new B() ); // true


// Калькулятор ----------------------------------------------------->

// function Calculator(){
	

// 	this.read = function(){
// 		 this.a = +prompt("enter a",0);
// 		 this.b = +prompt("enter b",0);
// 	}

// 	this.sum = function(){
// 		if (this.a!=null && this.b!=null) {
// 			return this.a + this.b; 
// 		} 
// 		else{
// 			console.log("variables are "+ this.a + " "+ this.b);
// 		}
// 	}

// 		this.mul = function(){
// 		if (this.a!=null && this.b!=null) {
// 			return this.a * this.b; 
// 		} 
// 		else{
// 			console.log("variables are "+ this.a + " "+ this.b);
// 		}
// 	}
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// console.log("Sum = " + calculator.sum());
// console.log("Mul = " + calculator.mul());


// Создаём Accumulator ---------------------------------------------->

function Accumulator(startingValue){
	this.value = startingValue;

	this.read = ()=>{
    this.value += +prompt('enter value', '');
   
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений