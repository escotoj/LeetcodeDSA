// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
 
var reverseVowels = function (s) {
    let v = ['a', 'e', 'i', 'o', 'u'];
    let r = [];
    let vowels = [];

    // Step 1: Identify and store the vowels from the input string
    for (let i = 0; i < s.length; i++) {
        if (v.includes(s[i].toLowerCase())) {
            vowels.push(s[i]);
        }
    }

    // Step 2: Reverse the order of the vowels
    vowels.reverse();

    // Step 3: Replace the original vowels in the string with the reversed vowels
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (v.includes(s[i].toLowerCase())) {
            r.push(vowels[j]);
            j++;
        } else {
            r.push(s[i]);
        }
    }

    // Step 4: Convert the array back to a string
    let result = r.join('');

    return result;
};


// let j = 0;: Initialize a variable j to keep track of the current index in the reversed vowels array.

// for (let i = 0; i < s.length; i++) {: Start a loop that iterates through each character of the input string s.

// if (v.includes(s[i].toLowerCase())) {: Check if the current character in the string is a vowel. The v.includes(s[i].toLowerCase()) part ensures case insensitivity by converting the character to lowercase before checking if it's in the array of vowels.

// Inside the if block:

// r.push(vowels[j]);: If the current character is a vowel, push the corresponding reversed vowel (vowels[j]) into the array r. This is where the replacement happens.
// j++;: Increment the index j to move to the next reversed vowel.
// If the current character is not a vowel:

// else { r.push(s[i]); }: If the character is not a vowel, push the original character into the array r without modification.
// Continue the loop until all characters in the string have been processed.



// solution using stack

var reverseVowels = function(s) {
    let b = [],
     v = ["a", "e", "i", "o", "u"],
     arr = s.split("");
     
   for (let i = 0; i < s.length; i++) {
     if (v.includes(s[i].toLowerCase())) {
     // pushing all the vowels
       b.push(s[i]);
     }
   }
     
   for (let i = 0; i < s.length; i++) {
     if (v.includes(s[i].toLowerCase())) {
     // by pop() we are placing the last vowel of the array at the place of first vowel of given string(which means we are reversing the position)
       arr[i] = b.pop();
     }
   }
     
   return arr.join("");
 };

//  Second Loop (Reversing Vowels in Place)
// Setup: At this point, b contains all the vowels from s in the order they appeared. arr is an array version of s, split into individual characters for easy manipulation.

// Process: The second loop iterates through s again, looking for vowels just like the first loop. This time, however, when a vowel is found, instead of adding it to an array, it replaces the vowel in arr with the last vowel stored in b using b.pop(). The pop() method removes the last element from an array and returns it. This effectively reverses the order of vowels in s because:

// The first vowel found in s (and hence the first vowel replacement operation in arr) uses the last vowel added to b.
// The second vowel found uses the second-to-last vowel from b, and so on.
// This continues until all vowels in s have been replaced in arr, but in reverse order from how they were originally found.



// To visualize how the function reverseVowels works using your examples, let's break down the steps for both "hello" and "leetcode".
// Example 1: "hello" becomes "holle"
// Initial Setup
// Input string s: "hello"
// Vowels to be reversed: ['e', 'o']
// Step-by-Step Visualization
// Collect vowels in b: After the first loop, b = ['e', 'o'].
// Replace vowels during the second loop:
// Encounter 'e' at index 1, b.pop() returns 'o'. Replace 'e' with 'o'.
// Encounter 'o' at index 4, b.pop() returns 'e'. Replace 'o' with 'e'.
// Final Output
// Resulting string: "holle"
// Example 2: "leetcode" becomes "leotcede"
// Initial Setup
// Input string s: "leetcode"
// Vowels to be reversed: ['e', 'e', 'o', 'e']
// Step-by-Step Visualization
// Collect vowels in b: After the first loop, b = ['e', 'e', 'o', 'e'].
// Replace vowels during the second loop:
// Encounter 'e' at index 1, b.pop() returns 'e'. Replace 'e' with 'e' (no change in position).
// Encounter 'e' at index 2, b.pop() returns 'o'. Replace 'e' with 'o'.
// Encounter 'o' at index 3, b.pop() returns 'e'. Replace 'o' with 'e'.
// Encounter 'e' at index 6, b.pop() returns 'e'. Replace 'e' with 'e' (no change in position).
// Final Output
// Resulting string: "leotcede"