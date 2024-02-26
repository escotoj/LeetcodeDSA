// String manupulation for verifying wether a word is the same reversed. 
// Uses three built in JS methods, spit, which breaks up the string into individual letters by passing an empty space in the parameter
// reverse, us used to reverse the order of the new set of characters. 
// join is used to unite the each character by passing an empty char. 
// we us a if statement to check the boolean. 


var isPalindrome = function(str) {
    let newStr = str.split("")
    console.log(newStr)
    let newArray = newStr.reverse()
    console.log(newArray)
    let newNew = newArray.join('')
    console.log(newNew)
    if(newNew === str) {
        return true
    } else {
        return false
    }

};

function isPalindrome(word) {
    // Split the word into individual letters, reverse the array of letters,
    // and then join them back together to form a new string
    const reversedWord = word.split('').reverse().join('');
  
    // Check if the original word is the same as the reversed word
    if (word === reversedWord) {
      return true; // The word is a palindrome
    } else {
      return false; // The word is not a palindrome
    }
  }

//   split(''): This method splits the input string word into an array of individual characters by using an empty string ('') as the separator.

//   reverse(): This method reverses the order of elements in the array that was created by split. Since strings are immutable in JavaScript, split is necessary to first convert the string into an array.
  
//   join(''): After reversing the array, join is used to concatenate the array elements back into a single string. Passing an empty string ('') as the argument ensures that the characters are joined without any additional characters inserted between them.
  
//   Comparison: The function then compares the original string word with reversedWord using a strict equality operator (===). If they are identical, the function returns true, indicating that word is a palindrome. Otherwise, it returns false.
  