// iterables
// in which loop can be used
// string, array are iterable

// for example

//1
// const name = "BinayMeche";
// for(let names of name) {
//   console.log(names);
// }

//2
// const items = ["Item1", "item2", "item3"];
// for(let item of items) {
//   console.log(item);
// }

//3 
// const users = {user1: "Binay", user2: "Dihpansu", user3: "Aarabh", user4: "Abi"};
// for(let user of (users)) {
  // console.log(user)
   // throws error because object are not iterable.
  // however for in and for of with Object.keys can make it iterable
// }


//------------------------------------------------------------


// array like object
// the things which have property called length like array.length
// they can be accessed via their index
// example:- string

const firstName = "Max";
// console.log(firstName[1]);


const lastName = "Verstappen";
// console.log(lastName.length);