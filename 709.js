// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

// const s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

const s = "LOVELY"
// Output: "lovely"

var toLowerCase = function(s) {
    let low = s.toLowerCase()
    console.log(low)
    return low
};

toLowerCase(s)