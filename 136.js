// 136. Single Number
// Easy
// 15.4K
// 624
// Companies
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:

const nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 
var singleNumber = function(nums) {
    let sorted = nums.reduce((a, b) => a ^ b)
    console.log(sorted)
    return sorted
    
};

singleNumber(nums)

// Here's how the function works:

// 1. The `reduce` method is used to iteratively apply the XOR operation (^) to all elements in the `nums` array. The XOR operation is used to find unique elements because it returns 1 for each bit where the two numbers being XORed have different bits and 0 for the same bits.

//    `let sorted = nums.reduce((a, b) => a ^ b)`

//    This line initializes `sorted` with the result of XORing all elements in the `nums` array.

// 2. The result of the XOR operation is stored in the variable `sorted`.

// 3. The `console.log(sorted)` statement is used to log the result to the console for debugging purposes. It will display the value of `sorted` in the console when the function is called.

// 4. Finally, the function returns the value stored in the `sorted` variable, which is the single number that appears only once in the array, while all other numbers appear twice.

// The XOR operation works well for this problem because it's associative, commutative, and, most importantly, it cancels out duplicate numbers when XORed together. If a number appears twice, XORing it with itself results in 0, effectively eliminating it from the result. However, if a number appears only once, it won't be canceled out by any other number. Therefore, the final result is the number that appears only once in the array.



// CHAT GPT solution using a 'for.. of" loop
var singleNumber = function(nums) {
    let result = 0;
    

    for (let num of nums) {
        result ^= num;
    }
    
    return result;
};

// We initialize result to 0.

// We iterate through the nums array using a for...of loop.

// In each iteration, we XOR the current number num with the result. This effectively accumulates the XOR of all the numbers in the array.

// After the loop, result will contain the value of the single number that appears only once, and we return it.
