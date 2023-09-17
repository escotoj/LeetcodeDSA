// Write code to create a function that returns the factorial of `num`



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