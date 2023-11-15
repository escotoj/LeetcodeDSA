// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false


// First attempt
// const validBrackets = function(str) {
//     if("()" || "[]" || "{}" === str) {
//         return true
//     } else if ("(]" || "[)" === str){
//         return false
//     }
    
    
//     };



const validBrackets = function(str) {
    let stack = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
        // If an opening bracket is encountered, push it onto the stack
        stack.push(str[i]);
      } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
        // If a closing bracket is encountered, check if it matches the last opening bracket
        if (stack.length === 0) {
          // If the stack is empty, there is no matching opening bracket
          return false;
        }
  
        let lastBracket = stack.pop();
  
        // Check if the current closing bracket matches the last opening bracket
        if (
          (str[i] === ')' && lastBracket !== '(') ||
          (str[i] === '}' && lastBracket !== '{') ||
          (str[i] === ']' && lastBracket !== '[')
        ) {
          return false;
        }
      }
    }
  
    // After iterating through the string, if the stack is not empty, there are unmatched opening brackets
    return stack.length === 0;
  };
  
//   // Example usage:
//   console.log(validBrackets("()"));      // Output: true
//   console.log(validBrackets("( )"));     // Output: true
//   console.log(validBrackets("(())"));    // Output: true
//   console.log(validBrackets("(]"));      // Output: false
//   console.log(validBrackets("({[]})"));  // Output: true
//   console.log(validBrackets("({[]}"));   // Output: false
  







// const validBrackets = function(str) {
//     const stack = [];
//     const bracketPairs = {
//       '(': ')',
//       '[': ']',
//       '{': '}'
//     };
  
//     for (let bracket of str) {
//       if ('({['.includes(bracket)) {
//         stack.push(bracket);
//       } else if (')]}'.includes(bracket)) {
//         const lastBracket = stack.pop();
  
//         if (bracketPairs[lastBracket] !== bracket) {
//           return false;
//         }
//       }
//     }
  
//     return stack.length === 0;
//   };
  
  // Example usage:
  console.log(validBrackets("()"));      // Output: true
  console.log(validBrackets("([])"));    // Output: true
  console.log(validBrackets("{[()]}"));  // Output: true
  console.log(validBrackets("(]"));      // Output: false
  console.log(validBrackets("({[]}"));   // Output: false
  



//   STACK based APPROACH

// The function initializes an empty stack (const stack = []) to keep track of opening brackets.
// It iterates through each character in the input string (for (let bracket of str)).
// If the character is an opening bracket ('(', '[', or '{'), it is pushed onto the stack.
// If the character is a closing bracket (')', ']', or '}'), the function checks if the last opening bracket on the stack matches the current closing bracket.
// If there is a match, the last opening bracket is popped off the stack.
// If there is no match or if the stack is empty, the function returns false because the brackets are not balanced.
// After processing the entire string, the function returns true if the stack is empty (all brackets were matched) and false otherwise.
// Logical OR (||) Approach:

// The original code uses the logical OR (||) operator to check if the input string is equal to specific bracket pairs ("()", "[]", "{}").
// However, the use of || in this context doesn't achieve the desired result. It checks if the string is equal to the first bracket pair ("()") and returns true immediately, regardless of the presence of other bracket pairs. The subsequent conditions are not evaluated.