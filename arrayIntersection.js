// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [3, 4, 5, 6, 7];

var arrayIntersection = function(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                newArr.push(arr1[i])
            }
        }

    }
    console.log(newArr)
    return newArr
};


// let newArr = []: This line initializes an empty array called newArr to store the intersecting elements.

// The code uses two nested for loops to iterate through both input arrays:

// The outer loop, controlled by the variable i, iterates through the elements of arr1.
// The inner loop, controlled by the variable j, iterates through the elements of arr2.
// Inside the nested loops, the code compares each element in arr1 (at index i) with each element in arr2 (at index j) using the condition arr1[i] === arr2[j]. If the elements are equal (i.e., there is an intersection), the common element is added to the newArr array using the newArr.push(arr1[i]) statement.

// After both loops complete, the code logs the newArr array to the console using console.log(newArr) to show the intersecting elements.

// Finally, the function returns the newArr array, which contains all the intersecting elements found in both arr1 and arr2.

function findIntersection(arr1, arr2) {
    // Use a Set to store the elements of the second array for efficient lookup
    const setArr2 = new Set(arr2);
  
    // Filter elements in arr1 that are also in arr2
    const intersection = arr1.filter(item => setArr2.has(item));
  
    // Use a Set to remove duplicates from the intersection, if any
    return [...new Set(intersection)];
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  console.log(findIntersection(arr1, arr2)); // Expected output: [3, 4, 5]
  

//   A Set is used to store the elements of arr2. This is because lookup operations in a set are generally faster than in an array, especially for larger datasets.
// The filter method iterates through arr1 and keeps only the elements that are also found in arr2 (checked via setArr2.has(item)).
// Finally, a new Set is created from the intersection array to ensure all elements are unique, effectively removing any duplicates. The spread operator (...) is used to convert the set back into an array.