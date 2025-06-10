/*
    can be used for object
*/

const myObject={
    cpp: "c++",
    dart: "flutter",
    java: "java",
    rb: "ruby",
}

for (const key in myObject) {
   console.log(key);
}

// for (const [key,value] in object) {
//     console.log(`${key} = ${value}`);
// }                                        here also for of jaisa kaam can't do

for (const key in myObject) {
   console.log(`${key} = ${myObject[key]}`);
}




// for array can also be used
const arr=[5,10,15,20];
for (const key in arr) {
   console.log(key);  // printing the index only
   console.log(arr[key]); // will print the value of index
}

// for map 
const myMap = new Map();
myMap.set('1','a')
myMap.set('2','b')
myMap.set('3','c')

// for (const key in myMap) {
//    console.log(key);            // map is not iteratable therefore not possible
// }