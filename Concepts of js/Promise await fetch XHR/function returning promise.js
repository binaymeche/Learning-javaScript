// function returning promise



function ricePromise() {
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve({value: "Fried rice", requst: "Fulfilled"});
        } else {
            reject({value: "Fried rice", requst: "Reject"})
        }
    })
}

ricePromise().then((solved) => {
    console.log(solved);
}).catch ((reject) => {
    console.log(reject)
})