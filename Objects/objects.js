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
user['likes birds']=true;

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

options.colors ={
	border: "black",
	background: "red"
};

// удаление свойства

delete options.bool;

console.log(options);

// цикл for in
// вывод свойств и их значений
for(let key in options ) {
	console.log('property ' + key + ' has ' + options[key]);
}


console.log(Object.keys(options).length);