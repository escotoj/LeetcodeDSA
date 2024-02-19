// 1021. Remove Outermost Parentheses
// Easy
// 2.6K
// 1.5K
// Companies
// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

let s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

var removeOuterParentheses = function(s) {
    let char = "()"
    let split = s.split(' () ')
    let res = []
    // console.log(s)
    for (let i = 0; i < split.length; i++) {
        const element = split[i];
        console.log(element)
        if (element.includes(char)) {
            
            res += split[i]
        }

        
    }
    console.log(res)
};

removeOuterParentheses(s)


// Function to remove the outermost parentheses in every primitive string in the input string S
var removeOuterParentheses = function(s) {
    // Initialize a counter to keep track of the balance of parentheses
    let parenthesCount = 0;
    // Initialize an empty string to build the result without outer parentheses
    let result = "";
    
    // Loop through each character in the input string S
    for (const letter of s) {
        // Check if the current character is an opening parenthesis
        if (letter === "(") {
            // If parenthesCount is not zero, it means we are not at an outer parenthesis,
            // so we add the opening parenthesis to the result
            if (parenthesCount) {
                result += letter;
            }
            // Increment parenthesCount to reflect the addition of an opening parenthesis
            parenthesCount++;
        } else {
            // Decrement parenthesCount to reflect the addition of a closing parenthesis
            parenthesCount--;
            // If parenthesCount is not zero after decrementing, it means we are not closing
            // an outer parenthesis, so we add the closing parenthesis to the result
            if (parenthesCount) {
                result += letter;
            }
        }
    }
    
    // Return the resulting string, which has all outermost parentheses removed
    return result;
};
