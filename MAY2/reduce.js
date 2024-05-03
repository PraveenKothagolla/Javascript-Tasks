// The Javascript reduce() method in JavaScript is used to reduce the array to a single value. 
//  Executes a provided function for each value of the array .
// Example:-
let arr=[10,20,30,40,50]
let sum=arr.reduce((acc,v)=>{
    console.log(`For ever iteration n value ${acc}, v value${v}`)
    return acc+v;

},10)
// If we pass element from here it will take it as first element;
// The first arguement we can call it as accumulator because it store the return value in it.
console.log(sum);