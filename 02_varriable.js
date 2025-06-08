//types of varriable used 
const accountID=42;
let firstName="nitigya"
var secondName="aswani"     

middleName="empty";  // not recommeded method to use and by default work as var

// accountID=43; -> gives error as const used 
firstName="aswani"
secondName


//popping way 1
console.log(accountID);
console.log(firstName);
console.log(secondName);
//popping way 2
console.table([accountID,firstName,secondName,middleName]);  // printed all in table form 
