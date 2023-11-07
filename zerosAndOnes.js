// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

console.log(zeroesAndOnes("011001")); // true, as there are 3 '0's and 3 '1's
console.log(zeroesAndOnes("0011100")); // true, as there are 3 '0's and 3 '1's
console.log(zeroesAndOnes("010101")); // false, as there are 3 '0's and 3 '1's


var zeroesAndOnes = function(str) {
    let count1 = 0
    let count0 = 0
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '0') {
            count0++
        } else if(str[i] === '1') {
            count1++
        }
    }
    if(count1 === count0) {
        return true
    }
    return false 
};

// Two variables, count0 and count1, are initialized to keep track of the counts of '0' and '1' characters, respectively.

// The for loop iterates through each character in the input string str. It goes through each character one by one.

// Inside the loop, it checks each character. If the character is '0', it increments the count0 variable. If the character is '1', it increments the count1 variable.

// After the loop has gone through all the characters in the string, it checks if the counts of '0's and '1's are equal by comparing count0 and count1. If they are equal, it means that the string contains an equal number of '0's and '1's, and the function returns true.

// If the counts are not equal, the function returns false.