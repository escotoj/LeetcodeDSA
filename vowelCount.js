const str = "Hello, I am a Software Engineer"

// var vowelCount = function(str) {
// let vowels = "aeiou";
// let numVowels = 0;
// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//         numVowels++;
// }
// };
// // console.log(numVowels)
// return numVowels;
// }


//use a for loop to iterate through a string to find specific letters and then count them
// first we set our starting variables, one to count the vowels set to starting ppoint of zero
// we set the variable for the vowels we are targeting but we must keep in mind capitalization
// we use the loop to breakdown the string into individual letters
//inside the loop we use a conditional if statement that will check if vowels includes the character in the vowels list
// if the condition is met we increment the vowel counter



function vowelCount (str) {
let vowels = 'aeiou'
let vowelNums = 0;
   for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i].toLowerCase())) {
        vowelNums++
    }
    
   }
   return vowelNums
    
}
console.log(vowelCount(str))