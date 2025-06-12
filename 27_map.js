/*
    callback function 
    used to change value of all 

*/
const nums=[1,2,3,4,5,6,7,8,9]
// need to add 10 to all the numbers
const result= nums.map((item)=>item+10)
console.log(result);

//chaining --> using more than one method together like .map .map .filter

const newnum = nums.map((item)=>item*10).map((item)=>item+1)
console.log(newnum);

// this should be written like this below , first top will run then result pass to bottom

const newnum2 = nums
                .map((item)=>item*10)   // first this than top to bottom value flow
                .map((item)=>item+1)
                .filter((item)=>item>31)
                .map((item)=>item-1)
console.log(newnum2);