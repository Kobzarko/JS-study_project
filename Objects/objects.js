'use strict'
// Объекты в JS 

// How create 

// let obj = new new Object();

// let obj = {};

// Properties of object 

// let obj = {
// 	name:'John'
// }

// obj.name = 'John';

// Methods of object's ( actions, functions)

// let obj = {
// 	sayName: function(){
// 		alert('John');
// 	}
// }

let user = {};

// присваивание значений свойству
user['likes birds'] = true;

// получение значений свойства
alert(user['likes birds']); // true

// delete this property
delete user['likes birds'];



let options = {
	width: 1024,
	height: 768,
	name: "text", // висячая запятая последняя запятая можно оставить

};

console.log(options.name);
options.bool = false;

options.colors = {
	border: "black",
	background: "red"
};

// удаление свойства

delete options.bool;

console.log(options);

// цикл for in
// вывод свойств и их значений
for (let key in options) {
	console.log('property ' + key + ' has ' + options[key]); // property width has 1024
}
// or this
console.log(Object.keys(options).length);

// проверка существования свойства
// при отсутствии свойства код выдаст undefined
let person = {};
console.log(person.someProp === undefined); // true 
// если свойство изначально undefined  то используем 'in'

// special operator 'in' for check property
let person = {
	name: "John",
	surname: "Ivanov"
}
console.log("name" in person, " name is exist"); // true
console.log("age" in person, " age is not exist"); // false

// ORDER IN PROPERTIES

let codes = {
	"49": "Germany",
	"41": "Swisstzarland",
	"44": "Great Britain",
	"1": "USA"
}

for (let code in codes) {
	console.log(code);
} // 1, 41, 44, 49

// but if add '+' to number it will be order by create
// because it's not a number 

let codes = {
	"+49": "Germany",
	"+41": "Swisstzarland",
	"+44": "Great Britain",
	"+1": "USA"
}

for (let code in codes) {
	console.log(code);
}

// COPY BY REFERENCE

let user = {
	name: "Ivasyk"
}
let admin = user;
admin.name = 'Peter'; // changed property by variable "admin"
console.log(user.name); // 'Peter' is changed we can see from variable 'user'

// COMPARING OBJECTS

// '==' and '==='  are equal

let a = {};
let b = a;
console.log(a == b); // true
console.log(a === b); // true

// in this variant

let a = {};
let b = {};
console.log(a == b); // false

// CONST OBJECTS
// OBJECT which was announced like const - can be changed

const user = {
	name: "John"
};

user.age = 25;
console.log(user.age);

// this variant call error

user = {
	name: "Peter" // it will error
}

// CLONE AND MERGE OBJECTS

const user = {
	name: "John",
	surname: "Petrenko"
};

let clone = {}; // empty object

for (let key in user) {
	clone[key] = user[key]; // clone object in
}

clone.name = "Petro"; // change data

console.log(clone.name);

// CLONE WITH METHOD Object.assign()

let user = {
	name: "John"
};

let permissions1 = {
	canView: true
};
let permissions2 = {
	canEdit: true
};

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// SIMPLE CLONE

let user = {
	name: "John",
	age: 30
};

let clone = Object.assign({}, user);

// IF OBJECT HAS OBJECT

let user = {
	name: "John",
	sizes: {
		height: 182,
		width: 50
	}
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, один и тот же объект

// user и clone обращаются к одному sizes
user.sizes.width++; // меняем свойство в одном объекте
console.log(clone.sizes.width); // 51, видим результат в другом объекте 




// DYNAMIC TYPES

// to String

// 1
console.log(typeof (String(4))); // динамическое изменение типов данных
// 2
console.log("www" + 5); // string www5
//3
console.log('htps://www.slash.com/data/' + 5); // htps://www.slash.com/data/5

// to Number
console.log(typeof (Number('6'))); // 6 - number

//2
console.log(typeof (+'77')); // number

//3
console.log(typeof (parseInt('22px', 10))); // number

//4
let answer = +prompt("Hello!", ''); // will be number


// Logic

// 0 , '' , null , undefined , NaN  = false 0

// 1, ' '  = true 1

let switcher = null; // false


if (switcher) {
	console.log("Working...")
}

switcher = 1; // true

if (switcher) {
	console.log("Working... too")
}

//2 

console.log(typeof (Boolean('44'))); // boolean

console.log(typeof (!!'5')); // boolean 


console.log(+"Infinity");

// Tasks

let x = 5;
alert(x++); // 5


console.log([] + false); // false
console.log([+false - null]); // NaN
console.log([] + false - null + true); // NaN 
console.log([] - false - null + true); // 1

let y = 1;
let x = y = 2;
console.log(x, y); // 2 , 2

console.log("1" [0]); // 1

console.log(2 && 1 && null && 0 && undefined); // null . operator && will return first false decision

console.log(null || 2 && 3 || 4); // 3 - 1. null || 2 = 2; 2 && 3 = 3 ; 3 || 4 = 3 ; first true desicion

console.log(+"Infinity"); // Infinity  - + returnes number  