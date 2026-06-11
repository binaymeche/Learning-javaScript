// Closures

// A closure is a function that remembers its outer variables (its lexical environment) even after the outer function has completely finished executing and has been popped off the Call Stack.



// function outerFunction () {
//   function innnerFunction () {
//     console.log("hello world")
//   }
//   return innnerFunction
// }

// const ans = outerFunction ();
// console.log(ans)
// ans()



function printFullName (firstName, lastName) {
  function printName () {
    console.log(firstName,lastName)
  }
  return printName
}

const ans = printFullName ("Binay", "Meche");
console.log(ans)
ans()

// Closure returns with their lexial scope values if the values arent available in their current scope. 
// They are kinda like a friend who says i cannot do that but i have a friend who can do that.