// DOM
// Document Object Model


//1
// get element by id
//
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);


//2
// query selector
//
// const mainhead = document.querySelector("#main-heading");
// const header = document.querySelector("header");
// const navItems = document.querySelectorAll(".nav-item");
// console.log(header);
// console.log(mainhead)
// console.log(navItems)
// console.log(navItems[2])


//3
// textContent and innerText
//
// console.log(mainHeading.textContent); // see the difference
// console.log(mainHeading.innerText); // see the difference
// mainHeading.textContent = "Hello the text is changed now";
// mainHeading.innerText = "using the innerText";


//4
// change the style of element
//
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading)
// mainHeading.style.color = "green"; 
// mainHeading.style.backgroundColor = "blue"; // note: backgroundColor no "-" in js styling uses the camelCase so the "-" will give an error
// mainHeading.style.border = "3px solid yellow"


//5
// get and set attribute
//
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1));// removes the "#" from home
// link.setAttribute("href", "https://youtube.com");
// console.log(link.getAttribute("href"))
// 
// const inputElement = document.querySelector("form.form-todo input")
// console.log(inputElement)
// console.log(inputElement.getAttribute("type"))


// 6
// get multiple elements using getElement by class name
// get multiple elements using querySelectorAll
//
// const allNavItem = document.getElementsByClassName("nav-item") // HTML collection
// const allNavItem = document.querySelectorAll(".nav-item") // Node list
// console.log(allNavItem);
// console.log(allNavItem[1]);


// 7
// loop
