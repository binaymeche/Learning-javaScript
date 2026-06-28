const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);



xhr.onload = function () {
    if(xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response
        const obj = JSON.parse(response)
        // console.log(typeof response);
        // console.log(typeof obj)

        const id = obj[3].id
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        console.log(URL2)
        xhr2.open("GET", URL2)
        xhr2.onload = () => {
            const response2 = xhr2.response;
            const obj2 = JSON.parse(response2)
            console.log(obj2)
        }
        xhr2.send()

    } else {
        console.log("Something went Wrong")
    }
}

xhr.onerror = () => {
    console.log("Network Time out!!!")
}

xhr.send()