// 371. Sum of Two Integers
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
const a = 1 
const b = 2
// Output: 3
// Example 2:
// Input: a = 2, b = 3
// Output: 5

var getSum = function(a, b) {
    while (b !== 0) {
        // Calculate the carry
        let carry = a & b;
        // console.log(carry)

        // XOR operation to get the sum without carry
        a = a ^ b;
        console.log(a)

        // Shift the carry to the left by one position
        b = carry << 1;
        // console.log(b)
    }
    console.log(a)
    return a;
};

//  not a good method because it doesnt use the carry method,useful for higher numbers.
// const getSum = function(a, b) {
//     a = a ^ b;
//     console.log(a)
// }
// getSum(a, b)

// Binary Representation:

// All numbers can be represented in binary form, which is a series of 0s and 1s.
// For example, the decimal number 1 is represented as 0001 in binary, and the decimal number 2 is represented as 0010 in binary.
// Bitwise AND (&):

// When you perform a bitwise AND operation between two numbers, it operates on their binary representations bit by bit.
// For example, 1 & 2 in binary is 0001 & 0010, which results in 0000 (binary). In decimal, this is 0.
// Bitwise OR (|):

// When you perform a bitwise OR operation between two numbers, it operates on their binary representations bit by bit.
// For example, 1 | 2 in binary is 0001 | 0010, which results in 0011 (binary). In decimal, this is 3.
// Bitwise XOR (^):

// When you perform a bitwise XOR operation between two numbers, it operates on their binary representations bit by bit.
// For example, 1 ^ 2 in binary is 0001 ^ 0010, which results in 0011 (binary). In decimal, this is 3.
// Bitwise NOT (~):

// When you perform a bitwise NOT operation on a number, it inverts each bit in its binary representation.
// For example, ~1 in binary is ~0001, which results in 1110 (binary). In decimal, this is -2, but this can vary depending on the number of bits used to represent the number.
// Left Shift (<<) and Right Shift (>>):

// Left shift and right shift operations shift the bits of a number to the left or right by a specified number of positions.
// For example, 1 << 1 shifts 0001 one position to the left, resulting in 0010, which is 2 in decimal. 2 >> 1 shifts 0010 one position to the right, resulting in 0001, which is 1 in decimal.
// In summary, bitwise operations work with single numbers by treating them as binary representations and manipulating their bits. These operations can be used to perform various tasks, including setting and clearing individual bits, checking for specific patterns, and optimizing code for certain scenarios.