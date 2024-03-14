// 1844. Replace All Digits with Characters
// Easy
// 762
// 81
// Companies
// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

 

// Example 1:

// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'
// Example 2:

const s = "a1b2c3d4e"
// Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'
 
function replaceDigits(s) {
    // Convert the string to an array to manipulate it
    let arr = s.split('');

    // Iterate through the array, focusing on odd indices which contain digits
    for (let i = 1; i < arr.length; i += 2) {
        // For each digit at odd index i, replace it with the character that is 'digit' positions away
        // from the character at the previous index (i-1).
        // This is done by converting the character at index (i-1) to its ASCII code with charCodeAt(),
        // adding the digit (converted to a number) to it, and converting the result back to a character.
        arr[i] = String.fromCharCode(arr[i - 1].charCodeAt(0) + parseInt(arr[i], 10));
    }

    // Join the array back into a string and return it
    return arr.join('');
}

// Test the function with the provided example

console.log(replaceDigits(s)); // "abbdcfdhe"
