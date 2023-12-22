// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// ANSWER using an array 
var lengthOfLastWord = function (s) {
    //create an array to store the length values of each word
    let n = []
    // turn the string to an array in order to manipulate
    let m = s.split(' ')
    for (let i = 0; i < m.length; i++) {
    // create an if statement that checks for empty spaces
        if (m[i] != 0) {
    // push only the words and not empty spaces
            n.push(m[i].length)
        }
    }
// reverse the order of the array we created since we are targeting the last word
    let res = n.reverse()
// once reversed the first number should equal the last word in the array 
    return res[0]

};




// Leetcode answer using trim and pop (STACK)
var lengthOfLastWord = function(s) {
    // trim is used to eliminate the empty spaces before turning in to an array 
    return s.trim().split(" ").pop().length;
    // pop is function that calls the last number of an array first 
};

// The trim method is used to remove leading and trailing whitespaces from the input string. This is important to ensure that any potential leading or trailing spaces don't affect the result.

// The pop() method is then applied to the resulting array. This method removes and returns the last element from the array. In this case, it pops the last word from the array.
