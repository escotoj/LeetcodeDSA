// 2108. Find First Palindromic String in the Array
// Easy
// 935
// 30
// Companies
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

 

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// let words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

let words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

var firstPalindrome = function(words) {
    let pali = ''
    for (let i = 0; i < words.length; i++) {
        let element = words[i]
        let rev = words[i].split('').reverse().join('')
        console.log('element', element)
        console.log('rev', rev)
        if(element === rev) {
            pali = element
            break;
        } 
    }
    console.log('pali', pali || '')
    return pali || ''
};

firstPalindrome(words)