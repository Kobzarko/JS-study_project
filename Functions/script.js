// functions

let fun = 20; // global variable 

function showFirstMessage(text) {
    alert(text);
    let fun = 10; // local variable
    console.log(fun);
}

showFirstMessage("Hello World");
console.log(fun);



console.log(calc(3, 4));

console.log(calc(5, 8));

// function declaration
function calc(a, b) {
    return a + b;
}

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

// function declaration - функция объявленная в потоке кода
// создается до начала кода , можно вызвать до объявления

// function expretion