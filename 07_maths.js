//type Math in console to see
console.log(Math);
//console.log(Maths); --> error
console.log(Math.abs(-19));
//round floor ceil sqrt tan sin cos max min pow log10 dd




console.log(Math.random());// value between 0 and 1 
console.log(Math.random()*10);//value between 0 and 10
console.log((Math.random()*10) +1); //value between 1 and 11


/* General formula to generate random value between a specific range */

const min = 10;
const max = 20;
const value = Math.random() * (max-min +1)+min 
console.log(Math.floor(value));

