// getter and setter

class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName () {  // get can invoke the method for you so no need of parenthesis. It makes the method a property accessible via "." Dot Notation.
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(fullName) {
    const [firstName,lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Max", "Verstappen", 29);
// console.log(person1.fullName)

person1.fullName = "Isack Hadjar"
// console.log(person1)



// Some Question and Answers

//1
class PlayerAccount {
  constructor(rank) {
    this._rank = rank;
  }
  get rank () {
    console.log("getter")
    return this._rank;
  }
  set rank (newRank) {
    console.log("setter")
    return this._rank = newRank.toUpperCase()
  }
}

const player1 = new PlayerAccount("immortal");
player1.rank = "diamond"
console.log(player1.rank)