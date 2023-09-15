// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:
const nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// const nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]



// first attempt 09/14
// var shuffle = function(nums, n) {
//     let sorted = nums.sort((a, b) => a * b * n)
//     return sorted
    
// };

// SOLUTION EXPLAINED
// https://youtu.be/eh0oJfhEX_M

var shuffle = function(nums, n) {
    let res = [] // creates a new empty array for storage

    for(let i = 0; i < n; i++){ // the loop will only run the length of n
        res.push(nums[i], nums[i+n]) // we push the corespioning value to the array along with the value n number over nums[i]
    }

    return res;
}
console.log(shuffle(nums, n))

// nums[i] corresponds to the current value of i in the loop. Inside the loop, i takes on the values 0, 1, and 2 because of the loop condition i < n (where n is 3). So, nums[i] will be:

// When i is 0, nums[i] is nums[0], which is 2.
// When i is 1, nums[i] is nums[1], which is 5.
// When i is 2, nums[i] is nums[2], which is 1.
// nums[i+n] corresponds to the element n positions ahead of the current value of i. In this case, n is 3, so nums[i+n] will be:

// When i is 0, nums[i+n] is nums[0+3], which is nums[3], and nums[3] is 3.
// When i is 1, nums[i+n] is nums[1+3], which is nums[4], and nums[4] is 4.
// When i is 2, nums[i+n] is nums[2+3], which is nums[5], and nums[5] is 7.
// So, for each iteration of the loop, you are taking one element from the first n elements of the nums array (indexed by i) and one element from the second n elements of the nums array (indexed by i+n). These two elements are then pushed into the res array, effectively interleaving the elements from the first half and the second half of the original nums array.