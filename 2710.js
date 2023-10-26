// 2710. Remove Trailing Zeros From a String
// Easy
// 252
// 8
// Companies
// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

 

// Example 1:

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
// Example 2:

// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".

// LEETCODE SOLUTION 
var removeTrailingZeros = function (num) {
    let result = ""; // Initialize an empty result string

    // Start iterating through the string from right to left
    for (let i = num.length - 1; i >= 0; i--) {
        // Check if the current character is not '0' or if the result string is not empty
        if (num[i] !== "0" || result.length > 0) {
            // If the condition is met, add the current character to the result string
            result = num[i] + result;
        }
    }
    return result; // Return the result string with trailing zeros removed
};



//   GPT
//   var removeTrailingZeros = function(num) {
//     let i = num.length - 1;
    
//     while (i >= 0 && num[i] === '0') {
//         i--;
//     }

//     return num.slice(0, i + 1);
// };
// We start by initializing the variable i to the index of the last character in the string, which is num.length - 1.

// We enter a while loop that runs as long as i is greater than or equal to 0 (to avoid going out of bounds) and the character at index i is '0'.

// Inside the loop, we decrement i by 1. This effectively removes trailing zeros one at a time from right to left.

// Once the loop finishes, we return a substring of num that includes all characters from index 0 to i (inclusive), effectively removing the trailing zeros.

// This function will remove all trailing zeros from the string and return the result as a new string.