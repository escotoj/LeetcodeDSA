// 2828. Check if a String Is an Acronym of Words

// Given an array of strings words and a string s, determine if s is an acronym of words.
// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

// Example 1:
// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym. 

// Example 2:
// const words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively. 
// The acronym formed by concatenating these characters is "aa". 
// Hence, s = "a" is not the acronym.

// Example 3:
const words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy". 
// Hence, s = "ngguoy" is the acronym.

// SOLUTION 10/02 - under 10 minutes first try

var isAcronym = function(words, s) {
    let check = ''
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
    let char = element.charAt(0)
    check += char
    }
    if(check == s) {
        console.log(true)
        return
    }
    console.log(false)
    return false

};

isAcronym(words, s)

// Runtime
// Details
// 78ms
// Beats 21.23%of users with JavaScript
// Memory
// Details
// 44.84MB
// Beats 50.57%of users with JavaScript

// ONE LINE LEETCODE ANSWER
// var isAcronym = function (words, s) {
//     return s === words.map((str) => str[0]).join("")
//   }

// It first uses the map method to iterate over each element (a string) in the words array. Inside the map function, it takes the first character of each string by accessing str[0]. This effectively extracts the first letter of each word in the array.

// The map function returns an array of the first letters of each word.

// The join method is then used to concatenate these first letters into a single string. This string is stored in the variable s.