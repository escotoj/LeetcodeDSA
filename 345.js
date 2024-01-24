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