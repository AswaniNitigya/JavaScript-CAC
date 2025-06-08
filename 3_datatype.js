"use strict";//reat all js code as newer version 

//while using node.js can't use alert() as not binded with html ----later more to see on this


//datatypes
/*
string 
number 
boolean
null  --> ek tarah ki value --> standalone value --> representation of emptiness
undefined --> jaab koi value assigned hi naah ho 

symbol -> used more in react  
object
*/

let a="name";
let b="23";
let c=null;
let d=undefined;
let e=true;
let animal={};

console.table([a,b,c,d,e,animal]);

//conversion
let score = "42";
console.log(typeof(score));
let numberScore= Number(score);
console.log(typeof(numberScore)); //converted into number from string 
