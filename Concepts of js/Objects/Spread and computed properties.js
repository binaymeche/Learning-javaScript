// computed properties

// const key1 = "object1";
// const key2 = "object2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const myObj = {
//   //Easy way to do it
//   // [key1] : value1,
//   // [key2] : value2,
// };
// // 2nd way to do it
// myObj[key1] = value1,
// myObj[key2] = value2,


// console.log(myObj);



// Spread Operator
// const myABC = "abc";
// const myArr = [...myABC];

// const even = "2468";
// const myEven = [...even];
// console.log(myArr)
// console.log(myEven);


// Spread operator in objects
// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = {
//   key1 : "valueUnique",
//   key3: "value3",
//   key4: "value4",
// }

// const newObj = {...obj1,...obj2, key69: "value69"}
// console.log(newObj);

// const myABC = {..."qwerty"};
// myABC[0]= "v";
// console.log(myABC);




// Some Qustion and Answers

//1
// const roleType = "admin";
// const username = "Binay";
// const user = {};
// user[roleType] = username;
// console.log(user);


//2
// const propertyToChange = "status";
// const newValue = "active";
// const session = {
//   id: 101,
//   status: "idle"
// };
// session[propertyToChange] = newValue;
// console.log(session);


//3
// const defaultSettings = {
//   theme: "Light",
//   notifications: true,
//   Fontsize: "14px"
// };
// const userSettings = {
//   theme: "dark"
// }
// const finalSettings = {...defaultSettings,...userSettings};
// console.log(finalSettings);


//4
//The value will be name:Tablet and the details.price : 500;


//5
// const code = "JS101";
// const letters = [...code];
// console.log(letters)


//6
// the keys will start from 0  for eg 0 : 'h', 1 : 'i'