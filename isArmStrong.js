// Write a function that takes a positive integer and returns true if the integer is an armstrong number, 
// else return false. To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number and add the digits. 
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:


var isArmstrong = function(num) {
    // Convert the number to a string to find its length
    var numStr = num.toString();
    var length = numStr.length;
  
    // Calculate the sum of each digit raised to the power of the length
    var sum = 0;
    for (var i = 0; i < length; i++) {
      sum += Math.pow(parseInt(numStr[i]), length);
    }
  
    // Check if the sum equals the original number
    return sum === num;
  };
  

  console.log(isArmstrong(153));  // true, as 1^3 + 5^3 + 3^3 = 153
console.log(isArmstrong(1634)); // true, as 1^4 + 6^4 + 3^4 + 4^4 = 1634
console.log(isArmstrong(123));  // false, as 1^3 + 2^3 + 3^3 ≠ 123

// An Armstrong number (also known as a narcissistic number, pluperfect digital invariant, or pluperfect number) is a number that is the sum of its own digits, each raised to the power of the number of digits. In other words, you take each digit of the number, raise it to the power of the total number of digits in the number, and then sum up these values. If the result is equal to the original number, then it's an Armstrong number.

// Here's the breakdown of the provided JavaScript code:

// The num.toString() converts the input number to a string to find its length.
// The variable length is assigned the length of the string representation of the number.
// The for loop iterates through each digit of the number.
// Inside the loop, Math.pow(parseInt(numStr[i]), length) calculates each digit raised to the power of the length.
// The results are summed up in the variable sum.
// The function returns true if sum is equal to the original number, indicating it's an Armstrong number, and false otherwise.