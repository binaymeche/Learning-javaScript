// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type' : 'application/json; charset=UTF-8',
    },
})
// .then(response => response.json())
// .then(data => console.log(data))

.then((response) => {
    if(response.ok) {
        return response.json()
    } else {
        throw new Error("Someting went wrong")
    }
})
.then((returnedJson) => {
    console.log(returnedJson)
})
.catch((err) => {
    console.log("Inside catch");
    console.log("Something went wrong")
})


