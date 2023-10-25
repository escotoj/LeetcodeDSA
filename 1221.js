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
    let balanceCount = 0; // To keep track of balanced substrings

    for (let char of s) {
        if (char === 'L') {
            balanceCount++;
        } else {
            balanceCount--;
        }

        if (balanceCount === 0) {
            count++; // A balanced substring is found
        }
    }

    return count;
}