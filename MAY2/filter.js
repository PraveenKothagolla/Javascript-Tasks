// The filter method in JavaScript is designed as a higher-order function that iterates over each element
//  of an array  allowing developers to apply a specific condition to filter out elements.
// The filter method returns array of elements.
// It is useful when you want to extract elements from an array based on some conditions.
// Example:-

let arr=[75,44,35,46,67,23]
let evenarr=arr.filter(n=>n%2==0);
console.log(evenarr);
// Filter method doesnt change the original array.
// It will return new array.

//We can also pass three arguments in filter first one for element ,second for index,3rd one for array 
const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter((element, index, array) => {
    console.log(`Processing element ${element} at index ${index}`);
    console.log("Original array:", array);
    return element > 25;
});

console.log("Filtered array:", filteredNumbers);



