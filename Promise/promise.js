/*Объект Promise (промис) используется для отложенных и асинхронных вычислений.*/

'use strict'

// Пример с setTimeout-------------------------------------------------

// create new object

/*let promise = new Promise((resolve, reject) => {

	 // переведёт промис в состояние fulfilled с результатом "result"
	setTimeout(()=>{
		resolve("result");
	}, 2000);
});

// promise.then навешивает обработчики на успешный результат или ошибку

promise.then(result=>{
	// первая функция-обработчик - запустится при вызове resolve
	alert("Fulfilled: " + result); // result - аргумент resolve	
},
error=> {
	// вторая функция - запустится при вызове reject
	alert("Rejected: " + error); // error - аргумент reject
});*/


// Промисификация-----------------------------------------------------------

// В качестве примера сделаем такую обёртку для запросов при помощи XMLHttpRequest.

/*function httpGet(url){
	return new Promise(function(resolve,reject){

		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload= function(){
			if(this.status == 200){
				resolve(this.response);
			} else{
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		}

		xhr.onerror = function(){
			reject(new Error("Network Error"));
		}

		xhr.send();
	});
}*/

/*httpGet("../JSON/current.json") // путь к файлу
  .then(
    response => alert(`Fulfilled: ${response}`),
    error => alert(`Rejected: ${error}`)
  );*/


  // Цепочки промисов-------------------------------------

/*  Например, мы хотим по очереди:

Загрузить данные посетителя с сервера (асинхронно).
Затем отправить запрос о нём на github (асинхронно).
Когда это будет готово, вывести его github-аватар на экран (асинхронно).
…И сделать код расширяемым, чтобы цепочку можно было легко продолжить.*/


// сделать запрос
/*httpGet('/article/promise/user.json')
  // 1. Получить данные о пользователе в JSON и передать дальше
  .then(response => {
    console.log(response);
    let user = JSON.parse(response);
    return user;
  })
  // 2. Получить информацию с github
  .then(user => {
    console.log(user);
    return httpGet(`https://api.github.com/users/${user.name}`);
  })
  // 3. Вывести аватар на 3 секунды (можно с анимацией)
  .then(githubUser => {
    console.log(githubUser);
    githubUser = JSON.parse(githubUser);

    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });*/



/*Данный небольшой пример показывает механизм работы с Promise.
 Метод testPromise() вызывается при каждом нажатии на <button>.
  При этом создаётся промис, которое успешно выполняется при помощи
  window.setTimeout,
 со значением 'result' в случайном интервале от 1 до 3-х секунд.*/

var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +  ') Запуск (запуск синхронного кода)');

  // Создаём промис, возвращающее 'result' (по истечении 3-х секунд)
  var p1 = new Promise(
    // Функция разрешения позволяет завершить успешно или 
    // отклонить промис
    function(resolve, reject) {       
      log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Запуск промиса (запуск асинхронного кода)');
      // Это всего лишь пример асинхронности
      window.setTimeout(
        function() {
          // Обещание исполнено!
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // Указываем, что сделать с исполненным промисом
  p1.then(
    // Записываем в протокол
    function(val) {
      log.insertAdjacentHTML('beforeend', val + ') Обещание исполнено (асинхронный код завершён)');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +  ') Обещание создано (синхронный код завершён)');
}
if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Демонстрация невозможна, поскольку ваш браузер не поддерживает интерфейс <code>Promise<code>.";
}