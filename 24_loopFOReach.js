
// VERY IMP FILE READ CAREFULLY

/*
    higher order function hota hai for each loop 
    inside forEach () --> need to write callbackfunction --> function w/o name 

    does not return value --> currently use it it for console.log
    for this filter used 
*/
const coding=["cpp","dart","js","ruby"];
coding.forEach( function(item){
    console.log(item);
})

// can also use arrow function 
coding.forEach( (item2)=> {console.log(`array value is ${item2}`);})

// can use existing function as well

function myFunc (item3){
    console.log(`through function ${item3}`);
}

coding.forEach(myFunc)  // just pass ref of function --> means no parenthesis ()



// using more parameters

coding.forEach(   (item4,index,arr)=>{    // order of parameter passed matters i) value in array ii) index      iii) full array 
    console.log(item4);
    console.log(index);
    console.log(arr);
    
})