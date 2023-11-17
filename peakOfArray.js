// TODO: Write a function that takes an array of integers containing exactly one peak.
// A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak



const peakFinder = function(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        // The peak must be in the left half, including mid
        right = mid;
      } else {
        // The peak must be in the right half, excluding mid
        left = mid + 1;
      }
    }
  
    // At this point, 'left' and 'right' point to the peak element
    return nums[left];
  };
  
  // Example usage:
  // const array = [1, 3, 20, 4, 1, 0];
  // const result = peakFinder(array);
  // console.log(result); // Output: 20
  
  // let left = 0; and let right = nums.length - 1;: These variables represent the current search range. Initially, the entire array is the search range, so left is set to the beginning of the array (index 0), and right is set to the end of the array.
  
  // while (left < right) {: This while loop continues until the search range is reduced to a single element (when left is equal to or greater than right).
  
  // const mid = Math.floor((left + right) / 2);: This calculates the middle index of the current search range.
  
  // if (nums[mid] > nums[mid + 1]) {: This condition checks if the element at the middle index (mid) is greater than its right neighbor. If true, it means the peak element must be in the left half of the current search range, including the middle element.
  
  // right = mid;: Adjusts the search range to be the left half, including the middle element.
  // } else {: If the condition in the previous step is false, it means the peak element must be in the right half of the current search range, excluding the middle element.
  
  // left = mid + 1;: Adjusts the search range to be the right half, excluding the middle element.
  // The loop continues to iterate, narrowing down the search range in each step based on whether the peak is expected in the left or right half.
  
  // When the loop exits (when left is equal to or greater than right), it means the search range has been reduced to a single element, which is the peak element.
  
  // return nums[left];: Returns the value of the peak element, which is located at the index indicated by either left or right.