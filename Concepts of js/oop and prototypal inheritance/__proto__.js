const obj1 = {
  key1: "value1",
  key2: "value2",
}

const obj2 = {
  key3: "vaule3",
};
obj2.key4 = "Value4"

const obj3 = Object.create(obj1)
// it is the way to create an empty object 
// And i have pass the obj1 inside the obj3 so if i print obj1's key then it will search it in the obj1.
// Malai obj3 ma obj1 ko value khojna mann lago vane mero yo khali obj le obj1 ma ni search garna sakxa

// console.log(obj1.key1)
// console.log(obj2.key4)
obj3.key2 = "Qwerty"
// console.log(obj3.__proto__) // __proto__ and [[prototype]]
// console.log(obj3.key2)






const userMethod = {
  about: function () {
      return `${this.firstName} is ${this.age} years old`
  },
  is18: function() {
    return this.age >= 18;
  },
  sing: function () {
    return "lady runnin down to the riptide!!...";
  }

}

const createUser = (firstName,lastName,email,age,address) => {
    const user = Object.create(userMethod); // creating an empty object and chainning the userMethod in here by using __proto__
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
  return user
  }

const user1 = createUser("Buddhi", "Thamsuhang", "buddhibahadur123@gmail.com", 21, "jatrubadi");
console.log(user1)
const aboutUser = user1.about()
const userIs18 = user1.is18()
const userSing = user1.sing()
console.log(aboutUser);
console.log(userSing);