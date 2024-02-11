// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0; // Pointer to place non-zero elements

    // First pass: Move all non-zero elements to the beginning of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }

    // Fill the rest of the array with 0's
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }

    // No need to return the array, as we are modifying it in-place
};




// Define the function 'moveZeroes' that accepts an array 'nums' as its parameter.
var moveZeroes = function(nums) { 

    // Start a for loop with a variable 'i' initialized to the length of 'nums'.
    // The loop decrements 'i' after each iteration, iterating backwards through the array.
    // This approach is chosen to avoid issues with changing array indices during removals.
    for(var i = nums.length; i--; ) { 

        // Check if the current element, nums[i], is zero.
        if(nums[i] === 0) { 

            // If the current element is zero, remove it from the array using 'splice'.
            // 'splice(i, 1)' removes 1 element at index 'i', effectively deleting the current zero.
            nums.splice(i, 1) 

            // After removing the zero, append a zero to the end of the array using 'push'.
            // This operation ensures that the zeros are moved to the end of the array.
            nums.push(0); 
        }
    }
    // Since the array 'nums' is modified in place, there's no need to return anything.
};
