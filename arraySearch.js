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