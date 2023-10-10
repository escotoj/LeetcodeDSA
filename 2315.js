// 2315. Count Asterisks
// Easy
// 555
// 87
// Companies
// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

// Return the number of '*' in s, excluding the '*' between each pair of '|'.

// Note that each '|' will belong to exactly one pair.

// Example 1:

const s = "l|*e*et|c**o|*de|";
// Output: 2
// Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
// The characters between the first and second '|' are excluded from the answer.
// Also, the characters between the third and fourth '|' are excluded from the answer.
// There are 2 asterisks considered. Therefore, we return 2.
// Example 2:

// Input: s = "iamprogrammer"
// Output: 0
// Explanation: In this example, there are no asterisks in s. Therefore, we return 0.
// Example 3:

// const s = "yo|uar|e**|b|e***au|tifu|l"
// Output: 5
// Explanation: The considered characters are underlined: "yo|uar|e**|b|e***au|tifu|l". There are 5 asterisks considered. Therefore, we return 5.

// stuck at creating the condition for being between the | gpt helped to make the use of state to identify the condition.

// We use a count variable to keep track of the number of asterisks.

// We introduce an insidePair boolean flag to indicate whether we are inside a pair of vertical bars. It starts as false.

// We loop through the characters in the string s.

// When we encounter a vertical bar ('|'), we toggle the insidePair flag. This ensures that we are aware of whether we are inside or outside a pair of vertical bars.

// If we encounter an asterisk ('*') and we are not inside a pair (i.e., insidePair is false), we increment the count.

var countAsterisks = function (s) {
  let insidePair = false;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    console.log(element);
    if (element === "|") {
      insidePair = !insidePair;
    } else if (element === "*" && !insidePair) {
      count++;
    }
  }
  console.log(count);
  return count;
};

countAsterisks(s);

// Accepted
// Editorial
// Solution
// Runtime
// Details
// 50ms
// Beats 69.37%of users with JavaScript
// Memory
// Details
// 42.33MB
// Beats 53.60%of users with JavaScript


// leetcode answer
// var countAsterisks = function (s) {
//   let green = true,
//     count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (green && s[i] == "*") {
//       count++;
//     }
//     if (s[i] == "|") {
//       green = !green;
//     }
//   }
//   return count;
// };
