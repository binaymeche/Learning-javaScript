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
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {  // gives the window object
    console.log("Clicked");
    console.log(this)
})
btn.addEventListener("click", function () {   // gives the button itself
    console.log(this)
})