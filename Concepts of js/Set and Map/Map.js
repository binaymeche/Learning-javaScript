// Maps
// map is iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anthing as key
// like array, numbers, string




// object Literal
// key -> string
// key -> symbol
const person = {
  firstName: "Binay",
  age: 18,
  1: "one"   // the key called 1 is "1" not a number it is a string
}
// console.log(person["1"])
// for(let key in person) {
//   console.log(key)
// }



// Map
const user = new Map();
user.set("firstName", "Binay");
user.set("age", 18);
user.set(1, "one");  // can create numbers as key
// console.log(user)
// console.log(user.get("firstName")) // to access the Map we use get method
// // console.log(user.keys()) // to access all the keys in one go

// for(let key of user.keys()) {
//   console.log(key, typeof key)
// }

for(let [key, value] of user) {
  // console.log(Array.isArray(key)) // for key: value pair  return as array
  // console.log(key, value)
}



// const specificPerson = new Map([['firstName','Binay'], ['hobby','coding']]);
// console.log(specificPerson)



const person1 = {
  id: 101,
  name: "Meche",
}
const extraInfo = new Map();
extraInfo.set(person1, {age: 18, gender: "Male"})
// console.log(extraInfo)
// console.log(extraInfo.get(person1))