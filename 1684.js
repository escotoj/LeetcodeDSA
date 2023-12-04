// 1684. Count the Number of Consistent Strings

// Companies
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4

// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.


var countConsistentStrings = function(allowed, words) {
    let count = 0;

    // Loop through each word in the 'words' array
    for (let i = 0; i < words.length; i++) {
        // Assume the current word is consistent
        let consistent = true;

        // Loop through each character in the current word
        for (let j = 0; j < words[i].length; j++) {
            // Check if the current character is in the 'allowed' string
            if (!allowed.includes(words[i][j])) {
                // If the character is not allowed, set 'consistent' to false
                consistent = false;
                // Break out of the inner loop since the word is already inconsistent
                break;
            }
        }

        // If the word is consistent, increment the count
        if (consistent) {
            count++;
        }
    }

    // Return the final count of consistent words
    return count;
};

// Outer Loop (for (let i = 0; i < words.length; i++) { ... }):

// The outer loop iterates through each word in the words array.
// Assume Consistency (let consistent = true;):

// For each word, we initially assume that it is consistent.
// Inner Loop (for (let j = 0; j < words[i].length; j++) { ... }):

// The inner loop iterates through each character in the current word.
// Check Character Consistency (if (!allowed.includes(words[i][j])) { ... }):

// For each character, it checks if the character is in the allowed string.
// If the character is not allowed, set consistent to false, indicating that the word is inconsistent.
// Break out of the inner loop since there's no need to check further for inconsistency.
// Increment Count (if (consistent) { count++; }):

// After the inner loop, check if the word is consistent (consistent === true).
// If the word is consistent, increment the count variable.
// Repeat for Each Word:

// The process is repeated for each word in the words array.