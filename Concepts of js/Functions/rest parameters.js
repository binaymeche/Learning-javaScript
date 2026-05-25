// Rest parameters

// Rest parameters is used to add all the remaining arguement in one single parameter which is initialize with "..." triple dots


// function myFunc (a,b,...c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// myFunc(3,4,5,55,32,11,31,67)


let answer = 0;
const addAll=  (...a) => {
  for(let add of a){
    // console.log(add)
    answer += add;
  }
  return answer
}
const total = addAll(1,2,3,4,5,6,7,8,9)
console.log(total)




// Rules of ...(Rest parameters)
/*  
1. function wrongFunc (a, ...b, c) {}     This is wrong
2. function rightFunc (a, b, ...c) {}     This is correct

3. function multiRest(...a, ...b) {}      This is incorrect 
   You cant have multiple rest parameters.
*/


// Rest parameter(...)   VS  Spread Operator(...)
/* 
In JavaScript, ... is used for two completely opposite features depending on where you type it:

1. Rest Parameters: Used in the parameters of a function to gather individual arguments into a single array.

2. Spread Operator: Used in actual expressions/code to spread an array out into individual items.

Note: Think of it like an accordion: Rest squeezes things together into a box, while Spread pulls things apart.
*/



// For Example

// Rest parameter
const gather = (...items) => console.log(items);
gather(1,2,3,4,5,6);


// Spread operator
const numbers = [1,2,3];
console.log(...numbers) // 1 2 3  (No array brackets, just loose numbers)

//2nd usecase of spread
const modernNumbers = [...numbers, 4,5,6];
console.log(modernNumbers); // [1,2,3,4,5,6] // use for copying