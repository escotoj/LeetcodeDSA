// const maxSumArray = function(numbers) {
//   // Write your solution here
//   numbers.sort((a, b)=> b - a)
//   console.log(numbers)

//   console.log(numbers.reduce((a, b)=> a + b))
//   return numbers.reduce((a, b)=> a + b)
// };


const maxSumArray = function(numbers) {
    if (numbers.length === 0) {
      return 0; // Return 0 for an empty array
    }
  
    let currentSum = numbers[0];
    let maxSum = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      currentSum = Math.max(numbers[i], currentSum + numbers[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    // If the maxSum is negative, it means all elements are negative
    // In that case, return the maximum of single elements
  
    return maxSum;
  };
  // Example usage:
  const numbers = [1, 2, -50, 4, 5];
  const result = maxSumArray(numbers);
  console.log(result); // Output: 9
  

//   Base Case: The function checks if the input array nums is empty. If it is, the function returns 0, as there are no elements to sum.

// Initialization: The function initializes two variables, currentSum and maxSum, both set to the first element of the array (nums[0]). These variables will be used to keep track of the current sum of the subarray and the maximum sum encountered so far.

// Iteration: The function then iterates over the array starting from the second element (for (let i = 1; i < nums.length; i++)).

// Update currentSum: At each step, the currentSum is updated using the Math.max function. It compares the current element (nums[i]) with the sum of the current element and the previous currentSum. This step ensures that we consider either starting a new subarray from the current element or extending the existing subarray.

// Update maxSum: The maxSum is updated with the maximum of the current maxSum and the updated currentSum. This ensures that we keep track of the maximum sum encountered so far.

// Final Result: After iterating through the entire array, the function returns the final maxSum, which represents the sum of the maximum contiguous subarray.