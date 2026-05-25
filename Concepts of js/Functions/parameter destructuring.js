// Parameter destructuring

const person = {
  firstName: "Binay",
  gender: "Male",
}


// Traditional way to access the object (No use of destructuring)
// function getDetails(user) {
//   console.log(user.firstName);
//   console.log(user.gender);
// }
// getDetails(person);


// Modern way to access the object (Use of destructuring)
function getDetails ({firstName, gender, student = true}, age) {
  console.log(firstName);
  console.log(gender);
  console.log(student)
  console.log(age);
}

getDetails(person,18);