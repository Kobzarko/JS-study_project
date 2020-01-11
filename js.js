// пример работы с многопоточностью 


// CALLBACK FUNCTIONS


function first(){
	// do something
	setTimeout( function(){
		console.log(1);
	}, 500);
}

function second()
{
	console.log(2);
}

first();

second();

function learnJS(lang, callback){
	console.log("I learn"+ lang);
	callback();
}

function done(){
	console.log("I've done 3 lesson");
}
// передаем функцию без скобок
learnJS("JavaScript", done);

