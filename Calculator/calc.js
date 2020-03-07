

// CALC
	// первый инпут количество людей которые поедут
let persons = document.querySelectorAll('.counter-block-input')[0],
	// второй инпут кол-во дней на сколько хотят поехать
	restDays = document.querySelectorAll('.counter-block -input')[1],
	// база на которой будут отдыхать
	place = document.getElementById('select'),
	// общая сумма 
	totalValue = document.getElementById('total'),
	// кол-во людей
	personsSum = 0,
	// кол-во дней
	daysSum = 0,
	// конечная сумма
	total = 0,
	// цена устанавливать по договоренности с клиентом
	price = 4000;

	totalValue.innerHTML = 0;

	// при изменении persons  выполнить математическую операцию 
	persons.addEventListener('change', function() {
		personsSum = +this.value; // равно значению поля инпут persons
		total = (daysSum + personsSum)*price;  // считаем сумму
		// если в поле инпут restDays пусто то в поле общая сумма будет 0
		if(restDays.value == ''){
			totalValue.innerHTML = 0; 
		} else {
			totalValue.innerHTML = total;
		}
	});

	// событие для второго инпута если заполнение начнется со второго инпута
	restDays.addEventListener('change', function() {
		daysSum = +this.value; // равно значению поля инпут daysSum
		total = (daysSum + personsSum)*price;  // считаем сумму
		// если в поле инпут persons пусто то в поле общая сумма будет 0
		if(persons.value == ''){
			totalValue.innerHTML = 0; 
		} else {
			totalValue.innerHTML = total;
		}
	});

	// выбираем базы 

	place.addEventListener('change', function(){
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = 0 ; 
		} else {
			let a = total; // значение total в тех. переменной
			// умножаем на коэффициент в <option id="mumbai" value="1">
			totalValue.innerHTML = a * this.options[this.selectedIndex].value; 

		}
	});


