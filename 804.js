// 804. Unique Morse Code Words
// Companies
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Example 1:

// const words = ["gin", "zen", "gig", "msg"];
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".
// Example 2:

const words = ["a"]
// Output: 1

// stuck on the map part, used gpt to assist with logic using only for-loops. 
// it made use of an obkect to match key value pairs, and used ne Set() to identify unique values (built in JS function)
var uniqueMorseRepresentations = function (words) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let arr = {};

  for (let i = 0; i < alpha.length; i++) {
    arr[alpha[i]] = morse[i];
  }
  // let map = [arr, morse]
  console.log(arr);
  let numTrans = new Set() 

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    let trans =  ''
    for (let j = 0; j < element.length; j++) {
        trans += arr[element[j]];
    }
    console.log(trans);
numTrans.add(trans)
  }
  console.log(numTrans.size)
};
uniqueMorseRepresentations(words);


// leetcode solution where the user manually sets each key value pair rather than using a for-loop to do so. 
// const uniqueMorseRepresentations = (words) => {
//     const morseMap = {
//       a: ".-",
//       b: "-...",
//       c: "-.-.",
//       d: "-..",
//       e: ".",
//       f: "..-.",
//       g: "--.",
//       h: "....",
//       i: "..",
//       j: ".---",
//       k: "-.-",
//       l: ".-..",
//       m: "--",
//       n: "-.",
//       o: "---",
//       p: ".--.",
//       q: "--.-",
//       r: ".-.",
//       s: "...",
//       t: "-",
//       u: "..-",
//       v: "...-",
//       w: ".--",
//       x: "-..-",
//       y: "-.--",
//       z: "--..",
//     };
  
//     const morseSet = new Set();
  
//     for (let i = 0; i < words.length; i++) {
//       let morseWord = '';
//       const word = words[i];
  
//       for (let j = 0; j < word.length; j++) {
//         const letter = word[j];
//         morseWord += morseMap[letter];
//       }
  
//       morseSet.add(morseWord);
//     }
  
//     return morseSet.size;
//   };
