// 371. Sum of Two Integers
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
// Input: a = 1, b = 2
// Output: 3
// Example 2:
// Input: a = 2, b = 3
// Output: 5

var getSum = function(a, b) {
    while (b !== 0) {
        // Calculate the carry
        let carry = a & b;

        // XOR operation to get the sum without carry
        a = a ^ b;

        // Shift the carry to the left by one position
        b = carry << 1;
    }

    return a;
};
