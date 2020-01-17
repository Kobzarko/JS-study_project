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
console.log(user.name); // 'Peter' changes we can see from variable 'user'

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