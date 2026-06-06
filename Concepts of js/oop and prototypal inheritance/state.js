// static methods and properties


class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static goat = "Lewis Hamilton"
  static classInfo () { // accessible via class not the object for e.g: Person
    return `This is method class`
  }

  get fullName () {  
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(fullName) {
    const [firstName,lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
  eat() {
    return `${this.firstName} is eating`;
  }
  isSuperCute () {
    return this.age <= 1;
  }
}

const person1 = new Person("Max", "Verstappen", 29);
// console.log(person1.fullName)
person1.fullName = "Isack Hadjar"


console.log(Person.goat)
console.log(Person.classInfo()) // use of static; Called by class not by object