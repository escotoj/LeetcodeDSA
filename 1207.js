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




//SOLUTION using Set and Map but using values to return true 
var uniqueOccurrences = function (arr) {
    let ob = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (ob.has(arr[i])) {
            ob.set(arr[i], (ob.get(arr[i]) + 1))
        } else {
            ob.set(arr[i], 1)
        }

    }
    // console.log(ob)
    let h = new Set(ob.values())
    console.log(h)
    console.log(ob.values())
    return h.size === ob.size

};

//EXPLANATION IF VALUES USING IN SET AND MAPS
// values() for Set:
// Set Overview:
// A Set in JavaScript is a collection of unique values. It can store any data type, and each value must be unique within the set.
// values() Method for Set:

// The values() method for a Set returns an iterable object that contains the values of the set in insertion order.

// let mySet = new Set([1, 2, 3, 3, 4, 5]);
// let setValues = mySet.values();

// Using values():
// The iterator (setValues) can be used to iterate over the values of the set.

for (let value of setValues) {
    console.log(value);
}
// Output: 1, 2, 3, 4, 5

// Note that the duplicates are automatically removed because a Set only allows unique values.

// values() for Map:
// Map Overview:

// A Map in JavaScript is a collection of key-value pairs where each key and value can be of any data type.
// values() Method for Map:

// The values() method for a Map returns an iterable object that contains the values of the map in insertion order.

let myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

let mapValues = myMap.values();
// Using values():

// The iterator (mapValues) can be used to iterate over the values of the map.

for (let value of mapValues) {
    console.log(value);
}
// Output: 1, 2, 3
// The values() method returns an iterable containing all the values stored in the Map.

// Key Points:
// For both Set and Map, the values() method provides a way to access the values stored in the collection.
// The order of values returned is based on the order of insertion.
// In the case of a Set, values are unique, and duplicates are automatically removed.
// In the case of a Map, values are associated with keys, and each key-value pair is treated as a separate entity.
// In the context of your original code, ob.values() is used to obtain the values (occurrence counts) stored in the Map (ob).