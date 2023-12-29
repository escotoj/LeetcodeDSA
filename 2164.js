// 2164. Sort Even and Odd Indices Independently

// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.

// Example 1:
// Input: nums = [4,1,2,3]
// Output: [2,3,4,1]
// Explanation: 
// First, we sort the values present at odd indices (1 and 3) in non-increasing order.
// So, nums changes from [4,1,2,3] to [4,3,2,1].
// Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
// So, nums changes from [4,1,2,3] to [2,3,4,1].
// Thus, the array formed after rearranging the values is [2,3,4,1].

// Example 2:
// Input: nums = [2,1]
// Output: [2,1]
// Explanation: 
// Since there is exactly one odd index and one even index, no rearrangement of values takes place.
// The resultant array formed is [2,1], which is the same as the initial array. 



// ATTEMPT ONE AIDED BY SOLUTION IN LEETCODE
var sortEvenOdd = function (nums) {
    let odd = []
    let even = []
    // create two different arrays to store each type of number
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }
    console.log(even)
    console.log(odd)
    even = even.sort((a, b) => a - b)
    odd = odd.sort((a, b) => b - a)

    // sort each new array according to criteria


let result = []
// create the final array to store each number in proper order by using push and shift
for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
        result.push(even.shift())
    } else {
        result.push(odd.shift())
    }
    //f i is even, it pushes the first element of the even array into the result array using even.shift(). The shift method removes and returns the first element of an array.
}
    return result
};



// SOLUTION w/o Shift 

var sortEvenOdd = function (nums) {
    const evens = [];
    const odds = [];
    const res = [];
    
    // Separate even and odd indices
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) evens.push(nums[i]);
        else odds.push(nums[i]);
    }
    
    // Sort even and odd arrays
    evens.sort((a, b) => a - b);
    odds.sort((a, b) => b - a);
    
    // Interleave sorted even and odd arrays
    for (let i = 0; i < evens.length; i++) {
        res.push(evens[i]);
        if (odds[i]) res.push(odds[i]);   
    }
    
    return res;
};