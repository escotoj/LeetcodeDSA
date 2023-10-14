// 2185. Counting Words With a Given Prefix
// Easy
// 624
// 18
// Companies
// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

 

// Example 1:

// const words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

// Example 2:
const words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

var prefixCount = function(words, pref) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if(element.startsWith(pref)) {
            count++
        }
    }  
    console.log(count)
 
};

prefixCount(words, pref)

// leetcode using splice
// var prefixCount = function(words, pref) {
//     let count = 0;
//     for(let i = 0; i<words.length; i++) {
//         if(pref === words[i].slice(0, pref.length)) count++;
//     }

//     return count;
// };  