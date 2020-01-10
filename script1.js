let num = 50;

if (num < 49) {
  console.log("Неверно");
} else if (num > 100) {
  console.log("Too much");
} else {
  console.log("AllRight");
}
// тернарный оператор
num == 50 ? console.log("AllRight") : console.log("Bad");

// switch

switch (num) {
  case num < 49:
    // statements_1
    console.log("Bad");
    break;

  case num > 100:
    console.log("Too much");
    break;
  case num > 80:
    console.log("Still too much");
    break;
  case num == 50:
    console.log("Right");
  default:
    // statements_def
    console.log("new Error(message: string)");
    break;
}

// loops

newFunction();
let numer = 50;
function newFunction() {
  while (numer < 55) {
    console.log(numer);
    numer++;
  }
}

do {
  console.log(numer);
  numer++;
} while (numer < 55);

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
