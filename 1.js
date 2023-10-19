// TWOSOME leetcode

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15, 12, 2, 12, 3, 4, 7, 12], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

let nums = [2, 7, 11, 15, 11, 15, 12, 2, 12, 3, 4, 7, 12, 20];
let target = 9;

// const twoSum = function (nums, target) {
//     let newNums = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i];
//     if(newNums.has(diff)) {
//         return [newNums.get(diff), i]
//     }
//     newNums.set(nums[i], i)
//     }
//     return []
// }

// console.log(twoSum(nums, target))

// function leetCodeOne(nums, target) {
//     const numberMap = new Map();
// for (let index = 0; index < nums.length; index++) {
//     const difference = target - nums[index];
// if (numberMap.has(difference)) {
//     return [numberMap.get(difference), index]
// }
// numberMap.set(nums[index], index)
// }

// return [];

// }

// let result = leetCodeOne(nums, target)

// console.log('indeces', result)

// 09/06 everything was set up correctly expect the return.
//needs more work
// declare a function and pass the two parameter, nums, and target.
// begin the function byy declaring a changing variable called numMap and have it equal to a new Map in order to keep track of indices.
// we need a for-loop to go through the array and find the compliment to each number.
// we have a varibel insdie the loop that calbulates the differnece between nums[i] and target.
// Inside the loop we create conditional statements that will check if the map has the compliment for each number in the array.
// if the map contains the compliment we will return it as an arra that contains the compliment and the index of that number.
// USING ARROW
// const twoSum = (nums, target) => {
//     let numMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const compliment = target - nums[i];
//         if(numMap.has(compliment)) {
//             return [numMap.get(compliment), i]
//         }
//         numMap.set(nums[i], i)
//     }
//     return []
// }

// console.log(twoSum(nums, target))

// LEETCODE ANSWER w/o MAP

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {

    console.log("first loop", nums[i]);
    
    for (let j = i + 1; j < nums.length; j++) {
      console.log("second loop", nums[j]);
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
