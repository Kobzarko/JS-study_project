<<<<<<< HEAD

let btn = document.querySelectorAll('button'), // 
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');

// btn[0].onclick = function() {
// 	alert("You pressed first button");
// }

// btn[0].addEventListener('click', function(){
// 	alert("You pressed first button");
	
// });


// btn[0].addEventListener('mouseenter',function() {
// 	alert("This is a button");
// });

// btn[0].addEventListener('click',function(event) {
// 	console.log(event);
// 	let target = event.target;
// 	target.style.display = 'none';

// });

// wrap.addEventListener('click',function(){
// 	console.log(" hapenned event is " + event.type + " on tne element " + event.target);

// });

link.addEventListener('click' , function(event){
	event.preventDefault();  // заглушка для ссылки
	console.log(" hapenned event is " + event.type + " on tne element " + event.target);
});


// querySelectorAll можем использовать цикл foreach

btn.forEach( function(item){
	item.addEventListener('mouseleave', function(){
		console.log("You are out");
	});
});



=======
let btn = document.getElementsByTagName('button'),
    head = document.getElementsByTagName('h1'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelectorAll('a');

// btn[0].onclick = function () {
//     console.log("you pressed button 1");
// }

// btn[1].addEventListener('click', function (event) {
//     console.log("Event " + event.type + ' on element' + event.target);
// });

// wrap.addEventListener('click', function (event) {
//     console.log('event ' + event.type + ' on element ' + event.target);
// });

// link.addEventListener('click', function (event) {
//     event.preventDefault(); // заглушка для ссылок
//     console.log('event ' + event.type + ' on element ' + event.target);
// });

btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log("Gone");
    });
});
>>>>>>> 04c19f38c2bcd1e187613240acf54dc333b55be1
