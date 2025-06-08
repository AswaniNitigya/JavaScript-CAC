/*

-> can create object inside object
-> concat of object

*/


const obj1 = { 1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d",5:"e"}

const obj3 = {obj1,obj2} // galat result
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2) // here {} is target and rest following are the source to copy data
console.log(obj4);
//another best way
const obj5 = {...obj1, ...obj2} // spread operator
console.log(obj5);