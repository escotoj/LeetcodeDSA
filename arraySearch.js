// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    console.log(arr)
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j];
            if(arr[i][j] === "X") {
                count ++
            }
            
        }

        
    }
    console.log(count)
    return count
};

// var arraySearch2D = function(arr) {
//     let count = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             // Check if the element is "X" (case-insensitive)
//             if (arr[i][j].toUpperCase() === "X") {
//                 count++;
//             }
//         }
//     }

//     return count;
// };

// Initialize a count variable to keep track of the number of "X" occurrences in the 2D array.

// Use nested loops to iterate through the rows and columns of the 2D array.

// In the inner loop, check if the current element is equal to "X" (case-insensitive comparison). If it is, increment the count variable.

// Finally, return the count variable, which represents the total number of "X" (case-insensitive) occurrences in the 2D array.

function countX(twoDArray) {
    // Use the reduce method to accumulate the count of "X"
    return twoDArray.reduce((totalCount, currentRow) => {
      // For each row, count the "X"s and add to the total count
      return totalCount + currentRow.reduce((rowCount, currentItem) => {
        // If the current item is "X", increment the row count; otherwise, keep it the same
        return rowCount + (currentItem === "X" ? 1 : 0);
      }, 0); // Initial row count is 0
    }, 0); // Initial total count is 0
  }
  
  // Example usage
  const twoDArray = [
    ["X", "O", "O", "X"],
    ["O", "X", "O", "O"],
    ["X", "O", "O", "O"],
  ];
  console.log(countX(twoDArray)); // Expected output: 4

  
//   The outer reduce function iterates over each row of the two-dimensional array, where totalCount is the accumulator that keeps track of the total number of "X" found, and currentRow represents the current row being processed.
// Within each iteration of the outer reduce, another reduce function is applied to the current row (currentRow). This inner reduce function iterates over each item in the row, where rowCount is the accumulator for the count of "X" in the current row, and currentItem is the current element being checked.
// If currentItem is "X", the row count (rowCount) is incremented by 1; otherwise, it remains the same. This count is then added to the total count (totalCount).
// The initial value for both the inner and outer reduce accumulators is set to 0 to start counting from zero.
// After processing all rows and elements, the outer reduce function returns the total count of "X".
// This alternative approach provides a concise way to count "X" occurrences using functional programming concepts, making the code more readable and expressive.