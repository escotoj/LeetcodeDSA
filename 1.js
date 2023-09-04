// TWOSOME leetcode

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15, 12, 2, 12, 3, 4, 7, 12], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]


let nums = [2, 7, 11, 15, 11, 15, 12, 2, 12, 3, 4, 7, 12, 20];
let target = 24;
function leetCodeOne(nums, target) {
    const numberMap = new Map();
for (let index = 0; index < nums.length; index++) {
    const difference = target - nums[index];
if (numberMap.has(difference)) {
    return [numberMap.get(difference), index]
}
numberMap.set(nums[index], index)   
}

return [];

}

let result = leetCodeOne(nums, target)

console.log('indeces', result)