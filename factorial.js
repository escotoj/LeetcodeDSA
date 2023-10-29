// Write code to create a function that returns the factorial of `num`
// A factorial is a mathematical operation that represents the product of all positive integers from 1 to a given non-negative integer, often denoted with an exclamation mark (!). The factorial of a non-negative integer "n" is calculated as follows:

// n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1

// In other words, the factorial of a number is the result of multiplying that number by all positive integers less than itself down to 1.

// Here are a few examples to illustrate factorials:

// 5! (read as "five factorial") is calculated as: 5 × 4 × 3 × 2 × 1 = 120
// 4! (read as "four factorial") is calculated as: 4 × 3 × 2 × 1 = 24
// 0! (zero factorial) is defined as 1 by convention.
// Factorials are often used in mathematics, especially in combinatorics and probability calculations. They have applications in various fields, including permutations, combinations, binomial coefficients, and many other mathematical and scientific areas. Factorials grow rapidly as the input value increases, and they become quite large for larger values of "n."


var factorial = function(num) {
    let factors = 1
    console.log(num)
    for(let i = 1; i <= num; i++) {
        factors *= i
    }
    return factors;
};



// The function factorial is defined, which takes a single argument num. This argument represents the number for which we want to calculate the factorial.

// Inside the function, we initialize a variable factors to 1. This is important because the factorial of any number starts at 1. If we set it to 0, the result would always be 0.

// We use a for loop to iterate from 1 to num. The loop variable i starts at 1 and increments by 1 in each iteration until it reaches the value of num.

// Inside the loop, we update the factors variable by multiplying it with the current value of i. This is how we calculate the factorial. In each iteration, we multiply factors by the current value of i, which effectively accumulates the product of all integers from 1 to num.

// The loop continues until i is greater than num, at which point we have multiplied all the numbers from 1 to num into the factors variable.

// Finally, we return the factors variable, which now holds the factorial of the input num.

// Here's an example to illustrate how this function works:

// If you call factorial(5), it will go through the loop as follows:

// Initially, factors is 1.
// In the first iteration (i = 1), factors becomes 1 * 1 = 1.
// In the second iteration (i = 2), factors becomes 1 * 2 = 2.
// In the third iteration (i = 3), factors becomes 2 * 3 = 6.
// In the fourth iteration (i = 4), factors becomes 6 * 4 = 24.
// In the fifth and final iteration (i = 5), factors becomes 24 * 5 = 120.
// So, factorial(5) returns 120, which is the correct factorial of 5.

// NOTES: cant use reduce or foreach becuase nums is not an array, rather it is a single number meaning that using a for loop is a must. on top of that, the forloop has to be modified like this for(let i = 1; i <= num; i++)

// This loop is designed to iterate from 1 to a specified value (num) with each iteration incrementing the loop variable i by 1. It's commonly used when you want to perform a specific number of iterations or operations.
// VS
// for (let index = 0; index < array.length; index++):
// This loop is designed to iterate through the elements of an array. It starts at index 0 and continues until the loop variable index is less than the length of the array. This loop is used to access and process each element within an array.
// Here are some key differences between the two loops:

// The first loop is used when you want to repeat a block of code a specific number of times, while the second loop is used to traverse through the elements of an array.

// The loop variable in the first loop (i) typically represents the iteration number, starting from 1 and increasing by 1 in each iteration. In the second loop, the loop variable (index) represents the index of the array and starts from 0, incrementing by 1 in each iteration.

// The termination condition in the first loop depends on a numeric value (num) that you specify, while the second loop's termination condition depends on the length of an array (array.length).