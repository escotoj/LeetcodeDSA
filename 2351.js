// 2351. First Letter to Appear Twice
// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Example 1:
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

// Example 2:
// Input: s = "abcdd"
// Output: "d"
// Explanation:
// The only letter that appears twice is 'd' so we return 'd'.


var repeatedCharacter = function (s) {
    // create a map to store char in key value pairs, key being the char and the value being the count
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        // as we loop through each char we check if the map doesn't have char so we set it and add the count value 
        if (!map.has(s[i])) {
            map.set(s[i], 1)
        } else {
            // as we loop after the first char is set, we check if it exist by using the if statement and if it equals 1, it is already in the map
            if (map.get(s[i]) === 1) {
                return s[i]
            }
            map.set(s[i], (map.get(s[i]) + 1))

        }
    }
};


// USING SET 
var repeatedCharacter = function (s) {
    let set = new Set()
    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            return s[i]
        } else {
            set.add(s[i])
        }
    }
    };

//     let letterSet = new Set(): This line initializes an empty Set called letterSet. A Set is a collection of unique values, and it's used here to keep track of the characters encountered in the string.

// for(let i = 0; i < s.length; i++) {: This line starts a loop that iterates through each character in the string s.

// if(letterSet.has(s[i])) return s[i]: Inside the loop, it checks whether the current character (s[i]) is already in the letterSet. If it is, it means that the character has been encountered before, and the function immediately returns this character. This effectively stops the loop and exits the function.

// letterSet.add(s[i]): If the current character is not in the letterSet (i.e., it's the first time encountering it), it adds the character to the set using the add method. This ensures that subsequent iterations can check for the presence of characters in the set.

// The loop continues until a repeated character is found