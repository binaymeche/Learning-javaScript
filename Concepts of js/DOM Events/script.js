// intro to events


// click
//
// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
//
// method 1 is wrting the code in the HTML file using onclick
// method 2
// btn.onclick = () =>  {  // not recommended method because it can only assign it to one time
//     console.log("You clicked the button")
// }
//
//method 3
// btn.addEventListener("click", () => {
//     console.log("You clicked the button")
// })




// 2.
// This
//
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", () => {  // gives the window object
//     console.log("Clicked");
//     console.log(this)
// })
// btn.addEventListener("click", function () {   // gives the button itself
//     console.log(this)
// })




// 3. 
// keypress
//
// const body = document.querySelector("body");
// body.addEventListener("keypress", e => console.log(e.key, e.keyCode))



// 4. 
// mouse hover
//
// const body = document.querySelector("body");
// // can use mouseenter, mouseover, mousemove, mouseleave
// body.addEventListener("mousemove", e => console.log(e.offsetX, e.offsetY))
// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("mouseenter", e => console.log("mouse entered"))
// btn.addEventListener("mouseleave", e => console.log("mouse leaved"))


// const body = document.querySelector("body");
// console.dir(body)
// body.addEventListener("click", e => console.log(event))



const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text'");
const myUL = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // removes the auto reload
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = 
    `<span class="text">${newTodoText}</span>
      <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
      </div>`;

    newLi.innerHTML = newLiInnerHtml;
    myUL.append(newLi)
    console.log(newLi)
    todoInput.value = "";
})

myUL.addEventListener("click", (e) => {
    // checks if the user clicked on done button
    if (e.target.classList.contains("remove")) {
        const liSpan = e.target.parentNode.parentNode;
        // console.log(liSpan)
        liSpan.remove()
    }
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
    }
})