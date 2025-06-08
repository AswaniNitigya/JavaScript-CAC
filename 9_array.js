// in javascript array can be resizable and contain mix of datatypes
// when copy build shallow copy is made --> same ref point 
const myarr=[0,2,4,5,6,7,];
const myarr2= new Array(1,2,3,4,5);
console.log(myarr);
console.log(myarr2);

// by both can access prototype menu in console 

myarr2.push(6)
console.log(myarr2);
myarr2.pop();
console.log(myarr2);
myarr2.unshift(0); // time consuming operation as need to shift all the value ---> use when very important --> optimize later with descending list
console.log(myarr2);
myarr2.shift();
console.log(myarr2);

console.log(myarr2.includes(3)); 


const newarr= myarr2.join()
console.log(myarr2); // return as array
console.log(newarr);// return in string format as join used while creating newarr
 

//splice vs slice
/*
slice() — Non-destructive, creates a shallow copy
splice() — Destructive, modifies the original array

*/

console.log(`\n             ********           \n`);
const parent=[1,2,3,4,5,6];
console.log(`Parent: ${parent}`);


const child2 = parent.slice(2,3);
const child1 = parent.splice(2,3);
console.log(child1);
console.log(child2);



