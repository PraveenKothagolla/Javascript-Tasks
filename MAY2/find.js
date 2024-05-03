// JavaScript find() method is used to retrieve the first element in an array that satisfies a specified
//  condition.

// Array find() method executes a provided function once for each element in the array 
// until it finds one where the function returns a truthy value. 
// The find() method does not change the original array.
// Example
let arr=[20,3,50,5,6,37]
let result=arr.find(n=>n%2==0)
console.log(result)

