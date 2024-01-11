// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
 

var isSubsequence = function(s, t) {
    // variable to push letter to
    let q = ''
    let p = 0
    // varible to keep track of the index for s as we iterate and check each letter
    for(let i = 0; i < t.length; i++) {
    
            if(t[i]=== s[p]) {
            q += t[i]
            p++
        }
    }
    console.log(q)
    if (s === q) {
        return true
    }
    return false
    };