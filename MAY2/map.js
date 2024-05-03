// JavaScript map() method iterates over an array, applying a callback function to each element,
//  and returns a new array with the results. The map() method does not change the original array,
//  and does not execute the function for empty elements.

// Syntax:

// const newArray = array.map(function(currentValue, index, array) {
    // Your code here
    // Return the new value
//   });
    //    or
//   const newArray = array.map((currentValue, index, array) => {
    // Your code here
    // Return the new value
//   });

// Example

let arr=[3,2,45,67,6]

let multi=arr.map(function(number){
    
    return number*2
})
  console.log(multi)