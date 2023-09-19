// 771. Jewels and Stones
// Companies
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 
// First attempt 09/18
// var numJewelsInStones = function(jewels, stones) {
//     let count = 0
//     for(let i = 0; i < jewels.length; i++) {
//         let element = jewels[i].split('');
//         let charUp = jewels[i].toUpperCase();
//         let charLow = jewels[i].toLowerCase();
//         if(element[i] === charUp || element[i] === charLow) {
//             count++
//         } else {
//             return count
//         }
//     }
    
// };

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++;
        }
    }
    
    return count;
};