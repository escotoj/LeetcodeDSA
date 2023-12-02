// You are given two integers, num and t.

// An integer x is called achievable if it can become equal to num after applying the following operation no more than t times:

// Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
// Return the maximum possible achievable number. It can be proven that there exists at least one achievable number.

 

// Example 1:

// Input: num = 4, t = 1
// Output: 6
// Explanation: The maximum achievable number is x = 6; it can become equal to num after performing this operation:
// 1- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5. 
// It can be proven that there is no achievable number larger than 6.

// Example 2:

// Input: num = 3, t = 2
// Output: 7
// Explanation: The maximum achievable number is x = 7; after performing these operations, x will equal num: 
// 1- Decrease x by 1, and increase num by 1. Now, x = 6 and num = 4.
// 2- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5.
// It can be proven that there is no achievable number larger than 7.

// ONE LINER answer through trial and error
var theMaximumAchievableX = function(num, t) {
    return num + 2 * t 
    
};
// Explanation:
// The formula num + 2 * t simply adds twice the value of t to num. This means that for each operation, both num and t are incremented by 1. Therefore, the overall increase in x is 2 * t since each operation contributes twice to the final result.

// Example:
// Let's consider an example with num = 4 and t = 3.

// javascript
// Copy code
// theMaximumAchievableX(4, 3);
// // Result: 4 + 2 * 3 = 10
// Here, we start with num = 4, and for each of the three operations (t = 3), both num and t are incremented by 1. Therefore, the final result is 4 + 2 * 3 = 10.

// How to Come Up with the Answer:
// The provided formula num + 2 * t assumes that each operation contributes twice to the increase in x. This approach works when both num and t are incremented by 1 for each operation.

// If you observe a pattern in the way x increases with each operation and notice that both num and t are incremented by the same value, you might come up with a formula that directly calculates the final result based on the initial num and the number of operations (t).







// achieves the same results by passing the contraints 
// var theMaximumAchievableX = function(num, t) {
//     let x = num + 2*t
//     if (num + t === x-t){
//         return x;
//     }
// };