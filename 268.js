// 268. Missing Number
// Easy
// 10.8K
// 3.2K
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 


var missingNumber = function(nums) {
    const n = nums.length;
    
    // Calculate the sum of the first n natural numbers
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the sum of the elements in the array
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
    // The missing number is the difference between the expected and actual sums
    return expectedSum - actualSum;
};


// LEETCODE ANSWER
// var missingNumber = function (nums) {
//     var sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += i + 1 - nums[i];
//     }
  
//     return sum;
//   };