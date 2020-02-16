

// Интерполяция-----------------------------------------------

let name = "John",
	age = 23,
	mail = 'somthing@mail.com';

document.write(`User ${name} , his age ${age} , mail address  ${mail}`);


//    let const var--------------------------------------------


function makeVarArray(){
	var items = [];
	// loop with var 
	for(var i =0 ; i<10; i++){
		var item = function(){
			console.log(i);
		};
		items.push(item);
	}
	return items;
}

var arr = makeVarArray();

// вызываем функцию
arr[1](); // 10
arr[3](); // 10
arr[6](); // 10

function makeLetArray(){
	var items = [];
	// loop with let 
	for(let i =0 ; i<10; i++){
		var item = function(){
			console.log(i);
		};
		items.push(item);
	}
	return items;
}

var letArr = makeLetArray();

// вызываем функцию в консоли
letArr[1](); // 1 
letArr[3](); // 3
letArr[6](); // 6

// ARROWS FUNCTIONS--------------------------------------

let fun = () =>{
	console.log(this); // create window homeless function 
}

fun();

// create object
let obj ={
	number: 5,
	sayNumber: function(){
		let say = () =>{
			console.log(this);  // it doesn't has own context
		}
		say();
	}
};

obj.sayNumber(); //  {number 5 sayNumber: f}


let btn = document.querySelector('button');

btn.addEventListener('click', function(){
	let show = ()=>{
		console.log(this);
	};
	show();  // <button>Push me</button>
});


// PARAMETRS ------------------------------------------------

function calcOrDouble(number, basis = 5){
	//basis = basis || 2  ES5
	console.log(number * basis); 
}

calcOrDouble(5,8) // 40
calcOrDouble(5);  // 5


// CLASS------------------------------------------------------


class Rectangle {

	constructor(height, width = 20){
		this.height = height;
		this.width = width;
	}

	calcArea(){
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 13);

console.log(square.calcArea());


// SPREAD -----------------------------------------------------


let video = ['yotube', 'rutube', 'vimeo'],
	langs = ['JS', 'C#', 'HTML', 'CSS'],
	internet = [...video, ...langs, 'vk' , 'instagram']; // ... разворачивает масссив

console.log(internet);


function log(a, b, c){
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(a+b+c);
}

let numbers = [2,3,7];

log(...numbers); // spread array