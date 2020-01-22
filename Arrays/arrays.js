// Массивы

// let arr = ['1',{},[],25]

// arr[0] == '1'

// arr[2] == []

// Методы массивов 

// arr.push('a')  добавить элемент в конец массива 

// arr.pop() - удалить последний элемент из массива и возвращает его

// arr.shift() - удалить из массива перывй элемент и возвращает его

// arr.unshift('a') - добавить в начало массива 

// arr.split(s) -  превратить строку в массив , s - разделитель

// arr.join(s) -  превратить массив в строку , s - разделитель

// delete arr[1] - удаляет второй элемент 

// arr.slice(begin, end) - копирует часть массив с begin до end не включая

// arr.splice(index, count,elem1...) - удалить count элементов начиная  с index  и заменить на elem1

// arr.sort(fn) - сортировка массива если не передать функцию сравнения - сортирует элементы как строки

// arr.reserve() - меняет порядок элементов на обратный

// arr.concat(item1...) - создает новый массив в который копируется элементы из arr , а также item1...

// методы перебора 

// arr.forEach 

// arr.map 

// arr.every/some 

// arr.filter 
 
// arr.reduce 



let arr = [1,2,3,4,5,6,7,8,9,33];


console.log("push "+arr);

arr.push(17);

console.log(arr);

arr.pop();
console.log("pop() - " +arr);

arr.shift();
console.log("shift() "+ arr);


arr.unshift('33');
console.log("unshift " + arr);

for(let i =0 ; i<arr.length; i++)
{
	console.log(" index of arr " + arr[i]);
}

// loop foreach

arr.forEach(function(item, i, mass)
{
	console.log( "i = "+i + ': '+ "index " + item + " (array : "+ mass + ')');
});



arr.forEach( function(element, index) {
	// statements
	console.log(index + " - " + element);
});


// Оператор расширения spread

const myFunction = (w,x,y,z)=>{
	console.log("sum of array");
	console.log( w+x+y+z);
}

let args = [1,2,3];

myFunction(...args, 4);

var dateFields = [1970 , 0 , 1];

var date = new Date(...dateFields);

console.log(date);

// Расширение в литералах массива 

var mas = ["one", "two", "three"];
console.log(mas);

mas.splice(2, 0 , "three");
mas.splice(3,0, "four");

console.log(mas);

// LOOP FOR IN AND FOR OF

let mass1 = [10,20,30,40,50];


console.log("use in ");
for(let key in mass1)
{
	console.log(key);
}

console.log("use of ");
for(let key of mass1)
{
	console.log(key);
}


// SPLIT AND JOIN

let ans = prompt("", "");
	arrin =[];
if(ans!=null && ans!=""){

arrin = ans.split(',');

console.log(arrin);

arrin.unshift("hello");
// изменим и  выведем массив обратно

arrin.join(', ');

alert(arrin);
}



let letters = ['c','b','a','f','g','d','x'];

console.log(letters);
	i=letters.sort();

console.log(letters);
console.log(i);
// SORT NUMBERS WITH ISIDE ALGORITHMS

let arrNum=[1,5,7,3,8,19,2];
console.log(arrNum);

arrNum.sort(compareNum);

// упорядочивает по возрастанию
function compareNum(a,b){
	return a-b;
}

console.log(arrNum);

