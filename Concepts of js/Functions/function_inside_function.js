// function inside a function

const hello = () => {
  const happyBirthday = () => {
    console.log("happy birthday to you...");
  };

  const addTwoNumbers = (num1, num2) => num1 + num2;

  console.log("hello");
  happyBirthday();
  console.log(addTwoNumbers(3,4));
};

hello();

// happyBirthday() // happyBirthday is not defined
// You cannot call the function which is inside a function like normally

