/*
    simple for loop -> YKIK
    while do while --> all done YKIK


    todo --> advance for loop
    for of  --> used for map and array           not for object 
    for in  --> can be used for object , array      not for map as not iteratable
    for each --> array 

*/
const names = ["abc","xyz","mno"];
// i) for of 
/*
    for (const element of object) {
    
} ---> here element is like index i used in normal for loop and object is on which we are applying loop
*/
for (const indexname of names) {
   // console.log(indexname);
}

const myname = "nitigya";
for (const char of myname) {
   // console.log(` Each char is :  ${char}`);
}
