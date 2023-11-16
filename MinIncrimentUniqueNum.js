// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
    let count = 0
    console.log(nums)
    nums.sort((a, b) => a - b)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            count += nums[i - 1] - nums[i] + 1;
            nums[i] = nums[i - 1] + 1
            
        }
        
    }
    console.log(count)
    return count
};
// Sorts the input array nums in ascending order. Sorting the array simplifies the process of identifying duplicates, as duplicate values will be next to each other after sorting.

// Start from index 1 because we are comparing each element with its preceding one.

// This condition checks if the current element (nums[i]) is less than or equal to the previous element (nums[i - 1]). If this condition is true, it means there is a duplicate or a conflict.

// count += nums[i - 1] - nums[i] + 1;: This increments the count by the difference between the previous element and the current element plus 1. This represents the number of increments needed to resolve the conflict and make the current element greater than the previous one.
// nums[i] = nums[i - 1] + 1;: This updates the current element to be one more than the previous element, ensuring uniqueness and resolving the conflict.