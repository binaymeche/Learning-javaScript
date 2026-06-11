// function myFunc(power) {
//   return function (num) {
//     console.log(num ** power)
//   }
// }
// const powValue = myFunc(3)
// powValue(2)

// const cube = myFunc(3);
// cube(4);

// const square = myFunc(2);
// square(5);



// arrow functions
myFunc = power => {
  return num => console.log(num ** power)
}
const powValue = myFunc(3)
// powValue(2)

// const cube = myFunc(3);
// cube(4);

// const square = myFunc(2);
// square(5);



// func returs a function called myFunc
// myFunc