// Traditional
function add(a, b) {
  return a + b;
}

// ES6 mai introduced arrow function --> hoisting not supported  
const add2 = (a, b) => {
    return a + b;  // explicit return 
    }
// more shorter arrow function ---> implicit return --> by default maan lo return ho rha

const add3 =(a,b) => a+b;


function wish () {
    console.log("morning");
}
const wish2 =()=> console.log("morning");

//calling all 4 function
console.log (add(4,6));
console.log (add2(4,6));
console.log (add3(4,6));
wish(); 
wish2();








