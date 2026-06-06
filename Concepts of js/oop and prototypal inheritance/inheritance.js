class Animal {   // Base class
  constructor (name, age, animalType) {
    this.name = name;
    this.age = age;
    this.animalType = animalType;
  }
  eat (food) {
    return `${this.name} is eating ${food}`
  }
  isSuperCute () {
    return this.age <= 1
  }
}


class Dog extends Animal{  // Derived class
  
}

const puppy = new Dog("Puppy", 1, "Mammal")
console.log(puppy.eat("Milk"))