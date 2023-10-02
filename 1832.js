// 1832. Check if the Sentence Is Pangram
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

const sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// const sentence = "anmt"
// Output: false
// SOLUTION stuck at return false and true, 
var checkIfPangram = function(sentence) {
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < abc.length; i++) {
        if(!sentence.includes(abc[i])) {
            console.log(false)
            return false
        } 
    }
    console.log(true)
    return true
};

checkIfPangram(sentence)