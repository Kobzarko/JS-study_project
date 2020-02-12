
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



