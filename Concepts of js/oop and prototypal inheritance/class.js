// class CreateUser {
//   constructor(firstName, lastName, email, age, address) {
//     console.log("Constructor called / invoked");
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }
//   about () {return `${this.firstName} is ${this.age} years old.`}
//   is18 () {return this.age >= 18 }
//   song () {return `Your morning eyes i could stare like watching stars`}
//   func(a) {
//     return a
//   }
// }

// const user1 = new CreateUser("binay", "Meche", "binaymeche77@gmail.com", 18, "Jhapa - Nepal")
// console.log(user1.about()) 
// console.log(Object.getPrototypeOf(user1))
// console.log(user1.func("a ko Value xai Alu hoo."))



// Some Question and Answer

//1
//  anial  2 proper  naem age eat
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(food) {
    return `${this.name} eats ${food}` ;
  }
  isFast (speed) {
    return `${this.name} runs at speed of ${speed}`
  }
}
const animal1 = new Animal ("Horse", 10)
// console.log(animal1);
// console.log(animal1.eat("Grains"));
// console.log(animal1.isFast("30 kmph"));


// dog
class Dog {
  constructor (name,age) {
    this.name = name;
    this.age = age;
  }
  eat(food) {
    return `${this.name} eats ${food}` ;
  }
  isFast (speed) {
    return `${this.name} runs at speed of ${speed}`
  }
  isCute() {
    return `Cute`;
  }
}

const tommy = new Dog ( "tommy", 4);
// console.log(tommy.isFast("10kmph"));
