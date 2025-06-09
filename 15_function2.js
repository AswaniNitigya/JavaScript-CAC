/*
    design function when malum nhi kitne argument exist
    concept used REST operator ---> symbol used is same as spread operator ... 

*/

function work1 (num1){
    return num1;
}
console.log(work1(5));

function work2 (...num2){
    return num2;
}
console.log(work2(5,10,15)); // we get return in array form 


//ways to use function 

// i) ---> through this hoisting supported 

function addone (value){
    return value + 1;
}
console.log(addone(6));

// ii)   ----> through this no hoisting supported --> function defi se phele can't use function
const addtwo = function (value) {
    return value +2;
}
console.log(addtwo(6));



