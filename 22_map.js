/*
    The Map object holds key-value pairs and remembers the original insertion order of the keys.
    map object hi hai 
    -> key value pair rakhta
    -> order significant
    -> unique value stores
*/

const meraMap = new Map();

meraMap.set('1','a')
meraMap.set('2','b')
meraMap.set('3','c')

meraMap.set('1','a') // uniqueness show 
console.log(meraMap);

for (const mapelement of meraMap) {
    console.log(mapelement); // array printed of key and value together
}

// to get key value seperated from "for of" loop 
for (const [key,value] of meraMap) {
    console.log(`${key} ki value ${value}`);
}

//similar process of destructuring of array cannnot  be done for object   
const myObject = {
    name: "nitigya",
    islogged: true
}

// for (const Element of myObject) {
//   console.log(Element);               **** error ****
// }