// 1221. Split a String in Balanced Strings

// Companies
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLRRRLLRLL"

// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// LEETCODE SOLUTION
var balancedStringSplit = function(s) {
    
    let matches = 0;
	let balance = 0;

	for (let i = 0; i < s.length; i++) {

		if (s[i] === "R") {
			balance -= 1;
		} else if (s[i] === "L") {
			balance += 1;
		}

		if (balance === 0) {
			matches += 1;
		}
	}
	return matches;
};

// GPT SOLUTION
var balancedStringSplit = function(s) {
    let count = 0;
    let balance = 0; // To keep track of balanced substrings

    for (let char of s) {
        if (char === 'L') {
            balance++;
        } else {
            balance--;
        }

        if (balance === 0) {
            count++; // A balanced substring is found
        }
    }

    return count;
}

// The key is in the condition if (balance === 0), which checks if the current balance is zero. This condition is true when there is an equal number of 'R' and 'L' characters encountered so far in the string.

// Let's understand how this works:

// When encountering an 'R', balance is decremented (balance--).
// When encountering an 'L', balance is incremented (balance++).
// The idea is that as long as the balance is not zero, it means there are more of either 'R' or 'L' characters in the current segment. When the balance becomes zero, it indicates that there is an equal number of 'R' and 'L' characters in the current segment, making it a balanced string.

// Here's an example:

// Suppose the input string is "RLRRLLRLRL".
// As you iterate through each character:
// R (balance becomes -1)
// L (balance becomes 0)
// R (balance becomes -1)
// R (balance becomes -2)
// ...
// L (balance becomes 0)
// R (balance becomes -1)
// L (balance becomes 0)
// R (balance becomes -1)
// L (balance becomes 0)
// In this example, the matches variable will be incremented twice because there are two segments where the balance becomes zero, indicating that they are balanced strings. The segments are "RL" and "RRLLRLRL".