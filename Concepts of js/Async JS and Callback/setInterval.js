// setInterval
// It performs the block of code again and again to infinite amount of time with a given time condition
// for eg: Write "Hello" after every 2 seconds 


console.log("Script Start");
setInterval(() => {
    console.log(Math.floor(Math.random() * 200) + 1);
}, 1000);
console.log("Script End");

// Note: it doesn't stop so be catious while implementing
