// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

var gcdOfStrings = function (str1, str2) {
    let t = str1.length; // Length of the first string
    let s = str2.length; // Length of the second string
    let p = ''; // Initialize p as an empty string to build up the potential GCD

    // Early check: if str1 + str2 is not equal to str2 + str1, there cannot be any common divisor
    // This is because if two strings have a common divisor, they should be able to be concatenated in any order to form the same string
    while (str1 + str2 !== str2 + str1) {
        return ''; // Immediately return an empty string as there is no common divisor
    }

    // Iterate over the characters of the strings up to the length of the shorter string
    for (let i = 0; i < Math.min(t, s); i++) {
        // If the characters at the current position i are not the same, there cannot be a common divisor
        if (str1[i] !== str2[i]) {
            return ''; // Return an empty string as the strings differ at position i
        }

        // Append the current character to p, building up a potential common divisor
        p += str1[i];

        // Check if the current length (i+1) is a divisor of both string lengths
        if (t % (i + 1) === 0 && s % (i + 1) === 0) {
            // Extract the substring that might be the common divisor
            let commonDivisor = str1.substring(0, i + 1);
            
            // Check if repeating the commonDivisor the necessary number of times reconstructs both strings
            // This validates whether the constructed substring is indeed a common divisor
            if (commonDivisor.repeat(t / (i + 1)) === str1 && commonDivisor.repeat(s / (i + 1)) === str2) {
                return commonDivisor; // Return the common divisor found
            }
        }
    }

    // If no common divisor is found that satisfies all checks, return the built-up string p
    // However, due to the logic of this function, this return path is effectively unreachable with the current checks in place
    // The reason is that the early return conditions and validations within the loop already cover all scenarios for a valid common divisor
    return p;
};





var gcdOfStrings = function(str1, str2) {
    // First, check if the concatenation of str1 and str2 in both possible orders results in the same string.
    // This is a prerequisite for the two strings to have a common substring that could be their GCD.
    // If not, it means there is no common base that can be repeated to form both strings, hence return an empty string.
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    // Determine the minimum length between str1 and str2, as the GCD cannot be longer than the shortest string.
    let minLength = Math.min(str1.length, str2.length);

    // Iterate from the minLength downwards to find the largest possible divisor.
    // Starting with the longest possible divisor ensures that the first valid divisor found is the greatest.
    for (let l = minLength; l > 0; l--) {
        // Check if both str1 and str2 lengths are divisible by l.
        // The divisibility condition ensures that a substring of length l can potentially be the GCD.
        if ((str1.length % l === 0) && (str2.length % l === 0)) {
            // If a common divisor is found, return the substring of str1 from the start up to length l.
            // This substring is the largest repeating pattern that forms both str1 and str2,
            // satisfying the condition of a greatest common divisor in the context of strings.
            return str1.substring(0, l);
        }
    }
    // If no common divisor is found, the function will implicitly return `undefined`.
    // However, given the initial check and the loop logic, it's guaranteed to find at least a single character match if it passes the initial check,
    // so this situation would be theoretically impossible in this implementation.
};
