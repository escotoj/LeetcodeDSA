// 1431. Kids With the Greatest Number of Candies

// Companies
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

 

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

var kidsWithCandies = function (candies, extraCandies) {
    let arr = []
    let highest = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        let kids = candies[i] + extraCandies
        if(kids >= highest) {
            arr.push(true)
        } else {
            arr.push(false)
        }
        }
        return arr
    };

// Variable Initialization:

// arr is initialized as an empty array. This array will store the boolean values indicating whether each kid can have the greatest number of candies.
// highest is initialized using Math.max(...candies), which finds the maximum value in the candies array. This represents the highest number of candies among all kids.
// Iteration through Kids:

// The function then uses a for loop to iterate through each kid (element) in the candies array.
// Total Candies Calculation:

// For each kid, it calculates the total number of candies they would have if given the extra candies (totalCandies = candies[i] + extraCandies).
// Comparison with Highest:

// It then compares the total number of candies for the current kid with the highest number of candies (totalCandies >= highest).
// If the total candies are greater than or equal to the highest, it means the current kid can have the greatest number of candies.
// Result Pushing:

// The result of the comparison (true or false) is pushed into the arr array.
// Return:

// After iterating through all kids, the function returns the arr array, which contains true or false for each kid based on whether they can have the greatest number of candies.

// USING MAP
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(item => item + extraCandies >= max);
};

// Mapping with map():

// candies.map(item => item + extraCandies >= max) applies a function to each element of the candies array using the map() method.
// The arrow function (item => item + extraCandies >= max) is applied to each element (item) of the candies array.