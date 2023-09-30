// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

 

// Example 1:

// const nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:

const nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.

//parseInt() is used to turn a string into a number. every solution uses it.
// first try, using parseInt() under 20 minutes 09/30
var differenceOfSum = function(nums) {
    let sum1 = 0
    let sum2arr = []
    let sum2 = 0
    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i]
    }
    // console.log(sum1)

    for (let j = 0; j < nums.length; j++) {
        const element2 = nums[j].toString().split('');
        sum2arr.push(element2)        
    }
    console.log(sum2arr)
    let newArr = sum2arr.join(',').split(',');
    for (let index = 0; index < newArr.length; index++) {
        const element3 = parseInt(newArr[index]);
        // console.log(element3)
        sum2 += element3
        
    }
    console.log(sum1 - sum2)
    return sum1 - sum2 
    
};
differenceOfSum(nums)

// ONE LINE solution using reduce
// var differenceOfSum = function(nums) {
//     const sum1 = nums.reduce((prev, curr) => prev + curr);
//     const sum2 = nums.join('').split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr));
//   return sum1 - sum2;
// };
