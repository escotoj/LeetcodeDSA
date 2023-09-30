// 2520. Count the Digits That Divide a Number

// Companies
// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Example 1:
// const num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.

// Example 2:
const num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

// Example 3:
// const num = 1248;
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

// const num = 121
// first try under 15 minutes 09/29
var countDigits = function (num) {
    let count = 0
  let arr = num.toString().split("");
  console.log(arr);
//   let length = arr.length;
for (let i = 0; i < arr.length; i++) {
    if(num % arr[i] === 0) {
        count++

    } 

}
console.log(count);
};

countDigits(num);
