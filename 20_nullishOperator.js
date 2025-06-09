/*
----> NULLISH COALESCING OPERATOR (??) --> to see null and undefined
*/


let val1;
val1= 5 ?? 10 
val2= null ?? 10 
console.log(val1);
console.log(val2);

// used to avoid falling of program in case null outputed 
// fallback 

val3 = undefined ?? 10;
console.log(val3);


/*
    don't confuse with ternary operator i.e 
    condition ? true: false
*/

