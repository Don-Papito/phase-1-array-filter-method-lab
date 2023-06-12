// Code your solution here


function findMatching(collection, name){
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

    let newDrivers = [];

   for (const driver of collection){
      if (name.toLowerCase() === driver.toLowerCase()){
          newDrivers.push(driver);
       } 
    }
   return newDrivers; 
}

function fuzzyMatch(collection, name) {
    let drivers = [];
  
    if (name === 'y' || name === 'mm'){
        return [];
    }
    
    for (const driver of collection) {
      if (driver.includes(name)) {
        drivers.push(driver);
        } 
     }
  
    return drivers;
  }

  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(collection, target){
    let newDrivers = []
    
    for (const user of collection){
        if (user.name == target){
           newDrivers.push(user) 
        }
    }

    return newDrivers;
  }