//modern way to inject varriable 
const name ="nitigya"
console.log("your message " + name ); //old way
console.log(`your message ${name}`); //new way 

//behind the scene of using string --> we use object 
const surname=new String("aswani")   // string ka object usske andar usske constructor mai value pass kri
console.log(surname);
//run above in browser console ---> will se prototype can access with dot operator
console.log(surname.length);
console.log(surname.toLowerCase());
console.log(surname.toUpperCase());
console.log(surname.charAt(2));
console.log(surname.indexOf("w"));
console.log(surname.substring(2,4));  // works like [) in maths relation function brackets first included and second last included




//substring vs slice 

let str = "HelloWorld";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.slice(0, 5));     // "Hello"

console.log(str.substring(-3, 5)); // "Hello" (treats -3 as 0)
console.log(str.slice(-3, 10));    // "rld" (from 3rd last character)

console.log(str.substring(7, 2)); // "lloWo" (swaps to substring(2,7))
console.log(str.slice(7, 2));     // "" (empty string, no swap)

//think as Substring --> want everything perfect isliye  swap and treat negative 
    // slice --> raw and real intelligent 


//trim
const inputStr="      nitigya";
console.log(inputStr); // space printed also
console.log(inputStr.trim()); // treated the initial unwanted spaces also treat spaces at end 

//replace
const url="nitigya%20aswani"
console.log(url);
console.log(url.replace('%20'," "));



