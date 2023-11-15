// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// const sen = "Hello world123 567"
const sen = "fun&!! time"

// function LongestWord(sen) {
//     let abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let currentWord = '';
//     let longestWord = '';
  
//     for (let i = 0; i < sen.length; i++) {
//       if (abc.includes(sen[i])) {
//         currentWord += sen[i];
//       } else {
//         if (currentWord.length > longestWord.length) {
//           longestWord = currentWord;
//         }
//         currentWord = '';
//       }
//     }

//     if (currentWord.length > longestWord.length) {
//       longestWord = currentWord;
//     }
  
//     return longestWord;
//   }
// When a non-alphabetic character is encountered, it signifies the end of the current word. If the length of the currentWord is greater than the length of the longestWord encountered so far, it updates longestWord with the content of currentWord. Then, currentWord is reset to an empty string to start forming a new word.
// After the loop completes, it checks if the last word (if any) is longer than the previously recorded longestWord. If so, it updates longestWord accordingly.
  
// USINg TWO Loops
function LongestWord(sen) {
    let nonLet = ['!', '&']
    let newSen = ''
    for (let i = 0; i < sen.length; i++) {
        if (!nonLet.includes(sen[i])) {
            newSen += sen[i]
        } 
    }
    let words = newSen.split(' ')
    let maxLength = 0
    let longest = ''
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.length > maxLength) { 
            maxLength = word.length;
            longest = word
            
        }
    }
    console.log(longest)
    return longest

}
LongestWord(sen)
