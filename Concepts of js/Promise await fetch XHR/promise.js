// // Promise
// // promise is the future value that we currenlty do not know but eventually we will know the value and deal with it.


// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];


// // Producing the promise
// //
// const friedRicePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("vegetables") && bucket.includes("salts") && bucket.includes("rice")) {
//         resolve({value: "Fired Rice", request: "Fulfilled"});
//     } else{
//         reject({value: "Fired Rice", request: "Rejected", promise: "Denied"})
//     }
// })



// // Consuming the Promise
// //
// friedRicePromise.then(
//     // When promise is resolved 
//     (myfiredRice) => {
//     console.log(myfiredRice);
//     } 
// // ,(error) => {
// //     // When promise is rejected 
// //     console.log(error)
// // }
// ).catch( // we can use catch method instead of passing extra callback in then
//     (error) => {
//         console.log(error)
//     })





// Some questions and Answers

// 1.
//
// const accountBalance = 5000;
// const widthdrawalAmount = 7000;
// // Producing the promise
// const atmPromise = new Promise((resolve, reject) => {
//     if (widthdrawalAmount <= accountBalance) {
//         resolve("💰 Cash dispensed! Take your money.");
//   } else {
//     reject("❌ Insufficient funds in your account.");
//   }
// });
// // Consuming the Promise
// atmPromise.then((atmpromiseResolved) => {
//     console.log(atmpromiseResolved);
// }).catch((atmpromiseRejected) => {
//     console.log(atmpromiseRejected);
// })


// 2.
//
// const isOnline = false;
// // Producing the Promise
// const networkCheck = new Promise ((resolve, reject) => {
//     if (isOnline) {
//         resolve("Connected to the internet. App is ready !");
//     } else {
//         reject("No internet connection found.")
//     }
// });
// // Consuming the Promise
// networkCheck.then((hasInternet) => {
//     console.log(hasInternet);
// }).catch((noIntenet) => {
//     console.log(noIntenet);
// })