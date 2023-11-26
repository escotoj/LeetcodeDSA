function runningSum(nums) {
    let runningSumArray = [];
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      runningSumArray.push(sum);
    }
  
    return runningSumArray;
  }
  
  // Example usage:
  let nums1 = [1, 2, 3, 4];
  console.log(runningSum(nums1)); // Output: [1, 3, 6, 10]
  
  let nums2 = [1, 1, 1, 1, 1];
  console.log(runningSum(nums2)); // Output: [1, 2, 3, 4, 5]
  
  let nums3 = [3, 1, 2, 10, 1];
  console.log(runningSum(nums3)); // Output: [3, 4, 6, 16, 17]


//   Variable Initialization:

// runningSumArray is initialized as an empty array. This array will store the running sums.
// sum is initialized to 0. This variable will keep track of the running sum as we iterate through the input array.
// Iteration through the Input Array:

// The function uses a for loop to iterate through each element of the input array nums.
// For each element at index i, the value is added to the sum. This updates the running sum.
// The updated running sum is then pushed to the runningSumArray.
// Building the Running Sum Array:

// After the loop completes, the function has iterated through all elements of the input array, updating the running sum at each step.
// The runningSumArray now contains the running sums corresponding to each index in the input array.
// Return:

// The final runningSumArray is returned as the output of the function.
// Example Usage:

// The function is then called with three different examples (nums1, nums2, and nums3).
// The results are logged to the console.
// In summary, this function calculates the running sum of an input array and returns an array where each element at index i is the sum of all elements from index 0 to i in the original array. The running sum is computed iteratively, and the results are stored in the runningSumArray.