// method
// function inside object

// this keyword isnt defined at compile time rather it is defined at teh run time.And also the "this" can access the object which is assigned while invoking the function


function personInfo() {
    console.log(`person name is ${this.name} and ${this.name} age is ${this.age}`)}

const person1 = {
  name: "binay",
  age: 18,
  about: personInfo
}

const person2 = {
  name: "buddhi",
  age: 21,
  about: personInfo
}

const person3 = {
  name: "sapan",
  age: 20,
  about: personInfo
}

// person1.about()
// person2.about()
// person3.about()



// Some Questions and Answers

//1
function showStats() {
  console.log(`Player ${this.username} has a K/D ratio of ${this.kd}.`);
}

const player1 = {
  username: "Binay_Gamer",
  kd: 1.4,
  display: showStats
};

// A junior developer copies the function reference to a separate variable
const separateTrigger = player1.display;

// Execution:
separateTrigger();
// the Answer is undefined because the separateTrigger is not a method so this keyword doesn't know bout the kd nor userName

