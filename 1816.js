// 1816. Truncate Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

 

// Example 1:
// const s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

// Example 2:
const s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".

// Example 3:
// Input: s = "chopper is not a tanuki", k = 5
// Output: "chopper is not a tanuki"

// SOLUTION first try 09/29 under 20 minutes
// not the best time complexity or speed
var truncateSentence = function(s, k) {
    let arr2 = []
    let arr = s.split(" ")
    console.log(arr)
    for (let i = 0; i < k; i++) {
        const element = arr[i];
        console.log(element)
        arr2.push(element)
    }
    console.log(arr2.join(' '))
    return arr2.join(' ')
    
};

truncateSentence(s, k)


// ONE LINE SOLUTION FROM LEETCODE
// var truncateSentence = function(s, k) {
//     return s.split(" ").splice(0, k).join(" ");
// };