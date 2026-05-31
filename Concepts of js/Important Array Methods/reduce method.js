// reduce method

/*
  Reduce method takes a callback in which the parameters can take previous and current value.
*/

const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in array

const result = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100 )// this is called initial value of accumulator);
// console.log(result);


// accumulator, currentValue,  return
// 1                2            3
// 3                3            6
// 6                4            10
// 10               5            15


const userNames = ["Binay", "Sapan", "Sonam", "Buddhi"];
const name = userNames.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(name)


const userCart = [
  {productId: 1, productName: "mobile", price: 12000},
  {productId: 2, productName: "keyboard", price: 5000},
  {productId: 3, productName: "mouse", price: 2000},
  {productId: 4, productName: "textbook", price: 120},
]
const totalPrice = userCart.reduce((accumulator,currentValue ) => {return accumulator + currentValue.price}, 0)
// console.log(totalPrice)





// Some Questions and Answer


//1
const valorantCart = [
  {skin: "Vandal Prime", vp: 1775},
  {skin: "Phantom Oni", vp: 1775},
  {skin: "Reaver Knife", vp: 3550}
]
const totalVPCost = valorantCart.reduce((total, currentValue) => {
  return total + currentValue.vp;
}, 200);
// console.log(totalVPCost)


//2
const haalandStats = [
  { competition: "Premier League", goals: 36 },
  { competition: "Champions League", goals: 12 },
  { competition: "FA Cup", goals: 3 },
  { competition: "Carabao Cup", goals: 1 }
];
const totalSeasonGoals = haalandStats.reduce((totalGoals, currentCompGoals) => {
  return totalGoals + currentCompGoals.goals
}, 0);
const isBallonDOr = totalSeasonGoals >= 50 ? "Top Contender" : "Not Worthy";
// console.log(`Haaland goals are ${totalSeasonGoals} which makes him a ${isBallonDOr}`);

