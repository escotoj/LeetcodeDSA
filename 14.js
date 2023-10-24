// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(s[i] !== strs[0][i]) return s.slice(0, i);
        }
    }
    return strs[0];
};


// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return "";
//     }
    
//     // Start with the first string as the prefix
//     let prefix = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//         let j = 0;
        
//         // Compare characters of the current string with the prefix
//         while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
//             j++;
//         }

//         // Update the prefix to the common part
//         prefix = prefix.slice(0, j);
        
//         // If the prefix becomes an empty string, no common prefix is found, so return immediately
//         if (prefix === "") {
//             return "";
//         }
//     }

//     return prefix;
// };

// t starts with a check to see if the strs array is empty. If it's empty (i.e., !strs.length is true), the function immediately returns an empty string. This is because there can't be any common prefix if there are no strings in the array.

// It then enters a nested loop structure. The outer loop iterates through the characters of the first string in the array (strs[0]), using the variable i to represent the index of the character. It iterates from the first character (index 0) to the last character (index strs[0].length - 1).

// Inside the outer loop, there's an inner loop that iterates through all the strings in the strs array using a for...of loop. The inner loop iterates over each string (s) in the array.

// Within the inner loop, there's a conditional statement that checks whether the character at index i in the current string (s[i]) is not equal to the character at the same index i in the first string (strs[0][i]). If a character mismatch is found in any of the strings, the function immediately returns a substring of the current string from the beginning (index 0) up to, but not including, the current index i. This is the point at which the common prefix ends.

// If the code has iterated through all the strings without finding any character mismatches, it means that the common prefix extends through the entire length of the first string (strs[0]). In this case, the function returns the entire strs[0] string, as it is the longest common prefix.

// This code efficiently compares characters across all strings and stops as soon as it encounters a mismatch, which makes it a valid approach for finding the longest common prefix in an array of strings.