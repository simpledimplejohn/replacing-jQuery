let btn = document.querySelector(".test-btn");


function firstFunction(e, name) {
  e.preventDefault();
  btn.innerHTML = name;
}


btn.addEventListener("click", (e) => { //need to pass the event through from the fx
  firstFunction(e, "john");
}); //event listener, listen for click, and do?
btn.addEventListener("click", () => {    //put a function in an event listener
  btn.style.backgroundColor = 'orange';
});
