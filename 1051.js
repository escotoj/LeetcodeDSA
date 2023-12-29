// 1051. Height Checker

// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

 

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:
// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:
// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.
 
//SOLUTION using a modifeid loop to include both array and slice to make copy of array rather than edit to current array
var heightChecker = function (heights) {
    let count = 0
    let expected = heights.slice().sort((a, b) => a - b)
    // slice create a copy of the array in order to not alter the original array 
    for (let i = 0; i < heights.length && i < expected.length; i++) {
        if (heights[i] != expected[i]) {
            count++
        }
}
return count
};



// AVOID THE use of nested for loop and and uses the spread operator to make copy 
var heightChecker = function (heights) {
    let count = 0
    let expected = [...heights].sort((a, b) => a - b)
       // spread create a shallow copy of the array  
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++
        }
    }
return count
};

// you can use one loop to iterate through both arrays at once rather than using a nested loop.

// slice is a method that creates a copy of the array being mentioned
// the spread operator does the same thing but its not ideal for larger arrays 

// even though they do the same thing they have pros and cons, slice is bulky and spread is more simple in the amount of typing. Slice is more versatile. 