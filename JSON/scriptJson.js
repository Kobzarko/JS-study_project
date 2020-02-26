// let options = {
// 	width: 200,
// 	height: 100,
// 	background: 'green',
// 	font: {
// 		size: '15px',
// 		color: '#fff'
// 	}
// };


// // -------JSON.stringify----------------------------------------

// // {"width":200,"height":100,"background":"green","font":{"size":"15px","color":"#fff"}}
// let json =JSON.stringify(options);
// console.log(json);
// console.log( `тип данных  ${typeof(json)}`);

// //  JSON.parse для преобразования JSON обратно в объект.--------------------
// console.log(JSON.parse(json));
// let val = JSON.parse(json);
// // тип данных object
// console.log( `тип данных  ${typeof(val)}`);


// -------------How To Convert FormData To JSON Object----------------------

// const formData = new FormData(SomeFormElement);
// let jsonObject = {};

// for (const [key, value]  of formData.entries()) {
   
//     console.log( jsonObject[key] = value);
// }


//---------- converter-----------------JSON-----------------

let inputUah = document.getElementById('uah');
let inputUsd = document.getElementById('usd');

/*inputUah.addEventListener('input', ()=> {
	let request = new XMLHttpRequest();
	//requst.open(method, url, async, login , pass);
	request.open('GET', 'current.json');
	// настройка запроса
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	// отправка запуск запроса
	request.send();

	// status  - server 
	// statusText  - text answer
	// responseText/response  - то что передается ответ от сервера
	// readyState - текущее состояние запроса

	// отслеживаем состояние сервера и реагируем на состояние 
	request.addEventListener('readystatechange', function(){
		if(request.readyState === 4 && request.status == 200 ){
			let data = JSON.parse(request.response);
				// получаем курс валют
			inputUsd.value = inputUah.value/ data.usd;
		}else{
			inputUsd.value = "Error server";
		}

	});

});*/

inputUah.addEventListener('input', () => {
	function catchData(){
		return new Promise(function(resolve, reject){
			let request = new XMLHttpRequest();
			//requst.open(method, url, async, login , pass);
			request.open('GET', 'current.json');
			// настройка запроса
			request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
			// отправка запуск запроса
			request.send();

			request.onload = ()=>{
				if(request.readyState === 4){
					if(request.status == 200){
						resolve(this.responce)
					}else{
						reject();
					}
				}
			}

		});
	};

	catchData()
	.then(responce => {
		console.log(responce);
		let data = JSON.parse(responce);
		inputUsd.value = inputUah.value / data.usd;
	})
	.then(()=>{console.log(5000)})
	.catch(()=>inputUsd.value = "Network Error")
});