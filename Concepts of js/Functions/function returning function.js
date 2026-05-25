// function returning function

function myFunc() {
  return function () {
    return "hello world";
  };
}

const ans = myFunc();
// console.log(ans());



// Some Questions and Answer

//1
function func1 () {
  return function () { // asnwer function
    return "Why so Obsseced with me! lol"
  }
}
const answer = func1 () ();  // A function can be double invoked if it is assign like this
// console.log(answer)


//2
function greetUser (greeting) {
  return function (name) {
    return `${greeting}, ${name}`
  }
}
const morningGreeter = greetUser ("Good Morning") ("Binay");
// console.log(morningGreeter);


//3
const multiplier = (factor) => (num) => factor * num;
const triple = multiplier(3) (5);
// console.log(triple);

