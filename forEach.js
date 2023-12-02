// 2942. Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

 

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
// Example 3:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []
// Explanation: "z" does not occur in any of the words. Hence, we return an empty array.

// Original answer took less than 5 minutes
var findWordsContaining = function(words, x) {
    let ans = []
    for(let i = 0; i < words.length; i++) {
        if(words[i].includes(x)) {
ans.push(i)
        }
    }
    return ans
};


// same answer using a forEach loop to better understand the use of it

var findWordsContaining = function(words, x) {
    let ans = [];

    words.forEach((word, index) => {
        if (word.includes(x)) {
            ans.push(index);
        }
    });

    return ans;
};

// Example usage:

let words = ['apple', 'banana', 'cherry', 'date'];
let result = findWordsContaining(words, 'a');
console.log(result); // Output: [0, 1, 3]

// In this version, the forEach loop is used to iterate through each element in the words array. The word parameter represents the current element (word), and the index parameter represents the index of that element in the array.

// The loop checks if the current word includes the character x. If it does, it pushes the current index to the ans array. The result is an array of indices where words contain the specified character, similar to the original for loop version.

// **** Key Differences:
// Iteration Mechanism:

// For Loop (Original): Uses a counter variable i to iterate through the array indices.
// ForEach Loop: (Updated): Iterates directly over the elements of the array, and you can access both the current element and its index in the callback function.
// Callback Function:

// For Loop (Original): Requires a separate block of code inside the loop to access the current element (words[i]) and its index (i).
// ForEach Loop: (Updated): Uses a callback function that takes two parameters (word and index) directly, making it more concise.

// **** Benefits of Using forEach:
// Conciseness: forEach eliminates the need for a separate index variable and provides a more readable and concise way to iterate over elements.
// Readability: The code inside the loop is contained within the callback function, making it clearer and more maintainable.
// In summary, the forEach loop provides a more modern and expressive way to iterate over array elements, offering improved readability and conciseness compared to traditional for loops.

array.forEach(function(currentElement, currentIndex, array) {
    // Code to execute for each element
  });
  
// word is the current element (word) in the words array.
// index is the index of the current element.
// The loop checks if the word includes the character x and, if true, pushes the index to the ans array.





