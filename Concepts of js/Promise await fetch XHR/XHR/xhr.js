
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr)


// step1
xhr.open("GET", URL);

// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState)
//     if(xhr.readyState === 4) {
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof response) // JSON
//         console.log(typeof data) // Object
//     }
// }


xhr.onload = function () {
    console.log(xhr.readyState);
    const response = xhr.response;
    console.log(response, typeof response);
    const obj = JSON.parse(response);
    console.log(obj, typeof obj)
}

xhr.send();