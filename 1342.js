// 1342. Number of Steps to Reduce a Number to Zero

// Companies
// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:
// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.

//had an idea that it need to use a while loop but stumbled on the implementation. 
var numberOfSteps = function(num) {
    let steps = 0
while(num > 0) {
    if(num % 2 === 0) {
    num = num/2
    steps++
} else {
    num--
    steps++
}
}
    return steps
};

// While Loop:
// A while loop is a control flow statement in programming that allows a block of code to be executed repeatedly as long as a specified condition is true.

// while (num > 0) {: Executes a loop as long as num is greater than 0.
// Condition Inside the Loop:

// if (num % 2 === 0) {: Checks if num is even.
// If true: Divides num by 2 (num = num / 2).
// If false: Subtracts 1 from num (num--).

// Condition Check:

// The condition is evaluated before the loop runs. It is a boolean expression that determines whether the loop should execute or not.
// If the condition is initially false, the code inside the loop will never execute.
// Entering the Loop:

// If the condition is true, the code inside the loop is executed.
// The loop continues to run as long as the condition remains true.
// Execution of Code Inside the Loop:

// The code inside the loop is executed.
// This can include any statements or operations that you want to repeat.
// Increment/Decrement Variables (if applicable):

// If your loop involves a counter or a variable that needs to change with each iteration, make sure to update it inside the loop to eventually make the condition false.
// Condition Check (Again):

// After the code inside the loop is executed, the condition is checked again.
// If the condition is still true, the loop runs again, repeating steps 3-5.
// If the condition is false, the loop exits, and the program continues with the next statement after the loop.
// Continuation or Exit:

// If the condition is still true, the loop continues. If the condition is false, the loop exits, and the program proceeds.

// Example of while loop
// let count = 0;

// while (count < 5) {
//     console.log("Count: " + count);
//     count++;
// }


