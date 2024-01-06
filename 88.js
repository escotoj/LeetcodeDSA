// 88. Merge Sorted Array

// Companies
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);
};


// We are given two sorted arrays nums1 and nums2 of sizes m and n, respectively. We need to merge these two arrays into a single sorted array, and the result should be stored inside nums1. Since nums1 is of size m+n, we can use this extra space to store the merged array. We can iterate through the arrays from the end and place the larger element in the end of nums1.

// The function starts with a for loop that iterates over the elements in nums2. The loop has two variables, i and j. The variable i starts at the index m, which is the first index in nums1 where the elements from nums2 will be inserted. The variable j starts at 0, representing the index in nums2.

// In each iteration of the loop, the value at the current index j in nums2 is assigned to the index i in nums1. This effectively adds the element from nums2 to the end of nums1.

// After the loop completes, the function sorts the entire nums1 array using the sort method with a comparator function (a, b) => a - b. This ensures that the merged array is in ascending order.


// Attempt number 2 01/05
var merge = function(nums1, m, nums2, n) {
    let l = [];
    for (let i = 0; i < m; i++) {
        l.push(nums1[i]);
    }

    let y = [];
    for (let i = 0; i < n; i++) {
        y.push(nums2[i]);
    }

    nums1.length = 0; 

    nums1.push(...l, ...y)
    nums1.sort((a,b) => a - b); 
};

// Copy Elements from nums1 and nums2 to Temporary Arrays (l and y):

// The code uses two separate loops to copy the first m elements from nums1 to the array l and the first n elements from nums2 to the array y.
// Clear nums1:

// nums1.length = 0; clears the existing elements in nums1.
// Concatenate Arrays and Sort nums1:

// nums1.push(...l, ...y); uses the spread operator to concatenate the arrays l and y into nums1.
// nums1.sort((a, b) => a - b); sorts the merged array nums1 in non-decreasing order.
// This approach essentially combines elements from nums1 and nums2 into a temporary array, clears nums1, and then pushes the sorted merged elements back into nums1. While this works, it's worth noting that sorting the entire array may not be the most efficient approach, especially when both nums1 and nums2 are already sorted.