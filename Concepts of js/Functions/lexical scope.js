// Lexical scope

const myVar = "value1"
function myApp() {
  // const myVar = "value12";

  function myFunc() {
    // const myVar = "value22";
    const myFunc2 = () => {
      console.log("inside myFunc2", myVar);
    }
    myFunc2();
  }
  // In Js the there is a concept called lexical environment which allows a a function to take value form local to global. 

  // At first it will check if the value is in it's own envirnomnet(block) if yes then okay if no then it will check its parent function or environment and uptp global environment.
  console.log(myVar);
  myFunc();
}
myApp();
