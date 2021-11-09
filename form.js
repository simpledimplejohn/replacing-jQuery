let btn = document.querySelector(".test-btn");


function firstFunction(e) {
  e.preventDefault();
  btn.innerHTML = "YAY!";
}
function secondFunction() {
  btn.style.backgroundColor = "red";
}

btn.addEventListener("click", firstFunction); //event listener, listen for click, and do?
btn.addEventListener("click", secondFunction);
