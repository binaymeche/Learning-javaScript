// Hositing


// hello()
function hello () {
  console.log("hello world")
}
// This will work in js and only in function declaration not in the function expression


// sayGoodbye()  // this will cause an error in the code because you cannot call a function before defining it.
const sayGoodbye = function () {
  console.log("goodbye mate")
}


// singSong()  // same as the function expression it will not work in the arrow function as well
const singSong = () => {
  console.log("Singing song....")
}


// console.log(myWord)  // undefined
// console.log(myWord2)  // Cannot acces before initialization
var myWord = "Hello unc";
let myWord2 = "Sup folks";