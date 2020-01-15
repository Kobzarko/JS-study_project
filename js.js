// пример работы с многопоточностью 


// CALLBACK FUNCTIONS


// function first(){
// 	// do something
// 	setTimeout( function(){
// 		console.log(1);
// 	}, 500);
// }

// function second()
// {
// 	console.log(2);
// }

// first();

// second();

// function learnJS(lang, callback){
// 	console.log("I learn"+ lang);
// 	callback();
// }

// function done(){
// 	console.log("I've done 3 lesson");
// }
// // передаем функцию без скобок
// learnJS("JavaScript", done);


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


let options = {
	width: 1024,
	height: 768,
	name: "text"
	
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




