

// SLIDER

window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	// параметр текущего слайда
	let sliderIndex = 1;
	// картинки
	let slides = document.querySelectorAll('.slider-item'),
		// наши стрелки
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		// точки
		dotsWrap = document.querySelector('.dot'),
		dots = document.querySelectorAll('.dot');

		// когда страница загружается показывает только один слайд
		showSlides(slideIndex);

		// переключает слайды
	function showSlides(n){

		if(n>slides.length){
			slideIndex = 1;
		}
		if(n<1){
			slideIndex = slides.length;
		}
		// специфическая современная запись цикла
		slides.forEach((item) => item.slide.display = 'none');

		// тожу самое что сверху написано
		/*for(let i =0 ; i < slides.length; i++){
			slides[i].style.display = 'none';
		}*/

		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex-1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	// увеличивает или уменьшает наш параметр индекс
	function plusSlides(n){
		showSlides(slideIndex+=n);
	}

	//  определяет текущий слайд
	function currentSlide(n){
		showSlides(slideIndex =n);
	}
	// уменьшает индекс слайда
	prev.addEventListener('click', function(){
		plusSlides(-1);
	});
	// увеличивает индекс слайда
	next.addEventListener('click', function(){
		plusSlides(1);
	});
	// устанавливаем значение для точек под картинками
	dotsWrap.addEventListener('click', function(event){
		for(let i = 0; i< dots.length + 1; i++){
			if(even.target.classList.contains('dot') && event.target == dots[i-1]){
				currentSlide(i);
			}
		}
	});

});