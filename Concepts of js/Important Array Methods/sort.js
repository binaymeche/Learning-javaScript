// sort

// sort method is takes a callback function in which you pass the two parameters which are; number1 and number2 and it can sort the array in ascending and decending order. Note: they mutate the original array.

const numbers = [11,21,1,42,6,43,56,2,3];
numbers.sort((a,b) => a-b)
// How it works
// for eg: a = 11  b = 21
// 11 - 21   if positive then put "a" after "b"  [b,a]
// 11 - 21   if negative then put "a" ahead of "b" [a,b]
// console.log(numbers)


const userNames = ["Aarabh","Nabin", "Max", "Binay", "Abi", "Buddhi", "Sonam", "Sapan", "Dipansu"];
userNames.sort();
// console.log(userNames)


// const reversedNumbers = numbers.reverse();
// console.log(reversedNumbers)


// price lowToHigh    price HighToLow
const products = [
  {id: 1, name: "lenovo loq", price: 140000},
  {id: 2, name: "lenovo Legion", price: 310000},
  {id: 3, name: "Asus Strix", price: 300000},
  {id: 4, name: "HP Victus", price: 120000},
]

const lowToHigh = [...products].sort((a,b) => a.price - b.price);
// const HighToLow = [...products].sort((a,b) => b.price - a.price);
// console.log(lowToHigh);
// console.log(HighToLow);




// Some Question and Answer

//1
const nominees = [
  { name: "Vinicius Jr", goals: 24, assists: 11 },
  { name: "Haaland", goals: 38, assists: 5 },
  { name: "Bellingham", goals: 23, assists: 13 },
  { name: "Mbappe", goals: 44, assists: 10 }
];

const topScorers = [...nominees].sort((a,b) => b.goals - a.goals);
const topPlaymakers = [...nominees].sort((a,b) => b.assists - a.assists);

// console.log(topScorers);
// console.log(topPlaymakers);
// console.log(nominees[0]) // protected.


//2
const forwardLine = [
  { name: "Rodrygo", pace: 88 },
  { name: "Mbappe", pace: 97 },
  { name: "Vini Jr", pace: 95 },
  { name: "Bellingham", pace: 80 }
];
const fastestAttackers = [...forwardLine].sort((a,b) => b. pace - a.pace);
// console.log(fastestAttackers);
// console.log(forwardLine[0])


//3
const steamWishlist = [
  { title: "Witcher 3", price: 15 },
  { title: "Cyberpunk 2077", price: 60 },
  { title: "Elden Ring", price: 40 },
  { title: "Hollow Knight", price: 7 }
];
const cheapestGames = [...steamWishlist].sort((a,b) => a.price - b.price);
// console.log(cheapestGames);


//3
const substitutes = ["Modric", "Arda Guler", "Brahim", "Endrick", "Ceballos"];
const alphabeticalSubs = [...substitutes].sort();
// console.log(alphabeticalSubs);


//4
const myLegends = [
  { name: "Wraith", class: "Skirmisher" },
  { name: "Gibraltar", class: "Support" },
  { name: "Bloodhound", class: "Recon" },
  { name: "Caustic", class: "Controller" }
];
const sortedClasses = [...myLegends].sort((a,b) => a.class.localeCompare(b.class))
// Since we cant sort string like numbers so we use localeCompare
// console.log(sortedClasses);