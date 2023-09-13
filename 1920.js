// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

 

// Example 1:

const nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

// FIRST ATTEMPT 09/12
// var buildArray = function(nums) {
//     let ans = []
//     let length = nums.length - 1;
//     for(let i = 0; i < length; i++) {
//         ans = nums[i]
        
//     }
//     return ans

// };

var buildArray = function(nums) {
    const result = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
      result[i] = nums[nums[i]];
    }
    return result;
  };

  console.log(buildArray(nums))

// works without the need for passing nums.lenght

//   This question asks you to create a new array `ans` based on a given zero-based permutation array `nums`. The relationship between the elements of `ans` and `nums` is defined as follows: `ans[i]` should be equal to `nums[nums[i]]` for every valid index `i` within the range `[0, nums.length - 1]`.

// Here's a step-by-step explanation of the problem:

// 1. You are given an input array `nums`, which is a zero-based permutation. This means that `nums` contains distinct integers ranging from 0 to `nums.length - 1`, inclusive. In other words, `nums` is a permutation of the numbers from 0 to `nums.length - 1`.

// 2. Your task is to create a new array `ans` of the same length as `nums`, where each element `ans[i]` is determined based on the value at `nums[i]`.

// 3. To compute `ans[i]`, you should look at the value at the index `nums[i]` in the `nums` array. This value is also within the range `[0, nums.length - 1]` since `nums` is a zero-based permutation.

// 4. The value at `nums[i]` in the `nums` array should be used as an index to access another element in the `nums` array. This accessed element will be the value assigned to `ans[i]`.

// In simpler terms, you are essentially mapping each index `i` in the `ans` array to another index `nums[i]` within the `nums` array. The value at that index in the `nums` array becomes the value at index `i` in the `ans` array. This mapping creates a new array `ans` with elements rearranged according to the specified relationship.

// Here's an example:

// Suppose `nums` is `[2, 0, 1]`. To build the `ans` array:

// - For `ans[0]`, you look at `nums[0]`, which is 2. So, `ans[0]` should be `nums[2]`, which is 1.
// - For `ans[1]`, you look at `nums[1]`, which is 0. So, `ans[1]` should be `nums[0]`, which is 2.
// - For `ans[2]`, you look at `nums[2]`, which is 1. So, `ans[2]` should be `nums[1]`, which is 0.

// The resulting `ans` array is `[1, 2, 0]`, which satisfies the condition `ans[i] = nums[nums[i]]` for all valid indices `i`.