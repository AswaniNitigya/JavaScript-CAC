/*
    jo return waala kaam for each loop nhi kr sakta voh ye kr sakta hai
*/
const arr = [5,10,15,20,25];

let result=arr.filter(  (item)=>{return item>15})  // Tip: no need to write return when not using {} --> see arrow function file ---code---> let result=arr.filter(  (item)=> item>15)
console.log(result);


// task given mai se divisible by 2 ka seperate array bna do using filter
const quesarr=[1,2,3,4,5,6,7,8,9];

// tarika number 1 --> array ke andar aagya need to use spread atlast --> khud ka tarika 
const resultarr=[];
resultarr.push(quesarr.filter((item)=>{
    if(item%2==0){return item};
}))
console.log(resultarr);

//tarika 1a  --> the right way to do with filter 

const resultarr1a = quesarr.filter((item)=>{
    if(item%2==0){return item}
})
console.log(resultarr1a);

// tarika number 2  --> better and here forEach used in above used concept of filter
const resultarr2=[];
quesarr.forEach((item)=>{
    if(item%2==0){ resultarr2.push(item)}
})
console.log(resultarr2);




