// filter method

/*
filter method is similar to map method but it only returns the true or false value not the boolean inside the array so we get values instead of boolean values in our array.
*/

const numbers = [1,3,2,6,4,8]

const even = numbers.filter((number) => number % 2 === 0)
// console.log(even);




// Some Questions and Answer 


//1
const gadgetCatalog = [
  {name: "Smart Watch", price: 250},
  {name: "Premium Headphones", price: 450},
  {name: "Tablet", price: 399},
  {name: "Mechanical Keyboard", price: 150}
];
const budgetGadgets = gadgetCatalog.filter((gadget) => gadget.price <= 400)
// console.log(budgetGadgets);


//2
const systemUsers = [
  {username: "Binay", role: "admin", active: true},
  {username: "Anil", role: "user", active: true},
  {username: "Sita", role: "admin", active: false},
  {username: "Buddhi", role: "admin", active: true},
]
const acticeAdmin = systemUsers.filter((user) => user.active=== true && user.role === "admin")
// console.log(acticeAdmin)



//Combine Questions of filter and map

//3
const ultimateTeamPlayers = [
  { name: "Bernardo Silva", position: "CM", rating: 88 },
  { name: "Bruno Fernandes", position: "CAM", rating: 87 },
  { name: "De Jong", position: "CM", rating: 86 },
  { name: "Casemiro", position: "CDM", rating: 89 },
  { name: "Pedri", position: "CM", rating: 84 }
];
const beastMidfielders = ultimateTeamPlayers.filter((player) => player.rating >= 85 && player.position === "CM")
.map((player) => `${player.name} (${player.rating})`)
// console.log(beastMidfielders);


//4
const steamLibrary = [
  { title: "Cyberpunk 2077", type: "Single-player", sizeGB: 110 },
  { title: "Valorant", type: "Multiplayer", sizeGB: 45 },
  { title: "Witcher 3", type: "Single-player", sizeGB: 50 },
  { title: "Red Dead Redemption 2", type: "Single-player", sizeGB: 120 },
  { title: "Counter-Strike 2", type: "Multiplayer", sizeGB: 85 }
];
const bloatwareGames = steamLibrary.filter((game) => game.type === "Single-player" && game.sizeGB > 80)
.map((game) => game.title)
// console.log(bloatwareGames)