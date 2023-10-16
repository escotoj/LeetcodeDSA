// 1748. Sum of Unique Elements
// Easy
// 1.4K
// 34
// Companies
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

var sumOfUnique = function (nums) {
    let sum = 0
    let numsMap = {}
    for (let i = 0; i < nums.length; i++) {
        let digit = nums[i]
        numsMap[digit] = (numsMap[digit] || 0) + 1
    }

    for (let i = 0; i < nums.length; i++) {
        let digit = nums[i]
        if (numsMap[digit] === 1) {
            sum += digit;
        }

    }
return sum
};

sumOfUnique(nums)