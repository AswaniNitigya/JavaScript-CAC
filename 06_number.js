//as explicity defined string in prev file can do with number as well
const score1=400;
const score2 = new Number(400); 
console.log(score1);
console.log(score2);  // can through this we get multiple prototype
console.log(score2.toString());
console.log(typeof(score2.toString()));

const score3=199.285439;
console.log(score3);
console.log(score3.toFixed(2)); //adjust precision value --> round off     returns string
console.log(score3.toPrecision(5));
console.log(score3.toPrecision(2));  // this means we want only 2 precise value which we got 2.0 and reset in exponential

//fixed focus on after decimal
//precision focus on overall value together



const income = 10000000;
console.log(income);
console.log(income.toLocaleString());       // global standard representation
console.log(income.toLocaleString('en-IN')); //indian standard representation 

