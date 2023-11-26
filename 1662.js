// 1662. Check If Two String Arrays are Equivalent

// Companies
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true


var arrayStringsAreEqual = function(word1, word2) {
    let w1 = word1.reduce((a, b) => a + b)
    let w2 = word2.reduce((a, b) => a + b)
    if (w1 === w2) {
        return true
    } else {
        return false
    }
};



// USING JOIN One line
var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('');
};

// Example usage:
let word1_1 = ["ab", "c"];
let word2_1 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1_1, word2_1)); // Output: true

let word1_2 = ["a", "cb"];
let word2_2 = ["ab", "c"];
console.log(arrayStringsAreEqual(word1_2, word2_2)); // Output: false

let word1_3 = ["abc", "d", "defg"];
let word2_3 = ["abcddefg"];
console.log(arrayStringsAreEqual(word1_3, word2_3)); // Output: true
