let btn = document.querySelector(".test-btn");


function firstFunction() {

  btn.innerHTML = "YAY!";
}
function secondFunction() {
  btn.style.backgroundColor = "red";
}

function buttonClick(e) {
  e.preventDefault();
  firstFunction();
  secondFunction();
}
btn.onclick = buttonClick; //event handler

