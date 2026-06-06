// const userMethod = {
//   about: function () {
//       return `${this.firstName} is ${this.age} years old`
//   },
//   is18: function() {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "lady runnin down to the riptide!!...";
//   }
// }

function createUser (firstName,lastName,email,age,address) {
    const user = Object.create(createUser.prototype); // creating an empty object and chainning the userMethod in here by using __proto__
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user
  }


createUser.prototype.about = function () {return `${this.firstName} is ${this.age} years old`};
createUser.prototype.is18 = function() {
    return this.age >= 18;};
createUser.prototype.sing = function () {
    return "lady runnin down to the riptide!!...";};


// console.log(createUser.prototype);
const user1 = createUser("Buddhi", "Thamsuhang", "buddhibahadur123@gmail.com", 21, "jatrubadi");

console.log(user1.about())
console.log(user1.is18())
console.log(user1.sing())
