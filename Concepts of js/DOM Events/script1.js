
// const btns = document.querySelectorAll(".btn");
// console.log(btns)


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
// btns.forEach((element) =>  {
//     element.addEventListener("click", () => {
//         console.log(element.textContent)
//     })
// })



// Event Object
//
// const firstButton = document.querySelector("#btn1");
// firstButton.addEventListener("click", function (info) { // "=>" can be used too. 
//     // console.log(this);
//     console.log(info);  // information is in the format of object 
//     console.log(info.currentTarget)
// })
// //
// const info = {name: "binay", age:18}
// function hello (info) {
//     console.log(info)
// }
// hello(info);





// console.log("START");
//
// const myBtns = document.querySelectorAll(".btn");
// console.log(myBtns)

// myBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         let num = 0
//         for(let i = 0; i<= 1000000000; i++){
//             num += i
//         }
//        console.log( e.currentTarget.textContent);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 100000000; i++) {
//     outerVar += i;
// }
//
// console.log("END");



// little Practice 
//
// const myBtns = document.querySelectorAll(".btn");
// console.log(myBtns)
// myBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         e.currentTarget.classList.toggle("btnYellow")
//     })
// })




// const body = document.querySelector("body")
// const specialBtn = document.querySelector("#special-btn");
// const myh3 = document.querySelector(".myh3");


// const randomValues = () => {
//     const value1 = Math.floor(Math.random() * 255) + 1;
//     const value2  = Math.floor(Math.random() * 255) + 1;
//     const value3  = Math.floor(Math.random() * 255) + 1;
//     body.style.backgroundColor = `rgb(${value1},${value2},${value3})`
//     myh3.textContent = `rgb: (${value1}, ${value2}, ${value3})`
// }

// specialBtn.addEventListener("click", randomValues)