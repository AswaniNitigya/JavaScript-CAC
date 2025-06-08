const arr1=[1,2,3];
const arr2=[4,5,6];

//ways to join arr--> i) concat ii) spread 
//i) concat --> return a new joined arr
const joinedarr=arr1.concat(arr2);
console.log(joinedarr);

//ii) spread --> like shattering of glass --> spread operator ...
const joinedarr2= [...arr1,...arr2];
console.log(joinedarr2);


// more advance spread
const advancearr=[1,2,[4,5,6,[3,4,[65,23],12],21],32,12]  // multiple arr inside arr --> very complex
//to get all value in one simple 1D array 
const simplearr=advancearr.flat(2);  // this represent depth to solve array 

console.log(simplearr);
console.log(advancearr.flat(Infinity)); // can do depth infinity as well


console.log(`\n             **** ways to create array ****            \n`);

console.log(Array.from("niti"));
let a=5;
let b=3;
console.log(Array.of(a,b)); 