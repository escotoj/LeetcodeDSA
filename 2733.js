// 2733. Neither Minimum nor Maximum
// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
// Return the selected integer.

// Example 1:
// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.

// Example 2:
// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.

// Example 3:
// Input: nums = [2,1,3]
// Output: 2
// Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer. 

var findNonMinOrMax = function (nums) {
    nums.sort((a, b) => a - b)
    // sort in ascending order 
    let arr = 0
    // create a variable to store the min value
    let s = nums.length;
    let end = s - 1
    // variable to identify the last digit in the array
    for (let i = 0; i < s; i++) {
        if(s <= 2) {
            return -1

    // create a return for the condition where there is no min number
        } else if (nums[i] > nums[0] && nums[i] < nums[end]) {
            arr = Math.min(nums[i], nums[i + 1])
            // use math.min to find the min number of the middle of the array
                
        }
    } 
    return arr
};

