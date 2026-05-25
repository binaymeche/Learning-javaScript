// how to iterate objects

// const person = {
//   name: "binay",
//   age: 18,
//   "person hobbies": ["coding", "reading manga", "listining music"],
// }

// Use of (for in loop)
// Use of Object.keys


// for(let index in person){
//   console.log(`${index} : ${person[index]}`)
//   console.log(index," : ",person[index]);
// }

// console.log(Object.keys(person));
// const isArray = Array.isArray(Object.keys(person))
// console.log(isArray);

/*Note : Since we cant use (for of loop) in object so we make 
them array using Object.keys method and after than we can 
use them how we like.
*/

// for(let key of Object.keys(person)){
//   console.log(key," : ", person[key]);
// }



// Some Questions and answers

//1
// const person = {
//   name: "Binay",
//   age: 18,
//   country: "Nepal"
// };
// for(let key in person){
//   console.log(key, ":", person[key]);
// }


//2
//   const person = {
//   name: "Binay",
//   age: 18,
//   country: "Nepal"
// };
// for(let key of Object.keys(person)){
//   console.log(person[key]);
// }


//3
// const user = {
//   name: "Alex",
//   age: 22,
//   isStudent: true,
//   city: "Tokyo"
// };
// let totalProperties = 0;
// for(let key of Object.keys(user)){
//   // console.log(user[key]);
//   totalProperties += 1;
// }
// console.log(totalProperties)


//4
// const person = {
//   name: "John",
//   hobbies: ["coding", "gaming", "music"]
// };
// for(let key of Object.keys(person.hobbies)){
//   console.log(person.hobbies[key]);
// }


//5
// const user = {
//   name: "Binay",
//   address: {
//     city: "Kathmandu",
//     country: "Nepal"
//   }
// };
// for(let key in user.address){
//   console.log(user.address[key]);
  
// }


//6
// const users = [
//   {name: "Alex", age: 20},
//   {name: "John", age: 25},
//   {name: "Binay", age: 18}
// ];
// for(let user of users){
//   console.log(`${user.name} is ${user.age} years old`);
// }


//7
// const users = [
//   {name: "Alex", isAdmin: false},
//   {name: "John", isAdmin: true},
//   {name: "Binay", isAdmin: true}
// ];
// for(let user of users){
//   if(user.isAdmin !== false){
//     console.log(user.name);
//   }
  
// }


/*
 *It will print "name" because in for in loop the key will print the key's
 name unless we put that key in the bracket notation 
 */