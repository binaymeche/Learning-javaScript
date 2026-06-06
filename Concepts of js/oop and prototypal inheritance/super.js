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
}

// Object / Instance
// const tommy = new Dog("Tommy", 1, "Mammal" , "German Shephard")
// console.log(tommy.isFast("50 kmph"))




// Example
class Character {
  constructor (username, level) {
    this.username = username;
    this.level = level;
  }
  showProfile () {
    return `${this.username} is level ${this.level}`;
  }
}
// const jadu = new Character ("qwerty007", 98)
// console.log(jadu)
class Mage extends Character {
  constructor(username, level, manaPool) {
    super(username,level);
    this.manaPool = manaPool;
  }
  castSpell (skillManaCost) {
    return `${this.username} casted a spell with ${skillManaCost} mana! Remaining mana = ${this.manaPool - skillManaCost}` 
  }
}
const cecilion = new Mage ("Void Space", 89, 500);
console.log(cecilion);
console.log(cecilion.castSpell(140))