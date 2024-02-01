// 2278. Percentage of Letter in String
// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Example 1:
// Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.

// Example 2:
// Input: s = "jjjj", letter = "k"
// Output: 0
// Explanation:
// The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.

// USING Math.floor
var percentageLetter = function(s, letter) {
    let charCount = 0
    for(const els of s) {
        if(els.includes(letter)) {
            charCount++
        }
    }
    return Math.floor((charCount / s.length) * 100)
};

// without using the Math.floor method the return is zero bc of the number being to small to return so you must use that and multiply by 100 to get answer