// 2000. Reverse Prefix of Word

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

// Example 2:
// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

// Example 3:
// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

var reversePrefix = function (word, ch) {
    let count = 0
    if (word.includes(ch)) {
        console.log('t');
    } else {
        return word
    }
    // loop through array to find at what index ch is found by counting each letter until found and then calling break. 

    for (let i = 0; i < word.length; i++) {
        count++
        if (word[i] === ch) {
            break;
        }
    }

    let n = []
    // using count to set the limit for the loop we push each word from 0 to the limit. 
    for (let i = 0; i < count; i++) {
        console.log(word[i])
        n.push(word[i])
    }

    let m = []

    // again using count, we loop though the array starting with count and going till the limit in order to have the remainder of the original array 
    for (let i = count; i < word.length; i++) {
        console.log(word[i])
        m.push(word[i])
    }

    let v = m.join('')
    let w = n.reverse().join('');
    // by joining and reversing the first array we created we meet the first criteria of the exercise and we set up to meet the final criteria. 

    return w.concat(v)
    // by using concat to we join the two arrays for final product. 


};

// Simplified version removes the use of if else in the start, rids the need to create a second array to later concat. 
var reversePrefix = function (word, ch) {
    let count = 0
    if (!word.includes(ch)) {
        return word
    }
    for (let i = 0; i < word.length; i++) {
        count++
        if (word[i] === ch) {
            break;
        }
    }
    let n = []
    for (let i = 0; i < count; i++) {
        n.push(word[i])
    }
    n.reverse()
    for (let i = count; i < word.length; i++) {
        n.push(word[i])
    }
    return n.join('');
};