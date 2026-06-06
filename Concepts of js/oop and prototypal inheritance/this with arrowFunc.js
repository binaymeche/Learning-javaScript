// this keyword with arrow functions

// Don't use arrow function while using this keyword because arrow function will only check in it's lexical scope and global scope no inside the object

const user1 = {
  name: "binay",
  age: 18,
  about: () => {
    console.log(`${this.name}, ${this.age}`)
  }
}
user1.about()
