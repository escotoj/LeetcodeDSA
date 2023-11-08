// Write code to merge two sorted arrays into a new sorted array

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];

var mergeSorted = function (arr1, arr2) {
    let merge = arr1.concat(arr2)
    console.log(merge)
    let result = merge.sort((a,b) => a - b)
    return result
};

// In this code, we use the concat method to merge the two arrays, and then we use the sort method to sort the merged array in ascending order. This will give you a new sorted array containing all the elements from both input arrays.

// ________________________
// GPT Solution using while loops and two loops

// var mergeSorted = function(arr1, arr2) {
//     let merged = [];
//     let i = 0; // Pointer for arr1
//     let j = 0; // Pointer for arr2

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             merged.push(arr1[i]);
//             i++;
//         } else {
//             merged.push(arr2[j]);
//             j++;
//         }
//     }

//     // If there are remaining elements in arr1, add them to the merged array
//     while (i < arr1.length) {
//         merged.push(arr1[i]);
//         i++;
//     }

//     // If there are remaining elements in arr2, add them to the merged array
//     while (j < arr2.length) {
//         merged.push(arr2[j]);
//         j++;
//     }

//     return merged;
// };

// The code then enters a while loop with the condition i < arr1.length && j < arr2.length, which means it will continue looping as long as there are elements left to compare in both arr1 and arr2.

// Inside the loop, it compares the elements at the current positions i and j in arr1 and arr2:

// If arr1[i] is smaller than arr2[j], it means that the element from arr1 should be added to the merged array, so it's pushed onto the merged array using merged.push(arr1[i]), and i is incremented by 1 to move to the next element in arr1.
// If arr2[j] is smaller than or equal to arr1[i], it means that the element from arr2 should be added to the merged array, so it's pushed onto the merged array using merged.push(arr2[j]), and j is incremented by 1 to move to the next element in arr2.
// After the loop, there might be remaining elements in either arr1 or arr2 that haven't been added to the merged array. Two more while loops are used to add any remaining elements from arr1 and arr2 to the merged` array.

// Finally, the merged array is returned, which contains all the elements from both arr1 and `arr2, sorted in ascending order.