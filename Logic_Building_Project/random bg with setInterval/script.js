const body = document.querySelector("body");
const btn = document.querySelector("button");

let id;

function startColorChange () {
    id = setInterval(() => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
},1000);
}

startColorChange();

// stopping the interval
btn.addEventListener("click", (e) => {
    if(e.target.textContent === "Stop") {
        clearInterval(id);
        e.target.textContent = "Start";
    }else{
        startColorChange()
        e.target.textContent = "Stop";
    }
})