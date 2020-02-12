
let btnFirst = document.querySelector('.btn-first');

btnFirst.addEventListener("click",

()=> {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      //elem.style.left = pos + "px"; 
    }
  }
})

btnFirst.addEventListener("click",

()=> {
  var elem = document.getElementById("animate2");   
  var pos = 350;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--; 
      //elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
})

btnFirst.addEventListener("click",

()=> {
  var elem = document.getElementById("animate3");   
  var pos = 300;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == -50) {
      clearInterval(id);
    } else {
      pos--; 
      //elem.style.top = pos + "px"; 
      elem.style.top = pos + "px"; 
    }
  }
})

btnFirst.addEventListener("click",

()=> {
  var elem = document.getElementById("animate4");   
  var pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      //elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
})

