// 2810. Faulty Keyboard
// Easy
// 315
// 4
// Companies
// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

// You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

// Return the final string that will be present on your laptop screen.

 

// Example 1:

const s = "string"
// Output: "rtsng"
// Explanation: 
// After typing first character, the text on the screen is "s".
// After the second character, the text is "st". 
// After the third character, the text is "str".
// Since the fourth character is an 'i', the text gets reversed and becomes "rts".
// After the fifth character, the text is "rtsn". 
// After the sixth character, the text is "rtsng". 
// Therefore, we return "rtsng".
// Example 2:

// let s = "poiinter"
// Output: "ponter"
// Explanation: 
// After the first character, the text on the screen is "p".
// After the second character, the text is "po". 
// Since the third character you type is an 'i', the text gets reversed and becomes "op". 
// Since the fourth character you type is an 'i', the text gets reversed and becomes "po".
// After the fifth character, the text is "pon".
// After the sixth character, the text is "pont". 
// After the seventh character, the text is "ponte". 
// After the eighth character, the text is "ponter". 
// Therefore, we return "ponter".

// var finalString = function(s) {
//     let result = [];
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'i') {
//             // Reverse the text by popping characters from the stack
//             while (stack.length > 0) {
//                 result.push(stack.pop());
//             }
//         }
//         stack.push(s[i]);
//     }
//     console.log(stack)

//     while (stack.length > 0) {
//         result.push(stack.pop());
//     }
// console.log(result.join(''))
//     return result.join('');
// };

// twodays to figure out plus gtp help 
// EXPLANATION
// Initialize an empty array result to store the characters of the final string, and set the rev flag to false. The rev flag indicates whether the string should be reversed.

// Loop through the input string s character by character.

// If the current character s[i] is 'i', toggle the rev flag. This means that if the flag was false, it becomes true, and vice versa. This is done to handle the reversal behavior when 'i' is encountered.

// If the current character is not 'i', check the value of the rev flag:

// If rev is true, it means we should reverse the string. So, unshift (add to the beginning) the current character to the result array using result.unshift(s[i]).
// If rev is false, it means we should keep the characters in the original order. In this case, push (add to the end) the current character to the result array using result.push(s[i]).
// Continue this process for all characters in the input string.

// After processing all characters, check the rev flag again:

// If rev is true, it means the string should be reversed. In this case, reverse the result array using result.reverse().
// Finally, join the characters in the result array into a single string using result.join('') and return it as the final result.


var finalString = function(s) {
    let result = [];
    let rev = false;
    for(let i = 0; i< s.length; i++) {
        if(s[i] === 'i') {
            rev = !rev;
        } else {
            if (rev) {
                result.unshift(s[i])
            } else {
                result.push(s[i])
            }
        }
    }
    return rev ? result.reverse().join('') : result.join('');
};

console.log(finalString(s)); 



// ANSWER FROM LEETCODE 
// function finalString(s) {
//     const finalStr = [];
  
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "i") {
//         finalStr.reverse();
//         continue;
//       }
//       finalStr.push(s[i]);
//     }
//     return finalStr.join("");
//   }
// finalString(s)