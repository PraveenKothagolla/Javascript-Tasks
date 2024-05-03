// JavaScript arr.some() method checks whether at least one of the elements of the array satisfies
//  the condition checked by the argument method.
// If condition is satisfied it will return true;
//  The some() method does not change the original array.
// Example
let arr=[10,20,30,40,50]
let result=arr.some(n=>{
    return n>10
})
//  or you can write it in more simplified way.
let result2=arr.some(n=>n<10)
console.log(result);
console.log(result2);