// Combine use of map,filter and reduce method.

const esportsRoster = [
  { player: "Tekkz", game: "FIFA", tier: "Pro", earnings: 15000 },
  { player: "Shroud", game: "Valorant", tier: "Pro", earnings: 50000 },
  { player: "Nicolas99FC", game: "FIFA", tier: "Pro", earnings: 12000 },
  { player: "Msdossary", game: "FIFA", tier: "Academy", earnings: 4000 },
  { player: "Faker", game: "League of Legends", tier: "Pro", earnings: 90000 },
  { player: "Gorilla", game: "FIFA", tier: "Pro", earnings: 8000 }
];

const totalFifaProEarnings = esportsRoster.filter(player => player.game === "FIFA" && player.tier === "Pro")
.map(player => player.earnings)
.reduce((totalAmount, currentPlayerEarning) => {
  return totalAmount + currentPlayerEarning;
}, 0)
console.log(totalFifaProEarnings)