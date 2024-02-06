// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

//first attempt using if else statements
var mergeAlternately = function (word1, word2) {
    let res = []
    // a standard for loop will iterate through and add each letter alternating between strings, the if else statements will cater to the other conditions. 
    if (word1.length === word2.length) {
        for (let i = 0; i < word1.length; i++) {
            res.push(word1[i])
            res.push(word2[i])
        }
    } else if (word1.length < word2.length) {
        for (let i = 0; i < word2.length; i++) {
            res.push(word1[i])
            res.push(word2[i])
        }

    } else {
        for (let i = 0; i < word1.length; i++) {
            res.push(word1[i])
            res.push(word2[i])
        }
    }
    return res.join('')
};


// USING Math.max 
var mergeAlternately = function (word1, word2) {
    let res = [];
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            res.push(word1[i]);
        }
        if (i < word2.length) {
            res.push(word2[i]);
        }
    }
    
    return res.join('');
};


// This version uses Math.max to determine the maximum length between the two words and iterates up to this length. On each iteration, it checks if the current index i is within the bounds of each word before attempting to access and push the character from each word. This effectively merges the words alternately, handling cases where one word is longer than the other seamlessly.