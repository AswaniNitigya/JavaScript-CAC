console.log(document.querySelector('h1') ); // selects the first finder i.e first heading 
console.log(document.querySelectorAll('h1') ); // gives all the h1 in --> node list

console.log(document.querySelector('#myid') ); 
console.log(document.querySelector('.myclass') );
// query selector works totally like css selector can play everything with it 


/*
    playing with querySelector All !

    nodelist and HTML collection are not the pure arrays
    but seems like array like selection of element with number inside []

*/
const mynode=document.querySelectorAll('.mylist li')
console.log(mynode);
mynode[1].style.backgroundColor = "skyblue";  // selecting like an array and numbering from 0th element therefore here selected 2nd 


//using foreach as for node list map is not present  
// if want to use map need to convert first to array

function useforeach(){

    mynode.forEach((item)=>{
        item.style.backgroundColor="orange"
    })

}



// playing with html collection 
const myhtml=document.getElementsByClassName("list-item")
console.log(myhtml);
// no option to loop around here --> therefore convert to array
const myarr=Array.from(myhtml)
console.log(myarr); // now can apply map or foreach

function usearr(){
    myarr.forEach((item)=>{
    item.style.backgroundColor="lightgreen"
    item.style.color="black"
    })
}







