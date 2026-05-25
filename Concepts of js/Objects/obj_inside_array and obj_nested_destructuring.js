// Object inside array

// const users = [
//   {userId: 1, firstName: "Binay", gender: "Male"},
//   {userId: 2, firstName: "Budhhi", gender: "Male"},
//   {userId: 3, firstName: "Sapan", gender: "Male"},
// ]

// for(let user of users){
//   console.log(user.firstName)
// }



// Nested Destructuring
// const users = [
//   {userId: 1, firstName: "Binay", gender: "Male"},
//   {userId: 2, firstName: "Budhhi", gender: "Male"},
//   {userId: 3, firstName: "Sapan", gender: "Male"},
// ]

// const [{firstName: name, userId:userkoid}, ,{userId:id}] = users;
// console.log(name, userkoid,id)




// Some Question and Answer


//1
// const inventory = [
//   {item: "Laptop", stock: 5},
//   {item: "Phone", stock: 12},
// ];
// const[{item: firstItem}, {stock: secondStock}] = inventory;
// console.log(firstItem, secondStock);


//2
// const students = [
//   {name: "Anil", score: 85},
//   {name: "Binay", score: 92},
//   {name: "Sita", score: 78},
// ];
// for(let{name,score} of students){
//   console.log(`${name} scored ${score}`)
// }


//3
// const products = [
//   {title: "Shirt", price: 25}
// ];
// const [{title, category = "general"}] = products;
// console.log(title,category);
