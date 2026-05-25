// const user = {
//   name: "Binay",
//   surName: "Meche",
//   age: 18,
//   hobbies: ["coding", "reading manga", "watching movies"],
// }

// console.log(`The name of the user is : ${user.name}`);
// console.log(`The hobbies of ${user.name} are ${user.hobbies}`);

// user.isBoy = true;
// console.log(user);


//another way to access the objects
// console.log(user["name"])



//Object's Dot notation VS bracket notation
// const key = "email"
// const user = {
//   name: "Binay",
//   surName: "Meche",
//   age: 18,
//  "user hobbies": ["coding", "reading manga", "watching movies"],
// }

// user[key] = "binaymeche2425@gmail.com";

// console.log(user);



//Solving some qustions

//1
// const user = {
//   name: "Alex",
//   age: 22
// };
// user.isStudent = true;
// console.log(user);


//2
// const person = {
//   firstName : "Binay",
//   "favorite game" : "Minecraft",
// };
// console.log(person["favorite game"]);


//3
// const key = "email";
// const user = {
//   name: "John"
// };
// user[key] = "john@gmail.com";
// console.log(user);


//4
// const user = {
//   name: "Binay",
//   age: 18,
//   country: "Nepal"
// };
// for(let index in user){
//   console.log(`${index} : ${user[index]}`)
// }


//5
// const user = {
//   name: "Alex",
//   hobbies: ["coding", "gaming", "music"],
// };
// for(let index in user.hobbies){
//   console.log(user.hobbies[index]);
// }


//6
// const users = [
//   {name: "Binay", age: 18},
//   {name: "Alex", age: 20},
//   {name: "John", age: 25},
// ]
// for(let user of users){
//   console.log(user.name)
// }


//7
// const users = [
//   {name: "Binay", isAdmin: false},
//   {name: "Alex", isAdmin: true},
//   {name: "John", isAdmin: false},
// ]
// for(let user of users){
//   if(user.isAdmin === true){
//     console.log(user.name)
//   }
// }


// const key = "name";

// const user = {
//   name: "Binay"
// };

// console.log(user.key);
// console.log(user[key]);