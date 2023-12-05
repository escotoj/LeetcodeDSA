// 2744. Find Maximum Number of String Pairs

// You are given a 0-indexed array words consisting of distinct strings.

// The string words[i] can be paired with the string words[j] if:

// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.

// Note that each string can belong in at most one pair.

 
// Example 1:
// Input: words = ["cd","ac","dc","ca","zz"]
// Output: 2
// Explanation: In this example, we can form 2 pair of strings in the following way:
// - We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
// - We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
// It can be proven that 2 is the maximum number of pairs that can be formed.

// Example 2:
// Input: words = ["ab","ba","cc"]
// Output: 1
// Explanation: In this example, we can form 1 pair of strings in the following way:
// - We pair the 0th string with the 1st string, as the reversed string of words[1] is "ab" and is equal to words[0].
// It can be proven that 1 is the maximum number of pairs that can be formed.

// Example 3:
// Input: words = ["aa","ab"]
// Output: 0
// Explanation: In this example, we are unable to form any pair of strings.


var maximumNumberOfStringPairs = function (words) {
    let count = 0;

    // Outer loop: Iterate over each word in the 'words' array
    for (let i = 0; i < words.length; i++) {
        // Inner loop: Iterate over each word after the current word in the 'words' array
        for (let j = i + 1; j < words.length; j++) {
            // Check if the two words form a pair
            if (words[i][0] === words[j][1] && words[i][1] === words[j][0]) {
                // If the condition is met, increment the count
                count++;
            }
        }
    }

    // Return the final count of string pairs
    return count;
};


// Initialize Count (let count = 0;):

// The variable count is initialized to 0. This variable will be used to count the number of string pairs that satisfy the given condition.
// Outer Loop (for (let i = 0; i < words.length; i++) { ... }):

// The outer loop iterates over each word in the words array. It is denoted by the variable i.
// Inner Loop (for (let j = i + 1; j < words.length; j++) { ... }):

// The inner loop iterates over each word after the current word in the words array. It is denoted by the variable j.
// Check Condition (if (words[i][0] === words[j][1] && words[i][1] === words[j][0]) { ... }):

// For each pair of words (at indices i and j), it checks if the first character of the first word is equal to the second character of the second word and vice versa.
// If the condition is met, it means the two words form a pair, and the count is incremented.
// Repeat for Each Pair of Words:

// The nested loops ensure that each pair of words is considered for the condition check.