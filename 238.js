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

const productExceptSelf = function(nums) {
    let n = nums.length;
    let answers = []
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answers[i] = prefix;
        prefix *= nums[i];
        
    }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answers[i] *= suffix;
        suffix *= nums[i];
        
    }
    return answers
}

console.log(productExceptSelf(nums));


