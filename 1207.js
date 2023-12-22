// 1207. Unique Number of Occurrences

// Companies
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// ANSWER using a hashmap

// Define a function named uniqueOccurrences that takes an array 'arr' as input
var uniqueOccurrences = function(arr) {
    // Initialize a map to store the count of occurrences for each value
    let hashMap = new Map();

    // Iterate through the elements of the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the value is already in the map
        if (hashMap.has(arr[i])) {
            // If yes, increment the count of occurrences
            hashMap.set(arr[i], (hashMap.get(arr[i]) + 1));
        } else {
            // If not, set the count of occurrences to 1
            hashMap.set(arr[i], 1);
        }
    }

    // Initialize a set to store unique counts of occurrences
    let hasSet = new Set();

    // Iterate through the entries (key-value pairs) in the map
    for (let [key, value] of hashMap) {
        // Check if the count of occurrences is already in the set
        if (hasSet.has(value)) {
            // If yes, the number of occurrences is not unique, return false
            return false;
        } else {
            // If not, add it to the set
            hasSet.add(value);
        }
    }

    // If all counts of occurrences are unique, return true
    return true;
};

// Example usage:
// Check the function with example arrays and log the results to the console
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurrences([1, 2])); // Output: false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // Output: true
