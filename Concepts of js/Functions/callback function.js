// Callback  function

// A callback is simply a function that is passed as an argument into another function, to be executed ("called back") at a later time.

function myFunc(callback) {
  console.log("before calling myFunc2")
  callback("Binay");
}

function myFucn2 (name) {
  console.log("indide myFunc2");
  console.log(`Your name is ${name}`)
}

// myFunc(myFucn2);




// Some Questions and Answer

//1
// function makeCocktail (alcoholBase,...ingredients) {
//   console.log(`Base: ${alcoholBase}`);
//   console.log(`Mixers:`, ingredients);
// }
// makeCocktail("White Rum","Lime Juice", "Simple Syrup", "Mint");


//2
// const singleUser = {name: "Anil", role: undefined};
// function checkAccess ({name,role = "user"}) {
//   return `${name} has the access level of ${role}`;
// }
// console.log(checkAccess(singleUser))


//3
const mathOperation = (num1, num2, operation) => operation(num1,num2);

// const operation = (num1,num2) => {
//   console.log(num1 * num2);
// }

const product = mathOperation(2,3,(a,b) => a*b)
const sum = mathOperation(2,3,(a,b) => a+b)
console.log(product);
console.log(sum);