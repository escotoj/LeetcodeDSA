var smallestDifference = function (arr1, arr2) {
    let resultPair = [];
    let minDifference = Infinity;
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        let currentDifference = Math.abs(arr1[i] - arr2[j]);

        if (currentDifference < minDifference) {
            minDifference = currentDifference;
            resultPair = [arr1[i], arr2[j]];
        }

        // Move the pointer of the array with the smaller element
        if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return resultPair;
};

// Example usage:
var arr1 = [1, 3, 8, 15, 18];
var arr2 = [2, 7, 12, 14];

console.log(smallestDifference(arr1, arr2));


// resultPair: A variable to store the pair of numbers with the smallest difference.
// minDifference: A variable to keep track of the smallest difference found.
// i and j: Pointers for arrays arr1 and arr2 respectively.

// The function uses a while loop to iterate through both arrays until one of them is exhausted (i < arr1.length && j < arr2.length).
// It calculates the absolute difference between the current elements from arr1 and arr2.

// If the current difference is smaller than the minimum difference found so far, update minDifference and resultPair with the current elements from arr1 and arr2.

// Move the pointer of the array that has the smaller current element. This ensures that we explore combinations of elements with the potential for a smaller difference.