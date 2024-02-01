// 2103. Rings and Rods
// Solved

// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

// Return the number of rods that have all three colors of rings on them.

// Example 1:
// Input: rings = "B0B6G0R6R0R6G9"
// Output: 1
// Explanation: 
// - The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
// - The rod labeled 6 holds 3 rings, but it only has red and blue.
// - The rod labeled 9 holds only a green ring.
// Thus, the number of rods with all three colors is 1.

// Example 2:
// Input: rings = "B0R0G0R9R0B0G0"
// Output: 1
// Explanation: 
// - The rod labeled 0 holds 6 rings with all colors: red, green, and blue.
// - The rod labeled 9 holds only a red ring.
// Thus, the number of rods with all three colors is 1.

// Example 3:
// Input: rings = "G4"
// Output: 0
// Explanation: 
// Only one ring is given. Thus, no rods have all three colors.


// SOLUTION IS NOT THE BEST FOR MEMORY OR SPEED
var countPoints = function(rings) {
    let map = new Map()
    for(let i = 0; i <rings.length; i+=2) {
        let color = rings[i]
        let rod = rings[i + 1]
        console.log(rod)
        if(!map.has(rod)) {
            map.set(rod, new Set([color]))
        } else {
            map.get(rod).add(color)
        }
    }
    console.log(map)
    let count = 0
    for(let rodSet of map.values()) {
        if(rodSet.size ===3) {
            count++
        }
    }
    return count 
};

// Map Initialization (let map = new Map();):

// A Map is used to store information about each rod. The keys of the map are rod numbers, and the values are sets containing the colors of rings on that rod.
// Rings Iteration (for (let i = 0; i < rings.length; i += 2) { ... }):

// The function iterates through the rings in steps of 2 (as each ring is represented by two characters: color and rod).
// Inside the loop, it extracts the color and rod information from the current ring.
// Map Population (if (!map.has(rod)) { ... } else { ... }):

// Checks if the current rod is already in the map.
// If not, it initializes a new set for the rod and adds the color to the set.
// If the rod is already in the map, it adds the color to the existing set for that rod.
// Counting Rods with All Three Colors (for (let rodSet of map.values()) { ... }):

// After populating the map, the function iterates through the values (sets of colors) in the map.
// For each rod, it checks if the set size is equal to 3, indicating that all three colors are present on that rod.
// If so, it increments the count.


// simple solution 
// var countPoints = function(rings) {
//     let rods = '0123456789';
//     let count = 0;
//     for (let rod of rods) { // looping over the variable, rods
//         if (rings.includes(`R${rod}`) && 
//           rings.includes(`G${rod}`) && 
//           rings.includes(`B${rod}`)) count++; // checking if rings includes
// 			// R, G, & B on that rod
// 			// if so, add to count
//     } return count;
// };