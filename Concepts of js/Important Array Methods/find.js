// find method

// Note: It doesn't mutates the original value.

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength(string) {
  return string.length === 3;
}

const ans = myArray.find(isLength)
// console.log(ans)


// const userName = ["binay", "dihpansu", "aarabh", "abi", "buddhi"];
// const fiveCharName = userName.find((name) => {
//   return name.length === 8;
// })
// console.log(fiveCharName)


const users = [
  {userId: 1, userName: "binay"},
  {userId: 2, userName: "buddhi"},
  {userId: 3, userName: "sapan"},
  {userId: 4, userName: "sonam"},
  {userId: 5, userName: "jadu"},
]
const user3 = users.find((id) => id.userId === 3)
// console.log(user3)





// Some Questions and Answer


//1
const liveMatches = [
  { matchName: "Man City vs Arsenal", score: "2-1", status: "FT" },
  { matchName: "Real Madrid vs Barcelona", score: "0-0", status: "10 mins" },
  { matchName: "Bayern vs Dortmund", score: "3-1", status: "FT" }
];
const elClasicoMatch = liveMatches.find((match) => match.matchName === "Real Madrid vs Barcelona");
// console.log(elClasicoMatch)


//2
const cs2Inventory = [
  { assetId: 1042, skinName: "AK-47 | Asiimov", wear: "Minimal Wear" },
  { assetId: 9924, skinName: "M4A1-S | Printstream", wear: "Factory New" },
  { assetId: 5561, skinName: "AWP | Dragon Lore", wear: "Battle-Scarred" }
];
const inspectedSkin = cs2Inventory.find((skinDetail) => skinDetail.assetId === 9924);
// console.log(inspectedSkin)