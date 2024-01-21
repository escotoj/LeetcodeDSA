// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]


var smallerNumbersThanCurrent = function(nums) {
    let res = []
    
    for(let i = 0; i < nums.length; i++) {
        let count = 0 
        for(let j = 0; j < nums.length; j++) {
        if(j != i && nums[j]< nums[i])
        count++
    }
    res.push(count)
    }
    return res
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // Output: [4, 0, 1, 1, 3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));    // Output: [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));    // Output: [0, 0, 0, 0]


// Inside the outer loop, there is a nested loop (for (let j = 0; j < nums.length; j++)) that iterates through each element again.
// For each element at index i in the outer loop, it compares it with every other element at index j.
// The condition if (i !== j && nums[j] < nums[i]) checks if the current element at index j is smaller than the element at index i. If true, it increments the count variable.


// Solution using map and sort
var smallerNumbersThanCurrent = function(nums) {
    // Create a sorted copy of the original array
    const sorted = [...nums].sort((a, b) => a - b);
    // Map each element in the original array to its index in the sorted array
    return nums.map(num => sorted.indexOf(num));

};

// Create a Sorted Copy (const sorted = [...nums].sort((a, b) => a - b)):

// The code creates a sorted copy of the original array nums using the spread operator [...nums] to clone the array.
// The sort((a, b) => a - b) sorts the array in ascending order.
// Map Each Element to Its Index (return nums.map(num => sorted.indexOf(num))):

// The map method is used on the original array nums.
// For each element num in nums, it finds the index of num in the sorted array (sorted) using indexOf.
// The result is an array where each element represents the count of numbers smaller than the corresponding element in the original array.



// USING SPREAD Operator 
var smallerNumbersThanCurrent = function(nums) {
    
    let x = [...nums]
    let sorted = x.sort((a,b)=> a-b)
    let solution = []
  
    for(el of nums){
       
        solution.push(sorted.indexOf(el))
        
    }
    
    return solution
    
};