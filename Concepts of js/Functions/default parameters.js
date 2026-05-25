// default parameters

// Default parameters are the value which is initialized when there is no argument is passed on the parameters.


// This is the old method of defining the default parameters when the arguement isnt pass. 
function addThree (num1,num2,num3) {
  if(num3 === undefined){
    num3 = 10;
  }
  return num1 + num2 + num3
}
const sumOfThree = addThree(2,8);
// console.log(sumOfThree);



// This is the new way of initilizing the default parameters in js
function addTwo (a,b = 7) {
  return a + b;
}

const ans = addTwo(2,undefined)
// const ans = addTwo(2,null) // passing null doesnt trigger the default value so in here it will print 2 + 0 = 2
// console.log(ans)



// For eg: 
const greet = (msg = "hello", name) => { // bad practice
  console.log(`${msg} ${name}`);
}
// greet("Binay");

const greetCorrect = (name,msg = "hello") => { //good practice
  console.log(`${msg} ${name}`);
}
// greetCorrect("Binay");




// Some question and anwers


//1
// const multiplyNumbers = (x, y = 5) =>  x * y; 
// console.log(multiplyNumbers(2))


//2
// const calculateTotal = (subtotal, taxRate = 0.13) => subtotal + (subtotal * taxRate);
// console.log(calculateTotal(2000));


//3
// const user = {
//   status: undefined
// }
// const getProfileStatus = ({status = "Guest"} = user) => `User status is currently: ${status}`;
// console.log(getProfileStatus(user));


//4
// const raiseToPower = (base, exponent = 2) => base**exponent;
// console.log(raiseToPower(25))

