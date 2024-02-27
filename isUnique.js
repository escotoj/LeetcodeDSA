// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`
// var arr = [2, 8, 7, 5, 4, 3];
// var arr = [-2, 5, -2, 53, 22, 1];

var isUnique = function(arr) {
    let map = {}
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(map[element]) {
        return false 
    }
    map[element] = true
}
return true
};


// We use an object called map to keep track of the numbers we've seen in the array. If an element appears more than once, it will be marked in the map.

// The loop iterates through the array, and for each element, it checks whether that element is already in the map. If it is, we return false because it's not unique.

// If the loop completes without finding any duplicates, we return true because all elements are unique.

// This code will correctly determine if no number appears more than once in the array.


// Function to check if all elements in an array are unique
function areAllElementsUnique(arr) {
    // Create a Set from the array. Sets automatically remove duplicates,
    // so only unique elements are stored.
    const uniqueElements = new Set(arr);

    // Compare the length of the original array to the size of the Set.
    // If they are equal, it means all elements in the array were unique.
    // If they are not equal, it means there were duplicates.
    return arr.length === uniqueElements.size;
}

// Test arrays
const testArr1 = [2, 8, 7, 5, 4, 3]; // All unique elements
const testArr2 = [-2, 5, -2, 53, 22, 1]; // Contains duplicates

// Testing the function with both arrays and logging the results
console.log(areAllElementsUnique(testArr1)); // Expected output: true
console.log(areAllElementsUnique(testArr2)); // Expected output: false
