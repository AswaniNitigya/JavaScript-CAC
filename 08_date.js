let mydate = new Date();
console.log(typeof(mydate));
console.log(mydate); //Sun Jun 08 2025 19:25:59 GMT+0530 (India Standard Time) in console
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());

console.log(`\n        **********        \n`);    

let ourDate = new Date(2025,11,25); //middle is month  and month count with 0 , day from 1
console.log(ourDate.toLocaleString());

let ourDate2 = new Date("11-25-2025") // when did with string counted with 1 
console.log(ourDate2.toLocaleString());

/*
in javascript Date is object that encapculate integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC 
*/
console.log(Date.now()); // milisecond value
console.log(ourDate.getTime()); // convert normal date to milisecond

console.log(Date.now()/1000); // convert in to second
console.log(Math.floor(Date.now()/1000)); // proper second value w/o decimal

//advance real world things

const userDate= new Date();
console.log(userDate.toLocaleString('default',{
    day:"2-digit",
    weekday:"long",
    year:"numeric",
    month:"long"
    
}));

