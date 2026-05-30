// map method

/*
map method takes a callback function just like forEach and it callback function will take element, index and array as the parameters in it. SO it is similar to forEach but the difference is that the map method can return a new array we no longer need to push() it can automatically return the value into assign varible as array.
*/

const numbers = [3, 4, 6, 1, 2];

function multipliedByTwo(num) {
  return num * 2;
}

let result = [];
result = numbers.map(multipliedByTwo)
// console.log(result)
// console.log(result === numbers)


let squareNumber;
squareNumber = numbers.map((nums,index) => {
  return nums ** 2
})
// console.log(squareNumber)



// Example
const users = [
  {name: "Binay", age: 18},
  {name: "Buddhi", age: 21},
  {name: "Sonam", age: 19},
  {name: "Sapan", age: 20}
];

let userName = users.map((user) => {return user["name"]}) // bracket notation
let isStudent = users.map((user) => {
  return{
    ...user, isStudent : true,
  }
})
let userKoAge = users.map((user) => {return user.age}) // dot notation

// console.log(userName);
// console.log(userKoAge);
// console.log(users)





// Some Questions and Answers

//1
const priceInUSD = [10, 25, 50, 100];
const priceInEUR = priceInUSD.map((price) => (price * 0.92).toFixed(2));
// console.log(priceInEUR);


//2
const products = [
  {id: 1, name: "Laptop", price:999},
  {id: 2, name: "Phone", price:699},
  {id: 3, name: "Tablet", price:399},
];
const updatedProducts = products.map((product) => {return {
  ...product,
  inStock: true,
}});
// console.log(updatedProducts);
// console.log(products[0].inStock);


//3
const players = [
  {name: "Lionel Messi", position: "Forward", goals: 800},
  {name: "Luka Modric", position: "Midfielder", goals: 120},
  {name: "Virgil Van Dijk", position: "Defender", goals: 50}
]
const playerProfiles = players.map((player) =>
  `${player.name} plays as a ${player.position}`)
// console.log(playerProfiles)