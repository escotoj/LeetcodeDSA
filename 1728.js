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

// EXPLANATION 

// The sumOfUnique function works by counting the occurrences of each number in the nums array and then summing up the unique elements.

// Here's a step-by-step explanation:

// let sum = 0; initializes a variable sum to store the sum of unique elements, setting it to 0 initially.

// let numCounts = {}; creates an empty object called numCounts to store the counts of each number in the array. The keys of this object will be the numbers, and the values will be their counts.

// The first for loop iterates through the nums array using for (let i = 0; i < nums.length; i++). In this loop:

// const num = nums[i]; extracts the current number from the array.

// numCounts[num] = (numCounts[num] || 0) + 1; increments the count of the current number in the numCounts object. If the number doesn't exist in numCounts, it initializes the count to 0 and then increments it by 1.

// The second for loop iterates through the nums array again. This loop is used to determine unique elements and add their values to the sum. In this loop:

// const num = nums[i]; extracts the current number from the array.

// if (numCounts[num] === 1) checks if the count of the current number in numCounts is equal to 1. If it's equal to 1, it means the number is unique.

// If the number is unique, sum += num; adds the unique number to the sum variable.

// Finally, console.log(sum); prints the sum of unique elements to the console.

sumOfUnique(nums)