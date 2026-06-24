// function hello (x) {
//   const a = "varA";
//   const b = "varB";
//   return function () {
//     console.log(a,b,x)
//   }
// }

// const ans = hello ("agrs");
// ans();


const func1 = () => {
    console.log("func1")
    return (num1, num2, sum) => {
       return sum = num1 + num2;

    }
} 
let total = func1()(3,4);
console.log(total)