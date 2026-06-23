// synchronous programming vs asynchronous programming



// synchronous programming
// it means the program will execute line by line (eg: Sequence)
// console.log("Script start");
// for(let i = 1; i < 10; i++) {
//     console.log(i);
// }
// console.log("Script end")



// setTimeout
// console.log("Script start");
// const hello = () => {
//     console.log("Hello amigos")
// }
// setTimeout(hello, 3000);
// console.log("Script End")

// console.log("Script Start"); 
// setTimeout(() => {
//     for(let i = 1; i<= 5; i++) {
//         console.log(i)
//     }
// }, 0);

// for(let i = 1; i<= 100; i++) {
//     console.log(".......")
// }
// console.log("Script end")

// console.log("Start")
// const id = setTimeout (() => { // setTime out has an id of their own
//     console.log("SetTime Out")
// }, 1000)
// console.log(`The id of setTimeout is ${id}`)
// console.log("End")




// clearTimeout
// It clears the whole callback so no more data inside the setTimeout 
// console.log("Start")
// const id = setTimeout (() => { // setTime out has an id of their own
//     console.log("SetTime Out")
//     for(let i = 0; i<5; i++) {
//         console.log(i)
//     }
// }, 1000)
// console.log(`The id of setTimeout is ${id}`);
// console.log("Clearing the timeout");
// clearTimeout(id); // it says i dont want that function now by clearing its id.
// console.log("End")




// Some questions and answers


// // 1. 
// console.log("Green Light");
// setTimeout(() => {
//     console.log("Max crosses the finish line !"); // this line will be printed after the pit stop because it stays at a thing called callback queue cuz of event loop.
// }, 0);
// console.log("Pit stop in progess...")


// // 2.
// console.log("Engine Start");  // prints 
// const pitStopId = setTimeout(() => {
//     console.log("Changing tires..."); // doesn't occur cuz it was cleard later
// }, 2000);
// for(let i = 1; i <= 3; i++) { // loop will wun 1 2 Pit stop cancelled 3
//     console.log(`lap ${i}`);
//     if(i === 2) {
//         console.log("Pit stop cancelled!");
//         clearTimeout(pitStopId); // cleared the whole setTimeout
//     }
// }
// console.log("Checkered Flag") // Prints


// 3
// can't my logic isnt upto that level yet sorry
const createSearchDebouncer = () => {
    let timerId;

    return function (searchTerm) {
        console.log("Called with:", searchTerm);

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            console.log("Searching:", searchTerm);
        }, 500);
    };
};
const handleTyping = createSearchDebouncer();
handleTyping("M");
handleTyping("MO");
handleTyping("MOM");
handleTyping("MOMO");


//4
// let notification = "";
// const id = setTimeout(() => {
//     console.log("Order Successfully")
//     notification = true;
//     console.log(notification);
// }, 1000);
// setTimeout(() => {
// clearTimeout(id);
// notification = false;
// console.log(notification);
// },5000)

