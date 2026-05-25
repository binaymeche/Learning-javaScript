// Arrow function


const happyBirthday = () => {
  console.log("happy birthday to you...");
}
// happyBirthday();

const sumThreeNumbers = (x,y,z) => {
  return x + y + z;
}
// console.log(sumThreeNumbers(2,4,6));

const isEven = (num) => {
  return num % 2 === 0;
}
// console.log(isEven(10000))

const firstChar = word => {
  firstLetter = word[0].toUpperCase();
  return firstLetter === "H" ? "H ah huh?" : "aww not bad";
};
// console.log(firstChar("hitman"))

const isBoy = Boolean => {
  return Boolean
}
// console.log(isBoy(true));



// Some Question and Answers

//1
const sumThreeNumbersOneLiner = (num1,num2,num3) => num1 + num2 + num3;
// console.log(sumThreeNumbersOneLiner(6,1,9));


//2
const isEvenOneLiner = number => number % 2 === 0;
// console.log(isEvenOneLiner(8))


//3 
const isBoyOneLiner = male => male;
// console.log(isBoyOneLiner(false));


//4
const getFinalPrice = (price,isMember) => isMember === true ? price * 0.8 : price;
// console.log(getFinalPrice(1000, true));


//5
const member = {name: "Binay", city: "Kathmandu", age:24};
const greetMember = ({name:nam, city:sahar} = member) => `Welcome ${nam} from ${sahar}` 
// console.log(greetMember(member))


//6
const getFirstItem = arr => arr.length <= 0 ? "Empty String" : arr[0];
// console.log(getFirstItem([4,5,4,33]))


//7
const doubleAllValues = array =>{
  let newArray =[];
  for(let arr of array){
    arr *= 2;
    newArray.push(arr)
  }
  return newArray
}

console.log(doubleAllValues([2,4,6,8]))