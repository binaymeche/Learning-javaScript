// clone using Object.assign

const obj = {
  key1: "value1",
  key2: "value2",
}

// const obj1 = {...obj};  // use of spread operator new method(ES6)
const obj1 = Object.assign({}, obj)  // old method
obj1.key1 = "value-1"; // changing the value
obj.key3 = "value3";
console.log(obj)
console.log(obj1)