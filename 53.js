// 53. Maximum Subarray
// Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
// first attempt we trieeed to compare the arrays rather than the sum
// start with an array 
// begin a variable that is an empty array to store the subarray
// start a varaible that is the sum set equal to zero
// begin a for loop that will sort throough each variable
// create a subOne and subTwo loop with conditoonal statements. 

// VERY WRONG
// var maxSubArray = function(nums) {
//     let sum = 0
//     let subOne = []
//     for (let i = 0; i < nums.length; i++) {
//         subOne.push(nums[i]);
//     }
//     let subTwo = []
//     for (let i = nums.length - 1; i >= nums.length; i--) {
//         subTwo.push(nums[i]);
//     }
//     if(subOne < subTwo) {
//         return subTwo
//     } else {
//         return subOne
//     }
    
// };

// CORRECT 

var maxSubArray = function(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element of the array
    let currentSum = nums[0]; // Initialize currentSum with the first element

    for (let i = 1; i < nums.length; i++) {
        // Calculate the current sum by either starting a new subarray or continuing the current one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
