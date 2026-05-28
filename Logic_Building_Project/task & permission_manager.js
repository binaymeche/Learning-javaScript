// Layer 1: The Specialized Permission Gatekeeper

const createPermissionGuard = (requiredRole) => {return ({role = "guest"}) => {
    if(role === requiredRole) {
      return true
    }
    return false
  }
}



// Layer 2: The task Processor

const processTask = (taskWorker,...tasks) => {
  for(let task of tasks) {
    taskWorker(task);
  }
}
const printTask = (task) => console.log(`Processing: ${task}`);



// Global 
const user1 = {name: "Binay", role: "admin"};
const user2 = {name: "Anil", role: "user"};
const user3 = {name: "Buddhi"}



// Layer 3: Manage System

const manageSystem = (user, requiredRole, ...allTasks) => {
  const guard = createPermissionGuard(requiredRole);
  
  const hasAccess = guard(user) // will give either True or False

  if(hasAccess){
    processTask(printTask, ...allTasks)
  } else{
    console.log("Access Denied! You do not have permission");
  }
}


//test1: 
// manageSystem(user1, "admin", "Code in React", "Deploy app");

//test2:
// manageSystem(user2, "admin", "Delete Database")

//test3:;
manageSystem(user3, "guest", "Singing", "Roaming", "Playing games")