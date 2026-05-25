const storeInventory =[
  {id: 101, name: "Laptop", price: 80000, stock: 5, category: "Electronics"},
  {id: 102, name: "Mouse", price: 1500, stock: 0, category: "Electronics"},
  {id: 103, name: "Notebook", price: 200, stock: 50, category: "Stationery"},
  {id: 104, name: "Keyboard", price: 3500, stock: 8, category: "Electronics"},
  {id: 105, name: "Gel Pen", price: 50, stock: 120, category: "Stationery"},
];


// Feature 1 : The out of stock Alert System
for(let {name,stock} of storeInventory){
  if(stock === 0){
    // console.log(`${name} is completely out of Stock!`)
  }else{
    // console.log(name,stock)
  }
}


// Feature 2 : Applying discount on sepefic category
let discountInventory = [];
for(let key of storeInventory){
  let copy = {...key};

  if(copy.category === "Stationery"){
    copy.price = copy.price * 0.9;
  }
  discountInventory.push(copy);
}
// console.log(discountInventory);


// Feature 3 : Generating a Customer Invoice
const purchase = {
  customerName: "Binay",
  location: "Kathmandu",
  itemId: 101,
  itemName: "Laptop",
  price: 80000
};
const {customerName:nam,itemName:itemKoNam, price:poisa, ...ShippingDetails} = purchase;
// console.log(`${nam} bought a ${itemKoNam} for Rs. ${poisa}`);
// console.log(ShippingDetails);
