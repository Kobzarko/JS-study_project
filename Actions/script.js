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

//-------metanit-----DOM------metanit------\\

// поиск элементов DOM

let headElem = document.getElementById("header");
headElem.textContent = 'Find elements'
document.write(headElem.innerText + " by DOM ");



let pOne = document.getElementsByTagName("p")[1];
document.writeln("get text of one paragraph " + pOne.innerText);

// get by class
let divPar = document.getElementsByClassName('div-par')[0];
let textPar = document.getElementsByClassName('text-par');

divPar.insertBefore(textPar[1], textPar[0]);


// get by name

let pElem = document.getElementsByTagName("p");

for (let i = 0; i < pElem.length; i++) {
    document.write("Text " + pElem[i].innerText + " " + "<br/>");
}

// get by selector
let selElem = document.querySelector(".div-par p");
document.write(" text by selector " + selElem.innerText + "<br/>");

// get by selectorAll
let selectAll = document.querySelectorAll("div");
for (let i = 0; i < selectAll.length; i++) {

    document.writeln((i + 1) + " " + " text from div -  " + selectAll[i].innerText + " " + " <br/>");
}