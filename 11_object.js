/* to most imp things object and events here talk about object

litrals method se --> non singleton object form
constructor se --> singleton object form --> 
to create Singleton --> i) Object.create ii) const animal = new Object()

*/

// ******* litral method ********
const animal = {} //empty object

const user={
    name:"nitigya", //key and value pair
    course:"btech",
    "full name": "nitigya aswani" 
}
// to access value of object
console.log(user.name); 
console.log(user["name"]); // to access multi word key 
console.log(user["full name"]); 




