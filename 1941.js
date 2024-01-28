// 1941. Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:
// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

// Example 2:
// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

var areOccurrencesEqual = function (s) {
    let map = new Map();
    // created a map to store chars and occurrence
    for (let i = 0; i < s.length; i++) {
        // the way to store the chars and values is below
        if (!map.has(s[i])) {
            //first check if the map has the char which it doesn't, so use the set method to begin storing them
            map.set(s[i], 1)
        } 
        // as the loop run, it will encounter new occurrences so we update the occurrence by using the set and get methods and adding one for each new occur
        map.set(s[i], (map.get(s[i]) + 1))
    }
    // we use the values method to retrieve the values only 
    let vals = map.values()
    // we use the set to record the unique occurrence of each number
    let set = new Set(vals)
    console.log(set)
    // if all the numbers occur the same about if times only one value will return meeting the criteria
    if (set.size === 1) {
        return true
    }
    return false
};