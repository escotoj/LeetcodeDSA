// 344. Reverse String

// Companies
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function(s) {
    s.reverse()
    
};

// Runtime
// Details
// 90ms
// Beats 11.32%of users with JavaScript
// Memory
// Details
// 49.44MB
// Beats 39.58%of users with JavaScript


// Leetcode solution

const reverseString = (s) => {
    // Initialize two pointers, one at the beginning (left) and one at the end (right) of the array
    let left = 0;
    let right = s.length - 1;
  
    // Continue swapping elements until the left pointer surpasses the right pointer
    while (left < right) {
      // Store the values of the elements at the left and right pointers
      const first = s[left];
      const last = s[right];
  
      // Swap the elements at the left and right pointers
      [s[left], s[right]] = [last, first];
  
      // Move the left pointer to the right, and the right pointer to the left
      left++;
      right--;
    }
  
    // Return the reversed array
    return s;
  };
  

//   Initialization of Pointers (let left = 0; let right = s.length - 1;):

// The function starts by initializing two pointers: left at the beginning of the array (0) and right at the end of the array (s.length - 1).
// Two-Pointer Swap Loop (while (left < right) { ... }):

// The function enters a while loop that continues as long as the left pointer is less than the right pointer. This ensures that the swapping process continues until the entire array is reversed.
// Element Swap ([s[left], s[right]] = [last, first];):

// Inside the loop, the values of the elements at the left and right pointers are stored in variables first and last, respectively.
// The elements at the left and right pointers are then swapped using destructuring assignment.
// Move Pointers (left++; right--;):

// After the swap, the left pointer is moved to the right (left++), and the right pointer is moved to the left (right--).
// Loop Continuation:

// The loop continues until the left pointer surpasses the right pointer. At this point, the entire array has been reversed.
// Return Reversed Array (return s;):

// Finally, the reversed array is returned.