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
//
// available loops; forEach, for of, for
// Note: We can't use forEach to iterate through HTML Collection
// let allNavItem = document.getElementsByTagName("a");
// console.log(allNavItem);
//
// for loop
// for(let i = 0; i < allNavItem.length; i++) {
//   console.log(allNavItem[i]);
//   const navItem = allNavItem[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "#06c1ff"
//   navItem.style.fontWeight = "bold"
// }
//
// for of
// for(let nav  of allNavItem) {
//   console.log(nav);
//   const navItem = nav;
//   nav.style.backgroundColor = "#f3cf02";
//   nav.style.color = "#9b06ff"
//   nav.style.fontWeight = "bold"
// }
//
// forEach
// const arrNav = Array.from(allNavItem) // changing the HTML collection to node list to use the array method -> forEach
// arrNav.forEach(element => {
//   element.style.backgroundColor = "#f3cf02";
//   element.style.color = "#9b06ff"
//   element.style.fontWeight = "bold"
// });


// 8 
// let navItems = document.querySelectorAll("a"); // no need for converting into array cuz it gives nodeList
// console.log(navItems)
// navItems.forEach ((element) => {
//   element.style.fontStyle = "Italic"
//   element.style.textDecoration = "underline";
// })


// 9 
// innerHTML
//
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML)
// headline.innerHTML = "<h1> Headline innerHTML changed </h1>"
// headline.innerHTML += "<button class = \"btn\"> Change me </button>"
// console.log(headline.innerHTML)


// 10
// classList
//
// const sectionTodo = document.querySelector(".section-todo");
// sectionTodo.classList.add("bg-dark"); // add
// console.log(sectionTodo);
// sectionTodo.classList.remove("bg-dark") // remove
// console.log(sectionTodo.classList.contains("bg-white")) // checks the element has the given class name.


// 11
// toggle
// 
// given class = "bg-dark"
// const sectionTodo = document.querySelector(".section-todo");
// sectionTodo.classList.toggle("bg-dark"); // if the class isnt present in the element then it will provide the given class provided to it.
// sectionTodo.classList.toggle("bg-dark"); // And if the given class is present in the element then it will remove the given class


// const header = document.querySelector(".header")
// console.log(header.classList);
// header.classList.add("bg-dark")






// Add new HTML elements to page


// 12.
// innerHTML to add HTML element
//
// const todoList = document.querySelector(".todo-list")
// // console.log(todoList.innerHTML);
// // todoList.innerHTML = "<li>New Todo Added</li>";
// todoList.innerHTML += `<li>New Todo Added</li>`
// todoList.innerHTML += `<li>Cook Food</li>`
//
// when to not to use 
/*
It render element again and again causing problem in time management.
It takes much time. Kinda bit of laggy issue will create 
*/
//
// when to use
/* 
When you want to change the whole block of element.
Use it for changing the html not for adding the the element inside the HTML
*/



// const newTodoItem = document.createElement("li");
// const prependUse = document.createElement("li");
// const appendUse = document.createElement("li");
//
// const newTodoItemText = document.createTextNode("Greet your seniors") 
//long way to solve it 
//
// newTodoItem.append(newTodoItemText);
//
// prependUse.textContent = "This is prepend Comes before"
// appendUse.textContent = "This is append Comes after"
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(prependUse)
// todoList.append(appendUse)
// console.log(newTodoItem);
//
// const todo1 =document.querySelector(".todo-list li")
// todo1.remove()
// console.log(todo1)



// before and after
// const newTodoItem = document.createElement("li");
// const newTodoItem1 = document.createElement("button")
// newTodoItem.textContent = "Hello this is Before";
// newTodoItem1.textContent = "Add to list";
// const todo = document.querySelector(".todo-list");

// todo.after(newTodoItem1);
// todo.before(newTodoItem);



// Clone nodes
//
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "New \"li\" is created"
// const liCopy = li.cloneNode(true)
// ul.append(li);
// ul.prepend(liCopy);



// static list and live list
/* 
querySelector gives us the static list no changes in the nodeList
//
getElements gives us the live list changes in the nodelist
*/
// const lis = document.querySelectorAll(".todo-list li");
// const sixthli = document.createElement("li");
// sixthli.textContent = "item 6"
// const ul = document.querySelector(".todo-list")
// const listItems = ul.getElementsByTagName("li")
// ul.append(sixthli);
// // console.log(lis) // nodeList is still five even though there are 6 element in the document now. It is called static

// // listItems.append(sixthli);
// console.log(listItems)



