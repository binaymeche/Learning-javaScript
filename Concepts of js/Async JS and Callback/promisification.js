const myh1 = document.querySelector(".myh1");
// const myh2 = document.querySelector(".myh2");
const myh3 = document.querySelector(".myh3");
const myh4 = document.querySelector(".myh4");
const myh5 = document.querySelector(".myh5");
const myh6 = document.querySelector(".myh6");
const myh7 = document.querySelector(".myh7");
const myh8 = document.querySelector(".myh8");
const myh9 = document.querySelector(".myh9");
const myh10 = document.querySelector(".myh10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if(element) {
            element.textContent = text;
            element.style.color = color;
            resolve();
        } else {
            reject("element not found");
        }
        }, time);
    })
}

changeText(myh1, "One", "teal", 1000)
.then(() => {
return changeText(myh2, "Two", "red", 1000)
})
.then(() => {
return changeText(myh3, "Three", "orange", 1000)
})
.then(() => {
return changeText(myh4, "Four", "gray", 1000)
})
.then(() => {
return changeText(myh5, "Five", "green", 1000)
})
.then(() => {
return changeText(myh6, "Six", "royalblue", 1000)
})
.then(() => {
return changeText(myh7, "Seven", "yellow", 1000)
})
.then(() => {
return changeText(myh8, "Eight", "indigo", 1000)
})
.then(() =>changeText(myh9, "Nine", "pink", 1000)) // implicit 
.then(() =>changeText(myh10, "Ten", "violet", 1000)) // return
.catch ((error) => {
    alert(error)
})