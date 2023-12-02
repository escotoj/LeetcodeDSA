// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function (num) {
    const key = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let result = '';
  
    for (const [symbol, value] of Object.entries(key)) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
  
    console.log(result);
    return result
  };


  console.log(intToRoman(5));    // Output: "V"
console.log(intToRoman(9));    // Output: "IX"
console.log(intToRoman(2024)); // Output: "MMXXIV"

//   While Loop for Deduction:
// Inside the loop, there is a while loop that continues as long as the given number (num) is greater than or equal to the current numeric value associated with the symbol.
// javascript
// Copy code
// while (num >= value) {
//   result += symbol; // Concatenate the symbol to the result
//   num -= value;     // Deduct the value from the number
// }
// This loop is crucial because it repeatedly subtracts the largest possible value associated with a symbol from the given number and appends the corresponding symbol to the result. This ensures that the Roman numeral representation is built in a way that minimizes the number of symbols used.


// Alternative way to solve using two arrays instead of one object
// var intToRoman = function(num) {
//     const numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     const numeralSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
//     let result = '';
    
//     for (let i = 0; i < numeralValues.length; i++) {
//       while (num >= numeralValues[i]) {
//         result += numeralSymbols[i];
//         num -= numeralValues[i];
//       }
//     }
  
//     return result;
//   };