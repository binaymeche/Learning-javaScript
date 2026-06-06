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
  constructor(name, age, animalType, breed) {
    super(name, age,animalType)
    
    this.breed = breed
  }
  isFast(speed) {
    return `${this.name} runs at a speed of ${speed}`
  }
  eat () {
    return `Inside Dog class`
  }
}

// Object / Instance
const tommy = new Dog("Tommy", 1, "Mammal" , "German Shephard")
console.log(tommy)
console.log(tommy.isFast("50 kmph"))
console.log(tommy.eat("Dog Food")) // runs the method which is inside the derived class not the Base one Think it like the lexical environment

