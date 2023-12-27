// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


// SOLUTION using sort and a standard forloop
var sortedSquares = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i] * nums[i])

    }
    return arr.sort((a, b) => a - b)
};

// USING A FOR EACH LOOP with better run time
var sortedSquares = function (nums) {
    let arr = []
    nums.forEach((val) => arr.push(val * val))
    return arr.sort((a, b) => a - b)
};