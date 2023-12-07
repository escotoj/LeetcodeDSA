// 2418. Sort the People

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Example 2:
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

var sortPeople = function(names, heights) {
    // Step 1: Create a map to associate heights with names
    let map = new Map();
    for (let i = 0; i < heights.length; i++) {
        map.set(heights[i], names[i]);
    }

    // Step 2: Sort the heights array in descending order
    heights.sort((a, b) => b - a);

    // Step 3: Create a result array and populate it with names in the sorted order of heights
    let res = [];
    for (let i = 0; i < heights.length; i++) {
        res.push(map.get(heights[i]));
    }

    // Step 5: Return the sorted result array
    return res;
};

// Example usage:
const names = ["Alice", "Bob", "Charlie"];
const heights = [165, 180, 175];
const result = sortPeople(names, heights);
console.log(result);


// Map Creation (map):

// A Map is created to associate heights with corresponding names.
// The loop iterates over the heights array, and for each height, it sets the name at the same index in the names array as the value for that height in the map.
// Sorting Heights (`heights.sort((a, b) => b - a))):

// The heights array is sorted in descending order using the sort method and a comparator function. This ensures the heights are in a sorted order from tallest to shortest.
// Building Result Array (res):

// A result array (res) is created to store the names in the sorted order of heights.
// The loop iterates over the sorted heights array, and for each height, it retrieves the corresponding name from the map using map.get(heights[i]) and adds it to the result array.
