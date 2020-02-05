// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId); // останавливает таймер
// function sayHello() {
//     alert('Hello World');
// }

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello World');
// }


// let timerId = setTimeout(function log() {
//     console.log('Hello recursion');
//     setTimeout(log, 2000); // вызываем рекурсию функция вызывает саму себя
// })


// код для передвижения объекта по экрану
let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    // запуск интервала функции frame

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
// по клику на кнопку запускается анимация 
btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');

// обработчик события ждем клик и выполняем функцию
btnBlock.addEventListener('click', function (event) {
    // проверка события на нажатие кнопки
    if (event.target && event.target.classList.contains('first')) {
        // при нажатии кнопки в консоли появится надпись
        console.log('Привет первая кнопка');
    } else if (event.target && event.target.tagName == 'BUTTON') {
        // при нажатии кнопки в консоли появится надпись
        console.log('Привет кнопка');
    }
    //  очень полезная вещь
    // или так делегирование события кнопки
    // проверка события на совпадение нажатия кнопки
    // if (event.target && event.target.matches('button.first') {
    //     // при нажатии кнопки в консоли появится надпись
    //     console.log('Привет первая кнопка');
    // })

})