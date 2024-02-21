// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
    let arr2 = arr.sort((a, b) => b - a);
    const element = arr2[0] * arr2[1];
    console.log(element);
    return element;
  };

//   It sorts the input array arr in descending order, creating a new array arr2, where the largest elements are at the front of the array.

// It calculates the product of the first two elements of the sorted array arr2, representing the product of the two largest elements.

// It logs the calculated product to the console for display.

// Finally, it returns the calculated product as the result of the function.


function findLargestProduct(nums) {
  // Check if the array has at least two elements
  if (nums.length < 2) {
    console.log("Array must contain at least two elements.");
    return; // Exit the function if the array doesn't have enough elements
  }

  // Initialize largest and second largest with the first two elements
  let largest = nums[0] >= nums[1] ? nums[0] : nums[1];
  let secondLargest = nums[0] < nums[1] ? nums[0] : nums[1];

  // Loop through the array starting from the second element
  for (let i = 2; i < nums.length; i++) {
    // Check if the current element is greater than the largest
    if (nums[i] > largest) {
      secondLargest = largest; // Update second largest to be the old largest
      largest = nums[i]; // Update largest to the current element
    } else if (nums[i] > secondLargest) {
      // If it's not larger than the largest but is larger than the second largest, update second largest
      secondLargest = nums[i];
    }
  }

  // Calculate and return the product of the two largest numbers
  return largest * secondLargest;
}

  
