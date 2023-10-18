// SORTIGN BY PARITY

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

const nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]


var sortArrayByParity = function(nums) {
    let odd = nums.filter(s => s % 2 === 0)
    let even = nums.filter(s => s % 2 !== 0)
    return odd.concat(even)
    
};


// Explains the filter function, and how it is uses arrow function for the use of a callback. Can be used to perform a specific function for each element of an array, with filter it returns true, but for others like map, or
// The filter function in JavaScript is similar in concept and usage to several other built-in array methods, such as map, reduce, and forEach, in that it involves iterating over elements in an array and applying a function to them. However, the key distinction is that filter is specifically used to create a new array containing elements that meet a certain condition, while the others are used for different purposes:

// map: The map function creates a new array by applying a provided function to each element in an existing array. It transforms each element into something else and returns a new array of the transformed elements.
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// reduce: The reduce function is used to reduce an array to a single value by applying a function that accumulates values and returns a final result.
// javascript
// Copy code
const numbers = [5, 5, 5, 5, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
// forEach: The forEach function iterates through each element of an array and executes a provided function for each element. It doesn't create a new array or modify the original array, making it different from filter.
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => console.log(number));
// // Output: 1, 2, 3, 4, 5 (Note: It doesn't return a new array)
// In summary, while filter, map, reduce, and forEach all involve iterating over arrays and using functions to process elements, they serve different purposes. filter is specifically for creating a new array containing elements that meet a certain condition, while the others are used for mapping, reducing, and looping over elements in various ways.