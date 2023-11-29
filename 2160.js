// 2160. Minimum Sum of Four Digit Number After Splitting Digits

// Companies
// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

// Example 1:

// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
// Example 2:

// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.



// leetcode answer seems hardcoded
var minimumSum = function (num) {
    let n = num.toString()
    let sorted = n.split('').sort()

return Number(sorted[0] + sorted[2]) + Number(sorted[1] + sorted[3])



};



// First attempt WRONG
var minimumSum = function (num) {
    let n = num.toString()
    let sorted = n.split('').sort()
    let num1 = ''
    let num2 = ''
    for (let i = 0; i < n.length / 2; i++) {
        // console.log(n[i])
        num1 += sorted[i]
    }
    for (let i = n.length / 2; i < n.length; i++) {
        // console.log(n[i])
        num2 += sorted[i]
    }

            console.log(num1)
            console.log(num2)
let t = parseInt(num2)
let r = parseInt(num1)
return t + r



};

// second leetcode solution similar to my orginal one 
var minimumSum = function(num) {
    // Convert the number to a string and split it into an array of individual digits
    const digits = num.toString().split('');
    
    // Determine the length of the array (the number of digits)
    const n = digits.length;

    // Initialize a variable sum to store the cumulative sum of pairs
    let sum = 0;

    // Sort the array of digits in ascending order
    digits.sort();

    // Iterate over the first half of the sorted array (up to n / 2)
    for (let i = 0; i < n / 2; i++) {
        // Concatenate the current digit with its counterpart from the end of the array to form a pair
        const pair = digits[i] + digits[n - 1 - i];

        // Convert the pair to a number using the unary plus operator and add it to the sum
        sum += +pair;
    }

    // Return the final sum
    return sum;
};

// Test cases
console.log(minimumSum(2932)); // Output: 52
console.log(minimumSum(4009)); // Output: 13

// Let's break down the line const pair = digits[i] + digits[n - 1 - i];:

// digits[i]: This retrieves the digit at index i from the array digits. In the context of this loop, it corresponds to the current digit from the sorted array, iterating from the beginning of the array towards the middle.

// digits[n - 1 - i]: This retrieves the digit at the opposite end of the array, corresponding to the counterpart of the current digit. The expression n - 1 - i calculates the index of the counterpart. For example, if i is 0, it gets the last digit (n - 1), if i is 1, it gets the second-to-last digit, and so on.

// digits[i] + digits[n - 1 - i]: This concatenates the two digits obtained in steps 1 and 2 to form a two-digit string. This represents a pair of digits.

// For example, let's take the array [2, 3, 9, 2] from the test case minimumSum(2932):

// When i is 0, digits[i] is 2, and digits[n - 1 - i] is 2. So, pair becomes "22".
// When i is 1, digits[i] is 3, and digits[n - 1 - i] is 9. So, pair becomes "39".