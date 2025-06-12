const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,)
console.log(sumWithInitial);

/*
    in what happened is this --> we calculated sum of array using reduce method 

    accumulator at first time stores the initial value provided then stores the sum 0 -> 1 -> 3 -> 6 -> 10
*/


const mynum=[1,2,3]
const mytotal = mynum.reduce( function (acc,item){
    console.log(`acc: ${acc} current value ${item}`);
    return acc+item
},0)
console.log(mytotal);


// inform of arrow function
const meranum=[1,2,3,4,5,6];
const meratotal=meranum.reduce((acc,val)=>{return acc+val},0)
console.log(meratotal);
