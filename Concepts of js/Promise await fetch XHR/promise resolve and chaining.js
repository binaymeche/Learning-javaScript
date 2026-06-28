// Promise.resolve
// Promise chaining



// const myPromise = Promise.resolve("The problem is solved");
// // const myPromise = Promise.reject("The problem is not solved");
// myPromise.then((solve) => {
//     console.log(solve);
// }).catch ((notSolve) => {
//     console.log(notSolve)
// })


// then()
// then method always returns the promise



function myPromise () {
    return new Promise((resolve, reject) => {
        resolve("fooo");
    })
}
myPromise().then(value => {
    console.log(value);
    value += "tball"
    return value; // it is returning the value as promise so that we can use 'then' again in the value. 
}).then(value => {
    console.log(value)
    value += " player"
    return value
}).then (value => {
    console.log(value)
})