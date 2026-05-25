// object destructuring


// const band = {
//   bandName : "led zepplin",
//   famousSong: "stairway to heaven",
//   anotherFamousSong: "kashmir",
//   year: 1968,
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,famousSong) 

// const {bandName,famousSong,...otherValue} = band;
// console.log(bandName, famousSong, otherValue);



// Some Questions and Answers

//1 
// const user = {
//   id: 55,
//   email: "binay@example.com",
//   isVerified: true
// };
// const {id,email} = user;
// console.log(id,email)


//2
// const movie = {
//   title: "Inception",
//   releaseYear: 2010
// };
// const {title:movieTitle, releaseYear:madeIn} = movie;
// console.log(movieTitle,madeIn);


//3
// const settings = {
//   theme: "dark"
// };
// const {theme,fontSize = "16px"} = settings
// console.log(theme,fontSize)


//4
// const localPlayer = {
//   username: "Slayer99",
//   stats: {
//     hp: 100,
//     level: 5
//   }
// };
// const {username,stats : {level}} = localPlayer;
// console.log(username,level)