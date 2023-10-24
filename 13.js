// 13. Roman to Integer

// Companies
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function (s) {
  symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};


// The symbols object is defined to map each Roman numeral character to its corresponding integer value. This mapping is essential for converting Roman numerals to integers.

// The value variable is initialized to 0. This variable will be used to accumulate the integer value of the Roman numeral.

// The function enters a for loop that iterates through each character of the Roman numeral string, starting from the leftmost character (i = 0).

// Inside the loop, the code checks whether the current character (s[i]) has a smaller value than the next character (s[i + 1]). It does this by comparing the values of symbols[s[i]] and symbols[s[i + 1]]. If the current symbol is smaller than the next one, it means that a subtraction case is encountered (e.g., IV for 4, IX for 9, XL for 40, etc.).

// If a subtraction case is encountered, the code subtracts the value of the current character from the value using value -= symbols[s[i]]. This accounts for the subtraction of the smaller value before the larger one.

// If no subtraction case is encountered, the code adds the value of the current character to the value using value += symbols[s[i]].

// The loop continues until all characters in the Roman numeral string have been processed.

// Finally, the function returns the accumulated value, which is the integer equivalent of the Roman numeral.

// This solution works efficiently by handling both regular cases (e.g., III, VI, XII) and subtraction cases (e.g., IV, IX, XL, etc.) in a single pass through the Roman numeral string. It leverages the mapping provided by the symbols object to determine the integer values associated with each Roman numeral character and applies the appropriate logic to calculate the total value.