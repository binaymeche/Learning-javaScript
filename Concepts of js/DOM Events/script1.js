console.log("Hello World");

const btns = document.querySelectorAll(".btn");
console.log(btns)


// Using loop to add event in multiple btn at once
//
// for(let btn of btns){
//     btn.addEventListener("click", () => {
//         console.log(`You clicked the button`)
//     })
// }
//
// btns.forEach((element) => {
//     element.addEventListener("click", () => {
//         console.log("U pressed the button")
//     })
// })


// Targeting the textContent property inside the btn
//
btns.forEach((element) =>  {
    element.addEventListener("click", () => {
        console.log(element.textContent)
    })
})