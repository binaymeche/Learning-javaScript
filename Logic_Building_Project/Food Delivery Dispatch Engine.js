//1 
// Driver class
class Driver {
  constructor (name, vehicle) {
    this.name =  name;
    this.vehicle = vehicle;
    this._status = "available"; // can be available or busy
    this._tripsCompleted = 0;
  }

  // getters
  get status () {
    return this._status;
  }
  get tripsCompleted () {
    return this._tripsCompleted;
  }

  // setters
  set status (status) {
    if(["available", "busy"].includes(status)) {
      this._status = status;
    }
    else{
      console.log("invalid");
    }
  }
}

// const rider1 = new Driver () ;
// rider1.status = "gh";
// console.log(rider1)



//2
// DispatchSystem
class DispatchSystem {
  constructor () {
    this._drivers = [];
  }

  // method to push a new driver
  registerDriver(driverInstance) {
    this._drivers.push(driverInstance);
  }

  // method to process order
  processOrder(orderString) {
    const [itemName, location] = orderString.split(" -> ");
    
    // loop through drivers array one by one
    for(const driver of this._drivers){
      if(driver.status === "available") {
        driver.status = "busy";
        driver._tripsCompleted++;

        console.log(`Order for ${itemName} dispatched to ${driver.name} heading to ${location}!`);
        return;
      }
    }

      console.log("dispatch failed: All riders are currently busy!");
  }
}


const hub = new DispatchSystem() ;

const rider1 = new Driver ("Max", "Bike");
const rider2 = new Driver ("Sebastian", "Scooty");

hub.registerDriver(rider1);
hub.registerDriver(rider2);

console.log("--- Order 1 ---");
hub.processOrder("Momo Combo -> Chabahil"); 
// Max is available! Max becomes busy.

console.log("\n--- Order 2 ---");
hub.processOrder("Pizza -> Koteshwor"); 
// Max is busy, but Sebastian is available! Sebastian becomes busy.

console.log("\n--- Order 3 ---");
hub.processOrder("Burgers -> Jhapa"); 
// Both are busy! Displays failure message.

console.log("\n--- Max finishes trip ---");
rider1.status = "available"; // Resetting Max back to available via setter

console.log("\n--- Order 4 ---");
hub.processOrder("Chowmein -> Lalitpur"); 
// Max is available again and takes the order!