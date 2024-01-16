// 2500. Delete Greatest Value in Each Row

// You are given an m x n matrix grid consisting of positive integers.
// Perform the following operation until grid becomes empty:
// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.
// Return the answer after performing the operations described above.

// Example 1:
// Input: grid = [[1,2,4],[3,3,1]]
// Output: 8
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
// - In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
// - In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
// The final answer = 4 + 3 + 1 = 8.

// Example 2:
// Input: grid = [[10]]
// Output: 10
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 10 from the first row. We add 10 to the answer.
// The final answer = 10.

var deleteGreatestValue = function(grid) {
    let ans = 0;
    // Step 1: Sort each row in descending order in order to target the first element AKA the highest value
    for (let i = 0; i < grid.length; i++) {
        grid[i].sort((a, b) => b - a);
    }
    // Step 2: Calculate the sum of the maximum values of each column
    // the while loop is used so that the loop runs as long as there is numbers left as we pop the highest value out
    console.log(grid[0].length)
    while (grid[0].length) {
        let col = [];
        for (let i = 0; i < grid.length; i++) {
            col.push(grid[i].pop());
        }
        ans += Math.max(...col);
    }
    // Step 3: Return the final sum
    return ans;
};

// Sorting Each Row in Descending Order:
// The function starts by iterating over each row of the grid using a for loop.
// For each row (grid[i]), it sorts the elements in descending order using the sort method with the comparator function (a, b) => b - a.
// This step rearranges the elements in each row so that the greatest value comes first.
// Calculating the Sum of Maximum Values of Each Column:

// The function then enters a while loop that continues as long as the first row of grid has elements (i.e., grid[0].length is non-zero).
// Within this loop, it initializes an empty array col to store the maximum values of each column.
// Another for loop is used to iterate over each row (grid[i]) and pop the last element from each row, pushing it into the col array. This effectively extracts the maximum value from each column.
// After extracting the maximum values from each column, it calculates the sum of these maximum values using Math.max(...col). This gives the maximum value for the current iteration.
// The obtained maximum value is added to the running sum (ans).
// Returning the Final Sum:

// After the while loop completes (when the first row of grid becomes empty), the function returns the final sum (ans).