// callbacks, callback hell, pyramid of doom
// asynchronous programming

const myh1 = document.querySelector(".myh1");
const myh2 = document.querySelector(".myh2");
const myh3 = document.querySelector(".myh3");
const myh4 = document.querySelector(".myh4");
const myh5 = document.querySelector(".myh5");
const myh6 = document.querySelector(".myh6");
const myh7 = document.querySelector(".myh7");
const myh8 = document.querySelector(".myh8");
const myh9 = document.querySelector(".myh9");
const myh10 = document.querySelector(".myh10");


// callback hell
// setTimeout (() => {
//     myh1.textContent = "Heading 1";
//     myh1.style.color = "violet"
//     setTimeout (() => {
//         myh2.textContent = "Heading 2";
//         myh2.style.color = "purple";
//         setTimeout (() => {
//             myh3.textContent = "Heading 3";
//             myh3.style.color = "red"
//             setTimeout (() => {
//                 myh4.textContent = "Heading 4";
//                 myh4.style.color = "pink"
//                 setTimeout (() => {
//                     myh5.textContent = "Heading 5";
//                     myh5.style.color = "teal"
//                     setTimeout (() => {
//                         myh6.textContent = "Heading 6";
//                         myh6.style.color = "blue"
//                     },1000)
//                 },2000)
//             },2000)
//         },1000)
//     },2000)  
// },3000)





function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout (() => {
            if(element) {
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback()
            }
        } else {
            if(onFailureCallback) {
                onFailureCallback()
            }
        }
        }, time);
}

// Pyramid of doom 
changeText(myh1, "Heading 1", "violet", 1000, () => {
    changeText(myh2, "Heading 2", "violet", 1000, () => {
        changeText(myh3, "Heading 3", "violet", 1000, () => {
            changeText(myh4, "Heading 4", "violet", 1000, () => {
                changeText(myh5, "Heading 5", "violet", 1000, () => {
                    changeText(myh6, "Heading 6", "violet", 1000, () => {
                        changeText(myh7, "Heading 7", "violet", 1000, () => {
                            changeText(myh8, "Heading 8", "violet", 1000, () => {
                                changeText(myh9, "Heading 9", "violet", 1000, () => {
                                    changeText(myh10, "Heading 10", "violet", 1000, () => {
                                    },() => { console.log("Heading 10 Doesn't Exist")})
                                },() => { console.log("Heading 9 Doesn't Exist")})
                            },() => { console.log("Heading 8 Doesn't Exist")})
                        },() => { console.log("Heading 7 Doesn't Exist")})
                    },() => { console.log("Heading 6 Doesn't Exist")})
                },() => { console.log("Heading 5 Doesn't Exist")})
            },() => { console.log("Heading 4 Doesn't Exist")})
        },() => { console.log("Heading 3 Doesn't Exist")})
    },() => { console.log("Heading 2 Doesn't Exist")})
},() => { console.log("Heading 1 Doesn't Exist")})



changeText(myh6, "Heading 6", "violet", 1000, () => {
                        
},() => { console.log("Heading 6 Doesn't Exist")})