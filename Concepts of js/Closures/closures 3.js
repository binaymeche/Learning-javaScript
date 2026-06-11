const func = () => {
  let functionCalled = 0;
  return function () {
    functionCalled++;
    if(functionCalled > 1) {
      console.log("You have already called me once")
    } else {
      console.log("Hi, U called me")
    }
  }
}

const myFunc = func();
myFunc()
myFunc()
myFunc()
myFunc()
console.log("\n")
const myFunc1 = func();
myFunc1();
myFunc1();
myFunc1();
myFunc1();