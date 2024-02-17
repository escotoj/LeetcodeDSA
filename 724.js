// 724. Find Pivot Index
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

 

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0
 




// Function to find the pivot index where the sum of numbers on the left is equal to the sum on the right
var pivotIndex = function(nums) {
    // Initialize the sum of numbers on the left of the pivot to 0
    let lsum = 0;
    // Calculate the total sum of all numbers in the array
    let total = nums.reduce((a,b) => a + b);

    // Iterate through each number in the array
    for(let i = 0; i < nums.length; i++) {
        // Calculate the sum of numbers on the right of the pivot
        // by subtracting the left sum and the current number from the total sum
        let rsum = total - lsum - nums[i];
        // Check if the left sum equals the right sum
        if(lsum === rsum) {
            // If they are equal, return the current index as the pivot index
            return i;
        }
        // Add the current number to the left sum before moving to the next index
        lsum += nums[i];
    }
    // If no pivot index is found, return -1
    return -1;
};
