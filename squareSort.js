// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    let arr2 = arr.sort((a,b) => a - b)
    let newArr = []

    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i] * arr2[i])
    }

    return newArr
};

// A new empty array newArr is created. Then, there's a loop that iterates through each element of the sorted array (arr2). In each iteration, the square of the current element is calculated (arr2[i] * arr2[i]) and pushed into the newArr.

// The function returns the newly created array containing the squares of the numbers from the input array, sorted in ascending order.

// So, in summary, this function takes an array of integers, squares each element, sorts the squared values in ascending order, and returns the resulting array. Just remember to correct the sorting logic to a - b for proper numerical sorting.