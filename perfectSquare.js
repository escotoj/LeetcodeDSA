// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    if (num < 0) {
        return false; // Negative numbers can't be perfect squares
    }

    // Use a loop to find the square root without Math.sqrt
    for (let i = 0; i * i <= num; i++) {
        if (i * i === num) {
            return true;
        }
    }

    return false;
};

// Example usage:
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(14)); // false

// It checks if the input number is negative, in which case it immediately returns false since negative numbers cannot be perfect squares.

// It then uses a for loop to iterate through all positive integers (i). The loop continues until i * i exceeds the input number.

// Inside the loop, it checks if i * i is equal to the input number. If it is, the function returns true because the input number is a perfect square.

// If the loop completes without finding a perfect square, the function returns false.

// This code provides a straightforward way to determine if a number is a perfect square without using the Math.sqrt method.

