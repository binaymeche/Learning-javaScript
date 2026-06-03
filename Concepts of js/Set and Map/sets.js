// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicate allowed)

// const nam = "kirky";
// // console.log(nam);

// const numbers = new Set([1,2,3,1,4,5]); // the 1 after 3 is being ignored // also the order can be anything like 3,4,2,1,5 
// // console.log(numbers);

// const myNum = new Set();
// myNum.add(1,2,3,4); // only 1
// myNum.add(2);
// myNum.add([67,69]); // this array has different address
// myNum.add([67,69]); // this one has also has unique address
// console.log(myNum);
// if(myNum.has(2)){
//   console.log("Mero set ma 2 xa!")
// }

// for(let myn of myNum) {
//   console.log(myn)
// }


const myArray = [1,2,2,3,4,3,4,5,6]
const uniqueIds = new Set(myArray);
// Sets dont mutate the values.
// console.log(uniqueIds);
// console.log(myArray);

let length = 0;
for(let uniqueId of uniqueIds) {
    length++;
}
// console.log(length)



// Some Questions and Answers

//1
const dirtyList = ["Vandal", "Phantom", "Vandal", "Operator", "Phantom"];
const cleanList = [...new Set(dirtyList)]
// console.log(cleanList)


//2
const registeredGamers = ["Sapan", "Binay", "Buddhi", "Binay", "Sonam", "Sapan"];
const uniqueGamersArray = [...new Set(registeredGamers)];
// console.log(`Total unique players: ${uniqueGamersArray.length}`);