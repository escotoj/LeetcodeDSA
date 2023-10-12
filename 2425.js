// 2427. Number of Common Factors
// Easy
// 486
// 7
// Companies
// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

 

// Example 1:

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
// Example 2:

// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.

// Infinity does not work as it makes the runtime to long
// manually adding every number or hardcoding would take too long so must use forloop to do it for you
var commonFactors = function(a, b) {
    let factors = 0
    let nums = 1000
    for(let i = 0; i <= nums; i++) {
        if(a % i === 0 && b % i === 0) {
            factors++
        }
    }
    return factors

};