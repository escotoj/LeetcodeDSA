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


//solution using new Map() but also uses new Set()

var uniqueMorseRepresentations = function(words) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  let map = new Map();
  //we use map to create and object so that letters correspond with the appropriate code in a key-value pair 
  let decoded = [];
  // where we will push the words in morse code format to later count for the final answer 

  for (let i = 0; i < alpha.length; i++) {
      map.set(alpha[i], morse[i]);
      // we loop in order to set the letters with with the code
  }

  for (let i = 0; i < words.length; i++) {
    // we set up to begin decoding by breaking down the words in the 'words' array
      let s = words[i].split('');
      // we target each word and than we turn each work into an array by separating each character
      let decWord = '';
      for (let j = 0; j < s.length; j++) {
        // we loop each character and match it to the character in the key of map
          decWord += map.get(s[j]);
      }
      decoded.push(decWord);
      // we push each decoded word to the array we created
  }

  let uniqueTransformations = new Set(decoded);
  // Set is sort of like an array but does not use indexes
// we use new Set() to target the unique values in the decoded array only
  return uniqueTransformations.size;
};


// In JavaScript, the Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references.

// Unlike arrays or objects, Set does not have indices, and you cannot access elements using an index. You interact with the elements through methods like add, has, delete, and iteration.

// In summary, a Set in JavaScript is a data structure that provides a collection of unique values and offers methods for adding, removing, checking existence, and iterating over these values. It's a handy tool for scenarios where uniqueness is a priority.