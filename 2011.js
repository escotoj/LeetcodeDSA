// 2011. Final Value of Variable After Performing Operations

// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.
// Example 3:

// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.
 
// FIRST ATTEMPT 09/15
// got stuck on the for-loop
//  var finalValueAfterOperations = function(operations) {
//     let x = 0;
//     for(let i = 0; i < operations.length; i++) {
//         x += operations[i] + x
//     }
//     return x
// };

// SOLUTION from leetcode
// const finalValueAfterOperations = (operations) => {
//     let x = 0;
//     for (let i = 0; i < operations.length; i++) {
//       if (operations[i] === "X++" || operations[i] === "++X") {
//         x++;
//       } else {
//         x--;
//       }
//     }
//     return x;
//   };

// Second attempt after glancing at solution
// var finalValueAfterOperations = function(operations) {
//     let x = 0;
//     for(let i = 0; i < operations.length; i++) {
//      if(operations[i] == "++X" || operations[i] == "X++") {
//          x++
//      } else {
//          x--
//      }
//     }
//     return x
// };

// the strings inside operation are only strings and unless they are taken out of strings they dont do any operations
// we set up a conditional statement checking for the strings and we set the corresponding operation for that string. we can use the == or === since they are an exact match in data types
// with the variable we created earlier we apply the ++ or -- to it 

function fizzBuzz(n) {
    let results = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBuzz");
        } else if (i % 3 === 0) {
            results.push("Fizz");
        } else if (i % 5 === 0) {
            results.push("Buzz");
        } else {
            results.push(i);
        }
    }
    return results;
}

// Example usage:
console.log(fizzBuzz(15));