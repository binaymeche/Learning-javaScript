// async and await


const URL = "https://jsonplaceholder.typicode.com/postss";

const getPosts = async () => {    // returns promise 
    const response = await fetch(URL)
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json()
    return data
}

// const returned = getPosts()  // data was returned in promise
// returned.then((ans) => {console.log(ans)})




getPosts()
.then((myData) => console.log(myData))
.catch(err => console.log(err, "Inside the catch"))
