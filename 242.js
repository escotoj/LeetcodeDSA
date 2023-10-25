// 242. Valid Anagram

// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// USING SORT, POINT OUT THAT INTERVIEWERS WONT ALLOW THE USE OF SORT
// var isAnagram = function(s, t) {
//     s = s.split("").sort()
//     t = t.split("").sort()

//     if (s.length !== t.length)
//         return false;

//     for (var i = 0; i < s.length; i++)
//         if (s[i] !== t[i])
//             return false;

//     return true;
// };

// USING OBJECT
var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
};