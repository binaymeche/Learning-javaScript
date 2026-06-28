// promise and setTimeout

// I want to resolve / reject promise after 2 seconds

function myPromise () {
    return new Promise((resolve, reject) => {
        const value = false;
        setTimeout(() => {
            if(value) {
                resolve("The value is given");
            } else {
                reject("The value is not given");
            }
        }, 2000)
    })
}

// calling the function 
myPromise().then ((given) => {
    console.log(given);
}) .catch ((error) => {
    console.log(error);
})