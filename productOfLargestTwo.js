// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
    let arr2 = arr.sort((a, b) => b - a);
    const element = arr2[0] * arr2[1];
    console.log(element);
    return element;
  };

//   It sorts the input array arr in descending order, creating a new array arr2, where the largest elements are at the front of the array.

// It calculates the product of the first two elements of the sorted array arr2, representing the product of the two largest elements.

// It logs the calculated product to the console for display.

// Finally, it returns the calculated product as the result of the function.
  
