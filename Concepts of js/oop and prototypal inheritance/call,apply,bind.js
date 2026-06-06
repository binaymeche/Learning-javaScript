// call, apply, bind

function hello () {
  console.log("Hello World")
}
// hello.call()

const user1 = {
  firstName: "jadu",
  age: 89,
  about: function (hobby, favMusic) {
    console.log(this.firstName, this.age, hobby,favMusic); // jadu 89
  }
}

const user2 = {
  firstName: "naeh",
  age: 21,
}



//call
// user1.about.call(user2, "coding", "riptide");



// apply
// user1.about.apply(user2,["sketching", "lost umbrella"]); // takes input as ordered list e.g: array



//bind
const usingBind = user1.about.bind(user2, "playingGames", "stiches") // returns a function 
// usingBind();





// Some Question and Answer


// e.g: What not to do (No use of arrow function)
// const laptopProduct = {
//   brand: "Asus ROG",
//   price: 120000,

//   getArrowDetails: () => {
//     return `Product: ${this.brand}, Price: ${this.price}`;
//   }
// };

// console.log(laptopProduct.getArrowDetails());


//1
const keyboardProduct = {
  brand: "Logitech G Pro",
  price: 15000,

  getDetails: function (){
    return `Product: ${this.brand}, Price: ${this.price}`;
  }
};

// console.log(keyboardProduct.getDetails());


//2
function showStats() {
  return `Player ${this.username} has a K/D ratio of ${this.kd}.`;
} 
const player1 = {
  username: "Binay_Gamer",
  kd: 3.14,
  display: showStats
};
const fixedTrigger = player1.display.bind(player1);
// console.log(fixedTrigger());


//3
const barcelonaClub = {
  clubName: "FC Barcelona",
  announeTransfer: function(playerName) {
    const printAnnouncement = () =>  {
      console.log(`${this.clubName} has officiallyy signed ${playerName}`)
    }
    printAnnouncement();
  }
};

// barcelonaClub.announeTransfer("Dani Olmo");


const student1 = {
  name: "dihpansu",
  age: 19,
  about: function () {
    console.log(`Goat of Section is ${this.name} and age is ${this.age}`)
  }
}
const showDihpansu = student1.about.bind(student1);
console.log(showDihpansu);