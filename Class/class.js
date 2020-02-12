// Синтаксис «class»
//  Класс может иметь только один конструктор
//  Методы в классе не разделяются запятой
// Синтаксис классов отличается от литералов объектов, не путайте их. Внутри классов запятые не требуются.
//  В JavaScript класс – это разновидность функции.


class User{

	constructor(){
		this.name = prompt("What is your name?", 'name');
	}

	// constructor(name){
	// 	this.name = name;
	// }

	sayHi(){
		alert("Hi " + this.name);
	}
}

//  Новый объект 
let user = new User();
user.sayHi();


// класс - это функция
alert(typeof User); // function

// ...или, если точнее, это метод constructor
alert(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
alert(User.prototype.sayHi); // alert(this.name);

// в прототипе ровно 2 метода
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// Геттеры/сеттеры, другие сокращения------------------------------------------------------

class User {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }

}

let user = new User("Иван");
alert(user.name); // Иван

user = new User(""); // Имя слишком короткое.






// Базовый синтаксис для классов выглядит так:--------------------------------------------

class MyClass {
  prop = value; // свойство
  constructor(...) { // конструктор
    // ...
  }
  method(...) {} // метод
  get something(...) {} // геттер
  set something(...) {} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}