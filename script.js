const title = "Как тебя зовут?";
const askDate = "В каком году ты родился?";
let dateB;
let result;


let currentDate = new Date();
const currentYear = currentDate.getFullYear();


function DateDef() {

    if (currentYear > dateB) {
        result = currentYear - dateB;
        return result;
    }

}
//----------------------------------
let len;
let resultPerimeter;

function Perimeter() {
    if (len < 0) {
        alert("Incorrect data");
    } else {
        resultPerimeter = len * 4;
        return resultPerimeter;
    }
}

//----------------------------------
// Запросите у пользователя радиус окружности и выведите
// площадь такой окружности.

function RoundSquare()
{
    
}



// Запросите у пользователя расстояние в км между двумя

// городами и за сколько часов он хочет добраться. Посчи-
// тайте скорость, с которой необходимо двигаться, чтобы

// успеть вовремя.

