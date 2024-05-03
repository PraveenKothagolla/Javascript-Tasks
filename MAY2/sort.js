// The sort() method in JavaScript arranges the elements of an array in place
//  and returns the sorted array.
// example
const numbers = [5, 2, 8, 1, 9];
numbers.sort();
console.log(numbers); // Output: [1, 2, 5, 8, 9] here it will work but for large it wont work so we
// to write a condition.
let numbers1=[100,600,34,76,765]
numbers1.sort((a,b)=>a-b) //It is for ascending order.
console.log(numbers1)
numbers1.sort((a,b)=>b-a)//It is for descending order.
console.log(numbers1);


