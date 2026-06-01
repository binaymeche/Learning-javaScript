// every method

const numbers = [2,4,6,8];
const evenNums = numbers.every(value => value % 2 === 0);

// it return boolean value (true/falses) 
// Note : it checks every element inside an array so if there 1 odd in array then it will return false.

// console.log(evenNums);



const userCart = [
  {productId: 1, productName: "Laptop", price: 123000},
  {productId: 2, productName: "mobile", price: 23000},
  {productId: 3, productName: "tablet", price: 13000},
]
const IsInBudget = userCart.every(product => product.price <= 150000);
// console.log(`The product range is in budget?`, IsInBudget)