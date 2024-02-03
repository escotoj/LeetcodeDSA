// 2696. Minimum String Length After Removing Substrings

// You are given a string s consisting only of uppercase English letters.

// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

// Return the minimum possible length of the resulting string that you can obtain.

// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

 
// Example 1:
// Input: s = "ABFCACDB"
// Output: 2
// Explanation: We can do the following operations:
// - Remove the substring "ABFCACDB", so s = "FCACDB".
// - Remove the substring "FCACDB", so s = "FCAB".
// - Remove the substring "FCAB", so s = "FC".
// So the resulting length of the string is 2.
// It can be shown that it is the minimum length that we can obtain.

// Example 2:
// Input: s = "ACBBD"
// Output: 5
// Explanation: We cannot do any operations on the string so the length remains the same.

var minLength = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (stack.length > 0) {
            let top = stack[stack.length - 1];
            if ((top === 'A' && char === 'B') || (top === 'C' && char === 'D')) {
                stack.pop(); // Remove the pair from the stack
                continue;
            }
        }
        stack.push(char); // Add the current character to the stack
    }

    return stack.length; // The stack now contains only the characters that could not be removed
};

// Character Matching and Stack Manipulation: For each character, the algorithm checks if the current character (char) and the top character of the stack (stack[stack.length - 1]) form either "AB" or "CD".

// If the current character and the top of the stack form either "AB" or "CD", the top character is removed from the stack using stack.pop(). This simulates removing the "AB" or "CD" substring from the string because the pair effectively cancels out.

// If the current character does not form "AB" or "CD" with the top of the stack, it is added to the stack with stack.push(char). This is because the character does not have a pair to form a removable substring and thus remains part of the ongoing string.

// Continuation Until End of String: This process continues for each character in the string. The stack dynamically grows and shrinks based on the pairing and removal rules. Characters that cannot form a "AB" or "CD" pair with their immediate predecessor remain in the stack.

// Result: After the loop completes, the stack contains only those characters that could not be paired into "AB" or "CD" substrings. The length of this stack (stack.length) represents the minimum possible length of the string after all possible removals. This length is returned as the solution.