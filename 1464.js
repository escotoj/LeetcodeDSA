// 1464. Maximum Product of Two Elements in an Array

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 
// Example 1:
// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

// Example 2:
// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Example 3:
// Input: nums = [3,7]
// Output: 12

var maxProduct = function(nums) {
    // Sort the 'nums' array in descending order
    nums.sort((a, b) => b - a);

    // Calculate and return the product of the two largest elements minus 1
    return (nums[0] - 1) * (nums[1] - 1);
};


// Sort the Array (nums.sort((a, b) => b - a);):

// The nums array is sorted in descending order using the sort method with a custom comparator function. This rearranges the elements so that the largest elements come first.
// Calculate Product (return (nums[0] - 1) * (nums[1] - 1);):

// The product of the two largest elements in the sorted array minus 1 is calculated.
// nums[0] is the largest element, and nums[1] is the second-largest element.
// Subtracting 1 from each element ensures that the product is calculated without including the two largest elements.
// Return the Result:

// The calculated product is returned from the function.
// This function is designed to find the maximum product of two distinct elements in the array. The sorting step ensures that the two largest elements are at the beginning of the array, and then the product of these elements minus 1 is calculated and returned.