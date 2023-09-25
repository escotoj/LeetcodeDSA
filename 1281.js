// 1281. Subtract the Product and Sum of Digits of an Integer

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// const  n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

const n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    let string = n.toString()
    let splitString = string.split('')
    console.log('array', splitString)
    for (let i = 0; i < splitString.length; i++) {
        const element = splitString[i]++;
        sum += element
        product *= element

        console.log(element)

        
    }  
    console.log(sum)  
    console.log(product) 
    let result = product - sum
    console.log(result)
    return result
};

subtractProductAndSum(n)