// 238. Product of Array Except Self
// Medium
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
// ======================================================================================================================================
//FIRST ATTEMPT - ENGLISH + CODE lacking heavy
// create two varibles, prefix adn suffix to calculate the sum of each
// use two differenct for-loops one using I and the other using N
// use if statements to return a += symbol
const nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

// var productExceptSelf = function (nums) {
//   const prefix = n;
//   for (let n = 0; n < nums.length; n++) {
//     prefix += nums[n];
//   }
//   const suffix = i;
//   for (let i = 0; i < suffix.length; i++) {
//     const element = suffix[i];
//     suffix += nums[n];
//   }

//   const answer = prefix + suffix;
//   return answer[i];
// };

// to start we create three variables, one that captures the length of the array. another named answers which is set to store our answers in an empty array.and lastly we create the prefix varible which will begin at the integer 1.

// we start a for-loop taht will sort through the varibel n, which hold the length of the array
// once inside the forloop we call our empty array and have it equal to the prefix. to later have prefix mulpitply by the current valie. 

// const productExceptSelf = function(nums) {
//     let n = nums.length;
//     let answers = []
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         answers[i] = prefix;
//         prefix *= nums[i];
        
//     }
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         answers[i] *= suffix;
//         suffix *= nums[i];
        
//     }
//     return answers
// }

// console.log(productExceptSelf(nums));

function productExceptSelf(nums) {
let answer = []
let prefix = 1
for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i]
}

let suffix = 1
for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i]
}
return answer;
}

console.log(productExceptSelf(nums));

//big take away is using the product * symbol, using for-loop to sort left to right and right to left. 
// by having prefix and sufox equal to 1 we explude the current elemt i, so its crucial to do so. 