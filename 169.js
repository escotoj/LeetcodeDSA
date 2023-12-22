// 169. Majority Element

// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// LEETCODE SOLUTION intuative

var majorityElement = function(nums) {
    // Initialize sol and cnt to store the solution and its frequency for respective iterations...
    let sol = 0
    let cnt = 0
    // For every element i in the array...
    for(let i = 0; i < nums.length; i++ ) {
        // If cnt is equal to zero, update sol as sol = i
        if(cnt == 0){
            sol = nums[i];
            cnt = 1;
        }
        // If i is equal to candidate, increment cnt...
        else if(sol == nums[i]){
            cnt++;
        }
        // Otherwise, decrement cnt...
        else{
            cnt--;
        }
    }
    // Return & print the solution...
    return sol;
};




// ChatGPT solution 

var majorityElement = function(nums) {
    // Initialize variables
    let candidate = nums[0];
    let count = 1;

    // Voting process
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }

        // If count becomes zero, update the candidate
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        }
    }

    // At this point, 'candidate' is a potential majority element
    // We need to verify if it appears more than ⌊n / 2⌋ times

    // Count the occurrences of the potential majority element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        }
    }

    // Check if it appears more than ⌊n / 2⌋ times
    if (count > nums.length / 2) {
        return candidate;
    }

    // If no majority element is found, return -1 or any other indicator
    return -1;
};

// Example usage:
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
// Initialization:

// candidate: We start by assuming that the first element in the array is a potential majority element.
// count: We initialize a counter to 1 since we have seen the first element.
// Voting Process:

// We iterate through the array starting from the second element.
// If the current element is the same as the candidate, we increment the count.
// If the current element is different from the candidate, we decrement the count.
// If the count becomes zero, it means the current candidate is no longer a potential majority element, so we update the candidate to the current element, and reset the count to 1.
// Verification:

// After the first pass, we have a potential majority element stored in the variable candidate.
// We then iterate through the array again to count the occurrences of the potential majority element.
// Check for Majority:

// If the count of the potential majority element is greater than half the length of the array (⌊n / 2⌋), then it is indeed the majority element.
// If it's a majority element, we return it.
// If no majority element is found, we return -1 (or any other indicator).
