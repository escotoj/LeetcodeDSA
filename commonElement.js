// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    let num = 0
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            if(arrB[j] === arrA[i]) {
                num = arrA[i]
            }
            
        }
    }
    return num
};

// This function uses a nested loop structure to iterate through each element in arrA and checks if it exists in arrB. Once a common element is found, it immediately returns it. If no common element is found, it returns null or any default value to signify the absence of a common element.