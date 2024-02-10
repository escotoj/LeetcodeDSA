// 151. Reverse Words in a String
// Medium
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// USING SPLIT, REVERSE AND TRIM TO SOLVE
var reverseWords = function(s) {
    let t = s.split(' ')
    console.log(t)
    let y = []
    for(let i = 0; i< t.length;i++) {
        if(t[i] !== '') {
            y.push(t[i])
        }

    }
    let r =  y.reverse()
    return r.join(' ').trim()
}

// USING QUEUE AND UNSHIFT 
var reverseWords = function(s) {
    let t = s.split(' ')
    let queue = []
    for(let i = 0; i< t.length;i++) {
        if(t[i] !== '') {
            queue.unshift(t[i])
        }

    }
    console.log(queue)
    return queue.join(' ')

}


// Define the reverseWords function that takes a string 's' as input
var reverseWords = function(s) {
    // Step 1: Split the string into an array of words
    return s.split(' ') // Split the string 's' by spaces into an array of substrings (words)
            .map(item => item.trim()) // Step 2: Trim leading and trailing whitespace from each word
            .filter(item => item !== '') // Step 3: Remove any empty strings from the array (which result from consecutive spaces)
            .reverse() // Step 4: Reverse the order of words in the array
            .join(' '); // Step 5: Join the words back into a single string with spaces between them
};
