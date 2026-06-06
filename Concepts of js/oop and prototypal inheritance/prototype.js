function hello () {
  console.log("hello there")
}

hello.myOwnProperty = "Very unique value";
console.log(hello.myOwnProperty);


// JavaScript function are more than a function
// function ===> function + object 

// you can add your own properties
// name property ---> tells function name;
// function provides more usefull properties




// function gives us a free space {} to add object value called prototype remember its prototype not __proto__ nor [[prototype]]
// and we can use that space 


console.log(hello.prototype);
// only functions provide prototype property

// Proof:
// if(hello.prototype) {
//   console.log('prototype is present')
// } else{
//   console.log("not present")
// }

hello.prototype.item1 = "Laptop";
hello.prototype.item2 = "Mobile";
hello.prototype.singFunc = () => "Lady runnin down to the riptide";

console.log(hello.prototype.singFunc())