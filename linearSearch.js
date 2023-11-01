// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]===target) {
        console.log(i);
        return i;
      }
    }
    return -1;
  };



// We iterate through the array, comparing each element directly to the target number using ===.

// If a match is found, it returns the index of the element in the array. If no match is found after the loop completes, it returns -1.