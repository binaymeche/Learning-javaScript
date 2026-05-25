function singSong () {
  console.log("happy Birthday my friend");
}
// singSong(); // function calling / invoke / run

const singRiptide = function () {
  console.log("Oh lady runnin down to the riptide...")
}
// singRiptide()

function addinNumbers (a,b) {
  return a + b;
}
const sum = addinNumbers(2,5);
// console.log(sum);


function sumThreeNumbers (num1,num2,num3) {
  return num1 + num2 + num3;
}
const total = sumThreeNumbers(2,4,6);
// console.log(total);


function isEven (num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
// console.log(`The number is ${isEven(4)}`)


function firstChar (word) {
  return word.slice(0,1);
  // return word[0];
}
const char = firstChar("hello");
// console.log(char)


// function target (myNums,specialNum) {
//   for(let i = 0; i < myNums.length; i++){
//     if (myNums[i] === specialNum){
//       return i;
//     } 
//   }
//   return -1;
// }
// const value = target([22,33,4,5,32],33)
// console.log(value);


// const array = [3,9,27,2,4,8];
// const target = 2;
// const findIndex = function (array, target) {
//   for(let arr in array){
//     if(array[arr] === target){
//       return arr;
//     }
//   }
//   return -1;
// }
// const answer = findIndex(array,target);
// console.log(answer)




// Some Questions and Answer


//1
// const getInitials = function (firstName, lastName){
//   return (firstName[0] + lastName[0]).toUpperCase()
// }
// console.log(getInitials("binay", "meche"))


//2
// const calculateTax = function (number){
//   return number < 0 ? "Invalid Price" : number * 0.13; 
// }
// console.log(calculateTax(1000));


//3
// const user = {name: "Anil", role: "user"};
// const checkAdmin = function (user){
//   if(user.role === "admin"){
//     return true;
//   }
//   return false;
// }
// console.log(checkAdmin(user))


//4
// const getBigNumbers = function (array){
//   let newArr = [];
//   for(arr of array){
//     // console.log(arr)
//     if(arr > 10) {
//       newArr.push(arr)
//     }
//   }
//   return newArr;
// }
// const array = [5,12,3,20];
// const returnNums = getBigNumbers(array)
// console.log(returnNums)