// choose element with id="box"
let box = document.getElementById('box');

// plural number by tag
let btn = document.getElementsByTagName('button')

// choose elements by class name
let circle = document.getElementsByClassName('circle');

// choose element by query all selectors by name
let heart = document.querySelectorAll('.heart');

// choose element by query one selector by name
let oneHeart = document.querySelector('.heart');

// work with style

box.style.backgroundColor = 'blue';

btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';

circle[1].style.backgroundColor = 'yellow';

circle[2].style.backgroundColor = 'green';


// for(let i =0 ; i < heart.length; i++)
// {
//     heart[i].style.backgroundColor = 'green';
// }


// // item - each element , i - number of element , hearts - your array
// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div');

console.log(div);

let text = document.createTextNode('I was here');


// add class black to new div
div.classList.add('black');

// add new element div in end of body
// document.body.appendChild(div);



let wrapper = document.querySelector('.wrapper');

// add div element inside wrapper class elements
wrapper.appendChild(div);

console.log(div);

// add somthing inside element with class div by command
// div.innerHTML = '<h3>Hello World !</h3>';

// add text inside element
div.textContent = ' TEXT';


// add div inside body before circle[0] element
document.body.insertBefore(div, circle[0]);

// remove element  from body by command
document.body.removeChild(circle[1]);

// remove child from 
wrapper.removeChild(heart[1]);


// replace element by another one
document.body.replaceChild(btn[2], circle[1]);

// 