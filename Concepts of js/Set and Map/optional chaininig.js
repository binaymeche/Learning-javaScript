// optional chaining

const user = {
  firstName: "binay",
  // address: {country: "Nepal", state: "Koshi"}
}

console.log(user?.address?.state)
//By adding the ? right before the dot, you are telling JavaScript: "Hey, check if the thing on the left exists first. If it does, look inside it. If it doesn't exist (null or undefined), stop immediately and just hand me back undefined instead of crashing the whole system."