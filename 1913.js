// 1913. Maximum Product Difference Between Two Pairs

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

// Example 1:
// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.

// Example 2:
// Input: nums = [4,2,5,9,7,4,8]
// Output: 64
// Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
// The product difference is (9 * 8) - (2 * 4) = 64.

// SOLUTION not very time or space eff. 
var maxProductDifference = function(nums) {
    let s1 = nums.sort((a,b) => b - a)
    console.log(s1)
    // sort in ascending order and pick the first two numbers as they will return the largest product 
    let n = s1[0] * s1[1]
    let s2 = nums.sort((a,b) => a - b)
    let m = s2[0] * s2[1]
     // sort in descending order and pick the first two numbers as they will return the smallest product 

    // returns the maximum difference 
    return n - m
    
};

// VARIATION OF LAST SOLUTION 
// var maxProductDifference = function(nums) {
//     nums.sort((a, b) => a - b);
//     const n = nums.length;
//     console.log(nums)
//     console.log(nums[n - 1])

//     return nums[n - 2] * nums[n - 1] - nums[0] * nums[1];
    
// };


function maxProductDifference(nums) {
    // Sort the array in non-decreasing order
    nums.sort((a, b) => a - b);
    // The first pair is the last two numbers (largest)
    const firstPairProduct = nums[nums.length - 1] * nums[nums.length - 2];
    // The second pair is the first two numbers (smallest)
    const secondPairProduct = nums[0] * nums[1];
    // The maximum product difference
    return firstPairProduct - secondPairProduct;
}

// Test the function with the provided examples
const example1 = [5,6,2,7,4];
const example2 = [4,2,5,9,7,4,8];