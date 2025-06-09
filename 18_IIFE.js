// Immediately invoked fucntion expressions

 
/*
to execute function immediatly and avoid pollution from global scope varriable --> as we can access varriable of global inside any function

syntax --> (*functionDefi*)(*forexecution*)


*/

//example
//named IIFE
(function any (){
    console.log("IIFE");
}) () ;

// sometimes if two time IIFE used remember to put ; at end otherwise may face error

//UN-named IIFE
(()=>console.log("used again"))();

// how to write to remember
/*

first write function normally --> 
()=>console.log("iife")

wrap this in ()
(()=>console.log("iife"))

at end add () --> to tell run it immediately and at last ;
(()=>console.log("iife")) ();

*/