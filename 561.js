// 561. Array Partition

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Example 1:
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:

// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:
// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.


// BRUTE FORCE SOLUTION
var arrayPairSum = nums => {
    nums.sort((a, b) => a - b);
    // sort in ascending order
    let sum = 0;
// variable to store the value
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
    // sum each number skipping one, this pairs the numbers always choosing the min of each pair. 
            sum += nums[i]
        }
    }
    return sum
};


// Initializing the sum variable: The let sum = 0; line initializes a variable sum to keep track of the sum of the minimum values in each pair.

// Iterating through the sorted array: The for loop iterates through each element in the sorted array.

// Checking if the index is even: The if (i % 2 === 0) condition checks if the current index i is even.

// Summing the even-indexed elements: If the index is even, the code inside the if statement (sum += nums[i];) adds the current element to the sum. Since the array is sorted, the even-indexed elements correspond to the smaller values in each pair.



// USING Math.MIN
var arrayPairSum = function(nums) {
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // For debugging purposes, print the sorted array
    console.log(nums);

    // Step 2: Initialize the sum variable to 0
    let sum = 0;

    // Step 3: Iterate through the sorted array by pairs
    for (let i = 0; i < nums.length; i += 2) {
        // Step 4: Use Math.min to get the minimum value in each pair
        sum += Math.min(nums[i], nums[i + 1]);
    }

    // Step 5: Return the final sum
    return sum;
};

// Iterating through the sorted array by pairs: The for loop now increments i by 2 in each iteration to process the array in pairs.

// Using Math.min: The line sum += Math.min(nums[i], nums[i + 1]); uses Math.min to find the minimum value in each pair and adds it to the sum.