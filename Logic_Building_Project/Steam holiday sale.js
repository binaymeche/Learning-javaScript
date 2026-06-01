const rawSteamCatalog = [
  { id: 101, title: "Cyberpunk 2077", genre: "RPG", price: 60, rating: 88 },
  { id: 102, title: "FC 26", genre: "Sports", price: 70, rating: 65 },
  { id: 103, title: "The Witcher 3", genre: "RPG", price: 40, rating: 94 },
  { id: 104, title: "Elden Ring", genre: "RPG", price: 60, rating: 96 },
  { id: 105, title: "Valorant Points Bundle", genre: "FPS", price: 50, rating: 80 },
  { id: 106, title: "Hades", genre: "Indie", price: 25, rating: 98 }
];



// 1: the "RPG Sale" filter and discount
const discountedRPGs = rawSteamCatalog.filter(rgpGame => rgpGame.genre === "RPG")
.map(game => ({
  ...game, // copying the object so it doesnt mutateda
  price: game.price / 2
})); // 50% disount
// console.log(discountedRPGs)



// 2: The "Top-Rated" Sort (Leaderboard)
const homepageCarousel = [...discountedRPGs].sort((rating1,rating2) => rating2.rating - rating1.rating) // HighToLow Sort
// console.log(homepageCarousel);



// 3: The Featured Slot Update
homepageCarousel.splice(1,0, {id: 107, title: "Hollow Knight", genre: "Indie", price: 15, rating: 97}) // Adding wildcard game in the middle
// console.log(homepageCarousel);



// 4: The Cart Total Calculation
let totalCartPrice = homepageCarousel.reduce((total, currentValue) => {
  return total + currentValue.price;
}, 0);
// console.log(totalCartPrice) // 95



// immutability check
// console.log(rawSteamCatalog[2].price)
