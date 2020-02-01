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