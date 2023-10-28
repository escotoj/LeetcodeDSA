// 2798. Number of Employees Who Met the Target

// There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

// The company requires each employee to work for at least target hours.

// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

// Return the integer denoting the number of employees who worked at least target hours.

 

// Example 1:

// const hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
// Example 2:

// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Explanation: The company wants each employee to work for at least 6 hours.
// There are 0 employees who met the target.

// create a variable that will return the results as a integer
// create a for-loop that will run through each employee
//inside the loop there will be an if statement that will check if target contains in the hour array and if it does we will increment result.
// outside the for loop we return the results 

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let results = 0
    for (let i = 0; i < hours.length; i++) {
        if(hours[i] >= target ) {
            results++
        }
    }
    return results
};

console.log(numberOfEmployeesWhoMetTarget(hours, target))



// FOR-EACH SOLUTION 
// rather than doing a full loop and check for [i] we check by el which is [i]

// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//     let count = 0;
//     hours.forEach(ele => {
//         if (ele >= target) {
//             count++;
//         }
//     })
//     return count;
// };

// ONE LINE SOLUTION USING THE FILTER FUNCTION 
// var numberOfEmployeesWhoMetTarget = function(hours, target) {
//     return hours.filter(i => i >= target).length
// };


// Using the filter Method:

// The core of this function is the use of the filter method on the hours array.
// Filtering Employees Who Met the Target:

// The filter method is applied to the hours array, and a callback function is provided: i => i >= target. This callback function checks whether each element i (which represents the number of hours worked by an employee) is greater than or equal to the specified target. If this condition is met, the employee's hours are considered to have met the target, and they are included in the filtered result.
// Filtered Array:

// The filter method returns a new array containing only the elements that satisfy the condition (i >= target). This new array contains the hours worked by employees who met or exceeded the target.
// Determining the Number of Employees:

// Finally, the length property is used to determine the number of employees who met the target. This length corresponds to the number of elements in the filtered array, and it directly represents the count of employees who worked at least the target number of hours.