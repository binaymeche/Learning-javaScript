// new keyword

function createUser (firstName,age) {
  this.firstName = firstName;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.firstName, this.age)
}
// const user1 = new createUser("binay", 18);

// new keyword 
// 1. empty object this = {}
// 2. return this (the empty "{}" object we created using new)

// user1.about()



// constructor function
// use the capital letter when creating a constructor which will be call by using only new keyword
function CreateUser (firstName,lastName,email,age,address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }


CreateUser.prototype.about = function () {return `${this.firstName} is ${this.age} years old`};
CreateUser.prototype.is18 = function() {
    return this.age >= 18;};
CreateUser.prototype.sing = function () {
    return "lady runnin down to the riptide!!...";};


// console.log(createUser.prototype);
const user1 = new CreateUser("Buddhi", "Thamsuhang", "buddhibahadur123@gmail.com", 21, "jatrubadi");

// console.log(user1.about())
// console.log(user1.is18())
// console.log(user1.sing())

for(let key in user1) {
  // console.log(key)
  if(user1.hasOwnProperty(key)) {
    console.log(key)
  }
}