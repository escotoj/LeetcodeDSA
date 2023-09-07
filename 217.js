// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// const nums = [1,2,3,1]
// Output: true
// Example 2:

const nums = [1,2,3,4]
// Output: false
// Example 3:

// const nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// declare a fucntion and name it, pass the paramiter nums which is an array
// create a changing varibel to equal nums.sort in order to organize numbers in chrono order
// loop throught the array and create conditions within
// the condition being that if any iteration in newArray is equal to that  
// create a conditonal statement where if nums[i] = nums[i] - 1 return true

var containsDuplicate = function(nums) {
    let newArray = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if(newArray[i] === nums[i + 1]) {
            return true
        } else {
            return false
        }
    } 

    };

    console.log(containsDuplicate(nums))

// though the above example passes all cases ChatGPT says its not the best way to solve. 

// Below is a modified version that also passes all cases but with a longer runtime
// I used the `.slice()` method to create a copy of the original `nums` array before sorting it to avoid modifying the original array. Here's why it's a good practice to use `.slice()` in this context:

// 1. **Preservation of Original Data**: When you sort an array using the `.sort()` method directly on the original array, it rearranges the elements in place. If you have other parts of your code that rely on the original order of the array, sorting it in place can lead to unintended consequences. By using `.slice()`, you create a shallow copy of the array, leaving the original array unchanged.

// 2. **Isolation of Sorting**: Sorting is an operation that modifies the array it's applied to. By working on a copy, you isolate the sorting operation, ensuring that it doesn't affect other parts of your code or data that depend on the original order.

// Here's the modified code for clarity:

// ```javascript
// function containsDuplicate(nums) {
//     let sortedArray = nums.slice().sort((a, b) => a - b);

//     for (let i = 0; i < sortedArray.length - 1; i++) {
//         if (sortedArray[i] === sortedArray[i + 1]) {
//             return true;
//         }
//     }

//     return false;
// }
// ```

// In this code, `nums.slice()` creates a new array that contains the same elements as the original `nums` array, and then you sort this new array, leaving the original `nums` array untouched.