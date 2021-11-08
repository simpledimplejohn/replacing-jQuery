//document.body.innerHTML = "scripts"

//Making changes to the DOM

//Getting stuff the old way
//document.getElementById("title-id").innerHTML = "changed by id";
//document.getElementsByClassName("potato-class");
//getElementsByClassName();
//getElementsByTagName();

//NEW METHODS

// document.querySelector(selectors)
// No inputs, grabs first element it finds
// With inputs you can specify class, id, or tag

//querySelectorAll()

// let banner = document.querySelector(".title-class");
// banner.innerHTML = "changed";

// Selectors:
// const paragraphElement = document.querySelectorAll("p.paragraph")
// const idElement = document.querySelector("#an-id, ")
// const classElement = document.querySelector(".a-class, ")
// const typeElement = document.querySelector(div)

// Changing HTML
// .innerHTML = gets whats in the tag
// .outerHTML = gets the whole tag
// document.querySelector("#potato-id").outerHTML = "<h1>BIG POTATO</h1>"

// CHANGE CLASS OR ID
// document.querySelector("#potato-id").id = "new id"
// document.querySelector("#potato-id").classList //gets array of classes
// document.querySelector("#potato-id").classList.add("more") //add's class
// document.querySelector("#potato-id").classList.remove("more") //remove's class
// document.querySelector("#potato-id").classList.toggle("on") //toggles on and off class, returns bool
// document.querySelector("#potato-id").classList.contains("more") //bool

// CHANGE HTML
// document.querySelector("#potato-id").getAttribute()
// document.querySelector("#potato-id").setAttribute("href", "www.google.com")
// document.querySelector("#potato-id").removeAttribute("href")

// APPENDING
// Create element, create content, put content in element, put all in DOM
let box = document.querySelector(".box"); //where its going
let newElement = document.createElement("a"); //creates "a" tag
let newText = document.createTextNode("potato link") // link text
newElement.appendChild(newText); // puts the text in
box.appendChild(newElement); // puts in the "a" tag
newElement.setAttribute("href", "www.potato.com")



