const body = document.querySelector("body")
const specialBtn = document.querySelector("#special-btn");
const myh3 = document.querySelector(".myh3");


const randomValues = () => {
    const value1 = Math.floor(Math.random() * 255) + 1;
    const value2  = Math.floor(Math.random() * 255) + 1;
    const value3  = Math.floor(Math.random() * 255) + 1;
    body.style.backgroundColor = `rgb(${value1},${value2},${value3})`
    myh3.textContent = `rgb: (${value1}, ${value2}, ${value3})`
}

specialBtn.addEventListener("click", randomValues)