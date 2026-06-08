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
// player1.rank = "diamond"
// console.log(player1.rank)



// //2
class SmartCart {
  constructor () {
    this._items = [];
  }

  get items() {
  if(this._items.length === 0) {
    return "Your cart is empty"
    console.log(getter);
  }
  return this._items;
  }

  set items(addedItems) {
    console.log("setter");
    const [itemName, itemPrice] = addedItems.split(", ");

    const newProductObject = {
      name: itemName,
      price: Number(itemPrice)
    }

    this._items.push(newProductObject);
  }
}

// const myCart = new SmartCart();

// console.log(myCart.items);

// myCart.items = "Asus Laptop, 120000"
// myCart.items = "Logitech Mouse, 1200"
// console.log(myCart.items);



//3
class GamingProfile{
  constructor() {
    this._history = [];
  }

  //getter
  get matchResult () {
    return this._history;
  }

  //setter
  set matchResult(result) {
    if(result === "win" || result === "loss") {
      this._history.push(result);
    }
    else {
      console.log("Invalid match result! Only 'win' or 'loss' is allowed ");
    }
  }
}

// const user1History = new GamingProfile();
// user1History.matchResult = "loss";
// user1History.matchResult = "win";
// user1History.matchResult = "win";
// user1History.matchResult = "hecker";
// user1History.matchResult = "win";

// console.log(user1History.matchResult);



//4
class BankAccount {
  constructor () {
    this._ledger = [];
  }

  // getter
  get transaction () {
    return this._ledger;
  }

  // setter
  set transaction (amount) {
   if(amount !== 0) {
    this._ledger.push(amount);
   } else {
    console.log("Invalid amount")
   }
  }
}

// const account1 = new BankAccount();
// account1.transaction = 1232
// account1.transaction = 0
// account1.transaction = -12345;
// account1.transaction = 92345;
// account1.transaction = 3445;

// console.log (account1)


//5
class TravelPlanner {
  constructor () {
    this._route = [];
  }

  // getter 
  get route () {
    return this._route;
  }

  // setter
  set route (district) {
  const [origin, destinition]= district.split(" -> ");
  const routeObject = {
    from: origin,
    to: destinition,
  }
    this._route.push(routeObject);
  }
}

const trip = new TravelPlanner();

trip.route = "Kathmandu -> Jhapa";
trip.route = "Pokhara -> Lalitpur";
trip.route = "Jhapa -> Illam";

console.log(trip.route);