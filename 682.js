// 682. Baseball Game

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// Example 2:
// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

// Example 3:
// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.
 
// using a stack with pop, reduce and parseInt to meet the criteria 
var calPoints = function (operations) {
    // the stack will allow us to remove elements from the stack
    let stack = []
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C') {
            stack.pop()
            // pop removes element from the front of the stack 
        } else if (operations[i] === 'D') {
            stack.push(2 * stack[stack.length - 1])
        } else if (operations[i] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        } else {
            stack.push(parseInt(operations[i]))
        }
    }
    console.log(stack)
    //best practice to always add a 0 at the end of a reduce method
    return stack.reduce((a, b) => a + b,0)

};


//using a switch case statement alternative 
var calPoints = function(ops) {
    const stack = [];
    
    for(let i=0; i<ops.length; i++){
        
        switch(ops[i]){
            case 'D': {
                // Record a new score that is double the previous score. 
                // It is guaranteed there will always be a previous score.
                const last = stack[stack.length - 1];
                stack.push(last * 2);
                break;
            }
                
            case 'C':{
                // Invalidate the previous score, removing it from the record. 
                // It is guaranteed there will always be a previous score.
                stack.pop();
                break;
            }
                
            case '+': {
                // Record a new score that is the sum of the previous two scores. 
                // It is guaranteed there will always be two previous scores.
                const one = stack[stack.length - 2];
                const two = stack[stack.length - 1];
                stack.push(one + two);
                break;
            }
                
            default: {
                stack.push(Number(ops[i]))
                break;
            }
        }
    }
    
    return stack.reduce((prev, cur) => prev + cur, 0);
};


// Understanding the switch Statement
// A switch statement in JavaScript evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case. It's a useful way to simplify code that requires multiple if-else if conditions.

// In this problem, the switch statement is used to differentiate between the types of operations represented by the strings in ops array:

// 'D': Doubles the last score and adds it to the stack.
// 'C': Removes the last score from the stack.
// '+': Adds the last two scores and puts the result into the stack.
// default: For numbers (as strings), converts them to Number and adds them to the stack.
// Step-by-Step Explanation
// Initialization: A stack array is created to keep track of the scores.

// Looping through ops: The function iterates over each operation in the ops array with a for loop.

// Handling Operations with switch:

// 'D' (Double): It finds the last score in the stack (stack[stack.length - 1]), doubles it, and pushes the result back onto the stack.
// 'C' (Cancel): It removes the last score from the stack using pop(), effectively "cancelling" the last operation.
// '+' (Sum of Last Two Scores): It retrieves the last two scores from the stack, adds them together, and pushes the sum onto the stack.
// default (Number): If the operation is not 'D', 'C', or '+', it's treated as a score. The score is converted from string to number using Number(ops[i]) and then pushed onto the stack.
// Calculating the Total Score: After processing all operations, the total score is calculated by summing up all the values in the stack. This is done using the reduce method, which iterates over each element in the stack, accumulating a total, which is then returned.

// Example
// Given ops = ["5","2","C","D","+"], the function works as follows:

// Push 5 and 2 onto the stack: stack = [5, 2]
// 'C' removes the last score: stack = [5]
// 'D' doubles the last score and adds it: stack = [5, 10]
// '+' adds the last two scores and pushes the sum: stack = [5, 10, 15]
// The total score is the sum of stack = [5, 10, 15], which equals 30.

// The switch statement provides a clear structure for handling each type of operation, making the code easier to read and maintain compared to multiple if-else conditions.