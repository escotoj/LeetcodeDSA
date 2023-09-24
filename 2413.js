// 2413. Smallest Even Multiple
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 
// Example 1:
// const n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
// Example 2:

const n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself
// first attempt 09/22 passed case 1 only 
// var smallestEvenMultiple = function(n) {

//     return n * 2

//     };


// SOLUTION
var smallestEvenMultiple = function(n) {
    if (n % 2 === 0) {
        return n
    } else {
    return n * 2
    }
        
    };

    console.log(smallestEvenMultiple(n))