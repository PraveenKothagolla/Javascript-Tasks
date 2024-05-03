// The forEach loop is a method in JavaScript that allows you to iterate over an array.
// And also perform an operation on each element of the array.
// Example

let arr=[1,2,3,4,5]
// Here we are passing arrow function as a parameter to forEach method.
arr.forEach((n)=>{  
    console.log(n);
})
// we can also  pass three arguments to function inside foreach  method.
// 1st argument will return value,2nd argument will return index ,3rd argument will return original array
//Example

arr.forEach((value,index,array)=>{
    console.log(value,index,array)
})
//If we have to pass only one argument, there is a simple way, we dont need to put the argument in brackets
arr.forEach(n1=>{
    console.log(n1)
})
