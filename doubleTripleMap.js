// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var inputArray = [1, 2, 3, 4, 5];

var doubleTripleMap = function(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] * 2
            newArr.push(arr[i])
        } else if (arr[i] % 1 === 0) {
            arr[i] = arr[i] * 3
            newArr.push(arr[i])
        }
        
    }
    return newArr
};

// The function uses a for loop to iterate through the elements of the input array, arr.

// For each element at index i in the arr array:

// a. It checks if the element is even by using the condition arr[i] % 2 === 0. If the element is even, it doubles the element's value (i.e., arr[i] * 2) and then pushes it to the newArr using newArr.push(arr[i]).

// b. If the element is odd, it uses the condition arr[i] % 1 === 0 (which always evaluates to true for any integer) to identify odd elements. When an odd element is found, it triples the element's value (i.e., arr[i] * 3) and pushes it to the newArr.

// After processing all the elements in the input array, the function returns the newArr, which contains the modified elements.


// __-_________ 
// GPT answer using else 

// var doubleTripleMap = function(arr) {
//     // Create an empty array to store the transformed elements
//     var result = [];

//     // Iterate through the input array
//     for (var i = 0; i < arr.length; i++) {
//         var originalElement = arr[i];
//         var transformedElement;

//         if (originalElement % 2 === 0) {
//             // If the element is even, double it
//             transformedElement = originalElement * 2;
//         } else {
//             // If the element is odd, triple it
//             transformedElement = originalElement * 3;
//         }

//         // Add the transformed element to the result array
//         result.push(transformedElement);
//     }

//     return result;
// };

// We initialize an empty array result to store the transformed elements.

// We iterate through the input array using a for loop.

// For each element in the input array, we check whether it's even or odd using the modulo operator (%). If it's even, we double it, and if it's odd, we triple it.

// The transformed element is added to the result array using the push method.

// After processing all elements in the input array, we return the result array, which contains the transformed elements corresponding to the original array.



function transformArray(arr) {
    return arr.map(num => {
      // Check if the number is even
      if (num % 2 === 0) {
        return num * 2; // Double the number if it's even
      } else {
        return num * 3; // Triple the number if it's odd
      }
    });
  }
  
  // Example usage
  const originalArray = [1, 2, 3, 4, 5];
  const transformedArray = transformArray(originalArray);