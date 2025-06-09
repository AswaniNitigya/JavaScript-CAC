/*

-> if else statement
-> switch statement 
-> truthy value and falsy value --> not exact true false but derived logic type

false -> false
0 -> false
-0 -> false
empty string -> false 
0n (bigint ka zero) -> false
NaN -> false
null -> false
undefined -> false


string ke andar zero --> "0" --> true
string ke andar kuch bhi -->true
empty array or object -> true
empty function --> true


To check array is empty or not we use .length property Inside if statement

to check whether object is empty or not first, it is converted to array inside statement Then again.Length property use

if (Object.keys(ourobject).length===0) {console.log("your statement")}



 */


//truthy and falsy example
const email = "abc@xyz.com";
if(email){console.log("succesful login");}
else {console.log("enter email");}

const email2 = "";
if(email2){console.log("succesful login");}
else {console.log("enter email");}