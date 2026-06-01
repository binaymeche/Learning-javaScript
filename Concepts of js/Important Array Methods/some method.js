// some method

const numbers= [3,5,8,9];
// Is there any number which is even?

const anyEven = numbers.some(value => value % 2 === 0);
// console.log(anyEven) 



const liveMatches = [
  { matchName: "Man City vs Arsenal", score: "2-1", status: "FT" },
  { matchName: "Real Madrid vs Barcelona", score: "0-0", status: "10 mins" },
  { matchName: "Bayern vs Dortmund", score: "3-1", status: "FT" }
];
const concludedMatch = liveMatches.some(match => match.status === "FT");
console.log(concludedMatch)