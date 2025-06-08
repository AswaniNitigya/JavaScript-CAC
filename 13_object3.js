/*

->destructuring --> unpack values from objects into individual variables

*/

const animal= {
    name:"cat",
    fullname:"cutiecat"
}


console.log(animal.name);
// instead writing animal. multiple time can do this

const {name} = animal;  
console.log(name);

const{fullname:naaaam} =animal; // can also define new name 
console.log(naaaam);