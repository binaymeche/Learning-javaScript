// understanidng callbacks

// function myFunc1(callback) {
//     console.log("Random shit 1")
//     callback()
// }

// myFunc1(function myFunc2() {
//     console.log("Random shit 2")
// }
// )




// function addTwo(callback) {
//     callback
// }

// const sumTwo = (x,y) => {
//         console.log(x+y)
//     }

// addTwo(sumTwo(2,3))




// a simple calculator using callback
const func1 = (number1, number2, callback) => {
  console.log(number1, number2);
  let valid =
    typeof number1 === "number" && typeof number2 === "number"
      ? callback(number1, number2)
      : "Invalid";
  // can use the normal if condition; just went to check if it works
  return valid;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subract = (num1, num2) => {
  return num1 - num2;
};

let value = func1(7, 5, subract);
console.log(value);
