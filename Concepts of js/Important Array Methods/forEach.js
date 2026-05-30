// forEach Method
/* 
forEach method takes input as a callback function and it automatically passes the value of the array inside the function and its index
*/



// Notes: 
/*
array.forEach((element, index, array) => { ... })

element: The current item in the loop (e.g., your user object).
index: The current position number (0, 1, 2, etc.).
array: The entire original array itself (in case you need to reference it).

You can choose to grab just the first one, the first two (like your myFunc(number, index) example), or all three!
*/


const numbers = [4,2,5,8];

function myFunc(number, index) {
  console.log(`index is ${index} and number is ${number}`);
}

// numbers.forEach(myFunc)

let multipliedByTwo = [];

numbers.forEach(function (number) {multipliedByTwo.push(number * 2)});

// console.log(multipliedByTwo)


const users = [
  {name: "Binay", age: 18},
  {name: "buddhi", age: 21},
  {name: "sapan", age: 20},
  {name: "jadu", age: 17},
  {name: "rover", age: 23},
];

// for({name, age} of users) {
//   console.log(name)
// }


// users.forEach(function (data) {
//   console.log(data.age);
// })

let result = []
users.forEach((data) => result.push(data.name));

// console.log(result)





// Some Questions and Answer


//1
const myTasks = ["Buy milk", "Clean room", "Exercise", "Read book"];
// myTasks.forEach((tasks, number) => console.log(`${number + 1}. ${tasks}`))  


//2
const itemsPrices = [12, 85, 45, 120, 60, 25];
let expensiveTotal = 0;
itemsPrices.forEach((itemsPrices) => itemsPrices > 50 ? expensiveTotal += itemsPrices : expensiveTotal+= 0)
// console.log(expensiveTotal);


//3
const employees = [
  {name: "Anil", hoursWorked: 45},
  {name: "Sita", hoursWorked: 35},
  {name: "Binay", hoursWorked: 40},
];

employees.forEach((element) => element.hoursWorked >= 40 ? element.status = "Full-Time" : element.status = "Part-Time")
// console.log(employees)